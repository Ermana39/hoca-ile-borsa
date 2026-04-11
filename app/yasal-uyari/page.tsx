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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Yasal Uyarı</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Hoca İle Borsa üzerinde yer alan tüm içerikler genel bilgilendirme,
            eğitim, veri derleme ve içerik sunumu amacı taşır.
          </p>

          <p>
            Sitede yayınlanan yorumlar, haber özetleri, analiz sayfaları, tablolar,
            oranlar, takvimler, eğitim içerikleri ve diğer tüm paylaşımlar yatırım
            danışmanlığı kapsamında değildir. Bu içerikler herhangi bir sermaye
            piyasası aracının alım, satım veya elde tutulması yönünde kişiye özel
            tavsiye niteliği taşımaz.
          </p>

          <p>
            Yatırım kararları; kişilerin mali durumu, risk algısı, getiri beklentisi
            ve yatırım tercihleri doğrultusunda şekillenmelidir. Bu nedenle yalnızca
            bu sitede yer alan bilgilere dayanılarak yatırım kararı verilmesi uygun
            değildir.
          </p>

          <p>
            Sitede yer alan veriler farklı kaynaklardan derlenebilir ve belirli
            aralıklarla güncellenebilir. Buna rağmen veri akışında gecikme, teknik
            sorun, yazım yanlışı, eksiklik, sistemsel hata veya kaynak farklılığı
            oluşabilir.
          </p>

          <p>
            Kullanıcıların, özellikle finansal sonuç doğurabilecek işlemler öncesinde
            resmi kurum açıklamalarını, şirket bildirimlerini, KAP duyurularını,
            aracı kurum verilerini ve diğer yetkili kaynakları ayrıca kontrol etmesi
            gerekir.
          </p>

          <p>
            Hoca İle Borsa; sitede yer alan içeriklerin eksiksiz, kesintisiz veya her
            zaman tamamen güncel olacağını garanti etmez.
          </p>

          <p>
            Sitede yer alan içeriklerin kullanılmasından, yorumlanmasından veya bu
            içeriklere dayanılarak alınan kararlardan doğabilecek doğrudan ya da
            dolaylı zararlar, gelir kayıpları veya fırsat maliyetleri konusunda
            sorumluluk kabul edilmez.
          </p>

          <p>
            Bu sitede yer alan tüm içerikler, aksi belirtilmedikçe yalnızca genel
            bilgilendirme amaçlıdır.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}