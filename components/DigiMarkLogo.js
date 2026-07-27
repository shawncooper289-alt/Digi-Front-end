export default function DigiMarkLogo({ compact = false }) {
  return (
    <span className={`logo-lockup ${compact ? 'compact' : ''}`} aria-label="DigiMark101 Digital Marketing Agency">
      <span className="mark" aria-hidden="true">D</span>
      <span className="wordmark">
        <strong>DigiMark<span>101</span></strong>
        {!compact && <small>Ava Skye Marketing OS</small>}
      </span>

      <style jsx>{`
        .logo-lockup {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #122f3c;
          line-height: 1;
        }

        .mark {
          width: 48px;
          height: 48px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          background: linear-gradient(145deg, #234c5c, #5f8ea0);
          color: #ffffff;
          font-size: 1.55rem;
          font-weight: 950;
          letter-spacing: -0.08em;
          box-shadow: 0 18px 38px rgba(35, 76, 92, 0.24);
        }

        .wordmark {
          display: grid;
          gap: 6px;
        }

        .wordmark strong {
          color: #122f3c;
          font-size: clamp(1.35rem, 2.2vw, 1.9rem);
          font-weight: 950;
          letter-spacing: -0.07em;
          white-space: nowrap;
        }

        .wordmark strong span {
          color: #3f7282;
        }

        .wordmark small {
          color: #63808a;
          font-size: 0.62rem;
          font-weight: 950;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .compact {
          gap: 10px;
        }

        .compact .mark {
          width: 42px;
          height: 42px;
          border-radius: 15px;
          font-size: 1.35rem;
        }

        .compact .wordmark strong {
          font-size: 1.24rem;
        }

        @media (max-width: 640px) {
          .wordmark small {
            display: none;
          }
        }
      `}</style>
    </span>
  );
}
