import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "03 Haziran 2026 Çarşamba KAP Bildirimleri Özeti",
  description: "03 Haziran 2026 Çarşamba KAP Bildirimleri Özeti",
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

const kapHaberleri = [
  {
    baslik: "SASA Polyester (SASA)",
    metin:
      "SASA, mayıs ayında 136,7 milyon dolar gelir elde ettiğini açıkladı. Şirketin satış hacmi ve gelir tarafındaki büyüme verisi, operasyonel performans açısından dikkat çekti. Özellikle aylık bazda açıklanan yüksek gelir, şirketin üretim ve satış temposunun güçlü seyrettiğini göstermesi bakımından pozitif değerlendirilebilir.",
  },
  {
    baslik: "Smart Güneş Teknolojileri (SMRTG)",
    metin:
      "Smart Güneş Teknolojileri, 2026 yılı güneş paneli satışlarına ilişkin 10 milyon dolar tutarında sözleşme imzaladığını duyurdu. Yenilenebilir enerji tarafında gelen bu sözleşme, şirketin sipariş görünürlüğünü destekleyen pozitif bir iş ilişkisi haberi olarak öne çıkıyor.",
  },
  {
    baslik: "Türk İlaç ve Serum Sanayi (TRILC)",
    metin:
      "Türk İlaç ve Serum Sanayi, finansal sıkışıklık, kredi ve çek ödemelerindeki gecikmeler ile bozulan nakit akışı nedeniyle konkordato başvurusunda bulundu. Mahkeme tarafından şirket için 3 aylık geçici mühlet kararı verildi. Ayrıca şirket paylarının Yakın İzleme Pazarı’nda işlem görmeye başlayacağı duyuruldu. Bu gelişme, günün en dikkat çeken olumsuz haberlerinden biri olarak öne çıktı.",
  },
  {
    baslik: "Otokar (OTKAR)",
    metin:
      "Otokar, 369 gün vadeli 1 milyar TL tutarında tahvil ihracı gerçekleştirdiğini açıkladı. Bu haber, şirketin finansman ihtiyacını sermaye piyasaları üzerinden karşılama adımı olarak değerlendirilebilir. Borçlanma aracı ihracı şirketin nakit yönetimi ve finansman yapısı açısından izlenmeli.",
  },
  {
    baslik: "Alves Kablo (ALVES)",
    metin:
      "Alves Kablo, sermayesini 1,6 milyar TL’den 4,8 milyar TL’ye çıkarmak amacıyla yüzde 200 oranında bedelli sermaye artırımı için SPK’ya başvurdu. Bedelli sermaye artırımı şirket için fon girişi yaratabilir. Ancak mevcut ortaklar açısından nakit katılım ihtiyacı ve sulandırma etkisi doğurabileceği için dikkatle takip edilmesi gereken bir süreçtir.",
  },
  {
    baslik: "Bilici Yatırım (BLCYT)",
    metin:
      "Bilici Yatırım, sermayesini 100 milyon TL’den 1 milyar TL’ye çıkarmak üzere yüzde 900 oranında bedelsiz sermaye artırımı kararı aldı. Bedelsiz sermaye artırımı haberleri yatırımcı ilgisini artırabilen başlıklar arasında yer alır. Ancak şirketin piyasa değeri değişmediği için bu tür haberlerde fiyat hareketleri ayrıca dikkatle izlenmelidir.",
  },
  {
    baslik: "Hedef Holding (HEDEF)",
    metin:
      "Hedef Holding’in yüzde 53,88 oranında bedelsiz sermaye artırımı süreci de günün sermaye işlemleri arasında öne çıktı. Sermaye artırımı sonrası şirket sermayesinin 3 milyar TL seviyesine yükselmesi bekleniyor. Hak kullanımı ve sermaye işlemleri açısından yatırımcıların takip ettiği haberlerden biri oldu.",
  },
  {
    baslik: "Enpara Bank (ENPRA)",
    metin:
      "ENPRA, toplam 2,8 milyar TL anapara büyüklüğündeki tahsili gecikmiş alacak portföyünü devretti. Bu tür işlemler finansal kurumlarda bilanço temizliği ve aktif kalitesi açısından önemli görülür. Sorunlu alacakların devri, takipteki alacak yükünü azaltma amacı taşıdığı için izlenmesi gereken bir gelişmedir.",
  },
  {
    baslik: "Kızılbük GYO (KZBGY)",
    metin:
      "Kızılbük GYO, mayıs ayında Marmaris Sinpaş projesinde 169 milyon TL tutarında 170 adet devre mülk satışı gerçekleştirdiğini açıkladı. Gayrimenkul satış performansı açısından olumlu değerlendirilebilecek bir veri olarak öne çıktı.",
  },
  {
    baslik: "İskenderun Demir Çelik / Ereğli Demir Çelik (ISDMR / EREGL)",
    metin:
      "03 Haziran 2026 tarihinde temettü tarafında ISDMR ve EREGL öne çıktı. ISDMR’nin pay başına 4,5 TL brüt temettü ödemesi dikkat çekerken, EREGL tarafındaki nakit kâr payı ödemesi de yatırımcıların takip ettiği önemli başlıklar arasında yer aldı.",
  },
];

export default function Haber978Page() {
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
              src="/haber978.png"
              alt="03 Haziran 2026 Çarşamba KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              03 Haziran 2026 Çarşamba KAP Bildirimleri Özeti
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da 03 Haziran 2026 Çarşamba günü KAP’a düşen öne
                çıkan bildirimlerde aylık gelir açıklamaları, yeni sözleşmeler,
                konkordato süreci, tahvil ihracı, bedelli ve bedelsiz sermaye
                artırımı kararları ile temettü ödemeleri dikkat çekti.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
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
                Günün en önemli başlıkları arasında SASA’nın mayıs ayı gelir
                açıklaması, SMRTG’nin 10 milyon dolarlık sözleşmesi, TRILC’nin
                konkordato başvurusu ve Yakın İzleme Pazarı süreci, OTKAR’ın 1
                milyar TL tahvil ihracı, ALVES’in yüzde 200 bedelli başvurusu ve
                BLCYT’nin yüzde 900 bedelsiz sermaye artırımı kararı öne çıktı.
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}s