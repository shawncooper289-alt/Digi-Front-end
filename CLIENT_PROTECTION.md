# Client protection model

## Current target architecture

- Frontend: Next.js on Vercel
- Backend: Supabase
- Server boundary: Vercel API routes under `/api/*`
- Database: Supabase Postgres

## Credential rules

Public browser variables:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
```

Server-only variables:

```env
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_SECRET_KEY=...
POSTGRES_URL=...
POSTGRES_PASSWORD=...
```

Do not import server-only values into React pages or components. Use Vercel API routes for privileged Supabase reads and writes.

## Recommended Supabase controls

1. Enable row-level security on production tables.
2. Use the anon or publishable key for browser-safe reads only.
3. Use the service role key only inside Vercel API routes.
4. Validate request payloads in API routes before writing to Supabase.
5. Add per-client ownership columns and RLS policies before storing customer data.

## Verification

- Home page loads from Vercel.
- `/api/hello` returns a Supabase connectivity status.
- No service role, database URL, or password is present in browser bundles.
