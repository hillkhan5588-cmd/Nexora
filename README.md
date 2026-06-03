# NEXORA — Full Next.js Website

> Solve Any Task Using AI in Seconds

A complete, production-ready Next.js 14 website for NEXORA — an AI content & affiliate marketing platform targeting Tier 1 English-speaking professionals.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
nexora/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, meta, header, footer)
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles + Tailwind
│   ├── sitemap.ts                    # Auto-generated XML sitemap
│   ├── robots.ts                     # robots.txt
│   ├── not-found.tsx                 # 404 page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── search/page.tsx
│   ├── affiliate-disclosure/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── feed.xml/route.ts             # RSS feed
│   └── [category]/
│       ├── page.tsx                  # Category hub page
│       └── [article]/page.tsx        # Full article page
├── components/
│   ├── Header.tsx                    # Sticky nav with mobile menu
│   ├── Footer.tsx                    # Full footer with links
│   ├── ThemeProvider.tsx             # next-themes wrapper
│   ├── ThemeToggle.tsx               # Dark/light toggle
│   ├── ArticleCard.tsx               # Article preview card
│   ├── ToolCard.tsx                  # Affiliate tool recommendation card
│   ├── ComparisonTable.tsx           # Tool comparison table
│   ├── EmailCapture.tsx              # Email signup section
│   ├── CookieBanner.tsx              # GDPR cookie consent
│   └── SchemaMarkup.tsx              # JSON-LD schema injection
├── lib/
│   ├── types.ts                      # TypeScript interfaces
│   ├── categories.ts                 # 5 category definitions
│   └── articles.ts                   # All 10 articles with full content
└── public/
    ├── favicon.svg
    ├── manifest.json                 # PWA manifest
    └── robots.txt
```

---

## 📄 Pages Built

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | ✅ Complete |
| Category pages (×5) | `/[category]` | ✅ Complete |
| Article pages (×10) | `/[category]/[article]` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| Search | `/search` | ✅ Complete |
| Affiliate Disclosure | `/affiliate-disclosure` | ✅ Complete |
| Privacy Policy | `/privacy-policy` | ✅ Complete |
| Terms of Service | `/terms` | ✅ Complete |
| 404 | `/404` | ✅ Complete |
| RSS Feed | `/feed.xml` | ✅ Complete |
| XML Sitemap | `/sitemap.xml` | ✅ Auto-generated |
| robots.txt | `/robots.txt` | ✅ Configured |

---

## 📝 Articles Included (10 of 10)

1. ✅ Best AI Tools for Freelancers to Make More Money in 2026
2. ✅ How to Use AI to Write Blog Posts That Rank on Google
3. ✅ Best AI Tools for Small Business Owners That Actually Save Time
4. ✅ How to Create YouTube Shorts Using AI — Full Workflow
5. ✅ Best Free AI Tools for Students in 2026
6. ✅ How to Write Cold Emails Using AI That Actually Get Replies
7. ✅ Best AI Image Generators for Commercial Use Without Copyright Issues
8. ✅ How to Automate Your Business Using AI Tools in 2026
9. ✅ Best AI Tools for Social Media Managers in 2026
10. ✅ How to Start a Faceless YouTube Channel Using AI

---

## ⚙️ Features

### SEO
- ✅ Article, BreadcrumbList, FAQPage, Organization, WebSite schema markup
- ✅ Open Graph + Twitter Card meta tags on all pages
- ✅ Canonical URLs
- ✅ Auto-generated XML sitemap (updates on every build)
- ✅ Configured robots.txt
- ✅ RSS feed at /feed.xml
- ✅ Author bylines + published/updated dates (EEAT signals)
- ✅ FAQ sections with FAQPage schema

### Design
- ✅ Dark mode / Light mode toggle (next-themes, persistent)
- ✅ Mobile-first responsive (320px → 1440px)
- ✅ Sticky header with mobile hamburger menu
- ✅ Sticky TOC sidebar on article pages (desktop)
- ✅ Scroll-progress-compatible article layout
- ✅ Brand colors: primary #2563EB, accent #7C3AED

### Content
- ✅ Full affiliate disclosure on every article
- ✅ Tool recommendation cards (ToolCard component)
- ✅ Comparison tables (ComparisonTable component)
- ✅ FAQ accordions with FAQPage schema
- ✅ Author bio on every article
- ✅ Social share buttons (Twitter, LinkedIn, Reddit, Copy)
- ✅ Related articles at end of every article
- ✅ Email capture at end of every page

### Legal / Compliance
- ✅ GDPR cookie consent banner (CookieBanner component)
- ✅ Affiliate Disclosure page (/affiliate-disclosure)
- ✅ Privacy Policy page (/privacy-policy)
- ✅ Terms of Service page (/terms)

---

## 🛠 Deployment (Vercel)

1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Set environment variables (see below)
4. Deploy — Vercel handles the rest

### Environment Variables (optional)
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX      # Google Analytics 4
NEXT_PUBLIC_CONVERTKIT_FORM=XXXXX   # ConvertKit form ID
```

---

## 📊 After Launch Checklist

- [ ] Replace placeholder OG image (`/public/og-image.png`, 1200×630px)
- [ ] Add real PNG favicons (32×32, 180×180, 192×192, 512×512)
- [ ] Connect Google Analytics 4 (add GA_ID env var)
- [ ] Submit sitemap to Google Search Console
- [ ] Set GSC location target to United States
- [ ] Connect ConvertKit to email capture forms
- [ ] Set up Twitter/X, Reddit, Pinterest, LinkedIn accounts
- [ ] Add real affiliate links (replace `#` URLs in articles.ts)
- [ ] Review and customize author bio (Alex Monroe)
- [ ] Add OG image to `/public/og-image.png`

---

## ✏️ Adding New Articles

Add entries to `/lib/articles.ts` following the existing `Article` interface.
The article will automatically appear in:
- Search results
- Category pages
- Related articles
- Sitemap
- RSS feed

No code changes required anywhere else.

---

Built with ❤️ for NEXORA · nexora.com
