import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getToolBySlug, getRelatedTools } from '../data/tools';
import { CalculatorRegistry } from '../calculators/CalculatorRegistry';
import { SEO } from '../components/SEO';
import { ShareButtons } from '../components/ShareButtons';

export const ToolPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = getToolBySlug(slug || '');
  const related = getRelatedTools(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tool) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-heading font-bold mb-4 text-brand-dark">Sayfa Bulunamadı</h2>
        <Link to="/" className="text-brand-dark border-b-2 border-brand-dark hover:text-brand-grey transition-colors">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  const cleanDescription = (text: string) => {
    return text.replace(/\[cite[^\]]*\]/g, '');
  };

  const renderFAQ = () => {
    if (!tool.faq_json || tool.faq_json.length === 0) return null;

    return (
      <div className="space-y-3">
        {tool.faq_json.map((f, idx) => (
          <details key={idx} className="group bg-white rounded-xl border border-brand-beige/50 open:border-brand-dark/20 open:shadow-sm overflow-hidden transition-all duration-300">
            <summary className="flex cursor-pointer items-center justify-between p-4 font-bold font-heading text-brand-dark text-sm md:text-base bg-transparent hover:bg-brand-light/30 transition-colors select-none">
              <span className="pr-4">{f.question}?</span>
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-brand-light text-brand-dark text-[10px] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-4 pt-0 text-brand-grey/90 leading-relaxed text-sm animate-fade-in">
              <div className="pt-3 border-t border-brand-light">
                 {f.answer}
              </div>
            </div>
          </details>
        ))}
      </div>
    );
  };

  const renderLogic = () => {
      const parts = tool.calisma_mantigi.split(/(?<=[.:])\s+/).filter(Boolean);
      return (
        <ul className="space-y-3">
            {parts.map((part, idx) => {
                const isFormula = (/[=+\-*/^]/.test(part) || /\d{2,}/.test(part)) && part.length < 150; 
                return (
                    <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-dark/40 flex-shrink-0"></div>
                        <div className={`text-brand-grey text-sm leading-relaxed w-full ${isFormula ? 'font-mono text-xs bg-brand-dark/5 p-3 rounded-lg border border-brand-dark/10 text-brand-dark' : ''}`}>
                            {part}
                        </div>
                    </li>
                );
            })}
        </ul>
      );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <SEO tool={tool} />
      
      {/* Breadcrumb */}
      <nav className="text-[10px] md:text-xs font-bold font-heading text-brand-grey/60 mb-6 flex items-center gap-2 uppercase tracking-wide">
         <Link to="/" className="hover:text-brand-dark transition-colors">Ana Sayfa</Link>
         <span className="opacity-50">/</span>
         <span className="text-brand-dark">{tool.name}</span>
      </nav>

      <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header */}
          <header>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-3 tracking-tight">{tool.name}</h1>
            <p className="text-lg text-brand-grey/80 font-light leading-relaxed">{tool.description}</p>
          </header>

          {/* Calculator Wrapper */}
          <section className="bg-brand-surface rounded-2xl shadow-soft border border-brand-beige p-6 md:p-8 relative overflow-hidden">
             {/* Subtle BG pattern */}
             <div className="absolute top-0 right-0 w-48 h-48 bg-brand-beige/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div className="relative z-10">
               <CalculatorRegistry slug={tool.slug} />
             </div>
          </section>

          {/* Description Text */}
          <section className="prose prose-stone prose-lg max-w-none text-brand-grey/90">
             <h2 className="text-xl font-heading font-bold text-brand-dark">Hakkında</h2>
             <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-light shadow-sm">
                <div className="whitespace-pre-line leading-relaxed text-sm md:text-base">
                  {cleanDescription(tool.long_description || tool.description)}
                </div>
                {tool.longtails && (
                  <div className="mt-6 pt-5 border-t border-brand-light">
                    <p className="text-xs text-brand-grey/60 flex flex-wrap gap-2 items-center">
                      <span className="font-bold text-brand-dark/70 uppercase tracking-wider mr-1">Etiketler:</span> 
                      {tool.longtails.split(',').map((tag, i) => (
                        <span key={i} className="bg-brand-light px-2 py-1 rounded text-brand-dark/70">{tag.trim()}</span>
                      ))}
                    </p>
                  </div>
                )}
             </div>
          </section>

          {/* Logic Box */}
          <section className="bg-white rounded-2xl shadow-sm border border-brand-beige overflow-hidden">
             <div className="bg-brand-dark/5 px-6 py-3 border-b border-brand-dark/5 flex items-center gap-2">
                <span className="text-lg">🧮</span>
                <h3 className="font-heading font-bold text-brand-dark text-sm md:text-base">Hesaplama Mantığı</h3>
             </div>
             <div className="p-6">
                {renderLogic()}
             </div>
          </section>
           
          {/* FAQ */}
          {(tool.faq_json && tool.faq_json.length > 0) && (
            <section>
              <h2 className="text-xl font-heading font-bold text-brand-dark mb-4">Sıkça Sorulan Sorular</h2>
              {renderFAQ()}
            </section>
          )}

          <div className="pt-4 border-t border-brand-dark/5">
            <ShareButtons title={tool.name} />
          </div>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
           <div className="bg-brand-surface p-5 rounded-2xl border border-brand-beige/60 shadow-sm">
              <h3 className="font-heading font-bold text-brand-dark text-sm mb-4 border-b border-brand-beige/50 pb-2 uppercase tracking-wide opacity-80">
                İlgili Araçlar
              </h3>
              <ul className="space-y-2">
                {related.map(t => (
                  <li key={t.slug}>
                    <Link to={`/${t.slug}`} className="group flex items-center justify-between p-3 rounded-xl hover:bg-brand-light transition-colors border border-transparent hover:border-brand-beige/30">
                      <span className="text-sm font-medium text-brand-grey group-hover:text-brand-dark transition-colors">{t.name}</span>
                      <span className="text-brand-beige group-hover:text-brand-dark transition-colors text-xs transform group-hover:translate-x-1">➜</span>
                    </Link>
                  </li>
                ))}
              </ul>
           </div>

           <div className="bg-gradient-to-br from-brand-dark to-brand-grey text-brand-light p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <h3 className="font-heading font-bold text-base mb-2 relative z-10">Öneri & Hata</h3>
              <p className="text-xs opacity-80 mb-4 relative z-10 leading-relaxed">
                Hesaplamalarımızda bir hata olduğunu düşünüyorsanız lütfen bize bildirin.
              </p>
              <button className="w-full py-2.5 bg-brand-light text-brand-dark font-bold rounded-lg hover:bg-white transition-colors text-xs uppercase tracking-wide shadow-sm">
                İletişime Geç
              </button>
           </div>
        </aside>
      </article>
    </div>
  );
};