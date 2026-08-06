import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "ozysr-aluminyum-kaynak-teli-uretimine-basladi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/ozysr-aluminyum-kaynak-teli-uretimine-basladi.webp";

export const metadata: Metadata = {
  title: "OZYSR Alüminyum Kaynak Teli Üretimine Başladı",
  description:
    "Özyaşar Tel, Ar-Ge Merkezi tarafından geliştirilen alüminyum kaynak telinde ilk müşteri siparişlerinin ardından üretime geçti. Aylık üretim kapasitesi 60 ton olarak açıklandı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "OZYSR Alüminyum Kaynak Teli Üretimine Başladı",
    description:
      "OZYSR, alüminyum kaynak teli üretimine başladı. Ürün için aylık kapasite 60 ton olarak belirlendi.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "OZYSR alüminyum kaynak teli üretimine başladı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OZYSR Alüminyum Kaynak Teli Üretimine Başladı",
    description:
      "OZYSR, alüminyum kaynak teli üretimine geçti. Aylık kapasite 60 ton olarak açıklandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Yeni Ürün",
    deger: "Alüminyum Kaynak Teli",
    aciklama: "Ar-Ge Merkezi tarafından geliştirildi",
  },
  {
    baslik: "Üretim Durumu",
    deger: "Başladı",
    aciklama: "İlk müşteri siparişlerinin ardından üretime geçildi",
  },
  {
    baslik: "Aylık Kapasite",
    deger: "60 Ton",
    aciklama: "Pazar talebine göre artırılması planlanıyor",
  },
  {
    baslik: "Beklenen Etki",
    deger: "Ciroya Olumlu Katkı",
    aciklama: "Ürün portföyü ve gelir yapısı desteklenecek",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "OZYSR Alüminyum Kaynak Teli Üretimine Başladı",
  description:
    "Özyaşar Tel, Ar-Ge Merkezi tarafından geliştirilen alüminyum kaynak telinde ilk müşteri siparişlerinin ardından üretime geçti. Aylık üretim kapasitesi 60 ton olarak açıklandı.",
  image: haberGorsel,
  datePublished: "2026-07-07T16:54:00+03:00",
  dateModified: "2026-07-07T16:54:00+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function OzysrAluminyumKaynakTeliPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/ozysr-aluminyum-kaynak-teli-uretimine-basladi.webp"
              alt="OZYSR alüminyum kaynak teli üretimine başladı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              OZYSR Alüminyum Kaynak Teli Üretimine Başladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Yeni Ürün
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Özyaşar Tel ve Galvanizleme Sanayi A.Ş. (<strong>OZYSR</strong>),
                Ar-Ge Merkezi tarafından geliştirilen alüminyum kaynak telinde
                üretime geçildiğini açıkladı. Şirket, ilk müşteri siparişlerinin
                alınmasının ardından yeni ürünün üretimine başladığını duyurdu.
              </p>

              <p>
                KAP açıklamasında alüminyum kaynak teli için aylık üretim
                kapasitesinin <strong>60 ton</strong> olarak belirlendiği, pazar
                talebine bağlı olarak kapasitenin kısa vadede artırılmasının
                planlandığı belirtildi.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <div className="text-sm font-semibold text-emerald-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-emerald-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-emerald-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  OZYSR, ürün geliştirme çalışmaları kapsamında tasarlanan
                  alüminyum kaynak telinin ilk müşteri siparişleri sonrası
                  üretimine başlandığını açıkladı. Açıklama 7 Temmuz 2026
                  tarihinde KAP üzerinden yayımlandı.
                </p>
              </Section>

              <Section title="Yeni ürünün detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Şirket
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Özyaşar Tel ve Galvanizleme Sanayi A.Ş.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hisse Kodu
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          OZYSR
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Ürün
                        </th>
                        <td className="px-4 py-3 font-bold text-emerald-700">
                          Alüminyum kaynak teli
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Aylık Üretim Kapasitesi
                        </th>
                        <td className="px-4 py-3 font-bold text-emerald-700">
                          60 ton
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Açıklanan Beklenti
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Ürün portföyü ve gelir yapısının güçlenmesi, ciroya
                          olumlu katkı
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yeni ürün açıklaması, OZYSR açısından yalnızca üretim hattına
                  yeni bir ürün eklenmesi değil; daha yüksek katma değerli ürün
                  portföyüne geçiş başlığı olarak öne çıkıyor. Şirket, alüminyum
                  kaynak telinin gelir yapısını desteklemesini ve ciroya olumlu
                  katkı sağlamasını bekliyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Aylık 60 tonluk başlangıç kapasitesi ilk aşama olarak açıklandı.
                  Pazar talebine göre kapasitenin kısa vadede artırılması
                  planlandığı için sonraki sipariş ve kapasite açıklamaları
                  haberin devamı açısından belirleyici olacak.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Özyaşar Tel ve Galvanizleme, tel ve galvanizleme alanında
                  faaliyet gösteren sanayi şirketleri arasında yer alıyor.
                  Şirketin performansı; inşaat, sanayi, ihracat pazarları, çelik
                  hammadde fiyatları, kapasite kullanımı ve ürün çeşitliliğiyle
                  bağlantılı seyrediyor.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  OZYSR’nin alüminyum kaynak teli üretimine başlaması, şirketin
                  ürün çeşitliliğini artıran pozitif bir gelişme olarak
                  değerlendirilebilir. Özellikle ilk müşteri siparişlerinin
                  alınmasının ardından üretime geçilmiş olması, ürünün pazarda
                  karşılık bulmaya başladığını gösteriyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Ancak açıklamada ürünün satış fiyatı, sipariş büyüklüğü veya
                  beklenen yıllık ciro katkısı paylaşılmadı. Bu nedenle finansal
                  etkinin netleşmesi için satış hacmi, kapasite artışı ve sonraki
                  dönem finansal sonuçları takip edilmeli.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Şirket, kapasite artışı ve satış gelişmelerini kamuoyuyla
                  paylaşmaya devam edeceğini açıkladı. Bundan sonraki süreçte
                  alüminyum kaynak telinde yeni siparişler, kapasite artırımı ve
                  ürünün ciroya katkısına ilişkin gelişmeler izlenecek.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1626609"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  OZYSR — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="OZYSR Alüminyum Kaynak Teli Üretimine Başladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Yeni ürünün finansal etkisi satış hacmi,
                kapasite artışı ve şirketin sonraki dönem açıklamalarıyla birlikte
                değerlendirilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
