import type { Metadata } from "next";
import Link from "next/link";
import { bekleyenDeger, halkaArzGetir } from "@/lib/halka-arz";

const canonical = "https://www.hocaileborsa.com/halka-arz/takvim";
const title = "Halka Arz Takvimi 2026 | Güncel Dağıtım ve İşlem Tarihleri";
const description =
  "Güncel halka arz takvimi: Masfen Enerji ve Kardemir Çelik Sanayi dağıtım sonuçları, Metgün Enerji ile Albayrak Hazır Beton işlem başlangıçları ve yeni onaylı izahname beklentileri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  keywords: [
    "halka arz takvimi",
    "halka arz takvimi 2026",
    "bu hafta halka arz",
    "METEN işlem tarihi",
    "ALBTN işlem tarihi",
    "KARCL dağıtım sonuçları",
    "MASFN dağıtım sonuçları",
    "Quick Sigorta halka arz",
    "Bewen Enerji halka arz",
    "Metgün Enerji halka arz",
    "Albayrak Hazır Beton halka arz",
    "Kardemir Çelik halka arz",
    "Masfen Enerji halka arz",
  ],
  openGraph: { title, description, url: canonical, type: "website" },
};

type TakvimSirketi = {
  slug: string;
  tarih: string;
  durum: string;
};

type TakvimSatiri = {
  slug: string;
  izahnameHref: string;
  sirketAdi: string;
  bistKodu: string;
  tarih: string;
  fiyat: string;
  dagitim: string;
  pazar: string;
  durum: string;
};

type IzahnameBekleyenSirket = {
  sirketAdi: string;
  durum: string;
};

const dagitimSonucuBeklenenTakvimi: TakvimSirketi[] = [
  {
    slug: "masfen-enerji",
    tarih: "",
    durum: "Dağıtım sonuçları açıklanacak",
  },
  {
    slug: "kardemir-celik-sanayi",
    tarih: "",
    durum: "Dağıtım sonuçları açıklanacak",
  },
];

const islemBaslangiciTakvimi: TakvimSirketi[] = [
  {
    slug: "metgun-enerji-yatirimlari",
    tarih: "28 Temmuz 2026 Salı",
    durum: "İşleme başlayacak",
  },
  {
    slug: "albayrak-hazir-beton-san-ve-tic",
    tarih: "29 Temmuz 2026 Çarşamba",
    durum: "İşleme başlayacak",
  },
];

const izahnameYayiniBeklenenler: IzahnameBekleyenSirket[] = [
  {
    sirketAdi: "Quick Sigorta A.Ş.",
    durum: "Onaylı izahnamenin yayımlanması bekleniyor",
  },
  {
    sirketAdi: "Bewen Enerji A.Ş.",
    durum: "Onaylı izahnamenin yayımlanması bekleniyor",
  },
];

const aktifIzahnameSluglari = [
  ...dagitimSonucuBeklenenTakvimi.map((item) => item.slug),
  ...islemBaslangiciTakvimi.map((item) => item.slug),
];

function takvimSatiri(item: TakvimSirketi): TakvimSatiri | null {
  const veri = halkaArzGetir(item.slug);
  if (!veri) return null;

  return {
    slug: item.slug,
    izahnameHref: `/halka-arz/onayli-izahnameler/${item.slug}`,
    sirketAdi: veri.sirketAdi,
    bistKodu: veri.bistKodu || veri.ozet.bistKodu || "—",
    tarih: item.tarih,
    fiyat: bekleyenDeger(veri.ozet.fiyatAralik)
      ? "—"
      : veri.ozet.fiyatAralik ?? "—",
    dagitim: bekleyenDeger(veri.ozet.dagitimYontemi)
      ? "—"
      : veri.ozet.dagitimYontemi ?? "—",
    pazar: bekleyenDeger(veri.ozet.pazar) ? "—" : veri.ozet.pazar ?? "—",
    durum: item.durum,
  };
}

function dagitimSonucuBeklenenArzlar(): TakvimSatiri[] {
  return dagitimSonucuBeklenenTakvimi
    .map(takvimSatiri)
    .filter((x): x is TakvimSatiri => x !== null);
}

function islemeBaslayacakArzlar(): TakvimSatiri[] {
  return islemBaslangiciTakvimi
    .map(takvimSatiri)
    .filter((x): x is TakvimSatiri => x !== null);
}

function aktifOnayliIzahnameler(): TakvimSatiri[] {
  return aktifIzahnameSluglari
    .map((slug) => takvimSatiri({ slug, tarih: "", durum: "" }))
    .filter((x): x is TakvimSatiri => x !== null);
}

export default function HalkaArzTakvimPage() {
  const dagitimSonucuBeklenenler = dagitimSonucuBeklenenArzlar();
  const islemeBaslayacaklar = islemeBaslayacakArzlar();
  const aktifIzahnameler = aktifOnayliIzahnameler();
  const aktifHisseSayisi = new Set(aktifIzahnameSluglari).size;

  const faqItems = [
    {
      soru: "Dağıtım sonuçları açıklanacak halka arzlar hangileri?",
      cevap:
        "Masfen Enerji ve Kardemir Çelik Sanayi halka arzlarının dağıtım sonuçlarının açıklanması bekleniyor.",
    },
    {
      soru: "Bu hafta hangi halka arzlar işleme başlayacak?",
      cevap:
        "Metgün Enerji Yatırımları 28 Temmuz 2026 Salı, Albayrak Hazır Beton ise 29 Temmuz 2026 Çarşamba günü Borsa İstanbul'da işleme başlayacak.",
    },
    {
      soru: "Onaylı izahnamesi beklenen halka arzlar hangileri?",
      cevap:
        "Quick Sigorta ve Bewen Enerji halka arzlarına ait onaylı izahnamelerin yayımlanması bekleniyor.",
    },
    {
      soru: "Eski halka arzlar nereden takip edilir?",
      cevap:
        "Geçmiş halka arz performansları ve işlem sonrası kapanış bilgileri için halka arz tavan serisi takip sayfası kullanılmalıdır.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: canonical,
      mainEntityOfPage: canonical,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: { "@type": "Answer", text: item.cevap },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
            Halka Arz Takvimi 2026
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Güncel halka arz takviminde dağıtım sonuçları açıklanacak şirketler,
            Borsa İstanbul&apos;da işleme başlayacak halka arzlar ve onaylı
            izahnamesinin yayımlanması beklenen şirketler tek sayfada takip
            edilebilir.
          </p>
        </header>

        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            {
              etiket: "Dağıtım Sonucu Beklenen",
              deger: String(dagitimSonucuBeklenenler.length),
            },
            {
              etiket: "İşleme Başlayacak",
              deger: String(islemeBaslayacaklar.length),
            },
            {
              etiket: "İzahname Yayını Beklenen",
              deger: String(izahnameYayiniBeklenenler.length),
            },
            { etiket: "Aktif Hisse", deger: String(aktifHisseSayisi) },
          ].map((k) => (
            <div
              key={k.etiket}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-blue-700 md:text-2xl">
                {k.deger}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 md:text-sm">
                {k.etiket}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-amber-50 px-5 py-4">
            <h2 className="text-lg font-bold text-amber-900 md:text-xl">
              Dağıtım Sonuçları Açıklanacak Halka Arzlar
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[820px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Dağıtım</th>
                  <th className="px-4 py-3 font-semibold">Durum</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    İzahname
                  </th>
                </tr>
              </thead>
              <tbody>
                {dagitimSonucuBeklenenler.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        aria-label={`${item.bistKodu} halka arz detayına git`}
                        className="inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        {item.bistKodu}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-500"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{item.fiyat}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.dagitim}
                    </td>
                    <td className="px-4 py-3 font-semibold text-amber-800">
                      {item.durum}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Onaylı izahname
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-cyan-50 px-5 py-4">
            <h2 className="text-lg font-bold text-cyan-900 md:text-xl">
              İşleme Başlayacak Halka Arzlar
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">İşlem Tarihi</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Pazar</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    İzahname
                  </th>
                </tr>
              </thead>
              <tbody>
                {islemeBaslayacaklar.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        aria-label={`${item.bistKodu} halka arz detayına git`}
                        className="inline-flex min-w-20 items-center justify-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        {item.bistKodu}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700 hover:decoration-blue-500"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-cyan-800">
                      {item.tarih}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{item.fiyat}</td>
                    <td className="px-4 py-3 text-slate-700">{item.pazar}</td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={item.izahnameHref}
                        prefetch={false}
                        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Onaylı izahname
                        <span aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-violet-50 px-5 py-4">
            <h2 className="text-lg font-bold text-violet-900 md:text-xl">
              Onaylı İzahnamesinin Yayımlanması Beklenen Halka Arzlar
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[620px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">Durum</th>
                </tr>
              </thead>
              <tbody>
                {izahnameYayiniBeklenenler.map((item, i) => (
                  <tr
                    key={item.sirketAdi}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {item.sirketAdi}
                    </td>
                    <td className="px-4 py-3 font-semibold text-violet-800">
                      {item.durum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200 bg-blue-50 px-5 py-4">
            <div>
              <h2 className="text-lg font-bold text-blue-900 md:text-xl">
                Aktif Takvimdeki SPK Onaylı İzahnameler
              </h2>
              <p className="mt-1 text-sm leading-6 text-blue-900/80">
                Bu bölüm dağıtım sonucu beklenen veya işleme başlayacak halka
                arzların onaylı izahname sayfalarını gösterir.
              </p>
            </div>
            <Link
              href="/halka-arz/onayli-izahnameler"
              prefetch={false}
              className="text-xs font-semibold text-blue-700 hover:underline md:text-sm"
            >
              Tüm onaylı izahnameler →
            </Link>
          </div>

          <div className="grid gap-2 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {aktifIzahnameler.map((item) => (
              <Link
                key={item.slug}
                href={item.izahnameHref}
                prefetch={false}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                <span className="block text-blue-700">{item.bistKodu}</span>
                <span className="mt-1 block">{item.sirketAdi}</span>
                <span className="mt-2 block text-xs text-slate-500">
                  Onaylı izahnameyi incele →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.soru}>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.soru}
                </h3>
                <p className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                  {item.cevap}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-500 md:text-sm">
          Bu sayfadaki bilgiler aktif halka arz takvimini pratik şekilde takip
          etmek için hazırlanmıştır; yatırım tavsiyesi değildir. Tarih, işlem
          başlangıcı ve halka arz koşulları şirketlerin KAP, Borsa İstanbul ve
          izahname duyurularıyla birlikte kontrol edilmelidir.
        </p>
      </div>
    </main>
  );
}
