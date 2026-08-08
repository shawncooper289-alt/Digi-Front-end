import { allowMethods, fail, ok } from '../../lib/api/respond';
import { validateLead } from '../../lib/api/validation';
import { insertRow, listRows } from '../../lib/supabase/rest';

export default async function handler(req, res) {
  if (!allowMethods(req, res, ['GET', 'POST'])) return;

  try {
    if (req.method === 'GET') {
      const leads = await listRows('leads', {
        select: 'id,name,email,company,message,source,created_at',
        limit: 20,
        privileged: true
      });
      ok(res, { leads });
      return;
    }

    const validation = validateLead(req.body);

    if (!validation.valid) {
      fail(res, 400, validation.error);
      return;
    }

    const [lead] = await insertRow('leads', validation.lead);
    ok(res, { lead }, 201);
  } catch (error) {
    fail(res, error.status || 500, error.message, error.details);
  }
}
