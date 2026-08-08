export function readString(value, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback;
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateLead(payload = {}) {
  const name = readString(payload.name);
  const email = readString(payload.email).toLowerCase();
  const company = readString(payload.company);
  const message = readString(payload.message);

  if (!name) return { valid: false, error: 'Name is required.' };
  if (!isEmail(email)) return { valid: false, error: 'A valid email is required.' };

  return {
    valid: true,
    lead: {
      name,
      email,
      company,
      message,
      source: 'vercel-frontend'
    }
  };
}
