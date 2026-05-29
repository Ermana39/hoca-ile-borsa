import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOKM Grafik Analiz | Hoca İle Borsa",
  description:
    "SOKM için grafik analiz görünümü ve kısa teknik değerlendirme.",
  alternates: {
    canonical: "/borsa/grafik-analiz/sokm",
  },
};

const analizMetni = `Destek ve Direnç Seviyeleri (Anlık fiyat 47,84 TL) 
Grafikte fiyatın son dönemde ciddi bir düşüş trendinde olduğunu ve kritik bir eşiğe dayandığını görüyoruz:

Ana Destek Bölgesi (~46.00 - 47.00 TL): Fiyatın Mart-Nisan aylarında da test edip tepki aldığı, şu anda da çok yaklaştığı en kritik psikolojik ve teknik destek bölgesi burasıdır. Grafikte mor kesikli çizgilerle belirtilen destek seviyeleri bu bölgenin hemen altında (yaklaşık 46.00 TL civarında) kümeleniyor.
 Eğer bu bölge aşağı doğru kırılırsa düşüş trendi hız kazanabilir.

İlk Güçlü Direnç (~49.96 - 51.00 TL): Fiyatın hemen üzerinde, grafikte pembe renkle gösterilen uzun vadeli ana yön belirleyicisi MAV(233) = 49.96 TL seviyesi bulunuyor.
 Hisse şu an bu ana ortalamanın altına sarkmış durumda. 
Yeniden güvenli bölgeye geçiş için ilk etapta 50 TL psikolojik direncinin üzerine çıkılması gerekiyor.

Ana Direnç Bölgesi (~52.00 - 53.00 TL): Grafik üzerinde kısa ve orta vadeli hareketli ortalamaların (MAV 21, 55, 89) yoğunlaştığı yer tam olarak bu banttır. 
Kalıcı bir yükseliş trendinden bahsedebilmemiz için fiyatın bu yoğun direnç kümesini hacimli bir şekilde yukarı kırması şart.

📉 Olumsuz Senaryo
Eğer satış baskısı devam eder ve fiyat 46.00 - 47.00 TL bandındaki ana desteğin altına sarkar, burada günlük kapanışlar yaparsa, teknik görünüm daha da bozulur. 
Bu durumda daha aşağıdaki eski dip seviyelerine doğru geri çekilme riski doğar.

📈 Olumlu Senaryo
Hissenin aşırı satım bölgesinde olması ve güçlü bir yatay desteğe (47.00 TL civarı) çok yakın bulunması sebebiyle buralardan bir ikili dip ya da tepki alımı gelme olasılığı masada.

Eğer fiyat bu destekten güç alıp yukarı fırlarsa, ilk hedef 49.96 TL (MAV 233) olacaktır.

Bu seviyenin üzerinde kalıcılık sağlanması durumunda ise düşüş trendi tamamen sonlanır ve gözler 53.00 TL seviyesindeki ana direnç kümesine çevrilir.

Özetle: SOKM şu an tam bir "karar aşamasında". 46.00-47.00 TL destek bölgesinin çalışıp çalışmayacağı önümüzdeki günlerin yönünü tayin edecek. 
Destekten dönerken oluşacak yeşil bir hacimli bar veya StochRSI'ın yukarı kesişimi, risk iştahını artırabilir.`;

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

export default function SokmGrafikAnalizPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/grafik-analiz"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              SOKM İçin Kısa Grafik Analiz Değerlendirmesi
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              SOKM için kısa grafik analiz değerlendirmesi.
            </p>
          </header>

          <section className="pt-6">
            <ReklamAlani variant="yatay" />
          </section>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
              <div className="relative aspect-video w-full">
                <Image
                  src="/analiz-2.jpg"
                  alt="SOKM analiz görseli"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Link
                href="/analiz-2.jpg"
                target="_blank"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700"
              >
                Grafiği Büyük Görüntüle
              </Link>
            </div>
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <div className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
                {analizMetni}
              </div>

              <p className="mt-4 border-t border-zinc-200 pt-4 text-sm text-zinc-500 md:text-base">
                Bu içerikte yer alan teknik değerlendirmeler genel niteliktedir
                ve yatırım danışmanlığı kapsamında değildir.
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