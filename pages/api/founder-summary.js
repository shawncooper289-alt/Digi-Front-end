import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function unauthorized(res, message) {
  return res.status(401).json({ error: message });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({ error: 'Founder Hub requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.' });
  }

  const token = req.headers.authorization?.startsWith('Bearer ')
    ? req.headers.authorization.slice('Bearer '.length)
    : null;
  if (!token) return unauthorized(res, 'Missing Supabase session token');

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: userData, error: userError } = await admin.auth.getUser(token);
  if (userError || !userData?.user) return unauthorized(res, userError?.message || 'Invalid Supabase session');

  const { data: profile } = await admin.from('profiles').select('role').eq('id', userData.user.id).maybeSingle();
  if (profile?.role !== 'founder') return res.status(403).json({ error: 'Founder access required.' });

  const requestsQuery = admin
    .from('lead_sale_requests')
    .select('id, package_name, client_name, client_email, status, created_at')
    .order('created_at', { ascending: false })
    .limit(12);
  const checkoutsQuery = admin
    .from('checkout_requests')
    .select('id, customer_name, customer_email, package_name, payment_status, created_at')
    .order('created_at', { ascending: false })
    .limit(12);
  const ordersQuery = admin
    .from('orders')
    .select('id, customer_email, status, total_cents, currency, created_at')
    .order('created_at', { ascending: false })
    .limit(12);
  const onboardingQuery = admin
    .from('client_onboarding')
    .select('id, user_id, status, current_step, milestones, updated_at')
    .order('updated_at', { ascending: false })
    .limit(12);

  const [requests, checkouts, orders, onboarding] = await Promise.all([requestsQuery, checkoutsQuery, ordersQuery, onboardingQuery]);
  const unavailable = [requests, checkouts, orders, onboarding].some((result) => result.error);

  return res.status(200).json({
    email: userData.user.email,
    updatedAt: new Date().toISOString(),
    dataAvailable: !unavailable,
    requests: requests.data || [],
    checkouts: checkouts.data || [],
    orders: orders.data || [],
    onboarding: onboarding.data || [],
  });
}
