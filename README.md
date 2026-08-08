# Digi-Front-end

Next.js frontend deployed on Vercel with Supabase as the backend.

## Stack

- Vercel: frontend hosting, serverless API routes, production deployments
- Next.js: Pages Router application
- Supabase: Postgres, Auth, REST API, and server-side backend access

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Set these in Vercel Project Settings → Environment Variables:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` or `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` for privileged server-only API routes
- `POSTGRES_URL` if direct SQL access is needed from server-side code
- `NEXT_PUBLIC_SUPABASE_URL` only when browser-side Supabase access is required
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` only when browser-side Supabase access is required

Do not expose `SUPABASE_SERVICE_ROLE_KEY`, `POSTGRES_URL`, or `POSTGRES_PASSWORD` to browser code.

## Backend flow

Browser requests call Vercel API routes under `/api/*`. Those routes read Supabase environment variables server-side and call Supabase without exposing private credentials to the client.

Current health route:

```bash
GET /api/hello
POST /api/hello
```

It verifies that the Vercel runtime can reach the configured Supabase REST endpoint.

## Deployment

The linked Vercel projects already have Supabase Marketplace environment variables configured. Pushes to `main` deploy through Vercel.
