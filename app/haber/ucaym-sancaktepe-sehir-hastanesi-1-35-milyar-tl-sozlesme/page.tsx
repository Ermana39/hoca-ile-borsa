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

const slug = "ucaym-sancaktepe-sehir-hastanesi-1-35-milyar-tl-sozlesme";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/ucaym-sancaktepe-sehir-hastanesi-1-35-milyar-tl-sozlesme.webp";

export const metadata: Metadata = {
  title:
    "UCAYM Sancaktepe Şehir Hastanesi İçin 1,35 Milyar TL’lik Sözleşme İmzaladı",
  description:
    "Üçay Mühendislik, REC Uluslararası İnşaat ile İstanbul Sancaktepe Şehir Hastanesi projesinde mekanik ve elektrik işleri için toplam 1,35 milyar TL büyüklüğünde iki sözleşme imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "UCAYM Sancaktepe Şehir Hastanesi İçin 1,35 Milyar TL’lik Sözleşme İmzaladı",
    description:
      "UCAYM, Sancaktepe Şehir Hastanesi projesinde mekanik ve elektrik işleri için toplam 1,35 milyar TL’lik yeni iş ilişkisi açıkladı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "UCAYM Sancaktepe Şehir Hastanesi 1,35 milyar TL sözleşme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UCAYM Sancaktepe Şehir Hastanesi İçin 1,35 Milyar TL’lik Sözleşme İmzaladı",
    description:
      "UCAYM, İstanbul Sancaktepe Şehir Hastanesi projesinde mekanik ve elektrik işleri için iki sözleşme imzaladı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Toplam Büyüklük",
    deger: "1,35 Mr TL",
    aciklama: "KDV hariç iki sözleşme toplamı",
  },
  {
    baslik: "Mekanik İşler",
    deger: "801,9 Mn TL",
    aciklama: "MHC mekanik sözleşmesi",
  },
  {
    baslik: "Elektrik İşleri",
    deger: "545,5 Mn TL",
    aciklama: "MHC elektrik işleri sözleşmesi",
  },
  {
    baslik: "Planlanan Bitiş",
    deger: "01.04.2028",
    aciklama: "Her iki iş için hedef tarih",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Üçay Mühendislik Enerji ve İklimlendirme Teknolojileri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "UCAYM",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "20:03:45",
  },
  {
    etiket: "Açıklama Türü",
    deger: "Yeni İş İlişkisi",
  },
  {
    etiket: "Müşteri",
    deger: "REC Uluslararası İnşaat Yatırım Sanayi ve Ticaret A.Ş.",
  },
  {
    etiket: "Proje",
    deger: "İstanbul Sancaktepe Şehir Hastanesi Yapım İşi Projesi",
  },
  {
    etiket: "Sözleşme Sayısı",
    deger: "2 ayrı sözleşme",
  },
  {
    etiket: "Toplam Sözleşme Büyüklüğü",
    deger: "1.347.411.834,45 TL",
  },
  {
    etiket: "Toplam Avans Büyüklüğü",
    deger: "174.410.050,07 TL",
  },
  {
    etiket: "Planlanan Bitiş Tarihi",
    deger: "01.04.2028",
  },
  {
    etiket: "Faaliyetlere Etki",
    deger: "Ciro ve kârlılığı olumlu etkilemesi bekleniyor",
  },
];

const sozlesmeler = [
  {
    baslik: "Mekanik İşler (MHC)",
    konu: "İstanbul Sancaktepe Şehir Hastanesi Yapım İşi Projesi Mekanik sözleşmesi",
    tl: "540.665.565,00 TL",
    usd: "5.558.077,00 USD",
    toplam: "801.876.286,54 TL",
    avans: "119.369.236,88 TL",
    bitis: "01.04.2028",
  },
  {
    baslik: "Elektrik İşleri (MHC)",
    konu: "İstanbul Sancaktepe Şehir Hastanesi Yapım İşi Projesi Elektrik İşleri sözleşmesi",
    tl: "371.743.625,00 TL",
    usd: "3.697.968,00 USD",
    toplam: "545.535.547,91 TL",
    avans: "55.040.813,19 TL",
    bitis: "01.04.2028",
  },
];

const toplamHesap = [
  {
    kalem: "TL bazlı sözleşme kısmı",
    tutar: "912.409.190,00 TL",
    aciklama: "Mekanik ve elektrik sözleşmelerindeki TL tutarlarının toplamı",
  },
  {
    kalem: "USD bazlı sözleşme kısmı",
    tutar: "9.256.045,00 USD",
    aciklama: "Mekanik ve elektrik sözleşmelerindeki dolar tutarlarının toplamı",
  },
  {
    kalem: "KAP’ta açıklanan TL karşılığı toplam",
    tutar: "1.347.411.834,45 TL",
    aciklama: "13.07.2026 Merkez Bankası döviz satış kuru esas alınarak hesaplanan toplam büyüklük",
  },
  {
    kalem: "Teminat mektubu karşılığı alınacak toplam avans",
    tutar: "174.410.050,07 TL",
    aciklama: "İki sözleşme kapsamında tahsil edilecek toplam avans büyüklüğü",
  },
];

const projeOkumasi = [
  {
    baslik: "Şehir hastanesi ölçeğinde proje",
    aciklama:
      "Sözleşmeler İstanbul Sancaktepe Şehir Hastanesi yapım işi kapsamında imzalandı. Bu tip büyük ölçekli sağlık yatırımlarında mekanik ve elektrik altyapısı, projenin ana teknik omurgasını oluşturur.",
  },
  {
    baslik: "İki ayrı iş kalemi var",
    aciklama:
      "UCAYM aynı proje içinde hem mekanik işler hem de elektrik işleri tarafında sözleşme imzaladı. Bu yapı, şirketin proje içindeki iş kapsamını genişletiyor.",
  },
  {
    baslik: "Toplam büyüklük 1,35 milyar TL seviyesinde",
    aciklama:
      "KAP açıklamasında iki sözleşmenin toplam TL karşılığı 1,347 milyar TL olarak hesaplandı. Bu büyüklük UCAYM için ayrı haber yapılmasını gerektiren seviyede güçlü bir iş ilişkisine işaret ediyor.",
  },
  {
    baslik: "Avans tahsilatı nakit akışı açısından önemli",
    aciklama:
      "Sözleşmeler kapsamında teminat mektubu karşılığı toplam 174,4 milyon TL avans tahsil edilecek. Avans yapısı, projenin başlangıç finansmanı ve işin nakit akışı açısından takip edilecek.",
  },
];

const finansalOkuma = [
  "Sözleşme toplamı KDV hariç 1,347 milyar TL olarak açıklandı.",
  "Şirket, yeni iş ilişkisinin ciro ve kârlılığı olumlu etkilemesini bekliyor.",
  "İşlerin planlanan bitiş tarihi 01.04.2028 olduğu için gelir etkisi zamana yayılabilir.",
  "Sözleşmelerde hem TL hem dolar bazlı tutarlar bulunuyor; kur tarafı TL karşılığı üzerinde etkili olacak.",
  "Toplam 174,4 milyon TL avans tahsilatı, proje başlangıcı ve nakit akışı açısından pozitif başlık.",
  "Finansal etki; iş ilerleme oranı, hakediş takvimi, maliyet yönetimi ve faturalama dönemleriyle netleşecek.",
];

const takipBasliklari = [
  "Proje ilerleme ve hakediş takvimi",
  "Avans tahsilatının gerçekleşmesi",
  "Mekanik ve elektrik işlerinde teslimat süreci",
  "2026, 2027 ve 2028 finansallarına yansıma hızı",
  "Sözleşme kârlılığı ve maliyet yönetimi",
  "UCAYM’in yeni büyük ölçekli proje açıklamaları",
];

const seoSorular = [
  {
    soru: "UCAYM ne açıkladı?",
    cevap:
      "UCAYM, REC Uluslararası İnşaat ile İstanbul Sancaktepe Şehir Hastanesi Yapım İşi Projesi kapsamında mekanik ve elektrik işleri için iki ayrı sözleşme imzaladığını açıkladı.",
  },
  {
    soru: "UCAYM sözleşmelerinin toplam büyüklüğü kaç TL?",
    cevap:
      "KAP açıklamasına göre iki sözleşmenin toplam büyüklüğü KDV hariç 1.347.411.834,45 TL olarak hesaplandı.",
  },
  {
    soru: "UCAYM hangi projede sözleşme imzaladı?",
    cevap:
      "Sözleşmeler İstanbul Sancaktepe Şehir Hastanesi Yapım İşi Projesi kapsamında mekanik ve elektrik işleri için imzalandı.",
  },
  {
    soru: "UCAYM sözleşmelerinin planlanan bitiş tarihi nedir?",
    cevap:
      "Her iki sözleşme için planlanan bitiş tarihi 01.04.2028 olarak açıklandı.",
  },
  {
    soru: "UCAYM sözleşmeleri hisse açısından neden önemli?",
    cevap:
      "Toplam 1,35 milyar TL’ye yaklaşan sözleşme büyüklüğü, şirketin ciro ve kârlılığına olumlu katkı beklentisi ve 174,4 milyon TL avans yapısı nedeniyle önemli bir yeni iş ilişkisi olarak öne çıkıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "UCAYM Sancaktepe Şehir Hastanesi İçin 1,35 Milyar TL’lik Sözleşme İmzaladı",
  description:
    "Üçay Mühendislik, REC Uluslararası İnşaat ile İstanbul Sancaktepe Şehir Hastanesi projesinde mekanik ve elektrik işleri için toplam 1,35 milyar TL büyüklüğünde iki sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-13T20:03:45+03:00",
  dateModified: "2026-07-13T20:03:45+03:00",
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

export default function UcaymSancaktepeSehirHastanesiPage() {
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
              src="/ucaym-sancaktepe-sehir-hastanesi-1-35-milyar-tl-sozlesme.webp"
              alt="UCAYM Sancaktepe Şehir Hastanesi 1,35 milyar TL sözleşme"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              UCAYM Sancaktepe Şehir Hastanesi İçin 1,35 Milyar TL’lik Sözleşme İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
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
                Üçay Mühendislik Enerji ve İklimlendirme Teknolojileri A.Ş. (
                <strong>UCAYM</strong>), İstanbul Sancaktepe Şehir Hastanesi
                Yapım İşi Projesi kapsamında REC Uluslararası İnşaat Yatırım
                Sanayi ve Ticaret A.Ş. ile iki ayrı sözleşme imzaladığını
                açıkladı.
              </p>

              <p>
                KAP açıklamasına göre mekanik işler ve elektrik işleri için
                imzalanan sözleşmelerin toplam büyüklüğü KDV hariç{" "}
                <strong>1.347.411.834,45 TL</strong> seviyesinde. Şirket, bu yeni
                iş ilişkisinin ciro ve kârlılığı olumlu etkilemesini bekliyor.
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
                  UCAYM, Sancaktepe Şehir Hastanesi projesinde mekanik ve elektrik
                  işleri tarafında iki ayrı sözleşme aldı. Mekanik işler
                  sözleşmesinin TL karşılığı 801,9 milyon TL, elektrik işleri
                  sözleşmesinin TL karşılığı ise 545,5 milyon TL olarak açıklandı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Her iki sözleşmenin de planlanan bitiş tarihi 01.04.2028.
                  Sözleşmeler kapsamında toplam 174,4 milyon TL tutarında teminat
                  mektubu karşılığı avans tahsil edilmesi bekleniyor.
                </p>
              </Section>

              <Section title="Sözleşmenin ana detayları">
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

              <Section title="Mekanik ve elektrik sözleşmeleri">
                <div className="grid gap-4">
                  {sozlesmeler.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.konu}
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-white p-3 text-sm">
                          <span className="text-slate-500">TL Tutar</span>
                          <div className="font-bold text-slate-900">{item.tl}</div>
                        </div>
                        <div className="rounded-xl bg-white p-3 text-sm">
                          <span className="text-slate-500">USD Tutar</span>
                          <div className="font-bold text-slate-900">{item.usd}</div>
                        </div>
                        <div className="rounded-xl bg-white p-3 text-sm">
                          <span className="text-slate-500">Toplam TL Karşılığı</span>
                          <div className="font-bold text-blue-700">{item.toplam}</div>
                        </div>
                        <div className="rounded-xl bg-white p-3 text-sm">
                          <span className="text-slate-500">Avans</span>
                          <div className="font-bold text-emerald-700">{item.avans}</div>
                        </div>
                        <div className="rounded-xl bg-white p-3 text-sm sm:col-span-2">
                          <span className="text-slate-500">Planlanan Bitiş</span>
                          <div className="font-bold text-slate-900">{item.bitis}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Toplam sözleşme ve avans büyüklüğü">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Kalem</th>
                        <th className="px-4 py-3 text-left font-semibold">Tutar</th>
                        <th className="px-4 py-3 text-left font-semibold">Açıklama</th>
                      </tr>
                    </thead>
                    <tbody>
                      {toplamHesap.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.kalem}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.tutar}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.aciklama}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Bu sözleşme neden önemli?">
                <div className="grid gap-4">
                  {projeOkumasi.map((item) => (
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
                  UCAYM açısından bu açıklama doğrudan ciroya katkı potansiyeli
                  taşıyan güçlü bir yeni iş ilişkisi. Ancak sözleşmelerin planlanan
                  bitiş tarihi 2028 olduğu için gelir katkısı, iş ilerleme oranı ve
                  hakediş takvimiyle birlikte finansallara yayılabilir.
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
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  UCAYM için 1,35 milyar TL’ye yaklaşan sözleşme büyüklüğü, şirket
                  ölçeği açısından dikkat çekici bir iş ilişkisi olarak öne çıkıyor.
                  Ayrıca projenin şehir hastanesi gibi büyük ölçekli bir kamu
                  yatırımıyla bağlantılı olması, işin görünürlüğünü artırıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Kısa vadede haber akışı olumlu algılanabilir. Orta vadede ise
                  asıl belirleyici başlıklar; hakedişlerin finansallara yansıması,
                  maliyet yönetimi, avans tahsilatı ve proje takviminin planlandığı
                  şekilde ilerleyip ilerlemeyeceği olacak.
                </p>
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

              <Section title="UCAYM sözleşmesi hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1632935"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  UCAYM — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="UCAYM Sancaktepe Şehir Hastanesi İçin 1,35 Milyar TL’lik Sözleşme İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Sözleşmenin finansal etkisi; proje ilerleme
                oranı, hakediş takvimi, maliyet yönetimi ve şirketin sonraki
                finansal sonuçlarıyla birlikte değerlendirilmelidir.
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