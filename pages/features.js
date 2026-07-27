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
    description: 'Present a clean premium growth workspace for activity, funnel status, and next actions.',
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
          content="Cinematic DigiMark101 features powered by Ava Skye and connected to Supabase."
        />
      </Head>

      <main className="page-shell">
        <nav className="nav">
          <a href="/" className="brand" aria-label="DigiMark101 home"><DigiMarkLogo compact /></a>
          <div className="nav-links">
            <a href="/features">Features</a>
            <a href="/campaigns">Campaigns</a>
            <a href="/social-media">Social</a>
            <a href="/email-marketing">Email</a>
            <a href="/lead-capture">Leads</a>
            <a href="/pricing">Pricing</a>
            <a href="/ava-skye">Ava Skye</a>
          </div>
          <a className="nav-button" href="/#early-access">Start with Ava <ArrowRight size={16} /></a>
        </nav>

        <section className="hero">
          <div className="hero-grid">
            <div>
              <span className="pill"><CalendarDays size={15} /> Ava Skye + Supabase</span>
              <h1>Every premium page points to one AI growth system.</h1>
              <p className="hero-copy">
                DigiMark101 now reads like a polished product website: cinematic Ava Skye intro, feature cards,
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
              The experience is now represented as a Vercel-hosted frontend with the data layer
              connected to Supabase. Ava Skye remains the strategic guide inside the same DigiMark101 project.
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
            <h2>Supabase powers the connected backend layer.</h2>
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
          background: #07111d;
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 16% 8%, rgba(255, 214, 167, 0.18), transparent 28rem),
            radial-gradient(circle at 84% 16%, rgba(83, 166, 255, 0.18), transparent 32rem),
            linear-gradient(180deg, #050816 0%, #07111d 46%, #0d1b2a 100%);
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
          gap: 14px;
          color: #b6c6d8;
          font-size: 0.9rem;
          font-weight: 800;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-button,
        .primary {
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #f7c873, #e88d4a 52%, #b45cff);
          color: #07111d;
          font-weight: 900;
          box-shadow: 0 20px 56px rgba(232, 141, 74, 0.28);
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
          color: #f7c873;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pill {
          border: 1px solid rgba(247, 200, 115, 0.24);
          border-radius: 999px;
          padding: 9px 14px;
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(18px);
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
          color: #ffffff;
        }

        h2 {
          margin: 12px 0 16px;
          font-size: clamp(2.2rem, 5vw, 4.6rem);
          line-height: 0.94;
          letter-spacing: -0.075em;
          color: #ffffff;
        }

        .hero-copy,
        .section-heading p,
        .workflow-section p,
        .integration-section p {
          color: #b6c6d8;
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
          border: 1px solid rgba(247, 200, 115, 0.24);
          border-radius: 999px;
          color: #f7c873;
          background: rgba(255, 255, 255, 0.07);
        }

        .status-pill {
          gap: 10px;
          color: #b6c6d8;
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
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(145deg, rgba(255,255,255,0.105), rgba(255,255,255,0.045));
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
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
          background: rgba(247, 200, 115, 0.13);
          color: #f7c873;
        }

        .feature-card p,
        .timeline-row small {
          color: #b6c6d8;
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
          color: #ffffff;
        }

        .timeline-row small {
          display: block;
        }

        code {
          display: block;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(5, 8, 22, 0.72);
          color: #dbeafe;
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
