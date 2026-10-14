import { contactIntents } from '../constants';

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const withoutControls = (value, keepLineBreaks) => Array.from(String(value ?? '')).filter((char) => {
  const code = char.charCodeAt(0);
  if (code === 10 || code === 13) return keepLineBreaks;
  if (code === 9) return true;
  return code > 31 && code !== 127;
}).join('');

const cleanLine = (value) => withoutControls(value, false).replace(/\s+/g, ' ').trim();

export const extractEmail = (value) => {
  const source = cleanLine(value);
  const wrapped = source.match(/<([^<>]+)>\s*$/);
  const candidate = (wrapped ? wrapped[1] : source).trim();
  return EMAIL_PATTERN.test(candidate) ? candidate.toLowerCase() : '';
};

export const validateContact = (input) => {
  const source = input && typeof input === 'object' ? input : {};
  const errors = {};

  if (cleanLine(source.faxNumber)) {
    return { ok: false, spam: true, errors: {} };
  }

  const name = cleanLine(source.name);
  const email = extractEmail(source.email);
  const company = cleanLine(source.company);
  const requirements = withoutControls(source.requirements, true).trim();
  const intent = cleanLine(source.intent);
  const knownIntent = contactIntents.find((item) => item.id === intent);

  if (name.length < 2 || name.length > 80) {
    errors.name = 'Enter your name (2–80 characters).';
  }

  if (!email) {
    errors.email = 'Enter a valid email address.';
  }

  if (company.length < 2 || company.length > 120) {
    errors.company = 'Enter your company name (2–120 characters).';
  }

  if (requirements.length < 20 || requirements.length > 2000) {
    errors.requirements = 'Describe the support you need in at least a sentence (20–2000 characters).';
  }

  if (!knownIntent) {
    errors.intent = 'Choose an AI Operations Health Check or a support plan quote.';
  }

  if (Object.keys(errors).length) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      company,
      requirements,
      intent,
      intentLabel: knownIntent.label,
    },
  };
};
