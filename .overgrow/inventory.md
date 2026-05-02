# Overgrow Inventory

_Generated: 2026-05-01 (refresh after technical-SEO pass)_
_Site root: /Users/kyle/kylecui_
_Framework: Next.js 16.1.7 (App Router, React 19, Turbopack)_

## Product

- **Name:** Kyle Cui (personal site at kylecui.dev)
- **One-liner:** Personal landing page for Kyle Cui — a 23-year-old growth-obsessed builder focused on consumer applications.
- **Primary audience:** Recruiters, founders, investors, and peers who land on kylecui.dev after seeing Kyle on X.
- **Secondary audiences:** Potential collaborators or hires evaluating Kyle's track record (UC Berkeley CS Honors + Physics, Antler Residency, Fish Audio growth from $3M → $12M ARR in 4 months).
- **Verticals / industries:** Consumer software, growth, AI consumer apps.
- **Key differentiators:**
  - Track record of measurable growth at Fish Audio (3M → 12M ARR in four months)
  - Bootstrapped Antler Residency startup (real revenue, not just slides)
  - Strong thesis: engineering value → 0, growth is the moat
  - Distinctive typographic identity (Mea Culpa script + Press Start 2P pixel)
  - Personal voice in copy, not a templated dev portfolio
- **Source of truth:** Homepage hero (`app/page.tsx`) — README is a 2-line stub. Metadata description in `app/layout.tsx` mirrors the homepage's positioning so SERPs and AI overviews see the same story.

## Routing

- **Framework:** Next.js 16.1.7, App Router (`app/` directory)
- **Page roots:** `app/`
- **Content roots:** none (no MDX, no markdown content directories)
- **Sitemap location:** `app/sitemap.ts` → served at `/sitemap.xml` (single entry: `/`).
- **Robots location:** `app/robots.ts` → served at `/robots.txt` (allow all, points at `/sitemap.xml`).
- **i18n:** none
- **CMS:** none — content is hardcoded JSX

## Authoring conventions

- **Landing / product pages**
  - **File extension:** `.tsx`
  - **Layout wrapper:** Root layout at `app/layout.tsx` wraps every route in `<ThemeProvider>` and injects a JSON-LD `<script>` in `<body>`. Pages do not import a per-page layout — `app/page.tsx` returns `<main>` directly.
  - **Metadata pattern:** Next.js App Router `export const metadata: Metadata` in `app/layout.tsx`. The current export is the canonical shape for any future route to mirror: `metadataBase`, `title` with `default` + `template`, `description`, `alternates.canonical`, `openGraph` (type/url/siteName/title/description/images), `twitter` (`summary_large_image` + `creator`), `icons`, `manifest`. New routes should colocate a `metadata` export in their own `page.tsx` and only override `title` / `description` / `alternates.canonical` — the rest inherits from the root layout.
  - **Structured data:** JSON-LD `Person` + `WebSite` `@graph` defined as a const in `app/layout.tsx` and rendered via `<script type="application/ld+json" dangerouslySetInnerHTML={...}>` inside `<body>`. New page-specific schema (e.g. `Article` for a future blog post) should follow the same `dangerouslySetInnerHTML` pattern, scoped per-route.
  - **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`), `tw-animate-css`, `tailwind-merge`, `clsx`, `class-variance-authority`. shadcn/ui scaffold is installed (`components.json`, `components/ui/button.tsx`) but only `Button` exists. Custom CSS in `app/globals.css` (e.g. `stone-wash` class on `<main>`).
  - **Reusable section components found:** none — `app/page.tsx` is a single hand-built layout. The only shared components are `<TrackedLink>` (`components/tracked-link.tsx`, PostHog click tracking) and `<ThemeProvider>` / `<ThemeHotkey>` (press `d` to toggle dark mode). UI primitive: `<Button>` (`components/ui/button.tsx`).
  - **Example page to mirror:** `app/page.tsx` (the only page on the site).
- **Blog posts**
  - none yet — and intentionally so. The owner has explicitly opted out of new pages.
- **Placeholder idiom:** `{/* placeholder: ... */}` for JSX/TSX (only relevant if new routes are ever added).

## Page inventory

### Homepage

| Route | Source | H1 | Title | Meta description | Purpose |
|---|---|---|---|---|---|
| `/` | `app/page.tsx` | "Kyle Cui" (composed across three styled `<span>`s in one `<h1>`) | "Kyle Cui" | "Kyle Cui — UC Berkeley CS Honors + Physics, ex-Fish Audio (3M → 12M ARR in four months). Obsessed with systematizing growth for consumer applications." | Single-page bio: Kyle's background, thesis on growth vs. engineering, contact links (email, X, Spotify). |

### Generated routes (non-content)

| Route | Source | Purpose |
|---|---|---|
| `/sitemap.xml` | `app/sitemap.ts` | Discovery — single-entry sitemap pointing at `/`. |
| `/robots.txt` | `app/robots.ts` | Allow all crawlers, advertises sitemap location. |

## Semantic pillars

This is intentionally a single-page personal site. The owner has decided not to add `/about`, `/work`, `/writing`, or any other route. Pillars do not apply at the current scope — the site exists to be a punchy, hand-tuned bio surface, not a content engine. If that decision is ever revisited, the natural pillars to seed would be growth for consumer apps, founder/operator track record, and personal essays.

## Content gaps

Per owner's explicit decision, the site is intentionally one page. The "gaps" below are documented for completeness only — they are *not* fixes to pursue.

- No `/about`, `/work`, `/writing` — owner does not want them.
- No blog or notes surface — owner does not want one.
- No comparison or pricing pages — N/A for a personal site.

## Notes

- Email mismatch (mailto vs display) was found and fixed: now `kyle@kylecui.dev` consistently.
- Technical SEO baseline shipped on 2026-05-01: title, description, canonical, OG (with `og.jpg` 1200×630), Twitter card, JSON-LD `Person` + `WebSite`, sitemap, robots, and `site.webmanifest` `name` / `short_name`. See `.overgrow/audit.md` for the post-fix audit.
- The site is intentionally minimalist — single page, hand-tuned typography, no chrome. Any future spawn skill should respect that aesthetic.
- `<TrackedLink>` wraps PostHog event capture (`external_link_clicked`) — any new outbound link should use it instead of a raw `<a>` so analytics stay consistent. Internal navigation should use `next/link`.
- Theme toggle is a hidden hotkey (`d`) with no visible UI — by design.
- shadcn/ui is installed but only `Button` is generated. Tailwind v4 config lives in `app/globals.css` via `@theme`, not `tailwind.config.*`.
