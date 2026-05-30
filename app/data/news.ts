export type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const newsItems: NewsItem[] = [
   {
    id: 980,
    title: "26 Mayıs 2026 Salı KAP Bildirimleri Özeti",
    href: "/haber/haber-980",
    image: "/haber980.jpg",
    alt: "Haber 980 görseli",
  },
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
   
  
 ];