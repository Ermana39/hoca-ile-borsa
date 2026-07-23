import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("phe");

const rows: FonEtkiRow[] = [
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: -3.429, etki: -0.305828571 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 3.084, etki: 0.271674009 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 6.351, etki: 0.525891892 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: -0.87, etki: -0.053652174 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: 1.277, etki: 0.060638298 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: -2.57, etki: -0.113598131 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: 0.751, etki: 0.028324568 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: 1.425, etki: 0.051284109 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: 0.362, etki: 0.012202776 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: -0.654, etki: -0.01753718 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: 0, etki: 0 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: -0.459, etki: -0.011255743 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: 2.723, etki: 0.055816832 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: 2.074, etki: 0.035881481 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: -1.33, etki: -0.021815336 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: -1.291, etki: -0.020909091 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: -2.314, etki: -0.034246404 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: -5.405, etki: -0.075675676 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: -2.986, etki: -0.038815467 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: -5.115, etki: -0.064450128 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: -0.715, etki: -0.008578237 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 0, etki: 0 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: -1.595, etki: -0.011325153 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: -0.187, etki: -0.001101431 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: -0.202, etki: -0.001132457 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: -1.327, etki: -0.005309735 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: -10, etki: -0.039 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -1.208, etki: -0.004349259 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 0.56, etki: 0.001905524 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 3.083, etki: 0.010483042 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: -5.813, etki: -0.019182561 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: 1.258, etki: 0.00327044 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: 0.813, etki: 0.001463415 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: -2.644, etki: -0.003173233 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: 0, etki: 0 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 4.64, etki: 0.002320076 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: 9.994, etki: 0.003997562 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: 9.934, etki: 0.003973727 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: -1.22, etki: -0.003660662 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: -0.01, etki: -0.000833 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: 2, etki: 0.1654 },
  { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.13, etki: 0.003328 },
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
          dun: 161211,
          bugun: 160454,
          degisim: -757,
        },
        fonToplamDeger: {
          dun: 75362607933,
          bugun: 74464707242,
          degisim: -897900691,
        },
        paraGirisiCikisi: -1765745461,
        yorum:
          "PHE'de 1,77 milyar TL net para çıkışına 757 kişilik yatırımcı kaybı eşlik etti; fon toplam değeri de 897,90 milyon TL geriledi. Portföy hesabının +%0,38 göstermesinde GUNDG, ODINE ve PCS belirleyici olurken KTLEV, THYAO, TCELL ve TTKOM katkıyı aşağı çekti. Fiyat etkisinin artıda kalması olumlu bir ayrıntı olsa da para çıkışı ve yatırımcı sayısındaki gerileme, PHE tarafında günün baskın sinyalinin zayıflayan fon ilgisi olduğunu gösteriyor.",
      }}
    />
  );
}
