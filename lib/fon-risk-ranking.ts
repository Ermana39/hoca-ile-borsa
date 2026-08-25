import {
  getCurrentFundsData,
  type Fund,
} from "@/lib/fon-platform";

export type RiskMetricKey =
  | "annualizedVolatility"
  | "maxDrawdown"
  | "positiveDayRatio"
  | "oneYearReturn";

export type RiskMetricConfig = {
  key: RiskMetricKey;
  slug: string;
  label: string;
  better: "lower" | "higher";
  description: string;
};

export type RiskRankingCategory = {
  label: string;
  slug: string;
  fundCount: number;
};

export type RiskRankingRow = {
  rank: number;
  kod: string;
  slug: string;
  ad: string;
  kategori: string;
  yonetici: string;
  yoneticiSlug: string;
  value: number;
  percentile: number;
  assessment: string;
  peerCount: number;
  fonToplamDeger: number | null;
  riskDegeri: number | null;
};

export type RiskRankingResult = {
  metric: RiskMetricConfig;
  category: RiskRankingCategory;
  peerCount: number;
  median: number | null;
  rows: RiskRankingRow[];
};

export const RISK_METRIC_CONFIGS: RiskMetricConfig[] = [
  {
    key: "annualizedVolatility",
    slug: "volatilite",
    label: "Volatilite",
    better: "lower",
    description:
      "Fiyat dalgalanmasını gösterir; aynı şemsiye türünde daha düşük değer daha sakin bir fiyat hareketine işaret eder.",
  },
  {
    key: "maxDrawdown",
    slug: "maksimum-drawdown",
    label: "Maksimum Drawdown",
    better: "higher",
    description:
      "Fonun tepe noktasından gördüğü en sert geri çekilmeyi gösterir; sıfıra yakın değerler daha güçlü görünür.",
  },
  {
    key: "positiveDayRatio",
    slug: "pozitif-gun-orani",
    label: "Pozitif Gün Oranı",
    better: "higher",
    description:
      "İncelenen işlem günleri içinde fon fiyatının pozitif kapandığı günlerin oranını gösterir.",
  },
  {
    key: "oneYearReturn",
    slug: "bir-yillik-getiri",
    label: "1 Yıllık Getiri",
    better: "higher",
    description:
      "Fonun son bir yıllık getirisini aynı şemsiye türündeki diğer fonlarla karşılaştırır.",
  },
];

function round(value: number, digits = 2) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function median(values: number[]) {
  if (values.length === 0) return null;

  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) return sorted[middle];
  return (sorted[middle - 1] + sorted[middle]) / 2;
}

function assessmentFromPercentile(percentile: number | null) {
  if (percentile === null) return "Yeterli veri yok";
  if (percentile >= 80) return "Çok iyi";
  if (percentile >= 60) return "İyi";
  if (percentile >= 35) return "Orta";
  return "Zayıf";
}

function metricValue(fund: Fund, key: RiskMetricKey) {
  const value = fund.riskAnalizi?.metrics?.[key];
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function rankableFunds() {
  return getCurrentFundsData().fonlar.filter(
    (fund) => fund.aktifMi && fund.riskAnalizi?.metrics
  );
}

export function createRiskCategorySlug(value: string) {
  const normalized = (value || "Bilinmiyor")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "bilinmiyor";
}

export function getRiskMetricConfigByKey(key: string) {
  return RISK_METRIC_CONFIGS.find((config) => config.key === key) ?? null;
}

export function getRiskMetricConfigBySlug(slug: string) {
  return RISK_METRIC_CONFIGS.find((config) => config.slug === slug) ?? null;
}

export function getRiskRankingCategories() {
  const categories = new Map<string, RiskRankingCategory>();

  for (const fund of rankableFunds()) {
    const label = fund.kategori || "Bilinmiyor";
    const slug = createRiskCategorySlug(label);
    const category = categories.get(slug);

    if (category) {
      category.fundCount += 1;
    } else {
      categories.set(slug, { label, slug, fundCount: 1 });
    }
  }

  return Array.from(categories.values()).sort((a, b) =>
    a.label.localeCompare(b.label, "tr")
  );
}

export function getRiskRanking(metricSlug: string, categorySlug: string) {
  const metric = getRiskMetricConfigBySlug(metricSlug);
  const category =
    getRiskRankingCategories().find((item) => item.slug === categorySlug) ?? null;

  if (!metric || !category) return null;

  const categoryFunds = rankableFunds().filter(
    (fund) => (fund.kategori || "Bilinmiyor") === category.label
  );
  const values = categoryFunds
    .map((fund) => metricValue(fund, metric.key))
    .filter((value): value is number => value !== null);
  const sortedValues = [...values].sort((a, b) =>
    metric.better === "lower" ? a - b : b - a
  );

  if (sortedValues.length < 5) {
    return {
      metric,
      category,
      peerCount: sortedValues.length,
      median: median(values),
      rows: [],
    };
  }

  const rows = categoryFunds
    .map((fund) => {
      const value = metricValue(fund, metric.key);

      if (value === null) return null;

      const rank = sortedValues.findIndex((item) => item === value) + 1;
      const percentile = round(
        ((sortedValues.length - rank + 1) / sortedValues.length) * 100,
        2
      );

      return {
        rank,
        kod: fund.kod,
        slug: fund.slug,
        ad: fund.ad,
        kategori: fund.kategori,
        yonetici: fund.yonetici,
        yoneticiSlug: fund.yoneticiSlug,
        value: round(value, 8),
        percentile,
        assessment: assessmentFromPercentile(percentile),
        peerCount: sortedValues.length,
        fonToplamDeger: fund.fonToplamDeger,
        riskDegeri: fund.riskDegeri,
      };
    })
    .filter((row): row is RiskRankingRow => row !== null)
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        a.kod.localeCompare(b.kod, "tr", { sensitivity: "base" })
    );

  return {
    metric,
    category,
    peerCount: sortedValues.length,
    median: round(median(values) ?? 0, 8),
    rows,
  };
}

export function getRiskRankingStaticParams() {
  const categories = getRiskRankingCategories();

  return RISK_METRIC_CONFIGS.flatMap((metric) =>
    categories
      .map((category) => {
        const ranking = getRiskRanking(metric.slug, category.slug);
        return ranking && ranking.peerCount >= 5
          ? { metrik: metric.slug, kategori: category.slug }
          : null;
      })
      .filter((item): item is { metrik: string; kategori: string } => item !== null)
  );
}
