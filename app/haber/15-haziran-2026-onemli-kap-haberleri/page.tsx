import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: { absolute: "15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti" },
  description:
    seoAciklamasi("15 Haziran 2026 KAP özetinde ASELS, CVKMD, GRTHO, DSTKF ve diğer şirketlerin açıklamaları, öne çıkan gelişmeler ve olası piyasa etkileri yer alıyor.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/15-haziran-2026-onemli-kap-haberleri",
  },
  openGraph: {
    type: "article",
    title: "15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti",
    description:
      "ASELS, CVKMD, GRTHO, DSTKF ve diğer şirketlerin 15 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti",
    description:
      "ASELS, CVKMD, GRTHO, DSTKF ve diğer şirketlerin 15 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "ASELSAN (ASELS)",
    metin:
      "ASELSAN, yurt dışı müşterileriyle toplam 114,7 milyon dolar tutarında yeni ihracat sözleşmeleri imzaladığını açıkladı. Savunma sanayi ihracatı, döviz bazlı iş büyüklüğü ve şirketin uluslararası pazarlardaki konumu açısından bu bildirim günün en güçlü pozitif KAP haberlerinden biri olarak öne çıktı.",
  },
  {
    baslik: "CVK Maden (CVKMD)",
    metin:
      "CVK Maden, bağlı ortaklığı Orta Truva Madencilik için stratejik ortaklık görüşmelerine başlandığını duyurdu. Şirketin madencilik varlıkları, olası yatırım ortaklığı ve büyüme planları açısından bu açıklama yatırımcılar tarafından yakından takip edilecek başlıklardan biri oldu.",
  },
  {
    baslik: "Grainturk Holding (GRTHO)",
    metin:
      "Grainturk Holding, Yönetim Kurulu'nun sermayenin iç kaynaklardan yüzde 950 oranında bedelsiz artırılması yönünde karar aldığını açıkladı. Bedelsiz sermaye artırımı kararları piyasada yatırımcı ilgisini artırabilen başlıklar arasında yer aldığı için GRTHO günün dikkat çeken hisselerinden biri oldu.",
  },
  {
    baslik: "Destek Finans Faktoring (DSTKF)",
    metin:
      "Destek Finans Faktoring, daha önce gündeme gelen Tera Yatırım ile ilgili toptan alış satış işleminin gerçekleştirilmeyeceğini açıkladı. Önceki açıklamanın ardından gelen bu iptal bildirimi, pay sahipliği yapısı ve işlem beklentisi açısından takip edilen önemli gelişmeler arasında yer aldı.",
  },
  {
    baslik: "Astor Enerji (ASTOR)",
    metin:
      "Astor Enerji, aile içi pay devrine ilişkin açıklama yaptı. Şirket, söz konusu işlemin kontrol değişikliğine yol açmadığını belirtti. Pay devirleri yatırımcılar tarafından yakından izlendiği için açıklamada özellikle kontrol değişikliği olmadığı vurgusu dikkat çekti.",
  },
  {
    baslik: "Logo Yazılım (LOGO)",
    metin:
      "Logo Yazılım, pay geri alım programı kapsamında yeni geri alım işlemlerini duyurdu. Pay geri alımları piyasa tarafından genellikle hisse fiyatını destekleyici bir unsur olarak izlenir ancak tek başına operasyonel büyüme göstergesi olarak değerlendirilmemelidir.",
  },
  {
    baslik: "Anel Elektrik (ANELE)",
    metin:
      "Anel Elektrik paylarında olağandışı fiyat ve miktar hareketleri nedeniyle Borsa İstanbul tarafından geçici işlem durdurma kararı alındı. Şirket, kamuya açıklanmamış özel bir durum bulunmadığını bildirdi. Açıklamanın ardından işlemlerin yeniden açılması nedeniyle ANELE günün en çok takip edilen başlıklarından biri oldu.",
  },
  {
    baslik: "Alarko Holding (ALARK)",
    metin:
      "Alarko Holding tarafında Leyla Alaton'a ait 12,5 milyon adet pay için MKK'ya kaydileştirme başvurusu yapıldığı açıklandı. Şirket, işlemin satış amaçlı değil kredi teminatı amacıyla gerçekleştirildiğini belirtti. Bu açıklama, olası satış algısını azaltmaya yönelik önemli bir bilgilendirme olarak öne çıktı.",
  },
  {
    baslik: "Beta Enerji (BETAE)",
    metin:
      "Beta Enerji ve Teknoloji halka arzında talep toplama tarihlerinin 17, 18 ve 19 Haziran olarak duyurulması halka arz gündeminin öne çıkan başlıklarından biri oldu. Şirketin halka arz süreci, enerji dönüşümü ve yatırım planları nedeniyle yatırımcılar tarafından yakından izleniyor.",
  },
  {
    baslik: "Günün Öne Çıkan Pozitif Başlıkları",
    metin:
      "15 Haziran 2026 KAP gündeminde ASELSAN'ın 114,7 milyon dolarlık ihracat sözleşmeleri, GRTHO'nun yüzde 950 bedelsiz sermaye artırımı kararı, CVKMD'nin stratejik ortaklık görüşmeleri ve LOGO'nun pay geri alım açıklaması pozitif tarafta öne çıkan başlıklar oldu.",
  },
  {
    baslik: "Yakından Takip Edilecek Bildirimler",
    metin:
      "ANELE'deki olağandışı fiyat ve miktar hareketleri, ALARK tarafındaki kaydileştirme başvurusu, DSTKF'de gerçekleşmeyecek toptan alış satış işlemi ve Beta Enerji halka arz takvimi günün takip edilmesi gereken diğer önemli gelişmeleri arasında yer aldı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti",
  description:
    "ASELS, CVKMD, GRTHO, DSTKF ve diğer şirketlerin 15 Haziran KAP bildirimlerinde öne çıkan gelişmeler ve olası etkiler.",
  datePublished: "2026-06-15T09:00:00+03:00",
  dateModified: "2026-06-15T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/15-haziran-2026-onemli-kap-haberleri",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-15" className="text-sm text-slate-500">15 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 15 Haziran 2026 Pazartesi günü KAP’a düşen
                öne çıkan bildirimlerde savunma sanayi ihracat sözleşmeleri,
                stratejik ortaklık görüşmeleri, yüksek oranlı bedelsiz sermaye
                artırımı kararı, pay geri alımı, olağandışı fiyat hareketi
                açıklaması, kaydileştirme başvurusu ve halka arz takvimi dikkat
                çekti.
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
                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli başlıkları arasında ASELSAN’ın 114,7 milyon
                dolarlık ihracat sözleşmeleri, GRTHO’nun yüzde 950 bedelsiz
                sermaye artırımı kararı, CVKMD’nin stratejik ortaklık
                görüşmeleri, LOGO’nun pay geri alımı, ANELE’deki olağandışı
                fiyat hareketi açıklaması, ALARK kaydileştirme başvurusu ve
                Beta Enerji halka arz takvimi öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="15-haziran-2026-pazartesi-kap-bildirimleri-ozeti" baslik="15 Haziran KAP: ASELS, CVKMD, GRTHO ve DSTKF Özeti" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/15-haziran-2026-onemli-kap-haberleri" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}
