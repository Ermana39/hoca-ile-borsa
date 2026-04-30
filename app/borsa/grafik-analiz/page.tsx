import Link from "next/link";

const analizler = [
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

        <section>
          <div className="space-y-4">
            {analizler.map((analiz) => (
              <Link
                key={analiz.href}
                href={analiz.href}
                className="block rounded-2xl border border-sky-200 bg-sky-50 px-4 py-5 text-xl font-semibold text-black transition hover:bg-sky-100"
              >
                {analiz.baslik}
              </Link>
            ))}
          </div>
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