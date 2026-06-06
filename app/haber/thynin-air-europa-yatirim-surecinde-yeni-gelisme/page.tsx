import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme",
  description:
    "Türk Hava Yolları’nın Air Europa yatırım sürecinde İspanya tarafından doğrudan yabancı yatırım onayı verildi.",
};

const haberDetaylari = [
  {
    baslik: "İspanya’dan Yatırım Onayı Geldi",
    metin:
      "Türk Hava Yolları, Air Europa’nın azınlık payının alınmasına yönelik süreçte İspanya tarafından doğrudan yabancı yatırım onayının verildiğini açıkladı. Bu gelişme, yatırım sürecinde önemli aşamalardan birinin geride bırakıldığını gösterdi.",
  },
  {
    baslik: "Yaklaşık 300 Milyon Euroluk Yatırım",
    metin:
      "Daha önce yapılan açıklamalarda, söz konusu işlemin büyük ölçüde sermaye artışı şeklinde yaklaşık 300 milyon euro tutarında gerçekleşmesinin planlandığı belirtilmişti. Bu yatırımın ardından THY’nin Air Europa’da azınlık pay sahibi olması bekleniyor.",
  },
  {
    baslik: "Pay Oranı Yüzde 25-27 Aralığında Bekleniyor",
    metin:
      "Kapanış aşamasındaki teknik ve finansal düzeltmelere bağlı olarak Türk Hava Yolları’nın Air Europa’daki payının yüzde 25 ila yüzde 27 aralığında gerçekleşmesi öngörülüyor.",
  },
  {
    baslik: "Süreç 2026 İçinde Tamamlanabilir",
    metin:
      "THY tarafından yapılan açıklamada, ortaklık sürecine ilişkin diğer başvuru ve onay süreçlerinin devam ettiği belirtildi. İlgili işlemin 2026 yılı içinde tamamlanmasının öngörüldüğü ifade edildi.",
  },
  {
    baslik: "Avrupa Pazarında Stratejik Hamle",
    metin:
      "Air Europa yatırımı, Türk Hava Yolları’nın Avrupa pazarındaki büyüme stratejisi açısından dikkat çeken adımlardan biri olarak öne çıkıyor. Sürecin tamamlanması halinde THY’nin uluslararası ortaklık ağı ve bölgesel konumu açısından önemli bir gelişme yaşanmış olacak.",
  },
];

export default function Haber976Page() {
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
              src="/haber976.webp"
              alt="THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Türk Hava Yolları’nın İspanyol hava yolu şirketi Air Europa’ya
                yönelik yatırım sürecinde önemli bir gelişme yaşandı. Şirket,
                Air Europa’nın azınlık payının alınmasına ilişkin işlem için
                İspanya tarafından doğrudan yabancı yatırım onayının verildiğini
                duyurdu.
              </p>

              <p>
                Açıklamaya göre, ortaklık sürecine ilişkin diğer başvuru
                süreçleri devam ederken, işlemin 2026 yılı içinde tamamlanması
                öngörülüyor. Yatırımın, THY’nin Avrupa pazarındaki büyüme
                stratejisi açısından önemli bir adım olması bekleniyor.
              </p>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <h2 className="text-lg font-bold text-zinc-900">
                      {haber.baslik}
                    </h2>
                    <p className="mt-2 text-zinc-700">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                THY’nin Air Europa yatırım sürecinde İspanya’dan doğrudan
                yabancı yatırım onayı alması, işlemin tamamlanmasına yönelik
                önemli aşamalardan biri olarak öne çıktı. Sürecin 2026 yılı
                içinde sonuçlanması bekleniyor.
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}