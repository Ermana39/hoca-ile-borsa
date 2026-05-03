import Link from "next/link";

const analizler = [
   {
    baslik: "GRTHO Grafik Analiz",
    href: "/borsa/grafik-analiz/aefes",
  },
  {
    baslik: "AEFES Grafik Analiz",
    href: "/borsa/grafik-analiz/aefes",
  },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="space-y-4">
          {analizler.map((analiz, index) => (
            <Link
              key={analiz.href}
              href={analiz.href}
              className="group relative block overflow-hidden rounded-2xl bg-white/80 px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.13)] md:px-6 md:py-6"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-slate-900 via-blue-700 to-emerald-500" />

              <div className="flex items-center gap-4 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-[0_8px_20px_rgba(15,23,42,0.25)] md:h-16 md:w-16 md:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Teknik Grafik Analizi
                  </p>

                  <h2 className="text-xl font-black leading-8 tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-2xl md:leading-9">
                    {analiz.baslik}
                  </h2>
                </div>

                <div className="hidden shrink-0 items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition duration-300 group-hover:bg-blue-700 md:flex">
                  İncele
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Grafik Analiz Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Grafik analiz sayfası, Borsa İstanbul’da işlem gören hisselerin teknik
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