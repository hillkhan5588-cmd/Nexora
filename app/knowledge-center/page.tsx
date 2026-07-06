/**
 * app/knowledge-center/page.tsx
 *
 * Knowledge Center hub — the pillar landing page.
 * Surfaces both browse axes (Format and Vertical) rather than a
 * chronological post feed, per the "not a generic blog" requirement.
 */

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { FORMAT_LIST, VERTICAL_LIST } from "@/lib/taxonomy";
import { getAllArticles } from "@/lib/content";
import { KCArticleCard } from "@/components/KCArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Knowledge Center",
  description:
    "Tutorials, guides, reviews, and comparisons covering AI, PDF, image, video, SEO, and developer tools.",
  path: "/knowledge-center",
});

export default function KnowledgeCenterPage() {
  const articles = getAllArticles();
  const featured = articles.slice(0, 6);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs items={[{ name: "Knowledge Center", path: "/knowledge-center" }]} />

      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">Knowledge Center</h1>
        <p className="max-w-2xl text-slate-600">
          Practical tutorials, guides, and comparisons for every tool in the NEXORA
          directory — organized by what you need to do, not by publish date.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Browse by format</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {FORMAT_LIST.map((format) => (
            <Link
              key={format.slug}
              href={`/knowledge-center/format/${format.slug}`}
              className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              {format.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Browse by topic</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {VERTICAL_LIST.map((vertical) => (
            <Link
              key={vertical.slug}
              href={`/knowledge-center/${vertical.slug}`}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              <span aria-hidden="true">{vertical.icon}</span>
              {vertical.label}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Latest</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <KCArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
