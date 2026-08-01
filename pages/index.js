import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Initializing DigiMark101...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMessage('Welcome to DigiMark101');
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
            radial-gradient(circle at 18% 12%, rgba(96, 165, 250, 0.18), transparent 28rem),
            radial-gradient(circle at 82% 74%, rgba(236, 72, 153, 0.22), transparent 26rem),
            linear-gradient(135deg, #050816 0%, #0f1419 48%, #1a1f2e 100%);
          color: #f9fafb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          padding: clamp(1.25rem, 4vw, 4rem);
          overflow-x: hidden;
        }

        .hero {
          width: min(1240px, 100%);
          min-height: calc(100vh - clamp(2.5rem, 8vw, 8rem));
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(420px, 560px);
          gap: clamp(2.5rem, 7vw, 6rem);
          align-items: center;
        }

        .copy {
          text-align: left;
          position: relative;
          z-index: 2;
          animation: slideUp 0.7s ease-out both;
        }

        .eyebrow {
          display: inline-flex;
          padding: 0.5rem 0.85rem;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.58);
          color: #93c5fd;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
        }

        h1 {
          font-size: clamp(3rem, 7vw, 5.75rem);
          font-weight: 900;
          line-height: 0.94;
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
          font-size: clamp(1.25rem, 2.4vw, 1.75rem);
          max-width: 42rem;
          margin: 0 0 2rem;
          color: rgba(249, 250, 251, 0.88);
          line-height: 1.45;
          font-weight: 700;
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
          min-height: clamp(620px, 82vh, 780px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: relative;
          isolation: isolate;
          animation: slideUp 0.7s ease-out 0.1s both;
        }

        .visual-wrap::before {
          content: '';
          position: absolute;
          width: min(95%, 500px);
          height: 88%;
          bottom: 0;
          border-radius: 2rem;
          background:
            radial-gradient(circle at 50% 18%, rgba(96, 165, 250, 0.32), transparent 15rem),
            radial-gradient(circle at 50% 55%, rgba(236, 72, 153, 0.24), transparent 18rem),
            linear-gradient(180deg, rgba(15, 23, 42, 0.34), rgba(15, 23, 42, 0.78));
          border: 1px solid rgba(148, 163, 184, 0.22);
          box-shadow: 0 32px 90px rgba(2, 6, 23, 0.52), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          z-index: -2;
        }

        .halo {
          position: absolute;
          width: clamp(18rem, 32vw, 28rem);
          height: clamp(18rem, 32vw, 28rem);
          left: 50%;
          top: 2rem;
          transform: translateX(-50%);
          border-radius: 999px;
          background: conic-gradient(from 150deg, rgba(96, 165, 250, 0.08), rgba(236, 72, 153, 0.46), rgba(52, 211, 153, 0.16), rgba(96, 165, 250, 0.08));
          filter: blur(1px);
          opacity: 0.95;
          z-index: -1;
          animation: pulse 4.5s ease-in-out infinite;
        }

        .ava-figure {
          width: min(100%, 430px);
          height: min(740px, 78vh);
          min-height: 600px;
          position: relative;
          overflow: visible;
        }

        .hair-back {
          position: absolute;
          width: 190px;
          height: 255px;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 48% 48% 44% 44%;
          background: linear-gradient(145deg, #1f2937, #030712 58%, #111827);
          box-shadow: 0 0 52px rgba(96, 165, 250, 0.28);
        }

        .face {
          position: absolute;
          width: 126px;
          height: 150px;
          top: 54px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 48% 48% 45% 45%;
          background: linear-gradient(160deg, #f5c7b8, #d69488 68%, #a86964);
          box-shadow: inset -14px -18px 24px rgba(86, 45, 56, 0.26);
          z-index: 2;
        }

        .bangs {
          position: absolute;
          width: 138px;
          height: 78px;
          top: 31px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 60% 60% 38% 38%;
          background: linear-gradient(150deg, #020617, #1f2937 58%, #111827);
          clip-path: polygon(0 0, 100% 0, 96% 58%, 74% 42%, 55% 76%, 34% 42%, 7% 68%);
          z-index: 3;
        }

        .eyes {
          position: absolute;
          width: 80px;
          top: 108px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
          z-index: 4;
        }

        .eyes span {
          width: 14px;
          height: 8px;
          border-radius: 999px;
          background: #0f172a;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.7);
        }

        .mouth {
          position: absolute;
          width: 30px;
          height: 13px;
          top: 158px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom: 3px solid rgba(127, 29, 29, 0.46);
          border-radius: 0 0 999px 999px;
          z-index: 4;
        }

        .neck {
          position: absolute;
          width: 48px;
          height: 76px;
          top: 184px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0 0 18px 18px;
          background: linear-gradient(160deg, #d69488, #9f625f);
          z-index: 1;
        }

        .torso {
          position: absolute;
          width: 228px;
          height: 285px;
          top: 242px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 98px 98px 44px 44px;
          background:
            linear-gradient(120deg, rgba(96, 165, 250, 0.32), transparent 32%),
            linear-gradient(180deg, #101827, #1f1141 48%, #111827);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), 0 18px 48px rgba(2, 6, 23, 0.42);
          z-index: 1;
        }

        .torso::before {
          content: '';
          position: absolute;
          width: 88px;
          height: 132px;
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
          height: 250px;
          top: 267px;
          border-radius: 999px;
          background: linear-gradient(180deg, #161b2c, #0f172a);
          transform-origin: top center;
          z-index: 0;
        }

        .arm.left {
          left: 73px;
          transform: rotate(10deg);
        }

        .arm.right {
          right: 73px;
          transform: rotate(-10deg);
        }

        .hand {
          position: absolute;
          width: 42px;
          height: 46px;
          top: 497px;
          border-radius: 999px;
          background: linear-gradient(160deg, #d69488, #9f625f);
          z-index: 2;
        }

        .hand.left {
          left: 66px;
        }

        .hand.right {
          right: 66px;
        }

        .legs {
          position: absolute;
          width: 136px;
          height: 152px;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 0;
        }

        .legs span {
          flex: 1;
          border-radius: 24px 24px 0 0;
          background: linear-gradient(180deg, #111827, #020617);
        }

        .footer {
          margin-top: 2rem;
          color: rgba(249, 250, 251, 0.55);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.75; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.04); }
        }

        @media (max-width: 900px) {
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
            min-height: 620px;
            order: 2;
          }
        }

        @media (max-width: 520px) {
          .page-shell {
            padding: 1rem;
          }

          .visual-wrap {
            min-height: 560px;
          }

          .ava-figure {
            transform: scale(0.88);
            transform-origin: bottom center;
          }
        }
      `}</style>

      <section className="hero" aria-label="DigiMark101 Ava Skye hero">
        <div className="copy">
          <div className="eyebrow">DigiMark101 • Ava Skye</div>
          <h1>
            Welcome to
            <span className="gradient-text">DigiMark101</span>
          </h1>
          <p className="subtitle">
            Your digital empire starts here!
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
              onClick={() => { window.location.href = '/login'; }}
            >
              Owner Login
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
            Deployed on Vercel • DigiMark101
          </p>
        </div>

        <div className="visual-wrap" aria-hidden="true">
          <div className="halo" />
          <div className="ava-figure">
            <div className="hair-back" />
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
        </div>
      </section>
    </main>
  );
}
