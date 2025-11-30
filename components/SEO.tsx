import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToolData } from '../types';

interface Props {
  tool?: ToolData;
  pageType?: 'home' | 'about' | 'contact' | 'privacy' | 'terms' | 'sitemap';
  title?: string;
  description?: string;
  noIndex?: boolean;
}

export const SEO: React.FC<Props> = ({ tool, pageType, title, description, noIndex }) => {
  const location = useLocation();
  const canonicalUrl = `https://hesapolog.com${location.pathname === '/' ? '' : location.pathname}`;

  // Determine title and description
  let pageTitle = 'Hesapolog | Tüm Hesaplama Araçları';
  let pageDescription = 'Kredi, vergi, matematik, sağlık ve tarih hesaplamaları için en kapsamlı ve pratik araçlar.';
  
  if (tool) {
    pageTitle = `${tool.name} | Hesapolog`;
    pageDescription = tool.description;
  } else if (title) {
    pageTitle = `${title} | Hesapolog`;
    pageDescription = description || pageDescription;
  }

  // Effect to update document head
  useEffect(() => {
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
    
    // Manage robots meta tag for noindexing
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, follow');
    } else {
      if (metaRobots) {
        metaRobots.remove();
      }
    }

  }, [pageTitle, pageDescription, noIndex]);


  // Generate Schema.org JSON-LD
  const generateSchema = () => {
    const siteUrl = 'https://hesapolog.com';
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hesapolog",
      "url": siteUrl,
      "logo": "https://res.cloudinary.com/ddepwjk2w/image/upload/v1764498989/android-chrome-512x512_kuxsy5.png"
    };
    
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": `${siteUrl}/`
            },
            ...(tool ? [{
                "@type": "ListItem",
                "position": 2,
                "name": tool.name,
                "item": canonicalUrl
            }] : []),
             ...(pageType && pageType !== 'home' ? [{
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": canonicalUrl
            }] : [])
        ]
    };

    if (pageType === 'home') {
      return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Hesapolog",
          "url": siteUrl,
          "description": pageDescription,
          "potentialAction": {
              "@type": "SearchAction",
              "target": `${siteUrl}/?q={search_term_string}`,
              "query-input": "required name=search_term_string"
          }
      };
    }

    let pageSchema: any = {
      "@type": "WebPage",
      "url": canonicalUrl,
      "name": pageTitle,
      "description": pageDescription,
      "isPartOf": {
        "@id": `${siteUrl}/`
      }
    };
    
    if(pageType === 'about') pageSchema["@type"] = "AboutPage";
    if(pageType === 'contact') pageSchema["@type"] = "ContactPage";

    const graph = [baseSchema, breadcrumbSchema, pageSchema];

    if (tool) {
        // Add FAQ Schema if available
        const faqSchema = (tool.faq_json || [])
          .map(faq => ({
              "@type": "Question",
              "name": `${faq.question}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }));
        
        if (faqSchema.length > 0) {
            graph.push({
                "@type": "FAQPage",
                "mainEntity": faqSchema
            });
        }
    }
    
    return {
        "@context": "https://schema.org",
        "@graph": graph
    };
  };

  const schema = generateSchema();

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};