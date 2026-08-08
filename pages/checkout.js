import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { hasSupabaseConfig, supabase } from '../lib/supabaseClient';

const packages = [
  { id: 'founder-starter', name: 'Founder Starter', price: 149, priceLabel: '$149/mo first-adopter', regularPrice: '$299/mo regular', description: 'For solo founders who want Ava to plan campaigns and keep lead follow-up organized.' },
  { id: 'growth-partner', name: 'Growth Partner', price: 399, priceLabel: '$399/mo first-adopter', regularPrice: '$799/mo regular', description: 'Best value for businesses that want more done-for-you structure without agency-level pricing.' },
  { id: 'agency-command', name: 'Agency Command', price: 1497, priceLabel: '$1,497/mo first-adopter', regularPrice: '$2,997/mo regular', description: 'For teams and agencies that need a premium growth command center with room to scale.' },
];

export default function Checkout() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState('growth-partner');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!router.isReady) return;

    const queryTier = String(router.query.tier || '');
    const queryEmail = String(router.query.email || '');

    if (packages.some((item) => item.id === queryTier)) {
      setSelectedPackage(queryTier);
    }

    if (queryEmail) {
      setForm((current) => ({ ...current, email: queryEmail }));
    }
  }, [router.isReady, router.query.email, router.query.tier]);

  const selected = packages.find((item) => item.id === selectedPackage) || packages[1];

  const updateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!hasSupabaseConfig || !supabase) {
      setMessage('Supabase is not configured yet. Your order cannot be saved until the Supabase environment variables are active.');
      return;
    }

    setLoading(true);

    const orderPayload = {
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      business_name: form.business,
      package_name: selected.name,
      package_price: selected.price,
      currency: 'USD',
      payment_status: 'pending',
      payment_provider: 'not_connected_yet',
      notes: `${selected.priceLabel}${form.notes ? ` — ${form.notes}` : ''}`,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('checkout_requests')
      .insert(orderPayload)
      .select('id')
      .single();

    setLoading(false);

    if (error) {
      setMessage(error.message || 'Could not save this checkout request.');
      return;
    }

    router.push(`/checkout-success?order=${encodeURIComponent(data.id)}`);
  };

  return (
    <main className="checkout-shell">
      <style jsx>{`
        .checkout-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 18% 12%, rgba(96, 165, 250, 0.18), transparent 28rem),
            radial-gradient(circle at 82% 74%, rgba(236, 72, 153, 0.22), transparent 26rem),
            linear-gradient(135deg, #050816 0%, #0f1419 48%, #1a1f2e 100%);
          color: #f9fafb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          padding: clamp(1.25rem, 4vw, 4rem);
        }

        .checkout-grid {
          width: min(1120px, 100%);
          min-height: calc(100vh - clamp(2.5rem, 8vw, 8rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(340px, 460px);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: center;
        }

        .copy,
        .form-card {
          animation: slideUp 0.7s ease-out both;
        }

        .eyebrow {
          display: inline-flex;
          padding: 0.5rem 0.85rem;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.58);
          color: #93c5fd;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(14px);
        }

        h1 {
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 0.96;
          letter-spacing: -0.07em;
          margin: 1rem 0;
        }

        .gradient-text {
          display: block;
          background: linear-gradient(135deg, #60a5fa 0%, #f0abfc 48%, #ec4899 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .copy p {
          max-width: 42rem;
          color: rgba(249, 250, 251, 0.78);
          line-height: 1.65;
          font-size: 1.1rem;
        }

        .form-card {
          padding: clamp(1.5rem, 5vw, 2.25rem);
          border-radius: 1.5rem;
          background: rgba(15, 23, 42, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.28);
          box-shadow: 0 32px 90px rgba(2, 6, 23, 0.5);
          backdrop-filter: blur(18px);
        }

        .package-card {
          padding: 1rem;
          margin-bottom: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 1rem;
          background: rgba(2, 6, 23, 0.32);
        }

        .package-card strong {
          display: block;
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }

        .price {
          color: #86efac;
          font-size: 1.35rem;
          font-weight: 900;
          margin: 0.25rem 0;
        }

        .regular-price {
          color: #f0abfc;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        label {
          display: block;
          color: rgba(249, 250, 251, 0.82);
          font-weight: 700;
          margin-bottom: 0.45rem;
        }

        input,
        select,
        textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 0.9rem 1rem;
          margin-bottom: 1rem;
          border-radius: 0.9rem;
          border: 1px solid rgba(148, 163, 184, 0.38);
          background: rgba(2, 6, 23, 0.42);
          color: #f9fafb;
          font-size: 1rem;
          outline: none;
        }

        textarea {
          min-height: 96px;
          resize: vertical;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: rgba(96, 165, 250, 0.85);
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.16);
        }

        button,
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.25rem;
          border-radius: 999px;
          color: #f9fafb;
          font-weight: 900;
          text-decoration: none;
        }

        button {
          width: 100%;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #3b82f6, #ec4899);
          box-shadow: 0 18px 40px rgba(59, 130, 246, 0.35), 0 0 60px rgba(236, 72, 153, 0.18);
        }

        button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .back-link {
          margin-top: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.45);
          background: rgba(15, 23, 42, 0.35);
        }

        .message {
          min-height: 1.5rem;
          margin-top: 1rem;
          color: #fca5a5;
          line-height: 1.5;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .checkout-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="checkout-grid" aria-label="DigiMark101 checkout">
        <div className="copy">
          <div className="eyebrow">DigiMark101 checkout</div>
          <h1>
            Start your
            <span className="gradient-text">digital empire</span>
          </h1>
          <p>
            Submit your selected seat tier now. This creates a payment-pending order record so checkout is ready for live client payments once the payment processor is connected.
          </p>
          <p>
            Automatic card charging, invoices, and receipts will be connected after you choose and activate a payment provider.
          </p>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <label htmlFor="package">Package</label>
          <select id="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)}>
            {packages.map((item) => (
              <option key={item.id} value={item.id}>{item.name} — {item.priceLabel}</option>
            ))}
          </select>

          <div className="package-card">
            <strong>{selected.name}</strong>
            <div className="price">{selected.priceLabel}</div>
            <div className="regular-price">{selected.regularPrice}</div>
            <p>{selected.description}</p>
          </div>

          <label htmlFor="name">Client name</label>
          <input id="name" value={form.name} onChange={(event) => updateForm('name', event.target.value)} required />

          <label htmlFor="email">Client email</label>
          <input id="email" type="email" value={form.email} onChange={(event) => updateForm('email', event.target.value)} required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" value={form.phone} onChange={(event) => updateForm('phone', event.target.value)} />

          <label htmlFor="business">Business name</label>
          <input id="business" value={form.business} onChange={(event) => updateForm('business', event.target.value)} />

          <label htmlFor="notes">What are you trying to build?</label>
          <textarea id="notes" value={form.notes} onChange={(event) => updateForm('notes', event.target.value)} />

          <button type="submit" disabled={loading}>{loading ? 'Saving checkout...' : 'Create checkout request'}</button>
          <div className="message" role="status">{message}</div>
          <a className="back-link" href="/">Back to homepage</a>
        </form>
      </section>
    </main>
  );
}
