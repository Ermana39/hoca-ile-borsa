import { serializeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzOrtaklikYapisi from "@/components/HalkaArzOrtaklikYapisi";
import {
  bekleyenDeger,
  halkaArzGetir,
  statikSlugVar,
  taslakCanonicalYolu,
  tahsisatMetni,
  tasinmamisSluglar,
  type HalkaArzVeri,
} from "@/lib/halka-arz";
import { riskMaddeleri, riskOzetCumlesi } from "@/lib/halka-arz-risk";
import { halkaArzSeoMetinleri } from "@/lib/halka-arz-seo";

export const dynamicParams = false;


function turkceAramaMetni(metin: string) {
  return metin
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function sinboTaslakVerisiniGuncelle(veri: HalkaArzVeri): HalkaArzVeri {
  const sinboMu = turkceAramaMetni(veri.sirketAdi).includes("sinbo");
  if (!sinboMu) return veri;

  const guncelTahsisat = veri.tahsisat.filter((item) => {
    const metin = turkceAramaMetni(tahsisatMetni(item));
    return !metin.includes("yurt disi kurumsal");
  });

  const guncelTahsisatNotlari = (veri.tahsisatNotlari || []).filter((not) => {
    const metin = turkceAramaMetni(not);
    return !metin.includes("yurt disi kurumsal");
  });

  return {
    ...veri,
    baslikMeta: {
      ...veri.baslikMeta,
      description:
        "Sinbo Küçük Ev Aletleri halka arz taslağının güncel pay miktarı, ortak satışı, konsorsiyum lideri, fiyat istikrarı ve fon kullanım planı.",
    },
    ozet: {
      ...veri.ozet,
      pay: "301.435.772 lot",
      araciKurum: "Kuveyt Türk Yatırım",
    },
    toplamPay: "301.435.772 lot",
    halkaArzSekli: [
      "Halka arz, sermaye artırımı ve ortak satışı yöntemleriyle gerçekleştirilecektir.",
      "68.000.000 lot pay ortak satışı yoluyla satışa sunulacaktır.",
      "Toplam 301.435.772 lot payın halka arz edilmesi planlanmaktadır.",
    ],
    oneCikanlar: [
      {
        title: "Toplam Halka Arz",
        value: "301.435.772 lot",
        desc: "Güncellenen taslak izahnamede belirtilen toplam satış miktarı.",
      },
      {
        title: "Konsorsiyum Lideri",
        value: "Kuveyt Türk Yatırım",
        desc: "Önceki taslakta yer alan Tera Yatırım yerine görevlendirildi.",
      },
      {
        title: "Ortak Satışı",
        value: "68.000.000 lot",
        desc: "Güncellenen taslak izahnameyle halka arza ortak satışı eklendi.",
      },
      {
        title: "Fiyat İstikrarı",
        value: "30 gün",
        desc: "Brüt halka arz gelirinin %10'u ile gerçekleştirilmesi planlanıyor.",
      },
    ],
    tahsisat: guncelTahsisat,
    tahsisatNotlari: [
      ...guncelTahsisatNotlari,
      "Güncellenen taslak izahnamede yurt dışı kurumsal yatırımcılara ayrı tahsisat planlanmamaktadır.",
    ],
    fonKullanim: [
      "%40 - İşletme sermayesi ihtiyacının karşılanması",
      "%35 - Finansal borçların ödenmesi",
      "%25 - Yeni yatırımların finansmanı",
    ],
    fonKullanimYorumu:
      "Güncellenen planda halka arz gelirinin en büyük bölümü işletme sermayesine ayrılmıştır. Borç ödemelerinin payı önceki taslağa göre azaltılırken yeni yatırımlar için ayrılan oran artırılmıştır.",
    taahhutOzeti: {
      ...veri.taahhutOzeti,
      fiyatIstikrari:
        "Brüt halka arz gelirinin %10'u kullanılarak 30 gün süreyle fiyat istikrarı sağlayıcı işlemler yapılması planlanmaktadır.",
    },
  };
}

// Build aşamasında SADECE taşınması tamamlanmış (JSON'u olan ve artık eski
// statik .tsx'i bulunmayan) slug'lar üretilir. Eski .tsx hâlâ duran slug'lar
// için Next.js zaten statik sayfayı servis eder; burada üretmeyiz.
export function generateStaticParams() {
  return tasinmamisSluglar().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hamVeri = halkaArzGetir(slug);
  if (!hamVeri) return {};
  const veri = sinboTaslakVerisiniGuncelle(hamVeri);
  const seoMetinleri = halkaArzSeoMetinleri(
    veri,
    veri.seo?.contentStatus === "onayli" ? "onayli" : "taslak"
  );
  const robotsSeo = veri.seo?.robots;
  const robots = {
    // Taslak belge detayları tamamlanmamış içerik havuzudur. Sayfa erişilebilir
    // kalır; yalnızca onaylı aşamaya taşındığında dizine açılır.
    index: false,
    follow: robotsSeo?.follow ?? true,
  };
  if (veri.seo?.contentStatus === "onayli") {
    return {
      title: { absolute: seoMetinleri.title },
      description: seoMetinleri.description,
      robots,
      alternates: {
        canonical:
          veri.seo.canonical ||
          `https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/${slug}`,
      },
      openGraph: {
        title: veri.baslikMeta.title,
        description: veri.baslikMeta.description,
      },
    };
  }
  return {
    title: { absolute: seoMetinleri.title },
    description: seoMetinleri.description,
    robots,
    alternates: {
      canonical: `https://www.hocaileborsa.com${taslakCanonicalYolu(veri, slug)}`,
    },
    openGraph: {
      title: veri.baslikMeta.title,
      description: veri.baslikMeta.description,
    },
  };
}

// Sayfada görünür SSS ile şema arasında tek kaynak. Yalnızca kesinleşmiş
// (bekleyen olmayan) değerlerden üretilir; boş cevaplar elenir.
function sssUret(veri: HalkaArzVeri): { soru: string; cevap: string }[] {
  const o = veri.ozet;
  const adaylar: { soru: string; cevap: string }[] = [
    {
      soru: `${veri.sirketAdi} halka arzı ne zaman?`,
      cevap: bekleyenDeger(o.halkaArzTarihi)
        ? ""
        : `${veri.sirketAdi} halka arz (talep toplama) tarihi: ${o.halkaArzTarihi}.`,
    },
    {
      soru: `${veri.sirketAdi} halka arz fiyatı ne kadar?`,
      cevap: bekleyenDeger(o.fiyatAralik)
        ? ""
        : `${veri.sirketAdi} halka arz fiyatı/aralığı: ${o.fiyatAralik}.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzında dağıtım yöntemi nedir?`,
      cevap: bekleyenDeger(o.dagitimYontemi)
        ? ""
        : `Taslak izahnameye göre dağıtım yöntemi: ${o.dagitimYontemi}.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzında kaç lot satışa sunulacak?`,
      cevap: bekleyenDeger(o.pay)
        ? ""
        : `Halka arzda satışa sunulması planlanan pay miktarı: ${o.pay}.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzının aracı kurumu hangisi?`,
      cevap: bekleyenDeger(o.araciKurum) ? "" : `Aracı kurum: ${o.araciKurum}.`,
    },
    {
      soru: `${veri.sirketAdi} payları hangi pazarda işlem görecek?`,
      cevap: bekleyenDeger(o.pazar)
        ? ""
        : `Payların ${o.pazar}'da işlem görmesi planlanmaktadır.`,
    },
    {
      soru: `${veri.sirketAdi} halka açıklık oranı nedir?`,
      cevap:
        !veri.halkaAciklikOrani || bekleyenDeger(veri.halkaAciklikOrani)
          ? ""
          : `Planlanan halka açıklık oranı: ${veri.halkaAciklikOrani}.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzında dikkat edilmesi gereken riskler neler?`,
      cevap: riskOzetCumlesi(veri),
    },
    {
      soru: `${veri.sirketAdi} kime ait ve kim tarafından yönetiliyor?`,
      cevap:
        veri.ortaklikYapisi?.ozet ||
        veri.ortaklikYapisi?.aciklamalar?.slice(0, 2).join(" ") ||
        "",
    },
  ];
  return adaylar.filter((a) => a.cevap);
}

// Sayfadaki özet verilerden WebPage + FAQPage yapılandırılmış verisi üretir.
// Yalnızca sayfada görünen, kesinleşmiş (bekleyen olmayan) değerler kullanılır.
function jsonLdUret(veri: HalkaArzVeri, slug: string) {
  const url = `https://www.hocaileborsa.com/halka-arz/taslak-izahnameler/${slug}`;
  const seoMetinleri = halkaArzSeoMetinleri(veri, "taslak");

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: `${veri.sirketAdi} Halka Arzı`,
    description: seoMetinleri.description,
    url,
    isPartOf: { "@id": "https://www.hocaileborsa.com/#website" },
    inLanguage: "tr-TR",
    about: {
      "@type": "Organization",
      name: veri.sirketAdi,
    },
  };

  const sorular = sssUret(veri);

  const semalar: object[] = [webPage];
  if (sorular.length >= 2) {
    semalar.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sorular.map((a) => ({
        "@type": "Question",
        name: a.soru,
        acceptedAnswer: { "@type": "Answer", text: a.cevap },
      })),
    });
  }
  return semalar;
}

function BilgiNotu() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
      Halka arz tarihi, fiyat aralığı ve tahsisat oranları gibi kesinleşmemiş
      bilgiler, onaylı izahname yayımlandıktan sonra bu sayfaya eklenecektir.
    </div>
  );
}

function ozetSatirlari(veri: HalkaArzVeri) {
  const o = veri.ozet;
  return [
    { label: "Başvuru Tarihi", value: o.basvuruTarihi },
    { label: "Halka Arz Tarihi", value: o.halkaArzTarihi },
    { label: "Halka Arz Fiyatı / Aralığı", value: o.fiyatAralik },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi },
    { label: "Pay", value: o.pay },
    { label: "Aracı Kurum", value: o.araciKurum },
    { label: "Pazar", value: o.pazar },
  ];
}

export default async function HalkaArzDinamikPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Eski statik .tsx hâlâ duruyorsa Next.js onu servis eder; yine de güvenlik
  // amaçlı bu slug'ı dinamik tarafta üretmeyiz.
  if (statikSlugVar(slug)) notFound();

  const hamVeri = halkaArzGetir(slug);
  if (!hamVeri) notFound();
  const veri = sinboTaslakVerisiniGuncelle(hamVeri);
  if (veri.seo?.contentStatus === "onayli") {
    permanentRedirect(`/halka-arz/onayli-izahnameler/${slug}`);
  }

  const mevcutYol = `/halka-arz/taslak-izahnameler/${slug}`;
  const canonicalYol = taslakCanonicalYolu(veri, slug);
  if (canonicalYol !== mevcutYol) permanentRedirect(canonicalYol);

  const tumOzet = ozetSatirlari(veri);
  const gorunenSummary = tumOzet.filter((i) => !bekleyenDeger(i.value));
  const summaryGizliVar = gorunenSummary.length !== tumOzet.length;

  const gorunenTahsisat = veri.tahsisat
    .map(tahsisatMetni)
    .filter((t) => !bekleyenDeger(t));

  const donemler =
    veri.finansalDonemler && veri.finansalDonemler.length > 0
      ? veri.finansalDonemler
      : Array.from(
          new Set(veri.finansalVeriler.flatMap((r) => Object.keys(r.donemler)))
        );

  const jsonLd = jsonLdUret(veri, slug);
  const riskler = riskMaddeleri(veri);
  const sorular = sssUret(veri);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Halka Arz İncelemesi
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {veri.sirketAdi} Halka Arzı
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  Taslak izahname verilerine göre hazırlanmış özet halka arz sayfası
                </p>
              </div>

              {(veri.toplamPay || veri.halkaAciklikOrani) && (
                <div className="grid grid-cols-2 gap-3 md:min-w-[300px]">
                  {veri.toplamPay && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Toplam Pay</div>
                      <div className="mt-1 text-lg font-bold">{veri.toplamPay}</div>
                    </div>
                  )}
                  {veri.halkaAciklikOrani && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Açıklık</div>
                      <div className="mt-1 text-lg font-bold">{veri.halkaAciklikOrani}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {gorunenSummary.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white"
              >
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 whitespace-pre-line text-base font-semibold text-slate-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {summaryGizliVar && (
            <div className="px-6 pb-6">
              <BilgiNotu />
            </div>
          )}
        </section>

        {veri.eksikBilgiNotu && (
          <section className="mb-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-amber-950">
              Taslakta Henüz Açıklanmayan Bilgiler
            </h2>
            <p className="mt-3 text-sm leading-7 text-amber-900">
              {veri.eksikBilgiNotu}
            </p>
          </section>
        )}

        {veri.sirketHakkinda && (
          <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">Şirket Hakkında</h2>
            <p className="text-sm leading-7 text-slate-600">{veri.sirketHakkinda}</p>
          </section>
        )}

        <HalkaArzOrtaklikYapisi
          sirketAdi={veri.sirketAdi}
          veri={veri.ortaklikYapisi}
        />

        {veri.oneCikanlar.length > 0 && (
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Öne Çıkan Noktalar</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {veri.oneCikanlar.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-medium text-slate-500">{item.title}</div>
                  <div className="mt-2 text-2xl font-bold text-blue-700">{item.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            {veri.halkaArzSekli.length > 0 && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Halka Arz Şekli</h2>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Taslak İzahname
                  </span>
                </div>

                <div className="grid gap-3">
                  {veri.halkaArzSekli.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {(veri.fonKullanim.length > 0 || veri.fonKullanimYorumu) && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xl font-bold text-slate-900">Fon Kullanım Yeri</h2>

                {veri.fonKullanim.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-1">
                    {veri.fonKullanim.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="text-sm text-slate-700">{item}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                    Fon kullanım dağılımı taslak kaynakta henüz açıklanmamıştır.
                  </div>
                )}

                {veri.fonKullanimYorumu && (
                  <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4">
                    <h3 className="mb-2 text-sm font-bold text-slate-800">
                      Fon Kullanımına İlişkin Değerlendirme
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {veri.fonKullanimYorumu}
                    </p>
                  </div>
                )}
              </section>
            )}

            {(veri.finansalVeriler.length > 0 || veri.finansalYorum) && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Finansal Görünüm</h2>
                  {donemler.length > 0 && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {donemler.join(" - ")}
                    </span>
                  )}
                </div>

                {veri.finansalVeriler.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                            Kalem
                          </th>
                          {donemler.map((d) => (
                            <th
                              key={d}
                              className="px-4 py-3 text-left text-sm font-bold text-slate-700"
                            >
                              {d}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {veri.finansalVeriler.map((row, index) => (
                          <tr
                            key={row.kalem}
                            className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                          >
                            <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                              {row.kalem}
                            </td>
                            {donemler.map((d) => (
                              <td key={d} className="px-4 py-4 text-sm text-slate-700">
                                {row.donemler[d] ?? "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                    Karşılaştırılabilir finansal tablo verileri taslak kaynakta
                    henüz açıklanmamıştır.
                  </div>
                )}

                {veri.finansalYorum && (
                  <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4">
                    <h3 className="mb-2 text-sm font-bold text-slate-800">
                      Finansal Değerlendirme
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {veri.finansalYorum}
                    </p>
                  </div>
                )}
              </section>
            )}
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Tahsisat Grupları</h2>

              {gorunenTahsisat.length > 0 ? (
                <>
                  <div className="space-y-3">
                    {gorunenTahsisat.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {veri.tahsisatNotlari && veri.tahsisatNotlari.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {veri.tahsisatNotlari.map((not, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900"
                        >
                          {not}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <BilgiNotu />
              )}
            </section>

            {veri.ozet.pazar && !bekleyenDeger(veri.ozet.pazar) && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-xl font-bold text-slate-900">Diğer Bilgiler</h2>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-800">Pazar</div>
                    <p className="mt-2 text-sm text-slate-700">{veri.ozet.pazar}</p>
                  </div>
                </div>
              </section>
            )}

            {veri.taahhutOzeti &&
              (veri.taahhutOzeti.fiyatIstikrari ||
                veri.taahhutOzeti.satmamaTaahhudu ||
                veri.taahhutOzeti.halkaAciklik) && (
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-5 text-xl font-bold text-slate-900">Taahhüt Özeti</h2>

                  <div className="space-y-4">
                    {veri.taahhutOzeti.fiyatIstikrari && (
                      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                        <div className="text-sm font-semibold text-blue-800">Fiyat İstikrarı</div>
                        <p className="mt-2 text-sm text-blue-900">
                          {veri.taahhutOzeti.fiyatIstikrari}
                        </p>
                      </div>
                    )}

                    {veri.taahhutOzeti.satmamaTaahhudu && (
                      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                        <div className="text-sm font-semibold text-indigo-800">Satmama Taahhüdü</div>
                        <p className="mt-2 text-sm text-indigo-900">
                          {veri.taahhutOzeti.satmamaTaahhudu}
                        </p>
                      </div>
                    )}

                    {veri.taahhutOzeti.halkaAciklik && (
                      <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                        <div className="text-sm font-semibold text-cyan-800">Halka Açıklık</div>
                        <p className="mt-2 text-sm text-cyan-900">
                          {veri.taahhutOzeti.halkaAciklik}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}
          </aside>
        </section>

        {riskler.length > 0 && (
          <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              {veri.sirketAdi} Halka Arzında Değerlendirilmesi Gereken Riskler
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Aşağıdaki başlıklar, halka arzın kamuya açık yapısından (arz şekli,
              halka açıklık oranı, taahhütler, finansal görünüm ve faaliyet
              sektörü) türetilen genel risk değerlendirmeleridir. Bağlayıcı ve
              tam risk faktörleri şirketin resmî izahnamesinde yer alır.
            </p>
            <div className="mt-5 space-y-3">
              {riskler.map((risk, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-amber-200 bg-white p-4"
                >
                  <div className="text-sm font-bold text-amber-800">
                    {risk.baslik}
                  </div>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    {risk.metin}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {sorular.length >= 2 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Sıkça Sorulan Sorular
            </h2>
            <div className="mt-4 space-y-4">
              {sorular.map((s) => (
                <div key={s.soru}>
                  <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                    {s.soru}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                    {s.cevap}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs leading-6 text-slate-500">
            {veri.yasalUyari ||
              "Bu sayfadaki bilgiler taslak izahname/halka arz sürecine dair genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Kesin bilgiler onaylı izahname ile açıklanır."}
          </p>
        </section>

        <ContinueReading
          title="Halka arz gündeminde devam edin"
          className="mt-6"
          items={[
            {
              title: "Güncel halka arz takvimi",
              href: "/halka-arz",
              description: "Talep toplama tarihleri, halka arz araçları ve güncel gündem.",
              type: "Halka arz",
            },
            {
              title: "Onaylı izahnameler",
              href: "/halka-arz/onayli-izahnameler",
              description: "SPK onayından geçen halka arz şirketlerini inceleyin.",
              type: "İzahname",
            },
            {
              title: "Halka arz kaç lot verir?",
              href: "/halka-arz/talep-hesapla",
              description: "Dağıtım varsayımlarına göre olası lot hesabı yapın.",
              type: "Lot hesabı",
            },
          ]}
        />
      </div>
    </main>
  );
}
