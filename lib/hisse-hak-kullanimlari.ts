import hakKullanimlariDocument from "@/data/hisse-hak-kullanimlari.generated.json";

export type HakKullanimiDurumu = "ok" | "unavailable" | "error" | "missing";

export type GecmisTemettuKaydi = {
  isoTarih: string;
  brut: number;
  paraBirimi: string;
};

export type GecmisBolunmeKaydi = {
  isoTarih: string;
  oran: string;
  katsayi: number;
  kaynak: "piyasa-verisi" | "kunye-arsivi";
};

export type HisseHakKullanimlari = {
  durum: HakKullanimiDurumu;
  kaynakSembol: string;
  kaynakUrl: string;
  temettuler: GecmisTemettuKaydi[];
  bolunmeler: GecmisBolunmeKaydi[];
};

type HakKullanimlariDocument = {
  generatedAt: string;
  source: {
    name: string;
    url: string;
    note: string;
  };
  profiles: Record<string, Omit<HisseHakKullanimlari, "durum"> & {
    durum: Exclude<HakKullanimiDurumu, "missing">;
  }>;
};

const document = hakKullanimlariDocument as HakKullanimlariDocument;

export const hakKullanimlariGuncellemeTarihi = document.generatedAt;
export const hakKullanimlariKaynakAdi = document.source.name;

export function getHisseHakKullanimlari(sembol: string): HisseHakKullanimlari {
  const code = sembol.trim().toUpperCase();
  const profile = document.profiles[code];

  if (!profile) {
    return {
      durum: "missing",
      kaynakSembol: `${code}.IS`,
      kaynakUrl: document.source.url,
      temettuler: [],
      bolunmeler: [],
    };
  }

  return {
    durum: profile.durum,
    kaynakSembol: profile.kaynakSembol,
    kaynakUrl: profile.kaynakUrl,
    temettuler: Array.isArray(profile.temettuler) ? profile.temettuler : [],
    bolunmeler: Array.isArray(profile.bolunmeler) ? profile.bolunmeler : [],
  };
}
