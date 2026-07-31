import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Initializing Dynasty...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMessage('Welcome to Your Digital Dynasty');
        setLoading(false);
      });
  }, []);

  return (
    <main className="page-shell">
      <style jsx>{`
        .page-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 16% 10%, rgba(96, 165, 250, 0.18), transparent 28rem),
            radial-gradient(circle at 82% 72%, rgba(236, 72, 153, 0.22), transparent 26rem),
            linear-gradient(135deg, #050816 0%, #0f1419 48%, #1a1f2e 100%);
          color: #f9fafb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          padding: clamp(1.25rem, 4vw, 4rem);
          position: relative;
          overflow: hidden;
        }

        .page-shell::before,
        .page-shell::after {
          content: '';
          position: absolute;
          border-radius: 999px;
          filter: blur(4px);
          opacity: 0.55;
          animation: float 8s ease-in-out infinite;
        }

        .page-shell::before {
          width: 26rem;
          height: 26rem;
          left: -13rem;
          top: -13rem;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.18), transparent 70%);
        }

        .page-shell::after {
          width: 20rem;
          height: 20rem;
          right: -10rem;
          bottom: -10rem;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.18), transparent 70%);
          animation-direction: reverse;
        }

        .hero {
          width: min(1180px, 100%);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 440px);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .copy {
          text-align: left;
          animation: slideUp 0.8s ease-out both;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.85rem;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.58);
          color: #93c5fd;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
        }

        h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          line-height: 0.92;
          margin: 1.15rem 0 1rem;
          letter-spacing: -0.07em;
        }

        .gradient-text {
          display: block;
          background: linear-gradient(135deg, #60a5fa 0%, #f0abfc 48%, #ec4899 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: clamp(1.08rem, 2vw, 1.35rem);
          max-width: 42rem;
          margin: 0 0 2rem;
          color: rgba(249, 250, 251, 0.82);
          line-height: 1.65;
        }

        .status-box {
          max-width: 38rem;
          padding: 1.35rem;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(236, 72, 153, 0.12));
          border: 1px solid rgba(148, 163, 184, 0.28);
          backdrop-filter: blur(14px);
          box-shadow: 0 22px 70px rgba(2, 6, 23, 0.28);
        }

        .status-box h2 {
          font-size: 0.95rem;
          margin: 0 0 0.5rem;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .status-box p {
          font-size: 1.05rem;
          margin: 0;
          color: #34d399;
        }

        .actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        button {
          padding: 1rem 1.5rem;
          border-radius: 999px;
          cursor: pointer;
          color: #f9fafb;
          font-weight: 800;
          font-size: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        button:hover {
          transform: translateY(-2px);
        }

        .primary-button {
          border: none;
          background: linear-gradient(135deg, #3b82f6, #ec4899);
          box-shadow: 0 18px 40px rgba(59, 130, 246, 0.35), 0 0 60px rgba(236, 72, 153, 0.18);
        }

        .secondary-button {
          border: 1px solid rgba(148, 163, 184, 0.45);
          background: rgba(15, 23, 42, 0.35);
        }

        .secondary-button:hover {
          border-color: rgba(96, 165, 250, 0.8);
          background: rgba(59, 130, 246, 0.1);
        }

        .visual-wrap {
          min-height: min(76vh, 740px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: relative;
          animation: slideUp 0.8s ease-out 0.15s both;
        }

        .visual-card {
          width: min(100%, 430px);
          min-height: 650px;
          border-radius: 2rem;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.86)),
            radial-gradient(circle at 50% 18%, rgba(96, 165, 250, 0.35), transparent 14rem),
            radial-gradient(circle at 48% 58%, rgba(236, 72, 153, 0.28), transparent 18rem);
          border: 1px solid rgba(148, 163, 184, 0.25);
          box-shadow: 0 32px 90px rgba(2, 6, 23, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.09);
        }

        .visual-card::before {
          content: '';
          position: absolute;
          inset: 1rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .halo {
          position: absolute;
          width: 19rem;
          height: 19rem;
          left: 50%;
          top: 4rem;
          transform: translateX(-50%);
          border-radius: 999px;
          background: conic-gradient(from 150deg, rgba(96, 165, 250, 0.08), rgba(236, 72, 153, 0.48), rgba(52, 211, 153, 0.18), rgba(96, 165, 250, 0.08));
          filter: blur(1px);
          animation: pulse 4.5s ease-in-out infinite;
        }

        .ava-figure {
          position: absolute;
          inset: auto 0 0;
          height: 600px;
        }

        .hair {
          position: absolute;
          width: 170px;
          height: 215px;
          top: 34px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 48% 48% 44% 44%;
          background: linear-gradient(145deg, #1f2937, #030712 58%, #111827);
          box-shadow: 0 0 50px rgba(96, 165, 250, 0.24);
        }

        .hair::after {
          content: '';
          position: absolute;
          width: 68px;
          height: 150px;
          right: -8px;
          top: 44px;
          border-radius: 999px 999px 28px 28px;
          background: linear-gradient(180deg, #111827, #020617);
          transform: rotate(-12deg);
        }

        .face {
          position: absolute;
          width: 112px;
          height: 138px;
          top: 74px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 48% 48% 44% 44%;
          background: linear-gradient(160deg, #f5c7b8, #d69488 68%, #a86964);
          box-shadow: inset -14px -18px 24px rgba(86, 45, 56, 0.28);
        }

        .bangs {
          position: absolute;
          width: 122px;
          height: 70px;
          top: 54px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 60% 60% 38% 38%;
          background: linear-gradient(150deg, #020617, #1f2937 58%, #111827);
          clip-path: polygon(0 0, 100% 0, 92% 64%, 70% 42%, 50% 78%, 30% 42%, 8% 68%);
        }

        .eyes {
          position: absolute;
          width: 72px;
          top: 128px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
        }

        .eyes span {
          width: 12px;
          height: 7px;
          border-radius: 999px;
          background: #0f172a;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.7);
        }

        .mouth {
          position: absolute;
          width: 28px;
          height: 12px;
          top: 174px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom: 3px solid rgba(127, 29, 29, 0.46);
          border-radius: 0 0 999px 999px;
        }

        .neck {
          position: absolute;
          width: 44px;
          height: 70px;
          top: 195px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0 0 18px 18px;
          background: linear-gradient(160deg, #d69488, #9f625f);
        }

        .torso {
          position: absolute;
          width: 214px;
          height: 285px;
          top: 246px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 92px 92px 42px 42px;
          background:
            linear-gradient(120deg, rgba(96, 165, 250, 0.32), transparent 32%),
            linear-gradient(180deg, #101827, #1f1141 48%, #111827);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), 0 18px 48px rgba(2, 6, 23, 0.42);
        }

        .torso::before {
          content: '';
          position: absolute;
          width: 86px;
          height: 130px;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          border-radius: 0 0 42px 42px;
          background: linear-gradient(180deg, rgba(236, 72, 153, 0.34), rgba(96, 165, 250, 0.18));
          clip-path: polygon(0 0, 100% 0, 70% 100%, 30% 100%);
        }

        .arm {
          position: absolute;
          width: 54px;
          height: 260px;
          top: 270px;
          border-radius: 999px;
          background: linear-gradient(180deg, #161b2c, #0f172a);
          transform-origin: top center;
        }

        .arm.left {
          left: 72px;
          transform: rotate(10deg);
        }

        .arm.right {
          right: 72px;
          transform: rotate(-10deg);
        }

        .hand {
          position: absolute;
          width: 42px;
          height: 46px;
          top: 505px;
          border-radius: 999px;
          background: linear-gradient(160deg, #d69488, #9f625f);
        }

        .hand.left {
          left: 66px;
        }

        .hand.right {
          right: 66px;
        }

        .legs {
          position: absolute;
          width: 132px;
          height: 128px;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
        }

        .legs span {
          flex: 1;
          border-radius: 24px 24px 0 0;
          background: linear-gradient(180deg, #111827, #020617);
        }

        .visual-label {
          position: absolute;
          left: 1.25rem;
          right: 1.25rem;
          bottom: 1.25rem;
          padding: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 1rem;
          background: rgba(2, 6, 23, 0.62);
          backdrop-filter: blur(16px);
          text-align: left;
        }

        .visual-label strong {
          display: block;
          color: #f0abfc;
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .visual-label span {
          color: rgba(249, 250, 251, 0.72);
          font-size: 0.9rem;
        }

        .footer {
          margin-top: 2rem;
          color: rgba(249, 250, 251, 0.55);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(30px); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }

        @media (max-width: 880px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .copy {
            text-align: center;
          }

          .subtitle,
          .status-box {
            margin-left: auto;
            margin-right: auto;
          }

          .actions {
            justify-content: center;
          }

          .visual-wrap {
            min-height: 640px;
          }
        }

        @media (max-width: 520px) {
          .visual-card {
            min-height: 570px;
          }

          .ava-figure {
            transform: scale(0.9);
            transform-origin: bottom center;
          }
        }
      `}</style>

      <section className="hero" aria-label="Ava Skye digital marketing hero">
        <div className="copy">
          <div className="eyebrow">Ava Skye visual online</div>
          <h1>
            Your Digital Dynasty
            <span className="gradient-text">Starts Here</span>
          </h1>
          <p className="subtitle">
            Advanced AI-powered marketing automation with Ava Skye up front, full-length, and ready to guide every campaign.
          </p>

          <div className="status-box">
            <h2>{loading ? 'Initializing...' : 'System Status'}</h2>
            <p>{loading ? 'Connecting to Ava OS...' : `✓ ${message}`}</p>
          </div>

          <div className="actions">
            <button className="primary-button" onClick={() => { window.location.href = '/dashboard'; }}>
              Enter Dashboard
            </button>
            <button
              className="secondary-button"
              onClick={() => {
                fetch('/api/hello', { method: 'POST' })
                  .then((res) => res.json())
                  .then((data) => setMessage(data.message))
                  .catch(() => setMessage('Error connecting to backend'));
              }}
            >
              Test Ava OS
            </button>
          </div>

          <p className="footer">
            Powered by Ava OS • Base44 Backend • Ava Knowledge Base
            <br />
            Deployed on Vercel • Fully responsive • Zero downtime updates
          </p>
        </div>

        <div className="visual-wrap" aria-hidden="true">
          <div className="visual-card">
            <div className="halo" />
            <div className="ava-figure">
              <div className="hair" />
              <div className="face" />
              <div className="bangs" />
              <div className="eyes"><span /><span /></div>
              <div className="mouth" />
              <div className="neck" />
              <div className="arm left" />
              <div className="arm right" />
              <div className="torso" />
              <div className="hand left" />
              <div className="hand right" />
              <div className="legs"><span /><span /></div>
            </div>
            <div className="visual-label">
              <strong>Ava Skye</strong>
              <span>Full visual assistant for your digital dynasty.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
