# Review — 2026-03-26

Commits reviewed: `f91905d` → `88861ef`

---

## Critical

**[C1] Build fails — standalone output can't copy edge-runtime .wasm file**
`next.config.mjs` + `app/opengraph-image.tsx:3`
`npm run build` exits 1 during "Collecting build traces":
```
ENOENT: no such file or directory, copyfile
  .next/server/edge-chunks/wasm_ef4866ecae192fd87727067cf2c0c0cf9fb8b020.wasm
  → .next/standalone/.next/server/edge-chunks/...
```
Root cause: `output: 'standalone'` + `export const runtime = "edge"` in `opengraph-image.tsx` triggers a Next.js 14 bug where the wasm chunk is referenced but not present when traces are collected.
Fix: remove `export const runtime = "edge"` from `opengraph-image.tsx` (Node.js runtime is sufficient for OG images), or add `outputFileTracingIncludes` in `next.config.mjs`.

**[C2] Placeholder affiliate IDs live in production**
`app/itinerary/[slug]/page.tsx:207,220,232`
All three "Book on Klook" links use `?aid=AFFILIATE_ID_HERE`. No affiliate revenue is earned; the parameter is visibly broken. The TODO comment on line 196 acknowledges this.
Fix: replace with real Klook affiliate ID or strip the `?aid=` param until available.

---

## Major

**[M1] Welcome email re-sent to already-subscribed contacts**
`app/api/subscribe/route.ts:33–36`
When Resend returns 409 (contact exists), the error check on line 33 passes (`!== 409`), so execution falls through to `resend.emails.send()` on line 202. Re-subscribers receive the Week 1 welcome email again.
Fix: add an early return on 409, or only send the email when `contactRes.error` is null.

**[M2] `ic-card-japan` missing from sitemap**
`lib/site.ts:44–52`
The `guides` array has 7 entries — `ic-card-japan` is absent. The page exists (`app/guides/ic-card-japan/page.tsx`) and is listed in the guides hub, but `sitemap.ts` iterates this array, so `/guides/ic-card-japan` is never emitted.
Fix: add `{ slug: "ic-card-japan", lastModified: "2026-03-26" }` to the array.

---

## Minor

None identified beyond the above.
