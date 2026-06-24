import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "ADA 100 Milyon Dolarlık Tier 1 Sukuk İhracını Tamamladı",
  description:
    "Dünya Katılım Bankası, yurt dışında 100 milyon dolarlık Basel III uyumlu ilave ana sermaye niteliğinde kira sertifikası ihracını tamamladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ada-tier-1-sukuk-ihraci-100-milyon-dolar",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ada-tier-1-sukuk-ihraci-100-milyon-dolar.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ada-tier-1-sukuk-ihraci-100-milyon-dolar.webp",
    ],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Dünya Katılım Bankası A.Ş. (ADA), fon kullanıcısı olduğu yurt dışı kira sertifikası ihracının tamamlandığını açıkladı. Dunya Katılım Sukuk Ltd. tarafından ihraç edilen işlem, 100 milyon ABD doları tutarında ve Basel III kriterlerine uyumlu ilave ana sermayeye dahil edilebilir kira sertifikası niteliği taşıyor. Bildirime göre ihracın valör tarihi 2 Temmuz 2026 olacak.",
  },
  {
    baslik: "Bu ne anlama geliyor?",
    metin:
      "Kira sertifikası, faizsiz finans sisteminde kullanılan ve yatırımcıya belirli dönemlerde getiri sağlayan sermaye piyasası aracıdır. Bu ihraç, bankanın ilave ana sermaye yapısını destekleyen bir finansman adımıdır. Bildirimde sertifikanın 6 ayda bir kupon ödemeli olduğu, vadesiz nitelik taşıdığı ve ihraçtan 5,5 yıl sonra ilk geri satın alma opsiyonu içerdiği açıklandı. İlk dönem için yıllık getiri oranı %10,125 olarak belirlendi.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "Dünya Katılım Bankası A.Ş., katılım bankacılığı alanında faaliyet gösteren bir finans kuruluşudur. Banka, faizsiz finans prensipleri çerçevesinde bireysel, ticari ve kurumsal bankacılık ürünleri sunar.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "İlave ana sermayeye dahil edilebilir kira sertifikaları, bankaların sermaye yeterliliğini desteklemek için kullanılan özel finansman araçlarıdır. Bu tür ihraçlarda şirkete sağlanan kaynak klasik kısa vadeli borçtan farklı olarak sermaye benzeri nitelik taşır. Vadesiz yapı ve geri satın alma opsiyonu, yatırımcıya düzenli kupon getirisi sunarken banka tarafında sermaye tamponunu güçlendirmeye hizmet eder. Bu nedenle haber, doğrudan günlük kâr etkisinden çok bankanın sermaye yapısı ve uluslararası fonlama kabiliyeti açısından okunmalıdır.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "İhracın valör tarihi 2 Temmuz 2026 olarak açıklandı. Bundan sonraki süreçte kupon ödeme dönemleri, olası geri satın alma opsiyonu ve bankanın sermaye yeterliliği üzerindeki etkisi finansal raporlar üzerinden izlenecek. Bildirimde bunun dışında yeni bir ihraç takvimi veya ek tutar açıklanmadı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ADA 100 Milyon Dolarlık Tier 1 Sukuk İhracını Tamamladı",
  description:
    "Dünya Katılım Bankası, yurt dışında 100 milyon dolarlık Basel III uyumlu ilave ana sermaye niteliğinde kira sertifikası ihracını tamamladı.",
  datePublished: "2026-06-24T21:52:00+03:00",
  dateModified: "2026-06-24T22:10:00+03:00",
  url: "https://www.hocaileborsa.com/haber/ada-tier-1-sukuk-ihraci-100-milyon-dolar",
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
  image: "https://www.hocaileborsa.com/ada-tier-1-sukuk-ihraci-100-milyon-dolar.webp",
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
              src="/ada-tier-1-sukuk-ihraci-100-milyon-dolar.webp"
              alt="ADA 100 milyon dolarlık Tier 1 sukuk ihracı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ADA 100 Milyon Dolarlık Tier 1 Sukuk İhracını Tamamladı
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
                Dünya Katılım Bankası A.Ş. (ADA), yurt dışında 100 milyon ABD
                doları tutarında ilave ana sermayeye dahil edilebilir kira
                sertifikası ihracının tamamlandığını duyurdu.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    İhraç Tutarı:
                  </span>{" "}
                  100 milyon ABD doları
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Valör Tarihi:
                  </span>{" "}
                  2 Temmuz 2026
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Kupon Ödemesi:
                  </span>{" "}
                  6 ayda bir
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İlk Dönem Getiri Oranı:
                  </span>{" "}
                  %10,125
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
                Kaynak: Dünya Katılım Bankası tarafından 24 Haziran 2026
                tarihinde KAP’a yapılan özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-700 hover:text-slate-900"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="ada-tier-1-sukuk-ihraci-100-milyon-dolar"
                baslik="ADA 100 Milyon Dolarlık Tier 1 Sukuk İhracını Tamamladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/ada-tier-1-sukuk-ihraci-100-milyon-dolar" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
