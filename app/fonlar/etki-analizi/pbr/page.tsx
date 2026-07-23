import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("pbr");

const rows: FonEtkiRow[] = [
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 3.084, etki: 0.297577093 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: -3.429, etki: -0.318514286 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 6.351, etki: 0.586864865 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: -0.654, etki: -0.039851279 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: 1.277, etki: 0.060382979 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: -0.87, etki: -0.039304348 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: 1.425, etki: 0.048434992 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: -2.57, etki: -0.070163551 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: 2.723, etki: 0.062623762 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: -5.405, etki: -0.09027027 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: 2.074, etki: 0.03277037 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: 0, etki: 0 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: 0.751, etki: 0.008489857 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: 0.362, etki: 0.003729632 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: -1.33, etki: -0.013035994 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: -9.993, etki: -0.086940041 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: -0.202, etki: -0.001193124 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: 4.64, etki: 0.023200758 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: -1.327, etki: -0.006371681 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: -5.115, etki: -0.021483376 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: 0.552, etki: 0.002207235 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: -1.595, etki: -0.00606135 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: 1.258, etki: 0.003144654 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: -1.327, etki: -0.00331675 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: 0.56, etki: 0.001345076 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0, etki: 0 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: -1.237, etki: -0.002474527 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: 9.994, etki: 0.007995125 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: 0, etki: 0 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: -3.18, etki: -0.254082 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: 2, etki: 0.154 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.13, etki: 0.00325 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.13, etki: 0.001014 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: 2.87, etki: 0.016646 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: 1.42, etki: 0.000852 },
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
          dun: 78103,
          bugun: 78223,
          degisim: 120,
        },
        fonToplamDeger: {
          dun: 38686582402,
          bugun: 38343912280,
          degisim: -342670122,
        },
        paraGirisiCikisi: -656504519,
        yorum:
          "PBR'nin yatırımcı sayısı 120 kişi arttı ancak fondan 656,50 milyon TL net para çıktı ve toplam değer 342,67 milyon TL azaldı. Tahmini +%0,36'lık portföy etkisini GUNDG, ODINE ve PCS taşıdı; KTLEV ile PKZ başta olmak üzere TCELL ve SKBNK bu katkının önemli bölümünü geri aldı. Yatırımcı adedindeki sınırlı artışa rağmen yüksek tutarlı çıkış görülmesi, gün içinde fondan ayrılan hesapların ortalama büyüklüğünün dikkat çekici olabileceğine işaret ediyor.",
      }}
    />
  );
}
