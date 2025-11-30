import { getToolBySlug, getAllTools, getRelatedTools } from '@/data/tools';
import { ToolPageClient } from '@/components/ToolPageClient';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string }
}

// Generate metadata for each tool page using Next.js Metadata API
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Sayfa Bulunamadı',
    }
  }

  const siteUrl = 'https://hesapolog.com';
  const canonicalUrl = `${siteUrl}/${slug}/`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (tool.faq_json || []).map(faq => ({
      '@type': 'Question',
      name: `${faq.question}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: tool.name, item: canonicalUrl },
    ],
  };

  const jsonLd: any[] = [breadcrumbSchema];
  if (faqSchema.mainEntity.length > 0) {
    jsonLd.push(faqSchema);
  }

  return {
    title: tool.name, // Template in layout will add "| Hesapolog"
    description: tool.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
        title: tool.name,
        description: tool.description,
        url: canonicalUrl,
    },
    twitter: {
        title: tool.name,
        description: tool.description,
    },
    other: {
      'application/ld+json': JSON.stringify(jsonLd),
    },
  }
}

// Statically generate all tool pages at build time for SSG
export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// The Page component is a Server Component by default in Next.js
export default function Page({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  
  if (!tool) {
    notFound();
  }
  
  const related = getRelatedTools(params.slug);

  return <ToolPageClient tool={tool} related={related} />;
}