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

const slug = "fonet-aydin-il-saglik-mudurlugu-198-milyon-tl-sbys-ihalesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/fonet-aydin-il-saglik-mudurlugu-198-milyon-tl-sbys-ihalesi.webp";

export const metadata: Metadata = {
  title: "FONET Aydın İl Sağlık Müdürlüğü 198,5 Milyon TL’lik SBYS İhalesini Kazandı",
  description:
    "FONET, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı ihalesini 198.476.457 TL bedelle kazandığını açıkladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "FONET Aydın İl Sağlık Müdürlüğü 198,5 Milyon TL’lik SBYS İhalesini Kazandı",
    description:
      "FONET, 36 aylık SBYS hizmet alımı ihalesini kazandı. Yasal itiraz süreci sonrası sözleşme imzalama aşamasına geçilecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "FONET Aydın İl Sağlık Müdürlüğü 198,5 milyon TL SBYS ihalesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FONET 198,5 Milyon TL’lik SBYS İhalesini Kazandı",
    description:
      "Aydın İl Sağlık Müdürlüğü’nün 36 aylık SBYS ihalesini FONET kazandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İhale Bedeli",
    deger: "198,48 Mn TL",
    aciklama: "Açıklanan ihale tutarı",
  },
  {
    baslik: "Hizmet Süresi",
    deger: "36 Ay",
    aciklama: "SBYS hizmet alımı",
  },
  {
    baslik: "İhaleyi Açan",
    deger: "Aydın İl Sağlık",
    aciklama: "İl Sağlık Müdürlüğü",
  },
  {
    baslik: "Sonraki Aşama",
    deger: "Sözleşme",
    aciklama: "İtiraz süreci sonrası",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Fonet Bilgi Teknolojileri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "FONET",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "10:22:48",
  },
  {
    etiket: "Bildirim Türü",
    deger: "İhale Süreci / Sonucu",
  },
  {
    etiket: "Önceki Açıklama Tarihi",
    deger: "30.06.2026",
  },
  {
    etiket: "İhale Konusu",
    deger: "36 Aylık Sağlık Bilgi Yönetim Sistemi (SBYS) Hizmet Alımı",
  },
  {
    etiket: "İhaleyi Açan Taraf",
    deger: "Aydın İl Sağlık Müdürlüğü",
  },
  {
    etiket: "Teklif Verme Tarihi",
    deger: "30.06.2026",
  },
  {
    etiket: "İhalenin Sonuçlandığı Tarih",
    deger: "16.07.2026",
  },
  {
    etiket: "İhale Sonucu",
    deger: "İhaleyi FONET kazandı",
  },
  {
    etiket: "İhale Bedeli",
    deger: "198.476.457,00 TL",
  },
];

const surec = [
  {
    tarih: "30.06.2026",
    baslik: "İhaleye teklif verildi",
    aciklama:
      "FONET, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık SBYS hizmet alımı ihalesine teklif verdiğini duyurmuştu.",
  },
  {
    tarih: "16.07.2026",
    baslik: "İhale sonucu açıklandı",
    aciklama:
      "Şirket, ihalenin sonuçlandığını ve ihaleyi kazandığını KAP üzerinden paylaştı.",
  },
  {
    tarih: "Sonraki Aşama",
    baslik: "Yasal itiraz süreci beklenecek",
    aciklama:
      "Açıklamaya göre yasal itiraz süreci beklenecek, ardından sözleşme imzalama aşamasına geçilecek.",
  },
];

const nedenOnemli = [
  {
    baslik: "Kamu sağlık bilişimi tarafında yeni iş",
    aciklama:
      "FONET’in faaliyet alanı açısından SBYS ihaleleri doğrudan ana iş koluyla bağlantılı. Bu nedenle Aydın İl Sağlık Müdürlüğü ihalesinin kazanılması şirketin operasyonel görünümü açısından önemli.",
  },
  {
    baslik: "36 aylık hizmet süresi var",
    aciklama:
      "İhalenin 36 aylık olması, gelir katkısının tek seferlik değil dönemlere yayılan bir hizmet yapısıyla oluşabileceğini gösteriyor.",
  },
  {
    baslik: "Tutar 198,5 milyon TL seviyesinde",
    aciklama:
      "198.476.457 TL’lik ihale bedeli, şirket açısından ayrı haber yapılabilecek büyüklükte bir iş ilişkisine işaret ediyor.",
  },
  {
    baslik: "Sözleşme henüz imzalanmadı",
    aciklama:
      "KAP açıklamasında yasal itiraz sürecinin bekleneceği ve sonrasında sözleşme imzalama aşamasına geçileceği belirtildi. Bu nedenle kesin süreçte sözleşme imzası ayrıca takip edilmeli.",
  },
];

const finansalOkuma = [
  "İhale bedeli 198.476.457 TL olarak açıklandı.",
  "Hizmet süresi 36 ay olduğu için gelir katkısı zamana yayılabilir.",
  "KAP açıklamasında son gelir tablosundaki brüt satış hasılatına oran verilmedi.",
  "Sözleşme imzası sonrası işin finansallara yansıma takvimi daha net okunabilir.",
  "Kamu sağlık bilişim projeleri, FONET’in ana faaliyet alanıyla doğrudan bağlantılı olduğu için haber operasyonel açıdan pozitif.",
  "Kâr etkisi; sözleşme koşulları, hizmet maliyetleri, personel/altyapı giderleri ve tahsilat takvimiyle netleşir.",
];

const hisseOkumasi = [
  {
    baslik: "Kısa vadeli haber etkisi",
    aciklama:
      "FONET’in 198,5 milyon TL’lik ihaleyi kazanması kısa vadede pozitif algı yaratabilecek bir gelişme.",
  },
  {
    baslik: "Asıl takip noktası",
    aciklama:
      "Yasal itiraz süreci sonrası sözleşmenin imzalanması gerekiyor. Sözleşme imzası, haberin tamamlanma aşaması açısından ayrı önem taşıyacak.",
  },
  {
    baslik: "Finansal etki",
    aciklama:
      "36 aylık hizmet süresi nedeniyle gelir katkısı dönemlere yayılabilir. Bu nedenle etkiyi tek çeyrek üzerinden değil sözleşme süresi boyunca okumak daha doğru olur.",
  },
];

const takipBasliklari = [
  "Yasal itiraz sürecinin tamamlanması",
  "Sözleşme imza tarihinin açıklanması",
  "İhalenin finansallara hangi dönemden itibaren yansıyacağı",
  "Hizmet süresi boyunca tahsilat ve maliyet yapısı",
  "FONET’in yeni kamu sağlık bilişim ihaleleri",
  "Şirketin brüt kârlılık ve faaliyet kârlılığı görünümü",
];

const seoSorular = [
  {
    soru: "FONET ne açıkladı?",
    cevap:
      "FONET, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı ihalesini kazandığını açıkladı.",
  },
  {
    soru: "FONET ihale bedeli kaç TL?",
    cevap:
      "KAP açıklamasına göre ihale bedeli 198.476.457,00 TL olarak duyuruldu.",
  },
  {
    soru: "FONET hangi ihaleyi kazandı?",
    cevap:
      "FONET, Aydın İl Sağlık Müdürlüğü’nün 36 aylık Sağlık Bilgi Yönetim Sistemi yani SBYS hizmet alımı ihalesini kazandı.",
  },
  {
    soru: "FONET ihalesinde sıradaki süreç ne?",
    cevap:
      "Şirket açıklamasına göre yasal itiraz süreci beklenecek, ardından sözleşme imzalama aşamasına geçilecek.",
  },
  {
    soru: "FONET haberi hisse için nasıl okunmalı?",
    cevap:
      "İhale sonucu şirketin ana faaliyet alanıyla bağlantılı olduğu için pozitif okunabilir. Ancak sözleşme imzası, hizmet maliyetleri ve gelir katkısının finansallara yansıması takip edilmeli.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "FONET Aydın İl Sağlık Müdürlüğü 198,5 Milyon TL’lik SBYS İhalesini Kazandı",
  description:
    "FONET, Aydın İl Sağlık Müdürlüğü tarafından yapılan 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı ihalesini 198.476.457 TL bedelle kazandığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-16T10:22:48+03:00",
  dateModified: "2026-07-16T10:22:48+03:00",
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

export default function FonetAydinSbysIhalesiPage() {
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
              src="/fonet-aydin-il-saglik-mudurlugu-198-milyon-tl-sbys-ihalesi.webp"
              alt="FONET Aydın İl Sağlık Müdürlüğü 198,5 milyon TL SBYS ihalesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              FONET Aydın İl Sağlık Müdürlüğü 198,5 Milyon TL’lik SBYS İhalesini Kazandı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                İhale Sonucu
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
                Fonet Bilgi Teknolojileri A.Ş. (<strong>FONET</strong>), Aydın İl
                Sağlık Müdürlüğü tarafından yapılan 36 aylık Sağlık Bilgi Yönetim
                Sistemi hizmet alımı ihalesini kazandığını açıkladı.
              </p>

              <p>
                KAP açıklamasına göre ihale bedeli{" "}
                <strong>198.476.457,00 TL</strong> oldu. Şirket, yasal itiraz
                sürecinin bekleneceğini ve ardından sözleşme imzalama aşamasına
                geçileceğini bildirdi.
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
                  FONET, 30 Haziran 2026 tarihinde teklif verdiğini duyurduğu
                  Aydın İl Sağlık Müdürlüğü SBYS ihalesinin sonuçlandığını
                  açıkladı. Sonuçlanan ihaleyi şirket kazandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İhale konusu 36 aylık Sağlık Bilgi Yönetim Sistemi hizmet alımı.
                  Bu yapı, FONET’in sağlık bilişim çözümleri alanındaki ana
                  faaliyetleriyle doğrudan bağlantılı bir iş kalemi.
                </p>
              </Section>

              <Section title="İhalenin ana detayları">
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

              <Section title="İhale süreci">
                <div className="grid gap-4">
                  {surec.map((item) => (
                    <div
                      key={item.tarih}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-blue-700">
                        {item.tarih}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-900">
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
                  Bu ihale sonucu, doğrudan gelir potansiyeli taşıyan bir kamu
                  sağlık bilişim işi olarak okunmalı. Ancak açıklamada sözleşme
                  imzasının yasal itiraz süreci sonrasında yapılacağı belirtildiği
                  için finansal etki açısından sözleşme aşaması ayrıca izlenmeli.
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

              <Section title="FONET ihale sonucu hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1633973"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  FONET — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="FONET Aydın İl Sağlık Müdürlüğü 198,5 Milyon TL’lik SBYS İhalesini Kazandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. İhale sonuçlarının finansal etkisi; sözleşme
                imzası, hizmet süresi, maliyet yapısı, tahsilat takvimi ve şirketin
                sonraki finansal sonuçlarıyla birlikte değerlendirilmelidir.
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