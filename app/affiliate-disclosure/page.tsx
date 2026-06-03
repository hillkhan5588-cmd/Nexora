import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — NEXORA',
  description: 'NEXORA\'s affiliate disclosure. We earn commissions on some tool recommendations — here\'s everything you need to know about how that works.',
};

const AFFILIATES = [
  ['Jasper AI', '25% recurring commission — 60 day cookie'],
  ['Copy.ai', '45% recurring commission — 60 day cookie'],
  ['Surfer SEO', '25% recurring commission — 60 day cookie'],
  ['Writesonic', '30% recurring commission — 60 day cookie'],
  ['ElevenLabs', '22% recurring commission — 90 day cookie'],
  ['Zapier', '25% recurring commission'],
  ['Semrush', '$200 per sale — 120 day cookie'],
  ['Grammarly', '$20 per signup — 90 day cookie'],
  ['Notion', '$10 per signup — 90 day cookie'],
  ['Canva Pro', '$36 per sale — 30 day cookie'],
];

export default function AffiliatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-slate-600 dark:text-slate-300">Affiliate Disclosure</span>
      </nav>

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">Affiliate Disclosure</h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">Last updated: May 20, 2026</p>

      <div className="prose-content space-y-8 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        <p>NEXORA is transparent about how we make money. This page explains our affiliate relationships so you can make fully informed decisions about the tools and services we recommend.</p>

        <Section title="How NEXORA Makes Money">
          <p>Some links on NEXORA are affiliate links. This means if you click through and make a purchase, we may earn a commission at no additional cost to you. These commissions help us keep the site free, fund the time we spend testing tools, and cover our hosting and operational costs.</p>
        </Section>

        <Section title="This Does Not Affect Our Recommendations">
          <p>Our editorial independence is not for sale. We evaluate tools on their genuine merits — features, pricing, ease of use, quality of output, customer support, and reliability. We have turned down affiliate relationships with tools we don't believe in, and we recommend tools we genuinely believe in regardless of whether they have an affiliate program.</p>
          <p className="mt-4">Where we have an affiliate relationship with a tool, we disclose this at the top of every article with a clearly visible notice.</p>
        </Section>

        <Section title="Current Affiliate Partnerships">
          <p className="mb-4">The following tools currently have affiliate relationships with NEXORA:</p>
          <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            {AFFILIATES.map(([tool, commission], i) => (
              <div key={tool} className={`flex justify-between items-center px-5 py-3.5 text-sm ${i !== AFFILIATES.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''} ${i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
                <strong className="text-slate-900 dark:text-slate-100">{tool}</strong>
                <span className="text-slate-500 dark:text-slate-400">{commission}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="FTC and ASA Compliance">
          <p>This disclosure complies with the Federal Trade Commission (FTC) guidelines in the United States and the Advertising Standards Authority (ASA) guidelines in the United Kingdom. Affiliate relationships are material connections that we are required by law to disclose, and we do so on every relevant page of this site.</p>
        </Section>

        <Section title="Article-Level Disclosure">
          <p>Every article on NEXORA that contains affiliate links displays the following notice directly below the article title:</p>
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl text-amber-800 dark:text-amber-200 text-sm">
            <strong>⚠️ Affiliate Disclosure:</strong> This article contains affiliate links. If you purchase through our links we may earn a commission at no extra cost to you. We only recommend tools we genuinely believe in.
          </div>
        </Section>

        <Section title="Questions?">
          <p>If you have any questions about our affiliate relationships or how we select tools to recommend, <Link href="/contact" className="text-blue-600 hover:underline font-medium">contact us</Link>.</p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">{title}</h2>
      {children}
    </div>
  );
}
