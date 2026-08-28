const REQUIRED_SERVER_ENV = [
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'PINECONE_API_KEY',
  'PINECONE_INDEX_HOST',
  'AI_API_KEY',
];

export function requireServerEnv() {
  const missing = REQUIRED_SERVER_ENV.filter((key) => !process.env[key]);
  if (missing.length) throw new Error(`Missing server configuration: ${missing.join(', ')}`);
}

export async function getAuthenticatedUser(request) {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return null;
  const response = await fetch(`${process.env.SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${token}` },
  });
  return response.ok ? response.json() : null;
}

export async function supabase(path, options = {}) {
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return response.status === 204 ? null : response.json();
}

export async function ai(path, body) {
  const response = await fetch(`${process.env.AI_BASE_URL || 'https://api.openai.com/v1'}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.AI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`AI provider request failed: ${response.status}`);
  return response.json();
}

export async function embed(input) {
  const result = await ai('/embeddings', {
    model: process.env.AI_EMBEDDING_MODEL || 'text-embedding-3-small',
    input,
  });
  return result.data[0].embedding;
}

export async function pinecone(path, options = {}) {
  const response = await fetch(`https://${process.env.PINECONE_INDEX_HOST}${path}`, {
    ...options,
    headers: { 'Api-Key': process.env.PINECONE_API_KEY, 'Content-Type': 'application/json', ...options.headers },
  });
  if (!response.ok) throw new Error(`Pinecone request failed: ${response.status}`);
  return response.status === 204 ? null : response.json();
}

export function chunkText(text, size = 1200) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  const chunks = [];
  for (let start = 0; start < normalized.length; start += size) chunks.push(normalized.slice(start, start + size));
  return chunks;
}
