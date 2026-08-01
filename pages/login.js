import { useState } from 'react';
import { useRouter } from 'next/router';
import { hasSupabaseConfig, supabase } from '../lib/supabaseClient';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('digimark101s@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error');

  const requireSupabase = () => {
    if (!hasSupabaseConfig || !supabase) {
      setMessageType('error');
      setMessage('Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel.');
      return false;
    }

    return true;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!requireSupabase()) return;

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessageType('error');
      setMessage(error.message || 'Login failed. Check the owner/founder credentials in Supabase.');
      return;
    }

    router.push('/dashboard');
  };

  const handlePasswordSetup = async () => {
    setMessage('');

    if (!email) {
      setMessageType('error');
      setMessage('Enter your owner email first.');
      return;
    }

    if (!requireSupabase()) return;

    setResetLoading(true);

    const redirectTo = `${window.location.origin}/login`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    setResetLoading(false);

    if (error) {
      setMessageType('error');
      setMessage(error.message || 'Could not send the password setup email.');
      return;
    }

    setMessageType('success');
    setMessage(`Password setup email sent to ${email}. Open that email and follow the Supabase link to choose your private password.`);
  };

  return (
    <main className="login-shell">
      <style jsx>{`
        .login-shell {
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

        .login-card {
          width: min(100%, 440px);
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

        .subtitle {
          color: rgba(249, 250, 251, 0.72);
          line-height: 1.6;
          margin: 0 0 1.75rem;
        }

        label {
          display: block;
          color: rgba(249, 250, 251, 0.82);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        input {
          width: 100%;
          box-sizing: border-box;
          padding: 0.95rem 1rem;
          margin-bottom: 1rem;
          border-radius: 0.9rem;
          border: 1px solid rgba(148, 163, 184, 0.38);
          background: rgba(2, 6, 23, 0.42);
          color: #f9fafb;
          font-size: 1rem;
          outline: none;
        }

        input:focus {
          border-color: rgba(96, 165, 250, 0.85);
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.16);
        }

        button {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 999px;
          cursor: pointer;
          color: #f9fafb;
          font-size: 1rem;
          font-weight: 900;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        button:hover:not(:disabled) {
          transform: translateY(-1px);
        }

        button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .primary-button {
          border: none;
          background: linear-gradient(135deg, #3b82f6, #ec4899);
          box-shadow: 0 18px 40px rgba(59, 130, 246, 0.35), 0 0 60px rgba(236, 72, 153, 0.18);
        }

        .secondary-button {
          margin-top: 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.45);
          background: rgba(15, 23, 42, 0.35);
        }

        .message {
          min-height: 1.5rem;
          margin-top: 1rem;
          color: ${messageType === 'success' ? '#86efac' : '#fca5a5'};
          line-height: 1.5;
        }

        .back-link {
          display: inline-block;
          margin-top: 1.25rem;
          color: #93c5fd;
          font-weight: 800;
          text-decoration: none;
        }
      `}</style>

      <section className="login-card" aria-label="Owner founder login">
        <p className="eyebrow">DigiMark101 secure access</p>
        <h1>Owner / Founder Login</h1>
        <p className="subtitle">
          Use your owner email to sign in, or send yourself a secure Supabase password setup email. Your private password is never handled here.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Owner email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in as Owner / Founder'}
          </button>
        </form>

        <button className="secondary-button" type="button" onClick={handlePasswordSetup} disabled={resetLoading}>
          {resetLoading ? 'Sending setup email...' : 'Send password setup email'}
        </button>

        <div className="message" role="status">{message}</div>
        <a className="back-link" href="/">Back to DigiMark101</a>
      </section>
    </main>
  );
}
