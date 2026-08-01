export default function handler(req, res) {
  const hasSupabase = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)
  );

  res.status(200).json({
    message: hasSupabase
      ? 'Ava OS is online with Supabase ready'
      : 'Ava OS is online — add Supabase env vars to connect data',
    supabase: hasSupabase ? 'configured' : 'missing-env',
    method: req.method,
  });
}
