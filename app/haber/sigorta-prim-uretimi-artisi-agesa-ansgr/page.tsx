import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "Sigorta Şirketlerinde Prim Üretimi Artışı – AGESA ve ANSGR",
  description:
    "AGESA ve Anadolu Sigorta'nın 2026 yılı ilk 5 aylık prim üretimi verileri açıklandı. Sigorta sektöründe büyüme ivmesi devam ediyor.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/sigorta-prim-uretimi-artisi-agesa-ansgr",
  },
};

export default function SigortaPrimUretimiPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Sigorta Şirketlerinde Prim Üretimi Artışı Dikkat Çekti
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              Borsa İstanbul'da işlem gören sigorta şirketlerinden gelen prim
              üretimi verileri, sektörün 2026 yılının ilk bölümünde büyüme
              ivmesini koruduğunu gösterdi. Özellikle AGESA ve Anadolu Sigorta
              tarafından açıklanan rakamlar, sigorta sektörüne yönelik yatırımcı
              ilgisinin yeniden artmasına neden olabilecek nitelikte
              değerlendiriliyor.
            </p>

            <p>
              AGESA, 1 Ocak – 31 Mayıs 2026 döneminde toplam 12,69 milyar TL
              prim üretimi gerçekleştirdi. Bu tutarın 12,47 milyar TL'si hayat
              branşından, 217 milyon TL'si ise hayat dışı branştan geldi.
              Şirketin toplam prim üretimi geçen yılın aynı dönemine göre yüzde
              46 artış gösterdi. Bu tablo, AGESA'nın özellikle hayat sigortası
              tarafında güçlü büyümesini sürdürdüğünü ortaya koyuyor.
            </p>

            <p>
              Anadolu Sigorta tarafında ise yılın ilk beş ayında brüt prim
              üretimi 45,95 milyar TL'ye ulaştı. Şirketin prim üretimi geçen
              yılın aynı dönemine göre yüzde 24,9 artış kaydetti. Anadolu
              Sigorta'nın ulaştığı bu seviye, hayat dışı sigorta tarafında
              sektörün güçlü seyrini koruduğunu gösteren önemli verilerden biri
              oldu.
            </p>

            <p>
              Sigorta şirketlerinde prim üretimi doğrudan net kâr anlamına
              gelmese de, operasyonel büyümenin izlenmesi açısından önemli bir
              gösterge olarak kabul ediliyor. Prim üretimindeki artışın kârlılığa
              ne ölçüde yansıyacağı ise hasar/prim dengesi, teknik kârlılık,
              yatırım gelirleri ve gider yönetimiyle birlikte değerlendirilecek.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              Sigorta şirketlerinde açıklanan prim üretimi verileri olumlu
              görünse de, yatırımcıların sadece ciro benzeri büyüme rakamlarına
              odaklanmaması gerekir. Asıl belirleyici olan, bu büyümenin teknik
              kârlılık ve net dönem kârına ne kadar yansıdığı olacaktır. Bu
              nedenle önümüzdeki finansal tablolar AGESA ve ANSGR için daha
              dikkatli takip edilmelidir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="sigorta-prim-uretimi-artisi-agesa-ansgr"
            baslik="Sigorta Şirketlerinde Prim Üretimi Artışı"
          />
        </div>
        <HaberNavigasyon href="/haber/sigorta-prim-uretimi-artisi-agesa-ansgr" className="mt-8" />
      </div>
    </main>
  );
}
