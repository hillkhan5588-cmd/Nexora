import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import EmailCapture from '@/components/EmailCapture';
import SchemaMarkup from '@/components/SchemaMarkup';
import { CATEGORIES, getCategoryBySlug } from '@/lib/categories';
import { getArticlesByCategory } from '@/lib/articles';

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Best AI Guides & Tools`,
    description: cat.longDescription,
    openGraph: {
      title: `${cat.name} — NEXORA`,
      description: cat.longDescription,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(params.category);

  const breadcrumbSchema = {
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nexora.com' },
      { '@type': 'ListItem', position: 2, name: cat.name, item: `https://nexora.com/${cat.slug}` },
    ],
  };

  return (
    <>
      <SchemaMarkup type="breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section className="py-12 px-4 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">{cat.name}</span>
          </nav>

          <div className="flex items-center gap-6">
            <div className="text-5xl">{cat.emoji}</div>
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                {cat.name}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                {cat.longDescription} · <span className="font-semibold text-slate-700 dark:text-slate-300">{cat.articleCount} guides published</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {['All Guides', 'How-To Tutorials', 'Best Tools Lists', 'Trending'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  i === 0
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">More guides coming soon</h3>
              <p className="text-slate-500 dark:text-slate-400">We're writing in-depth guides for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <EmailCapture
        title={`Get the Best ${cat.name} Guides Free`}
        subtitle={`Join thousands of professionals getting weekly ${cat.name.toLowerCase()} workflows, tool reviews, and strategies.`}
      />
    </>
  );
}
