// Haber arşivi kategori taksonomisi.
// URL slug'ları kalıcıdır: /haberler/kategori/<slug>

export type HaberKategori =
  | "halka-arz"
  | "temettu"
  | "kap-bildirimleri"
  | "sermaye-artirimi"
  | "piyasa-gundemi"
  | "sirket-haberleri";

export type KategoriBilgi = {
  slug: HaberKategori;
  baslik: string;
  kisaBaslik: string;
  aciklama: string;
  metaTitle: string;
  metaDescription: string;
};

export const HABER_KATEGORILERI: KategoriBilgi[] = [
  {
    slug: "halka-arz",
    baslik: "Halka Arz Haberleri",
    kisaBaslik: "Halka Arz",
    aciklama:
      "Borsa İstanbul'daki güncel halka arz haberleri, talep toplama tarihleri, izahname gelişmeleri ve halka arz sonuçlarını bu sayfada takip edebilirsiniz.",
    metaTitle: "Halka Arz Haberleri | Hoca İle Borsa",
    metaDescription:
      "Güncel halka arz haberleri, talep toplama tarihleri, izahname gelişmeleri ve halka arz sonuçları. Borsa İstanbul halka arz takvimi ve gelişmeleri.",
  },
  {
    slug: "temettu",
    baslik: "Temettü Haberleri",
    kisaBaslik: "Temettü",
    aciklama:
      "Şirketlerin temettü (kâr payı) kararları, ödeme tarihleri ve temettü verimine dair güncel haberler bu sayfada yer alır.",
    metaTitle: "Temettü Haberleri | Hoca İle Borsa",
    metaDescription:
      "Şirketlerin temettü (kâr payı) kararları, temettü ödeme tarihleri ve temettü verimi gelişmelerine dair güncel haberler.",
  },
  {
    slug: "kap-bildirimleri",
    baslik: "KAP Bildirimleri Özetleri",
    kisaBaslik: "KAP Bildirimleri",
    aciklama:
      "Kamuyu Aydınlatma Platformu'na (KAP) gelen önemli şirket bildirimlerinin günlük özetleri ve öne çıkan açıklamaları burada bulabilirsiniz.",
    metaTitle: "KAP Bildirimleri Özetleri | Hoca İle Borsa",
    metaDescription:
      "Kamuyu Aydınlatma Platformu (KAP) bildirimlerinin günlük özetleri ve borsa şirketlerine dair öne çıkan açıklamalar.",
  },
  {
    slug: "sermaye-artirimi",
    baslik: "Sermaye Artırımı Haberleri",
    kisaBaslik: "Sermaye Artırımı",
    aciklama:
      "Bedelli ve bedelsiz sermaye artırımı kararları, SPK onayları ve sermaye artırımı takvimine dair güncel haberleri bu sayfada takip edebilirsiniz.",
    metaTitle: "Sermaye Artırımı Haberleri | Hoca İle Borsa",
    metaDescription:
      "Bedelli ve bedelsiz sermaye artırımı kararları, SPK onayları ve sermaye artırımı takvimi haberleri.",
  },
  {
    slug: "piyasa-gundemi",
    baslik: "Piyasa Gündemi Haberleri",
    kisaBaslik: "Piyasa Gündemi",
    aciklama:
      "Faiz kararları, enflasyon verileri, küresel borsalar ve genel piyasa gündemine dair güncel haber ve değerlendirmeler bu sayfada yer alır.",
    metaTitle: "Piyasa Gündemi Haberleri | Hoca İle Borsa",
    metaDescription:
      "Faiz kararları, enflasyon verileri, küresel borsalar ve genel piyasa gündemine dair güncel haberler ve değerlendirmeler.",
  },
  {
    slug: "sirket-haberleri",
    baslik: "Şirket Haberleri",
    kisaBaslik: "Şirket Haberleri",
    aciklama:
      "Halka açık şirketlere dair sözleşmeler, finansal sonuçlar, yatırımlar ve diğer önemli şirket gelişmelerine dair güncel haberler.",
    metaTitle: "Şirket Haberleri | Hoca İle Borsa",
    metaDescription:
      "Borsa İstanbul şirketlerine dair sözleşmeler, finansal sonuçlar, yatırımlar ve önemli şirket gelişmeleri haberleri.",
  },
];

export const KATEGORI_HARITASI: Record<HaberKategori, KategoriBilgi> =
  HABER_KATEGORILERI.reduce(
    (acc, kategori) => {
      acc[kategori.slug] = kategori;
      return acc;
    },
    {} as Record<HaberKategori, KategoriBilgi>
  );

export function getKategori(slug: string): KategoriBilgi | undefined {
  return KATEGORI_HARITASI[slug as HaberKategori];
}

export function isHaberKategori(slug: string): slug is HaberKategori {
  return Object.prototype.hasOwnProperty.call(KATEGORI_HARITASI, slug);
}

// Sayfa başına haber sayısı (arşiv + kategori sayfalamaları için ortak).
export const HABER_SAYFA_BOYUTU = 24;
