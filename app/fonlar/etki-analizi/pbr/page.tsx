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
  { sembol: "TERA", fonOrani: 0.63, kapanisMarji: 6.1863, etki: 0.038973487 },
  { sembol: "MPARK", fonOrani: 0.57, kapanisMarji: -2.7663, etki: -0.015768099 },
  { sembol: "ISCTR", fonOrani: 0.52, kapanisMarji: -2.5606, etki: -0.013314879 },
  { sembol: "PGSUS", fonOrani: 0.47, kapanisMarji: -4.6525, etki: -0.021866743 },
  { sembol: "DCTTR", fonOrani: 0.46, kapanisMarji: -3.2066, etki: -0.014750186 },
  { sembol: "BRSAN", fonOrani: 0.43, kapanisMarji: -4.0761, etki: -0.017527174 },
  { sembol: "IZFAS", fonOrani: 0.42, kapanisMarji: -4.4304, etki: -0.018607595 },
  { sembol: "PEKGY", fonOrani: 0.41, kapanisMarji: -0.6160, etki: -0.002525667 },
  { sembol: "ANSGR", fonOrani: 0.26, kapanisMarji: -0.5166, etki: -0.001343173 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.51, etki: 0.052836 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: -2.53, etki: -0.248193 },
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
      toplamEtki={0.77}
      sonGuncelleme="8 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 66359,
          bugun: 68039,
          degisim: 1680,
        },
        fonToplamDeger: {
          dun: 34607402852,
          bugun: 35224891890,
          degisim: 617489038,
        },
        yorum:
          "PBR fonunda yatırımcı sayısının 1.680 kişi artması, fonun yatırımcı ilgisinde güçlü ama daha dengeli bir genişleme olduğunu gösteriyor. Fon toplam değerindeki 617,49 milyon TL'lik yükseliş, katılımcı artışının fon büyüklüğüne de pozitif yansıdığını anlatıyor. PBR için bu tablo, önceki veride görünen olağandışı sıçramadan ziyade istikrarlı ve sağlıklı bir büyüme görünümü sunuyor.",
      }}
    />
  );
}
