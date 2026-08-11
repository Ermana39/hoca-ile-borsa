import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data", "fonlar");
const DETAIL_DIR = path.join(DATA_DIR, "fund-details");

export type PeriodKey = "gunluk" | "besGun" | "birAy" | "ucAy";
export type ReturnKey =
  | "birAy"
  | "ucAy"
  | "altiAy"
  | "yilbasi"
  | "birYil"
  | "ucYil"
  | "besYil";

export type FundPeriodValues = Record<PeriodKey, number | null>;
export type FundReturns = Record<ReturnKey, number | null>;

export type FundHistoryRow = {
  fonKodu: string;
  fonAdi: string;
  tarih: string;
  fiyat: number | null;
  tedavuldekiPaySayisi: number | null;
  kisiSayisi: number | null;
  fonToplamDeger: number | null;
  gunlukGetiri: number | null;
  paraGirisiCikisi: number | null;
  yatirimciDegisimi: number | null;
};

export type RiskComparison = {
  key: string;
  label: string;
  value: number | null;
  median: number | null;
  rank: number;
  peerCount: number;
  percentile: number | null;
  assessment: string;
};

export type RiskAnalysis = {
  status: "ok" | "insufficient";
  requiredDays: number;
  observedDays: number;
  metrics: null | {
    positiveDayRatio: number | null;
    negativeDayRatio: number | null;
    totalDays: number;
    averagePositiveReturn: number | null;
    averageNegativeReturn: number | null;
    bestDay: { date: string | null; value: number | null };
    worstDay: { date: string | null; value: number | null };
    annualizedVolatility: number | null;
    maxDrawdown: number | null;
    recoveryDays: number | null;
    oneYearReturn: number | null;
  };
  comparisons: RiskComparison[];
  comment: string;
};

export type Fund = {
  kod: string;
  slug: string;
  ad: string;
  kategori: string;
  riskDegeri: number | null;
  kapYoneticiKodu: string;
  yonetici: string;
  yoneticiSlug: string;
  yoneticiKaynak: string;
  tarih: string;
  aktifMi: boolean;
  fiyat: number | null;
  tedavuldekiPaySayisi: number | null;
  kisiSayisi: number | null;
  fonToplamDeger: number | null;
  gunlukGetiri: number | null;
  getiriler: FundReturns;
  paraAkisi: FundPeriodValues;
  yatirimciDegisimi: FundPeriodValues;
  tarihselGunSayisi: number;
  riskAnalizi: RiskAnalysis;
  sonOtuzIslemGunu: FundHistoryRow[];
};

export type FundListItem = {
  kod: string;
  slug: string;
  ad: string;
  yonetici: string;
  yoneticiSlug: string;
  kategori: string;
  value: number | null;
  fonToplamDeger: number | null;
  gunlukGetiri: number | null;
  yatirimciDegisimi: number | null;
};

export type DashboardData = {
  version: number;
  generatedAt: string;
  sonIslemTarihi: string | null;
  ozet: {
    toplamTakipEdilenFonSayisi: number;
    toplamFonBuyuklugu: number | null;
    bugunEnYuksekParaGirisi: FundListItem | null;
    bugunEnYuksekParaCikisi: FundListItem | null;
    enCokYatirimciKazanan: FundListItem | null;
    enCokYatirimciKaybeden: FundListItem | null;
  };
  liderTablolari: Record<string, FundListItem[]>;
  yoneticiSayisi: number;
};

export type CurrentFundsData = {
  version: number;
  generatedAt: string;
  sonIslemTarihi: string | null;
  fonSayisi: number;
  toplamFonBuyuklugu: number | null;
  fonlar: Fund[];
};

export type ManagerSummary = {
  slug: string;
  yonetici: string;
  kapYoneticiKodlari: string[];
  yonetilenFonSayisi: number;
  toplamFonBuyuklugu: number | null;
  toplamYatirimciSayisi: number;
  paraAkisi: FundPeriodValues;
  ortalamaGetiri: Pick<FundReturns, "birAy" | "ucAy" | "altiAy" | "birYil">;
  enIyiPerformansDonemi: string | null;
  enIyiPerformansGosterenFon: FundListItem | null;
  enYuksekParaGirisiAlanFon: FundListItem | null;
  enBuyukFon: FundListItem | null;
  fonlar: FundListItem[];
};

export type ManagersData = {
  version: number;
  generatedAt: string;
  sonIslemTarihi: string | null;
  yoneticiler: ManagerSummary[];
};

export type FundDetailData = {
  version: number;
  generatedAt: string;
  sonIslemTarihi: string | null;
  fund: Fund;
  history: FundHistoryRow[];
  sonOtuzIslemGunu: FundHistoryRow[];
  riskAnalizi: RiskAnalysis;
};

function readJson<T>(fileName: string, fallback: T): T {
  const filePath = path.join(DATA_DIR, fileName);

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function safeFundSlug(slug: string) {
  const normalized = String(slug || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized || "";
}

function safeManagerSlug(slug: string) {
  const normalized = String(slug || "").toLowerCase().replace(/[^a-z0-9-]/g, "");
  return normalized || "";
}

export function getCurrentFundsData() {
  return readJson<CurrentFundsData>("fund-current.json", {
    version: 1,
    generatedAt: "",
    sonIslemTarihi: null,
    fonSayisi: 0,
    toplamFonBuyuklugu: null,
    fonlar: [],
  });
}

export function getDashboardData() {
  return readJson<DashboardData>("fund-dashboard.json", {
    version: 1,
    generatedAt: "",
    sonIslemTarihi: null,
    ozet: {
      toplamTakipEdilenFonSayisi: 0,
      toplamFonBuyuklugu: null,
      bugunEnYuksekParaGirisi: null,
      bugunEnYuksekParaCikisi: null,
      enCokYatirimciKazanan: null,
      enCokYatirimciKaybeden: null,
    },
    liderTablolari: {},
    yoneticiSayisi: 0,
  });
}

export function getManagersData() {
  return readJson<ManagersData>("fund-managers.json", {
    version: 1,
    generatedAt: "",
    sonIslemTarihi: null,
    yoneticiler: [],
  });
}

export function getFundBySlug(slug: string) {
  const safeSlug = safeFundSlug(slug);
  return getCurrentFundsData().fonlar.find((fund) => fund.slug === safeSlug) ?? null;
}

export function getFundDetail(slug: string) {
  const safeSlug = safeFundSlug(slug);
  if (!safeSlug) return null;

  const filePath = path.join(DETAIL_DIR, `${safeSlug}.json`);

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as FundDetailData;
  } catch {
    return null;
  }
}

export function getAllFundSlugs() {
  return getCurrentFundsData()
    .fonlar.filter((fund) => fund.aktifMi)
    .map((fund) => fund.slug);
}

export function getManagerBySlug(slug: string) {
  const safeSlug = safeManagerSlug(slug);
  return getManagersData().yoneticiler.find((manager) => manager.slug === safeSlug) ?? null;
}

export function getAllManagerSlugs() {
  return getManagersData().yoneticiler.map((manager) => manager.slug);
}

export function getFundCategories() {
  return Array.from(
    new Set(
      getCurrentFundsData()
        .fonlar.filter((fund) => fund.aktifMi)
        .map((fund) => fund.kategori)
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b, "tr"));
}

export function getFundManagersForFilter() {
  return getManagersData().yoneticiler
    .map((manager) => manager.yonetici)
    .sort((a, b) => a.localeCompare(b, "tr"));
}

export function getPeriodLabel(period: PeriodKey) {
  const labels: Record<PeriodKey, string> = {
    gunluk: "Bugün",
    besGun: "5 Gün",
    birAy: "1 Ay",
    ucAy: "3 Ay",
  };

  return labels[period];
}

export function getReturnLabel(key: ReturnKey) {
  const labels: Record<ReturnKey, string> = {
    birAy: "1A",
    ucAy: "3A",
    altiAy: "6A",
    yilbasi: "YBB",
    birYil: "1Y",
    ucYil: "3Y",
    besYil: "5Y",
  };

  return labels[key];
}
