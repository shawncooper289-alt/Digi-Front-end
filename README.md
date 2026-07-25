# Digi-Front-end
Front-end website deployed on Vercel with a Supabase backend connection.

## Supabase environment variables

Set these Vercel environment variables before deploying backend-connected features:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_CLIENT_ID=...
```

Do not expose Supabase service-role keys in browser code.
