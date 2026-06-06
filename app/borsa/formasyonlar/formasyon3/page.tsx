import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUNER Düşen Genişleyen Takoz Formasyonu | Hoca İle Borsa",
  description:
    "HUENR günlük grafik teknik değerlendirmesi, destek ve direnç seviyeleri.",
  alternates: {
    canonical: "/borsa/formasyonlar/formasyon3",
  },
};

export default function Formasyon1Page() {
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
              HUNER Düşen Genişleyen Takoz Formasyonu
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              HUNER teknik görünümüne dair kısa değerlendirme.
            </p>
          </header>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/formasyon-3.jpg"
                  alt="HUNER düşen genişleyen takoz formasyonu görseli"
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
                {`

HUNER grafiğinde teknik açıdan düşen genişleyen takoz formasyonu dikkat çekiyor.

Formasyonun yukarı yönlü teyidini koruması halinde 3,85 TL seviyesi yarı hedef, 4,09 TL seviyesi ise tam fiyat hedefi olarak izlenebilir. Son yükseliş hamlesi, teknik görünümde toparlanma isteğinin öne çıktığını gösteriyor.

Bundan sonraki süreçte fiyatın formasyon yapısını koruyup koruyamayacağı, hacim desteği ve genel piyasa görünümü yakından takip edilmeli. Teknik görünümde bozulma yaşanması halinde beklentiler geçerliliğini yitirebilir.

3.76 TL 13.05.2026

Burada yer alan bilgi, yorum ve teknik değerlendirmeler genel niteliktedir. Yatırım danışmanlığı kapsamında değildir.`}
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}