# Digi-Front-end

A Vercel-first Next.js frontend with Supabase as the backend.

## Architecture

- **Vercel Frontend**: Next.js Pages Router deployed from GitHub through Vercel.
- **Vercel API Routes**: `/api/*` routes handle backend requests without exposing private credentials.
- **Supabase Backend**: Postgres tables, REST API, Auth-ready keys, and optional direct Postgres access.
- **Credential Boundary**: Browser code only uses public Supabase values. Server-only keys stay in Vercel environment variables.

The Supabase Vercel Marketplace integration injects variables such as `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `POSTGRES_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Vercel's Supabase Marketplace docs list those variables and describe automatic project env sync: https://vercel.com/marketplace/supabase

## App routes

- `/` — Vercel/Supabase landing page with lead capture
- `/dashboard` — operations dashboard reading through Vercel API routes
- `/api/health` — verifies Vercel can reach Supabase
- `/api/leads` — creates and lists leads through Supabase
- `/api/campaigns` — reads campaigns from Supabase, with safe fallback content until the table exists

## Supabase schema

Run `supabase/schema.sql` in the Supabase SQL Editor for the connected project. It creates:

- `public.leads`
- `public.campaigns`
- row-level security policies for public campaign reads and protected lead data

## Environment variables

Set these in Vercel Project Settings → Environment Variables, or connect the Supabase Marketplace resource so Vercel syncs them automatically.

Public browser-safe values:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Server-only values:

```env
SUPABASE_URL=...
SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_SECRET_KEY=...
POSTGRES_URL=...
POSTGRES_PASSWORD=...
```

Never expose service role, secret, Postgres URL, or password values in React pages/components.

## Local development

```bash
npm install
npm run dev
```

Create `.env.local` with the public and server-side Supabase values for local testing.

## Deployment

Push to GitHub. Vercel builds with:

```bash
npm run build
```

After deployment, open `/api/health` to verify the Vercel runtime can reach Supabase.
