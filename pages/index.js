const pricingTiers = [
  {
    name: 'Starter',
    price: 'Base',
    copy: 'Launch the core Ava Skye growth flow with a focused setup.'
  },
  {
    name: 'Growth',
    price: 'Scale',
    copy: 'Recommended DigiMark101 automation package for active campaigns.',
    featured: true
  },
  {
    name: 'Dynasty',
    price: 'Custom',
    copy: 'Full-system rollout for advanced campaigns and premium client delivery.'
  }
];

const walkthroughSteps = [
  ['01. Hook', 'Fast premium opener with DigiMark101 branding fixed at top-left.'],
  ['02. Walkthrough', 'One full-length Ava Skye sequence explaining the entire smart growth flow.'],
  ['03. Pricing', 'Base44-style pricing cards kept visible below the walkthrough for conversion.'],
  ['04. Call to action', 'Clear handoff into the live Base44 app when the visitor is ready.']
];

export default function Home() {
  return (
    <>
      <main className="shell" id="top">
        <header className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="DigiMark101 home">
            <span className="brandMark">DM</span>
            <span className="brandCopy">
              <span>DigiMark101</span>
              <small>Ava Skye AI</small>
            </span>
          </a>
          <nav className="navLinks" aria-label="Page sections">
            <a className="pill" href="#walkthrough">Walkthrough</a>
            <a className="pill" href="#pricing">Pricing</a>
            <a className="pill" href="https://www.live-smart-growth-flow.base44.app/">Open Base44</a>
          </nav>
        </header>

        <section className="hero" aria-label="DigiMark101 Ava Skye launch">
          <div>
            <p className="eyebrow"><span className="dot" /> One full-length walkthrough</p>
            <h1>Your Digital Dynasty <span>starts here.</span></h1>
            <p className="lead">
              Ava Skye guides prospects through the full DigiMark101 growth flow in one clean,
              premium walkthrough — no duplicate intro, no second walkthrough, just the polished layout.
            </p>
            <div className="heroActions">
              <a className="button" href="#walkthrough">Watch the full walkthrough</a>
              <a className="button secondary" href="#pricing">View pricing scale</a>
            </div>
          </div>

          <aside className="avaCard" aria-label="Ava Skye full-length visual">
            <span className="statusChip">Ava Skye • Full length</span>
          </aside>
        </section>

        <section id="walkthrough" className="panel" aria-label="Full-length walkthrough">
          <div className="sectionHead">
            <h2>One walkthrough. Full length.</h2>
            <p>
              This replaces the double-walkthrough Base44 front end with one Ava Skye-led flow
              covering the offer, automation, proof, and next step.
            </p>
          </div>

          <div className="walkthrough">
            <div className="walkthroughStage">
              <div className="videoFrame" role="img" aria-label="Ava Skye full-length walkthrough video frame">
                <div className="play">▶</div>
                <div>
                  <p className="eyebrow">DigiMark101 AI growth flow</p>
                  <h2>Ava Skye presents the complete system.</h2>
                </div>
                <div className="timeline"><span /></div>
              </div>
            </div>

            <div className="steps">
              {walkthroughSteps.map(([title, copy]) => (
                <article className="step" key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="panel" aria-label="Pricing scale">
          <div className="sectionHead">
            <h2>Pricing scale</h2>
            <p>Three clean tiers in the same visual scale so the offer is easy to compare.</p>
          </div>
          <div className="pricingGrid">
            {pricingTiers.map((tier) => (
              <article className={`priceCard ${tier.featured ? 'featured' : ''}`} key={tier.name}>
                <div>
                  <h3>{tier.name}</h3>
                  <p>{tier.copy}</p>
                </div>
                <div className="price">{tier.price}</div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        :root {
          --panel: rgba(9, 13, 31, 0.76);
          --line: rgba(255, 255, 255, 0.14);
          --text: #f8fbff;
          --muted: rgba(248, 251, 255, 0.72);
          --blue: #60a5fa;
          --purple: #7b1fc2;
          --magenta: #ec4899;
          --silver: #cbd5e1;
          --green: #34d399;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% 8%, rgba(96, 165, 250, 0.18), transparent 28rem),
            radial-gradient(circle at 86% 16%, rgba(236, 72, 153, 0.2), transparent 27rem),
            linear-gradient(135deg, #050816 0%, #0f1419 48%, #1a1028 100%);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
        }

        a { color: inherit; }

        .shell {
          position: relative;
          width: min(1160px, calc(100% - 32px));
          margin: 0 auto;
          padding: 26px 0 56px;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 56px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .brandMark {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: linear-gradient(135deg, #111326, var(--purple) 52%, var(--magenta));
          box-shadow: 0 12px 34px rgba(123, 31, 194, 0.38);
          font-size: 0.86rem;
        }

        .brandCopy span { display: block; }
        .brandCopy small {
          display: block;
          margin-top: 2px;
          color: var(--muted);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .navLinks {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .pill {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: rgba(248, 251, 255, 0.78);
          font-size: 0.9rem;
          font-weight: 800;
          text-decoration: none;
          backdrop-filter: blur(16px);
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 430px;
          gap: 34px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 18px;
          color: var(--silver);
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.76rem;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--green);
          box-shadow: 0 0 22px rgba(52, 211, 153, 0.8);
        }

        h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(3.1rem, 8.7vw, 6.9rem);
          line-height: 0.88;
          letter-spacing: -0.085em;
        }

        h1 span {
          background: linear-gradient(135deg, var(--blue), #ffffff 38%, var(--magenta));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .lead {
          max-width: 680px;
          margin: 24px 0 0;
          color: var(--muted);
          font-size: clamp(1.06rem, 2vw, 1.28rem);
          line-height: 1.7;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .button {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          border-radius: 999px;
          border: 1px solid transparent;
          background: linear-gradient(135deg, #111326, var(--purple) 56%, var(--magenta));
          color: #fff;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 16px 44px rgba(123, 31, 194, 0.35);
        }

        .button.secondary {
          background: rgba(255,255,255,0.07);
          border-color: var(--line);
          box-shadow: none;
        }

        .avaCard {
          position: relative;
          min-height: 560px;
          border: 1px solid var(--line);
          border-radius: 34px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03)),
            radial-gradient(circle at 50% 20%, rgba(236,72,153,0.32), transparent 18rem),
            #070b1c;
          box-shadow: 0 34px 90px rgba(0,0,0,0.42);
        }

        .avaCard::before {
          content: "";
          position: absolute;
          inset: 20px 52px 0;
          border-radius: 999px 999px 26px 26px;
          background:
            radial-gradient(circle at 50% 18%, rgba(255,255,255,0.34), transparent 5rem),
            linear-gradient(180deg, rgba(203,213,225,0.28), rgba(123,31,194,0.24) 34%, rgba(5,8,22,0.06));
          filter: drop-shadow(0 28px 54px rgba(0,0,0,0.34));
        }

        .avaCard::after {
          content: "Ava Skye";
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 22px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 22px;
          background: rgba(5, 8, 22, 0.72);
          color: #fff;
          font-size: 1.6rem;
          font-weight: 950;
          letter-spacing: -0.05em;
          backdrop-filter: blur(16px);
        }

        .statusChip {
          position: absolute;
          top: 22px;
          left: 22px;
          z-index: 2;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          padding: 10px 14px;
          background: rgba(5,8,22,0.66);
          color: rgba(255,255,255,0.82);
          font-weight: 900;
          backdrop-filter: blur(16px);
        }

        section { margin-top: 34px; }

        .panel {
          border: 1px solid var(--line);
          border-radius: 30px;
          padding: clamp(22px, 4vw, 34px);
          background: var(--panel);
          box-shadow: 0 28px 80px rgba(0,0,0,0.28);
          backdrop-filter: blur(18px);
        }

        .sectionHead {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 20px;
        }

        h2 {
          margin: 0;
          font-size: clamp(2rem, 4.2vw, 3.6rem);
          line-height: 0.95;
          letter-spacing: -0.07em;
        }

        .sectionHead p {
          max-width: 440px;
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .walkthrough {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: stretch;
        }

        .walkthroughStage {
          min-height: 380px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 26px;
          padding: 20px;
          background:
            linear-gradient(135deg, rgba(96,165,250,0.14), rgba(236,72,153,0.1)),
            #070b1c;
        }

        .videoFrame {
          height: 100%;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 22px;
          padding: 22px;
          background:
            radial-gradient(circle at 70% 20%, rgba(236,72,153,0.28), transparent 13rem),
            linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
        }

        .play {
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--magenta));
          box-shadow: 0 20px 54px rgba(236,72,153,0.35);
          font-size: 2rem;
          padding-left: 5px;
        }

        .timeline {
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          overflow: hidden;
        }

        .timeline span {
          display: block;
          width: 72%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--blue), var(--magenta));
        }

        .steps { display: grid; gap: 12px; }

        .step {
          padding: 18px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          background: rgba(255,255,255,0.06);
        }

        .step strong { display: block; margin-bottom: 7px; }
        .step p { margin: 0; color: var(--muted); line-height: 1.55; }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .priceCard {
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 24px;
          background: rgba(255,255,255,0.06);
        }

        .priceCard.featured {
          background: linear-gradient(180deg, rgba(123,31,194,0.28), rgba(255,255,255,0.06));
          border-color: rgba(236,72,153,0.42);
        }

        .priceCard h3 { margin: 0 0 10px; font-size: 1.25rem; }
        .priceCard p { margin: 0; color: var(--muted); line-height: 1.55; }
        .price { margin-top: 18px; font-size: 2rem; font-weight: 950; letter-spacing: -0.06em; }

        @media (max-width: 920px) {
          .hero,
          .walkthrough,
          .pricingGrid { grid-template-columns: 1fr; }
          .avaCard { min-height: 460px; }
          .sectionHead { align-items: start; flex-direction: column; }
        }

        @media (max-width: 620px) {
          .shell { width: min(100% - 22px, 1160px); padding-top: 16px; }
          .nav { align-items: flex-start; flex-direction: column; margin-bottom: 34px; }
          .navLinks { justify-content: flex-start; }
          .avaCard { min-height: 390px; }
          .avaCard::before { inset: 20px 34px 0; }
        }
      `}</style>
    </>
  );
}
