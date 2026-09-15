---
name: new-section
description: Scaffold a new Astro section component for the portfolio site, pre-wired with the Scientific Elegance design tokens (colors, fonts, spacing) from CLAUDE.md and PORTFOLIO_PLAN.md, so every section starts from the same shape.
---

# New Section Scaffold

Use this when adding a new top-level page section (e.g. Hero, About, Skills, Experience, Projects, Certifications, Leadership, Contact) to the Astro portfolio site described in `PORTFOLIO_PLAN.md`.

## What this skill does

Given a section name (e.g. "Skills"), create `src/components/<Name>.astro` following the project's established conventions instead of improvising new patterns per component:

1. **Wrapper structure**: a semantic `<section id="...">` (lowercase, kebab-case id matching the anchor nav in Phase C of the plan) with a generously padded container div — the "high whitespace, textbook" layout `CLAUDE.md` calls for. Don't cramp sections; prefer `py-20 md:py-32` scale spacing over tight defaults.

2. **Design tokens** (from `tailwind.config.mjs`, set up in Phase B of the plan) — use these, don't hardcode hex values or arbitrary fonts:
   - Background: `bg-background` (the warm off-white, not pure white).
   - Body text: `text-slate-700` / headings `text-slate-900`.
   - Accent (links, hover states, data callouts only — not decorative): `text-accent` / `hover:text-accent` (deep teal `#006D77`).
   - Headings: `font-serif` (Merriweather/Playfair Display).
   - Body copy: `font-sans` (Inter).
   - Any numeric stat, metric, or code snippet: `font-mono` (JetBrains Mono) — this is a deliberate signal in the design system, don't skip it for plain numbers.

3. **Typed props, not inline copy**: define an `interface Props` (or import a type from `src/content/config.ts` if the section is backed by a content collection per Phase C) so content is passed in, never hardcoded English sentences in the component itself. If real content isn't available yet for a field, leave the prop required and unfilled at the call site — do NOT fill it with filler/placeholder text (a `PreToolUse` hook in `.claude/settings.json` will block that outright).

4. **Animation**: if the section should fade/slide in on scroll (most should, per Phase C), wrap the content in the shared `<FadeIn client:visible>` island rather than adding new Framer Motion logic inline.

5. **Icons**: only pull in `lucide-react` if the section actually needs interactive icons; for static decorative icons, prefer inline SVG or `lucide-astro` to avoid unnecessary React hydration (noted as an option in Phase C step 6 of the plan).

## After generating

The `PostToolUse` hook already runs `npm run lint -- --fix` and `npm run format` automatically after any `.astro`/`.ts`/`.tsx` write — no need to run them manually. Just check the component renders in `npm run dev` and matches the anchor-nav id used elsewhere in `Header.astro`.

## Reference

Section list, ids, and per-section content shape are defined in `PORTFOLIO_PLAN.md` under "Phase C — Layout Architecture". Follow that shape rather than inventing new section types ad hoc.
