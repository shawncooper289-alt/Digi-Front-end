export default function handler(req, res) {
  const hasSupabase = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)
  );

  res.status(200).json({
    message: hasSupabase
      ? 'Ava Skye command center is online'
      : 'Ava Skye command center is in private access mode',
    supabase: hasSupabase ? 'configured' : 'missing-env',
    method: req.method,
  });
}
