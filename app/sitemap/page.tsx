import { getAllTools } from '@/data/tools';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ToolData } from '@/types';

export const metadata: Metadata = {
  title: 'Site Haritası',
  description: "Hesapolog'daki tüm hesaplama araçlarına ve sayfalara tek bir yerden ulaşın.",
  robots: {
    index: false,
    follow: true,
  }
};

// FIX: The SitemapPageComponent is now defined in this file to avoid the module error from importing an empty file.
// This is a server component, which is suitable for displaying a static list of links.
const SitemapPageComponent: React.FC<{ tools: ToolData[] }> = ({ tools }) => {
  const categories: { [key: string]: ToolData[] } = {};

  // Simple categorization logic based on keywords in slugs
  const getCategory = (slug: string): string => {
    if (slug.includes('kredi') || slug.includes('faiz') || slug.includes('doviz') || slug.includes('altin') || slug.includes('yatirim') || slug.includes('borsa') || slug.includes('kira-getirisi')) return 'Finans & Yatırım';
    if (slug.includes('maas') || slug.includes('ucret') || slug.includes('tazminat') || slug.includes('izin') || slug.includes('sgk') || slug.includes('emekli')) return 'Maaş & Çalışma Hayatı';
    if (slug.includes('vergi') || slug.includes('kdv') || slug.includes('mtv') || slug.includes('otv') || slug.includes('stopaj') || slug.includes('harc')) return 'Vergi & Harçlar';
    if (slug.includes('bmi') || slug.includes('kalori') || slug.includes('gebelik') || slug.includes('saglik') || slug.includes('kilo') || slug.includes('su') || slug.includes('adet')) return 'Sağlık & Yaşam';
    if (slug.includes('yuzde') || slug.includes('matematik') || slug.includes('alan') || slug.includes('hacim') || slug.includes('not') || slug.includes('puan') || slug.includes('net')) return 'Matematik & Eğitim';
    if (slug.includes('tarih') || slug.includes('yas') || slug.includes('gun') || slug.includes('saat') || slug.includes('zaman') || slug.includes('hafta')) return 'Zaman & Tarih';
    if (slug.includes('arac') || slug.includes('yakit') || slug.includes('trafik') || slug.includes('hiz') || slug.includes('lastik') || slug.includes('kasko')) return 'Araç & Ulaşım';
    return 'Diğer Araçlar';
  };

  tools.forEach(tool => {
    const category = getCategory(tool.slug);
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(tool);
  });
  
  const categoryOrder = [
    'Finans & Yatırım',
    'Maaş & Çalışma Hayatı',
    'Vergi & Harçlar',
    'Sağlık & Yaşam',
    'Matematik & Eğitim',
    'Zaman & Tarih',
    'Araç & Ulaşım',
    'Diğer Araçlar'
  ];

  const staticPages = [
    { name: 'Hakkımızda', path: '/hakkimizda/' },
    { name: 'Gizlilik Politikası', path: '/gizlilik-politikasi/' },
    { name: 'Kullanım Şartları', path: '/kullanim-sartlari/' },
    { name: 'İletişim', path: '/iletisim/' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-brand-beige p-6 md:p-10 max-w-none animate-fade-in">
      <h1 className="text-3xl font-heading font-bold text-brand-dark mb-8 border-b border-brand-light pb-4">Site Haritası</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {categoryOrder.map(category => (
          categories[category] && categories[category].length > 0 && (
            <div key={category}>
              <h2 className="text-lg font-heading font-bold text-brand-dark mb-4">{category}</h2>
              <ul className="space-y-2">
                {categories[category].map(tool => (
                  <li key={tool.slug}>
                    <Link href={`/${tool.slug}/`} className="text-sm text-brand-grey hover:text-brand-dark hover:underline transition-colors">
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
         <div>
            <h2 className="text-lg font-heading font-bold text-brand-dark mb-4">Kurumsal Sayfalar</h2>
            <ul className="space-y-2">
                {staticPages.map(page => (
                    <li key={page.path}>
                        <Link href={page.path} className="text-sm text-brand-grey hover:text-brand-dark hover:underline transition-colors">
                            {page.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default function SitemapPage() {
  const tools = getAllTools();
  return <SitemapPageComponent tools={tools} />;
}
