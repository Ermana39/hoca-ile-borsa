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

const slug = "ttkom-1-milyar-dolara-kadar-sukuk-ihraci-karari";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/ttkom-1-milyar-dolara-kadar-sukuk-ihraci-karari.webp";

export const metadata: Metadata = {
  title: "TTKOM 1 Milyar Dolara Kadar Sukuk İhracı Kararı Aldı",
  description:
    "Türk Telekom, toplam tutarı 1 milyar ABD doları eşdeğerine kadar yurt dışı kira sertifikası ihracı için yönetim kurulu kararı aldı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "TTKOM 1 Milyar Dolara Kadar Sukuk İhracı Kararı Aldı",
    description:
      "Türk Telekom, yabancı para veya Türk lirası cinsinden, halka arz edilmeksizin nitelikli yatırımcılara yönelik sukuk ihracı planlıyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "TTKOM 1 milyar dolara kadar sukuk ihracı kararı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TTKOM 1 Milyar Dolara Kadar Sukuk İhracı Kararı Aldı",
    description:
      "Planlanan ihraç, kurulacak varlık kiralama şirketi üzerinden gerçekleştirilecek.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Azami İhraç Tutarı",
    deger: "1 Milyar Dolar",
    aciklama: "ABD doları eşdeğerine kadar",
  },
  {
    baslik: "Araç",
    deger: "Sukuk",
    aciklama: "Yurt dışı kira sertifikası",
  },
  {
    baslik: "Satış Yöntemi",
    deger: "Nitelikli Yatırımcı",
    aciklama: "Halka arz edilmeksizin",
  },
  {
    baslik: "Geçerlilik Süresi",
    deger: "1 Yıl",
    aciklama: "SPK karar tarihinden itibaren",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Türk Telekomünikasyon A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "TTKOM",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "16.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "18:09:36",
  },
  {
    etiket: "Karar",
    deger: "Yurt dışı kira sertifikası ihracı",
  },
  {
    etiket: "Azami Toplam Tutar",
    deger: "1 milyar ABD doları eşdeğerine kadar",
  },
  {
    etiket: "Para Birimi",
    deger: "Yabancı para ve/veya Türk lirası",
  },
  {
    etiket: "İhraç Sayısı",
    deger: "Bir veya birden fazla",
  },
  {
    etiket: "Satış Şekli",
    deger: "Tahsisli ve/veya nitelikli yatırımcılara satış",
  },
  {
    etiket: "Halka Arz",
    deger: "Yapılmayacak",
  },
  {
    etiket: "İhraç Süresi",
    deger: "SPK karar tarihinden itibaren bir yıl içinde",
  },
  {
    etiket: "İhraççı Yapı",
    deger: "Kurulması planlanan varlık kiralama şirketi",
  },
];

const surecAdimlari = [
  {
    baslik: "Yönetim kurulu kararı alındı",
    aciklama:
      "Türk Telekom yönetim kurulu, azami 1 milyar ABD doları eşdeğerine kadar yurt dışı kira sertifikası ihracı yapılmasına karar verdi.",
  },
  {
    baslik: "SPK süreci tamamlanacak",
    aciklama:
      "İhracın gerçekleştirilebilmesi için başta Sermaye Piyasası Kurulu olmak üzere ilgili mevzuat kapsamındaki izin ve prosedürlerin tamamlanması gerekiyor.",
  },
  {
    baslik: "Varlık kiralama şirketi kurulacak",
    aciklama:
      "Planlanan sukuk ihracı, şirketin daha önce açıkladığı üzere kurulması planlanan varlık kiralama şirketi üzerinden gerçekleştirilecek.",
  },
  {
    baslik: "İhraç piyasa koşullarına göre yapılabilecek",
    aciklama:
      "Yönetim kurulu kararı azami çerçeveyi belirliyor. İhraç tutarı, vade, para birimi ve maliyet gibi ayrıntılar sonraki aşamalarda netleşecek.",
  },
];

const nedenOnemli = [
  {
    baslik: "Finansman kaynakları çeşitleniyor",
    aciklama:
      "Sukuk ihracı, Türk Telekom’un banka kredileri ve klasik tahvil piyasasına ek olarak alternatif bir borçlanma kanalını kullanabilmesini sağlayabilir.",
  },
  {
    baslik: "Uluslararası yatırımcı tabanı genişleyebilir",
    aciklama:
      "Yurt dışı kira sertifikası yapısı, özellikle İslami finans ürünlerine yatırım yapan kurumsal yatırımcılara erişim imkânı yaratabilir.",
  },
  {
    baslik: "1 milyar dolar azami sınır",
    aciklama:
      "Açıklanan tutar kesin olarak borçlanılacak miktar değil, yönetim kurulunun izin verdiği üst sınırdır. Fiili ihraç daha düşük tutarda veya birden fazla dilim halinde yapılabilir.",
  },
  {
    baslik: "Maliyet henüz belli değil",
    aciklama:
      "İhraç faizi, vadesi, para birimi ve kullanım amacı açıklanmadığı için finansal etkinin büyüklüğü henüz net olarak hesaplanamaz.",
  },
];

const finansalOkuma = [
  "Karar, şirkete hemen nakit girişi sağlandığı anlamına gelmiyor.",
  "Borçlanma ancak izin süreçleri tamamlanıp fiili ihraç gerçekleştirildiğinde oluşacak.",
  "İhraç maliyeti, vade ve para birimi şirketin finansman giderleri açısından belirleyici olacak.",
  "Yabancı para cinsinden ihraç yapılması halinde kur riski ayrıca önem kazanacak.",
  "Kaynağın mevcut borçların çevrilmesinde kullanılması refinansman yapısını destekleyebilir.",
  "Yatırım harcamalarında kullanılması halinde altyapı ve büyüme yatırımlarını finanse edebilir.",
];

const hisseOkumasi = [
  {
    baslik: "İlk okuma nötr-pozitif",
    aciklama:
      "Finansman kaynaklarının çeşitlendirilmesi ve uluslararası yatırımcı tabanına erişim imkânı, haberin stratejik tarafını olumlu kılıyor.",
  },
  {
    baslik: "Borçluluk etkisi izlenmeli",
    aciklama:
      "Sukuk ihracı borçlanma niteliğinde olduğu için fiili tutar, maliyet ve vade açıklanmadan hisse üzerindeki net finansal etki kesinleşmez.",
  },
  {
    baslik: "Kullanım amacı önemli",
    aciklama:
      "Elde edilecek kaynağın borç refinansmanı, yatırım veya genel şirket ihtiyaçlarında kullanılmasına göre haberin etkisi farklılaşabilir.",
  },
];

const riskler = [
  "Yüksek faizle yapılacak bir ihraç finansman giderlerini artırabilir.",
  "Döviz cinsinden borçlanma kur riskini yükseltebilir.",
  "Kısa vadeli yapı refinansman baskısını artırabilir.",
  "Fiili ihracın tamamı kullanılmayabilir veya piyasa koşulları nedeniyle ertelenebilir.",
  "Azami tutarın tamamının borçlanıldığı varsayımıyla değerleme yapılmamalı.",
];

const takipBasliklari = [
  "SPK başvurusunun yapılması ve kurul onayı",
  "Varlık kiralama şirketinin kuruluş süreci",
  "Fiili ihraç tutarı",
  "Para birimi ve vade yapısı",
  "Kupon veya kira getiri oranı",
  "İhraçtan sağlanan kaynağın kullanım alanı",
  "TTKOM net borç ve finansman giderlerine etkisi",
];

const seoSorular = [
  {
    soru: "TTKOM ne açıkladı?",
    cevap:
      "Türk Telekom, toplam tutarı 1 milyar ABD doları eşdeğerine kadar yurt dışı kira sertifikası ihracı yapılması için yönetim kurulu kararı aldığını açıkladı.",
  },
  {
    soru: "TTKOM sukuk ihracı kaç dolar olacak?",
    cevap:
      "Yönetim kurulu kararında azami tutar 1 milyar ABD doları eşdeğeri olarak belirlendi. Bu rakam kesin ihraç tutarı değil, kullanılabilecek üst sınırdır.",
  },
  {
    soru: "TTKOM kira sertifikaları halka arz edilecek mi?",
    cevap:
      "Hayır. Planlanan ihraç halka arz edilmeksizin, tahsisli olarak ve/veya nitelikli yatırımcılara satış yöntemiyle gerçekleştirilecek.",
  },
  {
    soru: "TTKOM sukuk ihracını hangi şirket yapacak?",
    cevap:
      "İhraç, Türk Telekom tarafından kurulması planlanan varlık kiralama şirketi üzerinden gerçekleştirilecek.",
  },
  {
    soru: "TTKOM haberi hisse için nasıl okunmalı?",
    cevap:
      "Finansman kaynaklarının çeşitlendirilmesi açısından nötr-pozitif okunabilir. Ancak fiili tutar, faiz, vade, para birimi ve kullanım amacı açıklanmadan net finansal etki belli olmaz.",
  },
  {
    soru: "Sukuk ihracı şirkete hemen nakit sağlar mı?",
    cevap:
      "Hayır. Yönetim kurulu kararı yalnızca sürecin başlangıcıdır. Nakit girişi, gerekli izinler tamamlanıp fiili ihraç yapıldığında oluşur.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TTKOM 1 Milyar Dolara Kadar Sukuk İhracı Kararı Aldı",
  description:
    "Türk Telekom, toplam tutarı 1 milyar ABD doları eşdeğerine kadar yurt dışı kira sertifikası ihracı için yönetim kurulu kararı aldı.",
  image: haberGorsel,
  datePublished: "2026-07-16T18:09:36+03:00",
  dateModified: "2026-07-16T18:09:36+03:00",
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

export default function TtkomSukukIhraciPage() {
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
              src="/ttkom-1-milyar-dolara-kadar-sukuk-ihraci-karari.webp"
              alt="TTKOM 1 milyar dolara kadar sukuk ihracı kararı"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TTKOM 1 Milyar Dolara Kadar Sukuk İhracı Kararı Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Borçlanma Aracı
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
                Türk Telekomünikasyon A.Ş. (<strong>TTKOM</strong>), toplam
                tutarı azami <strong>1 milyar ABD doları eşdeğerine kadar</strong>{" "}
                yurt dışı kira sertifikası ihracı yapılması için yönetim kurulu
                kararı aldı.
              </p>

              <p>
                Planlanan sukuk ihracı, yabancı para ve/veya Türk lirası
                cinsinden, halka arz edilmeksizin tahsisli olarak ve/veya
                nitelikli yatırımcılara satış yöntemiyle gerçekleştirilebilecek.
                İhraç, kurulması planlanan varlık kiralama şirketi üzerinden
                yapılacak.
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
                  Türk Telekom yönetim kurulu, SPK mevzuatı ve ilgili diğer
                  düzenlemeler kapsamında gerekli prosedürlerin tamamlanması
                  kaydıyla bir veya birden fazla yurt dışı kira sertifikası ihracı
                  yapılmasına karar verdi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Karar, şirketin hemen 1 milyar dolar borçlandığı anlamına
                  gelmiyor. Açıklanan tutar, yapılabilecek ihraçların toplam üst
                  sınırını ifade ediyor.
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

              <Section title="İhraç süreci nasıl işleyecek?">
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
                  Sukuk ihracı, şirketin finansman yapısını çeşitlendirebilecek
                  bir borçlanma kararıdır. Finansal etkinin yönünü belirleyecek
                  temel unsurlar; ihraç tutarı, vade, maliyet, para birimi ve
                  sağlanacak kaynağın kullanım alanı olacak.
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

              <Section title="TTKOM sukuk ihracı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634175"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  TTKOM — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="TTKOM 1 Milyar Dolara Kadar Sukuk İhracı Kararı Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Borçlanma araçlarının etkisi; maliyet, vade,
                para birimi, kullanım amacı ve şirketin toplam borçluluk yapısıyla
                birlikte değerlendirilmelidir.
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