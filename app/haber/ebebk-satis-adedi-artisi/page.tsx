import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "EBEBK Satış Adedi Artışı – Mayıs 2026 Verileri",
  description:
    "EBEBK Mayıs 2026'da satış adedini yüzde 27 artırdı. Yılın ilk 5 ayında toplam satış 50 milyon adedi aştı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ebebk-satis-adedi-artisi",
  },
};

export default function EbebkSatisArtisiPage() {
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
              EBEBK Mayıs Ayında Satışlarını Artırdı: 5 Aylık Ürün Satışı 50
              Milyon Adedi Aştı
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              EBEBK, mağaza ve e-ticaret kanallarındaki satış performansına
              ilişkin güncel verilerini paylaştı. Şirketin Mayıs 2026 döneminde
              sattığı toplam ürün adedi, geçen yılın aynı dönemine göre yaklaşık
              yüzde 27 artarak 11,28 milyon adede ulaştı. 2026 yılının ilk beş
              ayında ise toplam satış adedi 50 milyon adedi aştı.
            </p>

            <p>
              Perakende şirketleri açısından satış adedi, tüketici talebinin
              canlılığını ve operasyonel hacmi göstermesi bakımından önemli bir
              göstergedir. EBEBK'nin hem fiziksel mağaza hem de e-ticaret
              kanallarındaki satışlarını artırması, şirketin çok kanallı
              perakende yapısının çalıştığını gösteren olumlu bir sinyal olarak
              değerlendirilebilir.
            </p>

            <p>
              Bununla birlikte satış adedi artışı tek başına kârlılık garantisi
              değildir. Perakende şirketlerinde brüt kâr marjı, stok yönetimi,
              kampanya yoğunluğu, kira giderleri, personel maliyetleri ve
              finansman giderleri net kâr üzerinde belirleyici olmaya devam eder.
              Bu nedenle yatırımcıların EBEBK tarafında satış hacmiyle birlikte
              kâr marjlarını da takip etmesi gerekir.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              EBEBK tarafında operasyonel büyüme devam ediyor. Satış adedindeki
              artış olumlu; ancak yatırımcı açısından asıl kritik nokta bu
              büyümenin kârlılığa ne kadar yansıdığı olacak. Şirketin önümüzdeki
              finansal sonuçlarında satış artışı ile marjlar birlikte
              değerlendirilmelidir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="ebebk-satis-adedi-artisi"
            baslik="EBEBK Satış Perakende Temettü"
          />
        </div>
        <HaberNavigasyon href="/haber/ebebk-satis-adedi-artisi" className="mt-8" />
      </div>
    </main>
  );
}
