import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme",
  description:
    "ASELSAN ile Savunma Sanayii Başkanlığı arasında toplam 845 milyon dolar tutarında yeni sözleşmeler imzalandı.",
};

const haberDetaylari = [
  {
    baslik: "845 Milyon Dolarlık Sözleşme İmzalandı",
    metin:
      "ASELSAN, Cumhurbaşkanlığı Savunma Sanayii Başkanlığı ile toplam 845 milyon ABD doları tutarında yeni sözleşmeler imzaladığını açıkladı. Söz konusu anlaşmalar, şirketin savunma sanayii alanındaki güçlü sipariş portföyünü destekleyen önemli gelişmeler arasında yer aldı.",
  },
  {
    baslik: "Haberleşme, Uydu ve Uzay Sistemleri Öne Çıktı",
    metin:
      "Şirket tarafından yapılan açıklamaya göre sözleşmeler, kamu güvenliği haberleşme sistemleri ile uydu ve uzay sistemlerinin tedarikine yönelik projeleri kapsıyor. Bu alanlar, ASELSAN’ın yüksek teknoloji odaklı faaliyetleri içerisinde stratejik öneme sahip başlıklar arasında bulunuyor.",
  },
  {
    baslik: "Teslimatlar 2026 Yılından İtibaren Başlayacak",
    metin:
      "Açıklamada, imzalanan sözleşmeler kapsamında teslimatların 2026 yılından itibaren gerçekleştirileceği belirtildi. Bu durum, sözleşmelerin şirketin ilerleyen dönem gelirlerine ve iş hacmine katkı sağlayabilecek nitelikte olduğunu gösteriyor.",
  },
  {
    baslik: "Savunma Sanayii Tarafında Güçlü İş Akışı",
    metin:
      "ASELSAN’ın Savunma Sanayii Başkanlığı ile imzaladığı yeni sözleşmeler, savunma elektroniği, haberleşme teknolojileri, uydu sistemleri ve uzay alanındaki faaliyetlerinin desteklenmesi açısından dikkat çekti.",
  },
  {
    baslik: "Yatırımcıların Takip Ettiği Önemli Başlık",
    metin:
      "845 milyon dolarlık sözleşme büyüklüğü, Borsa İstanbul’da işlem gören ASELSAN payları açısından yatırımcıların yakından takip ettiği önemli şirket haberlerinden biri oldu. Bu tür büyük ölçekli sözleşmeler, şirketin uzun vadeli iş görünümü açısından önem taşıyor.",
  },
];

export default function Haber977Page() {
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
              src="/haber977.webp"
              alt="ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                ASELSAN, Cumhurbaşkanlığı Savunma Sanayii Başkanlığı ile toplam
                845 milyon ABD doları tutarında yeni sözleşmeler imzaladığını
                duyurdu.
              </p>

              <p>
                Kamuyu Aydınlatma Platformu’nda yer alan açıklamaya göre,
                sözleşmeler kamu güvenliği haberleşme sistemleri ile uydu ve
                uzay sistemlerinin tedarikine yönelik projeleri kapsıyor.
                Teslimatların ise 2026 yılından itibaren gerçekleştirilmesi
                planlanıyor.
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
                ASELSAN’ın 845 milyon dolarlık yeni sözleşme açıklaması,
                şirketin savunma, haberleşme, uydu ve uzay teknolojileri
                tarafındaki iş hacmini destekleyen önemli gelişmelerden biri
                olarak öne çıktı.
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