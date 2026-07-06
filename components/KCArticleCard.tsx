/**
 * components/ArticleCard.tsx
 *
 * Mirrors the existing "guide card" pattern from the live site
 * (badge + title + excerpt + read-time + date). Swap the className
 * tokens for your exact existing card classes once confirmed against
 * the real repo — structure and content slots are what matter here.
 */

import Link from "next/link";
import type { Article } from "@/lib/content";
import { getArticleCanonicalPath } from "@/lib/content";
import { FormatBadge, VerticalBadge } from "./Badges";

export function KCArticleCard({ article }: { article: Article }) {
  const href = getArticleCanonicalPath(article);

  return (
    <Link
      href={href}
      className="block rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        <FormatBadge format={article.format} linked={false} />
        <VerticalBadge vertical={article.verticals[0]} linked={false} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{article.title}</h3>
      <p className="mb-4 text-sm text-slate-600">{article.excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <span>{article.readTimeMinutes} min read</span>
        <span aria-hidden="true">·</span>
        <time dateTime={article.publishedDate}>
          {new Date(article.publishedDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
