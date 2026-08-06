import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "astor-abd-42-5-milyon-dolar-guc-transformatoru-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/astor-abd-42-5-milyon-dolar-guc-transformatoru-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "ASTOR ABD’de 42,5 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
  description:
    "ASTOR, Amerika'da yerleşik bir firma ile 100 MVA ile 350 MVA arasında değişen güç transformatörlerinin tedariki için 42,5 milyon dolarlık sözleşme imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ASTOR ABD’de 42,5 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
    description:
      "ASTOR, ABD merkezli müşteriyle 42,5 milyon dolarlık güç transformatörü sözleşmesi imzaladı. Teslimatlar 2027 yılı içinde planlanıyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ASTOR ABD 42,5 milyon dolar güç transformatörü sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTOR ABD’de 42,5 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
    description:
      "ASTOR, ABD'de yerleşik müşteriyle 42,5 milyon dolarlık güç transformatörü sözleşmesi imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Sözleşme Tutarı",
    deger: "42,51 Mn $",
    aciklama: "Toplam sözleşme bedeli",
  },
  {
    baslik: "TL Karşılığı",
    deger: "1,99 Mr TL",
    aciklama: "TCMB 46,7525 kuru üzerinden",
  },
  {
    baslik: "Ürün",
    deger: "Güç Transformatörü",
    aciklama: "100 MVA ile 350 MVA arası",
  },
  {
    baslik: "Hasılata Oran",
    deger: "%5,63",
    aciklama: "2025 yıl sonu hasılatına göre",
  },
];

const sozlesmeDetaylari = [
  {
    etiket: "Şirket",
    deger: "Astor Enerji A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ASTOR",
  },
  {
    etiket: "Müşteri",
    deger: "Amerika'da yerleşik firma",
  },
  {
    etiket: "Sözleşme Konusu",
    deger: "100 MVA ile 350 MVA arasında değişen güç transformatörlerinin tedariki",
  },
  {
    etiket: "Sözleşme Tutarı",
    deger: "42.510.595 ABD doları",
  },
  {
    etiket: "TL Karşılığı",
    deger: "1.987.476.592,74 TL",
  },
  {
    etiket: "Teslimat Takvimi",
    deger: "2027 Mart, Ağustos ve Ekim ayları",
  },
  {
    etiket: "2025 Hasılatına Oran",
    deger: "%5,63",
  },
  {
    etiket: "Faaliyetlere Etki",
    deger: "Olumlu olması bekleniyor",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ASTOR ABD’de 42,5 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı",
  description:
    "ASTOR, Amerika'da yerleşik bir firma ile 100 MVA ile 350 MVA arasında değişen güç transformatörlerinin tedariki için 42,5 milyon dolarlık sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-08T10:42:49+03:00",
  dateModified: "2026-07-08T10:42:49+03:00",
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

export default function AstorAbdGucTransformatoruPage() {
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
              src="/astor-abd-42-5-milyon-dolar-guc-transformatoru-sozlesmesi.webp"
              alt="ASTOR ABD 42,5 milyon dolar güç transformatörü sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ASTOR ABD’de 42,5 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Yeni İş İlişkisi
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
                Astor Enerji A.Ş. (<strong>ASTOR</strong>), Amerika&apos;da yerleşik
                bir firma ile güç transformatörü tedarikine yönelik yeni sözleşme
                imzaladığını açıkladı. Sözleşmenin toplam bedeli{" "}
                <strong>42.510.595 ABD doları</strong> oldu.
              </p>

              <p>
                KAP açıklamasına göre sözleşmenin TL karşılığı{" "}
                <strong>1.987.476.592,74 TL</strong> olarak hesaplandı. Şirket,
                imzalanan sözleşmenin 2025 yılı sonu hasılatına oranının{" "}
                <strong>%5,63</strong> olduğunu duyurdu.
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
                  ASTOR, ABD&apos;de yerleşik bir müşteriyle 100 MVA ile 350 MVA
                  arasında değişen güç transformatörlerinin tedariki için
                  42,51 milyon dolarlık sözleşme imzaladı. Sözleşme 8 Temmuz
                  2026 tarihinde KAP üzerinden açıklandı.
                </p>
              </Section>

              <Section title="Sözleşmenin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {sozlesmeDetaylari.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Teslimatlar ne zaman yapılacak?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sözleşme kapsamındaki teslimatların 2027 yılının Mart, Ağustos
                  ve Ekim aylarında gerçekleştirilmesi planlanıyor. Bu nedenle
                  sözleşmenin finansal etkisi ağırlıklı olarak teslimat takvimi
                  ve ilgili dönem finansal sonuçları üzerinden izlenecek.
                </p>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  42,51 milyon dolarlık sözleşme, ASTOR için ihracat ve sipariş
                  defteri görünümü açısından pozitif bir gelişme. Sözleşmenin
                  2025 yıl sonu hasılatına oranının %5,63 olması, haberin
                  finansal ölçekte de takip edilecek büyüklükte olduğunu
                  gösteriyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Müşterinin ABD&apos;de yerleşik olması, şirketin uluslararası
                  pazarlardaki iş akışı açısından da önemli. Sonraki süreçte
                  teslimatların planlanan takvimde gerçekleşmesi ve benzer ihracat
                  sözleşmelerinin devamı öne çıkacak.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Güç transformatörü siparişleri, enerji altyapısı ve elektrik
                  şebekesi yatırımlarıyla doğrudan bağlantılı. ASTOR’un ABD
                  pazarıyla yaptığı bu sözleşme, hem döviz bazlı gelir görünümü
                  hem de yüksek güçlü transformatör segmentindeki konumu açısından
                  dikkat çekiyor.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki süreçte teslimat takvimi, yeni siparişler,
                  ihracat sözleşmelerinin devamı ve sözleşmenin dönemsel finansal
                  sonuçlara yansıması izlenecek. Şirket, iş ilişkisinin
                  faaliyetlere etkisinin olumlu olmasını beklediğini açıkladı.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1627788"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ASTOR — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ASTOR ABD’de 42,5 Milyon Dolarlık Güç Transformatörü Sözleşmesi İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Yeni sözleşmelerin finansal etkisi teslimat,
                tahsilat ve dönemsel finansal sonuçlarla birlikte değerlendirilmelidir.
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
