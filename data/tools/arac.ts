import { ToolData } from '../../types';

export const aracTools: ToolData[] = [
    {
        name: "MTV Hesaplama",
        slug: "mtv-hesaplama",
        type: "hesaplama",
        description: "Aracınızın yıllık vergi yükümlülüğünü (MTV) en güncel tarifelerle hesaplayın.",
        calisma_mantigi: "Motor hacmi + yaş + tarife katsayısı.",
        faq_summary: "MTV kaç TL olur?",
        longtails: "mtv hesaplama, araç vergi hesaplama",
        long_description: "MTV Hesaplama aracı; araç yaşı, motor silindir hacmi, tescil yılı ve araç türü bilgilerini kullanarak ödemeniz gereken tutarı belirler.",
        faq_content: "**MTV ne zaman ödenir?**<br>Yılda iki eşit taksit halinde, Ocak ve Temmuz aylarında ödenir.<br>**Elektrikli araçların MTV'si ne kadar?**<br>Elektrikli araçlar için, eş değer benzinli araçların MTV'sinin %25'i oranında vergi alınır.",
        faq_json: [
          {
            "question": "MTV ne zaman ödenir",
            "answer": "Yılda iki eşit taksit halinde, Ocak ve Temmuz aylarında ödenir."
          },
          {
            "question": "Elektrikli araçların MTV'si ne kadar",
            "answer": "Elektrikli araçlar için, eş değer benzinli araçların MTV'sinin %25'i oranında vergi alınır."
          }
        ]
      },
      {
        name: "ÖTV Hesaplama",
        slug: "otv-hesaplama",
        type: "hesaplama",
        description: "Sıfır araç alırken fiyatın ne kadarının vergi olduğunu şeffaflıkla görün.",
        calisma_mantigi: "matrah + ÖTV + KDV.",
        faq_summary: "Arabaya ÖTV nasıl hesaplanır?",
        longtails: "ö tv hesaplama, araç ötv hesaplama",
        long_description: "ÖTV Hesaplama aracı, aracın vergisiz ham fiyatı (matrah) üzerinden Özel Tüketim Vergisi (ÖTV) ve KDV ekleyerek anahtar teslim satış fiyatını hesaplar.",
        faq_content: "**ÖTV (Özel Tüketim Vergisi) nasıl hesaplanır?**<br>Aracın vergisiz fiyatı (matrah), ilgili ÖTV oranıyla çarpılır.<br>**Matrah dilimi nedir?**<br>Aracın vergisiz fiyat aralığıdır; matrah arttıkça uygulanan ÖTV oranı da artabilir.",
        faq_json: [
          {
            "question": "ÖTV (Özel Tüketim Vergisi) nasıl hesaplanır",
            "answer": "Aracın vergisiz fiyatı (matrah), ilgili ÖTV oranıyla çarpılır."
          },
          {
            "question": "Matrah dilimi nedir",
            "answer": "Aracın vergisiz fiyat aralığıdır; matrah arttıkça uygulanan ÖTV oranı da artabilir."
          }
        ]
      },
      {
        name: "Trafik Cezası Hesaplama",
        slug: "trafik-cezasi-hesaplama",
        type: "hesaplama",
        description: "Trafik kurallarını ihlal ettiğinizde ödemeniz gereken güncel tutarı öğrenin.",
        calisma_mantigi: "ceza türü × tarife.",
        faq_summary: "Trafik Cezası kaç TL?",
        longtails: "trafik ceza hesaplama",
        long_description: "Trafik Cezası Hesaplama aracı, hız sınırı aşımı, kırmızı ışık, park cezası gibi ihlallerin güncel tarifesindeki karşılığını gösterir. Erken ödeme indirimini (%25) otomatik hesaplar.",
        faq_content: "**Erken ödeme indirimi ne kadar?**<br>Cezanın tebliğinden itibaren 15 gün içinde ödenirse %25 indirim uygulanır.<br>**Hız sınırı cezaları sabit mi?**<br>Hayır, hız sınırını %10-30, %30-50 veya %50 üzeri aşmaya göre ceza tutarı artar.",
        faq_json: [
          {
            "question": "Erken ödeme indirimi ne kadar",
            "answer": "Cezanın tebliğinden itibaren 15 gün içinde ödenirse %25 indirim uygulanır."
          },
          {
            "question": "Hız sınırı cezaları sabit mi",
            "answer": "Hayır, hız sınırını %10-30, %30-50 veya %50 üzeri aşmaya göre ceza tutarı artar."
          }
        ]
      },
      {
        name: "Hız Cezası Hesaplama",
        slug: "hiz-cezasi-hesaplama",
        type: "hesaplama",
        description: "Hız limit ihlaline göre ceza tutarını hesaplar.",
        calisma_mantigi: "limit + sapma yüzdesi.",
        faq_summary: "Hız cezası ne kadar?",
        longtails: "hız ceza hesaplama",
        long_description: "Yasal hız sınırını yüzde kaç aştığınıza göre (örneğin %10-30 arası) ödemeniz gereken idari para cezasını öğrenin.",
        faq_content: "**Hız koridoru cezası nasıl hesaplanır?**<br>İki nokta arasındaki ortalama hızınız, limitin üzerindeyse ceza uygulanır.",
        faq_json: [
          {
            "question": "Hız koridoru cezası nasıl hesaplanır",
            "answer": "İki nokta arasındaki ortalama hızınız, limitin üzerindeyse ceza uygulanır."
          }
        ]
      },
      {
        name: "Yakıt Tüketim Hesaplama",
        slug: "yakit-tuketim-hesaplama",
        type: "hesaplama",
        description: "Aracın 1 km ve 100 km yakıt maliyetini hesaplar.",
        calisma_mantigi: "(100km tüketimi/100) × litre fiyatı.",
        faq_summary: "1 km kaç TL yakar?",
        longtails: "yakıt masraf hesaplama",
        long_description: "Yakıt Tüketimi Hesaplama aracı, aracınızın 100 km'deki ortalama tüketim verisi ve güncel benzin/dizel/LPG fiyatlarıyla gideceğiniz mesafedeki toplam yakıt masrafını hesaplar.",
        faq_content: "**Yakıt maliyeti nasıl hesaplanır?**<br>(Mesafe / 100) * Ortalama Tüketim * Litre Fiyatı formülüyle hesaplanır.<br>**Uzun yolda araç daha az mı yakar?**<br>Genellikle sabit hızda gidildiği için şehir dışı tüketimi daha düşüktür.",
        faq_json: [
          {
            "question": "Yakıt maliyeti nasıl hesaplanır",
            "answer": "(Mesafe / 100) * Ortalama Tüketim * Litre Fiyatı formülüyle hesaplanır."
          },
          {
            "question": "Uzun yolda araç daha az mı yakar",
            "answer": "Genellikle sabit hızda gidildiği için şehir dışı tüketimi daha düşüktür."
          }
        ]
      },
      {
        name: "Elektrikli Araç Şarj Maliyeti Hesaplama",
        slug: "ev-sarj-maliyeti-hesaplama",
        type: "hesaplama",
        description: "Elektrikli aracın evde şarj maliyetini hesaplar.",
        calisma_mantigi: "kWh × birim fiyat.",
        faq_summary: "EV şarjı kaç TL?",
        longtails: "elektrikli araç şarj hesaplama",
        long_description: "Elektrikli aracınızı evde şarj etmenin maliyetini hesaplayın. Batarya kapasiteniz ve ev elektriği tarifenizi girerek deponuzu ne kadara doldurabileceğinizi görün.",
        faq_content: "**Evde şarj etmek ucuz mu?**<br>Evet, genellikle hızlı şarj istasyonlarına (DC) göre çok daha ekonomiktir.",
        faq_json: [
          {
            "question": "Evde şarj etmek ucuz mu",
            "answer": "Evet, genellikle hızlı şarj istasyonlarına (DC) göre çok daha ekonomiktir."
          }
        ]
      },
      {
        name: "Kasko Prim Hesaplama",
        slug: "kasko-prim-hesaplama",
        type: "hesaplama",
        description: "Kasko sigortası poliçe primini hesaplar.",
        calisma_mantigi: "araç_değeri × risk katsayısı.",
        faq_summary: "Kasko kaç TL olur?",
        longtails: "kasko hesaplama",
        long_description: "Aracınızı güvence altına alırken karşılaşacağınız kasko primini tahmini olarak hesaplayın. Araç marka-modeli, yaşı ve sürücünün risk profiline göre yaklaşık maliyeti sunar.",
        faq_content: "**Kasko değeri neye göre belirlenir?**<br>Türkiye Sigorta Birliği'nin yayınladığı kasko araç değer listesine (rayiç bedel) göre belirlenir.<br>**Hasarsızlık indirimi kaskoda geçerli mi?**<br>Evet, kazasız yıllarda kasko priminde ciddi oranlarda indirim uygulanır.",
        faq_json: [
          {
            "question": "Kasko değeri neye göre belirlenir",
            "answer": "Türkiye Sigorta Birliği'nin yayınladığı kasko araç değer listesine (rayiç bedel) göre belirlenir."
          },
          {
            "question": "Hasarsızlık indirimi kaskoda geçerli mi",
            "answer": "Evet, kazasız yıllarda kasko priminde ciddi oranlarda indirim uygulanır."
          }
        ]
      },
      {
        name: "Trafik Sigortası Prim Hesaplama",
        slug: "trafik-sigortasi-hesaplama",
        type: "hesaplama",
        description: "Zorunlu trafik sigortası primini hesaplar.",
        calisma_mantigi: "basamak × il × araç türü.",
        faq_summary: "Trafik sigortası kaç TL?",
        longtails: "trafik sigorta hesaplama",
        long_description: "Trafik Sigortası Hesaplama aracı, aracın ili, türü ve hasarsızlık basamağına göre tavan fiyat uygulamalarını dikkate alarak hesaplama yapar.",
        faq_content: "**Trafik sigortası fiyatı nasıl belirlenir?**<br>İl risk durumu, araç türü ve sürücünün hasarsızlık basamağına göre belirlenir.<br>**Hasarsızlık indirimi nedir?**<br>Kazasız geçirilen her yıl için primde yapılan indirimdir (örn: 7. basamak en yüksek indirim).",
        faq_json: [
          {
            "question": "Trafik sigortası fiyatı nasıl belirlenir",
            "answer": "İl risk durumu, araç türü ve sürücünün hasarsızlık basamağına göre belirlenir."
          },
          {
            "question": "Hasarsızlık indirimi nedir",
            "answer": "Kazasız geçirilen her yıl için primde yapılan indirimdir (örn: 7. basamak en yüksek indirim)."
          }
        ]
      },
      {
        name: "Araç Değer Kaybı Hesaplama",
        slug: "arac-deger-kaybi-hesaplama",
        type: "hesaplama",
        description: "Kaza sonrası aracın değer kaybını hesaplar.",
        calisma_mantigi: "Parça + yaş + km + hasar katsayıları.",
        faq_summary: "Değer kaybı kaç TL olur?",
        longtails: "araç değer kaybı hesaplama",
        long_description: "Trafik kazası sonrası aracınızda oluşan piyasa değer düşüklüğünü hesaplayın. Sigorta şirketinden talep edebileceğiniz tazminat tutarı hakkında fikir edinin.",
        faq_content: "**Değer kaybını kim öder?**<br>Kusurlu tarafın trafik sigortası (ZMMS) poliçesinden karşılanır.",
        faq_json: [
          {
            "question": "Değer kaybını kim öder",
            "answer": "Kusurlu tarafın trafik sigortası (ZMMS) poliçesinden karşılanır."
          }
        ]
      },
      {
        name: "Araç Değerleme Hesaplama",
        slug: "arac-degerleme-hesaplama",
        type: "hesaplama",
        description: "Araç yaşı, km ve piyasa katsayılarına göre değer tahmini hesaplar.",
        calisma_mantigi: "Yaş/kilometre çarpan modeli.",
        faq_summary: "Arabam kaç para eder?",
        longtails: "araç değer hesaplama",
        long_description: "Aracınızın marka, model, yıl, kilometre ve hasar durumuna göre güncel 2. el piyasa değerini tahmin edin.",
        faq_content: "**Ekspertiz gerekli mi?**<br>Bu araç sadece tahmini bir fiyat sunar, kesin değer için ekspertiz şarttır.",
        faq_json: [
          {
            "question": "Ekspertiz gerekli mi",
            "answer": "Bu araç sadece tahmini bir fiyat sunar, kesin değer için ekspertiz şarttır."
          }
        ]
      },
      {
        name: "Noter Araç Satış Masrafı Hesaplama",
        slug: "noter-arac-satis-masraf-hesaplama",
        type: "hesaplama",
        description: "Araç devir işlemlerinin noter masraflarını hesaplar.",
        calisma_mantigi: "tarife + ek bedeller.",
        faq_summary: "Noter satış ücreti kaç TL?",
        longtails: "araba noter masraf hesaplama",
        long_description: "Araç alım satımında notere ödenecek güncel devir ücretini hesaplayın.",
        faq_content: "**Noter ücretini kim öder?**<br>Genellikle alıcı öder, ancak taraflar anlaşabilir.",
        faq_json: [
          {
            "question": "Noter ücretini kim öder",
            "answer": "Genellikle alıcı öder, ancak taraflar anlaşabilir."
          }
        ]
      },
      {
        name: "Araç Muayene Gecikme Cezası Hesaplama",
        slug: "arac-muayene-gecikme-cezasi-hesaplama",
        type: "hesaplama",
        description: "Araç muayenesi gecikme durumunda oluşan cezayı hesaplar.",
        calisma_mantigi: "gecikme_gün × oran.",
        faq_summary: "Muayene gecikme cezası ne kadar?",
        longtails: "tüvtürk gecikme cezası",
        long_description: "TÜVTÜRK muayene süresini kaçırdıysanız ödemeniz gereken gecikme bedelini (%5 aylık) hesaplayın.",
        faq_content: "**Gecikme cezası silinir mi?**<br>Bazı dönemlerde çıkan vergi affı/yapılandırma kanunları ile faiz silinebilir.",
        faq_json: [
          {
            "question": "Gecikme cezası silinir mi",
            "answer": "Bazı dönemlerde çıkan vergi affı/yapılandırma kanunları ile faiz silinebilir."
          }
        ]
      },
      {
        name: "Lastik Ebat Değişimi Hesaplama",
        slug: "lastik-ebat-degisimi-hesaplama",
        type: "hesaplama",
        description: "Lastik ölçüsü değiştiğinde hız sapması ve çap farkını hesaplar.",
        calisma_mantigi: "Eski vs yeni çap farkı.",
        faq_summary: "Lastik değişirse hız sapar mı?",
        longtails: "lastik hesaplama",
        long_description: "Aracınızın lastik ebatlarını değiştirirken dikkatli olun. Orijinal ebat ile yeni ebat arasındaki çap farkını hesaplayarak %3 güvenlik sınırını aşıp aşmadığınızı görün.",
        faq_content: "**Lastik değişiminde sınır nedir?**<br>Lastik çapındaki değişimin %3'ü geçmemesi önerilir.",
        faq_json: [
          {
            "question": "Lastik değişiminde sınır nedir",
            "answer": "Lastik çapındaki değişimin %3'ü geçmemesi önerilir."
          }
        ]
      },
      {
        name: "OGS/HGS Geçiş Tutarı Hesaplama",
        slug: "hgs-ogs-tutar-hesaplama",
        type: "hesaplama",
        description: "HGS/OGS geçiş ücretlerini hesaplar.",
        calisma_mantigi: "güzergah × ücret.",
        faq_summary: "HGS kaç TL düşer?",
        longtails: "hgs geçiş hesaplama",
        long_description: "Otoyol ve köprü geçişlerinizde ödeyeceğiniz ücreti giriş ve çıkış gişelerine göre hesaplayın.",
        faq_content: "**Kaçak geçiş cezası ne kadar?**<br>Geçiş ücretinin 4 katı idari para cezası uygulanır.",
        faq_json: [
          {
            "question": "Kaçak geçiş cezası ne kadar",
            "answer": "Geçiş ücretinin 4 katı idari para cezası uygulanır."
          }
        ]
      },
      {
        name: "Ehliyet Ceza Puanı Hesaplama",
        slug: "ehliyet-ceza-hesaplama",
        type: "hesaplama",
        description: "Trafik ihlallerinin ehliyetiniz üzerindeki riskini kontrol edin.",
        calisma_mantigi: "İhlal puanları toplamı.",
        faq_summary: "Ceza puanı nasıl hesaplanır?",
        longtails: "ehliyet ceza puanı",
        long_description: "Ehliyet Ceza Puanı Hesaplama aracı, yaptığınız kural ihlallerinin yasal puan karşılıklarını toplayarak 100 puan sınırına ne kadar yaklaştığınızı gösterir.",
        faq_content: "**100 ceza puanı dolunca ne olur?**<br>Sürücü belgesine 2 ay süreyle el konulur.<br>**Ceza puanları ne zaman silinir?**<br>İhlalin işlendiği tarihten itibaren 1 yıl sonra ilgili puan silinir.",
        faq_json: [
          {
            "question": "100 ceza puanı dolunca ne olur",
            "answer": "Sürücü belgesine 2 ay süreyle el konulur."
          },
          {
            "question": "Ceza puanları ne zaman silinir",
            "answer": "İhlalin işlendiği tarihten itibaren 1 yıl sonra ilgili puan silinir."
          }
        ]
      },
      {
        name: "Trafik Puan Hesaplama",
        slug: "trafik-puan-hesaplama",
        type: "hesaplama",
        description: "Trafik sicilinizin durumunu ve ehliyetinizin risk altında olup olmadığını görün.",
        calisma_mantigi: "Puan toplama.",
        faq_summary: "Trafik ceza puanı nasıl birikir?",
        longtails: "trafik puanı",
        long_description: "Trafik Puan Hesaplama aracı, işlediğiniz suçların puan karşılıklarını toplayarak 100 puan kotasına göre durumunuzu analiz eder.",
        faq_content: "**Kamera cezaları puan yazar mı?**<br>Evet, sürücü tespit edilebilirse veya itiraz edilmezse plakaya yazılan cezalarda da puan işleyebilir.",
        faq_json: [
          {
            "question": "Kamera cezaları puan yazar mı",
            "answer": "Evet, sürücü tespit edilebilirse veya itiraz edilmezse plakaya yazılan cezalarda da puan işleyebilir."
          }
        ]
      },
      {
        name: "Araç Tescil Ücreti Hesaplama",
        slug: "arac-tescil-ucreti-hesaplama",
        type: "hesaplama",
        description: "Araç tescili için ödenecek ücretleri hesaplar.",
        calisma_mantigi: "şoförler odası + noter + plaka.",
        faq_summary: "Tescil ücreti kaç TL?",
        longtails: "arac tescil hesaplama",
        long_description: "Yeni araç alımında veya plaka değişikliğinde ödenmesi gereken tescil belgesi, plaka basım ücreti ve noter masraflarını hesaplayın.",
        faq_content: "**Plaka değişikliği zorunlu mu?**<br>İkinci el araç satışında plaka değişikliği alıcının isteğine bağlıdır.",
        faq_json: [
          {
            "question": "Plaka değişikliği zorunlu mu",
            "answer": "İkinci el araç satışında plaka değişikliği alıcının isteğine bağlıdır."
          }
        ]
      },
];