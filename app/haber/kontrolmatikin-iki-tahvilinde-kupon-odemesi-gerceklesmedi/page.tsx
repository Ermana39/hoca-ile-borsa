import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi",
  description:
    "Kontrolmatik tarafından ihraç edilen iki özel sektör borçlanma aracına ilişkin 5 Haziran 2026 tarihli kupon ödemeleri gerçekleştirilemedi. İlgili borçlanma araçları Gözaltı Pazarı’na alındı.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/haber978.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/haber978.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Kupon Ödemesi Yatırımcılara Ulaştırılamadı",
    metin:
      "Merkezi Kayıt Kuruluşu tarafından Kamuoyu Aydınlatma Platformu’nda yapılan açıklamada, Kontrolmatik Teknoloji Enerji ve Mühendislik A.Ş. tarafından ihraç edilen iki özel sektör borçlanma aracına ilişkin 05 Haziran 2026 tarihli kupon ödemelerinin gerçekleştirilemediği bildirildi.",
  },
  {
    baslik: "İlgili ISIN Kodları Açıklandı",
    metin:
      "Açıklamada, TRFKNTR92611 ve TRSKNTR32719 ISIN kodlu borçlanma araçlarının kupon ödeme işlemlerinin, ihraççı kuruluşun gerekli ödeme tutarını aktarmaması nedeniyle MKK aracılığıyla tamamlanamadığı belirtildi.",
  },
  {
    baslik: "Borsa İstanbul’dan Gözaltı Pazarı Kararı",
    metin:
      "Gelişmenin ardından Borsa İstanbul da ilgili borçlanma araçları hakkında karar aldı. Borsa İstanbul tarafından KAP’a yapılan açıklamada, ödemesi gerçekleştirilemeyen söz konusu borçlanma araçlarının Borçlanma Araçları Piyasası Gözaltı Pazarı’na alınmasına karar verildiği duyuruldu.",
  },
  {
    baslik: "İşlem Sırası 8 Haziran’da Kapatılacak",
    metin:
      "Borsa İstanbul açıklamasına göre, ilgili borçlanma araçlarının işlem sırası 8 Haziran 2026 tarihinde kapatılacak. Söz konusu borçlanma araçlarının 9 Haziran 2026 tarihinde geçerli piyasa kuralları çerçevesinde yeniden işleme açılması planlanıyor.",
  },
  {
    baslik: "Yatırımcılar Açısından Önemli Gelişme",
    metin:
      "Kupon ödemesinin gerçekleştirilememesi, Kontrolmatik’in borçlanma araçlarını elinde bulunduran yatırımcılar açısından yakından takip edilmesi gereken önemli bir ödeme aksaklığı olarak öne çıktı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Kontrolmatik'in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi",
  description:
    "Kontrolmatik tarafından ihraç edilen iki özel sektör borçlanma aracına ilişkin 5 Haziran 2026 tarihli kupon ödemeleri gerçekleştirilemedi. İlgili borçlanma araçları Gözaltı Pazarı'na alındı.",
  datePublished: "2026-06-05T09:00:00+03:00",
  dateModified: "2026-06-05T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber978.webp",
  inLanguage: "tr",
};

export default function Haber978Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber978.webp"
              alt="Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-05" className="text-sm text-slate-500">5 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Merkezi Kayıt Kuruluşu, Kontrolmatik Teknoloji Enerji ve
                Mühendislik A.Ş. tarafından ihraç edilen iki özel sektör
                borçlanma aracına ilişkin 5 Haziran 2026 tarihli kupon
                ödemelerinin gerçekleştirilemediğini açıkladı.
              </p>

              <p>
                KAP’ta yer alan açıklamaya göre, söz konusu ödeme işlemleri
                ihraççı şirket tarafından gerekli tutarın aktarılmaması
                nedeniyle yatırımcılara ulaştırılamadı. Gelişmenin ardından
                Borsa İstanbul, ilgili borçlanma araçlarının Borçlanma Araçları
                Piyasası Gözaltı Pazarı’na alınmasına karar verdi.
              </p>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Kontrolmatik tarafından ihraç edilen TRFKNTR92611 ve
                TRSKNTR32719 ISIN kodlu özel sektör borçlanma araçlarında 05
                Haziran 2026 tarihli kupon ödemelerinin yapılamaması, şirketin
                borçlanma araçları tarafında dikkat çeken önemli bir gelişme
                olarak öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi" baslik="Kontrolmatik’in İki Tahvilinde Kupon Ödemesi Gerçekleşmedi" />



              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi" />

          <HaberNavigasyon href="/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}