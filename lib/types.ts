export interface ToolRecommendation {
  name: string;
  emoji: string;
  bestFor: string;
  description: string;
  price: string;
  hasFree: boolean;
  commission?: string;
  recommended?: boolean;
  affiliateUrl: string;
  youtubeUrl?: string;
}

export interface ComparisonRow {
  tool: string;
  bestFor: string;
  price: string;
  freePlan: boolean;
  rating: string;
  recommended?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  updated: string;
  author: string;
  authorRole: string;
  emoji: string;
  featured: boolean;
  trending: boolean;
  metaDescription: string;
  tableOfContents: string[];
  tools: ToolRecommendation[];
  comparisonTable: ComparisonRow[];
  faqs: FAQ[];
  content: string;
  blogPost?: BlogPost;
}

export interface BlogPost {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  longDescription: string;
  color: string;
  lightBg: string;
  darkBg: string;
  articleCount: number;
}
