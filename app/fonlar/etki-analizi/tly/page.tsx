import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -9.99, etki: -2.283 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 4.66, etki: 0.6664 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0.0, etki: 0 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 0.0, etki: 0 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: -4.94, etki: -0.3276 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: 2.41, etki: 0.1353 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -5.48, etki: -0.109 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 8.34, etki: 0.0868 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: -1.32, etki: -0.0071 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -2.15, etki: -0.0112 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 0.1, etki: 0.0003 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: 5.55, etki: 0.0078 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: -0.11, etki: -0.0001 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 4.47, etki: 0.5324 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -7.03, etki: -0.0893 },
];

const ozet = fonEtkiOzetiGetir("tly");

export default function TlyEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod={ozet.kod}
      fonAdi={ozet.fonAdi}
      fonTuru={ozet.fonTuru}
      slug={ozet.slug}
      rows={rows}
      toplamFonOrani={ozet.toplamFonOrani}
      toplamEtki={ozet.toplamEtki}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 97340,
          bugun: 97684,
          degisim: 344,
        },
        fonToplamDeger: {
          dun: 228648770236,
          bugun: 231305786578,
          degisim: 2657016342,
        },
        paraGirisiCikisi: 441987578,
        yorum:
          "TLY fonunda yatırımcı sayısı 344 kişi artarken fon toplam değeri 2,66 milyar TL yükseldi. 441,99 milyon TL net para girişi pozitif olsa da portföy etkisinin -%1,40 seviyesine gerilemesi, DSTKF ve TERA kaynaklı baskının fiyat tarafında ağır bastığını gösteriyor. TLY için fon büyüklüğü artarken yarınki fiyat etkisi negatif tarafta kalıyor.",
      }}
    />
  );
}
