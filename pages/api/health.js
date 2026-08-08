import { getSupabaseReadiness } from '../../lib/env';
import { ok, fail, allowMethods } from '../../lib/api/respond';
import { supabaseRequest } from '../../lib/supabase/rest';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['GET'])) return;

  const readiness = getSupabaseReadiness();

  if (!readiness.readyForPublicReads) {
    fail(res, 503, 'Supabase is not configured for public reads.', { readiness });
    return;
  }

  try {
    await supabaseRequest('/rest/v1/');
    ok(res, {
      service: 'digimark-vercel-supabase',
      frontend: 'vercel',
      backend: 'supabase',
      status: 'connected',
      readiness
    });
  } catch (error) {
    fail(res, error.status || 503, error.message, { readiness });
  }
}
