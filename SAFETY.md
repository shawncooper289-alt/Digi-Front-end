# Ava Skye Frontend Safety

This project is the DigiMark101 frontend for Ava Skye. Ava OS and backend apps are separate projects.

## Brand guardrails

- DigiMark101 logo stays top-left on every page.
- Palette stays black/navy, purple, magenta, silver, and white.
- Ava Skye face/identity, lighting, framing, and widget styling stay consistent.
- Only clothing/wardrobe may change between future videos.
- Do not place backend API keys in `NEXT_PUBLIC_*` variables.
- Use server-side API routes or separate backend projects for protected API access.

## Deployment check

Before production deploys, verify:

- `npm run build` completes successfully.
- The Vercel project framework preset is `nextjs`.
- Public UI copy refers to DigiMark101 and Ava Skye only.
