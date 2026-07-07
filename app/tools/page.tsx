/**
 * app/tools/page.tsx
 *
 * Tools pillar hub. Previously a "coming soon" stub for every vertical;
 * now shows the 12 real Writing AI tool profiles, with remaining
 * verticals still marked coming soon until they're built out.
 */

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { VERTICAL_LIST } from "@/lib/taxonomy";
import { WRITING_TOOLS } from "@/lib/tools";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Tools",
  description: "Free online tools and in-depth AI tool reviews for writing, PDF, image, video, SEO, and developer tasks.",
  path: "/tools",
});

// Verticals with real tool pages already built are excluded from the
// "coming soon" grid below so they aren't shown twice.
const LIVE_VERTICAL_SLUGS = new Set(["text"]);

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} />
      <header className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Tools</h1>
        <p className="max-w-2xl text-slate-600 dark:text-slate-400">
          In-depth, honest reviews of the AI tools worth your time — starting with Writing AI.
          The rest of the directory is being built out vertical by vertical.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Writing AI</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WRITING_TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group flex flex-col rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 p-5 transition-colors hover:border-blue-300 dark:hover:border-blue-800"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{tool.emoji}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{tool.name}</span>
              </div>
              <p className="mb-3 flex-1 text-sm text-slate-600 dark:text-slate-400">{tool.tagline}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  {tool.rating.toFixed(1)}
                </span>
                <span className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 group-hover:gap-1.5 transition-all">
                  View review <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">More categories, coming soon</h2>
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          {VERTICAL_LIST.filter((vertical) => !LIVE_VERTICAL_SLUGS.has(vertical.slug)).map((vertical) => (
            <div
              key={vertical.slug}
              className="rounded-lg border border-dashed border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-400 dark:text-slate-500"
            >
              <span aria-hidden="true">{vertical.icon}</span> {vertical.label} — coming soon
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
