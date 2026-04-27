export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 987,
    title: "2026 yılı ilk çeyrek bilançolarının olası açıklanma tarihleri",
    href: "/haber/haber-987",
    image: "/haber987.png",
    alt: "Haber 987 görseli",
  },
   {
    id: 988,
    title: "Üçay Mühendislik, Avrupa Birliği pazarındaki büyüme hedefleri doğrultusunda önemli bir adım attı.",
    href: "/haber/haber-988",
    image: "/haber988.png",
    alt: "Haber 988 görseli",
  },
  {
    id: 989,
    title: "Merkez Bankası faizi Sabit bıraktı",
    href: "/haber/haber-989",
    image: "/haber989.png",
    alt: "Haber 989 görseli",
  },
  {
    id: 990,
    title: "Astor’da 11,2 Milyar TL’lik Hisse Satışı: %5,99 Pay Yabancı Kurumsallara Devredildi",
    href: "/haber/haber-990",
    image: "/haber990.png",
    alt: "Haber 990 görseli",
  },
  {
    id: 991,
    title: "A101 halka arz mı oldu? Perakendede dev anlaşmanın perde arkası",
    href: "/haber/haber-991",
    image: "/haber991.png",
    alt: "Haber 991 görseli",
  },
];