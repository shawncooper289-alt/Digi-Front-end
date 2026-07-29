const checkoutLinks = {
  startup: process.env.STRIPE_CHECKOUT_STARTUP_URL,
  growth: process.env.STRIPE_CHECKOUT_GROWTH_URL,
  pro: process.env.STRIPE_CHECKOUT_PRO_URL,
  'elite-team': process.env.STRIPE_CHECKOUT_ELITE_TEAM_URL,
  'white-label-partner': process.env.STRIPE_CHECKOUT_WHITE_LABEL_PARTNER_URL,
  'white-label-enterprise': process.env.STRIPE_CHECKOUT_WHITE_LABEL_ENTERPRISE_URL,
};

export default function handler(req, res) {
  const plan = String(req.query.plan || '').toLowerCase();
  const checkoutUrl = checkoutLinks[plan];

  if (!checkoutUrl) {
    return res.status(501).json({
      error: 'Stripe checkout link is not configured yet.',
      plan,
      requiredEnv: [
        'STRIPE_CHECKOUT_STARTUP_URL',
        'STRIPE_CHECKOUT_GROWTH_URL',
        'STRIPE_CHECKOUT_PRO_URL',
        'STRIPE_CHECKOUT_ELITE_TEAM_URL',
        'STRIPE_CHECKOUT_WHITE_LABEL_PARTNER_URL',
        'STRIPE_CHECKOUT_WHITE_LABEL_ENTERPRISE_URL',
      ],
    });
  }

  return res.redirect(303, checkoutUrl);
}
