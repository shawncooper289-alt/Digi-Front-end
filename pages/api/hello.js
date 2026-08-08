const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY =
  process.env.SUPABASE_ANON_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

async function checkSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return {
      connected: false,
      detail: 'Supabase environment variables are missing.'
    };
  }

  try {
    const response = await fetch(`${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    return {
      connected: response.ok,
      detail: response.ok
        ? 'Supabase REST API is reachable from Vercel.'
        : `Supabase returned HTTP ${response.status}.`
    };
  } catch (error) {
    return {
      connected: false,
      detail: error instanceof Error ? error.message : 'Unable to reach Supabase.'
    };
  }
}

export default async function handler(req, res) {
  const health = await checkSupabase();

  res.status(health.connected ? 200 : 503).json({
    message: health.connected
      ? 'Vercel frontend is connected to the Supabase backend.'
      : 'Vercel frontend is deployed, but Supabase is not connected yet.',
    backend: 'supabase',
    frontend: 'vercel',
    connected: health.connected,
    detail: health.detail,
    method: req.method
  });
}
