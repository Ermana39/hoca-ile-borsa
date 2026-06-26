import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Beta Enerji Halka Arz Dağıtım Sonuçları Açıklandı",
  description:
    "Beta Enerji halka arzında dağıtım sonuçları açıklandı. BETAE halka arzına 1.124.953 yatırımcı katıldı, en fazla 28 lot dağıtım gerçekleşti.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Beta Enerji ve Teknoloji A.Ş. halka arzında dağıtım sonuçları açıklandı. Halka arzda toplam 60.750.000 lot pay dağıtılırken, dağıtım tutarı 2.430.000.000 TL oldu. Pay başına halka arz fiyatı 40,00 TL olarak uygulanırken, bireysel yatırımcı tarafında en fazla 28 lot, yani 1.120 TL tutarında dağıtım gerçekleşti.",
  },
  {
    baslik: "Talep tarafında tablo nasıl oluştu?",
    metin:
      "Halka arzda toplam başvuru adedi 1.143.799 olarak gerçekleşti. Dağıtım yapılan yatırımcı sayısı ise 1.124.953 oldu. Talep tutarı 34.225.279.480 TL seviyesine ulaşırken, dağıtılan toplam tutar 2.430.000.000 TL’de kaldı. Bu tablo, halka arz büyüklüğünün yaklaşık 14,1 katı talep geldiğini gösteriyor. Yüksek başvuru grubundaki talep tutarının toplam talep içindeki payı dikkat çekerken, bireysel yatırımcı tarafında çok geniş katılımlı bir talep oluştu.",
  },
  {
    baslik: "Bireysel yatırımcıya kaç lot düştü?",
    metin:
      "Yurt içi bireysel yatırımcı grubunda 30.375.000 lot pay dağıtıldı. Bu grupta 1.122.382 başvuru gelirken, dağıtım yapılan başvuru adedi 1.103.933 oldu. Görselde yer alan dağıtım hesabına göre bireysel yatırımcı tarafında en fazla 28 lot dağıtım gerçekleşti. 40,00 TL halka arz fiyatı üzerinden 28 lotun karşılığı 1.120 TL oldu.",
  },
  {
    baslik: "Dağıtım sonuçları ne anlatıyor?",
    metin:
      "Dağıtım sonuçlarında yurt içi bireysel yatırımcıya ayrılan %50’lik payın tamamen dağıtıldığı görülüyor. Yüksek başvuru grubuna %10, yurt içi kurumsal yatırımcılara %39 ve Beta şirket çalışanlarına %1 oranında dağıtım yapıldı. Başvuru adedi açısından halka arzın ana yükü bireysel yatırımcı tarafında oluşurken, tutar bazında yüksek başvuru ve kurumsal talep de halka arza güçlü ilgi olduğunu gösterdi.",
  },
  {
    baslik: "Muhtemel kazanç tablosu nasıl okunmalı?",
    metin:
      "Muhtemel kazanç tablosu, halka arz sonrası payın her işlem gününde tavan fiyatla kapanacağı varsayımı üzerinden hazırlanmıştır. Bu nedenle kesin getiri hesabı olarak görülmemelidir. Hisse senetleri işlem görmeye başladıktan sonra fiyat; arz-talep dengesi, piyasa koşulları, endeksin yönü, yatırımcı ilgisi ve şirket haber akışına göre değişebilir. Tablo yalnızca 28 lot dağıtım alan bir yatırımcı için varsayımsal tavan serisi hesabını gösterir.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Beta Enerji halka arzında 1,1 milyonun üzerinde yatırımcıya dağıtım yapılması, halka arza geniş tabanlı katılım olduğunu gösteriyor. Toplam talebin halka arz büyüklüğünün yaklaşık 14 katına ulaşması da yatırımcı ilgisinin güçlü olduğuna işaret ediyor. Ancak yatırımcı açısından asıl belirleyici süreç işlem başlangıcından sonra oluşacak fiyat hareketleri olacak. İlk günlerde likidite, tavan serisinin devam edip etmeyeceği, satış baskısı ve genel piyasa havası yakından izlenmeli.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Dağıtım sonuçlarının açıklanmasının ardından yatırımcıların takip edeceği başlıklar iade süreci, takas işlemleri ve Beta Enerji paylarının Borsa İstanbul’da işlem görmeye başlayacağı tarih olacak. İşlem tarihi açıklandığında payların ilk gün performansı ve emir dengesi halka arz yatırımcıları tarafından yakından takip edilecek.",
  },
];

const dagitimTablosu = [
  {
    grup: "Yurt İçi Bireysel",
    planlananPay: "30.375.000",
    planlananOran: "%50",
    talepBasvuru: "1.122.382",
    talepTutar: "2.989.118.880 TL",
    talepOran: "%8,73",
    dagitimBasvuru: "1.103.933",
    dagitimTutar: "1.215.000.000 TL",
    dagitimOran: "%50",
  },
  {
    grup: "Yüksek Başvuru",
    planlananPay: "6.075.000",
    planlananOran: "%10",
    talepBasvuru: "20.669",
    talepTutar: "21.544.619.440 TL",
    talepOran: "%62,95",
    dagitimBasvuru: "20.394",
    dagitimTutar: "243.000.000 TL",
    dagitimOran: "%10",
  },
  {
    grup: "Yurt İçi Kurumsal",
    planlananPay: "23.692.500",
    planlananOran: "%39",
    talepBasvuru: "389",
    talepTutar: "9.667.153.720 TL",
    talepOran: "%28,25",
    dagitimBasvuru: "267",
    dagitimTutar: "947.700.000 TL",
    dagitimOran: "%39",
  },
  {
    grup: "Beta Şirket Çalışanları",
    planlananPay: "607.500",
    planlananOran: "%1",
    talepBasvuru: "359",
    talepTutar: "24.387.440 TL",
    talepOran: "%0,07",
    dagitimBasvuru: "359",
    dagitimTutar: "24.300.000 TL",
    dagitimOran: "%1",
  },
  {
    grup: "Toplam",
    planlananPay: "60.750.000",
    planlananOran: "%100",
    talepBasvuru: "1.143.799",
    talepTutar: "34.225.279.480 TL",
    talepOran: "%100",
    dagitimBasvuru: "1.124.953",
    dagitimTutar: "2.430.000.000 TL",
    dagitimOran: "%100",
  },
];

const kazancTablosu = [
  { gun: "1. gün", tavan: "44,0 TL", kazanc: "112 TL", para: "1.232 TL", toplam: "112 TL" },
  { gun: "2. gün", tavan: "48,4 TL", kazanc: "123 TL", para: "1.355 TL", toplam: "235 TL" },
  { gun: "3. gün", tavan: "53,2 TL", kazanc: "136 TL", para: "1.491 TL", toplam: "371 TL" },
  { gun: "4. gün", tavan: "58,6 TL", kazanc: "149 TL", para: "1.640 TL", toplam: "520 TL" },
  { gun: "5. gün", tavan: "64,4 TL", kazanc: "164 TL", para: "1.804 TL", toplam: "684 TL" },
  { gun: "6. gün", tavan: "70,9 TL", kazanc: "180 TL", para: "1.984 TL", toplam: "864 TL" },
  { gun: "7. gün", tavan: "77,9 TL", kazanc: "198 TL", para: "2.183 TL", toplam: "1.063 TL" },
  { gun: "8. gün", tavan: "85,7 TL", kazanc: "218 TL", para: "2.401 TL", toplam: "1.281 TL" },
  { gun: "9. gün", tavan: "94,3 TL", kazanc: "240 TL", para: "2.641 TL", toplam: "1.521 TL" },
  { gun: "10. gün", tavan: "103,7 TL", kazanc: "264 TL", para: "2.905 TL", toplam: "1.785 TL" },
  { gun: "11. gün", tavan: "114,1 TL", kazanc: "290 TL", para: "3.195 TL", toplam: "2.075 TL" },
  { gun: "12. gün", tavan: "125,5 TL", kazanc: "320 TL", para: "3.515 TL", toplam: "2.395 TL" },
  { gun: "13. gün", tavan: "138,1 TL", kazanc: "352 TL", para: "3.867 TL", toplam: "2.747 TL" },
  { gun: "14. gün", tavan: "151,9 TL", kazanc: "387 TL", para: "4.253 TL", toplam: "3.133 TL" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Beta Enerji Halka Arz Dağıtım Sonuçları Açıklandı",
  description:
    "Beta Enerji halka arzında dağıtım sonuçları açıklandı. BETAE halka arzına 1.124.953 yatırımcı katıldı, en fazla 28 lot dağıtım gerçekleşti.",
  datePublished: "2026-06-26T13:30:00+03:00",
  dateModified: "2026-06-26T13:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi",
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
  image: "https://www.hocaileborsa.com/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi.webp",
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
              src="/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi.webp"
              alt="Beta Enerji Halka Arz Dağıtım Sonuçları Açıklandı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arz Dağıtım Sonuçları Açıklandı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-26" className="text-sm text-slate-500">
                26 Haziran 2026
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
                Beta Enerji ve Teknoloji A.Ş. halka arzında dağıtım sonuçları
                açıklandı. Halka arzda toplam 60.750.000 lot pay dağıtılırken,
                dağıtım yapılan yatırımcı sayısı 1.124.953 oldu. Bireysel yatırımcı
                tarafında en fazla 28 lot, yani 1.120 TL tutarında dağıtım
                gerçekleşti.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">Şirket:</span> Beta Enerji ve Teknoloji A.Ş.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">BIST Kodu:</span> BETAE
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Halka Arz Fiyatı:</span> 40,00 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Toplam Dağıtım:</span> 60.750.000 lot
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Dağıtım Tutarı:</span> 2.430.000.000 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Katılan Yatırımcı:</span> 1.124.953
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Bireysel En Fazla:</span> 28 lot / 1.120 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Toplam Talep:</span> 34.225.279.480 TL
                </div>
              </div>

              <section>
                <h2 className="text-lg font-bold text-slate-900">
                  Dağıtım Sonuçları
                </h2>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Halka arzda planlanan tahsisat, gelen talep ve gerçekleşen
                  dağıtım gruplar bazında aşağıdaki şekilde oluştu. Toplam talep
                  tutarı 34,2 milyar TL seviyesine çıkarken, dağıtılan payların
                  toplam değeri 2,43 milyar TL oldu.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Yatırımcı Grubu</th>
                        <th className="px-4 py-3 text-left font-bold">Planlanan Pay</th>
                        <th className="px-4 py-3 text-left font-bold">Planlanan Oran</th>
                        <th className="px-4 py-3 text-left font-bold">Talep Başvuru</th>
                        <th className="px-4 py-3 text-left font-bold">Talep Tutarı</th>
                        <th className="px-4 py-3 text-left font-bold">Talep Oranı</th>
                        <th className="px-4 py-3 text-left font-bold">Dağıtım Başvuru</th>
                        <th className="px-4 py-3 text-left font-bold">Dağıtım Tutarı</th>
                        <th className="px-4 py-3 text-left font-bold">Dağıtım Oranı</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dagitimTablosu.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-900">{item.grup}</td>
                          <td className="px-4 py-3 text-slate-700">{item.planlananPay}</td>
                          <td className="px-4 py-3 text-slate-700">{item.planlananOran}</td>
                          <td className="px-4 py-3 text-slate-700">{item.talepBasvuru}</td>
                          <td className="px-4 py-3 text-slate-700">{item.talepTutar}</td>
                          <td className="px-4 py-3 text-slate-700">{item.talepOran}</td>
                          <td className="px-4 py-3 text-slate-700">{item.dagitimBasvuru}</td>
                          <td className="px-4 py-3 text-slate-700">{item.dagitimTutar}</td>
                          <td className="px-4 py-3 text-slate-700">{item.dagitimOran}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900">
                  28 Lot İçin Muhtemel Kazanç Tablosu
                </h2>
                <p className="mt-2 text-base leading-8 text-slate-700">
                  Aşağıdaki tablo, 28 lot dağıtım alan bir yatırımcı için yalnızca
                  varsayımsal tavan serisi hesabıdır. Kesin getiri anlamına gelmez;
                  hisse fiyatı işlem görmeye başladıktan sonra piyasa koşullarına
                  göre değişebilir.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Gün</th>
                        <th className="px-4 py-3 text-left font-bold">Tavan Fiyatı</th>
                        <th className="px-4 py-3 text-left font-bold">Günlük Kazanç</th>
                        <th className="px-4 py-3 text-left font-bold">Paranız Ne Olur?</th>
                        <th className="px-4 py-3 text-left font-bold">Toplam Kazanç</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kazancTablosu.map((item, index) => (
                        <tr
                          key={item.gun}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-900">{item.gun}</td>
                          <td className="px-4 py-3 text-slate-700">{item.tavan}</td>
                          <td className="px-4 py-3 text-slate-700">{item.kazanc}</td>
                          <td className="px-4 py-3 text-slate-700">{item.para}</td>
                          <td className="px-4 py-3 text-slate-700">{item.toplam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section key={haber.baslik}>
                    <h2 className="text-lg font-bold text-slate-900">
                      {haber.baslik}
                    </h2>
                    <p className="mt-2 text-base leading-8 text-slate-700">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Kaynak: Beta Enerji ve Teknoloji A.Ş. halka arz dağıtım sonuçları.
                <br />
                Not: Muhtemel kazanç tablosu, 28 lot ve her gün tavan fiyat
                varsayımıyla hazırlanmıştır; kesin getiri veya yatırım tavsiyesi
                değildir.
              </div>

              <HaberIlgiliBolumler
                slug="beta-enerji-halka-arz-dagitim-sonuclari-aciklandi"
                baslik="Beta Enerji Halka Arz Dağıtım Sonuçları Açıklandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/beta-enerji-halka-arz-dagitim-sonuclari-aciklandi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
