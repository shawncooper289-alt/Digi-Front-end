import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

const questions = [
  'What business are we building and who is it for?',
  'What offer, pricing, and seat tier should Ava Skye optimize around?',
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
  const [status, setStatus] = useState('Opening Ava Skye command center...');
  const ready = hasSupabaseConfig();
  const supabase = useMemo(() => createSupabaseClient(), []);

  useEffect(() => {
    if (!supabase) {
      setStatus('Supabase URL is set. Add the anon public key to activate live onboarding data.');
      return;
    }

    supabase.auth.getSession()
      .then(({ error }) => {
        setStatus(error ? `Supabase responded with: ${error.message}` : 'Supabase client is ready for auth, client records, and workflow data.');
      })
      .catch(() => setStatus('Supabase client loaded, but the browser could not complete the session check.'));
  }, [supabase]);

  return (
    <main className="console">
      <aside className="rail">
        <a className="home" href="/">DigiMark101</a>
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
            <h1>Answer the questions. Ava builds the business system.</h1>
          </div>
          <div className={ready ? 'status online' : 'status pending'}>
            <strong>{ready ? 'Data layer ready' : 'Anon key pending'}</strong>
            <span>{status}</span>
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
            <h2>Launch Mission</h2>
            <div className="missionGrid">
              <div><span>Client</span><strong>New brand buildout</strong></div>
              <div><span>Seat Tier</span><strong>Growth / Studio ready</strong></div>
              <div><span>Channels</span><strong>Meta, YouTube, WhatsApp, Web</strong></div>
              <div><span>Output</span><strong>Agency-in-a-box workflow</strong></div>
            </div>
          </div>
        </section>

        <section className="workstreams">
          <div className="sectionTop">
            <p className="eyebrow">Delegated agent workstreams</p>
            <h2>Ava manages the team and checks completion.</h2>
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
        .home { display: block; color: #fff; text-decoration: none; font-weight: 1000; letter-spacing: -.04em; margin-bottom: 2rem; }
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
        .status span { color: rgba(226,232,240,.7); line-height: 1.5; }
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
