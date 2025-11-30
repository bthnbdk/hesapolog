import { ToolData } from '../../types';

export const matematikTools: ToolData[] = [
    {
        name: "Yüzde Hesaplama",
        slug: "yuzde-hesaplama",
        type: "hesaplama",
        description: "Yüzde oranı, artış, azalış, fark ve yüzdelik değerleri hesaplar.",
        calisma_mantigi: "x’in %y’si = (x*y)/100 formülü.",
        faq_summary: "Yüzde artış nasıl hesaplanır?",
        longtails: "yüzde hesaplama aracı, yüzde kaç artar",
        long_description: "Matematiğin günlük hayatta en çok kullanılan işlemi olan yüzde hesaplamalarını pratikleştirin. Bir sayının yüzdesini bulma, iki değer arasındaki yüzdelik artış veya azalışı hesaplama ve indirim oranlarını belirleme işlemlerini tek tıkla yapın. (x*y)/100 formülüyle çalışan araç; finansal analizlerden okul ödevlerine kadar geniş bir kullanım alanı sunar.",
        faq_content: "**Yüzde nasıl hesaplanır?**<br>Sayı, istenen yüzde oranıyla çarpılıp 100'e bölünerek bulunur.<br>**Yüzde artış oranı nasıl bulunur?**<br>(Yeni Değer - Eski Değer) / Eski Değer formülüyle hesaplanır.<br>**Yüzde farkı nedir?**<br>İki sayı arasındaki değişimin oransal ifadesidir.",
        faq_json: [
          {
            "question": "Yüzde nasıl hesaplanır",
            "answer": "Sayı, istenen yüzde oranıyla çarpılıp 100'e bölünerek bulunur."
          },
          {
            "question": "Yüzde artış oranı nasıl bulunur",
            "answer": "(Yeni Değer - Eski Değer) / Eski Değer formülüyle hesaplanır."
          },
          {
            "question": "Yüzde farkı nedir",
            "answer": "İki sayı arasındaki değişimin oransal ifadesidir."
          }
        ]
      },
      {
        name: "Zam Hesaplama",
        slug: "zam-hesaplama",
        type: "hesaplama",
        description: "Maaş, kira, ücret gibi tüm zamlı fiyatları hesaplar.",
        calisma_mantigi: "yeni_fiyat = eski_fiyat*(1+oran).",
        faq_summary: "Zam nasıl yapılır?",
        longtails: "kira zam hesaplama, maaş zam hesaplama",
        long_description: "Maaşınıza, kiranıza veya sattığınız bir ürüne gelecek zammı net bir şekilde görün. Zam Hesaplama aracı, eski tutara belirlenen zam oranını uygulayarak yeni fiyatı belirler. TÜFE oranlarına göre kira artışı hesaplamak veya maaş artış oranınızı belirlemek için pratik bir çözümdür.",
        faq_content: "**Zamlı fiyat nasıl hesaplanır?**<br>Eski Fiyat * (1 + Zam Oranı) formülü kullanılır.<br>**Kira zammı neye göre yapılır?**<br>Genellikle açıklanan 12 aylık TÜFE ortalaması üst sınır kabul edilir.<br>**Maaş zammı oranı nasıl bulunur?**<br>(Yeni Maaş - Eski Maaş) / Eski Maaş işlemiyle yüzde artış bulunur.",
        faq_json: [
          {
            "question": "Zamlı fiyat nasıl hesaplanır",
            "answer": "Eski Fiyat * (1 + Zam Oranı) formülü kullanılır."
          },
          {
            "question": "Kira zammı neye göre yapılır",
            "answer": "Genellikle açıklanan 12 aylık TÜFE ortalaması üst sınır kabul edilir."
          },
          {
            "question": "Maaş zammı oranı nasıl bulunur",
            "answer": "(Yeni Maaş - Eski Maaş) / Eski Maaş işlemiyle yüzde artış bulunur."
          }
        ]
      },
      {
        name: "İndirim Hesaplama",
        slug: "indirim-hesaplama",
        type: "hesaplama",
        description: "Alışverişlerde ne kadar kar ettiğinizi net görün.",
        calisma_mantigi: "Fiyat * (1 - İndirim Oranı) işlemiyle yeni fiyat bulunur.",
        faq_summary: "İndirimli tutar nasıl hesaplanır?",
        longtails: "indirim hesaplama",
        long_description: "İndirim Hesaplama aracı, ürünün etiket fiyatı ve indirim oranıyla yeni fiyatı ve cebinizde kalan tutarı hesaplar.",
        faq_content: "**İndirimli tutar nasıl hesaplanır?**<br>Fiyat * (1 - İndirim Oranı) işlemiyle yeni fiyat bulunur.<br>**İndirim oranı nasıl bulunur?**<br>(Eski Fiyat - Yeni Fiyat) / Eski Fiyat işlemiyle yüzde kaç indirim yapıldığı bulunur.",
        faq_json: [
          {
            "question": "İndirimli tutar nasıl hesaplanır",
            "answer": "Fiyat * (1 - İndirim Oranı) işlemiyle yeni fiyat bulunur."
          },
          {
            "question": "İndirim oranı nasıl bulunur",
            "answer": "(Eski Fiyat - Yeni Fiyat) / Eski Fiyat işlemiyle yüzde kaç indirim yapıldığı bulunur."
          }
        ]
      },
      {
        name: "İndirimsiz Fiyat Hesaplama",
        slug: "indirimsiz-fiyat-hesaplama",
        type: "hesaplama",
        description: "İndirimli gördüğünüz bir ürünün gerçek (eski) fiyatını öğrenin.",
        calisma_mantigi: "İndirimli Fiyat / (1 - İndirim Oranı) formülüyle hesaplanır.",
        faq_summary: "İndirimden önceki fiyat nasıl bulunur?",
        longtails: "indirimsiz fiyat hesaplama",
        long_description: "İndirimsiz Fiyat Hesaplama aracı, ödediğiniz tutarı ve indirim oranını kullanarak ürünün indirime girmeden önceki etiket fiyatını geri hesaplar.",
        faq_content: "**İndirimden önceki fiyat nasıl bulunur?**<br>İndirimli Fiyat / (1 - İndirim Oranı) formülüyle hesaplanır.<br>**%50 indirimde eski fiyat nedir?**<br>Ödenen tutarın tam 2 katıdır.",
        faq_json: [
          {
            "question": "İndirimden önceki fiyat nasıl bulunur",
            "answer": "İndirimli Fiyat / (1 - İndirim Oranı) formülüyle hesaplanır."
          },
          {
            "question": "%50 indirimde eski fiyat nedir",
            "answer": "Ödenen tutarın tam 2 katıdır."
          }
        ]
      },
      {
        name: "Kar Marjı Hesaplama",
        slug: "kar-marji-hesaplama",
        type: "hesaplama",
        description: "Ticarette karlılığınızı doğru ölçün.",
        calisma_mantigi: "(Satış Fiyatı - Maliyet) / Satış Fiyatı formülüyle hesaplanır.",
        faq_summary: "Kar marjı formülü nedir?",
        longtails: "kar marjı hesaplama",
        long_description: "Kar Marjı Hesaplama aracı, ürün maliyeti ve satış fiyatı üzerinden hem kar marjını (%) hem de kar oranını (markup) hesaplayarak fiyatlandırma stratejilerinize yön verir.",
        faq_content: "**Kar marjı formülü nedir?**<br>(Satış Fiyatı - Maliyet) / Satış Fiyatı formülüyle hesaplanır ve cironun ne kadarının kar olduğunu gösterir.<br>**Kar oranı (Markup) ile farkı nedir?**<br>Markup maliyet üzerinden, kar marjı satış fiyatı üzerinden hesaplanır.",
        faq_json: [
          {
            "question": "Kar marjı formülü nedir",
            "answer": "(Satış Fiyatı - Maliyet) / Satış Fiyatı formülüyle hesaplanır ve cironun ne kadarının kar olduğunu gösterir."
          },
          {
            "question": "Kar oranı (Markup) ile farkı nedir",
            "answer": "Markup maliyet üzerinden, kar marjı satış fiyatı üzerinden hesaplanır."
          }
        ]
      },
      {
        name: "Kar Tutarı Hesaplama",
        slug: "kar-tutar-hesaplama",
        type: "hesaplama",
        description: "Satışlarınızdan elde ettiğiniz net kazancı TL bazında görün.",
        calisma_mantigi: "Satış Fiyatı - Toplam Maliyet işlemiyle bulunur.",
        faq_summary: "Kar tutarı nasıl hesaplanır?",
        longtails: "kar tutarı hesaplama",
        long_description: "Kar Tutarı Hesaplama aracı, satış fiyatından maliyeti çıkararak işlem başına düşen net karınızı belirler.",
        faq_content: "**Kar tutarı nasıl hesaplanır?**<br>Satış Fiyatı - Toplam Maliyet işlemiyle bulunur.<br>**Negatif sonuç ne anlama gelir?**<br>Satış fiyatının maliyetin altında kaldığını, yani zarar edildiğini gösterir.",
        faq_json: [
          {
            "question": "Kar tutarı nasıl hesaplanır",
            "answer": "Satış Fiyatı - Toplam Maliyet işlemiyle bulunur."
          },
          {
            "question": "Negatif sonuç ne anlama gelir",
            "answer": "Satış fiyatının maliyetin altında kaldığını, yani zarar edildiğini gösterir."
          }
        ]
      },
      {
        name: "Metrekare Hesaplama",
        slug: "metrekare-hesaplama",
        type: "hesaplama",
        description: "Alan ölçülerinden m² değerini hesaplar.",
        calisma_mantigi: "en * boy = metrekare.",
        faq_summary: "Metrekare nasıl hesaplanır?",
        longtails: "alan hesaplama, oda metrekaresi bulma",
        long_description: "Evinizin, ofisinizin veya arsanızın gerçek büyüklüğünü hatasız ölçün. Metrekare Hesaplama aracı, alanın en ve boy uzunluklarını çarparak (En*Boy) sonucu m² cinsinden verir. Boya badana işleri, halı seçimi veya emlak değerlemesi yaparken L tipi odalar veya parçalı alanlar için de pratik çözümler sunar.",
        faq_content: "**Metrekare (m²) nasıl hesaplanır?**<br>Dikdörtgen veya kare alanlarda En ve Boy uzunluğu çarpılarak bulunur.<br>**Balkon metrekareye dahil edilir mi?**<br>Net metrekare hesabında genellikle kullanım alanına dahil edilir, brüt hesapta ise ortaktır.<br>**L şeklinde oda nasıl ölçülür?**<br>Alan iki ayrı dikdörtgene bölünerek hesaplanıp toplanır.",
        faq_json: [
          {
            "question": "Metrekare (m²) nasıl hesaplanır",
            "answer": "Dikdörtgen veya kare alanlarda En ve Boy uzunluğu çarpılarak bulunur."
          },
          {
            "question": "Balkon metrekareye dahil edilir mi",
            "answer": "Net metrekare hesabında genellikle kullanım alanına dahil edilir, brüt hesapta ise ortaktır."
          },
          {
            "question": "L şeklinde oda nasıl ölçülür",
            "answer": "Alan iki ayrı dikdörtgene bölünerek hesaplanıp toplanır."
          }
        ]
      },
      {
        name: "Brüt Metrekare Hesaplama",
        slug: "brut-metrekare-hesaplama",
        type: "hesaplama",
        description: "Satın alacağınız evin 'brüt' alanının ne kadarının gerçekten kullanım alanı olduğunu anlayın.",
        calisma_mantigi: "Net Alan / (1 - Ortak Alan Oranı) formülüyle yaklaşık brüt değer hesaplanabilir.",
        faq_summary: "Brüt metrekare nedir?",
        longtails: "brüt metrekare hesaplama",
        long_description: "Brüt Metrekare Hesaplama aracı, net kullanım alanı ve ortak alan payı oranına göre toplam brüt m²'yi hesaplar.",
        faq_content: "**Brüt metrekare nedir?**<br>Evin net kullanım alanına; duvar payları, merdiven boşlukları ve ortak alanların eklenmiş halidir.<br>**Net metrekareden brüt nasıl bulunur?**<br>Net Alan / (1 - Ortak Alan Oranı) formülüyle yaklaşık brüt değer hesaplanabilir.",
        faq_json: [
          {
            "question": "Brüt metrekare nedir",
            "answer": "Evin net kullanım alanına; duvar payları, merdiven boşlukları ve ortak alanların eklenmiş halidir."
          },
          {
            "question": "Net metrekareden brüt nasıl bulunur",
            "answer": "Net Alan / (1 - Ortak Alan Oranı) formülüyle yaklaşık brüt değer hesaplanabilir."
          }
        ]
      },
      {
        name: "Alan Hesaplama",
        slug: "alan-hesaplama",
        type: "hesaplama",
        description: "Geometrik şekillerin yüzey alanını formüllerle boğuşmadan bulun.",
        calisma_mantigi: "Seçilen şekle göre (kare, daire, üçgen) formül değişir.",
        faq_summary: "Daire alanı nasıl hesaplanır?",
        longtails: "yüzey alanı hesaplama",
        long_description: "Alan Hesaplama aracı; daire, üçgen, kare, dikdörtgen ve trapez gibi şekillerin ölçülerini girerek alanlarını m² veya cm² cinsinden hesaplar.",
        faq_content: "**Daire alanı nasıl hesaplanır?**<br>Pi sayısı ile yarıçapın karesinin çarpımıyla (π*r²) bulunur.<br>**Üçgenin alanı nasıl bulunur?**<br>(Taban Uzunluğu * Yükseklik) / 2 formülüyle hesaplanır.",
        faq_json: [
          {
            "question": "Daire alanı nasıl hesaplanır",
            "answer": "Pi sayısı ile yarıçapın karesinin çarpımıyla (π*r²) bulunur."
          },
          {
            "question": "Üçgenin alanı nasıl bulunur",
            "answer": "(Taban Uzunluğu * Yükseklik) / 2 formülüyle hesaplanır."
          }
        ]
      },
      {
        name: "Hacim Hesaplama",
        slug: "hacim-hesaplama",
        type: "hesaplama",
        description: "Deponuzun, havuzunuzun veya bir kutunun ne kadar malzeme alacağını hesaplayın.",
        calisma_mantigi: "Taban alanı * Yükseklik.",
        faq_summary: "Hacim nasıl hesaplanır?",
        longtails: "küp hacim hesaplama",
        long_description: "Hacim Hesaplama aracı; küp, silindir, küre gibi cisimlerin iç kapasitesini (hacmini) m³ veya litre cinsinden verir.",
        faq_content: "**Hacim nasıl hesaplanır?**<br>Cismin taban alanı ile yüksekliğinin çarpımı (prizmalar için) genel mantıktır; küp için a³, silindir için π*r²*h kullanılır.<br>**Metreküp litreye nasıl çevrilir?**<br>1 metreküp (m³) tam olarak 1000 litreye eşittir.",
        faq_json: [
          {
            "question": "Hacim nasıl hesaplanır",
            "answer": "Cismin taban alanı ile yüksekliğinin çarpımı (prizmalar için) genel mantıktır; küp için a³, silindir için π*r²*h kullanılır."
          },
          {
            "question": "Metreküp litreye nasıl çevrilir",
            "answer": "1 metreküp (m³) tam olarak 1000 litreye eşittir."
          }
        ]
      },
      {
        name: "Desi Hesaplama",
        slug: "desi-hesaplama",
        type: "hesaplama",
        description: "Kargo hacim ağırlığını (desi) hesaplar.",
        calisma_mantigi: "Desi = (en * boy * yükseklik) / 3000.",
        faq_summary: "Desi nasıl bulunur?",
        longtails: "kargo desi hesaplama, desi ağırlık",
        long_description: "Kargo paketinizin hacimsel ağırlığını (desi) hesaplayarak sürpriz maliyetlerden kurtulun. Desi Hesaplama aracı, kutunun en, boy ve yükseklik ölçülerini kullanarak kargo firmalarının kullandığı değeri bulur.",
        faq_content: "**Desi formülü nedir?**<br>(En x Boy x Yükseklik) / 3000 formülüyle hesaplanır (ölçüler cm cinsinden).<br>**Hafif ama büyük kutuda ne ödenir?**<br>Ağırlığı az olsa bile desisi yüksekse, desi üzerinden yüksek ücret ödenir.",
        faq_json: [
          {
            "question": "Desi formülü nedir",
            "answer": "(En x Boy x Yükseklik) / 3000 formülüyle hesaplanır (ölçüler cm cinsinden)."
          },
          {
            "question": "Hafif ama büyük kutuda ne ödenir",
            "answer": "Ağırlığı az olsa bile desisi yüksekse, desi üzerinden yüksek ücret ödenir."
          }
        ]
      },
];