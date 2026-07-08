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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -2.55, etki: -0.5829 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 3.77, etki: 0.5398 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: -0.62, etki: -0.0476 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 0.51, etki: 0.0362 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 6.19, etki: 0.4101 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: -3.17, etki: -0.1776 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 10.00, etki: 0.1990 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: -2.26, etki: -0.0235 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: -0.26, etki: -0.0014 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -9.95, etki: -0.0518 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 9.99, etki: 0.0270 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: 0.00, etki: 0.0000 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: -3.63, etki: -0.0025 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 3.70, etki: 0.4407 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: 7.49, etki: 0.0951 },
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
      toplamEtki={0.86}
      sonGuncelleme="8 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 94058,
          bugun: 95542,
          degisim: 1484,
        },
        fonToplamDeger: {
          dun: 215940595825,
          bugun: 220221351609,
          degisim: 4280755784,
        },
        yorum:
          "TLY fonunda yatırımcı sayısının 1.484 kişi artması, fonun yatırımcı ilgisinde önceki güne göre daha belirgin bir ivme yakaladığını gösteriyor. Fon toplam değerindeki 4,28 milyar TL'lik yükseliş, hem giriş ilgisinin hem de fon büyüklüğünün güçlü kaldığını anlatıyor. TLY için bu tablo, katılımcı tabanındaki artış ile fon toplam değerindeki büyümenin aynı yönde ilerlediği pozitif bir güncel görünüm sunuyor.",
      }}
    />
  );
}
