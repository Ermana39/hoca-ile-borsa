import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HisseLink from "@/components/HisseLink";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "14-temmuz-2026-onemli-kap-cimsa-klypv-glyho-kocmt-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "14 Temmuz 2026 Önemli KAP: CIMSA, KLYPV, GLYHO, KOCMT Etkileri",
  description:
    seoAciklamasi("14 Temmuz 2026 KAP akışında CIMSA CAC kapasite artışı, KLYPV 5,75 milyar TL sözleşme, GLYHO liman pay artışı, KOCMT Muş GES finansal kiralama, TNZTP bedelsiz, FORMT, ULUUN, KBORU, FORTE, ISGYO ve PRZMA bildirimleri öne çıktı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "14 Temmuz 2026 Önemli KAP: CIMSA, KLYPV, GLYHO, KOCMT Etkileri",
    description:
      "14 Temmuz KAP özetinde kapasite artışı, büyük sözleşme, liman pay artışı, GES finansmanı, bedelsiz sermaye artırımı ve gün sonu ek başlıklar birlikte değerlendirildi.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "14 Temmuz 2026 önemli KAP haberleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "14 Temmuz 2026 Önemli KAP: CIMSA, KLYPV, GLYHO, KOCMT Etkileri",
    description:
      "CIMSA, KLYPV, GLYHO, KOCMT, TNZTP, FORMT, ULUUN, KBORU, FORTE, ISGYO ve PRZMA başta olmak üzere 14 Temmuz KAP akışı.",
    images: [haberGorsel],
  },
};

const anaBasliklar = [
  {
    kod: "CIMSA",
    baslik: "CAC tesisinde kapasite artışı",
    etki: "Pozitif / katma değerli ürün kapasitesi arttı",
    detay:
      "Çimsa, Mersin Fabrikası'nda CAC üretim kapasitesine eklenen yeni tesisin deneme üretimi ve test süreçleri tamamlanarak devreye alındığını açıkladı. Yıllık CAC klinkeri kapasitesi 131 bin tondan 197 bin tona yükseldi.",
    link: "/haber/cimsa-cac-tesisi-devreye-alindi-kapasite-197-bin-ton",
  },
  {
    kod: "KLYPV",
    baslik: "5,75 milyar TL'lik güneş paneli sözleşmesi",
    etki: "Pozitif / 2026 hasılat etkisi bekleniyor",
    detay:
      "Kalyon Güneş Teknolojileri, daha önce ön satış sözleşmesi olarak duyurduğu güneş paneli satış sürecinde nihai sözleşmenin imzalandığını ve teslimatların başladığını açıkladı. Nihai sözleşme tutarı 5,75 milyar TL seviyesine güncellendi.",
    link: "/haber/klypv-5-75-milyar-tl-gunes-paneli-sozlesmesi",
  },
  {
    kod: "GLYHO",
    baslik: "Kuşadası ve Lizbon limanlarında pay artışı",
    etki: "Pozitif / tam konsolidasyon etkisi oluşacak",
    detay:
      "Global Yatırım Holding, Kuşadası Ege Port payının %90,47'den %99,99'a çıktığını; Lizbon Port tarafında ise işlem tamamlandığında payın %50'den %60'a yükseleceğini açıkladı.",
    link: "/haber/glyho-kusadasi-lizbon-limanlarinda-pay-artisi",
  },
  {
    kod: "KOCMT",
    baslik: "Muş GES için finansal kiralama sözleşmesi",
    etki: "Pozitif / enerji maliyeti ve yatırım finansmanı odağı",
    detay:
      "Koç Metalurji, Muş'ta planlanan 22,5 MWe GES projesi için QNB Finansal Kiralama ile 14,28 milyon dolar KDV dahil finansal kiralama sözleşmesi imzaladı. Sözleşmede 18 ay anapara geri ödemesiz dönem ve 72 ay toplam vade bulunuyor.",
    link: "/haber/kocmt-mus-ges-finansal-kiralama-sozlesmesi",
  },
];

const bugunAyriHaberler = [
  {
    kod: "KLYPV",
    baslik: "5,75 milyar TL'lik güneş paneli satış sözleşmesi",
    etki: "Pozitif / teslimatlar başladı, 2026 hasılatına yansıması bekleniyor",
    link: "/haber/klypv-5-75-milyar-tl-gunes-paneli-sozlesmesi",
  },
  {
    kod: "FORMT",
    baslik: "Proline Sandalye'nin %52 payı için 330 milyon TL'lik alım",
    etki: "Pozitif / satın alma ve ihracat payı odağı",
    link: "/haber/formt-proline-sandalye-yuzde-52-satin-alma",
  },
  {
    kod: "ULUUN",
    baslik: "Rüzgar enerjisi projesinde TEDAŞ kabul süreci",
    etki: "Pozitif / iki türbinde kabul süreci, üçüncü türbinde ÇED olumlu kararı",
    link: "/haber/uluun-ruzgar-enerjisi-projesinde-tedas-kabul-sureci",
  },
  {
    kod: "CIMSA",
    baslik: "Mersin CAC tesisinde kapasite 197 bin tona çıktı",
    etki: "Pozitif / global CAC pazarındaki konum güçleniyor",
    link: "/haber/cimsa-cac-tesisi-devreye-alindi-kapasite-197-bin-ton",
  },
  {
    kod: "GLYHO",
    baslik: "Kuşadası ve Lizbon limanlarında pay artışı",
    etki: "Pozitif / Lizbon Port tam konsolidasyona girecek",
    link: "/haber/glyho-kusadasi-lizbon-limanlarinda-pay-artisi",
  },
  {
    kod: "KOCMT",
    baslik: "22,5 MWe Muş GES için finansal kiralama sözleşmesi",
    etki: "Pozitif / 14,28 milyon dolar KDV dahil finansman",
    link: "/haber/kocmt-mus-ges-finansal-kiralama-sozlesmesi",
  },
  {
    kod: "TNZTP",
    baslik: "%70 bedelsiz sermaye artırımı için SPK başvurusu",
    etki: "Pozitif algı / sermaye 400 milyon TL'den 680 milyon TL'ye çıkacak",
    link: "/haber/tnztp-70-bedelsiz-sermaye-artirimi-spk-basvurusu",
  },
];

const gunSonuEkBasliklar = [
  {
    kod: "KBORU",
    baslik: "Yurt dışı altyapı projeleri için 3,93 milyon dolarlık satış anlaşmaları",
    okuma:
      "Kuzey Boru, başta Yunanistan'daki Tavropos sulama şebekesi projesi olmak üzere CTP, Koruge ve HDPE boru tedarikini kapsayan satış anlaşmaları açıkladı. Şirket bu ticari hacmin 2026 satış hedefine etkisini yaklaşık %1,5 olarak belirtti.",
  },
  {
    kod: "SANEL",
    baslik: "Diyaliz merkezi işletmeciliği alanında satın alma görüşmeleri",
    okuma:
      "San-El'in %48,90 oranında iştiraki Salacak Sağlık Yatırımları, Uşakcan Diyaliz Hizmetleri'nin paylarının satın alınmasına yönelik resmi görüşmelere başladı. Henüz tamamlanmış bir satın alma değil, görüşme aşaması.",
  },
  {
    kod: "FORTE",
    baslik: "TEDAŞ siber güvenlik ürünleri ihalesinde sözleşmeye davet",
    okuma:
      "Forte, TEDAŞ tarafından düzenlenen Siber Güvenlik Ürünleri Alımı ihalesinin şirket uhdesinde kaldığını ve sözleşmeye davet yazısı aldığını açıkladı. İşin bedeli KDV hariç 43,63 milyon TL.",
  },
  {
    kod: "FORMT",
    baslik: "Kayseri'de ikinci 6 MW GES yatırımı kararı",
    okuma:
      "FORMT Yönetim Kurulu, Kayseri Beydeğirmeni'ndeki 6 MW gücündeki mevcut GES'in 12 MW'a çıkarılması için ikinci 6 MW GES kurulumu ve çağrı mektubu başvurusu sürecini başlatma kararı aldı.",
  },
  {
    kod: "ISGYO",
    baslik: "Kasaba Modern projesinde tapu işlemleri tamamlandı",
    okuma:
      "İş GYO, İstanbul Çekmeköy Ömerli'deki Kasaba Modern projesinde şirket payının %43,53'ten %50'ye çıkarılması kapsamında arsa payı tapu işlemlerinin tamamlandığını duyurdu.",
  },
  {
    kod: "PRZMA",
    baslik: "Tahsisli sermaye artırımı işleminden vazgeçildi",
    okuma:
      "Prizma, daha önce duyurduğu 75 milyon TL planlanan satış hasılatlı tahsisli sermaye artırımı kararını iptal etti ve SPK başvurusunun geri çekilmesi için başvuruda bulundu.",
  },
];

const oneCikanTemalar = [
  {
    baslik: "Kapasite ve üretim tarafında CIMSA öne çıktı",
    aciklama:
      "CIMSA'nın CAC tesisini devreye alması, sadece yeni bir üretim hattı haberi değil; katma değerli ürün kapasitesinin artması ve global CAC pazarındaki konumun güçlenmesi açısından okunmalı.",
  },
  {
    baslik: "Enerji tarafında üç ayrı başlık geldi",
    aciklama:
      "KLYPV güneş paneli satış sözleşmesiyle hasılat tarafında, KOCMT Muş GES finansmanıyla yatırım tarafında, ULUUN ise rüzgar enerji santrali kabul süreçleriyle operasyonel ilerleme tarafında öne çıktı.",
  },
  {
    baslik: "GLYHO liman portföyünde payını artırıyor",
    aciklama:
      "Kuşadası Ege Port payının %99,99'a çıkması doğrudan kontrol gücünü artırırken, Lizbon Port'ta hedef payın %60'a yükselmesi tamamlandığında konsolidasyon yapısına da etki edecek.",
  },
  {
    baslik: "Sermaye işlemlerinde TNZTP ve PRZMA ayrıştı",
    aciklama:
      "TNZTP %70 bedelsiz için SPK başvurusu yaparken, PRZMA tahsisli sermaye artırımı işleminden vazgeçti. İki haber de sermaye yapısı tarafında farklı yönlü okunacak başlıklar oldu.",
  },
  {
    baslik: "FORMT tarafında iki ayrı gelişme var",
    aciklama:
      "FORMT gün içinde hem Proline Sandalye'nin %52 payı için satın alma anlaşması hem de mevcut 6 MW GES kapasitesini 12 MW'a çıkarma hedefiyle ikinci GES kararını açıkladı.",
  },
];

const piyasaOkumasi = [
  "14 Temmuz KAP akışı sözleşme, kapasite artışı, enerji yatırımı, pay devri ve sermaye artırımı başlıklarının aynı güne yığıldığı yoğun bir tablo oluşturdu.",
  "CIMSA, KLYPV, GLYHO ve KOCMT günün finansal etkisi daha güçlü okunabilecek başlıkları arasında yer aldı.",
  "TNZTP bedelsiz haberi kısa vadeli ilgi yaratabilecek bir sermaye artırımı başlığı olurken, PRZMA tarafında tahsisli sermaye artırımından vazgeçilmesi beklenti değişimi olarak öne çıktı.",
  "KBORU ve FORTE bildirimleri ayrı haber seviyesine çıkarılmadan gün sonu özetinde takip edilmesi gereken yeni iş ilişkisi başlıkları olarak değerlendirildi.",
  "Gün sonu özetinde ayrı haber yapılanlar da dahil edildiği için bu sayfa 14 Temmuz KAP akışını tek yerde toparlıyor.",
];

const takipBasliklari = [
  "CIMSA CAC kapasite artışının satış ve kârlılık tarafına yansıması",
  "KLYPV sözleşme teslimatlarının 2026 hasılatına ne kadar hızla gireceği",
  "GLYHO Lizbon Port işleminde resmi kurum izinleri ve tam konsolidasyon süreci",
  "KOCMT Muş GES projesinin yatırım takvimi ve finansman maliyeti",
  "TNZTP bedelsiz sermaye artırımı için SPK onay süreci ve hak kullanım tarihi",
  "FORMT Proline satın alma işleminin 31 Temmuz'a kadar tamamlanıp tamamlanmayacağı",
  "ULUUN rüzgar türbinlerinde TEDAŞ kabul süreci ve Bergama türbininin 2027/4Ç planı",
  "FORTE TEDAŞ sözleşmesinin imza süreci ve teslimat takvimi",
];

const ilgiliHisseler = [
  "KLYPV",
  "KBORU",
  "FORMT",
  "SANEL",
  "FORTE",
  "ULUUN",
  "ISGYO",
  "PRZMA",
  "TNZTP",
  "CIMSA",
  "KOCMT",
  "GLYHO",
];

const seoSorular = [
  {
    soru: "14 Temmuz 2026 KAP haberlerinde hangi hisseler öne çıktı?",
    cevap:
      "14 Temmuz 2026 KAP akışında CIMSA, KLYPV, GLYHO, KOCMT, TNZTP, FORMT, ULUUN, KBORU, FORTE, ISGYO ve PRZMA öne çıkan hisseler arasında yer aldı.",
  },
  {
    soru: "CIMSA KAP haberinde ne açıkladı?",
    cevap:
      "CIMSA, Mersin Fabrikası'ndaki yeni CAC üretim tesisini devreye aldığını ve yıllık CAC klinkeri üretim kapasitesinin 131 bin tondan 197 bin tona yükseldiğini açıkladı.",
  },
  {
    soru: "KLYPV sözleşme tutarı ne kadar oldu?",
    cevap:
      "KLYPV, güneş paneli satışına ilişkin nihai sözleşme tutarının 5,75 milyar TL seviyesine güncellendiğini ve teslimatların başladığını duyurdu.",
  },
  {
    soru: "GLYHO liman haberinde hangi paylar değişti?",
    cevap:
      "GLYHO tarafında Kuşadası Ege Port payı %90,47'den %99,99'a çıktı. Lizbon Port için ise işlem tamamlandığında payın %50'den %60'a yükselmesi bekleniyor.",
  },
  {
    soru: "TNZTP bedelsiz sermaye artırımı oranı kaç?",
    cevap:
      "TNZTP, %70 bedelsiz sermaye artırımı için SPK başvurusu yaptı. Sermayenin 400 milyon TL'den 680 milyon TL'ye çıkarılması planlanıyor.",
  },
];

const kaynakLinkleri = [
  { kod: "KLYPV", href: "https://www.kap.org.tr/Bildirim/1633009" },
  { kod: "KBORU", href: "https://www.kap.org.tr/Bildirim/1633011" },
  { kod: "FORMT", href: "https://www.kap.org.tr/Bildirim/1633122" },
  { kod: "SANEL", href: "https://www.kap.org.tr/Bildirim/1633125" },
  { kod: "FORTE", href: "https://www.kap.org.tr/Bildirim/1633134" },
  { kod: "ULUUN", href: "https://www.kap.org.tr/Bildirim/1633186" },
  { kod: "FORMT GES", href: "https://www.kap.org.tr/Bildirim/1633200" },
  { kod: "ISGYO", href: "https://www.kap.org.tr/Bildirim/1633678" },
  { kod: "PRZMA", href: "https://www.kap.org.tr/Bildirim/1633745" },
  { kod: "TNZTP", href: "https://www.kap.org.tr/Bildirim/1633753" },
  { kod: "CIMSA", href: "https://www.kap.org.tr/Bildirim/1633770" },
  { kod: "GLYHO", href: "https://www.kap.org.tr/Bildirim/1633774" },
  { kod: "KOCMT", href: "https://www.kap.org.tr/Bildirim/1633775" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "14 Temmuz 2026 Önemli KAP: CIMSA, KLYPV, GLYHO, KOCMT Etkileri",
  description:
    "14 Temmuz 2026 KAP akışında CIMSA CAC kapasite artışı, KLYPV 5,75 milyar TL sözleşme, GLYHO liman pay artışı, KOCMT Muş GES finansal kiralama, TNZTP bedelsiz, FORMT, ULUUN, KBORU, FORTE, ISGYO ve PRZMA bildirimleri öne çıktı.",
  image: haberGorsel,
  datePublished: "2026-07-14T22:40:00+03:00",
  dateModified: "2026-07-14T22:40:00+03:00",
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

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function OnDortTemmuzOnemliKapPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="14 Temmuz 2026 önemli KAP haberleri"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              14 Temmuz 2026 Önemli KAP: CIMSA, KLYPV, GLYHO, KOCMT Etkileri
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
                14 Temmuz 2026 KAP akışı; kapasite artışı, büyük ölçekli satış
                sözleşmesi, enerji yatırımları, liman pay artışı, satın alma
                anlaşması ve sermaye artırımı başlıklarının aynı güne toplandığı
                yoğun bir görünüm verdi.
              </p>

              <p>
                Günün ana başlıklarında <strong>CIMSA</strong> CAC kapasite
                artışıyla, <strong>KLYPV</strong> 5,75 milyar TL&apos;lik güneş paneli
                sözleşmesiyle, <strong>GLYHO</strong> Kuşadası ve Lizbon limanlarındaki
                pay artışlarıyla, <strong>KOCMT</strong> ise Muş GES finansal
                kiralama sözleşmesiyle öne çıktı. Gün içinde ayrı haber yapılan
                tüm önemli bildirimler ve gün sonu özetine eklenen diğer başlıklar
                bu sayfada birlikte yer aldı.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {anaBasliklar.map((item) => (
                  <Link
                    key={item.kod}
                    href={item.link}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4 transition hover:border-blue-300 hover:bg-blue-100"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.kod}
                    </div>
                    <div className="mt-1 text-lg font-bold leading-tight text-blue-950">
                      {item.baslik}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-blue-800">
                      {item.etki}
                    </div>
                  </Link>
                ))}
              </div>

              <Section title="Günün en önemli KAP başlıkları">
                <div className="grid gap-4">
                  {anaBasliklar.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.kod} — {item.baslik}
                        </h3>
                        <span className="rounded-md bg-white px-3 py-1 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
                          {item.etki}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.detay}
                      </p>
                      <Link
                        href={item.link}
                        className="mt-3 inline-block text-sm font-bold text-blue-700 underline underline-offset-4"
                      >
                        Haberi oku
                      </Link>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="14 Temmuz'da ayrı haber yapılan önemli KAP bildirimleri">
                <div className="overflow-x-auto">
                  <table className="min-w-[900px] overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Hisse</th>
                        <th className="px-4 py-3 text-left font-semibold">Başlık</th>
                        <th className="px-4 py-3 text-left font-semibold">Kısa Okuma</th>
                        <th className="px-4 py-3 text-left font-semibold">Haber</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bugunAyriHaberler.map((item, index) => (
                        <tr
                          key={`${item.kod}-${index}`}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.baslik}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.etki}
                          </td>
                          <td className="px-4 py-3">
                            <Link
                              href={item.link}
                              className="font-bold text-blue-700 underline underline-offset-4"
                            >
                              Aç
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Gün sonu özetine eklenen diğer önemli KAP başlıkları">
                <div className="grid gap-4 md:grid-cols-2">
                  {gunSonuEkBasliklar.map((item) => (
                    <div
                      key={`${item.kod}-${item.baslik}`}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.kod} — {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.okuma}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Bugünkü KAP akışı nasıl okunmalı?">
                <div className="grid gap-4">
                  {oneCikanTemalar.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Piyasa etkisi açısından özet">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  14 Temmuz KAP akışında ağırlık pozitif okunabilecek operasyonel
                  ve finansal gelişmelerdeydi. Ancak her bildirim aynı ağırlıkta
                  değil. KLYPV ve CIMSA daha doğrudan ciro/kapasite tarafında,
                  GLYHO konsolidasyon ve liman portföyü tarafında, KOCMT ise
                  yatırım finansmanı tarafında değerlendirilmeli.
                </p>

                <div className="mt-4 grid gap-3">
                  {piyasaOkumasi.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="14 Temmuz 2026 KAP haberleri hakkında kısa soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="İlgili hisseler">
                <div className="flex flex-wrap gap-2">
                  {ilgiliHisseler.map((kod) => (
                    <HisseLink
                      key={kod}
                      sembol={kod}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200"
                    />
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {kaynakLinkleri.map((item) => (
                    <a
                      key={`${item.kod}-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-block font-medium text-slate-700 underline underline-offset-2"
                    >
                      {item.kod} — Orjinal Kap içeriği
                    </a>
                  ))}
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="14 Temmuz 2026 Önemli KAP: CIMSA, KLYPV, GLYHO, KOCMT Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. KAP bildirimlerinin fiyat etkisi; piyasa
                koşulları, işlem hacmi, şirket finansalları ve sonraki açıklamalarla
                birlikte değerlendirilmelidir.
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
