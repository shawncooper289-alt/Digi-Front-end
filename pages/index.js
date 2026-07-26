import Head from 'next/head';
import { useState } from 'react';
import { Bot, Sparkles, CheckCircle2, ArrowRight, Zap, ShieldCheck, Wand2 } from 'lucide-react';
import AvaChatModal from '../components/AvaChatModal';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
            <span className="brand-icon"><Bot size={20} /></span>
            <span>DigiMark101</span>
          </a>
          <a className="nav-button" href="#early-access">
            Get Started <ArrowRight size={16} />
          </a>
        </nav>

        <section className="hero">
          <div className="eyebrow">
            <Sparkles size={14} />
            The World&apos;s Most Advanced AI Marketing Platform
          </div>

          <h1>
            Your Digital Empire <br />
            <span>Starts Here.</span>
          </h1>

          <p className="hero-copy">
            DigiMark101 gives you a complete AI-powered agency in a box — funnels, websites,
            content, emails, bots, and an AI Chief of Staff named <strong>Ava Skye</strong> who runs it all.
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
            <span><CheckCircle2 size={16} /> Cancel Anytime</span>
            <span><CheckCircle2 size={16} /> Mobile App Ready</span>
            <span><CheckCircle2 size={16} /> 24/7 AI Support</span>
          </div>
        </section>
        <section className="ai-showcase" aria-label="Ava AI Gateway enhancements">
          <div className="showcase-card command-card">
            <span className="card-kicker"><Zap size={15} /> Vercel AI Gateway</span>
            <h2>Ava Skye now runs on premium model routing.</h2>
            <p>
              Ask Ava for launch plans, funnel strategy, emails, social content, and agency workflows powered by
              Vercel AI Gateway model failover.
            </p>
          </div>
          <div className="showcase-card glass-card">
            <Wand2 size={24} />
            <strong>Visual polish</strong>
            <span>Animated glow fields, glass cards, brighter gradients, and a floating Ava command center.</span>
          </div>
          <div className="showcase-card glass-card">
            <ShieldCheck size={24} />
            <strong>Same brand mark</strong>
            <span>The DigiMark101 bot logo stays in place while the experience gets a more premium AI feel.</span>
          </div>
        </section>
      </main>

      <AvaChatModal />

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
            radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.18), transparent 34rem),
            radial-gradient(circle at 85% 20%, rgba(168, 85, 247, 0.16), transparent 28rem),
            #020617;
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

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 14px 34px rgba(99, 102, 241, 0.32);
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
          width: min(1024px, calc(100% - 48px));
          margin: 0 auto;
          padding: 96px 0 64px;
          text-align: center;
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
          margin: 0 auto 40px;
          color: #94a3b8;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.75;
        }

        .hero-copy strong {
          color: #ffffff;
        }

        .lead-form {
          width: min(448px, 100%);
          margin: 0 auto 26px;
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
          color: #818cf8;
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
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 28px;
          background: rgba(15, 23, 42, 0.72);
          box-shadow: 0 26px 90px rgba(2, 6, 23, 0.36);
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
          .ai-showcase {
            grid-template-columns: 1fr;
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
