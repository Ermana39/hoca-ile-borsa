import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "TCMB Politika Faizini Yüzde 37'de Sabit Tuttu",
  description:
    "TCMB Para Politikası Kurulu, politika faizini yüzde 37 seviyesinde sabit tuttu. Gecelik borç verme faizi yüzde 40, gecelik borçlanma faizi ise yüzde 35,5 olarak korundu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026",
  },
};

const faizOranlari = [
  {
    baslik: "Politika Faizi",
    oran: "%37",
    metin: "Bir hafta vadeli repo ihale faiz oranı yüzde 37 seviyesinde sabit bırakıldı.",
  },
  {
    baslik: "Gecelik Borç Verme Faizi",
    oran: "%40",
    metin: "Merkez Bankası gecelik vadede borç verme faiz oranı yüzde 40 seviyesinde korundu.",
  },
  {
    baslik: "Gecelik Borçlanma Faizi",
    oran: "%35,5",
    metin: "Gecelik vadede borçlanma faiz oranı yüzde 35,5 seviyesinde sabit tutuldu.",
  },
];

const haberDetaylari = [
  {
    baslik: "Karar Piyasa Beklentisiyle Uyumlu Geldi",
    metin:
      "Para Politikası Kurulu, politika faizi olan bir hafta vadeli repo ihale faiz oranını yüzde 37’de sabit tuttu. Karar, piyasa beklentisiyle uyumlu gerçekleşirken faiz koridorunun diğer unsurlarında da değişikliğe gidilmedi.",
  },
  {
    baslik: "Enflasyon Ana Eğiliminde Mayıs Ayı Mesajı",
    metin:
      "TCMB, yılın ilk aylarındaki yükselişin ardından enerji fiyatlarının da etkisiyle nisan ayında artan enflasyon ana eğiliminin mayıs ayında bir miktar gerilediğini belirtti. Buna rağmen enflasyon görünümüne yönelik risklerin yakından izlendiği mesajı korundu.",
  },
  {
    baslik: "Enerji ve Jeopolitik Riskler Takip Ediliyor",
    metin:
      "Karar metninde jeopolitik gelişmeler eşliğinde enerji fiyatlarında oynaklık ve yüksek seyrin sürdüğü vurgulandı. TCMB, jeopolitik gelişmelerin maliyet kanalı, iktisadi faaliyet ve beklenti kanalı üzerinden enflasyon görünümüne etkilerinin yakından takip edildiğini bildirdi.",
  },
  {
    baslik: "İç Talepte Zayıf Seyir Vurgusu",
    metin:
      "İlk çeyreğe ait verilerin iktisadi faaliyette yavaşlamanın devam ettiğini gösterdiği, öncü verilerin ise iç talepteki zayıf seyrin sürdüğüne işaret ettiği belirtildi. Bu ifade, para politikasının talep kanalı üzerinden dezenflasyon sürecini desteklediği mesajını güçlendirdi.",
  },
  {
    baslik: "Sıkı Para Politikası Duruşu Korunacak",
    metin:
      "TCMB, fiyat istikrarı sağlanana kadar sıkı para politikası duruşunun sürdürüleceğini vurguladı. Bankaya göre bu duruş; talep, kur ve beklenti kanalları üzerinden dezenflasyon sürecini güçlendirmeye devam edecek.",
  },
  {
    baslik: "Gerekirse Sıkılaştırma Mesajı Verildi",
    metin:
      "Kurul, faiz adımlarının enflasyon gerçekleşmeleri, ana eğilim ve beklentiler dikkate alınarak toplantı bazlı ve ihtiyatlı bir yaklaşımla belirleneceğini açıkladı. Enflasyon görünümünde belirgin ve kalıcı bir bozulma olması durumunda para politikası duruşunun sıkılaştırılacağı mesajı da korundu.",
  },
  {
    baslik: "Likidite ve Makroihtiyati Adımlar Gündemde Kalacak",
    metin:
      "Kredi ve mevduat piyasalarında öngörülenin dışında gelişmeler olması halinde parasal aktarım mekanizmasının ilave makroihtiyati adımlarla desteklenebileceği ifade edildi. Likidite koşullarının yakından izlenmeye ve likidite yönetimi araçlarının etkili şekilde kullanılmaya devam edileceği belirtildi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TCMB Politika Faizini Yüzde 37'de Sabit Tuttu",
  description:
    "TCMB Para Politikası Kurulu, politika faizini yüzde 37 seviyesinde sabit tuttu. Gecelik borç verme faizi yüzde 40, gecelik borçlanma faizi ise yüzde 35,5 olarak korundu.",
  datePublished: "2026-06-11T14:05:00+03:00",
  dateModified: "2026-06-11T14:05:00+03:00",
  url: "https://www.hocaileborsa.com/haber/tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/tcmb-faiz-karari.webp",
  inLanguage: "tr",
};

export default function HaberTcmbFaizKarariPage() {
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
              src="/tcmb-faiz-karari.webp"
              alt="TCMB politika faizini yüzde 37 seviyesinde sabit tuttu"
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
              <time dateTime="2026-06-11" className="text-sm text-slate-500">
                11 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TCMB Politika Faizini Yüzde 37’de Sabit Tuttu
            </h1>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türkiye Cumhuriyet Merkez Bankası (TCMB) Para Politikası Kurulu
                (PPK), 11 Haziran 2026 tarihli toplantısında politika faizini
                değiştirmeyerek yüzde 37 seviyesinde sabit tuttu. Karar,
                piyasadaki ağırlıklı beklentiyle uyumlu gerçekleşti.
              </p>

              <p>
                Kurul ayrıca faiz koridorunda da değişikliğe gitmedi. Merkez
                Bankası gecelik vadede borç verme faiz oranını yüzde 40’ta,
                gecelik vadede borçlanma faiz oranını ise yüzde 35,5’te sabit
                bıraktı.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {faizOranlari.map((item) => (
                  <section
                    key={item.baslik}
                    className="rounded-xl border border-blue-100 bg-blue-50 p-4"
                  >
                    <h2 className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                      {item.oran}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.metin}
                    </p>
                  </section>
                ))}
              </div>

              <p>
                Karar metninde enflasyon, enerji fiyatları, jeopolitik riskler,
                iç talepteki zayıflama ve sıkı para politikası duruşuna ilişkin
                önemli mesajlar yer aldı. TCMB, fiyat istikrarı sağlanana kadar
                mevcut sıkı duruşun korunacağına işaret etti.
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
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Karar metninde faizlerin sabit bırakılmasına rağmen sıkı para
                politikası duruşunun korunduğu, enflasyon görünümünde belirgin
                ve kalıcı bir bozulma olması halinde ise ek sıkılaştırma
                adımlarının gündeme gelebileceği mesajı öne çıktı.
              </div>

              <HaberIlgiliBolumler
                slug="tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026"
                baslik="TCMB Politika Faizini Yüzde 37’de Sabit Tuttu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
