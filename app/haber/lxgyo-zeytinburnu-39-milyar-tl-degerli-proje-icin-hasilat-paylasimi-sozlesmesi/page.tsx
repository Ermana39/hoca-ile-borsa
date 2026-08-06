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

const slug = "lxgyo-zeytinburnu-39-milyar-tl-degerli-proje-icin-hasilat-paylasimi-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/lxgyo-zeytinburnu-39-milyar-tl-degerli-proje-icin-hasilat-paylasimi-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "LXGYO Zeytinburnu’nda 3,9 Milyar TL Değerli Proje İçin Sözleşme İmzaladı",
  description:
    "Luxera GYO, Zeytinburnu Sümer Mahallesi'ndeki taşınmaz için NBG Zeytinburnu ile %50-%50 hasılat paylaşımı esaslı inşaat sözleşmesi imzaladı.",
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "LXGYO Zeytinburnu’nda 3,9 Milyar TL Değerli Proje İçin Sözleşme İmzaladı",
    description:
      "Değerleme raporunda taşınmazın değeri 3,9 milyar TL olarak belirlendi. Hasılat yüklenici ve arsa sahibi arasında eşit paylaşılacak.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "LXGYO Zeytinburnu 3,9 milyar TL değerli proje hasılat paylaşımı sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LXGYO Zeytinburnu’nda 3,9 Milyar TL Değerli Proje İçin Sözleşme İmzaladı",
    description:
      "Luxera GYO, Zeytinburnu’ndaki proje için %50-%50 hasılat paylaşımı sözleşmesi imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Taşınmaz Değeri", deger: "3,9 Mr TL", aciklama: "Değerleme raporuna göre" },
  { baslik: "Yüklenici Payı", deger: "%50", aciklama: "Luxera GYO" },
  { baslik: "Arsa Sahibi Payı", deger: "%50", aciklama: "NBG Zeytinburnu" },
  { baslik: "Sözleşme Tarihi", deger: "05.06.2026", aciklama: "Noter huzurunda" },
];

const anaDetaylar = [
  ["Şirket", "Luxera Gayrimenkul Yatırım Ortaklığı A.Ş."],
  ["Hisse Kodu", "LXGYO"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "18:11:47"],
  ["Proje Yeri", "İstanbul, Zeytinburnu, Sümer Mahallesi"],
  ["Ada / Parsel", "1782 ada 47 parsel"],
  ["Arsa Sahibi", "NBG Zeytinburnu İnşaat Yatırım A.Ş."],
  ["Sözleşme Tarihi", "05.06.2026"],
  ["Sözleşme Türü", "İnşaat yapım ve hasılat paylaşımlı inşaat sözleşmesi"],
  ["Taşınmaz Değeri", "3.900.000.000 TL"],
  ["Yüklenici Hasılat Payı", "%50"],
  ["Arsa Sahibi Hasılat Payı", "%50"],
  ["Değerleme Şirketi", "Focus Global Gayrimenkul Değerleme ve Danışmanlık A.Ş."],
  ["Değerleme Raporu", "05.06.2026 tarihli, 2026-OZL-065 sayılı rapor"],
];

const surec = [
  {
    baslik: "Sözleşme 5 Haziran’da imzalandı",
    aciklama:
      "LXGYO ile NBG Zeytinburnu arasında, Eyüpsultan 10. Noterliği nezdinde düzenleme şeklinde inşaat yapım ve hasılat paylaşımlı inşaat sözleşmesi imzalandı.",
  },
  {
    baslik: "Proje anahtar teslim geliştirilecek",
    aciklama:
      "Taşınmaz üzerindeki bağımsız bölümler LXGYO tarafından anahtar teslim inşa edilecek ve satıştan elde edilecek hasılat taraflar arasında paylaşılacak.",
  },
  {
    baslik: "Değerleme 3,9 milyar TL",
    aciklama:
      "Focus Global tarafından hazırlanan raporda taşınmazın değeri 3,9 milyar TL olarak belirlendi.",
  },
  {
    baslik: "Açıklama daha önce ertelendi",
    aciklama:
      "Şirket, aynı bölgede yürüttüğü diğer arsa görüşmelerinde pazarlık gücü ve rekabet avantajının zarar görmemesi için açıklamayı erteledi.",
  },
];

const nedenOnemli = [
  {
    baslik: "Büyük ölçekli yeni proje",
    aciklama:
      "3,9 milyar TL değer biçilen taşınmaz, LXGYO’nun proje portföyünü ve gelecekteki satış potansiyelini büyütebilir.",
  },
  {
    baslik: "Hasılatın yarısı LXGYO’ya ait",
    aciklama:
      "Satışlardan elde edilecek toplam hasılatın %50’si yüklenici olarak LXGYO’ya bırakılacak.",
  },
  {
    baslik: "Arsa alım maliyeti yerine paylaşım modeli",
    aciklama:
      "Hasılat paylaşımı modeli, doğrudan arsa satın alımına kıyasla başlangıçtaki nakit yükünü azaltabilir.",
  },
  {
    baslik: "Proje finansmanı ve satış hızı belirleyici",
    aciklama:
      "Projenin gerçek finansal katkısı, inşaat maliyeti, finansman yapısı, ruhsat süreci ve satış temposuna bağlı olacak.",
  },
];

const finansalOkuma = [
  "Taşınmaz değeri 3,9 milyar TL olsa da bu tutar doğrudan LXGYO geliri anlamına gelmez.",
  "Şirketin payı, proje satışlarından oluşacak hasılatın %50’si olacak.",
  "Net kârlılık; inşaat maliyetleri, finansman giderleri ve satış fiyatlarına bağlı.",
  "Projenin bilanço etkisi ruhsat, inşaat ve teslimat takvimine göre dönemlere yayılabilir.",
  "Hasılat paylaşımı modeli, arsa satın alma maliyetini azaltırken proje geliştirme riskini yükleniciye bırakır.",
];

const hisseOkumasi = [
  {
    baslik: "Haber pozitif",
    aciklama:
      "Büyük ölçekli ve değerleme raporuyla desteklenen yeni proje, LXGYO’nun büyüme hikâyesi açısından pozitif okunabilir.",
  },
  {
    baslik: "Gelir katkısı hemen oluşmayacak",
    aciklama:
      "Projenin gelir ve kâr etkisi, bağımsız bölümlerin inşası ve satışı ilerledikçe finansallara yansıyacak.",
  },
  {
    baslik: "Detaylar sonraki açıklamalarda netleşecek",
    aciklama:
      "Toplam inşaat alanı, bağımsız bölüm sayısı, yatırım bütçesi ve teslim tarihi henüz açıklanmadı.",
  },
];

const riskler = [
  "İnşaat maliyetleri beklenenden yüksek gerçekleşebilir.",
  "Ruhsat ve izin süreçlerinde gecikme yaşanabilir.",
  "Konut satış hızı ve fiyatları piyasa koşullarından etkilenebilir.",
  "Finansman giderleri proje kârlılığını azaltabilir.",
  "Taşınmazın 3,9 milyar TL’lik değeri proje satış hasılatı veya net kâr değildir.",
];

const takipBasliklari = [
  "Projenin ruhsat süreci",
  "Toplam inşaat ve satılabilir alan",
  "Bağımsız bölüm sayısı",
  "Proje yatırım bütçesi",
  "Satış ve teslim takvimi",
  "LXGYO’nun projeden beklediği gelir ve kâr",
];

const seoSorular = [
  {
    soru: "LXGYO ne açıkladı?",
    cevap:
      "LXGYO, Zeytinburnu Sümer Mahallesi’ndeki 1782 ada 47 parsel için NBG Zeytinburnu ile hasılat paylaşımlı inşaat sözleşmesi imzaladığını açıkladı.",
  },
  {
    soru: "Taşınmazın değeri ne kadar?",
    cevap:
      "Yetkili değerleme kuruluşunun raporunda taşınmazın değeri 3,9 milyar TL olarak belirlendi.",
  },
  {
    soru: "LXGYO’nun hasılat payı kaç?",
    cevap:
      "Satışlardan oluşacak hasılatın %50’si LXGYO’ya, %50’si arsa sahibi NBG Zeytinburnu’na ait olacak.",
  },
  {
    soru: "Proje nerede?",
    cevap:
      "Proje İstanbul ili, Zeytinburnu ilçesi, Sümer Mahallesi’nde bulunan 1782 ada 47 parsel üzerinde geliştirilecek.",
  },
  {
    soru: "LXGYO haberi hisse için nasıl okunmalı?",
    cevap:
      "Büyük ölçekli yeni proje nedeniyle pozitif. Ancak net finansal katkı; inşaat maliyeti, satış fiyatı, ruhsat ve teslimat takvimine bağlı olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "LXGYO Zeytinburnu’nda 3,9 Milyar TL Değerli Proje İçin Sözleşme İmzaladı",
  description:
    "Luxera GYO, Zeytinburnu Sümer Mahallesi'ndeki taşınmaz için NBG Zeytinburnu ile %50-%50 hasılat paylaşımı esaslı inşaat sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-20T18:11:47+03:00",
  dateModified: "2026-07-20T18:11:47+03:00",
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
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default function LxgyoZeytinburnuProjesiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/lxgyo-zeytinburnu-39-milyar-tl-degerli-proje-icin-hasilat-paylasimi-sozlesmesi.webp"
              alt="LXGYO Zeytinburnu 3,9 milyar TL değerli proje hasılat paylaşımı sözleşmesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              LXGYO Zeytinburnu’nda 3,9 Milyar TL Değerli Proje İçin Sözleşme İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Yeni Proje
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">{haberTarihi}</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Luxera Gayrimenkul Yatırım Ortaklığı A.Ş. (<strong>LXGYO</strong>), İstanbul Zeytinburnu’ndaki bir taşınmaz için NBG Zeytinburnu İnşaat Yatırım A.Ş. ile hasılat paylaşımlı inşaat sözleşmesi imzaladı.
              </p>

              <p>
                Değerleme raporunda <strong>3,9 milyar TL</strong> değer biçilen taşınmaz üzerinde geliştirilecek projeden elde edilecek hasılat, <strong>%50 LXGYO ve %50 arsa sahibi</strong> arasında paylaşılacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div key={item.baslik} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <div className="text-sm font-semibold text-emerald-800">{item.baslik}</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-950">{item.deger}</div>
                    <div className="mt-1 text-sm text-emerald-800">{item.aciklama}</div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  LXGYO, Zeytinburnu Sümer Mahallesi’nde bulunan 1782 ada 47 parsel üzerindeki bağımsız bölümlerin anahtar teslim inşası ve satışından doğacak hasılatın eşit paylaşılması için NBG Zeytinburnu ile sözleşme imzaladı.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {anaDetaylar.map(([etiket, deger], index) => (
                        <tr key={etiket} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">{etiket}</th>
                          <td className="px-4 py-3 font-bold text-slate-700">{deger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Süreç nasıl ilerledi?">
                <div className="grid gap-4">
                  {surec.map((item) => (
                    <div key={item.baslik} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="text-base font-bold text-slate-900">{item.baslik}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{item.aciklama}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Bu haber neden önemli?">
                <div className="grid gap-4">
                  {nedenOnemli.map((item) => (
                    <div key={item.baslik} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="text-base font-bold text-slate-900">{item.baslik}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{item.aciklama}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <div className="grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div key={item} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-950">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <div className="grid gap-4">
                  {hisseOkumasi.map((item) => (
                    <div key={item.baslik} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="text-base font-bold text-slate-900">{item.baslik}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{item.aciklama}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Dikkat edilmesi gereken riskler">
                <div className="grid gap-3">
                  {riskler.map((item) => (
                    <div key={item} className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold leading-6 text-orange-950">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="LXGYO Zeytinburnu projesi hakkında soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div key={item.soru} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="text-base font-bold text-slate-900">{item.soru}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{item.cevap}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1635121"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  LXGYO — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler slug={slug} baslik="LXGYO Zeytinburnu’nda 3,9 Milyar TL Değerli Proje İçin Sözleşme İmzaladı" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.
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