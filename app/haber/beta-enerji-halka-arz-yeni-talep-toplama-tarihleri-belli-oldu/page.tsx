import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Beta Enerji Halka Arzında Yeni Talep Toplama Tarihleri Belli Oldu",
  description:
    "Daha önce ertelenen Beta Enerji ve Teknoloji A.Ş. halka arzında yeni talep toplama tarihleri belli oldu. Şirket payları 23-25 Haziran 2026 tarihleri arasında 40 TL fiyatla satışa sunulacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-yeni-talep-toplama-tarihleri-belli-oldu",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/beta-yeni-tarih-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/beta-yeni-tarih-discover.webp"],
  },
};

const betaEnerjiBasliklari = [
  {
    baslik: "Yeni Talep Toplama Tarihleri Açıklandı",
    metin:
      "Beta Enerji ve Teknoloji A.Ş. halka arzında daha önce ertelenen talep toplama süreci için yeni tarihler belli oldu. Paylar 23 Haziran 2026 ile 25 Haziran 2026 tarihleri arasında yatırımcıların talebine sunulacak.",
  },
  {
    baslik: "Halka Arz 3 İş Günü Sürecek",
    metin:
      "Yayımlanan tasarruf sahiplerine satış duyurusuna göre halka arz süreci 3 iş günü boyunca devam edecek. Buna göre yatırımcılar 23-24-25 Haziran 2026 tarihlerinde halka arz başvurusu yapabilecek.",
  },
  {
    baslik: "Pay Başına Satış Fiyatı 40 TL",
    metin:
      "Beta Enerji halka arzında bir payın nominal değeri 1 TL olarak belirtilirken, pay başına satış fiyatı 40 TL olarak açıklandı. Talep toplama sürecinde yatırımcı başvuruları bu fiyat üzerinden alınacak.",
  },
  {
    baslik: "60.750.000 TL Nominal Değerli Pay Satışa Sunulacak",
    metin:
      "Duyuruda halka arz edilecek payların toplam nominal değerinin 60.750.000 TL olduğu belirtildi. Bu paylar belirlenen yeni takvim çerçevesinde yatırımcıların talebine sunulacak.",
  },
  {
    baslik: "Erteleme Sonrası Takvim Netleşti",
    metin:
      "Beta Enerji halka arzında daha önce talep toplama tarihleri ertelenmişti. Yeni satış duyurusuyla birlikte yatırımcıların takip ettiği halka arz takvimi yeniden netleşmiş oldu.",
  },
  {
    baslik: "Başvuru Detayları İzahnamede Yer Alıyor",
    metin:
      "Başvuru şekli, başvuru yerleri ve payların teslim şekline ilişkin ayrıntılı bilgilerin izahnamenin ilgili bölümlerinde yer aldığı ifade edildi. Yatırımcıların başvuru öncesinde güncel izahname ve resmi duyuruları kontrol etmesi önem taşıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Beta Enerji Halka Arzında Yeni Talep Toplama Tarihleri Belli Oldu",
  description:
    "Daha önce ertelenen Beta Enerji ve Teknoloji A.Ş. halka arzında yeni talep toplama tarihleri belli oldu. Şirket payları 23-25 Haziran 2026 tarihleri arasında 40 TL fiyatla satışa sunulacak.",
  datePublished: "2026-06-18T09:30:00+03:00",
  dateModified: "2026-06-18T09:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/beta-enerji-halka-arz-yeni-talep-toplama-tarihleri-belli-oldu",
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
  image: "https://www.hocaileborsa.com/beta-yeni-tarih-discover.webp",
  inLanguage: "tr",
};

export default function HaberBetaEnerjiHalkaArzYeniTarihPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="w-full overflow-hidden bg-white">
            <Image
              src="/beta-yeni-tarih.webp"
              alt="Beta Enerji halka arz yeni talep toplama tarihleri belli oldu"
              width={1200}
              height={900}
priority
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Beta Enerji Halka Arzında Yeni Talep Toplama Tarihleri Belli Oldu
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-18" className="text-sm text-slate-500">
                18 Haziran 2026
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
                Beta Enerji ve Teknoloji A.Ş. halka arzında yeni talep toplama
                tarihleri belli oldu. Daha önce talep toplama süreci ertelenen
                halka arzda, paylar 23 Haziran 2026 ile 25 Haziran 2026 tarihleri
                arasında yatırımcıların talebine sunulacak.
              </p>

              <p>
                Yayımlanan tasarruf sahiplerine satış duyurusuna göre halka arz
                edilecek payların toplam nominal değeri 60.750.000 TL olacak.
                Bir payın nominal değeri 1 TL olarak belirtilirken, halka arz
                fiyatı pay başına 40 TL olarak açıklandı.
              </p>

              <div className="space-y-5">
                {betaEnerjiBasliklari.map((haber) => (
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

              <h2 className="text-xl font-bold text-slate-900">
                Halka Arz Sürecinde Ne Değişti?
              </h2>

              <p>
                Beta Enerji halka arzında daha önce açıklanan talep toplama
                takvimi ertelenmişti. Yeni satış duyurusuyla birlikte halka arz
                takvimi yeniden belirlenmiş oldu. Buna göre yatırımcılar,
                23-24-25 Haziran 2026 tarihlerinde halka arz başvurusu
                yapabilecek.
              </p>

              <p>
                Bu gelişme, özellikle halka arza katılmak isteyen yatırımcılar
                açısından takvim belirsizliğini ortadan kaldırdı. Talep toplama
                sürecinin 3 iş günü devam edecek olması, yatırımcıların başvuru
                planlamasını yeni tarihlere göre yapması gerektiği anlamına
                geliyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Halka Arz Fiyatı ve Pay Tutarı
              </h2>

              <p>
                Duyuruda yer alan bilgilere göre Beta Enerji halka arzında
                pay başına satış fiyatı 40 TL olarak belirlendi. Halka arz
                edilecek payların toplam nominal değeri ise 60.750.000 TL
                olarak açıklandı.
              </p>

              <p>
                Halka arz fiyatı, yatırımcıların başvuru yaparken dikkate alacağı
                temel bilgilerden biri olacak. Başvuru sürecinde yatırımcıların
                aracı kurum ekranlarında yer alan güncel bilgilerle resmi duyuru
                ve izahname detaylarını karşılaştırması önem taşıyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Yeni Talep Toplama Tarihleri Ne Zaman?
              </h2>

              <p>
                Beta Enerji halka arzında yeni talep toplama tarihleri 23 Haziran
                2026 ile 25 Haziran 2026 olarak açıklandı. Halka arz süreci
                toplam 3 iş günü boyunca devam edecek.
              </p>

              <p>
                Bu takvime göre yatırımcılar 23 Haziran Salı, 24 Haziran Çarşamba
                ve 25 Haziran Perşembe günlerinde başvuru yapabilecek. Başvuru
                şekli, başvuru yerleri ve payların teslim şekline ilişkin detaylar
                izahnamenin ilgili bölümlerinde yer alıyor.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Yatırımcılar Açısından Neden Önemli?
              </h2>

              <p>
                Halka arz takviminde yaşanan değişiklikler, yatırımcıların nakit
                planlamasını ve başvuru sürecini doğrudan etkileyebilir. Daha önce
                ertelenen bir halka arzda yeni tarihlerin netleşmesi, başvuru
                yapmayı planlayan yatırımcılar için önemli bir gelişme olarak öne
                çıkıyor.
              </p>

              <p>
                Yatırımcıların başvuru öncesinde güncel izahnameyi, halka arz
                duyurusunu ve aracı kurum ekranlarında yer alan bilgileri kontrol
                etmesi gerekiyor. Özellikle fiyat, tarih, başvuru şekli ve pay
                teslim süreci gibi başlıkların resmi belgeler üzerinden teyit
                edilmesi önemlidir.
              </p>

              <h2 className="text-xl font-bold text-slate-900">
                Beta Enerji Ne İş Yapıyor?
              </h2>

              <p>
                Beta Enerji, elektrik enerjisinin dönüştürülmesi ve iletilmesi
                alanında kullanılan transformatörlerin üretimine odaklanan bir
                sanayi şirketidir. Şirket; güç transformatörleri, dağıtım trafoları,
                beton köşk ve yüksek gerilim anahtarlama sistemleri gibi ürün
                gruplarında faaliyet göstermektedir.
              </p>

              <p>
                Transformatör sektörü, elektrik altyapısı yatırımları, yenilenebilir
                enerji projeleri, sanayileşme, şehirleşme ve elektrikli araç
                dönüşümü gibi uzun vadeli eğilimlerden etkilenen stratejik alanlar
                arasında yer alıyor. Bu nedenle Beta Enerji halka arzı, enerji
                altyapısı ve sanayi teması açısından yatırımcıların yakından takip
                ettiği başlıklardan biri olmaya devam ediyor.
              </p>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Beta Enerji halka arzında en önemli güncel gelişme, daha önce
                ertelenen talep toplama süreci için yeni tarihlerin 23-25 Haziran
                2026 olarak açıklanmış olmasıdır.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Halka arz 3 iş günü sürecek. Pay başına satış fiyatı 40 TL,
                halka arz edilecek toplam nominal pay tutarı ise 60.750.000 TL
                olarak duyuruldu.
              </div>

              <HaberIlgiliBolumler
                slug="beta-enerji-halka-arz-yeni-talep-toplama-tarihleri-belli-oldu"
                baslik="Beta Enerji Halka Arzında Yeni Talep Toplama Tarihleri Belli Oldu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/beta-enerji-halka-arz-yeni-talep-toplama-tarihleri-belli-oldu" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
