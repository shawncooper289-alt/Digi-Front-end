export default function AvaSkyeVisual({ compact = false }) {
  return (
    <div className={`ava-card ${compact ? 'compact' : ''}`} aria-label="Ava Skye introducing DigiMark101 as a humanlike AI Chief of Staff">
      <div className="portrait-wrap">
        <svg viewBox="0 0 1024 1536" role="img" focusable="false">
          <defs>
            <linearGradient id="base44Blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5f8ea0" />
              <stop offset="48%" stopColor="#416f80" />
              <stop offset="100%" stopColor="#234353" />
            </linearGradient>
            <linearGradient id="avaHair" x1="12%" y1="0%" x2="88%" y2="100%">
              <stop offset="0%" stopColor="#17201d" />
              <stop offset="45%" stopColor="#090b09" />
              <stop offset="100%" stopColor="#030403" />
            </linearGradient>
            <radialGradient id="avaSkin" cx="48%" cy="30%" r="74%">
              <stop offset="0%" stopColor="#ffe8d6" />
              <stop offset="54%" stopColor="#d99d79" />
              <stop offset="100%" stopColor="#9a573f" />
            </radialGradient>
            <linearGradient id="avaSweater" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9c1a6" />
              <stop offset="52%" stopColor="#b99676" />
              <stop offset="100%" stopColor="#8e6b50" />
            </linearGradient>
            <radialGradient id="avaIris" cx="50%" cy="48%" r="65%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="42%" stopColor="#8b5e34" />
              <stop offset="100%" stopColor="#2f1f16" />
            </radialGradient>
            <filter id="photoShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="20" stdDeviation="22" floodColor="#15313d" floodOpacity="0.34" />
            </filter>
            <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="2" floodColor="#16303c" floodOpacity="0.55" />
            </filter>
          </defs>

          <rect width="1024" height="1536" rx="0" fill="url(#base44Blue)" />

          {!compact && (
            <g className="intro-copy" filter="url(#textShadow)">
              <text x="76" y="355">Hi, I'm</text>
              <text x="76" y="455">Ava Skye</text>
              <text x="76" y="555">introducing</text>
              <text x="76" y="655">DigiMark101</text>
            </g>
          )}

          <g filter="url(#photoShadow)">
            <path d="M522 704 C448 776 388 910 345 1536 H1010 C970 958 880 784 770 706 C716 744 585 744 522 704 Z" fill="url(#avaSweater)" />
            <path d="M349 1072 C298 1144 258 1308 244 1536 H364 C371 1394 411 1230 454 1120 Z" fill="url(#avaSweater)" />
            <path d="M753 1136 C838 1228 892 1354 940 1536 H1024 V1324 C988 1252 930 1172 854 1116 Z" fill="url(#avaSweater)" />

            <path d="M557 640 C554 686 548 723 522 755 C574 808 712 812 770 752 C746 720 738 682 736 640 Z" fill="url(#avaSkin)" />
            <path d="M421 490 C386 309 454 178 622 168 C788 175 861 310 823 497 C804 626 732 710 626 710 C520 710 444 624 421 490 Z" fill="url(#avaHair)" />
            <path d="M472 462 C448 324 502 230 627 225 C752 230 806 325 779 463 C756 588 700 655 626 655 C551 655 493 588 472 462 Z" fill="url(#avaSkin)" />
            <path d="M471 404 C501 289 566 242 695 250 C673 206 628 184 575 198 C508 215 472 284 452 395 C457 399 464 402 471 404 Z" fill="url(#avaHair)" />
            <path d="M780 410 C762 300 707 245 625 223 C756 217 819 309 807 435 C796 430 787 421 780 410 Z" fill="url(#avaHair)" />
            <path d="M432 488 C418 320 486 185 626 170 C497 174 402 282 397 457 C393 588 441 681 516 742 C471 660 444 565 432 488 Z" fill="url(#avaHair)" />
            <path d="M819 488 C838 318 768 183 625 170 C755 174 850 282 855 457 C859 590 804 687 728 742 C779 652 808 565 819 488 Z" fill="url(#avaHair)" />

            <path d="M523 416 C550 399 587 398 610 419" stroke="#2b1a14" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M652 419 C676 399 713 399 740 416" stroke="#2b1a14" strokeWidth="10" strokeLinecap="round" fill="none" />
            <ellipse cx="568" cy="452" rx="27" ry="15" fill="#fff7ed" />
            <ellipse cx="696" cy="452" rx="27" ry="15" fill="#fff7ed" />
            <circle cx="568" cy="452" r="12" fill="url(#avaIris)" />
            <circle cx="696" cy="452" r="12" fill="url(#avaIris)" />
            <circle cx="568" cy="452" r="5" fill="#111827" />
            <circle cx="696" cy="452" r="5" fill="#111827" />
            <circle cx="573" cy="447" r="4" fill="#ffffff" />
            <circle cx="701" cy="447" r="4" fill="#ffffff" />
            <path d="M626 468 C616 508 617 532 650 535" stroke="#9f614a" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.58" />
            <path d="M568 575 C598 621 667 622 696 575" fill="#7f1d1d" />
            <path d="M585 581 C613 598 651 598 680 581" stroke="#fff7ed" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.92" />
            <circle cx="512" cy="515" r="26" fill="#fca5a5" opacity="0.18" />
            <circle cx="738" cy="515" r="26" fill="#fca5a5" opacity="0.18" />

            <path d="M292 875 C246 745 218 687 182 674 C147 661 121 676 113 706 C101 754 141 850 223 953 Z" fill="url(#avaSkin)" />
            <path d="M188 680 C163 634 142 583 127 546" stroke="url(#avaSkin)" strokeWidth="48" strokeLinecap="round" fill="none" />
            <path d="M140 704 C109 654 79 602 58 560" stroke="url(#avaSkin)" strokeWidth="44" strokeLinecap="round" fill="none" />
            <path d="M106 754 C69 717 35 676 16 640" stroke="url(#avaSkin)" strokeWidth="43" strokeLinecap="round" fill="none" />
            <path d="M113 815 C75 795 45 766 29 735" stroke="url(#avaSkin)" strokeWidth="42" strokeLinecap="round" fill="none" />
            <path d="M122 884 C85 879 55 862 37 837" stroke="url(#avaSkin)" strokeWidth="40" strokeLinecap="round" fill="none" />
            <path d="M289 877 C332 926 374 992 402 1070 C372 1095 335 1110 300 1110 C252 1030 220 980 192 950 Z" fill="url(#avaSweater)" />

            <path d="M645 1266 C723 1216 796 1222 861 1276 C832 1338 748 1352 643 1316 Z" fill="url(#avaSkin)" />
            <path d="M640 1320 C714 1302 784 1312 844 1360 C810 1405 725 1416 628 1370 Z" fill="url(#avaSkin)" />
          </g>
        </svg>
      </div>
      {!compact && (
        <div className="ava-copy">
          <span>Meet Ava Skye</span>
          <strong>Humanlike AI Chief of Staff for DigiMark101</strong>
          <p>Ava now matches the Base44-style introduction: realistic, welcoming, and ready to guide campaigns, funnels, content, and customer acquisition.</p>
        </div>
      )}

      <style jsx>{`
        .ava-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.22);
          border-radius: 34px;
          padding: 14px;
          background: linear-gradient(145deg, rgba(35, 67, 83, 0.92), rgba(15, 23, 42, 0.72));
          box-shadow: 0 34px 120px rgba(2, 6, 23, 0.52), 0 0 80px rgba(95, 142, 160, 0.18);
          backdrop-filter: blur(22px);
        }

        .portrait-wrap {
          overflow: hidden;
          border-radius: 26px;
          background: #416f80;
        }

        svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .intro-copy text {
          fill: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 86px;
          font-weight: 800;
          letter-spacing: -0.055em;
        }

        .ava-copy {
          padding: 20px 6px 4px;
        }

        .ava-copy span {
          display: block;
          color: #bae6fd;
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
          color: #dbeafe;
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
