import type { HaberKategori } from "@/lib/haber-kategorileri";

export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
  publishedAt: string;
  category: HaberKategori;
};

export const newsItems: NewsItem[] = [
  {
    id: 986,
    title: "SpaceX Halka Arzı Sonrası ABD Borsaları Yükseldi",
    href: "/haber/spacex-halka-arzi-abd-borsalari-yukseldi",
    image: "/gunluk-abd-borsalari-ozeti.webp",
    alt: "SpaceX halka arzı sonrası ABD borsaları yükseldi",
    publishedAt: "2026-06-13",
    category: "piyasa-gundemi",
  },
  {
    id: 987,
    title: "12 Haziran 2026 Cuma KAP Bildirimleri Özeti",
    href: "/haber/12-haziran-2026-cuma-kap-bildirimleri-ozeti",
    image: "/kap-ozeti.webp",
    alt: "12 Haziran 2026 KAP Bildirimleri Özeti",
    publishedAt: "2026-06-12",
    category: "kap-bildirimleri",
  },
  {
    id: 985,
    title: "SPK’dan Türkiye Sigorta ve Goodyear İçin Bedelsiz Sermaye Artırımı Onayı",
    href: "/haber/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi",
    image: "/turkiye-sigorta-goodyear-bedelsiz-sermaye-artirimi.webp",
    alt: "Türkiye Sigorta ve Goodyear bedelsiz sermaye artırımı onayı",
    publishedAt: "2026-06-12",
    category: "sermaye-artirimi",
  },
  {
    id: 984,
    title: "Beta Enerji Halka Arzı Kaç Lot Verir? Kişi Başı Kaç Lot Düşer?",
    href: "/haber/beta-enerji-halka-arzi-kac-lot-verir",
    image: "/beta-enerji-halka-arz-kac-lot-verir.webp",
    alt: "Beta Enerji halka arzı kaç lot verir kişi başı kaç lot düşer",
    publishedAt: "2026-06-12",
    category: "halka-arz",
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
    image: "/abd-enflasyon-altin-borsa.webp",
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
      "/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor.webp",
    alt: "3 Katılım Bankası Birleşiyor, Emlak Katılım Halka Arz",
    publishedAt: "2026-06-07",
    category: "halka-arz",
  },
  {
    id: 950,
    title: "11 Haziran 2026 Perşembe KAP Bildirimleri Özeti",
    href: "/haber/11-haziran-2026-persembe-kap-bildirimleri-ozeti",
    image: "/kap-ozeti.webp",
    alt: "11 Haziran 2026 KAP Bildirimleri Özeti",
    publishedAt: "2026-06-11",
    category: "kap-bildirimleri",
  },
  {
    id: 975,
    title: "Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi",
    href: "/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
    image: "/haber975.png",
    alt: "Türkiye Sigorta Prim Üretimi 79,2 Milyar TL",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
  },
  {
    id: 976,
    title: "THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme",
    href: "/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme",
    image: "/haber976.webp",
    alt: "THY Air Europa Yatırım Süreci",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
  },
  {
    id: 977,
    title: "ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme",
    href: "/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme",
    image: "/haber977.webp",
    alt: "ASELSAN 845 Milyon Dolarlık Sözleşme",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
  },
  {
    id: 978,
    title: "Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi",
    href: "/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
    image: "/haber978.webp",
    alt: "Kontrolmatik Kupon Ödemesi Gerçekleşmedi",
    publishedAt: "2026-06-05",
    category: "sirket-haberleri",
  },
];