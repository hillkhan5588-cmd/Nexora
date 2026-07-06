/**
 * lib/content.ts
 *
 * Content loading + query layer for the Knowledge Center.
 * Starts with static TS objects (mirrors your current articles.ts pattern,
 * but split one-file-per-vertical instead of one giant file — this is the
 * fix for the monolithic-file scalability issue from the audit).
 *
 * When you outgrow this (roughly 200-300+ articles), swap the internals of
 * these functions to read from MDX files or a headless CMS — nothing that
 * calls getArticlesByVertical() etc. needs to change.
 */

import type { Format, Vertical } from "./taxonomy";
import { pdfArticles } from "@/content/knowledge-center/pdf";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  format: Format;
  verticals: Vertical[]; // primary vertical is verticals[0] — used for the canonical URL
  publishedDate: string; // ISO date
  updatedDate?: string;
  author: string;
  readTimeMinutes: number;
  relatedToolSlugs?: string[]; // e.g. ["pdf/merge-pdf"]
  relatedArticleSlugs?: string[]; // e.g. ["pdf/how-to-compress-pdf"]
  faq?: { question: string; answer: string }[];
  body: string; // markdown/mdx body — placeholder as plain string for now
}

// Registry of all verticals currently populated with content.
// Add a new import + entry here as each vertical gets its first article.
const CONTENT_REGISTRY: Partial<Record<Vertical, Article[]>> = {
  pdf: pdfArticles,
};

export function getAllArticles(): Article[] {
  return Object.values(CONTENT_REGISTRY).flat();
}

export function getArticlesByVertical(vertical: Vertical): Article[] {
  return CONTENT_REGISTRY[vertical] ?? [];
}

export function getArticlesByFormat(format: Format): Article[] {
  return getAllArticles().filter((article) => article.format === format);
}

export function getArticleBySlug(vertical: Vertical, slug: string): Article | undefined {
  return getArticlesByVertical(vertical).find((article) => article.slug === slug);
}

export function getPrimaryVertical(article: Article): Vertical {
  return article.verticals[0];
}

/** Canonical path for an article — always its primary vertical, never the format hub. */
export function getArticleCanonicalPath(article: Article): string {
  return `/knowledge-center/${getPrimaryVertical(article)}/${article.slug}`;
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  if (!article.relatedArticleSlugs?.length) {
    // Fallback: other articles sharing a vertical, excluding itself
    return getAllArticles()
      .filter(
        (candidate) =>
          candidate.slug !== article.slug &&
          candidate.verticals.some((v) => article.verticals.includes(v))
      )
      .slice(0, limit);
  }
  return article.relatedArticleSlugs
    .map((path) => {
      const [vertical, slug] = path.split("/") as [Vertical, string];
      return getArticleBySlug(vertical, slug);
    })
    .filter((a): a is Article => Boolean(a))
    .slice(0, limit);
}
