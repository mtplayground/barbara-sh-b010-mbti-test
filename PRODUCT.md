# Discover Your MBTI Personality Type

## Snapshot

Discover Your MBTI Personality Type is a bilingual React app for an informal MBTI-style self-reflection test. It is designed for personal reflection and entertainment, not clinical, psychological, hiring, diagnostic, or official Myers-Briggs assessment use.

## What It Does

- Presents a 32-question Likert-scale personality test.
- Supports English and zh-CN with an instant, persisted language toggle.
- Saves in-progress answers and current question position to localStorage.
- Validates submission so unanswered questions are clearly surfaced.
- Scores answers into a deterministic four-letter MBTI-style type.
- Shows a localized result page with type title, interpretation, per-dimension score breakdown, strengths, challenges, work style, and communication tips.
- Provides copy-ready share text and a restart action that clears stored answers.
- Includes an About / Disclaimer page with the full disclaimer.

## Architecture And Conventions

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, React Router, react-i18next.
- Routing uses `HashRouter` and Vite `base: './'` so `dist/` can be served by a plain static file server without rewrite rules.
- Core data lives under `src/data`: question bank, dimension metadata, and the 16 bilingual type profiles.
- Core logic lives under `src/lib`: scoring and test progress storage helpers.
- Shared UI and shell components live under `src/components`.
- Page-level routes live under `src/pages`.
- i18n resources live under `src/i18n/resources`; UI copy should be authored in both `en` and `zh-CN`.
- The app is static-only; there is no backend or database.

## Quality Gates

- Formatting: `npm run format:check`
- Linting: `npm run lint`
- Type checking: `npm run typecheck`
- Unit tests: `npm test`
- Production build: `npm run build`
- End-to-end tests: `npm run e2e`

## Deployment

Run `npm run build` and deploy the contents of `dist/` to any static host or file server. Internal routes use hash paths such as `/#/test`, `/#/result`, and `/#/about`.
