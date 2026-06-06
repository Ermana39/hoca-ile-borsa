import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi",
  description:
    "Kontrolmatik tarafından ihraç edilen iki özel sektör borçlanma aracına ilişkin 5 Haziran 2026 tarihli kupon ödemeleri gerçekleştirilemedi.",
};

const haberDetaylari = [
  {
    baslik: "Kupon Ödemesi Yatırımcılara Ulaştırılamadı",
    metin:
      "Merkezi Kayıt Kuruluşu tarafından Kamuoyu Aydınlatma Platformu’nda yapılan açıklamada, Kontrolmatik Teknoloji Enerji ve Mühendislik A.Ş. tarafından ihraç edilen iki özel sektör borçlanma aracına ilişkin 05 Haziran 2026 tarihli kupon ödemelerinin gerçekleştirilemediği bildirildi.",
  },
  {
    baslik: "İlgili ISIN Kodları Açıklandı",
    metin:
      "Açıklamada, TRFKNTR92611 ve TRSKNTR32719 ISIN kodlu borçlanma araçlarının kupon ödeme işlemlerinin, ihraççı kuruluşun gerekli ödeme tutarını aktarmaması nedeniyle MKK aracılığıyla tamamlanamadığı belirtildi.",
  },
  {
    baslik: "Borsa İstanbul’dan Gözaltı Pazarı Kararı",
    metin:
      "Gelişmenin ardından Borsa İstanbul da ilgili borçlanma araçları hakkında karar aldı. Borsa İstanbul tarafından KAP’a yapılan açıklamada, ödemesi gerçekleştirilemeyen söz konusu borçlanma araçlarının Borçlanma Araçları Piyasası Gözaltı Pazarı’na alınmasına karar verildiği duyuruldu.",
  },
  {
    baslik: "İşlem Sırası 8 Haziran’da Kapatılacak",
    metin:
      "Borsa İstanbul açıklamasına göre, ilgili borçlanma araçlarının işlem sırası 8 Haziran 2026 tarihinde kapatılacak. Söz konusu borçlanma araçlarının 9 Haziran 2026 tarihinde geçerli piyasa kuralları çerçevesinde yeniden işleme açılması planlanıyor.",
  },
  {
    baslik: "Yatırımcılar Açısından Önemli Gelişme",
    metin:
      "Kupon ödemesinin gerçekleştirilememesi, Kontrolmatik’in borçlanma araçlarını elinde bulunduran yatırımcılar açısından yakından takip edilmesi gereken önemli bir ödeme aksaklığı olarak öne çıktı.",
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
              src="/haber978.webp"
              alt="Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Merkezi Kayıt Kuruluşu, Kontrolmatik Teknoloji Enerji ve
                Mühendislik A.Ş. tarafından ihraç edilen iki özel sektör
                borçlanma aracına ilişkin 5 Haziran 2026 tarihli kupon
                ödemelerinin gerçekleştirilemediğini açıkladı.
              </p>

              <p>
                KAP’ta yer alan açıklamaya göre, söz konusu ödeme işlemleri
                ihraççı şirket tarafından gerekli tutarın aktarılmaması
                nedeniyle yatırımcılara ulaştırılamadı. Gelişmenin ardından
                Borsa İstanbul, ilgili borçlanma araçlarının Borçlanma Araçları
                Piyasası Gözaltı Pazarı’na alınmasına karar verdi.
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
                Kontrolmatik tarafından ihraç edilen TRFKNTR92611 ve
                TRSKNTR32719 ISIN kodlu özel sektör borçlanma araçlarında 05
                Haziran 2026 tarihli kupon ödemelerinin yapılamaması, şirketin
                borçlanma araçları tarafında dikkat çeken önemli bir gelişme
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