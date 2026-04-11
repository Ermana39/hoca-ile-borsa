import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bu yıl işleme başlayan 15 halka arzın tamamı halka arz fiyatının üzerinde işlem görüyor | Hoca İle Borsa",
  description:
    "Bu yıl işleme başlayan 15 halka arzın hepsi halka arz fiyatının üzerinde işlem görüyor. 15 halka arzın ortalama kazancı %111.",
};

export default function Haber1Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber-2v.png"
              alt="Bu yıl işleme başlayan 15 halka arzın hepsi halka arz fiyatının üzerinde işlem görüyor görseli"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Avrasya GYO 2. işlem gününü tavan fiyat ile kapattı.
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Ancak gün sonu karanlık odada gelen satışlar sonucunda tavanda lot kalmadı.
Önümüzdeki hafta aksiyon dolu günler olacak gibi.
              </p>

              <p>
                xxxxxxxx
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}