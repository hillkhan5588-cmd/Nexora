import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/lib/categories';
import { ARTICLES } from '@/lib/articles';
import { getAllArticles, getArticleCanonicalPath } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.nexoratools.xyz';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/search`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    // New pillar pages — previously missing from the sitemap entirely
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/knowledge-center`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${base}/categories`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${base}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${base}/${article.category}/${article.slug}`,
    lastModified: new Date(article.updated),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Knowledge Center articles (new content system — previously missing entirely)
  const kcArticles = getAllArticles();
  const kcArticlePages: MetadataRoute.Sitemap = kcArticles.map((article) => ({
    url: `${base}${getArticleCanonicalPath(article)}`,
    lastModified: new Date(article.updatedDate ?? article.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticPages, ...categoryPages, ...articlePages, ...kcArticlePages];
}
