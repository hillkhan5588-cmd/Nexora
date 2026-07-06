/**
 * components/ArticleBody.tsx
 *
 * Lightweight markdown renderer for Knowledge Center article bodies.
 * article.body is stored as a plain markdown string (see lib/content.ts).
 * Rendering it directly as {article.body} in JSX prints one flat unformatted
 * blob with no paragraph breaks, headings, or lists — this component fixes that.
 *
 * Supports: ## / ### headings, blank-line-separated paragraphs,
 * "- " bullet lists, "1. " numbered lists, and **bold** inline text.
 * No external dependency — intentionally simple. If body content grows more
 * complex (tables, code blocks, images), swap this for a real MDX renderer.
 */

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${keyPrefix}-t-${i}`}>{part}</span>;
  });
}

export function ArticleBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/);

  const elements: React.ReactNode[] = [];
  let listBuffer: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushList = (key: string) => {
    if (!listBuffer) return;
    const Tag = listBuffer.type;
    elements.push(
      <Tag key={key} className={Tag === "ul" ? "list-disc pl-6 mb-4 space-y-1" : "list-decimal pl-6 mb-4 space-y-1"}>
        {listBuffer.items.map((item, i) => (
          <li key={`${key}-li-${i}`} className="text-slate-700">
            {renderInline(item, `${key}-${i}`)}
          </li>
        ))}
      </Tag>
    );
    listBuffer = null;
  };

  blocks.forEach((block, idx) => {
    const trimmed = block.trim();
    const key = `block-${idx}`;

    if (trimmed.startsWith("### ")) {
      flushList(`${key}-flush`);
      elements.push(
        <h3 key={key} className="mt-6 mb-2 text-lg font-semibold text-slate-900">
          {renderInline(trimmed.replace(/^###\s+/, ""), key)}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushList(`${key}-flush`);
      elements.push(
        <h2 key={key} className="mt-8 mb-3 text-xl font-bold text-slate-900">
          {renderInline(trimmed.replace(/^##\s+/, ""), key)}
        </h2>
      );
      return;
    }

    const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
    const isBulletList = lines.length > 0 && lines.every((l) => l.startsWith("- "));
    const isNumberedList = lines.length > 0 && lines.every((l) => /^\d+\.\s/.test(l));

    if (isBulletList) {
      flushList(`${key}-flush`);
      listBuffer = { type: "ul", items: lines.map((l) => l.replace(/^-\s+/, "")) };
      flushList(key);
      return;
    }

    if (isNumberedList) {
      flushList(`${key}-flush`);
      listBuffer = { type: "ol", items: lines.map((l) => l.replace(/^\d+\.\s+/, "")) };
      flushList(key);
      return;
    }

    flushList(`${key}-flush`);
    elements.push(
      <p key={key} className="mb-4 leading-relaxed text-slate-700">
        {renderInline(trimmed, key)}
      </p>
    );
  });

  return <div className="prose prose-slate max-w-none">{elements}</div>;
}
