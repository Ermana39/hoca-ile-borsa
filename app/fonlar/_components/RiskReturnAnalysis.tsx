import {
  formatNumber,
  formatPercent,
  formatSignedPercent,
  valueBgClass,
  valueColorClass,
} from "@/lib/fon-format";
import {
  createRiskCategorySlug,
  getRiskMetricConfigByKey,
} from "@/lib/fon-risk-ranking";
import type { Fund, RiskAnalysis } from "@/lib/fon-platform";
import Link from "@/components/NoPrefetchLink";

function ProgressBar({
  value,
  tone = "blue",
}: {
  value: number | null | undefined;
  tone?: "blue" | "green" | "red" | "amber";
}) {
  const width =
    typeof value === "number" && Number.isFinite(value)
      ? Math.max(0, Math.min(100, value * 100))
      : 0;
  const color = {
    blue: "bg-blue-600",
    green: "bg-emerald-600",
    red: "bg-red-600",
    amber: "bg-amber-500",
  }[tone];

  return (
    <div className="mt-2 h-2 rounded-full bg-slate-100">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${width}%` }} />
    </div>
  );
}

function MetricBox({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-lg font-bold text-slate-950">{value}</p>
      {sub ? <p className="mt-1 text-sm text-slate-500">{sub}</p> : null}
    </div>
  );
}

export default function RiskReturnAnalysis({
  analysis,
  fund,
}: {
  analysis: RiskAnalysis;
  fund: Pick<Fund, "kategori" | "kod" | "slug">;
}) {
  if (analysis.status !== "ok" || !analysis.metrics) {
    return (
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-bold text-slate-950">Risk / Getiri Analizi</h2>
        <p className="mt-2 text-sm leading-6 text-amber-900">{analysis.comment}</p>
        <p className="mt-3 text-sm text-amber-800">
          İncelenen günlük getiri sayısı: {formatNumber(analysis.observedDays)} /{" "}
          {formatNumber(analysis.requiredDays)}
        </p>
      </section>
    );
  }

  const metrics = analysis.metrics;

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-slate-950">Risk / Getiri Analizi</h2>
        {analysis.comment ? (
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            {analysis.comment}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <MetricBox
          label="Pozitif Gün Oranı"
          value={formatPercent(metrics.positiveDayRatio)}
          sub={`${formatNumber(metrics.totalDays)} işlem günü`}
        />
        <MetricBox
          label="Volatilite"
          value={formatPercent(metrics.annualizedVolatility)}
          sub="Yıllıklaştırılmış"
        />
        <MetricBox
          label="Maksimum Drawdown"
          value={formatSignedPercent(metrics.maxDrawdown)}
          sub="Tepe-dip kayıp"
        />
        <MetricBox
          label="Toparlanma Süresi"
          value={
            metrics.recoveryDays === null
              ? "-"
              : `${formatNumber(metrics.recoveryDays)} işlem günü`
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <MetricBox
          label="Ortalama Pozitif Gün"
          value={formatSignedPercent(metrics.averagePositiveReturn)}
        />
        <MetricBox
          label="Ortalama Negatif Gün"
          value={formatSignedPercent(metrics.averageNegativeReturn)}
        />
        <MetricBox
          label="En İyi Gün"
          value={formatSignedPercent(metrics.bestDay.value)}
          sub={metrics.bestDay.date ?? ""}
        />
        <MetricBox
          label="En Kötü Gün"
          value={formatSignedPercent(metrics.worstDay.value)}
          sub={metrics.worstDay.date ?? ""}
        />
      </div>

      {analysis.comparisons.length > 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">
            Şemsiye Türü İçinde Karşılaştırma
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {analysis.comparisons.map((item) => {
              const metric = getRiskMetricConfigByKey(item.key);
              const rankingHref = metric
                ? `/fonlar/risk-siralamalari/${metric.slug}/${createRiskCategorySlug(fund.kategori)}#${fund.slug}`
                : null;

              return (
                <div key={item.key} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Fon:{" "}
                        <span className={valueColorClass(item.value)}>
                          {item.key === "recoveryDays"
                            ? formatNumber(item.value)
                            : formatPercent(item.value)}
                        </span>{" "}
                        · Medyan: {formatPercent(item.median)}
                      </p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${valueBgClass((item.percentile ?? 0) / 100)}`}>
                      {item.assessment}
                    </span>
                  </div>
                  <ProgressBar value={(item.percentile ?? 0) / 100} tone="blue" />
                  {rankingHref ? (
                    <Link
                      href={rankingHref}
                      className="mt-2 inline-flex max-w-full rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100 hover:bg-blue-50"
                    >
                      Sıra: {formatNumber(item.rank)} / {formatNumber(item.peerCount)} ·{" "}
                      Yüzdelik: {formatNumber(item.percentile, 0)} · Listeyi gör
                    </Link>
                  ) : (
                    <p className="mt-2 text-xs text-slate-500">
                      Sıra: {formatNumber(item.rank)} / {formatNumber(item.peerCount)} ·{" "}
                      Yüzdelik: {formatNumber(item.percentile, 0)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </section>
  );
}
