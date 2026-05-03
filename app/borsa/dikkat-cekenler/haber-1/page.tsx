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

export default function Haber1Page() {
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
              src="/dikkat-ceken-1.png"
              alt="Banka hisselerinde önemli direnç noktası"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="mb-6 text-3xl font-bold text-zinc-900 md:text-4xl">
              Sentimentte Zayıflayan Negatif Momentum Dikkat Çekiyor
            </h1>

            <div className="space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                BIST100 endeksi haftayı 14.442,56 puan seviyesinde kapatırken, BIST30 endeksi ise haftayı 16.601,12 seviyesinde tamamladı.
              </p>

              <p>
                BIST100 STP: 14.429,95

BIST30 STP: 16.592,56
              </p>

              <p>
                Günlük sentiment haftayı 5,26 seviyesinde kapattı. 
                Sentiment momentum grafiğinde uzun süredir devam eden mavi barların ardından kırmızı bölgeye geçiş dikkat çekiyor. 
                Özellikle son 3 işlem gününde kırmızı barların kısalarak devam etmesi, piyasadaki negatif baskının şimdilik zayıflama eğiliminde olabileceğini gösteriyor.
              </p>

              <p>
                Endeks ağırlıklı görünüme baktığımızda hisselerin;

%32,29’u yeşil bölgede,

%46,08’i sarı bölgede,

%20,27’si ise kırmızı bölgede yer alıyor.
              </p>

              <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm font-medium leading-7 text-zinc-800 md:text-base">
                Genel görünümde piyasa tamamen güçlenmiş diyemeyiz ancak kırmızı bölgede zayıflayan momentum, önümüzdeki hafta için takip edilmesi gereken önemli sinyallerden biri olarak öne çıkıyor.
              </p>
              <p>Yatırım tavsiyesi değildir.</p>
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