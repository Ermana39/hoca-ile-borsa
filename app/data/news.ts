export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 998,
    title: "Haber 998 başlığı",
    href: "/haber/haber-998",
    image: "/haber998.png",
    alt: "Haber 998 görseli",
  },
  {
    id: 999,
    title: "Borsada açığa satış yasağı 24 Nisan’a kadar uzatıldı",
    href: "/haber/haber-999",
    image: "/haber999.png",
    alt: "Borsada açığa satış yasağı 24 Nisan’a kadar uzatıldı",
  },
];