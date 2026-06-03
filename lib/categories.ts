import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    slug: 'business-freelancing-ai',
    name: 'Business & Freelancing AI',
    emoji: '💼',
    description: 'Grow your income and automate your entire workflow using AI.',
    longDescription: 'The highest-CPC category on NEXORA. These guides are built for US and UK professionals, freelancers on Upwork and Fiverr, and small business owners who want to earn more and work less using AI tools.',
    color: '#D97706',
    lightBg: '#FFFBEB',
    darkBg: '#451A03',
    articleCount: 31,
  },
  {
    slug: 'content-creation-ai',
    name: 'Content Creation AI',
    emoji: '✍️',
    description: 'Write faster, rank higher, and publish more content with AI.',
    longDescription: 'For bloggers, content marketers, copywriters, and social media managers who want to create professional-quality content at scale without losing their human voice.',
    color: '#2563EB',
    lightBg: '#EFF6FF',
    darkBg: '#1E3A5F',
    articleCount: 24,
  },
  {
    slug: 'video-image-ai',
    name: 'Video & Image AI',
    emoji: '🎬',
    description: 'Create stunning visuals and videos without design experience.',
    longDescription: 'For YouTube creators, designers, marketers, and anyone who needs to produce high-quality visual content without expensive equipment or years of design training.',
    color: '#7C3AED',
    lightBg: '#F5F3FF',
    darkBg: '#2E1B5E',
    articleCount: 18,
  },
  {
    slug: 'study-productivity-ai',
    name: 'Study & Productivity AI',
    emoji: '📚',
    description: 'Learn smarter and work faster using AI productivity tools.',
    longDescription: 'For students, knowledge workers, and professionals who want to absorb information faster, retain more, and get more done every day with the help of AI.',
    color: '#059669',
    lightBg: '#ECFDF5',
    darkBg: '#064E3B',
    articleCount: 21,
  },
  {
    slug: 'automation-developer-ai',
    name: 'Automation & Developer AI',
    emoji: '⚙️',
    description: 'Build, automate, and ship faster using AI developer tools.',
    longDescription: 'For developers, no-code builders, and technical solopreneurs who want to automate business workflows, build products faster, and stay ahead of the AI-powered development curve.',
    color: '#DC2626',
    lightBg: '#FEF2F2',
    darkBg: '#7F1D1D',
    articleCount: 15,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
