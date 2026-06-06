import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "06 Haziran 2026 Cuma KAP Bildirimleri Özeti",
  description: "06 Haziran 2026 Cuma KAP Bildirimleri Özeti",
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
    baslik: "Akhan Un (AKHAN)",
    metin:
      "Akhan Un, Gana’ya makarna ihracatı kapsamında 34,32 milyon dolarlık satış gerçekleştirdiğini açıkladı. Şirket, bu ihracatın ciro, FAVÖK ve kârlılığa olumlu katkı sağlamasını bekliyor. Yurt dışı satış ve ihracat tarafında öne çıkan pozitif haberlerden biri oldu.",
  },
  {
    baslik: "Akiş GYO (AKSGY)",
    metin:
      "Akiş GYO’nun bağlı ortaklığı Akiş Global, Berlin’de yaklaşık 155 konutluk gayrimenkul projesi geliştirecek Edge T82 B.V.’ye sermaye artırımı yoluyla yüzde 50 ortak oldu. Projenin yaklaşık 14,7 milyon euro sermaye ihtiyacı bulunduğu ve ortakların payları oranında finansman sağlayacağı açıklandı. Bu gelişme, şirketin yurt dışı gayrimenkul yatırımları açısından önemli bir adım olarak öne çıkıyor.",
  },
  {
    baslik: "Gelecek Varlık Yönetimi (GLCVY)",
    metin:
      "Gelecek Varlık, İş Bankası’nın tahsili gecikmiş alacak satışında 827,5 milyon TL anapara büyüklüğündeki iki karma portföyün ihalesini en yüksek teklifi vererek kazandı. Varlık yönetim şirketleri açısından bu tür portföy alımları büyüme ve tahsilat potansiyeli nedeniyle önemli görülüyor.",
  },
  {
    baslik: "Birikim Varlık Yönetimi (BRKVY)",
    metin:
      "Birikim Varlık, İş Bankası’nın gerçekleştirdiği tahsili gecikmiş alacak satışında 380,7 milyon TL anaparaya sahip bireysel nitelikli portföyün ihalesini kazandı. GLCVY ile birlikte varlık yönetim şirketleri günün dikkat çeken başlıkları arasında yer aldı.",
  },
  {
    baslik: "Anadolu Hayat / Anadolu Sigorta / Agesa",
    metin:
      "Sigorta ve emeklilik şirketleri tarafında prim üretim verileri öne çıktı. Anadolu Hayat’ın mayıs ayı brüt prim üretimi 9,63 milyar TL oldu. Anadolu Sigorta’nın ilk beş aylık brüt prim üretimi 45,95 milyar TL’ye ulaşırken geçen yılın aynı dönemine göre yüzde 24,9 artış kaydetti. Agesa’nın ilk beş aylık toplam prim üretimi ise 12,7 milyar TL oldu ve yıllık bazda yüzde 46 arttı.",
  },
  {
    baslik: "Zeray GYO (ZERGY)",
    metin:
      "Zeray GYO, Kocaeli Başiskele’deki parseller üzerinde proje geliştirilmesi amacıyla prensip anlaşmasına vardığını açıkladı. Şirket, rezidans, ticari alan ve karma kullanımlı projelerin değerlendirildiği yatırımda kendi payına düşen büyüklüğün yaklaşık 2,5 milyar TL seviyesinde olmasını hedefliyor. Nihai sözleşme sonrası detayların paylaşılacağı belirtildi.",
  },
  {
    baslik: "CW Enerji (CWENE)",
    metin:
      "CW Enerji, ABD’de faaliyet gösteren bir firma ile iki yıllık lisans anlaşması imzaladı. Anlaşma kapsamında CW Enerji markası altında yıllık yaklaşık 100 MW güneş paneli üretimi yapılması ve ürünlerin ABD ile Kanada pazarlarında kullanılması planlanıyor. Bu haber, şirketin Kuzey Amerika pazarına açılımı açısından önemli bir gelişme olarak öne çıktı.",
  },
  {
    baslik: "Ebebek (EBEBK)",
    metin:
      "Ebebek, Mayıs 2026’da mağaza ve e-ticaret kanallarında toplam 11,28 milyon adet ürün satışı gerçekleştirdi. Geçen yılın aynı ayında bu rakam 8,89 milyon adet seviyesindeydi. Yılın ilk beş ayında toplam satış adedi 50 milyon seviyesini aşarken, yıllık bazda yaklaşık yüzde 22 artış kaydedildi. Perakende tarafında olumlu operasyonel veri olarak değerlendirilebilir.",
  },
  {
    baslik: "Türk Hava Yolları (THYAO)",
    metin:
      "Türk Hava Yolları, Air Europa yatırım sürecinin 2026 yılında tamamlanmasının beklendiğini açıkladı. Bu gelişme, THYAO’nun uluslararası büyüme ve stratejik yatırım planları açısından takip edilmesi gereken başlıklardan biri oldu.",
  },
  {
    baslik: "Yapı Kredi / QNB Finansbank",
    metin:
      "Bankacılık tarafında fonlama ve borçlanma haberleri öne çıktı. Yapı Kredi farklı vadelerde dolar ve euro cinsi sendikasyon kredileri sağladı. QNBTR tarafında ise yurt dışında 371 gün vadeli 25,6 milyon euro tutarında borçlanma aracı ihracı ve 4 milyar dolara kadar borçlanma aracı ihracı başvurusunun SPK tarafından onaylanması dikkat çekti.",
  },
  {
    baslik: "Sermaye Artırımı Haberleri",
    metin:
      "Sermaye işlemleri tarafında BLCYT’nin yüzde 900 bedelsiz sermaye artırımı başvurusu yapıldı. IHLAS’ın yüzde 100 bedelli sermaye artırımı başvurusu SPK tarafından onaylandı. SASA’nın tahsisli sermaye artırımı başvurusu onaylanırken, ULUFA’nın yüzde 100 bedelsiz sermaye artırımı başvurusu da SPK tarafından onaylandı.",
  },
  {
    baslik: "Kontrolmatik (KONTR)",
    metin:
      "Kontrolmatik’in nitelikli yatırımcılara ihraç ettiği iki borçlanma aracına ilişkin 05 Haziran 2026 tarihli kupon ödemeleri gerçekleştirilemedi. Bu nedenle ilgili borçlanma araçlarının Borçlanma Araçları Piyasası Gözaltı Pazarı’na alınmasına karar verildi. Günün en dikkat çeken olumsuz haberlerinden biri olarak öne çıktı.",
  },
  {
    baslik: "Temettü Kararları",
    metin:
      "Temettü kararlarında OZSUB, BASGZ ve FORTE öne çıktı. OZSUB pay başına brüt 0,6167 TL, BASGZ pay başına brüt 2,00 TL, FORTE ise pay başına brüt 0,52 TL temettü dağıtımı yönünde karar aldı. Ayrıca bazı şirketler kâr payı dağıtmama kararı açıkladı.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında NTHOL, ENERY, AHGAZ ve GLYHO öne çıktı. NTHOL 200.000 adet, ENERY 200.000 adet, AHGAZ 200.000 adet ve GLYHO 500.000 adet pay geri alımı gerçekleştirdi. Geri alımlar fiyatı destekleyici algılanabilir ancak tek başına operasyonel büyüme haberi değildir.",
  },
];

export default function Haber950Page() {
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
              src="/haber950.png"
              alt="05 Haziran 2026 Cuma KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              05 Haziran 2026 Cuma KAP Bildirimleri Özeti
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da 05 Haziran 2026 Cuma günü KAP’a düşen öne
                çıkan bildirimlerde ihracat haberleri, yurt dışı gayrimenkul
                yatırımı, tahsili gecikmiş alacak portföy ihaleleri, sigorta
                prim üretimleri, lisans anlaşmaları, sermaye artırımı
                başvuruları, borçlanma aracı gelişmeleri, temettü kararları ve
                pay geri alımları dikkat çekti.
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
                Günün en önemli başlıkları arasında AKHAN’ın 34,32 milyon
                dolarlık ihracatı, AKSGY’nin Berlin projesi ortaklığı, GLCVY ve
                BRKVY’nin tahsili gecikmiş alacak portföy ihaleleri, CWENE’nin
                Kuzey Amerika lisans anlaşması, EBEBK’in satış hacmindeki artış,
                BLCYT, IHLAS, SASA ve ULUFA tarafındaki sermaye artırımı
                haberleri ile KONTR borçlanma araçlarının Gözaltı Pazarı süreci
                öne çıktı.
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