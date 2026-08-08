# Vercel + Supabase safety model

## Runtime boundary

This app uses Vercel API routes as the backend boundary. Browser requests go to `/api/*`; API routes call Supabase using environment variables available only on the server.

## Secret handling

Never send these values to the browser or include them in `NEXT_PUBLIC_*` variables:

- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_SECRET_KEY`
- `POSTGRES_URL`
- `POSTGRES_PASSWORD`
- `SUPABASE_JWT_SECRET`

Browser-safe keys are limited to publishable or anon keys and must be paired with Supabase row-level security.

## Supabase row-level security

Run `supabase/schema.sql` before production use. It enables RLS and keeps lead reads private from the public anon role. Campaigns are publicly readable because they power marketing content.

## Production checklist

1. Confirm Vercel has Supabase env vars for Production and Preview.
2. Run `supabase/schema.sql` in the connected Supabase project.
3. Deploy from GitHub through Vercel.
4. Verify `/api/health` returns `ok: true`.
5. Submit a test lead from `/`.
6. Confirm `/dashboard` reads the lead through the Vercel API route.
