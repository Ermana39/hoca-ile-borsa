import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "02 Haziran 2026 Salı KAP Bildirimleri Özeti",
  description: "02 Haziran 2026 Salı KAP Bildirimleri Özeti",
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
    baslik: "Aksa Enerji (AKSEN)",
    metin:
      "Aksa Enerji’nin Kazakistan Kızılorda’da bulunan 264 MW kurulu güce sahip doğal gaz kombine ısı ve enerji santrali için Bakanlık Kabulü yapıldı. Şirket, 15 yıllık kapasite sözleşmesi kapsamında santralin ticari işletmeye başladığını duyurdu. Bu gelişme, şirketin yurt dışı enerji yatırımları ve operasyonel gelir görünürlüğü açısından pozitif bir haber olarak öne çıkıyor.",
  },
  {
    baslik: "Forte Bilgi İletişim (FORTE)",
    metin:
      "Forte, Milli Eğitim Bakanlığı ile 6,8 milyon euro tutarında sözleşme imzaladığını açıkladı. Sözleşme tutarı şirket ölçeği açısından dikkat çekici seviyede olduğu için günün önemli iş ilişkisi haberleri arasında yer aldı. Kamu tarafı ile yapılan bu anlaşma, şirketin gelirlerine katkı sağlayabilecek pozitif bir gelişme olarak izlenebilir.",
  },
  {
    baslik: "Katılımevim (KTLEV)",
    metin:
      "Katılımevim, mayıs ayında toplam 31,8 milyar TL sözleşme büyüklüğüne ulaştığını açıkladı. Ayrıca şirketin Karaman şubesinin faaliyete başlayacağı bildirildi. Açıklanan sözleşme büyüklüğü, şirketin büyüme ve satış ivmesi açısından dikkat çekici bir veri olarak öne çıkıyor.",
  },
  {
    baslik: "QNB Finansbank (QNBTR)",
    metin:
      "QNB Finansbank, 5 milyar TL tutarındaki tahsili gecikmiş alacağını varlık yönetim şirketlerine sattığını duyurdu. Ayrıca yurt dışında 40 milyon dolar tutarında borçlanma aracı ihracı açıklandı. Haber, bankanın bilanço temizliği ve fonlama tarafındaki adımları açısından önemli görülüyor.",
  },
  {
    baslik: "İmaş Makina (IMASM)",
    metin:
      "İmaş Makina, yüzde 115 bedelli sermaye artırımı kapsamında elde edilmesi beklenen fonun kullanım detaylarını açıkladı. Buna göre fonun 440 milyon TL’sinin bina ve arsa yatırımlarında, 175 milyon TL’sinin makine ve tesis yatırımlarında, 444,7 milyon TL’sinin ise borç azaltımı ve işletme sermayesinde kullanılması planlanıyor. Bedelli sermaye artırımı mevcut ortaklar açısından dikkatle izlenmesi gereken bir süreçtir.",
  },
  {
    baslik: "Hedef Holding (HEDEF)",
    metin:
      "Hedef Holding sermayesinin yüzde 53,88 oranında bedelsiz artırılacağı açıklandı. Bedelsiz sermaye artırımı, hak kullanımı ve sermaye işlemleri açısından yatırımcıların takip ettiği önemli başlıklar arasında yer aldı. Haber, şirket paylarında kısa vadeli ilgi oluşturabilecek nitelikte değerlendirilebilir.",
  },
  {
    baslik: "Karel Elektronik (KAREL)",
    metin:
      "Karel Elektronik, tahsisli sermaye artırımından elde edilmesi beklenen kaynağın büyük bölümünü borç azaltımında kullanmayı planladığını açıkladı. Bu gelişme, şirketin finansal yapısını güçlendirme ve borçluluk baskısını azaltma amacı taşıdığı için önemli görülüyor. Ancak tahsisli sermaye artırımı mevcut ortaklar açısından sulandırma etkisi nedeniyle dikkatle izlenmeli.",
  },
  {
    baslik: "CVK Maden (CVKMD)",
    metin:
      "CVK Maden’in bağlı ortaklığı Aldridge Mineral Madencilik, Yenipazar Polimetalik Maden Projesi kapsamında 1,2 milyon dolar tutarında mühendislik ve tasarım hizmet sözleşmesi imzaladı. Haber, doğrudan büyük ciro etkisinden çok projenin yatırım aşamalarında ilerlediğini göstermesi açısından önemli bir gelişme olarak değerlendirilebilir.",
  },
  {
    baslik: "Limak Doğu Anadolu Çimento (LMKDC)",
    metin:
      "02 Haziran 2026 tarihinde temettü tarafında Limak Doğu Anadolu Çimento’nun nakit kâr payı ödemesi öne çıktı. Temettü ödemeleri, özellikle düzenli gelir ve nakit akışı takip eden yatırımcılar açısından dikkatle izleniyor.",
  },
];

export default function Haber981Page() {
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
              alt="02 Haziran 2026 Salı KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              02 Haziran 2026 Salı KAP Bildirimleri Özeti
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da 02 Haziran 2026 Salı günü KAP’a düşen öne
                çıkan bildirimlerde enerji yatırımları, yeni sözleşmeler,
                yüksek tutarlı sözleşme büyüklükleri, tahsili gecikmiş alacak
                satışı, sermaye artırımı kararları ve temettü ödemeleri dikkat
                çekti.
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
                Günün en dikkat çeken haberleri arasında AKSEN’in Kazakistan
                santralinin ticari işletmeye geçmesi, FORTE’nin 6,8 milyon
                euroluk MEB sözleşmesi, KTLEV’in 31,8 milyar TL sözleşme
                büyüklüğü, QNBTR’nin 5 milyar TL sorunlu alacak satışı ve
                IMASM ile HEDEF tarafındaki sermaye artırımı başlıkları öne
                çıktı.
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