# Tech Stack

- Framework: Astro (for instant loading)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React

# Design Guidelines (Scientific Elegance)

- Theme: Light mode default. Background is a warm off-white (e.g., #FAFAFA), not pure blinding white.
- Colors: Slate greys for text. Use one muted, sophisticated accent color (like Terracotta #E2725B or deep Teal #006D77) strictly for data points, links, and hover states.
- Typography:
  - Headers: A crisp Serif font (like Merriweather or Playfair Display) to mimic academic papers.
  - Body: A highly legible Sans-Serif (like Inter or Roboto) for clean reading.
  - Code/Numbers: Monospace (like JetBrains Mono) for numerical stats and code snippets.
- Layout: Grid-based, high whitespace, similar to a beautifully typeset textbook or a Tufte data visualization.

# Development Rules

- Do NOT output full files if making a small change.

(Lint/format-after-edit and no-placeholder-text are now enforced automatically via hooks in `.claude/settings.json`, not manual rules.)

# Astro Dev Workflow

- When starting the dev server, use background mode: `astro dev --background`.
- Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
- Full documentation: https://docs.astro.build
- Consult these guides before working on related tasks:
  - [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
  - [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
  - [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
  - [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
  - [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
  - [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
