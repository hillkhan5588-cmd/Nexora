import { ExternalLink, Youtube } from 'lucide-react';
import { ToolRecommendation } from '@/lib/types';

export default function ToolCard({ tool }: { tool: ToolRecommendation }) {
  return (
    <div className={`bg-white dark:bg-slate-800 border-[1.5px] rounded-2xl p-6 my-6 transition-all duration-200 ${tool.recommended ? 'border-blue-500 dark:border-blue-400 shadow-md shadow-blue-100 dark:shadow-blue-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm'}`}>
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
          {tool.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{tool.name}</h3>
            {tool.recommended && (
              <span className="text-xs font-bold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full">
                ⭐ Top Pick
              </span>
            )}
          </div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full inline-block">
            Best for: {tool.bestFor}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{tool.description}</p>

      {/* Pricing + Actions */}
      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm">
              <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold block mb-0.5">Price</span>
              <strong className="text-slate-800 dark:text-slate-100 font-bold">{tool.price}</strong>
            </span>
            {tool.hasFree && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full">
                ✅ Free plan available
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-colors flex-1 sm:flex-none justify-center sm:justify-start"
          >
            Try {tool.name} {tool.hasFree ? 'Free' : 'Now'} <ExternalLink size={13} />
          </a>
          {tool.youtubeUrl && (
            <a
              href={tool.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
            >
              <Youtube size={15} /> Watch Tutorial
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
