export default function DigiMarkLogo({ compact = false }) {
  return (
    <span className={`logo-lockup ${compact ? 'compact' : ''}`} aria-label="DigiMark101 Digital Marketing Agency">
      <span className="mark" aria-hidden="true">D</span>
      <span className="wordmark">
        <strong>DigiMark<span>101</span></strong>
        {!compact && <small>AI Marketing OS</small>}
      </span>

      <style jsx>{`
        .logo-lockup {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          line-height: 1;
        }

        .mark {
          width: 48px;
          height: 48px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          background: linear-gradient(145deg, #f7c873, #e88d4a 58%, #b45cff);
          color: #07111d;
          font-size: 1.55rem;
          font-weight: 950;
          letter-spacing: -0.08em;
          box-shadow: 0 20px 48px rgba(232, 141, 74, 0.25);
        }

        .wordmark {
          display: grid;
          gap: 6px;
        }

        .wordmark strong {
          color: #ffffff;
          font-size: clamp(1.35rem, 2.2vw, 1.9rem);
          font-weight: 950;
          letter-spacing: -0.07em;
          white-space: nowrap;
        }

        .wordmark strong span {
          color: #f7c873;
        }

        .wordmark small {
          color: #b6c6d8;
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
