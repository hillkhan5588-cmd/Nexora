interface Props {
  type: 'article' | 'website' | 'organization' | 'breadcrumb' | 'faq';
  data: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: Props) {
  const schemas: Record<string, unknown> = {
    article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      ...data,
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'NEXORA',
      url: 'https://nexora.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://nexora.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      ...data,
    },
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NEXORA',
      url: 'https://nexora.com',
      logo: 'https://nexora.com/logo.png',
      sameAs: ['https://twitter.com/nexora_ai', 'https://linkedin.com/company/nexora'],
      ...data,
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      ...data,
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...data,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }}
    />
  );
}
