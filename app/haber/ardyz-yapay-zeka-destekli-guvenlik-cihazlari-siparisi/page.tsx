import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "ardyz-yapay-zeka-destekli-guvenlik-cihazlari-siparisi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/ardyz-yapay-zeka-destekli-guvenlik-cihazlari-siparisi.webp";

export const metadata: Metadata = {
  title: "ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sistem Siparişi Aldı",
  description:
    "ARDYZ, son kullanıcısı kamu tüzel kişisi olan bir proje kapsamında KDV dahil 3,45 milyon euro tutarında yapay zekâ destekli güvenlik cihazları ve dijital dönüşüm sistemleri siparişi aldığını açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sistem Siparişi Aldı",
    description:
      "ARDYZ, yapay zekâ destekli güvenlik cihazları ve toplu taşıma araçlarının dijital dönüşüm sistemleri projesi için 3,45 milyon euro tutarında sipariş aldı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ARDYZ yapay zekâ destekli güvenlik cihazları siparişi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sistem Siparişi Aldı",
    description:
      "ARDYZ, kamu son kullanıcılı proje kapsamında KDV dahil 3,45 milyon euro tutarında sipariş aldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Sipariş Tutarı",
    deger: "3,45 Mn Euro",
    aciklama: "KDV dahil toplam sipariş bedeli",
  },
  {
    baslik: "TL Karşılığı",
    deger: "184,9 Mn TL",
    aciklama: "KAP açıklamasında yer alan tutar",
  },
  {
    baslik: "Proje Alanı",
    deger: "Yapay Zekâ",
    aciklama: "Güvenlik cihazları ve dijital dönüşüm sistemleri",
  },
  {
    baslik: "Başlangıç Tarihi",
    deger: "07.07.2026",
    aciklama: "İş ilişkisinin başlaması öngörülen tarih",
  },
];

const projeDetaylari = [
  {
    etiket: "Şirket",
    deger: "ARD Grup Bilişim Teknolojileri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ARDYZ",
  },
  {
    etiket: "Bildirim Konusu",
    deger: "Yeni iş ilişkisi",
  },
  {
    etiket: "Sipariş Türü",
    deger:
      "Yapay zekâ destekli güvenlik cihazları ile toplu taşıma araçlarının dijital dönüşüm sistemleri projesi",
  },
  {
    etiket: "Son Kullanıcı",
    deger: "Kamu tüzel kişisi",
  },
  {
    etiket: "Sipariş Alınan Taraf",
    deger: "Özel şirket",
  },
  {
    etiket: "Tutar",
    deger: "KDV dahil 3.454.290 euro",
  },
  {
    etiket: "TL Karşılığı",
    deger: "184.911.253 TL",
  },
  {
    etiket: "Faaliyetlere Etki",
    deger: "Olumlu etkilemesi beklenmektedir",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sistem Siparişi Aldı",
  description:
    "ARDYZ, son kullanıcısı kamu tüzel kişisi olan bir proje kapsamında KDV dahil 3,45 milyon euro tutarında yapay zekâ destekli güvenlik cihazları ve dijital dönüşüm sistemleri siparişi aldığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-08T09:15:10+03:00",
  dateModified: "2026-07-08T09:15:10+03:00",
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

export default function ArdyzYapayZekaDestekliSiparisPage() {
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
              src="/ardyz-yapay-zeka-destekli-guvenlik-cihazlari-siparisi.webp"
              alt="ARDYZ yapay zekâ destekli güvenlik cihazları siparişi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sistem Siparişi Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
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
                ARD Grup Bilişim Teknolojileri A.Ş. (<strong>ARDYZ</strong>),
                yapay zekâ destekli dijital dönüşüm sistemleri projesi kapsamında
                yeni sipariş aldığını açıkladı. Siparişin son kullanıcısı kamu
                tüzel kişisi olurken, sipariş özel bir şirketten alındı.
              </p>

              <p>
                KAP açıklamasına göre siparişin toplam tutarı{" "}
                <strong>KDV dahil 3.454.290 euro</strong> olarak açıklandı. TL
                karşılığı ise <strong>184.911.253 TL</strong> seviyesinde yer aldı.
                Şirket, alınan siparişin ciroya ve faaliyetlere olumlu katkı
                sağlamasının beklendiğini duyurdu.
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
                  ARDYZ, “Yapay Zekâ Destekli Güvenlik Cihazları ile Toplu
                  Taşıma Araçlarının Dijital Dönüşüm Sistemleri Projesi” işi
                  kapsamında KDV dahil 3.454.290 euro tutarında sipariş aldı.
                  İş ilişkisinin başlaması öngörülen tarih 7 Temmuz 2026 olarak
                  açıklandı.
                </p>
              </Section>

              <Section title="Siparişin ana detayları">
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

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sipariş tutarı, ARDYZ için operasyonel tarafta pozitif
                  okunabilecek bir gelişme. Özellikle yapay zekâ destekli güvenlik
                  cihazları ve toplu taşıma araçlarının dijital dönüşümü başlığı,
                  şirketin teknoloji odaklı iş alanlarıyla uyumlu görünüyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Açıklamada son kullanıcının kamu tüzel kişisi olduğu belirtilse
                  de müşteri unvanı paylaşılmadı. Bu nedenle haberin etkisi,
                  siparişin teslim süreci, tahsilat takvimi ve benzer yeni
                  siparişlerin gelip gelmeyeceğiyle birlikte izlenecek.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bilişim ve teknoloji şirketlerinde yeni iş ilişkileri, ciro
                  görünümü kadar referans proje etkisi nedeniyle de takip edilir.
                  ARDYZ’nin aldığı sipariş hem euro bazlı tutarı hem de yapay zekâ
                  destekli sistemler başlığı nedeniyle öne çıkıyor.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki süreçte projenin teslim takvimi, olası ek
                  siparişler, tahsilat bilgisi ve siparişin finansal sonuçlara ne
                  zaman yansıyacağı takip edilecek. Şirket, siparişin ciroya ve
                  faaliyetlere olumlu katkı sağlamasını beklediğini açıkladı.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1627660"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  ARDYZ — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sistem Siparişi Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Yeni iş ilişkilerinin finansal etkisi,
                teslimat, tahsilat ve dönemsel finansal sonuçlarla birlikte
                değerlendirilmelidir.
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
