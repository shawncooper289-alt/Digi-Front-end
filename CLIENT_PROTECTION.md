# Client data protection

## Target setup

- Frontend: Next.js on Vercel
- Backend: Supabase Postgres and REST API
- Server boundary: Vercel API routes
- Public routes: landing page, campaign reads
- Protected data: leads and future client records

## Rules

1. Public React pages never import server-only env vars.
2. Lead writes go through `/api/leads`.
3. Dashboard reads go through `/api/leads` and `/api/campaigns`.
4. Supabase RLS stays enabled on every production table.
5. Privileged writes use server-side Supabase keys only inside Vercel functions.

## Data model

The included schema creates `leads` and `campaigns`. Add future tables with these defaults:

- `created_at timestamptz default now()`
- RLS enabled immediately
- anon role denied by default
- explicit policies only for public marketing reads
