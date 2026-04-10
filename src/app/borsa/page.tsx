import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Borsa",
  description:
    "Borsa analizleri, takip alanları, hacim artışı, geri alım programları ve dip zirve verilerini mobil uyumlu yapıda inceleyin.",
  alternates: {
    canonical: "/borsa",
  },
  openGraph: {
    title: "Borsa | Hoca İle Borsa",
    description:
      "Borsa analizleri, takip alanları, hacim artışı, geri alım programları ve dip zirve verilerini mobil uyumlu yapıda inceleyin.",
    url: "https://www.hocaileborsa.com/borsa",
    type: "website",
  },
};

const analysisCards = [
  {
    title: "Hacim Artışı Analizi",
    description:
      "Yıllık, aylık ve haftalık hacim artışı gösteren hisseleri düzenli tablolarla takip edin.",
  },
  {
    title: "Geri Alım Programları",
    description:
      "Şirketlerin açıkladığı geri alım programlarını ve hisse üzerindeki olası etkilerini izleyin.",
  },
  {
    title: "Dip Zirve Analizi",
    description:
      "Hisselerin dip ve zirve seviyelerine olan uzaklığını sade ve anlaşılır biçimde görün.",
  },
  {
    title: "Günlük Trade İçin Uygun Hisseler",
    description:
      "Trend, hacim ve fiyat hareketine göre kısa vadeli takip edilebilecek hisseleri ayırın.",
  },
];

const marketBoxes = [
  {
    title: "Günlük Takip",
    value: "Aktif",
  },
  {
    title: "Trend Alanı",
    value: "Hazır",
  },
  {
    title: "Hacim Verisi",
    value: "Güncel",
  },
  {
    title: "Analiz Kutuları",
    value: "Düzenli",
  },
];

const quickLinks = [
  { label: "Halka Arz", href: "/halka-arz" },
  { label: "Temettü", href: "/temettu" },
  { label: "Fonlar", href: "/fonlar" },
  { label: "Faiz Oranları", href: "/faiz-oranlari" },
  { label: "İletişim", href: "/iletisim" },
];

export default function BorsaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-2xl shadow-black/20 sm:p-7 md:p-8">
            <div className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
              Borsa Sayfası
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Borsa verilerini daha düzenli takip edin
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Hacim artışı, geri alım programları, dip zirve analizi ve takip
              alanları ile borsa sayfasında öne çıkan verileri tek yerde görün.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Ana Sayfaya Dön
              </Link>
              <Link
                href="/halka-arz"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
              >
                Halka Arz Sayfası
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-3">
              {marketBoxes.map((item) => (
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
            Borsa Analiz Alanları
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Sayfada takip edilmesi planlanan ana kutular.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {analysisCards.map((card) => (
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
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Kısa Bilgi
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>
                Bu alan, borsa verilerini daha rahat okumak ve aynı sayfada
                farklı takip başlıklarını toplamak için hazırlanmıştır.
              </p>
              <p>
                Mobil görünüm öncelikli yapı sayesinde telefon ekranında da
                kutular düzenli biçimde sıralanır.
              </p>
              <p>
                İlerleyen adımda mevcut analiz tabloları ve veri kutuları bu
                yapının içine yerleştirilebilir.
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