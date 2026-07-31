import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const AVA_SKYE_IMAGE_URL = 'https://nova-cdn.ace.ai/chatgpt_images/a74a3cb6-8b88-11f1-be78-5e535f6037b5/_17853560262a141f7ae1a7da059fcc0921011a3f34f9494fa7eee5ef6aef12a8a7886584a9.png';

const agencyPillars = [
  {
    title: 'Brand presence that looks established from day one',
    copy: 'Clear positioning, polished visuals, website direction, and social foundations built around the business you want people to trust.',
  },
  {
    title: 'Content and campaigns built for attention',
    copy: 'Short-form video ideas, YouTube direction, ad angles, launch messages, and sales assets shaped into a consistent growth system.',
  },
  {
    title: 'Automation that keeps the business moving',
    copy: 'Client intake, guided setup, sales flows, community support, and brand-aware AI assistants organized into one operating workflow.',
  },
];

const serviceStack = [
  'Brand strategy and offer positioning',
  'Website and landing page direction',
  'Funnels, lead magnets, and sales pages',
  'Meta pages, ads, and audience planning',
  'YouTube, shorts, and video campaign briefs',
  'Community, WhatsApp, and client support flows',
  'Brand-aware AI bot planning',
  'Launch roadmap and growth execution',
];

const trustSignals = [
  'Clear setup path',
  'Brand-first strategy',
  'Multi-channel execution',
  'AI-assisted delivery',
];

const processSteps = [
  {
    title: 'Discover',
    copy: 'Ava learns the business, audience, offer, goals, existing website, and current online presence.',
  },
  {
    title: 'Design the plan',
    copy: 'DigiMark101 turns those answers into a focused brand, website, content, automation, and growth roadmap.',
  },
  {
    title: 'Build the system',
    copy: 'Specialized workflows shape the pages, campaigns, sales assets, content direction, and AI support pieces.',
  },
  {
    title: 'Launch with direction',
    copy: 'Clients leave with clear next steps, organized assets, and a marketing system designed to keep improving.',
  },
];

const clientOutcomes = [
  'A brand message people understand quickly',
  'A website plan built around action, not decoration',
  'Content and campaign ideas matched to the offer',
  'Sales and support flows that feel organized',
  'A clear path from account setup to launch',
];

const planHighlights = [
  { name: 'Launch', detail: 'A guided foundation for new founders who need the right message, structure, and first online presence.' },
  { name: 'Growth', detail: 'A stronger marketing buildout for clients ready to add funnels, social channels, campaigns, and sales flows.' },
  { name: 'Scale', detail: 'Advanced planning for serious operators who need deeper content, automation, video, and multi-channel execution.' },
];

const pricingPlans = [
  {
    name: 'Launch Account',
    slug: 'launch',
    price: '$97/mo',
    note: 'For a founder starting their digital presence with a guided launch path.',
    features: ['Ava Skye guided intake', 'Brand foundation', 'Website launch plan', 'Social profile checklist', 'Content direction prompts'],
  },
  {
    name: 'Growth Account',
    slug: 'growth',
    price: '$197/mo',
    note: 'For clients ready to turn their offer into pages, funnels, and social growth systems.',
    features: ['Everything in Launch', 'Meta + social onboarding', 'Sales page workflow', 'WhatsApp sales flow', 'Community launch plan'],
    highlight: true,
  },
  {
    name: 'Premium Account',
    slug: 'premium',
    price: '$397/mo',
    note: 'For serious operators who want more automation, content output, and campaign direction.',
    features: ['Everything in Growth', 'YouTube channel support', 'Brand-aware client bot plan', 'Campaign builder', 'Video studio briefs'],
  },
  {
    name: 'Elite Account',
    slug: 'elite',
    price: '$797/mo',
    note: 'For high-touch clients needing deeper multi-channel execution and hands-on support.',
    features: ['Everything in Premium', 'Advanced workflow lanes', 'Advanced funnel planning', 'Long + short video pipelines', 'Ad placement roadmap'],
  },
  {
    name: 'White Label Partner',
    slug: 'white-label-partner',
    price: '$1,497/mo',
    note: 'For agencies reselling DigiMark101 workflows under their brand.',
    features: ['Partner dashboard direction', 'Client workspace model', 'Reusable onboarding flows', 'Agency delivery templates', 'Priority roadmap access'],
  },
  {
    name: 'White Label Enterprise',
    slug: 'white-label-enterprise',
    price: '$2,997/mo',
    note: 'For serious agencies building a branded AI marketing platform.',
    features: ['Everything in Partner', 'Multi-client operating model', 'Custom bot strategy', 'Studio production workflows', 'Implementation planning'],
  },
];


export default function Home() {
  const [avatarLoaded, setAvatarLoaded] = useState(true);

  return (
    <main className="page">
      <div className="mesh meshOne" />
      <div className="mesh meshTwo" />
      <nav className="nav">
        <div className="logoMark">
          <Image src="/digimark101-logo.svg" alt="DigiMark101 logo" width={46} height={46} priority />
          <span>DigiMark101</span>
        </div>
        <div className="navLinks">
          <a href="#ava-guide">Ava Skye</a>
          <a href="#workflow">Workflow</a>
          <a href="#agents">AI Agents</a>
          <a href="#tiers">Client Plans</a>
          <Link className="navCta" href="/dashboard">Launch Console</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <div className="premiumBadge">AI-guided digital marketing agency</div>
          <div className="welcomeLockup">
            <span>Welcome to</span>
            <h1>DigiMark101</h1>
            <p className="dynastyStatement">Your Digital Dynasty Starts Here</p>
          </div>
          <p className="lead">
            DigiMark101 helps founders and agencies turn an idea, offer, or existing business into a polished online presence with clear strategy, strong visuals, client-ready pages, content direction, automation, and growth systems.
          </p>
          <div className="heroActions">
            <Link className="primary" href="/dashboard">Start your guided build</Link>
            <a className="secondary" href="#services">See what you get</a>
          </div>
          <div className="trustStrip">
            {trustSignals.map((signal) => <span key={signal}>{signal}</span>)}
          </div>
        </div>

        <div className="avaShowcase" aria-label="Meet Ava Skye, your AI chief of staff">
          <div className="portraitHalo" />
          <div className="portraitCard">
            {avatarLoaded && (
              <Image
                src={AVA_SKYE_IMAGE_URL}
                alt="Ava Skye, AI chief of staff"
                width={860}
                height={1049}
                priority
                onError={() => setAvatarLoaded(false)}
              />
            )}
            {!avatarLoaded && <div className="avatarFallback">Ava<br />Skye</div>}
          </div>
          <div className="chiefCard">
            <span>A clear path from idea to launch.</span>
            <p>Ava Skye guides the intake, organizes the plan, and keeps every step focused on what the business needs next.</p>
          </div>
        </div>
      </section>

      <section id="services" className="section serviceIntro">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">What clients get</p>
            <h2>A complete marketing foundation built around clarity, trust, and action.</h2>
          </div>
          <p className="sectionLead">The goal is not just to look online. The goal is to look prepared, explain the offer clearly, guide visitors toward action, and give the business a system it can keep building on.</p>
        </div>
        <div className="pillarGrid">
          {agencyPillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ava-guide" className="section avaGuide">
        <div className="polishedSetup">
          <p className="eyebrow">Ava Skye guided setup</p>
          <h2>Your setup begins with the right questions, not a blank form.</h2>
          <p>
            Once your account is set up, Ava guides you through the entire onboarding process. If you already have a website, she asks for the URL, reviews the details, and uses that information to move your setup forward.
          </p>
          <p>
            If you do not have a website yet, Ava asks about your idea, your audience, and the outcome you want. From there, she forms a clear plan to help you move through the fastest and most effective route.
          </p>
        </div>
        <div className="outcomePanel">
          <p className="eyebrow">The result</p>
          <ul>
            {clientOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </div>
      </section>

      <section id="workflow" className="section processSection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">How the work moves</p>
            <h2>A professional path from first answer to finished direction.</h2>
          </div>
        </div>
        <div className="processGrid">
          {processSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agents" className="section serviceStackSection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Agency capabilities</p>
            <h2>Everything is organized around the pieces a serious online business needs.</h2>
          </div>
          <p className="sectionLead">DigiMark101 connects strategy, creative direction, sales assets, content, automation, and channel planning so the experience feels complete instead of scattered.</p>
        </div>
        <div className="serviceStack">
          {serviceStack.map((service) => <div key={service}>{service}</div>)}
        </div>
      </section>

      <section id="tiers" className="section tierWrap">
        <div className="sectionHeader">
          <p className="eyebrow">Built for different stages</p>
          <h2>Start with the foundation, then grow into deeper execution.</h2>
        </div>
        <div className="tiers">
          {planHighlights.map((tier) => (
            <article key={tier.name}>
              <h3>{tier.name}</h3>
              <p>{tier.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section pricingSection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Client account pricing</p>
            <h2>Client plans built for clear outcomes and smooth account setup.</h2>
          </div>
          <p className="pricingIntro">Choose the level that fits your stage. After checkout, your account opens the guided dashboard so Ava can begin shaping the right plan for your brand.</p>
        </div>
        <div className="pricingGrid">
          {pricingPlans.map((plan) => (
            <article className={plan.highlight ? 'priceCard featured' : 'priceCard'} key={plan.name}>
              <div>
                <span className="planName">{plan.name}</span>
                <strong className="planPrice">{plan.price}</strong>
                <p>{plan.note}</p>
              </div>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className="checkoutBtn" href={`/api/checkout?plan=${plan.slug}`}>
                Pay and create account
              </a>
            </article>
          ))}
        </div>
      </section>


      <footer>
        <strong>DigiMark101</strong>
        <span>Guided setup • AI-assisted marketing workflows • Clear next steps from account creation to launch</span>
      </footer>

      <style jsx>{`
        .page { min-height: 100vh; overflow: hidden; color: #f8fbff; background: radial-gradient(circle at 18% 12%, rgba(37,99,235,.28), transparent 30rem), radial-gradient(circle at 86% 16%, rgba(236,72,153,.22), transparent 28rem), linear-gradient(135deg, #020617 0%, #07111f 48%, #030712 100%); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; position: relative; }
        .page:before { content: ''; position: fixed; inset: 0; background: linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 56px 56px; mask-image: linear-gradient(to bottom, black, transparent 72%); pointer-events: none; }
        .mesh { position: absolute; border-radius: 999px; filter: blur(80px); opacity: .58; pointer-events: none; }
        .meshOne { width: 560px; height: 560px; left: -220px; top: -150px; background: #2563eb; }
        .meshTwo { width: 560px; height: 560px; right: -190px; top: 140px; background: #db2777; }
        .nav { position: relative; z-index: 2; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; padding: 1.25rem 0; display: flex; align-items: center; justify-content: space-between; }
        .logoMark { display: flex; align-items: center; gap: .7rem; font-weight: 950; letter-spacing: -.04em; font-size: 1.1rem; }
        .logoMark img { width: 46px; height: 46px; object-fit: contain; mix-blend-mode: screen; filter: drop-shadow(0 12px 28px rgba(168,85,247,.38)); }
        .logoMark span { color: #fff; }
        .navLinks { display: flex; align-items: center; gap: 1rem; font-size: .92rem; }
        .navLinks a { color: rgba(248,251,255,.72); text-decoration: none; font-weight: 750; }
        .navCta { color: #fff !important; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; padding: .7rem 1rem; background: rgba(255,255,255,.07); backdrop-filter: blur(14px); }
        .hero { position: relative; z-index: 1; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; min-height: 810px; display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: clamp(2rem, 5vw, 5rem); padding: 2rem 0 5rem; }
        .eyebrow { margin: 0 0 1rem; color: #93c5fd; font-size: .78rem; font-weight: 950; letter-spacing: .2em; text-transform: uppercase; }
        h1, h2, h3, p { margin-top: 0; }
        .heroCopy { position: relative; }
        .premiumBadge { width: fit-content; margin-bottom: 1.5rem; padding: .72rem 1rem; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; color: #dbeafe; background: rgba(255,255,255,.07); box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 18px 60px rgba(37,99,235,.2); backdrop-filter: blur(16px); font-size: .78rem; font-weight: 1000; letter-spacing: .16em; text-transform: uppercase; }
        .welcomeLockup { margin-bottom: 1.25rem; }
        .welcomeLockup > span { display: block; margin-bottom: .45rem; color: #bfdbfe; font-size: clamp(1.25rem, 2.4vw, 2rem); font-weight: 900; letter-spacing: .05em; }
        h1 { max-width: 780px; margin: 0; font-size: clamp(4.2rem, 11vw, 9.6rem); line-height: .82; letter-spacing: -.095em; font-weight: 1000; background: linear-gradient(135deg, #ffffff 5%, #bfdbfe 35%, #f9a8d4 72%, #fde68a 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 40px 110px rgba(59,130,246,.28); }
        .dynastyStatement { margin: 1.35rem 0 0; color: #fff; font-size: clamp(1.8rem, 4vw, 3.5rem); line-height: .95; font-weight: 1000; letter-spacing: -.055em; max-width: 800px; }
        .lead { max-width: 760px; color: rgba(226,232,240,.82); font-size: clamp(1.08rem, 2vw, 1.34rem); line-height: 1.75; }
        .heroActions { display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0; }
        .primary, .secondary { border-radius: 999px; padding: 1rem 1.35rem; text-decoration: none; font-weight: 950; transition: .25s ease; }
        .primary { color: #fff; background: linear-gradient(135deg, #2563eb, #db2777 72%, #f59e0b); box-shadow: 0 24px 80px rgba(37,99,235,.36); }
        .secondary { color: #dbeafe; border: 1px solid rgba(147,197,253,.35); background: rgba(15,23,42,.62); }
        .primary:hover, .secondary:hover { transform: translateY(-2px); }
        .trustStrip { max-width: 760px; display: grid; grid-template-columns: repeat(4, 1fr); gap: .7rem; margin-top: 2rem; }
        .trustStrip span { min-height: 72px; display: flex; align-items: center; padding: .85rem; border: 1px solid rgba(148,163,184,.22); border-radius: 1rem; color: rgba(226,232,240,.86); background: rgba(15,23,42,.58); font-weight: 900; box-shadow: inset 0 1px 0 rgba(255,255,255,.06); }
        .avaShowcase { position: relative; min-height: 690px; display: grid; justify-items: center; align-content: center; gap: 1rem; }
        .portraitHalo { position: absolute; top: 2rem; width: min(520px, 86vw); aspect-ratio: 1; border-radius: 999px; background: conic-gradient(from 140deg, rgba(37,99,235,.3), rgba(236,72,153,.38), rgba(245,158,11,.22), rgba(37,99,235,.3)); filter: blur(8px); opacity: .9; }
        .portraitCard { position: relative; width: min(430px, 82vw); aspect-ratio: .72; overflow: hidden; border-radius: 2.25rem; border: 1px solid rgba(255,255,255,.28); background: rgba(15,23,42,.72); box-shadow: 0 42px 140px rgba(2,6,23,.74), 0 0 90px rgba(219,39,119,.2), inset 0 1px 0 rgba(255,255,255,.14); }
        .portraitCard:after { content: ''; position: absolute; inset: auto 0 0; height: 26%; background: linear-gradient(to bottom, transparent, rgba(2,6,23,.45)); pointer-events: none; }
        .portraitCard img { width: 100%; height: 100%; object-fit: contain; object-position: center top; transform: none; }
        .chiefCard { position: relative; z-index: 2; width: min(420px, 82vw); margin: 0 auto; padding: 1.15rem; border-radius: 1.35rem; border: 1px solid rgba(255,255,255,.22); background: rgba(2,6,23,.72); box-shadow: 0 24px 80px rgba(0,0,0,.38); backdrop-filter: blur(18px); }
        .chiefCard span { display: block; color: #fff; font-size: clamp(1.25rem, 2vw, 1.75rem); line-height: 1; font-weight: 1000; letter-spacing: -.04em; }
        .chiefCard p { margin: .55rem 0 0; color: rgba(226,232,240,.76); line-height: 1.55; }
        .processGrid span { color: #f0abfc; font-weight: 950; }
        .section { position: relative; z-index: 1; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; padding: 5rem 0; }
        .avatarFallback { width: 100%; height: 100%; display: grid; place-items: center; text-align: center; color: #fff; font-size: 3.5rem; line-height: .9; font-weight: 1000; letter-spacing: -.08em; background: radial-gradient(circle at 50% 15%, rgba(240,171,252,.35), transparent 16rem), linear-gradient(145deg, #0f172a, #1e3a8a 52%, #831843); }
        h2 { font-size: clamp(2rem, 4vw, 4rem); line-height: 1; letter-spacing: -.055em; max-width: 780px; }
        .sectionHeader { display: flex; justify-content: space-between; align-items: end; gap: 2rem; margin-bottom: 2rem; }
        .sectionLead { max-width: 430px; color: rgba(226,232,240,.74); line-height: 1.65; margin: 0; }
        .pillarGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .pillarGrid article, .processGrid article, .tiers article { padding: 1.45rem; border-radius: 1.45rem; background: linear-gradient(145deg, rgba(15,23,42,.72), rgba(37,99,235,.12)); border: 1px solid rgba(148,163,184,.22); box-shadow: inset 0 1px 0 rgba(255,255,255,.06); }
        .pillarGrid h3, .processGrid h3, .tiers h3 { font-size: 1.35rem; line-height: 1.1; margin-bottom: .8rem; }
        .pillarGrid p, .processGrid p, .tiers p { color: rgba(226,232,240,.78); line-height: 1.65; margin: 0; }
        .avaGuide { display: grid; grid-template-columns: 1.05fr .95fr; gap: 1rem; align-items: stretch; }
        .polishedSetup, .outcomePanel { padding: 2rem; border-radius: 1.75rem; border: 1px solid rgba(148,163,184,.22); background: linear-gradient(145deg, rgba(15,23,42,.78), rgba(37,99,235,.12)); box-shadow: 0 30px 100px rgba(2,6,23,.36); }
        .polishedSetup p { color: rgba(226,232,240,.8); font-size: 1.08rem; line-height: 1.75; }
        .outcomePanel ul { list-style: none; padding: 0; margin: 0; display: grid; gap: .9rem; }
        .outcomePanel li { position: relative; padding: 1rem 1rem 1rem 2.5rem; border-radius: 1rem; background: rgba(255,255,255,.055); color: rgba(248,251,255,.88); font-weight: 850; }
        .outcomePanel li:before { content: '✓'; position: absolute; left: 1rem; color: #86efac; font-weight: 1000; }
        .processGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .serviceStack { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .serviceStack div { min-height: 120px; display: flex; align-items: end; padding: 1rem; border-radius: 1.25rem; border: 1px solid rgba(148,163,184,.2); background: linear-gradient(145deg, rgba(37,99,235,.16), rgba(219,39,119,.11)); font-weight: 950; box-shadow: inset 0 1px 0 rgba(255,255,255,.06); }

        .pricingSection { padding-top: 2rem; }
        .pricingIntro { max-width: 430px; color: rgba(226,232,240,.72); line-height: 1.6; margin: 0; }
        .pricingGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .priceCard { display: flex; flex-direction: column; justify-content: space-between; gap: 1.2rem; min-height: 430px; padding: 1.25rem; border-radius: 1.35rem; background: rgba(255,255,255,.055); border: 1px solid rgba(148,163,184,.2); box-shadow: inset 0 1px 0 rgba(255,255,255,.06); }
        .priceCard.featured { background: linear-gradient(145deg, rgba(37,99,235,.28), rgba(219,39,119,.18)); border-color: rgba(147,197,253,.38); box-shadow: 0 28px 90px rgba(37,99,235,.22); }
        .planName { display: block; color: #93c5fd; font-size: .78rem; font-weight: 1000; letter-spacing: .14em; text-transform: uppercase; margin-bottom: .75rem; }
        .planPrice { display: block; color: #fff; font-size: clamp(2rem, 4vw, 3.25rem); line-height: 1; letter-spacing: -.06em; }
        .priceCard p { color: rgba(226,232,240,.74); line-height: 1.55; margin: .9rem 0 0; }
        .priceCard ul { list-style: none; padding: 0; margin: 0; display: grid; gap: .65rem; color: rgba(226,232,240,.8); }
        .priceCard li { position: relative; padding-left: 1.25rem; line-height: 1.4; }
        .priceCard li:before { content: '✓'; position: absolute; left: 0; color: #86efac; font-weight: 1000; }
        .checkoutBtn { display: block; text-align: center; text-decoration: none; color: #fff; border-radius: 999px; padding: .95rem 1rem; font-weight: 1000; background: linear-gradient(135deg, #2563eb, #db2777); box-shadow: 0 18px 50px rgba(37,99,235,.22); }

        .tierWrap { padding-bottom: 3rem; }
        .tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .tiers article { padding: 1.4rem; border-radius: 1.3rem; background: rgba(255,255,255,.055); border: 1px solid rgba(148,163,184,.2); }
        .tiers h3 { font-size: 1.35rem; margin-bottom: .7rem; }
        .tiers p { color: rgba(226,232,240,.76); line-height: 1.65; }
        footer { position: relative; z-index: 1; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; padding: 2rem 0 3rem; display: flex; justify-content: space-between; gap: 1rem; color: rgba(226,232,240,.62); border-top: 1px solid rgba(148,163,184,.16); }
        @media (max-width: 900px) { .hero, .avaGuide { grid-template-columns: 1fr; min-height: auto; padding: 4rem 0; } .avaShowcase { min-height: auto; } .trustStrip, .pillarGrid, .processGrid, .serviceStack, .tiers, .pricingGrid { grid-template-columns: repeat(2, 1fr); } .navLinks a:not(.navCta) { display: none; } .sectionHeader, footer { flex-direction: column; align-items: flex-start; } }
        @media (max-width: 560px) { .trustStrip, .pillarGrid, .processGrid, .serviceStack, .tiers, .pricingGrid { grid-template-columns: 1fr; } .heroActions { flex-direction: column; } .portraitCard { width: min(360px, 88vw); } .primary, .secondary { text-align: center; } .polishedSetup, .outcomePanel { padding: 1.35rem; } }
      `}</style>
    </main>
  );
}
