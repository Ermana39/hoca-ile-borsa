import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href =
  "/haber/17-temmuz-2026-son-halka-arzlar-gun-sonu-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli =
  "/17-temmuz-2026-8-halka-arz-gun-sonu-degerlendirmesi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "Son Halka Arzların Gün Sonu Kapanış Değerlendirmesi (17 Temmuz 2026)";
const seoBaslik = "17 Temmuz Halka Arz Kapanış Değerlendirmesi";
const aciklama =
  "Şa-Ra İnşaat, Saat ve Saat, İsvea Banyo, Golda Gıda, Beta Enerji, Soho Giyim, Orzax İlaç ve Ekim Turizm için 17 Temmuz 2026 kapanış fiyatları, halka arz getirileri ve tavan-taban lotları.";

const halkaArzlar = [
  {
    kod: "SARAE",
    sirket: "Şa-Ra İnşaat",
    arzFiyati: "70,00 TL",
    kapanis: "77,00 TL",
    getiri: "+%10,00",
    toplamElDegistirme: "%1,65",
    gunIciLot: "1.471.611",
    kuyruk: "Tavan: 79.707.073 lot",
    piyasaDegeri: "6.853.000.000,00 TL",
    gunlukOranlar: ["1. gün %1,65"],
  },
  {
    kod: "GOLDA",
    sirket: "Golda Gıda",
    arzFiyati: "9,20 TL",
    kapanis: "17,90 TL",
    getiri: "+%94,57",
    toplamElDegistirme: "%106,16",
    gunIciLot: "36.395.871",
    kuyruk: "Tavan: 10.429.398 lot",
    piyasaDegeri: "1.566.249.964,20 TL",
    gunlukOranlar: [
      "1. gün %1,02",
      "2. gün %3,00",
      "3. gün %4,00",
      "4. gün %3,83",
      "5. gün %5,39",
      "6. gün %47,32",
      "7. gün %41,60",
    ],
  },
  {
    kod: "ISVEA",
    sirket: "İsvea Banyo",
    arzFiyati: "20,90 TL",
    kapanis: "27,52 TL",
    getiri: "+%31,67",
    toplamElDegistirme: "%237,54",
    gunIciLot: "146.390.143",
    kuyruk: "Tavan: 5.910.368 lot",
    piyasaDegeri: "1.843.840.000,00 TL",
    gunlukOranlar: [
      "1. gün %1,01",
      "2. gün %1,81",
      "3. gün %4,08",
      "4. gün %12,15",
      "5. gün %218,49",
    ],
  },
  {
    kod: "SSAAT",
    sirket: "Saat ve Saat",
    arzFiyati: "56,00 TL",
    kapanis: "45,36 TL",
    getiri: "-%19,00",
    toplamElDegistirme: "%208,25",
    gunIciLot: "81.320.955",
    kuyruk: "Taban: 398.410 lot",
    piyasaDegeri: "3.643.947.790,56 TL",
    gunlukOranlar: ["1. gün %107,02", "2. gün %101,23"],
  },
  {
    kod: "BETAE",
    sirket: "Beta Enerji",
    arzFiyati: "40,00 TL",
    kapanis: "90,75 TL",
    getiri: "+%126,88",
    toplamElDegistirme: "%623,71",
    gunIciLot: "115.779.776",
    kuyruk: "Tavan/taban lotu yok",
    piyasaDegeri: "5.513.062.500,00 TL",
    gunlukOranlar: [
      "1. gün %0,12",
      "2. gün %0,28",
      "3. gün %1,50",
      "4. gün %3,44",
      "5. gün %6,63",
      "6. gün %52,69",
      "7. gün %159,86",
      "8. gün %54,35",
      "9. gün %82,01",
      "10. gün %61,85",
      "11. gün %10,40",
      "12. gün %190,58",
    ],
  },
  {
    kod: "SOHOE",
    sirket: "Soho Giyim",
    arzFiyati: "15,00 TL",
    kapanis: "12,91 TL",
    getiri: "-%13,93",
    toplamElDegistirme: "%1.162,52",
    gunIciLot: "43.731.821",
    kuyruk: "Tavan/taban lotu yok",
    piyasaDegeri: "1.291.000.000,00 TL",
    gunlukOranlar: [
      "1. gün %196,37",
      "2. gün %252,34",
      "3. gün %169,65",
      "4. gün %115,10",
      "5. gün %143,42",
      "6. gün %116,32",
      "7. gün %68,77",
      "8. gün %56,82",
      "9. gün %43,73",
    ],
  },
  {
    kod: "ORZAX",
    sirket: "Orzax İlaç",
    arzFiyati: "69,00 TL",
    kapanis: "100,30 TL",
    getiri: "+%45,36",
    toplamElDegistirme: "%779,31",
    gunIciLot: "57.860.047",
    kuyruk: "Tavan/taban lotu yok",
    piyasaDegeri: "5.265.750.000,00 TL",
    gunlukOranlar: [
      "1. gün %53,10",
      "2. gün %180,84",
      "3. gün %105,78",
      "4. gün %75,84",
      "5. gün %66,22",
      "6. gün %39,48",
      "7. gün %147,84",
      "8. gün %110,21",
    ],
  },
  {
    kod: "EKIM",
    sirket: "Ekim Turizm",
    arzFiyati: "30,26 TL",
    kapanis: "23,48 TL",
    getiri: "-%22,41",
    toplamElDegistirme: "%385,07",
    gunIciLot: "42.747.374",
    kuyruk: "Tavan/taban lotu yok",
    piyasaDegeri: "3.803.760.000,00 TL",
    gunlukOranlar: [
      "1. gün %135,72",
      "2. gün %56,02",
      "3. gün %52,10",
      "4. gün %46,61",
      "5. gün %68,23",
      "6. gün %26,39",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: seoBaslik },
  description: seoAciklamasi(aciklama, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: baslik,
    description: aciklama,
    url: canonical,
    siteName: "Hoca İle Borsa",
    images: [
      {
        url: `${siteUrl}${haberGorseli}`,
        width: 1200,
        height: 675,
        alt: "8 halka arz 17 Temmuz 2026 gün sonu değerlendirmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: baslik,
    description: aciklama,
    images: [`${siteUrl}${haberGorseli}`],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: baslik,
    description: aciklama,
    datePublished: haberSaati,
    dateModified: haberSaati,
    url: canonical,
    mainEntityOfPage: canonical,
    inLanguage: "tr",
    image: `${siteUrl}${haberGorseli}`,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/yazar/erman-hoca#person`,
      name: "Erman Hoca",
      url: `${siteUrl}/yazar/erman-hoca`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Hoca İle Borsa",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon-512.png`,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Şa-Ra İnşaat ilk işlem gününü kaç TL'den kapattı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Şa-Ra İnşaat (SARAE) ilk işlem gününü 77,00 TL tavan fiyattan ve 79.707.073 lot tavanda bekleyen alış emriyle kapattı.",
        },
      },
      {
        "@type": "Question",
        name: "Saat ve Saat hissesi günü kaç lotla tabanda kapattı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saat ve Saat (SSAAT) 45,36 TL taban fiyatta 398.410 lot satış emriyle günü tamamladı.",
        },
      },
      {
        "@type": "Question",
        name: "İsvea Banyo günü nasıl tamamladı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İsvea Banyo (ISVEA) taban başladığı günü 27,52 TL tavan fiyatta kapattı ve tabandan tavana yaklaşık yüzde 22 yükseldi.",
        },
      },
    ],
  },
];

export default function HalkaArzlarGunSonuDegerlendirmesiPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src={haberGorseli}
              alt="8 halka arz 17 Temmuz 2026 gün sonu değerlendirmesi"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-5 md:p-9">
            <header>
              <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz Kapanış Değerlendirmesi
              </span>
              <h1 className="mt-4 text-2xl font-bold leading-tight text-slate-950 md:text-4xl">
                {baslik}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                17 Temmuz 2026 kapanışında son halka arzların görünümü belirgin
                şekilde ayrıştı. Şa-Ra İnşaat ilk işlem gününü tavanla
                tamamlarken Saat ve Saat yeniden tabanda kaldı. İsvea Banyo
                tabandan tavana döndü, Golda Gıda ise Bank of America alımlarıyla
                seansın başında tavana yerleşti.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <time dateTime={haberSaati}>{haberTarihi}</time>
                <span className="text-slate-300">·</span>
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold hover:text-blue-700"
                >
                  Erman Hoca
                </Link>
              </div>
            </header>

            <section className="mt-7 border-l-4 border-blue-600 bg-blue-50 p-5">
              <h2 className="text-xl font-bold text-blue-950">Günün özeti</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-blue-950 md:text-base">
                <li>
                  <strong>SARAE:</strong> İlk işlem gününü 77,00 TL tavan
                  fiyattan, 79.707.073 lot alış kuyruğuyla kapattı.
                </li>
                <li>
                  <strong>SSAAT:</strong> 45,36 TL taban fiyatta 398.410 lot
                  satış emriyle günü tamamladı.
                </li>
                <li>
                  <strong>ISVEA:</strong> Taban başladığı seansta tavana döndü;
                  gün içindeki dipten kapanışa yaklaşık %22 prim yaptı.
                </li>
                <li>
                  <strong>GOLDA:</strong> Bank of America alımlarıyla seans
                  başında tavana yerleşti ve 17,90 TL&apos;de kapandı.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-950">
                8 halka arzın gün sonu kapanış tablosu
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                Getiri oranları halka arz fiyatına göre hesaplanan toplam
                değişimi, el değiştirme oranı ise işlem günleri boyunca oluşan
                kümülatif lot hareketini gösteriyor.
              </p>

              <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-3 py-3 font-semibold">Hisse</th>
                      <th className="px-3 py-3 font-semibold">Arz fiyatı</th>
                      <th className="px-3 py-3 font-semibold">Kapanış</th>
                      <th className="px-3 py-3 font-semibold">Getiri</th>
                      <th className="px-3 py-3 font-semibold">Toplam el değişimi</th>
                      <th className="px-3 py-3 font-semibold">Gün içi lot</th>
                      <th className="px-3 py-3 font-semibold">Tavan/taban lot</th>
                      <th className="px-3 py-3 font-semibold">Halka açık piyasa değeri</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {halkaArzlar.map((halkaArz) => (
                      <tr key={halkaArz.kod}>
                        <th className="px-3 py-3 font-semibold text-slate-950">
                          {halkaArz.kod}
                          <span className="block text-xs font-normal text-slate-500">
                            {halkaArz.sirket}
                          </span>
                        </th>
                        <td className="px-3 py-3">{halkaArz.arzFiyati}</td>
                        <td className="px-3 py-3 font-semibold">{halkaArz.kapanis}</td>
                        <td
                          className={`px-3 py-3 font-bold ${
                            halkaArz.getiri.startsWith("+")
                              ? "text-emerald-700"
                              : "text-red-700"
                          }`}
                        >
                          {halkaArz.getiri}
                        </td>
                        <td className="px-3 py-3">{halkaArz.toplamElDegistirme}</td>
                        <td className="px-3 py-3">{halkaArz.gunIciLot}</td>
                        <td className="px-3 py-3 font-medium">{halkaArz.kuyruk}</td>
                        <td className="px-3 py-3">{halkaArz.piyasaDegeri}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-8 space-y-7 text-base leading-8 text-slate-700 md:text-lg">
              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  Şa-Ra İnşaat ilk işlem gününü tavanda kapattı
                </h2>
                <p className="mt-3">
                  Şa-Ra İnşaat (SARAE), 70,00 TL halka arz fiyatının ardından
                  ilk işlem gününü %10 yükselişle 77,00 TL tavan fiyattan
                  tamamladı. Tavanda bekleyen 79.707.073 lot, halka açık
                  payların %89,56&apos;sına karşılık geldi. Gün içinde 1.471.611
                  lot el değiştirirken en iyi alıcı kurumlar Deniz Yatırım,
                  Gedik Yatırım ve İnfo Yatırım oldu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  Saat ve Saat yine taban fiyatta kaldı
                </h2>
                <p className="mt-3">
                  Saat ve Saat (SSAAT), ikinci işlem gününü 45,36 TL taban
                  fiyatta kapattı. Taban sırasında 398.410 lot satış emri
                  beklerken halka arz fiyatına göre toplam kayıp %19,00&apos;a
                  ulaştı. Hissede ilk iki işlem günündeki el değiştiren lot
                  oranı sırasıyla %107,02 ve %101,23; kümülatif oran ise
                  %208,25 oldu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  İsvea Banyo tabandan tavana döndü
                </h2>
                <p className="mt-3">
                  İsvea Banyo (ISVEA) sabah taban fiyatta başladığı günü 27,52
                  TL tavan fiyatta tamamladı. Böylece seans içindeki taban
                  seviyesinden kapanışa yaklaşık %22 prim yaptı. Tavanda
                  5.910.368 lot alış emri oluşurken gün içi el değiştiren lot
                  sayısı 146.390.143&apos;e, beşinci gün el değiştirme oranı ise
                  %218,49&apos;a çıktı. Halka arzdan bu yana toplam getiri %31,67
                  seviyesinde gerçekleşti.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  Golda Gıda Bank of America alımlarıyla tavana yerleşti
                </h2>
                <p className="mt-3">
                  Golda Gıda (GOLDA), Bank of America alımlarının etkisiyle
                  seansın başında tavana yerleşti ve 17,90 TL&apos;de günü
                  tamamladı. Tavanda 10.429.398 lot alış emri bulunurken halka
                  arz fiyatına göre toplam prim %94,57&apos;ye ulaştı. Yedinci
                  işlem gününde 36.395.871 lot el değiştirdi; kümülatif el
                  değiştirme oranı %106,16 oldu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  Diğer son halka arzlarda kapanış görünümü
                </h2>
                <p className="mt-3">
                  Beta Enerji (BETAE) 90,75 TL kapanış ve %126,88 getiriyle
                  sekiz şirket içinde halka arz performansı en yüksek hisse
                  olarak öne çıktı. Orzax İlaç (ORZAX) 100,30 TL kapanışla
                  %45,36 primli seyrini korudu. Soho Giyim (SOHOE) 12,91 TL ile
                  halka arz fiyatının %13,93, Ekim Turizm (EKIM) ise 23,48 TL
                  ile %22,41 altında günü tamamladı. Bu dört hissede kapanışta
                  tavan veya taban kuyruğu oluşmadı.
                </p>
              </section>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Günlere göre el değiştiren lot oranları
              </h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {halkaArzlar.map((halkaArz) => (
                  <div
                    key={halkaArz.kod}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    <h3 className="font-bold text-slate-950">
                      {halkaArz.kod} · Toplam {halkaArz.toplamElDegistirme}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {halkaArz.gunlukOranlar.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <HaberIlgiliBolumler slug={href} baslik={baslik} />

            <div className="mt-8 border-l-4 border-amber-500 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-950 md:text-base">
              Veriler 17 Temmuz 2026 seans sonu tablolarından, kurum dağılımı
              değerlendirmeleri ise gün içi işlem görünümünden derlenmiştir.
              Tavan veya taban kuyruğu bir sonraki seans için kesin yön
              göstergesi değildir. Bu haber yatırım tavsiyesi değildir.
            </div>
          </div>

          <HaberAltKisim href={href} />
          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
