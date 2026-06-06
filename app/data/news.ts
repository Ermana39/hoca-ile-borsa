export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 950,
    title: "05 Haziran 2026 Cuma KAP Bildirimleri Özeti",
    href: "/haber/05-haziran-2026-cuma-kap-bildirimleri-ozeti",
    image: "/haber950.png",
    alt: "05 Haziran 2026 KAP Bildirimleri Özeti",
  },
  {
    id: 975,
    title: "Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi",
    href: "/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
    image: "/haber975.png",
    alt: "Türkiye Sigorta Prim Üretimi 79,2 Milyar TL",
  },
  {
    id: 976,
    title: "THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme",
    href: "/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme",
    image: "/haber976.webp",
    alt: "THY Air Europa Yatırım Süreci",
  },
  {
    id: 977,
    title: "ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme",
    href: "/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme",
    image: "/haber977.webp",
    alt: "ASELSAN 845 Milyon Dolarlık Sözleşme",
  },
  {
    id: 978,
    title: "Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi",
    href: "/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
    image: "/haber978.webp",
    alt: "Kontrolmatik Kupon Ödemesi Gerçekleşmedi",
  },
  {
    id: 979,
    title: "TÜRK-İŞ Mayıs 2026 Açlık ve Yoksulluk Sınırı Araştırması",
    href: "/haber/turk-is-mayis-2026-aclik-ve-yoksulluk-siniri-arastirmasi",
    image: "/haber979.png",
    alt: "TÜRK-İŞ Açlık ve Yoksulluk Sınırı Mayıs 2026",
  },
];