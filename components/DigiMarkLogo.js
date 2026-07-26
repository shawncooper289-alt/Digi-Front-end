export default function DigiMarkLogo({ compact = false }) {
  return (
    <span className={`logo-lockup ${compact ? 'compact' : ''}`} aria-label="DigiMark101 Digital Marketing Agency">
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 260 150" role="img" focusable="false">
          <defs>
            <linearGradient id="brandPurple" x1="7%" y1="93%" x2="94%" y2="8%">
              <stop offset="0%" stopColor="#120820" />
              <stop offset="38%" stopColor="#5b21b6" />
              <stop offset="70%" stopColor="#a21caf" />
              <stop offset="100%" stopColor="#f0abfc" />
            </linearGradient>
            <linearGradient id="brandDark" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="58%" stopColor="#111827" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
            <filter id="brandGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#a855f7" floodOpacity="0.38" />
            </filter>
          </defs>
          <g filter="url(#brandGlow)">
            <path d="M18 101 L31 34 H101 C143 34 164 51 162 76 C160 103 134 119 91 119 H7 L15 86 H82 C105 86 117 80 119 68 C121 56 110 50 87 50 H59 L51 101 Z" fill="url(#brandDark)" />
            <path d="M35 34 H101 C140 34 159 49 162 74 C145 63 124 62 95 64 H56 C40 64 32 53 35 34 Z" fill="url(#brandPurple)" />
            <path d="M92 123 C137 105 171 69 214 27 L238 15 L224 76 L208 59 C176 91 145 117 92 123 Z" fill="url(#brandPurple)" />
            <path d="M121 120 C156 96 184 64 220 33 L247 19 L224 119 H193 L205 70 C181 95 157 115 121 120 Z" fill="url(#brandPurple)" opacity="0.95" />
            <path d="M109 101 C149 66 183 39 239 17" fill="none" stroke="#f5d0fe" strokeWidth="7" strokeLinecap="round" opacity="0.92" />
            <path d="M217 17 L254 2 L243 52 Z" fill="#c026d3" />
            <rect x="178" y="30" width="15" height="15" rx="2" fill="#7e22ce" />
            <rect x="198" y="17" width="10" height="10" rx="2" fill="#c026d3" />
            <rect x="218" y="3" width="13" height="13" rx="2" fill="#d946ef" />
            <rect x="161" y="51" width="10" height="10" rx="2" fill="#4c1d95" />
            <rect x="193" y="43" width="7" height="7" rx="2" fill="#f0abfc" />
          </g>
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
          gap: 14px;
          color: #ffffff;
          line-height: 1;
        }

        .mark {
          width: 98px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .mark svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .wordmark {
          display: grid;
          gap: 6px;
        }

        .wordmark strong {
          font-size: clamp(1.45rem, 2.2vw, 2rem);
          font-style: italic;
          font-weight: 950;
          letter-spacing: -0.07em;
          color: #f8fafc;
          white-space: nowrap;
          text-shadow: 0 16px 40px rgba(168, 85, 247, 0.28);
        }

        .wordmark strong span {
          background: linear-gradient(135deg, #d946ef, #7c3aed 52%, #f0abfc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .wordmark small {
          color: #a1a1aa;
          font-size: 0.6rem;
          font-weight: 900;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .compact {
          gap: 10px;
        }

        .compact .mark {
          width: 62px;
          height: 38px;
        }

        .compact .wordmark strong {
          font-size: 1.25rem;
        }

        @media (max-width: 640px) {
          .mark {
            width: 70px;
          }

          .wordmark small {
            display: none;
          }
        }
      `}</style>
    </span>
  );
}
