export const AVASKYE_IDENTITY_LOCK = {
  face: 'warm professional smile, almond brown eyes, defined brows, natural makeup',
  hair: 'straight black shoulder-length hair with a soft side part',
  wardrobe: 'navy business blazer and white blouse may vary only for cinematic videos and ads',
};

export default function AvaSkyeVisual({ compact = false }) {
  if (compact) {
    return (
      <span className="ava-mini" aria-label="Ava Skye static portrait">
        <span className="mini-hair" />
        <span className="mini-face" />
        <style jsx>{`
          .ava-mini {
            position: relative;
            width: 100%;
            height: 100%;
            display: block;
            overflow: hidden;
            border-radius: 999px;
            background: radial-gradient(circle at 50% 18%, #31404a, #101820 76%);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5), 0 18px 44px rgba(15, 23, 42, 0.32);
          }

          .mini-hair {
            position: absolute;
            left: 18%;
            top: 12%;
            width: 64%;
            height: 72%;
            border-radius: 46% 46% 38% 38%;
            background: linear-gradient(145deg, #111827, #020617);
          }

          .mini-face {
            position: absolute;
            left: 32%;
            top: 25%;
            width: 36%;
            height: 42%;
            border-radius: 48% 48% 46% 46%;
            background: linear-gradient(145deg, #f4c3a0, #b56f53);
            box-shadow: 0 24px 0 14px #0f172a;
          }
        `}</style>
      </span>
    );
  }

  return (
    <div
      className="ava-card"
      aria-label={`Ava Skye static professional portrait for DigiMark101; ${AVASKYE_IDENTITY_LOCK.hair}; face remains consistent`}
    >
      <div className="portrait-frame">
        <svg viewBox="0 0 1024 1024" role="img" focusable="false" aria-label="Ava Skye static portrait in navy blazer and white blouse">
          <defs>
            <radialGradient id="studioBg" cx="50%" cy="30%" r="78%">
              <stop offset="0%" stopColor="#35434b" />
              <stop offset="52%" stopColor="#172229" />
              <stop offset="100%" stopColor="#071014" />
            </radialGradient>
            <radialGradient id="skin" cx="48%" cy="24%" r="72%">
              <stop offset="0%" stopColor="#ffe0c7" />
              <stop offset="52%" stopColor="#d89470" />
              <stop offset="100%" stopColor="#9f5e49" />
            </radialGradient>
            <linearGradient id="hair" x1="24%" y1="0%" x2="78%" y2="100%">
              <stop offset="0%" stopColor="#17202a" />
              <stop offset="42%" stopColor="#070b10" />
              <stop offset="100%" stopColor="#020304" />
            </linearGradient>
            <linearGradient id="blazer" x1="10%" y1="0%" x2="92%" y2="100%">
              <stop offset="0%" stopColor="#142845" />
              <stop offset="52%" stopColor="#09152a" />
              <stop offset="100%" stopColor="#020817" />
            </linearGradient>
            <filter id="softShadow" x="-16%" y="-16%" width="132%" height="132%">
              <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#020617" floodOpacity="0.48" />
            </filter>
          </defs>

          <rect width="1024" height="1024" rx="44" fill="url(#studioBg)" />
          <path d="M0 770 C170 690 820 690 1024 790 V1024 H0 Z" fill="#050b11" opacity="0.54" />

          <g filter="url(#softShadow)">
            <path d="M286 606 C184 696 132 822 100 1024 H924 C888 806 824 686 724 606 C640 658 382 658 286 606 Z" fill="url(#blazer)" />
            <path d="M410 635 L512 748 L615 635 L690 1024 H335 Z" fill="#fff8ed" />
            <path d="M420 650 L512 748 L604 650" stroke="#eee2d2" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M286 633 C392 714 454 856 482 1024 H96 C126 826 186 700 286 633 Z" fill="#081224" opacity="0.82" />
            <path d="M724 633 C640 730 590 870 558 1024 H928 C894 824 834 700 724 633 Z" fill="#071023" opacity="0.84" />

            <path d="M405 575 C402 625 388 666 356 704 C414 760 610 760 668 704 C634 666 620 625 618 575 Z" fill="url(#skin)" />

            <path d="M304 438 C280 210 390 70 520 72 C674 76 772 220 742 458 C724 646 626 746 512 746 C398 746 322 646 304 438 Z" fill="url(#hair)" />
            <path d="M318 520 C268 636 276 748 350 838 C425 929 600 926 690 826 C760 748 770 636 724 520 C708 694 628 788 512 792 C398 788 334 694 318 520 Z" fill="url(#hair)" />
            <path d="M362 379 C354 226 424 140 524 138 C638 138 708 232 696 388 C684 552 616 642 512 642 C408 642 372 552 362 379 Z" fill="url(#skin)" />
            <path d="M360 368 C404 236 482 178 650 192 C608 128 538 110 468 140 C400 170 364 252 342 376 Z" fill="url(#hair)" />
            <path d="M694 390 C652 250 574 176 472 140 C652 122 740 252 730 458 C708 442 700 420 694 390 Z" fill="url(#hair)" />
            <path d="M486 132 C534 148 586 174 628 210" stroke="#253241" strokeWidth="12" strokeLinecap="round" opacity="0.36" />

            <path d="M414 353 C448 332 486 334 514 356" stroke="#1a0f0c" strokeWidth="11" strokeLinecap="round" fill="none" />
            <path d="M560 356 C592 332 636 334 670 360" stroke="#1a0f0c" strokeWidth="11" strokeLinecap="round" fill="none" />
            <ellipse cx="470" cy="400" rx="31" ry="18" fill="#fff8ee" />
            <ellipse cx="622" cy="402" rx="31" ry="18" fill="#fff8ee" />
            <circle cx="470" cy="400" r="13" fill="#6b432c" />
            <circle cx="622" cy="402" r="13" fill="#6b432c" />
            <circle cx="470" cy="400" r="6" fill="#111827" />
            <circle cx="622" cy="402" r="6" fill="#111827" />
            <circle cx="476" cy="394" r="4" fill="#ffffff" />
            <circle cx="628" cy="396" r="4" fill="#ffffff" />
            <path d="M540 422 C526 462 528 492 560 500" stroke="#9f614a" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.58" />
            <path d="M454 548 C490 606 606 608 650 548" fill="#8c2f32" />
            <path d="M480 559 C516 580 586 580 624 559" stroke="#fff8ee" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.94" />
            <circle cx="400" cy="468" r="28" fill="#fb9c9c" opacity="0.16" />
            <circle cx="676" cy="470" r="28" fill="#fb9c9c" opacity="0.14" />
            <path d="M348 430 C330 426 316 438 318 458 C320 482 338 498 356 500" fill="url(#skin)" opacity="0.88" />
            <path d="M706 432 C724 428 738 440 734 462 C732 484 714 500 696 502" fill="url(#skin)" opacity="0.88" />
            <circle cx="346" cy="476" r="9" fill="#d4af37" />
            <circle cx="708" cy="476" r="9" fill="#d4af37" />
            <path d="M500 676 C522 690 552 690 574 676" stroke="#d4af37" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8" />
          </g>
        </svg>
      </div>

      <div className="ava-copy">
        <span>Meet Ava Skye</span>
        <strong>Static professional portrait for DigiMark101</strong>
        <p>Ava Skye is now locked to this portrait direction: straight black shoulder-length hair, warm smile, navy blazer, white blouse, and a premium dark studio background.</p>
      </div>

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.28);
          border-radius: 34px;
          padding: 14px;
          background: linear-gradient(145deg, rgba(35, 67, 83, 0.96), rgba(15, 23, 42, 0.86));
          box-shadow: 0 34px 120px rgba(2, 6, 23, 0.52), 0 0 80px rgba(95, 142, 160, 0.18);
          backdrop-filter: blur(22px);
          color: #ffffff;
        }

        .portrait-frame {
          overflow: hidden;
          border-radius: 26px;
          background: #071014;
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
          color: #bae6fd;
          font-size: 0.78rem;
          font-weight: 950;
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
          color: #dbeafe;
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
