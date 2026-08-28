import { useState } from 'react';
import { supabaseBrowser } from '../lib/supabase-browser';

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [authStatus, setAuthStatus] = useState('');

  async function sendMessage(event) {
    event.preventDefault();
    const text = message.trim();
    if (!text || loading) return;
    const { data: { session } } = await supabaseBrowser.auth.getSession();
    if (!session) { setStatus('Sign in with your email before messaging Ava.'); return; }
    setMessages((current) => [...current, { role: 'You', text }]);
    setMessage('');
    setLoading(true);
    setStatus('');
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to reach Ava.');
      setMessages((current) => [...current, { role: `Ava · ${data.stage}`, text: data.reply }]);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function sendMagicLink(event) {
    event.preventDefault();
    const { error } = await supabaseBrowser.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin } });
    setAuthStatus(error ? error.message : 'Check your email for a secure sign-in link.');
  }

  return <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#070b19,#18213c)', color: '#f8fafc', fontFamily: 'system-ui,sans-serif', padding: '48px 20px' }}>
    <section style={{ maxWidth: 760, margin: '0 auto' }}>
      <p style={{ color: '#93c5fd', fontWeight: 700, letterSpacing: 1 }}>DIGIMARK101</p>
      <h1 style={{ fontSize: 'clamp(2.2rem,6vw,4rem)', margin: '0 0 12px' }}>Ava Skye</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>Your stage-gated marketing mentor. Ava uses your client record and approved playbooks to keep every next step focused.</p>
      <form onSubmit={sendMagicLink} style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="you@company.com" aria-label="Email address" style={{ flex: 1, minWidth: 0, padding: '12px 14px', borderRadius: 10, border: '1px solid #475569', background: '#0f172a', color: '#fff' }} />
        <button type="submit" style={{ padding: '12px 16px', border: 0, borderRadius: 10, background: '#2563eb', color: '#fff', fontWeight: 700 }}>Sign in</button>
      </form>
      {authStatus && <p style={{ color: '#cbd5e1' }}>{authStatus}</p>}
      <div style={{ marginTop: 28, minHeight: 260, padding: 20, borderRadius: 16, background: 'rgba(15,23,42,.72)', border: '1px solid #334155' }}>
        {messages.length === 0 && <p style={{ color: '#94a3b8' }}>Sign in, then tell Ava where you are in your business. She will diagnose the current stage before recommending one next action.</p>}
        {messages.map((item, index) => <article key={index} style={{ marginBottom: 18 }}><strong style={{ color: item.role.startsWith('Ava') ? '#f9a8d4' : '#93c5fd' }}>{item.role}</strong><p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.55, margin: '6px 0 0' }}>{item.text}</p></article>)}
        {loading && <p style={{ color: '#cbd5e1' }}>Ava is preparing your next step…</p>}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        <input value={message} onChange={(event) => setMessage(event.target.value)} maxLength={4000} placeholder="Tell Ava your current business goal" aria-label="Message Ava" style={{ flex: 1, minWidth: 0, padding: '14px 16px', borderRadius: 10, border: '1px solid #475569', background: '#0f172a', color: '#fff' }} />
        <button disabled={loading} type="submit" style={{ padding: '14px 20px', border: 0, borderRadius: 10, background: '#ec4899', color: '#fff', fontWeight: 700, cursor: loading ? 'wait' : 'pointer' }}>Send</button>
      </form>
      {status && <p role="alert" style={{ color: '#fda4af' }}>{status}</p>}
    </section>
  </main>;
}
