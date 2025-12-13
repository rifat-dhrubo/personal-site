# AGENTS.md - Coding Guidelines

In all interactions, plans and commit messages, be extremely concise. Sacrifice grammar for the sake of concision.

List any unresolved questions at the end, if any.

## Commands

- **Dev**: `pnpm dev` (port 3333)
- **Build**: `pnpm build` (vite + type check)
- **Test**: `pnpm test` (vitest run)
- **Lint/Fix**: `pnpm lint:fix` (eslint + prettier)
- **Type check**: `pnpm type:check`
- **Generate API/types**: `pnpm generate` (orval + prettier + eslint)

## Codebase Structure

**Stack**: React 19, TypeScript, TanStack Router, TanStack Query, Vite, Tailwind CSS, shadcn/ui  
**Architecture**: SPA with modular feature-based structure (`src/features/`, `src/components/`, `src/hooks/`, `src/lib/`, `src/integrations/`)  
**Key integrations**: Clerk auth, Stripe, Google Sheets (via Apps Script), Cloudflare Turnstile  
**Path alias**: `@/*` maps to `./src/*`

## Code Style

**Formatting**: Prettier (tabs, single quotes, trailing commas, LF line endings)  
**Imports**: Absolute imports via `@/`; group as builtin → external → internal → parent → sibling → index (alphabetized, newlines between groups)  
**React hooks**: Use `React.<hook>()` (not named imports); avoid `&&` in JSX (use ternaries instead)  
**No default exports**: except in vite.config.ts, orval.config.ts, commitlint.config.ts, prettier.config.mjs  
**Props sorting**: Reserved first, shorthand first, callbacks last, multiline last  
**TypeScript**: Strict mode, no unused vars, noUncheckedSideEffectImports enabled  
**Env vars**: Use `@t3-oss/env-core` for type-safe environment variables (VITE\_ prefix)  
**Error handling**: Only throw Error objects (configured in eslint); Redirect and NotFoundError allowed
