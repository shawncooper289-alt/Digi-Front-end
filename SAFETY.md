# Vercel + Supabase + Ava Skye safety model

## Runtime boundary

This app uses Vercel API routes as the backend boundary. Browser requests go to `/api/*`; API routes call Supabase, AI Gateway, Twilio, and checkout services using environment variables available only on the server.

## Secret handling

Never send these values to the browser or include them in `NEXT_PUBLIC_*` variables:

- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_SECRET_KEY`
- `POSTGRES_URL`
- `POSTGRES_PASSWORD`
- `SUPABASE_JWT_SECRET`
- `AI_GATEWAY_API_KEY`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_OUTBOUND_ADMIN_SECRET`
- payment-provider secrets

Browser-safe keys are limited to publishable or anon Supabase keys and must be paired with Supabase row-level security.

## Ava Skye access control

The protected command center uses Supabase Auth plus `/api/access`. A user is allowed when:

- `profiles.role = 'founder'`, or
- `subscriptions.plan in ('premium', 'founder')`

Ava chat requests to `/api/ava` require the same authenticated founder/premium session token.

## Supabase row-level security

Run every SQL file under `supabase/` before production use. Keep RLS enabled on all production tables. Public marketing reads are allowed only for safe campaign content; lead, checkout, order, and premium app data must stay protected.

## Production checklist

1. Confirm Vercel has Supabase env vars for Production and Preview.
2. Run all SQL files in `supabase/`.
3. Create the founder user in Supabase Auth.
4. Mark the founder user in `profiles` or `subscriptions`.
5. Set AI Gateway and Twilio env vars only if those Ava Skye features are being used.
6. Deploy from GitHub through Vercel.
7. Verify `/api/health`, `/login`, `/dashboard`, `/api/ava`, and the checkout path.
