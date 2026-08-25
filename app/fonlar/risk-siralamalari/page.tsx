import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb } from "../_components/FonUi";
import { formatNumber } from "@/lib/fon-format";
import {
  RISK_METRIC_CONFIGS,
  getRiskRankingCategories,
} from "@/lib/fon-risk-ranking";

export const metadata: Metadata = {
  title: "Fon Risk ve Getiri Sıralamaları",
  description:
    "Yatırım fonlarını volatilite, maksimum drawdown, pozitif gün oranı ve 1 yıllık getiriye göre şemsiye türü içinde karşılaştırın.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/risk-siralamalari",
  },
};

export default function RiskSiralamalariPage() {
  const categories = getRiskRankingCategories();
  const featuredCategories = categories.slice(0, 8);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Risk Sıralamaları" />

        <section className="mb-8">
          <p className="text-sm font-semibold text-blue-700">
            Fon karşılaştırma listeleri
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Risk ve Getiri Sıralamaları
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Fonları kendi şemsiye türü içinde volatilite, maksimum drawdown,
            pozitif gün oranı ve 1 yıllık getiri verilerine göre listeleyin.
            Her sıralama fon kodu, değer, yüzdelik, yönetici ve fon büyüklüğüyle
            birlikte gösterilir.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {RISK_METRIC_CONFIGS.map((metric) => (
            <div
              key={metric.key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-950">{metric.label}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {metric.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredCategories.slice(0, 3).map((category) => (
                  <Link
                    key={category.slug}
                    href={`/fonlar/risk-siralamalari/${metric.slug}/${category.slug}`}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold text-slate-950">
            Şemsiye Türleri
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/fonlar/risk-siralamalari/${RISK_METRIC_CONFIGS[0].slug}/${category.slug}`}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700"
              >
                {category.label} ({formatNumber(category.fundCount)})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
