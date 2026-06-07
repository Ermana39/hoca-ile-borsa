export const metadata = {
  title: "Grafik Analiz | Hoca İle Borsa",
  description: "Hisselere ait güncel grafik yorumları, destek-direnç bölgeleri ve kısa teknik değerlendirmeler.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz" },
};

import Link from "next/link";

const analizler = [
  { baslik: "AEFES Grafik Analiz", href: "/borsa/grafik-analiz/aefes" },
 { baslik: "AKSEN Grafik Analiz", href: "/borsa/grafik-analiz/aksen" },
  { baslik: "AKBNK Grafik Analiz", href: "/borsa/grafik-analiz/akbnk" },
{ baslik: "ALARK Grafik Analiz", href: "/borsa/grafik-analiz/alark" },
{ baslik: "ARCLK Grafik Analiz", href: "/borsa/grafik-analiz/arclk" },
{ baslik: "ASTOR Grafik Analiz", href: "/borsa/grafik-analiz/astor" },
{ baslik: "ASELS Grafik Analiz", href: "/borsa/grafik-analiz/asels" },
{ baslik: "BIMAS Grafik Analiz", href: "/borsa/grafik-analiz/bimas" },
{ baslik: "BRSAN Grafik Analiz", href: "/borsa/grafik-analiz/brsan" },
{ baslik: "CIMSA Grafik Analiz", href: "/borsa/grafik-analiz/cimsa" },
{ baslik: "DOAS Grafik Analiz", href: "/borsa/grafik-analiz/doas" },
];

// Alfabetik sırala
const sirali = [...analizler].sort((a, b) => a.baslik.localeCompare(b.baslik, "tr"));

export default function GrafikAnalizPage() {
  return (
    <main className="min-h-screen text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/borsa"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-900 md:text-4xl">
            Grafik Analiz
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700 md:text-base">
            Borsa İstanbul hisselerine ait güncel grafik analizlerini, teknik
            görünüm değerlendirmelerini ve destek direnç bölgelerini bu sayfadan
            takip edebilirsiniz.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {sirali.map((analiz) => {
            const kod = analiz.baslik.replace(" Grafik Analiz", "");
            return (
              <Link
                key={analiz.href}
                href={analiz.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
              >
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                  Teknik Analiz
                </p>
                <h2 className="text-base font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-lg">
                  {kod}
                </h2>
                <p className="mt-1 text-xs text-slate-500">Grafik &amp; teknik görünüm</p>
                <div className="mt-auto flex items-center gap-1 pt-3 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                  <span>İncele</span>
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Grafik Analiz Hakkında
          </h2>
          <p className="mb-4 leading-7 text-zinc-700">
            Grafik analiz sayfası, Borsa İstanbul&apos;da işlem gören hisselerin teknik
            görünümünü incelemek isteyen yatırımcılar için hazırlanmıştır. Bu
            sayfada hisse bazlı grafik analiz içeriklerine ulaşabilir, fiyat
            hareketlerini teknik göstergeler ve destek direnç seviyeleriyle birlikte
            değerlendirebilirsiniz.
          </p>
          <p className="mb-4 leading-7 text-zinc-700">
            Teknik analiz, yatırımcıların geçmiş fiyat hareketlerinden yararlanarak
            olası yön arayışını anlamasına yardımcı olur. Grafik analiz içerikleri
            sayesinde trend yapısı, formasyon görünümü, hareketli ortalamalar ve
            önemli fiyat seviyeleri daha kolay takip edilebilir.
          </p>
          <p className="mb-4 leading-7 text-zinc-700">
            Hisse senedi grafik analizi, kısa vadeli işlem yapan yatırımcılar kadar
            orta ve uzun vadeli pozisyon almak isteyen kullanıcılar için de önemli
            bir referans sunar. Özellikle işlem hacmi, kırılım bölgeleri ve teknik
            görünüm değişimleri yatırım kararlarında dikkatle izlenir.
          </p>
          <p className="leading-7 text-zinc-700">
            Güncel hisse grafik analizleri, teknik görünüm değerlendirmeleri,
            destek direnç seviyeleri ve borsa teknik analiz içerikleri için bu
            sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
