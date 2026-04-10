import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Borsa, halka arz, temettü, fonlar ve faiz oranları içeriklerini mobil uyumlu yapıda takip edin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hoca İle Borsa",
    description:
      "Borsa, halka arz, temettü, fonlar ve faiz oranları içeriklerini mobil uyumlu yapıda takip edin.",
    url: "https://www.hocaileborsa.com",
    type: "website",
  },
};

const cards = [
  {
    title: "Borsa",
    description:
      "Borsa verileri, analiz kutuları ve yatırımcıların takip edebileceği temel içerikler.",
    href: "/borsa",
  },
  {
    title: "Halka Arz",
    description:
      "Güncel halka arz verileri, kurum listeleri ve takip edilmesi gereken detaylar.",
    href: "/halka-arz",
  },
  {
    title: "Temettü",
    description:
      "Temettü bilgileri, hesaplama araçları ve temel eğitim içerikleri.",
    href: "/temettu",
  },
  {
    title: "Fonlar",
    description:
      "Fon içerikleri, karşılaştırmalar ve takip kolaylığı sağlayan sayfa yapısı.",
    href: "/fonlar",
  },
  {
    title: "Faiz Oranları",
    description:
      "Mevduat, ihtiyaç, konut ve taşıt kredisi faiz oranlarını tek yerde takip edin.",
    href: "/faiz-oranlari",
  },
  {
    title: "İletişim",
    description:
      "Sorularınız, görüşleriniz ve iş birlikleri için iletişim sayfasına ulaşın.",
    href: "/iletisim",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-9">
              <div className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
                Hoca İle Borsa
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Borsa, halka arz, temettü, fonlar ve faiz oranları tek yerde
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                Mobil uyumlu yapıda hazırlanmış sayfalar ile piyasayı daha düzenli takip edin.
                Ana başlıklara hızlı geçiş yapın, içeriklere kolay ulaşın.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/borsa"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Borsa Sayfasına Git
                </Link>
                <Link
                  href="/halka-arz"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
                >
                  Halka Arz Sayfasına Git
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
              <div className="grid grid-cols-2 gap-3">
                <StatBox title="Borsa" value="Güncel" />
                <StatBox title="Halka Arz" value="Takip" />
                <StatBox title="Fonlar" value="Düzenli" />
                <StatBox title="Faiz" value="Karşılaştır" />
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-dashed border-slate-700">
                <div
                  className="min-h-[140px] w-full sm:min-h-[170px] md:min-h-[190px]"
                  aria-label="Reklam alanı"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Hızlı Erişim Alanları
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              En çok kullanılan sayfalara buradan ulaşabilirsiniz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-emerald-500/40 hover:bg-slate-900"
            >
              <div className="flex h-full flex-col">
                <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-300">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-medium text-emerald-300">
                  Sayfaya git
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 md:pb-10 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
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

function StatBox({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {title}
      </div>
      <div className="mt-2 text-lg font-bold text-white sm:text-xl">{value}</div>
    </div>
  );
}