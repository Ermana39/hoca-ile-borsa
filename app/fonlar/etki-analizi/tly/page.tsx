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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -4.40, etki: -1.0054 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 4.87, etki: 0.6959 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0.00, etki: 0.0000 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 0.00, etki: 0.0000 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 0.54, etki: 0.0357 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: -1.68, etki: -0.0943 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -4.26, etki: -0.0847 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: -7.17, etki: -0.0746 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: -1.22, etki: -0.0066 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -9.98, etki: -0.0519 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: -1.09, etki: -0.0029 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -0.86, etki: -0.0012 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: -1.47, etki: -0.0010 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 4.60, etki: 0.5479 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -1.59, etki: -0.0202 },
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
      toplamEtki={-0.04}
      sonGuncelleme="6 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 93044,
          bugun: 93910,
          degisim: 866,
        },
        fonToplamDeger: {
          dun: 211401795024,
          bugun: 214080225558,
          degisim: 2678430534,
        },
        yorum:
          "TLY fonunda yatırımcı sayısının 866 kişi artması, kısa vadeli fiyat etkisi negatif görünse bile fona giriş ilgisinin korunduğunu gösteriyor. Fon toplam değerindeki 2,68 milyar TL'lik yükseliş, yalnızca günlük fiyat hareketinden değil, fon ölçeğinin büyümesinden de okunmalı. Bu tablo TLY için likidite ve yatırımcı tabanı tarafında güçlü bir genişlemeye işaret eder.",
      }}
    />
  );
}
