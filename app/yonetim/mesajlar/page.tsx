import fs from "fs";
import path from "path";
import Link from "next/link";
import { cookies } from "next/headers";
import { isValidAdminToken } from "@/lib/page-stats";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  createdAt: string;
};

function mesajlariOku(): ContactMessage[] {
  try {
    const dosyaYolu = path.join(process.cwd(), "data", "contact-messages.json");

    if (!fs.existsSync(dosyaYolu)) {
      return [];
    }

    const raw = fs.readFileSync(dosyaYolu, "utf8");
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.name === "string" &&
          typeof item.email === "string" &&
          typeof item.subject === "string" &&
          typeof item.message === "string" &&
          typeof item.createdAt === "string"
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  } catch {
    return [];
  }
}

function formatTarih(value: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default async function MesajlarPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("hib_admin_token")?.value;
  const isAuthed = isValidAdminToken(token);

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
            Bu sayfayı görüntülemek için önce yönetim girişini yapmalısın.
          </div>
        </div>
      </main>
    );
  }

  const mesajlar = mesajlariOku();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontrol-paneli-4827"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              İstatistik
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>
          </div>

          <form action="/api/admin-logout" method="post">
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
              Çıkış Yap
            </button>
          </form>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">İletişim Mesajları</h1>

        <div className="space-y-4">
          {mesajlar.length > 0 ? (
            mesajlar.map((item, index) => (
              <div
                key={`${item.email}-${item.createdAt}-${index}`}
                className="rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900">
                      {item.subject}
                    </h2>
                    <div className="mt-2 space-y-1 text-sm text-zinc-600">
                      <p>
                        <strong>Ad Soyad:</strong> {item.name}
                      </p>
                      <p>
                        <strong>E-posta:</strong>{" "}
                        <a
                          href={`mailto:${item.email}`}
                          className="text-blue-600 underline underline-offset-4"
                        >
                          {item.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-zinc-500">
                    {formatTarih(item.createdAt)}
                  </div>
                </div>

                <div className="whitespace-pre-wrap rounded-2xl bg-zinc-50 p-4 text-[15px] leading-7 text-zinc-700">
                  {item.message}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-8 text-center text-zinc-500">
              Henüz mesaj yok.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}