# Formula Nano

This site is built primarily using Astro, with React islands used for certain components. Styling is done with TailwindCSS and static typing with Typescript is enabled. Prettier is used for formatting.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React components that will be used across multiple pages. This helps ensure design consistency.

Any static assets, like images, can be placed in the `public/` directory.

## Aesthetics

The primary colours used on the site are `red`, `yellow`, and `stone`. Red and yellow have been overwritten from their defaults in the Tailwind configuration. The design of the site tries to incorporate a rounded-grid style and photography where appropriate.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro …`         | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Need Help?

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## Upgrading Astro Version

Right now we are pegged at Astro verion `1.16.0` because of [this](https://github.com/withastro/astro/issues/12201) error with Cloudflare requiring immutable headers
