/**
 * components/Badges.tsx
 *
 * Small label pills for Format and Vertical, used on article cards and
 * article headers. Styled to match the existing badge pattern already
 * used on guide cards on the live site (small, rounded-full, colored text
 * on a tinted background) — adjust the className tokens below to your
 * exact existing badge classes once repo access confirms them.
 */

import Link from "next/link";
import type { Format, Vertical } from "@/lib/taxonomy";
import { FORMATS, VERTICALS } from "@/lib/taxonomy";

export function FormatBadge({ format, linked = true }: { format: Format; linked?: boolean }) {
  const meta = FORMATS[format];
  const badge = (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
      {meta.label}
    </span>
  );
  if (!linked) return badge;
  return <Link href={`/knowledge-center/format/${format}`}>{badge}</Link>;
}

export function VerticalBadge({ vertical, linked = true }: { vertical: Vertical; linked?: boolean }) {
  const meta = VERTICALS[vertical];
  const badge = (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
      <span aria-hidden="true">{meta.icon}</span>
      {meta.label}
    </span>
  );
  if (!linked) return badge;
  return <Link href={`/knowledge-center/${vertical}`}>{badge}</Link>;
}
