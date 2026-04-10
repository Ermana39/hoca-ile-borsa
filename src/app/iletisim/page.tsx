import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Hoca İle Borsa iletişim sayfası üzerinden soru, görüş ve iş birliği mesajlarınızı kolayca iletin.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | Hoca İle Borsa",
    description:
      "Hoca İle Borsa iletişim sayfası üzerinden soru, görüş ve iş birliği mesajlarınızı kolayca iletin.",
    url: "https://www.hocaileborsa.com/iletisim",
    type: "website",
  },
};

const contactBoxes = [
  {
    title: "E-Posta",
    value: "destekhocaileborsa@gmail.com",
  },
  {
    title: "Yanıt Alanı",
    value: "İletişim Formu",
  },
  {
    title: "Mobil Görünüm",
    value: "Uyumlu",
  },
  {
    title: "Sayfa Yapısı",
    value: "Düzenli",
  },
];

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Borsa", href: "/borsa" },
  { label: "Halka Arz", href: "/halka-arz" },
  { label: "Temettü", href: "/temettu" },
  { label: "Fonlar", href: "/fonlar" },
  { label: "Faiz Oranları", href: "/faiz-oranlari" },
];

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-8">
            <div className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
              İletişim Sayfası
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Sorularınızı ve görüşlerinizi kolayca iletin
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              İletişim formu üzerinden soru, görüş ve iş birliği taleplerinizi
              gönderebilir, Hoca İle Borsa ile doğrudan bağlantı kurabilirsiniz.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ana Sayfaya Dön
              </Link>
              <a
                href="mailto:destekhocaileborsa@gmail.com"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
              >
                E-Posta Gönder
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-3">
              {contactBoxes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {item.title}
                  </div>
                  <div className="mt-2 break-words text-sm font-bold text-white sm:text-base">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-dashed border-slate-700">
              <div
                className="min-h-[140px] w-full sm:min-h-[170px] md:min-h-[190px]"
                aria-label="Reklam alanı"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              İletişim Formu
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Mevcut iletişim formun bu alan içinde çalışmaya devam eder.
            </p>

            <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
              <form className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="adSoyad"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="adSoyad"
                    name="adSoyad"
                    type="text"
                    placeholder="Adınızı ve soyadınızı yazın"
                    className="min-h-[48px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eposta"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    E-Posta
                  </label>
                  <input
                    id="eposta"
                    name="eposta"
                    type="email"
                    placeholder="E-posta adresinizi yazın"
                    className="min-h-[48px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="konu"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Konu
                  </label>
                  <input
                    id="konu"
                    name="konu"
                    type="text"
                    placeholder="Konu başlığını yazın"
                    className="min-h-[48px] w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mesaj"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={6}
                    placeholder="Mesajınızı yazın"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                İletişim Bilgisi
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <p>
                  Genel sorular, görüşler ve iş birliği talepleri için iletişim
                  formunu kullanabilirsiniz.
                </p>
                <p>
                  Doğrudan e-posta göndermek isteyenler için adres:
                  <span className="ml-1 font-semibold text-white">
                    destekhocaileborsa@gmail.com
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Hızlı Geçiş
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-dashed border-slate-700">
            <div
              className="min-h-[160px] w-full sm:min-h-[180px] md:min-h-[220px]"
              aria-label="Reklam alanı"
            />
          </div>
        </div>
      </section>
    </main>
  );
}