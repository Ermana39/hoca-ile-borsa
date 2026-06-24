import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title:
    "Beta Enerji Halka Arzı Başladı: Talep Toplama Tarihleri ve Olası Lot Dağılımı",
  description:
    "Beta Enerji ve Teknoloji A.Ş. halka arzında talep toplama süreci başladı. BETAE halka arzı 23-24-25 Haziran 2026 tarihlerinde yapılacak. T1 ve T2 bakiye kullanılamayacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi.webp",
    ],
  },
};

const araciKurumlar = [
  "A1 Capital",
  "Acar",
  "Ahlatcı",
  "Ak Yatırım",
  "Alnus",
  "Alternatif",
  "Anadolu",
  "Ata",
  "Bizim",
  "Bulls",
  "Burgan",
  "BTC Türk",
  "Deniz",
  "Dinamik",
  "Garanti",
  "Gedik",
  "Global",
  "Halk",
  "ICBC",
  "ING",
  "Investaz",
  "İnfo",
  "İntegral",
  "İş Yatırım",
  "Marbaş",
  "Meksa",
  "Osmanlı",
  "Oyak",
  "PhillipCapital",
  "Piramit",
  "Pusula",
  "QNB",
  "Şeker",
  "Tacirler",
  "TEB",
  "Tera",
  "Trive",
  "Turkish",
  "Ünlü",
  "Vakıf",
  "Yapı Kredi",
  "Türkiye Sınai Kalkınma Bankası",
  "Ziraat Yatırım",
  "Yatırım Finansman",
];

const lotDagilimi = [
  {
    katilimciSayisi: "700.000",
    lotSayisi: "43 LOT",
    tutar: "1.720 TL",
  },
  {
    katilimciSayisi: "800.000",
    lotSayisi: "38 LOT",
    tutar: "1.520 TL",
  },
  {
    katilimciSayisi: "900.000",
    lotSayisi: "34 LOT",
    tutar: "1.360 TL",
  },
  {
    katilimciSayisi: "1.000.000",
    lotSayisi: "30 LOT",
    tutar: "1.200 TL",
  },
  {
    katilimciSayisi: "1.100.000",
    lotSayisi: "28 LOT",
    tutar: "1.120 TL",
  },
  {
    katilimciSayisi: "1.200.000",
    lotSayisi: "25 LOT",
    tutar: "1.000 TL",
  },
];

const haberDetaylari = [
  {
    baslik: "Beta Enerji halka arzında talep toplama başladı",
    metin:
      "Beta Enerji ve Teknoloji A.Ş. halka arzında talep toplama süreci 23 Haziran 2026 itibarıyla başladı. Güncel takvime göre yatırımcılar 23-24-25 Haziran 2026 tarihlerinde, 3 iş günü boyunca halka arza talepte bulunabilecek.",
  },
  {
    baslik: "Talep toplama 23-24-25 Haziran tarihlerinde yapılacak",
    metin:
      "Daha önce ertelenen Beta Enerji halka arzında yeni talep toplama tarihleri 23-24-25 Haziran 2026 olarak açıklanmıştı. Halka arzda paylar 40,00 TL sabit fiyatla yatırımcıların talebine sunulacak.",
  },
  {
    baslik: "T1 ve T2 bakiye kullanılamayacak",
    metin:
      "Beta Enerji halka arzında T1 ve T2 bakiye kullanılamayacak. Bu nedenle talepte bulunacak yatırımcıların başvuru öncesinde kullanılabilir nakit bakiyelerini kontrol etmesi gerekiyor.",
  },
  {
    baslik: "Olası lot dağılımı katılımcı sayısına göre değişebilir",
    metin:
      "Olası lot dağılımı, halka arza gelecek toplam katılımcı sayısına göre değişecektir. Katılımcı sayısı arttıkça kişi başına düşebilecek tahmini lot miktarı azalabilir. Bu nedenle tabloda yer alan lot dağılımı kesin sonuç değil, bilgilendirme amaçlı olası senaryo olarak değerlendirilmelidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Beta Enerji Halka Arzı Başladı: Talep Toplama Tarihleri ve Olası Lot Dağılımı",
  description:
    "Beta Enerji ve Teknoloji A.Ş. halka arzında talep toplama süreci başladı. BETAE halka arzı 23-24-25 Haziran 2026 tarihlerinde yapılacak. T1 ve T2 bakiye kullanılamayacak.",
  datePublished: "2026-06-23T09:00:00+03:00",
  dateModified: "2026-06-23T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi",
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
    "https://www.hocaileborsa.com/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi.webp",
  inLanguage: "tr",
};

export default function BetaEnerjiHalkaArziBasladiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="w-full overflow-hidden bg-white">
            <Image
              src="/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi.webp"
              alt="Beta Enerji halka arzı başladı talep toplama ve olası lot dağılımı"
              width={1254}
              height={1254}
              unoptimized
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzı Başladı: Talep Toplama Tarihleri ve Olası
              Lot Dağılımı
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-23" className="text-sm text-slate-500">
                23 Haziran 2026
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
                Beta Enerji ve Teknoloji A.Ş. halka arzında talep toplama süreci
                başladı. BETAE halka arzı 23-24-25 Haziran 2026 tarihlerinde
                yapılacak. Halka arzda paylar 40,00 TL sabit fiyatla
                yatırımcıların talebine sunulurken, T1 ve T2 bakiye
                kullanılamayacak.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="text-sm font-semibold text-emerald-800">
                    Talep Toplama
                  </div>
                  <p className="mt-2 text-lg font-bold text-emerald-950">
                    23-24-25 Haziran
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <div className="text-sm font-semibold text-blue-800">
                    Halka Arz Fiyatı
                  </div>
                  <p className="mt-2 text-lg font-bold text-blue-950">
                    40,00 TL
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="text-sm font-semibold text-amber-800">
                    Bakiye Kullanımı
                  </div>
                  <p className="mt-2 text-lg font-bold text-amber-950">
                    T1 ve T2 Yok
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <section className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h2 className="text-base font-semibold text-blue-950">
                  Talepte Bulunulabilecek Aracı Kurumlar
                </h2>
                <p className="mt-2 text-sm leading-7 text-blue-900">
                  Beta Enerji halka arzında talep iletilebilecek aracı kurumlar
                  arasında A1 Capital, Acar, Ahlatcı, Ak Yatırım, Alnus,
                  Alternatif, Anadolu, Ata, Bizim, Bulls, Burgan, BTC Türk,
                  Deniz, Dinamik, Garanti, Gedik, Global, Halk, ICBC, ING,
                  Investaz, İnfo, İntegral, İş Yatırım, Marbaş, Meksa, Osmanlı,
                  Oyak, PhillipCapital, Piramit, Pusula, QNB, Şeker, Tacirler,
                  TEB, Tera, Trive, Turkish, Ünlü, Vakıf, Yapı Kredi, Türkiye
                  Sınai Kalkınma Bankası, Ziraat Yatırım ve Yatırım Finansman
                  yer alıyor.
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {araciKurumlar.map((kurum) => (
                    <div
                      key={kurum}
                      className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                    >
                      {kurum}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-4">
                <h2 className="text-base font-semibold text-slate-900">
                  Katılımcı Sayısına Göre Olası Lot Dağılımı
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Aşağıdaki tablo, katılımcı sayısına göre oluşabilecek tahmini
                  lot dağılımını göstermektedir. Bu tablo kesin dağıtım sonucu
                  değildir; nihai dağıtım toplam talep ve yatırımcı sayısına göre
                  değişebilir.
                </p>

                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full border-collapse text-center text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="border border-slate-700 px-4 py-3 font-bold">
                          Katılımcı Sayısı
                        </th>
                        <th className="border border-slate-700 px-4 py-3 font-bold">
                          Lot Sayısı
                        </th>
                        <th className="border border-slate-700 px-4 py-3 font-bold">
                          Tutar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lotDagilimi.map((row) => (
                        <tr key={row.katilimciSayisi}>
                          <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">
                            {row.katilimciSayisi}
                          </td>
                          <td className="border border-slate-200 px-4 py-3 font-bold text-emerald-700">
                            {row.lotSayisi}
                          </td>
                          <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">
                            {row.tutar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Beta Enerji halka arzına ilişkin şirket detayları, tahsisat
                grupları, fon kullanım planı, finansal görünüm ve onaylı
                izahname bilgileri için hazırladığımız detaylı sayfayı da
                inceleyebilirsiniz.
                <div className="mt-3">
                  <Link
                    href="/halka-arz/onayli-izahnameler/beta-enerji-teknoloji-betae"
                    className="inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-700"
                  >
                    Beta Enerji onaylı izahname sayfasını aç
                  </Link>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug="beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi"
                baslik="Beta Enerji Halka Arzı Başladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                Halka arzlara katılmadan önce onaylı izahname, tasarruf
                sahiplerine satış duyurusu ve resmi açıklamalar kontrol
                edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltBilgi href="/haber/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi" />

          <HaberNavigasyon href="/haber/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
