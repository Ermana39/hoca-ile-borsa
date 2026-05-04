export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 984,
    title: "TÜİK Nisan 2026 enflasyonu beklenene göre (%3,30) yüksek geldi",
    href: "/haber/haber-984",
    image: "/haber984.png",
    alt: "Haber 984 görseli",
  },
  {
    id: 985,
    title: "TÜRK-İŞ Nisan 2026 Açlık ve Yoksulluk Sınırını Açıkladı",
    href: "/haber/haber-985",
    image: "/haber985.png",
    alt: "Haber 985 görseli",
  },
  {
    id: 986,
    title: "FED, beklentilere paralel olarak politika faizini sabit bıraktı",
    href: "/haber/haber-986",
    image: "/haber986.png",
    alt: "Haber 986 görseli",
  },
  {
    id: 987,
    title: "2026 yılı ilk çeyrek bilançolarının olası açıklanma tarihleri",
    href: "/haber/haber-987",
    image: "/haber987.png",
    alt: "Haber 987 görseli",
  },
];