import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

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
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 3.586, etki: 0.346035354 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: 3.158, etki: 0.293368421 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 3.061, etki: 0.282857143 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: 9.955, etki: 0.60626497 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: 3.723, etki: 0.176117021 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: -0.721, etki: -0.032584964 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: -4.608, etki: -0.156682028 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: -3.193, etki: -0.087169811 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: 7.001, etki: 0.161024033 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: 1.869, etki: 0.031214953 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: -0.751, etki: -0.011859883 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: -9.961, etki: -0.156386719 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: -1.600, etki: -0.01808 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: -2.960, etki: -0.030483779 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: 0.080, etki: 0.000783373 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: -3.892, etki: -0.033860924 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: 0.334, etki: 0.001971047 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: 1.139, etki: 0.005693069 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: -1.213, etki: -0.005820896 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: -0.431, etki: -0.001810345 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: -1.482, etki: -0.005927682 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: -2.820, etki: -0.010716804 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: 2.157, etki: 0.005393401 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: -0.162, etki: -0.000406174 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: -0.484, etki: -0.00116129 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0.272, etki: 0.00062585 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: 0.000, etki: 0 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: 9.994, etki: 0.007995324 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: -1.628, etki: -0.000162805 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: -2.66, etki: -0.212534 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: -2.2, etki: -0.1694 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.39, etki: 0.00975 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.39, etki: 0.003042 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 1.66, etki: 0.009628 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: 0.08, etki: 0.000048 },
];

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PBR"
      fonAdi="Pusula Portföy Birinci Değişken Fon"
      fonTuru="Pusula Portföy Birinci Değişken Fon"
      slug="pbr"
      rows={rows}
      toplamFonOrani={84.42}
      toplamEtki={1.01}
      sonGuncelleme="13 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 69193,
          bugun: 69329,
          degisim: 136,
        },
        fonToplamDeger: {
          dun: 34785135175,
          bugun: 35407684377,
          degisim: 622369202,
        },
        paraGirisiCikisi: 237122414,
        yorum:
          "PBR fonunda yatırımcı sayısı 136 kişi artarken fon toplam değeri 622,37 milyon TL büyüdü. 237,12 milyon TL net para girişi, fon tarafındaki ilginin daha ölçülü ama pozitif kaldığını gösteriyor. PBR için önceki negatif fon değer değişiminin ardından gelen bu yükseliş, haftaya daha dengeli bir kapanış resmi bırakıyor.",
      }}
    />
  );
}