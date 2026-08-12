import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "MARKA Bağlı Ortaklığı Westplast’ın %55’i İçin Sözleşme İmzaladı",
  description:
    seoAciklamasi("Marka Yatırım Holding, %100 bağlı ortaklığı Momentum Girişim Holding’in Westplast Plastik’in %55 payını 79,75 milyon TL bedelle devralmak için pay devir sözleşmesi imzaladığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/marka-momentum-westplast-pay-devri",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/marka-momentum-westplast-pay-devri.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/marka-momentum-westplast-pay-devri.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "MARKA Bağlı Ortaklığı Westplast’ın %55’i İçin Sözleşme İmzaladı",
  description:
    "Marka Yatırım Holding, %100 bağlı ortaklığı Momentum Girişim Holding’in Westplast Plastik’in %55 payını 79,75 milyon TL bedelle devralmak için pay devir sözleşmesi imzaladığını açıkladı.",
  datePublished: "2026-06-26T09:00:00+03:00",
  dateModified: "2026-06-26T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/marka-momentum-westplast-pay-devri",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/marka-momentum-westplast-pay-devri.webp",
};

export default function MarkaMomentumWestplastPayDevriPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/marka-momentum-westplast-pay-devri.webp"
              alt="MARKA Momentum Girişim Holding Westplast pay devir sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                MARKA Bağlı Ortaklığı Westplast’ın %55’i İçin Sözleşme İmzaladı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                26.06.2026 · 
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Marka Yatırım Holding A.Ş. (MARKA), %100 bağlı ortaklığı Momentum
                Girişim Holding A.Ş. üzerinden yeni bir stratejik iştirak edinimi
                açıkladı. Şirketin KAP bildirimine göre Momentum Girişim Holding,
                Westplast Plastik Sanayi ve Ticaret A.Ş.’nin çıkarılmış sermayesini
                temsil eden payların %55’inin devralınması için 26 Haziran 2026
                tarihinde resmi pay devir sözleşmesi imzaladı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  MARKA’nın açıklamasına göre işlem, şirketin bağlı ortaklığı
                  Momentum Girişim Holding’in endüstriyel büyüme odaklı yatırım
                  stratejisi kapsamında gerçekleştirildi. Devir bedeli 79.750.000
                  TL olarak belirlendi. Şirket, bu tutarın bağımsız değerleme
                  kuruluşu İnvestAz Yatırım Menkul Değerler A.Ş. tarafından
                  hazırlanan değerleme raporu sonuçları dikkate alınarak ve %10,36
                  iskonto uygulanmak suretiyle belirlendiğini açıkladı.
                </p>
                <p>
                  İşlem konusu şirket olan Westplast Plastik’in; plastik enjeksiyon,
                  küçük ev aletleri imalatı ve sanayi tedarik zinciri alanlarında
                  yüksek kapasiteli üretim hatlarına sahip olduğu belirtildi. Pay
                  devir sözleşmesinin imzalanmasıyla birlikte yasal devir ve resmi
                  tescil süreçlerinin başlatıldığı duyuruldu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Bu haber MARKA açısından yalnızca finansal bir yatırım değil,
                  aynı zamanda iştirak portföyünün sanayi ve üretim tarafında
                  güçlendirilmesi anlamına geliyor. Holding şirketlerinde bağlı
                  ortaklıklar üzerinden yapılan bu tür pay alımları, faaliyet
                  alanının genişlemesi, üretim kabiliyetinin portföye eklenmesi ve
                  yeni gelir kaynakları oluşturulması açısından önemlidir.
                </p>
                <p>
                  İşlem tamamlandığında Momentum Girişim Holding, Westplast
                  Plastik’te çoğunluk payına sahip olacak. %55 pay oranı, yalnızca
                  azınlık yatırımından farklı olarak yönetim ve stratejik kararlar
                  üzerinde daha güçlü bir etki alanı doğurabilir. Bu nedenle haber,
                  MARKA’nın iştirak yapısında üretim ağırlıklı yeni bir döneme geçiş
                  sinyali olarak okunabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Westplast yatırımı neden önemli?
                </h2>
                <p>
                  Westplast Plastik’in faaliyet alanı, plastik enjeksiyon ve küçük
                  ev aletleri imalatı gibi üretim kapasitesi ve tedarik zinciri
                  yönetimi gerektiren başlıklardan oluşuyor. Bu tip şirketlerde
                  değer yaratma; kapasite kullanımı, üretim verimliliği, kurumsal
                  müşteri sözleşmeleri, hammadde maliyetleri, ölçek ekonomisi ve
                  sipariş sürekliliği üzerinden şekillenir.
                </p>
                <p>
                  MARKA açıklamasında, Westplast’ın güçlü endüstriyel altyapısı,
                  operasyonel kabiliyetleri ve imza aşamasındaki yüksek montanlı
                  kurumsal kontratlarının Momentum Girişim Holding’in finansal gücü
                  ve Marka Yatırım Holding çatısı altındaki kurumsal yönetim
                  sinerjisiyle birleştirileceği ifade edildi. Bu bölüm, şirketin
                  satın almayı yalnızca pasif bir finansal yatırım olarak değil,
                  büyüme ve ölçeklenme hedefiyle konumlandırdığını gösteriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Marka Yatırım Holding, iştirakleri ve bağlı ortaklıkları üzerinden
                  farklı alanlarda yatırım yapan bir holding yapısına sahiptir. Bu
                  haberde işlem, MARKA’nın %100 bağlı ortaklığı Momentum Girişim
                  Holding A.Ş. üzerinden yürütülmektedir. Momentum Girişim Holding’in
                  Westplast Plastik’te çoğunluk payı edinmesi, holdingin sanayi ve
                  üretim odaklı yatırım stratejisi açısından dikkat çekici bir adım
                  olarak öne çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  MARKA haberinin en güçlü tarafı, işlem bedelinin ve pay oranının
                  açık şekilde paylaşılmış olmasıdır. 79.750.000 TL bedelle %55 pay
                  edinimi, şirketin bağlı ortaklığı üzerinden Westplast’ta çoğunluk
                  kontrolü elde etmeyi hedeflediğini gösteriyor. Ayrıca bedelin
                  bağımsız değerleme raporu dikkate alınarak belirlenmiş olması,
                  yatırımcı açısından işlemin dayanak noktasını daha izlenebilir hale
                  getiriyor.
                </p>
                <p>
                  Buna karşılık bu tip satın alma haberlerinde kısa vadeli fiyat
                  tepkisinden çok entegrasyon sürecine bakmak gerekir. Westplast’ın
                  üretim kapasitesi, kurumsal kontratlarının gerçekleşme durumu,
                  finansal tabloları ve Momentum Girişim Holding altında yaratacağı
                  operasyonel katkı zaman içinde netleşecektir. Satın alınan şirket
                  ölçeklenebilirse haberin etkisi kalıcı hale gelebilir; ancak
                  entegrasyon, finansman ve operasyonel verimlilik tarafı mutlaka
                  takip edilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Şirket, pay devir sözleşmesinin 26 Haziran 2026 itibarıyla
                  imzalandığını ve yasal devir ile resmi tescil süreçlerinin
                  başlatıldığını açıkladı. Bundan sonraki aşamada yatırımcıların
                  takip edeceği ana başlıklar; devir ve tescil sürecinin tamamlanması,
                  Westplast’ın finansal sonuçlara konsolidasyon etkisi, olası yeni
                  kurumsal kontratlar ve bu yatırımın MARKA bilançosuna katkısı
                  olacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                MARKA’nın %100 bağlı ortaklığı Momentum Girişim Holding,
                Westplast Plastik’in %55 payını 79.750.000 TL bedelle devralmak
                için pay devir sözleşmesi imzaladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Bağlı ortaklık üzerinden yapılan çoğunluk pay edinimi,
                MARKA’nın sanayi ve üretim odaklı iştirak portföyünü güçlendirecek
                stratejik bir adım olarak izlenebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Haber güçlü bir stratejik adım olsa da, asıl etki devir ve tescil
                sürecinin tamamlanması, Westplast’ın finansal performansı ve
                kurumsal kontratların gerçekleşme düzeyiyle netleşecektir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621058"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-zinc-700 underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              26.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/marka-momentum-westplast-pay-devri" />
</article>
</div>
    </main>
  );
}
