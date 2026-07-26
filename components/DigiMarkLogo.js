export default function DigiMarkLogo({ compact = false }) {
  return (
    <span className={`logo-lockup ${compact ? 'compact' : ''}`} aria-label="DigiMark101 Digital Marketing Agency">
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 220 128" role="img" focusable="false">
          <defs>
            <linearGradient id="dmPurple" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2b1248" />
              <stop offset="45%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="dmDark" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#090a18" />
              <stop offset="100%" stopColor="#2c2544" />
            </linearGradient>
          </defs>
          <path d="M15 82 L26 28 H82 C118 28 137 43 136 65 C135 88 113 101 78 101 H5 L12 72 H72 C91 72 101 67 103 58 C105 48 96 43 77 43 H49 L42 82 Z" fill="url(#dmDark)" />
          <path d="M29 28 H82 C115 28 132 40 136 62 C123 53 107 51 82 53 H47 C33 53 27 44 29 28 Z" fill="url(#dmPurple)" />
          <path d="M80 105 C117 91 145 61 181 25 L197 17 L188 64 L174 50 C147 75 121 99 80 105 Z" fill="url(#dmPurple)" />
          <path d="M105 103 C135 83 158 56 188 30 L202 22 L185 101 H159 L168 61 C148 81 130 97 105 103 Z" fill="url(#dmPurple)" opacity="0.92" />
          <path d="M92 87 C125 58 153 36 198 19" fill="none" stroke="#f5d0fe" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
          <path d="M180 18 L211 5 L202 45 Z" fill="#a21caf" />
          <rect x="151" y="24" width="13" height="13" rx="1" fill="#7e22ce" />
          <rect x="169" y="12" width="8" height="8" rx="1" fill="#c026d3" />
          <rect x="185" y="0" width="11" height="11" rx="1" fill="#d946ef" />
          <rect x="138" y="42" width="9" height="9" rx="1" fill="#581c87" />
          <rect x="164" y="35" width="6" height="6" rx="1" fill="#d946ef" />
        </svg>
      </span>
      <span className="wordmark">
        <strong>DigiMark<span>101</span></strong>
        {!compact && <small>Digital Marketing Agency</small>}
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
          width: 86px;
          height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .mark svg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 14px 28px rgba(126, 34, 206, 0.25));
        }

        .wordmark {
          display: grid;
          gap: 5px;
        }

        .wordmark strong {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          font-style: italic;
          font-weight: 950;
          letter-spacing: -0.065em;
          color: #f8fafc;
          white-space: nowrap;
        }

        .wordmark strong span {
          color: #a855f7;
        }

        .wordmark small {
          color: #a1a1aa;
          font-size: 0.58rem;
          font-weight: 900;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .compact {
          gap: 9px;
        }

        .compact .mark {
          width: 56px;
          height: 34px;
        }

        .compact .wordmark strong {
          font-size: 1.22rem;
        }

        @media (max-width: 640px) {
          .mark {
            width: 62px;
          }

          .wordmark small {
            display: none;
          }
        }
      `}</style>
    </span>
  );
}
