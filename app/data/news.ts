export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [ 
   {
    id: 983,
    title: "EKİNCİLER DEMİR VE ÇELİK SANAYİ A.Ş. Dağıtımları Sonuçlandı",
    href: "/haber/haber-983",
    image: "/haber983.png",
    alt: "Haber 983 görseli",
  },
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
 ];