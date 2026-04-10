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

export default function KullanimSartlariPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Kullanım Şartları</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Bu siteyi kullanan herkes aşağıdaki kullanım şartlarını kabul etmiş
            sayılır.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">1. İçerik kullanımı</h2>
          <p>
            Sitedeki yazı, tablo, görsel ve diğer içerikler izinsiz kopyalanamaz,
            çoğaltılamaz ve ticari amaçla kullanılamaz.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">2. Bilgilendirme niteliği</h2>
          <p>
            Sitede yer alan içerikler genel bilgilendirme amaçlıdır. Hiçbir içerik
            yatırım danışmanlığı, al-sat önerisi veya kesin getiri taahhüdü değildir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">3. Kullanıcı sorumluluğu</h2>
          <p>
            Kullanıcı, siteyi hukuka ve dürüstlük kurallarına uygun şekilde
            kullanacağını kabul eder.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">4. Teknik değişiklikler</h2>
          <p>
            Site içeriği, tasarımı, veri yapısı ve hizmet kapsamı önceden bildirim
            yapılmaksızın güncellenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">5. Üçüncü taraf bağlantılar</h2>
          <p>
            Site üzerinde üçüncü taraf bağlantılar yer alabilir. Bu bağlantıların
            içeriklerinden Hoca İle Borsa sorumlu değildir.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}