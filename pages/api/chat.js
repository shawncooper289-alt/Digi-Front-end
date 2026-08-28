import { ai, embed, getAuthenticatedUser, pinecone, requireServerEnv, supabase } from '../../lib/ava';

const STAGES = [
  'Absolute Beginner', 'Niche Selection & Validation', 'Offer + First Website/Funnel',
  'Traffic Generation', 'First Sales / Conversion', 'Scaling & Growth', 'Maintenance & Optimization',
];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    requireServerEnv();
    const user = await getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'Sign in is required to use Ava.' });
    const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
    if (!message || message.length > 4000) return res.status(400).json({ error: 'Message must be between 1 and 4,000 characters.' });

    const profiles = await supabase(`ava_client_profiles?user_id=eq.${encodeURIComponent(user.id)}&select=stage,profile&limit=1`);
    const client = profiles?.[0] || { stage: STAGES[0], profile: {} };
    const vector = await embed(message);
    const results = await pinecone('/query', {
      method: 'POST',
      body: JSON.stringify({ vector, topK: 5, includeMetadata: true, namespace: 'ava-knowledge', filter: { stage: { $in: [client.stage, 'all'] } } }),
    });
    const knowledge = (results.matches || []).map((match) => match.metadata?.text).filter(Boolean).join('\n\n---\n\n');
    const system = `You are Ava Skye, DigiMark101's stage-gated marketing mentor. Current client stage: ${client.stage}. Client record: ${JSON.stringify(client.profile || {})}. Never skip stages. Diagnose before prescribing. Give exactly one highest-leverage next action, 3-7 numbered steps, and one precise check-in question. Use the knowledge below only when relevant.\n\nKNOWLEDGE:\n${knowledge}`;
    const completion = await ai('/chat/completions', {
      model: process.env.AI_CHAT_MODEL || 'gpt-4o-mini',
      messages: [{ role: 'system', content: system }, { role: 'user', content: message }],
      temperature: 0.35,
    });
    const reply = completion.choices?.[0]?.message?.content;
    if (!reply) throw new Error('AI provider returned no response');

    await supabase('ava_conversations', { method: 'POST', body: JSON.stringify({ user_id: user.id, stage: client.stage, user_message: message, assistant_message: reply }) });
    res.status(200).json({ reply, stage: client.stage });
  } catch (error) {
    console.error('Ava chat error', error);
    res.status(500).json({ error: 'Ava is temporarily unavailable. Please try again.' });
  }
}
