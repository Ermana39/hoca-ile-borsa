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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -9.96, etki: -2.2761 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 9.97, etki: 1.4257 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0.27, etki: 0.0210 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 1.23, etki: 0.0881 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 2.16, etki: 0.1430 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: 2.36, etki: 0.1322 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 7.00, etki: 0.1393 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 2.28, etki: 0.0237 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 0.99, etki: 0.0054 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -9.96, etki: -0.0518 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 3.72, etki: 0.0101 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -0.54, etki: -0.0008 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: 0.33, etki: 0.0002 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: -0.74, etki: -0.0881 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: 0.25, etki: 0.0032 },
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
      toplamEtki={-0.42}
      sonGuncelleme="13 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 96268,
          bugun: 96466,
          degisim: 198,
        },
        fonToplamDeger: {
          dun: 221503872827,
          bugun: 225614681856,
          degisim: 4110809029,
        },
        paraGirisiCikisi: 1598893100,
        yorum:
          "TLY fonunda yatırımcı sayısı 198 kişi artarken fon toplam değeri 4,11 milyar TL yükseldi. 1,60 milyar TL net para girişi, büyümenin yalnızca portföy değerlemesinden gelmediğini, fona yeni para girişinin de güçlü çalıştığını gösteriyor. TLY için bu kapanış, yatırımcı adedindeki sınırlı artışa rağmen tutar bazında kuvvetli bir ilgiye işaret ediyor.",
      }}
    />
  );
}