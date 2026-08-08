import { generateText } from 'ai';
import { AVA_VOICE_PROMPT, escapeXml, getAvaVoiceName, getBaseUrl, twimlResponse } from '../../../lib/avaVoice';

function parseBody(req) {
  if (typeof req.body === 'string') {
    return Object.fromEntries(new URLSearchParams(req.body));
  }

  return req.body || {};
}

async function generateAvaReply(spokenText) {
  if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
    return 'Thanks for calling DigiMark101. I can help with marketing systems, pricing, checkout, and premium opt-in leads. Please leave your name, business, and the best next step you want.';
  }

  const { text } = await generateText({
    model: process.env.AVA_VOICE_MODEL || 'openai/gpt-4o-mini',
    system: AVA_VOICE_PROMPT,
    prompt: `Caller said: ${spokenText || 'No speech detected.'}`,
  });

  return text;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).send('Method not allowed');
    return;
  }

  const body = parseBody(req);
  const spokenText = String(body.SpeechResult || '').slice(0, 1000);
  const baseUrl = getBaseUrl(req);
  const voice = getAvaVoiceName();

  let reply;

  try {
    reply = await generateAvaReply(spokenText);
  } catch (error) {
    console.error('Ava voice response error:', error);
    reply = 'Ava is having trouble thinking through that right now. Please share your name, business, and what you need help selling.';
  }

  const xml = twimlResponse(`
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Gather input="speech" action="${escapeXml(baseUrl)}/api/twilio/handle-speech" method="POST" speechTimeout="auto" timeout="6">
        <Say voice="${escapeXml(voice)}" language="en-US">${escapeXml(reply)}</Say>
      </Gather>
      <Say voice="${escapeXml(voice)}" language="en-US">Thank you for calling DigiMark101. Visit DigiMark101 dot com to continue, or wait for founder follow-up.</Say>
    </Response>
  `);

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(xml);
}
