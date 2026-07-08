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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: 9.34, etki: 2.1352 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: -6.78, etki: -0.9699 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 2.24, etki: 0.1731 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 1.23, etki: 0.0878 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: -1.61, etki: -0.1064 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: -0.33, etki: -0.0184 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -7.07, etki: -0.1407 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 0.34, etki: 0.0035 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 9.93, etki: 0.0536 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -10.00, etki: -0.0520 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 7.71, etki: 0.0208 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -0.33, etki: -0.0005 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: -0.43, etki: -0.0003 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 4.54, etki: 0.5407 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -3.42, etki: -0.0434 },
];

export default function TlyEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="TLY"
      fonAdi="Tera Portföy Birinci Serbest Fonu"
      fonTuru="Tera Portföy Birinci Serbest Fonu"
      slug="tly"
      rows={rows}
      toplamFonOrani={80.74}
      toplamEtki={1.73}
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
