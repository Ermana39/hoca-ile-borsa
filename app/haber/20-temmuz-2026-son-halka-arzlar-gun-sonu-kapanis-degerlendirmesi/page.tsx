import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href =
  "/haber/20-temmuz-2026-son-halka-arzlar-gun-sonu-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli =
  "/20-temmuz-2026-son-halka-arzlar-gun-sonu-kapanis-degerlendirmesi.png";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "Son Halka Arzların Gün Sonu Kapanış Değerlendirmesi (20 Temmuz 2026)";
const aciklama =
  "20 Temmuz 2026 son halka arz kapanış değerlendirmesi: SARAE ikinci işlem gününü tavan kapattı, GOLDA tavan serisini sürdürdü, ISVEA yeniden tavan yaptı, SSAAT halka arz fiyatının altında kaldı.";

const halkaArzlar = [
  {
    kod: "SARAE",
    sirket: "Şa-Ra İnşaat",
    arzFiyati: "70,00 TL",
    kapanis: "84,70 TL",
    getiri: "+%21,00",
    kazanc: "+2.293,20 TL",
    toplamElDegistirme: "%3,15",
    gunIciLot: "1.331.794",
    tavanTabanLot: "84.529.195",
    tavanTabanOran: "%94,98",
    piyasaDegeri: "7.538.300.000,00 TL",
    gunlukOranlar: ["1. gün %1,65", "2. gün %1,50"],
    yorum:
      "Şa-Ra İnşaat halka arzı ikinci işlem gününü de tavan fiyatla kapatarak tavan serisi oluşturdu. Gün içi el değiştiren lot sayısının düşük kalması ve tavanda 84,5 milyon lot beklemesi, hissenin arz sonrası güçlü talep gördüğünü gösteriyor.",
  },
  {
    kod: "GOLDA",
    sirket: "Golda Gıda",
    arzFiyati: "9,20 TL",
    kapanis: "19,69 TL",
    getiri: "+%114,02",
    kazanc: "+1.384,68 TL",
    toplamElDegistirme: "%132,57",
    gunIciLot: "23.104.914",
    tavanTabanLot: "14.479.408",
    tavanTabanOran: "%16,55",
    piyasaDegeri: "1.722.874.960,62 TL",
    gunlukOranlar: [
      "1. gün %1,02",
      "2. gün %3,00",
      "3. gün %4,00",
      "4. gün %3,83",
      "5. gün %5,39",
      "6. gün %47,32",
      "7. gün %41,60",
      "8. gün %26,41",
    ],
    yorum:
      "Golda Gıda durmuyor. Hisse seans başında devre kesse de yeniden tavan fiyata yerleşti ve günü 19,69 TL seviyesinde tamamladı. Halka arz fiyatına göre getiri %114,02'ye ulaşırken kapanışta 14,48 milyon lot tavan alış emri kaldı.",
  },
  {
    kod: "ISVEA",
    sirket: "İsvea Banyo",
    arzFiyati: "20,90 TL",
    kapanis: "30,26 TL",
    getiri: "+%44,78",
    kazanc: "+449,28 TL",
    toplamElDegistirme: "%243,85",
    gunIciLot: "4.224.891",
    tavanTabanLot: "6.029.346",
    tavanTabanOran: "%9,00",
    piyasaDegeri: "2.027.420.000,00 TL",
    gunlukOranlar: [
      "1. gün %1,01",
      "2. gün %1,81",
      "3. gün %4,08",
      "4. gün %12,15",
      "5. gün %218,49",
      "6. gün %6,31",
    ],
    yorum:
      "İsvea, ilk tavan serisi döneminden sonra yeniden tavan serisi oluşturmaya başladı. Beşinci işlem günündeki yüksek el değiştirme sonrasında altıncı günde daha sakin lot hareketiyle tavana dönmesi, hissede talebin yeniden toparlandığını gösteriyor.",
  },
  {
    kod: "SSAAT",
    sirket: "Saat ve Saat",
    arzFiyati: "56,00 TL",
    kapanis: "44,00 TL",
    getiri: "-%21,43",
    kazanc: "-672,00 TL",
    toplamElDegistirme: "%268,92",
    gunIciLot: "48.738.966",
    tavanTabanLot: "0",
    tavanTabanOran: "%0,00",
    piyasaDegeri: "3.534.693.624,00 TL",
    gunlukOranlar: ["1. gün %107,02", "2. gün %101,23", "3. gün %60,67"],
    yorum:
      "Saat ve Saat tarafında gün içi el değiştiren lot yüksek kalmaya devam etti. Hisse üçüncü işlem gününde 44,00 TL kapanışla halka arz fiyatının %21,43 altında kaldı. Tavan ya da taban kuyruğu oluşmaması, satış baskısının önceki günlere göre farklı bir zemine taşındığını gösteriyor.",
  },
] as const;

export const metadata: Metadata = {
  title: baslik,
  description: aciklama,
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: baslik,
    description: aciklama,
    url: canonical,
    siteName: "Hoca ile Borsa",
    images: [
      {
        url: `${siteUrl}${haberGorseli}`,
        width: 1280,
        height: 1128,
        alt: "20 Temmuz 2026 son halka arzlar gün sonu kapanış değerlendirmesi",
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
        name: "Şa-Ra İnşaat ikinci işlem gününü nasıl kapattı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Şa-Ra İnşaat (SARAE) ikinci işlem gününü 84,70 TL tavan fiyattan kapattı ve kapanışta 84.529.195 lot tavan alış emri oluştu.",
        },
      },
      {
        "@type": "Question",
        name: "Golda Gıda halka arzdan bu yana ne kadar kazandırdı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Golda Gıda (GOLDA) 20 Temmuz 2026 kapanışında 19,69 TL seviyesine ulaştı ve halka arz fiyatına göre %114,02 prim yaptı.",
        },
      },
      {
        "@type": "Question",
        name: "İsvea yeniden tavan yaptı mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İsvea Banyo (ISVEA) günü 30,26 TL tavan fiyattan kapattı ve kapanışta 6.029.346 lot tavan alış emri kaldı.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="w-full overflow-hidden bg-slate-950">
            <Image
              src={haberGorseli}
              alt="20 Temmuz 2026 son halka arzlar gün sonu değerlendirmesi"
              width={1280}
              height={1128}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
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
                20 Temmuz 2026 kapanışında son halka arzlarda en güçlü görüntü
                SARAE, GOLDA ve ISVEA tarafında oluştu. Şa-Ra İnşaat ikinci
                işlem gününde tavan serisini sürdürürken Golda Gıda seans içinde
                devre kesmesine rağmen yeniden tavana yerleşti. İsvea Banyo da
                ilk yoğun el değiştirme döneminin ardından yeniden tavan
                kapanışı yaptı.
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
                  <strong>SARAE:</strong> İkinci işlem gününü de tavan fiyatla
                  kapattı; 84.529.195 lot tavan alış emriyle seriyi güçlendirdi.
                </li>
                <li>
                  <strong>GOLDA:</strong> Seans başındaki devre kesmeye rağmen
                  yeniden tavan fiyata yerleşti ve günü 19,69 TL&apos;de
                  tamamladı.
                </li>
                <li>
                  <strong>ISVEA:</strong> İlk tavan serisi döneminden sonra
                  yeniden tavan kapanışı yaparak 30,26 TL&apos;ye çıktı.
                </li>
                <li>
                  <strong>SSAAT:</strong> 48,7 milyon lot el değiştirmesine
                  rağmen 44,00 TL kapanışla halka arz fiyatının altında kaldı.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-950">
                4 halka arzın gün sonu kapanış tablosu
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                Tabloda kazanç oranı halka arz fiyatına göre, el değiştirme
                oranı ise işlem günleri boyunca oluşan toplam lot hareketine
                göre okunmalıdır.
              </p>

              <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full min-w-[1050px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-3 py-3 font-semibold">Hisse</th>
                      <th className="px-3 py-3 font-semibold">Arz fiyatı</th>
                      <th className="px-3 py-3 font-semibold">Kapanış</th>
                      <th className="px-3 py-3 font-semibold">Kazanç</th>
                      <th className="px-3 py-3 font-semibold">Toplam el değişimi</th>
                      <th className="px-3 py-3 font-semibold">Gün içi lot</th>
                      <th className="px-3 py-3 font-semibold">Tavan/taban lot</th>
                      <th className="px-3 py-3 font-semibold">Tavan/taban oranı</th>
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
                          <span className="block text-xs font-semibold">
                            {halkaArz.kazanc}
                          </span>
                        </td>
                        <td className="px-3 py-3">{halkaArz.toplamElDegistirme}</td>
                        <td className="px-3 py-3">{halkaArz.gunIciLot}</td>
                        <td className="px-3 py-3 font-medium">
                          {halkaArz.tavanTabanLot}
                        </td>
                        <td className="px-3 py-3">{halkaArz.tavanTabanOran}</td>
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
                  SARAE ikinci işlem gününde tavan serisi oluşturdu
                </h2>
                <p className="mt-3">
                  Şa-Ra İnşaat (SARAE), halka arz sonrası ikinci işlem gününü de
                  84,70 TL tavan fiyattan kapattı. Halka arz fiyatı olan 70,00
                  TL&apos;ye göre getiri %21,00 seviyesine ulaştı. Gün içinde
                  yalnızca 1.331.794 lot el değiştirirken kapanışta 84.529.195
                  lot tavan alış emri kaldı. Bu tablo, SARAE&apos;de arz sonrası
                  satış isteğinin düşük, tavan talebinin ise güçlü kaldığını
                  gösteriyor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  GOLDA devre kesmeye rağmen yeniden tavana döndü
                </h2>
                <p className="mt-3">
                  Golda Gıda (GOLDA), 20 Temmuz kapanışında 19,69 TL&apos;ye
                  yükseldi ve halka arz fiyatına göre getirisi %114,02 oldu.
                  Hisse seans başında devre kesse de yeniden tavan fiyata
                  yerleşerek günü orada kapattı. Sekizinci işlem gününde
                  23.104.914 lot el değiştirdi; kapanışta 14.479.408 lot tavan
                  alış emrinin kalması GOLDA&apos;da tavan iştahının sürdüğünü
                  gösteriyor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  ISVEA yeniden tavan serisi başlattı
                </h2>
                <p className="mt-3">
                  İsvea Banyo (ISVEA), ilk tavan serisi döneminden sonra yeniden
                  tavan serisi oluşturmaya başladı. Hisse günü 30,26 TL tavan
                  fiyattan tamamladı ve halka arz fiyatına göre %44,78 primli
                  hale geldi. Önceki işlem günündeki yüksek el değiştirme
                  sonrasında altıncı günde yalnızca 4.224.891 lot işlem görmesi,
                  tavan dönüşünü daha dikkat çekici hale getiriyor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  SSAAT tarafında yüksek lot hareketi sürüyor
                </h2>
                <p className="mt-3">
                  Saat ve Saat (SSAAT), üçüncü işlem gününü 44,00 TL seviyesinde
                  tamamladı. Halka arz fiyatı olan 56,00 TL&apos;ye göre kayıp
                  %21,43 seviyesinde. Gün içinde 48.738.966 lot el değiştirmesi,
                  hissede yüksek hareketin sürdüğünü gösteriyor. Kapanışta
                  tavan ya da taban lotunun sıfır olması ise gün sonunda
                  belirgin bir kuyruk oluşmadığını anlatıyor.
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

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Yarın hangi halka arzlar izlenecek?
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700 md:text-lg">
                SARAE&apos;de tavan lotunun halka açık paylara oranı %94,98 ile
                çok yüksek seviyede. Bu nedenle SARAE, yeni işlem gününde tavan
                serisinin devamı açısından ilk sırada izlenecek hisselerden biri
                olacak. GOLDA&apos;da devre kesmeye rağmen tavan kapanışı
                yapılması, ISVEA&apos;da ise yeniden tavan görünümü oluşması günün
                diğer güçlü başlıkları. SSAAT tarafında ise halka arz fiyatının
                altında kalan kapanış ve yüksek el değiştirme, temkinli
                izlenmesi gereken bir tablo bırakıyor.
              </p>
            </section>

            <HaberIlgiliBolumler slug={href} baslik={baslik} />

            <div className="mt-8 border-l-4 border-amber-500 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-950 md:text-base">
              Veriler 20 Temmuz 2026 seans sonu tablolarından derlenmiştir.
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
