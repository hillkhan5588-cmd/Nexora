/**
 * app/knowledge-center/[vertical]/page.tsx
 *
 * Vertical hub — e.g. /knowledge-center/pdf
 * This is the pillar page for its vertical: lists every article in that
 * vertical. (Related tools + resources modules get added here once the
 * Tools and Resources pillars are wired up — placeholders noted below.)
 */

import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { isValidVertical, VERTICALS, type Vertical } from "@/lib/taxonomy";
import { getArticlesByVertical } from "@/lib/content";
import { KCArticleCard } from "@/components/KCArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface Props {
  params: { vertical: string };
}

export function generateStaticParams() {
  return Object.keys(VERTICALS).map((vertical) => ({ vertical }));
}

export function generateMetadata({ params }: Props) {
  if (!isValidVertical(params.vertical)) return {};
  const meta = VERTICALS[params.vertical];
  return buildMetadata({
    title: `${meta.label} Guides & Tutorials`,
    description: `${meta.description} Tutorials, guides, reviews, and comparisons for ${meta.label}.`,
    path: `/knowledge-center/${meta.slug}`,
  });
}

export default function VerticalHubPage({ params }: Props) {
  if (!isValidVertical(params.vertical)) notFound();

  const vertical = params.vertical as Vertical;
  const meta = VERTICALS[vertical];
  const articles = getArticlesByVertical(vertical);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs
        items={[
          { name: "Knowledge Center", path: "/knowledge-center" },
          { name: meta.label, path: `/knowledge-center/${vertical}` },
        ]}
      />

      <header className="mb-10">
        <h1 className="mb-3 flex items-center gap-2 text-3xl font-bold text-slate-900">
          <span aria-hidden="true">{meta.icon}</span>
          {meta.label} Guides
        </h1>
        <p className="max-w-2xl text-slate-600">{meta.description}</p>
      </header>

      {/* TODO once Tools pillar is wired: <RelatedTools vertical={vertical} /> */}
      {/* TODO once Resources pillar is wired: <RelatedResources vertical={vertical} /> */}

      {articles.length === 0 ? (
        <p className="text-slate-500">
          No {meta.label} guides published yet — check back soon.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <KCArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </main>
  );
}
