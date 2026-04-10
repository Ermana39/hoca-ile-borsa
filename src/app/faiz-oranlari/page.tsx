import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faiz Oranları",
  description:
    "Mevduat faizi, ihtiyaç kredisi, konut kredisi ve taşıt kredisi oranlarını mobil uyumlu yapıda takip edin.",
  alternates: {
    canonical: "/faiz-oranlari",
  },
  openGraph: {
    title: "Faiz Oranları | Hoca İle Borsa",
    description:
      "Mevduat faizi, ihtiyaç kredisi, konut kredisi ve taşıt kredisi oranlarını mobil uyumlu yapıda takip edin.",
    url: "https://www.hocaileborsa.com/faiz-oranlari",
    type: "website",
  },
};

const summaryBoxes = [
  { title: "Mevduat", value: "Aktif" },
  { title: "Kredi Türleri", value: "Hazır" },
  { title: "Mobil Görünüm", value: "Uyumlu" },
  { title: "Karşılaştırma", value: "Düzenli" },
];

const sectionCards = [
  {
    title: "Mevduat Faizi",
    description:
      "Bankaların mevduat faiz oranlarını, vade yapılarını ve net getiri alanlarını düzenli şekilde takip edin.",
    href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
  },
  {
    title: "İhtiyaç Kredisi",
    description:
      "İhtiyaç kredisi faiz oranlarını ve örnek geri ödeme yapılarını karşılaştırmalı şekilde inceleyin.",
    href: "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
  },
  {
    title: "Konut Kredisi",
    description:
      "Konut kredisi faiz oranlarını ve uzun vadeli ödeme yapısını tek sayfada daha rahat görün.",
    href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
  },
  {
    title: "Taşıt Kredisi",
    description:
      "Taşıt kredisi oranlarını, örnek maliyet yapısını ve banka karşılaştırmalarını düzenli görünümle takip edin.",
    href: "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
  },
];

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Borsa", href: "/borsa" },
  { label: "Halka Arz", href: "/halka-arz" },
  { label: "Temettü", href: "/temettu" },
  { label: "Fonlar", href: "/fonlar" },
  { label: "İletişim", href: "/iletisim" },
];

const rateBoxes = [
  { title: "Mevduat Getirisi", value: "Güncel Veri" },
  { title: "İhtiyaç Kredisi", value: "Güncel Veri" },
  { title: "Konut Kredisi", value: "Güncel Veri" },
  { title: "Taşıt Kredisi", value: "Güncel Veri" },
];

export default function FaizOranlariPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-8">
            <div className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
              Faiz Oranları Sayfası
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Faiz oranlarını tek yerde daha düzenli takip edin
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Mevduat faizi, ihtiyaç kredisi, konut kredisi ve taşıt kredisi
              oranlarını mobil uyumlu yapıda karşılaştırın ve ilgili sayfalara
              hızlı geçiş yapın.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            Faiz Türleri
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Alt sayfalara hızlı geçiş için temel alanlar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sectionCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-emerald-500/40 hover:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-300">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {card.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-medium text-emerald-300">
                Sayfaya git
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 md:pb-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Öne Çıkan Takip Alanı
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Ana faiz başlıkları tek alanda özetlenebilir.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {rateBoxes.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Kısa Bilgi
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <p>
              Bu sayfa, faiz türlerini tek merkezden göstermek ve kullanıcıyı
              ilgili alt sayfalara hızlı yönlendirmek için hazırlanmıştır.
            </p>
            <p>
              Mobil öncelikli yapı sayesinde telefon ekranında kutular düzgün
              sıralanır ve reklam alanları esnek kalır.
            </p>
            <p>
              Alt sayfalardaki hesaplayıcılar ve oran tabloları bu ana yapı ile
              daha düzenli şekilde desteklenir.
            </p>
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