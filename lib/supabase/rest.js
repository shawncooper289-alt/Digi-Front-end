import { getServerSupabaseConfig } from '../env';

function getBaseUrl() {
  const { url } = getServerSupabaseConfig();
  return url.replace(/\/$/, '');
}

function getKey({ privileged = false } = {}) {
  const { publishableKey, serviceRoleKey } = getServerSupabaseConfig();
  return privileged && serviceRoleKey ? serviceRoleKey : publishableKey;
}

export function hasSupabaseConnection({ privileged = false } = {}) {
  return Boolean(getBaseUrl() && getKey({ privileged }));
}

export async function supabaseRequest(path, options = {}) {
  const { privileged = false, headers = {}, ...fetchOptions } = options;
  const baseUrl = getBaseUrl();
  const key = getKey({ privileged });

  if (!baseUrl || !key) {
    const error = new Error('Supabase environment variables are not configured.');
    error.status = 503;
    throw error;
  }

  const response = await fetch(`${baseUrl}${path}`, {
    ...fetchOptions,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...headers
    }
  });

  const text = await response.text();
  let data = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
  }

  if (!response.ok) {
    const error = new Error(data?.message || data?.hint || `Supabase returned HTTP ${response.status}.`);
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
}

export function listRows(table, { select = '*', limit = 25, order = 'created_at.desc', privileged = false } = {}) {
  const params = new URLSearchParams({ select, limit: String(limit) });

  if (order) {
    params.set('order', order);
  }

  return supabaseRequest(`/rest/v1/${table}?${params.toString()}`, { privileged });
}

export function insertRow(table, row) {
  return supabaseRequest(`/rest/v1/${table}`, {
    method: 'POST',
    body: JSON.stringify(row),
    privileged: true
  });
}
