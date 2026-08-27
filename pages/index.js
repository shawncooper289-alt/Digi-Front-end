import { useState } from 'react';

const services = [
  ['AI Strategy', 'A focused growth roadmap built around your market, message, and next best move.'],
  ['Content Systems', 'Campaigns and content engineered to earn attention and turn it into demand.'],
  ['Growth Operations', 'Smart automation that keeps qualified leads moving while your team stays in control.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <style jsx global>{`
        :root { color: #172432; background: #f5f2ec; }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .site { overflow: hidden; }
        .nav { align-items: center; display: flex; justify-content: space-between; margin: 0 auto; max-width: 1240px; padding: 28px 32px; }
        .brand { font-family: Georgia, serif; font-size: 25px; font-weight: 700; letter-spacing: -.8px; }
        .brand span { color: #a56b37; }
        .nav-links { display: flex; gap: 28px; font-size: 14px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
        .nav-cta, .button-primary { background: #172432; border: 1px solid #172432; color: #fff; display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: .06em; padding: 14px 20px; text-transform: uppercase; }
        .hero { background: #efeae1; border-top: 1px solid #ddd4c7; min-height: 640px; }
        .hero-inner { display: grid; gap: 55px; grid-template-columns: 1.05fr .95fr; margin: 0 auto; max-width: 1240px; padding: 82px 32px; }
        .eyebrow { color: #a56b37; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        h1 { font-family: Georgia, serif; font-size: clamp(48px, 6vw, 82px); font-weight: 500; letter-spacing: -.06em; line-height: .98; margin: 18px 0 28px; max-width: 720px; }
        .lead { color: #53606c; font-size: 19px; line-height: 1.6; max-width: 560px; }
        .actions { display: flex; flex-wrap: wrap; gap: 13px; margin-top: 35px; }
        .button-secondary { border: 1px solid #172432; display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: .06em; padding: 14px 20px; text-transform: uppercase; }
        .portrait { align-items: end; background: linear-gradient(145deg, #394c59 0%, #172432 65%); display: flex; min-height: 470px; overflow: hidden; padding: 32px; position: relative; }
        .portrait:before { border: 1px solid rgba(255,255,255,.3); content: ''; inset: 17px; position: absolute; }
        .portrait-copy { color: white; position: relative; z-index: 1; }
        .portrait-copy h2 { font-family: Georgia, serif; font-size: 42px; font-weight: 400; letter-spacing: -.04em; margin: 10px 0; }
        .portrait-copy p { color: #d8e1e1; line-height: 1.5; max-width: 300px; }
        .note { color: #b9c5c6; font-size: 11px; letter-spacing: .1em; margin-top: 34px; text-transform: uppercase; }
        .statement { background: #172432; color: #f6f1e9; padding: 88px 32px; text-align: center; }
        .statement p { color: #c9d1cf; font-size: 13px; font-weight: bold; letter-spacing: .14em; text-transform: uppercase; }
        .statement h2 { font-family: Georgia, serif; font-size: clamp(34px, 4vw, 58px); font-weight: 400; letter-spacing: -.045em; line-height: 1.1; margin: 18px auto 0; max-width: 900px; }
        .services { margin: 0 auto; max-width: 1240px; padding: 92px 32px; }
        .services-header { align-items: end; display: flex; justify-content: space-between; margin-bottom: 42px; }
        .services h2 { font-family: Georgia, serif; font-size: 46px; font-weight: 400; letter-spacing: -.04em; margin: 10px 0 0; }
        .service-grid { border-top: 1px solid #c9c3b9; display: grid; grid-template-columns: repeat(3, 1fr); }
        .service { border-right: 1px solid #c9c3b9; min-height: 235px; padding: 28px 28px 22px 0; }
        .service + .service { padding-left: 28px; }
        .service:last-child { border-right: 0; }
        .number { color: #a56b37; font-size: 13px; font-weight: bold; }
        .service h3 { font-family: Georgia, serif; font-size: 29px; font-weight: 400; letter-spacing: -.03em; margin: 34px 0 12px; }
        .service p { color: #53606c; line-height: 1.6; max-width: 290px; }
        footer { border-top: 1px solid #c9c3b9; display: flex; font-size: 13px; justify-content: space-between; margin: 0 auto; max-width: 1176px; padding: 24px 0 38px; }
        .menu { display: none; }
        @media (max-width: 760px) { .nav { padding: 20px; } .nav-links, .nav-cta { display: none; } .menu { background: transparent; border: 0; display: block; font-size: 14px; font-weight: bold; } .nav-links.open { background: #f5f2ec; display: flex; flex-direction: column; left: 0; padding: 24px; position: absolute; right: 0; top: 68px; z-index: 3; } .hero-inner { grid-template-columns: 1fr; padding: 56px 20px; } .portrait { min-height: 360px; } .services { padding: 65px 20px; } .services-header { display: block; } .service-grid { grid-template-columns: 1fr; } .service, .service + .service { border-bottom: 1px solid #c9c3b9; border-right: 0; min-height: 0; padding: 28px 0; } footer { margin: 0 20px; } }
      `}</style>
      <div className="site">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">DigiMark<span>101</span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#services">Capabilities</a><a href="#about">About</a><a href="mailto:hello@digimark101.com">Contact</a>
          </div>
          <a className="nav-cta" href="mailto:hello@digimark101.com">Start a conversation</a>
          <button className="menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu</button>
        </nav>
        <section className="hero" id="top">
          <div className="hero-inner">
            <div>
              <div className="eyebrow">AI-powered digital marketing agency</div>
              <h1>DigiMark101.<br />Your digital dynasty starts here.</h1>
              <p className="lead">We pair intelligent systems with considered creative to help ambitious brands build authority, demand, and lasting momentum.</p>
              <div className="actions"><a className="button-primary" href="mailto:hello@digimark101.com">Build your strategy</a><a className="button-secondary" href="#services">Explore capabilities</a></div>
            </div>
            <aside className="portrait" aria-label="Ava Skye brand ambassador visual">
              <div className="portrait-copy"><div className="eyebrow" style={{color: '#e8b77d'}}>Meet Ava Skye</div><h2>Human insight.<br />Amplified by AI.</h2><p>The face of DigiMark101: refined, confident, and always focused on what moves your brand forward.</p><div className="note">Replace this panel with approved Ava Skye photography</div></div>
            </aside>
          </div>
        </section>
        <section className="statement" id="about"><p>Built for brands with intent</p><h2>Less noise. More presence.<br />A smarter path to growth.</h2></section>
        <section className="services" id="services"><div className="services-header"><div><div className="eyebrow">What we build</div><h2>Marketing with momentum.</h2></div><a className="button-secondary" href="mailto:hello@digimark101.com">Talk to DigiMark101</a></div><div className="service-grid">{services.map(([title, copy], index) => <article className="service" key={title}><div className="number">0{index + 1}</div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
        <footer><span>© {new Date().getFullYear()} DigiMark101</span><span>AI-powered. Human-led.</span></footer>
      </div>
    </main>
  );
}
