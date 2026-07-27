import Head from 'next/head';
import { ArrowRight, Bot, CalendarDays, Database, Mail, Megaphone, MonitorSmartphone, Share2 } from 'lucide-react';
import AvaChatModal from '../components/AvaChatModal';
import AvaSkyeVisual from '../components/AvaSkyeVisual';
import DigiMarkLogo from '../components/DigiMarkLogo';
import { isSupabaseConfigured } from '../lib/supabaseClient';

const features = [
  {
    title: 'AI Marketing Automation',
    description: 'Ava turns offers into campaign briefs, launch tasks, and next-step recommendations.',
    icon: Bot,
  },
  {
    title: 'Smart Campaign Builder',
    description: 'Plan audiences, hooks, channels, creative assets, and launch calendars from one page.',
    icon: Megaphone,
  },
  {
    title: 'Supabase Data Layer',
    description: 'Store leads, purchase handoffs, client signals, and onboarding state in Supabase.',
    icon: Database,
  },
  {
    title: 'Social Media Manager',
    description: 'Draft platform-ready posts, organize publishing themes, and keep messaging consistent.',
    icon: Share2,
  },
  {
    title: 'Email Marketing',
    description: 'Build nurture flows, launch sequences, reactivation campaigns, and client follow-ups.',
    icon: Mail,
  },
  {
    title: 'Growth Dashboard',
    description: 'Present a clean Base44-style workspace for activity, funnel status, and next actions.',
    icon: MonitorSmartphone,
  },
];

const workflow = [
  ['01', 'Capture leads', 'Visitor and buyer data enters Supabase through the frontend forms.'],
  ['02', 'Plan with Ava', 'Ava maps the campaign, funnel, content, and follow-up workflow.'],
  ['03', 'Launch assets', 'Teams publish social, email, landing page, and acquisition assets.'],
  ['04', 'Measure growth', 'DigiMark101 keeps the command center focused on revenue actions.'],
];

export default function Features() {
  return (
    <>
      <Head>
        <title>Features | DigiMark101</title>
        <meta
          name="description"
          content="Base44-inspired DigiMark101 features powered by Ava OS and connected to Supabase."
        />
      </Head>

      <main className="page-shell">
        <nav className="nav">
          <a href="/" className="brand" aria-label="DigiMark101 home"><DigiMarkLogo compact /></a>
          <div className="nav-links">
            <a href="/#platform">Platform</a>
            <a href="/#dashboard">Dashboard</a>
            <a href="/features">Features</a>
            <a href="/#seat-tiers">Pricing</a>
          </div>
          <a className="nav-button" href="/#early-access">Start with Ava <ArrowRight size={16} /></a>
        </nav>

        <section className="hero">
          <div className="hero-grid">
            <div>
              <span className="pill"><CalendarDays size={15} /> Ava OS + Supabase</span>
              <h1>All the Base44-style pages point to one AI growth system.</h1>
              <p className="hero-copy">
                DigiMark101 now reads like a full product website: Ava OS intro, feature cards,
                command dashboard, backend status, and purchase flow. Supabase remains the connected backend.
              </p>
              <div className="actions">
                <a className="primary" href="/#seat-tiers">Choose Seats</a>
                <a className="secondary" href="/#dashboard">View Dashboard</a>
              </div>
              <div className="status-pill">
                <span className={isSupabaseConfigured ? 'dot online' : 'dot'} />
                {isSupabaseConfigured ? 'Supabase connection variables detected' : 'Waiting for Supabase env vars'}
              </div>
            </div>
            <AvaSkyeVisual />
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="section-heading">
            <span className="eyebrow">Feature system</span>
            <h2>Everything needed to attract, convert, and retain customers.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.title}>
                  <span className="icon"><Icon size={22} /></span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="workflow-section">
          <div>
            <span className="eyebrow">Growth workflow</span>
            <h2>From visitor to campaign launch, the frontend stays connected to Supabase.</h2>
            <p>
              The old Base44-style experience is now represented as a Vercel-hosted frontend with the data layer
              moved to Supabase. Ava OS remains the strategic guide inside the same DigiMark101 project.
            </p>
          </div>
          <div className="timeline">
            {workflow.map(([number, title, copy]) => (
              <div className="timeline-row" key={title}>
                <strong>{number}</strong>
                <span>
                  <b>{title}</b>
                  <small>{copy}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="integration-section">
          <div>
            <span className="eyebrow">Backend ready</span>
            <h2>Supabase replaces the Base44 backend layer.</h2>
            <p>
              Keep public Supabase connection variables in Vercel, store records in Supabase tables,
              and keep sensitive service-role keys out of browser code.
            </p>
          </div>
          <div className="env-card">
            <code>NEXT_PUBLIC_SUPABASE_URL</code>
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            <code>PURCHASE_CHECKOUT_URL</code>
          </div>
        </section>
      </main>

      <AvaChatModal />

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(body) {
          margin: 0;
          background: #eef5f7;
          color: #102a36;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% 8%, rgba(104, 157, 174, 0.32), transparent 28rem),
            radial-gradient(circle at 84% 20%, rgba(217, 197, 174, 0.32), transparent 26rem),
            linear-gradient(180deg, #f4f8f9 0%, #e7f0f3 46%, #dce9ed 100%);
          overflow: hidden;
        }

        .nav,
        .hero,
        .features-section,
        .workflow-section,
        .integration-section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .nav {
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand,
        .nav a,
        .actions a,
        .nav-button {
          color: inherit;
          text-decoration: none;
        }

        .nav-links,
        .actions,
        .status-pill,
        .workflow-section,
        .integration-section {
          display: flex;
          align-items: center;
        }

        .nav-links {
          gap: 24px;
          color: #456775;
          font-weight: 750;
        }

        .nav-button,
        .primary {
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #234c5c;
          color: #fff;
          font-weight: 900;
          box-shadow: 0 18px 38px rgba(35, 76, 92, 0.22);
        }

        .nav-button {
          padding: 12px 20px;
        }

        .hero {
          padding: 48px 0 76px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 0.95fr 0.72fr;
          gap: 52px;
          align-items: center;
        }

        .pill,
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #3f7282;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pill {
          border: 1px solid rgba(63, 114, 130, 0.2);
          border-radius: 999px;
          padding: 9px 14px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 18px 44px rgba(35, 76, 92, 0.08);
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          margin: 24px 0;
          font-size: clamp(3.4rem, 8vw, 7.2rem);
          line-height: 0.88;
          letter-spacing: -0.085em;
          color: #122f3c;
        }

        h2 {
          margin: 12px 0 16px;
          font-size: clamp(2.2rem, 5vw, 4.6rem);
          line-height: 0.94;
          letter-spacing: -0.075em;
          color: #122f3c;
        }

        .hero-copy,
        .section-heading p,
        .workflow-section p,
        .integration-section p {
          color: #456775;
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .actions {
          gap: 12px;
          flex-wrap: wrap;
          margin: 28px 0 18px;
        }

        .primary,
        .secondary {
          padding: 15px 22px;
          font-weight: 900;
        }

        .secondary {
          border: 1px solid rgba(63, 114, 130, 0.24);
          border-radius: 999px;
          color: #234c5c;
          background: rgba(255, 255, 255, 0.62);
        }

        .status-pill {
          gap: 10px;
          color: #456775;
          font-weight: 850;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #f59e0b;
          box-shadow: 0 0 24px rgba(245, 158, 11, 0.8);
        }

        .dot.online {
          background: #2f8f75;
          box-shadow: 0 0 24px rgba(47, 143, 117, 0.8);
        }

        .features-section,
        .workflow-section,
        .integration-section {
          padding: 74px 0;
        }

        .section-heading {
          max-width: 850px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card,
        .workflow-section,
        .integration-section,
        .timeline-row {
          border: 1px solid rgba(63, 114, 130, 0.16);
          background: rgba(255, 255, 255, 0.68);
          box-shadow: 0 24px 80px rgba(35, 76, 92, 0.11);
          backdrop-filter: blur(18px);
        }

        .feature-card {
          border-radius: 30px;
          padding: 26px;
        }

        .icon,
        .timeline-row strong {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: #d7e9ee;
          color: #234c5c;
        }

        .feature-card p,
        .timeline-row small {
          color: #52717c;
          line-height: 1.62;
        }

        .workflow-section,
        .integration-section {
          border-radius: 42px;
          padding: 34px;
          gap: 30px;
          align-items: center;
        }

        .workflow-section > div:first-child,
        .integration-section > div:first-child {
          flex: 1 1 0;
        }

        .timeline,
        .env-card {
          display: grid;
          gap: 12px;
          flex: 0 0 min(430px, 100%);
        }

        .timeline-row {
          border-radius: 24px;
          padding: 14px;
          display: flex;
          gap: 14px;
          align-items: center;
          box-shadow: none;
        }

        .timeline-row span {
          display: grid;
          gap: 4px;
        }

        .timeline-row b,
        .feature-card h3 {
          color: #122f3c;
        }

        .timeline-row small {
          display: block;
        }

        code {
          display: block;
          padding: 14px 16px;
          border-radius: 16px;
          background: #173543;
          color: #dff5fb;
          font-size: 0.9rem;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .workflow-section,
          .integration-section {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 700px) {
          .nav-links,
          .nav-button {
            display: none;
          }

          h1 {
            font-size: clamp(3rem, 15vw, 5rem);
          }
        }
      `}</style>
    </>
  );
}
