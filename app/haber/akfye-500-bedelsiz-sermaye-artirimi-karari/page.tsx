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

const slug = "akfye-500-bedelsiz-sermaye-artirimi-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/akfye-500-bedelsiz-sermaye-artirimi-karari.webp";

export const metadata: Metadata = {
  title: "AKFYE %500 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "Akfen Yenilenebilir Enerji, sermayesini 1,197 milyar TL’den 7,182 milyar TL’ye çıkarmak için %500 bedelsiz sermaye artırımı kararı aldı. Artırım emisyon primlerinden karşılanacak.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "AKFYE %500 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "AKFYE, 5,985 milyar TL tutarındaki bedelsiz sermaye artırımını emisyon primlerinden karşılayacak. Mevcut pay sahiplerine payları oranında bedelsiz pay verilecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "AKFYE yüzde 500 bedelsiz sermaye artırımı kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKFYE %500 Bedelsiz Sermaye Artırımı Kararı Aldı",
    description:
      "AKFYE sermayesini 1,197 milyar TL’den 7,182 milyar TL’ye çıkarmak için %500 bedelsiz kararı açıkladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%500",
    aciklama: "İç kaynaklardan bedelsiz pay",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "1,197 Mr TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "7,182 Mr TL",
    aciklama: "Ulaşılacak sermaye",
  },
  {
    baslik: "Kaynak",
    deger: "Emisyon Primi",
    aciklama: "Artırımın tamamı bu kalemden",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Akfen Yenilenebilir Enerji A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "AKFYE",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "18:12:20",
  },
  {
    etiket: "Yönetim Kurulu Karar Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Kayıtlı Sermaye Tavanı",
    deger: "20.000.000.000 TL",
  },
  {
    etiket: "Mevcut Sermaye",
    deger: "1.196.962.446 TL",
  },
  {
    etiket: "Artırılacak Tutar",
    deger: "5.984.812.230 TL",
  },
  {
    etiket: "Ulaşılacak Sermaye",
    deger: "7.181.774.676 TL",
  },
  {
    etiket: "Bedelsiz Oranı",
    deger: "%500",
  },
  {
    etiket: "Kaynak",
    deger: "Emisyon primi",
  },
  {
    etiket: "Pay Niteliği",
    deger: "Kaydi pay",
  },
];

const payGrubuDetaylari = [
  {
    grup: "A Grubu",
    mevcut: "203.206.390 TL",
    artirim: "1.016.031.950 TL",
    oran: "%500",
    verilecek: "A Grubu",
    nevi: "Nama",
  },
  {
    grup: "B Grubu / AKFYE",
    mevcut: "993.756.056 TL",
    artirim: "4.968.780.280 TL",
    oran: "%500",
    verilecek: "B Grubu",
    nevi: "Hamiline",
  },
];

const surecMaddeleri = [
  "Yönetim Kurulu %500 bedelsiz sermaye artırımı kararı aldı.",
  "Sermaye artışı tamamen emisyon primlerinden karşılanacak.",
  "Mevcut 1,196 milyar TL sermaye 7,181 milyar TL’ye çıkarılacak.",
  "İhraç edilecek paylar mevcut pay sahiplerine payları oranında dağıtılacak.",
  "A grubu pay sahiplerine A grubu, B grubu pay sahiplerine B grubu pay verilecek.",
  "İhraç belgesi ve esas sözleşme tadili için SPK’ya başvuru yapılacak.",
];

const finansalOkuma = [
  {
    baslik: "Şirket kasasına nakit girişi olmaz",
    aciklama:
      "Bedelsiz sermaye artırımı iç kaynak aktarımıdır. Bu işlemde şirket dışarıdan nakit toplamaz; emisyon primi sermayeye eklenir.",
  },
  {
    baslik: "Sermaye 6 katına çıkacak",
    aciklama:
      "%500 bedelsiz oranı, mevcut 1 pay için 5 yeni pay verilmesi anlamına gelir. Sermaye 1,197 milyar TL’den 7,182 milyar TL’ye yükselecek.",
  },
  {
    baslik: "Piyasa değeri doğrudan değişmez",
    aciklama:
      "Bedelsiz sonrası pay adedi artar, teorik fiyat aynı oranda düzelir. Bu nedenle şirketin piyasa değeri yalnızca bedelsiz kararıyla otomatik olarak artmış sayılmaz.",
  },
  {
    baslik: "Likidite ve işlem psikolojisi etkisi olabilir",
    aciklama:
      "Bedelsiz sermaye artırımları, özellikle yüksek oranlı olduğunda hisse gündemini güçlendirebilir. Fiyat etkisi ise SPK onayı, hak kullanım tarihi ve piyasa koşullarıyla şekillenir.",
  },
];

const teorikOrnekler = [
  {
    onceki: "100 lot",
    sonraki: "600 lot",
    aciklama: "1 paya karşılık 5 yeni pay verildiğinde toplam pay 6 katına çıkar.",
  },
  {
    onceki: "1.000 lot",
    sonraki: "6.000 lot",
    aciklama: "Lot sayısı artarken teorik fiyat aynı oranda düzeltilir.",
  },
  {
    onceki: "10.000 lot",
    sonraki: "60.000 lot",
    aciklama: "Toplam portföy değeri teorik olarak sadece bölünme nedeniyle değişmez.",
  },
];

const takipBasliklari = [
  "SPK başvurusunun yapılması",
  "İhraç belgesi ve esas sözleşme tadili onayı",
  "Bedelsiz sermaye artırımı hak kullanım tarihi",
  "Bölünme sonrası teorik fiyat ve yeni pay adedi",
  "AKFYE hissesinde haber sonrası işlem hacmi ve fiyatlama",
  "Yüksek oranlı bedelsiz kararının yatırımcı ilgisine etkisi",
];

const seoSorular = [
  {
    soru: "AKFYE ne açıkladı?",
    cevap:
      "AKFYE, %500 oranında bedelsiz sermaye artırımı kararı aldığını açıkladı. Şirket sermayesini 1.196.962.446 TL’den 7.181.774.676 TL’ye çıkarmayı planlıyor.",
  },
  {
    soru: "AKFYE bedelsiz sermaye artırımı hangi kaynaktan karşılanacak?",
    cevap:
      "AKFYE’nin 5.984.812.230 TL tutarındaki bedelsiz sermaye artırımı tamamen emisyon primlerinden karşılanacak.",
  },
  {
    soru: "AKFYE %500 bedelsiz ne anlama geliyor?",
    cevap:
      "%500 bedelsiz, mevcut 1 pay için 5 yeni pay verilmesi anlamına gelir. Bu durumda yatırımcının toplam pay adedi teorik olarak 6 katına çıkar.",
  },
  {
    soru: "AKFYE bedelsiz sonrası sermaye kaç TL olacak?",
    cevap:
      "Sermaye artırımı tamamlanırsa AKFYE’nin çıkarılmış sermayesi 7.181.774.676 TL’ye ulaşacak.",
  },
  {
    soru: "AKFYE bedelsiz sürecinde sırada ne var?",
    cevap:
      "Yönetim Kurulu kararı sonrası süreçte SPK başvurusu, ihraç belgesi onayı, esas sözleşme tadili ve hak kullanım tarihi takip edilecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "AKFYE %500 Bedelsiz Sermaye Artırımı Kararı Aldı",
  description:
    "Akfen Yenilenebilir Enerji, sermayesini 1,197 milyar TL’den 7,182 milyar TL’ye çıkarmak için %500 bedelsiz sermaye artırımı kararı aldı. Artırım emisyon primlerinden karşılanacak.",
  image: haberGorsel,
  datePublished: "2026-07-13T18:12:20+03:00",
  dateModified: "2026-07-13T18:12:20+03:00",
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

export default function AkfyeBedelsizSermayeArtirimiPage() {
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
              src="/akfye-500-bedelsiz-sermaye-artirimi-karari.webp"
              alt="AKFYE yüzde 500 bedelsiz sermaye artırımı kararı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              AKFYE %500 Bedelsiz Sermaye Artırımı Kararı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Bedelsiz Sermaye Artırımı
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
                Akfen Yenilenebilir Enerji A.Ş. (<strong>AKFYE</strong>),{" "}
                <strong>%500 oranında bedelsiz sermaye artırımı</strong> kararı
                aldığını açıkladı. Şirketin mevcut 1.196.962.446 TL olan
                çıkarılmış sermayesinin, 5.984.812.230 TL artırılarak
                7.181.774.676 TL’ye yükseltilmesi planlanıyor.
              </p>

              <p>
                KAP açıklamasına göre sermaye artırımının tamamı{" "}
                <strong>emisyon primlerinden</strong> karşılanacak. İhraç
                edilecek paylar, mevcut pay sahiplerine sahip oldukları pay grubu
                ve pay oranları dikkate alınarak bedelsiz şekilde dağıtılacak.
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
                  AKFYE Yönetim Kurulu, şirketin kayıtlı sermaye tavanı içinde
                  %500 bedelsiz sermaye artırımı yapılmasına karar verdi. Bu karar
                  ile şirketin sermayesi yaklaşık 6 katına çıkarılacak.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Artırılacak 5,984 milyar TL’nin tamamı emisyon primlerinden
                  karşılanacak. Bu nedenle işlem, şirket kasasına nakit girişi
                  sağlayan bir bedelli sermaye artırımı değil; iç kaynakların
                  sermayeye eklenmesi şeklinde ilerleyecek.
                </p>
              </Section>

              <Section title="Bedelsiz sermaye artırımı detayları">
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

              <Section title="Pay gruplarına göre artırım">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">
                          Pay Grubu
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Mevcut Sermaye
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Bedelsiz Tutar
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Oran
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Verilecek Pay
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Nevi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {payGrubuDetaylari.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.grup}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.mevcut}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.artirim}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
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

              <Section title="Süreç nasıl ilerleyecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yönetim Kurulu kararı sonrası AKFYE, ihraç belgesinin
                  onaylanması ve esas sözleşmenin sermaye maddesinin tadili için
                  SPK’ya başvuracak. Bedelsiz payların yatırımcı hesaplarına
                  geçmesi için SPK onayı ve hak kullanım tarihinin açıklanması
                  beklenecek.
                </p>

                <div className="mt-4 grid gap-3">
                  {surecMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <div className="grid gap-4">
                  {finansalOkuma.map((item) => (
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

              <Section title="%500 bedelsiz sonrası lot sayısı örneği">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  %500 bedelsiz sermaye artırımı, yatırımcının sahip olduğu her
                  1 pay için 5 yeni pay alması anlamına gelir. Hak kullanımından
                  sonra toplam pay adedi teorik olarak 6 katına çıkar.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">
                          Bedelsiz Öncesi
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Bedelsiz Sonrası
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Açıklama
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {teorikOrnekler.map((item, index) => (
                        <tr
                          key={item.onceki}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.onceki}
                          </td>
                          <td className="px-4 py-3 font-bold text-blue-700">
                            {item.sonraki}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.aciklama}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  AKFYE için %500 gibi yüksek oranlı bedelsiz sermaye artırımı,
                  haber akışı açısından güçlü bir başlık. Özellikle yenilenebilir
                  enerji sektöründe işlem gören şirketlerde yüksek oranlı bedelsiz
                  kararları yatırımcı ilgisini artırabildiği için süreç yakından
                  izlenecek.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Ancak bedelsiz sermaye artırımı, şirketin faaliyet kârını veya
                  nakit üretimini tek başına değiştiren bir işlem değildir. Bu
                  nedenle kararın hisse fiyatına etkisi; SPK onayı, hak kullanım
                  tarihi, piyasa koşulları, işlem hacmi ve yatırımcı beklentisiyle
                  birlikte şekillenecek.
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

              <Section title="AKFYE bedelsiz sermaye artırımı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1632790"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  AKFYE — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="AKFYE %500 Bedelsiz Sermaye Artırımı Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Bedelsiz sermaye artırımı süreci SPK onayı,
                hak kullanım tarihi ve şirketin sonraki KAP açıklamalarıyla
                birlikte takip edilmelidir.
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