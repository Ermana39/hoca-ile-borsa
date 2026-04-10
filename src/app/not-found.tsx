import Link from "next/link";

export const metadata = {
  title: "Sayfa Bulunamadı | Hoca İle Borsa",
  description:
    "Aradığınız sayfa bulunamadı. Hoca İle Borsa ana sayfasına dönerek borsa, halka arz, temettü, fonlar ve faiz oranları içeriklerine ulaşabilirsiniz.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-10">
            <div className="mb-5 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
              404 Hatası
            </div>

            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Aradığınız sayfa bulunamadı
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
              Girdiğiniz bağlantı hatalı olabilir, sayfa kaldırılmış olabilir ya da adres değişmiş olabilir.
              Aşağıdaki bağlantılardan devam edebilirsiniz.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ana Sayfaya Dön
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
              >
                İletişim Sayfası
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <QuickLink href="/borsa" label="Borsa" />
              <QuickLink href="/halka-arz" label="Halka Arz" />
              <QuickLink href="/temettu" label="Temettü" />
              <QuickLink href="/fonlar" label="Fonlar" />
              <QuickLink href="/faiz-oranlari" label="Faiz Oranları" />
              <QuickLink href="/iletisim" label="İletişim" />
            </div>
          </div>

          <div className="mt-6 w-full rounded-3xl border border-slate-800 bg-slate-900/70 p-3 sm:p-4">
            <div className="w-full overflow-hidden rounded-2xl border border-dashed border-slate-700">
              <div className="min-h-[120px] w-full sm:min-h-[140px] md:min-h-[160px]" aria-label="Reklam alanı" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800 hover:text-white"
    >
      {label}
    </Link>
  );
}