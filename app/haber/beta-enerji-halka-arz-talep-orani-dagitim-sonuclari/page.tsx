import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const haberSlug = "beta-enerji-halka-arz-talep-orani-dagitim-sonuclari";
const haberBaslik =
  "Beta Enerji Halka Arzında Talep Oranı Açıklandı";
const haberAciklama =
  "Beta Enerji halka arzında toplam 14,08 kat talep oluştu. En yüksek talep oranı 88,66 kat ile yüksek başvuru kategorisinde görüldü.";
const haberGorsel = "/beta-enerji-halka-arz-talep-oranlari.webp";

export const metadata: Metadata = {
  title: "Beta Enerji Halka Arz Talep Oranı Açıklandı",
  description: seoAciklamasi(haberAciklama, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
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

const dagitimVerileri = [
  {
    grup: "Yurt İçi Bireysel",
    planlananPay: "30.375.000",
    planlananOran: "%50",
    talepBasvuru: "1.122.382",
    talepTutar: "2.989.118.880 TL",
    talepPayi: "%8,73",
    dagitimBasvuru: "1.103.933",
    dagitimTutar: "1.215.000.000 TL",
    dagitimOran: "%50",
    talepOrani: "2,46 kat",
    yorum:
      "Yurt içi bireysel yatırımcı tarafında dağıtılan tutarın yaklaşık 2,46 katı kadar talep geldi. Başvuru sayısının 1,1 milyonun üzerinde gerçekleşmesi, halka arza bireysel yatırımcı ilgisinin yüksek olduğunu gösterdi.",
  },
  {
    grup: "Yüksek Başvuru",
    planlananPay: "6.075.000",
    planlananOran: "%10",
    talepBasvuru: "20.669",
    talepTutar: "21.544.619.440 TL",
    talepPayi: "%62,95",
    dagitimBasvuru: "20.394",
    dagitimTutar: "243.000.000 TL",
    dagitimOran: "%10",
    talepOrani: "88,66 kat",
    yorum:
      "Halka arzda en güçlü talep yüksek başvuru kategorisinde oluştu. Bu grupta talep tutarı, dağıtım tutarının yaklaşık 88,66 katına ulaştı. Toplam talebin büyük kısmı bu kategoriden geldi.",
  },
  {
    grup: "Yurt İçi Kurumsal",
    planlananPay: "23.692.500",
    planlananOran: "%39",
    talepBasvuru: "389",
    talepTutar: "9.667.153.720 TL",
    talepPayi: "%28,25",
    dagitimBasvuru: "267",
    dagitimTutar: "947.700.000 TL",
    dagitimOran: "%39",
    talepOrani: "10,20 kat",
    yorum:
      "Yurt içi kurumsal yatırımcı kategorisinde de dağıtım tutarının üzerinde güçlü talep oluştu. 10,20 katlık talep oranı, kurumsal tarafta halka arza belirgin ilgi olduğunu ortaya koydu.",
  },
  {
    grup: "Beta Şirket Çalışanları",
    planlananPay: "607.500",
    planlananOran: "%1",
    talepBasvuru: "359",
    talepTutar: "24.387.440 TL",
    talepPayi: "%0,07",
    dagitimBasvuru: "359",
    dagitimTutar: "24.300.000 TL",
    dagitimOran: "%1",
    talepOrani: "1,00 kat",
    yorum:
      "Beta şirket çalışanları için ayrılan paya yakın seviyede talep geldi. Bu kategoride talep oranı yaklaşık 1,00 kat seviyesinde gerçekleşti.",
  },
];

const toplamVeri = {
  planlananPay: "60.750.000",
  planlananOran: "%100",
  talepBasvuru: "1.143.799",
  talepTutar: "34.225.279.480 TL",
  talepPayi: "%100",
  dagitimBasvuru: "1.124.953",
  dagitimTutar: "2.430.000.000 TL",
  dagitimOran: "%100",
  talepOrani: "14,08 kat",
};

const oneCikanlar = [
  "Beta Enerji halka arzında toplam 1.143.799 başvuru ile 34,2 milyar TL talep toplandı.",
  "Toplam dağıtım tutarı 2,43 milyar TL olurken, halka arz genelinde 14,08 kat talep oluştu.",
  "En yüksek talep oranı 88,66 kat ile yüksek başvuru kategorisinde gerçekleşti.",
  "Yurt içi bireysel yatırımcı tarafında 1.103.933 başvuruya dağıtım yapıldı.",
  "Yurt içi kurumsal yatırımcı kategorisinde talep oranı 10,20 kat olarak hesaplandı.",
];

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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 md:aspect-[16/9]">
            <Image
              src={haberGorsel}
              alt="Beta Enerji halka arz talep oranları ve dağıtım sonuçları"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzında Talep Oranı Açıklandı: Toplam 14,08 Kat Talep Geldi
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Talep Sonuçları
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

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                <strong>Beta Enerji halka arzı</strong> için açıklanan dağıtım
                ve talep verilerine göre halka arzda toplam{" "}
                <strong>34.225.279.480 TL</strong> talep toplandı. Toplam
                dağıtım tutarı ise <strong>2.430.000.000 TL</strong> oldu. Bu
                verilerle halka arz genelinde yaklaşık{" "}
                <strong>14,08 kat talep</strong> oluştu.
              </p>

              <p>
                Halka arzda en yüksek talep oranı{" "}
                <strong>yüksek başvuru</strong> kategorisinde görüldü. Bu
                kategoride <strong>21.544.619.440 TL</strong> talebe karşılık{" "}
                <strong>243.000.000 TL</strong> dağıtım yapılırken, talep oranı{" "}
                <strong>88,66 kat</strong> olarak hesaplandı.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Beta Enerji Halka Arzında Öne Çıkan Rakamlar
                </h2>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">
                      Toplam Talep
                    </p>
                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      34,2 milyar TL
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">
                      Toplam Dağıtım
                    </p>
                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      2,43 milyar TL
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-700">
                      Toplam Talep Oranı
                    </p>
                    <p className="mt-1 text-2xl font-bold text-emerald-800">
                      14,08 kat
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-blue-700">
                      Dağıtım Yapılan Başvuru
                    </p>
                    <p className="mt-1 text-2xl font-bold text-blue-800">
                      1.124.953
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Kategori Kategori Beta Enerji Talep Oranları
                </h2>

                <p className="mt-2">
                  Talep oranı, her yatırımcı grubunda gelen talep tutarının o
                  gruba yapılan dağıtım tutarına bölünmesiyle hesaplanır. Bu
                  hesaplama halka arzda hangi kategoride talebin daha yoğun
                  olduğunu göstermesi açısından önemlidir.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">
                          Yatırımcı Grubu
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Tutarı
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Dağıtım Tutarı
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dagitimVerileri.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.grup}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.talepTutar}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.dagitimTutar}
                          </td>
                          <td className="px-4 py-4 font-bold text-emerald-700">
                            {item.talepOrani}
                          </td>
                        </tr>
                      ))}

                      <tr className="bg-emerald-50">
                        <td className="px-4 py-4 font-bold text-slate-900">
                          Toplam
                        </td>
                        <td className="px-4 py-4 font-bold text-slate-900">
                          {toplamVeri.talepTutar}
                        </td>
                        <td className="px-4 py-4 font-bold text-slate-900">
                          {toplamVeri.dagitimTutar}
                        </td>
                        <td className="px-4 py-4 font-bold text-emerald-800">
                          {toplamVeri.talepOrani}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yurt İçi Bireysel Yatırımcıda 2,46 Kat Talep Oluştu
                </h2>

                <p className="mt-2">
                  Yurt içi bireysel yatırımcı kategorisine{" "}
                  <strong>30.375.000 pay</strong> ayrıldı. Bu kategori için
                  planlanan tahsisat oranı <strong>%50</strong> oldu. Talep
                  tarafında <strong>1.122.382 başvuru</strong> ile{" "}
                  <strong>2.989.118.880 TL</strong> talep geldi.
                </p>

                <p className="mt-2">
                  Dağıtım aşamasında <strong>1.103.933 başvuruya</strong>{" "}
                  karşılık <strong>1.215.000.000 TL</strong> dağıtım yapıldı.
                  Böylece yurt içi bireysel yatırımcı tarafında talep oranı
                  yaklaşık <strong>2,46 kat</strong> olarak hesaplandı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yüksek Başvuru Kategorisi 88,66 Kat Talep ile Öne Çıktı
                </h2>

                <p className="mt-2">
                  Beta Enerji halka arzında talebin en yoğun görüldüğü kategori
                  yüksek başvuru grubu oldu. Bu kategoriye{" "}
                  <strong>6.075.000 pay</strong> ayrılırken, planlanan tahsisat
                  oranı <strong>%10</strong> olarak belirlendi.
                </p>

                <p className="mt-2">
                  Yüksek başvuru kategorisinde <strong>20.669 başvuru</strong>{" "}
                  ile toplam <strong>21.544.619.440 TL</strong> talep geldi.
                  Dağıtımda ise <strong>20.394 başvuruya</strong>{" "}
                  <strong>243.000.000 TL</strong> tutarında dağıtım yapıldı. Bu
                  verilerle talep oranı yaklaşık <strong>88,66 kat</strong>{" "}
                  seviyesine ulaştı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yurt İçi Kurumsal Tarafta 10,20 Kat Talep Geldi
                </h2>

                <p className="mt-2">
                  Yurt içi kurumsal yatırımcı kategorisi için{" "}
                  <strong>23.692.500 pay</strong> ayrıldı. Bu kategori halka arz
                  içinde <strong>%39</strong> planlanan tahsisat oranına sahip
                  oldu. Kurumsal tarafta <strong>389 başvuru</strong> ile{" "}
                  <strong>9.667.153.720 TL</strong> talep toplandı.
                </p>

                <p className="mt-2">
                  Dağıtım sonucunda <strong>267 başvuruya</strong>{" "}
                  <strong>947.700.000 TL</strong> dağıtım yapıldı. Böylece yurt
                  içi kurumsal yatırımcı kategorisinde talep oranı yaklaşık{" "}
                  <strong>10,20 kat</strong> olarak hesaplandı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Beta Şirket Çalışanlarında Talep Oranı 1,00 Kat Oldu
                </h2>

                <p className="mt-2">
                  Beta şirket çalışanları için ayrılan pay adedi{" "}
                  <strong>607.500</strong> oldu. Bu kategori toplam halka arz
                  içinde <strong>%1</strong> tahsisat oranına sahipti. Çalışanlar
                  kategorisinde <strong>359 başvuru</strong> ile{" "}
                  <strong>24.387.440 TL</strong> talep geldi.
                </p>

                <p className="mt-2">
                  Dağıtımda aynı sayıda başvuruya{" "}
                  <strong>24.300.000 TL</strong> tutarında dağıtım yapıldı.
                  Böylece bu kategoride talep oranı yaklaşık{" "}
                  <strong>1,00 kat</strong> seviyesinde gerçekleşti.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Planlanan Tahsisat ve Dağıtım Detayları
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-blue-50 text-blue-900">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">
                          Yatırımcı Grubu
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Planlanan Pay
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Planlanan Oran
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Dağıtım Başvuru
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Dağıtım Oranı
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dagitimVerileri.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.grup}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.planlananPay}
                          </td>
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.planlananOran}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.dagitimBasvuru}
                          </td>
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.dagitimOran}
                          </td>
                        </tr>
                      ))}

                      <tr className="bg-slate-900 text-white">
                        <td className="px-4 py-4 font-bold">Toplam</td>
                        <td className="px-4 py-4 font-bold">
                          {toplamVeri.planlananPay}
                        </td>
                        <td className="px-4 py-4 font-bold">
                          {toplamVeri.planlananOran}
                        </td>
                        <td className="px-4 py-4 font-bold">
                          {toplamVeri.dagitimBasvuru}
                        </td>
                        <td className="px-4 py-4 font-bold">
                          {toplamVeri.dagitimOran}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Bu Veriler Ne Anlama Geliyor?
                </h2>

                <p className="mt-2">
                  Beta Enerji halka arzında toplam talebin halka arz
                  büyüklüğünün üzerinde gerçekleşmesi, yatırımcı ilgisinin güçlü
                  olduğunu gösteriyor. Özellikle yüksek başvuru ve yurt içi
                  kurumsal yatırımcı kategorilerinde oluşan yüksek talep oranı,
                  halka arzın sadece bireysel yatırımcı tarafında değil, daha
                  büyük ölçekli yatırımcı gruplarında da dikkat çektiğini ortaya
                  koyuyor.
                </p>

                <p className="mt-2">
                  Ancak yüksek talep oranı, hisse senedinin borsada işlem
                  görmeye başladıktan sonra kesin olarak yükseleceği anlamına
                  gelmez. Halka arz sonrası fiyat hareketi; genel piyasa
                  koşulları, yatırımcı iştahı, şirketin finansal görünümü,
                  halka arz fiyatlaması ve işlem göreceği dönemdeki risk algısına
                  göre şekillenir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Öne Çıkan Başlıklar
                </h2>

                <ul className="mt-3 list-inside list-disc space-y-2">
                  {oneCikanlar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yatırımcılar Bu Tabloyu Nasıl Okumalı?
                </h2>

                <p className="mt-2">
                  Halka arz sonuçlarında sadece toplam talep oranına bakmak
                  yeterli değildir. Talebin hangi yatırımcı grubundan geldiği,
                  dağıtımın hangi kategorilerde yoğunlaştığı ve başvuru sayısının
                  dağıtıma nasıl yansıdığı birlikte incelenmelidir.
                </p>

                <p className="mt-2">
                  Beta Enerji örneğinde toplam talep oranı 14,08 kat seviyesinde
                  olurken, yüksek başvuru kategorisinde bu oran 88,66 kata kadar
                  yükseldi. Bu fark, talebin yatırımcı grupları arasında eşit
                  dağılmadığını ve bazı kategorilerde çok daha yoğun talep
                  oluştuğunu gösteriyor.
                </p>
              </section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                <strong>Hesaplama notu:</strong> Talep oranları, ilgili yatırımcı
                grubundaki talep tutarının dağıtım tutarına bölünmesiyle
                hesaplanmıştır. Dağıtım tutarları, pay adedi ve halka arz fiyatı
                üzerinden kontrol edilerek tabloya işlenmiştir.
              </div>

              <AuthorBox />

              <HaberIlgiliBolumler slug={haberSlug} baslik={haberBaslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir. Halka arz sonuçları yatırımcı ilgisini göstermesi
                açısından önemlidir; ancak borsada işlem görmeye başladıktan
                sonraki fiyat hareketi için tek başına yeterli gösterge olarak
                değerlendirilmemelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${haberSlug}`} />
        </article>
      </div>
    </main>
  );
}
