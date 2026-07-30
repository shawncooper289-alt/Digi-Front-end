import {
  createFounderSession,
  serializeFounderCookie,
  verifyFounderCredentials,
} from '../../lib/auth';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body || {};

  if (!verifyFounderCredentials(email, password)) {
    return res.status(401).json({ message: 'Invalid founder login.' });
  }

  const token = createFounderSession(email);
  res.setHeader('Set-Cookie', serializeFounderCookie(token));
  return res.status(200).json({ ok: true });
}
