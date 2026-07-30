const checkoutLinks = {
  launch: process.env.STRIPE_CHECKOUT_LAUNCH_URL || process.env.STRIPE_CHECKOUT_STARTUP_URL,
  startup: process.env.STRIPE_CHECKOUT_LAUNCH_URL || process.env.STRIPE_CHECKOUT_STARTUP_URL,
  growth: process.env.STRIPE_CHECKOUT_GROWTH_URL,
  premium: process.env.STRIPE_CHECKOUT_PREMIUM_URL || process.env.STRIPE_CHECKOUT_PRO_URL,
  pro: process.env.STRIPE_CHECKOUT_PREMIUM_URL || process.env.STRIPE_CHECKOUT_PRO_URL,
  elite: process.env.STRIPE_CHECKOUT_ELITE_URL || process.env.STRIPE_CHECKOUT_ELITE_TEAM_URL,
  'elite-team': process.env.STRIPE_CHECKOUT_ELITE_URL || process.env.STRIPE_CHECKOUT_ELITE_TEAM_URL,
  'white-label-partner': process.env.STRIPE_CHECKOUT_WHITE_LABEL_PARTNER_URL,
  'white-label-enterprise': process.env.STRIPE_CHECKOUT_WHITE_LABEL_ENTERPRISE_URL,
};

const requiredEnv = [
  'STRIPE_CHECKOUT_LAUNCH_URL or STRIPE_CHECKOUT_STARTUP_URL',
  'STRIPE_CHECKOUT_GROWTH_URL',
  'STRIPE_CHECKOUT_PREMIUM_URL or STRIPE_CHECKOUT_PRO_URL',
  'STRIPE_CHECKOUT_ELITE_URL or STRIPE_CHECKOUT_ELITE_TEAM_URL',
  'STRIPE_CHECKOUT_WHITE_LABEL_PARTNER_URL',
  'STRIPE_CHECKOUT_WHITE_LABEL_ENTERPRISE_URL',
];

export default function handler(req, res) {
  const plan = String(req.query.plan || '').toLowerCase();
  const checkoutUrl = checkoutLinks[plan];

  if (!checkoutUrl) {
    return res.status(501).json({
      error: 'Stripe checkout link is not configured yet.',
      plan,
      nextStep: 'Configure each Stripe payment link to redirect after payment to https://www.digimark101.com/checkout-success?plan=' + encodeURIComponent(plan),
      requiredEnv,
    });
  }

  return res.redirect(303, checkoutUrl);
}
