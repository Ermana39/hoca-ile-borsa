import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
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

const slug = "klypv-5-75-milyar-tl-gunes-paneli-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/klypv-5-75-milyar-tl-gunes-paneli-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "KLYPV 5,75 Milyar TL’lik Güneş Paneli Sözleşmesini Kesinleştirdi",
  description:
    seoAciklamasi("Kalyon PV, güneş paneli satışına ilişkin nihai sözleşme tutarını 5,75 milyar TL olarak açıkladı. Teslimatlar başladı, hasılatın 2026 sonuna kadar kaydedilmesi bekleniyor.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "KLYPV 5,75 Milyar TL’lik Güneş Paneli Sözleşmesini Kesinleştirdi",
    description:
      "KLYPV’nin 128,07 milyon dolarlık nihai güneş paneli satış sözleşmesinde teslimatlar başladı. Gelirin 2026 sonuna kadar hasılata yansıması öngörülüyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "KLYPV 5,75 milyar TL güneş paneli satış sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KLYPV 5,75 Milyar TL’lik Sözleşmeyi Kesinleştirdi",
    description:
      "KLYPV’nin nihai sözleşme tutarı 5,75 milyar TL’ye yükseldi. Panel teslimatları başladı ve gelirin 2026 sonuna kadar kaydedilmesi bekleniyor.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Nihai Sözleşme",
    deger: "5,75 Milyar TL",
    aciklama: "128,07 milyon ABD doları",
  },
  {
    baslik: "Ön Sözleşme",
    deger: "4,52 Milyar TL",
    aciklama: "11 Mart 2025’te açıklanmıştı",
  },
  {
    baslik: "Teslimatlar",
    deger: "Başladı",
    aciklama: "Güneş panelleri sevk ediliyor",
  },
  {
    baslik: "Hasılat Takvimi",
    deger: "2026 Sonu",
    aciklama: "Teslimatlarla birlikte kaydedilecek",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Kalyon Güneş Teknolojileri Üretim A.Ş." },
  { etiket: "Hisse Kodu", deger: "KLYPV" },
  { etiket: "Bildirim Tarihi", deger: "14.07.2026" },
  { etiket: "Bildirim Saati", deger: "09:09:33" },
  { etiket: "Açıklama Türü", deger: "Yeni İş İlişkisi" },
  { etiket: "Önceki Açıklama Tarihi", deger: "11.03.2025" },
  { etiket: "Müşterinin Niteliği", deger: "Yurt içinde yerleşik şirket" },
  { etiket: "Müşteri Adı", deger: "Açıklanmadı" },
  { etiket: "Ön Satış Sözleşmesi", deger: "4.523.433.768 TL" },
  { etiket: "Ön Satış Sözleşmesi (USD)", deger: "124.560.000 USD" },
  { etiket: "Nihai Satış Sözleşmesi", deger: "5.749.338.093,63 TL" },
  { etiket: "Nihai Satış Sözleşmesi (USD)", deger: "128.065.017,60 USD" },
  { etiket: "Teslimat Durumu", deger: "Başladı" },
  { etiket: "Tamamlanma Beklentisi", deger: "2026 yılı sonu" },
  {
    etiket: "Faaliyetlere Beklenen Etki",
    deger: "Ciroya ve kârlılığa olumlu etki",
  },
];

const sozlesmeKarsilastirma = [
  {
    baslik: "TL bazında sözleşme artışı",
    deger: "1.225.904.325,63 TL",
    oran: "%27,1",
    yorum:
      "Nihai sözleşme tutarı, Mart 2025’te açıklanan ön satış sözleşmesine göre TL bazında yaklaşık 1,23 milyar TL yükseldi.",
  },
  {
    baslik: "Dolar bazında sözleşme artışı",
    deger: "3.505.017,60 USD",
    oran: "%2,8",
    yorum:
      "Dolar karşılığındaki artış daha sınırlı kaldı. TL ve dolar bazındaki artış farkı, sözleşme tutarındaki güncellemede kur etkisinin belirgin olduğunu gösteriyor.",
  },
  {
    baslik: "Gelir yazılacak dönem",
    deger: "2026",
    oran: "Yıl sonuna kadar",
    yorum:
      "Şirket, panel teslimatlarının 2026 sonuna kadar tamamlanmasını ve sözleşme gelirinin teslimatlara paralel biçimde hasılata yansımasını bekliyor.",
  },
];

const finansalEtki = [
  {
    baslik: "Teslimatların başlaması belirsizliği azalttı",
    aciklama:
      "Ön satış sözleşmesinin nihai sözleşmeye dönüşmesi ve teslimatların başlaması, işin yalnızca niyet veya ön mutabakat aşamasında kalmadığını gösteriyor. Bu durum, sözleşmeden gelir elde edilmesine ilişkin görünürlüğü güçlendiriyor.",
  },
  {
    baslik: "Hasılata katkı 2026 finansallarında görülecek",
    aciklama:
      "Şirket sözleşmeye konu panellerin teslimatlarının 2026 yılı sonuna kadar tamamlanmasını öngörüyor. Gelir etkisinin tek bir tarihte değil, teslimat ve muhasebeleştirme takvimine göre yıl içindeki finansal tablolara dağılması beklenebilir.",
  },
  {
    baslik: "Sözleşme tutarı doğrudan kâr anlamına gelmiyor",
    aciklama:
      "5,75 milyar TL’lik tutar satış gelirini ifade ediyor. Net kâr katkısı; üretim maliyetleri, panel fiyatları, kur hareketleri, lojistik giderleri, finansman maliyetleri ve sözleşmenin tahsilat koşullarına bağlı olacak.",
  },
  {
    baslik: "Şirket kârlılığa olumlu etki bekliyor",
    aciklama:
      "KLYPV, yeni iş ilişkisinin şirket faaliyetlerine etkisini KAP formunda ciroya ve kârlılığa olumlu etki olarak belirtti. Kârlılığın büyüklüğü ise sonraki finansal raporlarda brüt kâr ve faaliyet kârı marjları üzerinden izlenebilecek.",
  },
];

const sirketProjeArkaPlani = [
  "Kalyon PV, güneş teknolojileri alanında üretim yapan ve fotovoltaik panel değer zincirinin farklı aşamalarını aynı yapı içinde yürüten bir sanayi şirketi.",
  "Şirketin iş modeli yalnızca panel montajına değil; güneş hücresi ve panel üretim süreçlerini kapsayan entegre bir üretim yapısına dayanıyor. Bu nedenle büyük ölçekli panel satış sözleşmeleri, kapasite kullanımı ve üretim hacmi açısından doğrudan önem taşıyor.",
  "Açıklanan sözleşmede müşteri unvanı paylaşılmadı. Müşterinin yalnızca yurt içinde yerleşik bir şirket olduğu belirtildi. Bu nedenle projenin hangi santral veya yatırım için kullanılacağı KAP metninden tespit edilemiyor.",
];

const hisseAcisindanOkuma = [
  "Ön sözleşmenin nihai sözleşmeye dönüşmesi, KLYPV açısından haberin en güçlü tarafı. Teslimatların başlamış olması gelir yaratma sürecinin fiilen başladığını gösteriyor.",
  "Nihai sözleşmenin 128,07 milyon dolarlık büyüklüğü, şirketin üretim kapasitesini ve 2026 satış performansını destekleyebilecek ölçekte bir iş hacmi sunuyor.",
  "TL bazındaki %27,1’lik artış tek başına sipariş hacminin aynı oranda büyüdüğü şeklinde okunmamalı. Dolar bazındaki artışın %2,8 seviyesinde kalması, TL tutarındaki yükselişte kur güncellemesinin önemli payı olduğunu gösteriyor.",
  "Kısa vadeli fiyatlama açısından sözleşmenin büyüklüğü, teslimatların başlaması ve gelirin 2026 içinde yazılacak olması olumlu başlıklar. Buna karşılık gerçek kâr katkısı açıklanmadığı için marj etkisi konusunda kesin bir sonuç çıkarılamaz.",
  "Müşteri adının, ödeme planının ve tahsilat koşullarının açıklanmaması; alacak riski ve nakit akışı etkisinin henüz tam olarak ölçülememesine neden oluyor.",
];

const takipBasliklari = [
  "Panel teslimatlarının planlanan takvimde ilerleyip ilerlemediği",
  "Sözleşme gelirinin 2026 ara dönem finansallarına ne ölçüde yansıdığı",
  "Satış artışının brüt kâr ve faaliyet kârı marjlarına etkisi",
  "Sözleşmeye ilişkin ticari alacak ve tahsilat süreci",
  "Müşteri veya proje hakkında ek açıklama yapılıp yapılmayacağı",
  "Yeni panel satış sözleşmelerinin toplam sipariş hacmine katkısı",
  "Üretim kapasitesi kullanım oranındaki değişim",
];

const seoSorular = [
  {
    soru: "KLYPV ne açıkladı?",
    cevap:
      "KLYPV, 11 Mart 2025’te duyurulan güneş paneli ön satış sözleşmesine ilişkin nihai sözleşmenin imzalandığını ve panel teslimatlarının başladığını açıkladı.",
  },
  {
    soru: "KLYPV sözleşmesinin tutarı ne kadar?",
    cevap:
      "Nihai satış sözleşmesinin tutarı 5.749.338.093,63 TL, dolar karşılığı ise 128.065.017,60 ABD doları olarak açıklandı.",
  },
  {
    soru: "KLYPV’nin önceki sözleşme tutarı ne kadardı?",
    cevap:
      "11 Mart 2025 tarihli ön satış sözleşmesi 4.523.433.768 TL ve 124.560.000 ABD doları tutarındaydı.",
  },
  {
    soru: "KLYPV sözleşme tutarı ne kadar arttı?",
    cevap:
      "Nihai sözleşme ön satış tutarına göre TL bazında yaklaşık 1,23 milyar TL ve %27,1; dolar bazında yaklaşık 3,51 milyon dolar ve %2,8 arttı.",
  },
  {
    soru: "KLYPV panel teslimatları başladı mı?",
    cevap:
      "Evet. Şirket, nihai sözleşme kapsamındaki güneş panellerinin teslimatlarına başlandığını duyurdu.",
  },
  {
    soru: "KLYPV sözleşmesi ne zaman gelire dönüşecek?",
    cevap:
      "Şirket, panel teslimatlarının 2026 yılı sonuna kadar tamamlanmasını ve ilgili satışların aynı dönem içinde hasılata yansımasını öngörüyor.",
  },
  {
    soru: "KLYPV sözleşmesi kârlılığı nasıl etkiler?",
    cevap:
      "Şirket sözleşmenin ciroya ve kârlılığa olumlu etki yapmasını bekliyor. Net kâr katkısının büyüklüğü ise üretim maliyetleri, satış marjı, kur ve finansman giderleriyle birlikte sonraki finansal raporlarda görülebilecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "KLYPV 5,75 Milyar TL’lik Güneş Paneli Sözleşmesini Kesinleştirdi",
  description:
    "Kalyon PV, güneş paneli satışına ilişkin nihai sözleşme tutarını 5,75 milyar TL olarak açıkladı. Teslimatlar başladı, hasılatın 2026 sonuna kadar kaydedilmesi bekleniyor.",
  image: haberGorsel,
  datePublished: "2026-07-14T09:09:33+03:00",
  dateModified: "2026-07-14T09:09:33+03:00",
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

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function KlypvGunesPaneliSozlesmesiHaberiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/klypv-5-75-milyar-tl-gunes-paneli-sozlesmesi.webp"
              alt="KLYPV 5,75 milyar TL güneş paneli satış sözleşmesi"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              KLYPV 5,75 Milyar TL’lik Güneş Paneli Sözleşmesini Kesinleştirdi
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
                Kalyon Güneş Teknolojileri Üretim A.Ş. (<strong>KLYPV</strong>),
                yurt içinde yerleşik bir şirketle güneş paneli satışına ilişkin
                nihai sözleşmenin imzalandığını açıkladı. Sözleşmenin toplam
                bedeli <strong>5.749.338.093,63 TL</strong>, dolar karşılığı ise{" "}
                <strong>128.065.017,60 ABD doları</strong>
                olarak güncellendi.
              </p>

              <p>
                Şirket, sözleşme kapsamındaki güneş panellerinin teslimatlarına
                başlandığını bildirdi. Teslimatların{" "}
                <strong>2026 yılı sonuna kadar</strong> tamamlanması ve
                satışların aynı dönem içinde hasılata yansıması öngörülüyor.
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
                  KLYPV, 11 Mart 2025 tarihli KAP açıklamasında yurt içinde
                  yerleşik bir şirketle güneş paneli satışı için
                  <strong> 4.523.433.768 TL</strong> tutarında ön satış
                  sözleşmesi imzalandığını duyurmuştu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Taraflar arasındaki süreç nihai sözleşmenin imzalanmasıyla
                  tamamlandı. Sözleşme bedeli 5,75 milyar TL’ye güncellenirken,
                  güneş panellerinin teslimatlarına da başlandı. Böylece işlem,
                  ön mutabakat aşamasından fiili teslimat ve gelir yaratma
                  aşamasına geçti.
                </p>
              </Section>

              <Section title="Sözleşmenin detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {genelDetaylar.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-slate-50"
                          }
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

              <Section title="Ön sözleşmeden nihai sözleşmeye ne değişti?">
                <div className="grid gap-4">
                  {sozlesmeKarsilastirma.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-slate-900">
                            {item.baslik}
                          </h3>
                          <div className="mt-1 text-xl font-bold text-blue-900">
                            {item.deger}
                          </div>
                        </div>
                        <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                          {item.oran}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Şirket ve proje arka planı">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketProjeArkaPlani.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <div className="grid gap-4">
                  {finansalEtki.map((item) => (
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

              <Section title="KLYPV hissesi açısından anlamı">
                <div className="grid gap-3">
                  {hisseAcisindanOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
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

              <Section title="KLYPV güneş paneli sözleşmesi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633009"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  KLYPV — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="KLYPV 5,75 Milyar TL’lik Güneş Paneli Sözleşmesini Kesinleştirdi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Sözleşme bedeli satış gelirini ifade eder;
                şirketin net kârına yansıyacak tutar üretim maliyetleri,
                teslimat takvimi, kur hareketleri, finansman giderleri ve
                tahsilat koşullarına göre değişebilir.
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