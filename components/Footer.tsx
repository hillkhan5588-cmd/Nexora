import Link from 'next/link';
import { CATEGORIES } from '@/lib/categories';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              NE<span className="text-violet-600">X</span>ORA
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Solve any task using AI in seconds. Practical guides, honest reviews, and step-by-step workflows for professionals worldwide.
            </p>
            <div className="flex gap-2 mt-4">
              {['𝕏', 'in', 'r/', 'P'].map((s, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:border-blue-500 text-sm font-bold transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Categories</h4>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Company</h4>
            <ul className="space-y-2">
              {[['About NEXORA', '/about'], ['Contact Us', '/contact'], ['Search Guides', '/search']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Legal</h4>
            <ul className="space-y-2">
              {[['Affiliate Disclosure', '/affiliate-disclosure'], ['Privacy Policy', '/privacy-policy'], ['Terms of Service', '/terms']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/feed.xml" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 NEXORA. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[['Affiliate Disclosure', '/affiliate-disclosure'], ['Privacy', '/privacy-policy'], ['Terms', '/terms']].map(([label, href]) => (
              <Link key={href} href={href} className="text-xs text-slate-400 hover:text-blue-600 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
