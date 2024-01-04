# sal's site

Repo for my personal site.

- Built using Astro, TypeScript, and Tailwind CSS (using shadcn/ui).
- Photos hosted on AWS using CloudFront as a CDN.
- Blog posts stored as markdown files and parsed using Astro's content collections.

## development

- All work done against develop branch -- `git checkout develop`
- Spin up local dev server -- `npm run dev`
- hack away

## deployment

Vercel automatically takes care of production deployments and preview deployments.

## commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
