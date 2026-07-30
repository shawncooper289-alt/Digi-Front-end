import Head from 'next/head';

const services = [
  'AI-powered campaign strategy',
  'Automated lead capture and follow-up',
  'Conversion-focused landing pages',
];

const metrics = [
  { value: '24/7', label: 'Automated client intake' },
  { value: '3x', label: 'Faster campaign launches' },
  { value: '100%', label: 'Built for scalable growth' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>DigiMark101 | AI Marketing Systems</title>
        <meta
          name="description"
          content="DigiMark101 builds AI-powered marketing systems that help businesses capture leads, automate follow-up, and grow with confidence."
        />
      </Head>

      <main className="page-shell">
        <section className="hero">
          <nav className="nav" aria-label="Main navigation">
            <div className="brand">DigiMark101</div>
            <a className="nav-cta" href="#systems">
              Start a Project
            </a>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI marketing systems for serious growth</p>
              <h1>Launch a polished digital presence that works while you do.</h1>
              <p className="hero-text">
                DigiMark101 combines strategy, automation, and clean execution to help your business capture more leads,
                follow up faster, and present itself with confidence from the first click.
              </p>

              <div className="cta-row">
                <a className="primary-button" href="#systems">
                  View Growth System
                </a>
                <a className="secondary-button" href="#systems">
                  Explore the System
                </a>
              </div>
            </div>

            <aside className="impact-card" aria-label="DigiMark101 growth system highlights">
              <div className="card-header">
                <span className="status-dot" />
                Growth system online
              </div>
              <h2>Strategy, automation, and execution in one streamlined stack.</h2>
              <div className="metric-grid">
                {metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="systems" id="systems">
          <div>
            <p className="eyebrow">What we build</p>
            <h2>Professional marketing infrastructure built to look finished from the first impression.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service}>
                <span className="service-mark" />
                <h3>{service}</h3>
                <p>
                  Purpose-built around your offer, audience, and next conversion goal so every page has a clear job.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(body) {
          margin: 0;
          background: #070b12;
          color: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .page-shell {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 15%, rgba(56, 189, 248, 0.18), transparent 28rem),
            radial-gradient(circle at 85% 10%, rgba(168, 85, 247, 0.16), transparent 24rem),
            linear-gradient(135deg, #070b12 0%, #0f172a 48%, #111827 100%);
        }

        .hero,
        .systems {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero {
          padding: 28px 0 72px;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 84px;
        }

        .brand {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .nav-cta,
        .secondary-button,
        .primary-button {
          border-radius: 999px;
          color: inherit;
          font-weight: 700;
          text-decoration: none;
        }

        .nav-cta,
        .secondary-button {
          border: 1px solid rgba(226, 232, 240, 0.18);
          background: rgba(15, 23, 42, 0.54);
        }

        .nav-cta {
          padding: 0.75rem 1rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 48px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #38bdf8;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 780px;
          margin-bottom: 24px;
          font-size: clamp(3rem, 7vw, 6.8rem);
          line-height: 0.9;
          letter-spacing: -0.08em;
        }

        .hero-text {
          max-width: 660px;
          color: #cbd5e1;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.75;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 1.35rem;
        }

        .primary-button {
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
          box-shadow: 0 24px 60px rgba(56, 189, 248, 0.28);
        }

        .impact-card {
          border: 1px solid rgba(226, 232, 240, 0.16);
          border-radius: 32px;
          padding: 34px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.62));
          box-shadow: 0 40px 100px rgba(2, 6, 23, 0.45);
          backdrop-filter: blur(20px);
        }

        .card-header {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          color: #bae6fd;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .status-dot,
        .service-mark {
          display: inline-block;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 22px rgba(34, 197, 94, 0.55);
        }

        .status-dot {
          width: 10px;
          height: 10px;
        }

        .impact-card h2,
        .systems h2 {
          font-size: clamp(2rem, 4vw, 3.15rem);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .metric-grid {
          display: grid;
          gap: 14px;
          margin-top: 32px;
        }

        .metric {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(226, 232, 240, 0.12);
          padding-top: 16px;
          color: #cbd5e1;
        }

        .metric strong {
          color: #f8fafc;
          font-size: 1.7rem;
        }

        .systems {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 36px;
          padding: 54px 0 72px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .service-card {
          min-height: 240px;
          border: 1px solid rgba(226, 232, 240, 0.12);
          border-radius: 24px;
          padding: 24px;
          background: rgba(15, 23, 42, 0.58);
        }

        .service-mark {
          width: 34px;
          height: 4px;
          margin-bottom: 28px;
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
        }

        .service-card h3 {
          font-size: 1.05rem;
          line-height: 1.3;
        }

        .service-card p {
          color: #94a3b8;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .nav {
            margin-bottom: 48px;
          }

          .hero-grid,
          .systems,
          .service-grid {
            grid-template-columns: 1fr;
          }

          .systems {
            padding-top: 20px;
          }
        }

        @media (max-width: 560px) {
          .hero,
          .systems {
            width: min(100% - 28px, 1120px);
          }

          .nav {
            align-items: flex-start;
            flex-direction: column;
          }

          .impact-card,
          .service-card {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
