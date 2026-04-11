import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yönetim İstatistik",
  description: "Yönetim istatistik ekranı geçici bakım modunda.",
};

export default function YonetimIstatistikPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/yonetim"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Yönetim Paneli
          </Link>
        </div>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-zinc-900">
            Yönetim İstatistik
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Bu sayfa geçici olarak bakım moduna alındı.
          </p>

          <p className="mt-2 text-base leading-7 text-zinc-600">
            Site yayın ve sayfa düzeni çalışmaya devam eder. İstatistik ekranı
            daha sonra temiz şekilde yeniden kurulacaktır.
          </p>
        </section>
      </div>
    </main>
  );
}