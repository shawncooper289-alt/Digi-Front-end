import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { hasSupabaseConfig, supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('Checking owner session...');

  useEffect(() => {
    let active = true;

    async function loadSession() {
      if (!hasSupabaseConfig || !supabase) {
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

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }

    router.push('/login');
  };

  return (
    <main className="dashboard-shell">
      <style jsx>{`
        .dashboard-shell {
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

        .dashboard-card {
          width: min(100%, 720px);
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
          font-size: clamp(2.25rem, 9vw, 3.75rem);
          line-height: 0.96;
          letter-spacing: -0.06em;
          margin: 0 0 0.75rem;
        }

        p {
          color: rgba(249, 250, 251, 0.74);
          line-height: 1.6;
        }

        .session-box {
          margin: 1.5rem 0;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          background: rgba(2, 6, 23, 0.32);
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

        a {
          margin-left: 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.45);
          background: rgba(15, 23, 42, 0.35);
        }
      `}</style>

      <section className="dashboard-card" aria-label="DigiMark101 founder dashboard">
        <p className="eyebrow">DigiMark101 founder dashboard</p>
        <h1>Welcome back{email ? `, ${email}` : ''}</h1>
        <p>{loading ? 'Loading your secure owner session...' : message}</p>
        <div className="session-box">
          <strong>Owner / Founder Access</strong>
          <p>
            This page checks the Supabase Auth session in the browser. Add Supabase database policies for any protected customer, campaign, or billing data.
          </p>
        </div>
        <button type="button" onClick={handleSignOut}>Sign out</button>
        <a href="/">Back to site</a>
      </section>
    </main>
  );
}
