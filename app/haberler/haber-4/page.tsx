import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bu yıl işleme başlayan 15 halka arzın hepsi halka arz fiyatının üzerinde işlem görüyor | Hoca İle Borsa",
  description:
    "Bu yıl işleme başlayan 15 halka arzın hepsi halka arz fiyatının üzerinde işlem görüyor. 15 halka arzın ortalama kazancı %111.",
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

export default function Haber4Page() {
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
              src="/haber-4v.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Fitch, Türkiye’nin kredi notunu “BB-” seviyesinde teyit etti; görünüm “durağan” oldu
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Uluslararası kredi derecelendirme kuruluşu Fitch Ratings, Türkiye’nin uzun vadeli yabancı para cinsinden kredi notunu “BB-” seviyesinde teyit etti. Kuruluş, kredi notu görünümünü ise “pozitif”ten “durağan”a çekti. Fitch’in kararında, son dönemde döviz rezervlerinde yaşanan zayıflama, yüksek enflasyon, dış finansman ihtiyacı ve artan dış kırılganlıkların etkili olduğu belirtildi.

Fitch’in 10 Nisan 2026 tarihli değerlendirmesinde, Türkiye ekonomisinde uygulanan politikaların bazı dengelenme sinyalleri üretmeye devam ettiği ancak makroekonomik kırılganlıkların halen yüksek seviyede bulunduğu vurgulandı. Kuruluş, özellikle rezervlerdeki gerilemenin ve Türk lirasını desteklemeye yönelik müdahalelerin dış tamponlar üzerinde baskı oluşturduğuna işaret etti.

Kararla birlikte Türkiye’nin kredi notu korunmuş olsa da, görünümün “pozitif”ten “durağan”a çekilmesi, kısa vadede yeni bir not artışı beklentisinin zayıfladığı şeklinde yorumlandı. Fitch daha önce Ocak 2026’da Türkiye’nin görünümünü “durağan”dan “pozitif”e yükseltmişti. Son karar ise ekonomik görünümdeki risklerin yeniden öne çıktığını gösterdi.

Fitch değerlendirmesinde, enflasyonda gerileme eğilimi görülse de seviyenin benzer ülkelere kıyasla hâlâ yüksek olduğuna dikkat çekti. Ayrıca yüksek dış borç yükü, finansman ihtiyacı ve sınırlı rezerv tamponlarının Türkiye ekonomisi açısından temel hassasiyet alanları olmaya devam ettiği belirtildi. Bölgesel jeopolitik gelişmelerin, özellikle enerji fiyatları üzerinden cari denge ve enflasyon görünümü üzerinde ek baskı yaratabileceği de ifade edildi.

Piyasalar açısından bakıldığında, notun korunması Türkiye’nin kredi profilinde ani bir bozulma olmadığına işaret ederken, görünüm değişikliği ise temkinli duruşun öne çıktığını gösteriyor. Bu nedenle kararın, yatırımcı algısında tamamen olumsuz bir tablo oluşturmaktan çok, önümüzdeki dönemde makroekonomik göstergelerin ve rezerv dinamiklerinin daha yakından izleneceği bir sürece işaret ettiği değerlendiriliyor. Bu değerlendirme, Fitch’in resmi not teyidi ile görünüm indiriminin birlikte okunmasına dayalı bir çıkarımdır.
              </p>

              <p></p>
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