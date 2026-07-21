import profileMetadata from "@/lib/hisse-profile-metadata.generated.json";
import officialSources from "@/data/hisse-resmi-kaynaklar.json";
import type { Hisse } from "@/lib/hisseler";

export type HisseDegisiklikKaydi = {
  date: string;
  title: string;
  description: string;
};

export type HisseProfilMetadata = {
  verifiedAt: string;
  publishedAt: string;
  history: HisseDegisiklikKaydi[];
};

export type HisseResmiKaynaklari = {
  resmiWeb?: string;
  yatirimciIliskileri?: string;
  kapSirketProfili?: string;
  kaynakDogrulamaTarihi?: string;
};

type GeneratedProfileMetadata = {
  profiles: Record<string, HisseProfilMetadata | undefined>;
};

type OfficialSourceRecord = {
  resmiWeb?: string;
  yatirimciIliskileri?: string;
  kapSirketProfili?: string;
  dogrulamaTarihi?: string;
};

type OfficialSources = {
  profiles: Record<string, OfficialSourceRecord | undefined>;
};

function normalizeHttpUrl(value?: string): string | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  const raw = value.trim();
  const candidate = /^[a-z][a-z0-9+.-]*:/i.test(raw)
    ? raw
    : `https://${raw}`;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    url.hash = "";
    return url.toString();
  } catch {
    return undefined;
  }
}

export function getHisseProfilMetadata(
  sembol: string
): HisseProfilMetadata | undefined {
  const profiles = (profileMetadata as GeneratedProfileMetadata).profiles;
  return profiles[sembol.toLowerCase()];
}

export function getHisseResmiKaynaklari(hisse: Hisse): HisseResmiKaynaklari {
  const profiles = (officialSources as OfficialSources).profiles;
  const record = profiles[hisse.kod.toLowerCase()];
  const kurumsal = hisse.kurumsalBilgiler;

  return {
    resmiWeb:
      normalizeHttpUrl(kurumsal?.web) ?? normalizeHttpUrl(record?.resmiWeb),
    yatirimciIliskileri:
      normalizeHttpUrl(kurumsal?.yatirimciIliskileri) ??
      normalizeHttpUrl(record?.yatirimciIliskileri),
    kapSirketProfili:
      normalizeHttpUrl(kurumsal?.kapSirketProfili) ??
      normalizeHttpUrl(record?.kapSirketProfili),
    kaynakDogrulamaTarihi: record?.dogrulamaTarihi,
  };
}
