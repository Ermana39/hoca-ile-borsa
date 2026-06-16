import type { HaberKategori } from "@/lib/haber-kategorileri";

export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
  publishedAt: string;
  category: HaberKategori;
  // Haberi yazan yazarın slug'ı (app/data/yazarlar.ts). Belirtilmezse
  // varsayilanYazar'a atfedilir; yazar profilindeki "Son Yazılar" listesi
  // bu alana göre filtrelenir.
  yazarSlug?: string;
  // Opsiyonel: Bu haber bir veya birden çok hisseyle ilgiliyse kodlarını yaz.
  // Örn: ilgiliHisseler: ["ASELS", "THYAO"]
  // Etiketlenen her hissenin /hisse/<kod> sayfasında "Önemli KAP Gelişmeleri"
  // bölümünde bu haber otomatik görünür.
  ilgiliHisseler?: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: 991,
    title: "15 Haziran 2026 Pazartesi KAP Bildirimleri Özeti",
    href: "/haber/15-haziran-2026-pazartesi-kap-bildirimleri-ozeti",
    image: "/kap-ozeti-discover.webp",
    alt: "15 Haziran 2026 KAP Bildirimleri Özeti",
    publishedAt: "2026-06-15",
    category: "kap-bildirimleri",
    ilgiliHisseler: ["ASELS", "CVKMD", "GRTHO", "DSTKF", "ASTOR", "LOGO", "ANELE", "ALARK", "BETAE"],
  },
  {
    id: 990,
    title: "DERHL’de Bedelsiz Sermaye Artırımı ve SPK’dan Suç Duyurusu Kararı",
    href: "/haber/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu",
    image: "/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu.webp",
    alt: "DERHL bedelsiz sermaye artırımı ve SPK suç duyurusu kararı",
    publishedAt: "2026-06-15",
    category: "sermaye-artirimi",
    ilgiliHisseler: ["DERHL"],
  },
  {
    id: 989,
    title:
      "Beta Enerji Halka Arzında Yüksek Başvuruya Ne Kadar Dağıtım Yapabilir?",
    href: "/haber/beta-enerji-yuksek-basvuru-dagitim",
    image: "/beta-enerji-yuksek-basvuru-dagitim-discover.webp",
    alt: "Beta Enerji halka arz yüksek başvuru dağıtım oranı",
    publishedAt: "2026-06-13",
    category: "halka-arz",
    ilgiliHisseler: ["BETAE"],
  },
  {
    id: 988,
    title: "Borsa Haftayı Yükselişle Kapattı, Altın Geriledi",
    href: "/haber/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti",
    image: "/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti-discover.webp",
    alt: "Borsa yükseldi altın düştü haftalık piyasa özeti",
    publishedAt: "2026-06-13",
    category: "piyasa-gundemi",
  },
  {
    id: 986,
    title: "SpaceX Halka Arzı Sonrası ABD Borsaları Yükseldi",
    href: "/haber/spacex-halka-arzi-abd-borsalari-yukseldi",
    image: "/gunluk-abd-borsalari-ozeti-discover.webp",
    alt: "SpaceX halka arzı sonrası ABD borsaları yükseldi",
    publishedAt: "2026-06-13",
    category: "piyasa-gundemi",
  },
  {
    id: 987,
    title: "12 Haziran 2026 Cuma KAP Bildirimleri Özeti",
    href: "/haber/12-haziran-2026-cuma-kap-bildirimleri-ozeti",
    image: "/kap-ozeti-discover.webp",
    alt: "12 Haziran 2026 KAP Bildirimleri Özeti",
    publishedAt: "2026-06-12",
    category: "kap-bildirimleri",
    ilgiliHisseler: ["BALSU", "DSTKF", "GARAN", "GESAN", "GLYHO", "HALKB", "ISCTR", "PGSUS", "VBTYZ"],
  },
  {
    id: 985,
    title:
      "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
    href: "/haber/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
    image: "/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi-discover.webp",
    alt: "Türkiye Sigorta ve Goodyear bedelsiz sermaye artırımı onayı",
    publishedAt: "2026-06-12",
    category: "sermaye-artirimi",
    ilgiliHisseler: ["TURSG", "GOODY"],
  },
  {
    id: 984,
    title: "Beta Enerji Halka Arzı Kaç Lot Verir? Kişi Başı Kaç Lot Düşer?",
    href: "/haber/beta-enerji-halka-arzi-kac-lot-verir",
    image: "/beta-enerji-halka-arz-kac-lot-verir-discover.webp",
    alt: "Beta Enerji halka arzı kaç lot verir kişi başı kaç lot düşer",
    publishedAt: "2026-06-12",
    category: "halka-arz",
    ilgiliHisseler: ["BETAE"],
  },
  {
    id: 983,
    title: "TCMB Politika Faizini Yüzde 37’de Sabit Tuttu",
    href: "/haber/tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026",
    image: "/tcmb-faiz-karari.webp",
    alt: "TCMB politika faizini yüzde 37 seviyesinde sabit tuttu",
    publishedAt: "2026-06-11",
    category: "piyasa-gundemi",
  },
  {
    id: 982,
    title:
      "ABD Enflasyonu Sonrası Piyasalarda Temkinli Fiyatlama: Borsalar ve Altında Son Durum",
    href: "/haber/abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi",
    image: "/abd-enflasyon-altin-borsa-discover.webp",
    alt: "ABD enflasyonu sonrası borsalar ve altın fiyatlaması",
    publishedAt: "2026-06-10",
    category: "piyasa-gundemi",
  },
  {
    id: 981,
    title:
      "Türk Bankacılığında Tarihi Dönüşüm: 3 Katılım Bankası Birleşiyor, Emlak Katılım Borsaya Geliyor",
    href: "/haber/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor",
    image:
      "/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor-discover.webp",
    alt: "3 Katılım Bankası Birleşiyor, Emlak Katılım Halka Arz",
    publishedAt: "2026-06-07",
    category: "halka-arz",
  },
  {
    id: 950,
    title: "11 Haziran 2026 Perşembe KAP Bildirimleri Özeti",
    href: "/haber/11-haziran-2026-persembe-kap-bildirimleri-ozeti",
    image: "/kap-ozeti-discover.webp",
    alt: "11 Haziran 2026 KAP Bildirimleri Özeti",
    publishedAt: "2026-06-11",
    category: "kap-bildirimleri",
    ilgiliHisseler: ["ALFAS", "BRISA", "GOODY", "HRKET", "RUBNS", "THYAO", "YKBNK", "ZOREN"],
  },
  {
    id: 975,
    title: "Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi",
    href: "/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
    image: "/haber975-discover.webp",
    alt: "Türkiye Sigorta Prim Üretimi 79,2 Milyar TL",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
    ilgiliHisseler: ["TURSG"],
  },
  {
    id: 976,
    title: "THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme",
    href: "/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme",
    image: "/haber976-discover.webp",
    alt: "THY Air Europa Yatırım Süreci",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
    ilgiliHisseler: ["THYAO"],
  },
  {
    id: 977,
    title: "ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme",
    href: "/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme",
    image: "/haber977-discover.webp",
    alt: "ASELSAN 845 Milyon Dolarlık Sözleşme",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
    ilgiliHisseler: ["ASELS"],
  },
  {
    id: 978,
    title: "Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi",
    href: "/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
    image: "/haber978.webp",
    alt: "Kontrolmatik Kupon Ödemesi Gerçekleşmedi",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
    ilgiliHisseler: ["KONTR"],
  },
];