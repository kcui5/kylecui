# Overgrow SEO/GEO Audit

_Run: 2026-05-01 12:30 (post-fix)_
_Scope: all_
_Pages audited: 1_

## Summary

- **Critical issues:** 0
- **High:** 0
- **Medium:** 1 (accepted by owner — minimalist single-page is the design intent)
- **Low / polish:** 2

The technical-SEO baseline is in place. All critical and high findings from the prior run are resolved. What remains are two stylistic notes and one accepted tradeoff (single-prose-block structure with no H2/H3 chunking — owner's explicit choice).

Top remaining items (non-blocking):
1. After deploy, paste `https://kylecui.dev` into [opengraph.xyz](https://www.opengraph.xyz/) or X's card validator and confirm the preview renders with `og.jpg`.
2. After deploy, run the rendered HTML through the [Schema.org validator](https://validator.schema.org/) and Google's [Rich Results Test](https://search.google.com/test/rich-results) to confirm the `Person` + `WebSite` graph is parsed cleanly.
3. Submit `https://kylecui.dev/sitemap.xml` to Google Search Console once the domain is verified.

## Findings by page

### `/` (homepage)
_Source: `app/page.tsx` (content) + `app/layout.tsx` (metadata + JSON-LD)_

- [medium · accepted] **Heading hierarchy:** Single H1 followed by a flat run of `<p>` blocks — no H2/H3 to chunk the bio for AI extraction. **Status:** accepted by owner. The visual minimalism is the design intent. Flagged here only so the tradeoff is documented; do not fix.
- [low] **First-paragraph lead:** "Be undeniable." is a strong vibe but does not establish the page's topic for an LLM extracting at the first paragraph. The meta description in `app/layout.tsx:9-10` covers this for crawlers and for AI overviews, so the impact is small. No fix needed.
- [low] **Factual claim without source:** "taking us from 3M to 12M ARR during my four months there" (`app/page.tsx:48`) is a strong specific claim with no public citation. **Status:** owner has chosen voice over citation. No fix.

## Resolved since prior audit

- ~~Missing title tag~~ → set in `app/layout.tsx:14-17` (with `template: "%s — Kyle Cui"` so any future route inherits the brand).
- ~~Missing meta description~~ → set in `app/layout.tsx:18`, 159 chars, mirrors homepage positioning.
- ~~Missing canonical~~ → `alternates.canonical: "/"` plus `metadataBase` (`app/layout.tsx:13, 19-21`).
- ~~Missing OpenGraph~~ → full `openGraph` block with `type: "profile"`, 1200×630 image at `/og.jpg`.
- ~~Missing Twitter card~~ → `summary_large_image` with `creator: "@kile_sway"`.
- ~~Missing JSON-LD~~ → `Person` + `WebSite` `@graph` injected as `<script type="application/ld+json">` in `<body>` (`app/layout.tsx:55-91`). Person includes `alumniOf: UC Berkeley`, `sameAs: [twitter, spotify]`, `knowsAbout: [Growth Engineering, Startups, AI, Computer Science, Cracked Engineering]`, `email`. WebSite references the Person via `@id`.
- ~~No sitemap~~ → `app/sitemap.ts`, served at `/sitemap.xml`.
- ~~No robots.txt~~ → `app/robots.ts`, allow all + sitemap pointer.
- ~~Email mismatch (`kylecui.com` mailto vs `kylecui.dev` label)~~ → both now `kyle@kylecui.dev` (`app/page.tsx:64-65`).
- ~~Empty `name` / `short_name` in `site.webmanifest`~~ → both set to `"Kyle Cui"`.

## Cross-page findings

- **Duplicate titles / descriptions:** N/A (one page).
- **Orphan / dead-end pages:** N/A — single-page site by design.
- **Schema by category:** homepage has the recommended `Person` + `WebSite` pair. ✓
- **`html lang`:** `en` set in `app/layout.tsx:46`. ✓
- **Robots / sitemap:** both present and verified by `next build` (routes generated as static). ✓

## Validation checklist (run after next deploy)

- [ ] `curl -sI https://kylecui.dev/sitemap.xml` returns 200 with `application/xml` content type.
- [ ] `curl -sI https://kylecui.dev/robots.txt` returns 200 and the body lists the sitemap.
- [ ] `view-source:https://kylecui.dev` includes the `<script type="application/ld+json">` block with both `@type: Person` and `@type: WebSite`.
- [ ] `https://kylecui.dev/og.jpg` returns 200 (1200×630, ~22KB).
- [ ] X / Twitter card validator renders the preview with the OG image.
- [ ] Google Rich Results Test parses `Person` cleanly.

## Clean pages

- `/` — only the medium "accepted tradeoff" and two low-severity stylistic notes remain.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ █▄▄ █▀█ █▄ █ █▀▀ █▀▄▀█ █▀▀ ▄▀█ █                                                                 │
│ █▄█ █▄█ █ ▀█ ██▄ █ ▀ █ ██▄ █▀█ █▄▄     overgrow · seo / geo audit · fertilize your site          │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░│
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─ SUMMARY ────────────────────┐ ┌─ HEALTH ─────────────────────┐ ┌─ PAGE STATUS ────────────────┐
│ site   kylecui.dev           │ │           97/100             │ │ ✓ clean ░░░░░░░░░░░░░░    0  │
│ scope  all                   │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░     97% │ │ ! warn  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓    1  │
│ pages  1                     │ │                              │ │ ✗ crit  ░░░░░░░░░░░░░░    0  │
│ run    2026-05-01 12:30      │ │ A  ship it                   │ │                              │
└──────────────────────────────┘ └──────────────────────────────┘ └──────────────────────────────┘
┌─ SEVERITY ───────────────────┐ ┌─ CHECKS ─────────────────────┐ ┌─ TOP FIXES ──────────────────┐
│ crit ░░░░░░░░░░░░░░░░░░    0 │ │ titles    ░░░░░░░░░░░░     0 │ │ 1 validate OG after deploy   │
│ high ░░░░░░░░░░░░░░░░░░    0 │ │ meta      ░░░░░░░░░░░░     0 │ │ 2 validate JSON-LD schema    │
│ med  ▓▓▓▓▓▓░░░░░░░░░░░░    1 │ │ heading   ▓▓▓▓▓▓░░░░░░     1 │ │ 3 submit sitemap to GSC      │
│ low  ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░    2 │ │ canonical ░░░░░░░░░░░░     0 │ │ 4 (none — ship it)           │
│ ──────────────────────────── │ │ og        ░░░░░░░░░░░░     0 │ │ 5 (none — ship it)           │
│ total                      3 │ │ schema    ░░░░░░░░░░░░     0 │ │                              │
│                              │ │ content   ▓▓▓▓▓▓▓▓▓▓▓▓     2 │ │ next ✦                       │
│ ✦ bonemeal grows the site    │ │ links     ░░░░░░░░░░░░     0 │ │  → .overgrow/audit.md        │
│ ✦ fix crits before sprouting │ │ indexable ░░░░░░░░░░░░     0 │ │  → spawn-pages · blogs       │
│ ✦ mine schema, plant anchors │ │ geo       ░░░░░░░░░░░░     0 │ │  → spawn-internal-links      │
└──────────────────────────────┘ └──────────────────────────────┘ └──────────────────────────────┘
             ▓▓ overgrow · bonemeal · 2026-05-01 12:30      ·  grow your site ▓▓
```
