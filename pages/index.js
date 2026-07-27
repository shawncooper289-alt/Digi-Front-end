import Head from 'next/head';
import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Crown,
  Database,
  Megaphone,
  Rocket,
  Sparkles,
  Users,
  Wand2,
} from 'lucide-react';
import AvaChatModal from '../components/AvaChatModal';
import AvaSkyeVisual from '../components/AvaSkyeVisual';
import DigiMarkLogo from '../components/DigiMarkLogo';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

const seatTiers = [
  {
    id: 'starter-seat',
    name: 'Starter Seat',
    seats: '1 seat',
    price: '$97/mo',
    icon: Users,
    description: 'Launch a polished AI marketing command center for one founder or creator.',
    highlights: ['Ava campaign planning', 'Lead capture workspace', 'Core funnel templates'],
  },
  {
    id: 'growth-team',
    name: 'Growth Team',
    seats: '3 seats',
    price: '$297/mo',
    icon: Rocket,
    description: 'Run daily acquisition, content, email, and follow-up systems as a team.',
    highlights: ['Multi-seat Ava workflows', 'Campaign + email planning', 'Supabase-backed onboarding'],
    featured: true,
  },
  {
    id: 'agency-command',
    name: 'Agency Command',
    seats: '10 seats',
    price: '$997/mo',
    icon: Crown,
    description: 'Operate a client-ready acquisition and delivery hub with Ava at the center.',
    highlights: ['Client portal readiness', 'Advanced growth systems', 'Priority AI strategy handoff'],
  },
];

const operatingSystem = [
  {
    icon: Megaphone,
    title: 'Campaign Launchpad',
    copy: 'Turn offers into channel plans, creative briefs, ad angles, and launch calendars.',
  },
  {
    icon: Wand2,
    title: 'Content Studio',
    copy: 'Generate social posts, email sequences, landing page copy, and follow-up assets.',
  },
  {
    icon: Bot,
    title: 'Ava Skye Assistant',
    copy: 'Ava Skye guides the next best move across every growth workflow as a professional AI marketing strategist.',
  },
  {
    icon: Database,
    title: 'Supabase Backend',
    copy: 'Leads and purchase handoffs connect to Supabase tables without exposing service keys.',
  },
];

const dashboardCards = [
  ['Campaigns', '12 active', '+28% pipeline'],
  ['Lead Capture', 'Supabase live', 'Realtime ready'],
  ['Email Flow', '7-day sequence', 'Ava drafted'],
  ['Growth Score', '91%', 'Ready to scale'],
];

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedTier, setSelectedTier] = useState(seatTiers[1].id);
  const [purchaseEmail, setPurchaseEmail] = useState('');
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState('');
  const selectedSeatTier = seatTiers.find((tier) => tier.id === selectedTier) || seatTiers[1];

  const handlePurchaseSubmit = async (event) => {
    event.preventDefault();
    setPurchaseLoading(true);
    setPurchaseMessage('');

    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: purchaseEmail.trim().toLowerCase(),
          tier: selectedSeatTier.id,
          tierName: selectedSeatTier.name,
          seats: selectedSeatTier.seats,
          price: selectedSeatTier.price,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setPurchaseMessage(data.error || 'Could not start purchase. Please try again.');
        return;
      }

      setPurchaseMessage(data.message || 'Purchase handoff saved. Continue to onboarding.');

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }

      if (data.nextUrl) {
        window.location.href = data.nextUrl;
      }
    } catch (error) {
      setPurchaseMessage('Could not reach the purchase backend. Please try again.');
    } finally {
      setPurchaseLoading(false);
    }
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      setMessage('Supabase is not configured yet. Add the Vercel environment variables first.');
      return;
    }

    const { error } = await supabase
      .from('leads')
      .insert([{ email: email.trim().toLowerCase() }]);

    setLoading(false);

    if (error) {
      if (error.code === '23505') {
        setMessage('You are already registered.');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
      return;
    }

    setMessage('Success. You are on the early access list.');
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>DigiMark101 | Ava Skye AI Marketing OS</title>
        <meta
          name="description"
          content="DigiMark101 is a Base44-inspired AI marketing frontend powered by Ava Skye and connected to a Supabase backend."
        />
      </Head>

      <main className="site-shell">
        <nav className="nav">
          <a className="brand" href="/" aria-label="DigiMark101 home">
            <DigiMarkLogo compact />
          </a>
          <div className="nav-links">
            <a href="#platform">Platform</a>
            <a href="#dashboard">Dashboard</a>
            <a href="/features">Features</a>
            <a href="#seat-tiers">Pricing</a>
          </div>
          <a className="nav-button" href="#early-access">
            Start with Ava <ArrowRight size={16} />
          </a>
        </nav>

        <section className="hero">
          <div className="hero-copy-panel">
            <span className="pill"><Sparkles size={15} /> Base44-style DigiMark101 frontend</span>
            <h1>
              AI marketing that feels personal, polished, and ready to sell.
            </h1>
            <p>
              Ava Skye introduces DigiMark101 as a polished AI marketing strategist for campaigns, funnels,
              content, lead capture, and customer acquisition. The frontend is now styled like a modern
              Base44 product experience while keeping Supabase as the backend layer.
            </p>

            <form id="early-access" className="lead-form" onSubmit={handleLeadSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-label="Email address"
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Joining...' : 'Join Early Access'}
              </button>
            </form>
            {message && <p className="message">{message}</p>}

            <div className="trust-row" aria-label="Platform highlights">
              <span><CheckCircle2 size={16} /> Professional Ava Skye</span>
              <span><CheckCircle2 size={16} /> Supabase connected</span>
              <span><CheckCircle2 size={16} /> Vercel deployed</span>
            </div>
          </div>

          <div className="ava-stage">
            <AvaSkyeVisual />
          </div>
        </section>

        <section id="platform" className="section platform-section">
          <div className="section-heading">
            <span className="eyebrow">DigiMark101 Operating System</span>
            <h2>Every Base44-style page section now points to the same growth command center.</h2>
            <p>
              The frontend presents a full product experience, and the live forms still hand data to Supabase.
            </p>
          </div>

          <div className="module-grid">
            {operatingSystem.map((item) => {
              const Icon = item.icon;
              return (
                <article className="module-card" key={item.title}>
                  <span><Icon size={22} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="dashboard" className="section dashboard-section">
          <div className="dashboard-panel">
            <div>
              <span className="eyebrow">Command Dashboard</span>
              <h2>A polished growth workspace for campaigns, leads, and client acquisition.</h2>
              <p>
                This mirrors the Base44 product-page feel: clear cards, soft gradients, Ava Skye guidance,
                and conversion-focused actions backed by the Supabase tables already wired into the app.
              </p>
            </div>
            <div className="dashboard-card-grid">
              {dashboardCards.map(([label, value, note]) => (
                <div className="metric-card" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{note}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section backend-section">
          <div className="backend-copy">
            <span className="eyebrow">Supabase backend</span>
            <h2>Base44-inspired frontend. Supabase-powered data layer.</h2>
            <p>
              Lead capture writes to the <strong>leads</strong> table. Seat-tier purchase handoffs post through
              <strong> /api/purchase</strong> and save to <strong>purchase_handoffs</strong>. Public Supabase browser
              keys stay in environment variables, while service-role keys remain out of the frontend.
            </p>
          </div>
          <div className="backend-stack" aria-label="Supabase connection requirements">
            <code>NEXT_PUBLIC_SUPABASE_URL</code>
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            <code>PURCHASE_CHECKOUT_URL</code>
          </div>
        </section>

        <section className="section pricing-section" id="seat-tiers" aria-label="Choose a DigiMark101 seat tier">
          <div className="section-heading">
            <span className="eyebrow">Choose seats</span>
            <h2>Select a plan and enter the Supabase purchase handoff flow.</h2>
            <p>
              Each selection is saved so the backend knows the buyer, package, and onboarding path.
            </p>
          </div>

          <div className="tier-grid">
            {seatTiers.map((tier) => {
              const Icon = tier.icon;
              const active = selectedTier === tier.id;

              return (
                <button
                  type="button"
                  className={`tier-card ${active ? 'active' : ''} ${tier.featured ? 'featured' : ''}`}
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  aria-pressed={active}
                >
                  <span className="tier-icon"><Icon size={22} /></span>
                  <span className="tier-name">{tier.name}</span>
                  <strong>{tier.price}</strong>
                  <span className="tier-seats">{tier.seats}</span>
                  <span className="tier-description">{tier.description}</span>
                  <span className="tier-list">
                    {tier.highlights.map((highlight) => (
                      <span key={highlight}><CheckCircle2 size={14} /> {highlight}</span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>

          <form className="purchase-form" onSubmit={handlePurchaseSubmit}>
            <div>
              <span>Selected package</span>
              <strong>{selectedSeatTier.name} · {selectedSeatTier.seats} · {selectedSeatTier.price}</strong>
            </div>
            <input
              type="email"
              required
              placeholder="Buyer email address"
              value={purchaseEmail}
              onChange={(event) => setPurchaseEmail(event.target.value)}
              aria-label="Buyer email address"
            />
            <button type="submit" disabled={purchaseLoading}>
              {purchaseLoading ? 'Starting...' : 'Continue to Purchase'}
              <ArrowRight size={16} />
            </button>
          </form>
          {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
        </section>

        <section className="section closing-section">
          <BarChart3 size={28} />
          <h2>Ava Skye is the professional AI face of the DigiMark101 growth system.</h2>
          <p>
            Visitors see a clean Base44-style website. Underneath, Vercel serves the frontend,
            Supabase receives the data, and Ava Skye guides the marketing workflow.
          </p>
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

        .site-shell {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 8%, rgba(104, 157, 174, 0.32), transparent 28rem),
            radial-gradient(circle at 84% 20%, rgba(217, 197, 174, 0.32), transparent 26rem),
            linear-gradient(180deg, #f4f8f9 0%, #e7f0f3 46%, #dce9ed 100%);
        }

        .nav {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand,
        .nav a,
        .nav-button {
          color: inherit;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          color: #456775;
          font-weight: 750;
        }

        .nav-button,
        .lead-form button,
        .purchase-form button {
          border: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #234c5c;
          color: #fff;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 18px 38px rgba(35, 76, 92, 0.22);
        }

        .nav-button {
          padding: 12px 20px;
        }

        .hero,
        .section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero {
          min-height: calc(100vh - 92px);
          display: grid;
          grid-template-columns: 0.92fr 0.78fr;
          align-items: center;
          gap: 52px;
          padding: 28px 0 72px;
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
          font-size: clamp(3.6rem, 8vw, 7.6rem);
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

        h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
          letter-spacing: -0.035em;
        }

        .hero-copy-panel p,
        .section-heading p,
        .dashboard-panel p,
        .backend-copy p,
        .closing-section p {
          color: #456775;
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .lead-form {
          width: min(560px, 100%);
          margin: 34px 0 14px;
          padding: 8px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          border: 1px solid rgba(63, 114, 130, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.74);
          box-shadow: 0 24px 70px rgba(35, 76, 92, 0.12);
        }

        .lead-form input,
        .purchase-form input {
          min-height: 52px;
          border: 0;
          outline: none;
          background: transparent;
          color: #122f3c;
          padding: 0 18px;
          font: inherit;
        }

        .lead-form button,
        .purchase-form button {
          min-height: 52px;
          padding: 0 24px;
        }

        button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .message,
        .purchase-message {
          color: #2f6f7f;
          font-weight: 850;
        }

        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: #456775;
          font-size: 0.92rem;
          font-weight: 850;
        }

        .trust-row span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .trust-row :global(svg) {
          color: #2f8f75;
        }

        .ava-stage {
          transform: translateY(8px);
        }

        .section {
          padding: 74px 0;
        }

        .section-heading {
          max-width: 840px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .module-grid,
        .tier-grid,
        .dashboard-card-grid {
          display: grid;
          gap: 18px;
        }

        .module-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .module-card,
        .metric-card,
        .backend-section,
        .tier-card,
        .purchase-form,
        .closing-section,
        .dashboard-panel {
          border: 1px solid rgba(63, 114, 130, 0.16);
          background: rgba(255, 255, 255, 0.68);
          box-shadow: 0 24px 80px rgba(35, 76, 92, 0.11);
          backdrop-filter: blur(18px);
        }

        .module-card {
          border-radius: 30px;
          padding: 26px;
        }

        .module-card span,
        .tier-icon,
        .closing-section :global(svg) {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: #d7e9ee;
          color: #234c5c;
        }

        .module-card p,
        .tier-description,
        .tier-seats,
        .tier-list,
        .metric-card small {
          color: #52717c;
          line-height: 1.62;
        }

        .dashboard-panel {
          border-radius: 42px;
          padding: 34px;
          display: grid;
          grid-template-columns: 0.95fr 1fr;
          gap: 30px;
          align-items: center;
        }

        .dashboard-card-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .metric-card {
          border-radius: 28px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.78);
        }

        .metric-card span,
        .tier-name {
          color: #3f7282;
          font-weight: 950;
        }

        .metric-card strong {
          display: block;
          margin: 12px 0 6px;
          font-size: 2rem;
          letter-spacing: -0.06em;
        }

        .backend-section {
          border-radius: 42px;
          padding: 34px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
        }

        .backend-stack {
          display: grid;
          gap: 10px;
          min-width: 330px;
        }

        code {
          display: block;
          padding: 14px 16px;
          border-radius: 16px;
          background: #173543;
          color: #dff5fb;
          font-size: 0.9rem;
        }

        .tier-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .tier-card {
          position: relative;
          border-radius: 32px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          color: #122f3c;
          text-align: left;
          cursor: pointer;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .tier-card:hover,
        .tier-card.active {
          transform: translateY(-5px);
          border-color: rgba(35, 76, 92, 0.38);
          box-shadow: 0 28px 90px rgba(35, 76, 92, 0.18);
        }

        .tier-card.featured::after {
          content: 'Most Popular';
          position: absolute;
          top: 18px;
          right: 18px;
          border-radius: 999px;
          padding: 7px 10px;
          background: #234c5c;
          color: #fff;
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .tier-card strong {
          font-size: 2.35rem;
          letter-spacing: -0.07em;
        }

        .tier-list {
          display: grid;
          gap: 8px;
          margin-top: 8px;
          font-size: 0.9rem;
          font-weight: 760;
        }

        .tier-list span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .purchase-form {
          margin: 24px auto 0;
          padding: 14px;
          border-radius: 999px;
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 12px;
          align-items: center;
        }

        .purchase-form div {
          display: grid;
          gap: 4px;
          padding-left: 12px;
        }

        .purchase-form div span {
          color: #52717c;
          font-size: 0.85rem;
          font-weight: 850;
        }

        .purchase-message {
          text-align: center;
        }

        .closing-section {
          margin-bottom: 80px;
          border-radius: 42px;
          padding: 42px;
          text-align: center;
        }

        .closing-section :global(svg) {
          margin: 0 auto 18px;
        }

        .closing-section p {
          max-width: 740px;
          margin: 0 auto;
        }

        @media (max-width: 980px) {
          .hero,
          .dashboard-panel,
          .backend-section,
          .purchase-form {
            grid-template-columns: 1fr;
          }

          .module-grid,
          .tier-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .backend-stack {
            min-width: 0;
          }
        }

        @media (max-width: 700px) {
          .nav-links,
          .nav-button {
            display: none;
          }

          .hero {
            min-height: auto;
            padding-top: 44px;
          }

          .module-grid,
          .tier-grid,
          .dashboard-card-grid,
          .lead-form {
            grid-template-columns: 1fr;
          }

          .lead-form,
          .purchase-form {
            border-radius: 28px;
          }

          .lead-form button,
          .purchase-form button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
