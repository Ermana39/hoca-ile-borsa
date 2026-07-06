import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "yeotk-kosova-130-mwp-ges-epc-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/yeotk-kosova-130-mwp-ges-epc-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "YEOTK Kosova’da 130 MWp GES İçin EPC Sözleşmesi İmzaladı",
  description:
    "YEOTK, Kosova’da 130 MWp kapasiteli güneş enerjisi santrali için yüksek gerilim trafo merkezi, iletim hatları ve şebeke bağlantı altyapısını kapsayan tam anahtar teslim EPC sözleşmesi imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "YEOTK Kosova’da 130 MWp GES İçin EPC Sözleşmesi İmzaladı",
    description:
      "YEO Teknoloji, Lindja Solar LLC ile Kosova’da 130 MWp kapasiteli GES için tam anahtar teslim EPC sözleşmesi imzaladı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "YEOTK Kosova 130 MWp GES EPC sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YEOTK Kosova’da 130 MWp GES İçin EPC Sözleşmesi İmzaladı",
    description:
      "YEOTK, Kosova’da 130 MWp kapasiteli güneş enerjisi santrali için EPC sözleşmesi imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Proje Kapasitesi",
    deger: "130 MWp",
    aciklama: "Kosova’da güneş enerjisi santrali",
  },
  {
    baslik: "İşin Kapsamı",
    deger: "EPC",
    aciklama: "Tam anahtar teslim mühendislik, tedarik ve inşaat",
  },
  {
    baslik: "Müşteri",
    deger: "Lindja Solar LLC",
    aciklama: "Orllati ve Holdinginova gruplarının iştiraki",
  },
  {
    baslik: "Planlanan Devreye Alma",
    deger: "2027 3. Çeyrek",
    aciklama: "Proje faaliyetleri hemen başlayacak",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YEOTK Kosova’da 130 MWp GES İçin EPC Sözleşmesi İmzaladı",
  description:
    "YEOTK, Lindja Solar LLC ile Kosova’da 130 MWp kapasiteli güneş enerjisi santrali için tam anahtar teslim EPC sözleşmesi imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-06T09:19:00+03:00",
  dateModified: "2026-07-06T09:19:00+03:00",
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

export default function YeotkKosovaGesEpcSozlesmesiPage() {
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
              src="/yeotk-kosova-130-mwp-ges-epc-sozlesmesi.webp"
              alt="YEOTK Kosova 130 MWp GES EPC sözleşmesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              YEOTK Kosova’da 130 MWp GES İçin EPC Sözleşmesi İmzaladı
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
                YEO Teknoloji Enerji ve Endüstri A.Ş. (<strong>YEOTK</strong>),
                Kosova’da 130 MWp kapasiteli güneş enerjisi santrali için yeni
                iş ilişkisi açıkladı. Şirket, Lindja Solar LLC ile tam anahtar
                teslim mühendislik, tedarik ve inşaat işleri için sözleşme
                imzaladığını duyurdu.
              </p>

              <p>
                KAP açıklamasına göre proje; yüksek gerilim trafo merkezi,
                elektrik iletim hatları ve tüm şebeke bağlantı altyapısı dahil
                olmak üzere güneş enerjisi santralinin uçtan uca EPC kapsamını
                içeriyor. Projenin 2027 yılının üçüncü çeyreğinde tamamlanarak
                devreye alınması planlanıyor.
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
                  YEOTK, İsviçre merkezli Orllati Grubu ve Holdinginova Grubu’nun
                  iştiraki olan Lindja Solar LLC ile Kosova’da 130 MWp kapasiteli
                  güneş enerjisi santrali için sözleşme imzaladı. Bildirimde iş
                  ilişkisinin ortaklık faaliyetlerine etkisi “olumlu” olarak
                  açıklandı.
                </p>
              </Section>

              <Section title="Sözleşmenin kapsamı">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Anlaşma kapsamında YEOTK, projede tam anahtar teslim EPC
                  sorumluluğu üstlenecek. Güneş enerjisi santrali, yüksek gerilim
                  trafo merkezi ve elektrik iletim hatlarının mühendislik ve
                  tasarım faaliyetleri, ekipman ve malzeme tedariki, inşaat,
                  hafriyat, kurulum, montaj, test, devreye alma ve şebekeye
                  bağlantı işleri şirket tarafından yürütülecek.
                </p>

                <div className="mt-5 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Proje
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Kosova’da 130 MWp güneş enerjisi santrali
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Müşteri
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          Lindja Solar LLC
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          İşin Niteliği
                        </th>
                        <td className="px-4 py-3 font-bold text-emerald-700">
                          Tam anahtar teslim EPC
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Planlanan Tamamlanma
                        </th>
                        <td className="px-4 py-3 font-bold text-slate-700">
                          2027 yılının üçüncü çeyreği
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Açıklamaya göre 130 MWp kapasiteli santral devreye alındığında
                  Kosova’daki en büyük yenilenebilir enerji santrali olacak. Bu
                  yönüyle proje, YEOTK’nin uluslararası enerji altyapısı ve
                  yenilenebilir enerji projelerindeki konumunu güçlendiren önemli
                  bir adım niteliği taşıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Projenin yüksek gerilim trafo merkezi, iletim hatları ve şebeke
                  bağlantı altyapısını da kapsaması, sözleşmenin yalnızca santral
                  kurulumu değil, enerji altyapısının tamamına yayılan geniş bir
                  EPC kapsamına sahip olduğunu gösteriyor.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  YEO Teknoloji; enerji, elektrifikasyon, otomasyon, yenilenebilir
                  enerji, depolama, iletim-dağıtım altyapısı ve endüstriyel
                  çözümler alanlarında faaliyet gösteren teknoloji ve mühendislik
                  şirketlerinden biridir. Şirket, Türkiye dışındaki projeleriyle
                  uluslararası pazarlarda da varlığını güçlendirmeye çalışıyor.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  YEOTK’nin Kosova’daki 130 MWp GES projesi için imzaladığı EPC
                  sözleşmesi, şirketin yurt dışı proje portföyü açısından güçlü bir
                  gelişme olarak öne çıkıyor. Projenin büyüklüğü, şebeke bağlantı
                  altyapısını da kapsaması ve tamamlandığında Kosova’nın en büyük
                  yenilenebilir enerji santrali olması haberin önemini artırıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  KAP bildiriminde sözleşme tutarı açıklanmadığı için finansal etki
                  tarafında kesin tutar yorumu yapılmamalı. Etkinin büyüklüğü,
                  projenin ilerleme takvimi, hakediş yapısı ve şirketin sonraki
                  dönem finansal sonuçlarıyla birlikte daha net görülecektir.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Proje faaliyetlerinin hemen başlaması ve santralin 2027 yılının
                  üçüncü çeyreğinde tamamlanarak devreye alınması planlanıyor.
                  Bundan sonraki aşamada proje ilerleme süreci, ekipman tedariki,
                  inşaat ve devreye alma takvimi ile olası yeni uluslararası
                  sözleşmeler takip edilecek.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1624339"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="YEOTK Kosova’da 130 MWp GES İçin EPC Sözleşmesi İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. KAP bildiriminde sözleşme tutarı açıklanmadığı için
                finansal etki, proje ilerleme süreci ve sonraki finansal sonuçlarla
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
