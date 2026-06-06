import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi",
  description:
    "Türkiye Sigorta’nın yılın ilk beş ayına ilişkin prim üretimi 79,2 milyar TL seviyesine yükseldi.",
};

const haberDetaylari = [
  {
    baslik: "Prim Üretimi 79,2 Milyar TL Seviyesine Çıktı",
    metin:
      "Türkiye Sigorta’nın yılın ilk beş aylık dönemine ilişkin prim üretimi 79,2 milyar TL seviyesine yükseldi. Açıklanan veri, şirketin sigortacılık faaliyetlerinde güçlü üretim temposunu sürdürdüğünü gösterdi.",
  },
  {
    baslik: "Yıllık Bazda Büyüme Devam Etti",
    metin:
      "Şirketin prim üretimindeki artış, geçen yılın aynı dönemine kıyasla büyüme eğiliminin devam ettiğine işaret etti. Sigorta sektöründe üretim hacmi, şirketlerin operasyonel performansını takip etmek açısından önemli göstergeler arasında yer alıyor.",
  },
  {
    baslik: "Sigorta Sektöründe Güçlü Görünüm",
    metin:
      "Türkiye Sigorta’nın açıkladığı prim üretimi, sektör genelinde sigorta talebinin ve poliçe üretim hacminin güçlü seyrini koruduğunu gösteren başlıklardan biri oldu. Özellikle büyük ölçekli sigorta şirketlerinde prim üretimi verileri yatırımcılar tarafından yakından izleniyor.",
  },
  {
    baslik: "Operasyonel Performans Açısından Öne Çıktı",
    metin:
      "Prim üretimindeki artış, şirketin operasyonel büyüklüğünü ve faaliyet hacmini destekleyen önemli bir veri olarak değerlendirilebilir. Bu tür dönemsel veriler, şirketin yıl içindeki performans trendini görmek açısından önem taşıyor.",
  },
  {
    baslik: "Yatırımcıların Takip Ettiği Veri",
    metin:
      "Türkiye Sigorta paylarını takip eden yatırımcılar açısından prim üretimi rakamları, şirketin büyüme temposu ve sektör içindeki konumu hakkında fikir veren önemli göstergelerden biri olarak öne çıkıyor.",
  },
];

export default function Haber975Page() {
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
              src="/haber975.webp"
              alt="Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Türkiye Sigorta’nın Prim Üretimi 79,2 Milyar TL’ye Yükseldi
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Türkiye Sigorta’nın yılın ilk beş aylık dönemine ilişkin prim
                üretimi 79,2 milyar TL seviyesine ulaştı. Açıklanan veri,
                şirketin sigortacılık faaliyetlerinde güçlü üretim temposunu
                sürdürdüğünü gösterdi.
              </p>

              <p>
                Prim üretimi verileri, sigorta şirketlerinin operasyonel
                büyüklüğünü ve faaliyet hacmini takip etmek açısından önemli
                göstergeler arasında yer alıyor. Türkiye Sigorta’nın açıkladığı
                rakam, sektör genelindeki büyüme görünümü açısından da dikkat
                çekti.
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
                Türkiye Sigorta’nın prim üretiminin 79,2 milyar TL seviyesine
                yükselmesi, şirketin faaliyet hacmi ve operasyonel büyüme
                görünümü açısından öne çıkan önemli gelişmelerden biri oldu.
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