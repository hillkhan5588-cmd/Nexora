/**
 * app/tools/[slug]/page.tsx
 *
 * Individual AI tool profile page — one template, rendering any entry
 * from lib/tools.ts (same pattern as the Knowledge Center's
 * app/knowledge-center/[vertical]/[slug]/page.tsx).
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  buildMetadata,
  buildFaqSchema,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";
import { getToolBySlug, getRelatedTools, getAllToolSlugs } from "@/lib/tools";
import { ToolProfileHero } from "@/components/ToolProfileHero";
import { KeyFeatureCards, UseCaseCards } from "@/components/UseCaseCards";
import { ProsConsList } from "@/components/ProsConsList";
import { PricingTiers } from "@/components/PricingTiers";
import { ToolAlternatives } from "@/components/ToolAlternatives";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return buildMetadata({
    title: `${tool.name} Review: Features, Pricing & Alternatives (2026)`,
    description: `${tool.tagline}. See ${tool.name}'s key features, pros, cons, pricing, and the best alternatives before you commit.`,
    path: `/tools/${tool.slug}`,
    type: "article",
  });
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const relatedTools = getRelatedTools(tool);

  const faqSchema = buildFaqSchema(tool.faqs);

  // Note: aggregateRating is intentionally omitted from this schema.
  // Google's structured data guidelines require aggregateRating to reflect
  // genuine user-submitted reviews, not an editorial score — the star
  // rating shown in the hero is presented visually only, not as review schema.
  const softwareSchema = buildSoftwareApplicationSchema({
    name: tool.name,
    description: tool.tagline,
    path: `/tools/${tool.slug}`,
    applicationCategory: "BusinessApplication",
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: tool.name, path: `/tools/${tool.slug}` },
        ]}
      />

      <ToolProfileHero tool={tool} />

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Overview</h2>
        <div className="space-y-4">
          {tool.overview.split(/\n\n+/).map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-slate-700 dark:text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Key Features</h2>
        <KeyFeatureCards features={tool.keyFeatures} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Pros & Cons</h2>
        <ProsConsList pros={tool.pros} cons={tool.cons} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Best Use Cases</h2>
        <UseCaseCards useCases={tool.useCases} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Pricing</h2>
        <PricingTiers tiers={tool.pricingTiers} toolName={tool.name} />
      </section>

      {relatedTools.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Alternatives to {tool.name}</h2>
          <ToolAlternatives tools={relatedTools} />
        </section>
      )}

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {tool.faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
              <summary className="cursor-pointer font-medium text-slate-900 dark:text-white">{faq.question}</summary>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-6">
        <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Final Verdict</h2>
        <p className="mb-2 text-slate-700 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-white">Best for:</strong> {tool.verdict.bestFor}
        </p>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-white">Not for:</strong> {tool.verdict.notFor}
        </p>
        <p className="leading-relaxed text-slate-700 dark:text-slate-300">{tool.verdict.summary}</p>
      </section>

      <p className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        Looking for more options? Browse all{" "}
        <Link href={`/${tool.categorySlug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
          {tool.categoryName}
        </Link>{" "}
        guides, or see every tool in the{" "}
        <Link href="/tools" className="text-blue-600 dark:text-blue-400 hover:underline">
          Tools directory
        </Link>
        .
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    </main>
  );
}
