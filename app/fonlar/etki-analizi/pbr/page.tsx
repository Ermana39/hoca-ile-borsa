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
  { sembol: "GUNDG", fonOrani: 10.52, kapanisMarji: -1.6393, etki: -0.172459016 },
  { sembol: "KTLEV", fonOrani: 9.06, kapanisMarji: -1.9744, etki: -0.178879402 },
  { sembol: "ODINE", fonOrani: 8.72, kapanisMarji: -8.8384, etki: -0.770707071 },
  { sembol: "HEDEF", fonOrani: 5.91, kapanisMarji: -0.9524, etki: -0.056285714 },
  { sembol: "PASEU", fonOrani: 4.2, kapanisMarji: 9.9767, etki: 0.419019837 },
  { sembol: "TATEN", fonOrani: 3.59, kapanisMarji: -1.5504, etki: -0.055658915 },
  { sembol: "AKBNK", fonOrani: 3.07, kapanisMarji: -5.3881, etki: -0.165413727 },
  { sembol: "YKBNK", fonOrani: 2.76, kapanisMarji: -6.1235, etki: -0.169007407 },
  { sembol: "THYAO", fonOrani: 2.48, kapanisMarji: 0.2251, etki: 0.005581395 },
  { sembol: "TRALT", fonOrani: 1.86, kapanisMarji: 5.5486, etki: 0.103204005 },
  { sembol: "DSTKF", fonOrani: 1.64, kapanisMarji: -1.5748, etki: -0.025826772 },
  { sembol: "AKSEN", fonOrani: 1.24, kapanisMarji: -0.4920, etki: -0.006100861 },
  { sembol: "TCELL", fonOrani: 1.05, kapanisMarji: -1.1070, etki: -0.011623616 },
  { sembol: "DAPGM", fonOrani: 1.02, kapanisMarji: 1.3815, etki: 0.014091392 },
  { sembol: "SKBNK", fonOrani: 0.95, kapanisMarji: 1.2007, etki: 0.011406518 },
  { sembol: "MGROS", fonOrani: 0.74, kapanisMarji: 0.4766, etki: 0.003526608 },
  { sembol: "TERA", fonOrani: 0.63, kapanisMarji: -7.8686, etki: -0.049572491 },
  { sembol: "MPARK", fonOrani: 0.57, kapanisMarji: 1.4872, etki: 0.008477097 },
  { sembol: "ISCTR", fonOrani: 0.52, kapanisMarji: -4.1161, etki: -0.021403509 },
  { sembol: "PGSUS", fonOrani: 0.47, kapanisMarji: -1.6384, etki: -0.007700565 },
  { sembol: "DCTTR", fonOrani: 0.46, kapanisMarji: 3.3758, etki: 0.015528882 },
  { sembol: "BRSAN", fonOrani: 0.43, kapanisMarji: 1.8851, etki: 0.008105925 },
  { sembol: "IZFAS", fonOrani: 0.42, kapanisMarji: -2.1914, etki: -0.009203798 },
  { sembol: "PEKGY", fonOrani: 0.41, kapanisMarji: -0.0699, etki: -0.000286713 },
  { sembol: "ANSGR", fonOrani: 0.26, kapanisMarji: 0.8955, etki: 0.002328358 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.68, etki: 0.070448 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 6.68, etki: 0.655308 },
];

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PBR"
      fonAdi="Pusula Portföy Birinci Değişken Fon"
      fonTuru="Pusula Portföy Birinci Değişken Fon"
      slug="pbr"
      rows={rows}
      toplamFonOrani={83.15}
      toplamEtki={-0.38}
      sonGuncelleme="3 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 64593,
          bugun: 65484,
          degisim: 891,
        },
        fonToplamDeger: {
          dun: 33353265367,
          bugun: 34182017363,
          degisim: 828751996,
        },
        yorum:
          "PBR fonunda yatırımcı sayısının 891 kişi yükselmesi, değişken fon yapısına olan ilginin günlük dalgalanmaya rağmen arttığını gösteriyor. Fon toplam değerindeki 828,75 milyon TL'lik artış, portföy etkisi negatif hesaplanan bir günde fonun büyüklük tarafında destek bulduğunu düşündürür. PBR için bu veri, fon fiyat tahmininin yanında para girişi ve yatırımcı davranışının birlikte izlenmesi gerektiğini öne çıkarıyor.",
      }}
    />
  );
}
