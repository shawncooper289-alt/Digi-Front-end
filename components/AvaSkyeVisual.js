export const AVASKYE_IDENTITY_LOCK = {
  face: 'warm professional expression, almond brown eyes, defined brows, natural makeup',
  hair: 'dark brunette, side-parted, shoulder-length waves',
  wardrobe: 'business suit may vary for cinematic videos and ads',
};

export default function AvaSkyeVisual({ compact = false }) {
  if (compact) {
    return (
      <span className="ava-mini" aria-label="Ava Skye AI assistant portrait">
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
            background: linear-gradient(145deg, #f7c873, #111827 72%);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.52), 0 18px 44px rgba(0, 0, 0, 0.34);
          }

          .mini-hair {
            position: absolute;
            left: 20%;
            top: 13%;
            width: 60%;
            height: 62%;
            border-radius: 48% 52% 44% 44%;
            background: linear-gradient(145deg, #2a1712, #080504);
          }

          .mini-face {
            position: absolute;
            left: 31%;
            top: 27%;
            width: 38%;
            height: 44%;
            border-radius: 48% 48% 46% 46%;
            background: linear-gradient(145deg, #f6c9a7, #bd7558);
            box-shadow: 0 22px 0 12px #111827;
          }
        `}</style>
      </span>
    );
  }

  return (
    <div
      className="ava-card"
      aria-label={`Ava Skye professional AI marketing strategist portrait for DigiMark101; ${AVASKYE_IDENTITY_LOCK.hair}; face remains consistent`}
    >
      <div className="portrait-frame">
        <svg viewBox="0 0 980 1320" role="img" focusable="false" aria-label="Ava Skye in a dark blazer in a modern office">
          <defs>
            <linearGradient id="officeWindow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e7f5fb" />
              <stop offset="48%" stopColor="#a8c8d6" />
              <stop offset="100%" stopColor="#395b68" />
            </linearGradient>
            <linearGradient id="screenBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2bd4ff" />
              <stop offset="100%" stopColor="#0f5f8a" />
            </linearGradient>
            <radialGradient id="skinTone" cx="48%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#ffe3ca" />
              <stop offset="56%" stopColor="#d89570" />
              <stop offset="100%" stopColor="#8f4c3f" />
            </radialGradient>
            <linearGradient id="hairTone" x1="16%" y1="0%" x2="88%" y2="100%">
              <stop offset="0%" stopColor="#4a261c" />
              <stop offset="48%" stopColor="#1b0f0c" />
              <stop offset="100%" stopColor="#070504" />
            </linearGradient>
            <linearGradient id="blazer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="52%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#050816" />
            </linearGradient>
            <filter id="portraitShadow" x="-18%" y="-18%" width="136%" height="136%">
              <feDropShadow dx="0" dy="28" stdDeviation="24" floodColor="#07111d" floodOpacity="0.42" />
            </filter>
          </defs>

          <rect width="980" height="1320" rx="48" fill="#050816" />
          <rect width="980" height="1320" rx="48" fill="url(#officeWindow)" opacity="0.58" />
          <path d="M0 0 H980 V1320 H0 Z" fill="#000000" opacity="0.18" />
          <circle cx="690" cy="212" r="310" fill="#f7c873" opacity="0.16" />
          <path d="M116 0 V760 M498 0 V698 M830 0 V1320" stroke="#f8fafc" strokeWidth="16" opacity="0.42" />
          <path d="M0 342 H980 M0 632 H980" stroke="#f8fafc" strokeWidth="12" opacity="0.24" />

          <g opacity="0.92">
            <rect x="42" y="398" width="246" height="184" rx="22" fill="#123243" />
            <rect x="64" y="422" width="202" height="132" rx="12" fill="url(#screenBlue)" opacity="0.9" />
            <path d="M88 456 H214 M88 492 H238 M88 528 H180" stroke="#dff8ff" strokeWidth="14" strokeLinecap="round" opacity="0.7" />
            <rect x="118" y="582" width="86" height="22" rx="8" fill="#102a36" />
          </g>

          <path d="M0 1015 C192 930 772 928 980 1018 V1320 H0 Z" fill="#101f29" opacity="0.58" />

          <g filter="url(#portraitShadow)">
            <path d="M320 742 C214 820 148 1000 110 1320 H884 C840 992 770 818 666 742 C602 786 390 786 320 742 Z" fill="url(#blazer)" />
            <path d="M438 712 C436 762 420 812 386 848 C442 906 566 908 624 848 C590 810 576 764 574 712 Z" fill="url(#skinTone)" />
            <path d="M338 548 C286 312 362 142 504 128 C674 112 784 272 764 520 C752 676 652 782 520 784 C410 782 356 686 338 548 Z" fill="url(#hairTone)" />
            <path d="M336 600 C252 692 246 842 322 936 C420 1054 630 1050 736 914 C810 818 800 684 728 604 C708 754 626 858 520 862 C418 858 354 760 336 600 Z" fill="url(#hairTone)" />
            <path d="M374 442 C362 286 424 192 535 192 C650 194 724 294 706 452 C694 626 624 724 520 724 C416 724 386 626 374 442 Z" fill="url(#skinTone)" />
            <path d="M368 430 C408 300 482 236 620 242 C590 184 532 162 474 186 C404 216 366 294 342 414 Z" fill="url(#hairTone)" />
            <path d="M704 444 C672 308 598 236 504 200 C658 190 744 306 738 484 C722 478 712 464 704 444 Z" fill="url(#hairTone)" />

            <path d="M426 404 C460 382 496 382 524 405" stroke="#1f120d" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M570 406 C602 382 642 384 674 408" stroke="#1f120d" strokeWidth="12" strokeLinecap="round" fill="none" />
            <ellipse cx="480" cy="450" rx="30" ry="17" fill="#fff7ed" />
            <ellipse cx="626" cy="452" rx="30" ry="17" fill="#fff7ed" />
            <circle cx="480" cy="450" r="13" fill="#5b3b25" />
            <circle cx="626" cy="452" r="13" fill="#5b3b25" />
            <circle cx="480" cy="450" r="6" fill="#111827" />
            <circle cx="626" cy="452" r="6" fill="#111827" />
            <circle cx="486" cy="444" r="4" fill="#ffffff" />
            <circle cx="632" cy="446" r="4" fill="#ffffff" />
            <path d="M548 472 C534 512 536 540 568 548" stroke="#9f614a" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.58" />
            <path d="M478 604 C512 646 590 648 632 604" fill="#8b1e27" />
            <path d="M500 611 C530 626 578 626 608 611" stroke="#fff7ed" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.92" />
            <circle cx="416" cy="520" r="28" fill="#fb9c9c" opacity="0.18" />
            <circle cx="682" cy="522" r="28" fill="#fb9c9c" opacity="0.16" />

            <path d="M318 846 L454 804 L516 1320 H212 Z" fill="url(#blazer)" />
            <path d="M666 846 L554 804 L496 1320 H860 Z" fill="url(#blazer)" />
            <path d="M418 812 L520 920 L616 812 L662 1320 H374 Z" fill="#f8fafc" />
            <path d="M454 824 L520 912 L586 824" stroke="#e5e7eb" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M326 858 C430 914 488 1064 510 1320 H266 C262 1112 282 968 326 858 Z" fill="#0b1220" opacity="0.74" />
            <path d="M664 858 C594 936 550 1100 532 1320 H838 C820 1090 764 934 664 858 Z" fill="#090f1d" opacity="0.78" />
          </g>
        </svg>
      </div>

      <div className="ava-copy">
        <span>Meet Ava Skye</span>
        <strong>Human-feeling AI strategist for DigiMark101</strong>
        <p>Ava Skye gives the brand a consistent professional face: warm, confident, and ready to guide campaigns, funnels, and client acquisition.</p>
      </div>

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.28);
          border-radius: 34px;
          padding: 14px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.11), rgba(5, 8, 22, 0.88));
          box-shadow: 0 34px 120px rgba(0, 0, 0, 0.58), 0 0 90px rgba(247, 200, 115, 0.18);
          backdrop-filter: blur(22px);
          color: #ffffff;
        }

        .portrait-frame {
          overflow: hidden;
          border-radius: 26px;
          background: #050816;
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
          color: #f7c873;
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
          color: #c9d7e8;
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
