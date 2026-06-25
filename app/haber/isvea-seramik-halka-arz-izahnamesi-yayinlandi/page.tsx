import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "İsvea Seramik Halka Arz İzahnamesi Yayınlandı",
  description:
    "İsvea Seramik halka arzında talep toplama 1-2-3 Temmuz 2026 tarihlerinde yapılacak. ISVEA fiyatı 20,90 TL, bireysel tahsisat %60 oldu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/isvea-seramik-halka-arz-izahnamesi-yayinlandi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/isvea-seramik-halka-arz-izahnamesi-yayinlandi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/isvea-seramik-halka-arz-izahnamesi-yayinlandi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş. halka arzına ilişkin onaylı izahname ve halka arz dokümanları yayınlandı. Şirketin ISVEA koduyla Borsa İstanbul Yıldız Pazar’da işlem görmesi planlanıyor. Talep toplama 1-2-3 Temmuz 2026 tarihlerinde yapılacak. Halka arz fiyatı 20,90 TL, toplam halka arz payı ise 67.000.000 lot olarak açıklandı.",
  },
  {
    baslik: "Halka arz detayları",
    metin:
      "Halka arzda toplam 67.000.000 lot pay satışı planlanıyor. Bunun 60.000.000 lotu sermaye artırımı, 7.000.000 lotu mevcut pay satışı olarak yapılandırıldı. Halka arz fiyatı 20,90 TL olarak belirlenirken halka açıklık oranı %23,93 seviyesinde yer aldı. Halka arzın Halk Yatırım ve Ahlatcı Yatırım aracılığıyla gerçekleştirilmesi planlanıyor.",
  },
  {
    baslik: "Talep tarihi, dağıtım ve katılım endeksi",
    metin:
      "ISVEA halka arzında talep toplama 1-2-3 Temmuz 2026 tarihlerinde, çarşamba-perşembe-cuma günleri yapılacak. Dağıtım şekli bireysele eşit dağıtım olarak açıklandı. Katılım endeksi tarafında ise İsvea Seramik halka arzı Katılım Endeksine Uygun Değil bilgisiyle yer alıyor. T1-T2 bakiye kullanımına uygun olmadığı bilgisi de yatırımcıların başvuru sürecinde dikkat edeceği başlıklardan biri.",
  },
  {
    baslik: "Tahsisat oranları",
    metin:
      "Tahsisat dağılımında yurt içi bireysel yatırımcılara %60 oranında 40.200.000 lot ayrıldı ve bu grup için eşit dağıtım uygulanacak. Yurt içi kurumsal yatırımcılar için ise %40 oranında 26.800.000 lot tahsis edildi. Bu yapı, toplam arzın önemli kısmının bireysel yatırımcı tarafına ayrıldığını gösteriyor.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş., cam, seramik ve porselen sektöründe faaliyet gösteren bir şirket olarak vitrifiye seramik ve banyo ürünleri alanında üretim yapıyor. Şirket; banyo yaşam alanlarına yönelik seramik, vitrifiye ve tamamlayıcı ürün gruplarıyla faaliyetlerini sürdürüyor.",
  },
  {
    baslik: "Fon kullanımı",
    metin:
      "Halka arzdan elde edilecek fonun öztüketime yönelik yenilenebilir enerji yatırımları, makine ve ekipman yatırımları, kiralama yoluyla elde edilen makine ve teçhizatların satın alınması, finansal borçluluğun azaltılması ve işletme sermayesi alanlarında kullanılması planlanıyor.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "İsvea Seramik halka arzında yatırımcı açısından öne çıkan ana başlıklar; 1-2-3 Temmuz talep toplama takvimi, 20,90 TL halka arz fiyatı, %60 bireysel tahsisat, bireysele eşit dağıtım, katılım endeksine uygun olmaması, 67 milyon lotluk toplam arz büyüklüğü, fon kullanım planı ve şirketin seramik-banyo ürünleri sektöründeki konumudur.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Talep toplama sürecinin ardından yatırımcıların takip edeceği başlıklar dağıtım sonuçları, iade ve takas süreci ile ISVEA paylarının Borsa İstanbul’da işlem görmeye başlayacağı tarih olacak. Kesin dağıtım sonuçları resmi açıklamalarla netleşecektir.",
  },
];

const tahsisatTablosu = [
  {
    grup: "Yurt İçi Bireysel",
    oran: "%60",
    lot: "40.200.000 Lot",
    dagitim: "Eşit Dağıtım",
  },
  {
    grup: "Yurt İçi Kurumsal",
    oran: "%40",
    lot: "26.800.000 Lot",
    dagitim: "-",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "İsvea Seramik Halka Arz İzahnamesi Yayınlandı",
  description:
    "İsvea Seramik halka arzında talep toplama 1-2-3 Temmuz 2026 tarihlerinde yapılacak. ISVEA fiyatı 20,90 TL, bireysel tahsisat %60 oldu.",
  datePublished: "2026-06-25T23:00:00+03:00",
  dateModified: "2026-06-25T23:55:00+03:00",
  url: "https://www.hocaileborsa.com/haber/isvea-seramik-halka-arz-izahnamesi-yayinlandi",
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
  image: "https://www.hocaileborsa.com/isvea-seramik-halka-arz-izahnamesi-yayinlandi.webp",
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
              src="/isvea-seramik-halka-arz-izahnamesi-yayinlandi.webp"
              alt="İsvea Seramik Halka Arz İzahnamesi Yayınlandı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              İsvea Seramik Halka Arz İzahnamesi Yayınlandı
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
                İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş. halka arzında onaylı
                izahname yayınlandı. Şirketin ISVEA koduyla Borsa İstanbul
                Yıldız Pazar’da işlem görmesi planlanırken, halka arz fiyatı 20,90 TL
                olarak açıklandı. Talep toplama 1-2-3 Temmuz 2026 tarihlerinde
                yapılacak.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span> 
                  İsvea Seramik ve Banyo Ürünleri A.Ş.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    BIST Kodu:
                  </span> 
                  ISVEA
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Halka Arz Fiyatı:
                  </span> 
                  20,90 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Talep Tarihi:
                  </span> 
                  1-2-3 Temmuz 2026
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Toplam Pay:
                  </span> 
                  67.000.000 lot
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Aracı Kurum:
                  </span> 
                  Ahlatcı Yatırım / Halk Yatırım
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Dağıtım:
                  </span> 
                  Bireysele Eşit Dağıtım
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Katılım Endeksi:
                  </span> 
                  Uygun Değil
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Pazar:
                  </span> 
                  Yıldız Pazar
                </div>
              </div>

              <section>
                <h2 className="text-lg font-bold text-slate-900">
                  Tahsisat Oranları
                </h2>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Grup</th>
                        <th className="px-4 py-3 text-left font-bold">Oran</th>
                        <th className="px-4 py-3 text-left font-bold">Lot</th>
                        <th className="px-4 py-3 text-left font-bold">Dağıtım</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tahsisatTablosu.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {item.grup}
                          </td>
                          <td className="px-4 py-3 text-slate-700">{item.oran}</td>
                          <td className="px-4 py-3 text-slate-700">{item.lot}</td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.dagitim}
                          </td>
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
                Kaynak: İsvea Seramik halka arzına ilişkin onaylı izahname ve
                halka arz dokümanları.
                <br />
                <a
                  href="https://www.ahlatciyatirim.com.tr/halka-arz/isvea-seramik-ve-banyo-urunleri"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Orjinal izahname içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="isvea-seramik-halka-arz-izahnamesi-yayinlandi"
                baslik="İsvea Seramik Halka Arz İzahnamesi Yayınlandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/isvea-seramik-halka-arz-izahnamesi-yayinlandi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
