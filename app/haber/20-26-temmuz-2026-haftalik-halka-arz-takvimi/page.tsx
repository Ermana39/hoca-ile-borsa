import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

const slug = "20-26-temmuz-2026-haftalik-halka-arz-takvimi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/spk-4-yeni-halka-arz-onayi-albayrak-masfen-metgun-kardemir.webp";
const yayinTarihi = "2026-07-20T09:00:00+03:00";
const yayinTarihiEtiket = "20 Temmuz 2026";

export const metadata: Metadata = {
  title: {
    absolute: "20-26 Temmuz Halka Arz Takvimi: METEN, KARCL, MASFN",
  },
  description:
    seoAciklamasi("20-26 Temmuz 2026 haftalık halka arz takvimi: Metgün Enerji, Kardemir Çelik, Masfen Enerji ve Albayrak Hazır Beton talep toplama tarihleri, fiyat ve lot bilgileri.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "20-26 Temmuz 2026 Haftalık Halka Arz Takvimi: METEN, KARCL, MASFN, ALBTN",
    description:
      "Bu hafta METEN, KARCL, MASFN ve ALBTN halka arzlarında talep toplama süreci izlenecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "20-26 Temmuz 2026 haftalık halka arz takvimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "20-26 Temmuz 2026 Haftalık Halka Arz Takvimi: METEN, KARCL, MASFN, ALBTN",
    description:
      "Metgün Enerji, Kardemir Çelik, Masfen Enerji ve Albayrak Hazır Beton talep toplama tarihleri.",
    images: [haberGorsel],
  },
};

const halkaArzlar = [
  {
    kod: "METEN",
    sirket: "Metgün Enerji Yatırımları A.Ş.",
    tarih: "20-21-22 Temmuz",
    gunler: "Pazartesi-Salı-Çarşamba",
    saat: "09.00-17.00",
    fiyat: "20,00 TL",
    toplamLot: "135.579.000 lot",
    buyukluk: "2.711.580.000 TL",
    link: "/halka-arz/onayli-izahnameler/metgun-enerji-yatirimlari",
  },
  {
    kod: "KARCL",
    sirket: "Kardemir Çelik Sanayi A.Ş.",
    tarih: "22-23-24 Temmuz",
    gunler: "Çarşamba-Perşembe-Cuma",
    saat: "09.00-17.00",
    fiyat: "35,00 TL",
    toplamLot: "128.000.000 lot",
    buyukluk: "4.480.000.000 TL",
    link: "/halka-arz/onayli-izahnameler/kardemir-celik-sanayi",
  },
  {
    kod: "MASFN",
    sirket: "Masfen Enerji A.Ş.",
    tarih: "22-23-24 Temmuz",
    gunler: "Çarşamba-Perşembe-Cuma",
    saat: "09.00-17.00",
    fiyat: "45,68 TL",
    toplamLot: "85.000.000 lot",
    buyukluk: "3.882.800.000 TL",
    link: "/halka-arz/onayli-izahnameler/masfen-enerji",
  },
  {
    kod: "ALBTN",
    sirket: "Albayrak Hazır Beton San. ve Tic. A.Ş.",
    tarih: "22-23 Temmuz",
    gunler: "Çarşamba-Perşembe",
    saat: "10.30-13.00",
    fiyat: "38,60 TL",
    toplamLot: "70.000.000 lot",
    buyukluk: "2.702.000.000 TL",
    link: "/halka-arz/onayli-izahnameler/albayrak-hazir-beton-san-ve-tic",
  },
];

const haftaAkisi = [
  {
    gun: "20 Temmuz Pazartesi",
    aciklama: "METEN halka arzında talep toplama süreci başlıyor.",
  },
  {
    gun: "21 Temmuz Salı",
    aciklama: "METEN talep toplama süreci ikinci gününde devam ediyor.",
  },
  {
    gun: "22 Temmuz Çarşamba",
    aciklama:
      "METEN son talep gününe girerken KARCL, MASFN ve ALBTN talep toplamaya başlıyor.",
  },
  {
    gun: "23 Temmuz Perşembe",
    aciklama:
      "KARCL, MASFN ve ALBTN talep toplama süreçleri devam ediyor; ALBTN için son talep günü.",
  },
  {
    gun: "24 Temmuz Cuma",
    aciklama: "KARCL ve MASFN halka arzlarında talep toplama süreci tamamlanıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "20-26 Temmuz 2026 Haftalık Halka Arz Takvimi: METEN, KARCL, MASFN, ALBTN",
  description:
    "20-26 Temmuz 2026 haftalık halka arz takviminde Metgün Enerji, Kardemir Çelik, Masfen Enerji ve Albayrak Hazır Beton talep toplama süreçleri yer alıyor.",
  image: haberGorsel,
  datePublished: yayinTarihi,
  dateModified: yayinTarihi,
  url: haberUrl,
  mainEntityOfPage: haberUrl,
  inLanguage: "tr-TR",
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
  children: React.ReactNode;
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

export default function HaftalikHalkaArzTakvimiPage() {
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
              src="/spk-4-yeni-halka-arz-onayi-albayrak-masfen-metgun-kardemir.webp"
              alt="20-26 Temmuz 2026 haftalık halka arz takvimi"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              20-26 Temmuz 2026 Haftalık Halka Arz Takvimi: METEN, KARCL, MASFN
              ve ALBTN
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Halka Arz Takvimi
              </span>
              <time dateTime={yayinTarihi} className="text-sm text-slate-500">
                {yayinTarihiEtiket}
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
                20-26 Temmuz 2026 haftasında halka arz takviminin ana gündemi
                dört yeni talep toplama süreci olacak. Metgün Enerji{" "}
                <strong>METEN</strong> koduyla 20-21-22 Temmuz tarihlerinde,
                Kardemir Çelik <strong>KARCL</strong> koduyla 22-23-24 Temmuz
                tarihlerinde, Masfen Enerji <strong>MASFN</strong> koduyla
                22-23-24 Temmuz tarihlerinde ve Albayrak Hazır Beton{" "}
                <strong>ALBTN</strong> koduyla 22-23 Temmuz tarihlerinde talep
                toplayacak.
              </p>

              <p>
                Haftanın en yoğun günü 22 Temmuz Çarşamba olacak. Bu tarihte
                METEN son talep gününe girerken KARCL, MASFN ve ALBTN tarafında
                talep toplama süreçleri başlayacak.
              </p>

              <Section title="Bu hafta talep toplayacak halka arzlar">
                <div className="overflow-x-auto">
                  <table className="min-w-[780px] w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Hisse</th>
                        <th className="px-4 py-3 text-left font-bold">Şirket</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Tarihi
                        </th>
                        <th className="px-4 py-3 text-left font-bold">Saat</th>
                        <th className="px-4 py-3 text-left font-bold">Fiyat</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Toplam Lot
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {halkaArzlar.map((item, index) => (
                        <tr
                          key={item.kod}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            <Link
                              href={item.link}
                              className="hover:text-blue-600"
                            >
                              {item.sirket}
                            </Link>
                          </td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">
                            {item.tarih}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.saat}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.fiyat}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.toplamLot}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Gün gün haftalık halka arz akışı">
                <div className="space-y-3">
                  {haftaAkisi.map((item) => (
                    <div
                      key={item.gun}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-slate-900">
                        {item.gun}
                      </div>
                      <div className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Halka arzların kısa özeti">
                <div className="grid gap-4 sm:grid-cols-2">
                  {halkaArzlar.map((item) => (
                    <Link
                      key={item.kod}
                      href={item.link}
                      className="rounded-2xl border border-blue-200 bg-blue-50 p-4 transition hover:border-blue-300 hover:bg-blue-100"
                    >
                      <div className="text-2xl font-bold text-blue-950">
                        {item.kod}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-blue-900">
                        {item.sirket}
                      </div>
                      <div className="mt-3 space-y-1 text-sm leading-6 text-blue-900">
                        <div>Talep: {item.tarih}</div>
                        <div>Fiyat: {item.fiyat}</div>
                        <div>Büyüklük: {item.buyukluk}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>

              <Section title="Yatırımcılar bu hafta neye dikkat etmeli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Aynı hafta içinde dört halka arzın talep toplaması nedeniyle
                  nakit planlaması, dağıtım yöntemi, katılım endeksi durumu,
                  toplam lot sayısı ve halka arz büyüklüğü birlikte izlenmeli.
                  Özellikle 22-23 Temmuz tarihlerinde takvim yoğunlaşacağı için
                  yatırımcıların emir saatlerini ve aracı kurum duyurularını
                  ayrıca kontrol etmesi gerekir.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Güncel takvimde METEN, KARCL, MASFN ve ALBTN için onaylı
                  izahname sayfaları üzerinden fiyat, fon kullanımı, finansal
                  görünüm ve tahsisat başlıkları ayrıca incelenebilir.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">İlgili Sayfa</div>
                <Link
                  href="/halka-arz/takvim"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  Güncel Halka Arz Takvimi
                </Link>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="20-26 Temmuz 2026 Haftalık Halka Arz Takvimi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Halka arz tarihleri, saatleri ve başvuru koşulları
                şirketlerin onaylı izahname, satış duyurusu, KAP ve aracı kurum
                açıklamalarıyla birlikte kontrol edilmelidir.
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
