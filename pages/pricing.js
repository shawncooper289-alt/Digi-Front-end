import Head from 'next/head';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import AvaChatModal from '../components/AvaChatModal';
import SiteNav from '../components/SiteNav';
import { seatTiers } from '../lib/siteContent';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | DigiMark101</title>
        <meta name="description" content="Choose a DigiMark101 seat package for Ava Skye powered marketing workflows." />
      </Head>
      <main className="page-shell">
        <SiteNav active="/pricing" />
        <section className="hero">
          <span className="pill"><Sparkles size={15} /> Seat packages</span>
          <h1>Choose how much growth power you want Ava to run with.</h1>
          <p>Each package is positioned as a clear next step for founders, teams, and agencies. The purchase handoff remains connected to the existing Supabase-backed API flow.</p>
        </section>
        <section className="tier-grid">
          {seatTiers.map((tier) => (
            <article className={`tier-card ${tier.featured ? 'featured' : ''}`} key={tier.id}>
              {tier.featured && <span className="badge">Most Popular</span>}
              <span className="tier-name">{tier.name}</span>
              <strong>{tier.price}</strong>
              <small>{tier.seats}</small>
              <p>{tier.description}</p>
              <div className="list">
                {tier.highlights.map((highlight) => <span key={highlight}><CheckCircle2 size={15} /> {highlight}</span>)}
              </div>
              <a href={`/#seat-tiers`}>Select Package <ArrowRight size={16} /></a>
            </article>
          ))}
        </section>
      </main>
      <AvaChatModal />
      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(body) { margin: 0; background: #07111d; color: #f8fafc; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .page-shell { min-height: 100vh; overflow: hidden; background: radial-gradient(circle at 16% 8%, rgba(255, 214, 167, 0.18), transparent 28rem), radial-gradient(circle at 84% 16%, rgba(83, 166, 255, 0.18), transparent 32rem), linear-gradient(180deg, #050816 0%, #07111d 48%, #0d1b2a 100%); }
        .hero, .tier-grid { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .hero { padding: 56px 0 36px; text-align: center; }
        .pill { display: inline-flex; align-items: center; gap: 8px; color: #f7c873; font-size: 0.78rem; font-weight: 950; letter-spacing: 0.16em; text-transform: uppercase; border: 1px solid rgba(247, 200, 115, 0.24); border-radius: 999px; padding: 9px 14px; background: rgba(255, 255, 255, 0.07); }
        h1 { margin: 24px auto; max-width: 980px; font-size: clamp(3.1rem, 7vw, 6.3rem); line-height: 0.9; letter-spacing: -0.08em; }
        .hero p { max-width: 760px; margin: 0 auto; color: #b6c6d8; font-size: 1.08rem; line-height: 1.75; }
        .tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; padding: 34px 0 90px; }
        .tier-card { position: relative; border: 1px solid rgba(255,255,255,0.12); border-radius: 34px; padding: 28px; background: linear-gradient(145deg, rgba(255,255,255,0.105), rgba(255,255,255,0.045)); box-shadow: 0 28px 90px rgba(0,0,0,0.28); backdrop-filter: blur(22px); }
        .tier-card.featured { border-color: rgba(247, 200, 115, 0.5); box-shadow: 0 28px 90px rgba(232, 141, 74, 0.18); }
        .badge { position: absolute; top: 18px; right: 18px; border-radius: 999px; padding: 7px 10px; background: #f7c873; color: #07111d; font-size: 0.68rem; font-weight: 950; text-transform: uppercase; }
        .tier-name { color: #f7c873; font-weight: 950; }
        strong { display: block; margin-top: 16px; font-size: 3rem; letter-spacing: -0.08em; }
        small, p, .list { color: #b6c6d8; line-height: 1.65; }
        .list { display: grid; gap: 9px; margin: 18px 0 24px; }
        .list span { display: inline-flex; align-items: center; gap: 8px; }
        .list :global(svg) { color: #65d6ad; }
        a { min-height: 52px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 0 22px; background: linear-gradient(135deg, #f7c873, #e88d4a 52%, #b45cff); color: #07111d; font-weight: 950; text-decoration: none; }
        @media (max-width: 980px) { .tier-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
