import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halka Arz",
  description:
    "Güncel halka arz verileri, kurum listeleri, temel bilgiler ve takip alanlarını mobil uyumlu yapıda inceleyin.",
  alternates: {
    canonical: "/halka-arz",
  },
  openGraph: {
    title: "Halka Arz | Hoca İle Borsa",
    description:
      "Güncel halka arz verileri, kurum listeleri, temel bilgiler ve takip alanlarını mobil uyumlu yapıda inceleyin.",
    url: "https://www.hocaileborsa.com/halka-arz",
    type: "website",
  },
};

const summaryBoxes = [
  { title: "Güncel Takip", value: "Aktif" },
  { title: "Kurum Listeleri", value: "Hazır" },
  { title: "Mobil Görünüm", value: "Uyumlu" },
  { title: "Sayfa Yapısı", value: "Düzenli" },
];

const infoCards = [
  {
    title: "Güncel Halka Arz Verileri",
    description:
      "Halka arz fiyatı, lot bilgisi, büyüklük ve dağıtım yapısı tek alanda takip edilebilir.",
  },
  {
    title: "Kurum Dağılımı",
    description:
      "Katılım sağlanabilecek aracı kurum listeleri sade ve okunabilir yapıda gösterilebilir.",
  },
  {
    title: "Şirket Özeti",
    description:
      "Faaliyet alanı, fon kullanım yerleri ve temel değerlendirme başlıkları öne çıkarılabilir.",
  },
  {
    title: "Takip Kolaylığı",
    description:
      "Telefon ekranında rahat okunacak düzen ile yatırımcı hızlı şekilde ana bilgilere ulaşabilir.",
  },
];

const ipoSteps = [
  "Halka arz fiyatını ve toplam lot miktarını kontrol edin.",
  "Sermaye artırımı ve ortak satışı ayrımını ayrıca inceleyin.",
  "Dağıtım şekli ve yatırımcı grubu oranlarını okuyun.",
  "Fon kullanım alanlarını ve şirketin faaliyet yapısını değerlendirin.",
];

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Borsa", href: "/borsa" },
  { label: "Temettü", href: "/temettu" },
  { label: "Fonlar", href: "/fonlar" },
  { label: "Faiz Oranları", href: "/faiz-oranlari" },
  { label: "İletişim", href: "/iletisim" },
];

export default function HalkaArzPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-8">
            <div className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
              Halka Arz Sayfası
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Halka arz verilerini tek yerde daha düzenli takip edin
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Güncel halka arz alanları, kurum listeleri, temel şirket bilgileri
              ve dikkat edilmesi gereken başlıklar mobil uyumlu yapıda burada
              toplanır.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ana Sayfaya Dön
              </Link>
              <Link
                href="/borsa"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
              >
                Borsa Sayfası
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
            Halka Arz İçerik Alanları
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Sayfa içinde öne çıkarılacak temel bölümler.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {infoCards.map((card) => (
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
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Halka Arz İncelerken
            </h2>

            <div className="mt-4 space-y-3">
              {ipoSteps.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
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
                Güncel Veri Alanı
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                AAGYO ve sonraki halka arzlar için güncel veri kutuları bu alana yerleştirilebilir.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <DataBox title="Halka Arz Fiyatı" value="Güncel Veri" />
              <DataBox title="Toplam Lot" value="Güncel Veri" />
              <DataBox title="Arz Büyüklüğü" value="Güncel Veri" />
              <DataBox title="Dağıtım Yapısı" value="Güncel Veri" />
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

function DataBox({ title, value }: { title: string; value: string }) {
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