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
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 3.333, etki: 0.321666667 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: -4.545, etki: -0.422272727 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 2.381, etki: 0.22 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: -7.429, etki: -0.4524 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: 10.0, etki: 0.473 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: 9.915, etki: 0.448144989 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: -0.577, etki: -0.019621891 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: -0.455, etki: -0.012427921 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: 0.1, etki: 0.002297702 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: 1.014, etki: 0.016930876 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: -0.729, etki: -0.01151417 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: -9.97, etki: -0.156533201 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: 0.526, etki: 0.005947368 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: -0.963, etki: -0.009921734 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: 2.203, etki: 0.0215893 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: -8.762, etki: -0.07623026 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: 3.708, etki: 0.021875 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: 2.976, etki: 0.014879547 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: 0.091, etki: 0.000436761 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: 1.462, etki: 0.006139295 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: 3.129, etki: 0.012515042 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: -1.081, etki: -0.004108108 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: 2.567, etki: 0.006418284 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: 2.698, etki: 0.006745363 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: 2.012, etki: 0.004828164 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 1.351, etki: 0.003108108 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: 0.0, etki: 0 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: -1.928, etki: -0.0015427 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: -0.996, etki: -0.000099564 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: -4.78, etki: -0.381922 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: -6.06, etki: -0.46662 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.39, etki: 0.00975 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.39, etki: 0.003042 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 0.19, etki: 0.001102 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: -0.28, etki: -0.000168 },
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
          dun: 72566,
          bugun: 75181,
          degisim: 2615,
        },
        fonToplamDeger: {
          dun: 37630634835,
          bugun: 38257144216,
          degisim: 626509381,
        },
        paraGirisiCikisi: 721770852,
        yorum:
          "PBR fonunda yatırımcı sayısı 2.615 kişi artarken fon toplam değeri 626,51 milyon TL yükseldi. 721,77 milyon TL net para girişi güçlü talebi destekliyor. Buna rağmen portföy etkisinin -%0,41 seviyesinde kalması, PCS, BALSU, KTLEV ve PKZ tarafındaki negatif katkının HEDEF, PASEU ve ODINE desteğini aştığını gösteriyor.",
      }}
    />
  );
}
