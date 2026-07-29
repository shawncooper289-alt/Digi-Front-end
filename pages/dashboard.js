import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

const modules = [
  { title: 'Campaign Command', detail: 'Plan launches, funnels, and follow-ups from one workspace.' },
  { title: 'Ava Knowledge Base', detail: 'Keep brand guidance, offers, and client notes close to the assistant.' },
  { title: 'Client Pipeline', detail: 'Supabase can back contacts, opportunities, and activity history.' },
];

export default function Dashboard() {
  const [status, setStatus] = useState('Checking Supabase configuration...');
  const ready = hasSupabaseConfig();
  const supabase = useMemo(() => createSupabaseClient(), []);

  useEffect(() => {
    if (!supabase) {
      setStatus('Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel to turn on live data.');
      return;
    }

    supabase.auth.getSession()
      .then(({ error }) => {
        setStatus(error ? `Supabase responded with: ${error.message}` : 'Supabase client is ready for auth and data.');
      })
      .catch(() => setStatus('Supabase client loaded, but the browser could not complete the session check.'));
  }, [supabase]);

  return (
    <main className="dashboard">
      <section className="panel">
        <a href="/" className="back">← Home</a>
        <p className="eyebrow">Ava OS Dashboard</p>
        <h1>Marketing automation cockpit</h1>
        <p className="lead">This keeps the same DigiMark101 feel while moving the app toward a Vercel + Supabase foundation.</p>

        <div className="status">
          <strong>{ready ? 'Connected foundation' : 'Waiting on Supabase env vars'}</strong>
          <span>{status}</span>
        </div>

        <div className="cards">
          {modules.map((module) => (
            <article key={module.title}>
              <h2>{module.title}</h2>
              <p>{module.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .dashboard { min-height: 100vh; padding: 2rem; color: #f8fafc; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; background: radial-gradient(circle at top left, rgba(59,130,246,.24), transparent 28rem), radial-gradient(circle at bottom right, rgba(236,72,153,.2), transparent 24rem), #050816; }
        .panel { max-width: 1040px; margin: 0 auto; }
        .back { color: #93c5fd; text-decoration: none; font-weight: 800; }
        .eyebrow { margin-top: 3rem; color: #f0abfc; font-size: .82rem; text-transform: uppercase; letter-spacing: .18em; font-weight: 900; }
        h1 { font-size: clamp(2.4rem, 6vw, 5rem); max-width: 780px; margin: .5rem 0 1rem; line-height: 1; letter-spacing: -.05em; }
        .lead { max-width: 700px; color: rgba(248,250,252,.76); font-size: 1.2rem; line-height: 1.7; }
        .status { margin: 2rem 0; padding: 1.25rem; border: 1px solid rgba(148,163,184,.25); border-radius: 1.25rem; background: rgba(15,23,42,.72); display: grid; gap: .4rem; }
        .status strong { color: #86efac; }
        .status span { color: rgba(248,250,252,.74); }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        article { min-height: 180px; padding: 1.5rem; border-radius: 1.25rem; background: linear-gradient(135deg, rgba(59,130,246,.16), rgba(236,72,153,.12)); border: 1px solid rgba(148,163,184,.25); box-shadow: 0 20px 60px rgba(2,6,23,.28); }
        h2 { margin: 0 0 .75rem; }
        article p { color: rgba(248,250,252,.75); line-height: 1.6; }
        @media (max-width: 760px) { .cards { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}
