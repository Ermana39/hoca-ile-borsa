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

const slug = "yeotk-120-mwh-bataryali-enerji-depolama-projesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/yeotk-120-mwh-bataryali-enerji-depolama-projesi.webp";

export const metadata: Metadata = {
  title: "YEOTK 120 MWh Bataryalı Enerji Depolama Projesi İçin Sözleşme İmzaladı",
  description:
    "YEOTK bağlı ortaklığı CALL Enerji ve Inavitas ortaklığıyla kurulan Solesco3, Saves Enerji Grubu ile 120 MWh bataryalı enerji depolama projesi için sözleşme imzaladı.",
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "YEOTK 120 MWh Bataryalı Enerji Depolama Projesi İçin Sözleşme İmzaladı",
    description:
      "Toplam beklenen yatırım büyüklüğü yaklaşık 40 milyon dolar olan iki BESS projesinin 2027 yılının ilk yarısında devreye alınması hedefleniyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "YEOTK 120 MWh bataryalı enerji depolama projesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YEOTK 120 MWh Bataryalı Enerji Depolama Projesi İçin Sözleşme İmzaladı",
    description:
      "YEOTK tarafında 120 MWh depolama kapasitesine sahip iki proje için yeni sözleşme açıklandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Depolama Kapasitesi", deger: "120 MWh", aciklama: "İki enerji depolama projesi" },
  { baslik: "Yatırım Büyüklüğü", deger: "40 Mn $", aciklama: "Finansman maliyetleri dahil beklenen tutar" },
  { baslik: "Model", deger: "ESCO", aciklama: "Yap-İşlet-Devret modeli" },
  { baslik: "Hedef Devreye Alma", deger: "2027/1Y", aciklama: "2027 yılının ilk yarısı" },
];

const detaylar = [
  { etiket: "Şirket", deger: "YEO Teknoloji Enerji ve Endüstri A.Ş." },
  { etiket: "Hisse Kodu", deger: "YEOTK" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "İş İlişkisi Başlangıç Tarihi", deger: "13.07.2026" },
  { etiket: "Proje Şirketi", deger: "Solesco3 Yenilenebilir Enerji A.Ş." },
  { etiket: "Solesco3 Ortaklık Yapısı", deger: "CALL Enerji %70, Inavitas Enerji %30" },
  { etiket: "Müşteri Grubu", deger: "Saves Enerji A.Ş. Grubu şirketleri" },
  { etiket: "Toplam Kapasite", deger: "120 MWh" },
  { etiket: "Beklenen Yatırım Büyüklüğü", deger: "Yaklaşık 40.000.000 ABD doları" },
  { etiket: "İşletme Süresi", deger: "5 yıl" },
  { etiket: "Devreye Alma Hedefi", deger: "2027 yılı ilk yarısı" },
  { etiket: "Faaliyetlere Etki", deger: "Olumlu" },
];

const kapsamMaddeleri = [
  "Proje finansmanının sağlanması",
  "Bataryalı enerji depolama sistemlerinin kurulumu",
  "Yüksek gerilim trafo merkezleri ve şebeke bağlantı altyapısı",
  "Anahtar teslim mühendislik, ekipman ve sistem entegrasyonu",
  "Tesislerin 5 yıl işletilmesi ve süre sonunda yatırımcılara devri",
];

const teknolojiMaddeleri = [
  "Batarya sistemleri REAP Batarya Teknolojileri tarafından üretilecek",
  "PCS sistemi Inavitas Enerji tarafından sağlanacak",
  "Enerji yönetim sistemi Inavitas tarafından sağlanacak",
  "Yapay zekâ tabanlı enerji ticareti platformu kullanılacak",
  "Depolama tesisleri Çamlıca HES ve Kayseri müstakil depolama sahasında yer alacak",
];

const takipBasliklari = [
  "Proje finansmanı süreci",
  "BESS ekipman üretimi ve teslimat takvimi",
  "2027 ilk yarı devreye alma hedefi",
  "5 yıllık işletme döneminin gelir katkısı",
  "REAP ve Inavitas tarafındaki teknoloji katkısı",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YEOTK 120 MWh Bataryalı Enerji Depolama Projesi İçin Sözleşme İmzaladı",
  description:
    "YEOTK bağlı ortaklığı CALL Enerji ve Inavitas ortaklığıyla kurulan Solesco3, Saves Enerji Grubu ile 120 MWh bataryalı enerji depolama projesi için sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-13T09:00:38+03:00",
  dateModified: "2026-07-13T09:00:38+03:00",
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

export default function YeotkBataryaliEnerjiDepolamaPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/yeotk-120-mwh-bataryali-enerji-depolama-projesi.webp"
              alt="YEOTK 120 MWh bataryalı enerji depolama projesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              YEOTK 120 MWh Bataryalı Enerji Depolama Projesi İçin Sözleşme İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Enerji Depolama
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                YEO Teknoloji Enerji ve Endüstri A.Ş. (<strong>YEOTK</strong>), bataryalı enerji depolama tarafında yeni bir iş ilişkisi açıkladı. Şirketin bağlı ortaklığı CALL Enerji ve çözüm ortağı Inavitas Enerji ortaklığıyla kurulan Solesco3 Yenilenebilir Enerji A.Ş., Saves Enerji Grubu şirketleriyle sözleşme imzaladı.
              </p>

              <p>
                Açıklamaya göre sözleşme, toplam <strong>120 MWh</strong> depolama kapasitesine sahip iki projenin, Türkiye’de bataryalı enerji depolama alanındaki ilk Yap-İşlet-Devret ESCO modeliyle hayata geçirilmesini kapsıyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div key={item.baslik} className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                    <div className="text-sm font-semibold text-blue-800">{item.baslik}</div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">{item.deger}</div>
                    <div className="mt-1 text-sm text-blue-800">{item.aciklama}</div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Solesco3 Yenilenebilir Enerji A.Ş. ile Saves Enerji A.Ş. Grubu bünyesindeki şirketler arasında 120 MWh toplam kapasiteli iki bataryalı enerji depolama projesi için sözleşme imzalandı. Projelerin finansman maliyetleri dahil toplam beklenen yatırım büyüklüğü yaklaşık 40 milyon ABD doları olarak açıklandı.
                </p>
              </Section>

              <Section title="Sözleşmenin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {detaylar.map((item, index) => (
                        <tr key={item.etiket} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">{item.etiket}</th>
                          <td className="px-4 py-3 font-bold text-slate-700">{item.deger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Sözleşme kapsamı">
                <div className="grid gap-3">
                  {kapsamMaddeleri.map((item) => (
                    <div key={item} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Projede hangi teknoloji kullanılacak?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Projede kullanılacak batarya enerji depolama sistemleri YEOTK iştiraki REAP Batarya Teknolojileri tarafından üretilecek. PCS, enerji yönetim sistemi ve yapay zekâ tabanlı enerji ticareti platformu ise Inavitas Enerji tarafından sağlanacak.
                </p>
                <div className="mt-4 grid gap-3">
                  {teknolojiMaddeleri.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  YEOTK için bu açıklama, yalnızca yeni bir sözleşme başlığı değil; yatırım geliştirme, proje finansmanı, mühendislik, ekipman üretimi, sistem entegrasyonu ve uzun dönem işletme kabiliyetini aynı çatı altında gösteren güçlü bir enerji depolama adımı olarak öne çıkıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Projelerin 2027 yılının ilk yarısında devreye alınması hedefleniyor. Bu nedenle haberin finansal etkisi, yatırım süreci, devreye alma takvimi ve 5 yıllık işletme dönemindeki gelir modeliyle birlikte takip edilecek.
                </p>
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a href="https://www.kap.org.tr/Bildirim/1632197" target="_blank" rel="noopener noreferrer nofollow" className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2">
                  YEOTK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler slug={slug} baslik="YEOTK 120 MWh Bataryalı Enerji Depolama Projesi İçin Sözleşme İmzaladı" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir. Projenin finansal etkisi; yatırım süreci, devreye alma takvimi, işletme dönemi ve şirketin sonraki finansal tablolarıyla birlikte değerlendirilmelidir.
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