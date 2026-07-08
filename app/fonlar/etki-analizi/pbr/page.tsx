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
  { sembol: "GUNDG", fonOrani: 10.52, kapanisMarji: 4.5200, etki: 0.475504 },
  { sembol: "KTLEV", fonOrani: 9.06, kapanisMarji: -2.4390, etki: -0.22097561 },
  { sembol: "ODINE", fonOrani: 8.72, kapanisMarji: 4.1111, etki: 0.358488889 },
  { sembol: "HEDEF", fonOrani: 5.91, kapanisMarji: 7.7122, etki: 0.455793908 },
  { sembol: "PASEU", fonOrani: 4.2, kapanisMarji: -8.0919, etki: -0.33986014 },
  { sembol: "TATEN", fonOrani: 3.59, kapanisMarji: -3.2800, etki: -0.117752 },
  { sembol: "AKBNK", fonOrani: 3.07, kapanisMarji: 0.1361, etki: 0.004176871 },
  { sembol: "YKBNK", fonOrani: 2.76, kapanisMarji: 0.3737, etki: 0.010315003 },
  { sembol: "THYAO", fonOrani: 2.48, kapanisMarji: 0.3602, etki: 0.008933718 },
  { sembol: "TRALT", fonOrani: 1.86, kapanisMarji: 1.9531, etki: 0.036328125 },
  { sembol: "DSTKF", fonOrani: 1.64, kapanisMarji: 9.3445, etki: 0.153249651 },
  { sembol: "AKSEN", fonOrani: 1.24, kapanisMarji: 5.6437, etki: 0.069982363 },
  { sembol: "TCELL", fonOrani: 1.05, kapanisMarji: -0.3683, etki: -0.003867403 },
  { sembol: "DAPGM", fonOrani: 1.02, kapanisMarji: -0.4255, etki: -0.004340426 },
  { sembol: "SKBNK", fonOrani: 0.95, kapanisMarji: 0.1048, etki: 0.000995807 },
  { sembol: "MGROS", fonOrani: 0.74, kapanisMarji: 1.4867, etki: 0.011001565 },
  { sembol: "TERA", fonOrani: 0.63, kapanisMarji: -1.6054, etki: -0.010113712 },
  { sembol: "MPARK", fonOrani: 0.57, kapanisMarji: 0.4137, etki: 0.002358156 },
  { sembol: "ISCTR", fonOrani: 0.52, kapanisMarji: 0.7671, etki: 0.003988842 },
  { sembol: "PGSUS", fonOrani: 0.47, kapanisMarji: -0.4005, etki: -0.001882151 },
  { sembol: "DCTTR", fonOrani: 0.46, kapanisMarji: 1.1312, etki: 0.00520362 },
  { sembol: "BRSAN", fonOrani: 0.43, kapanisMarji: -1.2522, etki: -0.005384615 },
  { sembol: "IZFAS", fonOrani: 0.42, kapanisMarji: -0.4724, etki: -0.001984252 },
  { sembol: "PEKGY", fonOrani: 0.41, kapanisMarji: 2.2393, etki: 0.009181246 },
  { sembol: "ANSGR", fonOrani: 0.26, kapanisMarji: 0.2219, etki: 0.000576923 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.01, etki: 0.001036 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 0.46, etki: 0.045126 },
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
      toplamEtki={0.95}
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
