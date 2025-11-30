import { ToolData } from '../../types';

export const vergiTools: ToolData[] = [
    {
        name: "Gelir Vergisi Hesaplama",
        slug: "gelir-vergisi-hesaplama",
        type: "hesaplama",
        description: "Yıllık kazancınız üzerinden devlete ödemeniz gereken vergiyi hesaplayın.",
        calisma_mantigi: "Artan oranlı vergi tarifesi.",
        faq_summary: "Ne kadar gelir vergisi öderim?",
        longtails: "gelir vergisi hesaplama",
        long_description: "Gelir Vergisi Hesaplama aracı, güncel vergi dilimlerini dikkate alarak ücretli çalışanlar, serbest meslek erbabı veya kira geliri elde edenler için vergi yükümlülüğünü belirler.",
        faq_content: "**Gelir vergisi nasıl hesaplanır?**<br>Kümülatif vergi matrahının girdiği dilimlere karşılık gelen oranlarla hesaplanır.<br>**Vergi dilimleri ne zaman değişir?**<br>Her yıl devlet tarafından yeniden değerleme oranına göre güncellenir.<br>**Stopaj nedir?**<br>Gelir sahibine ödeme yapılmadan önce kaynağında kesilen vergidir.",
        faq_json: [
          {
            "question": "Gelir vergisi nasıl hesaplanır",
            "answer": "Kümülatif vergi matrahının girdiği dilimlere karşılık gelen oranlarla hesaplanır."
          },
          {
            "question": "Vergi dilimleri ne zaman değişir",
            "answer": "Her yıl devlet tarafından yeniden değerleme oranına göre güncellenir."
          },
          {
            "question": "Stopaj nedir",
            "answer": "Gelir sahibine ödeme yapılmadan önce kaynağında kesilen vergidir."
          }
        ]
      },
      {
        name: "Damga Vergisi Hesaplama",
        slug: "damga-vergisi-hesaplama",
        type: "hesaplama",
        description: "Sözleşmelerde uygulanan damga vergisini hesaplar.",
        calisma_mantigi: "Binde oran ile hesaplanır.",
        faq_summary: "Damga vergisi nasıl bulunur?",
        longtails: "kira damga vergisi hesaplama",
        long_description: "Kira sözleşmeleri, ihale kararları veya maaş ödemeleri gibi kağıtlar üzerinden alınan damga vergisini hesaplayın.",
        faq_content: "**Damga vergisini kim öder?**<br>Genellikle sözleşmenin tarafları müteselsilen sorumludur, uygulamada kiracı veya ihaleyi alan öder.",
        faq_json: [
          {
            "question": "Damga vergisini kim öder",
            "answer": "Genellikle sözleşmenin tarafları müteselsilen sorumludur, uygulamada kiracı veya ihaleyi alan öder."
          }
        ]
      },
      {
        name: "İhale Damga Vergisi Hesaplama",
        slug: "ihale-damga-vergisi-hesaplama",
        type: "hesaplama",
        description: "Kamu ihaleleri ve sözleşmelerde ödenmesi gereken damga vergisini belirleyin.",
        calisma_mantigi: "Bedel * Oran.",
        faq_summary: "Damga vergisi nasıl hesaplanır?",
        longtails: "ihale vergisi hesaplama",
        long_description: "İhale Damga Vergisi Hesaplama aracı, sözleşme bedeli ve geçerli vergi oranını çarparak (Bedel*Oran) yasal kesinti tutarını hesaplar.",
        faq_content: "**Verginin bir üst sınırı var mı?**<br>Evet, her yıl belirlenen bir damga vergisi tavan tutarı vardır.",
        faq_json: [
          {
            "question": "Verginin bir üst sınırı var mı",
            "answer": "Evet, her yıl belirlenen bir damga vergisi tavan tutarı vardır."
          }
        ]
      },
      {
        name: "Kira Stopaj Hesaplama",
        slug: "kira-stopaj-hesaplama",
        type: "hesaplama",
        description: "İşyeri kiralarında stopaj ve net kira tutarını hesaplar.",
        calisma_mantigi: "Brüt × stopaj oranı = stopaj.",
        faq_summary: "Stopajı kim öder?",
        longtails: "kira stopaj hesaplama",
        long_description: "İşyeri kiralamalarında brüt kira üzerinden devlete ödenmesi gereken %20 stopaj vergisini hesaplayın. Netten brüte veya brütten nete hesaplama seçenekleriyle kira sözleşmenizi doğru düzenleyin.",
        faq_content: "**Stopaj oranı kaçtır?**<br>Mevcut yasalarda %20 olarak uygulanır.",
        faq_json: [
          {
            "question": "Stopaj oranı kaçtır",
            "answer": "Mevcut yasalarda %20 olarak uygulanır."
          }
        ]
      },
      {
        name: "Kira Gelir Vergisi Hesaplama",
        slug: "kira-gelir-vergisi-hesaplama",
        type: "hesaplama",
        description: "Kira gelirlerinden ödenmesi gereken vergiyi hesaplar.",
        calisma_mantigi: "İstisna + gider + matrah formülü.",
        faq_summary: "Kira geliri ne kadar vergilendirilir?",
        longtails: "kira vergisi hesaplama",
        long_description: "Konut veya işyerinizden elde ettiğiniz yıllık kira geliri için ödemeniz gereken gelir vergisini (GMSİ) hesaplayın. Yıllık istisna tutarını otomatik düşer.",
        faq_content: "**İstisna tutarı nedir?**<br>Konut kira gelirlerinde her yıl belirlenen bir tutar vergiden muaftır.",
        faq_json: [
          {
            "question": "İstisna tutarı nedir",
            "answer": "Konut kira gelirlerinde her yıl belirlenen bir tutar vergiden muaftır."
          }
        ]
      },
      {
        name: "Emlak Vergisi Hesaplama",
        slug: "emlak-vergisi-hesaplama",
        type: "hesaplama",
        description: "Yıllık emlak vergisini hesaplar.",
        calisma_mantigi: "Birim değer × oran × metrekare.",
        faq_summary: "Emlak vergisi kaç TL?",
        longtails: "emlak vergi hesaplama",
        long_description: "Gayrimenkulünüz için ödemeniz gereken yıllık vergiyi öğrenin. Emlak Vergisi Hesaplama aracı; taşınmazın türü ve belediye sınırlarına göre vergi tutarını hesaplar.",
        faq_content: "**Büyükşehirlerde vergi farklı mı?**<br>Evet, büyükşehir belediye sınırları içindeki emlak vergisi oranları iki katı olarak uygulanır.",
        faq_json: [
          {
            "question": "Büyükşehirlerde vergi farklı mı",
            "answer": "Evet, büyükşehir belediye sınırları içindeki emlak vergisi oranları iki katı olarak uygulanır."
          }
        ]
      },
      {
        name: "Tapu Harcı Hesaplama",
        slug: "tapu-harc-hesaplama",
        type: "hesaplama",
        description: "Gayrimenkul alım satımlarında karşılaşacağınız masrafları önceden bilin.",
        calisma_mantigi: "Satış bedelinin toplam %4'ü.",
        faq_summary: "Tapu masrafı ne kadar?",
        longtails: "tapu harcı hesaplama",
        long_description: "Tapu Harcı Hesaplama aracı, satış bedeli üzerinden alıcı ve satıcı için ayrı ayrı (%2 + %2) veya toplam (%4) tapu harcı tutarını ve döner sermaye bedelini hesaplar.",
        faq_content: "**Tapu harcı ne kadardır?**<br>Satış bedelinin toplam %4'ü oranındadır (Genellikle %2 alıcı, %2 satıcı öder).",
        faq_json: [
          {
            "question": "Tapu harcı ne kadardır",
            "answer": "Satış bedelinin toplam %4'ü oranındadır (Genellikle %2 alıcı, %2 satıcı öder)."
          }
        ]
      },
      {
        name: "Vergi Borcu Gecikme Faizi Hesaplama",
        slug: "vergi-gecikme-faizi-hesaplama",
        type: "hesaplama",
        description: "Ödenmemiş vergi borcuna uygulanan gecikme faizini hesaplar.",
        calisma_mantigi: "Gecikme oranı × gün formülü.",
        faq_summary: "Geç ödersem faiz ne olur?",
        longtails: "vergi borcu faiz hesaplama",
        long_description: "Zamanında ödenmeyen vergi, harç veya trafik cezaları için işleyen yasal gecikme faizini hesaplayın.",
        faq_content: "**Gecikme zammı oranı nedir?**<br>Cumhurbaşkanı kararı ile belirlenen aylık orandır.",
        faq_json: [
          {
            "question": "Gecikme zammı oranı nedir",
            "answer": "Cumhurbaşkanı kararı ile belirlenen aylık orandır."
          }
        ]
      },
      {
        name: "Gümrük Vergisi Hesaplama",
        slug: "gumruk-vergisi-hesaplama",
        type: "hesaplama",
        description: "Yurtdışı ürünlerde gümrük vergisi hesaplar.",
        calisma_mantigi: "ürün fiyatı × %20 + ek masraflar.",
        faq_summary: "Gümrük vergisi kaç TL olur?",
        longtails: "yurtdışı ürün vergisi hesaplama",
        long_description: "Yurtdışından sipariş ettiğiniz ürünler için ödemeniz gereken gümrük vergisini hesaplayın. AB ülkelerinden veya diğer ülkelerden gelen ürünlere göre değişen oranları dikkate alın.",
        faq_content: "**Gümrük muafiyeti var mı?**<br>Düşük kıymetli gönderiler için muafiyetler büyük ölçüde kaldırılmıştır.",
        faq_json: [
          {
            "question": "Gümrük muafiyeti var mı",
            "answer": "Düşük kıymetli gönderiler için muafiyetler büyük ölçüde kaldırılmıştır."
          }
        ]
      },
      {
        name: "Vize Harcı Hesaplama",
        slug: "vize-harci-hesaplama",
        type: "hesaplama",
        description: "Pasaport türü ve süreye göre vize harcı hesaplar.",
        calisma_mantigi: "resmi tarife uygulanır.",
        faq_summary: "Vize harcı kaç TL?",
        longtails: "vize ücret hesaplama",
        long_description: "Gideceğiniz ülke ve vize türüne göre ödemeniz gereken konsolosluk harcını ve aracı kurum hizmet bedellerini öğrenin.",
        faq_content: "**Vize reddedilirse harç iade edilir mi?**<br>Hayır, vize başvuru ücretleri işlem karşılığı alındığı için genellikle iade edilmez.",
        faq_json: [
          {
            "question": "Vize reddedilirse harç iade edilir mi",
            "answer": "Hayır, vize başvuru ücretleri işlem karşılığı alındığı için genellikle iade edilmez."
          }
        ]
      },
      {
        name: "Pasaport Harcı Hesaplama",
        slug: "pasaport-harci-hesaplama",
        type: "hesaplama",
        description: "Pasaport süre ve defter ücretini hesaplar.",
        calisma_mantigi: "harç + defter bedeli.",
        faq_summary: "Pasaport ne kadar?",
        longtails: "pasaport hesaplama",
        long_description: "6 ay, 1 yıl, 3 yıl veya 10 yıllık pasaport almak için ödemeniz gereken harç ve defter bedeli toplamını 2025 tarifesine göre hesaplayın.",
        faq_content: "**Öğrenciler harç öder mi?**<br>25 yaş altı öğrenciler pasaport harcından muaftır, sadece defter bedeli öderler.",
        faq_json: [
          {
            "question": "Öğrenciler harç öder mi",
            "answer": "25 yaş altı öğrenciler pasaport harcından muaftır, sadece defter bedeli öderler."
          }
        ]
      },
      {
        name: "Medeni Durum Vergi Hesaplama",
        slug: "medeni-durum-vergi-hesaplama",
        type: "hesaplama",
        description: "Medeni duruma göre ek vergi avantajlarını hesaplar.",
        calisma_mantigi: "çocuk sayısı + eş durumu.",
        faq_summary: "Medeni durum vergiye nasıl yansır?",
        longtails: "vergi avantaj hesaplama",
        long_description: "Evli ve çocuklu olmanın maaş bordronuza veya vergi indiriminize (eski AGİ mantığı veya yeni istisnalar) etkisini görün.",
        faq_content: "**Eş çalışıyorsa indirim değişir mi?**<br>Evet, eşin çalışıp çalışmaması vergi avantajı hesabını değiştirir.",
        faq_json: [
          {
            "question": "Eş çalışıyorsa indirim değişir mi",
            "answer": "Evet, eşin çalışıp çalışmaması vergi avantajı hesabını değiştirir."
          }
        ]
      },
      {
        name: "Şirket Kuruluş Maliyeti Hesaplama",
        slug: "sirket-kurulus-maliyeti-hesaplama",
        type: "hesaplama",
        description: "LTD/ŞTİ kuruluş maliyetlerini hesaplar.",
        calisma_mantigi: "noter + ticaret odası + sermaye.",
        faq_summary: "Şirket açmak ne kadar?",
        longtails: "şirket kuruluş hesaplama",
        long_description: "Limited veya Anonim şirket kurarken karşılaşacağınız noter, ticaret odası, sermaye blokesi ve mali müşavir açılış masraflarını hesaplayın.",
        faq_content: "**Şahıs şirketi mi Limited mi?**<br>Şahıs şirketi kurulumu daha ucuz ve hızlıdır, Limited şirket daha prestijlidir ancak masraflı olabilir.",
        faq_json: [
          {
            "question": "Şahıs şirketi mi Limited mi",
            "answer": "Şahıs şirketi kurulumu daha ucuz ve hızlıdır, Limited şirket daha prestijlidir ancak masraflı olabilir."
          }
        ]
      },
      {
        name: "KDV Hesaplama",
        slug: "kdv-hesaplama",
        type: "hesaplama",
        description: "KDV dahil–hariç fiyat hesaplaması yapar.",
        calisma_mantigi: "KDV hariç = fiyat/(1+kdv). KDV dahil = fiyat*(1+kdv).",
        faq_summary: "KDV nasıl eklenir/çıkarılır?",
        longtails: "kdv dahil fiyat, kdv hariç hesaplama",
        long_description: "Fatura keserken veya alışveriş yaparken KDV dahil ve hariç tutarları saniyeler içinde ayrıştırın. KDV Hesaplama aracı, %1, %10, %20 gibi güncel vergi oranlarına göre ürünün ham fiyatını (matrah) veya vergili son fiyatını otomatik hesaplar.",
        faq_content: "**KDV dahil fiyat nasıl hesaplanır?**<br>Vergisiz fiyat * (1 + Vergi Oranı) formülüyle bulunur (Örn: Fiyat*1.20).<br>**KDV hariç fiyat nasıl bulunur?**<br>KDV dahil toplam tutar, (1 + Vergi Oranı)'na bölünerek hesaplanır.<br>**KDV indirimi hesaplanabilir mi?**<br>Evet, oran değişikliğinin fiyata etkisi görülebilir.",
        faq_json: [
          {
            "question": "KDV dahil fiyat nasıl hesaplanır",
            "answer": "Vergisiz fiyat * (1 + Vergi Oranı) formülüyle bulunur (Örn: Fiyat*1.20)."
          },
          {
            "question": "KDV hariç fiyat nasıl bulunur",
            "answer": "KDV dahil toplam tutar, (1 + Vergi Oranı)'na bölünerek hesaplanır."
          },
          {
            "question": "KDV indirimi hesaplanabilir mi",
            "answer": "Evet, oran değişikliğinin fiyata etkisi görülebilir."
          }
        ]
      },
];