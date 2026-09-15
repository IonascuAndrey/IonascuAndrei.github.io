# Tech Stack

- Framework: Astro (for instant loading)
- Styling: Tailwind CSS
- Animations: Framer Motion (scroll-reveal `FadeIn` island); simple interactivity (mobile menu toggle, the Hero typewriter effect) is plain vanilla JS in a `<script>` tag, not a React island — keeps hydration cost near zero for things that don't need it.
- Icons: Lucide React, rendered without a `client:*` directive wherever purely decorative (static SVG output, zero hydration cost).

# Design Guidelines (Old Manuscript)

Supersedes an earlier "Scientific Elegance" pass (Playfair Display/Inter, cool off-white background) — replaced per the user's explicit request for a design with more personality. A scroll-driven 3D book/page-turn concept was prototyped and explicitly rejected as bad UX before landing on this direction.

- Theme: Light mode only. Background is an aged, warm parchment/sepia tone (`--color-background: #EDE1C0`) evoking a yellowed old book page — not a cool white.
- Colors: Slate greys for text (unchanged). One muted accent color, deep Teal `#006D77`, strictly for data points, links, and hover states (unchanged).
- Typography — a deliberate "typed by hand" vs. "printed by machine" contrast:
  - Headers: Special Elite, a distressed vintage typewriter face, used at size for character.
  - Body: Courier Prime, a cleaner typewriter face, legible for longer-form reading.
  - Code/numbers/data-stat callouts: JetBrains Mono — the one "computed" element set against the two typewriter faces.
- Motion: the Hero name and role label type themselves out character-by-character on load with a blinking accent-colored cursor (plain vanilla JS, respects `prefers-reduced-motion`).
- Layout: unchanged — grid-based, high whitespace, single-page scrolling portfolio with anchor sections.

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
