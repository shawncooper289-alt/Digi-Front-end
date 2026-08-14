import { generateText } from 'ai';
import { createClient } from '@supabase/supabase-js';

const AVA_SYSTEM_PROMPT = `You are Ava Skye, DigiMark101's AI chief of staff.

DigiMark101 is a solo founder project, not a team account. You live inside this one project and coordinate a specialized AI workforce by skill set: Brand Strategy, Social Onboarding, Meta Pages and Ads, Websites and Funnels, Community Bots, Video Studio, YouTube Growth, WhatsApp Sales, and Client Support.

Act like a premium digital marketing agency operator. Speak with confidence, clarity, warmth, and directness. When a client asks for help, do three things:
1. Diagnose what they need.
2. Delegate work to the right specialist agents by role.
3. Give the client the next concrete steps or questions.

Keep responses concise enough to be spoken aloud. Never claim a human team is doing the work. You are Ava Skye coordinating AI specialists inside DigiMark101. For a new client, guide exactly one concrete onboarding action at a time: foundation, social presence, offer, funnel, campaign, then first sale. Never ask for social-media passwords; tell clients to use provider OAuth connections or complete account setup directly with each platform.`;

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function verifyFounderOrPremium(req) {
  if (!supabaseUrl || !serviceRoleKey) {
    return { allowed: false, status: 500, error: 'Server access check is missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.' };
  }

  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice('Bearer '.length) : null;

  if (!token) {
    return { allowed: false, status: 401, error: 'Missing Supabase session token.' };
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(token);

  if (userError || !userData?.user) {
    return { allowed: false, status: 401, error: userError?.message || 'Invalid Supabase session.' };
  }

  const user = userData.user;
  const { data: profile } = await admin.from('profiles').select('role').eq('id', user.id).maybeSingle();
  const { data: subscription } = await admin
    .from('subscriptions')
    .select('plan')
    .eq('user_id', user.id)
    .in('plan', ['premium', 'founder'])
    .limit(1)
    .maybeSingle();

  const role = profile?.role || null;
  const plan = subscription?.plan || null;
  const allowed = role === 'founder' || role === 'client' || plan === 'premium' || plan === 'founder';

  return {
    allowed,
    status: allowed ? 200 : 403,
    error: allowed ? null : 'Ava Skye requires founder or premium access.',
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const access = await verifyFounderOrPremium(req);
  if (!access.allowed) {
    return res.status(access.status).json({ error: access.error });
  }

  const message = String(req.body?.message || '').trim();
  const history = Array.isArray(req.body?.history) ? req.body.history.slice(-8) : [];

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const transcript = history
    .map((item) => `${item.role === 'assistant' ? 'Ava' : 'Client'}: ${String(item.content || '').slice(0, 800)}`)
    .join('\n');

  try {
    const { text } = await generateText({
      model: process.env.AI_GATEWAY_MODEL || 'openai/gpt-4o-mini',
      system: AVA_SYSTEM_PROMPT,
      prompt: `${transcript ? `${transcript}\n\n` : ''}Client: ${message}\nAva:`,
    });

    return res.status(200).json({ reply: text });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Ava Skye could not reach AI Gateway. Configure AI_GATEWAY_API_KEY if automatic Vercel authentication is not available.',
    });
  }
}
