import { useEffect, useState } from 'react';
import { hasSupabaseConfig } from '../lib/supabaseClient';

const agentTeams = [
  'Brand Strategy',
  'Social Onboarding',
  'Meta Pages + Ads',
  'Websites + Funnels',
  'Community Bots',
  'Video Studio',
  'YouTube Growth',
  'WhatsApp Sales',
];

const outcomes = [
  'Business pages, paid communities, and social channels launched from one guided workflow.',
  'Brand-aware bots trained for client sites, pages, channels, and communities.',
  'Sales pages, banners, videos, ads, and monetization assets built by specialist AI agents.',
];

const backendPowers = [
  'Onboard socials, Meta business pages, paid communities, YouTube channels, WhatsApp, and client profiles.',
  'Build websites, banners, sales pages, lead magnets, brand kits, funnels, and monetization paths.',
  'Command a virtual studio for long-form videos, shorts, cinematic spots, animated ads, and TV-ready placements.',
  'Deploy specialized brand-aware bots for communities, pages, sites, channels, and client support flows.',
];

const tiers = [
  { name: 'Launch Seat', detail: 'Guided setup, brand foundation, website starter, social profiles, and campaign checklist.' },
  { name: 'Growth Seat', detail: 'Funnels, paid community setup, Meta ads workflow, YouTube support, and WhatsApp sales flows.' },
  { name: 'Studio Seat', detail: 'Cinematic and animated video production, channel packaging, bots, sales systems, and ad distribution support.' },
];

export default function Home() {
  const [message, setMessage] = useState('Ava Skye is preparing your launch room...');
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
        setMessage('Ava Skye is ready to build your digital agency stack.');
        setLoading(false);
      });
  }, []);

  return (
    <main className="page">
      <div className="mesh meshOne" />
      <div className="mesh meshTwo" />
      <nav className="nav">
        <div className="logoMark">DigiMark101</div>
        <div className="navLinks">
          <a href="#ava-video">Ava Skye</a>
          <a href="#workflow">Workflow</a>
          <a href="#agents">AI Agents</a>
          <a href="#tiers">Seat Tiers</a>
          <a className="navCta" href="/dashboard">Launch Console</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Ava Skye Command System</p>
          <h1>The AI-powered all-in-one digital marketing agency.</h1>
          <p className="lead">
            Ava Skye asks the right questions, fills in the blanks, delegates the work to specialist AI agents, and guides every client from blank slate to brand, website, content, community, sales pages, ads, monetization, and automation workflows.
          </p>
          <div className="heroActions">
            <a className="primary" href="/dashboard">Start guided onboarding</a>
            <a className="secondary" href="#ava-video">Meet Ava Skye</a>
          </div>
          <div className="signalBar">
            <span>{loading ? 'Initializing system...' : message}</span>
            <strong>{supabaseReady ? 'Supabase live' : 'Supabase key pending'}</strong>
          </div>
        </div>

        <div className="commandCard" aria-label="Ava Skye command console preview">
          <div className="cardTop">
            <span className="pulse" />
            <span>Ava Skye</span>
            <strong>Executive AI Producer</strong>
          </div>
          <div className="promptBox">
            <p>Tell me your business, audience, offer, voice, and seat tier. I will design the launch plan and assign the right AI agents.</p>
          </div>
          <div className="steps">
            <div><span>01</span> Brand DNA intake</div>
            <div><span>02</span> Social, Meta, YouTube, WhatsApp onboarding</div>
            <div><span>03</span> Website, funnel, sales pages, banners</div>
            <div><span>04</span> Bots, communities, videos, ads, monetization</div>
          </div>
        </div>
      </section>

      <section id="ava-video" className="section cinema">
        <div className="videoStage">
          <div className="avatarFrame">
            {avatarLoaded && (
              <img
                src="/ava-skye-avatar.jpg"
                alt="Ava Skye AI executive avatar"
                onError={() => setAvatarLoaded(false)}
              />
            )}
            {!avatarLoaded && <div className="avatarFallback">Ava<br />Skye</div>}
            <div className="scanLine" />
          </div>
          <div className="playOrb">▶</div>
          <div className="captionStrip">Cinematic intro video placeholder • replace with Ava Skye narration asset</div>
        </div>
        <div className="videoCopy">
          <p className="eyebrow">Cinematic front-end story</p>
          <h2>Ava Skye tells clients what happens after they enter the backend dashboard.</h2>
          <p>
            The page now frames Ava as the beautiful executive AI host who explains the guided dashboard: she interviews the client, builds the blanks, assigns specialized agents, monitors completion, and turns the chosen seat tier into a full marketing operating system.
          </p>
          <div className="scriptCard">
            <strong>Intro script direction</strong>
            <span>“Welcome to DigiMark101. I’m Ava Skye. Once you enter your dashboard, I’ll learn your business, connect your socials, build your brand systems, launch your pages, coordinate your content studio, and delegate every task to the right AI specialist until your digital agency engine is ready.”</span>
          </div>
        </div>
      </section>

      <section id="backend" className="section backendPreview">
        <div className="sectionHeader">
          <p className="eyebrow">Inside the backend dashboard</p>
          <h2>Every capability is organized into a guided professional workflow.</h2>
        </div>
        <div className="backendGrid">
          {backendPowers.map((power, index) => (
            <article key={power}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{power}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="section gridTwo">
        <div>
          <p className="eyebrow">Guided professional workflow</p>
          <h2>From questions to completed business systems.</h2>
        </div>
        <div className="workflowList">
          {outcomes.map((outcome, index) => (
            <article key={outcome}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agents" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Specialized AI agent team</p>
          <h2>Ava Skye delegates, reviews, and sees the work to completion.</h2>
        </div>
        <div className="agentGrid">
          {agentTeams.map((agent) => (
            <div className="agent" key={agent}>{agent}</div>
          ))}
        </div>
      </section>

      <section id="tiers" className="section tierWrap">
        <div className="sectionHeader">
          <p className="eyebrow">Seat-tier controlled capability</p>
          <h2>Simple enough for beginners, deep enough for serious operators.</h2>
        </div>
        <div className="tiers">
          {tiers.map((tier) => (
            <article key={tier.name}>
              <h3>{tier.name}</h3>
              <p>{tier.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <strong>DigiMark101</strong>
        <span>Vercel front end • Supabase-ready data layer • Ava Skye AI agency workflow</span>
      </footer>

      <style jsx>{`
        .page { min-height: 100vh; overflow: hidden; color: #f8fbff; background: #030712; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; position: relative; }
        .page:before { content: ''; position: fixed; inset: 0; background: linear-gradient(rgba(96,165,250,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,.045) 1px, transparent 1px); background-size: 48px 48px; mask-image: linear-gradient(to bottom, black, transparent 75%); pointer-events: none; }
        .mesh { position: absolute; border-radius: 999px; filter: blur(70px); opacity: .55; pointer-events: none; }
        .meshOne { width: 480px; height: 480px; left: -180px; top: -120px; background: #2563eb; }
        .meshTwo { width: 520px; height: 520px; right: -180px; top: 180px; background: #db2777; }
        .nav { position: relative; z-index: 2; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; padding: 1.25rem 0; display: flex; align-items: center; justify-content: space-between; }
        .logoMark { font-weight: 950; letter-spacing: -.04em; font-size: 1.1rem; }
        .navLinks { display: flex; align-items: center; gap: 1rem; font-size: .92rem; }
        .navLinks a { color: rgba(248,251,255,.72); text-decoration: none; font-weight: 750; }
        .navCta { color: #fff !important; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; padding: .7rem 1rem; background: rgba(255,255,255,.07); backdrop-filter: blur(14px); }
        .hero { position: relative; z-index: 1; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; min-height: 760px; display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 3rem; }
        .eyebrow { margin: 0 0 1rem; color: #93c5fd; font-size: .78rem; font-weight: 950; letter-spacing: .2em; text-transform: uppercase; }
        h1, h2, h3, p { margin-top: 0; }
        h1 { max-width: 760px; margin-bottom: 1.25rem; font-size: clamp(3rem, 7vw, 6.9rem); line-height: .88; letter-spacing: -.08em; font-weight: 1000; background: linear-gradient(135deg, #ffffff 8%, #93c5fd 38%, #f0abfc 78%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .lead { max-width: 740px; color: rgba(226,232,240,.78); font-size: clamp(1.08rem, 2vw, 1.32rem); line-height: 1.75; }
        .heroActions { display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0; }
        .primary, .secondary { border-radius: 999px; padding: 1rem 1.35rem; text-decoration: none; font-weight: 950; transition: .25s ease; }
        .primary { color: #fff; background: linear-gradient(135deg, #2563eb, #db2777); box-shadow: 0 22px 70px rgba(37,99,235,.32); }
        .secondary { color: #dbeafe; border: 1px solid rgba(147,197,253,.35); background: rgba(15,23,42,.62); }
        .primary:hover, .secondary:hover { transform: translateY(-2px); }
        .signalBar { max-width: 720px; display: flex; justify-content: space-between; gap: 1rem; padding: 1rem; border: 1px solid rgba(148,163,184,.2); border-radius: 1.2rem; background: rgba(15,23,42,.6); color: rgba(226,232,240,.78); }
        .signalBar strong { color: #86efac; white-space: nowrap; }
        .commandCard { border: 1px solid rgba(148,163,184,.25); border-radius: 2rem; padding: 1.2rem; background: linear-gradient(145deg, rgba(15,23,42,.9), rgba(30,41,59,.52)); box-shadow: 0 30px 120px rgba(2,6,23,.7), inset 0 1px 0 rgba(255,255,255,.08); backdrop-filter: blur(24px); }
        .cardTop { display: grid; grid-template-columns: auto 1fr auto; gap: .75rem; align-items: center; padding: .75rem; color: rgba(226,232,240,.8); }
        .pulse { width: .75rem; height: .75rem; border-radius: 999px; background: #22c55e; box-shadow: 0 0 0 8px rgba(34,197,94,.12); }
        .cardTop strong { color: #f0abfc; font-size: .8rem; }
        .promptBox { margin: 1rem 0; padding: 1.4rem; border-radius: 1.35rem; background: radial-gradient(circle at top left, rgba(37,99,235,.25), transparent 60%), rgba(2,6,23,.65); border: 1px solid rgba(96,165,250,.2); }
        .promptBox p { margin: 0; color: #e0f2fe; font-size: 1.15rem; line-height: 1.65; }
        .steps { display: grid; gap: .75rem; }
        .steps div { display: flex; gap: .8rem; align-items: center; padding: 1rem; border-radius: 1rem; background: rgba(255,255,255,.045); color: rgba(248,250,252,.86); }
        .steps span, .workflowList span, .backendGrid span { color: #f0abfc; font-weight: 950; }
        .section { position: relative; z-index: 1; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; padding: 5rem 0; }
        .cinema { display: grid; grid-template-columns: .95fr 1.05fr; gap: 2rem; align-items: center; }
        .videoStage { min-height: 560px; position: relative; display: grid; place-items: center; border-radius: 2.2rem; overflow: hidden; border: 1px solid rgba(148,163,184,.22); background: radial-gradient(circle at 50% 20%, rgba(59,130,246,.28), transparent 34rem), linear-gradient(145deg, rgba(15,23,42,.96), rgba(2,6,23,.82)); box-shadow: 0 40px 130px rgba(2,6,23,.72); }
        .videoStage:before { content: ''; position: absolute; inset: 0; background: linear-gradient(120deg, transparent 0 40%, rgba(255,255,255,.1) 50%, transparent 60%); transform: translateX(-120%); animation: sweep 5s infinite; }
        .avatarFrame { width: min(360px, 72vw); aspect-ratio: 1; border-radius: 2rem; overflow: hidden; display: grid; place-items: center; position: relative; border: 1px solid rgba(255,255,255,.22); background: linear-gradient(145deg, rgba(15,23,42,.7), rgba(37,99,235,.22)); box-shadow: 0 24px 80px rgba(0,0,0,.48); }
        .avatarFrame img { width: 100%; height: 100%; object-fit: cover; }
        .avatarFallback { width: 100%; height: 100%; display: grid; place-items: center; text-align: center; color: #fff; font-size: 3.5rem; line-height: .9; font-weight: 1000; letter-spacing: -.08em; background: radial-gradient(circle at 50% 15%, rgba(240,171,252,.35), transparent 16rem), linear-gradient(145deg, #0f172a, #1e3a8a 52%, #831843); }
        .scanLine { position: absolute; left: 0; right: 0; height: 2px; top: 50%; background: linear-gradient(90deg, transparent, #93c5fd, transparent); box-shadow: 0 0 24px #60a5fa; opacity: .8; animation: scan 3s infinite; }
        .playOrb { position: absolute; width: 76px; height: 76px; border-radius: 999px; display: grid; place-items: center; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.28); backdrop-filter: blur(16px); box-shadow: 0 20px 60px rgba(37,99,235,.32); }
        .captionStrip { position: absolute; left: 1rem; right: 1rem; bottom: 1rem; padding: .9rem 1rem; border-radius: 1rem; color: rgba(226,232,240,.8); background: rgba(2,6,23,.72); border: 1px solid rgba(148,163,184,.18); }
        .videoCopy p { color: rgba(226,232,240,.78); font-size: 1.08rem; line-height: 1.75; }
        .scriptCard { display: grid; gap: .6rem; padding: 1.2rem; border-radius: 1.2rem; background: rgba(255,255,255,.055); border: 1px solid rgba(148,163,184,.2); color: rgba(226,232,240,.8); }
        .scriptCard strong { color: #f0abfc; }
        .backendPreview { padding-top: 2rem; }
        .backendGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .backendGrid article { padding: 1.2rem; min-height: 190px; border-radius: 1.25rem; background: linear-gradient(145deg, rgba(15,23,42,.72), rgba(37,99,235,.12)); border: 1px solid rgba(148,163,184,.2); }
        .backendGrid p { margin: 1rem 0 0; color: rgba(226,232,240,.78); line-height: 1.6; }
        .gridTwo { display: grid; grid-template-columns: .8fr 1.2fr; gap: 3rem; align-items: start; }
        h2 { font-size: clamp(2rem, 4vw, 4rem); line-height: 1; letter-spacing: -.055em; max-width: 760px; }
        .workflowList { display: grid; gap: 1rem; }
        .workflowList article { display: grid; grid-template-columns: auto 1fr; gap: 1rem; padding: 1.25rem; border-radius: 1.2rem; border: 1px solid rgba(148,163,184,.2); background: rgba(15,23,42,.62); }
        .workflowList p { margin: 0; color: rgba(226,232,240,.8); line-height: 1.6; }
        .sectionHeader { display: flex; justify-content: space-between; align-items: end; gap: 2rem; margin-bottom: 2rem; }
        .agentGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .agent { min-height: 130px; display: flex; align-items: end; padding: 1rem; border-radius: 1.3rem; border: 1px solid rgba(148,163,184,.2); background: linear-gradient(145deg, rgba(37,99,235,.16), rgba(219,39,119,.11)); font-weight: 950; box-shadow: inset 0 1px 0 rgba(255,255,255,.06); }
        .tierWrap { padding-bottom: 3rem; }
        .tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .tiers article { padding: 1.4rem; border-radius: 1.3rem; background: rgba(255,255,255,.055); border: 1px solid rgba(148,163,184,.2); }
        .tiers h3 { font-size: 1.35rem; margin-bottom: .7rem; }
        .tiers p { color: rgba(226,232,240,.76); line-height: 1.65; }
        footer { position: relative; z-index: 1; width: min(1180px, calc(100% - 2rem)); margin: 0 auto; padding: 2rem 0 3rem; display: flex; justify-content: space-between; gap: 1rem; color: rgba(226,232,240,.62); border-top: 1px solid rgba(148,163,184,.16); }
        @keyframes sweep { 0%, 45% { transform: translateX(-120%); } 70%, 100% { transform: translateX(120%); } }
        @keyframes scan { 0%, 100% { transform: translateY(-120px); opacity: .25; } 50% { transform: translateY(120px); opacity: .9; } }
        @media (max-width: 900px) { .hero, .gridTwo, .cinema { grid-template-columns: 1fr; min-height: auto; padding: 4rem 0; } .agentGrid, .tiers, .backendGrid { grid-template-columns: repeat(2, 1fr); } .navLinks a:not(.navCta) { display: none; } .sectionHeader, footer, .signalBar { flex-direction: column; align-items: flex-start; } }
        @media (max-width: 560px) { .agentGrid, .tiers, .backendGrid { grid-template-columns: 1fr; } .heroActions { flex-direction: column; } .primary, .secondary { text-align: center; } .videoStage { min-height: 460px; } }
      `}</style>
    </main>
  );
}
