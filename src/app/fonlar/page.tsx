import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fonlar",
  description:
    "Yatırım fonları, fon karşılaştırmaları, fon dağılımı, getiri alanları ve takip kutularını mobil uyumlu yapıda inceleyin.",
  alternates: {
    canonical: "/fonlar",
  },
  openGraph: {
    title: "Fonlar | Hoca İle Borsa",
    description:
      "Yatırım fonları, fon karşılaştırmaları, fon dağılımı, getiri alanları ve takip kutularını mobil uyumlu yapıda inceleyin.",
    url: "https://www.hocaileborsa.com/fonlar",
    type: "website",
  },
};

const summaryBoxes = [
  { title: "Fon Takibi", value: "Aktif" },
  { title: "Karşılaştırma", value: "Hazır" },
  { title: "Mobil Görünüm", value: "Uyumlu" },
  { title: "Sayfa Yapısı", value: "Düzenli" },
];

const sectionCards = [
  {
    title: "Fon Listeleri",
    description:
      "Öne çıkan yatırım fonlarını düzenli kutular ve tablolar ile takip edin.",
  },
  {
    title: "Fon Karşılaştırmaları",
    description:
      "Getiri, risk ve dağılım yapılarını yan yana inceleyerek farkları görün.",
  },
  {
    title: "Fon Dağılımı",
    description:
      "Hisse, repo, borçlanma araçları ve diğer varlık dağılımlarını sade biçimde izleyin.",
  },
  {
    title: "Getiri Alanları",
    description:
      "Aylık, 3 aylık, 6 aylık ve yıllık performansları tek alanda görün.",
  },
  {
    title: "Fon Eğitimi",
    description:
      "Fon nedir, fon türleri nelerdir ve yatırımcı neye dikkat etmeli gibi temel başlıkları ekleyin.",
  },
  {
    title: "Kolay Takip",
    description:
      "Telefon ekranında rahat okunacak yapı ile fon içeriklerine hızlı erişin.",
  },
];

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Borsa", href: "/borsa" },
  { label: "Halka Arz", href: "/halka-arz" },
  { label: "Temettü", href: "/temettu" },
  { label: "Faiz Oranları", href: "/faiz-oranlari" },
  { label: "İletişim", href: "/iletisim" },
];

const performanceBoxes = [
  { title: "Son 1 Ay", value: "Güncel Veri" },
  { title: "Son 3 Ay", value: "Güncel Veri" },
  { title: "Son 6 Ay", value: "Güncel Veri" },
  { title: "Son 12 Ay", value: "Güncel Veri" },
];

export default function FonlarPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-8">
            <div className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
              Fonlar Sayfası
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Fonları daha düzenli ve hızlı şekilde takip edin
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Fon listeleri, karşılaştırmalar, dağılım alanları ve performans
              verileri mobil uyumlu yapıda tek sayfada toplanır.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ana Sayfaya Dön
              </Link>
              <Link
                href="/temettu"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
              >
                Temettü Sayfası
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-3">
              {summaryBoxes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {item.title}
                  </div>
                  <div className="mt-2 text-lg font-bold text-white sm:text-xl">
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
        <div className="mb-5">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Fon İçerik Alanları
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Sayfa içinde öne çıkarılabilecek temel bölümler.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 md:pb-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Performans Kutuları
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Fon getiri verileri bu alanda düzenli şekilde gösterilebilir.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {performanceBoxes.map((item) => (
                <InfoBox key={item.title} title={item.title} value={item.value} />
              ))}
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

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Fon Dağılımı Alanı
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Fon dağılımı başlıkları ve grafik alanı burada konumlanabilir.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <InfoBox title="Hisse Senedi" value="Güncel Veri" />
              <InfoBox title="Ters Repo" value="Güncel Veri" />
              <InfoBox title="Yatırım Fonları" value="Güncel Veri" />
              <InfoBox title="Diğer Varlıklar" value="Güncel Veri" />
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

function InfoBox({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {title}
      </div>
      <div className="mt-2 text-base font-bold text-white sm:text-lg">
        {value}
      </div>
    </div>
  );
}