import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTools } from '../data/tools';
import { ToolData } from '../types';
import { SEO } from '../components/SEO';

const getCategory = (slug: string): string => {
    if (slug.includes('kredi') || slug.includes('faiz') || slug.includes('finans') || slug.includes('borsa') || slug.includes('doviz') || slug.includes('altin')) return 'Finans & Kredi';
    if (slug.includes('maas') || slug.includes('tazminat') || slug.includes('ucret') || slug.includes('sgk') || slug.includes('emeklilik') || slug.includes('izin')) return 'Maaş & Çalışma Hayatı';
    if (slug.includes('vergi') || slug.includes('kdv') || slug.includes('otv') || slug.includes('mtv') || slug.includes('harc') || slug.includes('stopaj')) return 'Vergi Hesaplamaları';
    if (slug.includes('bmi') || slug.includes('kilo') || slug.includes('kalori') || slug.includes('gebelik') || slug.includes('saglik') || slug.includes('bebek')) return 'Sağlık & Yaşam';
    if (slug.includes('yuzde') || slug.includes('matematik') || slug.includes('alan') || slug.includes('hacim') || slug.includes('not') || slug.includes('sinav')) return 'Matematik & Eğitim';
    if (slug.includes('arac') || slug.includes('yakit') || slug.includes('trafik') || slug.includes('lastik') || slug.includes('hiz')) return 'Araç & Trafik';
    if (slug.includes('tarih') || slug.includes('gun') || slug.includes('saat') || slug.includes('yas')) return 'Zaman & Tarih';
    return 'Diğer Araçlar';
};

export const SitemapPage: React.FC = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categorizedTools = useMemo(() => {
    const tools = getAllTools();
    const categories: Record<string, ToolData[]> = {};
    tools.forEach(tool => {
      const category = getCategory(tool.slug);
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(tool);
    });
    return categories;
  }, []);
  
  const sortedCategories = Object.keys(categorizedTools).sort((a,b) => {
      if (a === 'Diğer Araçlar') return 1;
      if (b === 'Diğer Araçlar') return -1;
      return a.localeCompare(b);
  });

  const staticPages = [
      { name: 'Ana Sayfa', path: '/' },
      { name: 'Hakkımızda', path: '/hakkimizda' },
      { name: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
      { name: 'Kullanım Şartları', path: '/kullanim-sartlari' },
      { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <>
      <SEO 
        pageType="sitemap" 
        title="Site Haritası" 
        description="Hesapolog'daki tüm hesaplama araçlarına ve sayfalara tek bir yerden ulaşın. Finans, sağlık, vergi ve daha birçok kategorideki araçlarımızı keşfedin."
        noIndex
      />
      <div className="bg-white rounded-2xl shadow-soft border border-brand-beige p-6 md:p-10 max-w-none text-brand-grey/90 animate-fade-in">
          <h1 className="text-3xl font-heading font-bold text-brand-dark mb-8 border-b border-brand-light pb-4">Site Haritası</h1>
          
          <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                   <h2 className="font-heading font-bold text-xl text-brand-dark mb-4">Ana Sayfalar</h2>
                   <ul className="space-y-2">
                      {staticPages.map(page => (
                          <li key={page.path}>
                              <Link to={page.path} className="text-brand-grey hover:text-brand-dark hover:underline transition-colors">{page.name}</Link>
                          </li>
                      ))}
                   </ul>
              </div>
              <div className="md:col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {sortedCategories.map(category => (
                      <div key={category}>
                          <h2 className="font-heading font-bold text-lg text-brand-dark mb-4">{category}</h2>
                          <ul className="space-y-2">
                             {categorizedTools[category].sort((a,b) => a.name.localeCompare(b.name)).map(tool => (
                                 <li key={tool.slug}>
                                    <Link to={`/${tool.slug}`} className="text-brand-grey hover:text-brand-dark hover:underline transition-colors text-sm">{tool.name}</Link>
                                 </li>
                             ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </>
  );
};