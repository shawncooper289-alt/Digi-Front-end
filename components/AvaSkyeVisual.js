export default function AvaSkyeVisual({ compact = false }) {
  return (
    <div className={`ava-card ${compact ? 'compact' : ''}`} aria-label="Ava Skye, humanlike DigiMark101 AI Chief of Staff">
      <div className="portrait-wrap">
        <svg viewBox="0 0 420 520" role="img" focusable="false">
          <defs>
            <linearGradient id="avaBackdrop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#132235" />
              <stop offset="58%" stopColor="#101827" />
              <stop offset="100%" stopColor="#050816" />
            </linearGradient>
            <linearGradient id="avaBlazer" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#263241" />
              <stop offset="54%" stopColor="#111827" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="avaHair" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#241711" />
              <stop offset="55%" stopColor="#120b08" />
              <stop offset="100%" stopColor="#050302" />
            </linearGradient>
            <radialGradient id="avaSkin" cx="46%" cy="30%" r="72%">
              <stop offset="0%" stopColor="#ffe9d5" />
              <stop offset="48%" stopColor="#e8b18d" />
              <stop offset="100%" stopColor="#b86f52" />
            </radialGradient>
            <radialGradient id="avaIris" cx="50%" cy="48%" r="65%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="48%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>
            <filter id="portraitShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="22" stdDeviation="20" floodColor="#020617" floodOpacity="0.48" />
            </filter>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <rect width="420" height="520" rx="38" fill="url(#avaBackdrop)" />
          <circle cx="82" cy="88" r="86" fill="#38bdf8" opacity="0.12" filter="url(#softGlow)" />
          <circle cx="338" cy="410" r="126" fill="#22c55e" opacity="0.08" filter="url(#softGlow)" />
          <path d="M43 426 C142 382 270 382 376 427" stroke="#38bdf8" strokeWidth="1.5" opacity="0.18" fill="none" />

          <g filter="url(#portraitShadow)">
            <path d="M72 504 C90 405 128 342 210 342 C292 342 330 405 348 504 Z" fill="url(#avaBlazer)" />
            <path d="M146 362 C171 346 189 340 210 340 C231 340 250 346 276 362 L248 504 H172 Z" fill="#f8fafc" />
            <path d="M178 365 L210 446 L242 365 L224 340 L210 360 L196 340 Z" fill="#1f2937" />
            <path d="M116 504 C126 420 148 374 184 346 L205 504 Z" fill="#172033" />
            <path d="M304 504 C294 420 272 374 236 346 L215 504 Z" fill="#0b1120" />

            <path d="M100 248 C84 150 123 78 211 72 C299 78 336 151 320 248 C308 335 260 374 210 374 C160 374 112 335 100 248 Z" fill="url(#avaHair)" />
            <path d="M124 238 C111 158 142 105 211 103 C280 105 311 158 296 238 C285 304 250 348 210 348 C170 348 135 304 124 238 Z" fill="url(#avaSkin)" />
            <path d="M122 205 C137 137 177 103 246 112 C231 88 206 79 176 88 C141 99 118 137 111 197 C114 202 119 205 122 205 Z" fill="url(#avaHair)" />
            <path d="M296 205 C285 145 256 115 207 102 C276 99 313 147 308 218 C304 217 300 211 296 205 Z" fill="url(#avaHair)" />
            <path d="M105 248 C101 163 137 83 211 74 C146 76 92 134 91 228 C90 301 118 352 160 382 C135 340 116 290 105 248 Z" fill="url(#avaHair)" />
            <path d="M315 248 C319 163 283 83 209 74 C274 76 328 134 329 228 C330 301 302 352 260 382 C285 340 304 290 315 248 Z" fill="url(#avaHair)" />

            <path d="M153 222 C165 214 184 214 197 224" stroke="#2b1a14" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M223 224 C236 214 255 214 267 222" stroke="#2b1a14" strokeWidth="5" strokeLinecap="round" fill="none" />
            <ellipse cx="176" cy="238" rx="15" ry="8" fill="#f8fafc" />
            <ellipse cx="244" cy="238" rx="15" ry="8" fill="#f8fafc" />
            <circle cx="176" cy="238" r="7" fill="url(#avaIris)" />
            <circle cx="244" cy="238" r="7" fill="url(#avaIris)" />
            <circle cx="176" cy="238" r="3" fill="#0f172a" />
            <circle cx="244" cy="238" r="3" fill="#0f172a" />
            <circle cx="179" cy="235" r="2.5" fill="#ffffff" />
            <circle cx="247" cy="235" r="2.5" fill="#ffffff" />
            <path d="M207 244 C202 265 201 282 220 282" stroke="#a0644d" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.62" />
            <path d="M183 306 C200 320 222 320 238 306" stroke="#7f1d1d" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M190 304 C204 310 219 310 232 304" stroke="#fff7ed" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.65" />
            <circle cx="151" cy="270" r="15" fill="#f9a8d4" opacity="0.13" />
            <circle cx="269" cy="270" r="15" fill="#f9a8d4" opacity="0.13" />
          </g>

          <g opacity="0.92">
            <rect x="36" y="36" width="112" height="28" rx="14" fill="rgba(15,23,42,0.72)" />
            <circle cx="55" cy="50" r="5" fill="#22c55e" />
            <text x="68" y="55" fill="#e2e8f0" fontSize="12" fontWeight="700">Ava Online</text>
          </g>
        </svg>
      </div>
      {!compact && (
        <div className="ava-copy">
          <span>Meet Ava Skye</span>
          <strong>Humanlike AI Chief of Staff for revenue growth</strong>
          <p>A polished, human-facing advisor for campaigns, funnels, content, and customer acquisition guided by Ava.</p>
        </div>
      )}

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(125, 211, 252, 0.28);
          border-radius: 34px;
          padding: 18px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.86), rgba(15, 23, 42, 0.62));
          box-shadow: 0 34px 120px rgba(2, 6, 23, 0.52), 0 0 80px rgba(56, 189, 248, 0.12);
          backdrop-filter: blur(22px);
        }

        .portrait-wrap {
          overflow: hidden;
          border-radius: 26px;
          background: #0f172a;
        }

        svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .ava-copy {
          padding: 20px 6px 4px;
        }

        .ava-copy span {
          display: block;
          color: #86efac;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
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
          color: #cbd5e1;
          line-height: 1.65;
        }

        .compact {
          width: 46px;
          height: 46px;
          padding: 0;
          border-radius: 999px;
        }

        .compact .portrait-wrap {
          border-radius: 999px;
          height: 100%;
        }

        .compact svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
