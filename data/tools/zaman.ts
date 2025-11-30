import { ToolData } from '../../types';

export const zamanTools: ToolData[] = [
    {
        name: "Yaş Hesaplama",
        slug: "yas-hesaplama",
        type: "hesaplama",
        description: "Doğum tarihinden bugüne kadar geçen tam yaşı hesaplar.",
        calisma_mantigi: "Gün/ay/yıl farkı alınarak hesaplanır.",
        faq_summary: "Kaç yaşındayım?; Yaş nasıl hesaplanır?",
        longtails: "yaş hesaplama, doğum tarihinden yaş bulma",
        long_description: "Tam olarak kaç yaşındasınız? Yaş Hesaplama aracı, doğum tarihinizi bugünün tarihiyle kıyaslayarak sadece yıl değil; ay, gün ve hatta saat detayında ne kadar süredir hayatta olduğunuzu hesaplar.",
        faq_content: "**Yaş tam olarak nasıl hesaplanır?**<br>Bugünün tarihinden doğum tarihi çıkarılarak yıl, ay ve gün farkı alınır.<br>**Gelecekteki bir tarihte kaç yaşında olacağımı görebilir miyim?**<br>Evet, hedef tarihi değiştirerek gelecekteki yaşınızı hesaplayabilirsiniz.<br>**Bir sonraki doğum günüm ne zaman?**<br>Araç, doğum gününüze kalan gün sayısını da gösterir.",
        faq_json: [
          {
            "question": "Yaş tam olarak nasıl hesaplanır",
            "answer": "Bugünün tarihinden doğum tarihi çıkarılarak yıl, ay ve gün farkı alınır."
          },
          {
            "question": "Gelecekteki bir tarihte kaç yaşında olacağımı görebilir miyim",
            "answer": "Evet, hedef tarihi değiştirerek gelecekteki yaşınızı hesaplayabilirsiniz."
          },
          {
            "question": "Bir sonraki doğum günüm ne zaman",
            "answer": "Araç, doğum gününüze kalan gün sayısını da gösterir."
          }
        ]
      },
      {
        name: "Gün Sayısı Hesaplama",
        slug: "gun-sayisi-hesaplama",
        type: "hesaplama",
        description: "Belirli bir süre zarfında kaç gün geçtiğini basitçe hesaplayın.",
        calisma_mantigi: "Başlangıç ve bitiş tarihi arasındaki fark mutlak gün sayısı olarak verilir.",
        faq_summary: "Kaç gün geçtiği nasıl bulunur?",
        longtails: "gün sayısı hesaplama",
        long_description: "Belirli bir süre zarfında kaç gün geçtiğini basitçe hesaplayın. Gün Sayısı Hesaplama aracı, iki tarih arasındaki toplam günü vererek tatil, kira veya vize süresi hesaplamalarınızı kolaylaştırır.",
        faq_content: "**Kaç gün geçtiği nasıl bulunur?**<br>Başlangıç ve bitiş tarihi arasındaki fark mutlak gün sayısı olarak verilir.<br>**Artık yıllar hesaba katılır mı?**<br>Evet, Şubat ayının 29 çektiği yıllar otomatik olarak hesaba dahil edilir.",
        faq_json: [
          {
            "question": "Kaç gün geçtiği nasıl bulunur",
            "answer": "Başlangıç ve bitiş tarihi arasındaki fark mutlak gün sayısı olarak verilir."
          },
          {
            "question": "Artık yıllar hesaba katılır mı",
            "answer": "Evet, Şubat ayının 29 çektiği yıllar otomatik olarak hesaba dahil edilir."
          }
        ]
      },
      {
        name: "Tarih Ekleme Hesaplama",
        slug: "tarih-ekleme-hesaplama",
        type: "hesaplama",
        description: "Bir tarihe gün, hafta veya ay ekleyerek vade sonunu veya teslim tarihini bulun.",
        calisma_mantigi: "tarih ± n gün.",
        faq_summary: "Tarihe 40 gün ekleyince ne olur?",
        longtails: "tarih hesaplama",
        long_description: "Tarih Ekleme Hesaplama aracı, iş takibi ve resmi süre hesaplamalarında takvim yapraklarını saymadan kesin sonucu verir.",
        faq_content: "**Tarih ekleme işlemi nasıl yapılır?**<br>Başlangıç tarihine istenen gün/ay/yıl sayısı eklenerek yeni tarih bulunur.<br>**Ay eklerken gün sayısı sorun olur mu?**<br>Evet, araç ayların çektiği gün sayısını (28, 30, 31) otomatik dikkate alır.<br>**Geriye dönük hesaplama yapılır mı?**<br>Negatif değer girerek veya çıkarma aracını kullanarak geçmiş tarih de bulunabilir.",
        faq_json: [
          {
            "question": "Tarih ekleme işlemi nasıl yapılır",
            "answer": "Başlangıç tarihine istenen gün/ay/yıl sayısı eklenerek yeni tarih bulunur."
          },
          {
            "question": "Ay eklerken gün sayısı sorun olur mu",
            "answer": "Evet, araç ayların çektiği gün sayısını (28, 30, 31) otomatik dikkate alır."
          },
          {
            "question": "Geriye dönük hesaplama yapılır mı",
            "answer": "Negatif değer girerek veya çıkarma aracını kullanarak geçmiş tarih de bulunabilir."
          }
        ]
      },
      {
        name: "Tarih Çıkarma Hesaplama",
        slug: "tarih-cikarma-hesaplama",
        type: "hesaplama",
        description: "Geçmişteki bir tarihi bulmak veya süreyi geri sarmak için kullanın.",
        calisma_mantigi: "Seçilen tarihten geriye doğru sayılarak denk gelen gün bulunur.",
        faq_summary: "Tarihten gün nasıl çıkarılır?",
        longtails: "tarih çıkarma",
        long_description: "Tarih Çıkarma Hesaplama aracı, bir tarihten belirli gün, ay veya yıl çıkararak referans tarihi belirlemenizi sağlar.",
        faq_content: "**Tarihten gün nasıl çıkarılır?**<br>Seçilen tarihten geriye doğru sayılarak denk gelen gün bulunur.<br>**Bu araç ne işe yarar?**<br>Sözleşme başlangıçlarını bulma, geçmiş olayların tarihini teyit etme gibi işlemlerde kullanılır.",
        faq_json: [
          {
            "question": "Tarihten gün nasıl çıkarılır",
            "answer": "Seçilen tarihten geriye doğru sayılarak denk gelen gün bulunur."
          },
          {
            "question": "Bu araç ne işe yarar",
            "answer": "Sözleşme başlangıçlarını bulma, geçmiş olayların tarihini teyit etme gibi işlemlerde kullanılır."
          }
        ]
      },
      {
        name: "Tarih Farkı Hesaplama",
        slug: "tarih-farki-hesaplama",
        type: "hesaplama",
        description: "İki tarih arasında tam olarak ne kadar zaman geçtiğini öğrenin.",
        calisma_mantigi: "tarih farkı formülü.",
        faq_summary: "İki tarih arası gün sayısı nasıl hesaplanır?",
        longtails: "tarih aralığı hesaplama",
        long_description: "Tarih Farkı Hesaplama aracı, başlangıç ve bitiş tarihleri arasındaki süreyi yıl, ay ve gün cinsinden detaylı olarak hesaplar.",
        faq_content: "**İki tarih arası gün sayısı nasıl hesaplanır?**<br>Tarihlerin zaman damgaları arasındaki fark alınıp güne çevrilir.<br>**Sadece iş günlerini hesaplar mı?**<br>Hayır, bu araç tüm takvim günlerini sayar; iş günü hesabı için diğer aracı kullanmalısınız.<br>**Doğum günü farkı hesaplanır mı?**<br>Evet, iki kişinin doğum tarihleri girilerek yaş farkı gün bazında bulunabilir.",
        faq_json: [
          {
            "question": "İki tarih arası gün sayısı nasıl hesaplanır",
            "answer": "Tarihlerin zaman damgaları arasındaki fark alınıp güne çevrilir."
          },
          {
            "question": "Sadece iş günlerini hesaplar mı",
            "answer": "Hayır, bu araç tüm takvim günlerini sayar; iş günü hesabı için diğer aracı kullanmalısınız."
          },
          {
            "question": "Doğum günü farkı hesaplanır mı",
            "answer": "Evet, iki kişinin doğum tarihleri girilerek yaş farkı gün bazında bulunabilir."
          }
        ]
      },
      {
        name: "İki Tarih Arası Hesaplama",
        slug: "iki-tarih-arasi-hesaplama",
        type: "hesaplama",
        description: "İki tarih arasındaki farkı gün/ay/yıl olarak hesaplar.",
        calisma_mantigi: "tarih farkı formülü.",
        faq_summary: "İki tarih arasında kaç gün var?",
        longtails: "gün hesaplama",
        long_description: "İki tarih arasındaki süreyi hesaplayın. Tam gün sayısı, hafta sayısı veya yıl/ay/gün detayında sonuç alın.",
        faq_content: "**Süreye başlangıç günü dahil mi?**<br>Genellikle süre hesaplamalarında ilk gün hariç, son gün dahil edilir (süre mantığı).",
        faq_json: [
          {
            "question": "Süreye başlangıç günü dahil mi",
            "answer": "Genellikle süre hesaplamalarında ilk gün hariç, son gün dahil edilir (süre mantığı)."
          }
        ]
      },
      {
        name: "İş Günü Hesaplama",
        slug: "is-gunu-hesaplama",
        type: "hesaplama",
        description: "Proje planlaması yaparken hafta sonlarını ve tatilleri dışarıda tutun.",
        calisma_mantigi: "Toplam Gün - Hafta Sonları - Tatiller.",
        faq_summary: "İş günü nasıl hesaplanır?",
        longtails: "iş günü sayısı",
        long_description: "İş Günü Hesaplama aracı, iki tarih arasındaki resmi çalışma günlerini sayar ve dilerseniz bayram tatillerini de hesaptan düşer.",
        faq_content: "**İş günü nasıl hesaplanır?**<br>Toplam gün sayısından hafta sonları (Cumartesi-Pazar) ve resmi tatiller çıkarılır.<br>**Cumartesi iş günü sayılır mı?**<br>Türkiye'de genel uygulamada Cumartesi tatil kabul edilir, ancak manuel ayarlanabilir.<br>**Resmi tatiller otomatik düşülür mü?**<br>Genel tatiller tanımlıdır ancak özel tatilleri manuel ekleyebilirsiniz.",
        faq_json: [
          {
            "question": "İş günü nasıl hesaplanır",
            "answer": "Toplam gün sayısından hafta sonları (Cumartesi-Pazar) ve resmi tatiller çıkarılır."
          },
          {
            "question": "Cumartesi iş günü sayılır mı",
            "answer": "Türkiye'de genel uygulamada Cumartesi tatil kabul edilir, ancak manuel ayarlanabilir."
          },
          {
            "question": "Resmi tatiller otomatik düşülür mü",
            "answer": "Genel tatiller tanımlıdır ancak özel tatilleri manuel ekleyebilirsiniz."
          }
        ]
      },
      {
        name: "Tarih Hesaplama",
        slug: "tarih-hesaplama",
        type: "hesaplama",
        description: "İki tarih arasındaki süreyi hesaplamak veya bir tarihe gün, ay, yıl ekleyip çıkarmak için pratik bir araçtır.",
        calisma_mantigi: "İki tarih arasındaki farkı hesaplar veya belirli bir tarihe istenen süreyi ekler/çıkarır.",
        faq_summary: "Tarih farkı nasıl bulunur?; Tarihe gün ekleme nasıl yapılır?",
        longtails: "tarih hesaplama, gün hesaplama, tarih farkı hesaplama, tarih ekleme, vade hesaplama",
        long_description: "Zamanla ilgili tüm hesaplamalarınızı tek bir yerde toplayın. Tarih Hesaplama aracı, iki farklı tarih arasındaki tam süreyi (yıl, ay, gün olarak) bulmanızı sağlar. Ayrıca, belirli bir tarihten ileri veya geri giderek yeni bir tarih belirlemek (örneğin, 90 gün sonrası veya 6 ay öncesi) için de kullanabilirsiniz. Proje teslim tarihlerini, sözleşme vadelerini veya özel günler arasındaki zamanı hatasız bir şekilde hesaplayın.",
        faq_content: "**İki tarih arasındaki fark nasıl hesaplanır?**<br>Bitiş tarihinden başlangıç tarihi çıkarılarak aradaki tam gün, ay ve yıl bulunur.<br>**Bir tarihe nasıl gün eklenir?**<br>Başlangıç tarihine eklenmek istenen gün sayısı takvim üzerinde ilerletilerek yeni tarih bulunur; araç bunu otomatik yapar.<br>**Artık yıllar (Şubat'ın 29 çekmesi) hesaba katılır mı?**<br>Evet, tüm hesaplamalar artık yılları ve ayların farklı gün sayılarını (30, 31, 28) otomatik olarak dikkate alır.",
        faq_json: [
            {
                "question": "İki tarih arasındaki fark nasıl hesaplanır",
                "answer": "Bitiş tarihinden başlangıç tarihi çıkarılarak aradaki tam gün, ay ve yıl bulunur."
            },
            {
                "question": "Bir tarihe nasıl gün eklenir",
                "answer": "Başlangıç tarihine eklenmek istenen gün sayısı takvim üzerinde ilerletilerek yeni tarih bulunur; araç bunu otomatik yapar."
            },
            {
                "question": "Artık yıllar (Şubat'ın 29 çekmesi) hesaba katılır mı",
                "answer": "Evet, tüm hesaplamalar artık yılları ve ayların farklı gün sayılarını (30, 31, 28) otomatik olarak dikkate alır."
            }
        ]
      },
      {
        name: "İş Günü Ekleme Hesaplama",
        slug: "is-gunu-ekleme-hesaplama",
        type: "hesaplama",
        description: "Teslim tarihini belirlerken hafta sonlarını atlayın.",
        calisma_mantigi: "Resmi sürelerin hangi tarihte dolacağını hafta sonlarını atlayarak bulur.",
        faq_summary: "İş günü ekleme ne işe yarar?",
        longtails: "iş günü ekleme",
        long_description: "İş Günü Ekleme Hesaplama aracı, bir başlangıç tarihine sadece 'çalışma günlerini' ekleyerek projenin veya yasal sürenin biteceği gerçek tarihi bulur.",
        faq_content: "**İş günü ekleme ne işe yarar?**<br>Resmi sürelerin (örn: 15 iş günü itiraz süresi) hangi tarihte dolacağını hafta sonlarını atlayarak bulur.<br>**Tatiller hesaba katılır mı?**<br>Sistem hafta sonlarını otomatik atlar, resmi tatilleri manuel ekleyebilirsiniz.",
        faq_json: [
          {
            "question": "İş günü ekleme ne işe yarar",
            "answer": "Resmi sürelerin (örn: 15 iş günü itiraz süresi) hangi tarihte dolacağını hafta sonlarını atlayarak bulur."
          },
          {
            "question": "Tatiller hesaba katılır mı",
            "answer": "Sistem hafta sonlarını otomatik atlar, resmi tatilleri manuel ekleyebilirsiniz."
          }
        ]
      },
      {
        name: "Hafta Hesaplama",
        slug: "hafta-hesaplama",
        type: "hesaplama",
        description: "Yılın kaçıncı haftasında olduğumuzu veya belirli bir tarihin hafta numarasını öğrenin.",
        calisma_mantigi: "ISO-8601 hafta numarası.",
        faq_summary: "Hafta numarası nasıl belirlenir?",
        longtails: "kaçıncı hafta",
        long_description: "Hafta Hesaplama aracı, ISO standartlarına göre takvim haftalarını ve proje terminlerini takip etmenizi sağlar.",
        faq_content: "**Hafta numarası nasıl belirlenir?**<br>Yılın ilk haftasından başlayarak 52 veya 53 haftalık sisteme göre belirlenir (ISO standardı).<br>**Bir yılda kaç hafta vardır?**<br>Genellikle 52 hafta, bazı yıllarda ise 53 hafta bulunur.",
        faq_json: [
          {
            "question": "Hafta numarası nasıl belirlenir",
            "answer": "Yılın ilk haftasından başlayarak 52 veya 53 haftalık sisteme göre belirlenir (ISO standardı)."
          },
          {
            "question": "Bir yılda kaç hafta vardır",
            "answer": "Genellikle 52 hafta, bazı yıllarda ise 53 hafta bulunur."
          }
        ]
      },
      {
        name: "Saat Farkı Hesaplama",
        slug: "saat-farki-hesaplama",
        type: "hesaplama",
        description: "İki zaman dilimi arasındaki süreyi dakika ve saat cinsinden ölçün.",
        calisma_mantigi: "Saat2 - Saat1.",
        faq_summary: "Saat farkı nasıl hesaplanır?",
        longtails: "saat hesaplama",
        long_description: "Saat Farkı Hesaplama aracı, mesai saatlerini hesaplamak veya iki olay arasındaki net süreyi bulmak için idealdir.",
        faq_content: "**Saat farkı nasıl hesaplanır?**<br>Başlangıç ve bitiş saati arasındaki dakika farkı bulunup saate çevrilir.<br>**Gece yarısını geçen süreler hesaplanır mı?**<br>Evet, gün değişimi olsa bile 24 saat formatına göre doğru fark bulunur.",
        faq_json: [
          {
            "question": "Saat farkı nasıl hesaplanır",
            "answer": "Başlangıç ve bitiş saati arasındaki dakika farkı bulunup saate çevrilir."
          },
          {
            "question": "Gece yarısını geçen süreler hesaplanır mı",
            "answer": "Evet, gün değişimi olsa bile 24 saat formatına göre doğru fark bulunur."
          }
        ]
      },
      {
        name: "Dakika Hesaplama",
        slug: "dakika-hesaplama",
        type: "hesaplama",
        description: "Zaman birimlerini birbirine en hızlı şekilde dönüştürün.",
        calisma_mantigi: "Saat * 60 = Dakika.",
        faq_summary: "90 dakika kaç saattir?",
        longtails: "dakika çevirme",
        long_description: "Dakika Hesaplama aracı; saatleri dakikaya, dakikaları saniyeye veya tam tersine çevirerek zaman planlamanızı kolaylaştırır.",
        faq_content: "**90 dakika kaç saattir?**<br>90 / 60 işlemiyle 1.5 saat olduğu bulunur.<br>**Saniye dakikaya nasıl çevrilir?**<br>Toplam saniye 60'a bölünerek dakika değeri elde edilir.",
        faq_json: [
          {
            "question": "90 dakika kaç saattir",
            "answer": "90 / 60 işlemiyle 1.5 saat olduğu bulunur."
          },
          {
            "question": "Saniye dakikaya nasıl çevrilir",
            "answer": "Toplam saniye 60'a bölünerek dakika değeri elde edilir."
          }
        ]
      },
      {
        name: "Emeklilik Yaşı Hesaplama",
        slug: "emeklilik-yasi-hesaplama",
        type: "hesaplama",
        description: "Ne zaman emekli olacağınızı bugünkü mevzuata göre öğrenin.",
        calisma_mantigi: "SGK tablosu (Yaş + Prim + Yıl).",
        faq_summary: "Ne zaman emekli olurum?",
        longtails: "ssk emeklilik hesaplama",
        long_description: "Emeklilik Yaşı Hesaplama aracı, SGK giriş tarihiniz, prim gününüz ve cinsiyetinize göre emeklilik yaşınızı ve kalan sürenizi hesaplar. EYT (Emeklilikte Yaşa Takılanlar) kapsamı ve prim eksikliği durumlarını değerlendirmenize yardımcı olur.",
        faq_content: "**Emeklilik tarihi neye göre belirlenir?**<br>İlk sigorta giriş tarihi, toplam prim günü ve yaş şartına göre belirlenir.<br>**EYT kimleri kapsar?**<br>8 Eylül 1999 ve öncesinde sigorta girişi olanları kapsar.<br>**3600 günle emeklilik mümkün mü?**<br>Evet, belirli yaş şartlarını sağlamak kaydıyla kısmi emeklilik hakkı vardır.",
        faq_json: [
          {
            "question": "Emeklilik tarihi neye göre belirlenir",
            "answer": "İlk sigorta giriş tarihi, toplam prim günü ve yaş şartına göre belirlenir."
          },
          {
            "question": "EYT kimleri kapsar",
            "answer": "8 Eylül 1999 ve öncesinde sigorta girişi olanları kapsar."
          },
          {
            "question": "3600 günle emeklilik mümkün mü",
            "answer": "Evet, belirli yaş şartlarını sağlamak kaydıyla kısmi emeklilik hakkı vardır."
          }
        ]
      },
      {
        name: "EYT Prim Hesaplama",
        slug: "eyt-prim-hesaplama",
        type: "hesaplama",
        description: "EYT için gereken prim gününü ve eksik gün hesabını yapar.",
        calisma_mantigi: "SSK/BAĞKUR tablo kontrolü.",
        faq_summary: "EYT için kaç gün lazım?",
        longtails: "eyt hesaplama",
        long_description: "EYT kapsamında emekli olabilmek için gereken 5000 - 5975 gün prim şartını sağlayıp sağlamadığınızı kontrol edin.",
        faq_content: "**EYT'de yaş şartı var mı?**<br>Hayır, 1999 öncesi girişlilerde yaş şartı kaldırılmıştır, sadece prim ve yıl şartı vardır.",
        faq_json: [
          {
            "question": "EYT'de yaş şartı var mı",
            "answer": "Hayır, 1999 öncesi girişlilerde yaş şartı kaldırılmıştır, sadece prim ve yıl şartı vardır."
          }
        ]
      },
];