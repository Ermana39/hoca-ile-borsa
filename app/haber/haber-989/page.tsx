import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Merkez Bankası faizi sabit bıraktı",
  description:
    "Merkez Bankası faizi sabit bıraktı",
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

export default function Haber989Page() {
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
              src="/haber989.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Merkez Bankası faizi sabit bıraktı
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                TCMB Para Politikası Kurulu, beklentilere paralel olarak politika faizi olan bir hafta vadeli repo ihale faiz oranının yüzde 37’de sabit tutulmasına karar verdi.
              </p>

              <p>Matriks Haber Servisi'nin PPK toplantısına ilişkin beklenti anketine katılan ekonomistler 37.0% seviyesinde bulunan politika faizinde değişiklik beklemiyordu.

 TCMB Para Politikası Kurulu'nun (PPK) faiz oranlarına ilişkin açıklaması asağıda bulunuyor:

Para Politikası Kurulu (Kurul), politika faizi olan bir hafta vadeli repo ihale faiz oranının yüzde 37’de sabit tutulmasına karar vermiştir. Kurul ayrıca, Merkez Bankası gecelik vadede borç verme faiz oranını yüzde 40’ta, gecelik vadede borçlanma faiz oranını ise yüzde 35,5’te sabit tutmuştur.

Enflasyonun ana eğilimi mart ayında gerilemiştir. Öncü veriler ana eğilimin nisan ayında bir miktar yükseleceğine işaret etmektedir. Jeopolitik gelişmeler eşliğindeki belirsizlikler neticesinde enerji fiyatlarında yüksek seyir ve belirgin oynaklık gözlenmektedir. Söz konusu gelişmeler ile yurt içi enerji fiyatlarının maliyet kanalı ve iktisadi faaliyet üzerinden enflasyon görünümüne etkileri yakından takip edilmektedir. Göstergeler iktisadi faaliyette yavaşlamaya işaret ederken, yakın dönemdeki gelişmelerin enflasyon görünümü üzerindeki olası ikincil etkileri önem taşıyacaktır.

Fiyat istikrarı sağlanana kadar sürdürülecek sıkı para politikası duruşu talep, kur ve beklenti kanalları üzerinden dezenflasyon sürecini güçlendirecektir. Kurul politika faizine ilişkin atılacak adımları; enflasyon gerçekleşmelerini, ana eğilimini ve beklentilerini göz önünde bulundurarak ara hedeflerle uyumlu biçimde dezenflasyonun gerektirdiği sıkılığı sağlayacak şekilde belirleyecektir. Para politikası kararları enflasyon görünümü odaklı, toplantı bazlı ve ihtiyatlı bir yaklaşımla alınmaktadır. Son dönem gelişmelerin de etkisiyle, enflasyon görünümünde belirgin ve kalıcı bir bozulma olması durumunda para politikası duruşu sıkılaştırılacaktır. Kurul enflasyon üzerindeki yukarı yönlü risklere karşı ihtiyatlı duruşunu vurgulamıştır.

Kredi ve mevduat piyasalarında öngörülenin dışında gelişmeler olması halinde parasal aktarım mekanizması ilave makroihtiyati adımlarla desteklenecektir. Likidite koşulları yakından izlenmeye ve likidite yönetimi araçları etkili şekilde kullanılmaya devam edilecektir.

Kurul, politika kararlarını enflasyonu orta vadede yüzde 5 hedefine ulaştıracak parasal ve finansal koşulları sağlayacak şekilde belirleyecektir. Kurul, kararlarını öngörülebilir, veri odaklı ve şeffaf bir çerçevede alacaktır.

Para Politikası Kurulu Toplantı Özeti beş iş günü içinde yayımlanacaktır.</p>
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