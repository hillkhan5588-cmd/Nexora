/**
 * lib/seo.ts
 *
 * Fixes the Step 0 audit findings site-wide:
 *   1. Canonical URLs were pointing to "nexora.com" instead of the real domain.
 *   2. og:url was missing "www", inconsistent with the canonical www structure.
 *   3. Social share links were hardcoded instead of built from the current page.
 *
 * Every page (existing AND new) should build its metadata through
 * buildMetadata() below instead of hand-writing <head> tags, so this
 * fix applies everywhere at once and can never regress per-page.
 */

import type { Metadata } from "next";

// SINGLE SOURCE OF TRUTH for the domain. Change this once if it's ever wrong —
// nowhere else in the codebase should hardcode the domain string.
export const SITE_URL = "https://www.nexoratools.xyz";
export const SITE_NAME = "NEXORA";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Path only, starting with "/", e.g. "/knowledge-center/pdf/how-to-merge-pdf-files" */
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  // Always build from SITE_URL — this is what stops the "nexora.com" bug
  // and the missing-www bug from ever coming back on a new page.
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonicalUrl, // was previously inconsistent — now always matches canonical
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Builds correct, page-specific share URLs.
 * Fixes the bug where share buttons all pointed to a hardcoded
 * "https://nexora.com" regardless of which article was open.
 */
export function buildShareUrls(path: string, title: string) {
  const url = encodeURIComponent(`${SITE_URL}${path}`);
  const text = encodeURIComponent(title);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    reddit: `https://reddit.com/submit?url=${url}&title=${text}`,
  };
}

/** JSON-LD BreadcrumbList — add site-wide per the audit's structured-data gap. */
export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** JSON-LD Article schema for Knowledge Center pages. */
export function buildArticleSchema(args: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    datePublished: args.publishedTime,
    dateModified: args.modifiedTime ?? args.publishedTime,
    author: { "@type": "Person", name: args.authorName },
    publisher: { "@type": "Organization", name: SITE_NAME },
    image: args.image ?? DEFAULT_OG_IMAGE,
  };
}

/** JSON-LD FAQPage schema — reuse wherever an FAQ accordion appears. */
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** JSON-LD CollectionPage schema — for hub/category pages listing multiple items. */
export function buildCollectionPageSchema(args: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: args.name,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
  };
}

/** JSON-LD ItemList schema — lists the items shown on a collection/hub page. */
export function buildItemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}

/** JSON-LD SoftwareApplication schema — used on individual AI tool profile pages. */
export function buildSoftwareApplicationSchema(args: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
  ratingValue?: number;
  offers?: { price: string; priceCurrency?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: args.name,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    applicationCategory: args.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    ...(args.ratingValue
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: args.ratingValue,
            bestRating: 5,
            ratingCount: 1,
          },
        }
      : {}),
  };
}
