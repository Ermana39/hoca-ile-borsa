import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUAGR İkili Dip Formasyonu | Hoca İle Borsa",
  description:
    "QUAGR günlük grafik teknik değerlendirmesi, destek ve direnç seviyeleri.",
  alternates: {
    canonical: "/borsa/formasyonlar/quagr-ikili-dip-formasyonu",
  },
};

export default function QuagrIkiliDipFormasyonuPage() {
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
            href="/borsa/formasyonlar"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              QUAGR İkili Dip Formasyonu
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              QUAGR günlük grafikte ikili dip formasyonu dikkat çekiyor.
            </p>
          </header>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/quagr-formasyon.png"
                  alt="QUAGR ikili dip formasyonu görseli"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <p className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
                {`#QUAGR

Fiyatın dip bölgesinden aldığı tepkiyle birlikte teknik görünümde toparlanma sinyali güçlenirken, formasyon hedefleri şu şekilde takip edilebilir:

📌 Yarı formasyon hedefi: 4,58 TL

📌 Tam formasyon hedefi: 5,02 TL

Özellikle 4,58 TL üzerindeki hareketlerde formasyonun daha güçlü çalışması, 5,02 TL seviyesinin ise ana hedef olarak gündeme gelmesi beklenebilir.

4,26 TL 02.06.2026

Burada yer alan bilgi, yorum ve teknik değerlendirmeler genel niteliktedir. Yatırım danışmanlığı kapsamında değildir.`}
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
