/**
 * app/categories/writing-ai/page.tsx
 *
 * Primary landing page for the Writing AI category. Reuses existing
 * components (ToolCard, Breadcrumbs) and design tokens throughout —
 * no new design system introduced. Built as a standalone static route
 * alongside the existing /categories index and root-level [category]
 * pages, so it doesn't touch that existing routing.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  buildMetadata,
  buildFaqSchema,
  buildCollectionPageSchema,
  buildItemListSchema,
} from "@/lib/seo";
import { WRITING_TOOLS, toToolRecommendation } from "@/lib/tools";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ToolCard from "@/components/ToolCard";
import { ToolComparisonTable } from "@/components/ToolComparisonTable";

const LAST_UPDATED = "July 7, 2026";

export const metadata = buildMetadata({
  title: "Best AI Writing Tools in 2026: 12 Tools Compared",
  description:
    "An honest, up-to-date comparison of the best AI writing tools in 2026 — Jasper AI, Writesonic, Copy.ai, Grammarly, and more. Features, pricing, and who each tool actually fits.",
  path: "/categories/writing-ai",
  type: "article",
});

const AUDIENCE_RECOMMENDATIONS: { audience: string; icon: string; recommendation: string; slugs: string[] }[] = [
  {
    audience: "Bloggers",
    icon: "✍️",
    recommendation:
      "Writesonic's SEO-focused Article Writer and Frase's research-first briefs are built specifically for ranking-driven blog content.",
    slugs: ["writesonic", "frase"],
  },
  {
    audience: "Students",
    icon: "🎓",
    recommendation:
      "QuillBot and Grammarly cover the two things students need most: reworking existing drafts and catching grammar/clarity issues before submission.",
    slugs: ["quillbot", "grammarly"],
  },
  {
    audience: "SEO Specialists",
    icon: "🔍",
    recommendation:
      "Frase's competitor research and content briefs, paired with Anyword's predictive performance scoring, fit a search-driven workflow well.",
    slugs: ["frase", "anyword"],
  },
  {
    audience: "Marketing Teams",
    icon: "📈",
    recommendation:
      "Jasper AI's brand voice and team collaboration features are built specifically for keeping multiple writers on-brand across campaigns.",
    slugs: ["jasper-ai"],
  },
  {
    audience: "Freelancers",
    icon: "💼",
    recommendation:
      "Copy.ai's genuine free plan and workflow automation make it easy to handle proposals and client work without a big upfront cost.",
    slugs: ["copy-ai", "rytr"],
  },
  {
    audience: "Agencies",
    icon: "🏢",
    recommendation:
      "Jasper AI's shared brand voices across multiple client accounts is a real differentiator for agencies juggling several brands at once.",
    slugs: ["jasper-ai"],
  },
  {
    audience: "Businesses",
    icon: "🏪",
    recommendation:
      "Rytr's low cost and broad template library make it a reasonable starting point for a small business testing AI writing tools for the first time.",
    slugs: ["rytr"],
  },
  {
    audience: "Copywriters",
    icon: "📝",
    recommendation:
      "Anyword's predictive performance scoring and Copy.ai's short-form templates fit the fast-iteration nature of professional copywriting.",
    slugs: ["anyword", "copy-ai"],
  },
];

const RELATED_GUIDES = [
  {
    title: "Best AI Tools for Freelancers to Make More Money in 2026",
    path: "/business-freelancing-ai/best-ai-tools-for-freelancers-2026",
  },
  {
    title: "How to Use AI to Write Blog Posts That Rank on Google",
    path: "/content-creation-ai/how-to-use-ai-to-write-blog-posts-that-rank",
  },
  {
    title: "Best AI Tools for Social Media Managers in 2026",
    path: "/content-creation-ai/best-ai-tools-for-social-media-managers",
  },
];

const FAQS = [
  {
    question: "What are the best AI writing tools in 2026?",
    answer:
      "It depends on your use case. Jasper AI and Copy.ai lead for marketing teams, Writesonic and Frase lead for SEO-focused content, Grammarly and ProWritingAid lead for editing and polish, and Sudowrite leads specifically for fiction. There isn't one single best tool for every writing task.",
  },
  {
    question: "Is there a truly free AI writing tool?",
    answer:
      "Yes — Grammarly, Copy.ai, Writesonic, QuillBot, Rytr, Wordtune, and HyperWrite all offer genuinely usable free plans, not just time-limited trials. Jasper AI, Sudowrite, and Frase currently do not offer a free tier.",
  },
  {
    question: "Can AI writing tools replace human writers?",
    answer:
      "Generally no, not for work that requires original reporting, deep subject expertise, or a distinctive voice. Most professionals use these tools to speed up drafting and overcome blank-page friction, then edit the output rather than publishing it unchanged.",
  },
  {
    question: "Do AI writing tools hurt SEO rankings?",
    answer:
      "Google's guidance focuses on content quality and helpfulness rather than how it was produced. AI-assisted content that's accurate, original, and genuinely useful can rank well; thin, unedited AI output generally performs poorly regardless of the tool used.",
  },
  {
    question: "Which AI writing tool is best for SEO content specifically?",
    answer:
      "Frase and Writesonic are the two most SEO-focused options here, both building content briefs and outlines from real competitor and search intent data before writing begins, rather than generating from a prompt alone.",
  },
  {
    question: "Is Jasper AI worth the price compared to cheaper alternatives?",
    answer:
      "For marketing teams and agencies needing consistent brand voice across a lot of content, generally yes. For individuals with lighter, occasional writing needs, a cheaper tool like Rytr or Copy.ai's free plan often delivers better value.",
  },
  {
    question: "Can I use more than one AI writing tool at the same time?",
    answer:
      "Yes, and many professionals do — for example, using Jasper or Copy.ai to draft content, then Grammarly to polish tone and clarity afterward. The tools in this category generally complement rather than duplicate each other.",
  },
  {
    question: "Do AI writing tools support languages other than English?",
    answer:
      "Support varies by tool. Rytr in particular supports a large number of languages beyond English; check each individual tool's review for its specific language support before committing.",
  },
  {
    question: "How much do AI writing tools typically cost?",
    answer:
      "Entry-level paid plans generally range from about $9-20/month for individual use, with team and enterprise plans scaling higher based on seats and usage. Several tools also offer genuinely usable free tiers. Always verify current pricing on the official site, since it changes periodically.",
  },
  {
    question: "What should I look for when choosing an AI writing tool?",
    answer:
      "Match the tool to your actual use case first — SEO content, fiction, business editing, and marketing copy all favor different tools. Beyond that, weigh budget, ease of use, template depth, team collaboration needs, and how well the free plan (if any) lets you test before committing.",
  },
];

export default function WritingAIHubPage() {
  const breadcrumbItems = [
    { name: "Categories", path: "/categories" },
    { name: "Writing AI", path: "/categories/writing-ai" },
  ];

  const faqSchema = buildFaqSchema(FAQS);
  const collectionSchema = buildCollectionPageSchema({
    name: "Best AI Writing Tools in 2026",
    description: "A comparison of the best AI writing tools in 2026, covering features, pricing, and best-fit use cases.",
    path: "/categories/writing-ai",
  });
  const itemListSchema = buildItemListSchema(
    WRITING_TOOLS.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` }))
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Best AI Writing Tools in 2026
        </h1>
        <p className="mb-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          We compared 12 of the most-used AI writing tools on the market — what each one actually does well,
          where it falls short, and who it genuinely fits — so you can pick the right one without the guesswork.
        </p>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>Last updated: {LAST_UPDATED}</span>
          <span aria-hidden="true">·</span>
          <span>12 tools reviewed</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#tool-reviews"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Browse Reviews
          </a>
          <a
            href="#comparison-table"
            className="rounded-xl border-[1.5px] border-slate-200 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:border-blue-300 dark:hover:border-blue-800"
          >
            Compare Tools
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
          Every tool here was evaluated on its actual feature set, pricing, and stated use cases — we don't rate every tool "the best" and call out real trade-offs where they exist.
        </p>
      </header>

      {/* What are AI Writing Tools */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">What Are AI Writing Tools?</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            AI writing tools use large language models to help draft, rewrite, or polish text based on a prompt
            or existing content. Instead of starting from a blank page, you describe what you need — a blog
            outline, a product description, a rewritten paragraph — and the tool generates a draft you can edit,
            regenerate, or build on.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How It Works</h3>
          <p>
            Most tools in this category are built on top of large language models, then wrapped in templates,
            tone controls, and (in some cases) research or SEO features specific to writing tasks. The underlying
            model generates text; the product layer on top is what differentiates a tool built for fiction from
            one built for SEO content or short-form ad copy.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Benefits</h3>
          <p>
            The most consistent, real benefit is speed — getting past the blank page and producing a workable
            first draft in minutes rather than hours. Beyond that, tools with brand voice or style-matching
            features can help maintain consistency across a team, and research-driven tools like Frase can
            surface competitor content gaps a writer might otherwise miss.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Limitations</h3>
          <p>
            Output still generally needs human editing — for accuracy, for a distinctive voice, and to avoid the
            generic phrasing AI tools can default to. These tools also don't have direct access to your
            proprietary data, recent events beyond their training, or firsthand expertise, so fact-checking
            matters, especially for anything published publicly.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">When Not to Use AI Writing Tools</h3>
          <p>
            Avoid relying on AI output unedited for anything requiring original research, firsthand experience,
            or a highly distinctive voice a brand has spent years building — legal, medical, or financial content
            with real accuracy stakes, and any writing where authenticity is the entire point (a personal essay,
            a first-person testimonial) are cases where AI assistance should stay firmly in a supporting role.
          </p>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Who Should Use AI Writing Tools?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {AUDIENCE_RECOMMENDATIONS.map((item) => (
            <div key={item.audience} className="rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.audience}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.recommendation}{" "}
                {item.slugs.map((slug, i) => {
                  const tool = WRITING_TOOLS.find((t) => t.slug === slug);
                  if (!tool) return null;
                  return (
                    <span key={slug}>
                      <Link href={`/tools/${slug}`} className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                        {tool.name}
                      </Link>
                      {i < item.slugs.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Comparison Table</h2>
        <ToolComparisonTable tools={WRITING_TOOLS} />
      </section>

      {/* Tool Cards */}
      <section id="tool-reviews" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">All Writing AI Tool Reviews</h2>
        <div className="space-y-2">
          {WRITING_TOOLS.map((tool) => (
            <div key={tool.slug}>
              <ToolCard tool={toToolRecommendation(tool)} />
              <div className="-mt-4 mb-6 text-right">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read full {tool.name} review <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Free vs. Paid AI Writing Tools</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5">
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">Free Plans</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Genuinely usable free tiers exist on Grammarly, Copy.ai, Writesonic, QuillBot, Rytr, Wordtune, and
              HyperWrite. These typically cap monthly word or credit usage and limit access to advanced features
              like brand voice training or team collaboration, but are enough to evaluate output quality before
              paying anything. Best choice if you write occasionally or want to test a tool before committing.
            </p>
          </div>
          <div className="rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5">
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">Paid Plans</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Paid tiers unlock higher usage limits, brand voice consistency, team collaboration, and (for tools
              like Frase and Anyword) deeper research or predictive scoring features. Jasper AI, Sudowrite, and
              Frase require a paid plan from the start. Best choice once your usage volume or need for
              consistency across a team justifies the cost.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">How to Choose an AI Writing Tool</h2>
        <div className="space-y-3 text-slate-700 dark:text-slate-300">
          <p><strong className="text-slate-900 dark:text-white">Budget:</strong> Start with what a genuinely free plan can test — Copy.ai and Rytr in particular let you evaluate real output quality before paying anything.</p>
          <p><strong className="text-slate-900 dark:text-white">Ease of use:</strong> Template-heavy tools like Jasper reduce prompt-writing guesswork; autocomplete-style tools like HyperWrite suit writers who prefer a more organic drafting flow.</p>
          <p><strong className="text-slate-900 dark:text-white">Templates:</strong> If you need a wide range of content types covered out of the box, Rytr and Copy.ai both offer 40+ templates.</p>
          <p><strong className="text-slate-900 dark:text-white">SEO features:</strong> Frase and Writesonic are the clear leaders here, building content around real search and competitor data rather than a prompt alone.</p>
          <p><strong className="text-slate-900 dark:text-white">Languages:</strong> Rytr stands out for supporting a notably large number of non-English languages.</p>
          <p><strong className="text-slate-900 dark:text-white">Team collaboration:</strong> Jasper AI and Anyword both offer genuine multi-seat, shared brand voice workflows built for teams, not just individuals.</p>
          <p><strong className="text-slate-900 dark:text-white">Integrations:</strong> Check for browser extensions (most tools here offer one) and, for SEO-focused work, Surfer SEO or Google Search Console integrations specifically.</p>
          <p><strong className="text-slate-900 dark:text-white">Content quality:</strong> Quality varies by content type per tool — read the individual review for the specific use case you care about rather than relying on a single overall score.</p>
          <p><strong className="text-slate-900 dark:text-white">Privacy:</strong> If you're pasting proprietary or sensitive company information into any of these tools, check the vendor's current data retention and training-use policy directly on their site before doing so.</p>
          <p><strong className="text-slate-900 dark:text-white">Support:</strong> Paid business/enterprise tiers generally include priority support; free and entry-level plans typically rely on help center documentation only.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
              <summary className="cursor-pointer font-medium text-slate-900 dark:text-white">{faq.question}</summary>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Related Guides</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {RELATED_GUIDES.map((guide) => (
            <Link
              key={guide.path}
              href={guide.path}
              className="flex items-center justify-between rounded-xl border-[1.5px] border-slate-200 dark:border-slate-700 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-blue-300 dark:hover:border-blue-800"
            >
              {guide.title} <ArrowRight size={14} className="flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </main>
  );
}
