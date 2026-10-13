import { NextResponse } from 'next/server';
import { deliverContactMessage } from '../../../lib/contactDelivery';
import { validateContact } from '../../../lib/contact';

export const dynamic = 'force-dynamic';

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const renderPage = ({ title, message, errors }) => {
  const errorEntries = errors ? Object.entries(errors) : [];
  const details = errorEntries.length
    ? `<ul>${errorEntries.map(([key, value]) => `<li><strong>${escapeHtml(key)}</strong>: ${escapeHtml(value)}</li>`).join('')}</ul>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} | TAI Forge</title>
  <meta name="robots" content="noindex" />
</head>
<body style="margin:0;background:#1A232E;color:#ffffff;font-family:Segoe UI,sans-serif;">
  <main style="max-width:680px;margin:0 auto;padding:64px 24px;">
    <p style="margin:0;letter-spacing:0.16em;text-transform:uppercase;color:#F7953B;font-size:13px;">TAI Forge</p>
    <h1 style="margin:16px 0 0;font-size:40px;line-height:1.15;">${escapeHtml(title)}</h1>
    <p style="color:#c7c7c7;font-size:18px;line-height:1.6;">${escapeHtml(message)}</p>
    ${details}
    <p style="margin-top:32px;"><a href="/#contact" style="display:inline-block;background:#F7953B;color:#1A232E;font-weight:700;text-decoration:none;border-radius:999px;padding:14px 22px;">Back to the form</a></p>
  </main>
</body>
</html>`;
};

const respond = (request, status, payload) => {
  const contentType = request.headers.get('content-type') || '';
  const accept = request.headers.get('accept') || '';
  const asJson = contentType.includes('application/json') || accept.includes('application/json');

  if (asJson) {
    return NextResponse.json(payload, {
      status,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  return new NextResponse(renderPage({
    title: payload.delivered ? 'Request delivered' : 'Request not delivered',
    message: payload.delivered ? 'Your request was delivered to TAI Forge.' : payload.error,
    errors: payload.errors,
  }), {
    status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};

const readPayload = async (request) => {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      return await request.json();
    } catch {
      return null;
    }
  }

  try {
    const form = await request.formData();
    return Object.fromEntries(
      Array.from(form.entries()).filter(([, value]) => typeof value === 'string'),
    );
  } catch {
    return null;
  }
};

export async function POST(request) {
  const payload = await readPayload(request);

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return respond(request, 400, {
      ok: false,
      delivered: false,
      error: 'The request body could not be read. Submit the form again.',
    });
  }

  const result = validateContact(payload);

  if (!result.ok) {
    return respond(request, 400, {
      ok: false,
      delivered: false,
      error: result.spam
        ? 'The request was not delivered.'
        : 'Please correct the highlighted fields. The request was not delivered.',
      errors: result.errors,
    });
  }

  const delivery = await deliverContactMessage(result.value);

  if (!delivery.delivered) {
    return respond(request, delivery.status || 502, {
      ok: false,
      delivered: false,
      error: delivery.error,
    });
  }

  return respond(request, 200, {
    ok: true,
    delivered: true,
  });
}
