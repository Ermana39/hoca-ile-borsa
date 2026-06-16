import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "Türk Bankacılığında Tarihi Dönüşüm: 3 Katılım Bankası Birleşiyor, Emlak Katılım Borsaya Geliyor",
  description:
    "Ziraat Katılım, Vakıf Katılım ve Halk Katılım tek çatı altında birleşiyor; Emlak Katılım ise halka arz için SPK'ya başvurdu. Katılım bankacılığında tarihi dönüşüm başlıyor.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor-discover.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Üç Dev Tek Çatı Altında",
    metin:
      "Kamu bünyesinde ayrı ayrı faaliyet gösteren Ziraat Katılım, Vakıf Katılım ve Halk Katılım bankaları tek bir çatı altında birleşiyor. Bu adımla Türkiye'nin katılım bankacılığı alanındaki en büyük kamu kurumunun ortaya çıkması bekleniyor.",
  },
  {
    baslik: "Küresel Rekabette Güçlenme",
    metin:
      "Birleşmenin ardından Türkiye'nin küresel katılım finans liginde daha güçlü bir konuma geleceği, Körfez ülkeleri ve Malezya gibi İslami finans merkezleriyle rekabet için bu tür konsolidasyonların kaçınılmaz olduğu vurgulanıyor.",
  },
  {
    baslik: "Emlak Katılım Halka Arza Hazırlanıyor",
    metin:
      "2018 yılında Emlak Bankası'nın dönüştürülmesiyle kurulan Emlak Katılım'ın SPK'ya başvurusunu yaptığı ve taslak izahnamenin hazırlandığı öğrenildi. Halka arzla birlikte Borsa İstanbul yatırımcılarına yeni bir katılım bankacılığı seçeneği sunulacak.",
  },
  {
    baslik: "Sektörde Çarpıcı Büyüme",
    metin:
      "2026'nın ilk çeyreği itibarıyla katılım bankacılığı sektörünün aktif büyüklüğü 4,7 trilyon lirayı aşarak toplam sektördeki payını yüzde 9,5'e taşıdı. Katılım esaslı emeklilik fonlarının büyüklüğü ise yüzde 74 artışla yaklaşık 798 milyar liraya ulaştı.",
  },
  {
    baslik: "Yatırımcıya Etkileri Ne Olur?",
    metin:
      "Birleşme sürecinde Ziraat Katılım, Vakıf Katılım ve Halk Katılım hisselerine olan ilginin artabileceği öngörülüyor. Yatırımcıların Emlak Katılım halka arzına ilişkin tarih ve fiyat bandı duyurularını yakından takip etmesi tavsiye ediliyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Türk Bankacılığında Tarihi Dönüşüm: 3 Katılım Bankası Birleşiyor, Emlak Katılım Borsaya Geliyor",
  description:
    "Ziraat Katılım, Vakıf Katılım ve Halk Katılım tek çatı altında birleşiyor; Emlak Katılım halka arz için SPK'ya başvurdu.",
  datePublished: "2026-06-07T10:00:00+03:00",
  dateModified: "2026-06-07T10:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor-discover.webp",
  inLanguage: "tr",
};

export default function Haber981Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor-discover.webp"
              alt="Türk Bankacılığında Tarihi Dönüşüm: 3 Katılım Bankası Birleşiyor, Emlak Katılım Borsaya Geliyor"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-07" className="text-sm text-slate-500">
                7 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Türk Bankacılığında Tarihi Dönüşüm: 3 Katılım Bankası Birleşiyor, Emlak Katılım Borsaya Geliyor
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türkiye’nin finans sektörü, bu hafta tarihi bir dönüşümün
                kapısında. Cumhurbaşkanı Recep Tayyip Erdoğan, İstanbul Finans
                Merkezi’nde gerçekleştirilen 3. Dünya İslam Ekonomi Zirvesi’nde
                katılım bankacılığının geleceğini doğrudan şekillendirecek iki
                büyük kararı kamuoyuyla paylaştı.
              </p>

              <p>
                Halihazırda Borsa İstanbul’da 6,3 milyon bireysel yatırımcı
                bulunuyor ve bu yatırımcıların yüzde 69’unun katılım
                endeksindeki şirketleri portföyünde taşıdığı açıklandı. Açıklanan
                kararların, sektördeki büyüme rakamlarıyla birlikte yatırımcı
                ilgisini daha da artırması bekleniyor.
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
                Üç katılım bankasının birleşmesi ve Emlak Katılım’ın halka arzı,
                Türkiye’nin katılım bankacılığı alanındaki en büyük yapısal
                dönüşümlerden biri olarak öne çıkıyor.
              </div>
              <HaberIlgiliBolumler slug="turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor" baslik="Türk Bankacılığında Tarihi Dönüşüm: 3 Katılım Bankası Birleşiyor, Emlak Katılım Borsaya Geliyor" />



              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor" />

          <HaberNavigasyon href="/haber/turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}
