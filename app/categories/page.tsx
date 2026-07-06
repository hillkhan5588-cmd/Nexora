/**
 * app/categories/page.tsx
 *
 * NEW page — an index for the "Categories" pillar.
 * Links to your 5 EXISTING category hubs at their current, unchanged URLs.
 * This does not move or rebuild anything; it just gives Categories a
 * proper pillar landing page so it stands equal to Tools / Knowledge
 * Center / Resources in navigation.
 *
 * Replace the `existingCategories` array below with your real category
 * data (ideally imported from wherever your current homepage category
 * grid already sources it, so there's one source of truth).
 */

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Categories",
  description: "Curated paths through NEXORA's tools and guides, organized by use case.",
  path: "/categories",
});

// TODO: replace with the real import from your existing homepage category data
const existingCategories = [
  {
    slug: "business-freelancing-ai",
    label: "Business & Freelancing",
    description: "AI tools and guides for freelancers and small businesses.",
    icon: "💼",
  },
  {
    slug: "content-creation-ai",
    label: "Content Creation",
    description: "Writing, design, and content-generation tools.",
    icon: "✍️",
  },
  {
    slug: "video-image-ai",
    label: "Video & Image",
    description: "Visual and video AI tools and workflows.",
    icon: "🎬",
  },
  {
    slug: "study-productivity-ai",
    label: "Study & Productivity",
    description: "Tools for learning, focus, and getting things done.",
    icon: "📚",
  },
  {
    slug: "automation-developer-ai",
    label: "Automation & Developer",
    description: "Dev tools and workflow automation.",
    icon: "⚙️",
  },
];

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumbs items={[{ name: "Categories", path: "/categories" }]} />

      <header className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">Categories</h1>
        <p className="max-w-2xl text-slate-600">
          Curated paths through NEXORA, grouped by what you're trying to get done.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {existingCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <div className="mb-2 text-2xl" aria-hidden="true">{category.icon}</div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{category.label}</h2>
            <p className="text-sm text-slate-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
