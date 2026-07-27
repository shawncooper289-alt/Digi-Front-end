import { ArrowRight } from 'lucide-react';
import DigiMarkLogo from './DigiMarkLogo';
import { siteNav } from '../lib/siteContent';

export default function SiteNav({ active = '' }) {
  return (
    <nav className="site-nav">
      <a className="brand" href="/" aria-label="DigiMark101 home"><DigiMarkLogo compact /></a>
      <div className="nav-links">
        {siteNav.map(([label, href]) => (
          <a className={active === href ? 'active' : ''} href={href} key={href}>{label}</a>
        ))}
      </div>
      <a className="nav-button" href="/#early-access">Start with Ava <ArrowRight size={16} /></a>
      <style jsx>{`
        .site-nav {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .brand,
        .site-nav a { color: inherit; text-decoration: none; }
        .nav-links { display: flex; gap: 14px; color: #b6c6d8; font-size: 0.9rem; font-weight: 800; flex-wrap: wrap; justify-content: center; }
        .nav-links a.active, .nav-links a:hover { color: #f7c873; }
        .nav-button { border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 18px; background: linear-gradient(135deg, #f7c873, #e88d4a 52%, #b45cff); color: #07111d; font-weight: 950; box-shadow: 0 20px 56px rgba(232, 141, 74, 0.28); white-space: nowrap; }
        @media (max-width: 980px) { .site-nav { align-items: flex-start; } .nav-button { display: none; } }
        @media (max-width: 700px) { .nav-links { display: none; } }
      `}</style>
    </nav>
  );
}
