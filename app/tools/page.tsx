/**
 * app/tools/page.tsx
 *
 * Stub for the Tools pillar hub — built next per the agreed order
 * (SEO fixes → taxonomy → Knowledge Center → Categories → Resources → Tools).
 * Included now so /tools exists and the nav is fully wired, even though
 * the tool directory itself isn't populated yet.
 */

import { buildMetadata } from "@/lib/seo";
import { VERTICAL_LIST } from "@/lib/taxonomy";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Tools",
  description: "Free online tools for PDF, image, video, SEO, and developer tasks.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} />
      <header className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">Tools</h1>
        <p className="max-w-2xl text-slate-600">
          The NEXORA tool directory is being built out vertical by vertical.
          Explore the guides for each category below in the meantime.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4">
        {VERTICAL_LIST.map((vertical) => (
          <div
            key={vertical.slug}
            className="rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-400"
          >
            <span aria-hidden="true">{vertical.icon}</span> {vertical.label} — coming soon
          </div>
        ))}
      </div>
    </main>
  );
}
