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

const slug = "vestl-moodys-kredi-notunu-caa3e-indirdi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/vestl-moodys-kredi-notunu-caa3e-indirdi.webp";

export const metadata: Metadata = {
  title: "VESTL Moody’s Kredi Notunu Caa3’e İndirdi",
  description:
    "Moody’s, Vestel Elektronik’in uzun vadeli CFR notunu Caa2’den Caa3’e, PDR notunu Caa2-PD’den Caa3-PD’ye düşürdü. 2029 vadeli 500 milyon dolarlık tahvil notu da Caa3’e revize edildi.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "VESTL Moody’s Kredi Notunu Caa3’e İndirdi",
    description:
      "Moody’s, VESTL’in uzun vadeli kredi notunu ve 2029 vadeli 500 milyon dolarlık tahvil notunu düşürdü. Görünüm negatif olarak korundu.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "VESTL Moody’s kredi notu indirimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VESTL Moody’s Kredi Notunu Caa3’e İndirdi",
    description:
      "Moody’s, VESTL’in CFR ve PDR notlarını düşürdü. 2029 vadeli 500 milyon dolarlık tahvil notu da Caa3’e çekildi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "CFR Notu",
    deger: "Caa3",
    aciklama: "Önceki seviye: Caa2",
  },
  {
    baslik: "PDR Notu",
    deger: "Caa3-PD",
    aciklama: "Önceki seviye: Caa2-PD",
  },
  {
    baslik: "Tahvil Notu",
    deger: "Caa3",
    aciklama: "2029 vadeli 500 mn USD tahvil",
  },
  {
    baslik: "Görünüm",
    deger: "Negatif",
    aciklama: "Tüm notlarda korundu",
  },
];

const genelDetaylar = [
  { etiket: "Şirket", deger: "Vestel Elektronik Sanayi ve Ticaret A.Ş." },
  { etiket: "Hisse Kodu", deger: "VESTL" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "Bildirim Saati", deger: "20:00:19" },
  { etiket: "Açıklama Türü", deger: "Özel Durum Açıklaması (Genel)" },
  { etiket: "Özet Bilgi", deger: "Moody's Ratings Kredi Derecelendirme Notu" },
  { etiket: "Önceki İlgili Açıklama Tarihi", deger: "21.04.2026" },
  { etiket: "Uzun Vadeli CFR", deger: "Caa2 → Caa3" },
  { etiket: "PDR", deger: "Caa2-PD → Caa3-PD" },
  { etiket: "2029 Vadeli 500 Mn USD Tahvil Notu", deger: "Caa2 → Caa3" },
  { etiket: "Not Görünümü", deger: "Negatif" },
];

const notDetaylari = [
  {
    baslik: "Uzun Vadeli CFR",
    onceki: "Caa2",
    yeni: "Caa3",
    yorum:
      "Şirketin temel kredi risk profilini gösteren uzun vadeli CFR notu bir kademe aşağı çekildi.",
  },
  {
    baslik: "PDR",
    onceki: "Caa2-PD",
    yeni: "Caa3-PD",
    yorum:
      "Temerrüt olasılığına ilişkin PDR notunda da aşağı yönlü revizyon yapıldı.",
  },
  {
    baslik: "2029 Vadeli 500 Mn USD Tahvil",
    onceki: "Caa2",
    yeni: "Caa3",
    yorum:
      "Şirket tarafından ihraç edilen garantili kıdemli teminatsız tahvillerin kredi notu da aynı doğrultuda düşürüldü.",
  },
];

const nedenOnemli = [
  {
    baslik: "Kredi notu indirimi finansman algısını etkiler",
    aciklama:
      "Uluslararası derecelendirme notları özellikle borçlanma maliyeti, refinansman kabiliyeti ve yatırımcı algısı açısından önem taşır. Not indirimi, finansman tarafında daha temkinli bir bakış açısını beraberinde getirebilir.",
  },
  {
    baslik: "Negatif görünüm risklerin sürdüğüne işaret eder",
    aciklama:
      "Moody’s görünümü negatif olarak korudu. Bu, not indiriminin tek seferlik bir değerlendirme değil, izlenen risklerin hâlâ devam ettiği bir çerçevede okunduğunu gösteriyor.",
  },
  {
    baslik: "Tahvil notunun düşmesi dış borç tarafı için kritik",
    aciklama:
      "2029 vadeli 500 milyon dolarlık tahvilin notunun da aşağı çekilmesi, şirketin uluslararası borçlanma araçlarına ilişkin risk algısında da bozulma olduğunu gösteriyor.",
  },
];

const sirketHakkinda = [
  "Vestel Elektronik; tüketici elektroniği, beyaz eşya, dijital ürünler ve teknoloji üretimi tarafında Türkiye’nin en bilinen sanayi şirketlerinden biri.",
  "Şirket, hem iç pazarda hem de ihracat kanallarında güçlü operasyonel hacme sahip olsa da bilanço tarafında borçluluk, kur etkisi ve finansman maliyetleri dönem dönem yatırımcıların yakın takibinde oluyor.",
  "Uluslararası kredi derecelendirme kuruluşlarının değerlendirmeleri, bu nedenle VESTL hissesi açısından sadece bir haber akışı değil, aynı zamanda finansal risk algısına dair önemli bir gösterge niteliği taşıyor.",
];

const degerlendirmeMaddeleri = [
  "KAP açıklaması doğrudan operasyonel satış veya yeni sözleşme haberi değil; finansal risk algısına ilişkin bir güncelleme niteliğinde.",
  "Not indirimi kısa vadede hisse üzerinde baskı yaratabilecek bir gelişme olarak okunabilir.",
  "Ancak asıl etki, şirketin borç çevirme koşulları, yeni finansman maliyeti ve gelecek dönem bilanço görünümüyle birlikte daha netleşir.",
  "Negatif görünüm korunması, ilerleyen dönemde ek gelişmelerin yakından izlenmesini gerektiriyor.",
  "Haberin etkisi değerlendirilirken şirketin faaliyet performansı ile finansman yapısı birlikte ele alınmalı.",
];

const takipBasliklari = [
  "Şirketten kredi notu değişimine ilişkin ek açıklama gelip gelmeyeceği",
  "Borçluluk ve finansman giderlerinin sonraki finansallara yansıması",
  "2029 vadeli tahvil tarafında ikincil piyasa algısı",
  "Kur hareketlerinin bilanço üzerindeki etkisi",
  "Yeni refinansman veya borç yapılandırma adımları",
  "Bir sonraki derecelendirme güncellemesinde görünümün değişip değişmeyeceği",
];

const seoSorular = [
  {
    soru: "VESTL ne açıkladı?",
    cevap:
      "VESTL, Moody’s tarafından uzun vadeli CFR notunun Caa2’den Caa3’e, PDR notunun Caa2-PD’den Caa3-PD’ye düşürüldüğünü açıkladı.",
  },
  {
    soru: "VESTL tahvil notunda ne değişti?",
    cevap:
      "VESTL tarafından ihraç edilen 2029 vadeli 500 milyon dolar tutarındaki garantili kıdemli teminatsız tahvillerin derecelendirme notu Caa2’den Caa3’e revize edildi.",
  },
  {
    soru: "Moody’s VESTL görünümünü ne yaptı?",
    cevap:
      "Moody’s, söz konusu notların görünümünü negatif olarak teyit etti.",
  },
  {
    soru: "Kredi notu indirimi hisse için neden önemli?",
    cevap:
      "Kredi notu indirimi, finansman maliyeti, borçlanma koşulları ve piyasa algısı üzerinde etkili olabileceği için yatırımcılar tarafından yakından izlenir.",
  },
  {
    soru: "VESTL haberinde sırada ne var?",
    cevap:
      "Sonraki dönemde şirketin finansal sonuçları, finansman yapısı, borçluluk görünümü ve olası yeni derecelendirme güncellemeleri takip edilecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "VESTL Moody’s Kredi Notunu Caa3’e İndirdi",
  description:
    "Moody’s, Vestel Elektronik’in uzun vadeli CFR notunu Caa2’den Caa3’e, PDR notunu Caa2-PD’den Caa3-PD’ye düşürdü. 2029 vadeli 500 milyon dolarlık tahvil notu da Caa3’e revize edildi.",
  image: haberGorsel,
  datePublished: "2026-07-13T20:00:19+03:00",
  dateModified: "2026-07-13T20:00:19+03:00",
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

export default function VestlMoodysNotHaberiPage() {
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
              src="/vestl-moodys-kredi-notunu-caa3e-indirdi.webp"
              alt="VESTL Moody’s kredi notu indirimi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              VESTL Moody’s Kredi Notunu Caa3’e İndirdi
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Kredi Derecelendirme
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
                Vestel Elektronik Sanayi ve Ticaret A.Ş. (
                <strong>VESTL</strong>), uluslararası derecelendirme kuruluşu
                Moody’s tarafından yapılan son değerlendirme sonucunda şirketin
                kredi notlarında aşağı yönlü revizyon yapıldığını açıkladı.
              </p>

              <p>
                KAP duyurusuna göre şirketin <strong>Uzun Vadeli CFR notu
                Caa2’den Caa3’e</strong>, <strong>PDR notu ise Caa2-PD’den
                Caa3-PD’ye</strong> indirildi. Ayrıca şirket tarafından ihraç
                edilen <strong>2029 vadeli 500 milyon ABD doları</strong> tutarındaki
                garantili kıdemli teminatsız tahvillerin notu da{" "}
                <strong>Caa2’den Caa3’e</strong> revize edildi. Tüm notların
                görünümü ise <strong>negatif</strong> olarak korundu.
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
                  Moody’s, VESTL’in kredi risk profiline ilişkin son
                  değerlendirmesini yayımladı ve şirketin uzun vadeli CFR ile
                  PDR notlarında birer kademe aşağı yönlü revizyona gitti.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Aynı açıklamada, 2029 vadeli 500 milyon dolar tutarındaki
                  tahvil ihracına ilişkin derecelendirme notunun da aşağı
                  çekildiği görüldü. Böylece hem şirket bazlı kredi notları hem
                  de tahvil notu tarafında eş zamanlı bir revizyon oluştu.
                </p>
              </Section>

              <Section title="Not değişikliğinin detayları">
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

              <Section title="Hangi notlarda değişiklik oldu?">
                <div className="grid gap-4">
                  {notDetaylari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {item.baslik}
                        </h3>
                        <div className="text-sm font-bold text-slate-700">
                          {item.onceki} → {item.yeni}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Neden önemli?">
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

              <Section title="Şirket hakkında">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {sirketHakkinda.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu KAP açıklaması, şirketin faaliyetlerinde yeni bir satış ya
                  da yatırım kararından çok, finansal risk algısına dair önemli
                  bir güncelleme sunuyor. Not indirimi, piyasa tarafında
                  özellikle borçluluk ve finansman maliyetleri üzerinden
                  okunacaktır.
                </p>

                <div className="mt-4 grid gap-3">
                  {degerlendirmeMaddeleri.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Sırada ne var?">
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

              <Section title="VESTL Moody’s not kararı hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1632934"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  VESTL — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="VESTL Moody’s Kredi Notunu Caa3’e İndirdi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Kredi derecelendirme değişiklikleri, şirketin
                finansal görünümü ve piyasa algısı açısından önem taşısa da tek
                başına yatırım kararı için yeterli değildir.
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