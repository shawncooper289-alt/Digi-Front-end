import { allowMethods, fail, ok } from '../../lib/api/respond';
import { listRows } from '../../lib/supabase/rest';

const fallbackCampaigns = [
  {
    id: 'fallback-1',
    name: 'Supabase launch funnel',
    status: 'ready',
    channel: 'web',
    description: 'Capture and qualify new leads through the Vercel frontend.'
  },
  {
    id: 'fallback-2',
    name: 'Client onboarding',
    status: 'draft',
    channel: 'email',
    description: 'Move qualified contacts into the Supabase-backed CRM workflow.'
  }
];

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['GET'])) return;

  try {
    const campaigns = await listRows('campaigns', {
      select: 'id,name,status,channel,description,created_at',
      limit: 20
    });
    ok(res, { campaigns, source: 'supabase' });
  } catch (error) {
    ok(res, {
      campaigns: fallbackCampaigns,
      source: 'fallback',
      warning: 'Create the Supabase campaigns table to serve live campaign data.'
    });
  }
}
