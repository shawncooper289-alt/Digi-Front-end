import { FOUNDER_SESSION_COOKIE, verifyFounderSession } from '../lib/auth';

export default function Dashboard({ email }) {
  async function logout() {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login';
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.eyebrow}>Founder Dashboard</p>
        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.copy}>Logged in as {email}. Your DigiMark101 dashboard is protected by your founder login.</p>
        <button onClick={logout} style={styles.button}>Logout</button>
      </section>
    </main>
  );
}

export function getServerSideProps({ req }) {
  const cookieHeader = req.headers.cookie || '';
  const cookies = Object.fromEntries(
    cookieHeader
      .split(';')
      .map((cookie) => cookie.trim().split('='))
      .filter(([key, value]) => key && value)
  );

  const session = verifyFounderSession(cookies[FOUNDER_SESSION_COOKIE]);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { email: session.email } };
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
    maxWidth: '620px',
    padding: '2rem',
    borderRadius: '1rem',
    background: 'rgba(15, 23, 42, 0.82)',
    border: '1px solid rgba(148, 163, 184, 0.28)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  eyebrow: { margin: 0, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' },
  title: { margin: '0.5rem 0', fontSize: '2.25rem' },
  copy: { margin: '0 0 1.5rem', color: '#cbd5e1', lineHeight: 1.6 },
  button: {
    padding: '0.9rem 1.5rem',
    borderRadius: '999px',
    border: '1px solid rgba(148, 163, 184, 0.4)',
    cursor: 'pointer',
    background: 'transparent',
    color: '#f9fafb',
    fontWeight: 800,
    fontSize: '1rem',
  },
};
