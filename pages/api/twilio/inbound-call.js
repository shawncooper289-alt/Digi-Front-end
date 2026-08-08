import { escapeXml, getAvaVoiceName, getBaseUrl, twimlResponse } from '../../../lib/avaVoice';

export default function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('Method not allowed');
    return;
  }

  const baseUrl = getBaseUrl(req);
  const voice = getAvaVoiceName();
  const greeting = 'Hi, this is Ava Skye with DigiMark101. I can help with pricing, marketing systems, checkout, and lead packages. How can I help you today?';

  const xml = twimlResponse(`
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Gather input="speech" action="${escapeXml(baseUrl)}/api/twilio/handle-speech" method="POST" speechTimeout="auto" timeout="6">
        <Say voice="${escapeXml(voice)}" language="en-US">${escapeXml(greeting)}</Say>
      </Gather>
      <Say voice="${escapeXml(voice)}" language="en-US">I did not hear anything. Please call back when you are ready, or visit DigiMark101 dot com.</Say>
    </Response>
  `);

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(xml);
}
