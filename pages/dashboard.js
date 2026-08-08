import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState({ campaigns: [], leads: [], health: null });

  useEffect(() => {
    Promise.all([
      fetch('/api/health').then((response) => response.json()),
      fetch('/api/campaigns').then((response) => response.json()),
      fetch('/api/leads').then((response) => response.json())
    ])
      .then(([health, campaigns, leads]) => {
        setData({
          health,
          campaigns: campaigns.campaigns || [],
          leads: leads.leads || []
        });
      })
      .catch((error) => {
        setData({ campaigns: [], leads: [], health: { ok: false, error: error.message } });
      });
  }, []);

  return (
    <main className="page-shell">
      <div className="container">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">D</span>
            <span>DigiMark101 dashboard</span>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/api/health">API health</a>
          </div>
        </nav>

        <section>
          <p className="eyebrow">Vercel API routes + Supabase data</p>
          <h1>Operations dashboard</h1>
          <p className="lede">
            This dashboard reads through Vercel API routes. Add Supabase tables from `supabase/schema.sql` to make the data live.
          </p>
        </section>

        <section className="status-grid section">
          <article className="panel">
            <span className={data.health?.ok ? 'status-pill' : 'status-pill warning'}>
              {data.health?.ok ? 'Connected' : 'Needs schema/env check'}
            </span>
            <h2>Supabase status</h2>
            <p className="muted">{data.health?.ok ? 'Runtime connection is healthy.' : data.health?.error || 'Checking...'}</p>
          </article>
          <article className="panel">
            <h2>{data.campaigns.length}</h2>
            <p className="muted">Campaigns returned by the backend route.</p>
          </article>
          <article className="panel">
            <h2>{data.leads.length}</h2>
            <p className="muted">Recent leads returned by Supabase.</p>
          </article>
        </section>

        <section className="section hero" style={{ alignItems: 'start' }}>
          <div>
            <h2>Campaigns</h2>
            <div className="table-list">
              {data.campaigns.map((campaign) => (
                <article className="row" key={campaign.id}>
                  <strong>{campaign.name}</strong>
                  <span className="muted">{campaign.status || 'draft'} · {campaign.channel || 'web'}</span>
                  <span>{campaign.description}</span>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2>Recent leads</h2>
            <div className="table-list">
              {data.leads.length ? (
                data.leads.map((lead) => (
                  <article className="row" key={lead.id}>
                    <strong>{lead.name}</strong>
                    <span className="muted">{lead.email} {lead.company ? `· ${lead.company}` : ''}</span>
                    <span>{lead.message || 'No message provided.'}</span>
                  </article>
                ))
              ) : (
                <article className="row">
                  <strong>No leads yet</strong>
                  <span className="muted">Submit the lead form after creating the Supabase tables.</span>
                </article>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
