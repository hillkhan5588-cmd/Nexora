import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import type { ToolProfile } from '@/lib/tools';

export function ToolProfileHero({ tool }: { tool: ToolProfile }) {
  return (
    <div className="flex flex-col gap-6 border-b border-slate-200 dark:border-slate-800 pb-8 mb-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex gap-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-3xl">
          {tool.emoji}
        </div>
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Link
              href={`/${tool.categorySlug}`}
              className="rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/70 transition-colors"
            >
              {tool.categoryName}
            </Link>
            {tool.hasFree && (
              <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Free plan available
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{tool.name}</h1>
          <p className="mt-1 max-w-xl text-slate-600 dark:text-slate-400">{tool.tagline}</p>
          <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-900 dark:text-white">{tool.rating.toFixed(1)}</span>
            <span>/ 5</span>
          </div>
        </div>
      </div>

      <div className="flex flex-shrink-0 flex-col items-start gap-2 sm:items-end">
        <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {tool.startingPrice}
        </span>
        <a
          href={tool.affiliateUrl || tool.websiteUrl}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Visit Website <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
}
