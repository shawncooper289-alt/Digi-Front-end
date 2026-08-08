import { useEffect, useState } from 'react';

const features = [
  'Vercel-hosted Next.js frontend',
  'Supabase-backed API routes',
  'Server-side environment variable access',
  'Production-ready deployment flow'
];

export default function Home() {
  const [status, setStatus] = useState({
    message: 'Checking Supabase backend...',
    connected: false,
    detail: 'Initializing Vercel runtime.'
  });
  const [loading, setLoading] = useState(true);

  async function refreshStatus(method = 'GET') {
    setLoading(true);

    try {
      const response = await fetch('/api/hello', { method });
      const data = await response.json();

      setStatus({
        message: data.message,
        connected: Boolean(data.connected),
        detail: data.detail || 'Supabase status returned from Vercel.'
      });
    } catch (error) {
      setStatus({
        message: 'Vercel frontend is live, but the backend status check failed.',
        connected: false,
        detail: error instanceof Error ? error.message : 'Unknown network error.'
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshStatus();
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 48%, #111827 100%)',
        color: '#f8fafc',
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          top: -180,
          left: -160
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.16) 0%, transparent 70%)',
          bottom: -150,
          right: -130
        }}
      />

      <section style={{ position: 'relative', zIndex: 1, width: 'min(920px, 100%)' }}>
        <p style={{ color: '#38bdf8', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          Vercel frontend + Supabase backend
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1,
            margin: '0.5rem 0 1rem',
            fontWeight: 900,
            letterSpacing: '-0.06em'
          }}
        >
          DigiMark101 runs on Vercel and Supabase.
        </h1>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1.2rem',
            maxWidth: 720,
            margin: '0 auto 2rem',
            lineHeight: 1.7
          }}
        >
          The frontend is served by Vercel. Backend reads and writes should go through Supabase using Vercel API routes so private keys stay server-side.
        </p>

        <div
          style={{
            background: 'rgba(15, 23, 42, 0.72)',
            border: '1px solid rgba(148, 163, 184, 0.24)',
            borderRadius: 24,
            boxShadow: '0 24px 80px rgba(2, 6, 23, 0.42)',
            padding: '2rem',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(18px)'
          }}
        >
          <h2 style={{ marginTop: 0, color: status.connected ? '#34d399' : '#f59e0b' }}>
            {loading ? 'Checking backend...' : status.connected ? 'Supabase connected' : 'Supabase needs attention'}
          </h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{status.message}</p>
          <p style={{ color: '#94a3b8', margin: 0 }}>{status.detail}</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <button
            onClick={() => refreshStatus('POST')}
            style={{
              padding: '0.95rem 1.5rem',
              borderRadius: 999,
              border: 0,
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #0ea5e9, #10b981)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '1rem'
            }}
          >
            Test Supabase connection
          </button>
          <a
            href="/dashboard"
            style={{
              padding: '0.95rem 1.5rem',
              borderRadius: 999,
              border: '1px solid rgba(148,163,184,0.36)',
              color: '#e2e8f0',
              textDecoration: 'none',
              fontWeight: 800
            }}
          >
            Open dashboard
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1rem',
            textAlign: 'left'
          }}
        >
          {features.map((feature) => (
            <div
              key={feature}
              style={{
                padding: '1rem',
                borderRadius: 16,
                border: '1px solid rgba(148, 163, 184, 0.2)',
                background: 'rgba(15, 23, 42, 0.48)'
              }}
            >
              <strong>{feature}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
