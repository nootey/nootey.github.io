# Claude project rules

## Project context

This is a personal page and portfolio showcase of done projects.

## Stack

Vue 3 (Composition API, plain JavaScript - not TypeScript), Pinia, Tailwind CSS v4. Nothing else.

Tailwind is wired through `@tailwindcss/vite`; there is no `tailwind.config.js` and no PostCSS
step. The entry is `src/style/tailwind.css`, which also defines the `dark:` variant against the
`theme` attribute set on `<html>` by `services/store/theme.js`.

## Workflow

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- Wait for explicit approval before writing any code or changing files
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## Styling

- Prefer Tailwind utility classes before writing custom CSS.
- Handle responsive styles with Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`), not media queries.
- Do not use arbitrary inline `style` attributes for spacing/layout - reach for Tailwind first.
- Shared section styling (section padding, numbered titles, chips, card surfaces) lives as
  primitives in `src/style/app.css`. Reuse those primitives rather than re-deriving the same
  set of utilities in every component.
- Theme colours are CSS custom properties defined per theme in `src/style/app.css`. Read them
  through those variables; never hardcode a hex value in a component.

## Development Guidelines

- Check related existing pages/components for examples.
- For exploration tasks (finding files, grepping), prefer spawning Explore subagents rather than reading into main context
- TypeScript: Strict type checking, ES modules, explicit return types
- Use relative paths only - no aliases like `@/` or `~/`
- Use `import type` for type-only imports; group them at the end of the import block
- Match existing code patterns and conventions even if you'd do it differently
- Minimum code that solves the problem. Nothing speculative.

## Git

- NEVER commit, unless explicitly requested

## General guidelines

- Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify
- Don't assume. Don't hide confusion. Surface tradeoffs
- Define success criteria. Loop until verified
- Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
    - "Fix the bug" → "Write a test that reproduces it, then make it pass"
    - "Refactor X" → "Ensure tests pass before and after"
