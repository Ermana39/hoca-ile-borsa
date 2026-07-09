import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "petkm-master-plan-feed-asamasina-gecis-hazirliklari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/petkm-master-plan-feed-asamasina-gecis-hazirliklari.webp";

export const metadata: Metadata = {
  title: "PETKM Master Plan’da FEED Aşamasına Geçiş Hazırlıklarına Başladı",
  description:
    "PETKM, Master Plan kapsamında Pre-FEED aşamasının 2025 sonunda tamamlandığını ve FEED sürecine geçiş için hazırlıkların başladığını açıkladı. SOCAR ile Technip Energies Italy arasında iyi niyet anlaşması imzalandı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "PETKM Master Plan’da FEED Aşamasına Geçiş Hazırlıklarına Başladı",
    description:
      "PETKM, Master Plan kapsamında Pre-FEED aşamasının tamamlandığını ve FEED sürecine geçiş hazırlıklarının başladığını duyurdu.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "PETKM Master Plan FEED aşamasına geçiş hazırlıkları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PETKM Master Plan’da FEED Aşamasına Geçiş Hazırlıklarına Başladı",
    description:
      "PETKM Master Plan kapsamında FEED sürecine geçiş hazırlıklarını başlattı. SOCAR ile Technip Energies Italy arasında iyi niyet anlaşması imzalandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Proje",
    deger: "Master Plan",
    aciklama: "Yeni proses üniteleri ve modernizasyon yatırımları",
  },
  {
    baslik: "Tamamlanan Aşama",
    deger: "Pre-FEED",
    aciklama: "Ön uç mühendislik tasarımı hazırlığı tamamlandı",
  },
  {
    baslik: "Yeni Aşama",
    deger: "FEED",
    aciklama: "Nihai yatırım kararı öncesi mühendislik süreci",
  },
  {
    baslik: "Planlanan Başlangıç",
    deger: "2026/3Ç",
    aciklama: "FEED çalışmalarına başlanması hedefleniyor",
  },
];

const projeDetaylari = [
  {
    etiket: "Şirket",
    deger: "Petkim Petrokimya Holding A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "PETKM",
  },
  {
    etiket: "Konu",
    deger: "Master Plan hakkında gelişmeler",
  },
  {
    etiket: "Önceki Açıklama Tarihi",
    deger: "13.12.2024",
  },
  {
    etiket: "Tamamlanan Aşama",
    deger: "Pre-FEED aşaması 2025 yılı sonunda tamamlandı",
  },
  {
    etiket: "Sıradaki Aşama",
    deger: "FEED sürecine geçiş hazırlıkları başladı",
  },
  {
    etiket: "İyi Niyet Anlaşması",
    deger: "SOCAR ile Technip Energies Italy S.P.A arasında imzalandı",
  },
  {
    etiket: "Planlanan Takvim",
    deger: "FEED anlaşmalarının 2026 yılı 3. çeyreğinde tamamlanması hedefleniyor",
  },
];

const masterPlanBasliklari = [
  "Etilen ünitesi kurulumu",
  "Polipropilen ünitesi kurulumu",
  "Yüksek yoğunluklu / lineer alçak yoğunluklu polietilen ünitesi",
  "Mevcut aromatik kompleksinin modernizasyonu",
  "Ftalik anhidrit ve alçak yoğunluklu polietilen ünitelerinin modernizasyonu",
  "Ütilite tesislerinin modernizasyonu",
];

const feedKapsami = [
  "Teknik tasarım",
  "Mühendislik çözümleri",
  "Teknoloji seçimi",
  "Maliyet tahminleri",
  "Uygulama planı",
  "Ekonomik fizibilite",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "PETKM Master Plan’da FEED Aşamasına Geçiş Hazırlıklarına Başladı",
  description:
    "PETKM, Master Plan kapsamında Pre-FEED aşamasının 2025 sonunda tamamlandığını ve FEED sürecine geçiş için hazırlıkların başladığını açıkladı. SOCAR ile Technip Energies Italy arasında iyi niyet anlaşması imzalandı.",
  image: haberGorsel,
  datePublished: "2026-07-09T11:22:06+03:00",
  dateModified: "2026-07-09T11:22:06+03:00",
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

export default function PetkmMasterPlanFeedPage() {
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
              src="/petkm-master-plan-feed-asamasina-gecis-hazirliklari.webp"
              alt="PETKM Master Plan FEED aşamasına geçiş hazırlıkları"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              PETKM Master Plan’da FEED Aşamasına Geçiş Hazırlıklarına Başladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberi
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
                Petkim Petrokimya Holding A.Ş. (<strong>PETKM</strong>), Master
                Plan kapsamında gelinen aşamayı KAP üzerinden açıkladı. Şirket,
                Pre-FEED aşamasının <strong>2025 yılı sonunda başarıyla
                tamamlandığını</strong> ve FEED sürecine geçiş için
                hazırlıkların başladığını duyurdu.
              </p>

              <p>
                Açıklamada, nihai hakim ortak <strong>SOCAR</strong> ile{" "}
                <strong>Technip Energies Italy S.P.A</strong> arasında Master
                Plan kapsamında MFSC teknolojisinin lisanslanması ve FEED
                hizmetleri başta olmak üzere potansiyel iş birliği alanlarının
                değerlendirilmesine yönelik iyi niyet anlaşması imzalandığı
                belirtildi.
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
                  PETKM, 13 Aralık 2024 tarihli açıklamasında duyurduğu Master
                  Plan için yeni aşamaya geçiş hazırlıklarını paylaştı. Pre-FEED
                  süreci tamamlandıktan sonra, nihai yatırım kararı öncesindeki
                  kritik mühendislik aşaması olan FEED sürecine geçilmesi için
                  çalışmalar başladı.
                </p>
              </Section>

              <Section title="Master Plan’ın ana başlıkları">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Master Plan, PETKM’in mevcut üretim yapısını güçlendirmeyi ve
                  bazı büyük ölçekli modernizasyon adımlarını kapsıyor.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {masterPlanBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Proje detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {projeDetaylari.map((item, index) => (
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

              <Section title="FEED sürecinde ne değerlendirilecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  FEED süreci, büyük ölçekli sanayi projelerinde nihai yatırım
                  kararı öncesindeki en kritik mühendislik aşamalarından biri
                  olarak kabul ediliyor. PETKM açıklamasına göre bu süreçte şu
                  başlıklar değerlendirilecek:
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {feedKapsami.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  PETKM için açıklama, doğrudan nihai yatırım kararının alındığı
                  anlamına gelmiyor. Ancak Master Plan tarafında Pre-FEED
                  aşamasının tamamlanması ve FEED hazırlıklarının başlaması,
                  projenin teknik ve ticari analiz sürecinde bir üst aşamaya
                  geçildiğini gösteriyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  FEED çalışmalarından çıkacak sonuçlar, ileride olası yatırım
                  kararına temel oluşturacak. Bu nedenle yatırımcı tarafında
                  takip edilecek ana başlıklar; FEED anlaşmalarının tamamlanması,
                  süreç takvimi, yatırım maliyeti ve nihai yatırım kararı olacak.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Şirket, FEED süreciyle ilgili anlaşmaların{" "}
                  <strong>2026 yılının 3. çeyreğinde</strong> tamamlanmasını ve
                  ardından FEED çalışmalarına başlanmasını planlıyor. Bu süreçten
                  elde edilecek çıktılar, Master Plan kapsamındaki olası yatırım
                  kararına teknik ve ticari temel oluşturacak.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1630457"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  PETKM — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="PETKM Master Plan’da FEED Aşamasına Geçiş Hazırlıklarına Başladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Master Plan süreci, şirketin sonraki KAP
                açıklamaları ve nihai yatırım kararı başlıklarıyla birlikte
                takip edilmelidir.
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
