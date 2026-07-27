export default function AvaSkyeVisual({ compact = false }) {
  if (compact) {
    return (
      <span className="ava-orb" aria-label="Ava OS assistant">
        <span>A</span>
        <style jsx>{`
          .ava-orb {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            border-radius: 999px;
            background:
              radial-gradient(circle at 35% 24%, rgba(255, 255, 255, 0.92), transparent 0.8rem),
              linear-gradient(145deg, #234c5c, #5f8ea0 58%, #d9c5ae);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45), 0 18px 44px rgba(35, 76, 92, 0.28);
            color: #ffffff;
            font-weight: 950;
            letter-spacing: -0.08em;
          }

          .ava-orb span {
            transform: translateX(-1px);
          }
        `}</style>
      </span>
    );
  }

  return (
    <div className="ava-card" aria-label="Ava OS command center preview for DigiMark101">
      <div className="card-glow" aria-hidden="true" />

      <div className="visual-header">
        <span className="status-dot" />
        <span>Ava OS</span>
        <small>Single DigiMark101 project</small>
      </div>

      <div className="command-panel">
        <div className="assistant-core">
          <span className="core-ring" />
          <strong>A</strong>
        </div>
        <div className="assistant-copy">
          <span>AI Growth Assistant</span>
          <h3>Campaigns, funnels, content, and follow-up in one workspace.</h3>
        </div>
      </div>

      <div className="workflow-map" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="insight-stack">
        {[
          ['Launch plan', 'Offer, audience, channels'],
          ['Lead capture', 'Supabase handoff ready'],
          ['Follow-up', 'Email sequence drafted'],
        ].map(([label, note]) => (
          <div className="insight-row" key={label}>
            <span className="check">✓</span>
            <div>
              <strong>{label}</strong>
              <small>{note}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="ava-copy">
        <span>Meet Ava OS</span>
        <strong>A polished AI command center for DigiMark101</strong>
        <p>Ava now appears as a premium product interface instead of a character illustration, keeping the experience professional and focused on the single DigiMark101 project.</p>
      </div>

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.28);
          border-radius: 34px;
          padding: 18px;
          background:
            radial-gradient(circle at 20% 8%, rgba(217, 197, 174, 0.26), transparent 18rem),
            linear-gradient(145deg, rgba(35, 67, 83, 0.96), rgba(15, 23, 42, 0.86));
          box-shadow: 0 34px 120px rgba(2, 6, 23, 0.52), 0 0 80px rgba(95, 142, 160, 0.18);
          backdrop-filter: blur(22px);
          color: #ffffff;
        }

        .card-glow {
          position: absolute;
          inset: -28% -18% auto auto;
          width: 320px;
          height: 320px;
          border-radius: 999px;
          background: rgba(186, 230, 253, 0.16);
          filter: blur(12px);
        }

        .visual-header,
        .command-panel,
        .workflow-map,
        .insight-stack,
        .ava-copy {
          position: relative;
          z-index: 1;
        }

        .visual-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e0f2fe;
          font-size: 0.8rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .visual-header small {
          margin-left: auto;
          color: #bfd7df;
          font-size: 0.64rem;
          letter-spacing: 0.12em;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #86efac;
          box-shadow: 0 0 22px rgba(134, 239, 172, 0.74);
        }

        .command-panel {
          margin-top: 26px;
          min-height: 420px;
          border: 1px solid rgba(226, 232, 240, 0.18);
          border-radius: 28px;
          padding: clamp(24px, 5vw, 42px);
          display: grid;
          align-content: center;
          gap: 24px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05)),
            radial-gradient(circle at 50% 25%, rgba(95, 142, 160, 0.38), transparent 17rem);
        }

        .assistant-core {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto;
          display: grid;
          place-items: center;
          border-radius: 46px;
          background: linear-gradient(145deg, #f8fafc, #bae6fd 52%, #5f8ea0);
          color: #173543;
          box-shadow: 0 28px 80px rgba(2, 6, 23, 0.35);
        }

        .assistant-core strong {
          font-size: 5.5rem;
          font-weight: 950;
          letter-spacing: -0.12em;
          transform: translateX(-4px);
        }

        .core-ring {
          position: absolute;
          inset: -18px;
          border: 1px solid rgba(224, 242, 254, 0.48);
          border-radius: 58px;
        }

        .core-ring::before,
        .core-ring::after {
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: #d9c5ae;
          box-shadow: 0 0 26px rgba(217, 197, 174, 0.72);
        }

        .core-ring::before {
          top: -7px;
          left: 48%;
        }

        .core-ring::after {
          right: -7px;
          bottom: 30%;
        }

        .assistant-copy {
          max-width: 430px;
          margin: 0 auto;
          text-align: center;
        }

        .assistant-copy span,
        .ava-copy span {
          display: block;
          color: #bae6fd;
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .assistant-copy h3 {
          margin: 10px 0 0;
          color: #ffffff;
          font-size: clamp(2rem, 5vw, 3.35rem);
          line-height: 0.94;
          letter-spacing: -0.08em;
        }

        .workflow-map {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 14px;
        }

        .workflow-map span {
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(186, 230, 253, 0.35), rgba(217, 197, 174, 0.76));
        }

        .insight-stack {
          display: grid;
          gap: 10px;
          margin-top: 14px;
        }

        .insight-row {
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(226, 232, 240, 0.14);
          border-radius: 18px;
          padding: 13px 14px;
          background: rgba(255, 255, 255, 0.08);
        }

        .check {
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 999px;
          background: rgba(134, 239, 172, 0.18);
          color: #bbf7d0;
          font-weight: 950;
        }

        .insight-row strong,
        .insight-row small {
          display: block;
        }

        .insight-row strong {
          color: #ffffff;
          font-size: 0.96rem;
        }

        .insight-row small {
          margin-top: 3px;
          color: #c6dce4;
          font-size: 0.8rem;
        }

        .ava-copy {
          padding: 20px 6px 4px;
        }

        .ava-copy strong {
          display: block;
          margin-top: 8px;
          color: #ffffff;
          font-size: clamp(1.55rem, 3vw, 2.4rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .ava-copy p {
          margin: 12px 0 0;
          color: #dbeafe;
          line-height: 1.65;
        }

        @media (max-width: 640px) {
          .visual-header {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .visual-header small {
            width: 100%;
            margin-left: 20px;
          }

          .command-panel {
            min-height: 360px;
          }
        }
      `}</style>
    </div>
  );
}
