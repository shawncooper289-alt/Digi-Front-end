const modules = [
  'Campaign data in Supabase tables',
  'Lead capture through Vercel API routes',
  'Server-side service role access only inside API routes',
  'Public browser access limited to publishable Supabase keys'
];

export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#020617',
        color: '#f8fafc',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        padding: '3rem 1.5rem'
      }}
    >
      <section style={{ maxWidth: 960, margin: '0 auto' }}>
        <a href="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 700 }}>
          ← Back home
        </a>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>Supabase dashboard shell</h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.7 }}>
          This page is ready for Supabase-backed modules. Add tables for clients, campaigns, leads, and analytics, then connect each feature through Vercel API routes.
        </p>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
          {modules.map((module) => (
            <div
              key={module}
              style={{
                padding: '1.25rem',
                borderRadius: 18,
                background: 'rgba(15, 23, 42, 0.82)',
                border: '1px solid rgba(148, 163, 184, 0.22)'
              }}
            >
              {module}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
