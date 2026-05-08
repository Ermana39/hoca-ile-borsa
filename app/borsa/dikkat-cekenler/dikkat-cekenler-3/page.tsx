import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ak Portföy Yeni Teknolojiler Yabancı Hisse Senedi Fonu Son 1 Haftada %9,90 Artış Gösterdi",
  description:
    "Ak Portföy Yeni Teknolojiler Yabancı Hisse Senedi Fonu Son 1 Haftada %9,90 Artış Gösterdi",
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
        <section className="mb-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
          <Image
            src="/dikkat-ceken-3a.jpg"
            alt="Sentiment görünümü üst görseli"
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </section>

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
              AFT - Ak Portföy Yeni Teknolojiler Yabancı Hisse Senedi Fonu Son 1 Haftada %9,90 Artış Gösterdi
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              AK Portföy Yeni Teknolojiler Yabancı Hisse Senedi Fonu AFT, son bir haftada yaklaşık %9,90 yükseliş göstererek yatırım fonları tarafında dikkat çeken fonlar arasında öne çıktı.
            </p>
            <p>Fonun performans tablosuna bakıldığında yalnızca kısa vadeli yükseliş değil, daha uzun vadeli getiriler de dikkat çekiyor. AFT’nin son 1 aylık getirisi %24,62, son 1 yıllık getirisi ise %88,91 seviyesinde bulunuyor. Daha uzun vadede ise son 3 yılda %438,73, son 5 yılda %918,31 getiri ile güçlü bir performans sergilediği görülüyor.</p>
            <p>Karşılaştırma tablosunda AFT’nin son 1 yıllık performansı; BIST100, BIST30, altın, Euro/TL ve Dolar/TL gibi önemli göstergelerin üzerinde yer alıyor. Bu görünüm, fonun özellikle teknoloji odaklı yabancı hisse senedi yatırımları sayesinde son dönemde güçlü bir ivme yakaladığını gösteriyor.</p>
            <p>
              Fon portföyünün büyük bölümünün yabancı hisse senetlerinden oluşması nedeniyle AFT, hem küresel teknoloji hisselerindeki hareketlerden hem de döviz bazlı fiyatlamalardan etkilenebilen bir yapıya sahip. Bu nedenle getiriler dikkat çekici olsa da, fonun risk seviyesi ve dalgalanma potansiyeli de yatırımcılar tarafından ayrıca değerlendirilmelidir.
            </p>
            <p>
              
            </p>
            <p>
              
            </p>
            <p>08.05.2026 - Bu paylaşım yatırım tavsiyesi değildir.</p>

            <div className="mt-5">
              <Link
                href="/fonlar"
                className="inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700"
              >
                Fonlar sayfasına git
              </Link>
            </div>
          </header>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <Image
                src="/dikkat-ceken-1.png"
                alt="Stopaj sonrası fon türleri ve BIST 100 karşılaştırması"
                width={1200}
                height={1500}
                className="h-auto w-full object-cover"
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
            <ReklamAlani variant="icerik" />
          </section>

          <section className="pt-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <Image
                src="/dikkat-ceken-3b.jpg"
                alt="Sentiment görünümü alt görseli"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
              />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}