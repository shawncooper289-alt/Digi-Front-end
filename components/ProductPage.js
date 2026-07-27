import Head from 'next/head';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import AvaChatModal from './AvaChatModal';
import AvaSkyeVisual from './AvaSkyeVisual';
import SiteNav from './SiteNav';

export default function ProductPage({ page }) {
  return (
    <>
      <Head>
        <title>{page.title} | DigiMark101</title>
        <meta name="description" content={`${page.headline} ${page.intro}`} />
      </Head>
      <main className="page-shell">
        <SiteNav active={`/${page.slug}`} />
        <section className="hero">
          <div>
            <span className="pill"><Sparkles size={15} /> {page.eyebrow}</span>
            <h1>{page.headline}</h1>
            <p className="hero-copy">{page.intro}</p>
            <div className="actions">
              <a className="primary" href={page.cta === 'Open Ava Chat' ? '#ava-chat-note' : '/#early-access'}>{page.cta} <ArrowRight size={16} /></a>
              <a className="secondary" href="/pricing">View Pricing</a>
            </div>
          </div>
          <AvaSkyeVisual />
        </section>

        <section className="metric-grid" aria-label={`${page.title} metrics`}>
          {page.metrics.map(([value, label]) => (
            <article className="metric-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">What this page does</span>
            <h2>A complete Digimark101 experience, connected back to Ava.</h2>
          </div>
          <div className="card-grid">
            {page.sections.map(([title, copy]) => (
              <article className="feature-card" key={title}>
                <CheckCircle2 size={20} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow" id="ava-chat-note">
          <div>
            <span className="eyebrow">Workflow</span>
            <h2>From visitor interest to next action.</h2>
            <p>Each page now has a clear purpose, a human Ava presence, and a conversion path back to early access, checkout, or the Ava chat experience.</p>
          </div>
          <div className="timeline">
            {page.workflow.map(([number, title, copy]) => (
              <article className="timeline-row" key={title}>
                <strong>{number}</strong>
                <span><b>{title}</b><small>{copy}</small></span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <AvaChatModal />
      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(body) { margin: 0; background: #07111d; color: #f8fafc; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .page-shell { min-height: 100vh; overflow: hidden; background: radial-gradient(circle at 16% 8%, rgba(255, 214, 167, 0.18), transparent 28rem), radial-gradient(circle at 84% 16%, rgba(83, 166, 255, 0.18), transparent 32rem), linear-gradient(180deg, #050816 0%, #07111d 48%, #0d1b2a 100%); }
        .hero, .metric-grid, .section, .workflow { width: min(1180px, calc(100% - 40px)); margin: 0 auto; position: relative; z-index: 1; }
        .hero { display: grid; grid-template-columns: 0.95fr 0.68fr; gap: 52px; align-items: center; padding: 48px 0 74px; }
        .pill, .eyebrow { display: inline-flex; align-items: center; gap: 8px; color: #f7c873; font-size: 0.78rem; font-weight: 950; letter-spacing: 0.16em; text-transform: uppercase; }
        .pill { border: 1px solid rgba(247, 200, 115, 0.24); border-radius: 999px; padding: 9px 14px; background: rgba(255, 255, 255, 0.07); box-shadow: 0 20px 60px rgba(0,0,0,0.22); backdrop-filter: blur(18px); }
        h1, h2, h3, p { margin-top: 0; }
        h1 { margin: 24px 0; font-size: clamp(3.2rem, 7vw, 6.8rem); line-height: 0.9; letter-spacing: -0.08em; color: #ffffff; text-shadow: 0 28px 80px rgba(0,0,0,0.42); }
        h2 { margin: 12px 0 16px; font-size: clamp(2rem, 4.5vw, 4rem); line-height: 0.96; letter-spacing: -0.07em; color: #ffffff; }
        h3 { margin: 12px 0 10px; color: #ffffff; letter-spacing: -0.035em; }
        .hero-copy, .workflow p, .feature-card p { color: #b6c6d8; font-size: 1.06rem; line-height: 1.75; }
        .actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }
        .actions a { color: inherit; text-decoration: none; }
        .primary, .secondary { min-height: 52px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 0 22px; font-weight: 950; }
        .primary { background: linear-gradient(135deg, #f7c873, #e88d4a 52%, #b45cff); color: #07111d; box-shadow: 0 20px 56px rgba(232, 141, 74, 0.28); }
        .secondary { border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.07); color: #f8fafc; }
        .metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .metric-card, .feature-card, .workflow { border: 1px solid rgba(255, 255, 255, 0.12); background: linear-gradient(145deg, rgba(255,255,255,0.105), rgba(255,255,255,0.045)); box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28); backdrop-filter: blur(22px); }
        .metric-card { border-radius: 30px; padding: 26px; }
        .metric-card strong { display: block; color: #f7c873; font-size: 2.6rem; letter-spacing: -0.07em; }
        .metric-card span { color: #dbe7f5; font-weight: 850; }
        .section { padding: 76px 0; }
        .section-heading { max-width: 780px; margin: 0 auto 34px; text-align: center; }
        .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .feature-card { border-radius: 30px; padding: 26px; }
        .feature-card :global(svg) { color: #65d6ad; }
        .workflow { margin-bottom: 84px; border-radius: 42px; padding: 34px; display: grid; grid-template-columns: 0.85fr 1fr; gap: 30px; align-items: center; }
        .timeline { display: grid; gap: 14px; }
        .timeline-row { display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: start; padding: 16px; border-radius: 22px; background: rgba(255,255,255,0.07); }
        .timeline-row > strong { width: 46px; height: 46px; border-radius: 999px; display: grid; place-items: center; background: rgba(247, 200, 115, 0.16); color: #f7c873; }
        .timeline-row b { display: block; color: #ffffff; }
        .timeline-row small { display: block; margin-top: 5px; color: #b6c6d8; line-height: 1.55; }
        @media (max-width: 980px) { .hero, .workflow { grid-template-columns: 1fr; } .metric-grid, .card-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 700px) { .metric-grid, .card-grid { grid-template-columns: 1fr; } h1 { font-size: clamp(3rem, 18vw, 4.6rem); } }
      `}</style>
    </>
  );
}
