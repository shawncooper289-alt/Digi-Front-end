export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      endpoint: '/api/vercel-webhook',
      message: 'DigiMark101 Vercel webhook endpoint is live. Send POST requests here from Vercel Webhooks.',
      accepts: ['POST'],
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed. Use GET for status or POST for webhook delivery.' });
  }

  const eventType = req.body?.type || req.headers['x-vercel-event'] || 'unknown';
  const deliveryId = req.body?.id || req.headers['x-vercel-id'] || null;

  console.log('Vercel webhook received', {
    eventType,
    deliveryId,
    createdAt: req.body?.createdAt || null,
    deploymentId: req.body?.payload?.deployment?.id || null,
    projectName: req.body?.payload?.deployment?.name || req.body?.payload?.project?.name || null,
  });

  return res.status(200).json({
    ok: true,
    received: true,
    eventType,
    deliveryId,
  });
}
