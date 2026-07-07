import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import type { ToolProfile } from '@/lib/tools';

export function ToolAlternatives({ tools }: { tools: ToolProfile[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
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
              View <ArrowRight size={13} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
