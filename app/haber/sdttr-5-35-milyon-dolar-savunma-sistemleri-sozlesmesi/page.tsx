import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "sdttr-5-35-milyon-dolar-savunma-sistemleri-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/sdttr-5-35-milyon-dolar-savunma-sistemleri-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "SDTTR 5,35 Milyon Dolarlık Savunma Sistemleri Sözleşmesi İmzaladı",
  description:
    "SDTTR, yurt içi bir müşteriyle savunma sistemleri alanında 5,35 milyon dolar tutarında sözleşme imzaladı. Teslimatların 2026, 2027 ve 2028 yıllarında yapılması planlanıyor.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "SDTTR 5,35 Milyon Dolarlık Savunma Sistemleri Sözleşmesi İmzaladı",
    description:
      "SDT Uzay ve Savunma Teknolojileri, yurt içi müşteriyle imzaladığı 5,35 milyon dolarlık savunma sistemleri sözleşmesinin ciroya olumlu etki yapmasını bekliyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "SDTTR 5,35 milyon dolarlık savunma sistemleri sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDTTR 5,35 Milyon Dolarlık Savunma Sistemleri Sözleşmesi İmzaladı",
    description:
      "SDTTR, savunma sistemleri alanında 5,35 milyon dolarlık yeni iş ilişkisi açıkladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Sözleşme Tutarı",
    deger: "5,35 Mn $",
    aciklama: "Savunma sistemleri alanında",
  },
  {
    baslik: "Müşteri",
    deger: "Yurt İçi",
    aciklama: "Müşteri unvanı açıklanmadı",
  },
  {
    baslik: "Teslimat",
    deger: "2026-2028",
    aciklama: "Üç yıla yayılan teslimat planı",
  },
  {
    baslik: "Ciro Etkisi",
    deger: "Olumlu",
    aciklama: "Şirket açıklamasındaki beklenti",
  },
];

const haberDetaylari = [
  { etiket: "Şirket", deger: "SDT Uzay ve Savunma Teknolojileri A.Ş." },
  { etiket: "Hisse Kodu", deger: "SDTTR" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "Bildirim Saati", deger: "15:37:50" },
  { etiket: "Açıklama Türü", deger: "Yeni İş İlişkisi" },
  { etiket: "Müşteri Niteliği", deger: "Yurt içi müşteri" },
  { etiket: "Müşteri Unvanı", deger: "Açıklanmadı" },
  { etiket: "Sözleşme Alanı", deger: "Savunma sistemleri" },
  { etiket: "Sözleşme Tutarı", deger: "5.350.000 ABD doları" },
  { etiket: "Teslimat Takvimi", deger: "2026, 2027 ve 2028 yılları" },
  {
    etiket: "Faaliyetlere Etki",
    deger: "Şirket cirosunu olumlu etkilemesi bekleniyor",
  },
  { etiket: "Güncelleme / Düzeltme", deger: "Hayır" },
];

const onemliBasliklar = [
  {
    baslik: "Döviz bazlı sözleşme",
    aciklama:
      "Sözleşme ABD doları üzerinden açıklandı. Bu nedenle gelir katkısı, teslimat dönemindeki kur seviyesi ve muhasebeleştirme takvimiyle birlikte değerlendirilecek.",
  },
  {
    baslik: "Savunma sistemleri alanı",
    aciklama:
      "Sözleşmenin savunma sistemleri alanında olması, SDTTR’nin ana faaliyet alanıyla uyumlu yeni iş akışının devam ettiğini gösteriyor.",
  },
  {
    baslik: "Üç yıla yayılan teslimat",
    aciklama:
      "Teslimatların 2026, 2027 ve 2028 yıllarında yapılması planlanıyor. Bu yapı, sözleşme katkısının tek döneme değil, zamana yayılan şekilde izleneceği anlamına geliyor.",
  },
  {
    baslik: "Müşteri adı açıklanmadı",
    aciklama:
      "KAP bildiriminde müşteri unvanı paylaşılmadı. Savunma sanayii sözleşmelerinde taraf bilgileri bazı durumlarda ticari veya sektörel hassasiyet nedeniyle sınırlı açıklanabiliyor.",
  },
];

const finansalOkuma = [
  "Sözleşme tutarı 5,35 milyon dolar olarak açıklandı.",
  "Şirket, yeni iş ilişkisinin ciroya olumlu etki yapacağını belirtti.",
  "Teslimatlar 2026, 2027 ve 2028 yıllarına yayıldığı için gelir etkisi teslimat ve faturalama takvimine bağlı olacak.",
  "Döviz bazlı sözleşme olması, TL finansallara yansıyan tutarın kur seviyesine göre değişebileceği anlamına geliyor.",
  "Müşteri tarafı yurt içi olduğu için haber, şirketin Türkiye savunma sistemleri pazarındaki iş akışı açısından takip edilecek.",
];

const takipBasliklari = [
  "Teslimatların hangi dönemlerde yoğunlaşacağı",
  "Sözleşme kapsamındaki ürünlerin teslimat ve faturalama takvimi",
  "Yeni savunma sistemleri siparişlerinin devam edip etmeyeceği",
  "Ciro katkısının 2026, 2027 ve 2028 finansallarına dağılımı",
  "SDTTR’nin toplam sipariş görünümü ve birikmiş iş büyüklüğü",
];

const seoSorular = [
  {
    soru: "SDTTR ne açıkladı?",
    cevap:
      "SDTTR, yurt içi bir müşteriyle savunma sistemleri alanında 5,35 milyon dolar tutarında yeni sözleşme imzaladığını açıkladı.",
  },
  {
    soru: "SDTTR sözleşmesinin teslimatı ne zaman yapılacak?",
    cevap:
      "KAP açıklamasına göre sözleşme kapsamındaki ürünlerin teslimatlarının 2026, 2027 ve 2028 yıllarında yapılması planlanıyor.",
  },
  {
    soru: "SDTTR sözleşmesinin müşteri adı açıklandı mı?",
    cevap:
      "Hayır. KAP bildiriminde müşteri unvanı paylaşılmadı; müşteri yalnızca yurt içi müşteri olarak belirtildi.",
  },
  {
    soru: "SDTTR sözleşmesi şirket cirosunu nasıl etkiler?",
    cevap:
      "Şirket, yeni iş ilişkisinin ciroya olumlu etki yapacağını açıkladı. Etkinin hangi dönemlere yansıyacağı teslimat ve faturalama takvimine bağlı olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SDTTR 5,35 Milyon Dolarlık Savunma Sistemleri Sözleşmesi İmzaladı",
  description:
    "SDTTR, yurt içi bir müşteriyle savunma sistemleri alanında 5,35 milyon dolar tutarında sözleşme imzaladı. Teslimatların 2026, 2027 ve 2028 yıllarında yapılması planlanıyor.",
  image: haberGorsel,
  datePublished: "2026-07-13T15:37:50+03:00",
  dateModified: "2026-07-13T15:37:50+03:00",
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
  children: ReactNode;
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

export default function SdttrSavunmaSistemleriSozlesmesiPage() {
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
              src="/sdttr-5-35-milyon-dolar-savunma-sistemleri-sozlesmesi.webp"
              alt="SDTTR 5,35 milyon dolarlık savunma sistemleri sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SDTTR 5,35 Milyon Dolarlık Savunma Sistemleri Sözleşmesi İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
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
                SDT Uzay ve Savunma Teknolojileri A.Ş. (<strong>SDTTR</strong>),
                savunma sistemleri alanında yeni bir sözleşme imzaladığını
                duyurdu. KAP açıklamasına göre sözleşme, yurt içi bir müşteri ile
                yapıldı ve toplam tutarı <strong>5.350.000 ABD doları</strong>{" "}
                olarak açıklandı.
              </p>

              <p>
                Şirket, sözleşme kapsamındaki ürünlerin teslimatlarının{" "}
                <strong>2026, 2027 ve 2028</strong> yıllarında yapılmasının
                planlandığını belirtti. Bu nedenle haberin etkisi yalnızca tek
                bir çeyrek üzerinden değil, teslimat ve faturalama takvimiyle
                birlikte birkaç döneme yayılacak şekilde izlenecek.
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
                  SDTTR, yurt içi bir müşteriyle savunma sistemleri alanında yeni
                  iş ilişkisi kurdu. Açıklanan sözleşme tutarı 5,35 milyon dolar.
                  Şirket, bu iş ilişkisinin ciroya olumlu katkı sağlamasını
                  beklediğini belirtti.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  KAP bildiriminde müşteri adı ve ürün detayı paylaşılmadı. Buna
                  karşın sözleşmenin savunma sistemleri alanında olması, SDTTR’nin
                  ana faaliyet alanı üzerinden yeni sipariş akışını sürdürdüğünü
                  gösteriyor.
                </p>
              </Section>

              <Section title="Sözleşmenin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
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

              <Section title="Bu sözleşmede öne çıkan noktalar">
                <div className="grid gap-4">
                  {onemliBasliklar.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sözleşme doğrudan bir satış/sipariş niteliği taşıdığı için SDTTR
                  açısından ciroya katkı potansiyeli olan bir haber. Ancak bu
                  katkının tamamı tek seferde değil, teslimat ve faturalama
                  süreçlerine göre finansallara yansıyacak.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SDTTR için bu açıklama, savunma sistemleri tarafında devam eden
                  sipariş akışını destekleyen olumlu bir KAP bildirimi olarak öne
                  çıkıyor. Sözleşme tutarının dolar bazlı olması ve teslimatların
                  üç yıla yayılması, haberi hem bugünkü iş akışı hem de orta vadeli
                  finansal katkı açısından önemli hale getiriyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Haber, kısa vadede pozitif algı oluşturabilecek nitelikte olsa
                  da asıl izlenmesi gereken başlık; sözleşmenin hangi dönemlerde
                  faturalanacağı, teslimatların planlandığı gibi ilerleyip
                  ilerlemeyeceği ve şirketin yeni savunma sistemleri sözleşmeleri
                  açıklamaya devam edip etmeyeceği olacak.
                </p>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="SDTTR sözleşmesi hakkında kısa soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1632534"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  SDTTR — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="SDTTR 5,35 Milyon Dolarlık Savunma Sistemleri Sözleşmesi İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Sözleşmenin finansal etkisi; teslimat,
                faturalama ve şirketin sonraki KAP açıklamalarıyla birlikte
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