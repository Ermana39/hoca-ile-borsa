import TemettuEmekliligiHesaplayici from "./TemettuEmekliligiHesaplayici";

const canonical =
  "https://www.hocaileborsa.com/temettu/temettu-emekliligi-hesaplama";
const title = "Temettü Emekliliği Hesaplayıcı | Aylık Temettü Geliri Hedefi";
const description =
  "Temettü emekliliği için hedef aylık gelire ulaşmanız gereken portföy büyüklüğünü ve mevcut birikiminizle bu hedefe kaç yılda ulaşacağınızı hesaplayın.";

export const metadata = {
  title,
  description,
  alternates: { canonical },
  keywords: [
    "temettü emekliliği",
    "temettü emekliliği hesaplama",
    "temettü ile emeklilik",
    "aylık temettü geliri",
    "pasif gelir hesaplama",
  ],
  openGraph: { title, description, url: canonical, type: "website" },
};

export default function Page() {
  // SSS ve FAQPage şeması HesaplayiciRehberi bileşeninden gelir
  // (components/HesaplayiciRehberi.tsx -> "temettu-emekliligi" kaydı).
  return <TemettuEmekliligiHesaplayici />;
}
