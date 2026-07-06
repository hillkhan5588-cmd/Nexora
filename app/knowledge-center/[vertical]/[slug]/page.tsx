/**
 * app/knowledge-center/[vertical]/[slug]/page.tsx
 *
 * Individual article — the canonical URL for every Knowledge Center piece.
 * Reuses the existing article template structure (TOC, FAQ, related guides,
 * author bio) described in the audit — swap in your real components for
 * ToolReviewCard / ComparisonTable / TableOfContents once repo access
 * confirms their prop signatures.
 */

import { notFound } from "next/navigation";
import { buildArticleSchema, buildFaqSchema, buildMetadata, buildShareUrls } from "@/lib/seo";
import { isValidVertical, VERTICALS, type Vertical } from "@/lib/taxonomy";
import { getArticleBySlug, getArticleCanonicalPath, getRelatedArticles } from "@/lib/content";
import { KCArticleCard } from "@/components/KCArticleCard";
import { FormatBadge, VerticalBadge } from "@/components/Badges";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface Props {
  params: { vertical: string; slug: string };
}

export function generateMetadata({ params }: Props) {
  if (!isValidVertical(params.vertical)) return {};
  const article = getArticleBySlug(params.vertical as Vertical, params.slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: getArticleCanonicalPath(article),
    type: "article",
    publishedTime: article.publishedDate,
    modifiedTime: article.updatedDate,
  });
}

export default function ArticlePage({ params }: Props) {
  if (!isValidVertical(params.vertical)) notFound();

  const vertical = params.vertical as Vertical;
  const article = getArticleBySlug(vertical, params.slug);
  if (!article) notFound();

  const verticalMeta = VERTICALS[vertical];
  const path = getArticleCanonicalPath(article);
  const shareUrls = buildShareUrls(path, article.title); // fixes the hardcoded nexora.com share bug
  const relatedArticles = getRelatedArticles(article);

  const articleSchema = buildArticleSchema({
    title: article.title,
    description: article.excerpt,
    path,
    publishedTime: article.publishedDate,
    modifiedTime: article.updatedDate,
    authorName: article.author,
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Breadcrumbs
        items={[
          { name: "Knowledge Center", path: "/knowledge-center" },
          { name: verticalMeta.label, path: `/knowledge-center/${vertical}` },
          { name: article.title, path },
        ]}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        <FormatBadge format={article.format} />
        {article.verticals.map((v) => (
          <VerticalBadge key={v} vertical={v} />
        ))}
      </div>

      <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">{article.title}</h1>
      <p className="mb-6 text-lg text-slate-600">{article.excerpt}</p>

      <div className="mb-8 flex items-center gap-4 border-y border-slate-200 py-3 text-sm text-slate-500">
        <span>By {article.author}</span>
        <span aria-hidden="true">·</span>
        <span>{article.readTimeMinutes} min read</span>
        <span aria-hidden="true">·</span>
        <div className="ml-auto flex gap-3">
          <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            Share on X
          </a>
          <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Article body — replace with your existing rich-text/MDX renderer */}
      <article className="prose prose-slate max-w-none">{article.body}</article>

      {/* TODO once Tools pillar is wired: render RelatedTools using article.relatedToolSlugs */}

      {article.faq && article.faq.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
          <div className="space-y-4">
            {article.faq.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 p-4">
                <summary className="cursor-pointer font-medium text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(article.faq)) }}
          />
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Related guides</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedArticles.map((related) => (
              <KCArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
