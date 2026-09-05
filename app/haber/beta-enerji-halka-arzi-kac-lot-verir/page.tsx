import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Beta Enerji Halka Arzı Kaç Lot Verir? Kişi Başı Kaç Lot Düşer?",
  description:
    seoAciklamasi("Beta Enerji halka arzı kaç lot verir, kişi başı kaç lot düşer? 700 bin ile 1,2 milyon katılım senaryosuna göre Beta Enerji halka arzında tahmini lot ve tutar hesabı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-halka-arzi-kac-lot-verir",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/beta-enerji-halka-arz-kac-lot-verir-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/beta-enerji-halka-arz-kac-lot-verir-discover.webp"],
  },
};

const lotDagilimSenaryolari = [
  {
    katilim: "700.000",
    lot: "43 lot",
    tutar: "1.720 TL",
  },
  {
    katilim: "800.000",
    lot: "38 lot",
    tutar: "1.520 TL",
  },
  {
    katilim: "900.000",
    lot: "34 lot",
    tutar: "1.360 TL",
  },
  {
    katilim: "1.000.000",
    lot: "30 lot",
    tutar: "1.200 TL",
  },
  {
    katilim: "1.100.000",
    lot: "28 lot",
    tutar: "1.120 TL",
  },
  {
    katilim: "1.200.000",
    lot: "25 lot",
    tutar: "1.000 TL",
  },
];

const halkaArzBilgileri = [
  {
    baslik: "Halka Arz Fiyatı",
    deger: "40,00 TL",
  },
  {
    baslik: "Toplam Satışa Sunulacak Pay",
    deger: "60.750.000 lot",
  },
  {
    baslik: "Halka Arz Büyüklüğü",
    deger: "Yaklaşık 2,4 milyar TL",
  },
  {
    baslik: "Halka Açıklık Oranı",
    deger: "%15",
  },
  {
    baslik: "Sermaye Artırımı",
    deger: "55.000.000 lot",
  },
  {
    baslik: "Ortak Satışı",
    deger: "5.750.000 lot",
  },
  {
    baslik: "Pazar",
    deger: "Borsa İstanbul Yıldız Pazar",
  },
  {
    baslik: "Katılım Endeksi",
    deger: "Uygun",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Beta Enerji Halka Arzı Kaç Lot Verir? Kişi Başı Kaç Lot Düşer?",
  description:
    "Beta Enerji halka arzı kaç lot verir, kişi başı kaç lot düşer? 700 bin ile 1,2 milyon katılım senaryosuna göre Beta Enerji halka arzında tahmini lot ve tutar hesabı.",
  datePublished: "2026-06-12T10:00:00+03:00",
  dateModified: "2026-06-12T10:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-halka-arzi-kac-lot-verir",
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
  image:
    "https://www.hocaileborsa.com/beta-enerji-halka-arz-kac-lot-verir-discover.webp",
  inLanguage: "tr",
};

export default function BetaEnerjiHalkaArzKacLotVerirPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="w-full overflow-hidden bg-white">
            <Image
              src="/beta-enerji-halka-arz-kac-lot-verir-discover.webp"
              alt="Beta Enerji halka arzı kaç lot verir kişi başı kaç lot düşer"
              width={1200}
              height={900}
priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzı Kaç Lot Verir? Kişi Başı Kaç Lot Düşer?
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-12" className="text-sm text-slate-500">
                12 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Beta Enerji halka arzı için yatırımcıların en çok aradığı
                soruların başında “Beta Enerji halka arzı kaç lot verir?”,
                “Beta Enerji kişi başı kaç lot düşer?” ve “Beta Enerji kaç TL
                tutar?” soruları geliyor. Halka arz fiyatı 40,00 TL olarak
                belirlenen şirket için kişi başı düşebilecek lot miktarı,
                katılımcı sayısına göre değişecek.
              </p>

              <p>
                Aşağıdaki hesaplamalar, halka arza katılabilecek yatırımcı
                sayısına göre hazırlanmış tahmini lot dağılım senaryolarıdır.
                Kesin dağıtım sonucu, talep toplama süreci tamamlandıktan sonra
                belli olacaktır.
              </p>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Beta Enerji Halka Arzı Kaç Lot Düşer?
                </h2>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full min-w-[360px] text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">
                          Katılımcı Sayısı
                        </th>
                        <th className="px-4 py-3 font-semibold">Lot Sayısı</th>
                        <th className="px-4 py-3 font-semibold">Tutar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {lotDagilimSenaryolari.map((item) => (
                        <tr key={item.katilim}>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            {item.katilim}
                          </td>
                          <td className="px-4 py-3 font-bold text-emerald-700">
                            {item.lot}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {item.tutar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Görseldeki tahmini dağılım senaryosuna göre Beta Enerji halka
                arzında 700 bin katılım olması halinde yaklaşık 43 lot, 1 milyon
                katılım olması halinde yaklaşık 30 lot, 1,2 milyon katılım
                olması halinde ise yaklaşık 25 lot düşebilir.
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm font-medium leading-7 text-indigo-900 md:text-base">
                Beta Enerji halka arzında kendi katılım tahmininize göre kaç lot
                düşebileceğini hesaplamak için{" "}
                <Link
                  href="/halka-arz#talep-hesaplama"
                  className="font-bold text-indigo-700 underline underline-offset-4 hover:text-indigo-900"
                >
                  halka arz talep hesaplama aracını
                </Link>{" "}
                kullanabilirsiniz.
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Halka Arzı Kaç TL Tutar?
              </h2>

              <p>
                Beta Enerji halka arz fiyatı 40 TL olduğu için yatırımcının
                ödeyeceği toplam tutar, kendisine düşen lot sayısına göre
                değişecektir. 43 lotluk dağıtımda yaklaşık 1.720 TL, 38 lotluk
                dağıtımda yaklaşık 1.520 TL, 34 lotluk dağıtımda yaklaşık 1.360
                TL ödeme oluşur.
              </p>

              <p>
                Katılımcı sayısının 1 milyon kişiye ulaşması durumunda kişi başı
                yaklaşık 30 lot düşebilir. Bu senaryoda yatırımcının ödeyeceği
                tutar yaklaşık 1.200 TL olur. Katılımın 1,2 milyon kişiye
                çıkması halinde ise kişi başı yaklaşık 25 lot ve yaklaşık 1.000
                TL tutar oluşabilir.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Halka Arz Lot Hesabı Nasıl Yapılır?
              </h2>

              <p>
                Halka arzlarda kişi başı düşebilecek lot miktarı, satışa
                sunulan toplam pay miktarı ve halka arza katılan yatırımcı sayısı
                üzerinden hesaplanır. Katılım sayısı arttıkça kişi başına
                düşebilecek lot miktarı azalır.
              </p>

              <p>
                Beta Enerji halka arzında 700 bin ile 1,2 milyon kişi arasında
                değişen katılım senaryolarında kişi başı tahmini lot miktarı 43
                lot ile 25 lot arasında hesaplanmaktadır. Bu hesaplamalar kesin
                sonuç değil, olası talep düzeyine göre hazırlanmış tahmini
                dağılım tablosudur.
              </p>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Beta Enerji Halka Arz Bilgileri
                </h2>

                <div className="grid gap-3 sm:grid-cols-2">
                  {halkaArzBilgileri.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {item.baslik}
                      </p>
                      <p className="mt-1 text-base font-bold text-slate-900">
                        {item.deger}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Kaç Lot Verir?
              </h2>

              <p>
                Beta Enerji halka arzında düşük katılım senaryosunda kişi başı
                daha yüksek lot düşebilir. 700 bin katılımda yaklaşık 43 lot,
                800 bin katılımda yaklaşık 38 lot, 900 bin katılımda yaklaşık 34
                lot hesaplanmaktadır.
              </p>

              <p>
                Katılımın artması halinde dağıtım miktarı azalır. 1 milyon
                katılımda yaklaşık 30 lot, 1,1 milyon katılımda yaklaşık 28 lot,
                1,2 milyon katılımda ise yaklaşık 25 lot düşebileceği
                hesaplanmaktadır.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Kesin Lot Dağıtımı Ne Zaman Belli Olur?
              </h2>

              <p>
                Beta Enerji halka arzında kesin kişi başı lot dağıtımı, talep
                toplama sürecinin tamamlanmasının ardından açıklanacak resmi
                dağıtım sonuçlarıyla belli olacak. Bu nedenle haber içeriğinde
                yer alan lot sayıları tahmini senaryolardır.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Ne İş Yapıyor?
              </h2>

              <p>
                Beta Enerji ve Teknoloji, elektrik enerjisinin dönüştürülmesi ve
                iletilmesi alanında kullanılan transformatörlerin üretimine
                odaklanıyor. Şirket; güç transformatörleri, dağıtım trafoları,
                beton köşk ve yüksek gerilim anahtarlama sistemleri gibi ürün
                gruplarında faaliyet gösteriyor.
              </p>

                            <HaberIlgiliBolumler
                slug="beta-enerji-halka-arzi-kac-lot-verir"
                baslik="Beta Enerji Halka Arzı Kaç Lot Verir? Kişi Başı Kaç Lot Düşer?"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/beta-enerji-halka-arzi-kac-lot-verir" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}