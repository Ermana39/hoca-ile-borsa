import type { Metadata } from "next";
import Link from "next/link";
import ResetStatsButton from "@/components/reset-stats-button";
import { kv, normalizePagePath } from "@/lib/kv";

export const metadata: Metadata = {
  title: "Yönetim İstatistik",
  description: "Sayfa bazlı görüntülenme istatistikleri.",
};

const STATS_KEY = "stats:pageviews:v2";

function formatNumber(value: number) {
  return new Intl.NumberFormat("tr-TR").format(value);
}

type PageViewRow = {
  path: string;
  count: number;
};

async function getPageViews(): Promise<PageViewRow[]> {
  if (!kv) return [];

  try {
    const raw = await kv.hgetall<Record<string, number | string>>(STATS_KEY);

    if (!raw) return [];

    return Object.entries(raw)
      .map(([path, value]) => ({
        path: normalizePagePath(path),
        count: typeof value === "number" ? value : Number(value) || 0,
      }))
      .sort((a, b) => b.count - a.count);
  } catch {
    return [];
  }
}

export default async function YonetimIstatistikPage() {
  const rows = await getPageViews();
  const totalViews = rows.reduce((sum, row) => sum + row.count, 0);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/kontrol-paneli-4827"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Yönetim Paneli
          </Link>

          <ResetStatsButton />
        </div>

        <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h1 className="text-3xl font-bold text-zinc-900">Yönetim İstatistik</h1>
          <p className="mt-3 text-base text-zinc-600">
            Sayfa bazlı görüntülenme ve toplam ilgi durumu.
          </p>
        </section>

        <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="text-sm font-medium text-zinc-500">Toplam Görüntülenme</div>
          <div className="mt-2 text-4xl font-bold text-zinc-900">
            {formatNumber(totalViews)}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="border-b border-zinc-200 px-5 py-4">
            <h2 className="text-lg font-bold text-zinc-900">
              Sayfa Bazlı Görüntülenme
            </h2>
          </div>

          {rows.length === 0 ? (
            <div className="px-5 py-8 text-sm text-zinc-500">
              Henüz görüntülenme verisi yok.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold text-zinc-700">
                      Sayfa
                    </th>
                    <th className="px-5 py-3 text-right font-semibold text-zinc-700">
                      Görüntülenme
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={`${row.path}-${index}`}
                      className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                    >
                      <td className="px-5 py-3 text-zinc-800">{row.path}</td>
                      <td className="px-5 py-3 text-right font-semibold text-zinc-900">
                        {formatNumber(row.count)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}