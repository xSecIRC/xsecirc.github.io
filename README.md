# xSecIRC/astromax

A personal website built with Astro and Tailwind CSS, automatically deployed to GitHub Pages.

## License

This project is licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0).

## Deployment

This site is automatically built and deployed to GitHub Pages whenever changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

The live site is available at [https://xSecIRC.github.io/](https://xSecIRC.github.io/).

## Development Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── components/
│   ├── images/
│   └── pages/
└── package.json
```

- Astro pages are in `src/pages/`.
- Reusable components are in `src/components/`.
- Static assets that are processed by Astro (like images) are in `src/images/`.
- The GitHub Actions workflow is in `.github/workflows/`.
