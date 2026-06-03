import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — NEXORA',
  description: 'NEXORA\'s privacy policy — what data we collect, how we use it, and your GDPR and CCPA rights.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-slate-600 dark:text-slate-300">Privacy Policy</span>
      </nav>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">Last updated: May 20, 2026 · Effective: May 20, 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        <p>NEXORA ("we", "us", "our") operates nexora.com. This Privacy Policy explains what data we collect, how we use it, and your rights regarding that data. This policy complies with GDPR (UK/EU), CCPA (California), and applicable email marketing laws globally.</p>

        {[
          {
            title: 'Data We Collect',
            content: (
              <ul className="list-disc ml-5 space-y-2">
                <li><strong className="text-slate-700 dark:text-slate-300">Email address:</strong> When you voluntarily subscribe to our newsletter via ConvertKit. We never require an email to read our content.</li>
                <li><strong className="text-slate-700 dark:text-slate-300">Analytics data:</strong> Google Analytics 4 collects anonymized usage data — pages visited, time on site, geographic region (country/city level), and device type. This only activates after you provide cookie consent.</li>
                <li><strong className="text-slate-700 dark:text-slate-300">Contact form data:</strong> Name, email, and message when you contact us. Stored securely and deleted after your inquiry is resolved.</li>
                <li><strong className="text-slate-700 dark:text-slate-300">Cookies:</strong> See Cookie Policy section below.</li>
              </ul>
            ),
          },
          {
            title: 'How We Use Your Data',
            content: (
              <ul className="list-disc ml-5 space-y-2">
                <li><strong className="text-slate-700 dark:text-slate-300">Email:</strong> To send our weekly newsletter. You can unsubscribe at any time via the link in every email.</li>
                <li><strong className="text-slate-700 dark:text-slate-300">Analytics:</strong> To understand which content is most useful and improve the site experience.</li>
                <li><strong className="text-slate-700 dark:text-slate-300">Contact data:</strong> Solely to respond to your specific inquiry. We don't add contact form submitters to any mailing list.</li>
              </ul>
            ),
          },
          {
            title: 'Cookie Policy',
            content: <p>We use cookies for Google Analytics 4 (analytics cookies) and to remember your cookie consent preference (strictly necessary functional cookie). We do not use advertising cookies, tracking pixels, or sell your data to any third parties. You can accept, decline, or manage cookie preferences at any time via the banner shown on your first visit.</p>,
          },
          {
            title: 'Your Rights (GDPR / CCPA)',
            content: (
              <ul className="list-disc ml-5 space-y-2">
                {['Right to access your personal data', 'Right to correct inaccurate data', 'Right to erasure ("right to be forgotten")', 'Right to opt out of marketing communications at any time', 'Right to data portability', 'Right to withdraw consent for analytics cookies'].map((r) => <li key={r}>{r}</li>)}
              </ul>
            ),
          },
          {
            title: 'Third-Party Services',
            content: (
              <ul className="list-disc ml-5 space-y-2">
                <li><strong className="text-slate-700 dark:text-slate-300">Google Analytics 4:</strong> Analytics. Data stored in the US. Activates only after cookie consent. <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy →</a></li>
                <li><strong className="text-slate-700 dark:text-slate-300">ConvertKit:</strong> Email marketing. Governed by ConvertKit's privacy policy. All subscribers can unsubscribe at any time.</li>
                <li><strong className="text-slate-700 dark:text-slate-300">Vercel:</strong> Hosting. May process anonymized request logs. <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy →</a></li>
                <li><strong className="text-slate-700 dark:text-slate-300">Cloudflare:</strong> CDN and security. May process IP addresses for security purposes.</li>
              </ul>
            ),
          },
          {
            title: 'Data Retention',
            content: <p>Email subscriber data is retained until you unsubscribe or request deletion. Contact form submissions are deleted within 90 days of resolution. Analytics data is retained for 14 months as set in Google Analytics.</p>,
          },
          {
            title: 'Changes to This Policy',
            content: <p>We may update this policy as our practices evolve. We'll update the "Last updated" date at the top of this page whenever changes are made. Continued use of the site after changes constitutes acceptance of the updated policy.</p>,
          },
          {
            title: 'Contact for Privacy Requests',
            content: <p>To exercise any of your rights or ask questions about this policy, email <strong className="text-slate-700 dark:text-slate-300">privacy@nexora.com</strong> or use our <Link href="/contact" className="text-blue-600 hover:underline font-medium">contact form</Link> with the subject "Privacy Request". We respond to all privacy requests within 30 days.</p>,
          },
        ].map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">{title}</h2>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
