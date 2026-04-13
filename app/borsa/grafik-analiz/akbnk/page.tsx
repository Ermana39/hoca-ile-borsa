import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AKBNK Teknik Analiz | Hoca ile Borsa",
  description:
    "AKBNK günlük grafik teknik değerlendirmesi, direnç ve destek seviyeleri ile genel teknik görünüm.",
};

export default function AkbnkAnalizPage() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/analiz"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-lg">
          <div className="relative aspect-[16/9] w-full bg-black">
            <Image
              src="/akbnk-analiz.png"
              alt="AKBNK teknik analiz grafiği"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-7">
            <h1 className="mb-5 text-2xl font-bold leading-tight md:text-3xl">
              AKBNK Teknik Analiz
            </h1>

            <div className="space-y-4 text-[15px] leading-7 text-gray-200 md:text-base">
              <p>
                Günlük grafikte son yükselişin ardından direnç bölgesine yaklaşan
                fiyat hareketinde kısa vadeli yorulma işaretleri izleniyor.
                Göstergelerdeki toparlanmaya rağmen mevcut seviyelerde kar
                satışları ve sınırlı geri çekilme ihtimali göz ardı edilmemelidir.
                Özellikle direnç alanı altında kalındığı sürece fiyatın bir süre
                daha dalgalı ve temkinli seyretmesi beklenebilir. Destek
                bölgelerinin korunması ise görünümün bozulmaması açısından önem
                taşımaktadır.
              </p>

              <p>
                Önemli direnç seviyesi 55 hareketli ortalamanın da yer aldığı 78
                TL seviyesi olurken, destek tarafında ise kademeli bakmak daha
                doğru:
              </p>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2">
                  <strong>75,00 – 76,00 TL bandı:</strong> çok kısa vadeli ilk
                  destek
                </p>
                <p className="mb-2">
                  <strong>72,50 – 73,50 TL bandı:</strong> daha anlamlı ara destek
                </p>
                <p>
                  <strong>69,50 – 70,50 TL bandı:</strong> ana destek bölgesi gibi
                  duruyor.
                </p>
              </div>

              <p className="border-t border-white/10 pt-4 text-sm text-gray-400">
                Bu içerikte yer alan teknik değerlendirmeler genel niteliktedir
                ve yatırım danışmanlığı kapsamında değildir.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8">
          <div className="min-h-[120px] w-full rounded-2xl border border-dashed border-white/10 bg-white/[0.03]" />
        </div>
      </div>
    </main>
  );
}