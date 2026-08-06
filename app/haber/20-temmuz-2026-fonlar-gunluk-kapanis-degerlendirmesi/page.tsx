import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href = "/haber/20-temmuz-2026-fonlar-gunluk-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "20.07.2026 Fonların Günlük Kapanış Değerlendirmesi: TLY, PHE, PBR, DFI";
const aciklama =
  "20 Temmuz fon kapanış değerlendirmesinde TLY, PHE, PBR ve DFI için yarınki fon fiyatı tahmini, portföy etkisi, para girişi, yatırımcı sayısı ve fon toplam değer değişimi.";

export const metadata: Metadata = {
  title: baslik,
  description: aciklama,
  alternates: {
    canonical,
  },
  openGraph: {
    type: "article",
    title: baslik,
    description: aciklama,
    url: canonical,
    images: [
      {
        url: `${siteUrl}${haberGorseli}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: baslik,
    description: aciklama,
    images: [`${siteUrl}${haberGorseli}`],
  },
};

const fonlar = [
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    tahminiEtki: "+%0,32",
    yatirimci: "+992",
    fonDeger: "+437,55 milyon TL",
    paraAkisi: "+387,26 milyon TL",
    paraYonu: "Giriş",
    pozitif: "IEYHO ve LIDER",
    negatif: "ISKPL ve ABG",
    yorum:
      "DFI, dört fon arasında günü pozitif portföy etkisiyle tamamlayan tek fon oldu. IEYHO tarafındaki +1,3054 puanlık güçlü katkı, ISKPL ve ABG kaynaklı negatif etkiyi dengeledi ve toplam tahmini etkiyi +%0,32 seviyesinde tuttu. 387,26 milyon TL net para girişi ve 992 kişilik yatırımcı artışı, fiyat etkisindeki pozitif tabloyu destekleyen ikinci başlık oldu.",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
    tahminiEtki: "-%0,13",
    yatirimci: "+3.705",
    fonDeger: "+311,76 milyon TL",
    paraAkisi: "+837,73 milyon TL",
    paraYonu: "Giriş",
    pozitif: "PASEU, HEDEF, ODINE ve GUNDG",
    negatif: "PCS, KTLEV, PKZ, DSTKF ve BALSU",
    yorum:
      "PHE tarafında yatırımcı ilgisi güçlü kaldı; fon 3.705 yeni yatırımcı ve 837,73 milyon TL net para girişiyle günü kapattı. Buna rağmen portföy etkisi -%0,13 seviyesinde negatif kaldı. PASEU ve HEDEF desteği önemliydi, fakat PCS, KTLEV, PKZ ve DSTKF tarafındaki baskı PHE'nin yarınki fiyat beklentisini sınırladı.",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "-%0,41",
    yatirimci: "+2.615",
    fonDeger: "+626,51 milyon TL",
    paraAkisi: "+721,77 milyon TL",
    paraYonu: "Giriş",
    pozitif: "HEDEF, PASEU, ODINE ve GUNDG",
    negatif: "PCS, BALSU, KTLEV, PKZ ve DSTKF",
    yorum:
      "PBR'de para girişi ve fon toplam değeri tarafı güçlü kaldı. 721,77 milyon TL net giriş, 2.615 kişilik yatırımcı artışı ve 626,51 milyon TL fon değeri artışı talebin sürdüğünü gösteriyor. Ancak portföy etkisi -%0,41 oldu; HEDEF, PASEU ve ODINE katkısı, PCS, BALSU, KTLEV ve PKZ baskısını karşılamaya yetmedi.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "-%0,88",
    yatirimci: "+666",
    fonDeger: "-237,21 milyon TL",
    paraAkisi: "-347,97 milyon TL",
    paraYonu: "Çıkış",
    pozitif: "TPKGY, OZATD, TRHOL, TERA ve PEKGY",
    negatif: "DSTKF, HMV, SELEC, MANAS ve SVGYO",
    yorum:
      "TLY günün en zayıf portföy etkisini üretti. Yatırımcı sayısı 666 kişi artsa da fon toplam değerindeki 237,21 milyon TL düşüş ve 347,97 milyon TL net para çıkışı, kapanışı diğer fonlardan ayırdı. TPKGY, OZATD ve TRHOL desteğine rağmen DSTKF'nin -2,2782 puanlık etkisi TLY tarafında tabloyu negatife çevirdi.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-20T18:40:00+03:00",
  dateModified: "2026-07-20T18:40:00+03:00",
  url: canonical,
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/yazar/erman-hoca#person`,
    name: "Erman Hoca",
    url: `${siteUrl}/yazar/erman-hoca`,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Hoca İle Borsa",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon-512.png`,
    },
  },
  image: `${siteUrl}${haberGorseli}`,
  inLanguage: "tr",
  mainEntityOfPage: canonical,
};

export default function FonlarGunlukKapanisPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={haberGorseli}
              alt="20 Temmuz 2026 TLY PHE PBR DFI fon kapanış değerlendirmesi"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {baslik}
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Fon Kapanış Değerlendirmesi
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

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                20 Temmuz 2026 pazartesi kapanışı itibarıyla TLY, PHE, PBR ve
                DFI fonlarında yatırımcı sayısı genel olarak artmaya devam etti.
                Buna karşılık portföy etkisi tarafında sadece DFI pozitif
                bölgede kalırken PHE, PBR ve TLY negatif etki üretti. Yarın
                açıklanacak TEFAS fon fiyatları için DFI +%0,32 ile ilk sırada
                yer aldı; PHE -%0,13, PBR -%0,41 ve TLY -%0,88 seviyesinde
                hesaplandı.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  20 Temmuz Fon Kapanışında Ana Tablo Ne?
                </h2>
                <p className="mt-3">
                  Günün en net ayrışması TLY tarafında görüldü. TLY&apos;de yatırımcı
                  sayısı artmasına rağmen hem fon toplam değeri geriledi hem de
                  net para çıkışı oluştu. PHE ve PBR tarafında ise para girişi
                  güçlü kalmasına rağmen portföydeki yüksek ağırlıklı negatif
                  hisseler yarınki fiyat beklentisini aşağı çekti. DFI daha
                  sınırlı para girişi almasına karşın IEYHO etkisiyle fiyat
                  tarafında dört fonun önüne geçti.
                </p>
              </section>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Fon</th>
                      <th className="px-4 py-3 font-semibold">Yarınki Etki</th>
                      <th className="px-4 py-3 font-semibold">Yatırımcı</th>
                      <th className="px-4 py-3 font-semibold">Fon Değeri</th>
                      <th className="px-4 py-3 font-semibold">Para Akışı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {fonlar.map((fon) => (
                      <tr key={fon.kod}>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          <Link
                            href={fon.href}
                            prefetch={false}
                            className="text-blue-700 hover:underline"
                          >
                            {fon.kod}
                          </Link>
                        </th>
                        <td
                          className={`px-4 py-3 font-semibold ${
                            fon.tahminiEtki.startsWith("-")
                              ? "text-red-700"
                              : "text-emerald-700"
                          }`}
                        >
                          {fon.tahminiEtki}
                        </td>
                        <td className="px-4 py-3">{fon.yatirimci}</td>
                        <td
                          className={`px-4 py-3 ${
                            fon.fonDeger.startsWith("-")
                              ? "font-semibold text-red-700"
                              : ""
                          }`}
                        >
                          {fon.fonDeger}
                        </td>
                        <td
                          className={`px-4 py-3 font-semibold ${
                            fon.paraYonu === "Giriş"
                              ? "text-emerald-700"
                              : "text-red-700"
                          }`}
                        >
                          {fon.paraAkisi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {fonlar.map((fon) => (
                  <section
                    key={fon.kod}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold text-slate-900">
                        {fon.kod} Günlük Kapanış Yorumu
                      </h2>
                      <span
                        className={`rounded-md bg-white px-2.5 py-1 text-xs font-semibold ring-1 ring-slate-200 ${
                          fon.tahminiEtki.startsWith("-")
                            ? "text-red-700"
                            : "text-emerald-700"
                        }`}
                      >
                        {fon.tahminiEtki}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {fon.yorum}
                    </p>
                    <p className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-medium leading-6 text-slate-600 ring-1 ring-slate-200">
                      Pozitif katkıda {fon.pozitif}; negatif tarafta {fon.negatif}{" "}
                      hisseleri izleniyor.
                    </p>
                    <Link
                      href={fon.href}
                      prefetch={false}
                      className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
                    >
                      {fon.kod} fon etki analizi sayfası
                    </Link>
                  </section>
                ))}
              </div>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Para Girişi, Yatırımcı Sayısı ve Fon Değeri Birlikte Ne Anlatıyor?
                </h2>
                <p className="mt-3">
                  Para girişi tarafında günün ilk sırasında PHE yer aldı. PHE
                  837,73 milyon TL net giriş alırken PBR 721,77 milyon TL, DFI
                  387,26 milyon TL net giriş kaydetti. TLY ise 347,97 milyon TL
                  net para çıkışıyla bu üç fondan ayrıştı. Yatırımcı sayısında
                  PHE +3.705 kişiyle açık ara önde; PBR +2.615, DFI +992 ve TLY
                  +666 yatırımcı artışıyla günü tamamladı.
                </p>
                <p className="mt-3">
                  Fon toplam değerinde PBR 626,51 milyon TL, DFI 437,55 milyon
                  TL ve PHE 311,76 milyon TL büyüdü. TLY&apos;de ise fon toplam
                  değeri 237,21 milyon TL geriledi. Bu yüzden 20 Temmuz
                  kapanışında PHE ve PBR için sorun talep tarafında değil,
                  portföydeki fiyat etkisinin negatif kalmasında. TLY&apos;de ise
                  hem para çıkışı hem de fon değerindeki gerileme daha dikkatli
                  okunması gereken bir kapanış bıraktı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Yarın Açıklanacak Fon Fiyatlarında Hangi Hisseler Belirleyici?
                </h2>
                <p className="mt-3">
                  DFI için IEYHO günün ana pozitif hissesi oldu. PHE ve PBR
                  tarafında PASEU, HEDEF, ODINE ve GUNDG yukarı yönde katkı
                  verdi; fakat PCS, KTLEV, PKZ ve DSTKF baskısı bu iki fonda
                  toplam etkiyi negatife çevirdi. TLY&apos;de TPKGY, OZATD, TRHOL ve
                  TERA pozitif tarafta kalsa da DSTKF tek başına fonun yönünü
                  aşağı çeken ana hisse oldu.
                </p>
                <p className="mt-3">
                  20 Temmuz kapanışının kısa özeti şu: DFI fiyat etkisinde
                  pozitif ayrıştı, PHE para girişinde ve yatırımcı artışında
                  öne çıktı, PBR fon büyüklüğü ve talep tarafında güçlü kaldı,
                  TLY ise yatırımcı artışına rağmen para çıkışı ve negatif
                  portföy etkisiyle günün en zayıf fonu oldu.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, TLY, PHE, PBR ve DFI fon etki analizi sayfalarındaki
                20 Temmuz 2026 kapanış verilerinden derlenmiştir. Hesaplama
                tahmini bir göstergedir; yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={href} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
