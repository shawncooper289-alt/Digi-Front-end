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

## Ava Skye and Pinecone setup

1. Run `supabase/schema.sql` in the Supabase SQL editor.
2. Set these server-only Vercel environment variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `PINECONE_API_KEY`, `PINECONE_INDEX_HOST`, `AI_API_KEY`, `AI_BASE_URL` (optional OpenAI-compatible endpoint), `AI_CHAT_MODEL`, `AI_EMBEDDING_MODEL`, and a strong `AVA_INGESTION_SECRET`.
3. Create a Pinecone index whose vector dimension matches `AI_EMBEDDING_MODEL`; the app writes to the `ava-knowledge` namespace.
4. Send authenticated users' Supabase access tokens as `Authorization: Bearer <access-token>` when calling `/api/chat`. The included UI provides Supabase email-link sign-in and adds this token automatically.
5. Ingest approved playbooks through `POST /api/knowledge/ingest` using `Authorization: Bearer <AVA_INGESTION_SECRET>` and JSON `{ "title", "content", "stage", "source" }`. Keep the ingestion secret server-side.

The chat route reads the authenticated user's stage/profile, retrieves the five most relevant stage-scoped Pinecone chunks, saves the exchange in Supabase, and returns one stage-gated answer.
