/**
 * components/Breadcrumbs.tsx
 *
 * Reuses the existing "Home › Category › Article" trail pattern already
 * on the live site, and emits BreadcrumbList JSON-LD (missing per the audit).
 */

import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/seo";

interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  const schema = buildBreadcrumbSchema(trail);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        {trail.map((crumb, index) => (
          <span key={crumb.path}>
            {index > 0 && <span className="mx-2" aria-hidden="true">›</span>}
            {index === trail.length - 1 ? (
              <span className="text-slate-700">{crumb.name}</span>
            ) : (
              <Link href={crumb.path} className="hover:text-blue-600">
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
