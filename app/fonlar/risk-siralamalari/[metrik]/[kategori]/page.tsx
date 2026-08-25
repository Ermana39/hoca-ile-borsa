import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb } from "../../../_components/FonUi";
import {
  formatCompactTL,
  formatNumber,
  formatPercent,
  formatSignedPercent,
} from "@/lib/fon-format";
import {
  RISK_METRIC_CONFIGS,
  getRiskRanking,
  getRiskRankingStaticParams,
  type RiskMetricConfig,
} from "@/lib/fon-risk-ranking";
import { seoAciklamasi } from "@/lib/seo-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getRiskRankingStaticParams();
}

function formatMetricValue(metric: RiskMetricConfig, value: number | null) {
  if (metric.key === "maxDrawdown" || metric.key === "oneYearReturn") {
    return formatSignedPercent(value);
  }

  return formatPercent(value);
}

function metricDirectionText(metric: RiskMetricConfig) {
  return metric.better === "lower"
    ? "Bu listede daha düşük değerler üst sıralarda yer alır."
    : "Bu listede daha yüksek değerler üst sıralarda yer alır.";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ metrik: string; kategori: string }>;
}): Promise<Metadata> {
  const { metrik, kategori } = await params;
  const ranking = getRiskRanking(metrik, kategori);

  if (!ranking) {
    return {
      title: "Fon Sıralaması Bulunamadı",
      robots: { index: false, follow: true },
    };
  }

  const title = `${ranking.category.label} ${ranking.metric.label} Sıralaması`;
  const description = seoAciklamasi(
    `${ranking.category.label} içindeki fonları ${ranking.metric.label.toLocaleLowerCase("tr-TR")} verisine göre karşılaştırın; fon kodu, değer, yüzdelik ve yönetici bilgilerini birlikte inceleyin.`,
    "",
    156
  );
  const canonical = `https://www.hocaileborsa.com/fonlar/risk-siralamalari/${ranking.metric.slug}/${ranking.category.slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function RiskSiralamaPage({
  params,
}: {
  params: Promise<{ metrik: string; kategori: string }>;
}) {
  const { metrik, kategori } = await params;
  const ranking = getRiskRanking(metrik, kategori);

  if (!ranking || ranking.rows.length === 0) notFound();

  const topFund = ranking.rows[0];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb
          current={`${ranking.metric.label} Sıralaması`}
          items={[{ href: "/fonlar/risk-siralamalari", label: "Risk Sıralamaları" }]}
        />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Şemsiye türü içinde karşılaştırma
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            {ranking.category.label} {ranking.metric.label} Sıralaması
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            {ranking.category.label} içindeki {formatNumber(ranking.peerCount)} fon,
            {` ${ranking.metric.label.toLocaleLowerCase("tr-TR")} verisine göre `}
            sıralanır. {metricDirectionText(ranking.metric)}
          </p>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Lider Fon
            </p>
            <Link
              href={`/fonlar/${topFund.slug}`}
              className="mt-2 block text-xl font-bold text-slate-950 hover:text-blue-700"
            >
              {topFund.kod}
            </Link>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">
              {topFund.ad}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Lider Değer
            </p>
            <p className="mt-2 text-xl font-bold text-slate-950">
              {formatMetricValue(ranking.metric, topFund.value)}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Yüzdelik: {formatNumber(topFund.percentile, 0)}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Medyan
            </p>
            <p className="mt-2 text-xl font-bold text-slate-950">
              {formatMetricValue(ranking.metric, ranking.median)}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Aynı şemsiye türündeki fonlar
            </p>
          </div>
        </section>

        <section className="mb-5 flex flex-wrap gap-2">
          {RISK_METRIC_CONFIGS.map((metric) => {
            const isCurrent = metric.key === ranking.metric.key;

            return (
              <Link
                key={metric.key}
                href={`/fonlar/risk-siralamalari/${metric.slug}/${ranking.category.slug}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  isCurrent
                    ? "bg-blue-700 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                {metric.label}
              </Link>
            );
          })}
          <Link
            href={`/fonlar/fon-tarayici?kategori=${encodeURIComponent(ranking.category.label)}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700"
          >
            Bu türdeki fonları tara
          </Link>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-4 py-4 md:px-5">
            <h2 className="text-lg font-bold text-slate-950">
              Tam Sıralama Listesi
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {ranking.metric.description}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                <tr>
                  <th scope="col" className="w-20 px-4 py-3">
                    Sıra
                  </th>
                  <th scope="col" className="min-w-[260px] px-4 py-3">
                    Fon
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Değer
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Yüzdelik
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Görünüm
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Fon Büyüklüğü
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Risk
                  </th>
                  <th scope="col" className="min-w-[190px] px-4 py-3">
                    Yönetici
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ranking.rows.map((row) => (
                  <tr key={row.slug} id={row.slug} className="scroll-mt-24 target:bg-blue-50/70">
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-slate-950">
                      {formatNumber(row.rank)}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/fonlar/${row.slug}`}
                        className="font-bold text-slate-950 hover:text-blue-700"
                      >
                        {row.kod}
                      </Link>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                        {row.ad}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
                      {formatMetricValue(ranking.metric, row.value)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                      {formatNumber(row.percentile, 0)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                        {row.assessment}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                      {formatCompactTL(row.fonToplamDeger)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                      {formatNumber(row.riskDegeri)}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/fonlar/yoneticiler/${row.yoneticiSlug}`}
                        className="font-semibold text-blue-700 hover:underline"
                      >
                        {row.yonetici}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 border-t border-slate-200 pt-8 text-sm leading-7 text-slate-600 md:text-base">
          <h2 className="text-xl font-bold text-slate-950">
            Bu Sıralama Nasıl Okunur?
          </h2>
          <p className="mt-3 max-w-4xl">
            Liste yalnızca aynı şemsiye türündeki ve ilgili metriği hesaplanabilen
            fonları karşılaştırır. Bu nedenle her ölçütte görünen fon sayısı
            değişebilir; fon detay sayfasındaki sıralama bağlantısı da doğrudan
            aynı listeye gider.
          </p>
          <p className="mt-3">
            Diğer ölçütlere geçmek için üstteki metrik bağlantılarını, fonun tüm
            verilerini görmek için fon kodunu kullanabilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
