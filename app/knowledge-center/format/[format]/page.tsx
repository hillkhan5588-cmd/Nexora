/**
 * app/knowledge-center/format/[format]/page.tsx
 *
 * Format hub — e.g. /knowledge-center/format/comparisons
 * A cross-vertical listing page. This page NEVER owns a canonical article
 * URL — it only links out to each article's canonical home under its
 * vertical, preventing duplicate-content issues between format and
 * vertical hubs.
 */

import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { FORMATS, isValidFormat, type Format } from "@/lib/taxonomy";
import { getArticlesByFormat } from "@/lib/content";
import { KCArticleCard } from "@/components/KCArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface Props {
  params: { format: string };
}

export function generateStaticParams() {
  return Object.keys(FORMATS).map((format) => ({ format }));
}

export function generateMetadata({ params }: Props) {
  if (!isValidFormat(params.format)) return {};
  const meta = FORMATS[params.format];
  return buildMetadata({
    title: meta.label,
    description: `${meta.description} Browse every ${meta.label.toLowerCase()} across AI, PDF, image, video, and more.`,
    path: `/knowledge-center/format/${meta.slug}`,
  });
}

export default function FormatHubPage({ params }: Props) {
  if (!isValidFormat(params.format)) notFound();

  const format = params.format as Format;
  const meta = FORMATS[format];
  const articles = getArticlesByFormat(format);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs
        items={[
          { name: "Knowledge Center", path: "/knowledge-center" },
          { name: meta.label, path: `/knowledge-center/format/${format}` },
        ]}
      />

      <header className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">{meta.label}</h1>
        <p className="max-w-2xl text-slate-600">{meta.description}</p>
      </header>

      {articles.length === 0 ? (
        <p className="text-slate-500">No {meta.label.toLowerCase()} published yet.</p>
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
