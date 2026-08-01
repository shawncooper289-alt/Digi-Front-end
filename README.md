# Digi-Front-end

Front-end website that will connect to Base44 but will open from vercel

## Deployment

This application is deployed on [Vercel](https://vercel.com). Visit the deployed app [here](https://path-to-directory).

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Initialize submodules (if using git submodules)
git submodule update --init --recursive
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Set these in your Vercel project settings:

- `NEXT_PUBLIC_BASE44_API_URL` - Base44 API endpoint
- `NEXT_PUBLIC_BASE44_API_KEY` - Base44 API key
- `NEXT_PUBLIC_CLIENT_ID` - Client ID for Base44
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon public key

## Owner / Founder Login

The website includes `/login` for the owner/founder account. Create the owner user in Supabase Auth, then set the two Supabase environment variables above in Vercel. Do not commit Supabase service-role keys or passwords to this repository.

## Checkout Requests

The website includes `/checkout` and saves payment-pending client requests to a Supabase table named `checkout_requests`. Run `supabase/checkout_requests.sql` in the Supabase SQL Editor before using checkout in production. It creates this table and the basic insert/read policies. The table uses these columns:

- `id` - UUID primary key with default generation
- `customer_name` - text
- `customer_email` - text
- `customer_phone` - text
- `business_name` - text
- `package_name` - text
- `package_price` - numeric
- `currency` - text
- `payment_status` - text, default `pending`
- `payment_provider` - text
- `notes` - text
- `created_at` - timestamp

When a payment provider is connected later, the same checkout flow can update `payment_status` from `pending` to `paid` and trigger receipts/invoices.

## Orders Backend

The payment-link checkout API can also create Supabase `orders` and `order_items` records before redirecting to payment. Run `supabase/orders_and_order_items.sql` in the Supabase SQL Editor for `https://raxsxcmferydxllddeub.supabase.co` before using this in production.

Required server-only Vercel environment variable:

- `SUPABASE_SERVICE_ROLE_KEY` - never expose this in browser code or chat responses.

Set `PAYMENT_LINK_TOP_TIER_URL` to the Supabase/PayPal/Cash App/current payment URL for the immediate top-tier purchase.

## Backend Lead Upsells

The founder dashboard links to `/dashboard-sales`, a protected backend sales page for premium buyer and opt-in lead packages. Run `supabase/lead_sale_requests.sql` in the Supabase SQL Editor before using it in production.

Only sell consented, opt-in, niche-matched leads. Do not use this flow for scraped, cold, or non-consented contact lists.

## Ava Voice Calling with Twilio

The project includes Twilio-compatible routes for Ava sales calls:

- Inbound webhook: `https://digimark101.com/api/twilio/inbound-call`
- Speech handler: `https://digimark101.com/api/twilio/handle-speech`
- Outbound API: `POST /api/twilio/outbound-call`

Set the Twilio phone number voice webhook to the inbound URL above. Required Vercel environment variables:

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`
- `TWILIO_OUTBOUND_ADMIN_SECRET`
- `TWILIO_AVA_VOICE` - defaults to `Polly.Joanna-Neural`, an English US female neural voice. This can be changed to the closest supported Twilio voice to the Gemini Vega-style tone.
- `AI_GATEWAY_API_KEY`
- `AVA_VOICE_MODEL`
- `NEXT_PUBLIC_SITE_URL`

Do not commit Twilio tokens, AI Gateway keys, or outbound admin secrets.

## What Was Fixed

**Why you were getting a 404 error:**

1. **Missing `next.config.js`** - Vercel needs this file to identify your project as a Next.js application and configure it properly
2. **Missing `package.json`** - This file is required for npm to install dependencies and for Vercel to know how to build your project
3. **Incomplete `vercel.json`** - Needed `"framework": "nextjs"` declaration so Vercel recognizes the framework

**What was added:**

✅ `package.json` - Defines dependencies (React, Next.js, etc.) and build scripts
✅ `next.config.js` - Configures Next.js and environment variables for Vercel
✅ Updated `vercel.json` - Added framework declaration and improved configuration

Your app should now deploy successfully on Vercel!
