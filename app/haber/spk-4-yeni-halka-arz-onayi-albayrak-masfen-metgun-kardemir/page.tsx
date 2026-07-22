import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "spk-4-yeni-halka-arz-onayi-albayrak-masfen-metgun-kardemir";
const canonical = `https://www.hocaileborsa.com/haber/${slug}`;
const imageUrl = `https://www.hocaileborsa.com/${slug}.webp`;
const pageTitle = "SPK 17 Temmuz Bülteni: 4 Şirkete Halka Arz Onayı";
const pageDescription =
  "SPK'nın 17 Temmuz 2026 tarihli bülteninde Albayrak Hazır Beton, Masfen Enerji, Metgün Enerji ve Kardemir Çelik için halka arz onayı verildi.";

const halkaArzlar = [
  {
    sirket: "Albayrak Hazır Beton San. ve Tic. A.Ş.",
    kisaAd: "Albayrak Hazır Beton",
    fiyat: "38,60 TL",
    toplamLot: "70.000.000 Lot",
    sermayeArtirimi: "49.000.000 Lot",
    ortakSatisi: "21.000.000 Lot",
    mevcutSermaye: "201.000.000 TL",
    yeniSermaye: "250.000.000 TL",
    fon: [
      "Araç, makine ve ekipman alımları",
      "Yeni yatırımların finanse edilmesi",
      "İnşaat projeleri",
      "İşletme sermayesi",
      "Finansal borçların azaltılması",
    ],
    href: "/halka-arz/onayli-izahnameler/albayrak-hazir-beton-san-ve-tic",
  },
  {
    sirket: "Masfen Enerji A.Ş.",
    kisaAd: "Masfen Enerji",
    fiyat: "45,68 TL",
    toplamLot: "85.000.000 Lot",
    sermayeArtirimi: "55.000.000 Lot",
    ortakSatisi: "30.000.000 Lot",
    mevcutSermaye: "500.000.000 TL",
    yeniSermaye: "555.000.000 TL",
    fon: [
      "Depolamalı güneş enerjisi santralleri yatırımları",
      "İşletme sermayesi",
      "Yatırımı tamamlanmış veya devam eden santral alımları",
    ],
    href: "/halka-arz/onayli-izahnameler/masfen-enerji",
  },
  {
    sirket: "Metgün Enerji Yatırımları A.Ş.",
    kisaAd: "Metgün Enerji",
    fiyat: "20,00 TL",
    toplamLot: "135.579.000 Lot",
    sermayeArtirimi: "90.579.000 Lot",
    ortakSatisi: "45.000.000 Lot",
    mevcutSermaye: "544.421.000 TL",
    yeniSermaye: "635.000.000 TL",
    fon: [
      "Depolamalı RES ve GES projeleri",
      "Yeni yenilenebilir enerji santrali ve şirket yatırımları",
      "Yardımcı kaynak hibrit GES yatırımları",
      "Biyogaz tesisi, enerji santralleri ve gübre fabrikası işletme sermayesi",
    ],
    href: "/halka-arz/onayli-izahnameler/metgun-enerji-yatirimlari",
  },
  {
    sirket: "Kardemir Çelik Sanayi A.Ş.",
    kisaAd: "Kardemir Çelik",
    fiyat: "35,00 TL",
    toplamLot: "128.000.000 Lot",
    sermayeArtirimi: "110.000.000 Lot",
    ortakSatisi: "18.000.000 Lot",
    mevcutSermaye: "720.000.000 TL",
    yeniSermaye: "830.000.000 TL",
    fon: [
      "%85 hammadde tedariki ve işletme sermayesi finansmanı",
      "%7 yenilenebilir enerji yatırımları",
      "%8 üretim tesisi yatırımları",
    ],
    href: "/halka-arz/onayli-izahnameler/kardemir-celik-sanayi",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonical,
    siteName: "Hoca ile Borsa",
    type: "article",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 675,
        alt: "SPK 4 yeni halka arz onayı Albayrak Masfen Metgün Kardemir Çelik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [imageUrl],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    description: pageDescription,
    datePublished: haberSaati,
    dateModified: haberSaati,
    url: canonical,
    image: imageUrl,
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
    about: halkaArzlar.map((item) => ({
      "@type": "Organization",
      name: item.sirket,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SPK bülteninde halka arz onayı alan şirketler",
    itemListElement: halkaArzlar.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.sirket,
      url: `https://www.hocaileborsa.com${item.href}`,
    })),
  },
];

export default function SpkDortYeniHalkaArzOnayiPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={`/${slug}.webp`}
              alt="SPK 4 yeni halka arz onayı Albayrak Masfen Metgün Kardemir Çelik"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <p className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Halka Arz
              </p>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                {pageTitle}
              </h1>
              <p className="mt-3 text-lg leading-8 text-zinc-700">
                Sermaye Piyasası Kurulu, Albayrak Hazır Beton, Masfen Enerji,
                Metgün Enerji Yatırımları ve Kardemir Çelik Sanayi halka arzları
                için aynı bültende onay verdi. Bu haber dört kararı topluca kayda
                geçirir; değişebilecek fiyat, tarih, lot ve dağıtım bilgileri
                şirketlerin onaylı izahname merkezlerinde güncel tutulur.
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                <time dateTime={haberSaati}>{haberTarihi}</time> ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h2 className="text-xl font-bold text-blue-950">
                SPK kararı: onay alan 4 şirket
              </h2>
              <p className="mt-3 leading-8 text-blue-950">
                Onaylı izahname tablosuna göre halka arz fiyatları Albayrak
                Hazır Beton için 38,60 TL, Masfen Enerji için 45,68 TL, Metgün
                Enerji için 20,00 TL ve Kardemir Çelik için 35,00 TL olarak
                açıklandı.
              </p>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-zinc-900">
                Onay alan şirketlerin karşılaştırmalı özeti
              </h2>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="border border-slate-200 px-3 py-3 font-semibold">
                        Şirket
                      </th>
                      <th className="border border-slate-200 px-3 py-3 font-semibold">
                        Halka arz fiyatı
                      </th>
                      <th className="border border-slate-200 px-3 py-3 font-semibold">
                        Toplam lot
                      </th>
                      <th className="border border-slate-200 px-3 py-3 font-semibold">
                        Sermaye artırımı
                      </th>
                      <th className="border border-slate-200 px-3 py-3 font-semibold">
                        Ortak satışı
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {halkaArzlar.map((item) => (
                      <tr key={item.kisaAd}>
                        <td className="border border-slate-200 px-3 py-3 font-semibold text-slate-900">
                          {item.kisaAd}
                        </td>
                        <td className="border border-slate-200 px-3 py-3">
                          {item.fiyat}
                        </td>
                        <td className="border border-slate-200 px-3 py-3">
                          {item.toplamLot}
                        </td>
                        <td className="border border-slate-200 px-3 py-3">
                          {item.sermayeArtirimi}
                        </td>
                        <td className="border border-slate-200 px-3 py-3">
                          {item.ortakSatisi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-zinc-900">
                Şirketlere göre halka arz detayları
              </h2>

              <div className="mt-5 grid gap-5">
                {halkaArzlar.map((item) => (
                  <section
                    key={item.kisaAd}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.kisaAd}: onay sonrası temel bilgiler
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          Mevcut sermaye {item.mevcutSermaye}, yeni sermaye{" "}
                          {item.yeniSermaye}. Halka arzda toplam{" "}
                          {item.toplamLot} satışa sunulacak.
                        </p>
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                      >
                        İzahname detayları
                      </Link>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                        <p className="text-sm text-slate-500">Fiyat</p>
                        <p className="mt-1 text-2xl font-bold text-slate-900">
                          {item.fiyat}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                        <p className="text-sm text-slate-500">Sermaye artırımı</p>
                        <p className="mt-1 text-xl font-bold text-slate-900">
                          {item.sermayeArtirimi}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                        <p className="text-sm text-slate-500">Ortak satışı</p>
                        <p className="mt-1 text-xl font-bold text-slate-900">
                          {item.ortakSatisi}
                        </p>
                      </div>
                    </div>

                    <h4 className="mt-5 font-bold text-slate-900">
                      Halka arz fonunun kullanım alanları
                    </h4>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
                      {item.fon.map((fon) => (
                        <li
                          key={fon}
                          className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2"
                        >
                          {fon}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>

            <section className="mt-8 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <h2 className="text-2xl font-bold text-zinc-900">
                Bu halka arz onayları ne anlama geliyor?
              </h2>
              <p>
                SPK onayı, şirketlerin halka arz izahnamesinin Kurul tarafından
                uygun bulunduğunu ve satış sürecinde bir sonraki aşamaya
                geçilebileceğini gösterir. Bu aşamadan sonra yatırımcıların
                özellikle talep toplama tarihlerini, dağıtım yöntemini, katılım
                endeksi durumunu, aracı kurum bilgisini ve nihai satış duyurusunu
                takip etmesi gerekir.
              </p>
              <p>
                Dört halka arzda da sermaye artırımı ve mevcut pay satışı birlikte
                yer alıyor. Sermaye artırımıyla satılan paylardan elde edilecek
                kaynak şirket kasasına girerken, mevcut pay satışında gelir payını
                satan ortaklara aktarılır. Bu ayrım, halka arz fonunun şirket
                faaliyetlerine ne kadar katkı sağlayacağını anlamak açısından
                önemlidir.
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="text-xl font-bold text-amber-950">
                Yatırımcılar hangi başlıklara bakmalı?
              </h2>
              <p className="mt-3 leading-8 text-amber-950">
                Halka arz fiyatı ve toplam lot sayısı ilk bakılan bilgiler olsa da
                tek başına yeterli değildir. Fon kullanım planı, şirketin
                borçluluk yapısı, finansal görünümü, faaliyet sektörü, halka
                açıklık oranı ve satış sonrası taahhütler birlikte incelenmelidir.
                Bu haber yatırım tavsiyesi değildir.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-zinc-900">
                Onaylı izahname bağlantıları
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {halkaArzlar.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <span className="block font-semibold text-slate-900">
                      {item.kisaAd}
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">
                      {item.fiyat} · {item.toplamLot}
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-blue-600">
                      Onaylı izahname sayfasını incele
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-8">
              <AuthorBox />
            </div>
          </div>
        </article>

        <HaberAltKisim
          href={`/haber/${slug}`}
          halkaArzMerkeziGoster={false}
        />
      </div>
    </main>
  );
}
