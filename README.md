# Dylan Bai — Field Notes

Source for [dylanbai.com](https://dylanbai.com), Dylan Bai's personal blog and
project notebook. The site collects field notes about AI, Brazilian
jiu-jitsu, building projects, and lessons from everyday life.

## Stack

- React 19 and the Next.js App Router API
- [vinext](https://github.com/cloudflare/vinext) and Vite
- Cloudflare Workers runtime
- OpenAI Sites hosting

## Local development

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

The main quality checks are:

```bash
npm test
npm run lint
```

`npm test` builds the production worker and verifies that the home page,
writing, projects, about page, and a full article render successfully.

## Project structure

- `app/` contains pages, reusable layout components, content, and styles.
- `public/` contains the favicon and social-sharing artwork.
- `worker/` contains the Cloudflare Worker entry point.
- `tests/` contains server-rendered route checks.
- `.openai/hosting.json` connects this checkout to the existing Sites project.

## Editing content

Articles and project entries currently live in `app/content.ts`. Add an entry
there to make it available to the writing and project pages, then update any
featured ordering in the relevant page component.

## Hosting

The production site is hosted with OpenAI Sites and uses `dylanbai.com` as its
custom domain. DNS and access policy are managed separately from this source
repository.
