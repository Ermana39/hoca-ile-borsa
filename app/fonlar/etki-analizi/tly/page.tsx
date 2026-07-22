import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("tly");

const rows: FonEtkiRow[] = [
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: 2.74, etki: 0.626 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 2.6, etki: 0.3718 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0.07, etki: 0.0052 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 3.03, etki: 0.2167 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: -2.63, etki: -0.1746 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: 5.28, etki: 0.2964 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 9.98, etki: 0.1986 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 3.15, etki: 0.0328 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 0.31, etki: 0.0017 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: 0, etki: 0 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 2.84, etki: 0.0077 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -3.47, etki: -0.0049 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: 2.59, etki: 0.0018 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 3.7, etki: 0.4407 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: -5.86, etki: -0.0744 },
];

const ozet = fonEtkiOzetiGetir("tly");

export default function TlyEtkiAnaliziPage() {
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
          dun: 98595,
          bugun: 99099,
          degisim: 504,
        },
        fonToplamDeger: {
          dun: 232632714723,
          bugun: 226789736588,
          degisim: -5842978135,
        },
        paraGirisiCikisi: 2086073808,
        yorum:
          "TLY'de yatırımcı sayısı 504 kişi artarken 2,09 milyar TL net para girişi kaydedildi; buna karşılık fon toplam değeri 5,84 milyar TL geriledi. Güncel portföy hesabında ibre +%1,95'e döndü. DSTKF, TPKGY, OZATD ve TRHOL'den gelen güçlü katkı, TERA ve HMV'deki kayıpları fazlasıyla karşıladı. Önceki negatif fiyatlamanın fon değerine yansıdığı bu tabloda yeni günün pozitif hisse etkisi toparlanma ihtimalini belirginleştiriyor.",
      }}
    />
  );
}
