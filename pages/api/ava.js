import { generateText } from 'ai';

const SYSTEM_PROMPT = `You are Ava Skye, DigiMark101's AI Chief of Staff. You help entrepreneurs plan marketing campaigns, funnels, content, email sequences, client acquisition, and automation. Keep responses concise, practical, premium, and action-oriented. Ask one focused follow-up only when needed.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body || {};
    const cleanMessage = String(message || '').trim().slice(0, 2000);

    if (!cleanMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const { text } = await generateText({
      model: 'openai/gpt-5.5',
      system: SYSTEM_PROMPT,
      prompt: cleanMessage,
      providerOptions: {
        gateway: {
          models: ['anthropic/claude-opus-4.8', 'google/gemini-3.1-pro-preview'],
          caching: 'auto',
          sort: 'throughput',
        },
      },
    });

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error('Ava AI Gateway error:', error);
    return res.status(500).json({
      error: 'Ava is warming up. Make sure AI Gateway access is enabled for this Vercel project.',
    });
  }
}
