import { createClient } from '@supabase/supabase-js';

const allowedTiers = new Set(['starter-seat', 'growth-team', 'agency-command']);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ error: 'Supabase is not configured for purchase handoff yet.' });
  }

  const { email, tier, tierName, seats, price } = req.body || {};
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanTier = String(tier || '').trim();

  if (!cleanEmail || !cleanEmail.includes('@')) {
    return res.status(400).json({ error: 'A valid buyer email is required.' });
  }

  if (!allowedTiers.has(cleanTier)) {
    return res.status(400).json({ error: 'Choose a valid seat tier.' });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
  const purchaseId = crypto.randomUUID();

  const { error } = await supabase
    .from('purchase_handoffs')
    .insert([
      {
        id: purchaseId,
        email: cleanEmail,
        tier: cleanTier,
        tier_name: String(tierName || cleanTier).slice(0, 120),
        seats: String(seats || '').slice(0, 60),
        price: String(price || '').slice(0, 60),
        status: 'checkout_started',
        source: 'digi-front-end',
      },
    ]);

  if (error) {
    console.error('Supabase purchase handoff error:', error);
    return res.status(500).json({ error: 'Could not save the purchase handoff in Supabase.' });
  }

  const checkoutBaseUrl = process.env.PURCHASE_CHECKOUT_URL;
  const nextUrl = `/features?purchase=${encodeURIComponent(purchaseId)}&tier=${encodeURIComponent(cleanTier)}`;

  if (checkoutBaseUrl) {
    const checkoutUrl = new URL(checkoutBaseUrl);
    checkoutUrl.searchParams.set('purchase_id', purchaseId);
    checkoutUrl.searchParams.set('tier', cleanTier);
    checkoutUrl.searchParams.set('email', cleanEmail);

    return res.status(200).json({
      checkoutUrl: checkoutUrl.toString(),
      message: 'Seat tier saved in Supabase. Redirecting to checkout.',
    });
  }

  return res.status(200).json({
    nextUrl,
    message: 'Seat tier saved in Supabase. Connect PURCHASE_CHECKOUT_URL to send buyers to checkout.',
  });
}
