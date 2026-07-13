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
  { sembol: "GUNDG", fonOrani: 10.52, kapanisMarji: 1.7812, etki: 0.187379135 },
  { sembol: "KTLEV", fonOrani: 9.06, kapanisMarji: 5.0000, etki: 0.453 },
  { sembol: "ODINE", fonOrani: 8.72, kapanisMarji: 5.0160, etki: 0.437395945 },
  { sembol: "HEDEF", fonOrani: 5.91, kapanisMarji: 9.9880, etki: 0.590288809 },
  { sembol: "PASEU", fonOrani: 4.2, kapanisMarji: -3.2609, etki: -0.136956522 },
  { sembol: "TATEN", fonOrani: 3.59, kapanisMarji: -0.4963, etki: -0.017816377 },
  { sembol: "AKBNK", fonOrani: 3.07, kapanisMarji: -4.0082, etki: -0.123050272 },
  { sembol: "YKBNK", fonOrani: 2.76, kapanisMarji: -3.6702, etki: -0.101297872 },
  { sembol: "THYAO", fonOrani: 2.48, kapanisMarji: -4.6662, etki: -0.115721464 },
  { sembol: "TRALT", fonOrani: 1.86, kapanisMarji: -1.8199, etki: -0.033850575 },
  { sembol: "DSTKF", fonOrani: 1.64, kapanisMarji: -2.5510, etki: -0.041836735 },
  { sembol: "AKSEN", fonOrani: 1.24, kapanisMarji: -0.9460, etki: -0.011730662 },
  { sembol: "TCELL", fonOrani: 1.05, kapanisMarji: -2.5878, etki: -0.027171904 },
  { sembol: "DAPGM", fonOrani: 1.02, kapanisMarji: -3.6325, etki: -0.037051282 },
  { sembol: "SKBNK", fonOrani: 0.95, kapanisMarji: 1.7277, etki: 0.016413613 },
  { sembol: "MGROS", fonOrani: 0.74, kapanisMarji: -1.3878, etki: -0.010269854 },
        { sembol: "TERA", fonOrani: 0.25, kapanisMarji: 3.548, etki: 0.008869908 },
        { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: 1.872, etki: 0.007487923 },
  { sembol: "ISCTR", fonOrani: 0.52, kapanisMarji: -2.5606, etki: -0.013314879 },
        { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: 1.733, etki: 0.00658697 },
        { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: -3.678, etki: -0.009194053 },
        { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: 1.998, etki: 0.009590866 },
        { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: 1.307, etki: 0.003137255 },
        { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0.136, etki: 0.000313351 },
        { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: 1.974, etki: 0.003947368 },
        { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: 3.26, etki: 0.260474 },
      { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: 0.849, etki: 0.004243635 },
      { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: 2.293, etki: 0.00962963 },
      { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: 9.961, etki: 0.007969152 },
      { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: 2.635, etki: 0.000263496 },
      { sembol: "PCS", fonOrani: 7.7, kapanisMarji: 3.14, etki: 0.24178 },
      { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.13, etki: 0.00325 },
      { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.13, etki: 0.001014 },
      { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 1.18, etki: 0.006844 },
      { sembol: "PA2", fonOrani: 0.06, kapanisMarji: 0.86, etki: 0.000516 },
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
      toplamEtki={0.94}
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
