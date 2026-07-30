import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

export default function Login() {
  const supabase = useMemo(() => createSupabaseClient(), []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signin');
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
    setStatus(mode === 'signin' ? 'Signing you in...' : 'Creating your account...');

    const result = mode === 'signin'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (result.error) {
      setStatus(result.error.message);
      return;
    }

    if (mode === 'signup') {
      setStatus('Account created. Add this user to profiles.role = founder or subscriptions.plan = premium, then sign in.');
      return;
    }

    window.location.href = '/dashboard';
  }

  return (
    <main className="loginPage">
      <section className="loginCard">
        <Link className="brand" href="/">
          <Image src="/digimark101-logo.svg" alt="DigiMark101 logo" width={48} height={48} priority />
          <span>DigiMark101</span>
        </Link>
        <p className="eyebrow">Founder access</p>
        <h1>Enter the DigiMark101 backend.</h1>
        <p className="intro">Ava Skye opens the private command center for founder and premium accounts only.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} minLength={6} />
          </label>
          <button type="submit" disabled={loading || !hasSupabaseConfig()}>
            {loading ? 'Working...' : mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <button className="switchMode" type="button" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
          {mode === 'signin' ? 'Need to create the founder account?' : 'Already have the founder account?'}
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
