import BesHesaplayici from "./BesHesaplayici";

export const metadata = {
  title: "BES / Bireysel Emeklilik Birikim Hesaplayıcı",
  description:
    "Aylık katkı payı, devlet katkısı ve tahmini reel getiri oranına göre BES birikiminizi yıl bazında hesaplayın ve grafik üzerinde görün.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/bes" },
};

export default function Page() {
  return <BesHesaplayici />;
}
