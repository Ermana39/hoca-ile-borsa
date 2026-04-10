import Link from "next/link";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import AdminLoginForm from "@/components/admin-login-form";
import {
  countClicksSince,
  countViewsSince,
  getDailySeries,
  groupClicksByLabel,
  groupClicksByLabelSince,
  groupClicksBySource,
  groupClicksBySourceSince,
  groupViewsByPath,
  groupViewsByPathSince,
  isValidAdminToken,
  readClicks,
  readViews,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "@/lib/page-stats";

export const metadata: Metadata = {
  title: "Yönetim İstatistik",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="text-sm text-zinc-500">{title}</div>
      <div className="mt-2 text-3xl font-bold text-zinc-900">{value}</div>
    </div>
  );
}

export default async function IstatistikPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("hib_admin_token")?.value;
  const isAuthed = isValidAdminToken(token);

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-xl">
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>
          </div>

          <AdminLoginForm />
        </div>
      </main>
    );
  }

  const views = readViews();
  const clicks = readClicks();

  const totalViews = views.length;
  const totalClicks = clicks.length;

  const dailyViews = countViewsSince(views, startOfToday());
  const weeklyViews = countViewsSince(views, startOfWeek());
  const monthlyViews = countViewsSince(views, startOfMonth());

  const dailyClicks = countClicksSince(clicks, startOfToday());
  const weeklyClicks = countClicksSince(clicks, startOfWeek());
  const monthlyClicks = countClicksSince(clicks, startOfMonth());

  const topAllViews = groupViewsByPath(views).slice(0, 20);
  const topDailyViews = groupViewsByPathSince(views, startOfToday()).slice(0, 10);

  const topAllClicks = groupClicksByLabel(clicks).slice(0, 30);
  const topDailyClicks = groupClicksByLabelSince(clicks, startOfToday()).slice(0, 20);
  const groupedClicksAll = groupClicksBySource(clicks);
  const groupedClicksMonthly = groupClicksBySourceSince(clicks, startOfMonth());

  const dailySeries = getDailySeries(views, 30);
  const maxCount = Math.max(...dailySeries.map((item) => item.count), 1);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/kontrol-paneli-4827/mesajlar"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Mesajlar
            </Link>

            <Link
              href="/kontrol-paneli-4827/guvenlik"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Güvenlik
            </Link>
          </div>

          <form action="/api/admin-logout" method="post">
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
              Çıkış Yap
            </button>
          </form>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Sayfa İstatistikleri</h1>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <StatCard title="Toplam Sayfa Görüntülenme" value={totalViews} />
          <StatCard title="Bugünkü Sayfa Görüntülenme" value={dailyViews} />
          <StatCard title="Bu Haftaki Sayfa Görüntülenme" value={weeklyViews} />
          <StatCard title="Bu Ayki Sayfa Görüntülenme" value={monthlyViews} />
          <StatCard title="Toplam Kutu Tıklama" value={totalClicks} />
          <StatCard title="Bugünkü Kutu Tıklama" value={dailyClicks} />
          <StatCard title="Bu Haftaki Kutu Tıklama" value={weeklyClicks} />
          <StatCard title="Bu Ayki Kutu Tıklama" value={monthlyClicks} />
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="mb-5 text-xl font-semibold text-zinc-900">Son 30 Günlük Sayfa Hareketi</h2>

          <div className="grid h-[260px] grid-cols-10 gap-2 md:grid-cols-15 xl:grid-cols-30">
            {dailySeries.map((item) => {
              const barHeight = Math.max(8, Math.round((item.count / maxCount) * 180));

              return (
                <div key={item.label} className="flex flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-t-md bg-zinc-900"
                    style={{ height: `${barHeight}px` }}
                    title={`${item.label}: ${item.count}`}
                  />
                  <div className="text-[10px] text-zinc-500 md:text-[11px]">{item.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">En Çok Açılan Sayfalar</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Sayfa</th>
                    <th className="px-4 py-3 text-right">Toplam</th>
                  </tr>
                </thead>
                <tbody>
                  {topAllViews.map((item, index) => (
                    <tr key={item.path} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                      <td className="px-4 py-3 font-medium text-zinc-800">{item.path}</td>
                      <td className="px-4 py-3 text-right text-zinc-700">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">Bugün En Çok Açılan Sayfalar</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Sayfa</th>
                    <th className="px-4 py-3 text-right">Bugün</th>
                  </tr>
                </thead>
                <tbody>
                  {topDailyViews.length > 0 ? (
                    topDailyViews.map((item, index) => (
                      <tr key={item.path} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                        <td className="px-4 py-3 font-medium text-zinc-800">{item.path}</td>
                        <td className="px-4 py-3 text-right text-zinc-700">{item.count}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="px-4 py-6 text-center text-zinc-500">
                        Henüz veri yok
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">En Çok Tıklanan Kutular</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Kaynak</th>
                    <th className="px-4 py-3 text-left">Başlık</th>
                    <th className="px-4 py-3 text-right">Toplam</th>
                  </tr>
                </thead>
                <tbody>
                  {topAllClicks.map((item, index) => (
                    <tr key={`${item.source}-${item.label}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                      <td className="px-4 py-3 text-zinc-700">{item.source}</td>
                      <td className="px-4 py-3 font-medium text-zinc-800">{item.label}</td>
                      <td className="px-4 py-3 text-right text-zinc-700">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">Bugün Tıklanan Kutular</h2>
            <div className="overflow-hidden rounded-xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Kaynak</th>
                    <th className="px-4 py-3 text-left">Başlık</th>
                    <th className="px-4 py-3 text-right">Bugün</th>
                  </tr>
                </thead>
                <tbody>
                  {topDailyClicks.length > 0 ? (
                    topDailyClicks.map((item, index) => (
                      <tr key={`${item.source}-${item.label}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                        <td className="px-4 py-3 text-zinc-700">{item.source}</td>
                        <td className="px-4 py-3 font-medium text-zinc-800">{item.label}</td>
                        <td className="px-4 py-3 text-right text-zinc-700">{item.count}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center text-zinc-500">
                        Henüz veri yok
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900">Sayfa Bazlı Kutu Tıklamaları</h2>

          <div className="space-y-6">
            {groupedClicksAll.length > 0 ? (
              groupedClicksAll.map((group) => (
                <div key={group.source} className="overflow-hidden rounded-xl border border-zinc-200">
                  <div className="flex items-center justify-between bg-zinc-100 px-4 py-3">
                    <div className="font-semibold text-zinc-900">{group.source}</div>
                    <div className="text-sm font-semibold text-zinc-600">Toplam Tıklama: {group.total}</div>
                  </div>

                  <table className="w-full text-sm">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="px-4 py-3 text-left">Kutu Başlığı</th>
                        <th className="px-4 py-3 text-left">Hedef</th>
                        <th className="px-4 py-3 text-right">Tıklama</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item, index) => (
                        <tr key={`${group.source}-${item.label}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                          <td className="px-4 py-3 font-medium text-zinc-800">{item.label}</td>
                          <td className="px-4 py-3 text-zinc-700">{item.target}</td>
                          <td className="px-4 py-3 text-right text-zinc-700">{item.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-zinc-200 px-4 py-8 text-center text-zinc-500">
                Henüz tıklama verisi yok
              </div>
            )}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900">Bu Ay Sayfa Bazlı Kutu Tıklamaları</h2>

          <div className="space-y-6">
            {groupedClicksMonthly.length > 0 ? (
              groupedClicksMonthly.map((group) => (
                <div key={group.source} className="overflow-hidden rounded-xl border border-zinc-200">
                  <div className="flex items-center justify-between bg-zinc-100 px-4 py-3">
                    <div className="font-semibold text-zinc-900">{group.source}</div>
                    <div className="text-sm font-semibold text-zinc-600">Aylık Tıklama: {group.total}</div>
                  </div>

                  <table className="w-full text-sm">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="px-4 py-3 text-left">Kutu Başlığı</th>
                        <th className="px-4 py-3 text-left">Hedef</th>
                        <th className="px-4 py-3 text-right">Bu Ay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item, index) => (
                        <tr key={`${group.source}-${item.label}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                          <td className="px-4 py-3 font-medium text-zinc-800">{item.label}</td>
                          <td className="px-4 py-3 text-zinc-700">{item.target}</td>
                          <td className="px-4 py-3 text-right text-zinc-700">{item.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-zinc-200 px-4 py-8 text-center text-zinc-500">
                Henüz aylık tıklama verisi yok
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}