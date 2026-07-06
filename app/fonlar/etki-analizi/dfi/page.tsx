import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "DFI Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "DFI fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/dfi",
  },
  openGraph: {
    title: "DFI Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "DFI fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/dfi",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 0.986842105, etki: 0.520559211 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 1.14379085, etki: 0.127189542 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 8.449197861, etki: 0.044780749 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -2.988953866, etki: -0.005679012 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -0.662251656, etki: -0.000198675 },
  { sembol: "ABG", fonOrani: 30.15, kapanisMarji: -1.48, etki: -0.44622 },
];

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="DFI"
      fonAdi="Atlas Portföy Serbest Fon"
      fonTuru="Atlas Portföy Serbest Fon"
      slug="dfi"
      rows={rows}
      toplamFonOrani={94.77}
      toplamEtki={0.24}
      sonGuncelleme="6 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 39659,
          bugun: 40368,
          degisim: 709,
        },
        fonToplamDeger: {
          dun: 20873537570,
          bugun: 21341081989,
          degisim: 467544419,
        },
        yorum:
          "DFI fonunda 709 kişilik yatırımcı artışı, daha sınırlı yatırımcı tabanına göre dikkat çekici bir büyümeye karşılık geliyor. Fon toplam değerinin 467,54 milyon TL yükselmesi, pozitif kapanış etkisiyle birlikte fon büyüklüğünün de aynı yönde güçlendiğini gösteriyor. Bu birleşim DFI için hem performans beklentisi hem de yatırımcı ilgisi tarafında destekleyici bir görünüm oluşturuyor.",
      }}
    />
  );
}
