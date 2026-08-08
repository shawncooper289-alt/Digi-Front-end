# Digi-Front-end

A Vercel-first Next.js frontend with Supabase as the backend and Ava Skye integrated as the AI agency app.

## Architecture

- **Vercel Frontend**: Next.js Pages Router deployed from GitHub through Vercel.
- **Ava Skye App**: premium landing page, Supabase login, protected command center, AI chat, checkout, and voice-call routes.
- **Vercel API Routes**: `/api/*` routes handle backend requests without exposing private credentials.
- **Supabase Backend**: Postgres tables, Auth, REST API, profile/subscription access control, checkout records, lead requests, and orders.
- **Credential Boundary**: Browser code only uses public Supabase values. Service-role, AI Gateway, Twilio, and Postgres credentials stay in Vercel environment variables.

The Supabase Vercel Marketplace integration injects variables such as `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `POSTGRES_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Vercel's Supabase Marketplace docs list those variables and describe automatic project env sync: https://vercel.com/marketplace/supabase

## App routes

- `/` — Ava Skye public landing page for DigiMark101
- `/login` — Supabase Auth sign-in/sign-up
- `/dashboard` — protected Ava Skye command center
- `/dashboard-sales` — founder lead-offer backend page
- `/checkout` — package checkout intake
- `/checkout-success` — post-checkout account guidance
- `/api/health` — verifies Vercel can reach Supabase
- `/api/access` — validates founder/premium Supabase access
- `/api/ava` — Ava Skye AI Gateway chat endpoint
- `/api/leads` — creates and lists leads through Supabase
- `/api/campaigns` — reads campaigns from Supabase with safe fallback content
- `/api/checkout` and `/api/orders/create` — checkout/order backend flow
- `/api/twilio/*` — Ava Skye voice-call hooks

## Supabase schema

Run these files in the connected Supabase SQL Editor:

1. `supabase/schema.sql` — base Vercel/Supabase tables plus Ava Skye `profiles` and `subscriptions`
2. `supabase/checkout_requests.sql` — checkout intake table
3. `supabase/orders_and_order_items.sql` — order tables for payment-link flow
4. `supabase/lead_sale_requests.sql` — founder-only premium lead package requests

To unlock the Ava Skye dashboard, create a Supabase Auth user, then set that user's `profiles.role` to `founder` or add a `subscriptions.plan` row with `premium` or `founder`.

## Environment variables

Public browser-safe values:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=...
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
AI_GATEWAY_API_KEY=...
AI_GATEWAY_MODEL=openai/gpt-4o-mini
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_FROM_NUMBER=...
TWILIO_OUTBOUND_ADMIN_SECRET=...
TWILIO_AVA_VOICE=Polly.Joanna-Neural
PAYMENT_LINK_TOP_TIER_URL=...
```

Never expose service role, secret, Postgres, AI Gateway, Twilio, or payment-provider secrets in React pages/components.

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

After deployment, verify `/api/health`, create/login with Supabase Auth, and open `/dashboard` as a founder or premium user.
