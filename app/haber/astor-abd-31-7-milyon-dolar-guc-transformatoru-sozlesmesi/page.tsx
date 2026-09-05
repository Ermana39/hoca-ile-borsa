import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "astor-abd-31-7-milyon-dolar-guc-transformatoru-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/astor-abd-31-7-milyon-dolar-guc-transformatoru-sozlesmesi.webp";

export const metadata: Metadata = {
  title: { absolute: "ASTOR: 31,7 Milyon Dolarlık ABD Trafo Sözleşmesi" },
  description:
    seoAciklamasi("ASTOR, ABD’de yerleşik bir firma ile 31,7 milyon dolar tutarında güç transformatörü tedarik sözleşmesi imzaladı. Sözleşmenin TL karşılığı 1,48 milyar TL seviyesinde.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ASTOR ABD ile 31,7 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
    description:
      "ASTOR’un imzaladığı 31,7 milyon dolarlık güç transformatörü sözleşmesinin teslimatlarının 2028 ikinci çeyrekte tamamlanması planlanıyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ASTOR 31,7 milyon dolarlık güç transformatörü sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTOR ABD ile 31,7 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
    description:
      "ASTOR, ABD’de yerleşik müşteriyle 31,7 milyon dolarlık yeni iş ilişkisi açıkladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Sözleşme Tutarı",
    deger: "31,7 Mn $",
    aciklama: "Güç transformatörü tedariği",
  },
  {
    baslik: "TL Karşılığı",
    deger: "1,48 Mr TL",
    aciklama: "TCMB döviz alış kuruna göre",
  },
  {
    baslik: "Teslimat",
    deger: "2028/2Ç",
    aciklama: "2028 yılı ikinci çeyrek",
  },
  {
    baslik: "Hasılat Etkisi",
    deger: "%4,20",
    aciklama: "2025 yıl sonu hasılatına oranı",
  },
];

const haberDetaylari = [
  { etiket: "Şirket", deger: "Astor Enerji A.Ş." },
  { etiket: "Hisse Kodu", deger: "ASTOR" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "Açıklama Türü", deger: "Yeni İş İlişkisi" },
  { etiket: "Müşteri", deger: "ABD'de yerleşik firma" },
  { etiket: "Ürün", deger: "Güç transformatörü tedariği" },
  { etiket: "Sözleşme Tutarı", deger: "31.700.000 ABD doları" },
  { etiket: "TL Karşılığı", deger: "1.483.826.280 TL" },
  { etiket: "Kur", deger: "46,8084 TL/USD" },
  { etiket: "Teslimat Planı", deger: "2028 yılı ikinci çeyrek" },
  { etiket: "2025 Hasılata Oranı", deger: "%4,20" },
  { etiket: "Faaliyet Etkisi", deger: "Olumlu bekleniyor" },
];

const takipBasliklari = [
  "Teslimat takviminin ilerleyişi",
  "Sözleşmenin gelir tablosuna yansıma dönemi",
  "ABD pazarındaki yeni sipariş potansiyeli",
  "Şirketin ihracat tarafındaki yeni kontrat akışı",
  "2028 ikinci çeyreğe kadar üretim ve sevkiyat planı",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "ASTOR ABD ile 31,7 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
  description:
    "ASTOR, ABD’de yerleşik bir firma ile 31,7 milyon dolar tutarında güç transformatörü tedarik sözleşmesi imzaladı. Sözleşmenin TL karşılığı 1,48 milyar TL seviyesinde.",
  image: haberGorsel,
  datePublished: "2026-07-13T13:03:31+03:00",
  dateModified: "2026-07-13T13:03:31+03:00",
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

export default function AstorAbdGucTransformatoruPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/astor-abd-31-7-milyon-dolar-guc-transformatoru-sozlesmesi.webp"
              alt="ASTOR 31,7 milyon dolarlık güç transformatörü sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ASTOR ABD ile 31,7 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Yeni İş İlişkisi
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
                Astor Enerji A.Ş. (<strong>ASTOR</strong>), Amerika Birleşik
                Devletleri’nde yerleşik bir firma ile güç transformatörü
                tedariğine ilişkin yeni bir sözleşme imzaladığını açıkladı.
              </p>

              <p>
                KAP bildirimine göre sözleşmenin toplam bedeli{" "}
                <strong>31.700.000 ABD doları</strong>. Türkiye Cumhuriyet
                Merkez Bankası’nın sözleşme tarihindeki 46,8084 TL/USD alış kuru
                esas alındığında sözleşmenin TL karşılığı{" "}
                <strong>1.483.826.280 TL</strong> seviyesinde bulunuyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ASTOR, ABD’de yerleşik bir müşteri ile güç transformatörü
                  tedariği için sözleşme imzaladı. Teslimatların 2028 yılının
                  ikinci çeyreğinde gerçekleştirilmesi planlanıyor.
                </p>
              </Section>

              <Section title="Sözleşmenin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sözleşme tutarının şirketin 2025 yıl sonu hasılatına oranı
                  <strong> %4,20</strong> olarak açıklandı. Bu da tek başına
                  bakıldığında ASTOR için dikkat çeken büyüklükte bir iş hacmine
                  işaret ediyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Ayrıca haber, ASTOR’un ihracat odaklı sipariş akışını ve ABD
                  pazarındaki iş ilişkilerini güçlendirmesi açısından da pozitif
                  okunabilir.
                </p>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ASTOR tarafında döviz bazlı ve yüksek tutarlı bu sözleşme,
                  yeni iş ilişkisi başlıkları içinde güçlü bir gelişme olarak
                  öne çıkıyor. Sözleşmenin teslimat dönemi 2028 ikinci çeyrek
                  olarak planlandığı için finansallara katkı zamana yayılacak.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Kısa vadede haber akışı olumlu algılanabilir. Orta vadede ise
                  siparişin üretim, teslimat ve gelir tablosuna yansıma süreci
                  daha kritik olacak.
                </p>
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1632417"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ASTOR — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ASTOR ABD ile 31,7 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Sözleşmenin etkisi teslimat süreci ve
                finansallara yansımasıyla birlikte değerlendirilmelidir.
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
