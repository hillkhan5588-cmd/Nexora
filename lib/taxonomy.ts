/**
 * lib/taxonomy.ts
 *
 * Single source of truth for NEXORA's Knowledge Center taxonomy.
 * Every article, tool, and hub page reads from this file.
 * Adding a new vertical (e.g. "Audio") means adding ONE entry here —
 * hub pages, nav menus, and sitemaps all pick it up automatically.
 */

export type Format =
  | "guides"
  | "tutorials"
  | "reviews"
  | "comparisons"
  | "news"
  | "tool-pages";

export type Vertical =
  | "ai"
  | "pdf"
  | "image"
  | "video"
  | "audio"
  | "seo"
  | "developer"
  | "text"
  | "business"
  | "productivity"
  | "converters"
  | "calculators";

export interface FormatMeta {
  slug: Format;
  label: string;
  description: string;
}

export interface VerticalMeta {
  slug: Vertical;
  label: string;
  description: string;
  icon: string; // emoji, matches existing category-card pattern on the live site
}

export const FORMATS: Record<Format, FormatMeta> = {
  guides: {
    slug: "guides",
    label: "Guides",
    description: "In-depth explainers that cover a topic end to end.",
  },
  tutorials: {
    slug: "tutorials",
    label: "Tutorials",
    description: "Step-by-step walkthroughs for a specific task.",
  },
  reviews: {
    slug: "reviews",
    label: "Reviews",
    description: "Hands-on assessments of a single tool or product.",
  },
  comparisons: {
    slug: "comparisons",
    label: "Comparisons",
    description: "Head-to-head breakdowns to help you choose between options.",
  },
  news: {
    slug: "news",
    label: "Industry News",
    description: "Timely updates on tools, features, and industry shifts.",
  },
  "tool-pages": {
    slug: "tool-pages",
    label: "Tool Pages",
    description: "Reference pages describing a specific tool in the directory.",
  },
};

export const VERTICALS: Record<Vertical, VerticalMeta> = {
  ai: { slug: "ai", label: "AI", description: "AI tools, models, and workflows.", icon: "🤖" },
  pdf: { slug: "pdf", label: "PDF", description: "PDF creation, editing, and conversion.", icon: "📄" },
  image: { slug: "image", label: "Image", description: "Image editing, generation, and optimization.", icon: "🖼️" },
  video: { slug: "video", label: "Video", description: "Video editing, compression, and generation.", icon: "🎬" },
  audio: { slug: "audio", label: "Audio", description: "Audio editing, transcription, and generation.", icon: "🎧" },
  seo: { slug: "seo", label: "SEO", description: "Search optimization tools and strategy.", icon: "📈" },
  developer: { slug: "developer", label: "Developer", description: "Dev tools, automation, and code utilities.", icon: "💻" },
  text: { slug: "text", label: "Text", description: "Writing, editing, and text-processing tools.", icon: "✍️" },
  business: { slug: "business", label: "Business", description: "Tools and workflows for running a business.", icon: "💼" },
  productivity: { slug: "productivity", label: "Productivity", description: "Task, time, and workflow management.", icon: "⚡" },
  converters: { slug: "converters", label: "Converters", description: "File and format conversion tools.", icon: "🔄" },
  calculators: { slug: "calculators", label: "Calculators", description: "Purpose-built calculators and estimators.", icon: "🧮" },
};

export const FORMAT_LIST = Object.values(FORMATS);
export const VERTICAL_LIST = Object.values(VERTICALS);

export function isValidFormat(slug: string): slug is Format {
  return slug in FORMATS;
}

export function isValidVertical(slug: string): slug is Vertical {
  return slug in VERTICALS;
}
