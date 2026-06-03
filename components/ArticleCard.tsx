import Link from 'next/link';
import { Clock, TrendingUp } from 'lucide-react';
import { Article } from '@/lib/types';
import { CATEGORIES } from '@/lib/categories';

const GRADIENTS: Record<string, string> = {
  'business-freelancing-ai': 'from-amber-50 to-yellow-100 dark:from-amber-950/40 dark:to-yellow-900/20',
  'content-creation-ai': 'from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20',
  'video-image-ai': 'from-violet-50 to-purple-100 dark:from-violet-950/40 dark:to-purple-900/20',
  'study-productivity-ai': 'from-emerald-50 to-green-100 dark:from-emerald-950/40 dark:to-green-900/20',
  'automation-developer-ai': 'from-rose-50 to-red-100 dark:from-rose-950/40 dark:to-red-900/20',
};

export default function ArticleCard({ article }: { article: Article }) {
  const cat = CATEGORIES.find((c) => c.slug === article.category);
  const gradient = GRADIENTS[article.category] || 'from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700';

  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-200 flex flex-col"
    >
      {/* Card image */}
      <div className={`h-44 flex items-center justify-center bg-gradient-to-br ${gradient} relative`}>
        <span className="text-5xl opacity-70">{article.emoji}</span>
        {article.trending && (
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 text-xs font-bold px-2.5 py-1 rounded-full">
            <TrendingUp size={11} /> Trending
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {cat && (
          <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: cat.color }}>
            {article.categoryName}
          </span>
        )}
        <h3 className="font-bold text-slate-900 dark:text-slate-100 leading-snug mb-2 text-[15px] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
          <span className="flex items-center gap-1"><Clock size={12} />{article.readTime}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
