import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setMessage('Invalid founder login.');
        return;
      }

      router.push('/dashboard');
    } catch {
      setMessage('Unable to log in right now.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.eyebrow}>Founder Access</p>
        <h1 style={styles.title}>Log in to DigiMark101</h1>
        <p style={styles.copy}>Use your configured founder backend account to access the dashboard.</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              style={styles.input}
            />
          </label>

          {message ? <p style={styles.error}>{message}</p> : null}

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #050816 0%, #0f1419 50%, #1a1f2e 100%)',
    color: '#f9fafb',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '440px',
    padding: '2rem',
    borderRadius: '1rem',
    background: 'rgba(15, 23, 42, 0.82)',
    border: '1px solid rgba(148, 163, 184, 0.28)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  eyebrow: { margin: 0, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' },
  title: { margin: '0.5rem 0', fontSize: '2rem' },
  copy: { margin: '0 0 1.5rem', color: '#cbd5e1', lineHeight: 1.6 },
  form: { display: 'grid', gap: '1rem' },
  label: { display: 'grid', gap: '0.5rem', color: '#e2e8f0', fontWeight: 700, textAlign: 'left' },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '0.75rem',
    border: '1px solid rgba(148, 163, 184, 0.35)',
    background: 'rgba(15, 23, 42, 0.85)',
    color: '#f9fafb',
    padding: '0.9rem 1rem',
    fontSize: '1rem',
  },
  button: {
    marginTop: '0.5rem',
    padding: '1rem 1.25rem',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #3b82f6, #ec4899)',
    color: '#f9fafb',
    fontWeight: 800,
    fontSize: '1rem',
  },
  error: { margin: 0, color: '#fca5a5', fontWeight: 700 },
};
