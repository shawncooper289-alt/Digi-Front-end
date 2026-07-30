import crypto from 'crypto';

export const FOUNDER_SESSION_COOKIE = 'founder_session';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function getSessionSecret() {
  return process.env.FOUNDER_SESSION_SECRET || process.env.SESSION_SECRET || '';
}

function base64Url(value) {
  return Buffer.from(value).toString('base64url');
}

function sign(value) {
  return crypto.createHmac('sha256', getSessionSecret()).update(value).digest('base64url');
}

export function isFounderLoginConfigured() {
  return Boolean(process.env.FOUNDER_EMAIL && process.env.FOUNDER_PASSWORD && getSessionSecret());
}

export function verifyFounderCredentials(email, password) {
  if (!isFounderLoginConfigured()) return false;

  const expectedEmail = String(process.env.FOUNDER_EMAIL).trim().toLowerCase();
  const actualEmail = String(email || '').trim().toLowerCase();
  const actualPassword = String(password || '');
  const expectedPassword = String(process.env.FOUNDER_PASSWORD);

  return actualEmail === expectedEmail && actualPassword === expectedPassword;
}

export function createFounderSession(email) {
  if (!getSessionSecret()) {
    throw new Error('Founder login is missing a session secret.');
  }

  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = base64Url(JSON.stringify({ email, expiresAt }));
  return `${payload}.${sign(payload)}`;
}

export function verifyFounderSession(token) {
  if (!token || !getSessionSecret()) return null;

  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;

  const expectedSignature = sign(payload);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (signatureBuffer.length !== expectedBuffer.length) return null;
  if (!crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!session.expiresAt || Date.now() > session.expiresAt) return null;
    return session;
  } catch {
    return null;
  }
}

export function serializeFounderCookie(token) {
  return `${FOUNDER_SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SECONDS}`;
}

export function clearFounderCookie() {
  return `${FOUNDER_SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}
