# Discover Your MBTI Personality Type

A bilingual React, TypeScript, Vite, and Tailwind app for an informal MBTI-style self-reflection test. The app includes 32 Likert-scale questions, EN/zh-CN language switching, persisted progress, scoring, type profiles, result sharing text, and static deployment support.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

The dev server listens on `0.0.0.0:8080`.

## Test

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run e2e
```

The E2E suite uses Playwright. If a fresh machine does not have the browser binary yet, install Chromium once:

```bash
npx playwright install chromium
```

## Build

```bash
npm run build
```

The production output is written to `dist/`.

## Static Deployment

The app is prepared for bare static directory hosting:

- Vite builds assets with relative paths via `base: './'`.
- Routing uses hash URLs, so a plain static file server does not need rewrite or fallback rules.
- Deploy the contents of `dist/` to any static host or file server.

To verify the built directory locally with a plain static server:

```bash
npm run build
python3 -m http.server 8080 --directory dist
```

Then open `http://localhost:8080/`. Internal routes use hash paths such as `/#/test`, `/#/result`, and `/#/about`.

## Notes

This test is for self-reflection and entertainment only. It is not a clinical, psychological, hiring, or diagnostic assessment.
