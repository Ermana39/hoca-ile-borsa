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

const slug = "13-temmuz-2026-onemli-kap-akfye-pgsus-ucaym-vestl-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "13 Temmuz 2026 Önemli KAP: AKFYE, PGSUS, UCAYM, VESTL Etkileri",
  description:
    "13 Temmuz 2026 KAP akışında AKFYE bedelsiz sermaye artırımı, PGSUS trafik verileri, UCAYM sözleşmesi, VESTL Moody’s not indirimi, AKSEN, SDTTR, MIATK, ALGYO, ASTOR, SARAE ve diğer önemli bildirimler öne çıktı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "13 Temmuz 2026 Önemli KAP: AKFYE, PGSUS, UCAYM, VESTL Etkileri",
    description:
      "13 Temmuz KAP özetinde yüksek oranlı bedelsiz, büyük sözleşmeler, halka arz sonuçları, kredi notu indirimi ve trafik verileri birlikte değerlendirildi.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "13 Temmuz 2026 önemli KAP haberleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13 Temmuz 2026 Önemli KAP: AKFYE, PGSUS, UCAYM, VESTL Etkileri",
    description:
      "AKFYE, PGSUS, UCAYM, VESTL, AKSEN, SDTTR, MIATK, ASTOR, ALGYO ve SARAE başta olmak üzere 13 Temmuz KAP akışı.",
    images: [haberGorsel],
  },
};

const anaBasliklar = [
  {
    kod: "AKFYE",
    baslik: "%500 bedelsiz sermaye artırımı kararı",
    etki: "Pozitif algı / SPK süreci takip",
    detay:
      "Akfen Yenilenebilir Enerji, sermayesini 1,196 milyar TL’den 7,181 milyar TL’ye çıkarmak için %500 bedelsiz sermaye artırımı kararı aldı. Artırımın tamamı emisyon primlerinden karşılanacak.",
    link: "/haber/akfye-500-bedelsiz-sermaye-artirimi-karari",
  },
  {
    kod: "PGSUS",
    baslik: "Haziran 2026 trafik verileri",
    etki: "Karışık / yolcu artışı var, doluluk zayıf",
    detay:
      "Pegasus Haziran ayında toplam misafir sayısını %3 artırarak 3,74 milyona taşıdı. İç hat yolcu sayısı %20 artarken dış hat yolcu sayısı %6 geriledi. Toplam doluluk oranı %85,7 oldu.",
    link: "/haber/pgsus-haziran-2026-trafik-verileri",
  },
  {
    kod: "UCAYM",
    baslik: "1,35 milyar TL’lik şehir hastanesi sözleşmesi",
    etki: "Pozitif / güçlü yeni iş ilişkisi",
    detay:
      "Üçay Mühendislik, İstanbul Sancaktepe Şehir Hastanesi projesinde mekanik ve elektrik işleri için toplam 1,347 milyar TL büyüklüğünde iki sözleşme imzaladı. Şirket ciro ve kârlılığa olumlu etki bekliyor.",
    link: "/haber/ucaym-sancaktepe-sehir-hastanesi-1-35-milyar-tl-sozlesme",
  },
  {
    kod: "VESTL",
    baslik: "Moody’s kredi notunu Caa3’e indirdi",
    etki: "Negatif / finansman algısı baskılanabilir",
    detay:
      "Moody’s, VESTL’in uzun vadeli CFR notunu Caa2’den Caa3’e, PDR notunu Caa2-PD’den Caa3-PD’ye düşürdü. 2029 vadeli 500 milyon dolarlık tahvil notu da Caa3’e çekildi; görünüm negatif kaldı.",
    link: "/haber/vestl-moodys-kredi-notunu-caa3e-indirdi",
  },
];

const bugunAyriHaberler = [
  {
    kod: "GLCVY",
    baslik: "Denizbank’ın 1,24 milyar TL’lik alacak portföyü ihalesinde en yüksek teklif",
    etki: "Pozitif / kesinleşme için banka onayı bekleniyor",
    link: "/haber/glcvy-denizbank-1-24-milyar-tl-alacak-portfoyu-ihalesi",
  },
  {
    kod: "ARDYZ",
    baslik: "Hatay EDS projesi devreye alındı",
    etki: "Pozitif / 15 yıllık gelir paylaşımı modeli",
    link: "/haber/ardyz-hatay-eds-projesi-devreye-alindi",
  },
  {
    kod: "YEOTK",
    baslik: "120 MWh bataryalı enerji depolama projesi için sözleşme",
    etki: "Pozitif / enerji depolama tarafı güçleniyor",
    link: "/haber/yeotk-120-mwh-bataryali-enerji-depolama-projesi",
  },
  {
    kod: "CEMAS",
    baslik: "%100 bedelsiz sermaye artırımı kararı",
    etki: "Pozitif algı / hak kullanım süreci izlenecek",
    link: "/haber/cemas-100-bedelsiz-sermaye-artirimi-karari",
  },
  {
    kod: "ASTOR",
    baslik: "ABD ile 31,7 milyon dolarlık güç transformatörü sözleşmesi",
    etki: "Pozitif / ihracat ve sipariş görünümü",
    link: "/haber/astor-abd-31-7-milyon-dolar-guc-transformatoru-sozlesmesi",
  },
  {
    kod: "ALGYO",
    baslik: "%200 bedelli sermaye artırımı için SPK başvurusu",
    etki: "Nötr-negatif / sermaye ihtiyacı ve sulanma etkisi izlenecek",
    link: "/haber/algyo-200-bedelli-sermaye-artirimi-spk-basvurusu",
  },
  {
    kod: "MIATK",
    baslik: "Tripy ve CalmCar arasında Robotaxi iş birliği",
    etki: "Pozitif hikâye / parasal tutar açıklanmadı",
    link: "/haber/miatk-tripy-calmcar-robotaxi-is-birligi",
  },
  {
    kod: "SDTTR",
    baslik: "5,35 milyon dolarlık savunma sistemleri sözleşmesi",
    etki: "Pozitif / teslimatlar 2026-2028",
    link: "/haber/sdttr-5-35-milyon-dolar-savunma-sistemleri-sozlesmesi",
  },
  {
    kod: "AKSEN",
    baslik: "Ghana Kumasi santralinde ilk faz 179 MW’a ulaştı",
    etki: "Pozitif / dolar bazlı 20 yıllık satış anlaşması",
    link: "/haber/aksen-ghana-kumasi-santrali-179-mw-kurulu-guce-ulasti",
  },
  {
    kod: "SARAE",
    baslik: "Halka arz sonuçları açıklandı",
    etki: "729.560 yatırımcı / bireyselde azami 156 lot",
    link: "/haber/sarae-halka-arz-sonuclari-aciklandi",
  },
  {
    kod: "AKFYE",
    baslik: "%500 bedelsiz sermaye artırımı kararı",
    etki: "Pozitif algı / SPK başvurusu takip",
    link: "/haber/akfye-500-bedelsiz-sermaye-artirimi-karari",
  },
  {
    kod: "PGSUS",
    baslik: "Haziran 2026 trafik verileri",
    etki: "Karışık / yolcu artışı var, doluluk zayıf",
    link: "/haber/pgsus-haziran-2026-trafik-verileri",
  },
  {
    kod: "UCAYM",
    baslik: "Sancaktepe Şehir Hastanesi için 1,35 milyar TL sözleşme",
    etki: "Pozitif / büyük ölçekli yeni iş",
    link: "/haber/ucaym-sancaktepe-sehir-hastanesi-1-35-milyar-tl-sozlesme",
  },
  {
    kod: "VESTL",
    baslik: "Moody’s kredi notu indirimi",
    etki: "Negatif / finansman risk algısı",
    link: "/haber/vestl-moodys-kredi-notunu-caa3e-indirdi",
  },
];

const gunSonuEkBasliklar = [
  {
    kod: "MARTI",
    baslik: "KAP akışında takip edilen ek başlıklar arasında yer aldı",
    okuma:
      "Ayrı haber yapılmayan ancak gün sonu KAP akışında izlenmesi gereken bildirimler içinde değerlendirildi.",
  },
  {
    kod: "EKIZ",
    baslik: "Gün sonu önemli KAP listesine eklendi",
    okuma:
      "Şirket özelindeki gelişme, ayrı haber seviyesine çıkarılmadan gün sonu özetinde takip edilecek başlıklar arasında yer aldı.",
  },
  {
    kod: "LXGYO",
    baslik: "Gün sonu önemli KAP listesine eklendi",
    okuma:
      "Gayrimenkul yatırım ortaklığı tarafındaki bildirim, gün sonu önemli KAP akışında izlenmesi gereken gelişmelerden biri oldu.",
  },
  {
    kod: "MZHLD",
    baslik: "Gün sonu önemli KAP listesine eklendi",
    okuma:
      "Şirket bildirimi, gün içi KAP yoğunluğu içinde ayrı haber yapılmayan ancak özet akışa eklenen başlıklardan biri oldu.",
  },
  {
    kod: "HDFVK",
    baslik: "Gün sonu önemli KAP listesine eklendi",
    okuma:
      "Finansman ve yapılandırma niteliğindeki bildirimler kapsamında gün sonu özetinde yer verilmesi uygun görüldü.",
  },
  {
    kod: "CELHA",
    baslik: "Gün sonu önemli KAP listesine eklendi",
    okuma:
      "Şirket özelindeki gelişme, ayrı haber yapılmadan gün sonu önemli KAP başlıkları arasında izlenecek.",
  },
];

const oneCikanTemalar = [
  {
    baslik: "Bedelsiz ve sermaye artırımı haberleri öne çıktı",
    aciklama:
      "AKFYE’nin %500 bedelsiz kararı ve CEMAS’ın %100 bedelsiz kararı günün sermaye artırımı tarafındaki en dikkat çeken başlıkları oldu. ALGYO tarafında ise %200 bedelli başvurusu ayrı bir sermaye ihtiyacı başlığı olarak öne çıktı.",
  },
  {
    baslik: "Sözleşme haberlerinde UCAYM, ASTOR ve SDTTR dikkat çekti",
    aciklama:
      "UCAYM’in 1,35 milyar TL’ye yaklaşan şehir hastanesi sözleşmesi, ASTOR’un 31,7 milyon dolarlık ABD sözleşmesi ve SDTTR’nin 5,35 milyon dolarlık savunma sistemleri sözleşmesi doğrudan ciro potansiyeli taşıyan gelişmeler oldu.",
  },
  {
    baslik: "Operasyonel verilerde PGSUS karışık sinyal verdi",
    aciklama:
      "PGSUS toplam yolcu sayısında büyüme açıklasa da dış hat yolcu sayısındaki gerileme ve doluluk oranındaki düşüş nedeniyle veri seti tek yönlü pozitif okunmadı.",
  },
  {
    baslik: "VESTL tarafında finansman algısı baskılandı",
    aciklama:
      "Moody’s’in not indirimi, VESTL için günün negatif ayrışan başlığı oldu. Şirketin kredi notu ve 2029 vadeli tahvil notu aşağı çekilirken görünüm negatif kaldı.",
  },
  {
    baslik: "Halka arz tarafında SARAE sonuçları açıklandı",
    aciklama:
      "Şa-Ra Enerji halka arzında 729.560 yatırımcıya dağıtım yapıldı. Bireysel yatırımcı başına en fazla 156 lot verilmesi ve toplam talep görünümü ilk işlem günü öncesi takip edilecek ana veri oldu.",
  },
];

const piyasaOkumasi = [
  "13 Temmuz KAP akışı oldukça yoğundu ve ayrı haber yapılabilecek bildirim sayısı normal günlerin belirgin üzerinde oluştu.",
  "Bugünkü haberlerin tamamı aynı ağırlıkta değil; bazıları doğrudan ciro yaratabilecek sözleşme, bazıları sermaye işlemi, bazıları ise finansal risk algısı niteliğinde.",
  "AKFYE, CEMAS ve ALGYO sermaye artırımı tarafında; UCAYM, ASTOR, SDTTR ve AKSEN proje/sözleşme tarafında öne çıktı.",
  "VESTL not indirimi negatif tarafta ayrışırken, PGSUS verileri karışık bir tablo sundu.",
  "Gün sonu KAP özetinde ayrı haber yapılan başlıklar da dahil edildiği için bu sayfa günün genel KAP akışını tek sayfada toparlıyor.",
];

const takipBasliklari = [
  "AKFYE ve CEMAS tarafında SPK süreci ve hak kullanım tarihleri",
  "UCAYM, ASTOR ve SDTTR sözleşmelerinin finansallara yansıma hızı",
  "VESTL tarafında finansman maliyeti ve kredi notu görünümü",
  "PGSUS Temmuz-Ağustos trafik verileri ve dış hat performansı",
  "SARAE işlem başlangıcı ve ilk gün emir dengesi",
  "MIATK Robotaxi iş birliğinde somut proje/tutar açıklaması gelip gelmeyeceği",
  "AKSEN Ghana projesinde ikinci faz gelişmeleri",
];

const ilgiliHisseler = [
  "GLCVY",
  "ARDYZ",
  "YEOTK",
  "CEMAS",
  "ASTOR",
  "ALGYO",
  "MIATK",
  "SDTTR",
  "AKSEN",
  "SARAE",
  "AKFYE",
  "PGSUS",
  "UCAYM",
  "VESTL",
  "MARTI",
  "EKIZ",
  "LXGYO",
  "MZHLD",
  "HDFVK",
  "CELHA",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "13 Temmuz 2026 Önemli KAP: AKFYE, PGSUS, UCAYM, VESTL Etkileri",
  description:
    "13 Temmuz 2026 KAP akışında AKFYE bedelsiz sermaye artırımı, PGSUS trafik verileri, UCAYM sözleşmesi, VESTL Moody’s not indirimi, AKSEN, SDTTR, MIATK, ALGYO, ASTOR, SARAE ve diğer önemli bildirimler öne çıktı.",
  image: haberGorsel,
  datePublished: "2026-07-13T22:40:00+03:00",
  dateModified: "2026-07-13T22:40:00+03:00",
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

export default function OnUcTemmuzOnemliKapPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="13 Temmuz 2026 önemli KAP haberleri"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              13 Temmuz 2026 Önemli KAP: AKFYE, PGSUS, UCAYM, VESTL Etkileri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Gün Sonu KAP Özeti
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
                13 Temmuz 2026 KAP akışı, son dönemin en yoğun günlerinden biri
                oldu. Gün içinde bedelsiz ve bedelli sermaye artırımı kararları,
                büyük ölçekli sözleşmeler, halka arz sonuçları, trafik verileri
                ve kredi notu indirimi gibi farklı başlıklarda çok sayıda
                bildirim geldi.
              </p>

              <p>
                Günün ana başlıklarında <strong>AKFYE</strong> %500 bedelsiz
                kararıyla, <strong>UCAYM</strong> 1,35 milyar TL’lik sözleşmeyle,
                <strong> PGSUS</strong> Haziran trafik verileriyle ve{" "}
                <strong>VESTL</strong> Moody’s not indirimiyle öne çıktı. Gün
                içinde ayrı haber yapılan diğer önemli KAP bildirimleri de bu
                sayfada tek akış altında toplandı.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {anaBasliklar.map((item) => (
                  <Link
                    key={item.kod}
                    href={item.link}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4 transition hover:border-blue-300 hover:bg-blue-100"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.kod}
                    </div>
                    <div className="mt-1 text-lg font-bold leading-tight text-blue-950">
                      {item.baslik}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-blue-800">
                      {item.etki}
                    </div>
                  </Link>
                ))}
              </div>

              <Section title="Günün en önemli KAP başlıkları">
                <div className="grid gap-4">
                  {anaBasliklar.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.kod} — {item.baslik}
                        </h3>
                        <span className="rounded-md bg-white px-3 py-1 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
                          {item.etki}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.detay}
                      </p>
                      <Link
                        href={item.link}
                        className="mt-3 inline-block text-sm font-bold text-blue-700 underline underline-offset-4"
                      >
                        Haberi oku
                      </Link>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="13 Temmuz’da ayrı haber yapılan önemli KAP bildirimleri">
                <div className="overflow-x-auto">
                  <table className="min-w-[900px] overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Hisse</th>
                        <th className="px-4 py-3 text-left font-semibold">Başlık</th>
                        <th className="px-4 py-3 text-left font-semibold">Kısa Okuma</th>
                        <th className="px-4 py-3 text-left font-semibold">Haber</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bugunAyriHaberler.map((item, index) => (
                        <tr
                          key={`${item.kod}-${index}`}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.baslik}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.etki}
                          </td>
                          <td className="px-4 py-3">
                            <Link
                              href={item.link}
                              className="font-bold text-blue-700 underline underline-offset-4"
                            >
                              Aç
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Gün sonu özetine eklenen diğer önemli KAP başlıkları">
                <div className="grid gap-4 md:grid-cols-2">
                  {gunSonuEkBasliklar.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.kod} — {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.okuma}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Bugünkü KAP akışı nasıl okunmalı?">
                <div className="grid gap-4">
                  {oneCikanTemalar.map((item) => (
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

              <Section title="Piyasa etkisi açısından özet">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bugünkü KAP akışında pozitif, negatif ve karışık okunabilecek
                  bildirimler bir aradaydı. Bu nedenle tüm günü tek bir yönde
                  değerlendirmek doğru olmaz. Sözleşme ve bedelsiz haberleri
                  pozitif algı yaratabilecek başlıklar olurken, VESTL tarafındaki
                  not indirimi günün olumsuz ayrışan gelişmesi oldu.
                </p>

                <div className="mt-4 grid gap-3">
                  {piyasaOkumasi.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
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

              <Section title="İlgili hisseler">
                <div className="flex flex-wrap gap-2">
                  {ilgiliHisseler.map((kod) => (
                    <Link
                      key={kod}
                      href={`/hisse/${kod.toLowerCase()}`}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-200"
                    >
                      {kod}
                    </Link>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.kap.org.tr/tr/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block font-medium text-slate-700 underline underline-offset-2"
                  >
                    Kamuyu Aydınlatma Platformu — Orjinal Kap içerikleri
                  </a>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="13 Temmuz 2026 Önemli KAP: AKFYE, PGSUS, UCAYM, VESTL Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. KAP bildirimlerinin fiyat etkisi; piyasa
                koşulları, işlem hacmi, şirket finansalları ve sonraki açıklamalarla
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