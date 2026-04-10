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

export default function HakkimizdaPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Hakkımızda</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Hoca İle Borsa; borsa, halka arz, temettü, fonlar ve piyasa verileri
            üzerine içerik üreten bir finans içerik platformudur.
          </p>
          <p>
            Sitede yer alan içerikler; haber, eğitim, genel bilgilendirme ve veri
            derleme amacı taşır. İçerikler yatırım danışmanlığı kapsamında değildir.
          </p>
          <p>
            Amacımız; kullanıcıların piyasa başlıklarını daha düzenli, hızlı ve
            anlaşılır şekilde takip edebilmesini sağlamaktır.
          </p>
          <p>
            Platform üzerinde yer alan tablo, liste ve analiz sayfaları belirli
            veri kaynaklarından ve kullanıcı tarafından hazırlanan excel
            dosyalarından güncellenebilir.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}