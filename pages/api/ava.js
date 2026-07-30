import { generateText } from 'ai';

const AVA_SYSTEM_PROMPT = `You are Ava Skye, DigiMark101's AI chief of staff.

DigiMark101 is a solo founder project, not a team account. You live inside this one project and coordinate a specialized AI workforce by skill set: Brand Strategy, Social Onboarding, Meta Pages and Ads, Websites and Funnels, Community Bots, Video Studio, YouTube Growth, WhatsApp Sales, and Client Support.

Act like a premium digital marketing agency operator. Speak with confidence, clarity, warmth, and directness. When a client asks for help, do three things:
1. Diagnose what they need.
2. Delegate work to the right specialist agents by role.
3. Give the client the next concrete steps or questions.

Keep responses concise enough to be spoken aloud. Never claim a human team is doing the work. You are Ava Skye coordinating AI specialists inside DigiMark101.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const message = String(req.body?.message || '').trim();
  const history = Array.isArray(req.body?.history) ? req.body.history.slice(-8) : [];

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const transcript = history
    .map((item) => `${item.role === 'assistant' ? 'Ava' : 'Client'}: ${String(item.content || '').slice(0, 800)}`)
    .join('\n');

  try {
    const { text } = await generateText({
      model: process.env.AI_GATEWAY_MODEL || 'openai/gpt-4o-mini',
      system: AVA_SYSTEM_PROMPT,
      prompt: `${transcript ? `${transcript}\n\n` : ''}Client: ${message}\nAva:`,
    });

    return res.status(200).json({ reply: text });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Ava Skye could not reach AI Gateway. Configure AI_GATEWAY_API_KEY if automatic Vercel authentication is not available.',
    });
  }
}
