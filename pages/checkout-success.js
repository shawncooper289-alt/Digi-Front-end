import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const planLabels = {
  launch: 'Launch Account',
  startup: 'Launch Account',
  growth: 'Growth Account',
  premium: 'Premium Account',
  pro: 'Premium Account',
  elite: 'Elite Account',
  'elite-team': 'Elite Account',
  'white-label-partner': 'White Label Partner',
  'white-label-enterprise': 'White Label Enterprise',
};

export default function CheckoutSuccess() {
  const router = useRouter();
  const plan = String(router.query.plan || '').toLowerCase();
  const label = planLabels[plan] || 'DigiMark101 Account';

  return (
    <main className="successPage">
      <section className="successCard">
        <Link className="brand" href="/">
          <Image src="/digimark101-logo.svg" alt="DigiMark101 logo" width={48} height={48} priority />
          <span>DigiMark101</span>
        </Link>
        <p className="eyebrow">Payment received</p>
        <h1>Set up your {label} login.</h1>
        <p>
          Create your DigiMark101 login with the same email used at checkout. Ava Skye will open your private dashboard once your account is active.
        </p>
        <div className="actions">
          <Link className="primary" href="/login">Create or sign in</Link>
          <Link className="secondary" href="/">Back to site</Link>
        </div>
      </section>

      <style jsx>{`
        .successPage { min-height: 100vh; display: grid; place-items: center; padding: 2rem; color: #fff; background: radial-gradient(circle at 20% 12%, rgba(37,99,235,.28), transparent 28rem), radial-gradient(circle at 88% 18%, rgba(219,39,119,.24), transparent 28rem), #020617; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
        .successCard { width: min(680px, 100%); padding: 2rem; border: 1px solid rgba(255,255,255,.16); border-radius: 2rem; background: rgba(15,23,42,.78); box-shadow: 0 40px 140px rgba(2,6,23,.72), inset 0 1px 0 rgba(255,255,255,.08); }
        .brand { display: flex; align-items: center; gap: .75rem; color: #fff; text-decoration: none; font-weight: 1000; letter-spacing: -.04em; margin-bottom: 2rem; }
        .brand img { width: 48px; height: 48px; object-fit: contain; mix-blend-mode: screen; }
        .eyebrow { margin: 0 0 .75rem; color: #93c5fd; font-size: .75rem; font-weight: 1000; letter-spacing: .18em; text-transform: uppercase; }
        h1 { margin: 0; font-size: clamp(2.6rem, 7vw, 5rem); line-height: .9; letter-spacing: -.07em; }
        p { color: rgba(226,232,240,.76); line-height: 1.7; font-size: 1.08rem; }
        .actions { display: flex; flex-wrap: wrap; gap: .85rem; margin-top: 1.5rem; }
        a.primary, a.secondary { border-radius: 999px; padding: 1rem 1.25rem; text-decoration: none; font-weight: 1000; }
        .primary { color: #fff; background: linear-gradient(135deg, #2563eb, #db2777 72%, #f59e0b); box-shadow: 0 22px 70px rgba(37,99,235,.3); }
        .secondary { color: #dbeafe; border: 1px solid rgba(147,197,253,.28); background: rgba(255,255,255,.05); }
      `}</style>
    </main>
  );
}
