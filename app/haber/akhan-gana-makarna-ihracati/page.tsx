import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "AKHAN'dan Gana Pazarına Makarna İhracatı",
  description:
    "AKHAN, Gana'ya 34.320 ABD Doları tutarında makarna ihracatı gerçekleştirdi. Afrika pazarına yönelik yeni satış adımı detayları.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/akhan-gana-makarna-ihracati",
  },
};

export default function AkhanGanaIhracatiPage() {
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
              AKHAN'dan Afrika Açılımı: Gana'ya Makarna İhracatı
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026 · <Link href="/yazar/erman-hoca" className="font-semibold text-slate-600 hover:text-blue-600">Erman Hoca</Link></p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              AKHAN, yurt dışı pazarlara yönelik büyüme adımları kapsamında
              Gana'ya yapılacak makarna ihracatına ilişkin yeni bir satış
              gerçekleştirdiğini duyurdu. Şirket tarafından yapılan açıklamaya
              göre, Gana pazarına yönelik satış tutarı 34.320 ABD Doları olarak
              gerçekleşti.
            </p>

            <p>
              Söz konusu satış tutarı şirket ölçeğinde büyük bir finansal etki
              yaratacak seviyede olmasa da, yatırımcı açısından bu haberin önemi
              farklı bir noktada bulunuyor. AKHAN'ın Afrika pazarına yönelik
              attığı bu adım, şirketin ihracat kanallarını çeşitlendirme ve yeni
              pazarlarda varlık gösterme çabasının bir parçası olarak
              değerlendirilebilir.
            </p>

            <p>
              Gıda ihracatı tarafında yeni ülkelere açılmak, şirketler için
              yalnızca tek seferlik satış anlamına gelmez. Eğer ilgili pazarda
              devam eden siparişler oluşursa, bu tür iş ilişkileri zaman içinde
              daha düzenli gelir yaratabilecek bir yapıya dönüşebilir. Bu nedenle
              yatırımcıların AKHAN tarafında bundan sonraki süreçte benzer yeni
              pazar açıklamalarını takip etmesi önemli olacaktır.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900 md:text-base">
              Hoca ile Borsa yorumu:
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
              AKHAN haberinde en kritik nokta satış tutarının büyüklüğünden çok,
              şirketin yeni pazar arayışıdır. 34.320 dolarlık satış tek başına
              güçlü bir finansal etki yaratmayabilir; ancak Gana ve benzeri
              pazarlarda devamlılık sağlanması halinde ihracat tarafı şirket için
              daha anlamlı hale gelebilir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
          <AuthorBox />

        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="akhan-gana-makarna-ihracati"
            baslik="AKHAN Gana İhracat Döviz"
          />
        </div>
        <HaberNavigasyon href="/haber/akhan-gana-makarna-ihracati" className="mt-8" />
      </div>
    </main>
  );
}
