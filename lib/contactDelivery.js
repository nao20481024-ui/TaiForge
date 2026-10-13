import { extractEmail } from './contact';

const REQUIRED_SETTINGS = [
  {
    key: 'RESEND_API_KEY',
    missing: 'Set RESEND_API_KEY to a Resend API key from https://resend.com/api-keys.',
    valid: (value) => value.startsWith('re_') && value.length >= 8,
    invalid: 'RESEND_API_KEY is set, but it must be a Resend API key beginning with re_.',
  },
  {
    key: 'CONTACT_FROM_EMAIL',
    missing: 'Set CONTACT_FROM_EMAIL to a sender verified in Resend, for example TAI Forge <hello@yourdomain.com>.',
    valid: (value) => Boolean(extractEmail(value)),
    invalid: 'CONTACT_FROM_EMAIL is set, but it must be a verified sender such as TAI Forge <hello@yourdomain.com>.',
  },
  {
    key: 'CONTACT_TO_EMAIL',
    missing: 'Set CONTACT_TO_EMAIL to the inbox that should receive health-check and quote requests, for example hello@yourdomain.com.',
    valid: (value) => Boolean(extractEmail(value)),
    invalid: 'CONTACT_TO_EMAIL is set, but it must be an email address such as hello@yourdomain.com.',
  },
];

const readSetting = (key) => {
  const raw = process.env[key];
  return typeof raw === 'string' ? raw.trim() : '';
};

export const getContactConfigProblem = () => {
  const problems = REQUIRED_SETTINGS.reduce((list, setting) => {
    const value = readSetting(setting.key);
    if (!value) return [...list, setting.missing];
    if (!setting.valid(value)) return [...list, setting.invalid];
    return list;
  }, []);

  if (!problems.length) return '';
  return `Contact delivery is not configured. ${problems.join(' ')}`;
};

const sanitizeProviderMessage = (value) => {
  const text = typeof value === 'string' ? value : JSON.stringify(value ?? '');
  return text.replace(/re_[A-Za-z0-9]+/g, 're_[redacted]').replace(/\s+/g, ' ').trim().slice(0, 400);
};

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

export const deliverContactMessage = async ({
  name,
  email,
  company,
  requirements,
  intentLabel,
}) => {
  const problem = getContactConfigProblem();
  if (problem) {
    return { delivered: false, status: 503, error: problem };
  }

  const text = [
    'New request from the TAI Forge website',
    '',
    `Request: ${intentLabel}`,
    `Name: ${name}`,
    `Work email: ${email}`,
    `Company: ${company}`,
    '',
    'Support requirements:',
    requirements,
  ].join('\n');

  const subjectCompany = company.replace(/[\r\n]+/g, ' ').slice(0, 80);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${readSetting('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: readSetting('CONTACT_FROM_EMAIL'),
        to: [extractEmail(readSetting('CONTACT_TO_EMAIL'))],
        reply_to: email,
        subject: `TAI Forge website request: ${intentLabel} — ${subjectCompany}`,
        text,
        html: `<pre style="font-family: sans-serif; white-space: pre-wrap;">${escapeHtml(text)}</pre>`,
      }),
      signal: AbortSignal.timeout(15000),
    });

    const body = await response.json().catch(() => null);
    if (!response.ok || !body?.id) {
      const providerMessage = sanitizeProviderMessage(body?.message || body?.error || `HTTP ${response.status}`);
      return {
        delivered: false,
        status: 502,
        error: `The message was not delivered. Resend responded: ${providerMessage}. Confirm RESEND_API_KEY, CONTACT_FROM_EMAIL (a verified sender), and CONTACT_TO_EMAIL.`,
      };
    }

    return { delivered: true, status: 200 };
  } catch (error) {
    const cause = sanitizeProviderMessage(error?.message || 'The provider did not respond.');
    return {
      delivered: false,
      status: 502,
      error: `The message was not delivered. The email provider did not confirm receipt (${cause}). Confirm RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL, and that this server can reach https://api.resend.com.`,
    };
  }
};
