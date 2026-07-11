import { useEffect, useState } from 'react';

const brand = {
  ink: '#171729',
  purple: '#6d28d9',
  violet: '#a855f7',
  magenta: '#d946ef',
  silver: '#9ca3af',
  midnight: '#070716',
  white: '#ffffff'
};

const avaSkye = {
  name: 'Ava Skye',
  title: 'AI Host and Growth Strategist',
  promise: 'A calm, confident guide who turns every visitor into a clear next step.',
  voice: 'Warm, direct, strategic, and consistent across the platform, walkthroughs, and future videos.',
  appearance: 'Polished AI host with long brown hair, warm tan complexion, natural makeup, charcoal blazer, black top, and a friendly confident expression.',
  videoDirection: 'Keep Ava Skye framed like a premium platform host beside DigiMark101 training screens, with the same hair, complexion, wardrobe, nameplate, and calm presenter energy in every video.',
  visualRules: [
    'Purple-forward DigiMark101 palette with dark ink contrast and silver accents',
    'Confident agency tone: growth, clarity, automation, and measurable outcomes',
    'Ava Skye stays visually consistent: long brown hair, warm tan skin tone, polished natural makeup, charcoal blazer, and professional AI host posture',
    'Same name, role, voice, appearance, and guidance style in every page, prompt, and video script'
  ]
};

const walkthroughSteps = [
  {
    title: 'Start with your growth goal',
    description: 'Ava Skye welcomes each business owner, identifies the objective, and explains what DigiMark101 will build first.'
  },
  {
    title: 'Map the marketing system',
    description: 'Visitors see how funnels, follow-up, content, lead capture, and automation connect into one operating system.'
  },
  {
    title: 'Activate Ava OS',
    description: 'The walkthrough shows Ava turning strategy into campaigns, assets, reminders, and next-best actions.'
  },
  {
    title: 'Measure and scale',
    description: 'The platform closes the loop with reporting, optimization, and a clear path from first lead to repeat growth.'
  }
];

const pillars = ['Lead Capture', 'Automation', 'Content', 'Analytics'];

export default function Home() {
  const [message, setMessage] = useState('Preparing your DigiMark101 walkthrough...');
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(`${avaSkye.name} is ready to guide your growth system.`);
      setLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page-shell">
      <style>{`
        :root {
          color-scheme: dark;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: ${brand.midnight};
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .page-shell {
          min-height: 100vh;
          color: ${brand.white};
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 78% 14%, rgba(168, 85, 247, 0.34), transparent 31rem),
            radial-gradient(circle at 10% 8%, rgba(217, 70, 239, 0.16), transparent 24rem),
            linear-gradient(145deg, #050512 0%, #10101f 46%, #181327 100%);
        }

        .page-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black, transparent 75%);
          pointer-events: none;
        }

        .content {
          width: min(1160px, calc(100% - 32px));
          margin: 0 auto;
          padding: 32px 0 56px;
          position: relative;
          z-index: 1;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 72px;
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 14px;
          color: ${brand.white};
          text-decoration: none;
        }

        .logo-mark {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-size: 26px;
          font-weight: 950;
          letter-spacing: -0.11em;
          background: linear-gradient(135deg, #151526 0%, ${brand.purple} 45%, ${brand.magenta} 100%);
          box-shadow: 0 18px 55px rgba(109, 40, 217, 0.45);
          position: relative;
        }

        .logo-mark::after {
          content: '↗';
          position: absolute;
          right: -10px;
          top: -16px;
          font-size: 32px;
          color: ${brand.violet};
          text-shadow: 0 12px 24px rgba(168, 85, 247, 0.5);
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: -0.05em;
        }

        .brand-name span {
          color: ${brand.violet};
        }

        .brand-subtitle {
          color: ${brand.silver};
          font-size: 0.72rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .status-pill {
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06);
          color: #ddd6fe;
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 0.92rem;
          backdrop-filter: blur(14px);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 36px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          gap: 10px;
          align-items: center;
          color: #e9d5ff;
          border: 1px solid rgba(168, 85, 247, 0.34);
          background: rgba(109, 40, 217, 0.16);
          padding: 9px 14px;
          border-radius: 999px;
          margin-bottom: 22px;
          font-weight: 700;
        }

        h1 {
          font-size: clamp(3.25rem, 8vw, 6.8rem);
          line-height: 0.9;
          letter-spacing: -0.08em;
          margin: 0 0 24px;
        }

        .gradient-text {
          background: linear-gradient(110deg, #fff 0%, #d8b4fe 42%, ${brand.magenta} 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-copy {
          color: #d1d5db;
          font-size: 1.15rem;
          line-height: 1.75;
          max-width: 680px;
          margin: 0 0 30px;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 30px;
        }

        .primary-button,
        .secondary-button {
          border: 0;
          border-radius: 999px;
          padding: 15px 22px;
          font-weight: 850;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .primary-button {
          color: white;
          background: linear-gradient(135deg, ${brand.purple}, ${brand.magenta});
          box-shadow: 0 18px 42px rgba(109, 40, 217, 0.42);
        }

        .secondary-button {
          color: #f5f3ff;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .pillar-row {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .pillar {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.055);
          border-radius: 18px;
          padding: 14px;
          color: #e5e7eb;
          text-align: center;
          font-weight: 750;
        }

        .ava-card,
        .walkthrough-panel,
        .standard-card {
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.045));
          box-shadow: 0 24px 80px rgba(0,0,0,0.28);
          backdrop-filter: blur(18px);
          border-radius: 32px;
        }

        .ava-card {
          padding: 28px;
          position: relative;
          overflow: hidden;
        }

        .ava-card::before {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          right: -70px;
          top: -70px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(217, 70, 239, 0.42), transparent 70%);
        }

        .avatar {
          width: 112px;
          height: 112px;
          border-radius: 34px;
          display: grid;
          place-items: center;
          font-size: 2.6rem;
          font-weight: 950;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02)),
            linear-gradient(135deg, ${brand.purple}, ${brand.magenta});
          box-shadow: 0 22px 56px rgba(168, 85, 247, 0.38);
          margin-bottom: 22px;
          position: relative;
        }

        .avatar::after {
          content: '';
          position: absolute;
          inset: 18px 22px auto auto;
          width: 14px;
          height: 14px;
          background: white;
          opacity: 0.72;
          border-radius: 999px;
        }

        .ava-card h2,
        .walkthrough-panel h2,
        .standard-card h2 {
          margin: 0 0 10px;
          font-size: 1.75rem;
          letter-spacing: -0.04em;
        }

        .role {
          color: #c084fc;
          font-weight: 850;
          margin-bottom: 16px;
        }

        .quote {
          color: #f5f3ff;
          line-height: 1.65;
          font-size: 1.08rem;
          margin-bottom: 22px;
        }

        .voice-box,
        .appearance-box {
          border-left: 3px solid ${brand.magenta};
          padding-left: 16px;
          color: #d1d5db;
          line-height: 1.55;
        }

        .appearance-box {
          border-left-color: ${brand.violet};
          margin-top: 14px;
        }

        .walkthrough-panel {
          margin-top: 34px;
          padding: 28px;
        }

        .steps {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 22px;
          margin-top: 22px;
        }

        .step-list {
          display: grid;
          gap: 12px;
        }

        .step-button {
          text-align: left;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.055);
          color: white;
          border-radius: 20px;
          padding: 16px;
          cursor: pointer;
        }

        .step-button.active {
          border-color: rgba(217, 70, 239, 0.8);
          background: linear-gradient(135deg, rgba(109,40,217,0.34), rgba(217,70,239,0.20));
        }

        .step-number {
          color: #c084fc;
          font-weight: 900;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .step-title {
          font-size: 1.08rem;
          font-weight: 850;
        }

        .step-stage {
          min-height: 100%;
          border-radius: 24px;
          padding: 28px;
          background:
            radial-gradient(circle at 82% 10%, rgba(217,70,239,0.34), transparent 17rem),
            linear-gradient(145deg, rgba(7,7,22,0.78), rgba(32,18,48,0.92));
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .step-stage p {
          color: #d1d5db;
          line-height: 1.7;
          font-size: 1.12rem;
        }

        .progress-line {
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          overflow: hidden;
          margin-top: 24px;
        }

        .progress-line span {
          display: block;
          height: 100%;
          width: var(--progress);
          border-radius: inherit;
          background: linear-gradient(90deg, ${brand.purple}, ${brand.magenta});
        }

        .standards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .standard-card {
          padding: 20px;
        }

        .standard-card p {
          color: #d1d5db;
          line-height: 1.58;
          margin: 0;
        }

        .footer-note {
          color: ${brand.silver};
          text-align: center;
          margin-top: 34px;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .hero-grid,
          .steps,
          .standards-grid {
            grid-template-columns: 1fr;
          }

          .nav {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 44px;
          }

          .pillar-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      <div className="content">
        <nav className="nav" aria-label="DigiMark101">
          <a className="brand-lockup" href="#top" aria-label="DigiMark101 home">
            <div className="logo-mark">DM</div>
            <div>
              <div className="brand-name">DigiMark<span>101</span></div>
              <div className="brand-subtitle">Digital Marketing Agency</div>
            </div>
          </a>
          <div className="status-pill">{loading ? 'Loading Ava Skye...' : message}</div>
        </nav>

        <section id="top" className="hero-grid" aria-label="DigiMark101 platform walkthrough">
          <div>
            <div className="eyebrow">DigiMark101 Platform Walkthrough</div>
            <h1>
              Build smarter growth with <span className="gradient-text">Ava Skye</span>.
            </h1>
            <p className="hero-copy">
              This is the real platform walkthrough for DigiMark101: a branded, guided path that shows prospects how Ava Skye turns strategy, automation, and analytics into a growth system.
            </p>
            <div className="cta-row">
              <button className="primary-button" onClick={() => document.getElementById('walkthrough').scrollIntoView({ behavior: 'smooth' })}>
                Start the walkthrough
              </button>
              <button className="secondary-button" onClick={() => setMessage(`${avaSkye.name} keeps every touchpoint consistent.`)}>
                Check Ava consistency
              </button>
            </div>
            <div className="pillar-row" aria-label="DigiMark101 platform pillars">
              {pillars.map((pillar) => (
                <div className="pillar" key={pillar}>{pillar}</div>
              ))}
            </div>
          </div>

          <aside className="ava-card" aria-label="Ava Skye profile">
            <div className="avatar" aria-hidden="true">AS</div>
            <h2>{avaSkye.name}</h2>
            <div className="role">{avaSkye.title}</div>
            <div className="quote">“{avaSkye.promise}”</div>
            <div className="voice-box">Voice standard: {avaSkye.voice}</div>
            <div className="appearance-box">Visual standard: {avaSkye.appearance}</div>
          </aside>
        </section>

        <section id="walkthrough" className="walkthrough-panel" aria-label="Platform walkthrough steps">
          <h2>The DigiMark101 growth walkthrough</h2>
          <p className="hero-copy">
            Ava Skye leads users through the same four-part journey every time, keeping the platform experience consistent now and ready for future video production.
          </p>
          <div className="steps">
            <div className="step-list">
              {walkthroughSteps.map((step, index) => (
                <button
                  className={`step-button ${activeStep === index ? 'active' : ''}`}
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  type="button"
                >
                  <div className="step-number">Step {index + 1}</div>
                  <div className="step-title">{step.title}</div>
                </button>
              ))}
            </div>
            <div className="step-stage">
              <div>
                <div className="step-number">Ava Skye explains</div>
                <h2>{walkthroughSteps[activeStep].title}</h2>
                <p>{walkthroughSteps[activeStep].description}</p>
              </div>
              <div className="progress-line" style={{ '--progress': `${((activeStep + 1) / walkthroughSteps.length) * 100}%` }}>
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="standards-grid" aria-label="Ava Skye consistency standards">
          {avaSkye.visualRules.map((rule, index) => (
            <div className="standard-card" key={rule}>
              <div className="step-number">Consistency rule {index + 1}</div>
              <p>{rule}</p>
            </div>
          ))}
        </section>

        <p className="footer-note">
          Powered by Ava OS • Base44 backend • Deployed on Vercel<br />
          Ava Skye remains the same guide across the website, platform prompts, walkthrough scripts, and future videos: {avaSkye.videoDirection}
        </p>
      </div>
    </main>
  );
}
