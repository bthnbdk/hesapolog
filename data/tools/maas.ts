import { ToolData } from '../../types';

export const maasTools: ToolData[] = [
    {
        name: "Brüt - Net Maaş Hesaplama",
        slug: "brut-net-maas-hesaplama",
        type: "hesaplama",
        description: "Maaş bordronuzdaki tüm detayları şeffaflıkla inceleyin.",
        calisma_mantigi: "Brüt - (SGK + İşsizlik + Vergi + Damga) = Net.",
        faq_summary: "Net maaş kaç TL?",
        longtails: "maaş hesaplama, brüt net hesaplama",
        long_description: "Brüt - Net Maaş Hesaplama aracı, brüt maaşınızdan SGK primi, işsizlik sigortası, gelir vergisi ve damga vergisini düşerek elinize geçecek net tutarı hesaplar.",
        faq_content: "**Brüt maaş ve net maaş farkı nedir?**<br>Brüt vergisiz toplam tutar, net ise kesintiler sonrası cebe giren paradır.<br>**Gelir vergisi maaşı nasıl etkiler?**<br>Yıl içinde geliriniz arttıkça üst vergi dilimine girersiniz ve kesinti artar.<br>**İşveren maliyeti nedir?**<br>İşverenin ödediği brüt maaş + SGK işveren payı toplamıdır.",
        faq_json: [
          {
            "question": "Brüt maaş ve net maaş farkı nedir",
            "answer": "Brüt vergisiz toplam tutar, net ise kesintiler sonrası cebe giren paradır."
          },
          {
            "question": "Gelir vergisi maaşı nasıl etkiler",
            "answer": "Yıl içinde geliriniz arttıkça üst vergi dilimine girersiniz ve kesinti artar."
          },
          {
            "question": "İşveren maliyeti nedir",
            "answer": "İşverenin ödediği brüt maaş + SGK işveren payı toplamıdır."
          }
        ]
      },
      {
        name: "Maaş Hesaplama",
        slug: "maas-hesaplama",
        type: "hesaplama",
        description: "Brüt maaştan net maaşı hesaplar.",
        calisma_mantigi: "sgk + vergi + kesinti.",
        faq_summary: "Net maaş kaç TL?",
        longtails: "brüt net maaş hesaplama",
        long_description: "Güncel vergi dilimlerine göre aylık veya yıllık maaş hesaplaması yapın. Kümülatif vergi matrahının maaşınıza etkisini görün.",
        faq_content: "**Ocak ve Aralık maaşı neden farklı?**<br>Vergi dilimlerinin yükselmesi nedeniyle yıl sonunda net maaş düşebilir.",
        faq_json: [
          {
            "question": "Ocak ve Aralık maaşı neden farklı",
            "answer": "Vergi dilimlerinin yükselmesi nedeniyle yıl sonunda net maaş düşebilir."
          }
        ]
      },
      {
        name: "İşveren Maliyeti Hesaplama",
        slug: "isveren-maliyeti-hesaplama",
        type: "hesaplama",
        description: "Bir çalışanın şirketinize olan gerçek maliyetini tüm kalemleriyle hesaplayın.",
        calisma_mantigi: "Brüt + SGK İşveren (%20.5) + İşsizlik (%2).",
        faq_summary: "Personel maliyeti ne kadar?",
        longtails: "personel maliyet hesaplama",
        long_description: "İşveren Maliyeti Hesaplama aracı, brüt maaşın üzerine eklenen SGK işveren payı (%20.5) ve işsizlik sigortası işveren payını (%2) hesaplayarak toplam gideri ortaya koyar.",
        faq_content: "**İşveren maliyeti neleri kapsar?**<br>Brüt maaş, SGK işveren payı ve işsizlik sigortası işveren payını kapsar.<br>**SGK işveren payı ne kadardır?**<br>Standart oran brüt maaşın %20.5'i şeklindedir (teşviksiz).<br>**Net maaş maliyeti etkiler mi?**<br>Evet, net maaş anlaşıldıysa brüt tutar yükseleceği için maliyet de artar.",
        faq_json: [
          {
            "question": "İşveren maliyeti neleri kapsar",
            "answer": "Brüt maaş, SGK işveren payı ve işsizlik sigortası işveren payını kapsar."
          },
          {
            "question": "SGK işveren payı ne kadardır",
            "answer": "Standart oran brüt maaşın %20.5'i şeklindedir (teşviksiz)."
          },
          {
            "question": "Net maaş maliyeti etkiler mi",
            "answer": "Evet, net maaş anlaşıldıysa brüt tutar yükseleceği için maliyet de artar."
          }
        ]
      },
      {
        name: "Kıdem Tazminatı Hesaplama",
        slug: "kidem-tazminati-hesaplama",
        type: "hesaplama",
        description: "Çalışma süresi + brüt maaşa göre kıdem tazminatı hesaplar.",
        calisma_mantigi: "Her yıl için 30 günlük ücret.",
        faq_summary: "Kıdem tazminatım ne kadar?",
        longtails: "kıdem hesaplama",
        long_description: "Kıdem Tazminatı Hesaplama aracı ile işten ayrılırken hak ettiğiniz tazminat tutarını, kıdem tazminatı tavanını dikkate alarak hesaplayın.",
        faq_content: "**Kıdem tazminatı şartları nelerdir?**<br>En az 1 yıl çalışmış olmak ve haklı fesih veya işveren tarafından çıkarılma gibi şartlar gerekir.<br>**Damga vergisi kesilir mi?**<br>Evet, kıdem tazminatından sadece damga vergisi kesilir.",
        faq_json: [
          {
            "question": "Kıdem tazminatı şartları nelerdir",
            "answer": "En az 1 yıl çalışmış olmak ve haklı fesih veya işveren tarafından çıkarılma gibi şartlar gerekir."
          },
          {
            "question": "Damga vergisi kesilir mi",
            "answer": "Evet, kıdem tazminatından sadece damga vergisi kesilir."
          }
        ]
      },
      {
        name: "İhbar Tazminatı Hesaplama",
        slug: "ihbar-tazminati-hesaplama",
        type: "hesaplama",
        description: "Çalışma süresine göre ihbar süresi ve ihbar tazminatı hesaplar.",
        calisma_mantigi: "haftalık süre × brüt maaş.",
        faq_summary: "İhbar tazminatı kaç TL?",
        longtails: "ihbar hesaplama",
        long_description: "İşten çıkarma veya istifa durumunda uyulması gereken ihbar sürelerine göre ödenmesi gereken tazminatı hesaplayın.",
        faq_content: "**İhbar süresi ne kadardır?**<br>6 aydan az çalışanlar için 2 hafta, 3 yıldan fazla çalışanlar için 8 haftaya kadar çıkar.",
        faq_json: [
          {
            "question": "İhbar süresi ne kadardır",
            "answer": "6 aydan az çalışanlar için 2 hafta, 3 yıldan fazla çalışanlar için 8 haftaya kadar çıkar."
          }
        ]
      },
      {
        name: "Asgari Ücret Hesaplama",
        slug: "asgari-ucret-hesaplama",
        type: "hesaplama",
        description: "Yılın güncel asgari ücret verilerini ve işveren maliyetini inceleyin.",
        calisma_mantigi: "Yasal asgari ücret verileri.",
        faq_summary: "Asgari ücret net kaç TL?",
        longtails: "maaş zammı",
        long_description: "Asgari Ücret Hesaplama aracı, brüt asgari ücretten yapılan kesintileri ve net ele geçen tutarı güncel verilere göre sunar.",
        faq_content: "**Asgari ücretten vergi kesiliyor mu?**<br>Asgari ücretin kendisine isabet eden kısmı gelir vergisi ve damga vergisinden muaftır.<br>**Net asgari ücret nasıl bulunur?**<br>Brüt asgari ücretten sadece SGK işçi payı (%14) ve işsizlik payı (%1) düşülerek hesaplanır.",
        faq_json: [
          {
            "question": "Asgari ücretten vergi kesiliyor mu",
            "answer": "Asgari ücretin kendisine isabet eden kısmı gelir vergisi ve damga vergisinden muaftır."
          },
          {
            "question": "Net asgari ücret nasıl bulunur",
            "answer": "Brüt asgari ücretten sadece SGK işçi payı (%14) ve işsizlik payı (%1) düşülerek hesaplanır."
          }
        ]
      },
      {
        name: "Asgari Ücret Net Brüt Hesaplama",
        slug: "asgari-ucret-net-brut-hesaplama",
        type: "hesaplama",
        description: "Asgari ücretin net ve brüt hesaplamasını yapar.",
        calisma_mantigi: "Brüt – kesinti = net.",
        faq_summary: "Asgari ücret net kaç TL?",
        longtails: "asgari ücret hesaplama",
        long_description: "Net asgari ücretten brüt asgari ücrete veya tam tersine geçiş yaparak maliyet hesabı yapın.",
        faq_content: "**Brüt asgari ücret nedir?**<br>İşçinin eline geçen para ile sigorta ve vergilerin toplamıdır.",
        faq_json: [
          {
            "question": "Brüt asgari ücret nedir",
            "answer": "İşçinin eline geçen para ile sigorta ve vergilerin toplamıdır."
          }
        ]
      },
      {
        name: "Mesai Ücreti Hesaplama",
        slug: "mesai-hesaplama",
        type: "hesaplama",
        description: "Fazla mesai saatlerine göre ücret hesaplama aracı.",
        calisma_mantigi: "saatlik × %50 zamlı ücret.",
        faq_summary: "Fazla mesaim kaç TL?",
        longtails: "mesai hesaplama",
        long_description: "Normal çalışma saatleri dışında yaptığınız çalışmaların karşılığını hesaplayın. Haftalık 45 saati aşan çalışmalar %50 zamlı ödenir.",
        faq_content: "**Fazla mesai oranı nedir?**<br>Normal fazla mesai için %50 zamlı saat ücreti ödenir.",
        faq_json: [
          {
            "question": "Fazla mesai oranı nedir",
            "answer": "Normal fazla mesai için %50 zamlı saat ücreti ödenir."
          }
        ]
      },
      {
        name: "Yıllık İzin Hesaplama",
        slug: "yillik-izin-hesaplama",
        type: "hesaplama",
        description: "Çalışma yılına göre yıllık izin günlerini hesaplar.",
        calisma_mantigi: "SSK izin tablosu.",
        faq_summary: "Kaç gün yıllık iznim var?",
        longtails: "yıllık izin hesaplama",
        long_description: "Yıllık İzin Hesaplama aracı, işyerindeki kıdem yılınıza göre İş Kanunu kapsamında hak ettiğiniz ücretli izin gün sayısını belirler.",
        faq_content: "**Yıllık izin hakkı ne zaman doğar?**<br>İşe giriş tarihinden itibaren en az 1 yıl çalışmış olmak gerekir.<br>**İzin süreleri ne kadardır?**<br>1-5 yıl arası 14 gün, 5-15 yıl arası 20 gün, 15 yıl ve üzeri için 26 gündür.",
        faq_json: [
          {
            "question": "Yıllık izin hakkı ne zaman doğar",
            "answer": "İşe giriş tarihinden itibaren en az 1 yıl çalışmış olmak gerekir."
          },
          {
            "question": "İzin süreleri ne kadardır",
            "answer": "1-5 yıl arası 14 gün, 5-15 yıl arası 20 gün, 15 yıl ve üzeri için 26 gündür."
          }
        ]
      },
      {
        name: "İşsizlik Maaşı Hesaplama",
        slug: "issizlik-maasi-hesaplama",
        type: "hesaplama",
        description: "Brüt maaş ve prim gününe göre işsizlik maaşı hesaplar.",
        calisma_mantigi: "brüt × %40 + tavan sınırı.",
        faq_summary: "İşsizlik maaşı kaç TL?",
        longtails: "issizlik hesaplama",
        long_description: "İşsiz kalmanız durumunda devletten alabileceğiniz ödeneği ve süresini hesaplayın. Son 4 aylık brüt maaşınız ve son 3 yıldaki prim gün sayınız alacağınız miktarı belirler.",
        faq_content: "**İşsizlik maaşı ne kadar süre ödenir?**<br>600 gün prim için 6 ay, 900 gün için 8 ay, 1080 gün için 10 ay ödenir.<br>**Tavan ücret var mı?**<br>Evet, işsizlik maaşı brüt asgari ücretin %80'ini geçemez.",
        faq_json: [
          {
            "question": "İşsizlik maaşı ne kadar süre ödenir",
            "answer": "600 gün prim için 6 ay, 900 gün için 8 ay, 1080 gün için 10 ay ödenir."
          },
          {
            "question": "Tavan ücret var mı",
            "answer": "Evet, işsizlik maaşı brüt asgari ücretin %80'ini geçemez."
          }
        ]
      },
      {
        name: "Haftalık Maaş Hesaplama",
        slug: "haftalik-maas-hesaplama",
        type: "hesaplama",
        description: "Maaşınızın haftalık bazda ne kadara denk geldiğini görün.",
        calisma_mantigi: "Aylık maaşın, bir aydaki hafta sayısına bölünmesiyle bulunur.",
        faq_summary: "Haftalık maaş nasıl hesaplanır?",
        longtails: "haftalık ücret",
        long_description: "Haftalık Maaş Hesaplama aracı, aylık brüt veya net maaşınızı haftalık çalışma saatlerine bölerek emeğinizin haftalık karşılığını çıkarır.",
        faq_content: "**Haftalık maaş nasıl hesaplanır?**<br>Aylık maaşın, bir aydaki hafta sayısına (yaklaşık 4.3) bölünmesiyle veya saatlik ücret * haftalık saat ile bulunur.<br>**Haftalık çalışma saati kaçtır?**<br>Türkiye'de yasal haftalık çalışma süresi genel olarak 45 saattir.",
        faq_json: [
          {
            "question": "Haftalık maaş nasıl hesaplanır",
            "answer": "Aylık maaşın, bir aydaki hafta sayısına (yaklaşık 4.3) bölünmesiyle veya saatlik ücret * haftalık saat ile bulunur."
          },
          {
            "question": "Haftalık çalışma saati kaçtır",
            "answer": "Türkiye'de yasal haftalık çalışma süresi genel olarak 45 saattir."
          }
        ]
      },
      {
        name: "Saatlik Ücret Hesaplama",
        slug: "saatlik-ucret-hesaplama",
        type: "hesaplama",
        description: "Emeğinizin saatlik değerini öğrenin.",
        calisma_mantigi: "Aylık maaş / Aylık Çalışma Saati.",
        faq_summary: "Saatlik ücret nasıl hesaplanır?",
        longtails: "saatlik maaş hesaplama",
        long_description: "Saatlik Ücret Hesaplama aracı, aylık maaşınızı toplam çalışma saatinize bölerek (genellikle 225 saat) saatlik kazancınızı ve fazla mesai birim ücretinizi hesaplar.",
        faq_content: "**Saatlik ücret nasıl hesaplanır?**<br>Aylık maaş / Aylık Çalışma Saati (Genelde 30 gün * 7.5 saat = 225) formülüyle bulunur.<br>**Fazla mesai saatlik ücreti ne kadardır?**<br>Normal saatlik ücretin %50 fazlası (1.5 katı) olarak hesaplanır.",
        faq_json: [
          {
            "question": "Saatlik ücret nasıl hesaplanır",
            "answer": "Aylık maaş / Aylık Çalışma Saati (Genelde 30 gün * 7.5 saat = 225) formülüyle bulunur."
          },
          {
            "question": "Fazla mesai saatlik ücreti ne kadardır",
            "answer": "Normal saatlik ücretin %50 fazlası (1.5 katı) olarak hesaplanır."
          }
        ]
      },
      {
        name: "Günlük Ücret Hesaplama",
        slug: "gunluk-ucret-hesaplama",
        type: "hesaplama",
        description: "Bir günlük çalışmanızın karşılığını net olarak görün.",
        calisma_mantigi: "Aylık sabit maaş 30'a bölünerek günlük tutar bulunur.",
        faq_summary: "Günlük ücret nasıl hesaplanır?",
        longtails: "günlük yevmiye hesaplama",
        long_description: "Günlük Ücret Hesaplama aracı, aylık maaşınızı 30 güne bölerek günlük brüt ve net kazancınızı belirler. SGK bildirimleri ve rapor parası hesaplamalarında temel veridir.",
        faq_content: "**Günlük ücret nasıl hesaplanır?**<br>Aylık sabit maaş 30'a bölünerek günlük tutar bulunur.<br>**Ay 31 çekse de 30'a mı bölünür?**<br>SGK ve maaş hesaplamalarında ay genellikle standart 30 gün kabul edilir.",
        faq_json: [
          {
            "question": "Günlük ücret nasıl hesaplanır",
            "answer": "Aylık sabit maaş 30'a bölünerek günlük tutar bulunur."
          },
          {
            "question": "Ay 31 çekse de 30'a mı bölünür",
            "answer": "SGK ve maaş hesaplamalarında ay genellikle standart 30 gün kabul edilir."
          }
        ]
      },
      {
        name: "Arabuluculuk Tazminat Hesaplama",
        slug: "arabuluculuk-tazminat-hesaplama",
        type: "hesaplama",
        description: "Fesih, işe iade ve alacak davalarında tazminatı hesaplar.",
        calisma_mantigi: "brüt maaş × süre çarpanı.",
        faq_summary: "Arabuluculuk tazminatı kaç TL?",
        longtails: "tazminat hesaplama",
        long_description: "İş davalarında zorunlu arabuluculuk sürecinde talep edebileceğiniz veya ödemeniz gereken kıdem, ihbar ve diğer alacak kalemlerini hesaplayın.",
        faq_content: "**Arabuluculuk zorunlu mu?**<br>Evet, işçi-işveren uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak zorunludur.",
        faq_json: [
          {
            "question": "Arabuluculuk zorunlu mu",
            "answer": "Evet, işçi-işveren uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak zorunludur."
          }
        ]
      },
      {
        name: "AGİ Hesaplama",
        slug: "agi-hesaplama",
        type: "hesaplama",
        description: "Eski AGİ sistemine göre (2022 öncesi) vergi indirimi hesaplar.",
        calisma_mantigi: "AGİ tablosu uygulanır.",
        faq_summary: "AGİ ne kadardı?",
        longtails: "agi hesaplama",
        long_description: "2022 yılı öncesinde uygulanan Asgari Geçim İndirimi (AGİ) tutarlarını, medeni durum ve çocuk sayısına göre geçmişe dönük hesaplayın.",
        faq_content: "**AGİ hala var mı?**<br>Hayır, 2022 itibarıyla asgari ücretin vergiden muaf tutulmasıyla AGİ uygulaması kaldırılmıştır.",
        faq_json: [
          {
            "question": "AGİ hala var mı",
            "answer": "Hayır, 2022 itibarıyla asgari ücretin vergiden muaf tutulmasıyla AGİ uygulaması kaldırılmıştır."
          }
        ]
      },
      {
        name: "SGK Prim Gün Hesaplama",
        slug: "sgk-prim-gun-hesaplama",
        type: "hesaplama",
        description: "Mevcut prim gününe göre eksik gün ve kalan süreyi hesaplar.",
        calisma_mantigi: "Prim tablosu.",
        faq_summary: "Kaç prim günüm var?",
        longtails: "sgk gün hesaplama",
        long_description: "Emeklilik için gerekli olan prim gün sayınızı, hizmet dökümünüzdeki verilerle karşılaştırarak ne kadar eksiğiniz olduğunu görün.",
        faq_content: "**Askerlik borçlanması günü artırır mı?**<br>Evet, askerlik süresini borçlanarak prim gün sayısına ekleyebilirsiniz.",
        faq_json: [
          {
            "question": "Askerlik borçlanması günü artırır mı",
            "answer": "Evet, askerlik süresini borçlanarak prim gün sayısına ekleyebilirsiniz."
          }
        ]
      },
      {
        name: "SGK Primi Hesaplama",
        slug: "sgk-primi-hesaplama",
        type: "hesaplama",
        description: "Maaşınızdan kesilen sigorta priminin detaylarını öğrenin.",
        calisma_mantigi: "Brüt ücret üzerinden %14 işçi payı ve %1 işsizlik.",
        faq_summary: "SGK işçi payı ne kadardır?",
        longtails: "sgk kesinti hesaplama",
        long_description: "SGK Primi Hesaplama aracı, brüt ücret üzerinden %14 işçi payı ve %1 işsizlik sigortası payını hesaplar; ayrıca işveren payını da gösterir.",
        faq_content: "**SGK işçi payı ne kadardır?**<br>Brüt maaşın %14'ü işçi sigorta primi, %1'i ise işsizlik sigortası payı olarak kesilir.<br>**Emeklilerden prim kesilir mi?**<br>Emekli çalışanlardan normal prim yerine Sosyal Güvenlik Destek Primi (SGDP) kesilir.",
        faq_json: [
          {
            "question": "SGK işçi payı ne kadardır",
            "answer": "Brüt maaşın %14'ü işçi sigorta primi, %1'i ise işsizlik sigortası payı olarak kesilir."
          },
          {
            "question": "Emeklilerden prim kesilir mi",
            "answer": "Emekli çalışanlardan normal prim yerine Sosyal Güvenlik Destek Primi (SGDP) kesilir."
          }
        ]
      },
      {
        name: "Emekli Maaşı Hesaplama",
        slug: "emekli-maasi-hesaplama",
        type: "hesaplama",
        description: "Emekliliğinizde ne kadar maaş alacağınızı tahmin edin.",
        calisma_mantigi: "Aylık Bağlama Oranı (ABO) ve Prim.",
        faq_summary: "Emekli maaşı neye göre belirlenir?",
        longtails: "emekli aylığı hesaplama",
        long_description: "Emekli Maaşı Hesaplama aracı, toplam prim gününüz, kazanç tutarlarınız ve aylık bağlama oranınıza (ABO) göre yaklaşık emekli aylığınızı simüle eder.",
        faq_content: "**Emekli maaşı neye göre belirlenir?**<br>Çalışma hayatı boyunca yatırılan primlerin tutarı, prim gün sayısı ve aylık bağlama oranı belirleyicidir.<br>**Prim günü artarsa maaş artar mı?**<br>Yüksek tavandan ödenen primler maaşı artırır, ancak asgari ücretten yatan fazla günler maaşı düşürebilir.",
        faq_json: [
          {
            "question": "Emekli maaşı neye göre belirlenir",
            "answer": "Çalışma hayatı boyunca yatırılan primlerin tutarı, prim gün sayısı ve aylık bağlama oranı belirleyicidir."
          },
          {
            "question": "Prim günü artarsa maaş artar mı",
            "answer": "Yüksek tavandan ödenen primler maaşı artırır, ancak asgari ücretten yatan fazla günler maaşı düşürebilir."
          }
        ]
      },
      {
        name: "Yemek Parası Hesaplama",
        slug: "yemek-parasi-hesaplama",
        type: "hesaplama",
        description: "Aylık yemek ücreti istisnalarını ve net ödemeyi hesaplayın.",
        calisma_mantigi: "Günlük Tutar * Gün Sayısı.",
        faq_summary: "Yemek parası nakit verilirse vergi kesilir mi?",
        longtails: "yemek ücreti hesaplama",
        long_description: "Yemek Parası Hesaplama aracı, günlük yemek bedeli ve çalışılan gün sayısına göre personele ödenecek veya karta yüklenecek tutarı belirler.",
        faq_content: "**Yemek parası nakit verilirse vergi kesilir mi?**<br>Belirlenen günlük istisna tutarını aşan kısımlar gelir vergisine tabidir.<br>**Yemek kartı (Ticket/Sodexo) avantajlı mı?**<br>Yemek kartı ödemelerinde belirli sınıra kadar vergi ve SGK primi istisnası uygulanır.",
        faq_json: [
          {
            "question": "Yemek parası nakit verilirse vergi kesilir mi",
            "answer": "Belirlenen günlük istisna tutarını aşan kısımlar gelir vergisine tabidir."
          },
          {
            "question": "Yemek kartı (Ticket/Sodexo) avantajlı mı",
            "answer": "Yemek kartı ödemelerinde belirli sınıra kadar vergi ve SGK primi istisnası uygulanır."
          }
        ]
      },
      {
        name: "Yol Ücreti Hesaplama",
        slug: "yol-ucreti-hesaplama",
        type: "hesaplama",
        description: "İşe gidiş geliş maliyetinizi veya personelin yol masrafını hesaplayın.",
        calisma_mantigi: "Bilet/Yakıt * Gün Sayısı.",
        faq_summary: "Yol ücreti nakit ödenirse vergi var mı?",
        longtails: "yol parası hesaplama",
        long_description: "Yol Ücreti Hesaplama aracı, toplu taşıma bilet fiyatları veya araç yakıt giderleri üzerinden aylık toplam ulaşım bütçesini çıkarır.",
        faq_content: "**Yol ücreti nakit ödenirse vergi var mı?**<br>Evet, nakit ödenen yol paraları ücrete dahil edilip vergilendirilir; ancak servis veya toplu taşıma kartı verilmesi durumunda istisnalar vardır.",
        faq_json: [
          {
            "question": "Yol ücreti nakit ödenirse vergi var mı",
            "answer": "Evet, nakit ödenen yol paraları ücrete dahil edilip vergilendirilir; ancak servis veya toplu taşıma kartı verilmesi durumunda istisnalar vardır."
          }
        ]
      },
      {
        name: "Haftalık Çalışma Süresi Hesaplama",
        slug: "haftalik-calisma-suresi-hesaplama",
        type: "hesaplama",
        description: "Mesai saatlerinizi ve fazla çalışmanızı kontrol altında tutun.",
        calisma_mantigi: "Günlük saatlerin toplamı.",
        faq_summary: "Haftalık yasal çalışma süresi ne kadardır?",
        longtails: "çalışma saati hesaplama",
        long_description: "Haftalık Çalışma Süresi Hesaplama aracı, gün gün girdiğiniz çalışma saatlerini toplayarak 45 saatlik yasal sınırı aşıp aşmadığınızı gösterir.",
        faq_content: "**Haftalık yasal çalışma süresi ne kadardır?**<br>İş Kanunu'na göre haftalık çalışma süresi en çok 45 saattir.<br>**45 saati aşan çalışmalar ne olur?**<br>Aşan kısımlar fazla mesai (overtime) olarak değerlendirilir ve zamlı ödenir.",
        faq_json: [
          {
            "question": "Haftalık yasal çalışma süresi ne kadardır",
            "answer": "İş Kanunu'na göre haftalık çalışma süresi en çok 45 saattir."
          },
          {
            "question": "45 saati aşan çalışmalar ne olur",
            "answer": "Aşan kısımlar fazla mesai (overtime) olarak değerlendirilir ve zamlı ödenir."
          }
        ]
      },
      {
        name: "Haftalık İzin Hesaplama",
        slug: "haftalik-izin-hesaplama",
        type: "hesaplama",
        description: "Hafta tatili hakkınızı ve ücret durumunu öğrenin.",
        calisma_mantigi: "Yasal hafta tatili kontrolü.",
        faq_summary: "Haftalık izin kaç gündür?",
        longtails: "hafta tatili izni",
        long_description: "Haftalık İzin Hesaplama aracı, çalışanın kanuni hakkı olan 24 saatlik kesintisiz dinlenme süresini (hafta tatili) ve bu güne denk gelen ücret haklarını açıklar.",
        faq_content: "**Haftalık izin (hafta tatili) kaç gündür?**<br>Haftada en az 1 gün (24 saat) kesintisiz izin hakkı vardır.<br>**Hafta tatilinde ücret ödenir mi?**<br>Evet, çalışılmayan hafta tatili günü için işveren tam yevmiye ödemek zorundadır.",
        faq_json: [
          {
            "question": "Haftalık izin (hafta tatili) kaç gündür",
            "answer": "Haftada en az 1 gün (24 saat) kesintisiz izin hakkı vardır."
          },
          {
            "question": "Hafta tatilinde ücret ödenir mi",
            "answer": "Evet, çalışılmayan hafta tatili günü için işveren tam yevmiye ödemek zorundadır."
          }
        ]
      },
];