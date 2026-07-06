/**
 * content/knowledge-center/pdf/index.ts
 *
 * One file per vertical, NOT one giant articles.ts.
 * This is the direct fix for the monolithic-file scalability issue.
 * Real content will eventually move to MDX files in this same folder;
 * these are placeholder entries showing the exact shape the system expects.
 */

import type { Article } from "@/lib/content";

export const pdfArticles: Article[] = [
  {
    slug: "how-to-merge-pdf-files",
    title: "How to Merge PDF Files (Free, No Software Needed)",
    excerpt:
      "Combine multiple PDFs into one document in under a minute, using either a browser tool or your operating system's built-in options.",
    format: "tutorials",
    verticals: ["pdf"],
    publishedDate: "2026-07-01",
    author: "Alex Monroe",
    readTimeMinutes: 4,
    relatedToolSlugs: ["pdf/merge-pdf"],
    relatedArticleSlugs: ["pdf/how-to-compress-pdf-files"],
    faq: [
      {
        question: "Is it safe to merge PDFs online?",
        answer:
          "Reputable browser-based tools process files temporarily and delete them shortly after. Avoid tools that require account creation for a one-off merge.",
      },
      {
        question: "Will merging PDFs reduce the quality of my files?",
        answer:
          "No. Merging simply combines pages into a single file without re-compressing images or text, so the visual quality stays exactly the same as the originals.",
      },
      {
        question: "Is there a limit to how many PDFs I can merge at once?",
        answer:
          "Most free browser tools cap total upload size (commonly 100MB-300MB combined) rather than file count, so you can typically merge dozens of smaller PDFs without issue.",
      },
    ],
    body: `If you've ever needed to send someone a single document instead of five separate attachments, merging PDFs is one of the most useful — and most overlooked — file skills. You don't need Adobe Acrobat, and you don't need to install anything.

## Option 1: Use a browser-based merge tool

This is the fastest route for a one-off merge and works the same way on Windows, Mac, Chromebook, or a work computer where you can't install software.

1. Open a reputable free PDF merge tool in your browser.
2. Upload the PDFs you want to combine, in the order you want them to appear.
3. Drag to reorder the files if needed — most tools show thumbnails so you can confirm the order visually.
4. Click merge, then download the combined file.

The whole process usually takes under a minute for a handful of documents.

## Option 2: Merge PDFs without any software (built-in OS tools)

If you'd rather not upload documents anywhere — useful for anything sensitive like contracts or ID scans — both major operating systems can merge PDFs entirely offline.

### On a Mac

- Open all the PDFs you want to merge in Preview.
- In the sidebar (View > Thumbnails), drag pages from one document's thumbnail view into another.
- Save the combined document as a new file.

### On Windows

- Windows doesn't have a built-in PDF merger, but you can print each PDF to the "Microsoft Print to PDF" printer one after another, appending pages, or use the Print dialog's page-range settings if your PDF viewer supports combined printing.
- For a fully offline option, free desktop utilities like PDFsam Basic handle merging without any internet connection.

## Which option should you pick?

- **Occasional, non-sensitive documents:** a browser tool is faster and requires zero setup.
- **Sensitive documents (contracts, IDs, financial records):** use the offline OS-based method so files never leave your device.
- **Frequent merging as part of your workflow:** a free desktop tool like PDFsam Basic saves time over repeated browser uploads.

Once merged, always open the final file and skim through it before sending — reordering mistakes are the most common issue, and they're much easier to catch before your document lands in someone else's inbox.`,
  },
  {
    slug: "how-to-compress-pdf-files",
    title: "How to Compress a PDF Without Losing Quality",
    excerpt:
      "Shrink large PDF files for email or upload limits while keeping text sharp and images legible.",
    format: "guides",
    verticals: ["pdf"],
    publishedDate: "2026-07-01",
    author: "Alex Monroe",
    readTimeMinutes: 5,
    relatedToolSlugs: ["pdf/compress-pdf"],
    relatedArticleSlugs: ["pdf/how-to-merge-pdf-files"],
    faq: [
      {
        question: "Why is my PDF so large in the first place?",
        answer:
          "Almost always it's uncompressed or high-resolution images embedded in the file. Scanned documents in particular tend to store each page as a full-resolution image, which balloons file size fast.",
      },
      {
        question: "Will compressing a PDF make the text blurry?",
        answer:
          "Not if you use a tool that treats text and images separately. Text in a PDF is stored as vector data, not pixels, so it stays sharp at any compression level — only embedded images are affected.",
      },
    ],
    body: `A PDF that won't attach to an email or upload to a job portal is a common, frustrating problem — and almost always fixable in under a minute, without any loss in readability.

## Why PDFs get bloated

Most oversized PDFs fall into one of three categories:

- Scanned documents, where each page is stored as a large, uncompressed image
- Reports with high-resolution photos embedded at full camera resolution
- Files that have been exported, re-exported, or merged multiple times, stacking redundant data

Text-only PDFs are almost never the problem — it's nearly always the images.

## Step 1: Try a browser-based compressor first

For most people this is the only step you'll need.

1. Open a reputable free PDF compression tool.
2. Upload your file and choose a compression level — "recommended" or "medium" preserves visual quality while cutting size significantly.
3. Download the compressed version and compare it side-by-side with the original before deleting the source file.

Most everyday documents (contracts, resumes, reports) shrink by 50-90% with no visible quality loss at this stage.

## Step 2: If you need more control, adjust image quality manually

Some tools let you set an explicit image quality percentage or target DPI (dots per inch) instead of a generic "high/medium/low" preset.

- **150 DPI** is plenty for anything read on a screen.
- **300 DPI** is the standard for anything that will be printed.
- Going below 100 DPI is where text inside images (like scanned pages) starts to visibly degrade.

## Step 3: For scanned documents specifically

If your PDF is a scan (a photo of a physical page, not real selectable text), compression alone has limits — the whole page is one big image. In this case:
- Re-scan at a lower DPI setting if you have the original document (150 DPI is usually enough for a legible scan).
- Or run OCR (optical character recognition) on the scan first, which converts it to searchable text plus a much smaller reference image, dramatically reducing file size.

## Quick gut-check before you send

Always reopen the compressed file and zoom in on any small text or fine print before sending it somewhere that matters — a quick visual check takes ten seconds and avoids the awkwardness of resending a document because a signature line turned into a smudge.`,
  },
  {
    slug: "best-pdf-editors-2026",
    title: "Best PDF Editors in 2026: Free vs. Paid Compared",
    excerpt:
      "A practical comparison of the top PDF editors, covering free tiers, annotation tools, and OCR accuracy.",
    format: "comparisons",
    verticals: ["pdf", "business"],
    publishedDate: "2026-07-02",
    author: "Alex Monroe",
    readTimeMinutes: 8,
    relatedToolSlugs: ["pdf/edit-pdf"],
    relatedArticleSlugs: ["pdf/how-to-compress-pdf-files", "pdf/how-to-merge-pdf-files"],
    faq: [
      {
        question: "Do I need a paid PDF editor for basic tasks?",
        answer:
          "No. For filling forms, adding a signature, highlighting, or merging/compressing files, free tools and browser-based options cover nearly everything most people need.",
      },
      {
        question: "When is a paid PDF editor actually worth it?",
        answer:
          "If you regularly edit the underlying text and layout of PDFs (not just annotate them), need reliable OCR on scanned documents, or manage bulk redaction/compliance workflows, a paid tool pays for itself in time saved.",
      },
    ],
    body: `Not everyone needs the same PDF editor. Someone signing a lease once a year has completely different needs than someone processing hundreds of scanned invoices a month. Here's how the main options actually compare, based on what you're trying to do.

## What "editing a PDF" usually means

Before comparing tools, it helps to separate what people usually mean by "edit":

1. **Annotate** — highlight, add comments, draw, add a signature
2. **Fill forms** — type into existing form fields
3. **Modify the actual content** — change text, move images, rearrange layout
4. **OCR / make scanned documents searchable and editable**

Free tools handle the first two extremely well. Paid tools earn their price mostly on the third and fourth.

## Free and browser-based options

**Best for:** signing documents, filling forms, quick annotations, one-off merges or compression.

- Built into most browsers and operating systems (Preview on Mac, built-in PDF viewers on Windows/Chrome)
- Zero cost, zero installation
- Handles signatures, basic highlighting, and form-filling reliably
- Limited or no ability to edit actual text/layout within the PDF
- OCR quality, if offered at all, is inconsistent

## Mid-tier paid tools

**Best for:** occasional real content edits, light OCR use, small teams sharing a license.

- Typically $10-20/month or a one-time license fee
- Can edit existing text and images directly in the PDF, not just annotate over them
- Usually include workable OCR for scanned documents
- Interface is generally simpler and faster than enterprise-grade software

## Enterprise-grade tools (e.g. Adobe Acrobat Pro)

**Best for:** heavy daily use, legal/compliance workflows, high-accuracy OCR at scale, advanced redaction.

- Higher cost, usually $20+/month per user
- Best-in-class OCR accuracy, especially on lower-quality scans
- Advanced redaction that actually removes underlying data (not just visually covers it — an important distinction for compliance)
- Overkill for anyone who just needs to fill and sign forms occasionally

## How to choose

- **You mostly sign, fill, and annotate:** stick with free/browser tools. Paying for anything here is unnecessary.
- **You occasionally need to fix a typo or rearrange pages in an existing PDF:** a mid-tier paid tool is the sweet spot.
- **You process scanned documents regularly, or redaction/compliance matters for your work:** enterprise-grade tools are worth the cost — the accuracy difference on OCR and redaction is not something free tools reliably match.

The most common mistake is defaulting to an expensive subscription for tasks a free browser tool already handles perfectly well. Start free, and only upgrade once you hit an actual limitation, not before.`,
  },
];
