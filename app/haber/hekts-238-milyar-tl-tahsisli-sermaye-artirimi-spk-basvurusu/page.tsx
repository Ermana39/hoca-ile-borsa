import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "hekts-238-milyar-tl-tahsisli-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/hekts-238-milyar-tl-tahsisli-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: { absolute: "HEKTS 2,38 Milyar TL Tahsisli Artırım SPK Başvurusu" },
  description:
    seoAciklamasi("HEKTS, 2,38 milyar TL planlanan satış hasılatı ile OYAK’a tahsisli sermaye artırımı için SPK’ya başvurdu. Süreç başvuru aşamasında olup nihai tutar satış fiyatına göre belirlenecek.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "HEKTS 2,38 Milyar TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "Hektaş, OYAK’a tahsisli sermaye artırımı için SPK başvurusu yaptı. Planlanan toplam satış hasılatı 2,38 milyar TL.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "HEKTS 2,38 milyar TL tahsisli sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HEKTS 2,38 Milyar TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "HEKTS’te tahsisli sermaye artırımı başvurusu: Planlanan satış hasılatı 2,38 milyar TL, tahsis OYAK’a yapılacak.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Planlanan Satış Hasılatı",
    deger: "2,38 Milyar TL",
    aciklama: "Tahsisli sermaye artırımı kapsamında",
  },
  {
    baslik: "Tahsis Edilecek Kişi",
    deger: "OYAK",
    aciklama: "Ordu Yardımlaşma Kurumu OYAK Genel Müdürlüğü",
  },
  {
    baslik: "SPK Başvuru Tarihi",
    deger: "03.07.2026",
    aciklama: "Süreç başvuru aşamasında",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "8,43 Milyar TL",
    aciklama: "Kayıtlı sermaye tavanı 25 milyar TL",
  },
];

const detaylar = [
  {
    baslik: "İşlem Türü",
    deger: "Tahsisli Bedelli Sermaye Artırımı",
  },
  {
    baslik: "Rüçhan Hakkı",
    deger: "Kullandırılmayacak",
  },
  {
    baslik: "Pay Niteliği",
    deger: "Kaydi Pay",
  },
  {
    baslik: "Bildirim Tipi",
    deger: "Sermaye Artırımı / Azaltımı",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "HEKTS 2,38 Milyar TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "HEKTS, OYAK’a tahsisli sermaye artırımı için SPK’ya başvurdu. Planlanan toplam satış hasılatı 2,38 milyar TL olarak açıklandı.",
  image: haberGorsel,
  datePublished: "2026-07-03T20:15:00+03:00",
  dateModified: "2026-07-03T20:15:00+03:00",
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

export default function HektsTahsisliSermayeArtirimiPage() {
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
              src="/hekts-238-milyar-tl-tahsisli-sermaye-artirimi-spk-basvurusu.webp"
              alt="HEKTS 2,38 milyar TL tahsisli sermaye artırımı SPK başvurusu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              HEKTS 2,38 Milyar TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/20">
                Sermaye Artırımı
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
                Hektaş Ticaret T.A.Ş. (<strong>HEKTS</strong>), tahsisli sermaye
                artırımı için Sermaye Piyasası Kurulu’na başvuru yaptığını
                açıkladı. KAP bildiriminde planlanan toplam satış hasılatı
                <strong> 2.380.000.000 TL</strong> olarak yer aldı.
              </p>

              <p>
                Bildirime göre artırılacak sermayenin tahsis edileceği kişi
                <strong> Ordu Yardımlaşma Kurumu OYAK Genel Müdürlüğü</strong>
                olacak. Süreç henüz <strong>SPK başvurusu aşamasında</strong>
                olduğu için nihai onay verilmiş gibi değerlendirilmemelidir.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-purple-200 bg-purple-50 p-4"
                  >
                    <div className="text-sm font-semibold text-purple-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-purple-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-purple-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Şirket yönetim kurulunun 2 Temmuz 2026 tarihinde aldığı
                  tahsisli sermaye artırımı kararı çerçevesinde 3 Temmuz 2026
                  tarihinde SPK’ya başvuru yapıldı. Bildirimde işlem, rüçhan hakkı
                  kullandırılmadan yapılacak tahsisli bedelli sermaye artırımı
                  olarak yer aldı.
                </p>
              </Section>

              <Section title="Sermaye artırımı detayları">
                <div className="grid gap-3 sm:grid-cols-2">
                  {detaylar.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-medium text-slate-500">
                        {item.baslik}
                      </div>
                      <div className="mt-1 text-base font-bold text-slate-900">
                        {item.deger}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Kayıtlı Sermaye Tavanı
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          25.000.000.000 TL
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Mevcut Sermaye
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          8.430.000.000 TL
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Planlanan Toplam Satış Hasılatı
                        </th>
                        <td className="px-4 py-3 font-bold text-purple-700">
                          2.380.000.000 TL
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Tahsis Edilecek Kişi
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Ordu Yardımlaşma Kurumu OYAK Genel Müdürlüğü
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Tahsisli sermaye artırımları, şirketin özkaynak yapısını
                  güçlendirme ve finansman ihtiyacını karşılamaya yönelik önemli
                  adımlardan biri olabilir. HEKTS özelinde planlanan 2,38 milyar
                  TL’lik satış hasılatı, şirketin finansman yapısı açısından
                  yakından izlenecek bir başlık oluşturuyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Ancak işlem mevcut ortaklara rüçhan hakkı kullandırılmadan,
                  belirli bir yatırımcıya tahsisli şekilde yapılacağı için
                  yatırımcıların sulanma etkisi, satış fiyatı, ihraç edilecek pay
                  adedi ve SPK onay sürecini birlikte değerlendirmesi gerekir.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Hektaş, tarım kimyasalları, bitki koruma ürünleri, tohum,
                  hayvan sağlığı ve tarımsal üretim zincirine yönelik faaliyetleri
                  ile Borsa İstanbul’da işlem gören şirketlerden biridir. Şirketin
                  faaliyet performansı; tarım sektörü talebi, hammadde maliyetleri,
                  döviz kuru, finansman giderleri, stok yönetimi ve iç pazar
                  koşullarıyla yakından ilişkilidir.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Başvuru, HEKTS için finansman ve özkaynak yapısı açısından
                  izlenecek önemli bir gelişme niteliğinde. KAP bildiriminde
                  planlanan toplam satış hasılatı net şekilde 2,38 milyar TL
                  olarak açıklanırken, artırılacak nominal sermaye tutarının Borsa
                  İstanbul Toptan Alış Satış İşlemleri prosedürü doğrultusunda
                  belirlenecek 1 TL nominal değerli pay satış fiyatına göre
                  hesaplanacağı belirtildi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu nedenle haberin etkisi sadece başvuru tutarıyla değil; nihai
                  ihraç fiyatı, oluşacak pay adedi, SPK onayı, şirketin finansal
                  yapısına katkısı ve piyasanın tahsisli artırımı nasıl
                  fiyatlayacağıyla birlikte değerlendirilmelidir.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki aşamada SPK’nın başvuruya ilişkin değerlendirmesi,
                  tahsisli satış fiyatı, ihraç edilecek nominal pay tutarı ve
                  işlemin tamamlanmasına yönelik yeni KAP açıklamaları takip
                  edilecek. Süreç onay aşamasına geçmeden kesinleşmiş sermaye
                  artışı gibi yorumlanmamalıdır.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1624193"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="HEKTS 2,38 Milyar TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Tahsisli sermaye artırımı süreci SPK başvurusu
                aşamasındadır; nihai sonuç, satış fiyatı ve ihraç edilecek pay
                adedi için şirketin sonraki KAP açıklamaları takip edilmelidir.
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
