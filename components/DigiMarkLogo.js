export default function DigiMarkLogo({ compact = false }) {
  return (
    <span className={`logo-lockup ${compact ? 'compact' : ''}`} aria-label="DigiMark101 Digital Marketing Agency">
      <svg className="logo-art" viewBox="0 0 760 360" role="img" focusable="false" aria-hidden="true">
        <defs>
          <linearGradient id="digiPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1828" />
            <stop offset="42%" stopColor="#4c168f" />
            <stop offset="74%" stopColor="#8b22d8" />
            <stop offset="100%" stopColor="#d34df5" />
          </linearGradient>
          <linearGradient id="digiArrow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a0a58" />
            <stop offset="50%" stopColor="#7a1fc0" />
            <stop offset="100%" stopColor="#d34df5" />
          </linearGradient>
          <linearGradient id="digiText" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#151624" />
            <stop offset="72%" stopColor="#151624" />
            <stop offset="100%" stopColor="#a324df" />
          </linearGradient>
          <filter id="logoShadow" x="-10%" y="-15%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#2a0a58" floodOpacity="0.18" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          <path d="M118 74 H258 C356 74 405 112 412 178 C389 156 348 145 289 145 H178 L160 231 H284 C328 231 359 214 374 184 C382 238 334 286 254 286 H84 Z" fill="url(#digiPurple)" />
          <path d="M186 121 H285 C327 121 356 132 372 154 C345 140 310 139 258 144 H174 Z" fill="#111322" opacity="0.72" />
          <path d="M210 169 H291 C324 169 343 178 350 195 C334 221 304 235 260 235 H166 Z" fill="#ffffff" />
          <path d="M312 291 C412 216 506 132 662 88 L642 178 L610 137 C534 188 460 252 364 304 Z" fill="url(#digiArrow)" />
          <path d="M333 265 C428 190 502 122 614 90 C510 146 446 218 376 299 Z" fill="#ffffff" opacity="0.92" />
          <path d="M520 232 L558 160 L610 137 L564 286 Z" fill="url(#digiArrow)" opacity="0.92" />
          <path d="M586 101 L704 56 L684 146 Z" fill="url(#digiArrow)" />
          <rect x="520" y="76" width="28" height="28" rx="3" fill="#8f22d0" />
          <rect x="566" y="58" width="18" height="18" rx="2" fill="#bd3ce9" />
          <rect x="476" y="100" width="24" height="24" rx="3" fill="#6d1db4" />
          <rect x="448" y="126" width="15" height="15" rx="2" fill="#7e20c0" />
          <rect x="500" y="130" width="10" height="10" rx="2" fill="#9e2cdd" />
        </g>

        {!compact && (
          <g>
            <text x="84" y="335" fill="url(#digiText)" fontFamily="Inter, Arial, sans-serif" fontSize="74" fontStyle="italic" fontWeight="900" letterSpacing="-4">DigiMark</text>
            <text x="498" y="335" fill="#a324df" fontFamily="Inter, Arial, sans-serif" fontSize="74" fontStyle="italic" fontWeight="900" letterSpacing="-4">101</text>
          </g>
        )}
      </svg>
      {!compact && <span className="tagline">Digital Marketing Agency</span>}

      <style jsx>{`
        .logo-lockup {
          display: inline-grid;
          justify-items: start;
          gap: 4px;
          line-height: 1;
          color: inherit;
        }

        .logo-art {
          width: ${compact ? '178px' : '280px'};
          max-width: 100%;
          height: auto;
          display: block;
        }

        .tagline {
          margin-left: 34px;
          color: #9ca3af;
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .logo-art {
            width: ${compact ? '148px' : '220px'};
          }

          .tagline {
            display: none;
          }
        }
      `}</style>
    </span>
  );
}
