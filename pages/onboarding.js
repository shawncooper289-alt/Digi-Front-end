import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient, hasSupabaseConfig } from '../lib/supabaseClient';

const steps = [
  { key: 'foundation', title: 'Build your foundation', prompt: 'What do you sell, who is your ideal customer, and what transformation do you provide?', helper: 'Give Ava the offer, audience, location or market, and the result you help customers achieve.' },
  { key: 'presence', title: 'Establish your presence', prompt: 'Which channels are already live, and which should launch first?', helper: 'List your website, Google Business Profile, Instagram, Facebook, LinkedIn, YouTube, and WhatsApp status. Never share passwords.' },
  { key: 'offer', title: 'Shape the first offer', prompt: 'What is the first product or service you want to sell, and what should it cost?', helper: 'Describe the offer, price range, proof, urgency, and the action a prospect should take.' },
  { key: 'funnel', title: 'Create the sales path', prompt: 'Where should qualified prospects go next?', helper: 'Choose a booking link, checkout, lead magnet, or direct-message flow. Ava will turn this into a focused funnel brief.' },
  { key: 'campaign', title: 'Plan the first campaign', prompt: 'What is your launch date, budget, and weekly content capacity?', helper: 'Set a realistic first campaign. Start with one audience, one offer, one destination, and one channel.' },
  { key: 'first_sale', title: 'Launch toward the first sale', prompt: 'Review your launch plan and commit to the first measurable action.', helper: 'Confirm the offer, destination, channel, and follow-up plan. Ava will mark the workflow ready for launch.' },
];

const emptyMilestones = Object.fromEntries(steps.map((step) => [step.key, false]));

export default function Onboarding() {
  const supabase = useMemo(() => createSupabaseClient(), []);
  const [access, setAccess] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [milestones, setMilestones] = useState(emptyMilestones);
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState('Opening your Ava-guided launch plan...');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!hasSupabaseConfig || !supabase) {
        setStatus('Supabase is not configured yet.');
        setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) { window.location.href = '/login'; return; }
      const headers = { Authorization: `Bearer ${token}` };
      const [accessResponse, onboardingResponse] = await Promise.all([
        fetch('/api/access', { headers }),
        fetch('/api/onboarding', { headers }),
      ]);
      const accessData = await accessResponse.json().catch(() => ({}));
      const onboardingData = await onboardingResponse.json().catch(() => ({}));
      if (!active) return;
      if (!accessResponse.ok || !accessData.allowed) { window.location.href = '/login'; return; }
      if (accessData.role === 'founder') { window.location.href = '/dashboard'; return; }
      setAccess(accessData);
      const record = onboardingData.onboarding;
      if (record) {
        setCurrentStep(record.current_step || 0);
        setAnswers(record.answers || {});
        setMilestones({ ...emptyMilestones, ...(record.milestones || {}) });
        setDraft(record.answers?.[steps[record.current_step || 0]?.key] || '');
        setStatus(record.status === 'launched' ? 'Your first-sales launch plan is active.' : 'Ava saved your progress. Continue with the next focused action.');
      } else {
        setStatus('Ava will guide you from business setup to your first sale, one focused step at a time.');
      }
      setLoading(false);
    }
    load();
    return () => { active = false; };
  }, [supabase]);

  async function saveStep(nextStep = currentStep, nextMilestones = milestones) {
    const step = steps[currentStep];
    const nextAnswers = { ...answers, [step.key]: draft.trim() };
    const completed = { ...nextMilestones, [step.key]: Boolean(draft.trim()) };
    const isComplete = Object.values(completed).every(Boolean);
    setSaving(true);
    const { data } = await supabase.auth.getSession();
    const response = await fetch('/api/onboarding', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.session?.access_token}` },
      body: JSON.stringify({ currentStep: nextStep, answers: nextAnswers, milestones: completed, status: isComplete ? 'ready_for_launch' : 'in_progress' }),
    });
    const result = await response.json().catch(() => ({}));
    setSaving(false);
    if (!response.ok) { setStatus(result.error || 'Ava could not save this step.'); return false; }
    setAnswers(nextAnswers);
    setMilestones(completed);
    return true;
  }

  async function continueWorkflow() {
    if (!draft.trim()) { setStatus('Answer this focused question before moving forward.'); return; }
    const next = Math.min(currentStep + 1, steps.length - 1);
    if (await saveStep(next)) {
      setCurrentStep(next);
      setDraft(answers[steps[next].key] || '');
      setStatus(next === steps.length - 1 ? 'Final step: confirm the first action that will create your first sale.' : `Great. Ava saved that. Next: ${steps[next].title}.`);
    }
  }

  async function completeLaunch() {
    if (!draft.trim()) { setStatus('Confirm your first measurable action before launching.'); return; }
    if (await saveStep(currentStep)) setStatus('Launch plan ready. Complete the listed actions and record your first sale in the Founder Hub.');
  }

  if (loading) return <main className="shell"><p>{status}</p><style jsx>{`.shell { min-height:100vh; display:grid; place-items:center; background:#020617; color:#fff; font:600 1rem system-ui; }`}</style></main>;
  const step = steps[currentStep];
  const completeCount = Object.values(milestones).filter(Boolean).length;

  return (
    <main className="shell">
      <header><a href="/">DigiMark101</a><div><strong>Ava-guided launch plan</strong><span>{access?.email}</span></div></header>
      <section className="grid">
        <aside>
          <p className="eyebrow">Your path to first sales</p><h1>Build the next right thing.</h1>
          <p>Ava keeps your first launch focused: one audience, one offer, one destination, one channel.</p>
          <div className="progress"><strong>{completeCount} of {steps.length} milestones complete</strong><div><span style={{ width: `${(completeCount / steps.length) * 100}%` }} /></div></div>
          <ol>{steps.map((item, index) => <li className={index === currentStep ? 'active' : milestones[item.key] ? 'done' : ''} key={item.key}><span>{milestones[item.key] ? '✓' : index + 1}</span>{item.title}</li>)}</ol>
        </aside>
        <section className="card">
          <p className="eyebrow">Ava Skye · step {currentStep + 1}</p><h2>{step.title}</h2><p className="prompt">{step.prompt}</p><p className="helper">{step.helper}</p>
          <label htmlFor="answer">Your answer</label>
          <textarea id="answer" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Be specific. Ava saves this as your launch brief." rows={8} />
          <div className="actions"><button type="button" className="secondary" onClick={() => saveStep()} disabled={saving}>Save progress</button>{currentStep === steps.length - 1 ? <button type="button" onClick={completeLaunch} disabled={saving}>{saving ? 'Saving...' : 'Mark launch plan ready'}</button> : <button type="button" onClick={continueWorkflow} disabled={saving}>{saving ? 'Saving...' : 'Save and continue'}</button>}</div>
          <p className="status">{status}</p>
          <div className="safety"><strong>Connection rule:</strong> connect social accounts through each provider’s OAuth or account-connection flow. Ava never requests passwords.</div>
        </section>
      </section>
      <style jsx>{`
        .shell { min-height:100vh; padding:1.5rem; color:#f8fafc; background:radial-gradient(circle at 10% 8%,rgba(37,99,235,.28),transparent 28rem),radial-gradient(circle at 88% 82%,rgba(219,39,119,.2),transparent 28rem),#020617; font-family:Inter,system-ui,sans-serif; } header { max-width:1180px; margin:0 auto 2rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; } header a { color:#fff; font-weight:1000; text-decoration:none; font-size:1.2rem; } header div { display:grid; gap:.2rem; text-align:right; } header span { color:rgba(226,232,240,.65); font-size:.85rem; }.grid { width:min(1180px,100%); margin:0 auto; display:grid; grid-template-columns:.8fr 1.2fr; gap:1.25rem; }.eyebrow { color:#93c5fd; font-size:.72rem; font-weight:1000; letter-spacing:.15em; text-transform:uppercase; } aside,.card { border:1px solid rgba(148,163,184,.2); border-radius:1.5rem; background:rgba(15,23,42,.75); padding:clamp(1.25rem,4vw,2rem); box-shadow:0 28px 90px rgba(2,6,23,.4); }h1,h2 { margin:.5rem 0 1rem; line-height:.96; letter-spacing:-.06em; }h1 { font-size:clamp(2.5rem,5vw,4.8rem); }h2 { font-size:clamp(2rem,4vw,3.5rem); }p { color:rgba(226,232,240,.78); line-height:1.65; }.progress { margin:2rem 0; }.progress strong { font-size:.85rem; }.progress div { height:.55rem; margin-top:.6rem; overflow:hidden; border-radius:999px; background:rgba(148,163,184,.2); }.progress span { display:block; height:100%; border-radius:inherit; background:linear-gradient(90deg,#2563eb,#db2777); transition:width .3s; }ol { display:grid; gap:.65rem; padding:0; list-style:none; }li { display:flex; align-items:center; gap:.75rem; padding:.75rem; color:rgba(226,232,240,.65); border-radius:.9rem; font-weight:800;}li span { width:28px;height:28px;display:grid;place-items:center;border-radius:999px;background:rgba(255,255,255,.08);font-size:.8rem;}li.active { color:#fff; background:rgba(37,99,235,.18); }li.done span { color:#052e16;background:#86efac; }.prompt { color:#fff; font-size:1.18rem; font-weight:800; }.helper { font-size:.92rem; }label { display:block; margin:1.5rem 0 .5rem; font-weight:900; }textarea { width:100%; box-sizing:border-box; resize:vertical; padding:1rem; border:1px solid rgba(147,197,253,.28); border-radius:1rem; background:rgba(2,6,23,.62); color:#fff; font:inherit; }textarea:focus { outline:none;border-color:#60a5fa;box-shadow:0 0 0 3px rgba(59,130,246,.16);}.actions { display:flex; flex-wrap:wrap; gap:.75rem; margin-top:1rem;}button { border:0;border-radius:999px;padding:.95rem 1.2rem;color:#fff;background:linear-gradient(135deg,#2563eb,#db2777);font-weight:1000;cursor:pointer;}button:disabled { opacity:.6;cursor:not-allowed;}.secondary { background:rgba(255,255,255,.07);border:1px solid rgba(147,197,253,.3);}.status { min-height:2rem; }.safety { margin-top:1rem;padding:1rem;border-radius:1rem;border:1px solid rgba(134,239,172,.24);background:rgba(22,101,52,.12);color:#dcfce7;line-height:1.55;font-size:.9rem;} @media (max-width:820px) {.grid{grid-template-columns:1fr}header{align-items:flex-start;flex-direction:column}header div{text-align:left}}
      `}</style>
    </main>
  );
}
