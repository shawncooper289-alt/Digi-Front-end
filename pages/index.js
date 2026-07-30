import Head from 'next/head';
import { useEffect, useState } from 'react';
import { hasSupabaseConfig } from '../lib/supabaseClient';

const AVA_SKYE_IMAGE_URL = 'https://nova-cdn.ace.ai/chatgpt_images/a74a3cb6-8b88-11f1-be78-5e535f6037b5/_17853560262a141f7ae1a7da059fcc0921011a3f34f9494fa7eee5ef6aef12a8a7886584a9.png';

const proofPoints = [
  { value: '01', label: 'Ava-led strategy intake' },
  { value: '08', label: 'Specialist AI workstreams' },
  { value: '24/7', label: 'Command center momentum' },
];

const capabilities = [
  {
    title: 'Luxury web presence',
    text: 'High-conversion websites, landing pages, and funnels shaped around trust, speed, and authority.',
  },
  {
    title: 'Content studio',
    text: 'Campaign concepts, shorts, long-form direction, ad scripts, brand stories, and channel packaging.',
  },
  {
    title: 'Paid growth systems',
    text: 'Meta-ready offers, audience paths, creative angles, landing flows, and follow-up automation.',
  },
  {
    title: 'Client automation',
    text: 'Brand-aware assistants, intake systems, WhatsApp follow-up, support flows, and delivery checkpoints.',
  },
];

const agentTeams = [
  'Brand Authority',
  'Web + Funnels',
  'Paid Campaigns',
  'Content Studio',
  'Social Growth',
  'Client Automation',
  'Video Direction',
  'Agency Systems',
];

const pricingPlans = [
  {
    name: 'Startup Seat',
    price: '$97/mo',
    note: 'Launch foundation for founders who need immediate credibility.',
    features: ['Ava Skye strategy intake', 'Brand foundation', 'Launch page direction', 'Social presence checklist'],
  },
  {
    name: 'Growth Seat',
    price: '$197/mo',
    note: 'Growth engine for businesses ready to turn attention into leads.',
    features: ['Everything in Startup', 'Sales funnel workflow', 'Meta + social onboarding', 'WhatsApp follow-up path'],
    highlight: true,
  },
  {
    name: 'Pro Seat',
    price: '$397/mo',
    note: 'Fuller execution for teams that need automation, content, and campaigns.',
    features: ['Everything in Growth', 'YouTube growth system', 'Campaign builder', 'Studio production briefs'],
  },
  {
    name: 'Agency Seat',
    price: '$797+/mo',
    note: 'Premium delivery lanes for agencies and operators scaling client work.',
    features: ['Multi-client workflows', 'Advanced funnel planning', 'Content production systems', 'Agency delivery templates'],
  },
];

const commandSteps = [
  ['01', 'Decode the brand', 'Ava Skye captures the offer, audience, proof, voice, visuals, channels, and revenue target.'],
  ['02', 'Deploy the agents', 'Specialist AI teams build the website, funnel, campaigns, content, automations, and follow-up paths.'],
  ['03', 'Ship the presence', 'Every output is organized into a client-ready growth system designed to look premium and move fast.'],
];

export default function Home() {
  const [message, setMessage] = useState('Ava Skye is assembling the command center...');
  const [loading, setLoading] = useState(true);
  const [avatarLoaded, setAvatarLoaded] = useState(true);
  const supabaseReady = hasSupabaseConfig();

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMessage('Ava Skye is ready to orchestrate your growth system.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>DigiMark101 | Ava Skye AI Marketing Command Center</title>
        <meta
          name="description"
          content="DigiMark101 is a premium AI digital marketing agency powered by Ava Skye, building websites, funnels, content systems, campaigns, automation, and agency-grade growth infrastructure."
        />
      </Head>

      <main className="page">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="orb orbThree" />

        <nav className="nav">
          <a className="brand" href="/" aria-label="DigiMark101 home">
            <img src="/digimark101-logo.svg" alt="DigiMark101 logo" />
            <span>DigiMark101</span>
          </a>
          <div className="navLinks">
            <a href="#ava">Ava Skye</a>
            <a href="#systems">Systems</a>
            <a href="#agents">AI Team</a>
            <a href="#tiers">Access</a>
            <a className="navCta" href="/dashboard">Enter Command Center</a>
          </div>
        </nav>

        <section className="hero">
          <div className="heroCopy">
            <p className="badge">AI digital marketing agency of the future</p>
            <h1>The agency your competitors hope your clients never find.</h1>
            <p className="lead">
              DigiMark101 is a premium growth command center led by Ava Skye, an AI executive strategist that turns brands into cinematic websites, high-converting funnels, content engines, paid campaigns, and automated client experiences.
            </p>
            <div className="heroActions">
              <a className="primary" href="/dashboard">Enter the Command Center</a>
              <a className="secondary" href="#systems">See What Ava Builds</a>
            </div>
            <div className="statusStrip">
              <span>{loading ? 'Ava Skye is assembling your growth system...' : message}</span>
              <strong>{supabaseReady ? 'Command center online' : 'Private access enabled'}</strong>
            </div>
          </div>

          <div className="avaStage" id="ava" aria-label="Ava Skye AI growth architect">
            <div className="ring ringOne" />
            <div className="ring ringTwo" />
            <div className="portraitCard">
              {avatarLoaded && (
                <img
                  src={AVA_SKYE_IMAGE_URL}
                  alt="Ava Skye, AI growth architect"
                  onError={() => setAvatarLoaded(false)}
                />
              )}
              {!avatarLoaded && <div className="avatarFallback">Ava<br />Skye</div>}
            </div>
            <div className="glassCard topCard">
              <span>Executive AI host</span>
              <strong>Ava Skye</strong>
            </div>
            <div className="glassCard bottomCard">
              <span>Directing</span>
              <strong>Strategy · Creative · Automation</strong>
            </div>
          </div>
        </section>

        <section className="proofBar" aria-label="DigiMark101 proof points">
          {proofPoints.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section manifesto">
          <p className="eyebrow">Built to make the market stop scrolling</p>
          <h2>Not a template. Not a basic agency site. A premium AI marketing machine with Ava Skye at the center.</h2>
          <p>
            The first impression should feel expensive, intelligent, and inevitable. DigiMark101 presents the brand, explains the system, and moves serious clients toward a private command center where strategy becomes execution.
          </p>
        </section>

        <section className="section commandGrid" id="systems">
          <div className="sectionIntro">
            <p className="eyebrow">Command center architecture</p>
            <h2>Ava Skye turns business ideas into digital assets that look ready for the big leagues.</h2>
          </div>
          <div className="stepStack">
            {commandSteps.map(([number, title, text]) => (
              <article className="stepCard" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section capabilities">
          <div className="sectionIntro wide">
            <p className="eyebrow">What Ava Skye builds</p>
            <h2>Every service is designed to raise the perceived value of the brand.</h2>
          </div>
          <div className="capabilityGrid">
            {capabilities.map((capability) => (
              <article className="capabilityCard" key={capability.title}>
                <div className="cardGlow" />
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section agents" id="agents">
          <div className="agentHeader">
            <p className="eyebrow">Specialist AI agent team</p>
            <h2>One face. One command center. An entire agency behind the scenes.</h2>
          </div>
          <div className="agentGrid">
            {agentTeams.map((agent) => (
              <div className="agentPill" key={agent}>{agent}</div>
            ))}
          </div>
        </section>

        <section className="section showcase">
          <div className="showcasePanel">
            <p className="eyebrow">The promise</p>
            <h2>Websites, videos, funnels, campaigns, and automations should feel like they came from the future.</h2>
            <p>
              DigiMark101 should make clients and competing agencies instantly understand that this is a different level of digital marketing execution: premium presentation, AI-directed workflows, and a system built to keep creating.
            </p>
          </div>
        </section>

        <section className="section pricing" id="tiers">
          <div className="sectionIntro wide">
            <p className="eyebrow">Private access tiers</p>
            <h2>Choose the level of firepower Ava Skye should bring to the brand.</h2>
          </div>
          <div className="pricingGrid">
            {pricingPlans.map((plan) => (
              <article className={plan.highlight ? 'priceCard featured' : 'priceCard'} key={plan.name}>
                <div>
                  <span>{plan.name}</span>
                  <strong>{plan.price}</strong>
                  <p>{plan.note}</p>
                </div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <a href="/login">Request Private Access</a>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <strong>DigiMark101</strong>
          <span>Ava Skye AI command center · Premium web, content, funnel, campaign, and automation systems</span>
        </footer>
      </main>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(html) { scroll-behavior: smooth; }
        :global(body) { margin: 0; background: #02030a; }
        .page { min-height: 100vh; position: relative; overflow: hidden; color: #f8fbff; background: radial-gradient(circle at 50% -10%, rgba(79,70,229,.32), transparent 34rem), radial-gradient(circle at 15% 16%, rgba(14,165,233,.24), transparent 30rem), radial-gradient(circle at 88% 18%, rgba(236,72,153,.23), transparent 32rem), linear-gradient(135deg, #02030a 0%, #07111f 48%, #090816 100%); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .page:before { content: ''; position: fixed; inset: 0; pointer-events: none; background: linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 64px 64px; mask-image: linear-gradient(to bottom, black, transparent 78%); }
        .page:after { content: ''; position: fixed; inset: 0; pointer-events: none; background: radial-gradient(circle at 50% 50%, transparent 0 45%, rgba(2,3,10,.74) 100%); }
        .orb { position: absolute; border-radius: 999px; filter: blur(72px); opacity: .7; pointer-events: none; }
        .orbOne { width: 520px; height: 520px; left: -180px; top: 120px; background: #2563eb; }
        .orbTwo { width: 560px; height: 560px; right: -220px; top: 20px; background: #db2777; }
        .orbThree { width: 420px; height: 420px; left: 42%; bottom: 12%; background: #7c3aed; opacity: .38; }
        .nav, .hero, .proofBar, .section, footer { position: relative; z-index: 1; width: min(1200px, calc(100% - 32px)); margin: 0 auto; }
        .nav { display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; padding: 1.25rem 0; }
        .brand { display: inline-flex; align-items: center; gap: .7rem; color: #fff; text-decoration: none; font-weight: 1000; letter-spacing: -.04em; }
        .brand img { width: 48px; height: 48px; object-fit: contain; mix-blend-mode: screen; filter: drop-shadow(0 14px 32px rgba(168,85,247,.42)); }
        .navLinks { display: flex; align-items: center; gap: 1rem; font-size: .9rem; }
        .navLinks a { color: rgba(248,251,255,.72); text-decoration: none; font-weight: 850; }
        .navCta { color: #fff !important; padding: .75rem 1rem; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; background: rgba(255,255,255,.075); box-shadow: inset 0 1px 0 rgba(255,255,255,.12); backdrop-filter: blur(16px); }
        .hero { min-height: 840px; display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(360px, .96fr); align-items: center; gap: clamp(2rem, 5vw, 5.5rem); padding: 3rem 0 6rem; }
        .badge, .eyebrow { margin: 0 0 1rem; color: #bfdbfe; font-size: .76rem; font-weight: 1000; letter-spacing: .2em; text-transform: uppercase; }
        .badge { width: fit-content; padding: .72rem 1rem; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; background: rgba(255,255,255,.075); box-shadow: 0 20px 70px rgba(37,99,235,.22), inset 0 1px 0 rgba(255,255,255,.14); backdrop-filter: blur(18px); }
        h1, h2, h3, p { margin-top: 0; }
        h1 { max-width: 900px; margin-bottom: 1.4rem; font-size: clamp(4.6rem, 10vw, 10.2rem); line-height: .78; letter-spacing: -.11em; font-weight: 1000; background: linear-gradient(135deg, #fff 8%, #bae6fd 32%, #f0abfc 64%, #fde68a 96%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 45px 120px rgba(59,130,246,.32); }
        .lead { max-width: 780px; color: rgba(226,232,240,.84); font-size: clamp(1.08rem, 2vw, 1.35rem); line-height: 1.75; }
        .heroActions { display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0 1.5rem; }
        .primary, .secondary { display: inline-flex; align-items: center; justify-content: center; min-height: 54px; border-radius: 999px; padding: 0 1.35rem; text-decoration: none; font-weight: 1000; transition: transform .25s ease, box-shadow .25s ease; }
        .primary { color: #fff; background: linear-gradient(135deg, #2563eb, #db2777 68%, #f59e0b); box-shadow: 0 26px 90px rgba(37,99,235,.38); }
        .secondary { color: #dbeafe; border: 1px solid rgba(147,197,253,.35); background: rgba(15,23,42,.58); }
        .primary:hover, .secondary:hover { transform: translateY(-3px); }
        .statusStrip { max-width: 740px; display: flex; justify-content: space-between; gap: 1rem; padding: 1rem; border: 1px solid rgba(148,163,184,.2); border-radius: 1.2rem; background: rgba(2,6,23,.55); color: rgba(226,232,240,.76); backdrop-filter: blur(14px); }
        .statusStrip strong { color: #86efac; white-space: nowrap; }
        .avaStage { min-height: 680px; position: relative; display: grid; place-items: center; }
        .ring { position: absolute; border-radius: 999px; border: 1px solid rgba(255,255,255,.18); animation: orbit 12s linear infinite; }
        .ringOne { width: min(600px, 88vw); aspect-ratio: 1; box-shadow: 0 0 100px rgba(37,99,235,.22); }
        .ringTwo { width: min(470px, 76vw); aspect-ratio: 1; animation-duration: 18s; animation-direction: reverse; border-color: rgba(244,114,182,.24); }
        .portraitCard { position: relative; width: min(430px, 82vw); aspect-ratio: .78; overflow: hidden; border-radius: 2.4rem; border: 1px solid rgba(255,255,255,.3); background: rgba(15,23,42,.74); box-shadow: 0 50px 160px rgba(2,6,23,.8), 0 0 110px rgba(219,39,119,.23), inset 0 1px 0 rgba(255,255,255,.16); }
        .portraitCard:after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 48%, rgba(2,6,23,.7)); pointer-events: none; }
        .portraitCard img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.035); }
        .avatarFallback { width: 100%; height: 100%; display: grid; place-items: center; text-align: center; color: #fff; font-size: 3.6rem; line-height: .9; font-weight: 1000; letter-spacing: -.08em; background: radial-gradient(circle at 50% 15%, rgba(240,171,252,.35), transparent 16rem), linear-gradient(145deg, #0f172a, #1e3a8a 52%, #831843); }
        .glassCard { position: absolute; width: min(330px, 70vw); padding: 1rem; border: 1px solid rgba(255,255,255,.2); border-radius: 1.25rem; background: rgba(2,6,23,.62); box-shadow: 0 24px 90px rgba(2,6,23,.44); backdrop-filter: blur(18px); }
        .glassCard span { display: block; margin-bottom: .3rem; color: #93c5fd; font-size: .75rem; font-weight: 1000; letter-spacing: .15em; text-transform: uppercase; }
        .glassCard strong { color: #fff; font-size: clamp(1.15rem, 2vw, 1.55rem); line-height: 1; }
        .topCard { top: 5rem; right: 0; }
        .bottomCard { left: 0; bottom: 5.5rem; }
        .proofBar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: -4rem; padding: 1rem; border: 1px solid rgba(255,255,255,.12); border-radius: 1.6rem; background: rgba(255,255,255,.055); box-shadow: 0 32px 100px rgba(2,6,23,.35); backdrop-filter: blur(18px); }
        .proofBar div { padding: 1.1rem; border-radius: 1.1rem; background: rgba(2,6,23,.45); }
        .proofBar strong { display: block; color: #fff; font-size: clamp(2rem, 5vw, 4rem); line-height: .9; letter-spacing: -.08em; }
        .proofBar span { display: block; margin-top: .5rem; color: rgba(226,232,240,.72); font-weight: 800; }
        .section { padding: 6rem 0; }
        .manifesto { text-align: center; }
        .manifesto h2, .showcase h2 { max-width: 1000px; margin: 0 auto 1.25rem; font-size: clamp(2.5rem, 6vw, 6.4rem); line-height: .88; letter-spacing: -.08em; }
        .manifesto p:not(.eyebrow), .showcase p { max-width: 820px; margin: 0 auto; color: rgba(226,232,240,.76); font-size: 1.15rem; line-height: 1.8; }
        .commandGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 3rem; align-items: start; }
        .sectionIntro h2, .agentHeader h2, .pricing h2 { margin: 0; max-width: 820px; font-size: clamp(2.25rem, 5vw, 5.1rem); line-height: .9; letter-spacing: -.075em; }
        .wide h2 { max-width: 980px; }
        .stepStack { display: grid; gap: 1rem; }
        .stepCard, .capabilityCard, .priceCard { position: relative; overflow: hidden; border: 1px solid rgba(148,163,184,.18); background: rgba(15,23,42,.66); box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 28px 100px rgba(2,6,23,.28); backdrop-filter: blur(16px); }
        .stepCard { display: grid; grid-template-columns: auto 1fr; gap: 1rem; padding: 1.35rem; border-radius: 1.35rem; }
        .stepCard span { color: #f0abfc; font-weight: 1000; }
        .stepCard h3, .capabilityCard h3 { margin-bottom: .55rem; color: #fff; font-size: clamp(1.45rem, 3vw, 2.25rem); line-height: 1; letter-spacing: -.045em; }
        .stepCard p, .capabilityCard p, .priceCard p { color: rgba(226,232,240,.74); line-height: 1.65; }
        .capabilities { padding-top: 3rem; }
        .capabilityGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
        .capabilityCard { min-height: 300px; padding: 1.35rem; border-radius: 1.5rem; display: flex; flex-direction: column; justify-content: flex-end; }
        .cardGlow { position: absolute; inset: -40% -20% auto auto; width: 210px; height: 210px; border-radius: 999px; background: rgba(56,189,248,.2); filter: blur(28px); }
        .agentHeader { display: flex; justify-content: space-between; gap: 2rem; align-items: end; margin-bottom: 2rem; }
        .agentGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .agentPill { min-height: 126px; display: flex; align-items: end; padding: 1rem; border-radius: 1.25rem; color: #fff; font-weight: 1000; background: linear-gradient(145deg, rgba(37,99,235,.2), rgba(219,39,119,.14)); border: 1px solid rgba(148,163,184,.2); box-shadow: inset 0 1px 0 rgba(255,255,255,.08); }
        .showcasePanel { padding: clamp(2rem, 5vw, 4rem); border-radius: 2rem; text-align: center; border: 1px solid rgba(255,255,255,.16); background: radial-gradient(circle at 50% 0%, rgba(219,39,119,.24), transparent 28rem), linear-gradient(145deg, rgba(37,99,235,.16), rgba(2,6,23,.72)); box-shadow: 0 44px 140px rgba(2,6,23,.4); }
        .pricingGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
        .priceCard { min-height: 430px; padding: 1.25rem; border-radius: 1.4rem; display: flex; flex-direction: column; justify-content: space-between; }
        .priceCard.featured { border-color: rgba(147,197,253,.38); background: linear-gradient(145deg, rgba(37,99,235,.28), rgba(219,39,119,.2)); box-shadow: 0 32px 120px rgba(37,99,235,.24); }
        .priceCard span { color: #93c5fd; font-size: .76rem; font-weight: 1000; letter-spacing: .14em; text-transform: uppercase; }
        .priceCard strong { display: block; margin: .7rem 0; color: #fff; font-size: clamp(2rem, 4vw, 3.2rem); line-height: .92; letter-spacing: -.06em; }
        .priceCard ul { display: grid; gap: .65rem; padding: 0; margin: 1rem 0 0; list-style: none; color: rgba(226,232,240,.78); }
        .priceCard li { position: relative; padding-left: 1.25rem; line-height: 1.42; }
        .priceCard li:before { content: '✦'; position: absolute; left: 0; color: #f0abfc; }
        .priceCard a { display: block; margin-top: 1.2rem; padding: .95rem 1rem; border-radius: 999px; color: #fff; text-align: center; text-decoration: none; font-weight: 1000; background: linear-gradient(135deg, #2563eb, #db2777); box-shadow: 0 18px 60px rgba(37,99,235,.24); }
        footer { display: flex; justify-content: space-between; gap: 1rem; padding: 2rem 0 3rem; border-top: 1px solid rgba(148,163,184,.16); color: rgba(226,232,240,.64); }
        footer strong { color: #fff; }
        @keyframes orbit { from { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(1.04); } to { transform: rotate(360deg) scale(1); } }
        @media (max-width: 980px) { .hero, .commandGrid { grid-template-columns: 1fr; min-height: auto; } .avaStage { min-height: 620px; } .capabilityGrid, .pricingGrid, .agentGrid { grid-template-columns: repeat(2, 1fr); } .navLinks a:not(.navCta) { display: none; } .proofBar { margin-top: 0; } .agentHeader, footer, .statusStrip { flex-direction: column; align-items: flex-start; } }
        @media (max-width: 620px) { .nav { align-items: flex-start; flex-direction: column; } h1 { font-size: clamp(3.7rem, 18vw, 5.5rem); } .hero { padding-top: 2rem; } .avaStage { min-height: 520px; } .portraitCard { width: min(360px, 88vw); } .topCard { top: 1rem; right: auto; } .bottomCard { bottom: 1rem; left: auto; } .proofBar, .capabilityGrid, .pricingGrid, .agentGrid { grid-template-columns: 1fr; } .stepCard { grid-template-columns: 1fr; } .heroActions a { width: 100%; } }
      `}</style>
    </>
  );
}
