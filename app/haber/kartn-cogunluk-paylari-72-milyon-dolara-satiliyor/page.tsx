import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "kartn-cogunluk-paylari-72-milyon-dolara-satiliyor";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/kartn-cogunluk-paylari-72-milyon-dolara-satiliyor.webp";

export const metadata: Metadata = {
  title: "KARTN Çoğunluk Payları 72 Milyon Dolara Satılıyor",
  description:
    "Kartonsan’da Pak Holding, Asil Holding ve Pak Gıda’nın sahip olduğu toplam %77,21 oranındaki payların 72 milyon dolar bedelle satışı için pay alım satım sözleşmesi imzalandı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "KARTN Çoğunluk Payları 72 Milyon Dolara Satılıyor",
    description:
      "Kartonsan’da %77,21 oranındaki çoğunluk pay için 72 milyon dolarlık pay alım satım sözleşmesi imzalandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "KARTN çoğunluk payları 72 milyon dolara satılıyor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KARTN Çoğunluk Payları 72 Milyon Dolara Satılıyor",
    description:
      "Kartonsan’da %77,21 oranındaki çoğunluk pay için 72 milyon dolarlık sözleşme imzalandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Satılacak Pay Oranı",
    deger: "%77,21",
    aciklama: "Kartonsan sermayesindeki toplam pay oranı",
  },
  {
    baslik: "Satış Bedeli",
    deger: "72 Milyon USD",
    aciklama: "Kapanış düzeltmelerine tabi toplam bedel",
  },
  {
    baslik: "Alıcılar",
    deger: "Hasan Peker / Aydın Veli Serin",
    aciklama: "Her biri %38,605 oranında pay devralacak",
  },
  {
    baslik: "Sonraki Aşama",
    deger: "Zorunlu Pay Alım Teklifi",
    aciklama: "Devir tamamlandıktan sonra süreç açıklanacak",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "KARTN Çoğunluk Payları 72 Milyon Dolara Satılıyor",
  description:
    "Kartonsan’da Pak Holding, Asil Holding ve Pak Gıda’nın sahip olduğu toplam %77,21 oranındaki payların 72 milyon dolar bedelle satışı için pay alım satım sözleşmesi imzalandı.",
  image: haberGorsel,
  datePublished: "2026-07-07T08:55:00+03:00",
  dateModified: "2026-07-07T08:55:00+03:00",
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

export default function KartnCogunlukPaySatisiPage() {
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
              src="/kartn-cogunluk-paylari-72-milyon-dolara-satiliyor.webp"
              alt="KARTN çoğunluk payları 72 milyon dolara satılıyor"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              KARTN Çoğunluk Payları 72 Milyon Dolara Satılıyor
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Pay Devri
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
                Kartonsan Karton Sanayi ve Ticaret A.Ş. (<strong>KARTN</strong>),
                şirket çoğunluk paylarının satışına ilişkin pay alım satım
                sözleşmesi imzalandığını açıkladı. KAP bildirimine göre Pak
                Holding A.Ş., Asil Holding A.Ş. ve Pak Gıda Üretim ve Pazarlama
                A.Ş.’nin sahip olduğu toplam <strong>%77,21</strong> oranındaki
                pay için <strong>72 milyon ABD doları</strong> bedelle sözleşme
                imzalandı.
              </p>

              <p>
                Sözleşme kapsamında payların Hasan Peker ve Aydın Veli Serin’e
                devredilmesi planlanıyor. Hasan Peker’in %38,605 oranında,
                Aydın Veli Serin’in de %38,605 oranında pay devralacağı açıklandı.
                İşlem, kapanış düzeltmelerine ve sözleşmede yer alan kapanış
                koşullarının yerine getirilmesine tabi olacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KARTN’nin 75.000.000 TL ödenmiş sermayesinde Pak Holding,
                  Asil Holding ve Pak Gıda’nın sahip olduğu toplam 57.907.726,815
                  TL nominal değerli payın satışı için 6 Temmuz 2026 tarihli
                  Pay Alım Satım Sözleşmesi imzalandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Satışa konu paylar, 36,433 TL nominal değerli A grubu pay ve
                  57.907.689,382 TL nominal değerli B grubu paydan oluşuyor. Bu
                  paylar şirket sermayesinin toplam %77,21’ine karşılık geliyor.
                </p>
              </Section>

              <Section title="Pay devrinin detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Şirket
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Kartonsan Karton Sanayi ve Ticaret A.Ş.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hisse Kodu
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          KARTN
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Satıcılar
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Pak Holding A.Ş., Asil Holding A.Ş., Pak Gıda Üretim ve
                          Pazarlama A.Ş.
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Alıcılar
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Hasan Peker ve Aydın Veli Serin
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Satışa Konu Pay Oranı
                        </th>
                        <td className="px-4 py-3 font-bold text-blue-700">
                          %77,21
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Toplam Satış Bedeli
                        </th>
                        <td className="px-4 py-3 font-bold text-blue-700">
                          72.000.000 ABD Doları
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Zorunlu pay alım teklifi süreci">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KAP açıklamasında, pay devir işlemlerinin fiilen gerçekleşmesi
                  sonrasında Pay Alım Teklifi Tebliği hükümleri uyarınca zorunlu
                  pay alım teklifi sürecine ilişkin açıklamaların ayrıca
                  yapılacağı belirtildi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu nedenle mevcut aşamada işlem tamamlanmış bir pay devri değil,
                  kapanış koşullarına bağlı bir pay alım satım sözleşmesi olarak
                  takip edilmeli. Devir tamamlandıktan sonra zorunlu pay alım
                  teklifine ilişkin fiyat, takvim ve başvuru süreci ayrıca
                  açıklanacak.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KARTN’de satışa konu pay oranının %77,21 seviyesinde olması,
                  işlemi şirket kontrolünün değişimi açısından kritik hale
                  getiriyor. Kontrol değişimine konu işlemlerde piyasanın odağı
                  yalnızca satış bedeli değil, devir koşulları ve zorunlu pay alım
                  teklifi sürecinin nasıl şekilleneceği olur.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  72 milyon ABD doları satış bedeli, kapanış düzeltmelerine tabi
                  olduğu için nihai bedel kapanış aşamasında netleşebilir. Bu
                  nedenle işlem sürecindeki sonraki açıklamalar KARTN için
                  yakından izlenecek.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Kartonsan, karton ve ambalaj sektöründe faaliyet gösteren köklü
                  Borsa İstanbul şirketleri arasında yer alıyor. Şirketin
                  faaliyetleri ambalaj talebi, hammadde maliyetleri, enerji
                  giderleri, kapasite kullanımı ve ihracat pazarlarındaki talep
                  koşullarıyla bağlantılı seyrediyor.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KARTN açıklaması, sıradan bir pay alım satım bildirimi değil;
                  şirket çoğunluk paylarının devrine yönelik bir kontrol değişimi
                  süreci olduğu için önemli. %77,21 oranındaki pay için imzalanan
                  72 milyon dolarlık sözleşme, hem ortaklık yapısı hem de zorunlu
                  pay alım teklifi ihtimali nedeniyle piyasada güçlü şekilde
                  takip edilecek.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Buna karşın işlemin tamamlanması kapanış koşullarına bağlı.
                  Bu nedenle kısa vadede asıl takip edilecek başlıklar pay devrinin
                  kesinleşmesi, zorunlu pay alım teklifi açıklaması ve yeni
                  ortaklık yapısına ilişkin sonraki KAP bildirimleri olacak.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Pay devir işlemlerinin sözleşmedeki kapanış koşullarının yerine
                  getirilmesinin ardından tamamlanması bekleniyor. Devir
                  tamamlandıktan sonra zorunlu pay alım teklifi sürecine ilişkin
                  ayrıntılar ayrıca kamuya açıklanacak.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1625589"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  KARTN — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="KARTN Çoğunluk Payları 72 Milyon Dolara Satılıyor"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Pay devri süreci kapanış koşullarına bağlıdır;
                zorunlu pay alım teklifi ve kesinleşen devir bilgileri için
                sonraki KAP açıklamaları takip edilmelidir.
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
