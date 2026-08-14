import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getAdmin() {
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
}

async function getUser(req, admin) {
  const token = req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.slice(7) : null;
  if (!token) return { error: 'Missing Supabase session token.' };
  const { data, error } = await admin.auth.getUser(token);
  return error || !data?.user ? { error: error?.message || 'Invalid Supabase session.' } : { user: data.user };
}

export default async function handler(req, res) {
  const admin = getAdmin();
  if (!admin) return res.status(500).json({ error: 'Onboarding requires Supabase server credentials.' });
  const session = await getUser(req, admin);
  if (session.error) return res.status(401).json({ error: session.error });

  if (req.method === 'GET') {
    const { data, error } = await admin.from('client_onboarding').select('*').eq('user_id', session.user.id).maybeSingle();
    if (error) return res.status(500).json({ error: 'Could not load onboarding progress.' });
    return res.status(200).json({ onboarding: data });
  }

  if (req.method === 'PUT') {
    const body = req.body || {};
    const currentStep = Number.isInteger(body.currentStep) ? Math.max(0, Math.min(5, body.currentStep)) : 0;
    const status = ['in_progress', 'blocked', 'ready_for_launch', 'launched'].includes(body.status) ? body.status : 'in_progress';
    const answers = body.answers && typeof body.answers === 'object' ? body.answers : {};
    const milestones = body.milestones && typeof body.milestones === 'object' ? body.milestones : {};
    const { data, error } = await admin.from('client_onboarding').upsert({
      user_id: session.user.id,
      current_step: currentStep,
      status,
      answers,
      milestones,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' }).select().single();
    if (error) return res.status(500).json({ error: 'Could not save onboarding progress.' });
    return res.status(200).json({ onboarding: data });
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
}
