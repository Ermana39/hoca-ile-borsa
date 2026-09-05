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

const slug = "sekfk-100-bedelli-sermaye-artirimi-spk-onayi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/sekfk-100-bedelli-sermaye-artirimi-spk-onayi.webp";

export const metadata: Metadata = {
  title: "SEKFK %100 Bedelli Sermaye Artırımı İçin SPK Onayı Aldı",
  description:
    seoAciklamasi("Şeker Finansal Kiralama, sermayesini 100 milyon TL’den 200 milyon TL’ye çıkaracak %100 bedelli sermaye artırımı için SPK onayı aldı. Rüçhan hakkı kullanım fiyatı 1 TL.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "SEKFK %100 Bedelli Sermaye Artırımı İçin SPK Onayı Aldı",
    description:
      "SEKFK’nin 100 milyon TL tutarındaki %100 bedelli sermaye artırımı SPK tarafından onaylandı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "SEKFK yüzde 100 bedelli sermaye artırımı SPK onayı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEKFK %100 Bedelli Sermaye Artırımı İçin SPK Onayı Aldı",
    description: "Sermaye 100 milyon TL’den 200 milyon TL’ye çıkarılacak.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Bedelli Oranı", deger: "%100", aciklama: "Rüçhan hakkı kullandırılacak" },
  { baslik: "Mevcut Sermaye", deger: "100 Mn TL", aciklama: "Çıkarılmış sermaye" },
  { baslik: "Yeni Sermaye", deger: "200 Mn TL", aciklama: "Artırım sonrası" },
  { baslik: "Kullanım Fiyatı", deger: "1,00 TL", aciklama: "Her yeni pay için" },
];

const anaDetaylar = [
  ["Şirket", "Şeker Finansal Kiralama A.Ş."],
  ["Hisse Kodu", "SEKFK"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "12:06:34"],
  ["Yönetim Kurulu Karar Tarihi", "06.02.2026"],
  ["SPK Başvuru Tarihi", "26.02.2026"],
  ["SPK Onay Tarihi", "16.07.2026"],
  ["Kayıtlı Sermaye Tavanı", "400.000.000 TL"],
  ["Mevcut Sermaye", "100.000.000 TL"],
  ["Artırılacak Tutar", "100.000.000 TL"],
  ["Ulaşılacak Sermaye", "200.000.000 TL"],
  ["Bedelli Artırım Oranı", "%100"],
  ["Rüçhan Hakkı Kullanım Fiyatı", "1,00 TL"],
  ["Sermaye Artırım Türü", "Nakden, rüçhan hakkı kullandırılarak"],
  ["Pay Niteliği", "Kaydi pay"],
];

const surec = [
  {
    baslik: "Yönetim kurulu Şubat ayında karar aldı",
    aciklama:
      "Şirket yönetim kurulu 6 Şubat 2026 tarihinde çıkarılmış sermayenin %100 oranında bedelli artırılmasına karar verdi.",
  },
  {
    baslik: "SPK başvurusu 26 Şubat’ta yapıldı",
    aciklama:
      "100 milyon TL tutarındaki sermaye artırımına ilişkin izahname taslağı 26 Şubat 2026 tarihinde SPK onayına sunuldu.",
  },
  {
    baslik: "SPK onayı 16 Temmuz’da geldi",
    aciklama:
      "Başvuru, Sermaye Piyasası Kurulu’nun 16 Temmuz 2026 tarihli ve 2026/45 sayılı bülteninde onaylandı.",
  },
  {
    baslik: "Rüçhan hakkı süreci başlayacak",
    aciklama:
      "Bundan sonraki aşamada onaylı izahname, rüçhan hakkı kullanım tarihleri ve işlem takvimi açıklanacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Şirket 100 milyon TL nakit kaynak hedefliyor",
    aciklama:
      "Bedelli sermaye artırımı tamamlandığında şirketin özkaynak yapısına 100 milyon TL brüt nakit girişi sağlanması hedefleniyor.",
  },
  {
    baslik: "Mevcut ortakların katılım kararı önemli",
    aciklama:
      "Pay sahipleri rüçhan haklarını kullanmazsa ortaklık oranlarında sulanma yaşanabilir.",
  },
  {
    baslik: "Sermaye iki katına çıkacak",
    aciklama:
      "Şirketin çıkarılmış sermayesi 100 milyon TL’den 200 milyon TL’ye yükselecek.",
  },
  {
    baslik: "Fon kullanım alanı belirleyici olacak",
    aciklama:
      "Artırımdan elde edilecek kaynağın hangi alanlarda ve ne ölçüde kullanılacağı finansal etki açısından yakından izlenecek.",
  },
];

const finansalOkuma = [
  "Bedelli sermaye artırımı şirketin özkaynak tabanını güçlendirebilir.",
  "Elde edilecek kaynağın borçluluk, yeni finansal kiralama işlemleri veya işletme sermayesinde kullanılması finansal etkiyi belirleyecek.",
  "Yeni pay ihracı hisse başına finansal göstergelerde kısa vadeli sulanma yaratabilir.",
  "Rüçhan hakkı kullanım oranı ve kullanılmayan payların satış sonucu önem taşıyacak.",
  "Kaynağın verimli kullanılması halinde orta vadede bilanço kapasitesi desteklenebilir.",
];

const hisseOkumasi = [
  {
    baslik: "Kısa vadede arz baskısı oluşabilir",
    aciklama:
      "Bedelli sermaye artırımları, yeni pay arzı ve yatırımcıların nakit ihtiyacı nedeniyle kısa vadede fiyat üzerinde baskı yaratabilir.",
  },
  {
    baslik: "Ortakların katılımı kritik",
    aciklama:
      "Ana ortakların ve mevcut yatırımcıların rüçhan haklarını hangi oranda kullanacağı piyasa algısını etkileyebilir.",
  },
  {
    baslik: "Uzun vadeli etki fon kullanımına bağlı",
    aciklama:
      "100 milyon TL’lik yeni kaynağın kârlı işlemlere yönlendirilmesi halinde sermaye artışı orta vadede olumlu sonuç üretebilir.",
  },
];

const riskler = [
  "Bedelli sermaye artırımı kısa vadede hisse üzerinde satış baskısı oluşturabilir.",
  "Rüçhan hakkını kullanmayan yatırımcıların ortaklık oranı azalabilir.",
  "Kullanılmayan payların borsada satılması ek arz yaratabilir.",
  "Fon kullanım alanının verimsiz olması beklenen finansal faydayı sınırlayabilir.",
  "Sermaye artırım takvimi ve rüçhan hakkı kullanım tarihleri henüz açıklanmadı.",
];

const takipBasliklari = [
  "Onaylı izahnamenin yayımlanması",
  "Rüçhan hakkı başlangıç ve bitiş tarihleri",
  "Rüçhan hakkı kullanım oranı",
  "Ana ortakların sermaye artırımına katılımı",
  "Kullanılmayan payların satış süreci",
  "100 milyon TL kaynağın kullanım alanları",
  "Sermaye artırımının bilanço ve kârlılığa etkisi",
];

const seoSorular = [
  {
    soru: "SEKFK ne açıkladı?",
    cevap:
      "SEKFK, 100 milyon TL olan sermayesini %100 bedelli artırımla 200 milyon TL’ye çıkarma başvurusunun SPK tarafından onaylandığını açıkladı.",
  },
  {
    soru: "SEKFK bedelli sermaye artırım oranı kaç?",
    cevap: "Bedelli sermaye artırım oranı %100 olarak belirlendi.",
  },
  {
    soru: "SEKFK rüçhan hakkı kullanım fiyatı kaç TL?",
    cevap: "Rüçhan hakkı kullanım fiyatı her bir pay için 1,00 TL olarak açıklandı.",
  },
  {
    soru: "SEKFK sermayesi kaç TL olacak?",
    cevap:
      "Sermaye artırımı tamamlandığında şirketin çıkarılmış sermayesi 100 milyon TL’den 200 milyon TL’ye çıkacak.",
  },
  {
    soru: "SEKFK bedelli sermaye artırımı hisseyi nasıl etkiler?",
    cevap:
      "Kısa vadede yeni pay arzı nedeniyle baskı oluşturabilir. Orta vadeli etki ise elde edilecek 100 milyon TL kaynağın nasıl kullanılacağına bağlı olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SEKFK %100 Bedelli Sermaye Artırımı İçin SPK Onayı Aldı",
  description:
    "Şeker Finansal Kiralama, sermayesini 100 milyon TL’den 200 milyon TL’ye çıkaracak %100 bedelli sermaye artırımı için SPK onayı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-20T12:06:34+03:00",
  dateModified: "2026-07-20T12:06:34+03:00",
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

export default function SekfkBedelliSermayeArtirimiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/sekfk-100-bedelli-sermaye-artirimi-spk-onayi.webp"
              alt="SEKFK yüzde 100 bedelli sermaye artırımı SPK onayı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SEKFK %100 Bedelli Sermaye Artırımı İçin SPK Onayı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                Sermaye Artırımı
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">{haberTarihi}</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Şeker Finansal Kiralama A.Ş. (<strong>SEKFK</strong>), çıkarılmış sermayesini 100 milyon TL’den 200 milyon TL’ye yükseltecek %100 oranındaki bedelli sermaye artırımı için Sermaye Piyasası Kurulu’ndan onay aldı.
              </p>

              <p>
                Sermaye artırımında mevcut ortakların rüçhan hakları kullandırılacak ve yeni payların kullanım fiyatı 1,00 TL olacak. İşlem tamamlandığında şirkete 100 milyon TL brüt nakit girişi sağlanması hedefleniyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div key={item.baslik} className="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <div className="text-sm font-semibold text-red-800">{item.baslik}</div>
                    <div className="mt-1 text-2xl font-bold text-red-950">{item.deger}</div>
                    <div className="mt-1 text-sm text-red-800">{item.aciklama}</div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SEKFK’nin 26 Şubat 2026 tarihinde yaptığı bedelli sermaye artırımı başvurusu, SPK’nin 16 Temmuz 2026 tarihli ve 2026/45 sayılı bülteninde onaylandı. Şirket sermayesini tamamı nakden karşılanmak üzere 100 milyon TL artıracak.
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

              <Section title="Sermaye artırımı süreci nasıl ilerledi?">
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
                    <div key={item} className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-950">
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

              <Section title="SEKFK bedelli sermaye artırımı hakkında soru-cevap">
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
                <a href="https://www.kap.org.tr/Bildirim/1634821" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2">
                  SEKFK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler slug={slug} baslik="SEKFK %100 Bedelli Sermaye Artırımı İçin SPK Onayı Aldı" />

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