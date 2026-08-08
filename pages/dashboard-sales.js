import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { hasSupabaseConfig, supabase } from '../lib/supabaseClient';

const leadPackages = [
  {
    id: 'premium-buyer-25',
    name: 'Premium Buyer Leads',
    quantity: '25 verified opt-in leads',
    price: 497,
    priceLabel: '$497',
    description: 'For clients who want buyer-intent contacts matched to a focused offer or niche.',
    safeguards: ['Opt-in only', 'No scraped lists', 'Niche matched', 'Replacement review window'],
  },
  {
    id: 'growth-buyer-75',
    name: 'Growth Buyer Leads',
    quantity: '75 verified opt-in leads',
    price: 1297,
    priceLabel: '$1,297',
    description: 'Best for clients who need a larger campaign-ready lead pool with stronger segmentation.',
    safeguards: ['Opt-in only', 'Segmented by fit', 'Campaign handoff notes', 'Priority fulfillment'],
    featured: true,
  },
  {
    id: 'market-command-200',
    name: 'Market Command Leads',
    quantity: '200 verified opt-in leads',
    price: 2997,
    priceLabel: '$2,997',
    description: 'For agencies or teams building a high-volume buyer pipeline with premium positioning.',
    safeguards: ['Opt-in only', 'Buyer-intent filters', 'Custom niche criteria', 'Founder approval before delivery'],
  },
];

export default function DashboardSales() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(leadPackages[1].id);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [targetNiche, setTargetNiche] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('Checking founder access...');

  const selected = leadPackages.find((item) => item.id === selectedPackage) || leadPackages[1];

  useEffect(() => {
    let active = true;

    async function loadSession() {
      if (!hasSupabaseConfig() || !supabase) {
        setMessage('Supabase is not configured yet. Add the Supabase environment variables in Vercel.');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.getSession();

      if (!active) return;

      if (error || !data.session) {
        router.replace('/login');
        return;
      }

      setEmail(data.session.user.email || 'Owner');
      setMessage('Founder access confirmed.');
      setLoading(false);
    }

    loadSession();

    return () => {
      active = false;
    };
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!hasSupabaseConfig() || !supabase) {
      setMessage('Supabase is not configured yet.');
      return;
    }

    setSaving(true);

    const { error } = await supabase.from('lead_sale_requests').insert({
      package_id: selected.id,
      package_name: selected.name,
      quantity: selected.quantity,
      price: selected.price,
      currency: 'USD',
      status: 'pending_founder_review',
      client_name: clientName,
      client_email: clientEmail,
      target_niche: targetNiche,
      notes,
      created_by: email,
      created_at: new Date().toISOString(),
    });

    setSaving(false);

    if (error) {
      setMessage(error.message || 'Could not save this lead sale request.');
      return;
    }

    setMessage('Lead sale request saved for founder review. Only premium buyer and opt-in leads should be delivered.');
    setClientName('');
    setClientEmail('');
    setTargetNiche('');
    setNotes('');
  };

  return (
    <main className="sales-shell">
      <style jsx>{`
        .sales-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.22), transparent 28rem),
            radial-gradient(circle at 82% 78%, rgba(236, 72, 153, 0.2), transparent 26rem),
            linear-gradient(135deg, #050816 0%, #0f1419 48%, #1a1f2e 100%);
          color: #f9fafb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          padding: clamp(1.25rem, 4vw, 4rem);
        }

        .sales-card {
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: clamp(1.5rem, 5vw, 2.5rem);
          border-radius: 1.5rem;
          background: rgba(15, 23, 42, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.28);
          box-shadow: 0 32px 90px rgba(2, 6, 23, 0.5);
          backdrop-filter: blur(18px);
        }

        .eyebrow {
          color: #93c5fd;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 0.75rem;
        }

        h1 {
          font-size: clamp(2.4rem, 8vw, 4.6rem);
          line-height: 0.96;
          letter-spacing: -0.06em;
          margin: 0 0 1rem;
        }

        p {
          color: rgba(249, 250, 251, 0.74);
          line-height: 1.6;
        }

        .notice {
          margin: 1.25rem 0;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(134, 239, 172, 0.32);
          background: rgba(22, 101, 52, 0.18);
        }

        .package-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .package-card {
          position: relative;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          background: rgba(2, 6, 23, 0.32);
          color: #f9fafb;
          text-align: left;
          cursor: pointer;
        }

        .package-card.active,
        .package-card:hover {
          border-color: rgba(192, 132, 252, 0.72);
          box-shadow: 0 20px 60px rgba(79, 70, 229, 0.22);
        }

        .package-card.featured::after {
          content: 'Best Seller';
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          padding: 0.35rem 0.55rem;
          border-radius: 999px;
          background: rgba(168, 85, 247, 0.22);
          color: #e9d5ff;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .package-card strong,
        .price {
          display: block;
        }

        .price {
          margin: 0.4rem 0;
          color: #86efac;
          font-size: 1.8rem;
          font-weight: 900;
        }

        .safeguards {
          display: grid;
          gap: 0.35rem;
          margin-top: 0.75rem;
          color: #cbd5e1;
          font-size: 0.85rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        label {
          display: block;
          color: rgba(249, 250, 251, 0.82);
          font-weight: 700;
          margin-bottom: 0.45rem;
        }

        input,
        textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 0.9rem 1rem;
          border-radius: 0.9rem;
          border: 1px solid rgba(148, 163, 184, 0.38);
          background: rgba(2, 6, 23, 0.42);
          color: #f9fafb;
          font-size: 1rem;
          outline: none;
        }

        textarea {
          min-height: 110px;
          resize: vertical;
        }

        .full {
          grid-column: 1 / -1;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        button,
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.25rem;
          border-radius: 999px;
          color: #f9fafb;
          font-weight: 900;
          text-decoration: none;
        }

        button {
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #3b82f6, #ec4899);
          box-shadow: 0 18px 40px rgba(59, 130, 246, 0.35), 0 0 60px rgba(236, 72, 153, 0.18);
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        a {
          border: 1px solid rgba(148, 163, 184, 0.45);
          background: rgba(15, 23, 42, 0.35);
        }

        .message {
          min-height: 1.5rem;
          margin-top: 1rem;
          color: #86efac;
        }

        @media (max-width: 900px) {
          .package-grid,
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="sales-card" aria-label="Founder lead sales page">
        <p className="eyebrow">Founder backend sales page</p>
        <h1>Premium buyer and opt-in lead offers</h1>
        <p>{loading ? 'Loading founder access...' : message}</p>

        <div className="notice">
          <strong>Founder access:</strong>
          <p>
            As owner/founder, you can see and package these upsells. Only sell leads that are consented, opt-in, niche-matched, and appropriate for the client offer. Do not sell scraped, cold, or non-consented contact lists.
          </p>
        </div>

        <div className="package-grid">
          {leadPackages.map((leadPackage) => (
            <button
              type="button"
              key={leadPackage.id}
              className={`package-card ${selectedPackage === leadPackage.id ? 'active' : ''} ${leadPackage.featured ? 'featured' : ''}`}
              onClick={() => setSelectedPackage(leadPackage.id)}
            >
              <strong>{leadPackage.name}</strong>
              <span>{leadPackage.quantity}</span>
              <span className="price">{leadPackage.priceLabel}</span>
              <p>{leadPackage.description}</p>
              <span className="safeguards">
                {leadPackage.safeguards.map((item) => <span key={item}>✓ {item}</span>)}
              </span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label htmlFor="client-name">Client name</label>
              <input id="client-name" value={clientName} onChange={(event) => setClientName(event.target.value)} required />
            </div>
            <div>
              <label htmlFor="client-email">Client email</label>
              <input id="client-email" type="email" value={clientEmail} onChange={(event) => setClientEmail(event.target.value)} required />
            </div>
            <div className="full">
              <label htmlFor="target-niche">Target niche / buyer criteria</label>
              <input id="target-niche" value={targetNiche} onChange={(event) => setTargetNiche(event.target.value)} required />
            </div>
            <div className="full">
              <label htmlFor="notes">Fulfillment notes</label>
              <textarea id="notes" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Example: only opted-in home service buyers in Indiana, no scraped/cold lists." />
            </div>
          </div>

          <div className="actions">
            <button type="submit" disabled={saving || loading}>{saving ? 'Saving...' : `Save ${selected.name} request`}</button>
            <a href="/dashboard">Back to founder dashboard</a>
            <a href="/checkout">Open client checkout</a>
          </div>
        </form>
      </section>
    </main>
  );
}
