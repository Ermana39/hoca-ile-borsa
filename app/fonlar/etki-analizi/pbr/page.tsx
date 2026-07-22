import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("pbr");

const rows: FonEtkiRow[] = [
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 3.653, etki: 0.352511416 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: 0, etki: 0 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 3.256, etki: 0.300837209 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: -3.943, etki: -0.24012 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: 2.845, etki: 0.134551422 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: 3.604, etki: 0.162882883 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: 0.606, etki: 0.020589423 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: 1.102, etki: 0.030094488 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: 9.982, etki: 0.229582577 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: -0.448, etki: -0.007488789 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: 0.148, etki: 0.002344214 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: 2.74, etki: 0.043013699 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: -0.225, etki: -0.002541229 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: 0.852, etki: 0.008776628 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: 0.472, etki: 0.004622642 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: -9.988, etki: -0.08689206 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: 2.593, etki: 0.01530083 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: -0.142, etki: -0.00070922 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: 0.177, etki: 0.000851064 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: 0.085, etki: 0.000358362 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: -0.549, etki: -0.002195122 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: -0.184, etki: -0.000698102 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: -2.633, etki: -0.006582976 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: -1.148, etki: -0.002868852 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: 0.726, etki: 0.001741935 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0.067, etki: 0.000153949 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: -1.08, etki: -0.002159827 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: -3.584, etki: -0.002867215 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: 0.695, etki: 0.0000694883 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: -3.18, etki: -0.254082 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: -3, etki: -0.231 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.12, etki: 0.003 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.13, etki: 0.001014 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 6.44, etki: 0.037352 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: 0.48, etki: 0.000288 },
];

const ozet = fonEtkiOzetiGetir("pbr");

export default function PbrEtkiAnaliziPage() {
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
          dun: 76620,
          bugun: 78103,
          degisim: 1483,
        },
        fonToplamDeger: {
          dun: 38577376686,
          bugun: 38686582402,
          degisim: 109205716,
        },
        paraGirisiCikisi: 83569259,
        yorum:
          "PBR'de yatırımcı sayısı 1.483 kişi, fon toplam değeri 109,21 milyon TL arttı; net para girişi 83,57 milyon TL oldu. Portföy etkisi +%0,51 ile pozitife dönerken ODINE, GUNDG ve ANELE ana desteği verdi. PCS, PKZ ve BALSU yükselişi aşağı çekse de pozitif katkılar ağır bastı. Fon değerindeki artışın para girişine yakın kalması, günün büyümesinde fiyat etkisinin ölçülü kaldığını gösteriyor.",
      }}
    />
  );
}
