.PHONY: lint lint-check format

lint:
	pnpm lint

lint-check:
	pnpm lint:check

format:
	pnpm format
