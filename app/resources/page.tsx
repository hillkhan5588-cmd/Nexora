/**
 * app/resources/page.tsx
 *
 * Stub for the Resources pillar hub (templates, cheat sheets, glossary,
 * comparison charts) — built after Tools per the agreed order.
 * Included now so /resources exists and the nav is fully wired.
 */

import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Resources",
  description: "Templates, cheat sheets, glossary terms, and comparison charts.",
  path: "/resources",
});

const resourceTypes = [
  { slug: "templates", label: "Templates" },
  { slug: "cheat-sheets", label: "Cheat Sheets" },
  { slug: "glossary", label: "Glossary" },
  { slug: "comparison-charts", label: "Comparison Charts" },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }]} />
      <header className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">Resources</h1>
        <p className="max-w-2xl text-slate-600">
          Quick-reference material to pair with the Knowledge Center's in-depth guides.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {resourceTypes.map((type) => (
          <div
            key={type.slug}
            className="rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-400"
          >
            {type.label} — coming soon
          </div>
        ))}
      </div>
    </main>
  );
}
