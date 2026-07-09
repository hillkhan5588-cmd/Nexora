import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  // Was hardcoded as 'https://nexoratools.xyz' (no www), which didn't match
  // SITE_URL in lib/seo.ts ('https://www.nexoratools.xyz'). Now both come
  // from the same single source of truth.
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NEXORA — Solve Any Task Using AI in Seconds',
    template: '%s | NEXORA',
  },
  description:
    'Real guides, real workflows, real results. Find the perfect AI tool for exactly what you need to do today.',
  keywords: ['AI tools', 'artificial intelligence', 'productivity', 'freelancing', 'automation'],
  authors: [{ name: 'Alex Monroe', url: `${SITE_URL}/about` }],
  creator: 'NEXORA',
  publisher: 'NEXORA',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'NEXORA',
    title: 'NEXORA — Solve Any Task Using AI in Seconds',
    description: 'Real guides, real workflows, real results — no fluff. Find the perfect AI tool for exactly what you need to do today.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NEXORA' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexora_ai',
    creator: '@nexora_ai',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="alternate" type="application/rss+xml" title="NEXORA RSS Feed" href="/feed.xml" />

        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-96LM3LXM2E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-96LM3LXM2E');
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
