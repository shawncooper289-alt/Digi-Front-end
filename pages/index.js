import { useEffect, useState } from 'react';
import { hasSupabaseConfig } from '../lib/supabaseClient';

const features = [
  'AI-powered marketing automation',
  'Client dashboard foundation',
  'Supabase-ready data layer',
  'Vercel production deployment',
];

export default function Home() {
  const [message, setMessage] = useState('Initializing Dynasty...');
  const [loading, setLoading] = useState(true);
  const supabaseReady = hasSupabaseConfig();

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMessage('Welcome to Your Digital Dynasty');
        setLoading(false);
      });
  }, []);

  return (
    <main className="shell">
      <div className="orb orbBlue" />
      <div className="orb orbPink" />

      <section className="hero">
        <p className="eyebrow">DigiMark101 • Ava OS</p>
        <h1>Your Digital Dynasty Starts Here</h1>
        <p className="subtitle">
          Advanced AI-powered marketing automation rebuilt for Vercel with a Supabase-ready backend.
        </p>

        <div className="statusCard">
          <div>
            <span className="statusLabel">System Status</span>
            <h2>{loading ? 'Initializing...' : message}</h2>
          </div>
          <span className={supabaseReady ? 'pill online' : 'pill pending'}>
            {supabaseReady ? 'Supabase connected' : 'Supabase env needed'}
          </span>
        </div>

        <div className="actions">
          <a className="primary" href="/dashboard">Enter Dashboard</a>
          <button
            className="secondary"
            onClick={() => {
              fetch('/api/hello', { method: 'POST' })
                .then((res) => res.json())
                .then((data) => setMessage(data.message))
                .catch(() => setMessage('Error connecting to backend'));
            }}
          >
            Test Ava OS
          </button>
        </div>

        <div className="grid">
          {features.map((feature) => (
            <div className="feature" key={feature}>{feature}</div>
          ))}
        </div>

        <p className="footer">
          Powered by Ava OS • Supabase Backend • Ava Knowledge Base<br />
          <small>Deployed on Vercel • Responsive • Production-ready foundation</small>
        </p>
      </section>

      <style jsx>{`
        .shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #050816 0%, #0f1419 50%, #1a1f2e 100%);
          color: #f9fafb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .orb { position: absolute; border-radius: 999px; filter: blur(2px); animation: float 7s ease-in-out infinite; }
        .orbBlue { width: 420px; height: 420px; top: -210px; left: -180px; background: radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%); }
        .orbPink { width: 340px; height: 340px; right: -140px; bottom: -150px; background: radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 70%); animation-direction: reverse; }
        .hero { position: relative; z-index: 2; width: min(920px, 100%); animation: slideUp 0.8s ease-out both; }
        .eyebrow { color: #93c5fd; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; font-size: .8rem; }
        h1 { font-size: clamp(2.7rem, 7vw, 5.5rem); line-height: .95; margin: .5rem 0 1rem; font-weight: 900; letter-spacing: -0.06em; background: linear-gradient(135deg, #60a5fa 0%, #ec4899 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { max-width: 720px; margin: 0 auto 2rem; color: rgba(249,250,251,.82); font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.7; }
        .statusCard { display: flex; align-items: center; justify-content: space-between; gap: 1rem; text-align: left; margin: 0 auto 2rem; max-width: 720px; padding: 1.4rem; border-radius: 1.25rem; background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(236,72,153,0.12)); border: 1px solid rgba(148,163,184,0.3); box-shadow: 0 20px 60px rgba(15,23,42,0.35); backdrop-filter: blur(12px); }
        .statusLabel { color: #93c5fd; font-weight: 700; font-size: .85rem; }
        h2 { margin: .35rem 0 0; font-size: 1.2rem; }
        .pill { white-space: nowrap; border-radius: 999px; padding: .65rem .9rem; font-size: .85rem; font-weight: 800; }
        .online { color: #052e16; background: #86efac; }
        .pending { color: #431407; background: #fdba74; }
        .actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
        .primary, .secondary { border-radius: 999px; padding: 1rem 1.5rem; font-weight: 900; font-size: 1rem; cursor: pointer; transition: .25s ease; text-decoration: none; }
        .primary { color: #fff; border: 0; background: linear-gradient(135deg, #3b82f6, #ec4899); box-shadow: 0 15px 35px rgba(59,130,246,.35), 0 0 60px rgba(236,72,153,.18); }
        .secondary { color: #fff; background: transparent; border: 2px solid rgba(148,163,184,0.5); }
        .primary:hover, .secondary:hover { transform: translateY(-2px); }
        .secondary:hover { border-color: rgba(96,165,250,.85); background: rgba(59,130,246,.1); }
        .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: .8rem; margin: 0 auto; max-width: 820px; }
        .feature { padding: 1rem; border: 1px solid rgba(148,163,184,.22); border-radius: 1rem; background: rgba(15,23,42,.5); color: rgba(249,250,251,.82); }
        .footer { margin-top: 2.5rem; opacity: .65; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(28px); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 760px) { .statusCard { flex-direction: column; text-align: center; } .grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}
