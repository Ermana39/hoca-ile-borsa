// ============================================================================
//  ÖNEMLİ KAP GELİŞMELERİ — TEK MERKEZİ VERİ DOSYASI
// ----------------------------------------------------------------------------
//  Buraya girdiğin her KAP gelişmesi, "ilgiliHisseler" listesinde yazdığın
//  her hissenin künye sayfasında (/hisse/<kod>) "Önemli KAP Gelişmeleri"
//  bölümünde otomatik görünür. En yeni tarih üstte sıralanır.
//
//  YENİ KAP GELİŞMESİ EKLEMEK İÇİN (kopyala-doldur):
//    Aşağıdaki listenin EN ÜSTÜNE şu bloğu ekle (başına yeni eklemek pratik):
//
//    {
//      isoTarih: "2026-06-05",
//      tarih: "5 Haziran 2026",
//      tur: "Sözleşme",
//      baslik: "ASELSAN'dan 845 Milyon Dolarlık Yeni Sözleşme",
//      aciklama: "Şirket, yurt dışı bir müşteriyle 845 milyon dolarlık satış sözleşmesi imzaladığını duyurdu.",
//      kaynak: "https://www.kap.org.tr/...",
//      ilgiliHisseler: ["ASELS"],
//      haberHref: "/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme"
//    },
//
//  ALAN AÇIKLAMALARI:
//    isoTarih        → Makine formatı tarih: "YIL-AY-GUN" (sıralama için). Örn: "2026-06-05"
//    tarih           → Sayfada görünecek Türkçe tarih. Örn: "5 Haziran 2026"
//    tur             → Şunlardan biri: "Temettü" | "Bilanço" | "Sermaye Artırımı"
//                      | "Sözleşme" | "Genel Kurul" | "Diğer"
//    baslik          → Kısa başlık. Örn: "ASELSAN'dan yeni sözleşme"
//    aciklama        → Senin yorumun / özetin (1-3 cümle).
//    kaynak          → (Opsiyonel) KAP bağlantısı. Yoksa bu satırı silebilir
//                      veya kaynak: "" yapabilirsin.
//    ilgiliHisseler  → Bu gelişmenin ilgili olduğu hisse kodları (BÜYÜK harf).
//                      Örn: ["ASELS"] veya ["ASELS", "THYAO"]
//    haberHref       → (Opsiyonel) Sitendeki tam habere bağlantı. Yoksa sil
//                      veya haberHref: "" yap.
//
//  ÖNEMLİ: Her blok sonunda virgül (,) olmalı. Tırnakları silme.
//
//  NOT: Günlük yayınladığın "KAP Bildirimleri Özeti" gibi ÇOK şirketli haberleri
//       buraya tek tek girmene gerek yok. Onları haber olarak yazıp, tek bir
//       şirketle ilgiliyse o haberin içinde "ilgiliHisseler" etiketini
//       kullanabilirsin (app/data/news.ts). Etiketli haberler de hisse
//       sayfasında bu bölümde otomatik görünür.
// ============================================================================

export type KapTuru =
  | "Temettü"
  | "Bilanço"
  | "Sermaye Artırımı"
  | "Sözleşme"
  | "Genel Kurul"
  | "Diğer";

export type KapGelisme = {
  isoTarih: string;
  tarih: string;
  tur: KapTuru;
  baslik: string;
  aciklama: string;
  kaynak?: string;
  ilgiliHisseler: string[];
  haberHref?: string;
};

export const kapGelismeleri: KapGelisme[] = [
  // Henüz KAP gelişmesi eklenmedi. Yukarıdaki örneğe bakarak ilk girişini
  // bu satırların yerine ekleyebilirsin.
];
