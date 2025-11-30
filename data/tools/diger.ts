import { ToolData } from '../../types';

export const digerTools: ToolData[] = [
    {
        name: "Hız Hesaplama",
        slug: "hiz-hesaplama",
        type: "hesaplama",
        description: "Ne kadar hızlı gittiğinizi veya yolu ne kadar sürede bitireceğinizi hesaplayın.",
        calisma_mantigi: "Yol = Hız * Zaman.",
        faq_summary: "Hız nasıl hesaplanır?",
        longtails: "hız zaman yol hesaplama",
        long_description: "Hız Hesaplama aracı, Mesafe = Hız x Zaman formülünü kullanarak bilinmeyen değişkeni (hız, süre veya mesafe) bulmanızı sağlar.",
        faq_content: "**Hız nasıl hesaplanır?**<br>Gidilen mesafe, geçen süreye bölünerek (Mesafe / Süre) bulunur.<br>**Ortalama hız nedir?**<br>Toplam yolculuk boyunca kat edilen mesafenin toplam süreye oranıdır.",
        faq_json: [
          {
            "question": "Hız nasıl hesaplanır",
            "answer": "Gidilen mesafe, geçen süreye bölünerek (Mesafe / Süre) bulunur."
          },
          {
            "question": "Ortalama hız nedir",
            "answer": "Toplam yolculuk boyunca kat edilen mesafenin toplam süreye oranıdır."
          }
        ]
      },
      {
        name: "İvme Hesaplama",
        slug: "ivme-hesaplama",
        type: "hesaplama",
        description: "Bir aracın veya cismin hızlanma kapasitesini ölçün.",
        calisma_mantigi: "a = Δv / t.",
        faq_summary: "İvme nedir ve nasıl hesaplanır?",
        longtails: "ivme hesaplama",
        long_description: "İvme Hesaplama aracı, fizikteki a = Δv / t formülüyle, hızdaki değişim miktarını zamana bölerek ivme değerini (m/s²) verir.",
        faq_content: "**İvme nedir ve nasıl hesaplanır?**<br>Birim zamandaki hız değişimidir; (Son Hız - İlk Hız) / Zaman formülüyle bulunur.<br>**Negatif ivme ne anlama gelir?**<br>Cismin yavaşladığını (frenleme yaptığını) gösterir.",
        faq_json: [
          {
            "question": "İvme nedir ve nasıl hesaplanır",
            "answer": "Birim zamandaki hız değişimidir; (Son Hız - İlk Hız) / Zaman formülüyle bulunur."
          },
          {
            "question": "Negatif ivme ne anlama gelir",
            "answer": "Cismin yavaşladığını (frenleme yaptığını) gösterir."
          }
        ]
      },
      {
        name: "Kuvvet Hesaplama",
        slug: "kuvvet-hesaplama",
        type: "hesaplama",
        description: "Newton'un hareket yasalarını pratikte uygulayın.",
        calisma_mantigi: "F = m * a.",
        faq_summary: "Kuvvet (F) formülü nedir?",
        longtails: "kuvvet hesaplama",
        long_description: "Kuvvet Hesaplama aracı, F = m * a formülünü kullanarak bir kütleye etki eden kuvveti veya kuvvet uygulanan cismin ivmesini hesaplar.",
        faq_content: "**Kuvvet (F) formülü nedir?**<br>Kuvvet = Kütle (m) * İvme (a) şeklinde hesaplanır ve birimi Newton'dur (N).<br>**Kütle ve ağırlık aynı mı?**<br>Hayır, kütle değişmez madde miktarıdır; ağırlık ise kütleye etki eden yerçekimi kuvvetidir.",
        faq_json: [
          {
            "question": "Kuvvet (F) formülü nedir",
            "answer": "Kuvvet = Kütle (m) * İvme (a) şeklinde hesaplanır ve birimi Newton'dur (N)."
          },
          {
            "question": "Kütle ve ağırlık aynı mı",
            "answer": "Hayır, kütle değişmez madde miktarıdır; ağırlık ise kütleye etki eden yerçekimi kuvvetidir."
          }
        ]
      },
      {
        name: "Momentum Hesaplama",
        slug: "momentum-hesaplama",
        type: "hesaplama",
        description: "Hareket halindeki bir cismin çarpma etkisini veya hareket miktarını analiz edin.",
        calisma_mantigi: "p = m * v.",
        faq_summary: "Momentum nasıl hesaplanır?",
        longtails: "momentum hesaplama",
        long_description: "Momentum Hesaplama aracı, p = m * v formülüyle kütle ve hızı çarparak momentumu hesaplar.",
        faq_content: "**Momentum nasıl hesaplanır?**<br>Cismin kütlesi (kg) ile hızının (m/s) çarpımıdır (p=m*v).<br>**Hız artarsa momentum ne olur?**<br>Hızla doğru orantılı olduğu için hız arttıkça momentum da artar.",
        faq_json: [
          {
            "question": "Momentum nasıl hesaplanır",
            "answer": "Cismin kütlesi (kg) ile hızının (m/s) çarpımıdır (p=m*v)."
          },
          {
            "question": "Hız artarsa momentum ne olur",
            "answer": "Hızla doğru orantılı olduğu için hız arttıkça momentum da artar."
          }
        ]
      },
      {
        name: "Çalışma Gücü Hesaplama",
        slug: "calisma-gucu-hesaplama",
        type: "hesaplama",
        description: "Yapılan işi ve harcanan gücü fiziksel olarak ölçün.",
        calisma_mantigi: "Güç = İş / Zaman.",
        faq_summary: "Güç (Power) formülü nedir?",
        longtails: "güç hesaplama",
        long_description: "Çalışma ve Güç Hesaplama aracı, uygulanan kuvvet ve mesafe ile 'İş'i (Work); bu işin yapılma süresiyle de 'Güç'ü (Power) hesaplar.",
        faq_content: "**Güç (Power) formülü nedir?**<br>Güç = Yapılan İş / Geçen Zaman (P = W / t) formülüyle bulunur, birimi Watt'tır.<br>**İş (Work) nasıl hesaplanır?**<br>Kuvvet * Mesafe (W = F * d) formülüyle hesaplanır.",
        faq_json: [
          {
            "question": "Güç (Power) formülü nedir",
            "answer": "Güç = Yapılan İş / Geçen Zaman (P = W / t) formülüyle bulunur, birimi Watt'tır."
          },
          {
            "question": "İş (Work) nasıl hesaplanır",
            "answer": "Kuvvet * Mesafe (W = F * d) formülüyle hesaplanır."
          }
        ]
      },
      {
        name: "Enerji Hesaplama",
        slug: "enerji-hesaplama",
        type: "hesaplama",
        description: "Potansiyel ve kinetik enerji dönüşümlerini kolayca hesaplayın.",
        calisma_mantigi: "½mv² veya mgh.",
        faq_summary: "Kinetik enerji nasıl hesaplanır?",
        longtails: "enerji hesaplama",
        long_description: "Enerji Hesaplama aracı, bir cismin hareketinden (½mv²) veya yüksekliğinden (mgh) kaynaklı enerjisini Joule cinsinden verir.",
        faq_content: "**Kinetik enerji nasıl hesaplanır?**<br>½ * Kütle * Hızın Karesi (½mv²) formülüyle bulunur.<br>**Potansiyel enerji formülü nedir?**<br>Kütle * Yerçekimi İvmesi * Yükseklik (mgh) formülüyle hesaplanır.",
        faq_json: [
          {
            "question": "Kinetik enerji nasıl hesaplanır",
            "answer": "½ * Kütle * Hızın Karesi (½mv²) formülüyle bulunur."
          },
          {
            "question": "Potansiyel enerji formülü nedir",
            "answer": "Kütle * Yerçekimi İvmesi * Yükseklik (mgh) formülüyle hesaplanır."
          }
        ]
      },
      {
        name: "Yoğunluk Hesaplama",
        slug: "yogunluk-hesaplama",
        type: "hesaplama",
        description: "Maddelerin ayırt edici özelliği olan yoğunluğu analiz edin.",
        calisma_mantigi: "d = m / V.",
        faq_summary: "Yoğunluk (özkütle) formülü nedir?",
        longtails: "yoğunluk hesaplama",
        long_description: "Yoğunluk Hesaplama aracı, d = m / V formülüyle, bir maddenin kütlesini hacmine bölerek özgül ağırlığını (yoğunluğunu) hesaplar.",
        faq_content: "**Yoğunluk (özkütle) formülü nedir?**<br>Yoğunluk = Kütle / Hacim (d=m/V) formülüyle bulunur.<br>**Suyun yoğunluğu kaçtır?**<br>Standart koşullarda suyun yoğunluğu yaklaşık 1 g/cm³'tür.",
        faq_json: [
          {
            "question": "Yoğunluk (özkütle) formülü nedir",
            "answer": "Yoğunluk = Kütle / Hacim (d=m/V) formülüyle bulunur."
          },
          {
            "question": "Suyun yoğunluğu kaçtır",
            "answer": "Standart koşullarda suyun yoğunluğu yaklaşık 1 g/cm³'tür."
          }
        ]
      },
      {
        name: "Birim Çevirici",
        slug: "birim-cevirici",
        type: "hesaplama",
        description: "Uzunluk, ağırlık, hacim veya sıcaklık dönüşümleri yapın.",
        calisma_mantigi: "Birim katsayıları.",
        faq_summary: "Birim çevirme nasıl yapılır?",
        longtails: "birim çevirme",
        long_description: "Birim Çevirici, km'den mile, kg'dan pound'a kadar yüzlerce birimi saniyeler içinde birbirine dönüştürür.",
        faq_content: "**Mil ile kilometre farkı nedir?**<br>1 kara mili yaklaşık 1.609 kilometredir.",
        faq_json: [
          {
            "question": "Mil ile kilometre farkı nedir",
            "answer": "1 kara mili yaklaşık 1.609 kilometredir."
          }
        ]
      },
      {
        name: "Sıcaklık Hesaplama",
        slug: "sicaklik-hesaplama",
        type: "hesaplama",
        description: "Farklı ülkelerdeki sıcaklık değerlerini kendi bildiğiniz birime çevirin.",
        calisma_mantigi: "C/F/K dönüşüm formülleri.",
        faq_summary: "Fahrenheit'tan Celsius'a nasıl çevrilir?",
        longtails: "sıcaklık çevirme",
        long_description: "Sıcaklık Hesaplama aracı, Celsius (°C), Fahrenheit (°F) ve Kelvin (K) birimleri arasında hassas bilimsel dönüşüm yapar.",
        faq_content: "**Fahrenheit'tan Celsius'a nasıl çevrilir?**<br>(°F - 32) / 1.8 formülü kullanılır.",
        faq_json: [
          {
            "question": "Fahrenheit'tan Celsius'a nasıl çevrilir",
            "answer": "(°F - 32) / 1.8 formülü kullanılır."
          }
        ]
      },
      {
        name: "KM - Mil Hesaplama",
        slug: "km-mil-hesaplama",
        type: "hesaplama",
        description: "Yolculuk mesafelerini veya hız göstergelerini bildiğiniz birime çevirin.",
        calisma_mantigi: "1 mil = 1.60934 km.",
        faq_summary: "1 mil kaç kilometredir?",
        longtails: "mil km çevirme",
        long_description: "KM - Mil Hesaplama aracı, kilometreyi mile (veya tam tersi) uluslararası standart katsayılarla dönüştürür.",
        faq_content: "**1 mil kaç kilometredir?**<br>1 kara mili (statute mile) yaklaşık 1.60934 kilometredir.<br>**Deniz mili ile farkı nedir?**<br>Deniz mili (nautical mile) farklıdır ve yaklaşık 1.852 km'ye eşittir.",
        faq_json: [
          {
            "question": "1 mil kaç kilometredir",
            "answer": "1 kara mili (statute mile) yaklaşık 1.60934 kilometredir."
          },
          {
            "question": "Deniz mili ile farkı nedir",
            "answer": "Deniz mili (nautical mile) farklıdır ve yaklaşık 1.852 km'ye eşittir."
          }
        ]
      },
      {
        name: "KM - Metre Hesaplama",
        slug: "km-metre-hesaplama",
        type: "hesaplama",
        description: "Uzun mesafe birimlerini hassas metre ölçülerine dönüştürün.",
        calisma_mantigi: "x1000.",
        faq_summary: "1 km kaç metredir?",
        longtails: "km metre çevirme",
        long_description: "KM - Metre Hesaplama aracı, 1000'lik dönüşüm oranıyla kilometreyi metreye çevirir; koşu parkurları ve harita ölçümleri için idealdir.",
        faq_content: "**1 km kaç metredir?**<br>1 kilometre tam olarak 1000 metreye eşittir.",
        faq_json: [
          {
            "question": "1 km kaç metredir",
            "answer": "1 kilometre tam olarak 1000 metreye eşittir."
          }
        ]
      },
      {
        name: "MB - GB Hesaplama",
        slug: "mb-gb-hesaplama",
        type: "hesaplama",
        description: "Veri depolama birimleri arasındaki kafa karışıklığını giderin.",
        calisma_mantigi: "1024 tabanı.",
        faq_summary: "1 GB kaç MB eder?",
        longtails: "mb gb çevirme",
        long_description: "MB - GB Hesaplama aracı, Megabayt (MB), Gigabayt (GB) ve Terabayt (TB) birimlerini birbirine 1024'lük veya 1000'lik tabana göre hatasız dönüştürür.",
        faq_content: "**1 GB kaç MB eder?**<br>Bilgisayar sistemlerinde (binary) 1 GB = 1024 MB'dır.<br>**Neden bazen 1000 olarak hesaplanıyor?**<br>Depolama üreticileri bazen 1000'lik sistemi (decimal) kullanırken, işletim sistemleri 1024'ü esas alır.",
        faq_json: [
          {
            "question": "1 GB kaç MB eder",
            "answer": "Bilgisayar sistemlerinde (binary) 1 GB = 1024 MB'dır."
          },
          {
            "question": "Neden bazen 1000 olarak hesaplanıyor",
            "answer": "Depolama üreticileri bazen 1000'lik sistemi (decimal) kullanırken, işletim sistemleri 1024'ü esas alır."
          }
        ]
      },
      {
        name: "İnternet Kota Hesaplama",
        slug: "internet-kota-hesaplama",
        type: "hesaplama",
        description: "İnternet paketinizi bitirmeden kullanımınızı planlayın.",
        calisma_mantigi: "Video süresi x Bitrate.",
        faq_summary: "1 saat video kaç GB internet yer?",
        longtails: "internet kota sorgulama",
        long_description: "İnternet Kota Hesaplama aracı; izlediğiniz video süresi, dinlediğiniz müzik ve oyun oynama alışkanlıklarınıza göre tahmini aylık veri tüketimini (GB) hesaplar.",
        faq_content: "**1 saat video kaç GB internet yer?**<br>Kaliteye göre değişir; 1080p video saatte yaklaşık 1.5 - 2 GB, 480p ise 0.5 GB tüketir.<br>**Online oyunlar çok internet harcar mı?**<br>Oyununa göre değişmekle birlikte video izlemeye kıyasla daha az (saatte 100-300 MB) veri tüketir.",
        faq_json: [
          {
            "question": "1 saat video kaç GB internet yer",
            "answer": "Kaliteye göre değişir; 1080p video saatte yaklaşık 1.5 - 2 GB, 480p ise 0.5 GB tüketir."
          },
          {
            "question": "Online oyunlar çok internet harcar mı",
            "answer": "Oyununa göre değişmekle birlikte video izlemeye kıyasla daha az (saatte 100-300 MB) veri tüketir."
          }
        ]
      },
      {
        name: "Powerbank Süre Hesaplama",
        slug: "powerbank-sure-hesaplama",
        type: "hesaplama",
        description: "Powerbank kapasitesine göre cihazı kaç saat çalıştıracağını hesaplar.",
        calisma_mantigi: "mAh → Wh dönüşümü ve verimlilik.",
        faq_summary: "Powerbank kaç saat gider?",
        longtails: "powerbank süre hesaplama",
        long_description: "Powerbank'inizin telefonunuzu veya diğer cihazlarınızı kaç kez şarj edebileceğini veya ne kadar süre çalıştırabileceğini (voltaj kaybını dikkate alarak) hesaplayın.",
        faq_content: "**10000 mAh kaç kez şarj eder?**<br>Telefon bataryasına göre değişir ama ortalama 3000 mAh'lik bir telefonu yaklaşık 2-2.5 kez şarj eder (dönüşüm kaybı nedeniyle).",
        faq_json: [
          {
            "question": "10000 mAh kaç kez şarj eder",
            "answer": "Telefon bataryasına göre değişir ama ortalama 3000 mAh'lik bir telefonu yaklaşık 2-2.5 kez şarj eder (dönüşüm kaybı nedeniyle)."
          }
        ]
      },
      {
        name: "Asgari Geçim Sınırı Hesaplama",
        slug: "asgari-gecim-siniri-hesaplama",
        type: "hesaplama",
        description: "Bir kişinin aylık minimum yaşam maliyetini hesaplar.",
        calisma_mantigi: "Temel gider kalemleri toplamı.",
        faq_summary: "Geçim sınırı kaç TL?",
        longtails: "yaşam maliyeti hesaplama",
        long_description: "Gıda, barınma, ulaşım gibi temel ihtiyaçları baz alarak bulunduğunuz şehirdeki tahmini aylık asgari geçim maliyetini hesaplayın.",
        faq_content: "**Yoksulluk sınırı nedir?**<br>Dört kişilik bir ailenin tüm temel ihtiyaçlarını karşılayabilmesi için gereken tutardır.",
        faq_json: [
          {
            "question": "Yoksulluk sınırı nedir",
            "answer": "Dört kişilik bir ailenin tüm temel ihtiyaçlarını karşılayabilmesi için gereken tutardır."
          }
        ]
      },
      {
        name: "Kargo Teslim Süresi Hesaplama",
        slug: "kargo-teslim-suresi-hesaplama",
        type: "hesaplama",
        description: "Kargo firmalarına göre tahmini teslim süresi hesaplar.",
        calisma_mantigi: "mesafe tablosu.",
        faq_summary: "Kargo kaç günde gelir?",
        longtails: "kargo süre hesaplama",
        long_description: "Gönderici ve alıcı şehirleri arasındaki mesafeye göre kargonun kaç günde teslim edileceğini (Standart 600 km = 1 gün kuralı) tahmin edin.",
        faq_content: "**Kargolar cumartesi çalışır mı?**<br>Çoğu kargo firması Cumartesi yarım gün dağıtım yapar.",
        faq_json: [
          {
            "question": "Kargolar cumartesi çalışır mı",
            "answer": "Çoğu kargo firması Cumartesi yarım gün dağıtım yapar."
          }
        ]
      },
      {
        name: "IBAN Doğrulama",
        slug: "iban-dogrulama",
        type: "dogrulama",
        description: "IBAN’ın geçerli olup olmadığını doğrular ve bankasını bulur.",
        calisma_mantigi: "MOD97 algoritması ile kontrol.",
        faq_summary: "IBAN doğru mu?",
        longtails: "iban doğrulama, iban banka bulma, iban kontrol",
        long_description: "Elinizdeki IBAN numarasının geçerli olup olmadığını ve hangi bankaya ait olduğunu saniyeler içinde kontrol edin. Para transferi yapmadan önce hatalı gönderimlerin önüne geçin.",
        faq_content: "**IBAN kaç hanelidir?**<br>Türkiye'de IBAN 26 haneden oluşur ve TR ile başlar.",
        faq_json: [
          {
            "question": "IBAN kaç hanelidir",
            "answer": "Türkiye'de IBAN 26 haneden oluşur ve TR ile başlar."
          }
        ]
      },
      {
        name: "Banka Swift Kodu Bulma",
        slug: "swift-kodu-bulma",
        type: "bulma",
        description: "Bankaların SWIFT/BIC kodlarını bulur.",
        calisma_mantigi: "Banka → SWIFT veri eşleştirmesi.",
        faq_summary: "Swift kodu nerede yazar?",
        longtails: "swift kodu bulma",
        long_description: "Yurtdışından para transferi alırken gerekli olan bankanıza ait SWIFT (BIC) kodunu öğrenin.",
        faq_content: "**SWIFT kodu kaç hanelidir?**<br>Genellikle 8 veya 11 karakterden oluşur.",
        faq_json: [
          {
            "question": "SWIFT kodu kaç hanelidir",
            "answer": "Genellikle 8 veya 11 karakterden oluşur."
          }
        ]
      },
      {
        name: "Banka Şube Kodu Bulma",
        slug: "banka-sube-kodu-bulma",
        type: "bulma",
        description: "Banka il–ilçe–şube kodu bulma aracıdır.",
        calisma_mantigi: "Şube veri tabanı.",
        faq_summary: "Şube kodu nasıl bulunur?",
        longtails: "banka şube kodu bulma",
        long_description: "Banka adı, il ve ilçe seçerek ilgili şubenin kodunu ve iletişim bilgilerini bulun. EFT işlemlerinde şube kodu gerekebilir.",
        faq_content: "**Şube kodu IBAN'da var mı?**<br>Evet, IBAN'ın içindeki belirli haneler banka ve şube kodunu temsil eder.",
        faq_json: [
          {
            "question": "Şube kodu IBAN'da var mı",
            "answer": "Evet, IBAN'ın içindeki belirli haneler banka ve şube kodunu temsil eder."
          }
        ]
      },
      {
        name: "Posta Kodu Bulma",
        slug: "posta-kodu-bulma",
        type: "bulma",
        description: "Adres → posta kodu bulma aracıdır.",
        calisma_mantigi: "PTT posta kodu veri tabanı.",
        faq_summary: "Posta kodum kaç?",
        longtails: "posta kodu sorgulama",
        long_description: "Mahallenizin veya köyünüzün 5 haneli posta kodunu il ve ilçe seçerek öğrenin.",
        faq_content: "**Posta kodu neden önemli?**<br>Kargoların ve tebligatların doğru adrese hızlı ulaşması için kritiktir.",
        faq_json: [
          {
            "question": "Posta kodu neden önemli",
            "answer": "Kargoların ve tebligatların doğru adrese hızlı ulaşması için kritiktir."
          }
        ]
      },
      {
        name: "DASK Hesaplama",
        slug: "dask-hesaplama",
        type: "hesaplama",
        description: "Zorunlu deprem sigortası primini hesaplar.",
        calisma_mantigi: "M2 + bina sınıfı + bölge.",
        faq_summary: "DASK primi nasıl hesaplanır?",
        longtails: "dask hesaplama",
        long_description: "Evinizin bulunduğu deprem risk bölgesi, bina yapı tarzı ve metrekare bilgilerine göre ödemeniz gereken zorunlu deprem sigortası (DASK) primini hesaplayın.",
        faq_content: "**DASK zorunlu mu?**<br>Evet, elektrik/su aboneliği ve tapu işlemlerinde zorunludur.",
        faq_json: [
          {
            "question": "DASK zorunlu mu",
            "answer": "Evet, elektrik/su aboneliği ve tapu işlemlerinde zorunludur."
          }
        ]
      },
      {
        name: "Konut Sigortası Hesaplama",
        slug: "konut-sigortasi-hesaplama",
        type: "hesaplama",
        description: "Konut sigortası yıllık prim hesaplama aracı.",
        calisma_mantigi: "Metrekare + risk bölgesi + eşya değeri.",
        faq_summary: "Konut sigortası kaç TL?",
        longtails: "konut sigorta hesaplama",
        long_description: "Evinizi yangın, hırsızlık ve su baskını gibi risklere karşı koruyan konut sigortası için tahmini prim tutarını öğrenin.",
        faq_content: "**DASK varken konut sigortası gerekir mi?**<br>DASK sadece depremi kapsar, konut sigortası diğer riskleri ve eşyaları da kapsar.",
        faq_json: [
          {
            "question": "DASK varken konut sigortası gerekir mi",
            "answer": "DASK sadece depremi kapsar, konut sigortası diğer riskleri ve eşyaları da kapsar."
          }
        ]
      },
      {
        name: "Elektrik Faturası Hesaplama",
        slug: "elektrik-faturasi-hesaplama",
        type: "hesaplama",
        description: "Aylık elektrik tüketimi üzerinden fatura hesaplar.",
        calisma_mantigi: "kWh × birim fiyat.",
        faq_summary: "Elektrik faturası nasıl hesaplanır?",
        longtails: "aylık elektrik hesaplama",
        long_description: "Sayacınızdaki ilk ve son endeksi girerek veya cihazlarınızın tüketim değerlerini toplayarak tahmini elektrik faturanızı hesaplayın.",
        faq_content: "**Kademeli tarife nedir?**<br>Belirli bir tüketim limitine (örn: 240 kWh) kadar düşük, üzeri için yüksek birim fiyat uygulanmasıdır.",
        faq_json: [
          {
            "question": "Kademeli tarife nedir",
            "answer": "Belirli bir tüketim limitine (örn: 240 kWh) kadar düşük, üzeri için yüksek birim fiyat uygulanmasıdır."
          }
        ]
      },
      {
        name: "Su Faturası Hesaplama",
        slug: "su-faturasi-hesaplama",
        type: "hesaplama",
        description: "Su tüketiminden aylık fatura hesaplar.",
        calisma_mantigi: "m³ × birim fiyat.",
        faq_summary: "Su faturası kaç TL gelir?",
        longtails: "su hesaplama",
        long_description: "Harcanan su miktarını (metreküp) girerek, atık su bedeli ve vergiler dahil tahmini su faturanızı hesaplayın.",
        faq_content: "**Atık su bedeli nedir?**<br>Kullandığınız temiz suyun kanalizasyona verilmesi karşılığında alınan bedeldir.",
        faq_json: [
          {
            "question": "Atık su bedeli nedir",
            "answer": "Kullandığınız temiz suyun kanalizasyona verilmesi karşılığında alınan bedeldir."
          }
        ]
      },
      {
        name: "Doğalgaz Faturası Hesaplama",
        slug: "dogalgaz-faturasi-hesaplama",
        type: "hesaplama",
        description: "Doğalgaz tüketimi üzerinden tahmini fatura hesaplar.",
        calisma_mantigi: "m³ × gaz birim fiyatı.",
        faq_summary: "Doğalgaz faturası nasıl hesaplanır?",
        longtails: "dogalgaz hesaplama",
        long_description: "Kış aylarında kombi tüketiminize göre gelecek faturayı tahmin edin. Metreküp fiyatını güncel tarifelerle çarpar.",
        faq_content: "**Fatura neye göre değişir?**<br>Tüketilen hacim (m³) ve gazın ısıl değeri (düzeltme katsayısı) faturayı etkiler.",
        faq_json: [
          {
            "question": "Fatura neye göre değişir",
            "answer": "Tüketilen hacim (m³) ve gazın ısıl değeri (düzeltme katsayısı) faturayı etkiler."
          }
        ]
      },
      {
        name: "Kombi Tüketim Hesaplama",
        slug: "kombi-tuketim-hesaplama",
        type: "hesaplama",
        description: "Kombinin aylık gaz tüketimini hesaplar.",
        calisma_mantigi: "kW × kullanım süresi.",
        faq_summary: "Kombi kaç m³ yakar?",
        longtails: "kombi fuel hesaplama",
        long_description: "Kombinizin kapasitesi (kW) ve günlük çalışma saatine göre aylık ne kadar doğalgaz harcayacağını hesaplayın.",
        faq_content: "**Yoğuşmalı kombi tasarruf sağlar mı?**<br>Evet, atık gazın ısısını geri kazanarak %20-30 tasarruf sağlayabilir.",
        faq_json: [
          {
            "question": "Yoğuşmalı kombi tasarruf sağlar mı",
            "answer": "Evet, atık gazın ısısını geri kazanarak %20-30 tasarruf sağlayabilir."
          }
        ]
      },
      {
        name: "Klima Tüketim Hesaplama",
        slug: "klima-tuketim-hesaplama",
        type: "hesaplama",
        description: "Klima kullanımından doğan elektrik tüketimini hesaplar.",
        calisma_mantigi: "BTU/Watt dönüşümü.",
        faq_summary: "Klima ne kadar elektrik harcar?",
        longtails: "klima elektrik hesaplama",
        long_description: "Klimanızın BTU değerine göre saatlik elektrik tüketimini ve faturanıza yansıyacak tutarı hesaplayın.",
        faq_content: "**Inverter klima az mı yakar?**<br>Evet, kompresör hızını ayarlayabildiği için dur-kalk yapan klimalara göre daha az elektrik tüketir.",
        faq_json: [
          {
            "question": "Inverter klima az mı yakar",
            "answer": "Evet, kompresör hızını ayarlayabildiği için dur-kalk yapan klimalara göre daha az elektrik tüketir."
          }
        ]
      },
      {
        name: "Evde Bakım Maaşı Hesaplama",
        slug: "evde-bakim-maasi-hesaplama",
        type: "hesaplama",
        description: "Devletin sağladığı evde bakım desteği için kriterleri sağlayıp sağlamadığınızı kontrol edin.",
        calisma_mantigi: "Gelir / Kişi Sayısı < Asgari Ücretin 2/3'ü.",
        faq_summary: "Evde bakım maaşı alma şartı nedir?",
        longtails: "evde bakım parası",
        long_description: "Evde Bakım Maaşı Hesaplama aracı, hanedeki kişi sayısı ve toplam gelire göre kişi başı düşen geliri hesaplayarak uygunluk durumunu gösterir.",
        faq_content: "**Evde bakım maaşı alma şartı nedir?**<br>Bakıma muhtaç engelli raporu olması ve hane içinde kişi başına düşen gelirin asgari ücretin 2/3'ünden az olması gerekir.<br>**Gelir hesabı nasıl yapılır?**<br>Haneye giren tüm gelir toplanır ve evde yaşayan kişi sayısına bölünür.",
        faq_json: [
          {
            "question": "Evde bakım maaşı alma şartı nedir",
            "answer": "Bakıma muhtaç engelli raporu olması ve hane içinde kişi başına düşen gelirin asgari ücretin 2/3'ünden az olması gerekir."
          },
          {
            "question": "Gelir hesabı nasıl yapılır",
            "answer": "Haneye giren tüm gelir toplanır ve evde yaşayan kişi sayısına bölünür."
          }
        ]
      },
      {
        name: "Doğum Parası Hesaplama",
        slug: "dogum-parasi-hesaplama",
        type: "hesaplama",
        description: "Yeni anne olanlar için devletin sunduğu doğum yardımını hesaplayın.",
        calisma_mantigi: "Çocuk sırasına göre sabit tutar.",
        faq_summary: "Doğum parası ne kadardır?",
        longtails: "doğum yardımı hesaplama",
        long_description: "Doğum Parası Hesaplama aracı, canlı doğan birinci, ikinci ve üçüncü çocuk için ödenen tek seferlik yardım tutarlarını gösterir.",
        faq_content: "**Doğum parası ne kadardır?**<br>İlk çocuk için 300 TL, ikinci çocuk için 400 TL, üçüncü ve sonraki çocuklar için 600 TL ödenir (Tutarlar mevzuata göre değişebilir).<br>**Başvuru nereye yapılır?**<br>Aile, Çalışma ve Sosyal Hizmetler İl Müdürlüklerine veya Sosyal Hizmet Merkezlerine başvurulur.",
        faq_json: [
          {
            "question": "Doğum parası ne kadardır",
            "answer": "İlk çocuk için 300 TL, ikinci çocuk için 400 TL, üçüncü ve sonraki çocuklar için 600 TL ödenir (Tutarlar mevzuata göre değişebilir)."
          },
          {
            "question": "Başvuru nereye yapılır",
            "answer": "Aile, Çalışma ve Sosyal Hizmetler İl Müdürlüklerine veya Sosyal Hizmet Merkezlerine başvurulur."
          }
        ]
      },
      {
        name: "Cep Harçlığı Hesaplama",
        slug: "cep-harcligi-hesaplama",
        type: "hesaplama",
        description: "Öğrenci bütçesini ve ihtiyaçlarını planlayın.",
        calisma_mantigi: "Gider kalemleri toplamı.",
        faq_summary: "İdeal harçlık nasıl belirlenir?",
        longtails: "harçlık hesaplama",
        long_description: "Cep Harçlığı Hesaplama aracı, yemek, ulaşım ve sosyal gider kalemlerini toplayarak bir öğrencinin günlük, haftalık veya aylık ihtiyaç duyacağı harçlık miktarını belirler.",
        faq_content: "**İdeal harçlık nasıl belirlenir?**<br>Okulun konumu, yemek fiyatları, ulaşım masrafı ve yaş grubuna göre ihtiyaç listesi yapılarak belirlenir.",
        faq_json: [
          {
            "question": "İdeal harçlık nasıl belirlenir",
            "answer": "Okulun konumu, yemek fiyatları, ulaşım masrafı ve yaş grubuna göre ihtiyaç listesi yapılarak belirlenir."
          }
        ]
      },
      {
        name: "Para Üstü Hesaplama",
        slug: "para-ustu-hesaplama",
        type: "hesaplama",
        description: "Kasa işlemlerinde hata yapmadan para üstü verin.",
        calisma_mantigi: "Verilen - Tutar.",
        faq_summary: "Para üstü nasıl hesaplanır?",
        longtails: "para üstü hesaplama",
        long_description: "Para Üstü Hesaplama aracı, alışveriş tutarı ve müşterinin verdiği parayı girerek iade edilmesi gereken tutarı anında gösterir.",
        faq_content: "**Para üstü nasıl hesaplanır?**<br>Verilen Para - Tutar işlemiyle hesaplanır.<br>**Kasiyerler için pratik yöntem nedir?**<br>Tutarın üzerine ekleyerek verilen paraya tamamlama yöntemi sık kullanılır.",
        faq_json: [
          {
            "question": "Para üstü nasıl hesaplanır",
            "answer": "Verilen Para - Tutar işlemiyle hesaplanır."
          },
          {
            "question": "Kasiyerler için pratik yöntem nedir",
            "answer": "Tutarın üzerine ekleyerek verilen paraya tamamlama yöntemi sık kullanılır."
          }
        ]
      },
];