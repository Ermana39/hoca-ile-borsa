import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Ekim Turizm Halka Arz İzahnamesi Yayınlandı",
  description:
    "Ekim Turizm Ticaret ve Sanayi A.Ş. halka arzında onaylı izahname yayınlandı. EKIM kodu, 30,26 TL fiyat, 1-2-3 Temmuz talep toplama, tahsisat yapısı ve tüm bilinen detaylar haberde.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ekim-turizm-halka-arz-izahnamesi-yayinlandi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ekim-turizm-halka-arz-izahnamesi-yayinlandi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ekim-turizm-halka-arz-izahnamesi-yayinlandi.webp",
    ],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Ekim Turizm Ticaret ve Sanayi A.Ş.’nin halka arzına ilişkin onaylı izahname bilgileri yayınlandı. Intercity markasıyla bilinen şirketin EKIM koduyla Borsa İstanbul’da işlem görmesi planlanıyor. Talep toplama 1-2-3 Temmuz 2026 tarihlerinde, çarşamba-perşembe-cuma günleri 09.00-17.00 saatleri arasında yapılacak. Halka arz fiyatı 30,26 TL olarak açıklandı.",
  },
  {
    baslik: "Halka arz detayları",
    metin:
      "EKIM halka arzında 1 TL nominal değerli paylar 30,26 TL sabit fiyatla satışa sunulacak. Toplam halka arz büyüklüğü 4.902.120.000 TL, halka açıklık oranı ise %19,47 olarak yer alıyor. Toplam 162.000.000 lot dağıtılacak. Bunun 132.000.000 lotu sermaye artırımı, 30.000.000 lotu ise ortak satışı niteliğinde olacak.",
  },
  {
    baslik: "Dağıtım ve talep süreci",
    metin:
      "Halka arzda dağıtım yapısı iki parçalı kurgulandı. Yurt içi bireysel yatırımcı grubunda 25.000 lot ve altı başvurular için bireysele eşit dağıtım uygulanacak. 25.001 lot ve üzeri başvurular ise yüksek başvurulu yatırımcı grubu içinde oransal dağıtıma tabi olacak. T1 ve T2 bakiye kullanılamayacak. Katılım endeksi açısından ise halka arzın uygun olmadığı bilgisi paylaşıldı.",
  },
  {
    baslik: "Tahsisat ve arz yapısı",
    metin:
      "Toplam payların %70’i yurt içi bireysel yatırımcılara ayrıldı. Bu gruba 113.400.000 lot tahsis edildi ve 25.000 lota kadar olan başvurular eşit dağıtım kapsamında değerlendirilecek. Yüksek başvurulu yatırımcı grubuna %10 oranında 16.200.000 lot ayrıldı; bu grupta 25.001 lot ve üzeri, yani 756.530 TL ve üzerindeki başvurular oransal dağıtım kapsamında olacak. Yurt içi kurumsal yatırımcılar için ayrılan pay ise %20 oranında 32.400.000 lot olarak açıklandı.",
  },
  {
    baslik: "Fon kullanımı",
    metin:
      "Onaylı izahname özetine göre halka arzdan sağlanacak kaynağın tamamının operasyonel kiralamada kullanılacak kara araçlarının satın alınmasında kullanılması planlanıyor. Bu tercih, Intercity markasının ana iş kolu olan filo kiralama ve araç parkı yönetimi açısından önemli. Araç parkının yenilenmesi veya büyümesi, müşteri kapasitesi, kira geliri potansiyeli ve operasyonel rekabet gücü üzerinde doğrudan etkili olabilir. Ancak burada dikkat edilmesi gereken nokta, halka arz yapısında ortak satışının da bulunmasıdır; dolayısıyla toplam arz büyüklüğü ile şirket kasasına girecek net kaynak aynı anlamı taşımaz.",
  },
  {
    baslik: "Finansal görünüm",
    metin:
      "Açıklanan tabloda 2024, 2025 ve 2026 birinci çeyrek verileri yer alıyor. Toplam varlıklar 2024’te 42 milyar TL, 2025’te 40 milyar TL, 2026/1Ç’te 37 milyar TL seviyesinde bulunuyor. Özkaynaklar aynı dönemlerde sırasıyla 21 milyar TL, 20 milyar TL ve 19 milyar TL olarak yer alıyor. Hasılat tarafında 2024 ve 2025’te 15 milyar TL seviyeleri görülürken 2026/1Ç hasılatı 2,8 milyar TL olarak açıklandı. Esas faaliyet kârı 2024’te 64 milyon TL, 2025’te 111 milyon TL, 2026/1Ç’te 603 milyon TL seviyesinde. Dönem kârı/zararı tarafında ise 2024’te 2,3 milyar TL kâr, 2025’te 2,1 milyar TL zarar, 2026/1Ç’te 81 milyon TL kâr bilgisi yer alıyor. Bu tablo, şirketin bilanço büyüklüğünün yüksek olmasına rağmen net kârlılık tarafında dönemsel dalgalanmaların belirgin olduğunu gösteriyor.",
  },
  {
    baslik: "Önemli taahhütler",
    metin:
      "Halka arzda ortak satışının %85’i ile 15 gün boyunca fiyat istikrarı sağlayıcı işlemler planlanıyor. Ayrıca 1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapılmayacağı, dolaşımdaki payların artmasına sebep olacak şekilde satışa ve halka arza konu edilmeyeceği, ortakların pay satmayacağı ve 1 yıl boyunca halka arz fiyatının altında satış yapılmayacağı taahhüt edildi. Bu başlıklar, işlem sonrası ilk dönemde arz baskısını sınırlama açısından yatırımcıların takip ettiği unsurlar arasında yer alıyor.",
  },
  {
    baslik: "Konsorsiyum lideri ve üyeleri",
    metin:
      "Halka arzda konsorsiyum liderliğini Ak Yatırım ile Vakıf Yatırım üstleniyor. Konsorsiyum tarafında A1 Capital, Acar, Ahlatcı, ALB, Alnus, Alternatif, Anadolu, Ata, Bizim, BTC Türk, Bulls, Burgan, Colendi, Deniz, Destek, Dinamik, Fiba, Gedik, Global, Halk, ICBC, ING, Investaz, İnfo, İntegral, İş Yatırım, Kuveyt Türk, Marbaş, Meksa, Osmanlı, Oyak, PhillipCapital, Piramit, QNB, Şeker, Tacirler, TEB, Tera, Trive, Turkish, Ünlü, Yapı Kredi, Yatırım Finansman ve Ziraat Yatırım yer alıyor.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Ekim Turizm halka arzında yatırımcıların karşısına çıkan en önemli başlıklar; 1-2-3 Temmuz talep toplama takvimi, 30,26 TL fiyat, %20 iskonto, katılım endeksine uygun olmaması, 162 milyon lotluk toplam arz, %70 bireysel tahsisat, yüksek başvurulu yatırımcıya ayrılan %10’luk pay, T1-T2 bakiye kullanımının kapalı olması ve operasyonel kiralama odaklı fon kullanım planı olarak öne çıkıyor. Şirketin bilanço büyüklüğü güçlü görünse de 2025 yılındaki zarar verisi, finansal tarafta ayrıca incelenmesi gereken önemli bir unsur olarak dikkat çekiyor.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Talep toplama sürecinin tamamlanmasının ardından dağıtım sonuçları ve Borsa İstanbul’da işlem görme tarihi takip edilecek. Kesin lot dağılımı, yatırımcı sayısı ve işlem başlangıç tarihi resmi açıklamalarla netleşecek.",
  },
];

const tahsisatTablosu = [
  {
    grup: "Yurt İçi Bireysel",
    oran: "%70",
    lot: "113.400.000 Lot",
    dagitim: "25.000 lot ve altı için Eşit Dağıtım",
  },
  {
    grup: "Yüksek Başvurulu Yatırımcı",
    oran: "%10",
    lot: "16.200.000 Lot",
    dagitim: "25.001 lot ve üzeri için Oransal Dağıtım",
  },
  {
    grup: "Yurt İçi Kurumsal",
    oran: "%20",
    lot: "32.400.000 Lot",
    dagitim: "Kurumsal Tahsisat",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Ekim Turizm Halka Arz İzahnamesi Yayınlandı",
  description:
    "Ekim Turizm Ticaret ve Sanayi A.Ş. halka arzında onaylı izahname yayınlandı. EKIM kodu, 30,26 TL fiyat, 1-2-3 Temmuz talep toplama, tahsisat yapısı ve tüm bilinen detaylar haberde.",
  datePublished: "2026-06-27T12:00:00+03:00",
  dateModified: "2026-06-27T12:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/ekim-turizm-halka-arz-izahnamesi-yayinlandi",
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
  image:
    "https://www.hocaileborsa.com/ekim-turizm-halka-arz-izahnamesi-yayinlandi.webp",
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
              src="/ekim-turizm-halka-arz-izahnamesi-yayinlandi.webp"
              alt="Ekim Turizm Halka Arz İzahnamesi Yayınlandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Ekim Turizm Halka Arz İzahnamesi Yayınlandı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <time dateTime="2026-06-27" className="text-sm text-slate-500">
                27 Haziran 2026
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
                Ekim Turizm Ticaret ve Sanayi A.Ş. halka arzında onaylı izahname
                yayınlandı. Intercity markasıyla bilinen şirketin EKIM koduyla
                Borsa İstanbul’da işlem görmesi planlanıyor. Talep toplama
                1-2-3 Temmuz 2026 tarihlerinde yapılacak.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">Şirket:</span>{" "}
                  Ekim Turizm Ticaret ve Sanayi A.Ş. (Intercity)
                </div>
                <div>
                  <span className="font-semibold text-slate-900">BIST Kodu:</span>{" "}
                  EKIM
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Talep Tarihi:</span>{" "}
                  1-2-3 Temmuz 2026
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Talep Saati:</span>{" "}
                  09.00 - 17.00
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Halka Arz Fiyatı:</span>{" "}
                  30,26 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">İskonto:</span>{" "}
                  %20
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Toplam Pay:</span>{" "}
                  162.000.000 lot
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Halka Açıklık:</span>{" "}
                  %19,47
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Arz Büyüklüğü:</span>{" "}
                  4.902.120.000 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Dağıtım:</span>{" "}
                  Bireysele eşit / yüksek başvuruluya oransal
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Aracı Kurum:</span>{" "}
                  Ak Yatırım / Vakıf Yatırım
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Katılım Endeksi:</span>{" "}
                  Uygun Değil
                </div>
              </div>

              <section>
                <h2 className="text-lg font-bold text-slate-900">
                  Tahsisat ve Dağıtım
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
                      {tahsisatTablosu.map((item) => (
                        <tr key={item.grup} className="bg-white">
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

              <AuthorBox />

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Kaynak: Ekim Turizm Ticaret ve Sanayi A.Ş. halka arzına ilişkin
                onaylı izahname bilgileri.
                <br />
                <a
                  href="https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orijinal izahname içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="ekim-turizm-halka-arz-izahnamesi-yayinlandi"
                baslik="Ekim Turizm Halka Arz İzahnamesi Yayınlandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>

        <HaberAltKisim href="/haber/ekim-turizm-halka-arz-izahnamesi-yayinlandi" />
      </div>
    </main>
  );
}
