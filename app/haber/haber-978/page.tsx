import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "04 Haziran 2026 Perşembe KAP Bildirimleri Özeti",
  description: "04 Haziran 2026 Perşembe KAP Bildirimleri Özeti",
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
    baslik: "ASELSAN (ASELS)",
    metin:
      "ASELSAN, Savunma Sanayii Başkanlığı ile Radar ve Kamu Güvenliği Haberleşme Sistemleri tedarikine yönelik toplam 271,45 milyon dolar tutarında sözleşme imzaladı. Bu haber, şirketin savunma sanayii tarafındaki güçlü sipariş akışının devam ettiğini gösteriyor. Yüksek tutarlı sözleşme olması nedeniyle günün en önemli pozitif başlıklarından biri olarak öne çıktı.",
  },
  {
    baslik: "ARD Grup Bilişim (ARDYZ)",
    metin:
      "ARD Grup Bilişim’in 3,5 milyon dolarlık yeni iş aldığı açıklandı. Şirket ölçeği açısından dikkate değer bir iş ilişkisi haberi olarak değerlendirilebilir. Yeni iş alımları, özellikle teknoloji ve yazılım şirketlerinde gelir görünürlüğü açısından yatırımcıların takip ettiği başlıklar arasında yer alıyor.",
  },
  {
    baslik: "Koleksiyon Mobilya (KLPVY)",
    metin:
      "Koleksiyon Mobilya tarafında 812,5 milyon TL tutarında iş alındığı açıklandı. Tutarın yüksek olması nedeniyle şirketin ciro beklentileri açısından önemli bir gelişme olarak öne çıkıyor. Bu haber, günün dikkat çeken büyük iş ilişkisi başlıklarından biri oldu.",
  },
  {
    baslik: "Aksa Enerji (AKSEN)",
    metin:
      "Aksa Enerji’nin Gaziantep’te yer alan 40,5 MWe / 58 MWp kurulu güce ve 48.169 MWh depolama kapasitesine sahip Pamuk Depolamalı GES yatırımının işletmeye alındığı açıklandı. Yenilenebilir enerji ve depolamalı GES tarafında gelen bu haber, şirketin enerji üretim portföyünü çeşitlendirmesi açısından pozitif değerlendirilebilir.",
  },
  {
    baslik: "Otokar (OTKAR)",
    metin:
      "Otokar, Automecanica S.A. sermayesinin yüzde 96,77’sini temsil eden payları devraldı. Pay alım bedeli olarak ödenen 10 milyon euroya ek olarak 46,74 milyon euro ödeme yapıldığı açıklandı. Bu gelişme, şirketin yurt dışı büyüme ve satın alma stratejisi açısından önemli bir adım olarak izlenebilir.",
  },
  {
    baslik: "Ebebek (EBEBK)",
    metin:
      "Ebebek, mayıs ayında mağaza ziyaretçi sayısının 5,21 milyon olduğunu açıkladı. Geçen yılın aynı ayında bu sayı 4,29 milyon seviyesindeydi. Perakende tarafında müşteri trafiğindeki artış, satış potansiyeli açısından pozitif sinyal olarak görülebilir.",
  },
  {
    baslik: "Global Yatırım Holding (GLYHO)",
    metin:
      "Global Yatırım Holding’in dolaylı bağlı ortaklığı Global Ports Holding’in, Ferrol Kruvaziyer Limanı’nın 30 yıl süreyle işletilmesine yönelik imtiyaz hakkını resmi olarak kazandığı açıklandı. Kruvaziyer limanı işletmeciliği tarafında uzun vadeli gelir potansiyeli taşıyan bu gelişme, şirketin uluslararası liman portföyünü güçlendirmesi açısından önemli.",
  },
  {
    baslik: "Margün Enerji (MAGEN)",
    metin:
      "Margün Enerji’nin yüzde 100 bağlı ortaklığı Bosphorus Yenilenebilir Enerji ile yurt içindeki bir şirket arasında Denizli ve Manisa’da 9 adet jeotermal kaynak ruhsatının devralınması sürecinin tamamlandığı açıklandı. Bu haber, yenilenebilir enerji portföyünü genişletme ve jeotermal kaynak tarafında büyüme açısından dikkat çekiyor.",
  },
  {
    baslik: "Türk İlaç ve Serum Sanayi (TRILC)",
    metin:
      "Türk İlaç ve Serum Sanayi paylarının Yakın İzleme Pazarı’nda işlem görmeye başlayacağı açıklandı. Ayrıca JCR Eurasia tarafından şirketin uzun vadeli ulusal kurum kredi rating notunun BB(tr)’den CC(tr)’ye düşürüldüğü bildirildi. Bu gelişme, günün en dikkat çeken olumsuz haberlerinden biri oldu ve şirket tarafında finansal risk algısının arttığını gösterdi.",
  },
  {
    baslik: "Mega Metal (MEGMT)",
    metin:
      "Mega Metal, sermayesini 265 milyon TL’den 2,5 milyar TL’ye çıkarmak amacıyla yüzde 860 oranında bedelsiz sermaye artırımı için SPK’ya başvurdu. Bedelsiz sermaye artırımı haberleri yatırımcı ilgisini artırabilen başlıklar arasında yer alır. Ancak şirketin piyasa değeri doğrudan değişmediği için fiyat hareketleri ayrıca dikkatle izlenmelidir.",
  },
  {
    baslik: "Şekerbank (SKBNK)",
    metin:
      "Şekerbank, sermayesini 2,5 milyar TL’den 3,5 milyar TL’ye çıkarmak amacıyla yüzde 40 oranında bedelli sermaye artırımı için SPK’ya başvurdu. Bedelli sermaye artırımı banka için kaynak girişi yaratabilir. Ancak mevcut ortaklar açısından nakit katılım ihtiyacı ve sulandırma etkisi nedeniyle dikkatle takip edilmesi gereken bir süreçtir.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında AHGAZ, ENERY, GOKNR, GLYHO ve NTHOL öne çıktı. AHGAZ 240.000 adet, ENERY 200.000 adet, GOKNR 349.336 adet, GLYHO 500.000 adet ve NTHOL 200.000 adet pay geri alımı gerçekleştirdi. Geri alımlar, şirket yönetimlerinin mevcut fiyat seviyelerini destekleme eğilimi olarak algılanabilir ancak tek başına operasyonel büyüme haberi değildir.",
  },
  {
    baslik: "Temettü Tarafı",
    metin:
      "04 Haziran 2026 tarihinde temettü tarafında ATAKP ve TABGD öne çıktı. ATAKP pay başına 0,70 TL brüt, TABGD ise pay başına 5,00 TL brüt temettü ödemesi yaptı. Temettü ödemeleri, düzenli nakit akışı takip eden yatırımcılar açısından günün önemli başlıkları arasında yer aldı.",
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
              alt="04 Haziran 2026 Perşembe KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              04 Haziran 2026 Perşembe KAP Bildirimleri Özeti
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da 04 Haziran 2026 Perşembe günü KAP’a düşen öne
                çıkan bildirimlerde yüksek tutarlı sözleşmeler, yeni iş
                ilişkileri, enerji yatırımları, yurt dışı satın alma adımları,
                sermaye artırımı başvuruları, pay geri alımları ve temettü
                ödemeleri dikkat çekti.
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
                Günün en önemli başlıkları arasında ASELS’in 271,45 milyon
                dolarlık sözleşmesi, KLPVY’nin 812,5 milyon TL’lik iş alımı,
                AKSEN’in Pamuk Depolamalı GES yatırımının işletmeye alınması,
                OTKAR’ın Automecanica pay devrini tamamlaması, GLYHO’nun Ferrol
                Limanı imtiyazı, TRILC’nin Yakın İzleme Pazarı süreci ve kredi
                notu indirimi, MEGMT’nin yüzde 860 bedelsiz ve SKBNK’nin yüzde
                40 bedelli sermaye artırımı başvurusu öne çıktı.
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
}