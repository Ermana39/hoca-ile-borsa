import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata: Metadata = {
  title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PHE fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
  },
  openGraph: {
    title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PHE fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: -4.589, etki: -0.409339385 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 0.478, etki: 0.04215311 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 0.575, etki: 0.047586207 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: 1.132, etki: 0.069849057 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: 0.103, etki: 0.004876797 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: -0.152, etki: -0.00669697 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: -3.061, etki: -0.115408163 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: -2.047, etki: -0.073684211 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: -0.895, etki: -0.030161098 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: 5.74, etki: 0.153836858 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: -9.991, etki: -0.257769848 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: -2.216, etki: -0.054288778 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: -5.477, etki: -0.112275732 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: -0.723, etki: -0.012516077 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: 1.356, etki: 0.022232855 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: -2.104, etki: -0.034086379 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: -2.587, etki: -0.038283912 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: -3.298, etki: -0.046167558 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: 0.0, etki: 0 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: -0.853, etki: -0.010741688 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: -1.476, etki: -0.017715618 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 0.0, etki: 0 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: -0.716, etki: -0.005080501 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: -1.317, etki: -0.007772898 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: -0.106, etki: -0.000592593 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: -4.518, etki: -0.018071242 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 3.213, etki: 0.012531646 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -1.574, etki: -0.005664677 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: -5.317, etki: -0.018079365 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 2.029, etki: 0.006899662 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: -0.748, etki: -0.00246729 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: -4.94, etki: -0.012845238 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: -1.613, etki: -0.002903226 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: 2.413, etki: 0.002895054 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: -1.833, etki: -0.001282834 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: -3.904, etki: -0.001951884 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: -2.576, etki: -0.001030596 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: -2.126, etki: -0.000850368 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: -2.191, etki: -0.006571936 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: 1.18, etki: 0.098294 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: -0.17, etki: -0.014059 },
  { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.13, etki: 0.003328 },
];

const ozet = fonEtkiOzetiGetir("phe");

export default function PheEtkiAnaliziPage() {
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
          dun: 151330,
          bugun: 153264,
          degisim: 1934,
        },
        fonToplamDeger: {
          dun: 74160011336,
          bugun: 75227440542,
          degisim: 1067429206,
        },
        paraGirisiCikisi: 719814017,
        yorum:
          "PHE fonunda yatırımcı sayısı 1.934 kişi artarken fon toplam değeri 1,07 milyar TL yükseldi. 719,81 milyon TL net para girişi talebin sürdüğünü gösterse de portföy etkisinin -%0,85 seviyesine dönmesi, KTLEV, DSTKF ve bankacılık hisselerindeki baskının fon fiyatı beklentisini aşağı çektiğini anlatıyor.",
      }}
    />
  );
}
