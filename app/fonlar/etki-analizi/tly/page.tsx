import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("tly");

const rows: FonEtkiRow[] = [
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: 0, etki: 0 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 0.34, etki: 0.0483 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: 0, etki: 0 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 0.56, etki: 0.0401 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: 1.26, etki: 0.0834 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: -2.64, etki: -0.1483 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 2.72, etki: 0.0542 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: -4.1, etki: -0.0427 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: -0.19, etki: -0.001 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: 3.13, etki: 0.0163 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: 1.28, etki: 0.0034 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -6.95, etki: -0.0097 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: -0.2, etki: -0.0001 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 0, etki: 0 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: 2.54, etki: 0.0323 },
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
          dun: 99099,
          bugun: 98970,
          degisim: -129,
        },
        fonToplamDeger: {
          dun: 226789736588,
          bugun: 232874657613,
          degisim: 6084921025,
        },
        paraGirisiCikisi: 1310146537,
        yorum:
          "TLY'nin fon toplam değeri 6,08 milyar TL büyürken 1,31 milyar TL net para girişi gerçekleşti; yatırımcı sayısı ise 129 kişi azaldı. Buna karşılık güncel portföy etkisi yalnızca +%0,08 düzeyinde. TERA, ANELE ve OZATD'den gelen katkılar TRHOL ile SELEC'teki kayıpları ancak dengeledi; yüksek ağırlıklı DSTKF ve TPKGY'nin etkisiz kalması tahmini hareketi sınırladı. Fon değerindeki güçlü artışın yanında yeni gün için hesaplanan etkinin zayıf kalması, iki verinin aynı dönemi anlatmadığını özellikle görünür kılıyor.",
      }}
    />
  );
}
