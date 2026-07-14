import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "durkn-666-bedelsiz-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/durkn-666-bedelsiz-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: "DURKN %666 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "DURKN, 132,5 milyon TL olan sermayesini %666,03773 bedelsiz artırımla 1,015 milyar TL’ye çıkarmak için SPK’ya başvurdu. Artırım iç kaynaklardan karşılanacak.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "DURKN %666 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "Durukan Şekerleme, 882,5 milyon TL tutarında iç kaynaklardan bedelsiz sermaye artırımı için SPK başvurusu yaptı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "DURKN yüzde 666 bedelsiz sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DURKN %666 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "DURKN sermayesini 132,5 milyon TL’den 1,015 milyar TL’ye çıkarmak için SPK’ya başvurdu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%666,03773",
    aciklama: "İç kaynaklardan bedelsiz sermaye artırımı",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "132,5 Milyon TL",
    aciklama: "Artırım öncesi çıkarılmış sermaye",
  },
  {
    baslik: "Hedef Sermaye",
    deger: "1,015 Milyar TL",
    aciklama: "Artırım sonrası ulaşılması planlanan sermaye",
  },
  {
    baslik: "Artırım Tutarı",
    deger: "882,5 Milyon TL",
    aciklama: "Bedelsiz olarak dağıtılması planlanan pay tutarı",
  },
];

const kaynaklar = [
  {
    baslik: "Yönetim Kurulu Kararı",
    link: "https://www.kap.org.tr/Bildirim/1625319",
  },
  {
    baslik: "SPK Başvurusu",
    link: "https://www.kap.org.tr/Bildirim/1625328",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "DURKN %666 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "DURKN, 132,5 milyon TL olan sermayesini %666,03773 bedelsiz artırımla 1,015 milyar TL’ye çıkarmak için SPK’ya başvurdu.",
  image: haberGorsel,
  datePublished: "2026-07-06T18:16:00+03:00",
  dateModified: "2026-07-06T18:16:00+03:00",
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

export default function DurknBedelsizSermayeArtirimiPage() {
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
              src="/durkn-666-bedelsiz-sermaye-artirimi-spk-basvurusu.webp"
              alt="DURKN yüzde 666 bedelsiz sermaye artırımı SPK başvurusu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              DURKN %666 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
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
                Durukan Şekerleme Sanayi ve Ticaret A.Ş. (<strong>DURKN</strong>),
                %666,03773 oranında bedelsiz sermaye artırımı için Sermaye
                Piyasası Kurulu’na başvuruda bulundu. Şirket, 132.500.000 TL olan
                çıkarılmış sermayesini 1.015.000.000 TL’ye yükseltmeyi planlıyor.
              </p>

              <p>
                Bedelsiz sermaye artırımı kapsamında toplam 882.500.000 TL
                tutarında pay ihraç edilmesi öngörülüyor. Artırım tutarının
                523.170.438,49 TL’lik kısmı sermaye düzeltmesi olumlu farklarından,
                359.329.561,51 TL’lik kısmı ise hisse senedi ihraç primlerinden
                karşılanacak.
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
                  DURKN Yönetim Kurulu, 6 Temmuz 2026 tarihli kararıyla şirketin
                  çıkarılmış sermayesinin iç kaynaklardan karşılanmak üzere
                  882.500.000 TL artırılmasına karar verdi. Aynı gün yayımlanan
                  güncelleme bildiriminde, ihraç belgesinin onaylanması amacıyla
                  SPK’ya başvuru yapıldığı duyuruldu.
                </p>
              </Section>

              <Section title="Bedelsiz sermaye artırımı detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Mevcut Sermaye
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          132.500.000 TL
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Artırım Tutarı
                        </th>
                        <td className="px-4 py-3 font-bold text-emerald-700">
                          882.500.000 TL
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hedef Sermaye
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          1.015.000.000 TL
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Bedelsiz Oranı
                        </th>
                        <td className="px-4 py-3 font-bold text-emerald-700">
                          %666,03773
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Kaynak
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Sermaye düzeltmesi olumlu farkları ve hisse senedi ihraç
                          primleri
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  %666 seviyesindeki bedelsiz sermaye artırımı oranı, DURKN
                  hissesi için yüksek oranlı bir sermaye artırımı başlığı
                  oluşturuyor. Bedelsiz artırım şirket kasasına nakit girişi
                  sağlamaz; ancak pay sayısını artırarak sermaye yapısını
                  değiştirir ve yatırımcı ilgisini artırabilecek bir gündem
                  yaratabilir.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Başvurunun SPK onay süreci henüz tamamlanmadı. Bu nedenle hak
                  kullanım tarihi, yeni payların dağıtım takvimi ve işlemin kesin
                  uygulama süreci sonraki KAP bildirimleriyle netleşecek.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Durukan Şekerleme, şekerleme ve gıda ürünleri alanında faaliyet
                  gösteren şirketler arasında yer alıyor. Şirketin performansı;
                  iç ve dış pazardaki satış hacmi, hammadde maliyetleri, ihracat
                  kanalları, marka gücü ve dönemsel talep koşullarıyla yakından
                  ilişkili.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  DURKN’nin %666,03773 oranındaki bedelsiz sermaye artırımı
                  başvurusu, haber akışı bakımından dikkat çekici bir gelişme.
                  Artırımın tamamen iç kaynaklardan karşılanacak olması ve hedef
                  sermayenin 1,015 milyar TL olarak belirlenmesi, bildirimin
                  önemini artırıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Buna karşılık işlem henüz SPK başvurusu aşamasında. Onay
                  gelmeden hak kullanım tarihi ve kesin uygulama takvimi
                  oluşmayacağı için yatırımcıların sonraki KAP açıklamalarını
                  takip etmesi gerekir.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki aşamada SPK’nın başvuruyu değerlendirerek ihraç
                  belgesini onaylayıp onaylamayacağı takip edilecek. Onay gelmesi
                  halinde bedelsiz pay alma hakkı kullanım tarihi, kayıt tarihi ve
                  yeni payların dağıtım süreci ayrıca açıklanacak.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynaklar</div>
                <div className="mt-2 flex flex-col gap-2">
                  {kaynaklar.map((kaynak) => (
                    <a
                      key={kaynak.link}
                      href={kaynak.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="font-medium text-slate-700 underline underline-offset-2"
                    >
                      {kaynak.baslik} — Orjinal Kap içeriği
                    </a>
                  ))}
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="DURKN %666 Bedelsiz Sermaye Artırımı İçin SPK’ya Başvurdu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Bedelsiz sermaye artırımı süreci SPK onayı sonrası
                kesinleşir; hak kullanım tarihi ve uygulama takvimi için şirketin
                sonraki KAP açıklamaları takip edilmelidir.
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
