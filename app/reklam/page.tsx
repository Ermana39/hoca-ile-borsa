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

export default function ReklamPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Reklam</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Hoca İle Borsa üzerinde reklam, sponsorluk, tanıtım yazısı ve özel
            iş birliği çalışmaları yapılabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">Reklam alanları</h2>
          <p>
            Sitede banner reklam, içerik içi reklam, sponsorluk alanı ve özel
            tanıtım sayfası formatları kullanılabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">Şeffaflık ilkesi</h2>
          <p>
            Ücretli iş birlikleri ve sponsorlu içerikler, mümkün olduğu ölçüde
            kullanıcıyı yanıltmayacak şekilde ayrıştırılır.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">İletişim</h2>
          <p>
            Reklam ve iş birliği talepleri için: hocaileborsa@gmial.com
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">Ticari ileti notu</h2>
          <p>
            Reklam ve pazarlama amaçlı elektronik iletiler için gerekli olduğu
            durumda yasal onay süreçleri esas alınır.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}