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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -9.96, etki: -2.2758 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 6.71, etki: 0.96 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0.27, etki: 0.0209 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: -0.73, etki: -0.0519 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 4.02, etki: 0.2668 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: 9.8, etki: 0.5499 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -1.94, etki: -0.0387 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 10.0, etki: 0.104 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 0.38, etki: 0.002 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -5.25, etki: -0.0273 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 1.14, etki: 0.0031 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: 9.97, etki: 0.014 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: 3.85, etki: 0.0027 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 1.49, etki: 0.1775 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -7.3, etki: -0.0927 },
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
      toplamEtki={-0.39}
      sonGuncelleme="16 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 96686,
          bugun: 97340,
          degisim: 654,
        },
        fonToplamDeger: {
          dun: 226331636916,
          bugun: 228648770236,
          degisim: 2317133320,
        },
        paraGirisiCikisi: 1921646658,
        yorum:
          "TLY fonunda yatırımcı sayısı 654 kişi artarken fon toplam değeri 2,32 milyar TL yükseldi. 1,92 milyar TL net para girişi, fon büyüklüğündeki artışın önemli kısmının yeni para ile desteklendiğini gösteriyor. Buna rağmen portföy etkisinin -%0,39 seviyesinde kalması, fiyat tarafında DSTKF kaynaklı baskının para girişine rağmen hissedildiğini anlatıyor.",
      }}
    />
  );
}
