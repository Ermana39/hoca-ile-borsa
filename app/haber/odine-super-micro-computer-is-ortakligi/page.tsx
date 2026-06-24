import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "Odine, Super Micro Computer ile İş Ortaklığı Anlaşması İmzaladı",
  description:
    "Odine Solutions, yapay zekâ, bulut, depolama ve 5G/Edge BT altyapıları alanında faaliyet gösteren Super Micro Computer ile Türkiye pazarına odaklı iş ortaklığı anlaşması imzaladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/odine-super-micro-computer-is-ortakligi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/odine-super-micro-computer-is-ortakligi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/odine-super-micro-computer-is-ortakligi.webp",
    ],
  },
};

const kapHaberleri = [
  {
    baslik: "Odine Solutions (ODINE)",
    etki: "Pozitif",
    etkiYorumu:
      "Küresel teknoloji şirketiyle yapılan iş ortaklığı, şirketin çözüm portföyünü ve Türkiye pazarındaki büyüme hedeflerini destekleyebilir.",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620006",
    metin:
      "Odine Solutions Teknoloji Ticaret ve Sanayi A.Ş., Super Micro Computer, Inc. ile iş ortaklığı anlaşması imzaladığını açıkladı. Super Micro Computer; yapay zekâ, bulut, depolama ve 5G/Edge BT altyapıları alanlarında çözümler geliştiren, merkezi ABD Kaliforniya San Jose'de bulunan küresel bir teknoloji şirketi olarak biliniyor. ODINE açısından bu anlaşma, teknoloji altyapısı ve kurumsal müşteri çözümleri tarafında stratejik öneme sahip bir iş birliği niteliği taşıyor.",
  },
  {
    baslik: "Anlaşmanın Kapsamı",
    etki: "Pozitif",
    etkiYorumu:
      "İş birliği, Türkiye pazarına yönelik ortak iş geliştirme faaliyetlerini hedeflediği için orta vadeli büyüme potansiyeli taşıyor.",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620006",
    metin:
      "KAP açıklamasına göre taraflar, Türkiye pazarına odaklanarak pazar varlığını güçlendirmeyi ve bu pazarda ileri teknoloji çözümler sunmaya yönelik ortak iş geliştirme faaliyetleri yürütmeyi hedefliyor. Anlaşmanın müşteri veya gelir garantisi içermediği görülse de, ODINE'nin uluslararası teknoloji sağlayıcılarıyla kurduğu iş birlikleri şirketin pazardaki konumunu güçlendirebilecek başlıklar arasında değerlendirilebilir.",
  },
  {
    baslik: "Şirket Faaliyetlerine Olası Etki",
    etki: "Sınırlı Pozitif",
    etkiYorumu:
      "Açıklamada finansal tutar yer almadığı için etkiyi şimdilik operasyonel ve stratejik düzeyde okumak daha doğru olur.",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620006",
    metin:
      "Şirket, yeni iş ilişkisinin faaliyetlerine olumlu etki yapmasının beklendiğini bildirdi. İş birliği; telekomünikasyon ve kurumsal müşterilere yönelik çözümler sunulmasını destekleyecek şekilde yapılandırılmış durumda. Bu nedenle haber, doğrudan ciro tutarı açıklanan bir sözleşme olmasa da ODINE'nin büyüme hedefleri, çözüm portföyü ve müşteri tabanının genişlemesi açısından önemli bir gelişme olarak öne çıkıyor.",
  },
  {
    baslik: "Yatırımcı Açısından Ne Anlama Geliyor?",
    etki: "Nötr / Takip Edilmeli",
    etkiYorumu:
      "Finansal katkının netleşmesi için anlaşmanın somut siparişlere veya yeni projelere dönüşüp dönüşmeyeceği izlenmeli.",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1620006",
    metin:
      "ODINE haberinde en kritik nokta, anlaşmanın stratejik iş ortaklığı niteliğinde olmasıdır. Açıklamada parasal büyüklük, sipariş tutarı veya garanti gelir bilgisi yer almıyor. Bu nedenle kısa vadede hisse üzerinde haber etkisi oluşabilse de, kalıcı finansal etki için iş birliğinin yeni müşteri kazanımlarına, proje anlaşmalarına veya ciro katkısı yaratacak somut siparişlere dönüşmesi takip edilmeli.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Odine, Super Micro Computer ile İş Ortaklığı Anlaşması İmzaladı",
  description:
    "Odine Solutions, yapay zekâ, bulut, depolama ve 5G/Edge BT altyapıları alanında faaliyet gösteren Super Micro Computer ile Türkiye pazarına odaklı iş ortaklığı anlaşması imzaladı.",
  datePublished: "2026-06-24T08:33:00+03:00",
  dateModified: "2026-06-24T08:33:00+03:00",
  url: "https://www.hocaileborsa.com/haber/odine-super-micro-computer-is-ortakligi",
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
  image: "https://www.hocaileborsa.com/odine-super-micro-computer-is-ortakligi.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-blue-600 transition">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/odine-super-micro-computer-is-ortakligi.webp"
              alt="Odine, Super Micro Computer ile İş Ortaklığı Anlaşması İmzaladı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Odine, Super Micro Computer ile İş Ortaklığı Anlaşması İmzaladı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-24" className="text-sm text-slate-500">
                24 Haziran 2026
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
                Odine Solutions, Super Micro Computer, Inc. ile iş ortaklığı
                anlaşması imzaladığını KAP'a bildirdi. Anlaşma; yapay zekâ,
                bulut, depolama ve 5G/Edge BT altyapıları alanlarında Türkiye
                pazarına odaklanan ortak iş geliştirme faaliyetlerini kapsıyor.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <div className="mt-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium leading-6 text-blue-900">
                      Olası Etki: {haber.etki}
                      <br />
                      {haber.etkiYorumu}
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      KAP bildirimini aç
                    </a>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                ODINE'nin Super Micro Computer ile yaptığı iş ortaklığı,
                şirketin ileri teknoloji çözümleri ve Türkiye pazarındaki
                büyüme hedefleri açısından pozitif okunabilecek stratejik bir
                gelişme olarak öne çıkıyor. Ancak finansal katkının netleşmesi
                için anlaşmanın somut sipariş veya projelere dönüşmesi takip
                edilmeli.
              </div>
              <HaberIlgiliBolumler
                slug="odine-super-micro-computer-is-ortakligi"
                baslik="Odine, Super Micro Computer ile İş Ortaklığı Anlaşması İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/odine-super-micro-computer-is-ortakligi" />

          <HaberNavigasyon href="/haber/odine-super-micro-computer-is-ortakligi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
