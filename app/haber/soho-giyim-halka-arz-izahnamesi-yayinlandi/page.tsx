import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Soho Giyim Halka Arz İzahnamesi Yayınlandı",
  description:
    "Soho Giyim halka arzında talep toplama 30 Haziran / 1 Temmuz 2026 tarihlerinde yapılacak. SOHOE fiyatı 15 TL, dağıtım tamamı eşit olacak.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/soho-giyim-halka-arz-izahnamesi-yayinlandi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/soho-giyim-halka-arz-izahnamesi-yayinlandi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/soho-giyim-halka-arz-izahnamesi-yayinlandi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Ne oldu?",
    metin:
      "Soho Giyim ve Enerji A.Ş. halka arzına ilişkin onaylı izahname bilgileri yayınlandı. Şirketin SOHOE koduyla Borsa İstanbul Ana Pazar’da işlem görmesi planlanıyor. Talep toplama 30 Haziran / 1 Temmuz 2026 tarihlerinde, salı-çarşamba günleri yapılacak. Halka arz fiyatı 15,00 TL olarak açıklandı.",
  },
  {
    baslik: "Halka arz detayları",
    metin:
      "Soho Giyim ve Enerji halka arzında fiyat 15,00 TL olarak belirlendi. Toplam halka arz payı 100.000.000 lot olurken halka açıklık oranı %32,60 seviyesinde yer aldı. Halka arzın tamamı sermaye artırımı yoluyla yapılacak; mevcut pay satışı ve ek pay satışı bulunmuyor.",
  },
  {
    baslik: "Dağıtım ve talep süreci",
    metin:
      "SOHOE halka arzında dağıtım yöntemi tamamı eşit dağıtım olarak açıklandı. Talep toplama 30 Haziran / 1 Temmuz 2026 tarihlerinde, salı-çarşamba günleri yapılacak. Katılım endeksi durumu Katılım Endeksine Uygun olarak yer alırken, T1-T2 bakiye kullanımına uygun olduğu bilgisi paylaşıldı. Tahsisat grubu kırılımı ayrıca verilmediği için haberin dağıtım odağı, tüm yatırımcılar için tamamı eşit dağıtım bilgisidir.",
  },
  {
    baslik: "Tahsisat ve arz yapısı",
    metin:
      "Soho Giyim halka arzında toplam 100.000.000 lot pay satışa konu edilecek ve bu payların tamamı sermaye artırımı niteliğinde olacak. Mevcut ortak satışı olmadığı için halka arzdan sağlanacak kaynak şirket bünyesine girecek. Dağıtımın tamamı eşit yöntemle yapılacak olması, başvuru sayısına göre yatırımcı başına düşecek lot miktarının dağıtım sonuçlarıyla netleşeceği anlamına geliyor.",
  },
  {
    baslik: "Şirket hakkında",
    metin:
      "Soho Giyim ve Enerji A.Ş., erkek lüks giyim üretimi ve yenilenebilir enerji alanlarında faaliyet gösteren, Derlüks Yatırım Holding A.Ş. bağlı ortaklığı bir anonim şirkettir. Ticari unvanı Soho Giyim ve Enerji Anonim Şirketi olarak paylaşılmıştır. Genel merkez adresi Kazlıçeşme Mahallesi, Demirhane Caddesi, Hacı Reşit Bey Sokak No:11, Zeytinburnu / İstanbul’dur. Şirketin özel şirket ve bağlı ortaklık yapısında faaliyet gösterdiği, çalışan sayısının yaklaşık 11 ile 50 kişi aralığında olduğu belirtilmiştir. Faaliyet alanları lüks erkek giyim ve yenilenebilir enerji olarak iki ana başlıkta toplanmaktadır. Erkek lüks hazır giyim tarafında özgün koleksiyonlar geliştirdiği ve tekstil üretimi yaptığı paylaşılmıştır. Şirketin 2021 yılından itibaren faaliyet alanını genişleterek temiz enerji yatırımları ve elektrik üretimi alanına adım attığı belirtilmiştir. Soho Giyim ve Enerji’nin performansı; marka konumlandırması, mağazalaşma, kreasyon yatırımları, sezonluk talep, stok yönetimi, finansman giderleri ve yenilenebilir enerji yatırımlarının gelir katkısıyla yakından ilişkilidir.",
  },
  {
    baslik: "Fon kullanımı",
    metin:
      "Halka arzdan elde edilecek fonun %30 Mağazalaşma yatırımları; %10 Markalaşma yatırımları; %40 Kreasyon yatırımları; %20 Finansal borçların ödenmesi alanlarında kullanılması planlanıyor. Bu yapı, şirketin mağazalaşma, markalaşma, kreasyon yatırımları ve finansal borç yönetimi tarafında kaynak oluşturmayı hedeflediğini gösteriyor.",
  },
  {
    baslik: "Değerlendirme",
    metin:
      "Soho Giyim halka arzında yatırımcı açısından öne çıkan başlıklar; 30 Haziran / 1 Temmuz talep toplama takvimi, 15,00 TL halka arz fiyatı, tamamı eşit dağıtım, Katılım Endeksine Uygun bilgisi, 100.000.000 lot toplam arz büyüklüğü, %32,60 halka açıklık oranı, tamamen sermaye artırımı yoluyla yapılacak arz yapısı ve fon kullanım planıdır.",
  },
  {
    baslik: "Sırada ne var?",
    metin:
      "Talep toplama sürecinin ardından dağıtım sonuçları ve Borsa İstanbul’da işlem görme tarihi takip edilecek. Halka arz sonrası işlem tarihi ve dağıtım sonuçları resmi açıklamalarla netleşecektir.",
  },
];

const tahsisatTablosu = [
  {
    grup: "Tüm Yatırımcılar",
    oran: "Ayrı grup oranı açıklanmadı",
    lot: "100.000.000 Lot",
    dagitim: "Tamamı Eşit Dağıtım",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Soho Giyim Halka Arz İzahnamesi Yayınlandı",
  description:
    "Soho Giyim halka arzında talep toplama 30 Haziran / 1 Temmuz 2026 tarihlerinde yapılacak. SOHOE fiyatı 15 TL, dağıtım tamamı eşit olacak.",
  datePublished: "2026-06-25T23:30:00+03:00",
  dateModified: "2026-06-25T23:55:00+03:00",
  url: "https://www.hocaileborsa.com/haber/soho-giyim-halka-arz-izahnamesi-yayinlandi",
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
  image: "https://www.hocaileborsa.com/soho-giyim-halka-arz-izahnamesi-yayinlandi.webp",
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
              src="/soho-giyim-halka-arz-izahnamesi-yayinlandi.webp"
              alt="Soho Giyim Halka Arz İzahnamesi Yayınlandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Soho Giyim Halka Arz İzahnamesi Yayınlandı
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
                Soho Giyim ve Enerji A.Ş. halka arzında onaylı izahname
                yayınlandı. Şirketin SOHOE koduyla Borsa İstanbul Ana Pazar’da
                işlem görmesi planlanırken, talep toplama 30 Haziran ve
                1 Temmuz 2026 tarihlerinde yapılacak.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">Şirket:</span> 
                  Soho Giyim ve Enerji A.Ş.
                </div>
                <div>
                  <span className="font-semibold text-slate-900">BIST Kodu:</span> 
                  SOHOE
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Talep Tarihi:</span> 
                  30 Haziran / 1 Temmuz 2026
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Halka Arz Fiyatı:</span> 
                  15,00 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Toplam Pay:</span> 
                  100.000.000 lot
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Halka Açıklık:</span> 
                  %32,60
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Dağıtım:</span> 
                  Tamamı Eşit Dağıtım
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Aracı Kurum:</span> 
                  İntegral Yatırım
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Katılım Endeksi:</span> 
                  Uygun
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                Kaynak: Soho Giyim ve Enerji halka arzına ilişkin onaylı izahname
                bilgileri.
                <br />
                <a
                  href="https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orjinal izahname içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="soho-giyim-halka-arz-izahnamesi-yayinlandi"
                baslik="Soho Giyim Halka Arz İzahnamesi Yayınlandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/soho-giyim-halka-arz-izahnamesi-yayinlandi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
