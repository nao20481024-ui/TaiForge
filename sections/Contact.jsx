'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles';
import { contactIntents, resolveIntent } from '../constants';
import { validateContact } from '../lib/contact';

const fieldClass = 'w-full rounded-[16px] border border-white/15 bg-primary-black px-4 py-3 text-[16px] leading-[24px] text-white outline-none transition-colors placeholder:text-white/55 focus:border-forge focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sky';

const emptyFields = {
  name: '',
  email: '',
  company: '',
  requirements: '',
};

const Contact = ({ initialIntent = '' }) => {
  const errorRef = useRef(null);
  const successRef = useRef(null);
  const [intent, setIntent] = useState(resolveIntent(initialIntent));
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState('idle');
  const [deliveredLabel, setDeliveredLabel] = useState('');

  useEffect(() => {
    setIntent(resolveIntent(initialIntent));
    setStatus((current) => (current === 'success' ? 'idle' : current));
  }, [initialIntent]);

  useEffect(() => {
    if (formError && errorRef.current) {
      errorRef.current.focus();
    }
  }, [formError]);

  useEffect(() => {
    if (status === 'success' && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const updateField = (key) => (event) => {
    const { value } = event.target;
    if (key === 'intent') setIntent(value);
    else setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = {
      ...fields,
      intent,
      faxNumber: form.faxNumber.value,
    };
    const result = validateContact(payload);

    if (!result.ok) {
      setStatus('error');
      setDeliveredLabel('');
      setErrors(result.errors || {});
      setFormError(result.spam
        ? 'The request was not delivered.'
        : 'Please correct the highlighted fields. The request was not delivered.');
      return;
    }

    setErrors({});
    setFormError('');
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(result.value),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || data?.delivered !== true) {
        setStatus('error');
        setDeliveredLabel('');
        setErrors(data?.errors || {});
        setFormError(data?.error || 'The request was not delivered.');
        return;
      }

      setFields(emptyFields);
      setDeliveredLabel(result.value.intentLabel);
      setStatus('success');
      setFormError('');
    } catch {
      setStatus('error');
      setDeliveredLabel('');
      setFormError('The request did not reach the server, so it was not delivered.');
    }
  };

  const submitLabel = intent === 'health-check' ? 'Request an AI Health Check' : 'Request a Quote';

  return (
    <section className={`${styles.paddings} relative z-10`} id="contact">
      <div className={`${styles.innerWidth} mx-auto grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16`}>
        <div className="max-w-[560px]">
          <p className="font-normal text-[14px] uppercase tracking-[0.2em] text-forge">Start the conversation</p>
          <h2 id="contact-heading" className="mt-[12px] font-bold text-[40px] leading-[48px] text-white md:text-[64px] md:leading-[76px]">
            Let&apos;s look after the AI you already run.
          </h2>
          <p className="mt-[20px] font-normal text-[16px] leading-[26px] text-secondary-white md:text-[20px] md:leading-[32px]">
            Tell us which agents, automations, or integrations need attention. A health check is the usual starting point. You can also ask for a quote on a support plan.
          </p>
          <p className="mt-6 font-normal text-[14px] leading-[22px] text-secondary-white">
            You will see a confirmation only after the request is delivered.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#121a24] p-6 sm:p-8">
          {status === 'success' ? (
            <div ref={successRef} tabIndex={-1} role="status" className="flex flex-col gap-4 outline-none">
              <h3 className="font-bold text-[28px] leading-[36px] text-white">Request delivered</h3>
              <p className="font-normal text-[16px] leading-[26px] text-secondary-white">
                Your {deliveredLabel} request was delivered to TAI Forge.
              </p>
              <button
                type="button"
                className={`${styles.secondaryButton} self-start`}
                onClick={() => {
                  setStatus('idle');
                  setDeliveredLabel('');
                }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form action="/api/contact" method="post" aria-labelledby="contact-heading" className="relative flex flex-col gap-5 [color-scheme:dark]" noValidate onSubmit={handleSubmit}>
              {formError ? (
                <p
                  ref={errorRef}
                  tabIndex={-1}
                  role="alert"
                  className="rounded-[16px] border border-[#ffb4a8]/40 bg-[#ffb4a8]/10 px-4 py-3 font-normal text-[15px] leading-[24px] text-[#ffd7d1] outline-none"
                >
                  {formError}
                </p>
              ) : null}

              <div className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="faxNumber">Fax number</label>
                <input id="faxNumber" name="faxNumber" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="intent" className="mb-2 block font-normal text-[14px] text-white">Request</label>
                <select
                  id="intent"
                  name="intent"
                  value={intent}
                  onChange={updateField('intent')}
                  aria-invalid={Boolean(errors.intent)}
                  aria-describedby={errors.intent ? 'intent-error' : undefined}
                  className={`${fieldClass} ${errors.intent ? 'border-[#ffb4a8]' : ''}`}
                >
                  {contactIntents.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.intent ? <p id="intent-error" className="mt-2 text-[14px] leading-[22px] text-[#ffb4a8]">{errors.intent}</p> : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-normal text-[14px] text-white">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={80}
                    value={fields.name}
                    onChange={updateField('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${fieldClass} ${errors.name ? 'border-[#ffb4a8]' : ''}`}
                  />
                  {errors.name ? <p id="name-error" className="mt-2 text-[14px] leading-[22px] text-[#ffb4a8]">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-normal text-[14px] text-white">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    inputMode="email"
                    placeholder="you@company.com"
                    value={fields.email}
                    onChange={updateField('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${fieldClass} ${errors.email ? 'border-[#ffb4a8]' : ''}`}
                  />
                  {errors.email ? <p id="email-error" className="mt-2 text-[14px] leading-[22px] text-[#ffb4a8]">{errors.email}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block font-normal text-[14px] text-white">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  maxLength={120}
                  value={fields.company}
                  onChange={updateField('company')}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                  className={`${fieldClass} ${errors.company ? 'border-[#ffb4a8]' : ''}`}
                />
                {errors.company ? <p id="company-error" className="mt-2 text-[14px] leading-[22px] text-[#ffb4a8]">{errors.company}</p> : null}
              </div>

              <div>
                <label htmlFor="requirements" className="mb-2 block font-normal text-[14px] text-white">Support requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  rows={6}
                  maxLength={2000}
                  placeholder="Which agents, automations, or integrations need attention, and what is going wrong?"
                  value={fields.requirements}
                  onChange={updateField('requirements')}
                  aria-invalid={Boolean(errors.requirements)}
                  aria-describedby={errors.requirements ? 'requirements-error' : undefined}
                  className={`${fieldClass} resize-y ${errors.requirements ? 'border-[#ffb4a8]' : ''}`}
                />
                {errors.requirements ? <p id="requirements-error" className="mt-2 text-[14px] leading-[22px] text-[#ffb4a8]">{errors.requirements}</p> : null}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
                className={`${styles.primaryButton} w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto`}
              >
                {status === 'submitting' ? 'Sending request...' : submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
