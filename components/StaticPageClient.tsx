'use client';

import React, { useEffect } from 'react';

interface Props {
  type: 'about' | 'privacy' | 'terms' | 'contact';
}

const content = {
  about: {
    title: "Hakkımızda",
    body: `
      <h2>Misyonumuz</h2>
      <p>Hesapolog olarak misyonumuz, günlük hayatta veya profesyonel iş yaşamında ihtiyaç duyulan tüm hesaplama araçlarını tek bir çatı altında, en basit, en hızlı ve en güvenilir şekilde sunmaktır. Finansal kararlarınızdan sağlık hedeflerinize, akademik çalışmalarınızdan vergi yükümlülüklerinize kadar her alanda, karmaşık formüllerle ve kafa karıştırıcı tablolarla uğraşmadan saniyeler içinde net sonuçlara ulaşmanızı sağlıyoruz.</p>
      
      <h2>Vizyonumuz</h2>
      <p>Türkiye'nin en kapsamlı ve en çok tercih edilen online hesaplama platformu olmak. Sürekli güncellenen araçlarımız ve kullanıcı dostu arayüzümüzle, herkesin finansal okuryazarlığını artırmasına ve hayatını kolaylaştırmasına yardımcı olmayı hedefliyoruz.</p>
      
      <h2>Değerlerimiz</h2>
      <ul>
        <li><strong>Doğruluk:</strong> Tüm hesaplamalarımız, güncel yasal mevzuatlar, bankacılık standartları ve bilimsel formüller temel alınarak geliştirilmiştir.</li>
        <li><strong>Kullanıcı Odaklılık:</strong> Herkesin rahatça kullanabileceği, sade ve anlaşılır bir deneyim sunmak önceliğimizdir. Geri bildirimlerinize her zaman açığız.</li>
        <li><strong>Erişilebilirlik:</strong> Hesapolog'u kullanmak için herhangi bir üyelik veya ücret gerekmez. Tüm araçlarımız her zaman herkesin erişimine açıktır.</li>
        <li><strong>Güvenilirlik:</strong> Kullanıcı gizliliğine saygı duyuyoruz. Sitemizde kişisel veri toplanmaz ve hesaplama işlemleri tamamen anonim olarak cihazınızda gerçekleştirilir.</li>
      </ul>
    `
  },
  privacy: {
    title: "Gizlilik Politikası",
    body: `
      <p><strong>Son Güncelleme:</strong> ${new Date().toLocaleDateString('tr-TR')}</p>
      <p>Hesapolog ("biz", "sitemiz") olarak gizliliğinize önem veriyoruz. Bu gizlilik politikası, sitemizi ziyaret ettiğinizde hangi bilgilerin neden toplandığını (veya toplanmadığını) açıklamaktadır.</p>

      <h2>1. Kişisel Veri Toplama</h2>
      <p>Hesapolog, kullanıcılarından ad, soyad, e-posta adresi, telefon numarası gibi hiçbir kişisel veriyi toplamaz. Hesaplama araçlarımıza girdiğiniz veriler (kredi tutarı, maaş, kilo vb.) sunucularımızda saklanmaz; tüm hesaplamalar anlık olarak sizin tarayıcınızda gerçekleştirilir ve sayfa kapatıldığında kaybolur.</p>

      <h2>2. Çerezler (Cookies)</h2>
      <p>Sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini anonim olarak analiz etmek amacıyla yalnızca temel işlevsel ve analitik çerezler kullanabilir. Bu çerezler, kişisel kimliğinizi ortaya çıkaracak bilgiler içermez. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman engelleyebilirsiniz.</p>
      
      <h2>3. Üçüncü Taraf Bağlantıları ve Reklamlar</h2>
      <p>Sitemiz, üçüncü taraf web sitelerine bağlantılar veya reklamlar (örn: Google AdSense) içerebilir. Bu sitelerin gizlilik politikaları bizim kontrolümüz dışındadır. Bu bağlantılara tıkladığınızda ilgili sitenin gizlilik politikasını incelemenizi öneririz. Reklam ortaklarımız, ilgi alanlarınıza yönelik reklamlar sunmak için kendi çerezlerini kullanabilir.</p>

      <h2>4. Politika Değişiklikleri</h2>
      <p>Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Yapılan değişiklikler bu sayfada yayınlanacaktır. Politikadaki önemli değişiklikler hakkında sitemiz üzerinden bilgilendirme yapılabilir.</p>
    `
  },
  terms: {
    title: "Kullanım Şartları",
    body: `
      <p>Lütfen Hesapolog ("sitemiz", "platform") web sitesini kullanmadan önce bu kullanım şartlarını dikkatlice okuyunuz. Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.</p>
      
      <h2>1. Hesaplamaların Doğruluğu ve Sorumluluk Reddi</h2>
      <p>Hesapolog'da sunulan tüm hesaplama araçları, genel kabul görmüş formüllere ve yayınlandığı tarihteki güncel yasal mevzuatlara dayanmaktadır. Ancak, bu araçların sonuçları <strong>yalnızca bilgilendirme ve simülasyon amaçlıdır.</strong> Finansal, yasal, tıbbi veya profesyonel tavsiye niteliği taşımaz. Alacağınız kararlardan önce mutlaka bir uzmana (bankacı, mali müşavir, doktor vb.) danışmanız gerekmektedir. Araçlarımızın sonuçlarından kaynaklanabilecek herhangi bir maddi veya manevi zarardan sitemiz sorumlu tutulamaz.</p>

      <h2>2. Fikri Mülkiyet</h2>
      <p>Sitede yer alan tüm metinler, tasarımlar, logolar ve yazılımlar Hesapolog'a aittir ve izin alınmadan kopyalanamaz, çoğaltılamaz veya dağıtılamaz.</p>

      <h2>3. Kullanım Kısıtlamaları</h2>
      <p>Sitemizi yasa dışı amaçlarla, diğer kullanıcılara zarar verecek şekilde veya sitemizin çalışmasını engelleyecek otomatik yazılımlar (bot, scraper vb.) ile kullanmak yasaktır.</p>

      <h2>4. Şartların Değiştirilmesi</h2>
      <p>Hesapolog, bu kullanım şartlarını dilediği zaman değiştirme hakkını saklı tutar. Değişiklikler bu sayfada yayınlandığı andan itibaren geçerli olur.</p>
    `
  },
  contact: {
    title: "İletişim",
    body: `
      <p>Hesapolog'u daha iyi hale getirmemize yardımcı olduğunuz için teşekkür ederiz. Her türlü öneri, geri bildirim veya hata bildirimi için bizimle aşağıdaki formu kullanarak veya doğrudan <strong>info@hesapolog.com</strong> e-posta adresinden iletişime geçmekten çekinmeyin.</p>
      
      <form class="mt-8 space-y-4 max-w-lg" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi (demo)!');">
        <div>
          <label class="block text-sm font-bold text-brand-dark mb-2" for="name">Adınız Soyadınız</label>
          <input class="w-full p-3 rounded-xl bg-brand-light/30 border border-brand-beige focus:bg-white focus:ring-2 focus:ring-brand-dark/20 outline-none transition-all" type="text" id="name" required />
        </div>
        <div>
          <label class="block text-sm font-bold text-brand-dark mb-2" for="email">E-posta Adresiniz</label>
          <input class="w-full p-3 rounded-xl bg-brand-light/30 border border-brand-beige focus:bg-white focus:ring-2 focus:ring-brand-dark/20 outline-none transition-all" type="email" id="email" required />
        </div>
        <div>
          <label class="block text-sm font-bold text-brand-dark mb-2" for="message">Mesajınız</label>
          <textarea class="w-full p-3 rounded-xl bg-brand-light/30 border border-brand-beige focus:bg-white focus:ring-2 focus:ring-brand-dark/20 outline-none transition-all" id="message" rows="5" required></textarea>
        </div>
        <div>
          <button type="submit" class="px-6 py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-grey transition-colors">Mesajı Gönder</button>
        </div>
      </form>
    `
  }
};

export const StaticPageClient: React.FC<Props> = ({ type }) => {
  const { title, body } = content[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);
  
  return (
      <div className="bg-white rounded-2xl shadow-soft border border-brand-beige p-6 md:p-10 max-w-none text-brand-grey/90 animate-fade-in">
        <h1 className="text-3xl font-heading font-bold text-brand-dark mb-8 border-b border-brand-light pb-4">{title}</h1>
        <div className="static-content-wrapper space-y-6 leading-relaxed">
          <style>{`
            .static-content-wrapper h2 {
              font-family: "Plus Jakarta Sans", system-ui, sans-serif;
              font-weight: 700;
              font-size: 1.5rem; /* 24px */
              color: #452829;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              padding-bottom: 0.5rem;
              border-bottom: 1px solid #F3E8DF;
            }
            .static-content-wrapper p, .static-content-wrapper li {
              font-size: 1rem; /* 16px */
              line-height: 1.75;
            }
            .static-content-wrapper ul {
              list-style-type: disc;
              padding-left: 1.5rem;
              margin-bottom: 1rem;
            }
            .static-content-wrapper li {
              margin-bottom: 0.5rem;
            }
            .static-content-wrapper strong {
              color: #452829;
              font-weight: 600;
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
  );
};