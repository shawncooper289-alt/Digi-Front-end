import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

function unauthorized(res, message = 'Unauthorized') {
  return res.status(401).json({ allowed: false, message });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ allowed: false, message: 'Method not allowed' });
  }

  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({
      allowed: false,
      message: 'Server access check is missing SUPABASE_URL and a server-side Supabase service key.',
    });
  }

  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice('Bearer '.length) : null;

  if (!token) {
    return unauthorized(res, 'Missing Supabase session token');
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(token);

  if (userError || !userData?.user) {
    return unauthorized(res, userError?.message || 'Invalid Supabase session');
  }

  const user = userData.user;

  const { data: profile } = await admin
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle();

  const { data: subscription } = await admin
    .from('subscriptions')
    .select('plan')
    .eq('user_id', user.id)
    .in('plan', ['premium', 'founder'])
    .limit(1)
    .maybeSingle();

  const role = profile?.role || null;
  const plan = subscription?.plan || null;
  const allowed = role === 'founder' || plan === 'premium' || plan === 'founder';

  return res.status(allowed ? 200 : 403).json({
    allowed,
    email: user.email,
    role,
    plan,
    message: allowed
      ? 'Founder or premium access confirmed.'
      : 'This account needs profiles.role = founder or subscriptions.plan = premium.',
  });
}
