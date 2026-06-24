import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title:
    "ABD Enflasyonu Sonrası Piyasalarda Temkinli Fiyatlama: Borsalar ve Altında Son Durum",
  description:
    "10 Haziran 2026 tarihinde açıklanan ABD Mayıs ayı enflasyon verisi sonrası ABD borsaları, tahvil faizleri, dolar endeksi ve altın fiyatlamalarında öne çıkan gelişmeler.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/abd-enflasyon-altin-borsa-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/abd-enflasyon-altin-borsa-discover.webp"],
  },
};

const piyasaBasliklari = [
  {
    baslik: "ABD Enflasyonu Yıllık %4,2’ye Yükseldi",
    metin:
      "ABD’de Mayıs ayı tüketici fiyat endeksi yıllık bazda yüzde 4,2 artış gösterdi. Aylık TÜFE artışı yüzde 0,5 olurken, çekirdek TÜFE yıllık bazda yüzde 2,9 seviyesinde açıklandı. Verinin beklentilere paralel gelmesi ilk tepkiyi sınırlasa da, manşet enflasyonun yeniden yüzde 4 seviyesinin üzerine çıkması piyasaların Fed beklentilerini yeniden değerlendirmesine neden oldu.",
  },
  {
    baslik: "Enerji Fiyatları Enflasyonu Yukarı Taşıdı",
    metin:
      "Enflasyondaki yükselişte enerji fiyatlarındaki artış öne çıktı. Orta Doğu kaynaklı jeopolitik risklerin petrol ve akaryakıt fiyatları üzerindeki etkisi, manşet enflasyonun yukarı yönlü hareket etmesinde belirleyici oldu. Çekirdek enflasyonun daha sınırlı kalması ise piyasalarda panik fiyatlamasının önüne geçti.",
  },
  {
    baslik: "ABD Borsalarında Temkinli Görünüm",
    metin:
      "Enflasyon verisi sonrası ABD borsalarında sınırlı satış baskısı dikkat çekti. Verinin beklentileri aşmaması piyasa tarafında kısmi rahatlama sağlasa da, enflasyonun Fed’in yüzde 2 hedefinin oldukça üzerinde kalmaya devam etmesi risk iştahını sınırladı. Özellikle faiz hassasiyeti yüksek teknoloji hisselerinde temkinli fiyatlama öne çıktı.",
  },
  {
    baslik: "Fed Beklentileri Yeniden Ön Planda",
    metin:
      "Piyasanın ana odağı, ABD Merkez Bankası’nın faizleri ne kadar süre yüksek tutacağına çevrildi. Enflasyonun yüksek kalması, yakın vadede faiz indirimi beklentilerini zayıflatırken; çekirdek taraftaki sınırlı görünüm, yeni bir faiz artırımı ihtimalinin hemen güçlenmesini engelledi. Bu nedenle piyasalarda karışık ama temkinli bir görünüm oluştu.",
  },
  {
    baslik: "Tahvil Faizleri ve Dolar Endeksi Takip Ediliyor",
    metin:
      "ABD 10 yıllık tahvil faizinde veri sonrası sert bir sıçrama görülmemesi, enflasyon verisinin büyük ölçüde fiyatlandığını gösterdi. Buna karşın faizlerin yüksek seviyelerde kalmaya devam etmesi, hisse senedi piyasaları ve değerli metaller üzerinde baskı yaratmayı sürdürüyor. Dolar endeksindeki hareketler de altın fiyatlaması açısından yakından takip ediliyor.",
  },
  {
    baslik: "Altında Faiz Baskısı Öne Çıktı",
    metin:
      "Altın fiyatları, ABD enflasyon verisi ve faiz beklentileriyle birlikte baskı altında kaldı. Normal şartlarda jeopolitik riskler güvenli liman talebini destekleyebilir. Ancak Fed’in sıkı para politikasını daha uzun süre koruyabileceği beklentisi, faiz getirisi olmayan altın üzerinde satış baskısı oluşturdu.",
  },
  {
    baslik: "Ons Altında Dalgalanma Artabilir",
    metin:
      "Ons altın tarafında kısa vadeli yön açısından ABD tahvil faizleri, dolar endeksi ve Fed üyelerinden gelecek açıklamalar belirleyici olacak. Enflasyon yüksek kalmaya devam ederse altın korunma aracı olarak destek bulabilir. Ancak aynı süreçte faiz beklentileri de güçlenirse, altında yukarı hareketler sınırlı kalabilir.",
  },
  {
    baslik: "Küresel Piyasalar İçin Kritik Başlıklar",
    metin:
      "Önümüzdeki dönemde piyasaların yönü açısından ABD üretici fiyat endeksi, Fed toplantı tutanakları, enerji fiyatlarının seyri ve Orta Doğu kaynaklı haber akışı yakından izlenecek. Enflasyonun kalıcı olup olmayacağına dair sinyaller, hem borsalar hem de altın tarafında fiyatlamanın ana belirleyicisi olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "ABD Enflasyonu Sonrası Piyasalarda Temkinli Fiyatlama: Borsalar ve Altında Son Durum",
  description:
    "10 Haziran 2026 tarihinde açıklanan ABD Mayıs ayı enflasyon verisi sonrası ABD borsaları, tahvil faizleri, dolar endeksi ve altın fiyatlamalarında öne çıkan gelişmeler.",
  datePublished: "2026-06-10T18:00:00+03:00",
  dateModified: "2026-06-10T18:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
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
  image: "https://www.hocaileborsa.com/abd-enflasyon-altin-borsa-discover.webp",
  inLanguage: "tr",
};

export default function HaberAbdEnflasyonBorsaAltinPage() {
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
              src="/abd-enflasyon-altin-borsa-discover.webp"
              alt="ABD enflasyonu sonrası borsalar ve altın fiyatlaması"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ABD Enflasyonu Sonrası Piyasalarda Temkinli Fiyatlama: Borsalar
              Baskı Altında, Altında Dalgalanma Arttı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Küresel Piyasalar
              </span>
              <time dateTime="2026-06-10" className="text-sm text-slate-500">
                10 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Küresel piyasaların 10 Haziran 2026 tarihli ana gündeminde ABD
                Mayıs ayı enflasyon verisi yer aldı. Açıklanan veri, beklentilerle
                uyumlu gelse de yıllık enflasyonun yeniden yüzde 4 seviyesinin
                üzerine çıkması; ABD borsaları, tahvil faizleri, dolar endeksi ve
                altın fiyatlamaları açısından dikkatle takip edildi.
              </p>

              <p>
                Piyasa fiyatlamasında ilk aşamada panik havası oluşmadı. Ancak
                enflasyonun Fed’in hedefinin oldukça üzerinde kalmaya devam
                etmesi, faizlerin uzun süre yüksek kalabileceği beklentisini
                güçlendirdi. Bu görünüm, özellikle teknoloji hisseleri ve faiz
                getirisi olmayan altın tarafında baskı yarattı.
              </p>

              <div className="space-y-5">
                {piyasaBasliklari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün ana mesajı; ABD enflasyonunun beklentilere paralel gelse
                de yüksek seyrini koruması oldu. Bu tablo Fed’in faiz indirim
                alanını daraltırken, ABD borsalarında temkinli fiyatlamaya ve
                altın tarafında faiz beklentisi kaynaklı baskıya neden oldu.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Kısa vadede piyasalar için en kritik başlıklar; Fed’den gelecek
                mesajlar, ABD tahvil faizlerinin yönü, dolar endeksindeki hareket
                ve enerji fiyatlarının enflasyon üzerindeki etkisi olacak. Bu
                başlıklarda yaşanacak değişim, hem Wall Street hem de ons altın
                tarafında oynaklığı artırabilir.
              </div>

              <HaberIlgiliBolumler
                slug="abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi"
                baslik="ABD Enflasyonu Sonrası Borsalar ve Altın Fiyatlaması"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi" />

          <HaberNavigasyon href="/haber/abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}