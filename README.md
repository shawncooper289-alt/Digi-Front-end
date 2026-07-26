# Digi-Front-end
Front-end website deployed on Vercel with a Supabase backend connection.

## Supabase environment variables

Set these Vercel environment variables before deploying backend-connected features:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_CLIENT_ID=...
AI_GATEWAY_API_KEY=...
PURCHASE_CHECKOUT_URL=...
```

`PURCHASE_CHECKOUT_URL` is optional. When set, seat-tier submissions are saved in Supabase and then redirected to that checkout URL with `purchase_id`, `tier`, and `email` query params.

Do not expose Supabase service-role keys or AI Gateway keys in browser code.
