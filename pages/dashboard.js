import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

const questions = [
  'What business are we building and who is it for?',
  'What offer, pricing, and client plan should the AI workflow optimize around?',
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
  const [avaInput, setAvaInput] = useState('');
  const [avaMessages, setAvaMessages] = useState([
    { role: 'assistant', content: 'Welcome back. I am Ava Skye, your AI chief of staff. Tell me what you want to build, and I will delegate the work to the right specialist agents.' },
  ]);
  const [avaThinking, setAvaThinking] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('Voice ready when your browser supports speech.');
  const [founderSummary, setFounderSummary] = useState(null);
  const [founderSummaryError, setFounderSummaryError] = useState('');
  const ready = hasSupabaseConfig;
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

  useEffect(() => {
    if (!access?.allowed || access.role !== 'founder' || !supabase) return;
    let active = true;

    async function loadFounderSummary() {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) return;
      const response = await fetch('/api/founder-summary', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await response.json().catch(() => ({}));
      if (!active) return;
      if (!response.ok) {
        setFounderSummaryError(result.error || 'Founder Hub data could not be loaded.');
        return;
      }
      setFounderSummary(result);
    }

    loadFounderSummary();
    return () => { active = false; };
  }, [access, supabase]);

  function chooseAvaVoice() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    return voices.find((voice) => voice.lang?.startsWith('en-US') && /female|samantha|victoria|jenny|aria|zira|google us english/i.test(voice.name))
      || voices.find((voice) => voice.lang?.startsWith('en-US'))
      || voices.find((voice) => voice.lang?.startsWith('en'))
      || null;
  }

  function speakAsAva(text) {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setVoiceStatus('Spoken replies are not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = chooseAvaVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || 'en-US';
    utterance.rate = 0.94;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
    setVoiceStatus(voice ? `Speaking with ${voice.name}.` : 'Speaking with the best available English voice.');
  }

  function listenForAvaInput() {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceStatus('Speech input is not supported in this browser. Try Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onstart = () => setVoiceStatus('Listening for your message to Ava...');
    recognition.onerror = () => setVoiceStatus('Voice input stopped. You can type the message instead.');
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || '';
      setAvaInput(transcript);
      setVoiceStatus('Voice captured. Send it to Ava when ready.');
    };
    recognition.start();
  }

  async function askAva(event) {
    event.preventDefault();
    const message = avaInput.trim();
    if (!message || avaThinking) return;

    const nextMessages = [...avaMessages, { role: 'user', content: message }];
    setAvaMessages(nextMessages);
    setAvaInput('');
    setAvaThinking(true);

    try {
      const { data: sessionData } = supabase ? await supabase.auth.getSession() : { data: null };
      const accessToken = sessionData?.session?.access_token;

      const response = await fetch('/api/ava', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify({ message, history: avaMessages }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ava Skye is not configured yet.');
      }

      setAvaMessages([...nextMessages, { role: 'assistant', content: result.reply }]);
      speakAsAva(result.reply);
    } catch (error) {
      const fallback = error.message || 'Ava Skye could not respond right now.';
      setAvaMessages([...nextMessages, { role: 'assistant', content: fallback }]);
      setVoiceStatus(fallback);
    } finally {
      setAvaThinking(false);
    }
  }

  if (checking) {
    return (
      <main className="gate">
        <div>
          <img src="/digimark101-logo.svg" alt="DigiMark101 logo" />
          <p>Opening DigiMark101 command center...</p>
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
          {access?.role === 'founder' && <a href="#founder-hub">Founder Hub</a>}
          <a href="/dashboard-sales">Lead Sales</a>
          <span>Agents</span>
          <span>Studio</span>
          <span>Funnels</span>
        </nav>
      </aside>

      <section className="main">
        <header>
          <div>
            <p className="eyebrow">AI-Guided Build Room</p>
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
              <div className="workflowMark" aria-hidden="true">DM</div>
              <div>
                <strong>Guided workspace</strong>
                <span>Client briefing, task delegation, and launch progress in one place.</span>
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


        <section className="avaChat">
          <div className="chatHeader">
            <div>
              <p className="eyebrow">Talk to Ava Skye</p>
              <h2>Speak or type. Ava delegates the work to her specialist AI workforce.</h2>
            </div>
            <button type="button" className="voiceButton" onClick={listenForAvaInput}>Speak to Ava</button>
          </div>
          <div className="conversation">
            {avaMessages.map((message, index) => (
              <div className={message.role === 'assistant' ? 'bubble avaBubble' : 'bubble userBubble'} key={`${message.role}-${index}`}>
                <strong>{message.role === 'assistant' ? 'Ava Skye' : 'You'}</strong>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <form className="avaComposer" onSubmit={askAva}>
            <textarea
              value={avaInput}
              onChange={(event) => setAvaInput(event.target.value)}
              placeholder="Tell Ava what the client needs, or tap Speak to Ava."
              rows={3}
            />
            <button type="submit" disabled={avaThinking || !avaInput.trim()}>{avaThinking ? 'Ava is delegating...' : 'Send to Ava'}</button>
          </form>
          <p className="voiceStatus">{voiceStatus}</p>
        </section>

        {access?.role === 'founder' && (
          <section id="founder-hub" className="founderHub">
            <div className="sectionTop">
              <div>
                <p className="eyebrow">Founder Hub</p>
                <h2>Business operations at a glance.</h2>
              </div>
              <a className="hubLink" href="/dashboard-sales">Open lead sales</a>
            </div>
            {founderSummaryError && <p className="hubNotice">{founderSummaryError}</p>}
            {!founderSummary && !founderSummaryError && <p className="hubNotice">Loading live business records...</p>}
            {founderSummary && (
              <>
                <div className="hubMetrics">
                  <article><span>Lead requests</span><strong>{founderSummary.requests.length}</strong></article>
                  <article><span>Checkout requests</span><strong>{founderSummary.checkouts.length}</strong></article>
                  <article><span>Recent orders</span><strong>{founderSummary.orders.length}</strong></article>
                </div>
                {!founderSummary.dataAvailable && <p className="hubNotice">Some data tables are not available yet. Run the included Supabase schema files to populate this hub.</p>}
                <div className="hubLists">
                  <article>
                    <h3>Lead requests</h3>
                    {founderSummary.requests.length ? founderSummary.requests.map((item) => <p key={item.id}><strong>{item.client_name}</strong><span>{item.package_name} · {item.status}</span></p>) : <p>No lead requests yet.</p>}
                  </article>
                  <article>
                    <h3>Checkout requests</h3>
                    {founderSummary.checkouts.length ? founderSummary.checkouts.map((item) => <p key={item.id}><strong>{item.customer_name}</strong><span>{item.package_name} · {item.payment_status}</span></p>) : <p>No checkout requests yet.</p>}
                  </article>
                  <article>
                    <h3>Orders</h3>
                    {founderSummary.orders.length ? founderSummary.orders.map((item) => <p key={item.id}><strong>{item.customer_email}</strong><span>{item.status} · {item.currency} {(item.total_cents / 100).toFixed(2)}</span></p>) : <p>No orders yet.</p>}
                  </article>
                </div>
              </>
            )}
          </section>
        )}

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
        nav span, nav a { padding: .9rem 1rem; border-radius: 1rem; color: rgba(226,232,240,.65); font-weight: 850; text-decoration: none; }
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
        .workflowMark { width: 92px; height: 92px; display: grid; place-items: center; border-radius: 1rem; border: 1px solid rgba(255,255,255,.18); color: #fff; font-size: 1.7rem; font-weight: 1000; letter-spacing: -.08em; background: linear-gradient(135deg, #2563eb, #db2777); }
        .studioPreview strong, .studioPreview span { display: block; }
        .studioPreview strong { margin-bottom: .3rem; }
        .studioPreview span { color: rgba(226,232,240,.72); line-height: 1.45; }
        .missionGrid { display: grid; gap: .85rem; margin-top: 1.5rem; }
        .missionGrid div { display: grid; gap: .35rem; padding: 1rem; border-radius: 1rem; background: rgba(2,6,23,.42); }
        .missionGrid span, article span { color: #93c5fd; font-size: .78rem; font-weight: 950; text-transform: uppercase; letter-spacing: .1em; }
        .missionGrid strong { font-size: 1.08rem; }
        .founderHub { margin-bottom: 3rem; padding: 1.25rem; border-radius: 1.5rem; border: 1px solid rgba(134,239,172,.26); background: linear-gradient(145deg, rgba(15,23,42,.82), rgba(22,101,52,.12)); }
        .hubLink { display: inline-flex; align-items: center; border: 1px solid rgba(134,239,172,.35); color: #bbf7d0; text-decoration: none; border-radius: 999px; padding: .75rem 1rem; font-weight: 900; }
        .hubNotice { margin: 0 0 1rem; color: rgba(226,232,240,.76); }
        .hubMetrics, .hubLists { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .hubMetrics article, .hubLists article { min-height: auto; padding: 1rem; background: rgba(2,6,23,.42); }
        .hubMetrics span { display: block; color: #bbf7d0; font-size: .75rem; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }
        .hubMetrics strong { display: block; margin-top: .45rem; font-size: 2.4rem; }
        .hubLists h3 { margin: 0 0 1rem; }
        .hubLists p { display: grid; gap: .25rem; margin: 0; padding: .7rem 0; border-top: 1px solid rgba(148,163,184,.14); }
        .hubLists span { color: rgba(226,232,240,.62); font-size: .88rem; }
        .avaChat { margin-bottom: 3rem; padding: 1.25rem; border-radius: 1.5rem; border: 1px solid rgba(148,163,184,.18); background: linear-gradient(145deg, rgba(15,23,42,.78), rgba(37,99,235,.12)); box-shadow: 0 25px 80px rgba(2,6,23,.3); }
        .chatHeader { display: flex; justify-content: space-between; gap: 1rem; align-items: start; margin-bottom: 1rem; }
        .chatHeader h2 { max-width: 820px; margin-bottom: 0; }
        .voiceButton { white-space: nowrap; color: #fff; background: linear-gradient(135deg, #2563eb, #db2777); box-shadow: 0 18px 55px rgba(37,99,235,.25); }
        .conversation { display: grid; gap: .85rem; max-height: 460px; overflow: auto; padding: .25rem; }
        .bubble { width: min(760px, 100%); padding: 1rem; border-radius: 1.1rem; border: 1px solid rgba(148,163,184,.18); }
        .bubble strong { display: block; margin-bottom: .35rem; color: #bfdbfe; }
        .bubble p { margin: 0; color: rgba(226,232,240,.8); line-height: 1.65; }
        .avaBubble { background: rgba(2,6,23,.55); }
        .userBubble { justify-self: end; background: rgba(37,99,235,.18); }
        .avaComposer { display: grid; grid-template-columns: 1fr auto; gap: .85rem; margin-top: 1rem; align-items: end; }
        textarea { width: 100%; box-sizing: border-box; resize: vertical; border: 1px solid rgba(147,197,253,.22); border-radius: 1rem; padding: 1rem; color: #fff; background: rgba(2,6,23,.62); outline: none; font: inherit; }
        textarea:focus { border-color: rgba(147,197,253,.72); box-shadow: 0 0 0 4px rgba(59,130,246,.14); }
        .voiceStatus { margin: .85rem 0 0; color: rgba(226,232,240,.62); font-size: .9rem; }
        .sectionTop { display: flex; justify-content: space-between; align-items: end; gap: 2rem; margin-bottom: 1rem; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        article { padding: 1.15rem; min-height: 180px; }
        article h3 { font-size: 1.35rem; margin: .7rem 0; }
        article p { color: rgba(226,232,240,.72); line-height: 1.6; }
        @media (max-width: 980px) { .console { grid-template-columns: 1fr; } .rail { position: static; border-right: 0; border-bottom: 1px solid rgba(148,163,184,.16); } .rail nav { display: flex; overflow: auto; } header, .builder { grid-template-columns: 1fr; } .cards, .hubMetrics, .hubLists { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .main { padding: 1rem; } .cards, .hubMetrics, .hubLists { grid-template-columns: 1fr; } .sectionTop, .chatHeader { display: block; } .avaComposer { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}
