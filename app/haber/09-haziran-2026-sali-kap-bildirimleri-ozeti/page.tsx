import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "09 Haziran 2026 Salı KAP Bildirimleri Özeti",
  description:
    "09 Haziran 2026 Salı günü KAP'a düşen öne çıkan bildirimlerin özeti: yurt dışı ihaleler, savunma sanayi sözleşmeleri, enerji yatırımları, kredi anlaşmaları, dava süreçleri ve sermaye artırımları.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/09-haziran-2026-sali-kap-bildirimleri-ozeti",
  },
};

const kapHaberleri = [
  {
    baslik: "Girişim Elektrik (GESAN)",
    metin:
      "Girişim Elektrik, Bosna Hersek'te güneş enerjisi santrali, trafo merkezi ve iletim hattı inşasına yönelik ihalede en avantajlı teklifi verdiğini açıkladı. İhale bedelinin vergiler hariç yaklaşık 26,8 milyon euro seviyesinde olduğu belirtildi. Yurt dışı proje büyüklüğü nedeniyle günün en dikkat çeken KAP başlıklarından biri oldu.",
  },
  {
    baslik: "Forte Bilgi İletişim (FORTE)",
    metin:
      "Forte'nin yüzde 100 bağlı ortaklığı Milsoft ile HAVELSAN arasında komuta kontrol faaliyet alanında yeni bir sözleşme imzalandı. Sözleşme bedeli KDV hariç 2,7 milyon dolar olarak açıklandı. Savunma sanayi ve yazılım tarafındaki iş hacmi açısından pozitif bir gelişme olarak öne çıktı.",
  },
  {
    baslik: "Aksa Enerji (AKSEN)",
    metin:
      "Aksa Enerji, Eskişehir'de planlanan 140,91 MW kapasiteli depolamalı rüzgar enerji santrali projesinde ÇED sürecinin olumlu tamamlandığını duyurdu. Depolamalı yenilenebilir enerji yatırımları, şirketin orta vadeli büyüme planları açısından takip ediliyor.",
  },
  {
    baslik: "Kızılbük GYO (KZBGY)",
    metin:
      "Kızılbük GYO, Marmaris projesine ilişkin 2,7 milyar TL tutarındaki idari para cezasına karşı açılan davanın şirket lehine sonuçlandığını açıkladı. Bu karar, şirket üzerindeki önemli hukuki belirsizliklerden birinin azalması açısından dikkat çekti.",
  },
  {
    baslik: "Türkiye Kalkınma ve Yatırım Bankası (KLNMA)",
    metin:
      "Kalkınma Bankası, Avrupa Yatırım Bankası ile 100 milyon euro tutarında kredi anlaşması imzaladığını bildirdi. Sağlanan finansmanın yatırım ve kalkınma odaklı projelerin desteklenmesinde kullanılması bekleniyor.",
  },
  {
    baslik: "Margün Enerji (MAGEN)",
    metin:
      "Margün Enerji, jeotermal enerji yatırımlarına ilişkin yeni hedeflerini paylaştı. Şirket, yeni yatırımlarla birlikte toplam kurulu güç potansiyelini yaklaşık 745 MWm seviyesine çıkarmayı hedeflediğini açıkladı. Yenilenebilir enerji tarafında izlenebilecek önemli başlıklardan biri oldu.",
  },
  {
    baslik: "Lila Kağıt (LILAK)",
    metin:
      "Lila Kağıt, Erzurum Fabrikası Faz I konverting yatırımının tamamlandığını ve üretime hazır hale geldiğini duyurdu. Yatırımın devreye alınması, şirketin üretim kapasitesi ve operasyonel büyüme planları açısından önem taşıyor.",
  },
  {
    baslik: "Ray Sigorta (RAYSG)",
    metin:
      "Ray Sigorta, 2026 Ocak-Mayıs döneminde brüt prim üretiminin 17,4 milyar TL seviyesine ulaştığını açıkladı. Sigorta şirketlerinde prim üretimi, operasyonel büyüme ve pazar payı açısından yakından takip edilen göstergeler arasında yer alıyor.",
  },
  {
    baslik: "Kuvva Gıda (KUVVA)",
    metin:
      "Kuvva Gıda tarafında yaklaşık yüzde 1349 oranındaki bedelsiz sermaye artırımı kararı yatırımcıların takibinde kaldı. Bedelsiz sermaye artırımları doğrudan şirket değerini artırmasa da hisse adedi ve sermaye yapısında değişiklik yarattığı için piyasada dikkat çekiyor.",
  },
  {
    baslik: "İhlas Holding (IHLAS)",
    metin:
      "İhlas Holding'de yüzde 100 bedelli sermaye artırımı süreci öne çıkan başlıklardan biri oldu. Bedelli sermaye artırımları şirketlere nakit girişi sağlaması nedeniyle önemli olurken, yatırımcılar açısından rüçhan hakkı kullanımı ve yeni sermaye yapısı takip ediliyor.",
  },
  {
    baslik: "Pay Alım-Satım ve Geri Alımlar",
    metin:
      "AKSA, AHGAZ, GOKNR, GLYHO ve NTHOL tarafında pay alım-satım ve geri alım bildirimleri takip edildi. Bu tür bildirimler ortaklık yapısı, yatırımcı hareketleri ve şirketlerin piyasa fiyatına yaklaşımı açısından izleniyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "09 Haziran 2026 Salı KAP Bildirimleri Özeti",
  description:
    "09 Haziran 2026 Salı günü KAP'a düşen öne çıkan bildirimlerin özeti: yurt dışı ihaleler, savunma sanayi sözleşmeleri, enerji yatırımları, kredi anlaşmaları, dava süreçleri ve sermaye artırımları.",
  datePublished: "2026-06-09T09:00:00+03:00",
  dateModified: "2026-06-09T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/09-haziran-2026-sali-kap-bildirimleri-ozeti",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/kap-ozeti.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti.webp"
              alt="09 Haziran 2026 Salı KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              09 Haziran 2026 Salı KAP Bildirimleri Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-09" className="text-sm text-slate-500">9 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 09 Haziran 2026 Salı günü KAP’a düşen öne
                çıkan bildirimlerde yurt dışı ihale süreçleri, savunma sanayi
                sözleşmeleri, enerji yatırımları, kredi anlaşmaları, dava
                süreçleri, prim üretim verileri, sermaye artırımları ve pay
                alım-satım işlemleri dikkat çekti.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli başlıkları arasında GESAN’ın Bosna Hersek’te 26,8
                milyon euroluk ihalede en avantajlı teklifi vermesi, FORTE’nin
                Milsoft üzerinden 2,7 milyon dolarlık sözleşme imzalaması,
                AKSEN’in depolamalı RES projesinde ÇED sürecini tamamlaması,
                KZBGY’nin dava sürecinde olumlu sonuç alması ve KLNMA’nın 100
                milyon euroluk kredi anlaşması öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="09-haziran-2026-sali-kap-bildirimleri-ozeti" baslik="09 Haziran 2026 Salı KAP Bildirimleri Özeti" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
