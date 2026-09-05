This is a [Next.js](https://nextjs.org) project configured for [Cloudflare Workers](https://developers.cloudflare.com/workers/) via the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Cloudflare Workers

The app is packaged with [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) so the Next.js build can run on the Workers runtime.

### Local preview in the Workers runtime

```bash
npm run preview
```

This builds the app with OpenNext and serves it locally through Wrangler.

### Deploy

```bash
npx wrangler login
npm run deploy
```

The first deploy publishes the worker `bnb` to a `*.workers.dev` subdomain. Attach a custom domain later in the Cloudflare dashboard or with Wrangler.

### Types for Cloudflare bindings

```bash
npm run cf-typegen
```

### Environment variables

Copy `.dev.vars.example` to `.dev.vars` for local Workers preview. Set `NEXTJS_ENV` to the Next.js environment whose `.env*` files should be loaded (`development` locally, `production` on deploy).

For [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), add the same values under **Build variables and secrets** so `next build` can see both `NEXT_PUBLIC_*` and server-side variables.

### Caching

The default OpenNext config uses in-memory cache. To enable Incremental Static Regeneration across isolates, add an R2 bucket binding named `NEXT_INC_CACHE_R2_BUCKET` and switch `open-next.config.ts` to the R2 incremental cache override. See [OpenNext caching](https://opennext.js.org/cloudflare/caching).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenNext on Cloudflare](https://opennext.js.org/cloudflare)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
