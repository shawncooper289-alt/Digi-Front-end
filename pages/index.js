import { useEffect, useMemo, useState } from 'react';

const brand = {
  ink: '#111326',
  night: '#050816',
  plum: '#4c177f',
  violet: '#7b1fc2',
  magenta: '#c044df',
  lavender: '#f2e7ff',
  silver: '#8f8f99',
  white: '#ffffff'
};

const avaSkyeRules = [
  'Same face structure, hair profile, lighting, and polished DigiMark101 purple/black grade across every photo and video.',
  'Same widget geometry: rounded glass panels, purple accents, dark text, and consistent spacing.',
  'Only wardrobe changes between future videos; identity, color grade, framing, and widget language stay locked.'
];

function DigiMarkLogo() {
  return (
    <div className="brand-lockup" aria-label="DigiMark101 Digital Marketing Agency">
      <svg className="brand-mark" viewBox="0 0 168 112" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="dmGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={brand.ink} />
            <stop offset="0.42" stopColor={brand.plum} />
            <stop offset="1" stopColor={brand.magenta} />
          </linearGradient>
        </defs>
        <path d="M12 74 L25 20 H72 C97 20 112 30 118 47 C102 38 83 39 59 41 L47 41 L39 74 Z" fill={brand.ink} />
        <path d="M32 29 C39 39 50 44 72 42 C92 40 108 41 119 49 C114 31 96 20 69 20 H25 C26 24 28 27 32 29 Z" fill="url(#dmGradient)" />
        <path d="M59 78 C90 58 114 35 156 19 L150 67 L139 51 C112 72 89 88 59 78 Z" fill="url(#dmGradient)" />
        <path d="M77 70 C96 49 115 34 145 24 C116 47 96 67 79 86 C74 82 73 76 77 70 Z" fill={brand.plum} opacity="0.9" />
        <rect x="128" y="12" width="10" height="10" fill={brand.magenta} />
        <rect x="112" y="24" width="9" height="9" fill={brand.violet} />
        <rect x="138" y="28" width="6" height="6" fill={brand.magenta} />
      </svg>
      <div>
        <div className="brand-name">DigiMark<span>101</span></div>
        <div className="brand-subtitle">Digital Marketing Agency</div>
      </div>
    </div>
  );
}

function AvaSkyePortrait() {
  return (
    <section className="ava-card" aria-label="Ava Skye visual consistency system">
      <div className="portrait-frame">
        <div className="portrait-glow" />
        <div className="portrait-head" />
        <div className="portrait-hair" />
        <div className="portrait-body" />
        <div className="wardrobe-chip">Wardrobe can change</div>
      </div>
      <div className="consistency-panel">
        <p className="eyebrow">Ava Skye visual lock</p>
        <h2>Photos, videos, and widgets stay forever consistent.</h2>
        <ul>
          {avaSkyeRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  const [message, setMessage] = useState('Initializing Ava Skye...');
  const [loading, setLoading] = useState(true);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMessage('Ava Skye brand system is locked');
      setLoading(false);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="page-shell">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: ${brand.white}; }
        .page-shell {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 1.4rem clamp(1rem, 4vw, 4rem) 3rem;
          color: ${brand.ink};
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 85% 12%, rgba(192, 68, 223, 0.18), transparent 25rem),
            radial-gradient(circle at 6% 82%, rgba(76, 23, 127, 0.13), transparent 28rem),
            linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
        }
        .page-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: linear-gradient(rgba(17,19,38,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,19,38,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 70%);
        }
        .topbar {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          min-width: 220px;
        }
        .brand-mark { width: 58px; height: 44px; display: block; }
        .brand-name {
          font-size: clamp(1.1rem, 2vw, 1.55rem);
          line-height: 1;
          font-weight: 900;
          font-style: italic;
          letter-spacing: -0.05em;
          color: ${brand.ink};
        }
        .brand-name span {
          color: ${brand.violet};
          background: linear-gradient(135deg, ${brand.violet}, ${brand.magenta});
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .brand-subtitle {
          margin-top: 0.25rem;
          color: ${brand.silver};
          font-size: 0.54rem;
          font-weight: 800;
          letter-spacing: 0.34em;
          text-transform: uppercase;
        }
        .system-pill {
          border: 1px solid rgba(123, 31, 194, 0.22);
          color: ${brand.plum};
          background: rgba(255,255,255,0.78);
          padding: 0.7rem 1rem;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 800;
          box-shadow: 0 14px 40px rgba(76, 23, 127, 0.08);
        }
        .hero {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.9fr);
          align-items: center;
          gap: clamp(2rem, 6vw, 5rem);
          max-width: 1180px;
          margin: clamp(3rem, 7vw, 6rem) auto 0;
        }
        .eyebrow {
          margin: 0 0 0.8rem;
          color: ${brand.violet};
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        h1 {
          margin: 0;
          max-width: 760px;
          color: ${brand.ink};
          font-size: clamp(3.2rem, 8vw, 7.5rem);
          line-height: 0.88;
          font-weight: 950;
          letter-spacing: -0.085em;
        }
        .gradient-text {
          display: block;
          background: linear-gradient(135deg, ${brand.ink} 0%, ${brand.violet} 48%, ${brand.magenta} 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-copy {
          max-width: 640px;
          margin: 1.4rem 0 0;
          color: rgba(17, 19, 38, 0.72);
          font-size: clamp(1.05rem, 2.2vw, 1.35rem);
          line-height: 1.7;
        }
        .actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; }
        .button {
          border: 0;
          border-radius: 999px;
          padding: 1rem 1.35rem;
          cursor: pointer;
          font-weight: 900;
          font-size: 0.98rem;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .button:hover { transform: translateY(-2px); }
        .button-primary {
          color: ${brand.white};
          background: linear-gradient(135deg, ${brand.ink}, ${brand.violet} 55%, ${brand.magenta});
          box-shadow: 0 22px 50px rgba(123, 31, 194, 0.28);
        }
        .button-secondary {
          color: ${brand.plum};
          background: ${brand.white};
          border: 1px solid rgba(123, 31, 194, 0.22);
          box-shadow: 0 14px 36px rgba(76, 23, 127, 0.1);
        }
        .status-card {
          margin-top: 1.8rem;
          max-width: 580px;
          padding: 1rem 1.15rem;
          border-radius: 24px;
          color: ${brand.ink};
          background: rgba(255,255,255,0.74);
          border: 1px solid rgba(123, 31, 194, 0.16);
          box-shadow: 0 24px 70px rgba(76, 23, 127, 0.1);
          backdrop-filter: blur(18px);
        }
        .status-card strong { color: ${brand.violet}; }
        .ava-card {
          position: relative;
          min-height: 620px;
          padding: 1rem;
          border-radius: 42px;
          background: linear-gradient(160deg, rgba(255,255,255,0.94), rgba(242,231,255,0.84));
          border: 1px solid rgba(123, 31, 194, 0.18);
          box-shadow: 0 38px 100px rgba(76, 23, 127, 0.16);
          overflow: hidden;
        }
        .ava-card::before {
          content: '';
          position: absolute;
          width: 330px;
          height: 330px;
          right: -95px;
          top: -95px;
          background: radial-gradient(circle, rgba(192,68,223,0.38), transparent 67%);
        }
        .portrait-frame {
          position: relative;
          min-height: 370px;
          border-radius: 34px;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(17,19,38,0.96), rgba(76,23,127,0.88) 58%, rgba(192,68,223,0.76)),
            radial-gradient(circle at 50% 25%, rgba(255,255,255,0.24), transparent 18rem);
        }
        .portrait-glow {
          position: absolute;
          inset: 15% 16% auto;
          height: 210px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.42), transparent 68%);
          filter: blur(10px);
        }
        .portrait-head {
          position: absolute;
          width: 118px;
          height: 148px;
          left: 50%;
          top: 62px;
          transform: translateX(-50%);
          border-radius: 58% 58% 48% 48%;
          background: linear-gradient(145deg, #f7d5c3, #c88970);
          box-shadow: inset -18px -18px 30px rgba(82,40,62,0.2);
        }
        .portrait-hair {
          position: absolute;
          width: 178px;
          height: 196px;
          left: 50%;
          top: 36px;
          transform: translateX(-50%);
          border-radius: 50% 50% 42% 42%;
          background: linear-gradient(145deg, #17101e, #3a174f 62%, #7b1fc2);
          clip-path: polygon(18% 0, 88% 6%, 100% 52%, 78% 100%, 58% 72%, 40% 100%, 12% 56%);
          opacity: 0.96;
        }
        .portrait-body {
          position: absolute;
          width: 260px;
          height: 230px;
          left: 50%;
          bottom: -54px;
          transform: translateX(-50%);
          border-radius: 48% 48% 18% 18%;
          background: linear-gradient(135deg, ${brand.ink}, ${brand.violet} 55%, ${brand.magenta});
          box-shadow: inset 34px 0 70px rgba(255,255,255,0.11);
        }
        .wardrobe-chip {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          border-radius: 999px;
          padding: 0.66rem 0.86rem;
          color: ${brand.white};
          background: rgba(17,19,38,0.74);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 0.78rem;
          font-weight: 900;
          backdrop-filter: blur(16px);
        }
        .consistency-panel { padding: 1.35rem 1rem 0.7rem; }
        .consistency-panel h2 {
          margin: 0 0 1rem;
          color: ${brand.ink};
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          line-height: 1;
          letter-spacing: -0.05em;
        }
        .consistency-panel ul {
          display: grid;
          gap: 0.85rem;
          margin: 0;
          padding: 0;
          list-style: none;
          color: rgba(17,19,38,0.74);
          line-height: 1.55;
        }
        .consistency-panel li {
          position: relative;
          padding-left: 1.45rem;
        }
        .consistency-panel li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.48rem;
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: linear-gradient(135deg, ${brand.violet}, ${brand.magenta});
        }
        .widget-row {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 2rem auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }
        .widget {
          padding: 1.2rem;
          border-radius: 26px;
          background: rgba(255,255,255,0.76);
          border: 1px solid rgba(123, 31, 194, 0.14);
          box-shadow: 0 18px 44px rgba(76, 23, 127, 0.08);
        }
        .widget h3 { margin: 0 0 0.5rem; color: ${brand.ink}; letter-spacing: -0.03em; }
        .widget p { margin: 0; color: rgba(17,19,38,0.68); line-height: 1.55; }
        footer {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 2rem auto 0;
          color: ${brand.silver};
          font-size: 0.88rem;
        }
        @media (max-width: 880px) {
          .topbar { align-items: flex-start; flex-direction: column; }
          .hero { grid-template-columns: 1fr; margin-top: 2.5rem; }
          .ava-card { min-height: auto; }
          .widget-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="topbar">
        <DigiMarkLogo />
        <div className="system-pill">Ava Skye identity locked • Clothing flexible</div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">DigiMark101 presents</p>
          <h1>
            Ava Skye
            <span className="gradient-text">Brand Consistency System</span>
          </h1>
          <p className="hero-copy">
            Ava Skye’s photos, videos, and widgets now follow one permanent visual language: DigiMark101 purple, black, silver, and white; consistent framing; consistent UI; and a stable character identity. Future clothing can change without changing Ava Skye.
          </p>
          <div className="actions">
            <button className="button button-primary" onClick={() => setMessage('Ava Skye identity remains consistent across every asset')}>Lock Ava Skye Look</button>
            <button className="button button-secondary" onClick={() => setMessage('Wardrobe may change; face, style, lighting, and widgets stay consistent')}>Wardrobe Rule</button>
          </div>
          <div className="status-card">
            <strong>{loading ? 'Preparing:' : 'Status:'}</strong> {loading ? 'Applying DigiMark101 brand rules...' : message}
          </div>
        </div>
        <AvaSkyePortrait />
      </section>

      <section className="widget-row" aria-label="Ava Skye consistency widgets">
        <div className="widget">
          <h3>Photo rules</h3>
          <p>Same Ava Skye identity, expression range, lighting style, framing, and DigiMark101 color grade.</p>
        </div>
        <div className="widget">
          <h3>Video rules</h3>
          <p>Same intro/outro styling, purple-black overlays, polished camera language, and consistent avatar presence.</p>
        </div>
        <div className="widget">
          <h3>Widget rules</h3>
          <p>Same rounded cards, glass panels, purple accents, spacing, typography, and status language across pages.</p>
        </div>
      </section>

      <footer>
        © {year} DigiMark101 Digital Marketing Agency • Ava Skye frontend on Vercel
      </footer>
    </main>
  );
}
