import { ToolData } from '../../types';

export const krediTools: ToolData[] = [
    {
        name: "Kredi Hesaplama",
        slug: "kredi-hesaplama",
        type: "hesaplama",
        description: "Kredi tutarı, faiz oranı ve vade süresine göre aylık taksit ve toplam ödeme hesaplama aracıdır.",
        calisma_mantigi: "Aylık taksit formülü A = P * (r(1+r)^n) / ((1+r)^n - 1). Toplam ödeme = A*n.",
        faq_summary: "Kredi taksiti nasıl hesaplanır?; Faiz değişince taksit ne olur?",
        longtails: "kredi hesaplama, kredı hesaplama, kredi hesapla, kredi taksit hesaplama, kredi aylık ödeme",
        long_description: "Kredi kullanmadan önce bütçenizi doğru planlamanız finansal sağlığınız için kritiktir. Kredi Hesaplama aracı, ihtiyaç, konut, taşıt veya bireysel finansman kredileri için aylık taksit tutarını, toplam geri ödeme miktarını ve toplam faiz yükünü anında hesaplar. Bankacılık standartlarında kullanılan anüite formülü (eşit taksitli ödeme) ile çalışan bu araç, vade süresi veya faiz oranı değiştiğinde ödeme planınızın nasıl şekilleneceğini net bir şekilde görmenizi sağlar.",
        faq_content: "**Bir kredinin aylık taksiti nasıl hesaplanır?**<br>Bankacılıkta standart olan anüite formülü kullanılır; bu formül anapara ve faizi vadeye eşit yayar.<br>**Vade uzadığında toplam ödeme neden artar?**<br>Aylık taksit düşse de, parayı kullandığınız süre arttığı için bankaya ödenen faiz süresi ve miktarı artar.<br>**Kredi dosya masrafları dahil mi?**<br>Standart hesaplamada hariçtir, ancak manuel olarak ekleyerek toplam maliyeti görebilirsiniz.",
        faq_json: [
          {
            "question": "Bir kredinin aylık taksiti nasıl hesaplanır",
            "answer": "Bankacılıkta standart olan anüite formülü kullanılır; bu formül anapara ve faizi vadeye eşit yayar."
          },
          {
            "question": "Vade uzadığında toplam ödeme neden artar",
            "answer": "Aylık taksit düşse de, parayı kullandığınız süre arttığı için bankaya ödenen faiz süresi ve miktarı artar."
          },
          {
            "question": "Kredi dosya masrafları dahil mi",
            "answer": "Standart hesaplamada hariçtir, ancak manuel olarak ekleyerek toplam maliyeti görebilirsiniz."
          }
        ]
      },
      {
        name: "Konut Kredisi Hesaplama",
        slug: "konut-kredisi-hesaplama",
        type: "hesaplama",
        description: "Konut kredisi aylık taksit ve toplam maliyet hesaplama aracıdır.",
        calisma_mantigi: "Mortgage formülü ile hesap yapılır.",
        faq_summary: "Konut kredisi nasıl hesaplanır?",
        longtails: "konut kredi faiz oranları, mortgage hesaplama",
        long_description: "Ev sahibi olma hayalinizi gerçekleştirirken bütçenizi doğru planlayın. Konut Kredisi Hesaplama aracı, güncel faiz oranları ve vade seçenekleriyle aylık ödemelerinizi simüle eder. Tapu masrafları ve ekspertiz ücreti gibi ek maliyetleri de göz önünde bulundurarak toplam geri ödeme tutarını netleştirir.",
        faq_content: "**Konut kredisi vadesi en çok kaç ay olur?**<br>Genellikle 120 ay yaygındır ancak 240 aya kadar vade sunulabilir.<br>**Peşinat ne kadar olmalı?**<br>Evin ekspertiz değerinin belirli bir oranına (genelde %80-%90) kadar kredi çıkar.",
        faq_json: [
          {
            "question": "Konut kredisi vadesi en çok kaç ay olur",
            "answer": "Genellikle 120 ay yaygındır ancak 240 aya kadar vade sunulabilir."
          },
          {
            "question": "Peşinat ne kadar olmalı",
            "answer": "Evin ekspertiz değerinin belirli bir oranına (genelde %80-%90) kadar kredi çıkar."
          }
        ]
      },
      {
        name: "İhtiyaç Kredisi Hesaplama",
        slug: "ihtiyac-kredisi-hesaplama",
        type: "hesaplama",
        description: "İhtiyaç kredisi için aylık ödeme tutarını hesaplar.",
        calisma_mantigi: "Standart kredi formülü uygulanır.",
        faq_summary: "İhtiyaç kredisi nasıl hesaplanır?",
        longtails: "ihtiyaç kredi hesaplama",
        long_description: "Acil nakit ihtiyaçlarınız veya planlı harcamalarınız için İhtiyaç Kredisi Hesaplama aracını kullanın. 36 aya varan vade seçenekleri ve değişen faiz oranlarıyla bütçenize en uygun ödeme planını oluşturun.",
        faq_content: "**İhtiyaç kredisi vadesi ne kadar?**<br>Yasal düzenlemelere göre genellikle en fazla 36 ay vade uygulanır.<br>**Dosya masrafı var mı?**<br>Bankalar kredi tutarının binde 5'i kadar dosya masrafı alabilir.",
        faq_json: [
          {
            "question": "İhtiyaç kredisi vadesi ne kadar",
            "answer": "Yasal düzenlemelere göre genellikle en fazla 36 ay vade uygulanır."
          },
          {
            "question": "Dosya masrafı var mı",
            "answer": "Bankalar kredi tutarının binde 5'i kadar dosya masrafı alabilir."
          }
        ]
      },
      {
        name: "Araç Kredisi Hesaplama",
        slug: "arac-kredisi-hesaplama",
        type: "hesaplama",
        description: "Araç kredisi taksitlerini ve masraflarını hesaplar.",
        calisma_mantigi: "ÖTV+KDV etkisi opsiyonel hesaplanır.",
        faq_summary: "Araç kredisi nasıl hesaplanır?",
        longtails: "taşıt kredisi hesaplama",
        long_description: "Hayalinizdeki araca kavuşmak için en uygun finansman planını oluşturun. Araç Kredisi Hesaplama aracı, sıfır veya ikinci el araçlar için kredi tutarı, vade ve faiz oranına göre aylık taksitleri hesaplar. Taşıt kredilerindeki vade sınırlarını ve peşinat gerekliliklerini dikkate alarak bütçenizi yönetmenizi sağlar.",
        faq_content: "**Araç kredisi taksiti nasıl hesaplanır?**<br>Kredi tutarı, faiz ve vade kullanılarak sabit taksitli anüite formülüyle hesaplanır.<br>**Kasko zorunlu mu?**<br>Bankalar kredili araç alımlarında genellikle kaskoyu zorunlu tutar.<br>**İkinci el araçta kredi şartları farklı mı?**<br>Evet, aracın yaşına göre vade sayısı ve verilebilecek kredi oranı değişebilir.",
        faq_json: [
          {
            "question": "Araç kredisi taksiti nasıl hesaplanır",
            "answer": "Kredi tutarı, faiz ve vade kullanılarak sabit taksitli anüite formülüyle hesaplanır."
          },
          {
            "question": "Kasko zorunlu mu",
            "answer": "Bankalar kredili araç alımlarında genellikle kaskoyu zorunlu tutar."
          },
          {
            "question": "İkinci el araçta kredi şartları farklı mı",
            "answer": "Evet, aracın yaşına göre vade sayısı ve verilebilecek kredi oranı değişebilir."
          }
        ]
      },
      {
        name: "Faizsiz Kredi Hesaplama",
        slug: "faizsiz-kredi-hesaplama",
        type: "hesaplama",
        description: "Faizsiz kredi kampanyalarının gerçek maliyetini hesaplar.",
        calisma_mantigi: "Masraflardan efektif faiz oluşturur.",
        faq_summary: "Faizsiz kredi gerçekten faizsiz mi?",
        longtails: "0 faiz kredi hesaplama",
        long_description: "Bankaların yeni müşterilere özel sunduğu 'Faizsiz Kredi' veya '0 Faizli Nakit Avans' kampanyalarının detaylarını inceleyin. Dosya masrafı veya sigorta gibi ek maliyetlerin toplam ödemeye etkisini hesaplayın.",
        faq_content: "**Faizsiz kredide masraf var mı?**<br>Faiz olmasa da hayat sigortası veya işlem ücreti gibi kalemler olabilir.",
        faq_json: [
          {
            "question": "Faizsiz kredide masraf var mı",
            "answer": "Faiz olmasa da hayat sigortası veya işlem ücreti gibi kalemler olabilir."
          }
        ]
      },
      {
        name: "Esnaf Kefalet Kredisi Hesaplama",
        slug: "esnaf-kefalet-kredisi-hesaplama",
        type: "hesaplama",
        description: "Esnaf kefalet kredilerinin aylık maliyet ve toplam gider hesaplaması.",
        calisma_mantigi: "Yıllık faiz–masraf–taksit tablosu çıkarır.",
        faq_summary: "Esnaf kredisi nasıl hesaplanır?",
        longtails: "esnaf kredi hesaplama",
        long_description: "Esnaf ve sanatkarlar için devlet destekli Esnaf Kefalet Kredisi hesaplaması yapın. Kooperatif kesintileri, blokaj tutarları ve düşük faiz oranlarını dikkate alarak elinize geçecek net tutarı belirleyin.",
        faq_content: "**Kesintiler nelerdir?**<br>Blokaj sermaye kesintisi, risk fonu ve kooperatif masrafları düşülür.",
        faq_json: [
          {
            "question": "Kesintiler nelerdir",
            "answer": "Blokaj sermaye kesintisi, risk fonu ve kooperatif masrafları düşülür."
          }
        ]
      },
      {
        name: "Kredi Faiz Hesaplama",
        slug: "kredi-faiz-hesaplama",
        type: "hesaplama",
        description: "Kredi taksitlerinin toplam faiz yükünü hesaplar.",
        calisma_mantigi: "Toplam faiz = toplam ödeme – anapara.",
        faq_summary: "Kredi faizi nasıl bulunur?; Taksit neden artar?",
        longtails: "kredi faizi hesaplama, toplam maliyet hesaplama",
        long_description: "Çektiğiniz veya çekeceğiniz kredinin sadece 'faiz maliyetini' net olarak görmek istiyorsanız bu araç tam size göre. Toplam geri ödeme tutarından anaparayı çıkararak, bankaya fazladan ödediğiniz saf faiz tutarını hesaplar.",
        faq_content: "**Kredi faiz maliyeti nasıl bulunur?**<br>Toplam geri ödeme tutarından, elinize geçen anapara tutarı çıkarılarak bulunur.<br>**Faiz en çok hangi vadede yüksektir?**<br>Vade uzadıkça faiz işletilen süre arttığı için uzun vadelerde faiz yükü artar.<br>**Faiz oranı düşerse toplam ödeme ne olur?**<br>Faiz maliyeti ve dolayısıyla toplam geri ödeme tutarı azalır.",
        faq_json: [
          {
            "question": "Kredi faiz maliyeti nasıl bulunur",
            "answer": "Toplam geri ödeme tutarından, elinize geçen anapara tutarı çıkarılarak bulunur."
          },
          {
            "question": "Faiz en çok hangi vadede yüksektir",
            "answer": "Vade uzadıkça faiz işletilen süre arttığı için uzun vadelerde faiz yükü artar."
          },
          {
            "question": "Faiz oranı düşerse toplam ödeme ne olur",
            "answer": "Faiz maliyeti ve dolayısıyla toplam geri ödeme tutarı azalır."
          }
        ]
      },
      {
        name: "Kredi Faiz Oranı Hesaplama",
        slug: "kredi-faiz-orani-hesaplama",
        type: "hesaplama",
        description: "Faiz oranındaki değişimin kredi taksitini nasıl etkilediğini gösterir.",
        calisma_mantigi: "Eski ve yeni faiz oranları ile karşılaştırmalı tablo oluşturur.",
        faq_summary: "Faiz artınca aylık ödeme ne olur?",
        longtails: "kredi faiz karşılaştırma, kredi faiz oranı",
        long_description: "Mevcut kredinizdeki faiz oranı değişikliklerinin cebinize etkisini karşılaştırmalı olarak görün. Kredi Faiz Oranı Hesaplama aracı, aynı kredi tutarı ve vade için farklı faiz oranlarını yan yana hesaplayarak taksitlerin ve toplam ödemenin nasıl değiştiğini gösterir.",
        faq_content: "**Faiz oranı değişirse taksit nasıl etkilenir?**<br>Oran arttıkça taksit tutarı artar, oran düştükçe azalır.<br>**Hangi faiz oranı daha avantajlıdır?**<br>Her zaman daha düşük olan faiz oranı, toplam maliyeti düşürdüğü için avantajlıdır.<br>**Bu araç konut kredisi için uygun mu?**<br>Evet, konut kredisi dahil tüm kredi türlerinde oran karşılaştırması yapılabilir.",
        faq_json: [
          {
            "question": "Faiz oranı değişirse taksit nasıl etkilenir",
            "answer": "Oran arttıkça taksit tutarı artar, oran düştükçe azalır."
          },
          {
            "question": "Hangi faiz oranı daha avantajlıdır",
            "answer": "Her zaman daha düşük olan faiz oranı, toplam maliyeti düşürdüğü için avantajlıdır."
          },
          {
            "question": "Bu araç konut kredisi için uygun mu",
            "answer": "Evet, konut kredisi dahil tüm kredi türlerinde oran karşılaştırması yapılabilir."
          }
        ]
      },
      {
        name: "Kredi Erken Kapama Hesaplama",
        slug: "kredi-erken-kapama-hesaplama",
        type: "hesaplama",
        description: "Krediyi erken kapatırken ödenecek tutarı hesaplar.",
        calisma_mantigi: "kalan anapara + erken ödeme cezası.",
        faq_summary: "Erken kapama avantajlı mı?",
        longtails: "erken ödeme hesaplama",
        long_description: "Kredinizi vadesinden önce kapatmak istiyorsanız ne kadar ödemeniz gerektiğini hesaplayın. Konut kredilerinde kalan vadeye göre %1 veya %2 erken ödeme tazminatı eklenebilir.",
        faq_content: "**Erken ödeme cezası var mı?**<br>İhtiyaç kredilerinde genelde yoktur, konut kredilerinde yasal sınırlar dahilinde vardır.",
        faq_json: [
          {
            "question": "Erken ödeme cezası var mı",
            "answer": "İhtiyaç kredilerinde genelde yoktur, konut kredilerinde yasal sınırlar dahilinde vardır."
          }
        ]
      },
      {
        name: "Kredi Yapılandırma Hesaplama",
        slug: "kredi-yapilandirma-hesaplama",
        type: "hesaplama",
        description: "Kredi taksitlerinin yeni faiz oranıyla yeniden hesaplanmasını sağlar.",
        calisma_mantigi: "yeni faiz × kalan vade.",
        faq_summary: "Kredi yapılandırılırsa taksit ne olur?",
        longtails: "yapılandırma hesaplama",
        long_description: "Faizler düştüğünde veya ödeme güçlüğü çektiğinizde kredinizi yapılandırmak mantıklı mı? Mevcut kredinizin kalan borcunu yeni bir faiz oranı ve vadeyle yeniden hesaplayarak kar/zarar durumunuzu analiz edin.",
        faq_content: "**Yapılandırma ne zaman mantıklı?**<br>Yeni faiz oranı eskisinden belirgin şekilde düşükse mantıklıdır.",
        faq_json: [
          {
            "question": "Yapılandırma ne zaman mantıklı",
            "answer": "Yeni faiz oranı eskisinden belirgin şekilde düşükse mantıklıdır."
          }
        ]
      },
      {
        name: "Kredi Toplam Maliyet Hesaplama",
        slug: "kredi-toplam-maliyet-hesaplama",
        type: "hesaplama",
        description: "Kredinin tüm masrafları dahil toplam maliyetini hesaplar.",
        calisma_mantigi: "faiz + masraf + vergi.",
        faq_summary: "Kredi toplam maliyeti kaç TL?",
        longtails: "kredi masraf hesaplama",
        long_description: "Kredinin sadece faizini değil, dosya masrafı, sigorta, ekspertiz ve vergiler dahil gerçek maliyetini hesaplayın.",
        faq_content: "**Maliyet oranına neler dahildir?**<br>Kredi faizi, tahsis ücreti, zorunlu sigortalar ve vergiler dahildir.",
        faq_json: [
          {
            "question": "Maliyet oranına neler dahildir",
            "answer": "Kredi faizi, tahsis ücreti, zorunlu sigortalar ve vergiler dahildir."
          }
        ]
      },
      {
        name: "Kredi Taksit Karşılaştırma",
        slug: "kredi-taksit-karsilastirma-hesaplama",
        type: "hesaplama",
        description: "Farklı faiz ve vadelerde taksitleri karşılaştırır.",
        calisma_mantigi: "iki ayrı kredi modeli.",
        faq_summary: "Hangi kredi daha iyi?",
        longtails: "kredi karşılaştırma hesaplama",
        long_description: "İki farklı kredi teklifi arasında kararsız mı kaldınız? Faiz oranları, vade süreleri ve masrafları girerek hangi kredinin toplamda daha ucuza geldiğini karşılaştırın.",
        faq_content: "**Düşük faiz her zaman iyi mi?**<br>Genellikle evet, ancak yüksek dosya masrafı varsa toplam maliyet artabilir.",
        faq_json: [
          {
            "question": "Düşük faiz her zaman iyi mi",
            "answer": "Genellikle evet, ancak yüksek dosya masrafı varsa toplam maliyet artabilir."
          }
        ]
      },
      {
        name: "Kredi Kartı Asgari Tutar Hesaplama",
        slug: "kredi-karti-asgari-tutar-hesaplama",
        type: "hesaplama",
        description: "Kredi kartı borcu için asgari ödeme tutarını hesaplar.",
        calisma_mantigi: "%20–40 oranı.",
        faq_summary: "Asgari ödeme kaç TL olur?",
        longtails: "asgari tutar hesaplama",
        long_description: "Kredi kartı ekstre borcunuzun ne kadarını asgari olarak ödemeniz gerektiğini hesaplayın. Kart limitine göre değişen yasal oranları (%20 veya %40) uygular.",
        faq_content: "**Asgari ödeme oranı nedir?**<br>Kart limitine göre %20 ile %40 arasında değişir.",
        faq_json: [
          {
            "question": "Asgari ödeme oranı nedir",
            "answer": "Kart limitine göre %20 ile %40 arasında değişir."
          }
        ]
      },
      {
        name: "Kredi Kartı Faiz Hesaplama",
        slug: "kredi-karti-faiz-hesaplama",
        type: "hesaplama",
        description: "Kredi kartı gecikme faizini hesaplar.",
        calisma_mantigi: "günlük faiz × gecikme gün.",
        faq_summary: "Gecikme faizi kaç TL?",
        longtails: "kredi kartı gecikme faiz",
        long_description: "Kredi kartı borcunuzu ödemediğinizde veya asgari tutarı ödediğinizde işleyecek akdi faiz ve gecikme faizini hesaplayın.",
        faq_content: "**Akdi faiz nedir?**<br>Dönem borcunun ödenmeyen kısmına uygulanan standart faizdir.",
        faq_json: [
          {
            "question": "Akdi faiz nedir",
            "answer": "Dönem borcunun ödenmeyen kısmına uygulanan standart faizdir."
          }
        ]
      },
      {
        name: "Taksitli Nakit Avans Hesaplama",
        slug: "taksitli-nakit-avans-hesaplama",
        type: "hesaplama",
        description: "Nakit avansın toplam geri ödeme tutarını hesaplar.",
        calisma_mantigi: "vade + faiz + masraflar.",
        faq_summary: "Nakit avans geri ödeme ne kadar?",
        longtails: "nakit avans hesaplama",
        long_description: "Kredi kartınızdan çekeceğiniz taksitli nakit avansın aylık taksitlerini ve toplam maliyetini hesaplayın.",
        faq_content: "**Nakit avans faizi krediden yüksek mi?**<br>Genellikle kredi kartı faiz oranları tüketici kredisinden biraz daha yüksek olabilir.",
        faq_json: [
          {
            "question": "Nakit avans faizi krediden yüksek mi",
            "answer": "Genellikle kredi kartı faiz oranları tüketici kredisinden biraz daha yüksek olabilir."
          }
        ]
      },
      {
        name: "Taksit Hesaplama",
        slug: "taksit-hesaplama",
        type: "hesaplama",
        description: "Taksitli alışverişlerde toplam maliyeti hesaplar.",
        calisma_mantigi: "taksit × ay × faiz.",
        faq_summary: "Taksitli alışveriş kaç TL?",
        longtails: "taksit maliyet hesaplama",
        long_description: "Peşin fiyatına taksit veya vadeli alışverişlerde aylık ödeyeceğiniz tutarı ve toplam maliyeti hesaplayın.",
        faq_content: "**Vade farkı nasıl hesaplanır?**<br>Peşin fiyat ile taksitli toplam fiyat arasındaki farktır.",
        faq_json: [
          {
            "question": "Vade farkı nasıl hesaplanır",
            "answer": "Peşin fiyat ile taksitli toplam fiyat arasındaki farktır."
          }
        ]
      },
];