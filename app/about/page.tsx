import { Metadata } from 'next';
import Link from 'next/link';
import EmailCapture from '@/components/EmailCapture';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About NEXORA — Who We Are & Why We Built This',
  description: 'NEXORA was built by an AI tools researcher who was tired of shallow, paid-placement "reviews". Every recommendation is tested, honest, and based on real experience.',
};

const STATS = [
  { num: '50+', label: 'Articles Published' },
  { num: '30+', label: 'Tools Reviewed' },
  { num: '10,000+', label: 'Monthly Readers' },
  { num: '4.9/5', label: 'Reader Rating' },
];

const PILLARS = [
  {
    icon: '🔬',
    title: 'We Test Everything Ourselves',
    body: "Every tool recommendation on NEXORA has been tested by a real human on real tasks. We buy the subscriptions, run the workflows, and compare the output before we write a single word.",
  },
  {
    icon: '📊',
    title: 'We Show You the Results',
    body: "Not just 'this tool is good.' We show you what it produced, how long it took, and what we'd do differently. Real data over vague claims, every time.",
  },
  {
    icon: '💰',
    title: 'Transparent Affiliate Relationships',
    body: "Some links on this site earn us a commission. We disclose every single one. Our policy: we only recommend tools we genuinely use and would recommend to a close friend regardless of affiliate status.",
  },
  {
    icon: '🔄',
    title: 'We Update Everything',
    body: "AI tools change fast. We review and update every article at least every 6 months. Every page shows the Last Updated date so you always know you're reading current information.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        type="organization"
        data={{
          description: 'NEXORA is a topical authority AI content site helping professionals worldwide solve real tasks using AI tools.',
          foundingDate: '2026',
          numberOfEmployees: 1,
        }}
      />

      {/* Hero */}
      <section className="py-16 px-4 text-center border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-600 dark:text-slate-300">About</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            We Help Professionals<br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Work Smarter With AI
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            NEXORA exists because finding genuinely useful AI tools is harder than it should be. We cut through the noise and give you practical, honest, tested recommendations that actually help you get more done.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map(({ num, label }) => (
            <div key={label} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">{num}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Author section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0 mx-auto sm:mx-0">
              AM
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">Alex Monroe</h2>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Founder & AI Tools Researcher at NEXORA</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                I built NEXORA out of frustration. Every AI tool list I found was either a paid placement disguised as a review, a shallow list with no real context, or written by someone who'd clearly never used the tools they were recommending.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] mt-3">
                I've spent 5+ years in digital marketing and content strategy, personally testing hundreds of AI tools across real workflows. NEXORA is where I share what I've actually learned — no affiliate bias, no corporate sponsors, no filler. Just honest guidance for professionals who want to work smarter.
              </p>
            </div>
          </div>

          {/* What makes us different */}
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">What Makes NEXORA Different</h2>
          <div className="flex flex-col gap-4">
            {PILLARS.map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-r-xl">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">{title}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563EB, #7C3AED)' }}>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To help every professional worldwide solve their real problems faster using AI — through practical, honest, depth-first guides that respect your intelligence and your time.
            </p>
          </div>
        </div>
      </section>

      <EmailCapture
        title="Join the NEXORA Newsletter"
        subtitle="One email per week. The best AI workflows, tool reviews, and income-building strategies. No spam, ever."
      />
    </>
  );
}
