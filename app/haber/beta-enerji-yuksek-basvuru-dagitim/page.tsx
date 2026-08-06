import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title:
    "Beta Enerji Yüksek Başvuru Dağıtımı %1 Civarında Olabilir mi? BETAE Kaç Lot Verir?",
  description:
    "Beta Enerji halka arzında yüksek başvuru dağıtım oranı ne olur? BETAE yüksek başvuruda %1 - %0,90 civarı dağıtım ihtimali, minimum tutar ve kaç lot gelebilir hesaplaması.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-yuksek-basvuru-dagitim",
  },
  openGraph: {
    type: "article",
    title:
      "Beta Enerji Halka Arzında Yüksek Başvuru Dağıtımı %1 Civarında Olabilir mi?",
    description:
      "Beta Enerji halka arzında yüksek başvuru tarafında yoğun talep gelirse dağıtım oranı %1 - %0,90 bandında oluşabilir.",
    url: "https://www.hocaileborsa.com/haber/beta-enerji-yuksek-basvuru-dagitim",
    images: [
      {
        url: "https://www.hocaileborsa.com/beta-enerji-yuksek-basvuru-dagitim-discover.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/beta-enerji-yuksek-basvuru-dagitim-discover.webp",
    ],
  },
};

const betaOzet = [
  { baslik: "Halka arz fiyatı", deger: "40,00 TL" },
  { baslik: "Toplam halka arz edilen pay", deger: "60.750.000 lot" },
  { baslik: "Yüksek başvuruya ayrılan pay", deger: "6.075.000 lot" },
  { baslik: "Yüksek başvuru oranı", deger: "%10" },
  { baslik: "Yüksek başvuru alt sınırı", deger: "3.001 lot" },
  { baslik: "Minimum yüksek başvuru tutarı", deger: "120.040 TL" },
];

const talepSenaryolari = [
  {
    talep: "20 milyar TL",
    oran: "%1,22",
    lot: "37 lot",
    tutar: "1.480 TL",
  },
  {
    talep: "22 milyar TL",
    oran: "%1,10",
    lot: "33 lot",
    tutar: "1.320 TL",
  },
  {
    talep: "24,3 milyar TL",
    oran: "%1,00",
    lot: "30 lot",
    tutar: "1.200 TL",
  },
  {
    talep: "25 milyar TL",
    oran: "%0,97",
    lot: "29 lot",
    tutar: "1.160 TL",
  },
  {
    talep: "26 milyar TL",
    oran: "%0,93",
    lot: "28 lot",
    tutar: "1.120 TL",
  },
  {
    talep: "27 milyar TL",
    oran: "%0,90",
    lot: "27 lot",
    tutar: "1.080 TL",
  },
];

const basvuruSenaryolari = [
  {
    basvuru: "120.040 TL",
    talepLot: "3.001 lot",
    yuzde1Lot: "30 lot",
    yuzde09Lot: "27 lot",
  },
  {
    basvuru: "250.000 TL",
    talepLot: "6.250 lot",
    yuzde1Lot: "62 lot",
    yuzde09Lot: "56 lot",
  },
  {
    basvuru: "500.000 TL",
    talepLot: "12.500 lot",
    yuzde1Lot: "125 lot",
    yuzde09Lot: "112 lot",
  },
  {
    basvuru: "1.000.000 TL",
    talepLot: "25.000 lot",
    yuzde1Lot: "250 lot",
    yuzde09Lot: "225 lot",
  },
  {
    basvuru: "2.000.000 TL",
    talepLot: "50.000 lot",
    yuzde1Lot: "500 lot",
    yuzde09Lot: "450 lot",
  },
];

const sonHalkaArzlar = [
  { hisse: "UCAYM", talep: "95,4 kat", oran: "%1,05" },
  { hisse: "MEYSU", talep: "51,4 kat", oran: "%1,95" },
  { hisse: "FRMPL", talep: "49,8 kat", oran: "%2,01" },
  { hisse: "EKDMR", talep: "46,0 kat", oran: "%2,18" },
  { hisse: "ATATR", talep: "30,9 kat", oran: "%3,24" },
  { hisse: "MCARD", talep: "28,9 kat", oran: "%3,46" },
];

const youtubeVideo = {
  url: "https://youtu.be/XLEIRL7nim8",
  embedUrl: "https://www.youtube.com/embed/XLEIRL7nim8",
  thumbnail: "https://img.youtube.com/vi/XLEIRL7nim8/maxresdefault.jpg",
  title: "Beta Enerji Halka Arzında Yüksek Başvuru Kaç Lot Getirebilir?",
  description:
    "Beta Enerji halka arzında yüksek başvuru minimum tutarı, olası dağıtım oranı ve kaç lot gelebileceğine dair video değerlendirmesi.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Beta Enerji Halka Arzında Yüksek Başvuru Dağıtımı %1 Civarında Olabilir mi?",
  description:
    "Beta Enerji halka arzında yüksek başvuru tarafı için minimum yatırım tutarı, %1 - %0,90 bandında dağıtım ihtimali ve kaç lot düşebileceğine dair senaryo hesaplaması.",
  datePublished: "2026-06-13T09:00:00+03:00",
  dateModified: "2026-06-13T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-yuksek-basvuru-dagitim",
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
    "https://www.hocaileborsa.com/beta-enerji-yuksek-basvuru-dagitim-discover.webp",
  inLanguage: "tr",
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: youtubeVideo.title,
  description: youtubeVideo.description,
  thumbnailUrl: [youtubeVideo.thumbnail],
  uploadDate: "2026-06-13T09:00:00+03:00",
  embedUrl: youtubeVideo.embedUrl,
  contentUrl: youtubeVideo.url,
};

export default function BetaEnerjiYuksekBasvuruDagitimPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      <div className="mx-auto max-w-4xl">

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="w-full overflow-hidden bg-zinc-100">
            <Image
              src="/beta-enerji-yuksek-basvuru-dagitim-discover.webp"
              alt="Beta Enerji halka arz yüksek başvuru dağıtım oranı"
              width={1200}
              height={1200}
              priority
className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzında Yüksek Başvuru Dağıtımı %1 Civarında
              Olabilir mi?
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-13" className="text-sm text-slate-500">
                13 Haziran 2026
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
                Beta Enerji halka arzında yüksek başvuru tarafı için en kritik
                konu, dağıtım oranının hangi seviyede oluşacağı. Yüksek
                başvuruya ayrılan pay sınırlı olduğu için yoğun talep gelmesi
                halinde dağıtım oranının %1 civarına yaklaşması mümkün
                görünüyor.
              </p>

              <p>
                Beta Enerji halka arz fiyatı 40 TL. Yüksek başvurulu
                yatırımcılara ayrılan pay ise 6.075.000 lot. Bu dilimin parasal
                karşılığı yaklaşık 243 milyon TL. Yüksek başvuru tarafına
                yaklaşık 24 - 27 milyar TL aralığında talep gelirse dağıtım
                oranı yaklaşık %1 - %0,90 bandında oluşabilir.
              </p>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-base font-semibold text-slate-800">
                  Beta Enerji yüksek başvuru özet bilgileri
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {betaOzet.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-lg border border-slate-200 bg-white p-3"
                    >
                      <p className="text-xs font-medium text-slate-500">
                        {item.baslik}
                      </p>
                      <p className="mt-1 text-base font-bold text-slate-900">
                        {item.deger}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Beta Enerji yüksek başvuru minimum kaç TL?
                </h2>

                <p className="mt-3">
                  Yüksek başvuru dilimine girmek için minimum 3.001 lot talep
                  girilmesi gerekiyor. Halka arz fiyatı 40 TL olduğu için Beta
                  Enerji yüksek başvuru minimum tutarı 120.040 TL olarak
                  hesaplanıyor.
                </p>

                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                  3.001 lot × 40 TL = 120.040 TL minimum yüksek başvuru tutarı.
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Beta Enerji yüksek başvuru dağıtım oranı %1 - %0,90 bandına
                  nasıl gelir?
                </h2>

                <p className="mt-3">
                  Yüksek başvuruya ayrılan toplam büyüklük yaklaşık 243 milyon
                  TL. Bu nedenle yüksek başvuru tarafında 24,3 milyar TL
                  civarında talep oluşursa dağıtım oranı yaklaşık %1 olur.
                  Talep 27 milyar TL seviyesine yaklaşırsa dağıtım oranı
                  yaklaşık %0,90 seviyesine gerileyebilir.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[680px] text-left text-sm">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="px-4 py-3 font-semibold">
                            Yüksek başvuru toplam talebi
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            Tahmini dağıtım oranı
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            3.001 lot başvuruya düşebilecek lot
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            Yaklaşık karşılığı
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {talepSenaryolari.map((row) => (
                          <tr key={row.talep}>
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {row.talep}
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-700">
                              {row.oran}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.lot}
                            </td>
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {row.tutar}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  %1 - %0,90 dağıtımda farklı tutarlara kaç lot gelebilir?
                </h2>

                <p className="mt-3">
                  Aşağıdaki tablo, yüksek başvuru dağıtım oranının %1 ile %0,90
                  aralığında oluşması halinde farklı başvuru tutarlarında
                  yaklaşık kaç lot gelebileceğini gösterir.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[680px] text-left text-sm">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="px-4 py-3 font-semibold">
                            Başvuru tutarı
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            Talep edilen lot
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            %1 dağıtım
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            %0,90 dağıtım
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {basvuruSenaryolari.map((row) => (
                          <tr key={row.basvuru}>
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {row.basvuru}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.talepLot}
                            </td>
                            <td className="px-4 py-3 font-bold text-slate-900">
                              {row.yuzde1Lot}
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-700">
                              {row.yuzde09Lot}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Son halka arzlara göre Beta Enerji’de beklenti
                </h2>

                <p className="mt-3">
                  Son yüksek başvurulu halka arzlarda dağıtım oranları genelde
                  %1 ile %3,5 bandında oluştu. UCAYM örneğinde oran %1,05
                  seviyesine kadar geriledi. Beta Enerji tarafında yüksek
                  başvuruya güçlü para girişi olması halinde %1 - %0,90 bandı
                  daha gerçekçi bir senaryo olarak takip edilebilir.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Hisse</th>
                          <th className="px-4 py-3 font-semibold">
                            Kaç kat talep
                          </th>
                          <th className="px-4 py-3 font-semibold">
                            Dağıtım oranı
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {sonHalkaArzlar.map((row) => (
                          <tr key={row.hisse}>
                            <td className="px-4 py-3 font-bold text-slate-900">
                              {row.hisse}
                            </td>
                            <td className="px-4 py-3 text-slate-700">
                              {row.talep}
                            </td>
                            <td className="px-4 py-3 font-bold text-emerald-700">
                              {row.oran}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Kısa sonuç: Beta Enerji halka arzında yüksek başvuru için
                minimum tutar 120.040 TL. Yüksek başvuruya ayrılan büyüklük
                yaklaşık 243 milyon TL. Talebin 24 - 27 milyar TL bandına
                yaklaşması halinde dağıtım oranı yaklaşık %1 - %0,90 civarında
                oluşabilir.
              </div>

              <section>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Sık sorulan sorular
                </h2>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-base font-semibold text-slate-800">
                      Beta Enerji yüksek başvuru için kaç lot gerekli?
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      Yüksek başvuru dilimine girmek için 3.001 lot ve üzeri
                      başvuru yapılması gerekiyor.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-base font-semibold text-slate-800">
                      Beta Enerji yüksek başvuru minimum kaç TL?
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      Halka arz fiyatı 40 TL olduğu için minimum yüksek başvuru
                      tutarı 120.040 TL’dir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-base font-semibold text-slate-800">
                      Beta Enerji yüksek başvuru dağıtım oranı ne olabilir?
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      Yoğun talep gelmesi halinde dağıtım oranının yaklaşık %1 -
                      %0,90 bandında oluşabileceği tahmin edilebilir.
                    </p>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-[0_2px_16px_rgba(15,23,42,0.12)]">
                <div className="grid gap-0 md:grid-cols-[1.25fr_1fr]">
                  <a
                    href={youtubeVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-video overflow-hidden bg-black"
                    aria-label="Beta Enerji halka arz video değerlendirmesini YouTube'da izle"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={youtubeVideo.thumbnail}
                      alt="Beta Enerji halka arz yüksek başvuru video kapak görseli"
                      width={480}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
                    <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-black/30 transition group-hover:scale-110">
                      <span className="ml-1 text-3xl leading-none">▶</span>
                    </div>
                  </a>

                  <div className="flex flex-col justify-center p-5 md:p-6">
                    <span className="mb-3 inline-flex w-fit rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white">
                      YouTube Video
                    </span>

                    <h2 className="text-xl font-bold leading-snug text-white md:text-2xl">
                      Beta Enerji halka arzında yüksek başvuru kaç lot
                      getirebilir?
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Yüksek başvuru minimum tutarı, olası dağıtım oranı ve
                      farklı talep senaryolarını videoda anlattım.
                    </p>

                    <a
                      href={youtubeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-red-600 hover:text-white"
                    >
                      Videoyu İzle →
                    </a>
                  </div>
                </div>
              </section>

              <HaberIlgiliBolumler
                slug="beta-enerji-yuksek-basvuru-dagitim"
                baslik="Beta Enerji Halka Arzında Yüksek Başvuru Dağıtımı %1 Civarında Olabilir mi?"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerikteki hesaplamalar senaryo çalışmasıdır. Kesin
                dağıtım miktarı, halka arz sonuçları açıklandığında belli
                olacaktır.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/beta-enerji-yuksek-basvuru-dagitim" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
