# Overgrow SEO/GEO Audit

_Run: 2026-05-01 12:00_
_Scope: all_
_Pages audited: 1_

## Summary

- **Critical issues:** 2 (blocks indexing or major ranking loss)
- **High:** 4
- **Medium:** 2
- **Low / polish:** 2

Top 5 fixes by impact:
1. Add a `<title>` and meta `description` to the homepage — the site currently ships with no title, so SERPs and AI answers will fall back to whatever Next.js renders by default.
2. Add OpenGraph + Twitter card metadata (title, description, 1200×630 image, url, type) so X link previews stop rendering blank — this matters more than usual because X is Kyle's primary distribution channel.
3. Add JSON-LD `Person` + `WebSite` schema in `app/layout.tsx` so Google and AI overviews can extract Kyle as an entity (name, jobTitle, sameAs, alumniOf).
4. Add a self-referential canonical URL.
5. Fix the email mismatch in `app/page.tsx:64-65` (display reads `kyle@kylecui.dev`, `mailto:` href reads `kyle@kylecui.com`) — broken contact link.

## Findings by page

### `/` (homepage)
_Source: `app/page.tsx` (content) + `app/layout.tsx` (metadata)_

- [critical] **Title tag:** No `title` set in `metadata` (`app/layout.tsx:8-18` only declares `icons` + `manifest`). The page will render with a fallback or empty title. **Fix:** add `title: "Kyle Cui — growth for consumer apps"` (or similar 50–60 char keyword + brand) plus a `metadataBase` and `title.template` for future routes.
- [critical] **Meta description:** Missing entirely. **Fix:** add `description` to the `metadata` export, ~120–158 chars, leading with what the site is and Kyle's track record (Berkeley, Antler, Fish Audio 3M→12M ARR).
- [high] **OpenGraph:** No `openGraph` block in `metadata`. Sharing kylecui.dev on X, LinkedIn, or iMessage will render with no image or summary. **Fix:** add `openGraph: { title, description, url: "https://kylecui.dev", siteName: "Kyle Cui", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kyle Cui" }], type: "profile" }` and create `/public/og.png`.
- [high] **Twitter card:** No `twitter` block. **Fix:** add `twitter: { card: "summary_large_image", creator: "@kile_sway", title, description, images: ["/og.png"] }`.
- [high] **Canonical:** No canonical URL set. **Fix:** add `alternates: { canonical: "https://kylecui.dev" }` plus a `metadataBase: new URL("https://kylecui.dev")`.
- [high] **Structured data:** No JSON-LD on the page. As a personal site, the strongest entity signal is `Person` + `WebSite`. **Fix:** inject a `<script type="application/ld+json">` in `app/layout.tsx` with `Person` (name, url, jobTitle, sameAs: [twitter, spotify, fish.audio team page if any], alumniOf: "UC Berkeley", knowsAbout: ["growth", "consumer software"]) and `WebSite`. Combine into a `@graph`.
- [medium] **Heading hierarchy:** Single H1, then a flat run of `<p>` blocks. No H2/H3 to chunk the bio for AI extraction (LLMs cite the section nearest the matching heading). **Fix:** if the visual minimalism is sacred, leave the visible page alone but consider a hidden semantic structure or, better, add small visible H2s like "Background", "Now", "Contact" — each scoped to one paragraph. This is a judgment call; flag is not a must-fix.
- [medium] **Email mismatch:** In `app/page.tsx:64`, the `mailto:` href is `kyle@kylecui.com` while the visible label on line 65 is `kyle@kylecui.dev`. Clicking the link sends to a different address than the one displayed. **Fix:** change the href to `mailto:kyle@kylecui.dev` (matches the domain you actually own and matches the README).
- [low] **First-paragraph lead:** "Be undeniable." is a great vibe but doesn't tell a search engine or LLM what the page is about. The next paragraph defines it ("when i was 21 i graduated…"), but the lead is the highest-signal block. **Fix:** consider letting the second paragraph be the AI-extractable lead (it already works), or add a one-line `<meta name="description">`-style summary at the top. Low priority — the meta description fix above absorbs this.
- [low] **Factual claim without source:** "taking us from 3M to 12M ARR during my four months there" (`app/page.tsx:48`) is a strong specific claim with no link to a public source. For GEO, citable claims rank higher when verifiable. **Fix:** if there's a public press mention or interview, link the number. If not, leave as-is — Kyle's voice matters more than citation here.

## Cross-page findings

- **Duplicate titles:** N/A (one page, one title — currently both empty).
- **Duplicate descriptions:** N/A.
- **Orphan pages:** N/A — single-page site, so dead-end is structural, not a defect. Will become relevant once `spawn-pages` adds an `/about` or `/writing`.
- **Missing schema by category:** `homepage` is missing the `Person` + `WebSite` pair recommended for personal sites.
- **Sitemap / robots:** No `sitemap.xml` and no `robots.txt`. Out of strict per-page scope but relevant — see the `sitemap` skill.
- **`html lang`:** Present (`lang="en"` on `app/layout.tsx:46`). ✓

## Clean pages

_None — the only page in scope has findings._

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ █▄▄ █▀█ █▄ █ █▀▀ █▀▄▀█ █▀▀ ▄▀█ █                                                                 │
│ █▄█ █▄█ █ ▀█ ██▄ █ ▀ █ ██▄ █▀█ █▄▄     overgrow · seo / geo audit · fertilize your site          │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░▒░│
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
┌─ SUMMARY ────────────────────┐ ┌─ HEALTH ─────────────────────┐ ┌─ PAGE STATUS ────────────────┐
│ site   kylecui.dev           │ │           60/100             │ │ ✓ clean ░░░░░░░░░░░░░░    0  │
│ scope  all                   │ │ ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░     60% │ │ ! warn  ░░░░░░░░░░░░░░    0  │
│ pages  1                     │ │                              │ │ ✗ crit  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓    1  │
│ run    2026-05-01 12:00      │ │ C  fixable, not yet          │ │                              │
└──────────────────────────────┘ └──────────────────────────────┘ └──────────────────────────────┘
┌─ SEVERITY ───────────────────┐ ┌─ CHECKS ─────────────────────┐ ┌─ TOP FIXES ──────────────────┐
│ crit ▓▓▓▓▓▓▓▓▓░░░░░░░░░    2 │ │ titles    ▓▓▓▓▓▓░░░░░░     1 │ │ 1 add <title> + meta desc    │
│ high ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    4 │ │ meta      ▓▓▓▓▓▓░░░░░░     1 │ │ 2 add OG + Twitter cards     │
│ med  ▓▓▓▓▓▓▓▓▓░░░░░░░░░    2 │ │ heading   ▓▓▓▓▓▓░░░░░░     1 │ │ 3 add JSON-LD Person schema  │
│ low  ▓▓▓▓▓▓▓▓▓░░░░░░░░░    2 │ │ canonical ▓▓▓▓▓▓░░░░░░     1 │ │ 4 add canonical to /         │
│ ──────────────────────────── │ │ og        ▓▓▓▓▓▓▓▓▓▓▓▓     2 │ │ 5 fix mailto domain typo     │
│ total                     10 │ │ schema    ▓▓▓▓▓▓░░░░░░     1 │ │                              │
│                              │ │ content   ▓▓▓▓▓▓▓▓▓▓▓▓     2 │ │ next ✦                       │
│ ✦ bonemeal grows the site    │ │ links     ░░░░░░░░░░░░     0 │ │  → .overgrow/audit.md        │
│ ✦ fix crits before sprouting │ │ indexable ░░░░░░░░░░░░     0 │ │  → spawn-pages · blogs       │
│ ✦ mine schema, plant anchors │ │ geo       ▓▓▓▓▓▓░░░░░░     1 │ │  → spawn-internal-links      │
└──────────────────────────────┘ └──────────────────────────────┘ └──────────────────────────────┘
             ▓▓ overgrow · bonemeal · 2026-05-01 12:00      ·  grow your site ▓▓
```
