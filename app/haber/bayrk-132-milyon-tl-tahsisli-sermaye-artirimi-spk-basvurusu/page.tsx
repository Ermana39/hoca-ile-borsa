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

const slug = "bayrk-132-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/bayrk-132-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu.webp";

export const metadata: Metadata = {
  title: { absolute: "BAYRK 132 Milyon TL Tahsisli Artırım SPK Başvurusu" },
  description:
    seoAciklamasi("BAYRK, Kurt Taban Ayakkabı’nın 132 milyon TL tutarındaki şirket alacağına mahsup edilmek üzere tahsisli sermaye artırımı için SPK’ya başvurdu.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "BAYRK 132 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "Tahsisli paylar Kurt Taban Ayakkabı’ya ihraç edilecek. Pay adedi ve yeni sermaye, Borsa İstanbul’da belirlenecek satış fiyatına göre netleşecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "BAYRK 132 milyon TL tahsisli sermaye artırımı SPK başvurusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAYRK 132 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu",
    description:
      "Kurt Taban Ayakkabı’nın 132 milyon TL alacağı tahsisli pay ihracıyla sermayeye dönüştürülecek.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İşlem Tutarı",
    deger: "132 Mn TL",
    aciklama: "Toplam tahsisli satış bedeli",
  },
  {
    baslik: "Tahsis Edilecek Şirket",
    deger: "Kurt Taban",
    aciklama: "Alacağa mahsup yoluyla",
  },
  {
    baslik: "Mevcut Sermaye",
    deger: "250 Mn TL",
    aciklama: "249.999.992 TL",
  },
  {
    baslik: "Sonraki Aşama",
    deger: "SPK / BİST",
    aciklama: "Onay ve baz fiyat süreci",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Bayrak EBT Taban Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "BAYRK",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "19:25:12",
  },
  {
    etiket: "Yönetim Kurulu Karar Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Kayıtlı Sermaye Tavanı",
    deger: "1.249.000.000 TL",
  },
  {
    etiket: "Mevcut Çıkarılmış Sermaye",
    deger: "249.999.992 TL",
  },
  {
    etiket: "Tahsisli Satış Bedeli",
    deger: "132.000.000 TL",
  },
  {
    etiket: "Tahsis Edilecek Taraf",
    deger: "Kurt Taban Ayakkabı Sanayi Ticaret A.Ş.",
  },
  {
    etiket: "İhraç Edilecek Pay Grubu",
    deger: "B grubu, hamiline ve borsada işlem gören pay",
  },
  {
    etiket: "Satış Yöntemi",
    deger: "Halka arz edilmeksizin tahsisli satış",
  },
  {
    etiket: "Başvuru",
    deger: "SPK’ya elektronik başvuru yapıldı",
  },
];

const surecAdimlari = [
  {
    baslik: "Mevcut ortakların rüçhan hakları kısıtlanacak",
    aciklama:
      "Tahsisli sermaye artırımı kapsamında mevcut ortakların yeni pay alma haklarının tamamen kısıtlanmasına karar verildi.",
  },
  {
    baslik: "132 milyon TL’lik alacak sermayeye dönüştürülecek",
    aciklama:
      "Kurt Taban Ayakkabı’nın BAYRK’tan olan nakit ve muaccel alacağı, ihraç edilecek payların satış bedeline mahsup edilecek.",
  },
  {
    baslik: "Pay fiyatı Borsa İstanbul prosedürüne göre belirlenecek",
    aciklama:
      "Tahsisli satış fiyatı, Borsa İstanbul’un Toptan Alış Satış İşlemleri Prosedürü kapsamında hesaplanacak baz fiyat veya bunun üzerindeki bir seviyeden belirlenecek.",
  },
  {
    baslik: "Pay adedi ve yeni sermaye henüz kesin değil",
    aciklama:
      "İhraç edilecek nominal pay miktarı, 132 milyon TL toplam satış bedelinin belirlenecek pay fiyatına bölünmesiyle ortaya çıkacak.",
  },
  {
    baslik: "SPK onayı sonrası Borsa İstanbul’a başvurulacak",
    aciklama:
      "İhraç belgesinin SPK tarafından onaylanmasının ardından baz fiyat tespiti ve tahsisli satış için Borsa İstanbul süreci başlayacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "Şirket borcu özkaynağa dönüşecek",
    aciklama:
      "İşlemin tamamlanması halinde Kurt Taban Ayakkabı’ya olan 132 milyon TL tutarındaki borcun pay ihracıyla kapatılması hedefleniyor. Bu yapı şirketin borç kalemlerini azaltarak özkaynak tarafını güçlendirebilir.",
  },
  {
    baslik: "Nakit girişi beklenmiyor",
    aciklama:
      "Tahsisli satış bedeli, mevcut alacağa mahsup edilecek. Bu nedenle işlem şirket kasasına 132 milyon TL yeni nakit girişi sağlayan klasik bir sermaye artırımı değil.",
  },
  {
    baslik: "Mevcut ortaklar için sulanma etkisi oluşacak",
    aciklama:
      "Yeni paylar yalnızca Kurt Taban Ayakkabı’ya tahsis edileceği için mevcut ortakların şirketteki oransal payları azalacak.",
  },
  {
    baslik: "Kesin sermaye artış oranı henüz hesaplanamaz",
    aciklama:
      "Tahsisli satış fiyatı açıklanmadan kaç adet yeni pay ihraç edileceği ve çıkarılmış sermayenin hangi seviyeye ulaşacağı bilinmiyor.",
  },
];

const finansalOkuma = [
  "132 milyon TL’lik ortak alacağının sermayeye dönüştürülmesi planlanıyor.",
  "İşlem tamamlanırsa şirketin ilgili borç yükümlülüğü azalabilir.",
  "Özkaynak yapısı güçlenirken mevcut ortakların pay oranı sulanacak.",
  "Şirkete yeni nakit girişi olmayacak.",
  "Tahsisli satış fiyatı ne kadar yüksek olursa ihraç edilecek pay adedi o kadar düşük olacak.",
  "Finansal etki, SPK onayı ve Borsa İstanbul tarafından belirlenecek fiyat sonrası netleşecek.",
];

const hisseOkumasi = [
  {
    baslik: "Bilanço açısından kısmen pozitif",
    aciklama:
      "Borç niteliğindeki ortak alacağının sermayeye dönüştürülmesi, şirketin finansal yapısını ve özkaynak görünümünü destekleyebilir.",
  },
  {
    baslik: "Sulanma etkisi nedeniyle dengeli okunmalı",
    aciklama:
      "Mevcut yatırımcılar yeni pay alma hakkı kullanamayacağı için yeni pay ihracı sonrasında ortaklık oranlarında sulanma oluşacak.",
  },
  {
    baslik: "Fiyat açıklaması kritik",
    aciklama:
      "Tahsisli satış fiyatı, çıkarılacak pay miktarını ve sulanmanın boyutunu belirleyeceği için hisse üzerindeki net etkinin en önemli unsuru olacak.",
  },
];

const riskler = [
  "Tahsisli satış fiyatı henüz belli değil.",
  "İhraç edilecek pay adedi ve yeni sermaye tutarı kesinleşmedi.",
  "Mevcut ortakların pay oranlarında sulanma oluşacak.",
  "İşlem şirkete yeni nakit sağlamayacak.",
  "SPK veya Borsa İstanbul süreçlerinde koşullar değişebilir.",
  "Tahsis edilen tarafın şirketteki pay oranı belirgin şekilde artabilir.",
];

const takipBasliklari = [
  "SPK’nın ihraç belgesine ilişkin kararı",
  "Borsa İstanbul baz fiyat tespiti",
  "Tahsisli satış fiyatı",
  "İhraç edilecek yeni pay adedi",
  "Artırım sonrası çıkarılmış sermaye",
  "Kurt Taban Ayakkabı’nın işlem sonrası ortaklık oranı",
  "Mevcut pay sahiplerindeki sulanma oranı",
];

const seoSorular = [
  {
    soru: "BAYRK ne açıkladı?",
    cevap:
      "BAYRK, Kurt Taban Ayakkabı’nın 132 milyon TL tutarındaki şirket alacağına mahsup edilmek üzere tahsisli sermaye artırımı yapılması için SPK’ya başvurduğunu açıkladı.",
  },
  {
    soru: "BAYRK tahsisli sermaye artırımı kaç TL?",
    cevap:
      "Tahsisli satışın toplam bedeli 132.000.000 TL olarak belirlendi.",
  },
  {
    soru: "BAYRK hisseleri kime tahsis edilecek?",
    cevap:
      "İhraç edilecek B grubu payların tamamı Kurt Taban Ayakkabı Sanayi Ticaret A.Ş.’ye tahsis edilecek.",
  },
  {
    soru: "BAYRK’a 132 milyon TL nakit girişi olacak mı?",
    cevap:
      "Hayır. Satış bedeli Kurt Taban Ayakkabı’nın şirketten olan nakit ve muaccel alacağına mahsup edilecek.",
  },
  {
    soru: "BAYRK’ın yeni sermayesi kaç TL olacak?",
    cevap:
      "Yeni sermaye henüz kesin değil. İhraç edilecek pay adedi, Borsa İstanbul prosedürüne göre belirlenecek tahsisli satış fiyatına bağlı olacak.",
  },
  {
    soru: "BAYRK haberi hisse için nasıl okunmalı?",
    cevap:
      "Borçların özkaynağa dönüştürülmesi bilanço açısından olumlu olabilir. Ancak yeni nakit girişi olmaması ve mevcut ortaklarda sulanma yaratması nedeniyle haber dengeli okunmalı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "BAYRK 132 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu",
  description:
    "BAYRK, Kurt Taban Ayakkabı’nın 132 milyon TL tutarındaki şirket alacağına mahsup edilmek üzere tahsisli sermaye artırımı için SPK’ya başvurdu.",
  image: haberGorsel,
  datePublished: "2026-07-16T19:25:12+03:00",
  dateModified: "2026-07-16T19:25:12+03:00",
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

export default function BayrkTahsisliSermayeArtirimiPage() {
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
              src="/bayrk-132-milyon-tl-tahsisli-sermaye-artirimi-spk-basvurusu.webp"
              alt="BAYRK 132 milyon TL tahsisli sermaye artırımı SPK başvurusu"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              BAYRK 132 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu
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
                Bayrak EBT Taban Sanayi ve Ticaret A.Ş. (
                <strong>BAYRK</strong>), toplam satış bedeli{" "}
                <strong>132.000.000 TL</strong> olacak şekilde tahsisli sermaye
                artırımı yapılmasına karar verdi ve aynı gün SPK’ya elektronik
                başvuru yaptı.
              </p>

              <p>
                İhraç edilecek B grubu payların tamamı, Kurt Taban Ayakkabı
                Sanayi Ticaret A.Ş.’nin BAYRK’tan olan 132 milyon TL tutarındaki
                nakit ve muaccel alacağına mahsup edilmek üzere bu şirkete
                tahsis edilecek.
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
                    <div className="mt-1 text-xl font-bold text-blue-950">
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
                  BAYRK yönetim kurulu, mevcut ortakların yeni pay alma haklarını
                  tamamen kısıtlayarak Kurt Taban Ayakkabı’ya tahsisli pay ihraç
                  edilmesine karar verdi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İşlemin toplam satış bedeli 132 milyon TL olacak. Ancak
                  ihraç edilecek nominal pay miktarı ve artırılmış sermaye,
                  Borsa İstanbul prosedürüne göre belirlenecek pay satış fiyatı
                  sonrasında kesinleşecek.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
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
                  İşlemin temel amacı, Kurt Taban Ayakkabı’nın şirketten olan
                  alacağını yeni pay ihracı karşılığında sermayeye dönüştürmek.
                  Bu nedenle işlem bilanço yapısını destekleyebilir ancak şirkete
                  yeni nakit girişi sağlamaz.
                </p>

                <div className="mt-4 grid gap-3">
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

              <Section title="BAYRK tahsisli sermaye artırımı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634275"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  BAYRK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="BAYRK 132 Milyon TL Tahsisli Sermaye Artırımı İçin SPK’ya Başvurdu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Tahsisli sermaye artırımının etkisi; satış
                fiyatı, yeni pay adedi, sulanma oranı ve SPK/Borsa İstanbul
                süreçleriyle birlikte değerlendirilmelidir.
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
