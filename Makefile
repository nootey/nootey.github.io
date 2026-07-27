.PHONY: lint lint-check format build

lint:
	pnpm lint

lint-check:
	pnpm lint:check

format:
	pnpm format

build:
	pnpm build
