# sal's site

Repo for my personal site.

- Built using Astro, TypeScript, and Tailwind CSS (using shadcn/ui).
- Photos hosted on AWS using CloudFront as a CDN.
- Blog posts stored as markdown files and parsed using Astro's content collections.

## development

- All work done against master branch -- `git checkout master`
- Spin up local dev server -- `pnpm run dev`
- hack away

## deployment

Vercel automatically takes care of production deployments and preview deployments.

## commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:4321`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |
