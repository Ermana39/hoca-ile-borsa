import Link from "next/link";
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
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

export default function CerezPolitikasiPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Çerez Politikası</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Bu politika, Hoca İle Borsa internet sitesinde kullanılan çerezlere
            ilişkin açıklamaları içerir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">1. Çerez nedir?</h2>
          <p>
            Çerezler, internet sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen
            küçük metin dosyalarıdır.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">2. Çerez türleri</h2>
          <p>
            Zorunlu çerezler, performans/analitik çerezleri, işlevsellik çerezleri
            ve reklam/pazarlama çerezleri kullanılabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">3. Kullanım amaçları</h2>
          <p>
            Site işlevlerinin çalışması, kullanıcı tercihleri, trafik analizi,
            performans ölçümü ve reklam alanlarının verimli yönetimi amacıyla çerez
            kullanılabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">4. Açık rıza</h2>
          <p>
            Zorunlu olmayan çerezler için gerekli olduğu durumda açık rıza alınır.
            Çerez tercihlerinizi daha sonra değiştirebilirsiniz.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">5. Yönetim</h2>
          <p>
            Tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya
            sınırlandırabilirsiniz. Ancak bu durumda bazı site işlevleri düzgün
            çalışmayabilir.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}