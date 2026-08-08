import { createClient } from '@supabase/supabase-js';

const packages = {
  launch: { name: 'Launch Account', totalCents: 4900 },
  startup: { name: 'Launch Account', totalCents: 4900 },
  growth: { name: 'Growth Account', totalCents: 14900 },
  premium: { name: 'Premium Account', totalCents: 39900 },
  pro: { name: 'Premium Account', totalCents: 39900 },
  elite: { name: 'Elite Account', totalCents: 249700 },
  'elite-team': { name: 'Elite Account', totalCents: 249700 },
  'agency-command': { name: 'Agency Command', totalCents: 249700 },
  'white-label-partner': { name: 'White Label Partner', totalCents: 499700 },
  'white-label-enterprise': { name: 'White Label Enterprise', totalCents: 999700 },
};

function getSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

function parseBody(req) {
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }

  return req.body || {};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return res.status(500).json({ error: 'Supabase admin credentials are not configured.' });
  }

  const body = parseBody(req);
  const plan = String(body.plan || 'elite').toLowerCase();
  const email = String(body.email || '').trim().toLowerCase();
  const provider = String(body.paymentProvider || 'supabase_checkout').trim();
  const providerSessionId = body.providerSessionId ? String(body.providerSessionId).trim() : null;
  const providerPaymentId = body.providerPaymentId ? String(body.providerPaymentId).trim() : null;
  const notes = body.notes ? String(body.notes).slice(0, 1000) : null;
  const selectedPackage = packages[plan] || packages.elite;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid customer email is required.' });
  }

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      customer_email: email,
      status: 'pending',
      currency: 'USD',
      subtotal_cents: selectedPackage.totalCents,
      tax_cents: 0,
      total_cents: selectedPackage.totalCents,
      payment_provider: provider,
      provider_session_id: providerSessionId,
      provider_payment_id: providerPaymentId,
      notes,
      metadata: {
        plan,
        source: 'digimark101_checkout',
      },
    })
    .select('id')
    .single();

  if (orderError) {
    console.error('Order create error:', orderError);
    return res.status(500).json({ error: 'Could not create the order.' });
  }

  const { error: itemError } = await supabase
    .from('order_items')
    .insert({
      order_id: order.id,
      product_name: selectedPackage.name,
      quantity: 1,
      unit_price_cents: selectedPackage.totalCents,
      line_total_cents: selectedPackage.totalCents,
      metadata: {
        plan,
      },
    });

  if (itemError) {
    console.error('Order item create error:', itemError);
    return res.status(500).json({ error: 'Order was created, but the order item could not be saved.', orderId: order.id });
  }

  return res.status(200).json({ orderId: order.id, plan, totalCents: selectedPackage.totalCents });
}
