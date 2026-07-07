import { ARTICLES } from '@/lib/articles';
import { SITE_URL } from '@/lib/seo';

export async function GET() {
  const base = SITE_URL;
  const buildDate = new Date().toUTCString();

  const items = ARTICLES.map((article) => {
    const url = `${base}/${article.category}/${article.slug}`;
    const pubDate = new Date(article.date).toUTCString();
    return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>hello@nexora.com (${article.author})</author>
      <category><![CDATA[${article.categoryName}]]></category>
    </item>`.trim();
  }).join('\n    ');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NEXORA — Solve Any Task Using AI in Seconds</title>
    <link>${base}</link>
    <description>Real guides, real workflows, real results. Practical AI tool recommendations for professionals worldwide.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${base}/logo.png</url>
      <title>NEXORA</title>
      <link>${base}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
