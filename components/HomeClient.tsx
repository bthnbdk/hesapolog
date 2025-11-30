'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ToolData } from '@/types';

// Ad Component (Placeholder for AdSense)
const AdSpace: React.FC<{ className?: string; label?: string }> = ({ className, label = "Reklam Alanı" }) => (
  <div className={`bg-brand-surface border border-dashed border-brand-dark/10 flex flex-col items-center justify-center text-brand-dark/20 text-center p-4 rounded-xl overflow-hidden relative group ${className}`}>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM0NTI4MjkiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70 z-10">{label}</span>
    <span className="text-[9px] opacity-50 mt-1 z-10">Sponsorlu Bağlantı</span>
  </div>
);

export const HomeClient: React.FC<{ tools: ToolData[] }> = ({ tools }) => {
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = useMemo(() => {
    const all = tools;
    const is = (t: ToolData, k: RegExp) => k.test(t.slug);
    
    return {
      finance: all.filter(t => is(t, /kredi|faiz|kdv|zam|maas|para|indirim|doviz|altin|kira|vergi|kar|maliyet|fatura/)),
      health: all.filter(t => is(t, /bmi|kilo|kalori|su|gebelik|adet|yumurtlama|nabiz|saglik/)),
      math: all.filter(t => is(t, /yuzde|alan|hacim|matematik|oran|not|puan|okul|ders/)),
      life: all.filter(t => is(t, /yas|gun|tarih|saat|burc|ask|harc|trafik|hava|mesai|izin/)),
    };
  }, [tools]);

  const otherTools = useMemo(() => {
    const categorizedSlugs = new Set([
      ...categories.finance, 
      ...categories.health, 
      ...categories.math, 
      ...categories.life
    ].map(t => t.slug));
    return tools.filter(t => !categorizedSlugs.has(t.slug));
  }, [tools, categories]);

  const popularTools = tools.slice(0, 6); 

  const filteredTools = useMemo(() => tools.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.longtails.toLowerCase().includes(search.toLowerCase())
  ), [search, tools]);

  const isSearching = search.length > 0;

  const getIcon = (slug: string) => {
     if(slug.includes('kredi') || slug.includes('maas')) return '💰';
     if(slug.includes('bmi') || slug.includes('kilo')) return '⚖️';
     if(slug.includes('yas') || slug.includes('gun')) return '🎂';
     if(slug.includes('yuzde')) return '％';
     if(slug.includes('tarih')) return '📅';
     if(slug.includes('faiz')) return '📈';
     return '🧮';
  };

  return (
    <div className="space-y-12">
      <section className="relative pt-4 pb-8 md:pt-12 md:pb-16 text-center px-4">
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-dark/5 text-brand-dark/60 text-xs font-bold tracking-wider uppercase animate-fade-in">
               Hızlı & Güvenilir Hesaplama Platformu
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark tracking-tight mb-6 leading-tight">
              Tüm Hesaplar <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10">Tek Adreste.</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-beige/40 -z-10 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-grey/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Finanstan sağlığa, okuldan günlük yaşama kadar yüzlerce ücretsiz araç.
              Üyelik yok, bekleme yok.
            </p>

            <div className="max-w-xl mx-auto relative group z-20 text-left">
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-beige to-brand-light rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
               <div className="relative">
                 <input 
                    type="text" 
                    placeholder="Ne hesaplamak istiyorsunuz? (Örn: Kredi, BMI)" 
                    className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white text-brand-dark shadow-soft border border-transparent focus:border-brand-beige focus:ring-4 focus:ring-brand-beige/20 outline-none text-lg transition-all placeholder:text-brand-grey/30 font-medium relative z-20"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                 />
                 <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-dark/40 group-focus-within:text-brand-dark transition-colors z-30 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                 </div>

                 {showSuggestions && search.length > 0 && (
                     <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl border border-brand-dark/5 overflow-hidden z-50 animate-fade-in flex flex-col divide-y divide-brand-light">
                        {filteredTools.slice(0, 5).map(tool => (
                            <Link 
                                key={tool.slug} 
                                href={`/${tool.slug}/`}
                                className="flex items-center gap-4 px-5 py-4 hover:bg-brand-light/30 transition-colors"
                                onClick={() => setShowSuggestions(false)}
                            >
                                <span className="text-2xl">{getIcon(tool.slug)}</span>
                                <div className="min-w-0">
                                    <div className="font-bold text-brand-dark text-sm">{tool.name}</div>
                                    <div className="text-xs text-brand-grey/60 truncate">{tool.description}</div>
                                </div>
                            </Link>
                        ))}
                        {filteredTools.length === 0 ? (
                            <div className="px-5 py-4 text-sm text-brand-grey/60 italic text-center">
                                Sonuç bulunamadı.
                            </div>
                        ) : filteredTools.length > 5 && (
                             <div className="px-5 py-2.5 bg-brand-light/20 text-[10px] font-bold text-brand-dark/50 text-center uppercase tracking-wide">
                                Toplam {filteredTools.length} sonuç bulundu
                            </div>
                        )}
                     </div>
                 )}
               </div>
            </div>
        </div>
      </section>

      <div className="container max-w-5xl mx-auto px-4">
        <AdSpace className="h-24 md:h-28 w-full shadow-sm border-none bg-white" label="Sponsorlu Alan (Yatay)" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-start">
        
        <div className="lg:col-span-8 space-y-12">
          
          {isSearching ? (
             <div className="animate-fade-in min-h-[400px]">
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6 flex items-center gap-2">
                   🔍 Arama Sonuçları <span className="text-sm font-normal text-brand-grey/60 ml-auto bg-white px-3 py-1 rounded-full border border-brand-dark/5">{filteredTools.length} sonuç</span>
                </h2>
                {filteredTools.length > 0 ? (
                   <div className="grid md:grid-cols-2 gap-4">
                      {filteredTools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
                   </div>
                ) : (
                   <div className="text-center py-16 bg-white rounded-2xl border border-brand-dark/5">
                      <div className="text-4xl mb-4 opacity-30">😕</div>
                      <h3 className="text-lg font-bold text-brand-dark">Sonuç Bulunamadı</h3>
                      <p className="text-brand-grey text-sm mt-1">Farklı anahtar kelimelerle tekrar deneyin.</p>
                   </div>
                )}
             </div>
          ) : (
            <>
              <CategorySection 
                title="Finans & Ekonomi" 
                icon="💰" 
                tools={categories.finance} 
              />
              <div className="py-4">
                 <AdSpace className="h-32 w-full bg-brand-light/20 border-brand-dark/5" label="İçerik Arası Reklam" />
              </div>
              <CategorySection 
                title="Sağlık & Spor" 
                icon="🩺" 
                tools={categories.health} 
              />
              <CategorySection 
                title="Matematik & Eğitim" 
                icon="📐" 
                tools={categories.math} 
              />
              <CategorySection 
                title="Zaman & Yaşam" 
                icon="📅" 
                tools={categories.life} 
              />
               <CategorySection 
                title="Diğer Araçlar" 
                icon="🔧" 
                tools={otherTools} 
              />
            </>
          )}
        </div>

        <aside className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-2xl shadow-soft border border-brand-dark/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-brand-dark/5 bg-brand-surface/50 flex items-center justify-between">
                 <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wide">Popüler</h3>
                 <span className="text-xs text-brand-grey/50">🔥</span>
              </div>
              <div className="p-2">
                 {popularTools.map((t, i) => (
                    <Link key={t.slug} href={`/${t.slug}/`} className="flex items-center gap-3 group hover:bg-brand-light/40 p-3 rounded-xl transition-colors">
                       <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center font-heading font-bold text-sm rounded-lg transition-colors ${i < 3 ? 'bg-brand-dark text-brand-light' : 'bg-brand-surface text-brand-grey'}`}>
                          {i+1}
                       </span>
                       <div className="flex-grow min-w-0">
                          <h4 className="text-sm font-bold text-brand-dark truncate group-hover:text-brand-grey transition-colors">{t.name}</h4>
                          <p className="text-[10px] text-brand-grey/50 truncate">En çok kullanılanlar</p>
                       </div>
                       <span className="opacity-0 group-hover:opacity-100 text-brand-dark text-xs transition-opacity">→</span>
                    </Link>
                 ))}
              </div>
           </div>
           <AdSpace className="h-[280px] w-full bg-white shadow-sm border-none" label="Kare Reklam (300x250)" />
           <div className="bg-white rounded-2xl shadow-soft border border-brand-dark/5 p-6">
              <h3 className="font-heading font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">Hızlı Erişim</h3>
              <div className="flex flex-wrap gap-2">
                 {['Kredi Hesaplama', 'Maaş', 'BMI', 'İdeal Kilo', 'KDV', 'Yüzde', 'İndirim', 'Yaş', 'Gün Sayısı', 'Zakat'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-brand-surface border border-brand-dark/5 rounded-lg text-[11px] font-bold text-brand-grey hover:bg-brand-dark hover:text-white hover:border-brand-dark cursor-pointer transition-all">
                       {tag}
                    </span>
                 ))}
              </div>
           </div>
           <div className="sticky top-24">
              <AdSpace className="h-[600px] w-full bg-white shadow-sm border-none" label="Dikey Reklam (300x600)" />
           </div>
        </aside>
      </div>
      <section className="container max-w-5xl mx-auto px-4 py-16 border-t border-brand-dark/5 mt-8">
         <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
                <h2 className="font-heading font-bold text-brand-dark text-2xl">Neden Hesapolog?</h2>
                <p className="text-brand-grey/80 text-sm leading-relaxed">
                  Karmaşık formüller, değişen oranlar ve kafa karıştırıcı işlemler arasında kaybolmayın. 
                  Hesapolog, en güncel verilerle saniyeler içinde doğru sonuca ulaşmanızı sağlar. 
                  Bankacılık düzenlemeleri, vergi mevzuatları ve bilimsel sağlık otoritelerinin standartlarını takip ediyoruz.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-xl border border-brand-dark/5 shadow-sm text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-bold text-brand-dark text-sm">Hızlı Sonuç</h3>
                  <p className="text-xs text-brand-grey/60 mt-1">Anlık hesaplama</p>
               </div>
               <div className="bg-white p-4 rounded-xl border border-brand-dark/5 shadow-sm text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h3 className="font-bold text-brand-dark text-sm">Güvenilir</h3>
                  <p className="text-xs text-brand-grey/60 mt-1">Resmi formüller</p>
               </div>
               <div className="bg-white p-4 rounded-xl border border-brand-dark/5 shadow-sm text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <h3 className="font-bold text-brand-dark text-sm">Mobil Uyumlu</h3>
                  <p className="text-xs text-brand-grey/60 mt-1">Her yerde yanınızda</p>
               </div>
               <div className="bg-white p-4 rounded-xl border border-brand-dark/5 shadow-sm text-center">
                  <div className="text-2xl mb-2">💸</div>
                  <h3 className="font-bold text-brand-dark text-sm">Ücretsiz</h3>
                  <p className="text-xs text-brand-grey/60 mt-1">Daima bedava</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const ToolCard: React.FC<{ tool: ToolData }> = ({ tool }) => (
  <Link href={`/${tool.slug}/`} className="group bg-white p-5 rounded-2xl border border-brand-dark/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 h-full relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
     <div className="w-12 h-12 flex-shrink-0 bg-brand-light/50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-brand-dark group-hover:text-white transition-all duration-300 relative z-10">
        {tool.slug.includes('kredi') || tool.slug.includes('maas') ? '💰' : 
         tool.slug.includes('bmi') || tool.slug.includes('kilo') ? '⚖️' : 
         tool.slug.includes('yas') || tool.slug.includes('gun') ? '🎂' : 
         tool.slug.includes('yuzde') ? '％' : 
         tool.slug.includes('tarih') ? '📅' : 
         tool.slug.includes('faiz') ? '📈' : '🧮'}
     </div>
     <div className="relative z-10 min-w-0">
        <h3 className="font-heading font-bold text-brand-dark mb-1 group-hover:text-brand-grey transition-colors truncate">{tool.name}</h3>
        <p className="text-xs text-brand-grey/70 line-clamp-2 leading-relaxed">{tool.description}</p>
     </div>
  </Link>
);

const CategorySection: React.FC<{ title: string; icon: string; tools: ToolData[]; }> = ({ title, icon, tools }) => {
  if (tools.length === 0) return null;
  return (
    <section className="scroll-mt-24">
       <div className="flex items-center gap-3 pb-3 border-b border-brand-dark/5 mb-5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg bg-brand-light/50`}>
            {icon}
          </div>
          <h2 className="text-xl font-heading font-bold text-brand-dark">{title}</h2>
          <span className="ml-auto text-xs font-bold text-brand-grey/40 bg-brand-surface px-2 py-1 rounded">{tools.length}</span>
       </div>
       <div className="grid md:grid-cols-2 gap-4">
          {tools.map(tool => (
             <ToolCard key={tool.slug} tool={tool} />
          ))}
       </div>
    </section>
  );
};