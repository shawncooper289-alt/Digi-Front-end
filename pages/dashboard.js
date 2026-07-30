import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

const AVA_SKYE_IMAGE_URL = 'https://nova-cdn.ace.ai/chatgpt_images/a74a3cb6-8b88-11f1-be78-5e535f6037b5/_17853560262a141f7ae1a7da059fcc0921011a3f34f9494fa7eee5ef6aef12a8a7886584a9.png';

const questions = [
  'What business are we building and who is it for?',
  'What offer, pricing, and client plan should Ava Skye optimize around?',
  'Which socials, Meta pages, communities, YouTube channels, and WhatsApp flows need onboarding?',
  'What brand voice, visuals, proof, products, and monetization paths should the agents use?',
];

const workstreams = [
  { title: 'Brand Sync', owner: 'Identity Agent', status: 'Maps voice, colors, offers, and client-specific knowledge.' },
  { title: 'Social Launch', owner: 'Social Agent', status: 'Connects pages, communities, YouTube, and content calendars.' },
  { title: 'Meta Growth', owner: 'Ads Agent', status: 'Prepares business pages, audiences, campaigns, and paid community paths.' },
  { title: 'Web + Sales', owner: 'Funnel Agent', status: 'Builds websites, landing pages, sales pages, banners, and lead capture.' },
  { title: 'Virtual Studio', owner: 'Studio Agent', status: 'Produces long-form, shorts, cinematic, animated, and platform-native ad assets.' },
  { title: 'Client Bots', owner: 'Automation Agent', status: 'Creates brand-aware bots for websites, pages, channels, and communities.' },
];

export default function Dashboard() {
  const [status, setStatus] = useState('Checking founder access...');
  const [access, setAccess] = useState(null);
  const [checking, setChecking] = useState(true);
  const [avatarLoaded, setAvatarLoaded] = useState(true);
  const ready = hasSupabaseConfig();
  const supabase = useMemo(() => createSupabaseClient(), []);

  useEffect(() => {
    let active = true;

    async function verifyAccess() {
      if (!supabase) {
        setStatus('Supabase browser credentials are missing.');
        setChecking(false);
        return;
      }

      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      const session = sessionData?.session;

      if (!active) return;

      if (sessionError || !session) {
        window.location.href = '/login';
        return;
      }

      const response = await fetch('/api/access', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      const result = await response.json().catch(() => ({ allowed: false, message: 'Access check failed.' }));

      if (!active) return;

      setAccess(result);
      setStatus(result.message || (response.ok ? 'Founder access confirmed.' : 'Access denied.'));
      setChecking(false);
    }

    verifyAccess().catch((error) => {
      if (!active) return;
      setStatus(error.message || 'Unable to verify founder access.');
      setChecking(false);
    });

    return () => {
      active = false;
    };
  }, [supabase]);

  async function signOut() {
    if (supabase) {
      await supabase.auth.signOut();
    }
    window.location.href = '/login';
  }

  if (checking) {
    return (
      <main className="gate">
        <div>
          <img src="/digimark101-logo.svg" alt="DigiMark101 logo" />
          <p>Opening Ava Skye command center...</p>
        </div>
        <style jsx>{`
          .gate { min-height: 100vh; display: grid; place-items: center; color: #fff; background: #020617; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
          .gate div { display: grid; justify-items: center; gap: 1rem; }
          img { width: 76px; height: 76px; object-fit: contain; mix-blend-mode: screen; }
          p { color: rgba(226,232,240,.76); font-weight: 900; }
        `}</style>
      </main>
    );
  }

  if (!access?.allowed) {
    return (
      <main className="gate denied">
        <section>
          <a href="/" className="home">DigiMark101</a>
          <p className="eyebrow">Private dashboard</p>
          <h1>Founder or premium access required.</h1>
          <p>{status}</p>
          <div className="actions">
            <a href="/login">Use another account</a>
            <button type="button" onClick={signOut}>Sign out</button>
          </div>
        </section>
        <style jsx>{`
          .gate { min-height: 100vh; display: grid; place-items: center; padding: 2rem; color: #fff; background: radial-gradient(circle at 20% 12%, rgba(37,99,235,.25), transparent 28rem), #020617; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
          section { width: min(640px, 100%); padding: 2rem; border: 1px solid rgba(255,255,255,.16); border-radius: 2rem; background: rgba(15,23,42,.78); }
          .home, a, button { color: #dbeafe; font-weight: 1000; }
          .home { text-decoration: none; }
          .eyebrow { margin: 2rem 0 .75rem; color: #93c5fd; font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; }
          h1 { margin: 0; font-size: clamp(2.2rem, 7vw, 4rem); line-height: .92; letter-spacing: -.07em; }
          p { color: rgba(226,232,240,.76); line-height: 1.65; }
          .actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 1.4rem; }
          a, button { border: 1px solid rgba(147,197,253,.28); border-radius: 999px; padding: .85rem 1rem; background: rgba(255,255,255,.06); text-decoration: none; cursor: pointer; }
        `}</style>
      </main>
    );
  }

  return (
    <main className="console">
      <aside className="rail">
        <a className="home" href="/">
          <img src="/digimark101-logo.svg" alt="DigiMark101 logo" />
          <span>DigiMark101</span>
        </a>
        <nav>
          <span className="active">Onboarding</span>
          <span>Agents</span>
          <span>Studio</span>
          <span>Funnels</span>
          <span>Channels</span>
        </nav>
      </aside>

      <section className="main">
        <header>
          <div>
            <p className="eyebrow">Ava Skye Guided Build Room</p>
            <h1>Founder command center for premium client builds.</h1>
          </div>
          <div className={ready ? 'status online' : 'status pending'}>
            <strong>{access.role === 'founder' ? 'Founder access' : 'Premium access'}</strong>
            <span>{access.email} · {access.role || access.plan || 'approved'}</span>
            <small>{status}</small>
            <button type="button" onClick={signOut}>Sign out</button>
          </div>
        </header>

        <section className="builder">
          <div className="chatPanel">
            <div className="avatar">AS</div>
            <h2>Ava Skye Intake</h2>
            <p>
              I will interview the client, fill in missing pieces, assign specialized agents, and keep each deliverable moving until launch.
            </p>
            <div className="questionStack">
              {questions.map((question, index) => (
                <button key={question}>
                  <span>{index + 1}</span>
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="missionPanel">
            <div className="studioPreview">
              {avatarLoaded && (
                <img
                  src={AVA_SKYE_IMAGE_URL}
                  alt="Ava Skye AI executive avatar"
                  onError={() => setAvatarLoaded(false)}
                />
              )}
              {!avatarLoaded && <div className="studioFallback">Ava Skye</div>}
              <div>
                <strong>Cinematic dashboard host</strong>
                <span>Video-ready Ava intro, client briefing, and task delegation preview.</span>
              </div>
            </div>
            <h2>Launch Mission</h2>
            <div className="missionGrid">
              <div><span>Client</span><strong>New brand buildout</strong></div>
              <div><span>Client Plan</span><strong>Growth / Premium ready</strong></div>
              <div><span>Channels</span><strong>Meta, YouTube, WhatsApp, Web</strong></div>
              <div><span>Output</span><strong>Agency-in-a-box workflow</strong></div>
            </div>
          </div>
        </section>

        <section className="workstreams">
          <div className="sectionTop">
            <p className="eyebrow">Delegated agent workstreams</p>
            <h2>Ava manages the specialist network and checks completion.</h2>
          </div>
          <div className="cards">
            {workstreams.map((stream) => (
              <article key={stream.title}>
                <span>{stream.owner}</span>
                <h3>{stream.title}</h3>
                <p>{stream.status}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <style jsx>{`
        .console { min-height: 100vh; display: grid; grid-template-columns: 260px 1fr; background: radial-gradient(circle at 15% 10%, rgba(37,99,235,.2), transparent 24rem), radial-gradient(circle at 90% 20%, rgba(219,39,119,.18), transparent 26rem), #020617; color: #f8fafc; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
        .rail { border-right: 1px solid rgba(148,163,184,.16); background: rgba(2,6,23,.52); backdrop-filter: blur(20px); padding: 1.5rem; }
        .home { display: flex; align-items: center; gap: .7rem; color: #fff; text-decoration: none; font-weight: 1000; letter-spacing: -.04em; margin-bottom: 2rem; }
        .home img { width: 48px; height: 48px; object-fit: contain; mix-blend-mode: screen; filter: drop-shadow(0 12px 28px rgba(168,85,247,.38)); }
        nav { display: grid; gap: .65rem; }
        nav span { padding: .9rem 1rem; border-radius: 1rem; color: rgba(226,232,240,.65); font-weight: 850; }
        nav .active { color: #fff; background: linear-gradient(135deg, rgba(37,99,235,.32), rgba(219,39,119,.22)); border: 1px solid rgba(147,197,253,.22); }
        .main { padding: 2rem; }
        header { display: grid; grid-template-columns: 1fr minmax(280px, 430px); gap: 1.5rem; align-items: start; margin-bottom: 2rem; }
        .eyebrow { margin: 0 0 .8rem; color: #93c5fd; font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; font-weight: 1000; }
        h1, h2, h3, p { margin-top: 0; }
        h1 { max-width: 900px; margin-bottom: 0; font-size: clamp(2.4rem, 5vw, 5.25rem); line-height: .92; letter-spacing: -.07em; }
        .status { padding: 1rem; border-radius: 1.1rem; border: 1px solid rgba(148,163,184,.2); background: rgba(15,23,42,.72); display: grid; gap: .4rem; }
        .status strong { color: #fdba74; }
        .status.online strong { color: #86efac; }
        .status span, .status small { color: rgba(226,232,240,.7); line-height: 1.5; }
        .status button { width: fit-content; margin-top: .3rem; border: 1px solid rgba(147,197,253,.22); color: #dbeafe; background: rgba(255,255,255,.055); }
        .builder { display: grid; grid-template-columns: 1.05fr .95fr; gap: 1rem; margin-bottom: 3rem; }
        .chatPanel, .missionPanel, article { border: 1px solid rgba(148,163,184,.18); border-radius: 1.5rem; background: rgba(15,23,42,.72); box-shadow: 0 25px 80px rgba(2,6,23,.32); }
        .chatPanel { padding: 1.4rem; }
        .avatar { width: 56px; height: 56px; border-radius: 1rem; display: grid; place-items: center; color: #fff; font-weight: 1000; background: linear-gradient(135deg, #2563eb, #db2777); margin-bottom: 1rem; }
        .chatPanel h2, .missionPanel h2, .sectionTop h2 { font-size: clamp(1.6rem, 3vw, 2.5rem); line-height: 1; letter-spacing: -.045em; }
        .chatPanel p { color: rgba(226,232,240,.76); line-height: 1.65; }
        .questionStack { display: grid; gap: .75rem; margin-top: 1.25rem; }
        button { border: 1px solid rgba(147,197,253,.2); color: #e0f2fe; background: rgba(2,6,23,.55); border-radius: 1rem; padding: 1rem; text-align: left; display: flex; gap: .75rem; align-items: center; font-weight: 850; cursor: pointer; }
        button span { width: 28px; height: 28px; border-radius: 999px; display: grid; place-items: center; background: rgba(37,99,235,.28); color: #bfdbfe; flex: 0 0 auto; }
        .missionPanel { padding: 1.4rem; background: linear-gradient(145deg, rgba(37,99,235,.16), rgba(219,39,119,.12)); }
        .studioPreview { display: grid; grid-template-columns: 92px 1fr; gap: 1rem; align-items: center; margin-bottom: 1.25rem; padding: .85rem; border-radius: 1.15rem; background: rgba(2,6,23,.48); border: 1px solid rgba(148,163,184,.18); }
        .studioPreview img, .studioFallback { width: 92px; height: 92px; border-radius: 1rem; object-fit: cover; border: 1px solid rgba(255,255,255,.18); }
        .studioFallback { display: grid; place-items: center; text-align: center; color: #fff; font-weight: 1000; background: linear-gradient(135deg, #2563eb, #db2777); }
        .studioPreview strong, .studioPreview span { display: block; }
        .studioPreview strong { margin-bottom: .3rem; }
        .studioPreview span { color: rgba(226,232,240,.72); line-height: 1.45; }
        .missionGrid { display: grid; gap: .85rem; margin-top: 1.5rem; }
        .missionGrid div { display: grid; gap: .35rem; padding: 1rem; border-radius: 1rem; background: rgba(2,6,23,.42); }
        .missionGrid span, article span { color: #93c5fd; font-size: .78rem; font-weight: 950; text-transform: uppercase; letter-spacing: .1em; }
        .missionGrid strong { font-size: 1.08rem; }
        .sectionTop { display: flex; justify-content: space-between; align-items: end; gap: 2rem; margin-bottom: 1rem; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        article { padding: 1.15rem; min-height: 180px; }
        article h3 { font-size: 1.35rem; margin: .7rem 0; }
        article p { color: rgba(226,232,240,.72); line-height: 1.6; }
        @media (max-width: 980px) { .console { grid-template-columns: 1fr; } .rail { position: static; border-right: 0; border-bottom: 1px solid rgba(148,163,184,.16); } .rail nav { display: flex; overflow: auto; } header, .builder { grid-template-columns: 1fr; } .cards { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .main { padding: 1rem; } .cards { grid-template-columns: 1fr; } .sectionTop { display: block; } }
      `}</style>
    </main>
  );
}
