import { ToolData } from '../../types';

export const egitimTools: ToolData[] = [
    {
        name: "Puan Hesaplama",
        slug: "puan-hesaplama",
        type: "hesaplama",
        description: "Sınav başarınızı veya performansınızı puanlayın.",
        calisma_mantigi: "Doğru * Katsayı - Yanlış Götürüsü.",
        faq_summary: "Sınav puanı nasıl hesaplanır?",
        longtails: "sınav puan hesaplama",
        long_description: "Puan Hesaplama aracı, doğru-yanlış sayılarınız ve derslerin katsayıları (ağırlıkları) üzerinden toplam sınav puanınızı ve başarı yüzdemizi hesaplar.",
        faq_content: "**Sınav puanı nasıl hesaplanır?**<br>(Doğru Sayısı * Katsayı) formülüyle veya netler üzerinden taban puan eklenerek hesaplanır.<br>**Ağırlıklı puan nedir?**<br>Bazı derslerin veya soruların puana etkisinin (katsayısının) diğerlerinden daha yüksek olduğu sistemdir.",
        faq_json: [
          {
            "question": "Sınav puanı nasıl hesaplanır",
            "answer": "(Doğru Sayısı * Katsayı) formülüyle veya netler üzerinden taban puan eklenerek hesaplanır."
          },
          {
            "question": "Ağırlıklı puan nedir",
            "answer": "Bazı derslerin veya soruların puana etkisinin (katsayısının) diğerlerinden daha yüksek olduğu sistemdir."
          }
        ]
      },
      {
        name: "Not Hesaplama",
        slug: "not-hesaplama",
        type: "hesaplama",
        description: "Dönem sonu karnenizi veya geçme notunuzu önceden görün.",
        calisma_mantigi: "Notların ağırlıklı ortalamasını alır.",
        faq_summary: "Not ortalaması nasıl hesaplanır?",
        longtails: "not ortalaması hesaplama",
        long_description: "Not Hesaplama aracı, sınav notlarınızın ortalamasını alarak veya ders kredilerine göre ağırlıklı genel not ortalamanızı (AGNO) hesaplayarak akademik durumunuzu gösterir.",
        faq_content: "**Not ortalaması nasıl hesaplanır?**<br>Alınan notların toplamının, not sayısına bölünmesiyle basit ortalama bulunur.<br>**Ağırlıklı ortalama nedir?**<br>(Ders Kredisi * Not) toplamının, toplam krediye bölünmesiyle hesaplanır.",
        faq_json: [
          {
            "question": "Not ortalaması nasıl hesaplanır",
            "answer": "Alınan notların toplamının, not sayısına bölünmesiyle basit ortalama bulunur."
          },
          {
            "question": "Ağırlıklı ortalama nedir",
            "answer": "(Ders Kredisi * Not) toplamının, toplam krediye bölünmesiyle hesaplanır."
          }
        ]
      },
      {
        name: "Net Hesaplama",
        slug: "net-hesaplama",
        type: "hesaplama",
        description: "Sınavlarda kaç net yaptığınızı doğru kurallarla hesaplayın.",
        calisma_mantigi: "Doğru - (Yanlış / Götürme Sayısı).",
        faq_summary: "Net sayısı nasıl hesaplanır?",
        longtails: "tyt net hesaplama, kpss net hesaplama",
        long_description: "Net Hesaplama aracı; TYT, AYT, LGS veya KPSS gibi sınavlarda geçerli olan '3 yanlış 1 doğruyu götürür' veya '4 yanlış 1 doğruyu götürür' kurallarını uygulayarak saf net sayınızı verir.",
        faq_content: "**Net sayısı nasıl hesaplanır?**<br>Doğru sayısından, (Yanlış Sayısı / Götürme Oranı) çıkarılarak bulunur.<br>**4 yanlış 1 doğruyu götürür ne demek?**<br>Her 4 yanlış cevabınız, yaptığınız 1 doğruyu siler; yani 4 yanlış 1.25 net kaybına yol açmaz, sadece 1 doğru eksilir.",
        faq_json: [
          {
            "question": "Net sayısı nasıl hesaplanır",
            "answer": "Doğru sayısından, (Yanlış Sayısı / Götürme Oranı) çıkarılarak bulunur."
          },
          {
            "question": "4 yanlış 1 doğruyu götürür ne demek",
            "answer": "Her 4 yanlış cevabınız, yaptığınız 1 doğruyu siler; yani 4 yanlış 1.25 net kaybına yol açmaz, sadece 1 doğru eksilir."
          }
        ]
      },
      {
        name: "Ehliyet Sınav Puanı Hesaplama",
        slug: "ehliyet-sinav-hesaplama",
        type: "hesaplama",
        description: "Sürücü belgesi sınav sonucunuzu resmi sonuçlar açıklanmadan tahmin edin.",
        calisma_mantigi: "Her doğru cevap 2 puandır, toplam 50 soru.",
        faq_summary: "Ehliyet sınav puanı nasıl hesaplanır?",
        longtails: "ehliyet puanı hesaplama",
        long_description: "Ehliyet Sınav Puanı Hesaplama aracı, MEB müfredatına uygun olarak sınavdaki doğru ve yanlış sayılarınıza göre 100 üzerinden puanınızı hesaplar.",
        faq_content: "**Ehliyet sınav puanı nasıl hesaplanır?**<br>Her doğru cevap 2 puandır, toplam 50 soru üzerinden değerlendirilir.<br>**Sınavdan geçmek için kaç doğru gerekir?**<br>En az 35 doğru yaparak 70 puan barajını geçmek gerekir.<br>**Yanlışlar doğruları götürür mü?**<br>Hayır, ehliyet sınavında yanlış cevaplar puanı etkilemez.",
        faq_json: [
          {
            "question": "Ehliyet sınav puanı nasıl hesaplanır",
            "answer": "Her doğru cevap 2 puandır, toplam 50 soru üzerinden değerlendirilir."
          },
          {
            "question": "Sınavdan geçmek için kaç doğru gerekir",
            "answer": "En az 35 doğru yaparak 70 puan barajını geçmek gerekir."
          },
          {
            "question": "Yanlışlar doğruları götürür mü",
            "answer": "Hayır, ehliyet sınavında yanlış cevaplar puanı etkilemez."
          }
        ]
      },
];