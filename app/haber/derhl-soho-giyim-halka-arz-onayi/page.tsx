import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "DERHL Bağlı Ortaklığı Soho Giyim’e Halka Arz Onayı",
  description:
    "DERHL, %68,69 oranında pay sahibi olduğu Soho Giyim’in ilk halka arz izahnamesinin SPK tarafından onaylandığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/derhl-soho-giyim-halka-arz-onayi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/derhl-soho-giyim-halka-arz-onayi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/derhl-soho-giyim-halka-arz-onayi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Derlüks Yatırım Holding A.Ş. (DERHL), sermayesinin %68,69’una sahip olduğu bağlı ortaklığı Soho Giyim ve Enerji Anonim Şirketi’nin halka arz sürecine ilişkin KAP açıklaması yayımladı. Açıklamaya göre Soho Giyim’in ilk halka arzı amacıyla hazırlanan izahname, Sermaye Piyasası Kurulu’nun 24 Haziran 2026 tarihli ve 2026/41 sayılı bülteninde onaylandı.",
  },
  {
    baslik: "Bu ne anlama geliyor?",
    metin:
      "İzahname onayı, halka arz sürecinde şirketin Sermaye Piyasası Kurulu tarafındaki en kritik aşamalardan birini geçtiği anlamına gelir. Halka arz, bir şirketin paylarının yatırımcılara satılarak borsada işlem görmeye hazırlanmasıdır. Bildirime göre Soho Giyim’in çıkarılmış sermayesi, 850.000.000 TL kayıtlı sermaye tavanı içinde 100.000.000 TL artırılarak 306.760.337,13 TL’ye çıkarılacak. Bu yapı, halka arzda sermaye artırımı yoluyla şirkete yeni kaynak girişi olacağını gösterir.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "Derlüks Yatırım Holding, bağlı ortaklıkları ve yatırım portföyü üzerinden faaliyet gösteren bir holding yapısına sahiptir. KAP açıklamasında halka arz onayı duyurulan Soho Giyim ve Enerji Anonim Şirketi ise DERHL’nin %68,69 oranında pay sahibi olduğu bağlı ortaklık olarak yer aldı.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Sermaye artırımı yoluyla yapılan halka arzlarda satılan payların önemli bölümü şirket sermayesine eklenir ve bu durum halka arz edilen şirkete kaynak sağlar. Burada dikkat edilmesi gereken nokta, halka arz onayının tek başına borsada işlem başlangıcı anlamına gelmemesidir. İzahname onayı sonrası talep toplama tarihi, halka arz fiyatı, dağıtım yöntemi ve işlem görme tarihi ayrıca netleşir. Yatırımcı açısından asıl tablo, halka arz fiyatı, satılacak pay miktarı, fon kullanım planı ve talep toplama sonuçlarıyla birlikte daha sağlıklı okunur.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "SPK izahname onayının ardından Soho Giyim halka arzı için talep toplama tarihleri, halka arz fiyatı ve dağıtım esasları ayrıca duyurulacak. Bu bilgiler KAP, SPK bülteni ve halka arz konsorsiyumu tarafından açıklanmadan kesin kabul edilmemelidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "DERHL Bağlı Ortaklığı Soho Giyim’e Halka Arz Onayı",
  description:
    "DERHL, %68,69 oranında pay sahibi olduğu Soho Giyim’in ilk halka arz izahnamesinin SPK tarafından onaylandığını açıkladı.",
  datePublished: "2026-06-25T08:35:18+03:00",
  dateModified: "2026-06-25T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/derhl-soho-giyim-halka-arz-onayi",
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
  image: "https://www.hocaileborsa.com/derhl-soho-giyim-halka-arz-onayi.webp",
  inLanguage: "tr",
};

export default function HaberPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/derhl-soho-giyim-halka-arz-onayi.webp"
              alt="DERHL Bağlı Ortaklığı Soho Giyim’e Halka Arz Onayı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              DERHL Bağlı Ortaklığı Soho Giyim’e Halka Arz Onayı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-25" className="text-sm text-slate-500">
                25 Haziran 2026
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
                Derlüks Yatırım Holding A.Ş. (DERHL), bağlı ortaklığı Soho
                Giyim ve Enerji Anonim Şirketi’nin halka arz izahnamesinin SPK
                tarafından onaylandığını açıkladı. Bildirim, DERHL’nin bağlı
                ortaklık portföyü ve halka arz gündemi açısından öne çıkan bir
                gelişme olarak takip edildi.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span>{" "}
                  DERHL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Bağlı Ortaklık:
                  </span>{" "}
                  Soho Giyim ve Enerji A.Ş.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    DERHL Payı:
                  </span>{" "}
                  %68,69
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    SPK Bülteni:
                  </span>{" "}
                  2026/41
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
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Kaynak: DERHL tarafından 25 Haziran 2026 tarihinde KAP’a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620468"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Hoca ile Borsa yorumu: Bu açıklamada asıl önemli nokta, DERHL’nin
                bağlı ortaklığı Soho Giyim’in halka arz sürecinde SPK izahname
                onayını almış olmasıdır. Halka arz sürecinde fiyat, talep
                toplama tarihi ve dağıtım yöntemi kesinleşmeden yatırımcı
                açısından nihai tablo oluşmaz.
              </div>

              <HaberIlgiliBolumler
                slug="derhl-soho-giyim-halka-arz-onayi"
                baslik="DERHL Bağlı Ortaklığı Soho Giyim’e Halka Arz Onayı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/derhl-soho-giyim-halka-arz-onayi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
