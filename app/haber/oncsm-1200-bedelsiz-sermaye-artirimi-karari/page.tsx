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

const slug = "oncsm-1200-bedelsiz-sermaye-artirimi-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/oncsm-1200-bedelsiz-sermaye-artirimi-karari.webp";

export const metadata: Metadata = {
  title: "ONCSM %1200 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "Oncosem, 23,85 milyon TL olan çıkarılmış sermayesini iç kaynaklardan %1200 oranında bedelsiz artırarak 310,05 milyon TL’ye çıkarma kararı aldı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ONCSM %1200 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "ONCSM, iç kaynaklardan 286,2 milyon TL bedelsiz sermaye artırımı yaparak sermayesini 310,05 milyon TL’ye çıkarma kararı aldı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ONCSM yüzde 1200 bedelsiz sermaye artırımı kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ONCSM %1200 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "ONCSM sermayesini 23,85 milyon TL’den 310,05 milyon TL’ye çıkarma kararı aldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%1200",
    aciklama: "İç kaynaklardan karşılanacak",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "23,85 Mn TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "310,05 Mn TL",
    aciklama: "Ulaşılacak sermaye",
  },
  {
    baslik: "Artırım Tutarı",
    deger: "286,2 Mn TL",
    aciklama: "Toplam bedelsiz pay tutarı",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Oncosem Onkolojik Sistemler Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ONCSM",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "09:30:10",
  },
  {
    etiket: "Yönetim Kurulu Karar Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Kayıtlı Sermaye Tavanı",
    deger: "99.000.000 TL",
  },
  {
    etiket: "Mevcut Sermaye",
    deger: "23.850.000 TL",
  },
  {
    etiket: "Artırılacak Sermaye",
    deger: "286.200.000 TL",
  },
  {
    etiket: "Ulaşılacak Sermaye",
    deger: "310.050.000 TL",
  },
  {
    etiket: "Bedelsiz Sermaye Artırımı Oranı",
    deger: "%1200",
  },
  {
    etiket: "Artırılan Payların Niteliği",
    deger: "Kaydi pay",
  },
  {
    etiket: "Tadil Edilecek Ana Sözleşme Maddesi",
    deger: "Madde 6",
  },
];

const kaynaklar = [
  {
    kaynak: "Diğer Kar Yedekleri",
    tutar: "73.588.354,71 TL",
  },
  {
    kaynak: "Özsermaye Enflasyon Düzeltme Farkları",
    tutar: "96.621.278,24 TL",
  },
  {
    kaynak: "Emisyon Primi",
    tutar: "115.990.367,05 TL",
  },
  {
    kaynak: "Toplam",
    tutar: "286.200.000,00 TL",
  },
];

const payGruplari = [
  {
    grup: "A Grubu",
    mevcut: "3.980.000 TL",
    bedelsiz: "47.760.000 TL",
    oran: "%1200",
    verilecek: "A Grubu imtiyazlı nama yazılı pay",
    nevi: "Nâma",
  },
  {
    grup: "B Grubu / ONCSM",
    mevcut: "19.870.000 TL",
    bedelsiz: "238.440.000 TL",
    oran: "%1200",
    verilecek: "B Grubu hamiline yazılı pay",
    nevi: "Hamiline",
  },
];

const surecAdimlari = [
  {
    baslik: "Yönetim kurulu kararı alındı",
    aciklama:
      "ONCSM yönetim kurulu, 23,85 milyon TL olan çıkarılmış sermayenin %1200 oranında artırılmasına karar verdi.",
  },
  {
    baslik: "Kayıtlı sermaye tavanı bir defaya mahsus aşılacak",
    aciklama:
      "Şirketin kayıtlı sermaye tavanı 99 milyon TL. Açıklamada, SPK’nın Kayıtlı Sermaye Sistemi Tebliği kapsamındaki hüküm çerçevesinde bu tavanın bir defaya mahsus aşılabileceği belirtildi.",
  },
  {
    baslik: "Sermaye artırımı iç kaynaklardan karşılanacak",
    aciklama:
      "286,2 milyon TL’lik artırım; diğer kar yedekleri, özsermaye enflasyon düzeltme farkları ve emisyon primi kalemlerinden karşılanacak.",
  },
  {
    baslik: "SPK başvurusu yapılacak",
    aciklama:
      "Şirket, sermaye artırımına ilişkin gerekli izin ve onaylar için başta SPK olmak üzere ilgili kurum ve kuruluşlara başvuru yapılacağını açıkladı.",
  },
];

const nedenOnemli = [
  {
    baslik: "Oran yüksek: %1200 bedelsiz",
    aciklama:
      "ONCSM’nin açıkladığı %1200 bedelsiz oranı, hisse başına pay adedinde oldukça yüksek artış anlamına geliyor. Bu nedenle haber, sermaye artırımı başlığı içinde ayrı haber yapılacak güçte bir gelişme.",
  },
  {
    baslik: "Sermaye 13 katına çıkıyor",
    aciklama:
      "Mevcut 23,85 milyon TL sermaye, artırım sonrası 310,05 milyon TL’ye ulaşacak. Nominal sermayedeki bu artış şirketin sermaye yapısını belirgin şekilde büyütecek.",
  },
  {
    baslik: "Kaynak dağılımı net açıklandı",
    aciklama:
      "Bedelsiz artırımın hangi iç kaynak kalemlerinden karşılanacağı KAP açıklamasında ayrı ayrı belirtildi. En büyük kaynak emisyon primi olurken, özsermaye enflasyon düzeltme farkları ve diğer kar yedekleri de sermayeye eklenecek.",
  },
  {
    baslik: "Süreç henüz tamamlanmadı",
    aciklama:
      "Yönetim kurulu kararı alınmış olsa da bedelsiz sermaye artırımı için SPK ve ilgili kurum onaylarının tamamlanması gerekiyor. Hak kullanım tarihi daha sonra netleşecek.",
  },
];

const hisseOkumasi = [
  {
    baslik: "Kısa vadeli algı",
    aciklama:
      "Yüksek oranlı bedelsiz kararları genelde ilk etapta hisse üzerinde haber etkisi yaratabilir. ONCSM tarafında da %1200 oranı nedeniyle kısa vadeli ilgi artabilir.",
  },
  {
    baslik: "Finansal gerçeklik",
    aciklama:
      "Bedelsiz sermaye artırımı şirkete yeni nakit girişi sağlamaz. Şirketin özkaynakları içindeki bazı kalemler sermayeye eklenir ve pay adedi artar.",
  },
  {
    baslik: "Fiyat etkisi",
    aciklama:
      "Hak kullanım tarihinde hisse fiyatı teorik olarak bedelsiz oranına göre düzeltilir. Bu nedenle yatırımcıların sadece oran büyüklüğüne değil, düzeltilmiş fiyat ve şirketin temel görünümüne de bakması gerekir.",
  },
];

const finansalOkuma = [
  "Sermaye artırımı tamamen iç kaynaklardan karşılanacak.",
  "Şirkete dışarıdan yeni nakit girişi olmayacak.",
  "Pay adedi artarken, hak kullanım tarihinde fiyat teorik olarak düzeltilecek.",
  "Sermaye kalemi 23,85 milyon TL’den 310,05 milyon TL’ye çıkacak.",
  "SPK onayı ve hak kullanım tarihi sonraki aşamada takip edilecek.",
  "Yüksek oranlı bedelsiz kararı kısa vadeli haber etkisi yaratabilir; kalıcı fiyat etkisi şirketin finansallarıyla birlikte şekillenir.",
];

const takipBasliklari = [
  "SPK başvuru ve onay süreci",
  "Esas sözleşme 6. madde tadil onayı",
  "Hak kullanım tarihinin açıklanması",
  "Borsa İstanbul ve MKK süreçleri",
  "Bedelsiz sonrası teorik fiyat düzeltmesi",
  "ONCSM finansallarında kârlılık ve nakit akışı görünümü",
];

const seoSorular = [
  {
    soru: "ONCSM ne açıkladı?",
    cevap:
      "ONCSM, 23,85 milyon TL olan çıkarılmış sermayesini iç kaynaklardan %1200 oranında bedelsiz artırarak 310,05 milyon TL’ye çıkarma kararı aldığını açıkladı.",
  },
  {
    soru: "ONCSM bedelsiz sermaye artırımı oranı kaç?",
    cevap:
      "ONCSM bedelsiz sermaye artırımı oranı %1200 olarak açıklandı. Artırım tutarı 286,2 milyon TL olacak.",
  },
  {
    soru: "ONCSM yeni sermayesi kaç TL olacak?",
    cevap:
      "Bedelsiz sermaye artırımı sonrası ONCSM’nin ulaşacağı sermaye 310.050.000 TL olacak.",
  },
  {
    soru: "ONCSM bedelsiz sermaye artırımı hangi kaynaklardan karşılanacak?",
    cevap:
      "Artırım; diğer kar yedekleri, özsermaye enflasyon düzeltme farkları ve emisyon primi kalemlerinden karşılanacak.",
  },
  {
    soru: "ONCSM bedelsiz kararı hisse için nasıl okunmalı?",
    cevap:
      "Yüksek oranlı bedelsiz kararı kısa vadede dikkat çekici bir haber akışı oluşturabilir. Ancak bedelsiz artırım şirkete yeni nakit girişi sağlamaz ve hak kullanım tarihinde fiyat teorik olarak düzeltilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ONCSM %1200 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "Oncosem, 23,85 milyon TL olan çıkarılmış sermayesini iç kaynaklardan %1200 oranında bedelsiz artırarak 310,05 milyon TL’ye çıkarma kararı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-16T09:30:10+03:00",
  dateModified: "2026-07-16T09:30:10+03:00",
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

export default function OncsmBedelsizSermayeArtirimiPage() {
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
              src="/oncsm-1200-bedelsiz-sermaye-artirimi-karari.webp"
              alt="ONCSM yüzde 1200 bedelsiz sermaye artırımı kararı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ONCSM %1200 Bedelsiz Sermaye Artırımı Kararı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
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
                Oncosem Onkolojik Sistemler Sanayi ve Ticaret A.Ş. (
                <strong>ONCSM</strong>), bedelsiz sermaye artırımı kararı
                aldığını açıkladı. Şirketin <strong>23.850.000 TL</strong> olan
                çıkarılmış sermayesi, iç kaynaklardan karşılanmak üzere{" "}
                <strong>%1200 oranında</strong> artırılarak{" "}
                <strong>310.050.000 TL</strong> seviyesine çıkarılacak.
              </p>

              <p>
                KAP açıklamasına göre toplam <strong>286.200.000 TL</strong>
                tutarındaki bedelsiz artırım; diğer kar yedekleri, özsermaye
                enflasyon düzeltme farkları ve emisyon primi kalemlerinden
                karşılanacak. Şirket, süreç için SPK başta olmak üzere ilgili
                kurumlara başvuru yapılacağını bildirdi.
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
                  ONCSM yönetim kurulu, 16 Temmuz 2026 tarihli kararıyla şirket
                  sermayesinin iç kaynaklardan %1200 oranında artırılmasına karar
                  verdi. Artırım tamamlandığında şirket sermayesi 23,85 milyon
                  TL’den 310,05 milyon TL’ye ulaşacak.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bedelsiz sermaye artırımı kapsamında ihraç edilecek kaydi
                  paylar, mevcut pay sahiplerine sahip oldukları pay oranında
                  dağıtılacak. A grubu pay sahiplerine A grubu, B grubu pay
                  sahiplerine ise B grubu pay verilecek.
                </p>
              </Section>

              <Section title="Sermaye artırımı detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {genelDetaylar.map((item, index) => (
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

              <Section title="Bedelsiz artırımın kaynakları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Kaynak</th>
                        <th className="px-4 py-3 text-left font-semibold">Tutar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kaynaklar.map((item, index) => (
                        <tr
                          key={item.kaynak}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.kaynak}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.tutar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Pay gruplarına göre dağılım">
                <div className="overflow-x-auto">
                  <table className="min-w-[760px] overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Pay Grubu</th>
                        <th className="px-4 py-3 text-left font-semibold">Mevcut Sermaye</th>
                        <th className="px-4 py-3 text-left font-semibold">Bedelsiz Tutar</th>
                        <th className="px-4 py-3 text-left font-semibold">Oran</th>
                        <th className="px-4 py-3 text-left font-semibold">Verilecek Pay</th>
                        <th className="px-4 py-3 text-left font-semibold">Nevi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payGruplari.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.grup}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.mevcut}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.bedelsiz}
                          </td>
                          <td className="px-4 py-3 font-bold text-blue-700">
                            {item.oran}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.verilecek}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.nevi}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Süreç nasıl işleyecek?">
                <div className="grid gap-4">
                  {surecAdimlari.map((item) => (
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

              <Section title="Bu haber neden önemli?">
                <div className="grid gap-4">
                  {nedenOnemli.map((item) => (
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
                  Bedelsiz sermaye artırımı, şirketin kasasına yeni nakit girişi
                  sağlayan bir işlem değildir. ONCSM tarafında açıklanan artırım,
                  şirketin özkaynak kalemlerinde yer alan tutarların sermaye
                  hesabına aktarılmasıyla gerçekleşecek.
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
                <div className="grid gap-4">
                  {hisseOkumasi.map((item) => (
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

              <Section title="ONCSM bedelsiz sermaye artırımı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633957"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ONCSM — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ONCSM %1200 Bedelsiz Sermaye Artırımı Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Bedelsiz sermaye artırımı kararları; SPK onayı,
                hak kullanım tarihi, teorik fiyat düzeltmesi ve şirketin temel
                finansal görünümüyle birlikte değerlendirilmelidir.
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