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
  { sembol: "GUNDG", fonOrani: 10.52, kapanisMarji: 4.4444, etki: 0.467555556 },
  { sembol: "KTLEV", fonOrani: 9.06, kapanisMarji: 0.4355, etki: 0.039455634 },
  { sembol: "ODINE", fonOrani: 8.72, kapanisMarji: -0.2770, etki: -0.024155125 },
  { sembol: "HEDEF", fonOrani: 5.91, kapanisMarji: -1.0897, etki: -0.064403846 },
  { sembol: "PASEU", fonOrani: 4.2, kapanisMarji: 6.2069, etki: 0.260689655 },
  { sembol: "TATEN", fonOrani: 3.59, kapanisMarji: -1.5748, etki: -0.056535433 },
  { sembol: "AKBNK", fonOrani: 3.07, kapanisMarji: -0.3390, etki: -0.01040678 },
  { sembol: "YKBNK", fonOrani: 2.76, kapanisMarji: -1.4729, etki: -0.040652288 },
  { sembol: "THYAO", fonOrani: 2.48, kapanisMarji: 3.8922, etki: 0.096526946 },
  { sembol: "TRALT", fonOrani: 1.86, kapanisMarji: 1.1858, etki: 0.022055336 },
  { sembol: "DSTKF", fonOrani: 1.64, kapanisMarji: -4.4000, etki: -0.07216 },
  { sembol: "AKSEN", fonOrani: 1.24, kapanisMarji: 5.1298, etki: 0.063609394 },
  { sembol: "TCELL", fonOrani: 1.05, kapanisMarji: 1.3060, etki: 0.013712687 },
  { sembol: "DAPGM", fonOrani: 1.02, kapanisMarji: -1.4675, etki: -0.014968553 },
  { sembol: "SKBNK", fonOrani: 0.95, kapanisMarji: 7.7966, etki: 0.074067797 },
  { sembol: "MGROS", fonOrani: 0.74, kapanisMarji: 1.0277, etki: 0.007604743 },
  { sembol: "TERA", fonOrani: 0.63, kapanisMarji: 0.5380, etki: 0.003389375 },
  { sembol: "MPARK", fonOrani: 0.57, kapanisMarji: -0.8206, etki: -0.004677608 },
  { sembol: "ISCTR", fonOrani: 0.52, kapanisMarji: 0.9148, etki: 0.004757213 },
  { sembol: "PGSUS", fonOrani: 0.47, kapanisMarji: 0.4021, etki: 0.001889719 },
  { sembol: "DCTTR", fonOrani: 0.46, kapanisMarji: -3.7736, etki: -0.017358491 },
  { sembol: "BRSAN", fonOrani: 0.43, kapanisMarji: -1.4978, etki: -0.006440529 },
  { sembol: "IZFAS", fonOrani: 0.42, kapanisMarji: -5.1531, etki: -0.021643017 },
  { sembol: "PEKGY", fonOrani: 0.41, kapanisMarji: 0.0000, etki: 0 },
  { sembol: "ANSGR", fonOrani: 0.26, kapanisMarji: 0.0000, etki: 0 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.07, etki: 0.007252 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: -2.07, etki: -0.203067 },
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
      toplamEtki={0.53}
      sonGuncelleme="6 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 65484,
          bugun: 141398,
          degisim: 75914,
        },
        fonToplamDeger: {
          dun: 34182017363,
          bugun: 70637539401,
          degisim: 36455522038,
        },
        yorum:
          "PBR fonunda yatırımcı sayısının 75.914 kişi artması, fonun yatırımcı tabanında çok güçlü bir genişlemeye işaret ediyor. Fon toplam değerinin 36,46 milyar TL yükselmesi de bu hareketin yalnızca kişi sayısıyla sınırlı kalmadığını, fon ölçeğinde de keskin bir büyüme oluştuğunu gösteriyor. PBR için bu veri, günlük fiyat etkisinden bağımsız olarak fon ilgisinde olağanüstü bir ivmelenme olduğunu öne çıkarıyor.",
      }}
    />
  );
}
