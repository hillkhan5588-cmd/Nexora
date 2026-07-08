/**
 * components/ToolComparisonTable.tsx
 *
 * Same visual design as the existing components/ComparisonTable.tsx,
 * but with an added "Review" link column pointing to internal
 * /tools/[slug] pages. Built as a separate component rather than
 * modifying the shared ComparisonTable (which is used elsewhere with a
 * different column set) to avoid touching existing article rendering.
 */

import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import type { ToolProfile } from "@/lib/tools";

export function ToolComparisonTable({ tools }: { tools: ToolProfile[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 my-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/80">
            {["Tool", "Best For", "Free Plan", "Starting Price", "Rating", "Review"].map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr
              key={tool.slug}
              className="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <td className="px-4 py-3.5 text-sm">
                <span className="mr-1.5">{tool.emoji}</span>
                <strong className="text-slate-900 dark:text-slate-100">{tool.name}</strong>
              </td>
              <td className="px-4 py-3.5 text-sm text-slate-600 dark:text-slate-300">{tool.verdict.bestFor}</td>
              <td className="px-4 py-3.5 text-sm">
                {tool.hasFree ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <Check size={14} />Yes
                  </span>
                ) : (
                  <span className="text-slate-400 flex items-center gap-1">
                    <X size={14} />No
                  </span>
                )}
              </td>
              <td className="px-4 py-3.5 text-sm text-slate-700 dark:text-slate-200 font-medium">{tool.startingPrice}</td>
              <td className="px-4 py-3.5 text-sm text-slate-700 dark:text-slate-200">{tool.rating.toFixed(1)} / 5</td>
              <td className="px-4 py-3.5 text-sm">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read review <ArrowRight size={12} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
