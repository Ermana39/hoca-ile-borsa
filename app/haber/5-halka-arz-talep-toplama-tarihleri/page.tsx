import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = "2026-06-27T15:13:00+03:00";

export const metadata: Metadata = {
  title: "5 Halka Arzın Talep Toplama Tarihleri",
  description:
    "ORZAX, SOHO, EKIM, ISVEA ve GOLDA halka arz talep toplama tarihleri belli oldu. Hangi gün hangi halka arz var? Tüm takvim ve izahname linkleri.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/5-halka-arz-talep-toplama-tarihleri",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/5-halka-arz-talep-toplama-takvimi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/5-halka-arz-talep-toplama-takvimi.webp",
    ],
  },
};

const halkaArzTakvimi = [
  {
    sirket: "Orzaks İlaç ve Kimya Sanayi Ticaret A.Ş.",
    kod: "ORZAX",
    talepTarihi: "29-30 Haziran / 1 Temmuz 2026",
    gunler: "Pazartesi, Salı ve Çarşamba",
    fiyat: "69,00 TL",
    dagitim: "Bireysele eşit dağıtım",
    katilim: "Katılım endeksine uygun değil",
    izahnameHref:
      "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-san-tic",
  },
  {
    sirket: "Soho Giyim ve Enerji A.Ş.",
    kod: "SOHOE",
    talepTarihi: "30 Haziran / 1 Temmuz 2026",
    gunler: "Salı ve Çarşamba",
    fiyat: "15,00 TL",
    dagitim: "Tamamen eşit dağıtım",
    katilim: "Katılım endeksine uygun",
    izahnameHref: "/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji",
  },
  {
    sirket: "Ekim Turizm Ticaret ve Sanayi A.Ş.",
    kod: "EKIM",
    talepTarihi: "1-2-3 Temmuz 2026",
    gunler: "Çarşamba, Perşembe ve Cuma",
    fiyat: "30,26 TL",
    dagitim: "Bireysele eşit / yüksek başvuruluya oransal",
    katilim: "Katılım endeksine uygun değil",
    izahnameHref: "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san",
  },
  {
    sirket: "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.",
    kod: "ISVEA",
    talepTarihi: "1-2-3 Temmuz 2026",
    gunler: "Çarşamba, Perşembe ve Cuma",
    fiyat: "20,90 TL",
    dagitim: "Bireysele eşit dağıtım",
    katilim: "Katılım endeksine uygun değil",
    izahnameHref:
      "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi",
  },
  {
    sirket: "Golda Gıda Sanayi ve Ticaret A.Ş.",
    kod: "GOLDA",
    talepTarihi: "1-2 Temmuz 2026",
    gunler: "Çarşamba ve Perşembe",
    fiyat: "9,20 TL",
    dagitim: "Tamamen eşit dağıtım",
    katilim: "Katılım endeksine uygun",
    izahnameHref: "/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic",
  },
];

const gunBazliTakvim = [
  {
    tarih: "29 Haziran Pazartesi",
    sirketler: ["ORZAX"],
  },
  {
    tarih: "30 Haziran Salı",
    sirketler: ["ORZAX", "SOHOE"],
  },
  {
    tarih: "1 Temmuz Çarşamba",
    sirketler: ["ORZAX", "SOHOE", "EKIM", "ISVEA", "GOLDA"],
  },
  {
    tarih: "2 Temmuz Perşembe",
    sirketler: ["EKIM", "ISVEA", "GOLDA"],
  },
  {
    tarih: "3 Temmuz Cuma",
    sirketler: ["EKIM", "ISVEA"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "5 Halka Arzın Talep Toplama Tarihleri",
  description:
    "ORZAX, SOHO, EKIM, ISVEA ve GOLDA halka arz talep toplama tarihleri belli oldu. Hangi gün hangi halka arz var? Tüm takvim ve izahname linkleri.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/5-halka-arz-talep-toplama-tarihleri",
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
    "https://www.hocaileborsa.com/5-halka-arz-talep-toplama-takvimi.webp",
  inLanguage: "tr",
};

export default function HaberPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 md:aspect-[16/9]">
            <Image
              src="/5-halka-arz-talep-toplama-takvimi.webp"
              alt="5 halka arz talep toplama takvimi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              5 Halka Arzın Talep Toplama Tarihleri Belli Oldu
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                27 Haziran 2026 · 15:13
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
                Halka arz takviminde aynı haftaya denk gelen 5 şirket için talep
                toplama tarihleri yatırımcıların en çok aradığı başlıklardan biri
                oldu. ORZAX, SOHO, EKIM, ISVEA ve GOLDA halka arzlarında bazı
                günler çakışırken, özellikle 1 Temmuz Çarşamba günü takvimin en
                yoğun günü olarak öne çıkıyor.
              </p>

              <p>
                Bu haber sayfasında 29 Haziran Pazartesi ile 3 Temmuz Cuma
                arasındaki halka arz talep toplama takvimini gün gün
                özetledik. Ayrıca her şirket için halka arz fiyatı, dağıtım
                yöntemi, katılım endeksi bilgisi ve onaylı izahname sayfasına
                yönlendirme bağlantıları yer alıyor.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Gün Gün Halka Arz Talep Toplama Takvimi
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Tarih</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Toplayan Halka Arzlar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gunBazliTakvim.map((gun, index) => (
                        <tr
                          key={gun.tarih}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {gun.tarih}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {gun.sirketler.join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Şirket Bazında Talep Toplama Tarihleri
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Şirket</th>
                        <th className="px-4 py-3 text-left font-bold">Kod</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Tarihi
                        </th>
                        <th className="px-4 py-3 text-left font-bold">Gün</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Fiyat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {halkaArzTakvimi.map((item, index) => (
                        <tr
                          key={item.kod}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            <Link
                              href={item.izahnameHref}
                              className="text-blue-700 hover:text-blue-900 hover:underline"
                            >
                              {item.sirket}
                            </Link>
                          </td>
                          <td className="px-4 py-4 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.talepTarihi}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.gunler}
                          </td>
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.fiyat}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Hangi Gün Daha Yoğun?
                </h2>
                <p className="mt-2">
                  Takvime bakıldığında 1 Temmuz Çarşamba günü 5 halka arzın
                  aynı anda talep toplamaya devam ettiği görülüyor. Bu tarihte
                  ORZAX, SOHO, EKIM, ISVEA ve GOLDA için talep süreci açık
                  olacak. 2 Temmuz Perşembe günü EKIM, ISVEA ve GOLDA devam
                  ederken; 3 Temmuz Cuma günü EKIM ve ISVEA halka arzlarında
                  talep toplama süreci sürecek.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Halka Arzların Öne Çıkan Bilgileri
                </h2>

                <div className="mt-4 grid gap-4">
                  {halkaArzTakvimi.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.kod} halka arzı
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.sirket} halka arzında talep toplama{" "}
                        <strong>{item.talepTarihi}</strong> tarihlerinde,{" "}
                        <strong>{item.gunler}</strong> günlerinde yapılacak.
                        Halka arz fiyatı <strong>{item.fiyat}</strong> olarak
                        açıklandı. Dağıtım yöntemi <strong>{item.dagitim}</strong>
                        , katılım endeksi durumu ise <strong>{item.katilim}</strong>
                        olarak takip ediliyor.
                      </p>
                      <Link
                        href={item.izahnameHref}
                        className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.kod} onaylı izahname detaylarını incele
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yatırımcılar Nelere Dikkat Etmeli?
                </h2>
                <p className="mt-2">
                  Aynı haftada birden fazla halka arzın talep toplaması,
                  yatırımcıların nakit planlamasını daha önemli hale getirir.
                  Halka arzlara katılmadan önce fiyat, dağıtım yöntemi, katılım
                  endeksi durumu, fon kullanım alanları, finansal veriler,
                  taahhütler ve olası lot dağılımı birlikte değerlendirilmelidir.
                  Sadece talep toplama tarihine bakmak yeterli değildir; şirketin
                  onaylı izahnamesi ve finansal görünümü mutlaka incelenmelidir.
                </p>
              </section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Onaylı izahname sayfaları:
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {halkaArzTakvimi.map((item) => (
                    <li key={item.kod}>
                      <Link
                        href={item.izahnameHref}
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.kod} - {item.sirket}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <AuthorBox />

              <HaberIlgiliBolumler
                slug="5-halka-arz-talep-toplama-tarihleri"
                baslik="5 Halka Arzın Talep Toplama Tarihleri Belli Oldu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir. Halka arzlara katılmadan önce onaylı izahnameyi ve
                kendi risk profilinizi değerlendiriniz.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/5-halka-arz-talep-toplama-tarihleri" />
        </article>
      </div>
    </main>
  );
}
