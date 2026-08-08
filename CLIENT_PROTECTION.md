# Client data protection

## Target setup

- Frontend: Next.js on Vercel
- App: Ava Skye command center for DigiMark101
- Backend: Supabase Postgres, Auth, and REST API
- Server boundary: Vercel API routes
- Public routes: landing page, campaign reads, checkout intake
- Protected routes: Ava Skye dashboard, AI chat, founder lead sales, orders

## Rules

1. Public React pages never import server-only env vars.
2. Ava Skye protected actions go through authenticated Vercel API routes.
3. Lead and checkout writes are validated before Supabase insert.
4. Supabase RLS stays enabled on every production table.
5. Privileged reads/writes use service keys only inside Vercel functions.
6. Voice and AI secrets stay in Vercel environment variables.

## Data model

The schema now covers:

- `leads`
- `campaigns`
- `profiles`
- `subscriptions`
- `checkout_requests`
- `orders`
- `order_items`
- `lead_sale_requests`

Add future Ava Skye tables with these defaults:

- `created_at timestamptz default now()`
- RLS enabled immediately
- anon role denied by default
- explicit policies only for public marketing reads
