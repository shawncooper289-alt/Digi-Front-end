import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

export default function Login() {
  const supabase = useMemo(() => createSupabaseClient(), []);
  const [email, setEmail] = useState('shawncooper289@gmail.com');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('Sign in with your founder or premium account.');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        window.location.href = '/dashboard';
      }
    });
  }, [supabase]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!supabase) {
      setStatus('Supabase browser credentials are missing. Add NEXT_PUBLIC_SUPABASE_URL and a public anon or publishable key.');
      return;
    }

    setLoading(true);
    setStatus('Signing you in...');

    const result = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (result.error) {
      setStatus(result.error.message);
      return;
    }


    window.location.href = '/dashboard';
  }

  async function sendMagicLink() {
    if (!supabase) {
      setStatus('Supabase browser credentials are missing.');
      return;
    }

    setLoading(true);
    const result = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/dashboard` },
    });
    setLoading(false);
    setStatus(result.error ? result.error.message : 'Check your email for a secure sign-in link.');
  }

  return (
    <main className="loginPage">
      <section className="loginCard">
        <a className="brand" href="/">
          <img src="/digimark101-logo.svg" alt="DigiMark101 logo" />
          <span>DigiMark101</span>
        </a>
        <p className="eyebrow">Founder access</p>
        <h1>Enter the DigiMark101 backend.</h1>
        <p className="intro">Use the secure email link for fast founder access, or sign in with your password.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" minLength={6} />
          </label>
          <button type="submit" disabled={loading || !hasSupabaseConfig}>
            {loading ? 'Working...' : 'Sign in'}
          </button>
        </form>

        <button className="switchMode" type="button" onClick={sendMagicLink} disabled={loading || !hasSupabaseConfig}>
          Email me a secure sign-in link
        </button>
        <p className="status">{status}</p>
      </section>

      <style jsx>{`
        .loginPage { min-height: 100vh; display: grid; place-items: center; padding: 2rem; color: #f8fafc; background: radial-gradient(circle at 20% 12%, rgba(37,99,235,.28), transparent 28rem), radial-gradient(circle at 88% 18%, rgba(219,39,119,.24), transparent 28rem), #020617; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
        .loginCard { width: min(520px, 100%); padding: 2rem; border: 1px solid rgba(255,255,255,.16); border-radius: 2rem; background: rgba(15,23,42,.78); box-shadow: 0 40px 140px rgba(2,6,23,.72), inset 0 1px 0 rgba(255,255,255,.08); backdrop-filter: blur(22px); }
        .brand { display: flex; align-items: center; gap: .75rem; color: #fff; text-decoration: none; font-weight: 1000; letter-spacing: -.04em; margin-bottom: 2rem; }
        .brand img { width: 48px; height: 48px; object-fit: contain; mix-blend-mode: screen; }
        .eyebrow { margin: 0 0 .75rem; color: #93c5fd; font-size: .75rem; font-weight: 1000; letter-spacing: .18em; text-transform: uppercase; }
        h1 { margin: 0; font-size: clamp(2.4rem, 7vw, 4.5rem); line-height: .9; letter-spacing: -.07em; }
        .intro, .status { color: rgba(226,232,240,.76); line-height: 1.65; }
        form { display: grid; gap: 1rem; margin-top: 1.6rem; }
        label { display: grid; gap: .45rem; color: rgba(226,232,240,.78); font-weight: 850; }
        input { width: 100%; box-sizing: border-box; border: 1px solid rgba(147,197,253,.25); border-radius: 1rem; padding: 1rem; color: #fff; background: rgba(2,6,23,.62); outline: none; }
        input:focus { border-color: rgba(147,197,253,.75); box-shadow: 0 0 0 4px rgba(59,130,246,.16); }
        button { border: 0; border-radius: 999px; padding: 1rem 1.25rem; color: #fff; background: linear-gradient(135deg, #2563eb, #db2777 72%, #f59e0b); font-weight: 1000; cursor: pointer; box-shadow: 0 22px 70px rgba(37,99,235,.3); }
        button:disabled { cursor: not-allowed; opacity: .55; }
        .switchMode { margin-top: 1rem; width: 100%; color: #dbeafe; border: 1px solid rgba(147,197,253,.28); background: rgba(255,255,255,.05); box-shadow: none; }
        .status { margin-bottom: 0; }
      `}</style>
    </main>
  );
}
