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

export default function ReklamPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Reklam</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Hoca İle Borsa üzerinde reklam, sponsorluk, marka iş birliği, tanıtım
            çalışmaları ve özel içerik iş birlikleri yapılabilir.
          </p>

          <p>
            Platform; borsa, halka arz, temettü, fonlar, finansal okuryazarlık ve
            piyasa verileriyle ilgilenen kullanıcı kitlesine yönelik içerikler
            üretmektedir. Bu nedenle reklam çalışmaları ilgili hedef kitleye uygun
            alanlarda planlanabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">Reklam alanları</h2>
          <p>
            Sitede banner reklam, içerik içi reklam, kategori sayfası reklam alanı,
            sabit görünür reklam alanı, sponsorluk alanı ve özel tanıtım sayfası
            gibi farklı reklam modelleri değerlendirilebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">İş birliği seçenekleri</h2>
          <p>
            Marka tanıtımı, finans temalı sponsorluk çalışmaları, özel kampanya
            duyuruları, içerik destekli görünürlük çalışmaları ve uzun dönemli reklam
            planlamaları için iletişime geçilebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">Şeffaflık ilkesi</h2>
          <p>
            Ücretli iş birlikleri, sponsorlu içerikler ve reklam çalışmaları editoryal
            içeriklerden ayrı değerlendirilir. Kullanıcıyı yanıltmayacak bir yapı
            korunmaya çalışılır ve reklam niteliğindeki çalışmalar mümkün olduğu
            ölçüde açık şekilde ayrıştırılır.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">İçerik uygunluğu</h2>
          <p>
            Site yapısına, kullanıcı kitlesine ve yayın ilkelerine uygun olmayan
            reklam talepleri değerlendirmeye alınmayabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">İletişim</h2>
          <p>
            Reklam ve iş birliği talepleri için:{" "}
            <a
              href="mailto:destekhocaileborsa@gmail.com"
              className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
            >
              destekhocaileborsa@gmail.com
            </a>
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">Ticari ileti notu</h2>
          <p>
            Reklam ve pazarlama amaçlı iletişim süreçlerinde, gerekli olduğu durumda
            ilgili yasal izin ve onay süreçleri esas alınır.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}