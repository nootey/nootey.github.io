# Claude project rules

## Project context

This is a personal page and portfolio showcase of done projects.

## Stack

Vue 3 and TypeScript + Bootstrap for styling.

## Workflow

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- Wait for explicit approval before writing any code or changing files
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## Styling

- Prefer Bootstrap utility classes before writing custom CSS classes.
- For responsive styles that require a media query, use a scoped `<style>` block with an `id`-based selector - never a custom class.
- Do not use arbitrary inline `style` attributes for spacing/layout - reach for PrimeFlex first.

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
