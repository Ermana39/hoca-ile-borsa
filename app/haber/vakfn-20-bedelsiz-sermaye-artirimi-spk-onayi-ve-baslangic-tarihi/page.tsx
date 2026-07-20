import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "vakfn-20-bedelsiz-sermaye-artirimi-spk-onayi-ve-baslangic-tarihi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/vakfn-20-bedelsiz-sermaye-artirimi-spk-onayi-ve-baslangic-tarihi.webp";

export const metadata: Metadata = {
  title: "VAKFN %20 Bedelsiz Sermaye Artırımı SPK Onayı ve Başlangıç Tarihi",
  description:
    "VAKFN, 5 milyar TL olan sermayesini 1 milyar TL bedelsiz artırımla 6 milyar TL’ye çıkarıyor. SPK onayı geldi, bedelsiz pay alma hakkı başlangıç tarihi 21 Temmuz 2026 olarak açıklandı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "VAKFN %20 Bedelsiz Sermaye Artırımı SPK Onayı ve Başlangıç Tarihi",
    description:
      "VAKFN’nin 1 milyar TL tutarlı %20 bedelsiz sermaye artırımı SPK tarafından onaylandı. Hak kullanım başlangıcı 21 Temmuz 2026.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "VAKFN yüzde 20 bedelsiz sermaye artırımı SPK onayı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAKFN %20 Bedelsiz Sermaye Artırımı SPK Onayı ve Başlangıç Tarihi",
    description:
      "Bedelsiz oran %20, başlangıç tarihi 21 Temmuz 2026.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Bedelsiz Oranı",
    deger: "%20",
    aciklama: "İç kaynaklardan",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "5 Mlr TL",
    aciklama: "Çıkarılmış sermaye",
  },
  {
    baslik: "Yeni Sermaye",
    deger: "6 Mlr TL",
    aciklama: "Artırım sonrası",
  },
  {
    baslik: "Başlangıç Tarihi",
    deger: "21.07.2026",
    aciklama: "Hak kullanım tarihi",
  },
];

const anaDetaylar = [
  ["Şirket", "Vakıf Finansal Kiralama A.Ş."],
  ["Hisse Kodu", "VAKFN"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "14:01:00"],
  ["Yönetim Kurulu Karar Tarihi", "13.05.2026"],
  ["Kayıtlı Sermaye Tavanı", "10.000.000.000 TL"],
  ["Mevcut Sermaye", "5.000.000.000 TL"],
  ["Artırılacak Tutar", "1.000.000.000 TL"],
  ["Ulaşılacak Sermaye", "6.000.000.000 TL"],
  ["Bedelsiz Oranı", "%20,00000"],
  ["Kaynak", "2025 yılı dönem kârı"],
  ["SPK Başvuru Tarihi", "14.05.2026"],
  ["SPK Onay Tarihi", "16.07.2026"],
  ["Hak Kullanım Başlangıç", "21.07.2026"],
  ["Kayıt Tarihi", "22.07.2026"],
  ["Ödeme Tarihi", "23.07.2026"],
  ["Pay Niteliği", "Kaydi pay"],
];

const surec = [
  {
    baslik: "Yönetim kurulu kararı alındı",
    aciklama:
      "Şirket yönetim kurulu 13 Mayıs 2026 tarihinde, çıkarılmış sermayenin 2025 yılı dönem kârından karşılanmak suretiyle 1 milyar TL artırılmasına karar verdi.",
  },
  {
    baslik: "SPK başvurusu yapıldı",
    aciklama:
      "Ana sözleşmenin sermaye maddesinin tadili ve bedelsiz sermaye artırımı için SPK başvurusu 14 Mayıs 2026 tarihinde gerçekleştirildi.",
  },
  {
    baslik: "SPK onayı geldi",
    aciklama:
      "Sermaye artırımına ilişkin Borsa İhraç Belgesi, Sermaye Piyasası Kurulu’nun 16 Temmuz 2026 tarih ve 43/1288 sayılı toplantısında onaylandı.",
  },
  {
    baslik: "Hak kullanım takvimi açıklandı",
    aciklama:
      "Bedelsiz pay alma hakkı kullanım başlangıç tarihi 21 Temmuz 2026 olarak duyuruldu. Kayıt tarihi 22 Temmuz, ödeme tarihi ise 23 Temmuz 2026 olacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Yatırımcıya bedelsiz pay verilecek",
    aciklama:
      "Mevcut pay sahipleri, ellerindeki lot sayısına göre %20 oranında bedelsiz pay alma hakkı elde edecek.",
  },
  {
    baslik: "Sermaye 6 milyar TL’ye çıkacak",
    aciklama:
      "Artırım sonrası şirketin çıkarılmış sermayesi 5 milyar TL’den 6 milyar TL’ye yükselecek.",
  },
  {
    baslik: "Kaynak kârdan karşılanıyor",
    aciklama:
      "Bedelsiz artırımın 1 milyar TL’lik kısmı 2025 yılı dönem kârından karşılanacak olması, şirketin iç kaynak kullanımını öne çıkarıyor.",
  },
  {
    baslik: "Takvim netleşti",
    aciklama:
      "SPK onayıyla birlikte hak kullanım başlangıç, kayıt ve ödeme tarihleri de netleştiği için süreç artık takvim bazlı izlenebilecek.",
  },
];

const finansalOkuma = [
  "Bedelsiz sermaye artırımı şirkete yeni nakit girişi sağlamaz.",
  "İşlem, şirket özkaynak yapısı içindeki bir kalemin sermayeye eklenmesi anlamına gelir.",
  "Hisse fiyatı teorik olarak bedelsiz oranı kadar düzelir, yatırımcının toplam varlık değeri bu işlem nedeniyle tek başına artmaz.",
  "Bununla birlikte iç kaynakların güçlü olması piyasa tarafından algı tarafında olumlu değerlendirilebilir.",
  "Şirketin esas finansal etkisi, bedelsizden çok kârlılık, aktif kalite ve büyüme performansıyla şekillenecektir.",
];

const hisseOkumasi = [
  {
    baslik: "Algı tarafında destekleyici olabilir",
    aciklama:
      "Bedelsiz sermaye artırımı haberleri Borsa İstanbul’da genellikle yatırımcı ilgisini artıran başlıklardan biri olduğu için kısa vadede pozitif algı oluşturabilir.",
  },
  {
    baslik: "Matematiksel değer artışı yaratmaz",
    aciklama:
      "Bedelsiz işlemi yatırımcıya ilave lot verse de şirketin toplam piyasa değerini tek başına artırmaz; fiyat uyarlamasıyla birlikte teorik denge oluşur.",
  },
  {
    baslik: "Takas ve işlem sonrası fiyat davranışı izlenecek",
    aciklama:
      "21 Temmuz sonrası oluşacak fiyatlama, yatırımcı ilgisi ve işlem hacmi haberin piyasa yansımasını belirleyecek.",
  },
];

const riskler = [
  "Bedelsiz artırım tek başına temel değer yaratmaz.",
  "Fiyat teorik olarak bölüneceği için yanlış beklentiye giren yatırımcılar hayal kırıklığı yaşayabilir.",
  "Kısa vadeli spekülatif hareketler görülebilir.",
  "Asıl değerleme yine şirketin kârlılık ve bilanço performansına bağlı kalacaktır.",
];

const takipBasliklari = [
  "21 Temmuz 2026 hak kullanım başlangıcı",
  "22 Temmuz 2026 kayıt tarihi",
  "23 Temmuz 2026 yeni payların hesaplara geçişi",
  "Bedelsiz sonrası fiyat ve hacim davranışı",
  "Şirketin yeni dönem finansal sonuçları",
  "VAKFN’nin kârlılık ve büyüme görünümü",
];

const seoSorular = [
  {
    soru: "VAKFN ne açıkladı?",
    cevap:
      "VAKFN, 5 milyar TL olan çıkarılmış sermayesini 1 milyar TL bedelsiz artırımla 6 milyar TL’ye çıkaracağını, SPK onayının alındığını ve bedelsiz pay alma hakkı başlangıç tarihinin 21 Temmuz 2026 olduğunu açıkladı.",
  },
  {
    soru: "VAKFN bedelsiz sermaye artırımı oranı kaç?",
    cevap:
      "VAKFN’nin bedelsiz sermaye artırımı oranı %20 olarak açıklandı.",
  },
  {
    soru: "VAKFN bedelsiz başlangıç tarihi ne zaman?",
    cevap:
      "Bedelsiz pay alma hakkı kullanım başlangıç tarihi 21 Temmuz 2026 olarak duyuruldu.",
  },
  {
    soru: "VAKFN bedelsiz sermaye artırımı hangi kaynaktan karşılanıyor?",
    cevap:
      "Bedelsiz artırımın 1 milyar TL’lik kısmı 2025 yılı dönem kârından karşılanıyor.",
  },
  {
    soru: "VAKFN haberi hisseyi nasıl etkiler?",
    cevap:
      "Bedelsiz haberleri kısa vadede yatırımcı ilgisini artırabilir. Ancak işlem şirkete yeni nakit girişi sağlamadığı için temel etkiyi tek başına değiştirmez.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "VAKFN %20 Bedelsiz Sermaye Artırımı SPK Onayı ve Başlangıç Tarihi",
  description:
    "VAKFN, 5 milyar TL olan sermayesini 1 milyar TL bedelsiz artırımla 6 milyar TL’ye çıkarıyor. SPK onayı geldi, hak kullanım başlangıç tarihi 21 Temmuz 2026 olarak açıklandı.",
  image: haberGorsel,
  datePublished: "2026-07-20T14:01:00+03:00",
  dateModified: "2026-07-20T14:01:00+03:00",
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

export default function VakfnBedelsizPage() {
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
              src="/vakfn-20-bedelsiz-sermaye-artirimi-spk-onayi-ve-baslangic-tarihi.webp"
              alt="VAKFN yüzde 20 bedelsiz sermaye artırımı SPK onayı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              VAKFN %20 Bedelsiz Sermaye Artırımı SPK Onayı ve Başlangıç Tarihi
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
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
                Vakıf Finansal Kiralama A.Ş. (
                <strong>VAKFN</strong>), 5 milyar TL olan çıkarılmış sermayesini
                1 milyar TL bedelsiz artırımla 6 milyar TL’ye yükseltecek işlem
                için Sermaye Piyasası Kurulu onayını aldığını ve bedelsiz pay
                alma hakkı kullanım başlangıç tarihinin 21 Temmuz 2026 olduğunu
                açıkladı.
              </p>

              <p>
                Bedelsiz sermaye artırımında kaynak olarak 2025 yılı dönem kârı
                kullanılacak. Pay sahipleri, mevcut paylarına karşılık %20
                oranında bedelsiz pay alacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-green-200 bg-green-50 p-4"
                  >
                    <div className="text-sm font-semibold text-green-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-green-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-green-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  VAKFN’nin daha önce duyurduğu bedelsiz sermaye artırımı süreci
                  SPK onayıyla tamamlanma aşamasına geldi. Kurul onayı sonrasında
                  bedelsiz pay alma hakkı başlangıç tarihi 21 Temmuz 2026 olarak
                  duyuruldu.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {anaDetaylar.map(([etiket, deger], index) => (
                        <tr
                          key={etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Süreç nasıl ilerledi?">
                <div className="grid gap-4">
                  {surec.map((item) => (
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
                <div className="grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-bold leading-6 text-green-950"
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

              <Section title="Dikkat edilmesi gereken noktalar">
                <div className="grid gap-3">
                  {riskler.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold leading-6 text-orange-950"
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

              <Section title="VAKFN bedelsiz sermaye artırımı hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634845"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  VAKFN — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="VAKFN %20 Bedelsiz Sermaye Artırımı SPK Onayı ve Başlangıç Tarihi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir.
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