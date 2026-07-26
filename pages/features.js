import Head from 'next/head';
import DigiMarkLogo from '../components/DigiMarkLogo';
import { isSupabaseConfigured } from '../lib/supabaseClient';

const features = [
  {
    title: 'AI Marketing Automation',
    description: 'Launch campaigns, generate copy, and coordinate follow-ups with Ava OS workflows designed for growth teams.',
    icon: 'AI'
  },
  {
    title: 'Smart Campaign Builder',
    description: 'Plan offers, audiences, creatives, channels, and schedules from one guided workspace.',
    icon: 'CB'
  },
  {
    title: 'Supabase Data Layer',
    description: 'Use Supabase for auth-ready records, realtime updates, and a scalable Postgres-backed backend.',
    icon: 'SB'
  },
  {
    title: 'Social Media Manager',
    description: 'Create platform-ready posts, organize content calendars, and keep brand messaging consistent.',
    icon: 'SM'
  },
  {
    title: 'Email Marketing',
    description: 'Build sequences, nurture leads, and connect every campaign to the same customer profile.',
    icon: 'EM'
  },
  {
    title: 'Growth Analytics',
    description: 'Track funnel performance, campaign ROI, engagement, and client-ready reporting in one place.',
    icon: 'GA'
  }
];

const workflow = [
  'Capture leads and customer signals',
  'Store campaign and client data in Supabase',
  'Let Ava OS recommend the next best action',
  'Publish, follow up, and measure growth'
];

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | DigiMark101</title>
        <meta
          name="description"
          content="AI-powered marketing automation features backed by Supabase."
        />
      </Head>

      <main className="page-shell">
        <section className="hero">
          <nav className="nav">
            <a href="/" className="brand" aria-label="DigiMark101 home"><DigiMarkLogo compact /></a>
            <div className="nav-links">
              <a href="/#dashboard">Dashboard</a>
              <a href="/features">Features</a>
              <a href="/#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div>
              <p className="eyebrow">Ava OS + Supabase</p>
              <h1>Smart growth systems for modern marketing teams.</h1>
              <p className="hero-copy">
                Mirror your Base44 growth flow with a Vercel frontend and a Supabase backend built for campaigns,
                client portals, realtime insights, and AI-assisted execution.
              </p>
              <div className="actions">
                <a className="primary" href="/#dashboard">Enter Dashboard</a>
                <a className="secondary" href="#features">Explore Features</a>
              </div>
              <div className="status-pill">
                <span className={isSupabaseConfigured ? 'dot online' : 'dot'} />
                {isSupabaseConfigured ? 'Supabase connection variables detected' : 'Waiting for Supabase env vars'}
              </div>
            </div>

            <div className="hero-card" aria-label="Growth workflow summary">
              <div className="card-header">
                <span>Growth Flow</span>
                <strong>Live Smart</strong>
              </div>
              {workflow.map((step, index) => (
                <div className="timeline-row" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <p className="eyebrow centered">Platform Features</p>
          <h2>Everything needed to attract, convert, and retain customers.</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="integration-section">
          <div>
            <p className="eyebrow">Backend Ready</p>
            <h2>Supabase replaces the Base44 backend layer.</h2>
            <p>
              The frontend now expects public Supabase connection variables and keeps sensitive service-role keys out
              of browser code. Add tables, auth rules, and edge functions in Supabase while Vercel serves the UI.
            </p>
          </div>
          <div className="env-card">
            <code>NEXT_PUBLIC_SUPABASE_URL</code>
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #050816;
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(59, 130, 246, 0.22), transparent 36rem),
            radial-gradient(circle at top right, rgba(236, 72, 153, 0.18), transparent 32rem),
            linear-gradient(135deg, #050816 0%, #0f172a 55%, #111827 100%);
          overflow: hidden;
        }

        .hero,
        .features-section,
        .integration-section {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .hero {
          padding: 28px 0 80px;
        }

        .nav,
        .nav-links,
        .actions,
        .status-pill,
        .card-header,
        .timeline-row,
        .integration-section,
        .env-card {
          display: flex;
          align-items: center;
        }

        .nav {
          justify-content: space-between;
          margin-bottom: 88px;
        }

        .brand,
        .nav a,
        .actions a {
          color: inherit;
          text-decoration: none;
        }

        .brand {
          font-weight: 900;
          letter-spacing: -0.04em;
          font-size: 1.25rem;
        }

        .nav-links {
          gap: 22px;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #60a5fa;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .centered {
          text-align: center;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          margin-bottom: 24px;
          font-size: clamp(3rem, 7vw, 5.9rem);
          line-height: 0.92;
          letter-spacing: -0.07em;
          max-width: 760px;
        }

        h2 {
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1;
          letter-spacing: -0.055em;
          margin-bottom: 34px;
        }

        .hero-copy,
        .integration-section p {
          color: #cbd5e1;
          font-size: 1.1rem;
          line-height: 1.75;
          max-width: 670px;
        }

        .actions {
          gap: 14px;
          flex-wrap: wrap;
          margin: 34px 0 18px;
        }

        .primary,
        .secondary {
          border-radius: 999px;
          padding: 15px 24px;
          font-weight: 800;
        }

        .primary {
          background: linear-gradient(135deg, #3b82f6, #ec4899);
          box-shadow: 0 18px 45px rgba(59, 130, 246, 0.32);
        }

        .secondary {
          border: 1px solid rgba(148, 163, 184, 0.35);
          color: #e2e8f0;
        }

        .status-pill {
          gap: 10px;
          color: #cbd5e1;
          font-size: 0.92rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #f59e0b;
          box-shadow: 0 0 24px rgba(245, 158, 11, 0.9);
        }

        .dot.online {
          background: #34d399;
          box-shadow: 0 0 24px rgba(52, 211, 153, 0.9);
        }

        .hero-card,
        .feature-card,
        .integration-section {
          background: rgba(15, 23, 42, 0.74);
          border: 1px solid rgba(148, 163, 184, 0.22);
          box-shadow: 0 24px 90px rgba(2, 6, 23, 0.32);
          backdrop-filter: blur(18px);
        }

        .hero-card {
          border-radius: 32px;
          padding: 28px;
          transform: rotate(1.5deg);
        }

        .card-header {
          justify-content: space-between;
          color: #94a3b8;
          margin-bottom: 26px;
        }

        .card-header strong {
          color: #f8fafc;
        }

        .timeline-row {
          gap: 16px;
          padding: 18px;
          margin-top: 14px;
          border-radius: 20px;
          background: rgba(30, 41, 59, 0.75);
        }

        .timeline-row span,
        .icon {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.28), rgba(236, 72, 153, 0.28));
          color: #bfdbfe;
          font-weight: 900;
        }

        .timeline-row p {
          margin: 0;
          color: #e2e8f0;
          line-height: 1.5;
        }

        .features-section {
          padding: 30px 0 80px;
          text-align: center;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          text-align: left;
        }

        .feature-card {
          border-radius: 24px;
          padding: 26px;
          transition: transform 180ms ease, border-color 180ms ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 165, 250, 0.55);
        }

        .feature-card h3 {
          margin: 18px 0 10px;
          font-size: 1.18rem;
        }

        .feature-card p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.65;
        }

        .integration-section {
          justify-content: space-between;
          gap: 26px;
          border-radius: 30px;
          padding: 34px;
          margin-bottom: 70px;
        }

        .integration-section h2 {
          margin-bottom: 16px;
        }

        .integration-section p {
          margin-bottom: 0;
        }

        .env-card {
          align-items: stretch;
          flex-direction: column;
          gap: 12px;
          min-width: 310px;
        }

        code {
          display: block;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(2, 6, 23, 0.75);
          color: #93c5fd;
          border: 1px solid rgba(148, 163, 184, 0.18);
        }

        @media (max-width: 860px) {
          .nav {
            margin-bottom: 56px;
          }

          .nav-links {
            display: none;
          }

          .hero-grid,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .hero-card {
            transform: none;
          }

          .integration-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .env-card {
            min-width: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
