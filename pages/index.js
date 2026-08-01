import Head from 'next/head';
import { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Zap, ShieldCheck, Wand2, Users, Crown, Rocket } from 'lucide-react';
import AvaSkyeVisual from '../components/AvaSkyeVisual';
import DigiMarkLogo from '../components/DigiMarkLogo';
import { supabase, hasSupabaseConfig } from '../lib/supabaseClient';

const seatTiers = [
  {
    id: 'starter-seat',
    name: 'Starter Seat',
    seats: '1 seat',
    price: '$97/mo',
    icon: Users,
    description: 'For solo founders launching their first AI-powered marketing system.',
    highlights: ['Ava campaign planning', 'Lead capture workspace', 'Core funnel templates'],
  },
  {
    id: 'growth-team',
    name: 'Growth Team',
    seats: '3 seats',
    price: '$297/mo',
    icon: Rocket,
    description: 'For teams that need campaign execution, content, and follow-up systems.',
    highlights: ['Multi-seat Ava workflows', 'Campaign + email planning', 'Supabase-backed onboarding'],
    featured: true,
  },
  {
    id: 'agency-command',
    name: 'Agency Command',
    seats: '10 seats',
    price: '$997/mo',
    icon: Crown,
    description: 'For agencies building a full client acquisition and delivery command center.',
    highlights: ['Client portal readiness', 'Advanced growth systems', 'Priority AI strategy handoff'],
  },
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
    setPurchaseMessage('Opening checkout...');

    const params = new URLSearchParams({
      tier: selectedSeatTier.id,
      package: selectedSeatTier.name,
      price: selectedSeatTier.price.replace(/[^0-9.]/g, ''),
    });

    if (purchaseEmail.trim()) {
      params.set('email', purchaseEmail.trim().toLowerCase());
    }

    window.location.href = `/checkout?${params.toString()}`;
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    if (!hasSupabaseConfig || !supabase) {
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
        setMessage('You are already registered!');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
      return;
    }

    setMessage('Success! You are on the early access list.');
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>DigiMark101 | AI Marketing Platform</title>
        <meta
          name="description"
          content="DigiMark101 is an AI-powered marketing agency platform with Supabase-powered early access capture."
        />
      </Head>

      <main className="shell">
        <nav className="nav">
          <a className="brand" href="/" aria-label="DigiMark101 home">
            <DigiMarkLogo compact />
          </a>
          <a className="nav-button" href="#seat-tiers">
            Choose Seats <ArrowRight size={16} />
          </a>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <div>
              <div className="eyebrow">
                <Sparkles size={14} />
                Meet Ava Skye, Your AI Chief of Staff
              </div>

              <div className="hero-logo"><DigiMarkLogo /></div>

              <h1>
                The Future of Digital Marketing <br />
                <span>Runs Through Ava.</span>
              </h1>

              <p className="hero-copy">
                DigiMark101 is a futuristic AI marketing command center — combining premium strategy, campaign automation,
                conversion funnels, content systems, and <strong>Ava Skye</strong>, your human-facing AI Chief of Staff.
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
                  {loading ? 'Joining...' : 'Get Early Access'}
                </button>
              </form>

              {message && <p className="message">{message}</p>}

              <div className="badges" aria-label="Platform highlights">
                <span><CheckCircle2 size={16} /> AI Strategy</span>
                <span><CheckCircle2 size={16} /> Campaign Automation</span>
                <span><CheckCircle2 size={16} /> Revenue Workflows</span>
              </div>

              <div className="hero-stats" aria-label="DigiMark101 agency system highlights">
                <span><strong>24/7</strong><small>Ava guidance</small></span>
                <span><strong>3</strong><small>seat tiers</small></span>
                <span><strong>1</strong><small>growth command center</small></span>
              </div>
            </div>

            <AvaSkyeVisual />
          </div>
        </section>
        <section className="pricing-section" id="seat-tiers" aria-label="Choose a DigiMark101 seat tier">
          <div className="pricing-heading">
            <span className="card-kicker"><Users size={15} /> Choose Your Seat Tier</span>
            <h2>Select a plan, then continue into the DigiMark101 checkout flow.</h2>
            <p>
              Choose the package that fits your growth stage. Checkout records are saved in Supabase with payment pending until the payment processor is connected.
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
              <span>Selected: {selectedSeatTier.name}</span>
              <strong>{selectedSeatTier.seats} · {selectedSeatTier.price}</strong>
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
              Continue to Checkout
              <ArrowRight size={16} />
            </button>
          </form>
          {purchaseMessage && <p className="purchase-message">{purchaseMessage}</p>}
        </section>

        <section className="ai-showcase" aria-label="DigiMark101 futuristic agency operating system">
          <div className="showcase-card command-card">
            <span className="card-kicker"><Zap size={15} /> AI Agency Operating System</span>
            <h2>Ava Skye turns attention into campaigns, funnels, and customers.</h2>
            <p>
              Your buyers see a premium digital agency. Behind the scenes, Ava helps coordinate offers, content,
              email sequences, lead capture, client onboarding, and growth strategy from one command layer.
            </p>
          </div>
          <div className="showcase-card glass-card">
            <Wand2 size={24} />
            <strong>Futuristic presentation</strong>
            <span>Dark luxury interface, glass panels, AI glow systems, and a high-converting brand presence.</span>
          </div>
          <div className="showcase-card glass-card">
            <ShieldCheck size={24} />
            <strong>Checkout-ready stack</strong>
            <span>Supabase checkout requests, Vercel deployment, and Ava-guided customer acquisition.</span>
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #020617;
          color: #ffffff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .shell {
          min-height: 100vh;
          color: #ffffff;
          background:
            radial-gradient(circle at 20% 0%, rgba(34, 197, 94, 0.12), transparent 30rem),
            radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.24), transparent 36rem),
            radial-gradient(circle at 85% 18%, rgba(217, 70, 239, 0.22), transparent 30rem),
            linear-gradient(135deg, #020617 0%, #070b1d 48%, #111827 100%);
        }

        .nav {
          width: min(1280px, calc(100% - 64px));
          margin: 0 auto;
          padding: 20px 0;
          border-bottom: 1px solid #1e293b;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand,
        .nav-button {
          color: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .brand {
          gap: 10px;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .nav-button {
          gap: 8px;
          border: 0;
          border-radius: 999px;
          padding: 10px 20px;
          background: #4f46e5;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          transition: background 180ms ease, transform 180ms ease;
        }

        .nav-button:hover {
          background: #6366f1;
          transform: translateY(-1px);
        }

        .hero {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 86px 0 64px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
          gap: 64px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(99, 102, 241, 0.32);
          background: rgba(99, 102, 241, 0.1);
          color: #818cf8;
          border-radius: 999px;
          padding: 7px 16px;
          margin-bottom: 32px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-logo {
          display: flex;
          justify-content: flex-start;
          margin: -10px 0 26px;
        }

        h1 {
          margin: 0 0 24px;
          font-size: clamp(3.2rem, 8vw, 7rem);
          line-height: 1.02;
          font-weight: 900;
          letter-spacing: -0.065em;
        }

        h1 span {
          background: linear-gradient(90deg, #818cf8, #c084fc, #f472b6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-copy {
          max-width: 760px;
          margin: 0 0 40px;
          color: #94a3b8;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.75;
        }

        .hero-copy strong {
          color: #ffffff;
        }

        .lead-form {
          width: min(448px, 100%);
          margin: 0 0 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .lead-form input,
        .lead-form button {
          border-radius: 999px;
          min-height: 52px;
          font: inherit;
        }

        .lead-form input {
          width: 100%;
          border: 1px solid #1e293b;
          background: #0f172a;
          color: #ffffff;
          padding: 0 20px;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }

        .lead-form input::placeholder {
          color: #64748b;
        }

        .lead-form input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.16);
        }

        .lead-form button {
          flex: 0 0 auto;
          border: 0;
          cursor: pointer;
          background: #4f46e5;
          color: #ffffff;
          padding: 0 28px;
          font-weight: 800;
          white-space: nowrap;
          transition: background 180ms ease, opacity 180ms ease;
        }

        .lead-form button:hover:not(:disabled) {
          background: #6366f1;
        }

        .lead-form button:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        .message {
          min-height: 18px;
          margin: -12px 0 24px;
          color: #818cf8;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          color: #94a3b8;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .badges span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .badges :global(svg) {
          color: #86efac;
        }

        .hero-stats {
          width: min(560px, 100%);
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .hero-stats span {
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 18px;
          padding: 16px;
          background: rgba(15, 23, 42, 0.58);
          backdrop-filter: blur(18px);
        }

        .hero-stats strong,
        .hero-stats small {
          display: block;
        }

        .hero-stats strong {
          font-size: 1.6rem;
          letter-spacing: -0.05em;
        }

        .hero-stats small {
          margin-top: 4px;
          color: #94a3b8;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .pricing-section {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
          padding: 0 0 80px;
        }

        .pricing-heading {
          max-width: 820px;
          margin: 0 auto 28px;
          text-align: center;
        }

        .pricing-heading h2 {
          margin: 14px 0;
          font-size: clamp(2rem, 4vw, 4.2rem);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .pricing-heading p {
          margin: 0;
          color: #94a3b8;
          line-height: 1.7;
        }

        .tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .tier-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.72);
          text-align: left;
          cursor: pointer;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .tier-card:hover,
        .tier-card.active {
          transform: translateY(-4px);
          border-color: rgba(192, 132, 252, 0.72);
          box-shadow: 0 24px 80px rgba(79, 70, 229, 0.24);
        }

        .tier-card.featured::after {
          content: 'Most Popular';
          position: absolute;
          top: 18px;
          right: 18px;
          border-radius: 999px;
          padding: 6px 10px;
          background: rgba(168, 85, 247, 0.2);
          color: #e9d5ff;
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .tier-icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #fff;
        }

        .tier-name {
          color: #c4b5fd;
          font-weight: 900;
        }

        .tier-card strong {
          font-size: 2.2rem;
          letter-spacing: -0.06em;
        }

        .tier-seats,
        .tier-description {
          color: #94a3b8;
          line-height: 1.55;
        }

        .tier-list {
          display: grid;
          gap: 8px;
          margin-top: 8px;
          color: #cbd5e1;
          font-size: 0.86rem;
          font-weight: 700;
        }

        .tier-list span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .tier-list :global(svg) {
          color: #818cf8;
        }

        .purchase-form {
          margin: 22px auto 0;
          padding: 16px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 999px;
          display: grid;
          grid-template-columns: 1fr 1.1fr auto;
          gap: 12px;
          align-items: center;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(18px);
        }

        .purchase-form div {
          display: grid;
          gap: 3px;
          padding-left: 12px;
        }

        .purchase-form div span,
        .purchase-message {
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .purchase-form input {
          min-height: 50px;
          border: 1px solid #1e293b;
          border-radius: 999px;
          background: #0f172a;
          color: #fff;
          padding: 0 18px;
          outline: none;
        }

        .purchase-form button {
          min-height: 50px;
          border: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #a855f7);
          color: #fff;
          padding: 0 22px;
          font-weight: 900;
          cursor: pointer;
        }

        .purchase-form button:disabled {
          cursor: not-allowed;
          opacity: 0.58;
        }

        .purchase-message {
          margin: 12px 0 0;
          text-align: center;
          font-weight: 800;
        }

        .ai-showcase {
          width: min(1120px, calc(100% - 48px));
          margin: 10px auto 0;
          padding: 0 0 86px;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr;
          gap: 18px;
        }

        .showcase-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(192, 132, 252, 0.26);
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.48));
          box-shadow: 0 30px 100px rgba(2, 6, 23, 0.46), 0 0 70px rgba(168, 85, 247, 0.1);
          backdrop-filter: blur(18px);
        }

        .showcase-card::before {
          content: '';
          position: absolute;
          inset: -40% auto auto -25%;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: rgba(168, 85, 247, 0.24);
          filter: blur(8px);
        }

        .command-card {
          padding: 30px;
        }

        .card-kicker {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #c4b5fd;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .command-card h2 {
          position: relative;
          z-index: 1;
          margin: 14px 0;
          font-size: clamp(1.8rem, 3vw, 3rem);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .command-card p,
        .glass-card span {
          position: relative;
          z-index: 1;
          color: #94a3b8;
          line-height: 1.65;
        }

        .glass-card {
          min-height: 220px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 10px;
        }

        .glass-card :global(svg) {
          position: relative;
          z-index: 1;
          color: #c084fc;
        }

        .glass-card strong {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
        }

        @media (max-width: 860px) {
          .hero-content,
          .ai-showcase,
          .tier-grid,
          .purchase-form {
            grid-template-columns: 1fr;
          }

          .hero-content {
            text-align: center;
          }

          .hero-logo,
          .badges {
            justify-content: center;
          }

          .hero-copy,
          .lead-form,
          .hero-stats {
            margin-left: auto;
            margin-right: auto;
          }

          .purchase-form {
            border-radius: 28px;
          }
        }

        @media (max-width: 640px) {
          .nav {
            width: min(100% - 32px, 1280px);
          }

          .nav-button {
            display: none;
          }

          .hero {
            width: min(100% - 32px, 1024px);
            padding-top: 72px;
          }

          .lead-form {
            flex-direction: column;
          }

          .lead-form button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
