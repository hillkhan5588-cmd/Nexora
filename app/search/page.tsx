'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { ARTICLES, searchArticles } from '@/lib/articles';
import { CATEGORIES } from '@/lib/categories';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = searchArticles(query);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-slate-600 dark:text-slate-300">Search</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-1.5 tracking-tight">Search NEXORA</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-7">Search {ARTICLES.length} guides across all categories</p>

      {/* Search input */}
      <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 rounded-2xl px-5 py-4 mb-6 shadow-sm transition-colors">
        <Search size={18} className="text-slate-400 flex-shrink-0" />
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. AI writing tools, automate email, YouTube Shorts..."
          className="flex-1 bg-transparent outline-none text-[15px] text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg font-light">✕</button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap mb-6">
        <button
          onClick={() => setQuery('')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${!query ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:border-blue-400 hover:text-blue-600'}`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setQuery(cat.name.replace(' AI', '').toLowerCase())}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all"
          >
            {cat.emoji} {cat.name.replace(' AI', '')}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        {query
          ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
          : `Showing all ${results.length} guides`}
      </p>

      {/* Results */}
      {results.length > 0 ? (
        <div className="flex flex-col gap-3">
          {results.map((article) => {
            const cat = CATEGORIES.find((c) => c.slug === article.category);
            return (
              <Link
                key={article.slug}
                href={`/${article.category}/${article.slug}`}
                className="flex gap-4 items-start p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm transition-all group"
              >
                <div className="text-3xl flex-shrink-0">{article.emoji}</div>
                <div>
                  {cat && <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: cat.color }}>{article.categoryName}</div>}
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 leading-snug">{article.title}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{article.excerpt}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1.5">🕐 {article.readTime} · {article.date}</div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">No results for "{query}"</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Try different keywords or browse by category below</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-slate-600 dark:text-slate-400 hover:text-blue-600 text-sm font-medium rounded-xl transition-all"
              >
                {cat.emoji} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
