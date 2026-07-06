/**
 * content/knowledge-center/pdf/index.ts
 *
 * One file per vertical, NOT one giant articles.ts.
 * This is the direct fix for the monolithic-file scalability issue.
 * Real content will eventually move to MDX files in this same folder;
 * these are placeholder entries showing the exact shape the system expects.
 */

import type { Article } from "@/lib/content";

export const pdfArticles: Article[] = [
  {
    slug: "how-to-merge-pdf-files",
    title: "How to Merge PDF Files (Free, No Software Needed)",
    excerpt:
      "Combine multiple PDFs into one document in under a minute, using either a browser tool or your operating system's built-in options.",
    format: "tutorials",
    verticals: ["pdf"],
    publishedDate: "2026-07-01",
    author: "Alex Monroe",
    readTimeMinutes: 4,
    relatedToolSlugs: ["pdf/merge-pdf"],
    relatedArticleSlugs: ["pdf/how-to-compress-pdf-files"],
    faq: [
      {
        question: "Is it safe to merge PDFs online?",
        answer:
          "Reputable browser-based tools process files temporarily and delete them shortly after. Avoid tools that require account creation for a one-off merge.",
      },
    ],
    body: "PLACEHOLDER_BODY",
  },
  {
    slug: "how-to-compress-pdf-files",
    title: "How to Compress a PDF Without Losing Quality",
    excerpt:
      "Shrink large PDF files for email or upload limits while keeping text sharp and images legible.",
    format: "guides",
    verticals: ["pdf"],
    publishedDate: "2026-07-01",
    author: "Alex Monroe",
    readTimeMinutes: 5,
    relatedToolSlugs: ["pdf/compress-pdf"],
    relatedArticleSlugs: ["pdf/how-to-merge-pdf-files"],
    body: "PLACEHOLDER_BODY",
  },
  {
    slug: "best-pdf-editors-2026",
    title: "Best PDF Editors in 2026: Free vs. Paid Compared",
    excerpt:
      "A practical comparison of the top PDF editors, covering free tiers, annotation tools, and OCR accuracy.",
    format: "comparisons",
    verticals: ["pdf", "business"],
    publishedDate: "2026-07-02",
    author: "Alex Monroe",
    readTimeMinutes: 8,
    body: "PLACEHOLDER_BODY",
  },
];
