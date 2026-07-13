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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 0.569, etki: 0.30028463 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: -2.006, etki: -0.22308642 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 2.711, etki: 0.014370016 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: 1.86, etki: 0.554652 },
];

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="DFI"
      fonAdi="Atlas Portföy Serbest Fon"
      fonTuru="Atlas Portföy Serbest Fon"
      slug="dfi"
      rows={rows}
      toplamFonOrani={94.22}
      toplamEtki={0.65}
      sonGuncelleme="13 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 42977,
          bugun: 43470,
          degisim: 493,
        },
        fonToplamDeger: {
          dun: 23530660123,
          bugun: 24233166182,
          degisim: 702506059,
        },
        paraGirisiCikisi: 504315959,
        yorum:
          "DFI fonunda yatırımcı sayısı 493 kişi artarken fon toplam değeri 702,51 milyon TL yükseldi. 504,32 milyon TL net para girişi, fon büyüklüğündeki artışın önemli bölümünün yeni para ile desteklendiğini gösteriyor. DFI için kapanış verisi, yatırımcı tabanı ve nakit akışı tarafında güçlü seyrin sürdüğünü anlatıyor.",
      }}
    />
  );
}