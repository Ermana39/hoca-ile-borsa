import Link from "@/components/NoPrefetchLink";
import type { SeoIcerik } from "@/lib/gosterge-tarama-seo";

// Tüm gösterge taraması sayfaları için TEK ortak şablon. Her sayfa kendi
// başlık/açıklama/veri ve (varsa) SEO içeriğini props olarak geçer; yapı
// tüm taramalarda aynıdır.
export default function GostergeTaramaSayfasi({
  title,
  description,
  hisseler,
  guncellemeTarihi,
  seo,
}: {
  title: string;
  description: string;
  hisseler: string[];
  guncellemeTarihi?: string;
  seo?: SeoIcerik;
}) {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/gosterge-taramalari"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">{title}</h1>

        <p className="mb-3 max-w-3xl text-base text-zinc-600">{description}</p>

        <div className="mb-8 text-sm font-semibold text-zinc-700 md:text-base">
          Toplam {hisseler.length} hisse
          {guncellemeTarihi ? ` · Son güncelleme: ${guncellemeTarihi}` : ""}
        </div>

        <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          {hisseler.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {hisseler.map((hisse, index) => (
                <div
                  key={`${hisse}-${index}`}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-base font-semibold text-zinc-900"
                >
                  {hisse}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500">
              Veri bulunamadı.
            </div>
          )}
        </section>

        {seo && (
          <section
            className="mt-12 space-y-8"
            aria-labelledby="tarama-seo-baslik"
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Taramanın ne olduğu
              </p>
              <h2
                id="tarama-seo-baslik"
                className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl"
              >
                {seo.baslik}
              </h2>
              <p className="text-zinc-700 leading-relaxed">{seo.giris}</p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
                Bu Taramanın Nasıl Oluşturulduğu
              </h2>
              <ul className="space-y-3 text-zinc-700">
                {seo.nasilOlusturulur.map((madde) => (
                  <li key={madde} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-1 text-blue-500">•</span>
                    <span>{madde}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
                Tarama Sonuçlarının Nasıl Kullanılabileceği
              </h2>
              <ul className="space-y-3 text-zinc-700">
                {seo.nasilKullanilir.map((madde) => (
                  <li key={madde} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-1 text-green-500">•</span>
                    <span>{madde}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-amber-950 md:text-2xl">
                Dikkat Edilmesi Gerekenler
              </h2>
              <ul className="space-y-3 text-amber-950">
                {seo.dikkatEdilecekler.map((madde) => (
                  <li key={madde} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-1">⚠️</span>
                    <span>{madde}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold text-red-950 md:text-2xl">
                Yatırım Tavsiyesi Değildir
              </h2>
              <p className="leading-relaxed text-red-950">
                Bu sayfadaki tarama sonuçları ve açıklamalar yalnızca
                bilgilendirme amacıyla hazırlanmıştır. Buradaki veriler herhangi
                bir hisse için al, sat veya tut tavsiyesi olarak
                değerlendirilmemelidir.
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
