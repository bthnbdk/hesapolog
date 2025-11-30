import { ToolData } from '../../types';

export const yatirimTools: ToolData[] = [
    {
        name: "Faiz Hesaplama",
        slug: "faiz-hesaplama",
        type: "hesaplama",
        description: "Basit ve bileşik faiz hesaplamak için kullanılır.",
        calisma_mantigi: "P*(1+r*t) ve P*(1+r)^n formülleri ile işlem yapılır.",
        faq_summary: "Faiz nasıl hesaplanır?; % kaç yıllık ne yapar?",
        longtails: "faiz hesaplama aracı, faiz oranı hesaplama, bileşik faiz hesaplama",
        long_description: "Yatırımlarınızın getirisini veya borçlarınızın maliyetini en doğru şekilde analiz edin. Faiz Hesaplama aracı, kısa vadeli kazançlar için basit faiz (P*r*t), uzun vadeli birikimleriniz için ise bileşik faiz (P*(1+r)^n) formüllerini kullanarak hesaplama yapar. Vadeli mevduat, repo veya borç senaryolarında paranın zamanla nasıl değerlendiğini saniyeler içinde görebilirsiniz.",
        faq_content: "**Basit ve bileşik faiz farkı nedir?**<br>Basit faiz sadece anapara üzerinden hesaplanırken, bileşik faiz kazanılan faizin de anaparaya eklenmesiyle (faizin faizi) büyür.<br>**Mevduat faizi nasıl hesaplanır?**<br>Anapara, bankanın sunduğu faiz oranı ve vade süresi çarpılarak hesaplanır.<br>**Faiz günlük mü yoksa aylık mı işler?**<br>Bu durum mevduat türüne ve bankanın anlaşmasına göre değişir.",
        faq_json: [
          {
            "question": "Basit ve bileşik faiz farkı nedir",
            "answer": "Basit faiz sadece anapara üzerinden hesaplanırken, bileşik faiz kazanılan faizin de anaparaya eklenmesiyle (faizin faizi) büyür."
          },
          {
            "question": "Mevduat faizi nasıl hesaplanır",
            "answer": "Anapara, bankanın sunduğu faiz oranı ve vade süresi çarpılarak hesaplanır."
          },
          {
            "question": "Faiz günlük mü yoksa aylık mı işler",
            "answer": "Bu durum mevduat türüne ve bankanın anlaşmasına göre değişir."
          }
        ]
      },
      {
        name: "KMH Faiz Hesaplama",
        slug: "kmh-faiz-hesaplama",
        type: "hesaplama",
        description: "Ek hesap kullanımına günlük faiz hesaplar.",
        calisma_mantigi: "Günlük faiz = borç * (oran/365).",
        faq_summary: "KMH faizi nasıl hesaplanır?",
        longtails: "ek hesap faiz hesaplama, esnek hesap",
        long_description: "Ek hesap veya avans hesabınızın (KMH) gerçek maliyetini sürpriz yaşamadan öğrenin. KMH Faiz Hesaplama aracı, bankaların günlük işletim mantığına uygun olarak borç tutarı, faiz oranı ve gün sayısına göre maliyeti çıkarır. Faizin günlük işlemesi nedeniyle küçük görünen oranların ay sonunda nasıl bir tutara ulaştığını analiz edebilirsiniz.",
        faq_content: "**KMH (Ek Hesap) faizi nasıl hesaplanır?**<br>Borç * (Faiz Oranı / 365) * Gün Sayısı formülüyle günlük bazda hesaplanır.<br>**Faiz günlük mü işler?**<br>Evet, ek hesaplarda faiz, parayı kullandığınız her gün için ayrı işler.<br>**Gecikme faizi hesaplanır mı?**<br>Limit aşımı veya ödenmeme durumunda gecikme faizi devreye girer.",
        faq_json: [
          {
            "question": "KMH (Ek Hesap) faizi nasıl hesaplanır",
            "answer": "Borç * (Faiz Oranı / 365) * Gün Sayısı formülüyle günlük bazda hesaplanır."
          },
          {
            "question": "Faiz günlük mü işler",
            "answer": "Evet, ek hesaplarda faiz, parayı kullandığınız her gün için ayrı işler."
          },
          {
            "question": "Gecikme faizi hesaplanır mı",
            "answer": "Limit aşımı veya ödenmeme durumunda gecikme faizi devreye girer."
          }
        ]
      },
      {
        name: "Borsa Yüzde Değişim Hesaplama",
        slug: "borsa-yuzde-degisim-hesaplama",
        type: "hesaplama",
        description: "Yatırımlarınızdaki kar veya zarar oranını anlık takip edin.",
        calisma_mantigi: "(Satış Fiyatı - Alış Fiyatı) / Alış Fiyatı formülüyle kar/zarar yüzdesi bulunur.",
        faq_summary: "Hisse yüzde artışı nasıl hesaplanır?",
        longtails: "borsa kar zarar hesaplama",
        long_description: "Borsa Yüzde Değişim Hesaplama aracı, hisse senedi veya kripto paranın alış ve satış fiyatı arasındaki farkı yüzde cinsinden hesaplar.",
        faq_content: "**Hisse yüzde artışı nasıl hesaplanır?**<br>(Satış Fiyatı - Alış Fiyatı) / Alış Fiyatı formülüyle kar/zarar yüzdesi bulunur.<br>**Negatif sonuç ne anlama gelir?**<br>Yatırımın değer kaybettiğini ve zarar edildiğini gösterir.",
        faq_json: [
          {
            "question": "Hisse yüzde artışı nasıl hesaplanır",
            "answer": "(Satış Fiyatı - Alış Fiyatı) / Alış Fiyatı formülüyle kar/zarar yüzdesi bulunur."
          },
          {
            "question": "Negatif sonuç ne anlama gelir",
            "answer": "Yatırımın değer kaybettiğini ve zarar edildiğini gösterir."
          }
        ]
      },
      {
        name: "Döviz Çevirici",
        slug: "doviz-cevirici",
        type: "hesaplama",
        description: "USD/EUR/GBP ↔ TL para dönüşümü yapar.",
        calisma_mantigi: "kur × miktar.",
        faq_summary: "Dolar kaç TL?",
        longtails: "dolar tl hesaplama, döviz hesaplama",
        long_description: "Farklı para birimleri arasındaki dönüşümleri güncel kurları girerek yapın. Döviz Çevirici, USD, EUR, GBP gibi birimlerin TL karşılığını veya çapraz kurlarını, sizin belirlediğiniz veya o anki piyasa değerleri üzerinden hesaplar.",
        faq_content: "**Döviz kuru hesaplaması nasıl yapılır?**<br>Elimizdeki Tutar * Döviz Kuru işlemiyle TL karşılığı bulunur.<br>**TL'den dövize nasıl çevrilir?**<br>TL Tutarı / Döviz Kuru işlemiyle ne kadar döviz alınabileceği hesaplanır.<br>**Döviz kurları anlık mı?**<br>Bu araçta kurları manuel girebilir veya referans değerleri kullanabilirsiniz.",
        faq_json: [
          {
            "question": "Döviz kuru hesaplaması nasıl yapılır",
            "answer": "Elimizdeki Tutar * Döviz Kuru işlemiyle TL karşılığı bulunur."
          },
          {
            "question": "TL'den dövize nasıl çevrilir",
            "answer": "TL Tutarı / Döviz Kuru işlemiyle ne kadar döviz alınabileceği hesaplanır."
          },
          {
            "question": "Döviz kurları anlık mı",
            "answer": "Bu araçta kurları manuel girebilir veya referans değerleri kullanabilirsiniz."
          }
        ]
      },
      {
        name: "Altın Hesaplama",
        slug: "altin-hesaplama",
        type: "hesaplama",
        description: "Yastık altı birikimlerinizin veya takılarınızın değerini öğrenin.",
        calisma_mantigi: "gram × birim fiyat.",
        faq_summary: "Altın fiyatı nasıl hesaplanır?",
        longtails: "altın hesaplama, gram altın",
        long_description: "Altın Hesaplama aracı; gram, çeyrek, yarım, tam ve cumhuriyet altını gibi türlerin anlık piyasa fiyatı veya sizin girdiğiniz kur üzerinden toplam TL değerini hesaplar.",
        faq_content: "**Çeyrek altın kaç gramdır?**<br>Çeyrek altın 1.75 gram, saf altın içeriği (22 ayar) ise 1.6065 gramdır.<br>**Altın fiyatı nasıl hesaplanır?**<br>Altının gram fiyatı ile sahip olduğunuz ağırlık veya adet çarpılır.<br>**Alış ve satış fiyatı neden farklı?**<br>Kuyumcular ve bankalar işlem maliyeti ve kar marjı (makas) uyguladığı için satış fiyatı alıştan yüksektir.",
        faq_json: [
          {
            "question": "Çeyrek altın kaç gramdır",
            "answer": "Çeyrek altın 1.75 gram, saf altın içeriği (22 ayar) ise 1.6065 gramdır."
          },
          {
            "question": "Altın fiyatı nasıl hesaplanır",
            "answer": "Altının gram fiyatı ile sahip olduğunuz ağırlık veya adet çarpılır."
          },
          {
            "question": "Alış ve satış fiyatı neden farklı",
            "answer": "Kuyumcular ve bankalar işlem maliyeti ve kar marjı (makas) uyguladığı için satış fiyatı alıştan yüksektir."
          }
        ]
      },
      {
        name: "Gram Altın Hesaplama",
        slug: "gram-altin-hesaplama",
        type: "hesaplama",
        description: "Gram altın fiyatı ile toplam altın tutarını hesaplar.",
        calisma_mantigi: "gram × birim fiyat.",
        faq_summary: "Gram altın kaç TL?",
        longtails: "altın hesaplama",
        long_description: "Gram altın birikimlerinizin anlık değerini hesaplayın. 24 ayar veya 22 ayar gram altın fiyatlarıyla portföyünüzü takip edin.",
        faq_content: "**Gram altın kaç ayardır?**<br>Genellikle 24 ayar (995 milyem) veya 22 ayar olarak satılır.",
        faq_json: [
          {
            "question": "Gram altın kaç ayardır",
            "answer": "Genellikle 24 ayar (995 milyem) veya 22 ayar olarak satılır."
          }
        ]
      },
      {
        name: "Çeyrek Altın Hesaplama",
        slug: "ceyrek-altin-hesaplama",
        type: "hesaplama",
        description: "Çeyrek altının güncel fiyatını hesaplar.",
        calisma_mantigi: "çeyrek = gram × katsayı.",
        faq_summary: "Çeyrek altın kaç TL?",
        longtails: "çeyrek altın hesaplama",
        long_description: "Düğünlerin vazgeçilmezi çeyrek altının güncel alış ve satış fiyatlarını hesaplayın. Eski tarihli ve yeni tarihli çeyrek altın farklarını dikkate alın.",
        faq_content: "**Yeni tarihli ile eski tarihli farkı nedir?**<br>Basım yılı içinde bulunulan yıl ise yeni, önceki yıllar ise eski tarihlidir; fiyatı çok az farklı olabilir.",
        faq_json: [
          {
            "question": "Yeni tarihli ile eski tarihli farkı nedir",
            "answer": "Basım yılı içinde bulunulan yıl ise yeni, önceki yıllar ise eski tarihlidir; fiyatı çok az farklı olabilir."
          }
        ]
      },
      {
        name: "Bilezik Gram Hesaplama",
        slug: "bilezik-gram-hesaplama",
        type: "hesaplama",
        description: "22 ayar bilezik fiyatını hesaplar.",
        calisma_mantigi: "gram × 22 ayar altın fiyatı.",
        faq_summary: "Bilezik fiyatı ne kadar?",
        longtails: "bilezik hesaplama",
        long_description: "Sahip olduğunuz bileziklerin gramajını ve ayarını girerek bozdurma fiyatını yaklaşık olarak öğrenin.",
        faq_content: "**Bilezik bozdururken zarar edilir mi?**<br>İşçilik maliyeti düştüğü için alırken ödenen fiyattan daha düşüğe bozdurulur.",
        faq_json: [
          {
            "question": "Bilezik bozdururken zarar edilir mi",
            "answer": "İşçilik maliyeti düştüğü için alırken ödenen fiyattan daha düşüğe bozdurulur."
          }
        ]
      },
      {
        name: "BES Getiri Hesaplama",
        slug: "bes-getiri-hesaplama",
        type: "hesaplama",
        description: "Bireysel emeklilik fonlarının yıllık getirisini hesaplar.",
        calisma_mantigi: "birikim = ödeme + fon getirisi.",
        faq_summary: "BES birikimim ne olur?",
        longtails: "bes hesaplama",
        long_description: "Bireysel Emeklilik Sistemi (BES) yatırımlarınızın gelecekteki değerini ve devlet katkısı getirisini simüle edin.",
        faq_content: "**Devlet katkısı ne kadar?**<br>Yatırdığınız katkı payının %30'u kadar devlet katkısı hesabınıza eklenir.",
        faq_json: [
          {
            "question": "Devlet katkısı ne kadar",
            "answer": "Yatırdığınız katkı payının %30'u kadar devlet katkısı hesabınıza eklenir."
          }
        ]
      },
      {
        name: "Dövizli Ürün Fiyatı Hesaplama",
        slug: "dovizli-urun-fiyati-hesaplama",
        type: "hesaplama",
        description: "Döviz kuruna göre ürün fiyatını TL’ye çevirir.",
        calisma_mantigi: "fiyat × kur.",
        faq_summary: "Dövizli ürün kaç TL?",
        longtails: "dolar tl ürün hesaplama",
        long_description: "Yurtdışından alacağınız veya döviz endeksli satılan ürünlerin TL karşılığını anlık kur veya kendi belirlediğiniz kur üzerinden hesaplayın.",
        faq_content: "**Kur farkı nasıl etkiler?**<br>Döviz kuru arttıkça ürünün TL maliyeti de artar.",
        faq_json: [
          {
            "question": "Kur farkı nasıl etkiler",
            "answer": "Döviz kuru arttıkça ürünün TL maliyeti de artar."
          }
        ]
      },
      {
        name: "Kur Farkı Hesaplama",
        slug: "kur-farki-hesaplama",
        type: "hesaplama",
        description: "İki farklı döviz kuru arasındaki farkı hesaplar.",
        calisma_mantigi: "(kur1 - kur2) × tutar.",
        faq_summary: "Kur farkı ne kadar?",
        longtails: "kur farkı hesaplama",
        long_description: "Fatura tarihi ile ödeme tarihi arasındaki kur değişiminden kaynaklanan kur farkı tutarını hesaplayın. Muhasebe kayıtları için gereklidir.",
        faq_content: "**Kur farkı faturası ne zaman kesilir?**<br>Dövizli işlemlerde tahsilat/ödeme yapıldığında kur değişimi varsa aradaki fark için kesilir.",
        faq_json: [
          {
            "question": "Kur farkı faturası ne zaman kesilir",
            "answer": "Dövizli işlemlerde tahsilat/ödeme yapıldığında kur değişimi varsa aradaki fark için kesilir."
          }
        ]
      },
      {
        name: "Enflasyon Hesaplama",
        slug: "enflasyon-hesaplama",
        type: "hesaplama",
        description: "Belirli dönemdeki fiyat değişimine göre enflasyon hesaplar.",
        calisma_mantigi: "((yeni–eski)/eski) × 100.",
        faq_summary: "Bu yıl enflasyon yüzde kaç?",
        longtails: "enflasyon oranı hesaplama",
        long_description: "İki dönem arasındaki fiyat endeksi (TÜFE) farkına göre enflasyon oranını hesaplayın. Paranızın erime oranını görün.",
        faq_content: "**Enflasyon sepeti nedir?**<br>TÜİK'in fiyat artışlarını ölçmek için belirlediği mal ve hizmetler listesidir.",
        faq_json: [
          {
            "question": "Enflasyon sepeti nedir",
            "answer": "TÜİK'in fiyat artışlarını ölçmek için belirlediği mal ve hizmetler listesidir."
          }
        ]
      },
      {
        name: "Amazon FBA Kar Hesaplama",
        slug: "amazon-fba-kar-hesaplama",
        type: "hesaplama",
        description: "Amazon FBA satış karını hesaplar.",
        calisma_mantigi: "komisyon + kargo + üretim maliyeti.",
        faq_summary: "FBA'da ne kadar kazanırım?",
        longtails: "amazon kar hesaplama",
        long_description: "Amazon'da satış yaparken FBA ücretleri, komisyonlar, kargo ve ürün maliyetini düşerek net karınızı hesaplayın.",
        faq_content: "**FBA ücreti nedir?**<br>Amazon'un depolama ve kargolama hizmeti için aldığı ücretlerdir.",
        faq_json: [
          {
            "question": "FBA ücreti nedir",
            "answer": "Amazon'un depolama ve kargolama hizmeti için aldığı ücretlerdir."
          }
        ]
      },
      {
        name: "Etsy Kar Hesaplama",
        slug: "etsy-kar-hesaplama",
        type: "hesaplama",
        description: "Etsy satışlarında net kar hesaplar.",
        calisma_mantigi: "komisyon + işlem ücreti + kargo.",
        faq_summary: "Etsy'de kaç TL kazanılır?",
        longtails: "etsy fee calculator",
        long_description: "Etsy dükkanınızda satış yaparken listeleme ücreti, işlem ücreti ve ödeme altyapısı kesintilerini düşerek cebinize kalacak tutarı görün.",
        faq_content: "**Etsy komisyonu ne kadar?**<br>Satış fiyatı üzerinden işlem ücreti ve ödeme işlem ücreti alınır.",
        faq_json: [
          {
            "question": "Etsy komisyonu ne kadar",
            "answer": "Satış fiyatı üzerinden işlem ücreti ve ödeme işlem ücreti alınır."
          }
        ]
      },
      {
        name: "Trendyol Komisyon Hesaplama",
        slug: "trendyol-komisyon-hesaplama",
        type: "hesaplama",
        description: "Trendyol satışındaki komisyonu ve net geliri hesaplar.",
        calisma_mantigi: "kategori × oran.",
        faq_summary: "Trendyol komisyonu kaç?",
        longtails: "trendyol kazanç hesaplama",
        long_description: "Trendyol pazaryerinde satacağınız ürünün kategorisine göre komisyon oranını, kargo ücretini ve hizmet bedelini düşerek net hakedişinizi hesaplayın.",
        faq_content: "**Kategoriye göre komisyon değişir mi?**<br>Evet, elektronikten giyime her kategorinin farklı komisyon oranı vardır.",
        faq_json: [
          {
            "question": "Kategoriye göre komisyon değişir mi",
            "answer": "Evet, elektronikten giyime her kategorinin farklı komisyon oranı vardır."
          }
        ]
      },
      {
        name: "POS Komisyonu Hesaplama",
        slug: "pos-komisyonu-hesaplama",
        type: "hesaplama",
        description: "Bankaların POS komisyon oranlarına göre net ödeme hesaplar.",
        calisma_mantigi: "tutar – komisyon.",
        faq_summary: "POS kesintisi kaç TL olur?",
        longtails: "pos hesaplama",
        long_description: "İşletmeniz için POS cihazı kullanıyorsanız, banka komisyon oranları düştükten sonra hesabınıza geçecek net tutarı hesaplayın.",
        faq_content: "**Komisyon oranı neye göre değişir?**<br>Bankanın anlaşmasına ve paranın hesaba geçme süresine (ertesi gün, 30 gün vb.) göre değişir.",
        faq_json: [
          {
            "question": "Komisyon oranı neye göre değişir",
            "answer": "Bankanın anlaşmasına ve paranın hesaba geçme süresine (ertesi gün, 30 gün vb.) göre değişir."
          }
        ]
      },
      {
        name: "Kira Getirisi Hesaplama",
        slug: "kira-getirisi-hesaplama",
        type: "hesaplama",
        description: "Gayrimenkul yatırımınızın ne kadar sürede kendini amorti edeceğini hesaplayın.",
        calisma_mantigi: "(Aylık Kira * 12) / Evin Satış Değeri.",
        faq_summary: "Kira getirisi nasıl hesaplanır?",
        longtails: "kira getirisi hesaplama",
        long_description: "Kira Getirisi Hesaplama aracı, mülkün değeri ve aylık kira geliri üzerinden yıllık getiri oranını ve amortisman süresini (yıl bazlı) ortaya çıkarır. Yatırım kararı vermeden önce evin finansal performansını analiz etmenizi sağlar.",
        faq_content: "**Kira getirisi nasıl hesaplanır?**<br>(Aylık Kira * 12) / Evin Satış Değeri formülüyle yıllık oran bulunur.<br>**Amortisman süresi nedir?**<br>Yatırımın kira gelirleriyle kendi maliyetini kaç yılda karşıladığıdır.<br>**Kira geliri vergisi var mı?**<br>Evet, elde edilen kira geliri istisna tutarını aşıyorsa beyan edilip vergisi ödenir.",
        faq_json: [
          {
            "question": "Kira getirisi nasıl hesaplanır",
            "answer": "(Aylık Kira * 12) / Evin Satış Değeri formülüyle yıllık oran bulunur."
          },
          {
            "question": "Amortisman süresi nedir",
            "answer": "Yatırımın kira gelirleriyle kendi maliyetini kaç yılda karşıladığıdır."
          },
          {
            "question": "Kira geliri vergisi var mı",
            "answer": "Evet, elde edilen kira geliri istisna tutarını aşıyorsa beyan edilip vergisi ödenir."
          }
        ]
      },
      {
        name: "Amortisman Hesaplama",
        slug: "amortisman-hesaplama",
        type: "hesaplama",
        description: "Şirket varlıklarınızın değer kaybını gider olarak kaydedin.",
        calisma_mantigi: "Maliyet / Ömür.",
        faq_summary: "Amortisman nedir?",
        longtails: "amortisman oranı hesaplama",
        long_description: "Amortisman Hesaplama aracı, demirbaşın maliyeti ve ekonomik ömrüne göre yıllık ayrılması gereken amortisman tutarını normal veya azalan bakiyeler yöntemiyle hesaplar.",
        faq_content: "**Amortisman nedir?**<br>İşletmede kullanılan varlıkların zamanla yıpranması sonucu oluşan değer kaybının gider yazılmasıdır.<br>**Azalan bakiyeler yöntemi nedir?**<br>İlk yıllarda daha yüksek, sonraki yıllarda azalan oranlarda amortisman ayrılmasını sağlayan yöntemdir.",
        faq_json: [
          {
            "question": "Amortisman nedir",
            "answer": "İşletmede kullanılan varlıkların zamanla yıpranması sonucu oluşan değer kaybının gider yazılmasıdır."
          },
          {
            "question": "Azalan bakiyeler yöntemi nedir",
            "answer": "İlk yıllarda daha yüksek, sonraki yıllarda azalan oranlarda amortisman ayrılmasını sağlayan yöntemdir."
          }
        ]
      },
];