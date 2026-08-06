import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "10-temmuz-2026-onemli-kap-yeotk-miatk-smrva-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "10 Temmuz 2026 Önemli KAP: YEOTK, MIATK, SMRVA Etkileri",
  description:
    "10 Temmuz 2026 KAP haberlerinde YEOTK, MIATK, SMRVA, ECILC, DNFIN, MOPAS, KTLEV, KARSN, VAKBN, PEKGY ve TTKOM açıklamaları öne çıktı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "10 Temmuz 2026 Önemli KAP: YEOTK, MIATK, SMRVA Etkileri",
    description:
      "Ayrı haber yapılan başlıklar dahil 10 Temmuz 2026 gün sonu önemli KAP gelişmeleri.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "10 Temmuz 2026 önemli KAP haberleri YEOTK MIATK SMRVA etkileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Temmuz 2026 Önemli KAP: YEOTK, MIATK, SMRVA Etkileri",
    description:
      "10 Temmuz 2026 günü öne çıkan KAP açıklamaları ve hisse bazlı etkileri.",
    images: [haberGorsel],
  },
};

const oneCikanlar = [
  {
    kod: "YEOTK",
    baslik: "Türk Ytong ile 8,44 milyon dolarlık GES sözleşmesi",
    etki: "Pozitif",
  },
  {
    kod: "MIATK",
    baslik: "Körfez Bölgesi projeleri için iş birliği sözleşmesi",
    etki: "Pozitif Takip",
  },
  {
    kod: "SMRVA",
    baslik: "Denizbank alacak portföyü ihalesinde en yüksek teklif",
    etki: "Pozitif",
  },
  {
    kod: "KARSN",
    baslik: "CEO değişikliği açıklandı",
    etki: "Takip",
  },
];

const kapKartlari = [
  {
    kod: "YEOTK",
    baslik: "Türk Ytong ile Mardin GES Sözleşmesi",
    etki: "Pozitif",
    ozet:
      "YEOTK, Türk Ytong Sanayi A.Ş. ile Mardin’de anahtar teslim kurulacak güneş santrali için 8.444.688 ABD doları + KDV tutarında sözleşme imzaladı.",
    yorum:
      "Döviz bazlı GES sözleşmesi, YEOTK’nin yenilenebilir enerji ve anahtar teslim proje tarafındaki iş akışını destekleyen pozitif bir gelişme.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631374",
    haberLink: "/haber/yeotk-turk-ytong-mardin-ges-sozlesmesi",
  },
  {
    kod: "ECILC",
    baslik: "Ayazağa Taşınmazı İçin Proje Süreci İlerliyor",
    etki: "Pozitif Takip",
    ozet:
      "ECILC, Ayazağa’daki taşınmazı için Artaş İnşaat ile yapılan sözleşme kapsamında avan proje onayının Sarıyer Belediyesi’ne iletildiğini ve ÇED sürecine başlandığını açıkladı.",
    yorum:
      "Taşınmaz geliştirme sürecinde idari aşamaların ilerlemesi pozitif takip başlığı olarak öne çıkıyor. Nihai etki, proje sürecindeki kesinleşen adımlarla netleşecek.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631373",
  },
  {
    kod: "DNFIN",
    baslik: "Sermaye Artırımı Tescil Edildi",
    etki: "Nötr/Pozitif",
    ozet:
      "Deniz Finansal Kiralama, sermayesinin 3,45 milyar TL’den 4,252 milyar TL’ye çıkarılmasına ilişkin tescil işleminin tamamlandığını açıkladı.",
    yorum:
      "Sermaye tescili, bilanço ve özkaynak yapısı tarafında tamamlayıcı nitelikte bir süreç açıklaması olarak izlenebilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631654",
  },
  {
    kod: "MOPAS",
    baslik: "134. Mağaza Hizmete Açıldı",
    etki: "Pozitif",
    ozet:
      "MOPAS, Kocaeli Başiskele Yeşilyurt Mahallesi’nde 1.100 metrekare alanda faaliyet gösterecek Mopaş-Yuvacık mağazasının 10 Temmuz 2026 itibarıyla hizmete açıldığını duyurdu.",
    yorum:
      "Yeni mağaza açılışı, perakende ağının genişlemesi açısından pozitif operasyonel gelişme olarak okunabilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631670",
  },
  {
    kod: "KTLEV",
    baslik: "Karabağlar Şubesi Faaliyete Başlıyor",
    etki: "Pozitif",
    ozet:
      "KTLEV, Karabağlar şubesinin 14 Temmuz 2026 tarihinde faaliyete başlayacağını açıkladı.",
    yorum:
      "Şubeleşme adımı, tasarruf finansman faaliyetlerinde erişim ağının genişlemesi açısından olumlu takip edilebilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631703",
  },
  {
    kod: "KARSN",
    baslik: "CEO Görev Değişikliği",
    etki: "Takip",
    ozet:
      "KARSN’da Yönetim Kurulu Murahhas Üyesi ve CEO olarak görev yapan Okan Baş, 10 Temmuz 2026 itibarıyla CEO görevinden ve Yönetim Kurulu üyeliğinden ayrıldı. Utku Can Ayyarkın Murahhas Üye ve CEO olarak atandı.",
    yorum:
      "Üst yönetim değişikliği doğrudan finansal veri içermese de şirket stratejisi ve operasyonel devamlılık açısından takip edilecek bir başlık.",
    kaynak: "https://www.kap.org.tr/Bildirim/1631861",
  },
  {
    kod: "VAKBN",
    baslik: "132.371 Adet Pay Geri Alındı",
    etki: "Nötr/Pozitif",
    ozet:
      "VAKBN, Bankalarda İyi Ücretlendirme Uygulamalarına İlişkin Rehber kapsamında özellikli çalışanlara yapılacak değişken ödemeler için 31,42 TL ortalama fiyatla 132.371 adet pay geri alımı yaptı.",
    yorum:
      "Geri alım tutarı sınırlı; açıklama daha çok ücretlendirme uygulaması kapsamında teknik ve süreçsel nitelikte.",
    kaynak: "https://www.kap.org.tr/Bildirim/1632023",
  },
  {
    kod: "MIATK",
    baslik: "Körfez Bölgesi Projeleri İçin İş Birliği",
    etki: "Pozitif Takip",
    ozet:
      "MIATK, Katar merkezli Al Jaber Engineering W.L.L. ile Körfez Bölgesi’nde demiryolu, metro, altyapı, inşaat ve teknoloji çözümleri için iş birliği sözleşmesi imzaladı.",
    yorum:
      "Açıklamada parasal tutar yok; haberin ana etkisi iş birliğinin somut proje ve sözleşmelere dönüşüp dönüşmeyeceğinde olacak.",
    kaynak: "https://www.kap.org.tr/Bildirim/1632025",
    haberLink: "/haber/miatk-korfez-bolgesi-projeleri-is-birligi",
  },
  {
    kod: "SMRVA",
    baslik: "Denizbank Alacak Portföyü İhalesi",
    etki: "Pozitif",
    ozet:
      "SMRVA, Denizbank’ın 426.421.978 TL anapara büyüklüğüne sahip 1 adet bireysel tahsili gecikmiş alacak portföyü ihalesinde en yüksek teklifi verdi. İhaleye 12 varlık yönetim şirketi katıldı.",
    yorum:
      "Portföy alımı faaliyet hacmi açısından pozitif. Kesinleşme için Denizbank Yönetim Kurulu onayı ve sonraki devir süreci izlenecek.",
    kaynak: "https://www.kap.org.tr/Bildirim/1632037",
    haberLink: "/haber/smrva-denizbank-426-milyon-tl-alacak-portfoyu-ihalesi",
  },
  {
    kod: "PEKGY",
    baslik: "Bağlı Ortaklık Unvanı Değişti",
    etki: "Nötr",
    ozet:
      "PEKGY, %100 bağlı ortaklığı Sözinv Danışmanlık A.Ş.’nin ticaret unvanının Tera Beykoz Gayrimenkul A.Ş. olarak değiştirildiğini açıkladı.",
    yorum:
      "Pay oranı ve ortaklık yapısında değişiklik olmadığı için haber operasyonel/kurumsal yapı tarafında nötr nitelikte.",
    kaynak: "https://www.kap.org.tr/Bildirim/1632053",
  },
  {
    kod: "TTKOM",
    baslik: "Varlık Kiralama Şirketi Kuruluş Kararı",
    etki: "Pozitif Takip",
    ozet:
      "TTKOM, %100 sahip olacağı ve ödenmiş sermayesi en az 250.000 TL olacak bir varlık kiralama şirketi kurulmasına karar verdi.",
    yorum:
      "Kuruluş kararı, kira sertifikası ve alternatif finansman araçları tarafında kullanılabilecek yeni bir yapı oluşturması açısından takip edilebilir.",
    kaynak: "https://www.kap.org.tr/Bildirim/1632062",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "10 Temmuz 2026 Önemli KAP: YEOTK, MIATK, SMRVA Etkileri",
  description:
    "10 Temmuz 2026 KAP haberlerinde YEOTK, MIATK, SMRVA, ECILC, DNFIN, MOPAS, KTLEV, KARSN, VAKBN, PEKGY ve TTKOM açıklamaları öne çıktı.",
  image: haberGorsel,
  datePublished: "2026-07-10T21:30:00+03:00",
  dateModified: "2026-07-10T21:30:00+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

function etkiClass(etki: string) {
  if (etki === "Pozitif") return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
  if (etki === "Negatif") return "bg-red-50 text-red-700 ring-red-600/20";
  if (etki.includes("Takip")) return "bg-amber-50 text-amber-700 ring-amber-600/20";
  return "bg-slate-50 text-slate-700 ring-slate-600/20";
}

export default function OnTemmuzKapPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="10 Temmuz 2026 önemli KAP haberleri YEOTK MIATK SMRVA etkileri"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              10 Temmuz 2026 Önemli KAP: YEOTK, MIATK, SMRVA Etkileri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Gün Sonu KAP Özeti
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                10 Temmuz 2026 tarihli KAP akışında YEOTK’nin Türk Ytong ile
                imzaladığı GES sözleşmesi, MIATK’nin Körfez Bölgesi iş birliği,
                SMRVA’nın Denizbank alacak portföyü ihalesi, KARSN’da CEO
                değişikliği ve TTKOM’un varlık kiralama şirketi kuruluş kararı
                öne çıktı.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {oneCikanlar.map((item) => (
                  <div
                    key={item.kod}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-2xl font-black text-blue-950">
                      {item.kod}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-6 text-blue-900">
                      {item.baslik}
                    </div>
                    <span
                      className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${etkiClass(
                        item.etki
                      )}`}
                    >
                      {item.etki}
                    </span>
                  </div>
                ))}
              </div>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                  Günün öne çıkan KAP başlıkları
                </h2>
                <div className="grid gap-4">
                  {kapKartlari.map((item) => (
                    <div
                      key={`${item.kod}-${item.baslik}`}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-slate-900 px-3 py-1 text-sm font-black text-white">
                          {item.kod}
                        </span>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${etkiClass(
                            item.etki
                          )}`}
                        >
                          {item.etki}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900 md:text-xl">
                        {item.baslik}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.ozet}
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        <strong>Etki yorumu:</strong> {item.yorum}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                        {item.haberLink ? (
                          <Link
                            href={item.haberLink}
                            className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                          >
                            Detaylı haber
                          </Link>
                        ) : null}
                        <a
                          href={item.kaynak}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:border-slate-400"
                        >
                          Orjinal Kap içeriği
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
                  Genel görünüm
                </h2>
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Günün KAP akışında sözleşme, iş birliği, şube/mağaza açılışı,
                  alacak portföyü ihalesi ve finansman yapısı gibi farklı
                  başlıklar vardı. YEOTK ve SMRVA daha somut tutar içeren
                  pozitif haberlerle ayrışırken, MIATK ve TTKOM tarafında gelecek
                  adımların somut sözleşme ya da finansman sürecine dönüşüp
                  dönüşmeyeceği izlenecek.
                </p>
              </section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="10 Temmuz 2026 Önemli KAP: YEOTK, MIATK, SMRVA Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. KAP açıklamalarının etkisi, şirketlerin
                sonraki bildirimleri ve finansal tablolarıyla birlikte
                değerlendirilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}