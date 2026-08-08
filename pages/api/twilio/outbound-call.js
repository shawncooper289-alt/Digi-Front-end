import { getBaseUrl } from '../../../lib/avaVoice';

function parseBody(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }

  return req.body || {};
}

function basicAuthAllowed(req) {
  const adminSecret = process.env.TWILIO_OUTBOUND_ADMIN_SECRET;

  if (!adminSecret) return false;

  const provided = req.headers['x-admin-secret'];
  return provided === adminSecret;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!basicAuthAllowed(req)) {
    res.status(401).json({ error: 'Unauthorized outbound call request.' });
    return;
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    res.status(500).json({ error: 'Twilio outbound calling is not configured yet.' });
    return;
  }

  const { to } = parseBody(req);
  const cleanTo = String(to || '').trim();

  if (!cleanTo || !cleanTo.startsWith('+')) {
    res.status(400).json({ error: 'A destination phone number in E.164 format is required, for example +17655551234.' });
    return;
  }

  const baseUrl = getBaseUrl(req);
  const params = new URLSearchParams({
    To: cleanTo,
    From: fromNumber,
    Url: `${baseUrl}/api/twilio/inbound-call`,
  });

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const data = await response.json();

  if (!response.ok) {
    res.status(response.status).json({ error: data.message || 'Twilio outbound call failed.' });
    return;
  }

  res.status(200).json({ callSid: data.sid, status: data.status });
}
