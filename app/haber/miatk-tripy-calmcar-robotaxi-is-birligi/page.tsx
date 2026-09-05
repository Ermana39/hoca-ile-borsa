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

const slug = "miatk-tripy-calmcar-robotaxi-is-birligi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/miatk-tripy-calmcar-robotaxi-is-birligi.webp";

export const metadata: Metadata = {
  title: { absolute: "MIATK: Tripy ve CalmCar Robotaxi İş Birliği" },
  description:
    seoAciklamasi("MIATK bağlı ortaklığı Tripy Mobility, Çin merkezli CalmCar ile L4 seviyesinde otonom sürüş ve Robotaxi teknolojilerine yönelik stratejik iş birliği sözleşmesi imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "MIATK Bağlı Ortaklığı Tripy, CalmCar ile Robotaxi İş Birliği İmzaladı",
    description:
      "Tripy Mobility, Robotaxi çözümünün Türkiye ve belirlenen uluslararası pazarlarda ticari kullanıma hazırlanması için CalmCar ile iş birliği yaptı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "MIATK Tripy CalmCar Robotaxi iş birliği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIATK Bağlı Ortaklığı Tripy, CalmCar ile Robotaxi İş Birliği İmzaladı",
    description:
      "MIATK tarafında Tripy Mobility ve CalmCar arasında otonom araç teknolojilerine yönelik yeni iş birliği açıklandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bağlı Ortaklık",
    deger: "Tripy",
    aciklama: "Tripy Mobility Teknoloji A.Ş.",
  },
  {
    baslik: "İş Birliği",
    deger: "CalmCar",
    aciklama: "Çin merkezli otonom sürüş şirketi",
  },
  {
    baslik: "Teknoloji",
    deger: "L4",
    aciklama: "Otonom sürüş ve Robotaxi",
  },
  {
    baslik: "Hedef Pazar",
    deger: "TR + Dış Pazar",
    aciklama: "Türkiye ve uluslararası operasyonlar",
  },
];

const haberDetaylari = [
  { etiket: "Şirket", deger: "Mia Teknoloji A.Ş." },
  { etiket: "Hisse Kodu", deger: "MIATK" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "Bildirim Saati", deger: "14:32:15" },
  { etiket: "Bağlı Ortaklık", deger: "Tripy Mobility Teknoloji A.Ş." },
  { etiket: "İş Birliği Yapılan Şirket", deger: "CalmCar" },
  { etiket: "Sözleşme Yeri", deger: "Tianjin / Çin" },
  { etiket: "Ana Konu", deger: "Otonom mobilite ve yapay zekâ tabanlı ulaşım teknolojileri" },
  { etiket: "Araç Platformu", deger: "SAIC Motor MIFA 7 elektrikli araç platformu" },
  { etiket: "Otonom Seviye", deger: "L4 seviyesinde sürücüsüz araç teknolojisi" },
  { etiket: "Donanım Altyapısı", deger: "Nvidia ve Horizon Robotics donanımları" },
  { etiket: "Parasal Tutar", deger: "Açıklanmadı" },
];

const isBirligiMaddeleri = [
  "Türkiye’de teknik uyarlama ve yerelleştirme çalışmalarının yürütülmesi",
  "Yol testlerinin planlanması ve operasyonel yönetimi",
  "Filo yönetim altyapısının oluşturulması",
  "Uzaktan operasyon, çağrı merkezi ve filo kontrol sistemlerinin geliştirilmesi",
  "Kurumsal müşterilere yönelik Robotaxi filo kiralama ve mobilite hizmet modellerinin oluşturulması",
  "Kamu kurumları, özel sektör ve uluslararası iş ortaklarıyla ticari operasyonların geliştirilmesi",
  "Türkiye dışındaki belirlenen pazarlarda işletmecilik faaliyetlerinin planlanması",
];

const teknolojiMaddeleri = [
  "Robotaxi platformu yurt dışında 100.000 saatin üzerinde gerçek yol testi tamamladı",
  "Geliştirme sürecinde 3,8 milyon saatin üzerinde mühendislik çalışması yürütüldü",
  "Araçlar L4 seviyesinde otonom sürüş kabiliyetine sahip olacak şekilde geliştirildi",
  "Sistemde sensör füzyonu, yüksek çözünürlüklü haritalama ve yapay zekâ tabanlı karar verme altyapısı yer alıyor",
  "Tripy, Türkiye’de test ve izin süreçleri sonrası ticari operasyon hazırlıklarını yürütmeyi hedefliyor",
];

const takipBasliklari = [
  "Türkiye’de test ve izin süreçleri",
  "Robotaxi platformunun yerelleştirme çalışmaları",
  "Ticari operasyon başlangıç takvimi",
  "Kurumsal filo kiralama modeli",
  "Londra ve diğer dış pazarlara yönelik başvuru süreçleri",
  "İş birliğinin ilerleyen dönemde gelir modeline dönüşme hızı",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "MIATK Bağlı Ortaklığı Tripy, CalmCar ile Robotaxi İş Birliği İmzaladı",
  description:
    "MIATK bağlı ortaklığı Tripy Mobility, Çin merkezli CalmCar ile L4 seviyesinde otonom sürüş ve Robotaxi teknolojilerine yönelik stratejik iş birliği sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-13T14:32:15+03:00",
  dateModified: "2026-07-13T14:32:15+03:00",
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

export default function MiatkTripyCalmcarRobotaxiPage() {
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
              src="/miatk-tripy-calmcar-robotaxi-is-birligi.webp"
              alt="MIATK Tripy CalmCar Robotaxi iş birliği"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              MIATK Bağlı Ortaklığı Tripy, CalmCar ile Robotaxi İş Birliği İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Stratejik İş Birliği
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
                Mia Teknoloji A.Ş. (<strong>MIATK</strong>), bağlı ortaklığı
                Tripy Mobility Teknoloji A.Ş. üzerinden otonom mobilite
                tarafında yeni bir stratejik iş birliği açıkladı. Tripy,
                Çin merkezli otonom sürüş teknolojileri geliştiricisi CalmCar
                ile Çin’in Tianjin kentinde sözleşme imzaladı.
              </p>

              <p>
                Açıklamaya göre iş birliği, CalmCar’ın Nvidia ve Horizon Robotics
                donanımları üzerinde çalışan otonom sürüş teknolojisi ile SAIC
                Motor tarafından üretilen MIFA 7 elektrikli araç platformu
                üzerinde geliştirilen Robotaxi çözümünün Türkiye başta olmak
                üzere belirlenen uluslararası pazarlarda ticari kullanıma
                hazırlanmasını kapsıyor.
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
                  Tripy Mobility, otonom mobilite ve yapay zekâ tabanlı ulaşım
                  teknolojileri alanındaki faaliyetlerini genişletmek amacıyla
                  CalmCar ile stratejik iş birliği sözleşmesi imzaladı. Açıklamada
                  parasal bir sözleşme tutarı paylaşılmadı.
                </p>
              </Section>

              <Section title="İş birliğinin ana detayları">
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

              <Section title="Tripy bu projede ne üstlenecek?">
                <div className="grid gap-3">
                  {isBirligiMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Robotaxi teknolojisinde öne çıkanlar">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  KAP açıklamasında CalmCar’ın L4 seviyesinde sürücüsüz araç
                  geliştiren Çin merkezli teknoloji şirketlerinden biri olduğu
                  belirtildi. Şirketin teknolojisinin Volkswagen, Polestar ve
                  SAIC Motor başta olmak üzere farklı otomotiv platformlarında
                  kullanıldığı ifade edildi.
                </p>

                <div className="mt-4 grid gap-3">
                  {teknolojiMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  MIATK için bu haber, Tripy tarafında klasik mobilite iş modelinin
                  ötesine geçen ve yapay zekâ destekli otonom ulaşım alanına açılan
                  stratejik bir adım niteliği taşıyor. Parasal tutar açıklanmadığı
                  için haberin doğrudan ciro etkisi şu aşamada ölçülemiyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Buna rağmen Türkiye’de test, izin, yerelleştirme ve ticari
                  operasyon hazırlıklarının başlaması; MIATK için orta vadeli
                  teknoloji hikâyesini güçlendiren bir başlık olarak takip edilecek.
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1632463"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  MIATK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="MIATK Bağlı Ortaklığı Tripy, CalmCar ile Robotaxi İş Birliği İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. İş birliğinin finansal etkisi; test süreçleri,
                izinler, ticari operasyon takvimi ve sonraki KAP açıklamalarıyla
                birlikte değerlendirilmelidir.
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
