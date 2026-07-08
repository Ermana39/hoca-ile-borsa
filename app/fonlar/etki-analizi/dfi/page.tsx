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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 0.651465798, etki: 0.343648208 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 9.8546042, etki: 1.095831987 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 2.169625247, etki: 0.011499014 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: 2.07635633, etki: 0.003945077 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: 0.333333333, etki: 0.0001 },
  { sembol: "ABG", fonOrani: 30.15, kapanisMarji: 1.17, etki: 0.352755 },
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
      toplamEtki={1.81}
      sonGuncelleme="8 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 41056,
          bugun: 41900,
          degisim: 844,
        },
        fonToplamDeger: {
          dun: 21786227314,
          bugun: 22581010012,
          degisim: 794782698,
        },
        yorum:
          "DFI fonunda yatırımcı sayısının 844 kişi artması, fonun daha sınırlı yatırımcı tabanı içinde ilginin güçlenerek sürdüğünü gösteriyor. Fon toplam değerindeki 794,78 milyon TL'lik yükseliş, katılımcı artışının yanında fon büyüklüğünde de anlamlı bir genişleme olduğunu anlatıyor. DFI için bu tablo, hem yatırımcı talebi hem de fon ölçeği tarafında destekleyici bir güncel görünüm oluşturuyor.",
      }}
    />
  );
}
