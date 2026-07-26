export default function AvaSkyeVisual({ compact = false }) {
  return (
    <div className={`ava-card ${compact ? 'compact' : ''}`} aria-label="Ava Skye, DigiMark101 AI Chief of Staff">
      <div className="portrait-wrap">
        <svg viewBox="0 0 360 440" role="img" focusable="false">
          <defs>
            <linearGradient id="avaBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="suit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="hair" x1="0%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <radialGradient id="skinGlow" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffe0c2" />
              <stop offset="100%" stopColor="#d79a73" />
            </radialGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#020617" floodOpacity="0.35" />
            </filter>
          </defs>

          <rect width="360" height="440" rx="34" fill="url(#avaBg)" />
          <circle cx="64" cy="72" r="86" fill="#8b5cf6" opacity="0.18" />
          <circle cx="304" cy="382" r="112" fill="#22c55e" opacity="0.09" />

          <g filter="url(#softShadow)">
            <path d="M88 424 C96 330 121 282 180 282 C239 282 264 330 272 424 Z" fill="url(#suit)" />
            <path d="M142 294 L180 360 L218 294 C206 286 195 282 180 282 C165 282 154 286 142 294 Z" fill="#f8fafc" />
            <path d="M153 300 L180 352 L207 300 L190 286 L180 306 L170 286 Z" fill="#a855f7" opacity="0.92" />
            <path d="M111 424 C119 350 132 309 154 291 L177 375 L151 424 Z" fill="#111827" />
            <path d="M249 424 C241 350 228 309 206 291 L183 375 L209 424 Z" fill="#050816" />

            <path d="M105 205 C91 128 121 72 181 70 C242 72 270 130 256 206 C247 258 218 292 180 292 C142 292 114 258 105 205 Z" fill="url(#hair)" />
            <path d="M123 198 C111 129 136 88 181 87 C226 88 250 130 238 198 C229 247 207 274 180 274 C153 274 132 247 123 198 Z" fill="url(#skinGlow)" />
            <path d="M129 164 C145 119 178 105 224 115 C214 94 194 83 168 87 C138 92 121 120 113 158 C116 160 122 162 129 164 Z" fill="url(#hair)" />
            <path d="M110 188 C110 126 139 80 181 73 C129 76 94 121 96 191 C97 244 117 281 145 301 C130 265 119 225 110 188 Z" fill="url(#hair)" />
            <path d="M250 188 C250 126 221 80 179 73 C231 76 266 121 264 191 C263 244 243 281 215 301 C230 265 241 225 250 188 Z" fill="url(#hair)" />

            <ellipse cx="151" cy="187" rx="11" ry="7" fill="#064e3b" />
            <ellipse cx="209" cy="187" rx="11" ry="7" fill="#064e3b" />
            <circle cx="153" cy="185" r="3" fill="#bbf7d0" />
            <circle cx="211" cy="185" r="3" fill="#bbf7d0" />
            <path d="M138 174 C147 168 158 168 168 174" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M192 174 C202 168 214 168 222 174" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M179 190 C175 207 174 215 188 216" stroke="#b77958" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55" />
            <path d="M158 238 C174 252 195 251 211 238" stroke="#8b2635" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M163 237 C174 243 193 243 205 237" stroke="#fff1f2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
            <circle cx="131" cy="211" r="9" fill="#f9a8d4" opacity="0.2" />
            <circle cx="229" cy="211" r="9" fill="#f9a8d4" opacity="0.2" />
          </g>
        </svg>
      </div>
      {!compact && (
        <div className="ava-copy">
          <span>Meet Ava Skye</span>
          <strong>Your AI Chief of Staff</strong>
          <p>Polished, strategic, and ready to guide campaigns, funnels, and revenue workflows.</p>
        </div>
      )}

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(192, 132, 252, 0.28);
          border-radius: 34px;
          padding: 18px;
          background: rgba(15, 23, 42, 0.76);
          box-shadow: 0 30px 100px rgba(2, 6, 23, 0.46);
          backdrop-filter: blur(18px);
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
          padding: 18px 6px 4px;
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
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .ava-copy p {
          margin: 12px 0 0;
          color: #cbd5e1;
          line-height: 1.6;
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
