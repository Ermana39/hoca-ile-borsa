import Link from "next/link";

function ReklamAlani() {
  return (
    <section
      aria-label="Reklam alanı"
      className="w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
    >
      <div className="w-full min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]" />
    </section>
  );
}

export default function YasalUyariPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Ana Sayfa
          </Link>
          <Link href="/" className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Yasal Uyarı</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Bu sitede yer alan tüm içerikler genel bilgilendirme amacı taşır.
          </p>

          <p>
            Sitede yer alan veriler, tablolar, yorumlar, haberler ve eğitim
            içerikleri yatırım tavsiyesi niteliğinde değildir.
          </p>

          <p>
            Kullanıcıların yalnızca bu sitede yer alan bilgilere dayanarak yatırım
            kararı vermesi önerilmez. Yatırım kararları, kişinin risk-getiri
            tercihleri dikkate alınarak yetkili uzmanlardan destek alınarak
            verilmelidir.
          </p>

          <p>
            Veri girişinde, dış kaynaklı bilgilerde veya teknik güncellemelerde
            gecikme, hata, eksiklik veya farklılık oluşabilir.
          </p>

          <p>
            Hoca İle Borsa, sitede yer alan içeriklerin kullanımından doğabilecek
            doğrudan veya dolaylı zararlardan sorumluluk kabul etmez.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}