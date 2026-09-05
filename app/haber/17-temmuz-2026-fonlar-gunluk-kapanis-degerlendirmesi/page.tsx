import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const siteUrl = "https://www.hocaileborsa.com";
const href = "/haber/17-temmuz-2026-fonlar-gunluk-kapanis-degerlendirmesi";
const canonical = `${siteUrl}${href}`;
const haberGorseli = "/2026-fon-etki-analizi-tly-phe-pbr-dfi.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const baslik =
  "17.07.2026 Fonların Günlük Kapanış Değerlendirmesi: TLY, PHE, PBR, DFI";
const seoBaslik = "17 Temmuz Fon Kapanışı: TLY, PHE, PBR ve DFI";
const aciklama =
  "17 Temmuz fon kapanış değerlendirmesinde TLY, PHE, PBR ve DFI için hafta başı fon fiyatı tahmini, portföy etkisi, para girişi, yatırımcı sayısı ve fon toplam değer değişimi.";

export const metadata: Metadata = {
  title: { absolute: seoBaslik },
  description: seoAciklamasi(aciklama, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
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
    tahminiEtki: "+%0,85",
    yatirimci: "+659",
    fonDeger: "+595,33 milyon TL",
    paraAkisi: "+443,48 milyon TL",
    paraYonu: "Giriş",
    pozitif: "ISKPL, ABG ve LIDER",
    negatif: "IEYHO",
    yorum:
      "DFI, 17 Temmuz kapanışında dört fon içinde pozitif portföy etkisi üreten tek fon oldu. ISKPL hissesi +1,1078 puanlık güçlü katkı verirken ABG de tabloyu destekledi. IEYHO tarafındaki negatif etki toplam getiriyi sınırlasa da +%0,85 tahmini etki, DFI için haftanın ilk işlem gününe pozitif beklenti taşıyor.",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    tahminiEtki: "-%0,34",
    yatirimci: "+1.103",
    fonDeger: "+693,98 milyon TL",
    paraAkisi: "+512,65 milyon TL",
    paraYonu: "Giriş",
    pozitif: "BALSU, PKZ, PASEU, GUNDG ve ODINE",
    negatif: "KTLEV, DSTKF, ANELE, TRALT ve TCELL",
    yorum:
      "PBR tarafında para girişi ve yatırımcı artışı pozitif kalırken portföy etkisi -%0,34 seviyesine geriledi. BALSU ve PKZ pozitif katkı verse de KTLEV, DSTKF ve ANELE kaynaklı baskı toplam etkiyi negatife çevirdi. Bu tablo PBR için fon büyüklüğü tarafında talebin sürdüğünü, ancak fiyat etkisinde haftaya daha temkinli bir başlangıç ihtimali olduğunu gösteriyor.",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
    tahminiEtki: "-%0,85",
    yatirimci: "+1.934",
    fonDeger: "+1,07 milyar TL",
    paraAkisi: "+719,81 milyon TL",
    paraYonu: "Giriş",
    pozitif: "BALSU, PKZ, PASEU, HEDEF, GUNDG ve ODINE",
    negatif: "KTLEV, DSTKF, AKBNK, ANELE ve TRALT",
    yorum:
      "PHE yatırımcı ilgisi tarafında güçlü kalmasına rağmen portföy etkisinde negatif ayrıştı. Fon yatırımcı sayısı 1.934 kişi artarken 719,81 milyon TL net para girişi görüldü; buna karşılık KTLEV ve DSTKF başta olmak üzere yüksek ağırlıklı negatif katkılar toplam etkiyi -%0,85 seviyesine çekti. PHE için kapanışın ana mesajı, para akışı pozitif olsa da fiyat etkisinin baskı altında kaldığı yönünde.",
  },
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    tahminiEtki: "-%1,40",
    yatirimci: "+344",
    fonDeger: "+2,66 milyar TL",
    paraAkisi: "+441,99 milyon TL",
    paraYonu: "Giriş",
    pozitif: "OZATD, TPKGY, TRHOL ve SELEC",
    negatif: "DSTKF, TERA, ANELE, HMV ve SVGYO",
    yorum:
      "TLY, günün en zayıf portföy etkisini üretti. Fon toplam değerinde 2,66 milyar TL yükseliş ve 441,99 milyon TL net para girişi bulunmasına rağmen DSTKF tarafındaki -2,283 puanlık negatif katkı toplam görünümü belirgin şekilde aşağı çekti. TLY için fon büyüklüğü artışı olumlu, fakat hafta başı fiyat etkisi tarafında DSTKF ve TERA baskısı dikkat çekiyor.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: "2026-07-17T22:05:00+03:00",
  dateModified: "2026-07-17T22:05:00+03:00",
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={haberGorseli}
              alt="17 Temmuz 2026 TLY PHE PBR DFI fon kapanış değerlendirmesi"
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
                17 Temmuz 2026 cuma kapanışı itibarıyla TLY, PHE, PBR ve DFI
                fonlarında para girişi pozitif kalırken portföy etkisi tarafında
                tablo belirgin şekilde ayrıştı. Haftanın ilk işlem gününde
                açıklanacak TEFAS fon fiyatları için DFI +%0,85 ile pozitif
                bölgede kalırken PBR -%0,34, PHE -%0,85 ve TLY -%1,40 seviyesinde
                negatif etki üretti.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  17 Temmuz Fon Kapanışında Sıralama Nasıl Oluştu?
                </h2>
                <p className="mt-3">
                  Günün en güçlü fonu DFI oldu. ISKPL ve ABG katkısı, IEYHO
                  tarafındaki negatif etkiye rağmen DFI&apos;yi pozitif bölgede
                  tuttu. PBR ve PHE tarafında para girişi devam etse de KTLEV,
                  DSTKF ve banka hisselerinden gelen baskı portföy etkisini
                  negatife çevirdi. TLY&apos;de ise OZATD ve TPKGY desteği,
                  DSTKF&apos;nin sert negatif etkisini dengelemeye yetmedi.
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
                  Para Girişi ve Fon Toplam Değeri Ne Söylüyor?
                </h2>
                <p className="mt-3">
                  Dört fonda da fon toplam değeri artarken net para girişi
                  pozitif kaldı. PHE 719,81 milyon TL ile para girişinde ilk
                  sırada yer aldı; PBR 512,65 milyon TL, DFI 443,48 milyon TL ve
                  TLY 441,99 milyon TL net giriş kaydetti. Yatırımcı sayısında
                  ise PHE +1.934 kişiyle öne çıkarken PBR +1.103, DFI +659 ve
                  TLY +344 yatırımcı artışıyla günü tamamladı.
                </p>
                <p className="mt-3">
                  Fon toplam değerindeki en yüksek artış TLY tarafında 2,66
                  milyar TL oldu. PHE 1,07 milyar TL, PBR 693,98 milyon TL ve
                  DFI 595,33 milyon TL büyüdü. Ancak fiyat beklentisi tarafında
                  tablo aynı değil: DFI&apos;de portföy etkisi para akışıyla
                  uyumlu şekilde pozitif kalırken, TLY, PHE ve PBR&apos;de para
                  girişi pozitif olmasına rağmen portföy etkisi negatif
                  hesaplandı.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Önümüzdeki Hafta Başında Hangi Portföy Hisseleri İzlenmeli?
                </h2>
                <p className="mt-3">
                  DFI tarafında ISKPL ve ABG, hafta başı fon fiyatı beklentisinin
                  ana pozitif başlıkları oldu. PBR için BALSU, PKZ ve PASEU; PHE
                  için BALSU, PKZ ve PASEU; TLY için OZATD ve TPKGY pozitif
                  katkıda öne çıkıyor.
                </p>
                <p className="mt-3">
                  Negatif tarafta ise DSTKF, TLY üzerinde belirleyici baskı
                  kurarken PHE ve PBR tarafında da negatif katkı verdi. KTLEV,
                  PHE ve PBR için en kritik baskı unsurlarından biri olurken,
                  DFI tarafında IEYHO negatif etki yarattı. Bu nedenle 17 Temmuz
                  kapanışında para girişlerinden çok portföy içindeki yüksek
                  ağırlıklı hisselerin günlük marjları, hafta başı fiyat
                  beklentisini belirleyen ana unsur oldu.
                </p>
              </section>

              <HaberIlgiliBolumler slug={href} baslik={baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber, TLY, PHE, PBR ve DFI fon etki analizi sayfalarındaki
                17 Temmuz 2026 kapanış verilerinden derlenmiştir. Hesaplama
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
