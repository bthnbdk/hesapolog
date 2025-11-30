import { ToolData } from '../../types';

export const saglikTools: ToolData[] = [
    {
        name: "BMI (Vücut Kitle İndeksi) Hesaplama",
        slug: "bmi-vucut-kitle-indeksi-hesaplama",
        type: "hesaplama",
        description: "Beden kitle indeksini hesaplar.",
        calisma_mantigi: "kilo/(boy²).",
        faq_summary: "BMI kaç olmalı?",
        longtails: "vücut kitle indeksi hesaplama, bmi hesaplama",
        long_description: "Sağlıklı kilonuzda olup olmadığınızı bilimsel bir yöntemle öğrenin. Vücut Kitle İndeksi (BMI) Hesaplama aracı, kilonuzu ve boyunuzu formüle dökerek 'Zayıf', 'İdeal', 'Kilolu' veya 'Obez' kategorisinde olup olmadığınızı gösterir.",
        faq_content: "**Vücut Kitle İndeksi (BMI) formülü nedir?**<br>Kilo (kg) / Boyun Karesi (m²) formülüyle hesaplanır.<br>**İdeal BMI değeri kaçtır?**<br>Dünya Sağlık Örgütü'ne göre 18.5 ile 24.9 arası sağlıklı kabul edilir.<br>**Kaslı vücutlarda BMI doğru sonuç verir mi?**<br>Kas kütlesi yoğun sporcularda BMI yüksek çıkabilir, bu yanıltıcı olabilir; yağ oranı ölçümü daha doğrudur.",
        faq_json: [
          {
            "question": "Vücut Kitle İndeksi (BMI) formülü nedir",
            "answer": "Kilo (kg) / Boyun Karesi (m²) formülüyle hesaplanır."
          },
          {
            "question": "İdeal BMI değeri kaçtır",
            "answer": "Dünya Sağlık Örgütü'ne göre 18.5 ile 24.9 arası sağlıklı kabul edilir."
          },
          {
            "question": "Kaslı vücutlarda BMI doğru sonuç verir mi",
            "answer": "Kas kütlesi yoğun sporcularda BMI yüksek çıkabilir, bu yanıltıcı olabilir; yağ oranı ölçümü daha doğrudur."
          }
        ]
      },
      {
        name: "İdeal Kilo Hesaplama",
        slug: "ideal-kilo-hesaplama",
        type: "hesaplama",
        description: "Cinsiyet ve boya göre ideal kiloyu hesaplar.",
        calisma_mantigi: "Devine formülü.",
        faq_summary: "İdeal kilom kaç?",
        longtails: "ideal kilo hesaplama",
        long_description: "Boyunuza, yaşınıza ve cinsiyetinize göre olmanız gereken en sağlıklı kiloyu hesaplayın. İdeal Kilo Hesaplama aracı, farklı vücut tiplerini dikkate alarak size en uygun kilo aralığını belirler.",
        faq_content: "**İdeal kilo neye göre belirlenir?**<br>Boy uzunluğu, cinsiyet ve yaş faktörlerine göre özel formüllerle hesaplanır.<br>**Kadın ve erkek için ideal kilo aynı mıdır?**<br>Hayır, kas ve yağ dokusu farklılıkları nedeniyle cinsiyete göre hesaplama değişir.<br>**İdeal kilo tek bir sayı mıdır?**<br>Hayır, sağlıklı bir yaşam için belirli bir 'aralık' (alt ve üst sınır) olarak verilir.",
        faq_json: [
          {
            "question": "İdeal kilo neye göre belirlenir",
            "answer": "Boy uzunluğu, cinsiyet ve yaş faktörlerine göre özel formüllerle hesaplanır."
          },
          {
            "question": "Kadın ve erkek için ideal kilo aynı mıdır",
            "answer": "Hayır, kas ve yağ dokusu farklılıkları nedeniyle cinsiyete göre hesaplama değişir."
          },
          {
            "question": "İdeal kilo tek bir sayı mıdır",
            "answer": "Hayır, sağlıklı bir yaşam için belirli bir 'aralık' (alt ve üst sınır) olarak verilir."
          }
        ]
      },
      {
        name: "Çocuk BMI Hesaplama",
        slug: "cocuk-bmi-hesaplama",
        type: "hesaplama",
        description: "Çocuğunuzun gelişiminin sağlıklı ilerleyip ilerlemediğini takip edin.",
        calisma_mantigi: "BMI formülü + Yaş/Cinsiyet persentil tabloları.",
        faq_summary: "Çocuklarda BMI farklı mı?",
        longtails: "çocuk boy kilo hesaplama",
        long_description: "Çocuk BMI Hesaplama aracı, 2-18 yaş arası çocukların boy ve kilosunu yaşlarına göre persentil (yüzdelik) eğrileriyle karşılaştırarak gelişim durumunu analiz eder.",
        faq_content: "**Çocuklarda BMI hesaplaması yetişkinlerden farklı mı?**<br>Formül aynıdır (kg/m²) ancak sonuçlar yaş ve cinsiyete göre yüzdelik dilimlerle yorumlanır.<br>**Çocuklarda obezite sınırı nedir?**<br>%95 persentil ve üzeri obezite, %85-%95 arası fazla kilolu kabul edilir.",
        faq_json: [
          {
            "question": "Çocuklarda BMI hesaplaması yetişkinlerden farklı mı",
            "answer": "Formül aynıdır (kg/m²) ancak sonuçlar yaş ve cinsiyete göre yüzdelik dilimlerle yorumlanır."
          },
          {
            "question": "Çocuklarda obezite sınırı nedir",
            "answer": "%95 persentil ve üzeri obezite, %85-%95 arası fazla kilolu kabul edilir."
          }
        ]
      },
      {
        name: "Bebek Percentil Hesaplama",
        slug: "bebek-percentil-hesaplama",
        type: "hesaplama",
        description: "0–36 ay arası bebeklerin percentil değerlerini hesaplar.",
        calisma_mantigi: "WHO persentil eğrileri.",
        faq_summary: "Bebeğim kaç persentil?",
        longtails: "bebek gelişim hesaplama",
        long_description: "Bebeğinizin boy ve kilo gelişiminin yaşıtlarına göre ne durumda olduğunu Dünya Sağlık Örgütü (WHO) standartlarına göre görün.",
        faq_content: "**Percentil nedir?**<br>Bebeğinizin gelişiminin diğer bebeklere göre yüzdelik sırasıdır. %50 ortalamayı temsil eder.",
        faq_json: [
          {
            "question": "Percentil nedir",
            "answer": "Bebeğinizin gelişiminin diğer bebeklere göre yüzdelik sırasıdır. %50 ortalamayı temsil eder."
          }
        ]
      },
      {
        name: "Günlük Kalori Hesaplama",
        slug: "kalori-hesaplama",
        type: "hesaplama",
        description: "Yaş–kilo–boy–aktiviteye göre günlük kalori ihtiyacını hesaplar.",
        calisma_mantigi: "Harris-Benedict denklemi.",
        faq_summary: "Kaç kalori almalıyım?",
        longtails: "kalori ihtiyacı hesaplama",
        long_description: "Kilo vermek, almak veya formunuzu korumak için günde kaç kaloriye ihtiyacınız olduğunu öğrenin. Bazal metabolizma hızınız ve aktivite seviyenize göre kişiselleştirilmiş kalori hedefinizi belirleyin.",
        faq_content: "**Bazal metabolizma nedir?**<br>Vücudun dinlenme halindeyken hayati fonksiyonları için harcadığı enerjidir.",
        faq_json: [
          {
            "question": "Bazal metabolizma nedir",
            "answer": "Vücudun dinlenme halindeyken hayati fonksiyonları için harcadığı enerjidir."
          }
        ]
      },
      {
        name: "Su Tüketim Hesaplama",
        slug: "su-tuketimi-hesaplama",
        type: "hesaplama",
        description: "Kiloya göre günlük su ihtiyacını hesaplar.",
        calisma_mantigi: "kilo × 0.033.",
        faq_summary: "Günde kaç litre su içmeliyim?",
        longtails: "su içme hesabı",
        long_description: "Sağlıklı bir metabolizma için günde ne kadar su içmeniz gerektiğini kilonuza göre hesaplayın. Yetersiz su tüketiminin önüne geçmek için basit bir rehber.",
        faq_content: "**Standart su ihtiyacı ne kadar?**<br>Genel kabul gören yaklaşım, her 1 kg vücut ağırlığı için yaklaşık 30-35 ml sudur.",
        faq_json: [
          {
            "question": "Standart su ihtiyacı ne kadar",
            "answer": "Genel kabul gören yaklaşım, her 1 kg vücut ağırlığı için yaklaşık 30-35 ml sudur."
          }
        ]
      },
      {
        name: "Gebelik Haftası Hesaplama",
        slug: "gebelik-haftasi-hesaplama",
        type: "hesaplama",
        description: "Bebeğinizle buluşacağınız tarihi ve gebelik sürecinizi takip edin.",
        calisma_mantigi: "Son Adet Tarihi + 280 gün.",
        faq_summary: "Kaç haftalık hamileyim?",
        longtails: "gebelik hesaplama",
        long_description: "Gebelik Haftası Hesaplama aracı, son adet tarihinizi (SAT) baz alarak kaç haftalık hamile olduğunuzu ve tahmini doğum tarihinizi hesaplar.",
        faq_content: "**Gebelik haftası nasıl hesaplanır?**<br>Son adet tarihinin ilk gününden itibaren geçen süreye göre hesaplanır.<br>**Tahmini doğum tarihi nasıl bulunur?**<br>Son adet tarihine 280 gün (40 hafta) eklenerek bulunur.<br>**Ultrason tarihiyle hesaplama farklı çıkabilir mi?**<br>Evet, bebeğin gelişimine göre doktor ultrason ölçümleriyle tarihi revize edebilir.",
        faq_json: [
          {
            "question": "Gebelik haftası nasıl hesaplanır",
            "answer": "Son adet tarihinin ilk gününden itibaren geçen süreye göre hesaplanır."
          },
          {
            "question": "Tahmini doğum tarihi nasıl bulunur",
            "answer": "Son adet tarihine 280 gün (40 hafta) eklenerek bulunur."
          },
          {
            "question": "Ultrason tarihiyle hesaplama farklı çıkabilir mi",
            "answer": "Evet, bebeğin gelişimine göre doktor ultrason ölçümleriyle tarihi revize edebilir."
          }
        ]
      },
      {
        name: "Hamilelik Haftası Hesaplama",
        slug: "hamilelik-haftasi-hesaplama",
        type: "hesaplama",
        description: "Son adet tarihine göre gebelik haftasını hesaplar.",
        calisma_mantigi: "Toplam gün/7.",
        faq_summary: "Kaç haftalık hamileyim?",
        longtails: "gebelik hafta hesaplama",
        long_description: "Hamileliğinizin kaçıncı haftasında olduğunuzu ve trimester bilgilerinizi öğrenin.",
        faq_content: "**Gebelik süresi kaç haftadır?**<br>Ortalama gebelik süresi 40 haftadır.",
        faq_json: [
          {
            "question": "Gebelik süresi kaç haftadır",
            "answer": "Ortalama gebelik süresi 40 haftadır."
          }
        ]
      },
      {
        name: "Adet Dönemi Hesaplama",
        slug: "adet-donemi-hesaplama",
        type: "hesaplama",
        description: "Regl döngünüzü takip ederek planlarınızı daha rahat yapın.",
        calisma_mantigi: "Son Adet + Döngü Süresi.",
        faq_summary: "Adet döngüsü nasıl hesaplanır?",
        longtails: "regl hesaplama",
        long_description: "Adet Dönemi Hesaplama aracı, son adet tarihiniz ve ortalama döngü sürenize göre bir sonraki adet tarihinizi ve muhtemel yumurtlama günlerinizi tahmin eder.",
        faq_content: "**Adet döngüsü nasıl hesaplanır?**<br>Bir adetin başlangıcından sonraki adetin başlangıcına kadar geçen gün sayısıdır.<br>**Yumurtlama ne zaman olur?**<br>Genellikle bir sonraki adet tarihinden 14 gün önce gerçekleşir.<br>**Döngü süresi ne kadar olmalıdır?**<br>21 ile 35 gün arası sağlıklı kabul edilir.",
        faq_json: [
          {
            "question": "Adet döngüsü nasıl hesaplanır",
            "answer": "Bir adetin başlangıcından sonraki adetin başlangıcına kadar geçen gün sayısıdır."
          },
          {
            "question": "Yumurtlama ne zaman olur",
            "answer": "Genellikle bir sonraki adet tarihinden 14 gün önce gerçekleşir."
          },
          {
            "question": "Döngü süresi ne kadar olmalıdır",
            "answer": "21 ile 35 gün arası sağlıklı kabul edilir."
          }
        ]
      },
      {
        name: "Uyku Döngüsü Hesaplama",
        slug: "uyku-dongusu-hesaplama",
        type: "hesaplama",
        description: "Uyku döngüsüne göre en uygun uyuma/uyanma saatlerini hesaplar.",
        calisma_mantigi: "90 dakikalık döngü modeli.",
        faq_summary: "Kaçta uyursam dinç olurum?",
        longtails: "uyku saati hesaplama",
        long_description: "Sabah yorgun uyanmamak için doğru saatte yatın veya kalkın. İnsan vücudu 90 dakikalık uyku döngüleri halinde dinlenir; bu döngülerin tamamlandığı anlarda uyanmak güne zinde başlamanızı sağlar.",
        faq_content: "**Uyku döngüsü nedir?**<br>Yaklaşık 90 dakika süren, hafif ve derin uyku aşamalarını içeren süreçtir.",
        faq_json: [
          {
            "question": "Uyku döngüsü nedir",
            "answer": "Yaklaşık 90 dakika süren, hafif ve derin uyku aşamalarını içeren süreçtir."
          }
        ]
      },
      {
        name: "Bel Kalça Oranı Hesaplama",
        slug: "bel-kalca-orani-hesaplama",
        type: "hesaplama",
        description: "Bel/kalça oranını hesaplar.",
        calisma_mantigi: "bel/kalça.",
        faq_summary: "Oranım sağlıklı mı?",
        longtails: "bko hesaplama",
        long_description: "Vücudunuzdaki yağ dağılımının sağlığınız üzerindeki riskini ölçün. Bel çevresinin kalça çevresine oranı, kalp hastalıkları ve diyabet riski hakkında BMI'dan daha net ipuçları verebilir.",
        faq_content: "**İdeal oran kaçtır?**<br>Erkeklerde 0.90 altı, kadınlarda 0.85 altı sağlıklı kabul edilir.",
        faq_json: [
          {
            "question": "İdeal oran kaçtır",
            "answer": "Erkeklerde 0.90 altı, kadınlarda 0.85 altı sağlıklı kabul edilir."
          }
        ]
      },
];