import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = "2026-06-27T16:20:00+03:00";

const haberSlug = "halka-arzlarda-katilim-endeksi-uygun-olanlar";
const haberBaslik =
  "Halka Arzlarda Katılım Endeksi: Hangileri Uygun?";
const haberAciklama =
  "SOHO ve GOLDA katılım endeksine uygun görülürken; ISVEA, ORZAX ve Intercity uygun değil. Halka arzlarda katılım endeksi ne anlama geliyor?";
const haberGorsel = "/halka-arz-katilim-endeksi-tablosu.webp";
const katilimEndeksiRehberHref = "/rehber/katilim-endeksi-nedir";

export const metadata: Metadata = {
  title: "Halka Arzlarda Katılım Endeksi Durumu",
  description: haberAciklama,
  alternates: {
    canonical: `https://www.hocaileborsa.com/haber/${haberSlug}`,
  },
  openGraph: {
    type: "article",
    title: haberBaslik,
    description: haberAciklama,
    images: [
      {
        url: `https://www.hocaileborsa.com${haberGorsel}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: haberBaslik,
    description: haberAciklama,
    images: [`https://www.hocaileborsa.com${haberGorsel}`],
  },
};

const halkaArzlar = [
  {
    sirket: "Soho Giyim ve Enerji A.Ş.",
    marka: "SOHO",
    kod: "SOHOE",
    talepTarihi: "30 Haziran - 1 Temmuz 2026",
    fiyat: "15,00 TL",
    toplamLot: "100.000.000 lot",
    dagitim: "Tamamen eşit dağıtım",
    katilimDurumu: "Katılım endeksine uygun",
    uygun: true,
    yorum:
      "SOHO halka arzı, paylaşılan halka arz bilgilerinde katılım endeksine uygun olarak yer alıyor. Bu durum, katılım hassasiyetiyle işlem yapan yatırımcılar için ön eleme açısından olumlu bir başlık olarak değerlendirilebilir.",
    izahnameHref: "/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji",
  },
  {
    sirket: "Golda Gıda Sanayi ve Ticaret A.Ş.",
    marka: "GOLDA",
    kod: "GOLDA",
    talepTarihi: "1-2 Temmuz 2026",
    fiyat: "9,20 TL",
    toplamLot: "87.499.998 lot",
    dagitim: "Tamamen eşit dağıtım",
    katilimDurumu: "Katılım endeksine uygun",
    uygun: true,
    yorum:
      "GOLDA halka arzı da katılım endeksine uygun olan halka arzlar arasında bulunuyor. Gıda sektöründe faaliyet gösteren şirket için yatırımcıların yine fiyat, finansal yapı, fon kullanım alanları ve izahname detaylarını birlikte incelemesi gerekiyor.",
    izahnameHref: "/halka-arz/onayli-izahnameler/golda-gida-sanayi-ve-ticaret",
  },
  {
    sirket: "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.",
    marka: "ISVEA",
    kod: "ISVEA",
    talepTarihi: "1-2-3 Temmuz 2026",
    fiyat: "20,90 TL",
    toplamLot: "67.000.000 lot",
    dagitim: "Bireysele eşit dağıtım",
    katilimDurumu: "Katılım endeksine uygun değil",
    uygun: false,
    yorum:
      "ISVEA halka arzı, paylaşılan halka arz bilgilerinde katılım endeksine uygun değil olarak yer alıyor. Katılım hassasiyetiyle hareket eden yatırımcılar için bu bilgi özellikle talep kararı öncesinde dikkate alınması gereken başlıklardan biridir.",
    izahnameHref:
      "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri",
  },
  {
    sirket: "Orzaks İlaç ve Kimya Sanayi Ticaret A.Ş.",
    marka: "ORZAX",
    kod: "ORZAX",
    talepTarihi: "29-30 Haziran / 1 Temmuz 2026",
    fiyat: "69,00 TL",
    toplamLot: "52.500.000 lot",
    dagitim: "Bireysele eşit dağıtım",
    katilimDurumu: "Katılım endeksine uygun değil",
    uygun: false,
    yorum:
      "ORZAX halka arzı da katılım endeksine uygun değil olarak belirtiliyor. Şirketin halka arz fiyatı, finansal verileri ve fon kullanım planı yatırımcı açısından ayrıca incelenmeli; ancak katılım endeksi tarafında uygunluk bulunmadığı görülüyor.",
    izahnameHref:
      "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-sanayi-ticaret",
  },
  {
    sirket: "Ekim Turizm Ticaret ve Sanayi A.Ş.",
    marka: "INTERCITY",
    kod: "EKIM",
    talepTarihi: "1-2-3 Temmuz 2026",
    fiyat: "30,26 TL",
    toplamLot: "162.000.000 lot",
    dagitim: "Bireysele eşit / yüksek başvuruluya oransal",
    katilimDurumu: "Katılım endeksine uygun değil",
    uygun: false,
    yorum:
      "Intercity markasıyla bilinen Ekim Turizm halka arzı, katılım endeksine uygun olmayan halka arzlar arasında yer alıyor. Bu nedenle katılım endeksi kriterlerini önceleyen yatırımcıların bu durumu ayrıca not etmesi gerekiyor.",
    izahnameHref: "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san",
  },
];

const uygunHalkaArzlar = halkaArzlar.filter((item) => item.uygun);
const uygunOlmayanHalkaArzlar = halkaArzlar.filter((item) => !item.uygun);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: haberBaslik,
  description: haberAciklama,
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: `https://www.hocaileborsa.com/haber/${haberSlug}`,
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
  image: `https://www.hocaileborsa.com${haberGorsel}`,
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
          <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 md:aspect-[16/9]">
            <Image
              src={haberGorsel}
              alt="Halka arzlarda katılım endeksine uygun olanlar ve olmayanlar"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Halka Arzlarda Katılım Endeksi: Hangi Şirketler Uygun?
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Katılım Endeksi
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                27 Haziran 2026 · 16:20
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
                Halka arz takviminde aynı döneme denk gelen 5 şirket için
                yatırımcıların en çok merak ettiği başlıklardan biri katılım
                endeksi uygunluğu oldu. Paylaşılan halka arz bilgilerine göre{" "}
                <strong>SOHO</strong> ve <strong>GOLDA</strong> katılım
                endeksine uygun halka arzlar arasında yer alırken;{" "}
                <strong>ISVEA</strong>, <strong>ORZAX</strong> ve{" "}
                <strong>Intercity</strong> katılım endeksine uygun olmayan
                halka arzlar olarak öne çıkıyor.
              </p>

              <p>
                Katılım endeksi bilgisi, özellikle faizsiz finans ilkelerine
                göre yatırım yapmayı tercih eden yatırımcılar açısından önemli
                bir filtre görevi görür. Ancak bu bilgi tek başına yatırım
                kararı anlamına gelmez. Halka arz fiyatı, dağıtım yöntemi, fon
                kullanım alanları, şirketin finansal gücü ve izahname detayları
                birlikte değerlendirilmelidir.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Katılım Endeksi Nedir?
                </h2>

                <p className="mt-2">
                  Katılım endeksi, şirketlerin faaliyet alanı ve finansal
                  yapısının belirli katılım finans ilkelerine göre
                  değerlendirildiği bir uygunluk çerçevesidir. Bu kapsamda
                  şirketin ana faaliyet konusu, gelir yapısı, borçluluk durumu
                  ve bazı finansal oranları dikkate alınır. Amaç, katılım
                  hassasiyetiyle yatırım yapmak isteyen yatırımcıların şirketleri
                  daha kolay ayırt edebilmesini sağlamaktır.
                </p>

                <p className="mt-2">
                  Katılım endeksine uygunluk, şirketin her açıdan risksiz olduğu
                  anlamına gelmez. Bu bilgi sadece belirli kriterler açısından
                  uygunluk durumunu gösterir. Halka arzın ucuz ya da pahalı
                  olduğu, şirketin büyüme potansiyeli veya yatırımcıya sağlayacağı
                  getiri ayrı bir analiz konusudur.
                </p>

                <Link
                  href={katilimEndeksiRehberHref}
                  className="mt-3 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Katılım endeksi nedir? Rehber yazısını oku
                </Link>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Katılım Endeksine Uygun Olan Halka Arzlar
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-emerald-50 text-emerald-900">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Şirket</th>
                        <th className="px-4 py-3 text-left font-bold">Kod</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Tarihi
                        </th>
                        <th className="px-4 py-3 text-left font-bold">Fiyat</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Toplam Lot
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {uygunHalkaArzlar.map((item, index) => (
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
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.fiyat}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.toplamLot}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3">
                  Bu grupta yer alan SOHO ve GOLDA için katılım endeksi
                  uygunluğu yatırımcıların ön değerlendirmesinde olumlu bir
                  başlık olabilir. Yine de her iki halka arzda da şirketin
                  faaliyet alanı, finansalları, fon kullanım planı ve halka arz
                  sonrası büyüme stratejisi ayrı ayrı incelenmelidir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Katılım Endeksine Uygun Olmayan Halka Arzlar
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-red-50 text-red-900">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Şirket</th>
                        <th className="px-4 py-3 text-left font-bold">Kod</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Tarihi
                        </th>
                        <th className="px-4 py-3 text-left font-bold">Fiyat</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Toplam Lot
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {uygunOlmayanHalkaArzlar.map((item, index) => (
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
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.fiyat}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.toplamLot}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3">
                  ISVEA, ORZAX ve Intercity tarafında katılım endeksi uygunluğu
                  bulunmuyor. Bu durum, özellikle katılım finans hassasiyeti olan
                  yatırımcılar için doğrudan ayırt edici bir bilgi niteliği
                  taşır. Ancak katılım endeksine uygun olmamak, şirketin
                  finansal olarak mutlaka olumsuz olduğu anlamına gelmez; sadece
                  ilgili kriterler açısından uygunluk bulunmadığını gösterir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  5 Halka Arzın Öne Çıkan Bilgileri
                </h2>

                <div className="mt-4 grid gap-4">
                  {halkaArzlar.map((item) => (
                    <div
                      key={item.kod}
                      className={`rounded-xl border p-4 ${
                        item.uygun
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-red-200 bg-red-50"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.marka} halka arzı
                        </h3>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                            item.uygun
                              ? "bg-emerald-600 text-white"
                              : "bg-red-600 text-white"
                          }`}
                        >
                          {item.katilimDurumu}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.sirket} için talep toplama tarihi{" "}
                        <strong>{item.talepTarihi}</strong>, halka arz fiyatı{" "}
                        <strong>{item.fiyat}</strong>, toplam lot sayısı ise{" "}
                        <strong>{item.toplamLot}</strong> olarak takip ediliyor.
                        Dağıtım yöntemi <strong>{item.dagitim}</strong> şeklinde
                        açıklandı.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.yorum}
                      </p>

                      <Link
                        href={item.izahnameHref}
                        className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.marka} onaylı izahname detaylarını incele
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Katılım Endeksi Bilgisi Neden Önemli?
                </h2>

                <p className="mt-2">
                  Halka arzlarda yatırımcıların önemli bir bölümü sadece kaç lot
                  gelebileceğine veya kısa vadeli fiyat hareketine odaklanıyor.
                  Oysa katılım endeksi uygunluğu, özellikle hangi şirketlere
                  talep girileceği konusunda ön eleme yapan yatırımcılar için
                  temel bilgilerden biridir. Bu nedenle halka arz ekranında
                  katılım endeksi ibaresi, yatırım kararının ilk aşamasında
                  dikkat edilen başlıklardan biri haline gelir.
                </p>

                <p className="mt-2">
                  Bununla birlikte uygunluk bilgisinin yatırım analizinin yerine
                  geçmediği unutulmamalıdır. Katılım endeksine uygun olan bir
                  halka arzda fiyatlama pahalı olabilir, şirketin kârlılığı
                  zayıflayabilir veya halka arz sonrası piyasa koşulları olumsuz
                  seyredebilir. Aynı şekilde katılım endeksine uygun olmayan bir
                  şirketin faaliyetleri güçlü olabilir; ancak bu durum katılım
                  kriterleri açısından uygun olmadığı gerçeğini değiştirmez.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yatırımcılar Bu Veriyi Nasıl Okumalı?
                </h2>

                <p className="mt-2">
                  Katılım endeksi bilgisini değerlendirirken ilk adım, şirketin
                  uygun ya da uygun değil sınıflandırmasını görmek olmalıdır.
                  İkinci adımda ise halka arz fiyatı, piyasa değeri, finansal
                  performans, borçluluk, kâr marjı, fon kullanım alanları ve
                  dağıtım yöntemi incelenmelidir. Özellikle aynı hafta içinde
                  birden fazla halka arz olduğunda, nakit planlaması ve seçim
                  kriterleri daha önemli hale gelir.
                </p>

                <p className="mt-2">
                  Bu haftaki 5 halka arz içinde katılım endeksine uygun olan
                  şirket sayısı 2, uygun olmayan şirket sayısı ise 3 olarak öne
                  çıkıyor. Bu tablo, katılım hassasiyeti olan yatırımcılar için
                  SOHO ve GOLDA tarafını ayrı bir gruba alırken; ISVEA, ORZAX ve
                  Intercity tarafında uygunluk bulunmadığını gösteriyor.
                </p>
              </section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                <strong>Onaylı izahname sayfaları:</strong>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {halkaArzlar.map((item) => (
                    <li key={item.kod}>
                      <Link
                        href={item.izahnameHref}
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.marka} - {item.sirket}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <AuthorBox />

              <HaberIlgiliBolumler
                slug={haberSlug}
                baslik={haberBaslik}
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir. Halka arzlara katılmadan önce onaylı izahnameyi,
                katılım endeksi bilgisini, şirket finansallarını ve kendi risk
                profilinizi birlikte değerlendiriniz.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${haberSlug}`} />
        </article>
      </div>
    </main>
  );
}