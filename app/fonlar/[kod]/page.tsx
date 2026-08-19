import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import {
  DetailHistoryTable,
  FonBreadcrumb,
  FundPeriodGrid,
  FundReturnGrid,
  MetricCard,
} from "../_components/FonUi";
import FundChartsClient from "../_components/FundChartsClient";
import RiskReturnAnalysis from "../_components/RiskReturnAnalysis";
import {
  formatCompactTL,
  formatDate,
  formatDecimal,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import {
  getAllFundSlugs,
  getFundDetail,
} from "@/lib/fon-platform";
import { seoAciklamasi } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return getAllFundSlugs().map((kod) => ({ kod }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kod: string }>;
}): Promise<Metadata> {
  const { kod } = await params;
  const detail = getFundDetail(kod);

  if (!detail) {
    return {
      title: "Fon Bulunamadı",
      robots: { index: false, follow: true },
    };
  }

  const fund = detail.fund;
  const canonical = `https://www.hocaileborsa.com/fonlar/${fund.slug}`;
  const seoTitle = `${fund.kod} Fonu: Getiri, Fiyat ve Güncel TEFAS Bilgileri`;
  const seoDescription = seoAciklamasi(
    `${fund.kod} fonunun güncel fiyatı, dönemsel getirileri, fon büyüklüğü, yatırımcı sayısı ve para akışı verileri.`,
    `${fund.ad}, ${fund.kategori} kategorisinde ${fund.yonetici} tarafından yönetilir.`
  );

  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${fund.kod} Fonu | ${fund.ad}`,
      description: `${fund.ad} güncel fiyat, getiri, yatırımcı ve para akışı verileri.`,
    },
  };
}

export default async function FonDetayPage({
  params,
}: {
  params: Promise<{ kod: string }>;
}) {
  const { kod } = await params;
  const detail = getFundDetail(kod);

  if (!detail) notFound();

  const fund = detail.fund;
  const canonical = `https://www.hocaileborsa.com/fonlar/${fund.slug}`;
  const seoTitle = `${fund.kod} Fonu: Getiri, Fiyat ve Güncel TEFAS Bilgileri`;
  const seoDescription = seoAciklamasi(
    `${fund.kod} fonunun güncel fiyatı, dönemsel getirileri, fon büyüklüğü, yatırımcı sayısı ve para akışı verileri.`,
    `${fund.ad}, ${fund.kategori} kategorisinde ${fund.yonetici} tarafından yönetilir.`
  );
  const riskText =
    typeof fund.riskDegeri === "number"
      ? formatNumber(fund.riskDegeri)
      : "henüz açıklanmamıştır";
  const oneMonthReturnText =
    typeof fund.getiriler.birAy === "number"
      ? formatSignedPercent(fund.getiriler.birAy)
      : "bu dönem için henüz yeterli veri yoktur";
  const oneYearReturnText =
    typeof fund.getiriler.birYil === "number"
      ? formatSignedPercent(fund.getiriler.birYil)
      : "bu dönem için henüz yeterli veri yoktur";
  const dailyFlowText =
    typeof fund.paraAkisi.gunluk === "number"
      ? formatSignedTL(fund.paraAkisi.gunluk)
      : "henüz hesaplanabilir bir değer yoktur";
  const dailyReturnTone =
    typeof fund.gunlukGetiri === "number" && Number.isFinite(fund.gunlukGetiri)
      ? valueColorClass(fund.gunlukGetiri)
      : "text-slate-700";
  const faqItems = [
    {
      question: `${fund.kod} fonu nedir?`,
      answer: `${fund.ad}, ${fund.kategori} kategorisinde yer alan ve ${fund.yonetici} tarafından yönetilen bir yatırım fonudur.`,
    },
    {
      question: `${fund.kod} fonunun risk değeri kaç?`,
      answer:
        typeof fund.riskDegeri === "number"
          ? `${fund.kod} fonunun güncel risk değeri ${riskText} seviyesindedir.`
          : `${fund.kod} fonu için güncel risk değeri henüz açıklanmamıştır.`,
    },
    {
      question: `${fund.kod} fonunun bir aylık getirisi ne kadar?`,
      answer:
        typeof fund.getiriler.birAy === "number"
          ? `${fund.kod} fonunun son bir aylık getirisi ${oneMonthReturnText} seviyesindedir.`
          : `${fund.kod} fonunda bir aylık getiri için henüz yeterli veri bulunmamaktadır.`,
    },
    {
      question: `${fund.kod} fonunu kim yönetiyor?`,
      answer: `${fund.kod} fonu ${fund.yonetici} tarafından yönetilmektedir.`,
    },
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: seoTitle,
      description: seoDescription,
      inLanguage: "tr-TR",
      about: {
        "@type": "FinancialProduct",
        name: fund.ad,
        identifier: fund.kod,
        category: fund.kategori,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current={fund.kod} />

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-blue-700">
                Son işlem tarihi: {formatDate(fund.tarih)}
              </p>
              <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
                {fund.kod} Fonu
              </h1>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
                {fund.ad}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                  {fund.kategori}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                  Risk: {formatNumber(fund.riskDegeri)}
                </span>
                <Link
                  href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`}
                  className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 hover:bg-emerald-100"
                >
                  {fund.yonetici}
                </Link>
              </div>
            </div>
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 lg:mt-1 lg:w-auto lg:min-w-[230px] lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Günlük Değişim
              </p>
              <p className={`mt-2 text-3xl font-bold leading-none md:text-4xl ${dailyReturnTone}`}>
                {formatSignedPercent(fund.gunlukGetiri)}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-600">
                Tarih: {formatDate(fund.tarih)}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Güncel Fiyat" value={`${formatDecimal(fund.fiyat, 6)} TL`} tone="blue" />
          <MetricCard label="Fon Toplam Değeri" value={formatCompactTL(fund.fonToplamDeger)} />
          <MetricCard label="Yatırımcı Sayısı" value={formatNumber(fund.kisiSayisi)} />
          <MetricCard label="Tarihsel Gün" value={formatNumber(fund.tarihselGunSayisi)} />
        </section>

        <section className="mb-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div>
            <h2 className="mb-3 text-lg font-bold text-slate-950">Getiri</h2>
            <FundReturnGrid fund={fund} />
          </div>
          <FundPeriodGrid title="Para Akışı" values={fund.paraAkisi} />
          <FundPeriodGrid
            title="Yatırımcı Değişimi"
            values={fund.yatirimciDegisimi}
            format="number"
          />
        </section>

        <section className="mb-8">
          <FundChartsClient history={detail.history} />
        </section>

        <section className="mb-8">
          <RiskReturnAnalysis analysis={detail.riskAnalizi} />
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-950">
            Son 30 İşlem Günü
          </h2>
          <DetailHistoryTable rows={detail.sonOtuzIslemGunu} />
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            {fund.kod} Fonu Nedir, Nasıl Değerlendirilir?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                {fund.ad}, {fund.kategori} kategorisinde yer alan ve {fund.yonetici} tarafından
                yönetilen bir yatırım fonudur. Fonun güncel toplam büyüklüğü {formatCompactTL(fund.fonToplamDeger)},
                yatırımcı sayısı {formatNumber(fund.kisiSayisi)} ve risk değeri {riskText} seviyesindedir.
              </p>
              <p>
                {fund.kod} fonunun bir aylık getirisi {oneMonthReturnText}, bir yıllık getirisi
                ise {oneYearReturnText} seviyesindedir. Kısa ve uzun dönem getirilerini birlikte
                incelemek, son performansın daha geniş eğilimle uyumlu olup olmadığını anlamaya
                yardımcı olur.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Fonun günlük net para akışı {dailyFlowText} seviyesindedir. Para akışı ve
                yatırımcı sayısındaki değişim, fona yönelik güncel ilginin yönünü gösterir;
                ancak tek başına gelecekteki getiri için kesin bir işaret değildir.
              </p>
              <p>
                Benzer fonları bulmak için <Link href={`/fonlar/fon-tarayici?kategori=${encodeURIComponent(fund.kategori)}`} className="font-semibold text-blue-700 hover:underline">fon tarayıcıyı</Link>,
                farklı fonları yan yana incelemek için <Link href={`/fonlar/fon-karsilastirma?fonlar=${fund.kod}`} className="font-semibold text-blue-700 hover:underline">fon karşılaştırma aracını</Link> ve
                yönetim şirketinin diğer fonları için <Link href={`/fonlar/yoneticiler/${fund.yoneticiSlug}`} className="font-semibold text-blue-700 hover:underline">{fund.yonetici} analizini</Link> kullanabilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold text-slate-950">
              {fund.kod} Fonu Hakkında Sık Sorulan Sorular
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            Geçmiş getiri gelecekteki performansı garanti etmez. Fonun yatırım stratejisi,
            risk seviyesi ve yatırım süresi kişisel hedeflerle birlikte değerlendirilmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
