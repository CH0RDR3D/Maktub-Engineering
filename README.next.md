# Maktub Engineering Next.js Architecture

The site now has a Next.js App Router foundation with crawlable, statically generated routes:

- `/`
- `/about`
- `/services`
- `/green-energy`
- `/credentials`
- `/contact`

## Development

Use Node.js 20.19 or newer, then run:

```powershell
npm install
npm run dev
```

Production validation:

```powershell
npm run build
npm run start
```

## Architecture

- `app/layout.js` owns global metadata, styles, and the shared header.
- `app/site-header.js` is the only client component for menu state and uses named React handlers.
- `app/[slug]/page.js` defines static route params and route-specific metadata.
- `app/legacy-page.js` temporarily reads the existing page fragments server-side while content is incrementally converted to React components.
- `app/legacy-interactions.js` handles remaining fragment interactions through event delegation and `data-*` attributes.
- `public/images` and `public/resources` contain the static asset copies required by Next.js.
- `app/sitemap.js` and `app/robots.js` provide crawl discovery metadata.

## Migration Notes

The original static files remain in place as a rollback/reference copy during migration. New work should use Next routes and React components rather than editing the old hash router. The remaining page fragments should be converted into typed, accessible React components in a later pass so the temporary server-side HTML adapter can be removed.

## Quality Gates

Before deployment, run a production build, test every route with keyboard navigation, verify the contact form success and failure states, and run Lighthouse on desktop and mobile. Node.js 20.19+ is required by the current Next.js/ESLint dependency set.
