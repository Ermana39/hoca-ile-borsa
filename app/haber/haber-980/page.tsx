import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "01 Haziran 2026 Pazartesi KAP Bildirimleri Özeti",
  description: "01 Haziran 2026 Pazartesi KAP Bildirimleri Özeti",
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
      "ASELSAN ile Savunma Sanayii Başkanlığı arasında Kamu Güvenliği Haberleşme ile Uydu ve Uzay Sistemleri tedarikine yönelik toplam 845 milyon dolar tutarında sözleşme imzalandı. Teslimatların 2026 yılından itibaren başlaması bekleniyor. Günün en güçlü pozitif haberlerinden biri olarak öne çıktı. Tutarın yüksek olması, savunma sanayii tarafında sipariş görünürlüğünü destekliyor.",
  },
  {
    baslik: "Borusan Birleşik Boru (BRSAN)",
    metin:
      "Borusan Birleşik Boru’nun ABD’deki bağlı ortaklığı Borusan Berg Pipe, yaklaşık 742 milyon dolar tutarında yeni satış siparişi aldı. Teslimatların büyük kısmının 2027 yılında, kalan kısmının ise 2028 yılının ilk çeyreğinde yapılması bekleniyor. Çok büyük ölçekli ve orta vadeli gelir katkısı yaratabilecek pozitif bir haber olarak değerlendirilebilir.",
  },
  {
    baslik: "Sabancı Holding (SAHOL)",
    metin:
      "Sabancı Holding’in ABD’deki Lucky 7 ve Pepper Güneş Enerjisi Projeleri için 382 milyon dolar proje finansmanı ve 151 milyon dolar özsermaye yatırımı sözleşmeleri imzalandı. Projelerin toplam kurulu gücü 286 MW olarak açıklandı. Devreye alma hedefi 2027 yılının üçüncü çeyreği. Haber, enerji yatırımları tarafında orta ve uzun vadeli büyüme hikayesini destekliyor.",
  },
  {
    baslik: "YEO Teknoloji (YEOTK)",
    metin:
      "YEO Teknoloji’nin yüzde 51 oranında sahip olduğu DEFIC Globe Enerji, Romanya’da güneş enerjisi santrali ve enerji depolama sistemi içeren şirketlerin satışı için 20,52 milyon euro tutarında bağlayıcı niyet mektubu imzaladı. Haber, YEOTK için yurt dışı enerji ve depolama iş kolunu destekleyen pozitif bir gelişme olarak öne çıkıyor.",
  },
  {
    baslik: "Doğan Holding / Karel Elektronik (DOHOL / KAREL)",
    metin:
      "Doğan Holding’in bağlı ortaklığı Öncü GSYO, Karel Elektronik’in toplam 2,25 milyar TL satış tutarlı tahsisli sermaye artırımına 1,438 milyar TL katılım kararı aldı. Satış tutarına ulaşılamazsa kalan kısmı alma yönünde ilave taahhüt verilmeyeceği açıklandı. DOHOL açısından Karel yatırımına ciddi kaynak aktarımı anlamına gelirken, KAREL tarafında sermaye yapısını güçlendirme etkisi bulunuyor. Mevcut ortaklar açısından tahsisli sermaye artırımı sulandırma etkisi nedeniyle dikkatle izlenmeli.",
  },
  {
    baslik: "İmaş Makina (IMASM)",
    metin:
      "İmaş Makina, sermayesini 925 milyon TL’den 1,988 milyar TL’ye çıkarmaya yönelik yüzde 115 bedelli sermaye artırımı için SPK’ya başvurdu. Bedelli sermaye artırımı şirket için fon girişi yaratabilir. Ancak mevcut ortaklar açısından nakit katılım ihtiyacı ve sulandırma etkisi doğurabileceği için piyasada ilk tepki her zaman pozitif olmayabilir.",
  },
  {
    baslik: "Boğaziçi Beton (BOBET)",
    metin:
      "Boğaziçi Beton, 01.06.2026 tarihinde 18,80 TL fiyattan 163.720 adet pay geri aldı. Şirketin sahip olduğu BOBET payları 9.195.701 adede, geri alınan payların sermayeye oranı ise yaklaşık yüzde 2,42’ye ulaştı. Geri alım programının devam etmesi, hisse fiyatı üzerinde destekleyici algılanabilir.",
  },
  {
    baslik: "Ahlatcı Doğal Gaz (AHGAZ)",
    metin:
      "Ahlatcı Doğal Gaz, 1 Haziran’da ortalama 32,78 TL fiyattan 320.000 adet pay geri aldı. Toplam sahip olunan pay sayısı 69,76 milyon adede ulaştı. Düzenli geri alım devam ediyor. Bu durum fiyatı destekleyici algı yaratabilir ancak tek başına operasyonel büyüme haberi değildir.",
  },
  {
    baslik: "Tera Yatırım Teknoloji Holding (TEHOL)",
    metin:
      "Tera Portföy Yönetimi’nin yönettiği beş fon, Tera Yatırım Teknoloji Holding’de 70,81 milyon TL nominal pay alımı yaptı. Fonların şirketteki toplam payı yüzde 13,50’den yüzde 17,05’e yükseldi. Kurumsal fon ilgisinin artması nedeniyle pozitif algılanabilecek bir gelişme olarak izlenebilir.",
  },
  {
    baslik: "CVK Maden (CVKMD)",
    metin:
      "CVK Maden’in bağlı ortaklığı Aldridge Mineral Madencilik, Yenipazar Polimetalik Maden İşletmesi Projesi kapsamında 1,2 milyon dolar + KDV tutarında detay mühendislik ve tasarım hizmet sözleşmesi imzaladı. Haber doğrudan büyük ciro etkisinden çok, projenin yatırım aşamalarında ilerlediğini göstermesi açısından önemli.",
  },
  {
    baslik: "Pasifik Eurasia Lojistik (PASEU)",
    metin:
      "Pasifik Eurasia Lojistik’te Genel Müdürlük görevinden ayrılan Ayhan Akay’ın yerine Emre Sarıcan atandı. Bildirim operasyonel veya finansal rakam içermiyor. Yönetim değişikliği olduğu için izlenmeli ancak tek başına güçlü fiyatlayıcı haber niteliği taşımıyor.",
  },
  {
    baslik: "Türk İlaç ve Serum Sanayi (TRILC)",
    metin:
      "Türk İlaç ve Serum Sanayi’nde Yönetim Kurulu üyesi İsmet Gergerli’nin istifası kabul edildi, yerine Nehir Alıcı atandı. Bildirim daha çok rutin kurumsal yönetim niteliğinde. Operasyonel büyüklük veya finansal etki içermediği için sınırlı önem taşıyor.",
  },
];

export default function Haber980Page() {
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
              src="/haber980.png"
              alt="01 Haziran 2026 Pazartesi KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              01 Haziran 2026 Pazartesi KAP Bildirimleri Özeti
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da 01 Haziran 2026 Pazartesi günü KAP’a düşen
                öne çıkan bildirimlerde büyük ölçekli sözleşmeler, yurt dışı
                siparişler, enerji yatırımları, sermaye artırımı kararları ve
                pay geri alım işlemleri dikkat çekti.
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
                Günün en güçlü haberleri arasında ASELSAN’ın 845 milyon
                dolarlık sözleşmesi, BRSAN’ın 742 milyon dolarlık ABD siparişi,
                SAHOL’ün ABD enerji projeleri için sağladığı finansman ve
                YEOTK’nın Romanya enerji/depolama anlaşması öne çıktı.
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