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

export default function handler(req, res) {
  const plan = String(req.query.plan || 'elite').toLowerCase();
  const checkoutUrl = checkoutLinks[plan] || process.env.PAYMENT_LINK_TOP_TIER_URL;

  if (!checkoutUrl) {
    return res.status(501).json({
      error: 'Payment link is not configured yet.',
      plan,
      nextStep: 'Create a PayPal/Cash App/current payment link and set PAYMENT_LINK_TOP_TIER_URL in Vercel production env.',
      requiredEnv,
    });
  }

  return res.redirect(303, checkoutUrl);
}
