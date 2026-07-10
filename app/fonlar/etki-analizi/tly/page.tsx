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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: 0.39, etki: 0.0897 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 1.63, etki: 0.2337 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 1.10, etki: 0.0852 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 1.76, etki: 0.1259 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: -2.56, etki: -0.1698 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: 2.18, etki: 0.1223 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -4.64, etki: -0.0924 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: -1.23, etki: -0.0128 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 0.33, etki: 0.0018 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -10.00, etki: -0.0520 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 1.20, etki: 0.0032 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -0.13, etki: -0.0002 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: 0.44, etki: 0.0003 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 0.00, etki: 0.0000 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -1.44, etki: -0.0183 },
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
      toplamEtki={0.32}
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
