import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href = "/haber/10-temmuz-2026-fonlar-gunluk-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haftalikGetiriGorseli = "/fon-haftalik-getiri-10-temmuz-2026.png";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "10.07.2026 Fonların Günlük Kapanış Değerlendirmesi: TLY, PHE, PBR, DFI";
const aciklama =
  "10 Temmuz fon kapanış değerlendirmesinde TLY, PHE, PBR ve DFI için haftalık getiri, BIST 100 ve altın kıyası, para akışı ve yatırımcı değişimi.";

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
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
    tahminiEtki: "+%1,16",
    yatirimci: "+494",
    fonDeger: "-369,04 milyon TL",
    paraAkisi: "-1,13 milyar TL",
    paraYonu: "Çıkış",
    pozitif: "GUNDG, ODINE, HEDEF, DSTKF, PKZ ve PCS",
    negatif: "PASEU, KTLEV ve TATEN",
    yorum:
      "PHE, portföy etkisinde günün en güçlü fonu oldu. Buna karşılık fon toplam değerindeki düşüş ve 1,13 milyar TL net para çıkışı, fiyat beklentisi pozitif olsa da para akışı tarafında dikkatli okunması gereken bir tablo oluşturuyor.",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "+%0,94",
    yatirimci: "+278",
    fonDeger: "-130,34 milyon TL",
    paraAkisi: "+467,05 milyon TL",
    paraYonu: "Giriş",
    pozitif: "HEDEF, KTLEV, ODINE, PKZ ve PCS",
    negatif: "PASEU, AKBNK, THYAO ve YKBNK",
    yorum:
      "PBR tarafında net para girişi güçlü kalırken fon toplam değeri geriledi. Bu ayrışma, para girişine rağmen portföy değerlemesi ve piyasa etkisinin fon büyüklüğü üzerinde baskı yarattığını gösteriyor.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "+%0,93",
    yatirimci: "+247",
    fonDeger: "+551,66 milyon TL",
    paraAkisi: "+38,94 milyon TL",
    paraYonu: "Giriş",
    pozitif: "OZATD, TERA, TPKGY ve DSTKF",
    negatif: "TRHOL ve SVGYO",
    yorum:
      "TLY fonunda tahmini fiyat etkisi pozitif tarafta kalırken fon toplam değeri ve para akışı da aynı yönde ilerledi. Net para girişi sınırlı olsa da fon büyüklüğündeki artış kapanış değerlendirmesini destekliyor.",
  },
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    tahminiEtki: "+%0,65",
    yatirimci: "+546",
    fonDeger: "+470,17 milyon TL",
    paraAkisi: "+286,99 milyon TL",
    paraYonu: "Giriş",
    pozitif: "ABG ve IEYHO",
    negatif: "ISKPL",
    yorum:
      "DFI tarafında para girişi, yatırımcı sayısı ve fon toplam değeri aynı yönde pozitif ilerledi. Portföy etkisi PHE, PBR ve TLY kadar yüksek olmasa da veri seti daha dengeli bir kapanış görünümü veriyor.",
  },
] as const;

const haftalikGetiriler = [
  {
    ad: "DFI",
    getiri: "+%2,94",
    bistFarki: "+5,11 puan",
    altinFarki: "+4,17 puan",
  },
  {
    ad: "PBR",
    getiri: "+%2,14",
    bistFarki: "+4,31 puan",
    altinFarki: "+3,37 puan",
  },
  {
    ad: "TLY",
    getiri: "+%1,93",
    bistFarki: "+4,10 puan",
    altinFarki: "+3,16 puan",
  },
  {
    ad: "PHE",
    getiri: "+%1,93",
    bistFarki: "+4,10 puan",
    altinFarki: "+3,16 puan",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-10T22:05:00+03:00",
  dateModified: "2026-07-10T22:05:00+03:00",
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
              alt="10 Temmuz 2026 TLY PHE PBR DFI fon kapanış değerlendirmesi"
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
                10 Temmuz 2026 günlük kapanış değerlendirmesinde TLY, PHE, PBR
                ve DFI fonlarının portföy etkileri haftanın ilk işlem gününde
                açıklanacak TEFAS fon fiyatları için pozitif beklenti üretti.
                Günün en yüksek tahmini etkisi PHE tarafında +%1,16 olurken
                PBR +%0,94, TLY +%0,93 ve DFI +%0,65 seviyesinde hesaplandı.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Haftalık Kapanışta Fonlar BIST 100 ve Altına Karşı Ne Yaptı?
                </h2>
                <p className="mt-3">
                  Haftalık kapanış verilerinde dört fon da pozitif bölgede kaldı.
                  DFI +%2,94 ile grubun en güçlü haftalık getirisini üretirken,
                  PBR +%2,14 seviyesine ulaştı. TLY ve PHE ise haftayı aynı
                  oranda, +%1,93 getiriyle tamamladı. Aynı dönemde BIST 100
                  -%2,17, altın ise -%1,23 gerilediği için bu dört fonda
                  endekse ve altına karşı belirgin bir ayrışma oluştu.
                </p>

                <figure className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src={haftalikGetiriGorseli}
                    alt="TLY PHE PBR DFI haftalık getiri BIST 100 ve altın karşılaştırması"
                    width={1440}
                    height={471}
className="h-auto w-full"
                  />
                  <figcaption className="border-t border-slate-100 px-4 py-3 text-sm text-slate-500">
                    Haftalık getiri sıralaması: DFI +%2,94, PBR +%2,14, PHE
                    +%1,93, TLY +%1,93, altın -%1,23, BIST 100 -%2,17.
                  </figcaption>
                </figure>

                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Varlık</th>
                        <th className="px-4 py-3 font-semibold">
                          Haftalık Getiri
                        </th>
                        <th className="px-4 py-3 font-semibold">
                          BIST 100&apos;e Göre
                        </th>
                        <th className="px-4 py-3 font-semibold">
                          Altına Göre
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {haftalikGetiriler.map((veri) => (
                        <tr key={veri.ad}>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            {veri.ad}
                          </th>
                          <td className="px-4 py-3 font-semibold text-emerald-700">
                            {veri.getiri}
                          </td>
                          <td className="px-4 py-3">{veri.bistFarki}</td>
                          <td className="px-4 py-3">{veri.altinFarki}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-3">
                  Haftanın resmi fonlar açısından oldukça net: BIST 100 değer
                  kaybederken dört fonun da artıda kalması, portföy seçimlerinin
                  endeksten daha dirençli çalıştığını gösteriyor. DFI, BIST
                  100&apos;den 5,11 puan daha iyi performansla ilk sıraya
                  yerleşirken PBR 4,31 puanlık farkla onu izledi. TLY ve PHE de
                  aynı haftalık getiriyle hem BIST 100&apos;ün hem de altının
                  belirgin şekilde üzerinde kapanış yaptı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  10 Temmuz Fon Kapanışında Sıralama Nasıl Oluştu?
                </h2>
                <p className="mt-3">
                  Gün sonu hesaplamasında PHE ve PBR portföy etkisi açısından
                  üst sıralarda yer aldı. TLY, fon toplam değer artışı ve pozitif
                  para girişiyle desteklenen bir kapanış görünümü verdi. DFI ise
                  daha düşük tahmini etkiye rağmen para girişi, yatırımcı artışı
                  ve fon değer değişiminin aynı yönde pozitif olmasıyla dengeli
                  bir tablo sundu.
                </p>
              </section>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Fon</th>
                      <th className="px-4 py-3 font-semibold">Hafta Başı Etki</th>
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
                        <td className="px-4 py-3 font-semibold text-emerald-700">
                          {fon.tahminiEtki}
                        </td>
                        <td className="px-4 py-3">{fon.yatirimci}</td>
                        <td className="px-4 py-3">{fon.fonDeger}</td>
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
                      <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-slate-200">
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
                  Para Girişi ve Yatırımcı Değişimi Ne Söylüyor?
                </h2>
                <p className="mt-3">
                  10 Temmuz kapanışında TLY, PBR ve DFI fonlarında net para
                  girişi görülürken, PHE tarafında net para çıkışı sürdü. PHE
                  yatırımcı sayısında artış olmasına rağmen fon toplam değeri ve
                  para akışı negatif kaldı. PBR tarafında da para girişi pozitif
                  olmasına rağmen fon toplam değerinde gerileme var. Kapanış
                  tablosunda yalnızca portföy getirisine bakmak bu yüzden eksik
                  kalıyor; yatırımcı hareketi ve fonun kasasına giren ya da
                  çıkan para, haftanın ilk işlem gününe taşınan havayı daha net
                  gösteriyor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Önümüzdeki Hafta Başında Hangi Portföy Hisseleri İzlenmeli?
                </h2>
                <p className="mt-3">
                  TLY tarafında OZATD ve TERA, PHE tarafında GUNDG ve ODINE,
                  PBR tarafında HEDEF, KTLEV ve ODINE, DFI tarafında ise ABG ve
                  IEYHO pozitif katkı tarafında öne çıkıyor. Negatif tarafta PHE
                  ve PBR için PASEU, DFI için ISKPL, TLY için TRHOL ve SVGYO
                  takip edilecek başlıklar arasında yer alıyor.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, TLY, PHE, PBR ve DFI fon etki analizi sayfalarındaki
                10 Temmuz 2026 kapanış verilerinden derlenmiştir. Hesaplama
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
