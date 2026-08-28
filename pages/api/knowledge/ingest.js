import { chunkText, embed, pinecone, requireServerEnv } from '../../../lib/ava';

const STAGES = new Set(['all', 'Absolute Beginner', 'Niche Selection & Validation', 'Offer + First Website/Funnel', 'Traffic Generation', 'First Sales / Conversion', 'Scaling & Growth', 'Maintenance & Optimization']);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.AVA_INGESTION_SECRET || req.headers.authorization !== `Bearer ${process.env.AVA_INGESTION_SECRET}`) return res.status(401).json({ error: 'Unauthorized' });
  try {
    requireServerEnv();
    const { title, content, stage = 'all', source = 'admin' } = req.body || {};
    if (typeof title !== 'string' || !title.trim() || typeof content !== 'string' || !content.trim() || content.length > 100000 || !STAGES.has(stage)) {
      return res.status(400).json({ error: 'Provide a valid title, stage, and up to 100,000 characters of content.' });
    }
    const chunks = chunkText(content);
    const vectors = [];
    for (let start = 0; start < chunks.length; start += 10) {
      const batch = await Promise.all(chunks.slice(start, start + 10).map(async (text, index) => ({
        id: crypto.randomUUID(),
        values: await embed(text),
        metadata: { text, title: title.trim().slice(0, 200), stage, source: String(source).slice(0, 500), chunk: start + index },
      })));
      vectors.push(...batch);
    }
    await pinecone('/vectors/upsert', { method: 'POST', body: JSON.stringify({ namespace: 'ava-knowledge', vectors }) });
    res.status(201).json({ ingested: vectors.length, title: title.trim(), stage });
  } catch (error) {
    console.error('Knowledge ingestion error', error);
    res.status(500).json({ error: 'Knowledge ingestion failed.' });
  }
}
