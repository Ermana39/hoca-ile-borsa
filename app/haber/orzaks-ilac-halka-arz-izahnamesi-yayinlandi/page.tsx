import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Orzaks İlaç Halka Arz İzahnamesi Yayınlandı",
  description:
    "Orzaks İlaç halka arzında talep toplama 29-30 Haziran / 1 Temmuz 2026 tarihlerinde yapılacak. ORZAX fiyatı 69 TL, dağıtım bireysele eşit olacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/orzaks-ilac-halka-arz-izahnamesi-yayinlandi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/orzaks-ilac-halka-arz-izahnamesi-yayinlandi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/orzaks-ilac-halka-arz-izahnamesi-yayinlandi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Orzaks İlaç ve Kimya Sanayi Ticaret A.Ş. halka arzına ilişkin onaylı izahname ve halka arz dokümanları yayınlandı. Şirketin ORZAX koduyla Borsa İstanbul Yıldız Pazar’da işlem görmesi planlanıyor. Talep toplama 29-30 Haziran / 1 Temmuz 2026 tarihlerinde yapılacak. Halka arz fiyatı 69,00 TL, toplam halka arz edilecek pay miktarı ise 52.500.000 lot olarak yer aldı.",
  },
  {
    baslik: "Halka arz detayları",
    metin:
      "Halka arzda 31.500.000 lot sermaye artırımı ve 21.000.000 lot ortak satışı olmak üzere toplam 52.500.000 lot pay satışı planlanıyor. Ortak satışı Yunus Emre Alimoğlu tarafından yapılacak. Halka arz büyüklüğü 3,62 milyar TL seviyesinde hesaplanıyor. Halka açıklık oranı %15,51 olarak izlenirken satış fiyatı 69,00 TL seviyesinde bulunuyor.",
  },
  {
    baslik: "Talep tarihi, dağıtım ve katılım endeksi",
    metin:
      "ORZAX halka arzında talep toplama 29-30 Haziran / 1 Temmuz 2026 tarihlerinde, pazartesi-salı-çarşamba günleri yapılacak. Dağıtım şekli bireysele eşit dağıtım olarak açıklandı. Katılım endeksi tarafında ise Orzaks İlaç halka arzı Katılım Endeksine Uygun Değil bilgisiyle yer alıyor. T1-T2 bakiye kullanımına uygun olmadığı bilgisi de talep sürecinde ayrıca dikkate alınmalıdır.",
  },
  {
    baslik: "Tahsisat oranları",
    metin:
      "Tahsisat dağılımında yurt içi bireysel yatırımcılara %57 oranında 29.925.000 lot ayrıldı ve bu grup için eşit dağıtım uygulanacak. Grup çalışanlarına %3 oranında 1.575.000 lot tahsis edildi ve bu grupta da eşit dağıtım bilgisi yer alıyor. Yurt içi kurumsal yatırımcılara %30 oranında 15.750.000 lot, yurt dışı kurumsal yatırımcılara ise %10 oranında 5.250.000 lot tahsis edildi.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "Orzaks İlaç, takviye edici gıda sektöründe faaliyet gösteriyor. Şirket; omega 3 ürünleri, vitamin ve mineral destekleri, bitkisel ekstreler, probiyotikler, kolajen ürünleri, çiğnenebilir jel formda takviyeler ve kozmetik ürünler gibi farklı kategorilerde kendi markalı ürünlerinin satışını gerçekleştiriyor.",
  },
  {
    baslik: "Fon kullanımı",
    metin:
      "İzahname verilerine göre halka arzdan sağlanacak fonun %40’ının devam eden ve yeni yatırımların finansmanında, %30’unun finansal borç anapara ve faiz ödemelerinde, %30’unun ise işletme sermayesinde kullanılması planlanıyor. Bu dağılım, şirketin hem büyüme yatırımlarına hem de bilanço yönetimine kaynak ayıracağını gösteriyor.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Orzaks İlaç halka arzında yatırımcı açısından öne çıkan başlıklar; 29-30 Haziran / 1 Temmuz talep toplama takvimi, 69,00 TL halka arz fiyatı, %57 bireysel tahsisat, bireysele eşit dağıtım, katılım endeksine uygun olmaması, sermaye artırımı ve ortak satışı dengesi, fon kullanım planı ve şirketin takviye edici gıda sektöründeki konumudur.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Talep toplama sürecinin ardından yatırımcıların takip edeceği ana başlıklar dağıtım sonuçları, iade ve takas süreci ile ORZAX paylarının Borsa İstanbul’da işlem görmeye başlayacağı tarih olacak. Kesin dağıtım sonuçları resmi açıklamalarla netleşecektir.",
  },
];

const tahsisatTablosu = [
  {
    grup: "Yurt İçi Bireysel",
    oran: "%57",
    lot: "29.925.000 Lot",
    dagitim: "Eşit Dağıtım",
  },
  {
    grup: "Grup Çalışanları",
    oran: "%3",
    lot: "1.575.000 Lot",
    dagitim: "Eşit Dağıtım",
  },
  {
    grup: "Yurt İçi Kurumsal",
    oran: "%30",
    lot: "15.750.000 Lot",
    dagitim: "-",
  },
  {
    grup: "Yurt Dışı Kurumsal",
    oran: "%10",
    lot: "5.250.000 Lot",
    dagitim: "-",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Orzaks İlaç Halka Arz İzahnamesi Yayınlandı",
  description:
    "Orzaks İlaç halka arzında talep toplama 29-30 Haziran / 1 Temmuz 2026 tarihlerinde yapılacak. ORZAX fiyatı 69 TL, dağıtım bireysele eşit olacak.",
  datePublished: "2026-06-25T22:45:00+03:00",
  dateModified: "2026-06-25T23:55:00+03:00",
  url: "https://www.hocaileborsa.com/haber/orzaks-ilac-halka-arz-izahnamesi-yayinlandi",
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
  image: "https://www.hocaileborsa.com/orzaks-ilac-halka-arz-izahnamesi-yayinlandi.webp",
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
              src="/orzaks-ilac-halka-arz-izahnamesi-yayinlandi.webp"
              alt="Orzaks İlaç Halka Arz İzahnamesi Yayınlandı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Orzaks İlaç Halka Arz İzahnamesi Yayınlandı
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
                Orzaks İlaç ve Kimya Sanayi Ticaret A.Ş. halka arzında onaylı
                izahname yayınlandı. Şirketin ORZAX koduyla Borsa İstanbul
                Yıldız Pazar’da işlem görmesi planlanırken, halka arz fiyatı
                69,00 TL olarak açıklandı. Talep toplama 29-30 Haziran /
                1 Temmuz 2026 tarihlerinde yapılacak.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span> 
                  Orzaks İlaç ve Kimya A.Ş.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    BIST Kodu:
                  </span> 
                  ORZAX
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Halka Arz Fiyatı:
                  </span> 
                  69,00 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Talep Tarihi:
                  </span> 
                  29-30 Haziran / 1 Temmuz 2026
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Toplam Pay:
                  </span> 
                  52.500.000 lot
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Aracı Kurum:
                  </span> 
                  İnfo Yatırım
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
                Kaynak: Orzaks İlaç halka arzına ilişkin onaylı izahname ve halka
                arz dokümanları.
                <br />
                <a
                  href="https://infoyatirim.com/kurumsal-finansman/halka-arz-aracilik/orzaks-ilac"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Orjinal izahname içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="orzaks-ilac-halka-arz-izahnamesi-yayinlandi"
                baslik="Orzaks İlaç Halka Arz İzahnamesi Yayınlandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/orzaks-ilac-halka-arz-izahnamesi-yayinlandi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
