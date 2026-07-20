import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata: Metadata = {
  title: "TLY Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "TLY fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
  },
  openGraph: {
    title: "TLY Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "TLY fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -9.97, etki: -2.2782 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 2.97, etki: 0.4245 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 1.35, etki: 0.1045 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 0.24, etki: 0.0174 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 2.57, etki: 0.1702 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: 4.59, etki: 0.2577 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 0.1, etki: 0.002 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: -2.3, etki: -0.0239 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 1.97, etki: 0.0106 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: -0.16, etki: -0.0008 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 10.0, etki: 0.027 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -2.39, etki: -0.0034 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: 3.71, etki: 0.0026 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 4.23, etki: 0.5038 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -7.07, etki: -0.0898 },
];

const ozet = fonEtkiOzetiGetir("tly");

export default function TlyEtkiAnaliziPage() {
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
          dun: 97684,
          bugun: 98350,
          degisim: 666,
        },
        fonToplamDeger: {
          dun: 231305786578,
          bugun: 231068572126,
          degisim: -237214452,
        },
        paraGirisiCikisi: -347973858,
        yorum:
          "TLY fonunda yatırımcı sayısı 666 kişi artmasına rağmen fon toplam değeri 237,21 milyon TL geriledi ve 347,97 milyon TL net para çıkışı oluştu. Portföy etkisinin -%0,88 seviyesinde kalması, DSTKF tarafındaki sert negatif katkının OZATD, TPKGY ve TRHOL desteğini bastırdığını gösteriyor. TLY için yatırımcı adedi artarken para akışı ve fiyat etkisi zayıf kaldı.",
      }}
    />
  );
}
