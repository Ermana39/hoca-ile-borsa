import Image from "next/image";
import Link from "next/link";

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
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/borsa/dikkat-cekenler"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/dikkat-ceken-3.png"
              alt="BİST100 Önemli direnç noktasında negatif uyumsuzluk"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-4 text-sm font-medium text-zinc-500 md:text-base">
              Oluşturulma Tarihi: 21.04.2026
            </div>

            <h1 className="mb-6 text-3xl font-bold text-zinc-900 md:text-4xl">
              BİST100 Önemli Direnç Noktasında Negatif Uyumsuzluk
            </h1>

            <div className="space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Bist100 Günlük grafiğinde savaş öncesinde RSI göstergesinde oluşan negatif uyumsuzluk ile endeks ABD-İsrail_İran savaşınında başlaması ile zirvesinden %15 düşüş yaşamıştı.
              </p>

              <p>
                Bu dönemde savaşın devam etmesine rağmen endeks yeniden savaş öncesi değerlerine geldi.
              </p>

              <p>
                Burada da savaş öncesindeki kadar belirgin olmasa da RSI göstergesinde bir miktar negatif uyumsuzluk yeniden belirmiş durumda. TD Sequential direnç noktası olan 14.610 bölgesi geçilmedikçe endekste geri çekilme yaşanabileceğini düşünüyorum.
              </p>

              <p>
                Benim bu grafikten okuduğum fiyatın aşağıya olan ivme ihtimali daha ağır basıyor gibi. Aşağıdaki desteklerimiz 14.100-13.700-13.350 puan bölgeleri olacaktır. Yukarıya yaşanabilecek hareketlerde 14.600 üzerinde kapanışlar alabilirsek, 14.800 ve 15.100 seviyeleri hedef noktaları olacaktır.
              </p>

              <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm font-medium leading-7 text-zinc-800 md:text-base">
                Burada yer alan değerlendirmeler genel bilgilendirme amaçlıdır.
                Herhangi bir yatırım tavsiyesi niteliği taşımaz.
              </p>
            </div>
          </div>
        </article>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}