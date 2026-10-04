# BacklinkPrices.com

Affiliate comparison engine for backlink prices and link building providers.
Flow: Search → Compare → Calculate → Choose → Click-out.

Stack: Next.js (App Router) + Tailwind CSS v4, statically rendered, Vercel-ready.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint     # tsc --noEmit
```

## Structure

- `app/` pages: `/`, `/backlink-prices`, `/best-backlink-services`, `/calculator`, `/compare`, `/go/[slug]` (affiliate redirect), sitemap, robots
- `components/` home sections and UI primitives (`components/ui`)
- `data/providers.ts` provider records and value-score weights
- `data/price-model.ts` calculator price model
- `data/site.ts` site constants, nav, affiliate disclosure

## Before launch

All providers and prices are **sample data** (`verified: false`). Replace them in
`data/providers.ts` / `data/price-model.ts`, set each provider's `affiliateUrl`,
and review the disclosure text in `data/site.ts`.
