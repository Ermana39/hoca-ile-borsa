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
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 0.439, etki: 0.042345197 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: 0.051, etki: 0.004739796 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 2.772, etki: 0.256158416 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: 9.939, etki: 0.60526889 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: -1.231, etki: -0.058215385 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: -3.579, etki: -0.161763485 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: -1.836, etki: -0.062415459 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: -2.249, etki: -0.061394303 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: 5.469, etki: 0.12578125 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: 1.101, etki: 0.018385321 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: 2.689, etki: 0.042487395 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: -9.978, etki: -0.156659436 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: 2.143, etki: 0.024220251 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: -0.411, etki: -0.004228739 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: -2.875, etki: -0.028178914 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: 1.242, etki: 0.010804536 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: 0.999, etki: 0.005893452 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: 2.496, etki: 0.012481645 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: 3.872, etki: 0.018583569 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: -0.433, etki: -0.001818182 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: -0.602, etki: -0.002406739 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: 0.363, etki: 0.001378476 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: 0.311, etki: 0.000776398 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: -6.591, etki: -0.01647681 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: 0.405, etki: 0.000972447 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0.136, etki: 0.000312076 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: -0.358, etki: -0.000716846 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: 9.989, etki: 0.007991498 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: -0.318, etki: -0.000031826 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: 3.25, etki: 0.259675 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: 2.04, etki: 0.15708 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.13, etki: 0.00325 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.13, etki: 0.001014 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 3.59, etki: 0.020822 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: -0.95, etki: -0.00057 },
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
      toplamEtki={1.07}
      sonGuncelleme="14 Temmuz 2026"
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
