# Ava Skye Frontend Safety

This project is the Ava Skye frontend only. Ava OS and backend apps are separate projects.

## Guardrails

- Do not place backend API keys in `NEXT_PUBLIC_*` variables.
- Do not market Ava OS, Base44, or knowledge-base systems as bundled frontend features.
- Keep deployment configuration aligned with the Vercel Next.js framework preset.
- Use server-side API routes or separate backend projects for protected API access.

## Deployment check

Before production deploys, verify:

- `npm run build` completes successfully.
- The Vercel project framework preset is `nextjs`.
- Public UI copy refers to Ava Skye only.
