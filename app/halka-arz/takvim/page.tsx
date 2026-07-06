import type { Metadata } from "next";
import Link from "next/link";
import { bekleyenDeger, halkaArzGetir } from "@/lib/halka-arz";

const canonical = "https://www.hocaileborsa.com/halka-arz/takvim";
const title = "Halka Arz Takvimi 2026 | Güncel Talep ve İşlem Tarihleri";
const description =
  "Güncel halka arz takvimi: Bu hafta talep toplayan Saat ve Saat (SSAAT), Şa-Ra Enerji (SARAE) ile işleme başlayacak ORZAX, GOLDA, EKIM ve ISVEA tarihleri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  keywords: [
    "halka arz takvimi",
    "halka arz takvimi 2026",
    "bu hafta halka arz",
    "SSAAT halka arz",
    "SARAE halka arz",
    "ORZAX işlem tarihi",
    "GOLDA işlem tarihi",
    "EKIM işlem tarihi",
    "ISVEA işlem tarihi",
  ],
  openGraph: { title, description, url: canonical, type: "website" },
};

type TakvimSirketi = {
  slug: string;
  tarih: string;
  durum: string;
};

type TalepToplamaArzi = TakvimSirketi & {
  talepSaatleri: string;
};

type TakvimSatiri = {
  slug: string;
  href: string;
  sirketAdi: string;
  bistKodu: string;
  tarih: string;
  fiyat: string;
  dagitim: string;
  pazar: string;
  durum: string;
  talepSaatleri?: string;
};

const talepToplamaTakvimi: TalepToplamaArzi[] = [
  {
    slug: "saat-ve-saat-san-ve-tic",
    tarih: "06-07-08 Temmuz 2026",
    durum: "Talep topluyor",
    talepSaatleri: "09:00 - 17:00",
  },
  {
    slug: "sa-ra-enerji-insaat-tic-ve-san",
    tarih: "08-09-10 Temmuz 2026",
    durum: "Talep toplayacak",
    talepSaatleri: "09:00 - 17:00",
  },
];

const islemBaslangiciTakvimi: TakvimSirketi[] = [
  {
    slug: "orzaks-ilac-ve-kimya-san-tic",
    tarih: "07 Temmuz 2026 Salı",
    durum: "İşleme başlayacak",
  },
  {
    slug: "golda-gida-san-ve-tic",
    tarih: "08 Temmuz 2026 Çarşamba",
    durum: "İşleme başlayacak",
  },
  {
    slug: "ekim-turizm-tic-ve-san",
    tarih: "09 Temmuz 2026 Perşembe",
    durum: "İşleme başlayacak",
  },
  {
    slug: "isvea-seramik-ve-banyo-urunleri-sanayi",
    tarih: "10 Temmuz 2026 Cuma",
    durum: "İşleme başlayacak",
  },
];

const aktifIzahnameSluglari = [
  ...talepToplamaTakvimi.map((item) => item.slug),
  ...islemBaslangiciTakvimi.map((item) => item.slug),
];

function takvimSatiri(item: TakvimSirketi | TalepToplamaArzi): TakvimSatiri | null {
  const veri = halkaArzGetir(item.slug);
  if (!veri) return null;

  return {
    slug: item.slug,
    href: `/halka-arz/onayli-izahnameler/${item.slug}`,
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
    talepSaatleri: "talepSaatleri" in item ? item.talepSaatleri : undefined,
  };
}

function talepToplayanArzlar(): TakvimSatiri[] {
  return talepToplamaTakvimi
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
  const talepToplayanlar = talepToplayanArzlar();
  const islemeBaslayacaklar = islemeBaslayacakArzlar();
  const aktifIzahnameler = aktifOnayliIzahnameler();
  const aktifHisseSayisi = new Set(aktifIzahnameSluglari).size;

  const faqItems = [
    {
      soru: "Bu hafta hangi halka arzlar talep topluyor?",
      cevap:
        "Saat ve Saat (SSAAT) halka arzı 06-07-08 Temmuz 2026 tarihlerinde, Şa-Ra Enerji (SARAE) halka arzı ise 08-09-10 Temmuz 2026 tarihlerinde talep topluyor.",
    },
    {
      soru: "Bu hafta hangi halka arzlar işleme başlayacak?",
      cevap:
        "ORZAX 07 Temmuz 2026 Salı, GOLDA 08 Temmuz 2026 Çarşamba, EKIM 09 Temmuz 2026 Perşembe ve ISVEA 10 Temmuz 2026 Cuma günü Borsa İstanbul'da işleme başlayacak.",
    },
    {
      soru: "SPK onaylı izahname bölümünde neden az şirket var?",
      cevap:
        "Bu sayfada SPK onaylı izahnameler bölümü yalnızca aktif takvimde yer alan, yani talep toplayan veya işleme başlayacak halka arzlarla sınırlı tutulur.",
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
            Bu sayfa yalnızca güncel halka arz akışını gösterir: bu hafta talep
            toplayan şirketler, önümüzdeki işlem başlangıçları ve bu hisselere
            ait onaylı izahname bağlantıları. Eski halka arzlar ana takvimden
            çıkarılmıştır.
          </p>
        </header>

        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { etiket: "Talep Toplayan", deger: String(talepToplayanlar.length) },
            {
              etiket: "İşleme Başlayacak",
              deger: String(islemeBaslayacaklar.length),
            },
            {
              etiket: "İlgili Onaylı İzahname",
              deger: String(aktifIzahnameler.length),
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
          <div className="border-b border-slate-200 bg-emerald-50 px-5 py-4">
            <h2 className="text-lg font-bold text-emerald-900 md:text-xl">
              Bu Hafta Talep Toplayan Halka Arzlar
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[860px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">Talep Toplama</th>
                  <th className="px-4 py-3 font-semibold">Saat</th>
                  <th className="px-4 py-3 font-semibold">Fiyat</th>
                  <th className="px-4 py-3 font-semibold">Dağıtım</th>
                  <th className="px-4 py-3 font-semibold">Pazar</th>
                </tr>
              </thead>
              <tbody>
                {talepToplayanlar.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-bold text-slate-900">
                      {item.bistKodu}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.href}
                        prefetch={false}
                        className="hover:text-blue-600"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">
                      {item.tarih}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {item.talepSaatleri}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{item.fiyat}</td>
                    <td className="px-4 py-3 text-slate-700">{item.dagitim}</td>
                    <td className="px-4 py-3 text-slate-700">{item.pazar}</td>
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
            <table className="min-w-[760px] w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="px-4 py-3 font-semibold">Hisse</th>
                  <th className="px-4 py-3 font-semibold">Şirket</th>
                  <th className="px-4 py-3 font-semibold">İşlem Tarihi</th>
                  <th className="px-4 py-3 font-semibold">Arz Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Pazar</th>
                </tr>
              </thead>
              <tbody>
                {islemeBaslayacaklar.map((item, i) => (
                  <tr
                    key={item.slug}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-bold text-slate-900">
                      {item.bistKodu}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      <Link
                        href={item.href}
                        prefetch={false}
                        className="hover:text-blue-600"
                      >
                        {item.sirketAdi}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-semibold text-cyan-800">
                      {item.tarih}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{item.fiyat}</td>
                    <td className="px-4 py-3 text-slate-700">{item.pazar}</td>
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
                Bu bölüm yalnızca yukarıdaki talep toplama veya işlem başlangıcı
                tablolarında yer alan şirketleri gösterir.
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
                href={item.href}
                prefetch={false}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                {item.bistKodu} · {item.sirketAdi}
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
          etmek için hazırlanmıştır; yatırım tavsiyesi değildir. Tarih, saat ve
          koşullar şirketlerin KAP, Borsa İstanbul ve izahname duyurularıyla
          birlikte kontrol edilmelidir.
        </p>
      </div>
    </main>
  );
}
