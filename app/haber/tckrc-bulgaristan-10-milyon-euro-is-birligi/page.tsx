import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "tckrc-bulgaristan-10-milyon-euro-is-birligi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/tckrc-bulgaristan-10-milyon-euro-is-birligi.webp";

export const metadata: Metadata = {
  title: "TCKRC Bulgaristan’da 10 Milyon Euroluk İş Birliği Açıkladı",
  description:
    "TCKRC, Bulgaristan’da hasarlı otokorkulukların bakım, onarım ve acil müdahale çalışmaları için iş birliği sözleşmesi imzaladı. Toplam iş hacminin yaklaşık 10 milyon euroya ulaşması bekleniyor.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TCKRC Bulgaristan’da 10 Milyon Euroluk İş Birliği Açıkladı",
    description:
      "Kıraç Galvaniz, Bulgaristan pazarında faaliyetlerin kesintisiz sürmesi için yeni iş birliği sözleşmesi imzaladı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TCKRC Bulgaristan 10 milyon euro iş birliği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCKRC Bulgaristan’da 10 Milyon Euroluk İş Birliği Açıkladı",
    description:
      "TCKRC, Bulgaristan’da otokorkuluk bakım ve acil müdahale çalışmaları için iş birliği sözleşmesi imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Beklenen İş Hacmi",
    deger: "10 Milyon EUR",
    aciklama: "Yaklaşık toplam iş hacmi",
  },
  {
    baslik: "Pazar",
    deger: "Bulgaristan",
    aciklama: "Otokorkuluk bakım ve onarım çalışmaları",
  },
  {
    baslik: "Başlangıç Tarihi",
    deger: "13.07.2026",
    aciklama: "İş ilişkisinin başlaması öngörülen tarih",
  },
  {
    baslik: "Faaliyet Etkisi",
    deger: "Ciroya Katkı",
    aciklama: "Şirket açıklamasına göre olumlu etki bekleniyor",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TCKRC Bulgaristan’da 10 Milyon Euroluk İş Birliği Açıkladı",
  description:
    "TCKRC, Bulgaristan’da hasarlı otokorkulukların bakım, onarım ve acil müdahale çalışmaları için iş birliği sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-06T08:30:00+03:00",
  dateModified: "2026-07-06T08:30:00+03:00",
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

export default function TckrcBulgaristanIsBirligiPage() {
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
              src="/tckrc-bulgaristan-10-milyon-euro-is-birligi.webp"
              alt="TCKRC Bulgaristan 10 milyon euro iş birliği"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TCKRC Bulgaristan’da 10 Milyon Euroluk İş Birliği Açıkladı
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
                Kıraç Galvaniz Telekomünikasyon Metal Makine İnşaat Elektrik
                Sanayi ve Ticaret A.Ş. (<strong>TCKRC</strong>), Bulgaristan’da
                yeni iş ilişkisine başladığını duyurdu. Şirket, Bulgaristan’da
                mukim bir şirket ile hasarlı otokorkulukların bakım, onarım ve
                acil müdahale çalışmalarına yönelik iş birliği sözleşmesi
                imzaladı.
              </p>

              <p>
                KAP açıklamasında, söz konusu iş birliği kapsamında toplam iş
                hacminin yaklaşık <strong>10.000.000 euro</strong> seviyesine
                ulaşmasının beklendiği belirtildi. İş ilişkisinin başlamasının
                öngörüldüğü tarih ise <strong>13 Temmuz 2026</strong> olarak
                açıklandı.
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
                  TCKRC, Bulgaristan Karayolları Altyapı Ajansı tarafından
                  yürütülecek yeni ihale süreci başlatılıp sonuçlanıncaya kadar
                  ülkedeki hasarlı otokorkulukların bakım, onarım ve acil müdahale
                  çalışmalarının yürütülmesi amacıyla Bulgaristan’da yerleşik bir
                  şirketle iş birliği sözleşmesi imzaladı.
                </p>
              </Section>

              <Section title="Sözleşmenin kapsamı">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Açıklamaya göre iş birliği; Bulgaristan’daki hasarlı
                  otokorkulukların bakım, onarım ve acil müdahale çalışmalarını
                  kapsıyor. Müşteri adı KAP bildiriminde açıklanmadı. Şirket,
                  iş ilişkisinin faaliyetlere etkisini “ciroya olumlu katkı
                  sağlanması beklenmektedir” ifadesiyle duyurdu.
                </p>

                <div className="mt-5 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          İş İlişkisi
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Bulgaristan’da otokorkuluk bakım, onarım ve acil müdahale
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Beklenen Toplam İş Hacmi
                        </th>
                        <td className="px-4 py-3 font-bold text-emerald-700">
                          Yaklaşık 10.000.000 EUR
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Başlangıç Tarihi
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          13.07.2026
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Şirketin Faaliyet Etkisi Açıklaması
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Ciroya olumlu katkı sağlanması beklenmektedir
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  TCKRC açısından açıklanan iş birliği, Bulgaristan pazarındaki
                  faaliyetlerin devamlılığı bakımından önemli bir gelişme olarak
                  öne çıkıyor. Şirket, bu anlaşma ile Bulgaristan pazarındaki
                  faaliyetlerini kesintisiz sürdürmeye devam edeceğini ve
                  başlatılacak yeni ihale sürecini yakından takip ettiğini belirtti.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Yaklaşık 10 milyon euroluk beklenen iş hacmi, şirketin yurt dışı
                  faaliyetleri ve döviz bazlı gelir görünümü açısından takip
                  edilecek bir başlık oluşturuyor. Buna karşın gelir etkisinin
                  dönemsel finansallara nasıl yansıyacağı, işin gerçekleşme takvimi
                  ve yeni ihale süreciyle birlikte netleşecektir.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Kıraç Galvaniz; galvanizli çelik, otoyol güvenlik ekipmanları,
                  metal imalat, telekomünikasyon ve altyapı alanlarına yönelik
                  üretim faaliyetleriyle öne çıkan şirketlerden biridir. Şirketin
                  faaliyet performansı; altyapı yatırımları, kamu ve özel sektör
                  projeleri, ihracat pazarları, hammadde maliyetleri ve proje
                  teslimat takvimleriyle yakından ilişkilidir.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bildirim, TCKRC için yurt dışı faaliyetlerin sürdürülmesi ve
                  Bulgaristan pazarında devamlılık sağlanması açısından pozitif
                  okunabilecek bir gelişme niteliğinde. Toplam iş hacminin yaklaşık
                  10 milyon euro seviyesine ulaşmasının beklenmesi, haberin finansal
                  önemini artırıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Buna karşılık açıklama yeni ihale süreci tamamlanana kadar
                  yürütülecek iş birliği niteliğinde olduğu için yatırımcıların
                  nihai gelir katkısını, tahsilat ve iş programını, ayrıca yeni
                  ihale sürecinden gelecek gelişmeleri takip etmesi gerekir.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki aşamada iş birliğinin fiili başlangıcı, yeni ihale
                  sürecinin başlatılması, ihale sonucu ve iş hacminin finansal
                  tablolara yansıması izlenecek. Şirketin Bulgaristan pazarındaki
                  devam eden faaliyetlerine ilişkin yeni KAP açıklamaları haberin
                  etkisini belirleyecek.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1624320"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TCKRC Bulgaristan’da 10 Milyon Euroluk İş Birliği Açıkladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Açıklanan iş hacmi şirketin beklentisine dayanmaktadır;
                nihai finansal etki işin gerçekleşme takvimi, tahsilat süreci ve
                şirketin sonraki KAP açıklamalarıyla birlikte izlenmelidir.
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
