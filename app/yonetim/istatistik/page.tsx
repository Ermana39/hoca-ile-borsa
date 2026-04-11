import type { Metadata } from "next";
import Link from "next/link";
import {
  countClicksSince,
  countViewsSince,
  groupClicksByLabel,
  groupClicksBySource,
  groupViewsByPath,
  readClicks,
  readViews,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "@/lib/page-stats";

export const metadata: Metadata = {
  title: "Yönetim İstatistik",
  description: "Site görüntülenme ve tıklama istatistikleri.",
};

type TableCardProps = {
  title: string;
  rows: Array<{ label: string; value: number }>;
  emptyText?: string;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("tr-TR").format(value);
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="text-sm font-medium text-zinc-500">{title}</div>
      <div className="mt-2 text-3xl font-bold text-zinc-900">
        {formatNumber(value)}
      </div>
    </section>
  );
}

function TableCard({
  title,
  rows,
  emptyText = "Veri bulunamadı.",
}: TableCardProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-5 py-4">
        <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
      </div>

      {rows.length === 0 ? (
        <div className="px-5 py-8 text-sm text-zinc-500">{emptyText}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-zinc-700">
                  Başlık
                </th>
                <th className="px-5 py-3 text-right font-semibold text-zinc-700">
                  Değer
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={`${row.label}-${index}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                >
                  <td className="px-5 py-3 text-zinc-800">{row.label}</td>
                  <td className="px-5 py-3 text-right font-semibold text-zinc-900">
                    {formatNumber(row.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function YonetimIstatistikPage() {
  const views = readViews();
  const clicks = readClicks();

  const totalViews = Object.values(views).reduce(
    (sum, value) => sum + value,
    0
  );
  const totalClicks = clicks.reduce((sum, item) => sum + item.count, 0);

  const dailyViews = countViewsSince(views, startOfToday());
  const weeklyViews = countViewsSince(views, startOfWeek());
  const monthlyViews = countViewsSince(views, startOfMonth());

  const dailyClicks = countClicksSince(clicks, startOfToday());
  const weeklyClicks = countClicksSince(clicks, startOfWeek());
  const monthlyClicks = countClicksSince(clicks, startOfMonth());

  const topPages = groupViewsByPath(views)
    .slice(0, 20)
    .map((item) => ({
      label: item.path || item.label || "-",
      value: item.count,
    }));

  const topClickSources = groupClicksBySource(clicks)
    .slice(0, 20)
    .map((item) => ({
      label: item.source || item.label || "-",
      value: item.count,
    }));

  const topClickLabels = groupClicksByLabel(clicks)
    .slice(0, 20)
    .map((item) => ({
      label: item.label || item.source || "-",
      value: item.count,
    }));

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
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
        </div>

        <section className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6">
          <h1 className="text-3xl font-bold text-zinc-900">
            Yönetim İstatistik
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            Site genel görüntülenme, tıklama ve sayfa bazlı performans verileri.
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Toplam Görüntülenme" value={totalViews} />
          <StatCard title="Toplam Tıklama" value={totalClicks} />
          <StatCard title="Bugünkü Görüntülenme" value={dailyViews} />
          <StatCard title="Bugünkü Tıklama" value={dailyClicks} />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Haftalık Görüntülenme" value={weeklyViews} />
          <StatCard title="Haftalık Tıklama" value={weeklyClicks} />
          <StatCard title="Aylık Görüntülenme" value={monthlyViews} />
          <StatCard title="Aylık Tıklama" value={monthlyClicks} />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <TableCard
            title="En Çok Görüntülenen Sayfalar"
            rows={topPages}
            emptyText="Henüz sayfa görüntülenmesi yok."
          />

          <TableCard
            title="En Çok Tıklanan Kaynaklar"
            rows={topClickSources}
            emptyText="Henüz kaynak tıklaması yok."
          />

          <TableCard
            title="En Çok Tıklanan Etiketler"
            rows={topClickLabels}
            emptyText="Henüz etiket tıklaması yok."
          />
        </div>
      </div>
    </main>
  );
}