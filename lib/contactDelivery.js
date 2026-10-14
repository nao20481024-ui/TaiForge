const ACCESS_KEY_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const readWeb3FormsAccessKey = () => {
  const raw = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  return typeof raw === 'string' ? raw.trim() : '';
};

export const getContactConfigProblem = () => {
  const accessKey = readWeb3FormsAccessKey();

  if (!accessKey) {
    return 'Contact delivery is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to the public access key from https://web3forms.com. Create it with the personal or business inbox that should receive form messages.';
  }

  if (!ACCESS_KEY_PATTERN.test(accessKey)) {
    return 'Contact delivery is not configured. NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY must be the public access key copied from https://web3forms.com.';
  }

  return '';
};

const providerMessage = (value) => {
  const text = typeof value === 'string' ? value : JSON.stringify(value ?? '');
  return text
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, '[redacted]')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 400);
};

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
    `Email: ${email}`,
    `Company: ${company}`,
    '',
    'Support requirements:',
    requirements,
  ].join('\n');

  const subjectCompany = company.replace(/[\r\n]+/g, ' ').slice(0, 80);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: readWeb3FormsAccessKey(),
        subject: `TAI Forge website request: ${intentLabel} — ${subjectCompany}`,
        from_name: 'TAI Forge website',
        name,
        email,
        replyto: email,
        company,
        message: text,
      }),
    });

    const body = await response.json().catch(() => null);
    const succeeded = response.ok && body?.success === true;
    if (!succeeded) {
      const detail = providerMessage(body?.message || body?.body?.message || `HTTP ${response.status}`);
      return {
        delivered: false,
        status: response.status || 502,
        error: `The message was not delivered. Web3Forms responded: ${detail}.`,
      };
    }

    return { delivered: true, status: 200 };
  } catch (error) {
    const cause = providerMessage(error?.message || 'The email service did not respond.');
    return {
      delivered: false,
      status: 502,
      error: `The message was not delivered. The email service did not confirm receipt (${cause}).`,
    };
  }
};
