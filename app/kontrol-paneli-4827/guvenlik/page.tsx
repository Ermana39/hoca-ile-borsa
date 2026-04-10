import Link from "next/link";
import { cookies } from "next/headers";
import { isValidAdminToken } from "@/lib/page-stats";
import { readSecurityLogs } from "@/lib/security-log";

function formatTarih(value: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default async function GuvenlikPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("hib_admin_token")?.value;
  const isAuthed = isValidAdminToken(token);

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
            Bu sayfayı görüntülemek için önce yönetim girişini yapmalısın.
          </div>
        </div>
      </main>
    );
  }

  const logs = readSecurityLogs();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/kontrol-paneli-4827"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            İstatistik
          </Link>

          <Link
            href="/kontrol-paneli-4827/mesajlar"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Mesajlar
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Güvenlik Kayıtları</h1>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-sm">
              <thead className="bg-zinc-100 text-zinc-800">
                <tr>
                  <th className="px-4 py-3 text-left">Tarih</th>
                  <th className="px-4 py-3 text-left">Tür</th>
                  <th className="px-4 py-3 text-left">IP</th>
                  <th className="px-4 py-3 text-left">Detay</th>
                </tr>
              </thead>
              <tbody>
                {logs.length > 0 ? (
                  logs.map((item, index) => (
                    <tr
                      key={`${item.type}-${item.createdAt}-${index}`}
                      className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                    >
                      <td className="px-4 py-3 text-zinc-700">{formatTarih(item.createdAt)}</td>
                      <td className="px-4 py-3 font-medium text-zinc-900">{item.type}</td>
                      <td className="px-4 py-3 text-zinc-700">{item.ip}</td>
                      <td className="px-4 py-3 text-zinc-700">{item.detail}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-zinc-500">
                      Henüz güvenlik kaydı yok.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}