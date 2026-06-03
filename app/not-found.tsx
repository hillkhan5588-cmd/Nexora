import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { getTrendingArticles } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';

export default function NotFound() {
  const trending = getTrendingArticles().slice(0, 4);
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-[120px] font-extrabold text-slate-100 dark:text-slate-800 leading-none mb-4 select-none">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 tracking-tight">
        This page doesn't exist
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
        The page you're looking for may have moved or never existed.
      </p>
      <div className="flex gap-3 justify-center flex-wrap mb-14">
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-[15px] transition-all">
          ← Back to Home
        </Link>
        <Link href="/search" className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl text-[15px] transition-all">
          <Search size={15} /> Search Guides
        </Link>
      </div>

      {/* Browse categories */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Browse Categories</p>
        <div className="flex gap-2 justify-center flex-wrap">
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-slate-200 dark:border-slate-700 hover:border-blue-400 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all">
              {cat.emoji} {cat.name.replace(' AI', '')}
            </Link>
          ))}
        </div>
      </div>

      {/* Trending guides */}
      <div className="text-left">
        <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 text-center">Popular Guides</p>
        <div className="flex flex-col gap-3">
          {trending.map((article, i) => (
            <Link key={article.slug} href={`/${article.category}/${article.slug}`}
              className="flex gap-4 items-center p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-400 transition-all">
              <span className="text-2xl font-extrabold text-slate-200 dark:text-slate-700 min-w-[32px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug">{article.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">🕐 {article.readTime}</div>
              </div>
              <ArrowRight size={14} className="text-slate-300 dark:text-slate-600 ml-auto flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
