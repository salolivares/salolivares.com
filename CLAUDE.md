## Pages CMS

Configured in `.pages.yml` at repo root. Docs: https://pagescms.org/docs/

### Key config patterns

- `filename.template` uses tokens like `{primary}`, `{year}`, `{month}`, etc.
- `filename.field: create` means the template only applies on creation
- `view` controls CMS list UI: `fields`, `primary`, `sort`, `default.order`
- `body` field with `type: rich-text` maps to the markdown body content
- Rich-text `options.rename` + `options.path` + `options.media` control where uploaded assets go

### Adding a new CMS-managed collection

1. Define the Astro collection in `src/content.config.ts`
2. Create content directory `src/content/{name}/`
3. Add collection entry to `.pages.yml` with matching fields
4. Create rendering page(s) in `src/pages/`
5. Optionally integrate into feed via `src/lib/feed.ts`
