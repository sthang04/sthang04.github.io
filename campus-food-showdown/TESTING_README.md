# Campus Food Showdown - Testing Starter

This is the original uploaded Campus Food Showdown Vue app with readable voting utility functions and testing infrastructure added.

## Setup

```bash
pnpm install
pnpm exec playwright install chromium
```

## Run

```bash
pnpm dev
pnpm test
pnpm test:e2e
```

## Test files

- `src/tests/01-unit.spec.js`: voting functions
- `src/tests/02-component.spec.js`: SnackCard and Leaderboard
- `src/tests/03-integration.spec.js`: App and its child components
- `tests/04-e2e.spec.js`: browser workflow

The existing app was refactored to use `src/lib/voting.js` so that its logic can be tested independently. The visible UI and behavior are preserved.

Complete the TODO tests. The E2E file contains instructions in comments.
