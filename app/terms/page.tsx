import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — NEXORA',
  description: 'NEXORA terms of service — use of content, intellectual property, affiliate relationships, and limitation of liability.',
};

const SECTIONS = [
  {
    title: 'Agreement to Terms',
    body: 'By accessing or using nexora.com, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, please do not use the site.',
  },
  {
    title: 'Use of Content',
    body: 'All content on NEXORA — including articles, guides, comparisons, images, and brand assets — is the intellectual property of NEXORA unless stated otherwise. You may read, share links to, and quote up to 150 words from our content with proper attribution. You may not republish, reproduce, scrape, or commercially use our content in whole or in substantial part without written permission.',
  },
  {
    title: 'Intellectual Property',
    body: 'The NEXORA name, logo, and brand assets are owned by NEXORA. Third-party product names, logos, and trademarks referenced on this site are the property of their respective owners and are used for identification purposes only. Reference to any third-party tool or service does not imply endorsement by that company.',
  },
  {
    title: 'Affiliate Relationship Disclaimer',
    body: 'Some links on NEXORA are affiliate links. We earn commissions when you purchase through these links. This does not affect the price you pay. Full disclosure of all affiliate relationships is available on our Affiliate Disclosure page, and a notice appears on every article containing affiliate links.',
  },
  {
    title: 'Content Accuracy Disclaimer',
    body: "We make every effort to keep information on NEXORA accurate and current. However, AI tool pricing, features, and availability change frequently. Always verify current details directly with the tool provider before making a purchasing decision. NEXORA provides information for educational purposes and is not liable for decisions made based on information that has since become outdated.",
  },
  {
    title: 'Limitation of Liability',
    body: "NEXORA and its owners, employees, and contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the site or reliance on our content. Our total liability for any claim arising from use of the site shall not exceed $100 USD. This limitation applies to the fullest extent permitted by applicable law.",
  },
  {
    title: 'User Conduct',
    body: "You agree not to: use automated tools to scrape, index, or copy site content at scale; attempt to circumvent any security or access controls; use the site in any way that violates applicable local, national, or international law; or impersonate NEXORA or any of its authors or contributors.",
  },
  {
    title: 'Governing Law',
    body: "These terms are governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the appropriate courts.",
  },
  {
    title: 'Changes to Terms',
    body: 'We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms. The "Last updated" date at the top of this page reflects when terms were last changed. We encourage you to review these terms periodically.',
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-slate-600 dark:text-slate-300">Terms of Service</span>
      </nav>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">Terms of Service</h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">Last updated: May 20, 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        {SECTIONS.map(({ title, body }) => (
          <div key={title}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">{title}</h2>
            <p>{body}</p>
          </div>
        ))}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">Contact</h2>
          <p>Questions about these terms? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact us →</Link></p>
        </div>
      </div>
    </div>
  );
}
