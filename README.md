# gamedev-portfolio

Source for [zeloi.dev](https://zeloi.dev), a portfolio site for Zeloi, a gameplay programmer. Built with React, TypeScript, Vite, and React Router.

## Development

Requires Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev        # start the dev server
npm run build      # type-check and build to dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
npm run format     # Prettier
```

## Layout

- `src/data/`: all site copy (projects, experience, links, stats). Edit content here, not in components.
- `src/pages/`: route components.
- `src/components/`: shared UI.
- `src/styles/index.css`: Tailwind entry point; colors, fonts, and sizes are defined in its `@theme` block.
- `public/media/`: project videos and images.
- `public/fonts/`: the Super Indie display font.

`CLAUDE.md` holds the content source of truth, design direction, and the feature roadmap.

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
