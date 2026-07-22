import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("phe");

const rows: FonEtkiRow[] = [
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: 0, etki: 0 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 3.653, etki: 0.321826484 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 3.256, etki: 0.269581395 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: 3.604, etki: 0.222342342 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: 2.845, etki: 0.13512035 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: 1.102, etki: 0.048724409 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: -0.225, etki: -0.008478261 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: 0.606, etki: 0.021800565 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: 0.852, etki: 0.028715764 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: -3.943, etki: -0.105668571 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: 2.74, etki: 0.070684932 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: 1.005, etki: 0.024632637 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: 9.982, etki: 0.204627949 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: 0.148, etki: 0.002566766 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: 0.472, etki: 0.007735849 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: 0.792, etki: 0.012828054 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: 1.718, etki: 0.025419847 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: -0.448, etki: -0.006278027 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: 1.39, etki: 0.018064516 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: 0.085, etki: 0.001075085 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: 1.369, etki: 0.016425121 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 0.067, etki: 0.000488621 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: -0.184, etki: -0.001304348 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: 0.312, etki: 0.001841448 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: 2.593, etki: 0.014522822 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: 0.177, etki: 0.00070922 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 4.223, etki: 0.016469003 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -0.164, etki: -0.000592105 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 0.726, etki: 0.002467742 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 3.511, etki: 0.01193617 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: 1.662, etki: 0.005484765 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: -2.633, etki: -0.006846295 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: 2.075, etki: 0.00373444 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: 5.284, etki: 0.006340909 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: 0.695, etki: 0.000486418 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: -0.142, etki: -0.000070922 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: -3.584, etki: -0.001433608 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: 4.549, etki: 0.001819742 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: 3.363, etki: 0.0100909 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: -3, etki: -0.2499 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: -3.7, etki: -0.30599 },
  { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.12, etki: 0.003072 },
];

const ozet = fonEtkiOzetiGetir("phe");

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod={ozet.kod}
      fonAdi={ozet.fonAdi}
      fonTuru={ozet.fonTuru}
      profilOzeti={ozet.profilOzeti}
      slug={ozet.slug}
      rows={rows}
      toplamFonOrani={ozet.toplamFonOrani}
      toplamEtki={ozet.toplamEtki}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 158766,
          bugun: 161211,
          degisim: 2445,
        },
        fonToplamDeger: {
          dun: 75887885115,
          bugun: 75362607933,
          degisim: -525277182,
        },
        paraGirisiCikisi: 705883278,
        yorum:
          "PHE'ye 2.445 yeni yatırımcı ve 705,88 milyon TL net para girişi gelirken fon toplam değeri 525,28 milyon TL azaldı. Portföy cephesinde ise görünüm +%0,83'e döndü: ODINE, GUNDG, PASEU ve ANELE yükselişi taşırken PCS, PKZ ve BALSU kazancı sınırladı. Yatırımcı ilgisinin devam etmesi ve etkinin yeniden pozitife geçmesi, fon değerindeki günlük gerilemeye rağmen yeni fiyatlama açısından daha güçlü bir tablo oluşturuyor.",
      }}
    />
  );
}
