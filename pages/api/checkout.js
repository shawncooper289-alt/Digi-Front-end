const checkoutLinks = {
  launch:
    process.env.PAYMENT_LINK_LAUNCH_URL ||
    process.env.STRIPE_CHECKOUT_LAUNCH_URL ||
    process.env.STRIPE_CHECKOUT_STARTUP_URL,
  startup:
    process.env.PAYMENT_LINK_LAUNCH_URL ||
    process.env.STRIPE_CHECKOUT_LAUNCH_URL ||
    process.env.STRIPE_CHECKOUT_STARTUP_URL,
  growth:
    process.env.PAYMENT_LINK_GROWTH_URL ||
    process.env.STRIPE_CHECKOUT_GROWTH_URL,
  premium:
    process.env.PAYMENT_LINK_PREMIUM_URL ||
    process.env.STRIPE_CHECKOUT_PREMIUM_URL ||
    process.env.STRIPE_CHECKOUT_PRO_URL,
  pro:
    process.env.PAYMENT_LINK_PREMIUM_URL ||
    process.env.STRIPE_CHECKOUT_PREMIUM_URL ||
    process.env.STRIPE_CHECKOUT_PRO_URL,
  elite:
    process.env.PAYMENT_LINK_TOP_TIER_URL ||
    process.env.PAYMENT_LINK_ELITE_URL ||
    process.env.PAYMENT_LINK_AGENCY_COMMAND_URL ||
    process.env.STRIPE_CHECKOUT_ELITE_URL ||
    process.env.STRIPE_CHECKOUT_ELITE_TEAM_URL,
  'elite-team':
    process.env.PAYMENT_LINK_TOP_TIER_URL ||
    process.env.PAYMENT_LINK_ELITE_URL ||
    process.env.PAYMENT_LINK_AGENCY_COMMAND_URL ||
    process.env.STRIPE_CHECKOUT_ELITE_URL ||
    process.env.STRIPE_CHECKOUT_ELITE_TEAM_URL,
  'agency-command':
    process.env.PAYMENT_LINK_TOP_TIER_URL ||
    process.env.PAYMENT_LINK_AGENCY_COMMAND_URL ||
    process.env.PAYMENT_LINK_ELITE_URL,
  'white-label-partner':
    process.env.PAYMENT_LINK_PARTNER_URL ||
    process.env.STRIPE_CHECKOUT_WHITE_LABEL_PARTNER_URL,
  'white-label-enterprise':
    process.env.PAYMENT_LINK_ENTERPRISE_URL ||
    process.env.STRIPE_CHECKOUT_WHITE_LABEL_ENTERPRISE_URL,
};

const requiredEnv = [
  'PAYMENT_LINK_TOP_TIER_URL for the client who wants the top tier now',
  'PAYMENT_LINK_LAUNCH_URL',
  'PAYMENT_LINK_GROWTH_URL',
  'PAYMENT_LINK_PREMIUM_URL',
  'PAYMENT_LINK_PARTNER_URL',
  'PAYMENT_LINK_ENTERPRISE_URL',
];

function getBaseUrl(req) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (configured) {
    return configured.startsWith('http') ? configured : `https://${configured}`;
  }

  const protocol = req.headers['x-forwarded-proto'] || 'https';
  return `${protocol}://${req.headers.host}`;
}

function withOrderParams(checkoutUrl, orderId, plan, email) {
  const url = new URL(checkoutUrl);
  url.searchParams.set('order_id', orderId);
  url.searchParams.set('plan', plan);

  if (email) {
    url.searchParams.set('email', email);
  }

  return url.toString();
}

export default async function handler(req, res) {
  const plan = String(req.query.plan || 'elite').toLowerCase();
  const email = String(req.query.email || '').trim().toLowerCase();
  const checkoutUrl = checkoutLinks[plan] || process.env.PAYMENT_LINK_TOP_TIER_URL;

  if (!checkoutUrl) {
    return res.status(501).json({
      error: 'Payment link is not configured yet.',
      plan,
      nextStep: 'Create a Supabase/PayPal/Cash App/current payment link and set PAYMENT_LINK_TOP_TIER_URL in Vercel production env.',
      requiredEnv,
    });
  }

  if (!email) {
    return res.redirect(303, checkoutUrl);
  }

  const baseUrl = getBaseUrl(req);
  const response = await fetch(`${baseUrl}/api/orders/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plan,
      email,
      paymentProvider: 'supabase_checkout',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.orderId) {
    console.error('Checkout order create failed:', data);
    return res.status(response.status || 500).json({
      error: data.error || 'Could not create the order before checkout.',
      plan,
    });
  }

  return res.redirect(303, withOrderParams(checkoutUrl, data.orderId, plan, email));
}
