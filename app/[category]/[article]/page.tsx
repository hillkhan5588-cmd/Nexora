import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, Calendar, RefreshCw, Share2, Twitter, Linkedin, BookOpen, Tag, ChevronRight } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import ComparisonTable from '@/components/ComparisonTable';
import EmailCapture from '@/components/EmailCapture';
import SchemaMarkup from '@/components/SchemaMarkup';
import ArticleCard from '@/components/ArticleCard';
import { CATEGORIES, getCategoryBySlug } from '@/lib/categories';
import { ARTICLES, getArticleBySlug } from '@/lib/articles';
import { getBlogPostForArticle } from '@/lib/blogPosts';

interface Props {
  params: { category: string; article: string };
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ category: a.category, article: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.article);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: [article.author],
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
    },
    alternates: { canonical: `https://nexora.com/${params.category}/${params.article}` },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.article);
  if (!article || article.category !== params.category) notFound();

  const cat = getCategoryBySlug(article.category);
  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const blogPost = getBlogPostForArticle(article.slug);

  const articleSchema = {
    headline: article.title,
    description: article.metaDescription,
    author: { '@type': 'Person', name: article.author, url: 'https://nexora.com/about' },
    publisher: { '@type': 'Organization', name: 'NEXORA', logo: 'https://nexora.com/logo.png' },
    datePublished: article.date,
    dateModified: article.updated,
    mainEntityOfPage: `https://nexora.com/${params.category}/${params.article}`,
    image: 'https://nexora.com/og-image.png',
  };

  const breadcrumbSchema = {
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexora.com' },
      { '@type': 'ListItem', position: 2, name: article.categoryName, item: `https://nexora.com/${article.category}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://nexora.com/${params.category}/${params.article}` },
    ],
  };

  const faqSchema = article.faqs
    ? {
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <SchemaMarkup type="article" data={articleSchema} />
      <SchemaMarkup type="breadcrumb" data={breadcrumbSchema} />
      {faqSchema && <SchemaMarkup type="faq" data={faqSchema} />}

      <article className="max-w-[1080px] mx-auto px-4 lg:px-6">

        {/* ══════════════════════════════════════════
            ARTICLE HEADER
        ══════════════════════════════════════════ */}
        <header className="max-w-[720px] mx-auto pt-10 pb-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-5 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href={`/${article.category}`} className="hover:text-blue-600 transition-colors">{article.categoryName}</Link>
            <ChevronRight size={14} />
            <span className="text-slate-600 dark:text-slate-400 truncate max-w-[200px]">{article.title}</span>
          </nav>

          {/* Category badge */}
          {cat && (
            <Link href={`/${article.category}`}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4 transition-opacity hover:opacity-80"
                style={{ background: cat.lightBg, color: cat.color }}>
                {cat.emoji} {article.categoryName}
              </span>
            </Link>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 dark:text-slate-100 leading-[1.15] tracking-tight mb-5">
            {article.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                AM
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">{article.author}</span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-500"> · {article.authorRole}</span>
              </div>
            </div>
            <span className="flex items-center gap-1.5"><Calendar size={13} />Published: {article.date}</span>
            <span className="flex items-center gap-1.5"><RefreshCw size={13} />Updated: {article.updated}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{article.readTime}</span>
          </div>

          {/* Affiliate disclosure */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
            <strong>⚠️ Affiliate Disclosure:</strong> This article contains affiliate links. If you purchase through our links we may earn a commission at no extra cost to you. We only recommend tools we genuinely believe in.{' '}
            <Link href="/affiliate-disclosure" className="underline font-semibold hover:text-amber-900 dark:hover:text-amber-100">
              Learn more →
            </Link>
          </div>

          {/* Share bar top */}
          <ShareBar title={article.title} />
        </header>

        {/* ══════════════════════════════════════════
            ARTICLE LAYOUT: TOC + CONTENT
        ══════════════════════════════════════════ */}
        <div className="flex gap-10 pb-12">
          {/* TOC sidebar — desktop only */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <aside className="hidden xl:block w-52 flex-shrink-0 self-start sticky top-24">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                In this guide
              </div>
              <nav className="flex flex-col gap-0.5">
                {article.tableOfContents.map((item, i) => (
                  <a
                    key={i}
                    href={`#section-${i}`}
                    className="text-[12.5px] text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-1.5 pl-3 border-l-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all leading-snug"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Main content */}
          <div className="flex-1 max-w-[720px] mx-auto">

            {/* Intro callout */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-5 py-2 mb-8 italic">
              {article.excerpt}
            </p>

            {/* ── Article body ── */}
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* ══════════════════════════════════════════
                TOOLS SECTION  (clear separator)
            ══════════════════════════════════════════ */}
            {article.tools && article.tools.length > 0 && (
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2">Tool Reviews</span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 mt-4">
                  🛠️ Top Recommended Tools
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-[15px]">
                  Personally tested and ranked for this exact use case. Each includes a free option where available and a YouTube tutorial so you can see it in action before committing.
                </p>
                {article.tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </section>
            )}

            {/* ══════════════════════════════════════════
                COMPARISON TABLE  (clear separator)
            ══════════════════════════════════════════ */}
            {article.comparisonTable && article.comparisonTable.length > 0 && (
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2">Head-to-Head</span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 mt-4">
                  📊 Quick Comparison
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-4 text-[15px]">
                  All the top options side-by-side. Our recommended pick is highlighted.
                </p>
                <ComparisonTable rows={article.comparisonTable} />
              </section>
            )}

            {/* ══════════════════════════════════════════
                PERSONAL RECOMMENDATION BOX
            ══════════════════════════════════════════ */}
            {article.tools && article.tools.find((t) => t.recommended) && (
              <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/40 dark:to-violet-950/30 border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">💡 My Personal Recommendation</h3>
                <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed">
                  If I were starting from scratch today, I'd begin with <strong>{article.tools.find((t) => t.recommended)?.name}</strong> — it gives you the best combination of output quality and value for this exact use case.{' '}
                  {article.tools.find((t) => t.hasFree) && 'Start with the free plan to test it in your own workflow before committing to paid.'}
                </p>
              </div>
            )}

            {/* ══════════════════════════════════════════
                BLOG POST SECTION  (NEW)
            ══════════════════════════════════════════ */}
            {blogPost && (
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2">From the Blog</span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>

                {/* Blog post card header */}
                <div className="mt-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 px-6 py-4 flex items-center gap-3">
                    <BookOpen size={18} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-bold text-white">Related Deep-Dive Post</span>
                    <span className="ml-auto text-xs text-slate-400 flex items-center gap-1.5">
                      <Clock size={12} /> {blogPost.readTime}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Tags */}
                    {blogPost.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blogPost.tags.slice(0, 5).map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full">
                            <Tag size={10} /> {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-snug">
                      {blogPost.title}
                    </h3>

                    {/* Author + date */}
                    <div className="flex items-center gap-3 mb-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">AM</div>
                        <span className="font-medium">{blogPost.author}</span>
                      </div>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Calendar size={11} />{blogPost.publishDate}</span>
                    </div>

                    <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic border-l-4 border-blue-500 pl-4">
                      {blogPost.excerpt}
                    </p>

                    {/* Full blog post content */}
                    <div className="blog-post-content " dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                  </div>
                </div>
              </section>
            )}

            {/* ══════════════════════════════════════════
                FAQ  (clear separator)
            ══════════════════════════════════════════ */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2">FAQ</span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 mt-4">
                  ❓ Frequently Asked Questions
                </h2>
                <FAQList faqs={article.faqs} />
              </section>
            )}

            {/* ══════════════════════════════════════════
                NEXT STEP CTA
            ══════════════════════════════════════════ */}
            <div className="mt-10 p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
              ✅ <strong>Your next step:</strong> Pick the top-recommended tool above, sign up for the free plan, and use it on your next task today. The difference between professionals who benefit from AI and those who don't is a single decision to actually try it.
            </div>

            {/* ══════════════════════════════════════════
                AUTHOR BIO
            ══════════════════════════════════════════ */}
            <div className="mt-10 flex gap-5 p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                AM
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-slate-100 text-lg">{article.author}</div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{article.authorRole}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Alex has spent 5+ years testing AI tools across content, freelancing, and business automation. He's helped thousands of professionals build faster, smarter workflows. Every recommendation on NEXORA is based on real hands-on testing.
                </p>
              </div>
            </div>

            {/* Share bar bottom */}
            <div className="mt-8">
              <ShareBar title={article.title} />
            </div>

            {/* ══════════════════════════════════════════
                RELATED ARTICLES
            ══════════════════════════════════════════ */}
            {related.length > 0 && (
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2">Keep Reading</span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-5">📚 Related Guides</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <EmailCapture
        title="Want More Guides Like This?"
        subtitle="Join thousands of professionals getting weekly AI workflows, tool reviews, and income-building strategies — free."
      />
    </>
  );
}

/* ── Share bar ── */
function ShareBar({ title }: { title: string }) {
  const encoded = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-2 py-4 border-y border-slate-200 dark:border-slate-700 my-2 flex-wrap">
      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encoded}&url=https://nexora.com`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all"
      >
        <Twitter size={13} /> Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nexora.com`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all"
      >
        <Linkedin size={13} /> LinkedIn
      </a>
      <a
        href={`https://reddit.com/submit?title=${encoded}&url=https://nexora.com`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all"
      >
        r/ Reddit
      </a>
      <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all">
        <Share2 size={13} /> Copy Link
      </button>
    </div>
  );
}

/* ── FAQ accordion ── */
function FAQList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      {faqs.map((faq, i) => (
        <details key={i} className="group bg-white dark:bg-slate-800">
          <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-slate-900 dark:text-slate-100 text-[15px] px-5 py-4">
            <span>{faq.question}</span>
            <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200 flex-shrink-0 text-xl leading-none mt-0.5">+</span>
          </summary>
          <p className="px-5 pb-5 text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
