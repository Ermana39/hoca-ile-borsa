export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
     {
    id: 994,
    title: "TCMB rezervlerinde hızlı toparlanma görüldü.",
    href: "/haber/haber-994",
    image: "/haber994.png",
    alt: "Haber 994 görseli",
  },
     {
    id: 995,
    title: "Türkiye CDS primi 240 baz puan seviyesinde",
    href: "/haber/haber-995",
    image: "/haber995.png",
    alt: "Haber 995 görseli",
  },
    {
    id: 996,
    title: "IMF, Türkiye büyüme tahminini düşürdü",
    href: "/haber/haber-996",
    image: "/haber996.png",
    alt: "Haber 996 görseli",
  },
  {
    id: 997,
    title: "Morgan Stanley: S&P 500 Endeksini İran Gerginliğine Karşı Şirket Karları Koruyor",
    href: "/haber/haber-997",
    image: "/haber997.png",
    alt: "Morgan Stanley: S&P 500 Endeksini İran Gerginliğine Karşı Şirket Karları Koruyor",
  },
  {
    id: 998,
    title: "Fitch, Türkiye’nin kredi notunu “BB-” seviyesinde teyit etti; görünüm “durağan” oldu",
    href: "/haber/haber-998",
    image: "/haber998.png",
    alt: "Fitch, Türkiye’nin kredi notunu “BB-” seviyesinde teyit etti; görünüm “durağan” oldu",
  },
  {
    id: 999,
    title: "Borsada açığa satış yasağı 24 Nisan’a kadar uzatıldı",
    href: "/haber/haber-999",
    image: "/haber999.png",
    alt: "Borsada açığa satış yasağı 24 Nisan’a kadar uzatıldı",
  },
];