export default function AvaSkyeVisual({ compact = false }) {
  return (
    <div className={`ava-card ${compact ? 'compact' : ''}`} aria-label="Ava Skye, DigiMark101 AI Chief of Staff">
      <div className="portrait-wrap">
        <svg viewBox="0 0 420 520" role="img" focusable="false">
          <defs>
            <linearGradient id="avaStage" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#123c4f" />
              <stop offset="55%" stopColor="#102031" />
              <stop offset="100%" stopColor="#050816" />
            </linearGradient>
            <linearGradient id="avaSuit" x1="15%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="48%" stopColor="#080b14" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="avaHair" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#15151b" />
              <stop offset="70%" stopColor="#050506" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
            <radialGradient id="avaSkin" cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#ffe7cf" />
              <stop offset="56%" stopColor="#e7b08a" />
              <stop offset="100%" stopColor="#c98162" />
            </radialGradient>
            <radialGradient id="greenEye" cx="50%" cy="48%" r="65%">
              <stop offset="0%" stopColor="#dcfce7" />
              <stop offset="42%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#064e3b" />
            </radialGradient>
            <filter id="avaShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="22" stdDeviation="20" floodColor="#020617" floodOpacity="0.48" />
            </filter>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <rect width="420" height="520" rx="38" fill="url(#avaStage)" />
          <path d="M0 83 C91 34 160 20 247 45 C315 64 366 44 420 16 V520 H0 Z" fill="#0f172a" opacity="0.34" />
          <circle cx="72" cy="88" r="88" fill="#a855f7" opacity="0.16" filter="url(#softGlow)" />
          <circle cx="352" cy="398" r="130" fill="#22c55e" opacity="0.08" filter="url(#softGlow)" />
          <path d="M46 420 C138 368 259 373 376 422" stroke="#8b5cf6" strokeWidth="2" opacity="0.25" fill="none" />
          <path d="M70 448 C159 406 265 407 350 450" stroke="#22c55e" strokeWidth="2" opacity="0.18" fill="none" />

          <g filter="url(#avaShadow)">
            <path d="M73 504 C89 388 127 326 210 326 C293 326 331 388 347 504 Z" fill="url(#avaSuit)" />
            <path d="M145 344 L209 448 L276 344 C256 330 236 324 210 324 C184 324 164 330 145 344 Z" fill="#f8fafc" />
            <path d="M176 350 L210 424 L245 350 L224 328 L210 356 L196 328 Z" fill="#111827" />
            <path d="M116 504 C127 411 145 362 181 333 L204 504 Z" fill="#111827" />
            <path d="M304 504 C293 411 275 362 239 333 L216 504 Z" fill="#050816" />
            <path d="M184 349 L209 448 L167 398 Z" fill="#7c3aed" opacity="0.5" />
            <path d="M236 349 L211 448 L253 398 Z" fill="#d946ef" opacity="0.35" />

            <path d="M102 236 C82 139 120 72 211 68 C302 72 338 140 318 238 C303 316 260 360 210 360 C160 360 117 316 102 236 Z" fill="url(#avaHair)" />
            <path d="M125 226 C109 139 143 91 211 90 C279 91 312 140 296 226 C283 292 250 334 210 334 C170 334 138 292 125 226 Z" fill="url(#avaSkin)" />
            <path d="M127 202 C139 139 176 111 247 113 C232 89 207 78 178 86 C142 96 121 132 111 195 C115 198 121 201 127 202 Z" fill="url(#avaHair)" />
            <path d="M105 233 C101 154 137 82 211 70 C145 71 92 127 91 223 C90 294 117 343 157 373 C135 334 117 283 105 233 Z" fill="url(#avaHair)" />
            <path d="M315 233 C319 154 283 82 209 70 C275 71 328 127 329 223 C330 294 303 343 263 373 C285 334 303 283 315 233 Z" fill="url(#avaHair)" />

            <ellipse cx="174" cy="229" rx="17" ry="10" fill="#f8fafc" />
            <ellipse cx="246" cy="229" rx="17" ry="10" fill="#f8fafc" />
            <circle cx="174" cy="229" r="8" fill="url(#greenEye)" />
            <circle cx="246" cy="229" r="8" fill="url(#greenEye)" />
            <circle cx="177" cy="226" r="3" fill="#ffffff" />
            <circle cx="249" cy="226" r="3" fill="#ffffff" />
            <circle cx="174" cy="229" r="3" fill="#052e16" />
            <circle cx="246" cy="229" r="3" fill="#052e16" />
            <path d="M152 212 C166 203 184 204 197 214" stroke="#111827" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M223 214 C237 204 255 203 268 212" stroke="#111827" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M208 235 C203 259 201 272 220 273" stroke="#ad7356" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.55" />
            <path d="M181 302 C199 318 224 318 241 302" stroke="#7f1d1d" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M188 300 C202 307 221 307 234 300" stroke="#fff7ed" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.72" />
            <circle cx="151" cy="263" r="13" fill="#fb7185" opacity="0.15" />
            <circle cx="269" cy="263" r="13" fill="#fb7185" opacity="0.15" />
          </g>

          <g opacity="0.9">
            <rect x="38" y="37" width="88" height="28" rx="14" fill="rgba(15,23,42,0.72)" />
            <circle cx="57" cy="51" r="5" fill="#22c55e" />
            <text x="70" y="56" fill="#e2e8f0" fontSize="12" fontWeight="700">Ava Online</text>
          </g>
        </svg>
      </div>
      {!compact && (
        <div className="ava-copy">
          <span>Meet Ava Skye</span>
          <strong>AI Chief of Staff for revenue growth</strong>
          <p>Human-facing strategy, futuristic execution: campaigns, funnels, content, and customer acquisition guided by Ava.</p>
        </div>
      )}

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(192, 132, 252, 0.34);
          border-radius: 34px;
          padding: 18px;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.86), rgba(30, 27, 75, 0.62));
          box-shadow: 0 34px 120px rgba(2, 6, 23, 0.52), 0 0 80px rgba(168, 85, 247, 0.16);
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
