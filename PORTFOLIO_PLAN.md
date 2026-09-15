# Portfolio Site — Astro + Tailwind Scaffold & Layout Plan

> Living plan doc, tracked in git. Edit freely; we'll work through the phases below step by step. Check items off as they're done.

## Context

The repo (`IonascuAndrei.github.io`) is currently empty except for `CLAUDE.md` with design/tech rules for a personal data-engineering portfolio ("Scientific Elegance" theme: Astro, Tailwind, Framer Motion, Lucide React). The goal of this pass is to **scaffold the project and design the layout architecture only** — no section copy or final UI code — so that real resume content can be dropped into a well-structured shell afterward without restructuring.

Decisions locked in with the user:

- **Accent color**: deep Teal `#006D77`
- **Deployment**: GitHub Pages via GitHub Actions (repo name already matches the `user.github.io` convention)
- **Package manager**: npm
- **Content**: plan with named content slots (Hero, About, Skills, Projects, Experience, Contact); real copy supplied later, before any UI/copy is written (per `CLAUDE.md`'s no-placeholder-text rule)

Deferred (reminder needed at end of session): the `origin` git remote has a GitHub PAT embedded in the URL — flagged to user, they asked to be reminded after this work is done, not fixed now.

**Real background** (from `CV_Ionascu_Andrei.pdf`, found in the repo root) grounds the structure below:

- Ionașcu Andrei — Data/ML Engineer, MSc Data Science @ Uppsala University (2026–2028), BSc Computer Science @ University of Bucharest.
- Current role: Data Engineer @ Endava (May 2025–present) — Excel-to-standardized-database pipelines in Python/pandas (header-similarity bucketing, regex filtering, header diffing, ~90% manual-analysis-time reduction); Azure + Snowflake for an insurance underwriting workbench; came in via the selective Dava.X Academy.
- Prior: Web Developer @ Weblir (PrestaShop e-commerce modules, PHP/MySQL/JS) — full-stack shipping experience worth a brief mention even though it predates the data focus.
- Flagship projects: Multimodal Emotion Recognition (bachelor thesis — six models across text/audio/image, three fusion strategies, XAI via Integrated Gradients/Grad-CAM, a feature-caching layer that cut experiment time from hours to minutes); LLM Persona Bias Experiment (four LLMs × seven personas × three prompts × five runs, written up as a CATS 2026 submission).
- Certifications: Databricks Data Engineer Associate, Microsoft Power BI Data Analyst Associate, Azure Data Fundamentals, Azure Fundamentals, AI Fundamentals (all 2025).
- Technical foundation: Python (pandas, NumPy, scikit-learn, PyTorch, Hugging Face), SQL/PL-SQL, Azure, Snowflake, Databricks, Git; JS, PHP, C#/.NET, C/C++, Java.
- Notable differentiator: substantial leadership/international engagement (Leaders Foundation community manager, Susterum accelerator cohort, EuroTech x HKTE hackathon, DPIN Brussels AI Governance hackathon, Erasmus+) — unusual for a data engineer portfolio and worth a compact dedicated section, not just a resume line.
- Contact: ionascuandrei320@gmail.com, linkedin.com/in/andrei-ionascu, github.com/IonascuAndrey.

This is real content, not placeholder — it grounds the schemas in Phase C below, but full on-page prose (the About narrative, exact project write-ups) is still a later step per the project's no-placeholder-copy rule (see Tooling & Automation below); this pass only fixes the _shape_ the real data will fill.

---

## Prerequisites — resolved

- [x] **Install Node.js (LTS)**. Installed 2026-09-15 (v24.21.0 / npm 11.19.0) at `C:\Program Files\nodejs`. Note: existing terminal sessions may still have a stale PATH from before the install — open a fresh terminal (or prepend the install dir to PATH) if `node`/`npm` aren't found.

## Tooling & Automation (already set up)

- [x] `.claude/settings.json` hooks configured:
  - `PostToolUse` on Write/Edit for `*.astro`/`*.ts`/`*.tsx` — runs `npm run lint -- --fix` + `npm run format` automatically (no-ops safely until `package.json` exists, i.e. until Phase A step 2 is done).
  - `PreToolUse` on Write/Edit — blocks any write whose content contains that classic filler-text phrase (checked case-insensitively), even mid-word in surrounding prose (confirmed live: it blocked an earlier draft of this very doc for merely discussing the rule).
  - These replace what used to be two manual rules in `CLAUDE.md`'s Development Rules section (removed from there since they're now enforced mechanically, not by memory).
  - Note: since `.claude/` didn't exist when the session that created it started, its live settings watcher may not be picking it up yet — open `/hooks` once (or restart) to confirm they're active before relying on them.

## Phase A — Project Scaffolding — ✅ done (2026-09-15)

- [x] 1. ~~`git mv Claude.md CLAUDE.md` and commit~~ — already done (file is tracked as `CLAUDE.md`).
- [x] 2. Scaffold Astro (minimal template, TypeScript strict). Note: `create-astro` refused to scaffold into the non-empty repo root and instead created a subfolder (`./visible-visual`) — moved its contents up into the repo root by hand, merged its default `CLAUDE.md`/`AGENTS.md` content (Astro dev-workflow tips) into our real `CLAUDE.md` instead of overwriting it, and renamed `package.json`'s `name` field to `ionascuandrei-portfolio`.
- [x] 3. `npx astro add tailwind -y` — Tailwind v4 via the Vite plugin (`@tailwindcss/vite`), no separate `tailwind.config.mjs`/PostCSS config generated — v4's config lives in CSS via `@theme`, which changes Phase B's approach slightly (see note there).
- [x] 4. `npx astro add react -y` — `@astrojs/react` + React 19 installed and wired into `astro.config.mjs`.
- [x] 5. `npm install framer-motion lucide-react` — done.
- [x] 6. `.gitignore` — already present from the scaffold and already covers `node_modules/`, `dist/`, `.astro/`, `.env`.
- [x] 7. `package.json` scripts — `dev`/`build`/`preview`/`astro` from the scaffold, plus `lint` (`eslint .`) and `format` (`prettier --write .`) added. Pulled a slice of Phase D forward to make this real: installed `eslint`, `eslint-plugin-astro`, `typescript-eslint`, `prettier`, `prettier-plugin-astro`; added `eslint.config.mjs` (flat config) and `.prettierrc.json`/`.prettierignore`. Both scripts run clean. The `PostToolUse` hook now does real work instead of no-op'ing.

## Phase B — Design System Setup (tokens only, no page UI) — ✅ done (2026-09-15)

**Correction from Phase A**: `astro add tailwind` installed **Tailwind v4** (via `@tailwindcss/vite`), which has no `tailwind.config.mjs` file at all — `src/styles/global.css` currently just has `@import "tailwindcss";`. Theme tokens are declared in CSS via an `@theme { ... }` block in that same file instead of a JS config's `theme.extend`. Encode `CLAUDE.md`'s "Scientific Elegance" spec there:

- [x] **Colors**: `--color-background: #FAFAFA`, a `slate` grey scale for text (Tailwind v4 ships the `slate` palette by default, no need to redeclare), `--color-accent: #006D77` (deep teal) for links/hover/data points only.
- [x] **Fonts**: `--font-serif` → **Playfair Display** (headers; picked over Merriweather — the site's headers are short/editorial rather than long-form reading text, and Playfair's higher contrast reads as more "crisp" per `CLAUDE.md`'s wording), `--font-sans` → Inter (body), `--font-mono` → JetBrains Mono (numbers/code/stats). Self-hosted via `@fontsource/*` packages, imported in `global.css` as `latin` + `latin-ext` subsets only per weight (skipping cyrillic/greek/vietnamese) — **latin-ext is required**, not optional: it covers the Romanian diacritic in "Ionașcu". Weights: Playfair Display 400/700, Inter 400/500/600, JetBrains Mono 400/500.
- [ ] **Spacing/whitespace**: deferred — rely on generous `py-*`/`gap-*` at the component level in Phase C; revisit only if defaults feel tight once real sections exist.
- [x] Update `src/styles/global.css`'s `@theme` block with the above; no separate config file needed. Verified by temporarily importing `global.css` into `index.astro`, running `npm run build`, confirming all 14 woff2 files and the `@theme` CSS vars landed in `dist/_astro/`, then reverting the temporary import (that wiring is Phase C's `BaseLayout.astro` job).

## Phase C — Layout Architecture (the core deliverable)

This is structural scaffolding — components exist with real markup/semantics and clearly marked content slots, but no finished sentences of bio/project copy.

- [ ] 1. **`src/layouts/BaseLayout.astro`** — `<html>`/`<head>` shell: meta tags, OpenGraph placeholders, favicon, font preloads, global CSS import, `<slot />` for page content. Single source of truth for `<title>`/description per page.

- [ ] 2. **Site shape**: single-page scrolling portfolio with anchor-based sections (`#about`, `#skills`, `#experience`, `#projects`, `#certifications`, `#leadership`, `#contact`) plus a sticky/minimal header — standard for portfolios, keeps nav trivial and works well with Framer Motion scroll-reveal animations. `#leadership` is a compact section, not a full slot-for-slot resume dump — see Positioning notes below.

- [ ] 3. **Component skeleton** (structure + semantic HTML + Tailwind layout classes only, content passed as typed props/slots to fill later):
  - `src/components/Header.astro` — name ("Ionașcu Andrei"), anchor nav, mobile menu.
  - `src/components/Hero.astro` — name, role/positioning statement slot (e.g. "Data/ML Engineer" line), CTA buttons (download `CV_Ionascu_Andrei.pdf`, email, LinkedIn/GitHub).
  - `src/components/About.astro` — bio text slot (seeded from the CV's PROFILE paragraph, rewritten to site voice later) + optional headshot slot.
  - `src/components/Skills.astro` — grid of skill categories (Python/ML stack, Cloud & Data platforms, Languages) structured via content collection, Lucide icons per category.
  - `src/components/Experience.astro` — timeline layout (grid-based, not a heavy JS timeline lib); two real roles (Endava, Weblir) plus Dava.X Academy as a training note.
  - `src/components/Projects.astro` — card grid, each card following the fixed case-study shape (Problem → Approach → Stack → Outcome) — data-driven from a content collection, seeded with the two real flagship projects (Multimodal Emotion Recognition, LLM Persona Bias Experiment) plus room for the Endava underwriting-workbench work as a third card once he confirms what's shareable under NDA.
  - `src/components/Certifications.astro` — compact logo/badge row (Databricks, Power BI, Azure ×2, AI Fundamentals) rather than a bullet list.
  - `src/components/Leadership.astro` — small, visually distinct section for Leaders Foundation / Susterum / hackathons / Erasmus+ — signals communication and cross-cultural leadership without competing for space with the technical case studies.
  - `src/components/Contact.astro` — email/LinkedIn/GitHub links, optionally a simple form (static form service like Formspree, no backend needed).
  - `src/components/Footer.astro`.

- [ ] 4. **Content Collections for structured data** (`src/content/config.ts` with Zod schemas) instead of hardcoding arrays in components — this doubles as a portfolio signal (a data engineer treating site content as schema-validated data), and is seeded with real CV facts (not lorem ipsum) even though final prose wording comes later:
  - `projects` collection: `{ title, summary, problem, approach, stack: string[], outcome, metrics?: {label, value}[], links: {repo?, demo?} }` — seeded entries: "Multimodal Emotion Recognition" (stack: Python, PyTorch, XAI; metric: "hours → minutes" via feature caching) and "LLM Persona Bias Experiment" (stack: LLM experiment design; scale: 4 LLMs × 7 personas × 3 prompts × 5 runs).
  - `experience` collection: `{ role, company, start, end?, highlights: string[] }` — seeded with Endava (May 2025–present, ~90% manual-analysis-time reduction highlight) and Weblir (Jul 2021–Oct 2022).
  - `skills` collection: `{ category, items: string[] }` — seeded from the CV's "Technical foundation" list (Python/pandas/NumPy/scikit-learn/PyTorch/Hugging Face, SQL/PL-SQL, Azure, Snowflake, Databricks, Git, JS/PHP/C#/C++/Java).
  - `certifications` collection: `{ name, issuer, date }` — seeded with the five listed certifications.
  - Because this data is already real (sourced from the CV), `astro check` validates against actual content rather than throwaway TODO strings — final step is only refining wording/voice, not inventing facts.

- [ ] 5. **Animation slots**: wrap section entrances with a small reusable `<FadeIn client:visible>` React island (Framer Motion) rather than sprinkling motion logic per component — keeps islands minimal and hydration cost low.

- [ ] 6. **Icons**: `lucide-react` used only inside islands that need interactivity; for static icons consider `lucide-astro` later to avoid unnecessary React hydration (flag as an optional optimization, not required now since `CLAUDE.md` pins `lucide-react`).

## Phase D — Tooling & Quality Gates

- [ ] ESLint (`eslint` + `eslint-plugin-astro` + TS parser) and Prettier (+ `prettier-plugin-astro`) so `npm run lint` / `npm run format` actually do something meaningful — this is what the `PostToolUse` hook (already configured, see Tooling & Automation above) calls after every component edit.
- [ ] Husky + lint-staged pre-commit hook running lint+format on staged files — a second, git-level backstop that also covers commits made outside Claude Code (manual edits, other tools), on top of the editor-level hook.
- [ ] `astro check` for TypeScript/template validation, run in CI.

## Phase E — CI/CD & Deployment

- [x] `.github/workflows/deploy.yml` — pulled forward from its usual place (after Phase C/D) so there's a live, verifiable checkpoint right after Phase A instead of only at the end. On push to `master` (or manual dispatch): `npm ci`, `npm run lint`, `npm run build`, then deploy `dist/` to GitHub Pages via `actions/deploy-pages`. Dropped `astro check` from this run for now — `@astrojs/check`/`typescript` aren't installed as devDependencies yet; add it back once Phase D formalizes that.
- [ ] **One-time manual step required**: GitHub Pages must be switched to "Source: GitHub Actions" in the repo's Settings → Pages (no `gh` CLI available in this environment to automate it) — the first workflow run will fail on the deploy step until this is done; re-run it from the Actions tab afterward.
- [ ] Separate lightweight CI check on PRs (if branches are used) running lint + build only, no deploy — gives a pass/fail signal before merging even for a solo repo.

---

## SDLC Best Practices (advisory, not build steps)

- **Branch per feature** (`feat/hero-section`, `feat/projects-grid`) even solo — keeps `master` always deployable, since it auto-deploys on push.
- **Conventional commits** (`feat:`, `fix:`, `chore:`) — makes history scannable and sets up painless changelog generation later if wanted.
- **Self-review the diff before merging** — treat your own PR like a reviewer would: read the full diff on GitHub, not just in the editor, before merging to `master`.
- **CI as a gate, not a formality** — don't merge on a red lint/build check even when there's no second reviewer.
- **Performance & accessibility budgets** — run Lighthouse CI (or manual Lighthouse) targeting 90+ across the board; for a data engineer's site, a fast/accessible/semantically-correct site is itself a portfolio artifact.
- **Small, reviewable commits** — one section/component per commit rather than one giant "add site" commit, so history stays useful.
- **Secrets hygiene** — fix the PAT-in-remote-URL issue (deferred per user request, reminder needed) before this repo is ever shared or cloned elsewhere.

## Positioning Ideas — Putting Yourself in the Best Light as a Data Engineer

Specific to this CV, not generic advice:

- **Lead with the quantified wins you already have** — "~90% reduction in manual analysis time" (Endava) and "hours → minutes" (feature-caching layer, thesis) are strong, concrete numbers. Pull them out of paragraph text and render them as standalone JetBrains-Mono stat callouts near the top of the page (Tufte-style, matches `CLAUDE.md`'s theme) rather than leaving them buried in bullet points.
- **Case-study format for the two flagship projects**: Multimodal Emotion Recognition and the LLM Persona Bias Experiment are both genuinely distinctive (multi-modal fusion + XAI; a rigorously designed 4×7×3×5 bias experiment written up for CATS 2026). Give each the full Problem → Approach → Stack → Outcome treatment instead of a one-line bullet — most portfolios don't have research-grade project design like this, it's a differentiator worth the space.
- **Be careful with the Endava work**: it's client/employer work (insurance underwriting workbench on Azure/Snowflake) — before writing that case study, confirm with him what's shareable without violating client confidentiality; keep the public version high-level (approach, tech, outcome) and skip specifics that could identify the client.
- **Certifications as a credibility strip, not a CV line**: five certifications earned in a five-month window (Sep–Dec 2025) shows fast, deliberate upskilling — a compact badge row communicates this in one glance instead of requiring a read.
- **The leadership/international section is an asset, not filler**: most data engineering portfolios are pure-technical and read identically. Community management, an EU accelerator cohort, and organizing an AI governance hackathon signal communication and stakeholder-facing skills that are exactly what the Endava bullet about "translating business concepts... working directly with client stakeholders" already hints at — a dedicated (but compact) section reinforces that this isn't just someone who writes pipelines in isolation.
- **MSc in progress is a forward signal**: an Uppsala MSc in Data Science (2026–2028) alongside a current Data Engineer role suggests active specialization — worth a line in the Hero/About so it reads as "leveling up" rather than "still a student."
- **Structured resume, not just a PDF**: keep the on-page Experience/Skills/Certifications sections (built from content collections) in addition to the downloadable PDF — helps both human skimmers and ATS parsing, and lets each section be scanned independently.
- **Own the "instant loading" claim**: since `CLAUDE.md` calls out Astro for speed, actually hit a top Lighthouse performance score — for someone whose Endava work is literally about cutting processing time by 90%, a fast, well-engineered personal site is a coherent, self-consistent signal rather than a throwaway claim.
- **Direct, low-friction contact**: email + LinkedIn + GitHub links in the Hero itself (not buried in a Contact section) — recruiters skim.

---

## Verification

1. `npm run dev` — confirm the shell layout renders (header, empty-but-structured sections, footer) with correct fonts/colors from the Tailwind theme, no console errors.
2. `npm run build && npm run preview` — confirm production build succeeds and looks the same.
3. `astro check` — no type errors, content collection schemas validate against their placeholder entries.
4. `npm run lint` / `npm run format` — both run cleanly per `CLAUDE.md`'s mandate.
5. Manual responsive check (mobile width) since no UI copy exists yet, focus on section spacing/grid behavior collapsing correctly.
6. Push to a feature branch first, confirm the PR-check CI workflow passes, before merging to `master` and confirming the Pages deploy workflow succeeds end-to-end.

## Follow-ups (reminders for after this work)

- Remind user about the GitHub PAT embedded in the `origin` remote URL — recommend revoking/rotating and switching to SSH or a credential manager. (User explicitly asked to be reminded of this after the build work is done.)
- Before writing final on-page prose: confirm with the user what (if anything) about the Endava underwriting-workbench project is safe to describe publicly, given client confidentiality.
- Decide on a headshot/photo (or intentionally go without one) for the Hero/About section.
