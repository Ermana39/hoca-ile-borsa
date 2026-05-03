import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stopaj Sonrası Gerçek Getiri: Fonlar BIST 100’ün Gerisinde mi Kaldı?",
  description:
    "Stopaj Sonrası Gerçek Getiri: Fonlar BIST 100’ün Gerisinde mi Kaldı?",
  alternates: {
    canonical: "/borsa/dikkat-cekenler/haber-4",
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

export default function Haber1Page() {
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
              Sentimentte Zayıflayan Negatif Momentum Dikkat Çekiyor
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              BIST100 endeksi haftayı 14.442,56 puan seviyesinde kapatırken, BIST30 endeksi ise haftayı 16.601,12 seviyesinde tamamladı.
            </p>
            <p>BIST100 STP: 14.429,95</p>
            <p>BIST30 STP: 16.592,56</p>
            <p>Günlük sentiment haftayı 5,26 seviyesinde kapattı. 
              Sentiment momentum grafiğinde uzun süredir devam eden mavi barların ardından kırmızı bölgeye geçiş dikkat çekiyor. 
              Özellikle son 3 işlem gününde kırmızı barların kısalarak devam etmesi, piyasadaki negatif baskının şimdilik zayıflama eğiliminde olabileceğini gösteriyor.</p>
            <p>Endeks ağırlıklı görünüme baktığımızda hisselerin; %32,29’u yeşil bölgede, %46,08’i sarı bölgede, %20,27’si ise kırmızı bölgede yer alıyor.</p>
            <p>Genel görünümde piyasa tamamen güçlenmiş diyemeyiz ancak kırmızı bölgede zayıflayan momentum, önümüzdeki hafta için takip edilmesi gereken önemli sinyallerden biri olarak öne çıkıyor.</p>
            <p>03.05.2026 - Yatırım tavsiyesi değildir.</p>
          </header>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <Image
                src="/dikkat-ceken-1.png"
                alt="Stopaj sonrası fon türleri ve BIST 100 karşılaştırması"
                width={1200}
                height={1500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </section>

          <section className="pt-6">
            <ReklamAlani variant="yatay" />
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <p className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
{``}
              </p>
            </div>
          </section>

          <section className="pt-8">
            <Link
              href="/fonlar"
              className="inline-flex rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
            
          </section>

          <section className="pt-8">
            <ReklamAlani variant="icerik" />
          </section>
        </article>
      </div>
    </main>
  );
}