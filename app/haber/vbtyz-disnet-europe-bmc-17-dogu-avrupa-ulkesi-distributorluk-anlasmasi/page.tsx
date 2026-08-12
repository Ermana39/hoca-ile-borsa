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

const slug = "vbtyz-disnet-europe-bmc-17-dogu-avrupa-ulkesi-distributorluk-anlasmasi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/vbtyz-disnet-europe-bmc-17-dogu-avrupa-ulkesi-distributorluk-anlasmasi.webp";

export const metadata: Metadata = {
  title: "VBTYZ BMC Ürünleri İçin 17 Doğu Avrupa Ülkesinde Distribütör Oldu",
  description:
    seoAciklamasi("VBTYZ’nin bağlı ortaklığı Disnet, Hollanda’da Disnet Europe B.V.’yi kurdu ve BMC ürünleri için 17 Doğu Avrupa ülkesinde 2030 sonuna kadar distribütörlük yetkisi aldı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "VBTYZ BMC Ürünleri İçin 17 Doğu Avrupa Ülkesinde Distribütör Oldu",
    description:
      "Disnet Europe B.V., 31 Aralık 2030’a kadar 17 Doğu Avrupa ülkesinde BMC ürün ve çözümlerinin dağıtımını ve satış geliştirmesini yürütecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "VBTYZ Disnet Europe BMC 17 Doğu Avrupa ülkesi distribütörlük anlaşması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VBTYZ BMC Ürünleri İçin 17 Doğu Avrupa Ülkesinde Distribütör Oldu",
    description:
      "Yetki 31 Aralık 2030’a kadar geçerli olacak.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Yetki Alanı", deger: "17 Ülke", aciklama: "Doğu Avrupa" },
  { baslik: "Süre", deger: "2030 Sonu", aciklama: "31 Aralık 2030’a kadar" },
  { baslik: "Yeni Şirket", deger: "Disnet Europe", aciklama: "Hollanda merkezli" },
  { baslik: "İş Ortağı", deger: "BMC Software", aciklama: "Bölgesel distribütörlük" },
];

const anaDetaylar = [
  ["Şirket", "VBT Yazılım A.Ş."],
  ["Hisse Kodu", "VBTYZ"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "18:33:07"],
  ["Bağlı Ortaklık", "Disnet Teknoloji A.Ş."],
  ["Yeni Kurulan Şirket", "Disnet Europe B.V."],
  ["Merkez", "Hollanda"],
  ["Ortaklık Oranı", "%100"],
  ["İş Ortağı", "BMC Software Inc."],
  ["Tedarikçi", "BMC Software Distribution B.V."],
  ["Yetki Süresi", "31.12.2030’a kadar"],
  ["Yetkili Ülke Sayısı", "17"],
  ["Faaliyetler", "Dağıtım, satış geliştirme, iş ortaklığı yönetimi ve profesyonel hizmetler"],
  ["Şirket Faaliyetlerine Etki", "Olumlu"],
];

const ulkeler = [
  "Yunanistan",
  "Litvanya",
  "Arnavutluk",
  "Bosna Hersek",
  "Slovenya",
  "Kıbrıs",
  "Letonya",
  "Karadağ",
  "Kuzey Makedonya",
  "Polonya",
  "Romanya",
  "Bulgaristan",
  "Slovakya",
  "Sırbistan",
  "Hırvatistan",
  "Çek Cumhuriyeti",
  "Macaristan",
];

const surec = [
  {
    baslik: "Hollanda’da yeni şirket kuruldu",
    aciklama:
      "VBTYZ’nin %100 bağlı ortaklığı Disnet Teknoloji, Avrupa operasyonlarını yönetmek için Disnet Europe B.V.’yi kurdu.",
  },
  {
    baslik: "BMC ile bölgesel anlaşma imzalandı",
    aciklama:
      "Disnet Europe, BMC ürün ve çözümlerinin 17 Doğu Avrupa ülkesindeki dağıtımı ve satış geliştirmesi için yetkilendirildi.",
  },
  {
    baslik: "Yetki 2030 sonuna kadar geçerli",
    aciklama:
      "Distribütörlük yetkisi 31 Aralık 2030 tarihine kadar devam edecek.",
  },
  {
    baslik: "Yeni gelir kanalları hedefleniyor",
    aciklama:
      "Grup; lisans, bakım, profesyonel hizmetler ve yönetilen hizmet gelirlerini büyütmeyi hedefliyor.",
  },
];

const nedenOnemli = [
  {
    baslik: "Avrupa’da kalıcı organizasyon",
    aciklama:
      "Hollanda merkezli yapı, VBTYZ grubunun Avrupa pazarındaki faaliyetlerini tek merkezden yönetmesine imkân sağlayacak.",
  },
  {
    baslik: "17 ülkelik dağıtım ağı",
    aciklama:
      "Anlaşma, şirketin bölgesel müşteri tabanını ve iş ortaklığı ağını genişletme potansiyeli taşıyor.",
  },
  {
    baslik: "Tekrarlayan gelir fırsatı",
    aciklama:
      "Lisans, bakım ve yönetilen hizmet gelirleri şirket için tekrarlayan gelir modeli oluşturabilir.",
  },
  {
    baslik: "Tutar açıklanmadı",
    aciklama:
      "Anlaşmanın ciro ve kâr üzerindeki net etkisi, satış hacmi oluşmadan hesaplanamıyor.",
  },
];

const finansalOkuma = [
  "Anlaşma bedeli açıklanmadığı için kısa vadeli finansal katkı hesaplanamıyor.",
  "Lisans ve bakım gelirleri tekrarlayan gelir yaratabilir.",
  "Profesyonel hizmet ve yönetilen hizmetler kârlılığı destekleyebilir.",
  "Yeni pazarlardaki satış performansı ülke bazında oluşacak talebe bağlı.",
  "Avrupa yapılanmasının ilk aşamada operasyonel gider yaratması mümkün.",
];

const hisseOkumasi = [
  {
    baslik: "Stratejik olarak pozitif",
    aciklama:
      "17 ülkeyi kapsayan uzun süreli distribütörlük, şirketin uluslararası büyüme hedefini destekliyor.",
  },
  {
    baslik: "Finansal katkı zamanla görülecek",
    aciklama:
      "Haber güçlü bir büyüme çerçevesi sunuyor ancak satış, ciro ve kâr etkisi henüz açıklanmadı.",
  },
  {
    baslik: "Yeni sözleşmeler izlenecek",
    aciklama:
      "Ülke bazında yeni müşteri ve iş ortaklığı açıklamaları haberin değerini artırabilir.",
  },
];

const riskler = [
  "Distribütörlük anlaşmasının parasal büyüklüğü açıklanmadı.",
  "Yeni pazarlara giriş süreci beklenenden yavaş ilerleyebilir.",
  "Kurulum ve operasyon giderleri kısa vadede maliyet yaratabilir.",
  "Yerel rekabet satış performansını sınırlayabilir.",
  "Gelir katkısı ülke bazındaki lisans ve hizmet satışlarına bağlı.",
];

const takipBasliklari = [
  "Disnet Europe’un ilk müşteri sözleşmeleri",
  "BMC ürünlerinin ülke bazındaki satışları",
  "Lisans ve bakım gelirleri",
  "Yeni iş ortaklığı açıklamaları",
  "Avrupa operasyonlarının ciroya katkısı",
  "2026 ve 2027 finansal sonuçları",
];

const seoSorular = [
  {
    soru: "VBTYZ ne açıkladı?",
    cevap:
      "VBTYZ, bağlı ortaklığı Disnet’in Hollanda’da Disnet Europe B.V.’yi kurduğunu ve BMC ürünleri için 17 Doğu Avrupa ülkesinde distribütörlük yetkisi aldığını açıkladı.",
  },
  {
    soru: "Distribütörlük anlaşması ne zamana kadar geçerli?",
    cevap:
      "Yetki 31 Aralık 2030 tarihine kadar geçerli olacak.",
  },
  {
    soru: "Anlaşma kaç ülkeyi kapsıyor?",
    cevap:
      "Anlaşma 17 Doğu Avrupa ülkesini kapsıyor.",
  },
  {
    soru: "Disnet Europe hangi faaliyetleri yürütecek?",
    cevap:
      "Dağıtım, satış geliştirme, iş ortaklığı yönetimi ve ilgili profesyonel hizmet faaliyetlerini yürütecek.",
  },
  {
    soru: "VBTYZ haberi hisse için nasıl okunmalı?",
    cevap:
      "Uluslararası büyüme stratejisi açısından pozitif. Ancak anlaşma bedeli ve beklenen finansal katkı açıklanmadığı için etkinin büyüklüğü henüz net değil.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "VBTYZ BMC Ürünleri İçin 17 Doğu Avrupa Ülkesinde Distribütör Oldu",
  description:
    "VBTYZ’nin bağlı ortaklığı Disnet, Hollanda’da Disnet Europe B.V.’yi kurdu ve BMC ürünleri için 17 Doğu Avrupa ülkesinde 2030 sonuna kadar distribütörlük yetkisi aldı.",
  image: haberGorsel,
  datePublished: "2026-07-20T18:33:07+03:00",
  dateModified: "2026-07-20T18:33:07+03:00",
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

export default function VbtyzDisnetEuropePage() {
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
              src="/vbtyz-disnet-europe-bmc-17-dogu-avrupa-ulkesi-distributorluk-anlasmasi.webp"
              alt="VBTYZ Disnet Europe BMC 17 Doğu Avrupa ülkesi distribütörlük anlaşması"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              VBTYZ BMC Ürünleri İçin 17 Doğu Avrupa Ülkesinde Distribütör Oldu
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
                VBT Yazılım A.Ş. (<strong>VBTYZ</strong>), %100 bağlı ortaklığı
                Disnet Teknoloji A.Ş.’nin Avrupa operasyonlarını yönetmek için
                Hollanda’da <strong>Disnet Europe B.V.</strong> şirketini
                kurduğunu açıkladı.
              </p>

              <p>
                Yeni şirket, BMC Software ile imzalanan anlaşma kapsamında
                <strong> 17 Doğu Avrupa ülkesinde</strong> BMC ürün ve
                çözümlerinin dağıtımı, satış geliştirmesi ve profesyonel hizmet
                faaliyetleri için <strong>31 Aralık 2030’a kadar</strong>
                yetkilendirildi.
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
                  Disnet Europe B.V., BMC ürün ve çözümlerinin 17 ülkedeki
                  dağıtımı, satış geliştirmesi, iş ortaklığı yönetimi ve ilgili
                  profesyonel hizmet faaliyetlerini yürütmek üzere bölgesel
                  distribütör oldu.
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

              <Section title="Yetki kapsamındaki 17 ülke">
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {ulkeler.map((ulke) => (
                    <div
                      key={ulke}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700"
                    >
                      {ulke}
                    </div>
                  ))}
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
                      className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-950"
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

              <Section title="Dikkat edilmesi gereken riskler">
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

              <Section title="VBTYZ distribütörlük anlaşması hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1635151"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  VBTYZ — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="VBTYZ BMC Ürünleri İçin 17 Doğu Avrupa Ülkesinde Distribütör Oldu"
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