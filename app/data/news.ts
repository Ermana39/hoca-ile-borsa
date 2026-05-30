export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 981,
    title: "Borsada açığa satış yasağı 12 Haziran'a uzatıldı",
    href: "/haber/haber-981",
    image: "/haber981.png",
    alt: "Haber 981 görseli",
  }, 
  {
    id: 982,
    title: "CHP KURULTAY DAVASI'NDA 'MUTLAK BUTLAN' KARARI ÇIKTI",
    href: "/haber/haber-982",
    image: "/haber982.jpg",
    alt: "Haber 982 görseli",
  },
   {
    id: 983,
    title: "EKİNCİLER DEMİR VE ÇELİK SANAYİ A.Ş. Dağıtımları Sonuçlandı",
    href: "/haber/haber-983",
    image: "/haber983.jpg",
    alt: "Haber 983 görseli",
  },
  {
    id: 984,
    title: "TÜİK Nisan 2026 enflasyonu beklenene göre (%3,30) yüksek geldi",
    href: "/haber/haber-984",
    image: "/haber984.png",
    alt: "Haber 984 görseli",
  },
  
 ];