import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata: Metadata = {
  title: "PBR Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PBR fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
  },
  openGraph: {
    title: "PBR Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PBR fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 0.478, etki: 0.046172249 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: -4.589, etki: -0.426318709 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 0.575, etki: 0.053103448 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: 5.74, etki: 0.349577039 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: 0.103, etki: 0.004856263 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: 1.132, etki: 0.051169811 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: -2.047, etki: -0.069590643 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: -0.152, etki: -0.004136364 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: -5.477, etki: -0.125967894 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: -3.298, etki: -0.055071301 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: -0.723, etki: -0.011430868 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: -9.991, etki: -0.156859946 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: -3.061, etki: -0.034591837 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: -0.895, etki: -0.009218377 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: 1.356, etki: 0.013285486 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: 3.588, etki: 0.031218997 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: -0.106, etki: -0.000624339 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: -3.904, etki: -0.019518838 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: -4.518, etki: -0.021685491 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: -0.853, etki: -0.003580563 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: -3.26, etki: -0.013038417 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: -0.716, etki: -0.002719141 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: -4.94, etki: -0.01235119 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: 1.022, etki: 0.002555366 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: -5.317, etki: -0.012761905 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0.0, etki: 0 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: -0.214, etki: -0.000428878 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: -2.576, etki: -0.002061192 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: -1.833, etki: -0.000183262 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: 1.18, etki: 0.094282 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: -0.17, etki: -0.01309 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.13, etki: 0.00325 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.14, etki: 0.001092 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 1.34, etki: 0.007772 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: -0.64, etki: -0.000384 },
];

const ozet = fonEtkiOzetiGetir("pbr");

export default function PbrEtkiAnaliziPage() {
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
          dun: 71463,
          bugun: 72566,
          degisim: 1103,
        },
        fonToplamDeger: {
          dun: 36936656149,
          bugun: 37630634835,
          degisim: 693978686,
        },
        paraGirisiCikisi: 512650046,
        yorum:
          "PBR fonunda yatırımcı sayısı 1.103 kişi artarken fon toplam değeri 693,98 milyon TL yükseldi. 512,65 milyon TL net para girişi talebin sürdüğünü gösteriyor. Buna karşın portföy etkisinin -%0,34 seviyesine gerilemesi, KTLEV, DSTKF ve ANELE tarafındaki baskının fon fiyatı beklentisini aşağı çektiğini anlatıyor.",
      }}
    />
  );
}
