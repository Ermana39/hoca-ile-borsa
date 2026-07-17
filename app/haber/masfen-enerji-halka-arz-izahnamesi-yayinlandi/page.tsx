import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import masfenJson from "@/data/halka-arz/masfen-enerji.json";
import { tahsisatMetni, type HalkaArzVeri } from "@/lib/halka-arz";

const veri = masfenJson as HalkaArzVeri;
const slug = "masfen-enerji-halka-arz-izahnamesi-yayinlandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/masfen-enerji-halka-arzina-spk-onayi-geldi.webp";
const yayinTarihi = "2026-07-17T23:55:00+03:00";
const yayinTarihiEtiket = "17 Temmuz 2026";

export const metadata: Metadata = {
  title:
    "Masfen Enerji Halka Arz İzahnamesi Yayınlandı: MASFN Fiyat, Lot ve Tarih",
  description:
    "Masfen Enerji halka arzında onaylı izahname yayınlandı. MASFN talep toplama 22-23-24 Temmuz, fiyat 45,68 TL, toplam 85.000.000 lot.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "Masfen Enerji Halka Arz İzahnamesi Yayınlandı: MASFN Fiyat, Lot ve Tarih",
    description:
      "MASFN halka arzında talep toplama 22-23-24 Temmuz 2026, fiyat 45,68 TL, toplam dağıtılacak lot 85.000.000 olarak açıklandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Masfen Enerji halka arz izahnamesi yayınlandı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Masfen Enerji Halka Arz İzahnamesi Yayınlandı: MASFN Fiyat, Lot ve Tarih",
    description:
      "MASFN halka arzında fiyat 45,68 TL, talep tarihi 22-23-24 Temmuz 2026, toplam pay 85.000.000 lot.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Halka Arz Fiyatı",
    deger: veri.ozet.fiyatAralik,
    aciklama: "45,68 TL - %20 iskonto",
  },
  {
    baslik: "Talep Tarihleri",
    deger: "22-23-24 Temmuz",
    aciklama: "09.00-17.00 saatleri arasında",
  },
  {
    baslik: "Toplam Pay",
    deger: `${veri.toplamPay} Lot`,
    aciklama: "Sermaye artırımı ve ortak satışı dahil",
  },
  {
    baslik: "Halka Arz Büyüklüğü",
    deger: "3,88 Milyar TL",
    aciklama: `Halka açıklık oranı ${veri.halkaAciklikOrani}`,
  },
];

const detayKartlari = [
  { baslik: "BIST Kodu", deger: veri.bistKodu || veri.ozet.bistKodu || "MASFN" },
  { baslik: "Dağıtım Yöntemi", deger: veri.ozet.dagitimYontemi },
  { baslik: "T1-T2", deger: "Kullanılamaz" },
  { baslik: "Pazar", deger: veri.ozet.pazar },
  { baslik: "Katılım Endeksi", deger: veri.ozet.katilimEndeksi },
  { baslik: "Aracı Kurum", deger: veri.ozet.araciKurum },
];

const finansalDonemler = veri.finansalDonemler || [];

const sss = [
  {
    soru: "Masfen Enerji halka arz ne zaman?",
    cevap:
      "Masfen Enerji halka arzında talep toplama 22-23-24 Temmuz 2026 tarihlerinde, 09.00-17.00 saatleri arasında yapılacak.",
  },
  {
    soru: "MASFN halka arz fiyatı kaç TL?",
    cevap:
      "MASFN halka arz fiyatı 45,68 TL olarak açıklandı. Paylar %20 iskonto bilgisiyle satışa sunulacak.",
  },
  {
    soru: "Masfen Enerji halka arz kaç lot?",
    cevap:
      "Toplam dağıtılacak pay 85.000.000 lot olarak açıklandı. Bunun 55.000.000 lotu sermaye artırımı, 30.000.000 lotu ortak satışı niteliğinde.",
  },
  {
    soru: "Masfen Enerji halka arz katılım endeksine uygun mu?",
    cevap:
      "Paylaşılan onaylı izahname bilgilerine göre Masfen Enerji halka arzı BIST Katılım Endeksine uygun değildir.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Masfen Enerji Halka Arz İzahnamesi Yayınlandı: MASFN Fiyat, Lot ve Tarih",
    description:
      "Masfen Enerji halka arzında onaylı izahname yayınlandı. MASFN talep toplama 22-23-24 Temmuz, fiyat 45,68 TL, toplam 85.000.000 lot.",
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
      tickerSymbol: "MASFN",
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

export default function MasfenIzahnameHaberiPage() {
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
              src="/masfen-enerji-halka-arzina-spk-onayi-geldi.webp"
              alt="Masfen Enerji halka arz izahnamesi yayınlandı"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Masfen Enerji Halka Arz İzahnamesi Yayınlandı: MASFN Fiyat, Lot,
              Tarih ve Tüm Detaylar
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
                Masfen Enerji A.Ş. halka arzında onaylı izahname yayınlandı.
                Şirket paylarının <strong>MASFN</strong> koduyla Borsa İstanbul
                Yıldız Pazar’da işlem görmesi planlanıyor. Talep toplama{" "}
                <strong>22-23-24 Temmuz 2026</strong> tarihlerinde,
                09.00-17.00 saatleri arasında yapılacak.
              </p>

              <p>
                Halka arz fiyatı <strong>45,68 TL</strong> olarak açıklanırken,
                toplam dağıtılacak pay <strong>85.000.000 lot</strong> olacak.
                Halka arz büyüklüğü <strong>3.882.800.000 TL</strong>, halka
                açıklık oranı ise <strong>%15,32</strong> seviyesinde yer alıyor.
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

              <Section title="Masfen Enerji halka arz özeti">
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
                  Halka arz, 55.000.000 lot sermaye artırımı ve 30.000.000 lot
                  ortak satışı olmak üzere toplam 85.000.000 lot üzerinden
                  yapılacak. Sermaye artırımı kaynaklı bölüm şirket kasasına
                  girecek, ortak satışı kaynaklı tutar ise mevcut ortak pay
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
                  {veri.satisYontemi?.slice(3).map((item) => (
                    <p key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                      {item}
                    </p>
                  ))}
                </div>
              </Section>

              <Section title="Masfen Enerji hakkında">
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
                  Masfen Enerji A.Ş. halka arzına ilişkin onaylı izahname ve
                  satış duyurusu bilgileri.
                </p>
                <Link
                  href="/halka-arz/onayli-izahnameler/masfen-enerji"
                  className="mt-2 inline-flex font-medium text-slate-800 underline underline-offset-2"
                >
                  Masfen Enerji onaylı izahname sayfası
                </Link>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Masfen Enerji Halka Arz İzahnamesi Yayınlandı"
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
