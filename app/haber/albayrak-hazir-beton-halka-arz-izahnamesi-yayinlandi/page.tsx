import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import albayrakJson from "@/data/halka-arz/albayrak-hazir-beton-san-ve-tic.json";
import { tahsisatMetni, type HalkaArzVeri } from "@/lib/halka-arz";

const veri = albayrakJson as HalkaArzVeri;
const slug = "albayrak-hazir-beton-halka-arz-izahnamesi-yayinlandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/albayrak-hazir-beton-halka-arzina-spk-onayi-geldi.webp";
const yayinTarihi = "2026-07-18T00:15:00+03:00";
const yayinTarihiEtiket = "18 Temmuz 2026";

export const metadata: Metadata = {
  title:
    "Albayrak Hazır Beton Halka Arz İzahnamesi Yayınlandı: ALBTN Fiyat, Lot ve Tarih",
  description:
    "Albayrak Hazır Beton halka arzında onaylı izahname yayınlandı. ALBTN talep toplama 22-23 Temmuz, fiyat 38,60 TL, toplam 70.000.000 lot.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "Albayrak Hazır Beton Halka Arz İzahnamesi Yayınlandı: ALBTN Fiyat, Lot ve Tarih",
    description:
      "ALBTN halka arzında talep toplama 22-23 Temmuz 2026, fiyat 38,60 TL, toplam dağıtılacak lot 70.000.000 olarak açıklandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Albayrak Hazır Beton halka arz izahnamesi yayınlandı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Albayrak Hazır Beton Halka Arz İzahnamesi Yayınlandı: ALBTN Fiyat, Lot ve Tarih",
    description:
      "ALBTN halka arzında fiyat 38,60 TL, talep tarihi 22-23 Temmuz 2026, toplam pay 70.000.000 lot.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Halka Arz Fiyatı",
    deger: veri.ozet.fiyatAralik,
    aciklama: "38,60 TL - %25 iskonto",
  },
  {
    baslik: "Talep Tarihleri",
    deger: "22-23 Temmuz",
    aciklama: "10.30-13.00 saatleri arasında",
  },
  {
    baslik: "Toplam Pay",
    deger: `${veri.toplamPay} Lot`,
    aciklama: "Sermaye artırımı ve ortak satışı dahil",
  },
  {
    baslik: "Halka Arz Büyüklüğü",
    deger: "2,70 Milyar TL",
    aciklama: `Halka açıklık oranı ${veri.halkaAciklikOrani}`,
  },
];

const detayKartlari = [
  { baslik: "BIST Kodu", deger: veri.bistKodu || veri.ozet.bistKodu || "ALBTN" },
  { baslik: "Dağıtım Yöntemi", deger: veri.ozet.dagitimYontemi },
  { baslik: "Katılım Endeksi", deger: veri.ozet.katilimEndeksi },
  { baslik: "Pazar", deger: veri.ozet.pazar },
  { baslik: "Aracı Kurum", deger: veri.ozet.araciKurum },
];

const finansalDonemler = veri.finansalDonemler || [];

const sss = [
  {
    soru: "Albayrak Hazır Beton halka arz ne zaman?",
    cevap:
      "Albayrak Hazır Beton halka arzında talep toplama 22-23 Temmuz 2026 tarihlerinde, 10.30-13.00 saatleri arasında yapılacak.",
  },
  {
    soru: "ALBTN halka arz fiyatı kaç TL?",
    cevap:
      "ALBTN halka arz fiyatı 38,60 TL olarak açıklandı. Paylar %25 iskonto bilgisiyle satışa sunulacak.",
  },
  {
    soru: "Albayrak Hazır Beton halka arz kaç lot?",
    cevap:
      "Toplam dağıtılacak pay 70.000.000 lot olarak açıklandı. Bunun 49.000.000 lotu sermaye artırımı, 21.000.000 lotu ortak satışı niteliğinde.",
  },
  {
    soru: "Albayrak Hazır Beton halka arz katılım endeksine uygun mu?",
    cevap:
      "Paylaşılan onaylı izahname bilgilerine göre Albayrak Hazır Beton halka arzı BIST Katılım Endeksine uygundur.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Albayrak Hazır Beton Halka Arz İzahnamesi Yayınlandı: ALBTN Fiyat, Lot ve Tarih",
    description:
      "Albayrak Hazır Beton halka arzında onaylı izahname yayınlandı. ALBTN talep toplama 22-23 Temmuz, fiyat 38,60 TL, toplam 70.000.000 lot.",
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
    about: {
      "@type": "Corporation",
      name: veri.sirketAdi,
      tickerSymbol: "ALBTN",
    },
    isAccessibleForFree: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sss.map((item) => ({
      "@type": "Question",
      name: item.soru,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.cevap,
      },
    })),
  },
];

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

export default function AlbayrakIzahnameHaberiPage() {
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
              src="/albayrak-hazir-beton-halka-arzina-spk-onayi-geldi.webp"
              alt="Albayrak Hazır Beton halka arz izahnamesi yayınlandı"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Albayrak Hazır Beton Halka Arz İzahnamesi Yayınlandı: ALBTN Fiyat,
              Lot, Tarih ve Tüm Detaylar
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
                Halka Arz
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
                Albayrak Hazır Beton San. ve Tic. A.Ş. halka arzında onaylı
                izahname yayınlandı. Şirket paylarının <strong>ALBTN</strong>{" "}
                koduyla Borsa İstanbul Yıldız Pazar’da işlem görmesi
                planlanıyor. Talep toplama{" "}
                <strong>22-23 Temmuz 2026</strong> tarihlerinde, 10.30-13.00
                saatleri arasında yapılacak.
              </p>

              <p>
                Halka arz fiyatı <strong>38,60 TL</strong> olarak açıklanırken,
                toplam dağıtılacak pay <strong>70.000.000 lot</strong> olacak.
                Halka arz büyüklüğü <strong>2.702.000.000 TL</strong>, halka
                açıklık oranı ise <strong>%28</strong> seviyesinde yer alıyor.
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

              <Section title="Albayrak Hazır Beton halka arz özeti">
                <div className="grid gap-3 sm:grid-cols-2">
                  {detayKartlari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-medium text-slate-500">
                        {item.baslik}
                      </div>
                      <div className="mt-1 whitespace-pre-line text-base font-bold text-slate-900">
                        {item.deger}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Halka arz şekli ve toplam lot">
                <div className="grid gap-3">
                  {veri.halkaArzSekli.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Halka arz, 49.000.000 lot sermaye artırımı ve 21.000.000 lot
                  ortak satışı olmak üzere toplam 70.000.000 lot üzerinden
                  yapılacak. Sermaye artırımı kaynaklı bölüm şirket kasasına
                  girecek, ortak satışı kaynaklı bölüm ise mevcut ortak pay
                  satışı niteliğinde olacak.
                </p>
              </Section>

              <Section title="Dağıtım ve tahsisat grupları">
                <div className="grid gap-4 sm:grid-cols-2">
                  {veri.tahsisat.map((item, index) => (
                    <div
                      key={`${tahsisatMetni(item)}-${index}`}
                      className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-7 text-amber-950"
                    >
                      {tahsisatMetni(item)}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600 md:text-base">
                  {veri.tahsisatNotlari?.map((item) => (
                    <p key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                      {item}
                    </p>
                  ))}
                </div>
              </Section>

              <Section title="Halka arz gelirinin kullanım alanları">
                <div className="grid gap-4 sm:grid-cols-2">
                  {veri.fonKullanim.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-7 text-emerald-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {veri.fonKullanimYorumu}
                </p>
              </Section>

              <Section title="Finansal görünüm">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Kalem</th>
                        {finansalDonemler.map((donem) => (
                          <th
                            key={donem}
                            className="px-4 py-3 text-left font-bold"
                          >
                            {donem}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {veri.finansalVeriler.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          }
                        >
                          <td className="px-4 py-3 font-semibold text-slate-800">
                            {item.kalem}
                          </td>
                          {finansalDonemler.map((donem) => (
                            <td key={donem} className="px-4 py-3 text-slate-700">
                              {item.donemler[donem] || "-"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {veri.finansalYorum}
                </p>
              </Section>

              <Section title="Önemli taahhütler">
                <div className="grid gap-4">
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                    <div className="text-sm font-semibold text-blue-800">
                      Fiyat İstikrarı
                    </div>
                    <p className="mt-2 text-sm leading-7 text-blue-950">
                      {veri.taahhutOzeti?.fiyatIstikrari}
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                    <div className="text-sm font-semibold text-indigo-800">
                      Satmama Taahhüdü
                    </div>
                    <p className="mt-2 text-sm leading-7 text-indigo-950">
                      {veri.taahhutOzeti?.satmamaTaahhudu}
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="Konsorsiyum lideri ve üyeleri">
                <div className="space-y-3 text-sm leading-7 text-slate-700 md:text-base">
                  {veri.satisYontemi?.slice(2).map((item) => (
                    <p key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                      {item}
                    </p>
                  ))}
                </div>
              </Section>

              <Section title="Albayrak Hazır Beton hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  {veri.sirketHakkinda}
                </p>
              </Section>

              <Section title="Sık aranan sorular">
                <div className="space-y-4">
                  {sss.map((item) => (
                    <div key={item.soru}>
                      <h3 className="font-semibold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <p className="mt-2">
                  Albayrak Hazır Beton San. ve Tic. A.Ş. halka arzına ilişkin
                  onaylı izahname ve satış duyurusu bilgileri.
                </p>
                <Link
                  href="/halka-arz/onayli-izahnameler/albayrak-hazir-beton-san-ve-tic"
                  className="mt-2 inline-flex font-medium text-slate-800 underline underline-offset-2"
                >
                  Albayrak Hazır Beton onaylı izahname sayfası
                </Link>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Albayrak Hazır Beton Halka Arz İzahnamesi Yayınlandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Halka arz kararlarında onaylı izahname, tasarruf
                sahiplerine satış duyurusu, aracı kurum duyuruları ve güncel KAP
                açıklamaları birlikte kontrol edilmelidir.
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
