import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "TLY Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "TLY fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
  },
  openGraph: {
    title: "TLY Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "TLY fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: 0.13, etki: 0.0298 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 4.56, etki: 0.6527 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0.14, etki: 0.0105 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 0.25, etki: 0.0177 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 3.55, etki: 0.2352 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: -1.00, etki: -0.0561 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -0.83, etki: -0.0165 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 0.75, etki: 0.0078 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: -0.33, etki: -0.0018 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -9.94, etki: -0.0517 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 1.62, etki: 0.0044 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -0.27, etki: -0.0004 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: -0.88, etki: -0.0006 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 0.75, etki: 0.0893 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: 0.54, etki: 0.0069 },
];

export default function TlyEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="TLY"
      fonAdi="Tera Portföy Birinci Serbest Fonu"
      fonTuru="Tera Portföy Birinci Serbest Fonu"
      slug="tly"
      rows={rows}
      toplamFonOrani={82.01}
      toplamEtki={0.93}
      sonGuncelleme="10 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 96021,
          bugun: 96268,
          degisim: 247,
        },
        fonToplamDeger: {
          dun: 220952215892,
          bugun: 221503872827,
          degisim: 551656935,
        },
        paraGirisiCikisi: 38936786,
        yorum:
          "TLY fonunda yatırımcı sayısının 247 kişi artması, fonun yatırımcı ilgisini daha sınırlı ama pozitif tarafta koruduğunu gösteriyor. Fon toplam değerindeki 551,66 milyon TL'lik yükselişe 38,94 milyon TL net para girişi eşlik ediyor. TLY için bu tablo, fon büyüklüğünde artışın sürdüğünü ancak para girişinin önceki güne göre daha ölçülü kaldığını anlatıyor.",
      }}
    />
  );
}