import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description:
    "",
  alternates: {
    canonical: "/borsa/dikkat-cekenler/haber-3",
  },
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function Haber3Page() {
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
            href="/borsa/dikkat-cekenler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              BİST100 Önemli Direnç Noktasında Negatif Uyumsuzluk
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              Bist100 Günlük grafiğinde savaş öncesinde RSI göstergesinde oluşan negatif uyumsuzluk ile endeks ABD-İsrail_İran savaşınında başlaması ile zirvesinden %15 düşüş yaşamıştı. 
            </p>
          </header>

          <section className="pt-6">
            <ReklamAlani variant="yatay" />
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <p className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
{`Bu dönemde savaşın devam etmesine rağmen endeks yeniden savaş öncesi değerlerine geldi. Bruada da savaş öncesindeki kadar belirgin olmasa da RSI göstergesinde bir miktar negatif uyumsuzluk yeniden belirmiş durumda.  TD Sequential direnç noktası olan 14.610 bölgesi geçilmedikçe endekste geri çekilme yaşanabileceğini düşünüyorum. Ancak savaş ile ilgili olumlu sert gelişmeler yaşanır ise bu haber akışı ile bu direnci kırabiliriz. Benim bu grafikten okuduğum fiyatın aşağıya olan ivme ihtimali daha ağır basıyor gibi. Aşağıdaki desteklerimiz 14.100-13.700-13.350 puan bölgeleri olacaktır. Yukarıya yaşanabilecek hareketlerde 14.600 üzerinde kapanışlar alabilirsek, 14.800 ve 15.100 seviyeleri hedef noktaları olacaktır.    Burada yer alan değerlendirmeler genel bilgilendirme amaçlıdır.
                Herhangi bir yatırım tavsiyesi niteliği taşımaz. `}
              </p>
            </div>
          </section>
          <section className="pt-8">
            <ReklamAlani variant="icerik" />
          </section>
        </article>
      </div>
    </main>
  );
}