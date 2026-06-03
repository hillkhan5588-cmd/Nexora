import Link from 'next/link';
import { ArrowRight, TrendingUp, Search, Sparkles, BookOpen, Users, Shield, BarChart3, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import EmailCapture from '@/components/EmailCapture';
import SchemaMarkup from '@/components/SchemaMarkup';
import { CATEGORIES } from '@/lib/categories';
import { ARTICLES, getFeaturedArticles, getTrendingArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'NEXORA — Solve Any Task Using AI in Seconds',
  description: 'Real guides, real workflows, real results. Find the perfect AI tool for exactly what you need to do today. Trusted by 10,000+ professionals.',
};

export default function HomePage() {
  const featured = getFeaturedArticles();
  const trending = getTrendingArticles().slice(0, 5);

  return (
    <>
      <SchemaMarkup type="website" data={{}} />
      <SchemaMarkup type="organization" data={{}} />

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 text-center bg-white dark:bg-slate-900 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white dark:from-blue-950/20 dark:to-slate-900 pointer-events-none" />
        
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 Trusted by 10,000+ professionals worldwide
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-[1.1]">
            Solve Any Task<br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Using AI in Seconds
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Real guides, real workflows, real results — no fluff. Find the perfect AI tool for exactly what you need to do today.
          </p>

          {/* Search bar */}
          <Link
            href="/search"
            className="flex items-center gap-3 max-w-lg mx-auto bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 mb-8 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-colors text-left group"
          >
            <Search size={18} className="text-slate-400 flex-shrink-0" />
            <span className="text-slate-400 dark:text-slate-500 text-[15px] flex-1">What do you want to do with AI?</span>
            <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-1 rounded-md font-mono hidden sm:block">⌘K</span>
          </Link>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/search" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-[15px] transition-all hover:-translate-y-0.5 shadow-sm">
              Find a Solution <ArrowRight size={15} />
            </Link>
            <Link href="#featured" className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl text-[15px] transition-all">
              Explore AI Guides
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative max-w-2xl mx-auto mt-12 grid grid-cols-3 gap-4">
          {[
            { n: '10,000+', l: 'Professionals' },
            { n: '109', l: 'AI Guides' },
            { n: '100%', l: 'Tested Tools' },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{n}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ══════════════════════════════════════════════════════
          BROWSE BY CATEGORY
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">Explore</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Browse by Category</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Find AI guides organized by what you actually need to get done.</p>
            </div>
            <Link href="/search" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0">
              All guides <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-200 group"
                style={{ borderBottomColor: cat.color, borderBottomWidth: 3 }}
              >
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <div className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1.5 leading-tight">{cat.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{cat.description}</div>
                <div className="text-xs font-bold px-2.5 py-1 rounded-full inline-block" style={{ background: cat.lightBg, color: cat.color }}>
                  {cat.articleCount} guides →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ══════════════════════════════════════════════════════
          FEATURED GUIDES
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900" id="featured">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-1">Editor's Picks</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">⭐ Featured Guides</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Our most comprehensive, hands-on guides for getting real results with AI.</p>
            </div>
            <Link href="/search" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/search" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              View all guides <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ══════════════════════════════════════════════════════
          TRENDING NOW
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 mb-1">Right Now</p>
            <div className="flex items-center gap-2">
              <TrendingUp size={22} className="text-orange-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Trending</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">The guides professionals are reading most this week.</p>
          </div>

          <div className="flex flex-col gap-3">
            {trending.map((article, i) => {
              const cat = CATEGORIES.find((c) => c.slug === article.category);
              return (
                <Link
                  key={article.slug}
                  href={`/${article.category}/${article.slug}`}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all group"
                >
                  <span className="text-3xl font-extrabold text-slate-200 dark:text-slate-700 min-w-[36px] group-hover:text-blue-200 dark:group-hover:text-blue-900 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    {cat && <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: cat.color }}>{article.categoryName}</div>}
                    <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{article.title}</div>
                    <div className="text-xs text-slate-400">🕐 {article.readTime} · {article.date}</div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS (NEW — user-friendly explainer)
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-1">How NEXORA Works</p>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 tracking-tight">From Question to Answer in 3 Steps</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">No AI expertise required. Every guide is written for real people doing real work.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: <Search size={24} className="text-blue-600 dark:text-blue-400" />,
                title: 'Find Your Use Case',
                desc: 'Search for what you want to accomplish — "write a better proposal", "create YouTube Shorts", "automate invoicing" — and find the exact guide for it.',
                color: 'blue',
              },
              {
                step: '02',
                icon: <BookOpen size={24} className="text-violet-600 dark:text-violet-400" />,
                title: 'Follow the Workflow',
                desc: 'Each guide walks you through a tested, step-by-step workflow. No guesswork, no fluff — just the exact process that works.',
                color: 'violet',
              },
              {
                step: '03',
                icon: <Sparkles size={24} className="text-emerald-600 dark:text-emerald-400" />,
                title: 'Get Real Results',
                desc: 'Every tool recommendation includes free plans, honest pricing, and YouTube tutorials so you can see exactly what you\'re getting before you pay.',
                color: 'emerald',
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="relative bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 dark:text-slate-700 select-none">{step}</div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 shadow-sm">
                  {icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/search" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-[15px] transition-all hover:-translate-y-0.5">
              Start Exploring <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      {/* ══════════════════════════════════════════════════════
          WHY NEXORA
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Our Promise</p>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Why Professionals Trust NEXORA</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">We only recommend tools we've tested ourselves. Every guide is written by a real human who has used these tools in real workflows.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Shield size={22} className="text-blue-600" />, t: 'Tested & Verified', d: 'Every tool recommendation is based on hands-on experience, not paid placements or press releases.' },
            { icon: <BarChart3 size={22} className="text-violet-600" />, t: 'Data-Driven', d: 'We track results, compare alternatives, and update our guides every time tools ship major changes.' },
            { icon: <span className="text-xl">💰</span>, t: 'Honest Pricing', d: 'We show you real pricing including free tiers — no hidden surprises, upsells, or vague "contact us" pricing.' },
            { icon: <Users size={22} className="text-emerald-600" />, t: 'Built for Professionals', d: 'Content built specifically for US, UK, Canadian, and Australian professionals doing real work.' },
          ].map(({ icon, t, d }) => (
            <div key={t} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center mb-4">
                {icon}
              </div>
              <div className="font-bold text-slate-900 dark:text-slate-100 mb-2">{t}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EMAIL CAPTURE
      ══════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
      <EmailCapture />
    </>
  );
}
