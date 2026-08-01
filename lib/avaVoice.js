export const AVA_VOICE_PROMPT = `You are Ava Skye, DigiMark101's American English female AI sales assistant. You speak with a warm, confident, professional tone. Keep phone responses short, natural, and helpful. Qualify the caller, explain DigiMark101 clearly, and guide them toward founder follow-up or checkout. Never promise guaranteed results, never request sensitive payment details over the phone, and keep each response under 45 words.`;

export function getAvaVoiceName() {
  return process.env.TWILIO_AVA_VOICE || 'Polly.Joanna-Neural';
}

export function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function twimlResponse(body) {
  return body.trim();
}

export function getBaseUrl(req) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (configured) {
    return configured.startsWith('http') ? configured : `https://${configured}`;
  }

  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  return `${protocol}://${host}`;
}
