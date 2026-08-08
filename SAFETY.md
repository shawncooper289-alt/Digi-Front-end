# Vercel and Supabase migration safety notes

This app is now structured as a Vercel frontend with a Supabase backend.

## What changed

- Removed legacy backend-specific runtime assumptions from the frontend.
- Added a Vercel API route at `/api/hello` for server-side Supabase connectivity checks.
- Removed legacy `vercel.json` secret aliases for the previous backend.
- Kept private Supabase credentials on the server side only.

## What must stay protected

Never expose these values to browser code:

- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_SECRET_KEY`
- `POSTGRES_URL`
- `POSTGRES_PASSWORD`
- `SUPABASE_JWT_SECRET`

Browser code may only use publishable values such as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` when client-side Supabase access is required.

## Deployment checklist

- Confirm Supabase Marketplace environment variables exist in the target Vercel project.
- Deploy through Vercel from the connected GitHub repository.
- Open `/api/hello` after deployment to confirm the Vercel runtime can reach Supabase.
- Add real Supabase tables and row-level security policies before enabling production writes.
