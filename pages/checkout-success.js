import { useRouter } from 'next/router';

export default function CheckoutSuccess() {
  const router = useRouter();
  const orderId = router.query.order;

  return (
    <main className="success-shell">
      <style jsx>{`
        .success-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.22), transparent 28rem),
            radial-gradient(circle at 82% 78%, rgba(236, 72, 153, 0.2), transparent 26rem),
            linear-gradient(135deg, #050816 0%, #0f1419 48%, #1a1f2e 100%);
          color: #f9fafb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 1.25rem;
        }

        .success-card {
          width: min(100%, 620px);
          padding: clamp(1.5rem, 5vw, 2.5rem);
          border-radius: 1.5rem;
          background: rgba(15, 23, 42, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.28);
          box-shadow: 0 32px 90px rgba(2, 6, 23, 0.5);
          backdrop-filter: blur(18px);
          text-align: center;
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
          font-size: clamp(2.5rem, 9vw, 4.5rem);
          line-height: 0.96;
          letter-spacing: -0.06em;
          margin: 0 0 1rem;
        }

        p {
          color: rgba(249, 250, 251, 0.74);
          line-height: 1.6;
        }

        .order-box {
          margin: 1.5rem 0;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          background: rgba(2, 6, 23, 0.32);
        }

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.25rem;
          border-radius: 999px;
          color: #f9fafb;
          font-weight: 900;
          text-decoration: none;
          background: linear-gradient(135deg, #3b82f6, #ec4899);
          box-shadow: 0 18px 40px rgba(59, 130, 246, 0.35), 0 0 60px rgba(236, 72, 153, 0.18);
        }
      `}</style>

      <section className="success-card" aria-label="Checkout request saved">
        <p className="eyebrow">Checkout request saved</p>
        <h1>Request received</h1>
        <p>
          Your DigiMark101 checkout request was saved with payment pending. Once payment processing is connected, this flow can send clients to live payment and automated receipts.
        </p>
        {orderId ? (
          <div className="order-box">
            <strong>Order reference</strong>
            <p>{orderId}</p>
          </div>
        ) : null}
        <a href="/">Back to DigiMark101</a>
      </section>
    </main>
  );
}
