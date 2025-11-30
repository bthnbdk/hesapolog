'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icon';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showBookmarkHint, setShowBookmarkHint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const beforeInstallHandler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallHandler);

    const appInstalledHandler = () => {
      setInstallPrompt(null);
    };
    window.addEventListener('appinstalled', appInstalledHandler);

    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    setIsStandalone(mediaQuery.matches);
    const mediaQueryListener = (e: MediaQueryListEvent) => setIsStandalone(e.matches);
    mediaQuery.addEventListener('change', mediaQueryListener);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler);
      window.removeEventListener('appinstalled', appInstalledHandler);
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      return;
    }
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    setInstallPrompt(null);
  };
  
  const handleBookmarkClick = () => {
    setShowBookmarkHint(true);
    setTimeout(() => setShowBookmarkHint(false), 4000);
  };
  
  // Don't render layout for API routes. Added null check to fix build error.
  if (pathname && pathname.startsWith('/api')) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light text-brand-dark selection:bg-brand-beige selection:text-brand-dark">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-brand-dark/5 shadow-soft py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
             <Icon variant="header" />
             <span className="text-xl font-heading font-bold tracking-tight text-brand-dark">
              Hesapolog
             </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-brand-dark/5 shadow-sm">
            {[
              { name: 'Ana Sayfa', path: '/' },
              { name: 'Finans', path: '/kredi-hesaplama/' },
              { name: 'Sağlık', path: '/bmi-vucut-kitle-indeksi-hesaplama/' },
              { name: 'Matematik', path: '/yuzde-hesaplama/' },
            ].map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-brand-grey hover:text-brand-dark hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
           <div className="flex items-center gap-3 relative">
             {!isStandalone && (
                <>
                    {installPrompt ? (
                        <button 
                            onClick={handleInstallClick} 
                            className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-300 animate-fade-in" 
                            aria-label="Uygulamayı Yükle"
                            title="Uygulamayı Yükle"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        </button>
                    ) : (
                         <button
                            onClick={handleBookmarkClick}
                            className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-300 animate-fade-in"
                            aria-label="Yer İşareti Ekle"
                            title="Yer İşareti Ekle"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </button>
                    )}

                    {showBookmarkHint && (
                        <div className="absolute top-full mt-2 right-0 w-max bg-brand-dark text-brand-surface text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg animate-fade-in z-50">
                            {/iPad|iPhone|iPod/.test(navigator.userAgent) 
                                ? "Paylaş > Ana Ekrana Ekle" 
                                : "Favorilere eklemek için Ctrl+D kullanın."
                            }
                        </div>
                    )}
                </>
             )}
          </div>
        </div>
      </header>
      
      <main className="flex-grow pt-32 pb-16 px-4 md:px-6 container mx-auto relative z-10 max-w-6xl">
        {children}
      </main>

      <footer className="bg-brand-dark text-brand-light pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-beige/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5 space-y-6">
               <Link href="/" className="flex items-center gap-3 group">
                 <Icon variant="footer" />
                 <span className="text-2xl font-heading font-bold text-brand-surface tracking-tight">Hesapolog</span>
              </Link>
              <p className="text-brand-light/60 leading-relaxed max-w-sm text-sm">
                Günlük hayatta ihtiyaç duyduğunuz tüm hesaplamaları en doğru, en hızlı ve en güvenilir şekilde sunmak için buradayız. Karmaşık formüllerle uğraşmayın, sonucu anında görün.
              </p>
            </div>
            <div className="md:col-span-2 md:col-start-7">
               <h4 className="font-heading font-bold text-brand-surface mb-6">Popüler Araçlar</h4>
               <ul className="space-y-3 text-sm text-brand-light/60">
                 <li><Link href="/kredi-hesaplama/" className="hover:text-brand-beige transition-colors">Kredi Hesaplama</Link></li>
                 <li><Link href="/maas-hesaplama/" className="hover:text-brand-beige transition-colors">Maaş Hesaplama</Link></li>
                 <li><Link href="/bmi-vucut-kitle-indeksi-hesaplama/" className="hover:text-brand-beige transition-colors">BMI Hesaplama</Link></li>
                 <li><Link href="/yuzde-hesaplama/" className="hover:text-brand-beige transition-colors">Yüzde Hesaplama</Link></li>
                 <li><Link href="/mtv-hesaplama/" className="hover:text-brand-beige transition-colors">MTV Hesaplama</Link></li>
               </ul>
            </div>
            <div className="md:col-span-2">
               <h4 className="font-heading font-bold text-brand-surface mb-6">Kurumsal</h4>
               <ul className="space-y-3 text-sm text-brand-light/60">
                 <li><Link href="/hakkimizda/" className="hover:text-brand-beige transition-colors">Hakkımızda</Link></li>
                 <li><Link href="/gizlilik-politikasi/" className="hover:text-brand-beige transition-colors">Gizlilik Politikası</Link></li>
                 <li><Link href="/kullanim-sartlari/" className="hover:text-brand-beige transition-colors">Kullanım Şartları</Link></li>
                 <li><Link href="/iletisim/" className="hover:text-brand-beige transition-colors">İletişim</Link></li>
                 <li><Link href="/sitemap/" className="hover:text-brand-beige transition-colors">Site Haritası</Link></li>
               </ul>
            </div>
             <div className="md:col-span-2">
               <h4 className="font-heading font-bold text-brand-surface mb-6">Bizi Takip Edin</h4>
               <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-beige hover:text-brand-dark transition-all" aria-label="Facebook">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-beige hover:text-brand-dark transition-all" aria-label="Instagram">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-beige hover:text-brand-dark transition-all" aria-label="Twitter">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
               </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-light/40">
            <p>&copy; {new Date().getFullYear()} Hesapolog. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
                <span>❤️ ile kodlandı.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};