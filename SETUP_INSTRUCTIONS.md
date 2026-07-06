# NEXORA – Knowledge Center Batch 1 (SAFE MERGE VERSION)

This zip was checked directly against your live repo (hillkhan5588-cmd/Nexora).

## Do NOT delete your existing app/components/lib folders.
This is an ADDITIVE batch — it only adds new files/folders. Your existing
articles.ts, Header.tsx, Footer.tsx, ToolCard.tsx, ArticleCard.tsx, etc.
are NOT part of this batch and must stay untouched.

## What changed vs. the original batch
- The batch's ArticleCard.tsx conflicted with your EXISTING components/ArticleCard.tsx
  (different data schema — yours uses lib/types.ts, this one uses the new lib/content.ts).
  It has been renamed to `components/KCArticleCard.tsx` and all references updated.
  Your existing ArticleCard.tsx is left completely alone.

## How to upload (browser only, no terminal)
1. Unzip this file on your computer.
2. Go to https://github.com/hillkhan5588-cmd/Nexora (repo root, "main" branch).
3. Click "Add file" -> "Upload files".
4. Drag these folders from the unzip into the upload box:
   - app/
   - components/
   - content/
   - lib/
   GitHub will merge them into your existing app/, components/, lib/ folders
   and create the new content/ folder. Nothing existing gets deleted.
5. Commit message: "Add Knowledge Center taxonomy + PDF vertical (batch 1, safe merge)"
6. Commit directly to main (or open a PR if you prefer to review diffs first).
7. Vercel auto-deploys.

## Files in this batch
- app/categories/page.tsx
- app/knowledge-center/page.tsx
- app/knowledge-center/format/[format]/page.tsx
- app/knowledge-center/[vertical]/page.tsx
- app/knowledge-center/[vertical]/[slug]/page.tsx
- app/resources/page.tsx (stub)
- app/tools/page.tsx (stub)
- components/KCArticleCard.tsx (renamed from ArticleCard.tsx to avoid clash)
- components/Badges.tsx
- components/Breadcrumbs.tsx
- content/knowledge-center/pdf/index.ts
- lib/content.ts
- lib/seo.ts (canonical URL fix — check against your existing lib if you have SEO helpers elsewhere)
- lib/taxonomy.ts

## Still needs your attention after merge
- app/layout.tsx was NOT touched. Once merged, send me your current layout.tsx
  and I'll wire in nav links for Tools / Knowledge Center / Categories / Resources.
- lib/seo.ts — your repo doesn't currently have a dedicated SEO helper file,
  so this is a new addition, not a conflict. Confirm it doesn't duplicate logic
  already inline in your page.tsx files.
