import { useEffect, useState } from 'react';

const stack = [
  ['Frontend', 'Next.js pages deployed on Vercel with production and preview URLs.'],
  ['Backend', 'Supabase Postgres, Auth-ready keys, and REST endpoints behind Vercel API routes.'],
  ['Security', 'Service role and Postgres credentials stay server-side inside Vercel functions.'],
  ['Deployments', 'Git pushes trigger Vercel builds using the project Supabase environment variables.']
];

const initialLead = {
  name: '',
  email: '',
  company: '',
  message: ''
};

export default function Home() {
  const [health, setHealth] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [lead, setLead] = useState(initialLead);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  useEffect(() => {
    Promise.all([
      fetch('/api/health').then((response) => response.json()),
      fetch('/api/campaigns').then((response) => response.json())
    ])
      .then(([healthData, campaignData]) => {
        setHealth(healthData);
        setCampaigns(campaignData.campaigns || []);
      })
      .catch((error) => {
        setHealth({ ok: false, error: error.message });
      });
  }, []);

  async function submitLead(event) {
    event.preventDefault();
    setFormState({ status: 'loading', message: 'Sending lead to Supabase...' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      });
      const data = await response.json();

      if (!response.ok) {
        setFormState({ status: 'error', message: data.error || 'Unable to save lead.' });
        return;
      }

      setLead(initialLead);
      setFormState({ status: 'success', message: 'Lead saved through the Vercel API route into Supabase.' });
    } catch (error) {
      setFormState({ status: 'error', message: error.message || 'Unable to reach the lead API route.' });
    }
  }

  const isConnected = Boolean(health?.ok);

  return (
    <main className="page-shell">
      <div className="container">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">D</span>
            <span>DigiMark101</span>
          </div>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/api/health">API health</a>
          </div>
        </nav>

        <section className="hero">
          <div>
            <p className="eyebrow">Built for Vercel + Supabase</p>
            <h1>Your marketing OS is now a real Vercel frontend with a Supabase backend.</h1>
            <p className="lede">
              This rewrite moves the app to a Vercel-native architecture: Next.js for the interface,
              Vercel API routes for server logic, and Supabase for Postgres-backed customer data.
            </p>
            <div className="status-grid" style={{ marginTop: '2rem' }}>
              {stack.map(([title, description]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p className="muted">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="panel">
            <span className={isConnected ? 'status-pill' : 'status-pill warning'}>
              {isConnected ? 'Supabase connected' : 'Supabase setup check'}
            </span>
            <h2 style={{ marginTop: '1.25rem' }}>Backend status</h2>
            <p className="muted">
              {health
                ? health.ok
                  ? 'Vercel can reach Supabase using the configured project environment variables.'
                  : health.error || 'Supabase is not fully configured yet.'
                : 'Checking the Vercel API route now...'}
            </p>
            <div className="card-grid">
              <div className="card">
                <strong>Frontend</strong>
                <p className="muted">Vercel</p>
              </div>
              <div className="card">
                <strong>Backend</strong>
                <p className="muted">Supabase</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="section hero" style={{ alignItems: 'start' }}>
          <div className="panel">
            <p className="eyebrow">Lead capture</p>
            <h2>Save customer leads through Supabase.</h2>
            <form className="form" onSubmit={submitLead}>
              <input className="input" placeholder="Name" value={lead.name} onChange={(event) => setLead({ ...lead, name: event.target.value })} />
              <input className="input" placeholder="Email" value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} />
              <input className="input" placeholder="Company" value={lead.company} onChange={(event) => setLead({ ...lead, company: event.target.value })} />
              <textarea className="textarea" placeholder="What should DigiMark101 help with?" value={lead.message} onChange={(event) => setLead({ ...lead, message: event.target.value })} />
              <button className="button primary" type="submit" disabled={formState.status === 'loading'}>
                {formState.status === 'loading' ? 'Saving...' : 'Create Supabase lead'}
              </button>
              {formState.message ? <div className={`notice ${formState.status}`}>{formState.message}</div> : null}
            </form>
          </div>

          <div>
            <p className="eyebrow">Campaign backend</p>
            <h2>Campaigns are served by `/api/campaigns`.</h2>
            <div className="table-list">
              {campaigns.map((campaign) => (
                <article className="row" key={campaign.id}>
                  <strong>{campaign.name}</strong>
                  <span className="muted">{campaign.channel || 'web'} · {campaign.status || 'draft'}</span>
                  <span>{campaign.description}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
