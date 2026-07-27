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
    description: 'Launch a premium AI marketing command center for one founder or creator.',
    highlights: ['Ava campaign planning', 'Lead capture workspace', 'Core funnel templates'],
  },
  {
    id: 'growth-team',
    name: 'Growth Team',
    seats: '3 seats',
    price: '$297/mo',
    icon: Rocket,
    description: 'Run acquisition, content, email, and follow-up systems with a focused growth team.',
    highlights: ['Multi-seat Ava workflows', 'Campaign + email planning', 'Supabase-backed onboarding'],
    featured: true,
  },
  {
    id: 'agency-command',
    name: 'Agency Command',
    seats: '10 seats',
    price: '$997/mo',
    icon: Crown,
    description: 'Operate a cinematic client-ready acquisition hub with Ava at the center.',
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
    copy: 'Ava guides the next best move across every growth workflow as a professional AI marketing strategist.',
  },
  {
    icon: Database,
    title: 'Connected Backend',
    copy: 'Leads and purchase handoffs connect to Supabase tables without exposing service keys.',
  },
];

const dashboardCards = [
  ['Campaigns', '12 active', '+28% pipeline'],
  ['Lead Capture', 'Live intake', 'Realtime ready'],
  ['Email Flow', '7-day sequence', 'Ava drafted'],
  ['Growth Score', '91%', 'Ready to scale'],
];

const humanSignals = [
  ['Warm first impression', 'Ava introduces herself like a real strategist, not a generic chatbot.'],
  ['Consistent identity', 'Her face, hair, tone, and role stay locked across the homepage, chat, and feature flow.'],
  ['Actionable guidance', 'Every prompt moves the visitor toward a campaign, funnel, content plan, or purchase handoff.'],
];

const journeySteps = [
  ['01', 'Meet Ava', 'Visitors see the premium strategist behind the platform before they are asked to buy.'],
  ['02', 'Choose a growth path', 'Clear seat tiers explain who the package is for and what Ava helps them launch.'],
  ['03', 'Capture the buyer', 'Lead and purchase forms stay connected to Supabase for follow-up and onboarding.'],
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
          content="DigiMark101 is a cinematic AI marketing command center powered by Ava Skye and connected to a secure Supabase backend."
        />
      </Head>

      <main className="site-shell">
        <nav className="nav">
          <a className="brand" href="/" aria-label="DigiMark101 home">
            <DigiMarkLogo compact />
          </a>
          <div className="nav-links">
            <a href="/features">Features</a>
            <a href="/campaigns">Campaigns</a>
            <a href="/social-media">Social</a>
            <a href="/email-marketing">Email</a>
            <a href="/lead-capture">Leads</a>
            <a href="/pricing">Pricing</a>
            <a href="/ava-skye">Ava Skye</a>
          </div>
          <a className="nav-button" href="#early-access">
            Start with Ava <ArrowRight size={16} />
          </a>
        </nav>

        <section className="hero">
          <div className="hero-copy-panel">
            <span className="pill"><Sparkles size={15} /> Cinematic AI growth studio</span>
            <h1>
              A premium AI marketing website with a human face.
            </h1>
            <p>
              DigiMark101 presents Ava Skye as a warm, consistent, human-feeling growth strategist. Visitors
              can meet her, ask for a practical marketing plan, join early access, and choose the seat package
              that fits their next launch.
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
              <span><CheckCircle2 size={16} /> Human Ava Skye presence</span>
              <span><CheckCircle2 size={16} /> Secure lead capture</span>
              <span><CheckCircle2 size={16} /> Vercel deployed</span>
            </div>
          </div>

          <div className="ava-stage">
            <AvaSkyeVisual />
          </div>
        </section>

        <section className="section human-section" aria-label="Human Ava Skye experience">
          <div className="human-panel">
            <div>
              <span className="eyebrow">Human Ava experience</span>
              <h2>Ava feels like a focused marketing partner from the first scroll.</h2>
              <p>
                The site now frames Ava as the recognizable face of DigiMark101: professional, approachable,
                and ready with specific campaign advice instead of vague automation claims.
              </p>
            </div>
            <div className="human-grid">
              {humanSignals.map(([title, copy]) => (
                <article className="human-card" key={title}>
                  <CheckCircle2 size={18} />
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="section platform-section">
          <div className="section-heading">
            <span className="eyebrow">DigiMark101 Operating System</span>
            <h2>A premium growth command center built around one strategic AI guide.</h2>
            <p>
              Every section is designed to look polished, focused, and ready for conversion while the live forms
              still hand data to the connected backend.
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
              <h2>Campaigns, leads, and revenue actions presented like a premium workspace.</h2>
              <p>
                Clean cards, strong contrast, soft light, and direct calls to action keep the site feeling like a
                high-end product instead of a template.
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

        <section className="section journey-section">
          <div className="section-heading">
            <span className="eyebrow">Visitor journey</span>
            <h2>A complete path from first impression to buyer handoff.</h2>
          </div>
          <div className="journey-grid">
            {journeySteps.map(([number, title, copy]) => (
              <article className="journey-card" key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section backend-section">
          <div className="backend-copy">
            <span className="eyebrow">Backend ready</span>
            <h2>Connected forms, clean handoffs, and protected service keys.</h2>
            <p>
              Lead capture writes to the <strong>leads</strong> table. Seat-tier purchase handoffs post through
              <strong> /api/purchase</strong> and save to <strong>purchase_handoffs</strong>. Public browser keys stay
              in environment variables, while service-role keys remain out of the frontend.
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
            <h2>Select the growth seat package that matches your next launch.</h2>
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
          <h2>DigiMark101 is ready to feel like a real product, not a placeholder.</h2>
          <p>
            Ava gives the brand a human-feeling guide, the page explains the offer, and the conversion paths
            stay connected to the backend workflow for follow-up, checkout, and onboarding.
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
          background: #07111d;
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .site-shell {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 16% 8%, rgba(255, 214, 167, 0.18), transparent 28rem),
            radial-gradient(circle at 84% 16%, rgba(83, 166, 255, 0.18), transparent 32rem),
            linear-gradient(180deg, #050816 0%, #07111d 46%, #0d1b2a 100%);
        }

        .site-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 82px 82px;
          mask-image: radial-gradient(circle at 50% 20%, black, transparent 72%);
        }

        .nav {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          position: relative;
          z-index: 1;
        }

        .brand,
        .nav a,
        .nav-button {
          color: inherit;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 14px;
          color: #b6c6d8;
          font-size: 0.9rem;
          font-weight: 800;
          flex-wrap: wrap;
          justify-content: center;
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
          background: linear-gradient(135deg, #f7c873, #e88d4a 52%, #b45cff);
          color: #07111d;
          font-weight: 950;
          cursor: pointer;
          box-shadow: 0 20px 56px rgba(232, 141, 74, 0.28);
        }

        .nav-button {
          padding: 12px 20px;
        }

        .hero,
        .section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero {
          min-height: calc(100vh - 96px);
          display: grid;
          grid-template-columns: 0.92fr 0.78fr;
          align-items: center;
          gap: 56px;
          padding: 30px 0 78px;
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
          font-size: clamp(3.6rem, 8vw, 7.4rem);
          line-height: 0.88;
          letter-spacing: -0.085em;
          color: #ffffff;
          text-shadow: 0 28px 80px rgba(0,0,0,0.42);
        }

        h2 {
          margin: 12px 0 16px;
          font-size: clamp(2.2rem, 5vw, 4.4rem);
          line-height: 0.94;
          letter-spacing: -0.075em;
          color: #ffffff;
        }

        h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
          letter-spacing: -0.035em;
          color: #ffffff;
        }

        .hero-copy-panel p,
        .section-heading p,
        .dashboard-panel p,
        .backend-copy p,
        .closing-section p {
          color: #b6c6d8;
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
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(20px);
        }

        .lead-form input,
        .purchase-form input {
          min-height: 52px;
          border: 0;
          outline: none;
          background: transparent;
          color: #ffffff;
          padding: 0 18px;
          font: inherit;
        }

        .lead-form input::placeholder,
        .purchase-form input::placeholder {
          color: #8ea1b7;
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
          color: #f7c873;
          font-weight: 850;
        }

        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: #dbe7f5;
          font-size: 0.92rem;
          font-weight: 850;
        }

        .trust-row span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .trust-row :global(svg) {
          color: #65d6ad;
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
        .dashboard-card-grid,
        .human-grid,
        .journey-grid {
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
        .dashboard-panel,
        .human-panel,
        .human-card,
        .journey-card {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(145deg, rgba(255,255,255,0.105), rgba(255,255,255,0.045));
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(22px);
        }

        .module-card,
        .human-card,
        .journey-card {
          border-radius: 30px;
          padding: 26px;
        }

        .human-panel {
          border-radius: 42px;
          padding: 34px;
          display: grid;
          grid-template-columns: 0.8fr 1fr;
          gap: 30px;
          align-items: center;
        }

        .human-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .human-card {
          display: grid;
          gap: 10px;
          background: rgba(255, 255, 255, 0.065);
        }

        .human-card :global(svg) {
          color: #65d6ad;
        }

        .human-card strong,
        .journey-card strong {
          color: #ffffff;
          font-size: 1.08rem;
        }

        .human-card span,
        .journey-card p {
          color: #b6c6d8;
          line-height: 1.65;
          margin: 0;
        }

        .journey-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .journey-card span {
          display: inline-grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: rgba(247, 200, 115, 0.16);
          color: #f7c873;
          font-weight: 950;
        }

        .module-card span,
        .tier-icon,
        .closing-section :global(svg) {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: rgba(247, 200, 115, 0.13);
          color: #f7c873;
        }

        .module-card p,
        .tier-description,
        .tier-seats,
        .tier-list,
        .metric-card small {
          color: #b6c6d8;
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
          background: rgba(255, 255, 255, 0.075);
        }

        .metric-card span,
        .tier-name {
          color: #f7c873;
          font-weight: 950;
        }

        .metric-card strong {
          display: block;
          margin: 12px 0 6px;
          font-size: 2rem;
          letter-spacing: -0.06em;
          color: #ffffff;
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
          background: rgba(5, 8, 22, 0.72);
          color: #dbeafe;
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
          color: #ffffff;
          text-align: left;
          cursor: pointer;
        }

        .tier-card:hover,
        .tier-card.active {
          border-color: rgba(247, 200, 115, 0.48);
          box-shadow: 0 28px 90px rgba(232, 141, 74, 0.18);
        }

        .tier-card.featured::after {
          content: 'Most Popular';
          position: absolute;
          top: 18px;
          right: 18px;
          border-radius: 999px;
          padding: 7px 10px;
          background: #f7c873;
          color: #07111d;
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
          color: #8ea1b7;
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
          .purchase-form,
          .human-panel {
            grid-template-columns: 1fr;
          }

          .module-grid,
          .tier-grid,
          .human-grid,
          .journey-grid {
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
          .human-grid,
          .journey-grid,
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
