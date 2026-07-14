import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "10-temmuz-2026-halka-arzlar-gun-sonu-kapanis-degerlendirmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const gorselDosya =
  "10-temmuz-2026-halka-arzlar-gun-sonu-kapanis-degerlendirmesi.webp";
const haberGorsel = `https://www.hocaileborsa.com/${gorselDosya}`;
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "10 Temmuz Halka Arzlarda Gün Sonu: ISVEA, EKIM, GOLDA, ORZAX, SOHOE ve BETAE";
const description =
  "10 Temmuz 2026 halka arzlarda gün sonu kapanış değerlendirmesi: ISVEA ilk gün tavan, EKIM halka arz fiyatının %15 altında, GOLDA 3. tavan, ORZAX tavan, SOHOE fiyat altında, BETAE 8. tavan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
  keywords: [
    "10 Temmuz halka arz gün sonu",
    "ISVEA ilk işlem günü tavan",
    "EKIM halka arz fiyatının altında",
    "GOLDA tavan serisi",
    "ORZAX tavan kapattı",
    "SOHOE halka arz fiyatı altında",
    "BETAE 8 tavan",
    "son halka arzlar kapanış",
  ],
  openGraph: {
    type: "article",
    title,
    description,
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "10 Temmuz 2026 halka arzlar gün sonu kapanış değerlendirmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [haberGorsel],
  },
};

type Durum = "pozitif" | "negatif" | "izleme";

const durumStilleri: Record<Durum, string> = {
  pozitif: "border-emerald-200 bg-emerald-50 text-emerald-700",
  negatif: "border-red-200 bg-red-50 text-red-700",
  izleme: "border-amber-200 bg-amber-50 text-amber-700",
};

const kapanisVerileri: {
  hisse: string;
  sirket: string;
  kapanis: string;
  anaVeri: string;
  takip: string;
  yorum: string;
  durum: Durum;
}[] = [
  {
    hisse: "ISVEA",
    sirket: "İsvea Banyo",
    kapanis: "İlk işlem günü tavan",
    anaVeri: "İlk gün satış miktarı düşük kaldı",
    takip: "İkinci işlem günü tavan alış gücü",
    yorum:
      "ISVEA ilk işlem gününü tavan fiyatla kapatarak güzel bir başlangıç yaptı. İlk gün satış miktarının düşük kalması, halka arz sonrası talep tarafının güçlü izlenmesine neden oldu.",
    durum: "pozitif",
  },
  {
    hisse: "EKIM",
    sirket: "Ekim Turizm",
    kapanis: "2. işlem günü -%5,58",
    anaVeri: "Halka arz fiyatının %15 gerisinde",
    takip: "Satış baskısının devam edip etmeyeceği",
    yorum:
      "EKIM 2. işlem gününü de %5,58 eksiyle kapattı. Bu kapanışla birlikte hisse halka arz fiyatının yaklaşık %15 gerisinde kaldı.",
    durum: "negatif",
  },
  {
    hisse: "GOLDA",
    sirket: "Golda Gıda",
    kapanis: "3. işlem günü tavan",
    anaVeri: "Toplam lotun yaklaşık %8'i el değiştirdi",
    takip: "Tavan serisi ve lot değişim hızı",
    yorum:
      "GOLDA 3. işlem gününü de tavan fiyatla kapatarak seriyi sürdürdü. Tamamen eşit dağıtım olan halka arzda 3 işlem günü sonunda toplam lotun yalnızca yaklaşık %8'i kadar el değişimi olması dikkat çekti.",
    durum: "pozitif",
  },
  {
    hisse: "ORZAX",
    sirket: "Orzax İlaç",
    kapanis: "Tavan kapanış",
    anaVeri: "İnfo, Deniz ve Bank of alıcı tarafta öne çıktı",
    takip: "Alıcı kurumların devamlılığı",
    yorum:
      "ORZAX günü tavan fiyatla kapattı. En iyi alıcılar tarafında yine İnfo Yatırım, Deniz Yatırım ve Bank of öne çıktı.",
    durum: "pozitif",
  },
  {
    hisse: "SOHOE",
    sirket: "Soho Giyim",
    kapanis: "%3,97 yükseliş",
    anaVeri: "Halka arz fiyatının %10,93 altında",
    takip: "15,00 TL halka arz fiyatına yaklaşma isteği",
    yorum:
      "SOHOE gün sonunda gelen %3,97 yükselişe rağmen halka arz fiyatının hâlâ %10,93 altında kapattı. Tepki yükselişi pozitif olsa da halka arz fiyatının altında kalması zayıf görüntünün sürdüğünü gösterdi.",
    durum: "izleme",
  },
  {
    hisse: "BETAE",
    sirket: "Beta Enerji",
    kapanis: "8. işlem günü tavan",
    anaVeri: "Gün sonunda Bank of en iyi alıcı kurum oldu",
    takip: "Tavan serisi ve alıcı kurum dağılımı",
    yorum:
      "BETAE seriyi sürdürerek 8. işlem gününü de tavan fiyatla kapattı. Gün sonunda Bank of en iyi alıcı kurum olarak öne çıktı.",
    durum: "pozitif",
  },
];

const ozetKartlari = [
  {
    baslik: "İlk Gün Güçlü",
    deger: "ISVEA",
    aciklama: "İlk işlem günü tavan kapanış ve düşük satış miktarı.",
  },
  {
    baslik: "Negatif Ayrışan",
    deger: "EKIM",
    aciklama: "2. işlem günü de eksi kapandı, halka arz fiyatının %15 gerisinde.",
  },
  {
    baslik: "Seri Sürüyor",
    deger: "GOLDA",
    aciklama: "3. işlem günü tavan, toplam lot değişimi yaklaşık %8.",
  },
  {
    baslik: "Tavan Kapanış",
    deger: "ORZAX",
    aciklama: "İnfo, Deniz ve Bank of alıcı tarafta öne çıktı.",
  },
  {
    baslik: "Fiyat Altı",
    deger: "SOHOE",
    aciklama: "%3,97 yükselişe rağmen halka arz fiyatının %10,93 altında.",
  },
  {
    baslik: "8. Tavan",
    deger: "BETAE",
    aciklama: "Tavan serisi sürdü, Bank of gün sonunda en iyi alıcı oldu.",
  },
];

const takipBasliklari = [
  {
    hisse: "ISVEA",
    metin:
      "İlk gün tavan kapanış sonrası ikinci işlem gününde satış miktarı ve tavandaki talep gücü izlenecek.",
  },
  {
    hisse: "EKIM",
    metin:
      "Halka arz fiyatının %15 gerisinde kalan hissede satış baskısının zayıflayıp zayıflamayacağı kritik olacak.",
  },
  {
    hisse: "GOLDA",
    metin:
      "Toplam lotun yaklaşık %8'i el değiştirdiği için tavan serisi kadar lot çözülme hızı da izlenmeli.",
  },
  {
    hisse: "ORZAX",
    metin:
      "Tavan kapanış sonrası İnfo Yatırım, Deniz Yatırım ve Bank of tarafındaki alımların devam edip etmeyeceği önemli.",
  },
  {
    hisse: "SOHOE",
    metin:
      "Günlük tepki yükselişine rağmen halka arz fiyatının %10,93 altında kalması nedeniyle 15,00 TL bölgesi izlenmeli.",
  },
  {
    hisse: "BETAE",
    metin:
      "8. tavan sonrası Bank of alımlarının devamlılığı ve tavan alış lotu serinin gücü için takip edilecek.",
  },
];

const sorular = [
  {
    soru: "10 Temmuz 2026 halka arzlarda gün sonu nasıl geçti?",
    cevap:
      "ISVEA ilk işlem gününü tavan kapattı. GOLDA ve BETAE tavan serisini sürdürdü. ORZAX tavan kapanış yaptı. EKIM halka arz fiyatının %15 gerisinde kalırken SOHOE %3,97 yükselişe rağmen halka arz fiyatının %10,93 altında kapattı.",
  },
  {
    soru: "ISVEA ilk işlem gününü nasıl kapattı?",
    cevap:
      "ISVEA ilk işlem gününü tavan fiyatla kapattı. İlk gün satış miktarının düşük kalması pozitif başlangıcı destekledi.",
  },
  {
    soru: "EKIM halka arz fiyatının ne kadar altında?",
    cevap:
      "EKIM 2. işlem gününü %5,58 eksiyle kapattı ve halka arz fiyatının yaklaşık %15 gerisinde kaldı.",
  },
  {
    soru: "GOLDA lot değişimi neden takip ediliyor?",
    cevap:
      "GOLDA tamamen eşit dağıtım olan bir halka arz. 3 işlem günü sonunda toplam lotun yaklaşık %8'i kadar el değişimi olması, tavan serisinin gücü açısından izleniyor.",
  },
  {
    soru: "SOHOE toparlandı mı?",
    cevap:
      "SOHOE günü %3,97 yükselişle kapattı ancak halka arz fiyatının hâlâ %10,93 altında olduğu için tam bir toparlanmadan söz etmek için halka arz fiyatına yaklaşması gerekiyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      headline: title,
      description,
      image: haberGorsel,
      datePublished: haberSaati,
      dateModified: haberSaati,
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
      mainEntityOfPage: haberUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: sorular.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.cevap,
        },
      })),
    },
  ],
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

export default function OnTemmuzHalkaArzGunSonuPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={`/${gorselDosya}`}
              alt="10 Temmuz 2026 halka arzlar gün sonu kapanış değerlendirmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              10 Temmuz Halka Arzlarda Gün Sonu: ISVEA, EKIM, GOLDA, ORZAX, SOHOE ve BETAE
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz Gün Sonu
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
                10 Temmuz 2026 kapanışında son halka arzlarda tablo yine
                ayrıştı. <strong>ISVEA</strong> ilk işlem gününü tavan fiyatla
                kapatırken, <strong>GOLDA</strong> 3. işlem gününde tavan
                serisini sürdürdü. <strong>ORZAX</strong> günü tavan fiyatla
                kapattı. <strong>BETAE</strong> 8. işlem gününde de tavan serisini
                korudu.
              </p>

              <p>
                Negatif tarafta ise <strong>EKIM</strong> 2. işlem gününü de
                eksi kapatarak halka arz fiyatının %15 gerisinde kaldı.{" "}
                <strong>SOHOE</strong> gün sonunda %3,97 yükselse de halka arz
                fiyatının hâlâ %10,93 altında kapanış yaptı. Bu nedenle günlük
                tepki ile halka arz fiyatına göre oluşan mesafe birlikte
                okunmalı.
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

              <Section title="Gün sonu özet tablosu">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Kapanış
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Ana Veri
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Takip Başlığı
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {kapanisVerileri.map((item, index) => (
                        <tr
                          key={item.hisse}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.hisse}
                            <div className="text-xs font-medium text-slate-500">
                              {item.sirket}
                            </div>
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.kapanis}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.anaVeri}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.takip}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse bazlı kapanış yorumu">
                <div className="space-y-4">
                  {kapanisVerileri.map((item) => (
                    <div
                      key={item.hisse}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {item.hisse} - {item.sirket}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-slate-500">
                            {item.kapanis}
                          </p>
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 text-sm font-bold ${durumStilleri[item.durum]}`}
                        >
                          {item.durum === "pozitif"
                            ? "Pozitif"
                            : item.durum === "negatif"
                              ? "Negatif"
                              : "İzleme"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Öne çıkan değerlendirmeler">
                <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    <strong>ISVEA</strong> ilk işlem gününü tavan fiyatla
                    kapattığı için başlangıç pozitif. İlk gün satış miktarının
                    düşük kalması, ikinci işlem günü için tavandaki talep gücünü
                    daha önemli hale getiriyor.
                  </p>
                  <p>
                    <strong>EKIM</strong> tarafında 2. işlem gününde de eksi
                    kapanış geldi. Hissenin halka arz fiyatının %15 gerisinde
                    kalması, kısa vadede zayıf görüntünün sürdüğünü gösteriyor.
                  </p>
                  <p>
                    <strong>GOLDA</strong> tamamen eşit dağıtım yapısına rağmen
                    3 işlem günü sonunda toplam lotun yaklaşık %8 oranında el
                    değiştirdiği görüldü. Bu düşük oran tavan serisi açısından takip
                    edilmeye devam edecek.
                  </p>
                  <p>
                    <strong>ORZAX</strong> tavan kapanış yaptı. İnfo Yatırım,
                    Deniz Yatırım ve Bank of tarafının en iyi alıcılar arasında
                    yer alması, önümüzdeki haftanın başında alıcı kurum devamlılığını
                    önemli kılıyor.
                  </p>
                  <p>
                    <strong>SOHOE</strong> %3,97 yükseliş gösterse de halka arz
                    fiyatının %10,93 altında kaldı. Bu yüzden günlük yükseliş tek
                    başına yeterli görülmemeli; 15,00 TL halka arz fiyatına
                    yaklaşma isteği ayrıca izlenmeli.
                  </p>
                  <p>
                    <strong>BETAE</strong> 8. işlem gününü de tavan fiyatla
                    kapattı. Gün sonunda Bank of en iyi alıcı kurum olurken,
                    tavan serisinin devamı için alıcı dağılımı ve tavan alış lotu
                    takip edilecek.
                  </p>
                </div>
              </Section>

              <Section title="Önümüzdeki haftanın başında hangi başlıklar izlenmeli?">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {takipBasliklari.map((item) => (
                    <p key={item.hisse}>
                      <strong>{item.hisse}:</strong> {item.metin}
                    </p>
                  ))}
                </div>
              </Section>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm md:p-6">
                <h2 className="text-xl font-bold tracking-tight text-emerald-950">
                  Halka arz tavan serisi tablosu
                </h2>
                <p className="mt-3 text-sm leading-7 text-emerald-900 md:text-base">
                  ISVEA, GOLDA, ORZAX ve BETAE gibi son halka arzların tavan
                  serisi, halka arz fiyatına göre kazanç oranı, el değiştiren lot
                  ve kapanış verileri için güncel tabloyu inceleyebilirsiniz.
                </p>
                <Link
                  href="/halka-arz/tavan-serisi"
                  className="mt-4 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Halka arz tavan serisi sayfasına git
                </Link>
              </div>

              <Section title="Sık sorulan sorular">
                <div className="space-y-4">
                  {sorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.soru}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="10 Temmuz Halka Arzlarda Gün Sonu: ISVEA, EKIM, GOLDA, ORZAX, SOHOE ve BETAE"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Halka arz sonrası ilk işlem günlerinde fiyat, emir ve
                lot dengesi hızlı değişebilir.
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
