import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: {
    absolute: "Borsa Yükseldi, Altın Geriledi: Haftalık Piyasa Özeti",
  },
  description:
    seoAciklamasi("BIST 100 haftayı yüzde 1,78 yükselişle 13.938,48 puandan tamamladı. Altın haftalık bazda değer kaybederken döviz tarafında sınırlı yükseliş görüldü.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti-discover.webp"],
  },
};

const piyasaOzeti = [
  {
    baslik: "BIST 100 Haftalık Değişim",
    deger: "%1,78 yükseliş",
  },
  {
    baslik: "BIST 100 Kapanış",
    deger: "13.938,48 puan",
  },
  {
    baslik: "Haftalık En Yüksek",
    deger: "14.125,84 puan",
  },
  {
    baslik: "Haftalık En Düşük",
    deger: "13.567,35 puan",
  },
];

const sektorPerformansi = [
  {
    sektor: "Mali Endeks",
    degisim: "%5,41",
    kapanis: "19.643,91",
    durum: "Yükseldi",
  },
  {
    sektor: "Teknoloji Endeksi",
    degisim: "%2,22",
    kapanis: "47.450,78",
    durum: "Yükseldi",
  },
  {
    sektor: "Sanayi Endeksi",
    degisim: "%-2,26",
    kapanis: "17.757,54",
    durum: "Geriledi",
  },
  {
    sektor: "Hizmetler Endeksi",
    degisim: "%-0,26",
    kapanis: "12.717,60",
    durum: "Geriledi",
  },
];

const enCokYukselenler = [
  {
    hisse: "Katılımevim",
    degisim: "%16,09",
  },
  {
    hisse: "Yapı ve Kredi Bankası",
    degisim: "%13,39",
  },
  {
    hisse: "Akbank",
    degisim: "%12,56",
  },
];

const enCokDusenler = [
  {
    hisse: "Margün Enerji",
    degisim: "%-33,33",
  },
  {
    hisse: "Astor Enerji",
    degisim: "%-16,25",
  },
  {
    hisse: "Fenerbahçe Futbol AŞ",
    degisim: "%-15,82",
  },
];

const enDegerliSirketler = [
  {
    sirket: "ASELSAN",
    piyasaDegeri: "1 trilyon 692 milyar 900 milyon TL",
  },
  {
    sirket: "Garanti BBVA",
    piyasaDegeri: "570 milyar 780 milyon TL",
  },
  {
    sirket: "Enka İnşaat",
    piyasaDegeri: "558 milyar TL",
  },
];

const altinVeDoviz = [
  {
    varlik: "Gram Altın",
    degisim: "%-3,66",
    fiyat: "6.232 TL",
  },
  {
    varlik: "Cumhuriyet Altını",
    degisim: "%-3,64",
    fiyat: "42.006 TL",
  },
  {
    varlik: "Çeyrek Altın",
    degisim: "%-3,66",
    fiyat: "10.439 TL",
  },
  {
    varlik: "Dolar",
    degisim: "%0,39",
    fiyat: "46,2650 TL",
  },
  {
    varlik: "Avro",
    degisim: "%0,39",
    fiyat: "53,5740 TL",
  },
  {
    varlik: "İngiliz Sterlini",
    degisim: "%0,42",
    fiyat: "62,0620 TL",
  },
  {
    varlik: "İsviçre Frangı",
    degisim: "%-0,08",
    fiyat: "58,0880 TL",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Borsa Haftayı Yükselişle Kapattı, Altın Geriledi: BIST 100’de Haftalık Kazanç %1,78 Oldu",
  description:
    "BIST 100 haftayı yüzde 1,78 yükselişle 13.938,48 puandan tamamladı. Altın haftalık bazda gerilerken döviz tarafında sınırlı yükseliş izlendi.",
  datePublished: "2026-06-13T10:00:00+03:00",
  dateModified: "2026-06-13T10:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti",
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
    "https://www.hocaileborsa.com/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti-discover.webp",
  inLanguage: "tr",
};

export default function BorsaYukseldiAltinDustuHaftalikPiyasaOzetiPage() {
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
              src="/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti-discover.webp"
              alt="Borsa yükseldi altın düştü haftalık piyasa özeti"
              width={1200}
              height={900}
priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Borsa Haftayı Yükselişle Kapattı, Altın Geriledi
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Haftalık Piyasa Özeti
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
                Bu hafta yatırım araçlarında dikkat çeken ayrışma yaşandı.
                Borsa İstanbul’da BIST 100 endeksi haftayı yükselişle
                tamamlarken, altın fiyatlarında haftalık bazda geri çekilme
                görüldü.
              </p>

              <p>
                BIST 100 endeksi haftayı yüzde 1,78 artışla 13.938,48 puandan
                kapattı. Endeks hafta içinde en düşük 13.567,35 puanı, en
                yüksek ise 14.125,84 puanı gördü.
              </p>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Haftalık Piyasa Özeti
                </h2>

                <div className="grid gap-3 sm:grid-cols-2">
                  {piyasaOzeti.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {item.baslik}
                      </p>
                      <p className="mt-1 text-base font-bold text-slate-900">
                        {item.deger}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <h2 className="text-xl font-bold text-slate-900">
                BIST 100’de Haftalık Yükselişin Arkasında Mali Endeks Öne Çıktı
              </h2>

              <p>
                Borsa İstanbul’da sektör endeksleri arasında bu hafta en güçlü
                görünüm mali endekste oluştu. Mali endeks yüzde 5,41 değer
                kazanarak 19.643,91 puana yükseldi.
              </p>

              <p>
                Teknoloji endeksi de haftalık bazda yüzde 2,22 artışla
                47.450,78 puana çıktı. Buna karşılık sanayi endeksi yüzde 2,26
                düşüşle 17.757,54 puana, hizmetler endeksi ise yüzde 0,26
                azalışla 12.717,60 puana geriledi.
              </p>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Sektör Endekslerinde Haftalık Görünüm
                </h2>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full min-w-[360px] text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Endeks</th>
                        <th className="px-4 py-3 font-semibold">Değişim</th>
                        <th className="px-4 py-3 font-semibold">Kapanış</th>
                        <th className="px-4 py-3 font-semibold">Durum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sektorPerformansi.map((item) => (
                        <tr key={item.sektor}>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            {item.sektor}
                          </td>
                          <td
                            className={`px-4 py-3 font-bold ${
                              item.degisim.includes("%-")
                                ? "text-red-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {item.degisim}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {item.kapanis}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.durum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <h2 className="text-xl font-bold text-slate-900">
                Haftanın En Çok Yükselen Hissesi Katılımevim Oldu
              </h2>

              <p>
                BIST 100 içinde haftanın en çok prim yapan hissesi Katılımevim
                Tasarruf Finansman AŞ oldu. Katılımevim hisseleri haftalık bazda
                yüzde 16,09 yükseldi.
              </p>

              <p>
                Katılımevim’i yüzde 13,39 yükselişle Yapı ve Kredi Bankası,
                yüzde 12,56 artışla Akbank takip etti. Haftalık performansta
                bankacılık hisselerinin öne çıkması, BIST 100’deki yükselişi
                destekleyen başlıklardan biri oldu.
              </p>

              <section className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5">
                  <h2 className="mb-4 text-lg font-bold text-emerald-950">
                    Haftanın En Çok Yükselenleri
                  </h2>

                  <div className="space-y-3">
                    {enCokYukselenler.map((item) => (
                      <div
                        key={item.hisse}
                        className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white px-4 py-3"
                      >
                        <span className="font-semibold text-slate-800">
                          {item.hisse}
                        </span>
                        <span className="font-bold text-emerald-700">
                          {item.degisim}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 md:p-5">
                  <h2 className="mb-4 text-lg font-bold text-red-950">
                    Haftanın En Çok Düşenleri
                  </h2>

                  <div className="space-y-3">
                    {enCokDusenler.map((item) => (
                      <div
                        key={item.hisse}
                        className="flex items-center justify-between rounded-xl border border-red-100 bg-white px-4 py-3"
                      >
                        <span className="font-semibold text-slate-800">
                          {item.hisse}
                        </span>
                        <span className="font-bold text-red-700">
                          {item.degisim}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <h2 className="text-xl font-bold text-slate-900">
                Borsa İstanbul’un En Değerli Şirketleri
              </h2>

              <p>
                Haftanın kapanışı itibarıyla Borsa İstanbul’da piyasa değeri en
                yüksek şirketler sıralamasında ASELSAN ilk sırada yer aldı.
                ASELSAN’ın piyasa değeri 1 trilyon 692 milyar 900 milyon TL
                oldu.
              </p>

              <p>
                ASELSAN’ı 570 milyar 780 milyon TL piyasa değeriyle Garanti
                BBVA, 558 milyar TL piyasa değeriyle Enka İnşaat ve Sanayi AŞ
                izledi.
              </p>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  En Değerli Şirketler
                </h2>

                <div className="space-y-3">
                  {enDegerliSirketler.map((item, index) => (
                    <div
                      key={item.sirket}
                      className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {index + 1}. Sıra
                        </p>
                        <p className="font-bold text-slate-900">
                          {item.sirket}
                        </p>
                      </div>
                      <p className="font-semibold text-slate-700">
                        {item.piyasaDegeri}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <h2 className="text-xl font-bold text-slate-900">
                Altın Haftayı Değer Kaybıyla Tamamladı
              </h2>

              <p>
                Borsa tarafında yükseliş yaşanırken, altın fiyatlarında haftalık
                bazda düşüş görüldü. 24 ayar külçe altının gram fiyatı geçen
                haftaya göre yüzde 3,66 azalarak 6.232 TL’ye geriledi.
              </p>

              <p>
                Cumhuriyet altınının satış fiyatı yüzde 3,64 düşüşle 42.006 TL
                olurken, çeyrek altının satış fiyatı yüzde 3,66 gerileyerek
                10.439 TL seviyesinde haftayı tamamladı.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Döviz Tarafında Sınırlı Yükseliş
              </h2>

              <p>
                Döviz tarafında haftalık hareketler sınırlı kaldı. Doların satış
                fiyatı yüzde 0,39 artışla 46,2650 TL’ye, avronun satış fiyatı
                ise yüzde 0,39 yükselişle 53,5740 TL’ye çıktı.
              </p>

              <p>
                İngiliz sterlini yüzde 0,42 artarak 62,0620 TL’ye yükseldi.
                İsviçre frangı ise haftalık bazda yüzde 0,08 değer kaybederek
                58,0880 TL’den alıcı buldu.
              </p>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Altın ve Dövizde Haftalık Görünüm
                </h2>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full min-w-[360px] text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Varlık</th>
                        <th className="px-4 py-3 font-semibold">
                          Haftalık Değişim
                        </th>
                        <th className="px-4 py-3 font-semibold">Fiyat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {altinVeDoviz.map((item) => (
                        <tr key={item.varlik}>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            {item.varlik}
                          </td>
                          <td
                            className={`px-4 py-3 font-bold ${
                              item.degisim.includes("%-")
                                ? "text-red-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {item.degisim}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {item.fiyat}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Haftanın genel görünümünde borsa pozitif ayrışırken, altın
                tarafındaki düşüş yatırım araçları arasında getiri farkını
                belirginleştirdi. BIST 100’deki yükselişte özellikle mali
                endeks ve banka hisselerindeki güçlü performans öne çıktı.
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm font-medium leading-7 text-indigo-900 md:text-base">
                Google aramalarında öne çıkabilecek ana sorgular: BIST 100
                haftalık kapanış, borsa haftalık piyasa özeti, altın haftalık
                düşüş, haftanın en çok yükselen hisseleri, Borsa İstanbul en
                değerli şirketler.
              </div>

              <HaberIlgiliBolumler
                slug="borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti"
                baslik="Borsa Haftayı Yükselişle Kapattı, Altın Geriledi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/borsa-yukseldi-altin-dustu-haftalik-piyasa-ozeti" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
