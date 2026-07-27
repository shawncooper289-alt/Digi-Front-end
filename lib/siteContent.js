export const siteNav = [
  ['Home', '/'],
  ['Features', '/features'],
  ['Campaigns', '/campaigns'],
  ['Social', '/social-media'],
  ['Email', '/email-marketing'],
  ['Leads', '/lead-capture'],
  ['Pricing', '/pricing'],
  ['Ava Skye', '/ava-skye'],
];

export const seatTiers = [
  {
    id: 'starter-seat',
    name: 'Starter Seat',
    seats: '1 seat',
    price: '$97/mo',
    description: 'For a founder who needs Ava to shape offers, campaigns, content, and follow-up without hiring a full team.',
    highlights: ['Ava campaign planning', 'Lead capture workspace', 'Core funnel templates'],
  },
  {
    id: 'growth-team',
    name: 'Growth Team',
    seats: '3 seats',
    price: '$297/mo',
    description: 'For a small team running content, email, ads, and sales follow-up from one command center.',
    highlights: ['Multi-seat Ava workflows', 'Campaign and email planning', 'Supabase-backed onboarding'],
    featured: true,
  },
  {
    id: 'agency-command',
    name: 'Agency Command',
    seats: '10 seats',
    price: '$997/mo',
    description: 'For agencies and operators who want a premium client-ready acquisition hub with Ava at the center.',
    highlights: ['Client portal readiness', 'Advanced growth systems', 'Priority AI strategy handoff'],
  },
];

export const productPages = {
  campaigns: {
    slug: 'campaigns',
    title: 'Campaign Command Center',
    eyebrow: 'Campaign launchpad',
    headline: 'Plan every launch with Ava beside you.',
    intro:
      'Turn one offer into a focused campaign plan: audience, hook, channels, assets, launch calendar, and next action. Ava keeps the plan practical and human instead of generic.',
    cta: 'Start Campaign Planning',
    metrics: [
      ['12', 'active campaign tracks'],
      ['28%', 'pipeline lift target'],
      ['7 days', 'launch sprint map'],
    ],
    sections: [
      ['Offer clarity', 'Ava turns scattered ideas into one clear promise, audience, and outcome.'],
      ['Channel plan', 'Map social, email, landing page, and follow-up actions without losing the main strategy.'],
      ['Launch calendar', 'Keep the next seven to thirty days organized around work that can actually ship.'],
    ],
    workflow: [
      ['01', 'Describe the offer', 'Tell Ava what you sell, who it helps, and what result matters.'],
      ['02', 'Choose the angle', 'Ava drafts positioning, campaign hooks, and proof points.'],
      ['03', 'Ship the assets', 'Move into content, email, and lead capture pages to finish the funnel.'],
    ],
  },
  social: {
    slug: 'social-media',
    title: 'Social Media Studio',
    eyebrow: 'Social content',
    headline: 'Create posts that sound like your brand and point back to revenue.',
    intro:
      'Use Ava to translate campaign strategy into platform-ready posts, hooks, captions, content pillars, and simple publishing themes for consistent visibility.',
    cta: 'Build Social Content',
    metrics: [
      ['30', 'post ideas per sprint'],
      ['5', 'content pillars'],
      ['1 voice', 'consistent brand tone'],
    ],
    sections: [
      ['Content pillars', 'Define repeatable themes so the brand feels consistent across every post.'],
      ['Hook bank', 'Generate scroll-stopping openings for founder, service, product, and client-win posts.'],
      ['Repurposing', 'Turn one campaign into LinkedIn, Instagram, Facebook, short-form video, and email angles.'],
    ],
    workflow: [
      ['01', 'Pick a campaign', 'Start from a real offer or launch theme.'],
      ['02', 'Draft the posts', 'Ava writes usable captions, hooks, and CTA language.'],
      ['03', 'Send traffic', 'Every post can point back to the lead capture or purchase flow.'],
    ],
  },
  email: {
    slug: 'email-marketing',
    title: 'Email Marketing Engine',
    eyebrow: 'Email sequences',
    headline: 'Follow up like a serious business, not a one-message funnel.',
    intro:
      'Ava helps create welcome sequences, launch emails, nurture campaigns, reactivation flows, and sales follow-up that stay clear, direct, and useful.',
    cta: 'Draft an Email Flow',
    metrics: [
      ['7 days', 'starter sequence'],
      ['4', 'buyer objections handled'],
      ['1', 'clear next step'],
    ],
    sections: [
      ['Welcome flow', 'Give new leads a clear first impression and a reason to keep listening.'],
      ['Launch sequence', 'Build urgency, proof, objection handling, and offer clarity across several emails.'],
      ['Follow-up', 'Turn interested prospects into booked calls, checkout starts, or onboarding handoffs.'],
    ],
    workflow: [
      ['01', 'Capture the lead', 'A visitor joins through the Supabase-connected form.'],
      ['02', 'Send the sequence', 'Ava drafts the email plan and messages around the offer.'],
      ['03', 'Move to conversion', 'The flow points toward checkout, consultation, or next-step onboarding.'],
    ],
  },
  leads: {
    slug: 'lead-capture',
    title: 'Lead Capture Workspace',
    eyebrow: 'Supabase connected',
    headline: 'Capture visitors and buyer intent without losing the follow-up trail.',
    intro:
      'The Digimark101 frontend is connected to Supabase for leads and purchase handoffs, so the marketing site can collect real interest and prepare onboarding.',
    cta: 'Join Early Access',
    metrics: [
      ['Live', 'lead intake'],
      ['Secure', 'browser-safe keys'],
      ['Ready', 'handoff records'],
    ],
    sections: [
      ['Early access form', 'Collect lead emails from the homepage with the existing Supabase client.'],
      ['Purchase handoff', 'Save buyer package, email, seats, and status through the protected API route.'],
      ['Onboarding path', 'Route buyers toward checkout or the next internal onboarding step.'],
    ],
    workflow: [
      ['01', 'Visitor submits', 'The form records intent from a real prospect.'],
      ['02', 'Supabase stores', 'Records land in the configured leads or purchase handoff table.'],
      ['03', 'Team follows up', 'Ava and the dashboard pages frame what happens next.'],
    ],
  },
  dashboard: {
    slug: 'dashboard',
    title: 'Growth Dashboard',
    eyebrow: 'Command view',
    headline: 'A premium workspace view for campaigns, leads, email, and next actions.',
    intro:
      'The dashboard page presents the product vision clearly: simple metrics, campaign status, lead flow, and Ava recommendations in one polished command center.',
    cta: 'Ask Ava for Next Steps',
    metrics: [
      ['91%', 'growth readiness'],
      ['12', 'campaign cards'],
      ['Live', 'Ava guidance'],
    ],
    sections: [
      ['Campaign view', 'See launch tracks, channels, and campaign status in a clean command layout.'],
      ['Lead view', 'Understand intake, interest, and buyer handoffs without digging through raw data.'],
      ['Ava recommendations', 'Keep the next best action visible so users know what to do after login.'],
    ],
    workflow: [
      ['01', 'Review status', 'Check campaigns, leads, and email flow at a glance.'],
      ['02', 'Ask Ava', 'Get concise strategy and content suggestions.'],
      ['03', 'Take action', 'Move into campaign, social, email, or lead capture work.'],
    ],
  },
  ava: {
    slug: 'ava-skye',
    title: 'Ava Skye',
    eyebrow: 'Humanlike cinematic strategist',
    headline: 'Ava is the face, voice, and guide of Digimark101.',
    intro:
      'Ava Skye is presented as a consistent, lifelike, cinematic AI marketing strategist: dark wavy hair, warm professional expression, confident presence, and practical marketing guidance.',
    cta: 'Open Ava Chat',
    metrics: [
      ['1', 'consistent face'],
      ['24/7', 'strategy assistant'],
      ['Premium', 'cinematic presence'],
    ],
    sections: [
      ['Visual identity', 'The portrait keeps Ava consistent across the site while still fitting the cinematic brand.'],
      ['Strategic voice', 'Ava responds with concise, practical growth guidance instead of generic assistant filler.'],
      ['Conversion role', 'Ava moves visitors toward a campaign plan, content plan, lead capture, or purchase step.'],
    ],
    workflow: [
      ['01', 'Meet Ava', 'The visitor immediately sees a human-feeling strategist.'],
      ['02', 'Ask a question', 'The chat modal connects to the Ava API route.'],
      ['03', 'Take the next step', 'Ava guides toward the correct page or conversion action.'],
    ],
  },
};
