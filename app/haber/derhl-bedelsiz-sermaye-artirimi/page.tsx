import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "DERHL'den Yüzde 401 Oranında Bedelsiz Sermaye Artırımı Kararı",
  description:
    "DERHL yönetim kurulu yüksek oranlı bedelsiz sermaye artırımı kararı aldı. Bedelsiz oranı ve yatırımcı için dikkat edilmesi gerekenler.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/derhl-bedelsiz-sermaye-artirimi",
  },
};

export default function DerhlBedelsizPage() {
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
              DERHL'den Yüzde 401 Oranında Bedelsiz Sermaye Artırımı Kararı
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              DERHL, yatırımcıların yakından takip ettiği yüksek oranlı bedelsiz
              sermaye artırımı kararlarından birine imza attı. Şirket,
              sermayesinin bedelsiz olarak artırılmasına yönelik yönetim kurulu
              kararı aldığını duyurdu.
            </p>

            <p>
              Bedelsiz sermaye artırımı, şirketin iç kaynaklarını kullanarak
              çıkarılmış sermayesini artırması anlamına gelir. Bu işlem sonucunda
              yatırımcıların sahip olduğu pay adedi artarken, teorik olarak hisse
              fiyatı da aynı oranda düzeltilir. Bu nedenle bedelsiz sermaye
              artırımı şirketin piyasa değerini tek başına artıran bir işlem
              değildir; ancak piyasada yüksek oranlı bedelsiz kararları
              genellikle yatırımcı ilgisini artırabilen gelişmeler arasında yer
              alır.
            </p>

            <p>
              DERHL'de açıklanan yüksek oranlı bedelsiz kararı, hisse üzerinde
              kısa vadeli hareketliliğe neden olabilecek bir başlık olarak öne
              çıkıyor. Ancak yatırımcıların bu tür haberlerde sadece bedelsiz
              oranına odaklanması sağlıklı olmaz. Şirketin özkaynak yapısı,
              faaliyet performansı, kârlılığı ve finansal sürdürülebilirliği de
              mutlaka birlikte değerlendirilmelidir.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              DERHL'de yüksek oranlı bedelsiz kararı dikkat çekici olsa da,
              bedelsiz sermaye artırımı tek başına şirketin değerini artırmaz. Bu
              nedenle yatırımcılar olası fiyat hareketlerini takip ederken
              şirketin temel verilerini de göz ardı etmemelidir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="derhl-bedelsiz-sermaye-artirimi"
            baslik="DERHL Bedelsiz Sermaye Artırımı"
          />
        </div>
        <HaberNavigasyon href="/haber/derhl-bedelsiz-sermaye-artirimi" className="mt-8" />
      </div>
    </main>
  );
}
