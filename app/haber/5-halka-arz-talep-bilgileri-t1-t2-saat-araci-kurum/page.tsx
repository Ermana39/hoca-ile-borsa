import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const haberSlug = "5-halka-arz-talep-bilgileri-t1-t2-saat-araci-kurum";
const haberBaslik =
  "5 Halka Arzda Talep Bilgileri: T1/T2, Saat ve Aracı Kurumlar";
const haberAciklama =
  "SOHO, GOLDA, ISVEA, ORZAX ve EKIM halka arzlarında talep saatleri, T1/T2 bakiye kullanımı, dağıtım yöntemi ve aracı kurum bilgileri.";
const haberGorsel = "/5-halka-arz-talep-bilgileri.webp";

export const metadata: Metadata = {
  title: "5 Halka Arzda Talep Bilgileri",
  description: haberAciklama,
  alternates: {
    canonical: `https://www.hocaileborsa.com/haber/${haberSlug}`,
  },
  openGraph: {
    type: "article",
    title: haberBaslik,
    description: haberAciklama,
    images: [
      {
        url: `https://www.hocaileborsa.com${haberGorsel}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: haberBaslik,
    description: haberAciklama,
    images: [`https://www.hocaileborsa.com${haberGorsel}`],
  },
};

const halkaArzlar = [
  {
    sirket: "Soho Giyim ve Enerji A.Ş.",
    marka: "SOHO",
    kod: "SOHOE",
    talepTarihi: "30 Haziran - 1 Temmuz 2026",
    fiyat: "15,00 TL",
    dagitim: "Tamamen eşit dağıtım",
    dagitimDetayi: "Borsa İstanbul Birincil Piyasa üzerinden tamamen eşit dağıtım",
    talepSaati: "10:30 - 13:00",
    t1t2: "Kullanılabilir",
    t1t2Uygun: true,
    araciKurumOzeti: "Tüm banka ve aracı kurumlar",
    araciKurumlar: ["Tüm banka ve aracı kurumlar"],
    izahnameHref: "/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji",
    yorum:
      "SOHO halka arzı tamamen eşit dağıtım yöntemiyle talep toplayacak. Bu yöntemde başvuru işlemi hisse alır gibi yapıldığı için T1/T2 bakiye kullanılabilir. Talep toplama saatleri 10:30 - 13:00 aralığıdır.",
  },
  {
    sirket: "Golda Gıda Sanayi ve Ticaret A.Ş.",
    marka: "GOLDA",
    kod: "GOLDA",
    talepTarihi: "1-2 Temmuz 2026",
    fiyat: "9,20 TL",
    dagitim: "Tamamen eşit dağıtım",
    dagitimDetayi: "Borsa İstanbul Birincil Piyasa üzerinden tamamen eşit dağıtım",
    talepSaati: "10:30 - 13:00",
    t1t2: "Kullanılabilir",
    t1t2Uygun: true,
    araciKurumOzeti: "Tüm banka ve aracı kurumlar",
    araciKurumlar: ["Tüm banka ve aracı kurumlar"],
    izahnameHref: "/halka-arz/onayli-izahnameler/golda-gida-sanayi-ve-ticaret",
    yorum:
      "GOLDA halka arzı da tamamen eşit dağıtım kapsamında yer alıyor. Bu nedenle yatırımcılar halka arza tüm banka ve aracı kurumlar üzerinden katılabilir. T1/T2 bakiye kullanılabilir ve talep saatleri 10:30 - 13:00 olarak takip edilir.",
  },
  {
    sirket: "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.",
    marka: "ISVEA",
    kod: "ISVEA",
    talepTarihi: "1-2-3 Temmuz 2026",
    fiyat: "20,90 TL",
    dagitim: "Bireysele eşit dağıtım",
    dagitimDetayi: "Yurt içi bireysel %60, yurt içi kurumsal %40",
    talepSaati: "09:00 - 17:00",
    t1t2: "Kullanılamaz",
    t1t2Uygun: false,
    araciKurumOzeti:
      "Halk Yatırım ve Ahlatcı Yatırım liderliğinde konsorsiyum",
    araciKurumlar: [
      "Halk Yatırım",
      "Ahlatcı Yatırım",
      "A1 Capital",
      "Acar",
      "Ak Yatırım",
      "Alnus",
      "Alternatif",
      "Anadolu",
      "Ata",
      "Bizim",
      "Bulls",
      "Burgan",
      "BTC Türk",
      "Colendi",
      "Deniz",
      "Dinamik",
      "Garanti",
      "Gedik",
      "Global",
      "ICBC",
      "ING",
      "Investaz",
      "İntegral",
      "İnfo",
      "İş Yatırım",
      "Kuveyt Türk",
      "Marbaş",
      "Meksa",
      "Osmanlı",
      "Oyak",
      "PhillipCapital",
      "Pusula",
      "QNB",
      "Şeker",
      "Tacirler",
      "Tera",
      "Trive Turkish",
      "Ünlü",
      "Vakıf",
      "Yapı Kredi",
      "Yatırım Finansman",
      "Ziraat Yatırım",
    ],
    izahnameHref:
      "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri",
    yorum:
      "ISVEA halka arzı bireysele eşit dağıtım tarafında yer aldığı için T1/T2 bakiye kullanımı bulunmuyor. Başvurular konsorsiyum üyeleri üzerinden 09:00 - 17:00 saatleri arasında yapılabilecek.",
  },
  {
    sirket: "Orzaks İlaç ve Kimya Sanayi Ticaret A.Ş.",
    marka: "ORZAX",
    kod: "ORZAX",
    talepTarihi: "29-30 Haziran / 1 Temmuz 2026",
    fiyat: "69,00 TL",
    dagitim: "Bireysele eşit dağıtım",
    dagitimDetayi:
      "Yurt içi bireysel %57, yurt içi kurumsal %30, yurt dışı kurumsal %10, grup çalışanları %3",
    talepSaati: "09:00 - 17:00",
    t1t2: "Kullanılamaz",
    t1t2Uygun: false,
    araciKurumOzeti: "İnfo Yatırım liderliğinde konsorsiyum",
    araciKurumlar: [
      "İnfo Yatırım",
      "A1 Capital",
      "Acar",
      "Ahlatcı",
      "Ak Yatırım",
      "Alnus",
      "Alternatif",
      "Ata",
      "Bizim",
      "Bulls",
      "Burgan",
      "BTC Türk",
      "Colendi",
      "Deniz",
      "Destek",
      "Dinamik",
      "Fiba",
      "Garanti",
      "Gedik",
      "Global",
      "Halk",
      "ICBC",
      "ING",
      "Investaz",
      "İntegral",
      "İş Yatırım",
      "Kuveyt Türk",
      "Marbaş",
      "Meksa",
      "Midas",
      "Osmanlı",
      "Oyak",
      "PhillipCapital",
      "Piramit",
      "Pusula",
      "QNB",
      "Strateji",
      "Şeker",
      "Tacirler",
      "Tera",
      "Trive",
      "Turkish",
      "Ünlü",
      "Vakıf",
      "Yapı Kredi",
      "Yatırım Finansman",
      "Ziraat Yatırım",
    ],
    izahnameHref:
      "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-sanayi-ticaret",
    yorum:
      "ORZAX halka arzı bireysel, kurumsal, yurt dışı kurumsal ve grup çalışanları tahsisatlarından oluşan karma yapıda talep toplayacak. Bu nedenle T1/T2 bakiye kullanılamaz. Talep işlemleri 09:00 - 17:00 saatleri arasında konsorsiyum üyeleri üzerinden yapılabilecek.",
  },
  {
    sirket: "Ekim Turizm Ticaret ve Sanayi A.Ş.",
    marka: "INTERCITY",
    kod: "EKIM",
    talepTarihi: "1-2-3 Temmuz 2026",
    fiyat: "30,26 TL",
    dagitim: "Bireysel / karma dağıtım",
    dagitimDetayi:
      "Yurt içi bireysel %70, yurt içi kurumsal %20, yüksek başvuru %10",
    talepSaati: "09:00 - 17:00",
    t1t2: "Kullanılamaz",
    t1t2Uygun: false,
    araciKurumOzeti:
      "Ak Yatırım ve Vakıf Yatırım liderliğinde konsorsiyum",
    araciKurumlar: [
      "Ak Yatırım",
      "Vakıf Yatırım",
      "A1 Capital",
      "Acar",
      "Ahlatcı",
      "ALB",
      "Alnus",
      "Alternatif",
      "Anadolu",
      "Ata",
      "Bizim",
      "BTC Türk",
      "Bulls",
      "Burgan",
      "Colendi",
      "Deniz",
      "Destek",
      "Dinamik",
      "Fiba",
      "Gedik",
      "Global",
      "Halk",
      "ICBC",
      "ING",
      "Investaz",
      "İnfo",
      "İntegral",
      "İş Yatırım",
      "Kuveyt Türk",
      "Marbaş",
      "Meksa",
      "Osmanlı",
      "Oyak",
      "PhillipCapital",
      "Piramit",
      "QNB",
      "Şeker",
      "Tacirler",
      "Trive",
      "Turkish",
      "Ünlü",
      "Vakıf",
      "Yapı Kredi",
      "Yatırım Finansman",
      "Ziraat Yatırım",
    ],
    izahnameHref: "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san",
    yorum:
      "Intercity markasıyla bilinen Ekim Turizm halka arzında dağıtım yapısı yurt içi bireysel, yurt içi kurumsal ve yüksek başvuru gruplarından oluşuyor. Bu halka arzda T1/T2 bakiye kullanılamaz. Başvuru saatleri 09:00 - 17:00 aralığıdır.",
  },
];

const tamamenEsitDagitim = halkaArzlar.filter(
  (item) => item.dagitim === "Tamamen eşit dağıtım"
);

const bireyselKarmaDagitim = halkaArzlar.filter(
  (item) => item.dagitim !== "Tamamen eşit dağıtım"
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: haberBaslik,
  description: haberAciklama,
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: `https://www.hocaileborsa.com/haber/${haberSlug}`,
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
  image: `https://www.hocaileborsa.com${haberGorsel}`,
  inLanguage: "tr",
};

function AraciKurumListesi({ kurumlar }: { kurumlar: string[] }) {
  if (kurumlar.length === 1) {
    return <span>{kurumlar[0]}</span>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {kurumlar.map((kurum) => (
        <span
          key={kurum}
          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
        >
          {kurum}
        </span>
      ))}
    </div>
  );
}

export default function HaberPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-square w-full overflow-hidden bg-zinc-100 md:aspect-[16/9]">
            <Image
              src={haberGorsel}
              alt="5 halka arz talep bilgileri T1 T2 bakiye saat ve aracı kurum tablosu"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              5 Halka Arzda Talep Bilgileri: T1/T2, Saat ve Aracı Kurumlar
            </h1>

            <div className="mb-4 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Talep Bilgileri
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
                Halka arz takviminde aynı döneme denk gelen{" "}
                <strong>SOHO, GOLDA, ISVEA, ORZAX ve EKIM</strong> için
                yatırımcıların en çok merak ettiği konuların başında talep
                toplama yöntemi, talep saatleri, T1/T2 bakiye kullanımı ve hangi
                aracı kurumlar üzerinden başvuru yapılabileceği geliyor.
              </p>

              <p>
                Bu 5 halka arz içinde <strong>SOHO</strong> ve{" "}
                <strong>GOLDA</strong> tamamen eşit dağıtım yöntemiyle talep
                toplarken; <strong>ISVEA</strong>, <strong>ORZAX</strong> ve{" "}
                <strong>EKIM</strong> bireysel / karma dağıtım yapısıyla
                yatırımcı karşısına çıkıyor. Dağıtım yöntemindeki bu fark, talep
                ekranını, saat aralığını ve T1/T2 bakiye kullanımını doğrudan
                etkiliyor.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  T1/T2 Bakiye Hangi Halka Arzlarda Kullanılabilir?
                </h2>

                <p className="mt-2">
                  Tamamen eşit dağıtım yöntemiyle Borsa İstanbul Birincil Piyasa
                  üzerinden yapılan halka arzlarda talep işlemi hisse alır gibi
                  yapılır. Bu nedenle <strong>SOHO</strong> ve{" "}
                  <strong>GOLDA</strong> halka arzlarında T1/T2 bakiye
                  kullanılabilir.
                </p>

                <p className="mt-2">
                  Bireysel ya da karma dağıtım yöntemiyle talep toplayan halka
                  arzlarda ise başvuru talep toplama ekranından yapılır. Bu
                  tarafta <strong>ISVEA</strong>, <strong>ORZAX</strong> ve{" "}
                  <strong>EKIM</strong> halka arzlarında T1/T2 bakiye
                  kullanılamaz.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Talep Toplama Saatleri Nasıl Ayrışıyor?
                </h2>

                <p className="mt-2">
                  Bu haftaki halka arzlarda talep saatleri dağıtım yöntemine
                  göre farklılaşıyor. <strong>SOHO</strong> ve{" "}
                  <strong>GOLDA</strong> için talep saatleri{" "}
                  <strong>10:30 - 13:00</strong> olarak takip edilirken;{" "}
                  <strong>ISVEA</strong>, <strong>ORZAX</strong> ve{" "}
                  <strong>EKIM</strong> için başvuru saatleri{" "}
                  <strong>09:00 - 17:00</strong> aralığında olacak.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Özet Tablo: Yöntem, Saat ve T1/T2 Durumu
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Şirket</th>
                        <th className="px-4 py-3 text-left font-bold">Kod</th>
                        <th className="px-4 py-3 text-left font-bold">
                          Dağıtım Yöntemi
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          Talep Saati
                        </th>
                        <th className="px-4 py-3 text-left font-bold">
                          T1/T2 Bakiye
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {halkaArzlar.map((item, index) => (
                        <tr
                          key={item.kod}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            <Link
                              href={item.izahnameHref}
                              className="text-blue-700 hover:text-blue-900 hover:underline"
                            >
                              {item.sirket}
                            </Link>
                          </td>
                          <td className="px-4 py-4 font-bold text-slate-900">
                            {item.kod}
                          </td>
                          <td className="px-4 py-4 text-slate-700">
                            {item.dagitim}
                          </td>
                          <td className="px-4 py-4 font-semibold text-slate-900">
                            {item.talepSaati}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                                item.t1t2Uygun
                                  ? "bg-emerald-600 text-white"
                                  : "bg-red-600 text-white"
                              }`}
                            >
                              {item.t1t2}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Tamamen Eşit Dağıtım Olan Halka Arzlar
                </h2>

                <div className="mt-4 grid gap-4">
                  {tamamenEsitDagitim.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.marka} halka arzı
                        </h3>
                        <span className="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                          T1/T2 kullanılabilir
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        <strong>{item.sirket}</strong> için talep toplama tarihi{" "}
                        <strong>{item.talepTarihi}</strong>, halka arz fiyatı{" "}
                        <strong>{item.fiyat}</strong> olarak açıklandı. Dağıtım
                        yöntemi <strong>{item.dagitim}</strong>, talep saatleri
                        ise <strong>{item.talepSaati}</strong> aralığıdır.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        Başvuru yapılabilecek kanal:{" "}
                        <strong>{item.araciKurumOzeti}</strong>. Bu grupta talep
                        işlemi tüm banka ve aracı kurumlar üzerinden
                        yapılabildiği için yatırımcılar kullandıkları yatırım
                        hesabı üzerinden başvuru ekranını kontrol edebilir.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.yorum}
                      </p>

                      <Link
                        href={item.izahnameHref}
                        className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.marka} onaylı izahname detaylarını incele
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Bireysel / Karma Dağıtım Olan Halka Arzlar
                </h2>

                <div className="mt-4 grid gap-4">
                  {bireyselKarmaDagitim.map((item) => (
                    <div
                      key={item.kod}
                      className="rounded-xl border border-red-200 bg-red-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.marka} halka arzı
                        </h3>
                        <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                          T1/T2 kullanılamaz
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        <strong>{item.sirket}</strong> için talep toplama tarihi{" "}
                        <strong>{item.talepTarihi}</strong>, halka arz fiyatı{" "}
                        <strong>{item.fiyat}</strong> olarak takip ediliyor.
                        Dağıtım detayı: <strong>{item.dagitimDetayi}</strong>.
                        Talep saatleri <strong>{item.talepSaati}</strong>{" "}
                        aralığıdır.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                        {item.yorum}
                      </p>

                      <div className="mt-3 rounded-lg border border-white/70 bg-white/70 p-3">
                        <p className="mb-2 text-sm font-bold text-slate-900">
                          Talepte bulunulabilecek aracı kurumlar:
                        </p>
                        <AraciKurumListesi kurumlar={item.araciKurumlar} />
                      </div>

                      <Link
                        href={item.izahnameHref}
                        className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.marka} onaylı izahname detaylarını incele
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Yatırımcılar Başvuru Öncesi Neye Dikkat Etmeli?
                </h2>

                <p className="mt-2">
                  Aynı hafta içinde birden fazla halka arzın talep toplaması,
                  yatırımcıların nakit planlamasını daha önemli hale getirir.
                  Özellikle T1/T2 bakiyenin kullanılıp kullanılamaması, yatırım
                  hesabındaki kullanılabilir bakiye durumunu doğrudan etkileyen
                  bir başlıktır.
                </p>

                <p className="mt-2">
                  Tamamen eşit dağıtım olan SOHO ve GOLDA tarafında talep saatleri
                  daha sınırlı bir aralıkta ilerlerken, bireysel / karma dağıtım
                  olan ISVEA, ORZAX ve EKIM tarafında başvuru saatleri 09:00 -
                  17:00 aralığına yayılıyor. Bu nedenle yatırımcıların başvuru
                  yapacağı kurumun halka arz ekranını, bakiye durumunu ve son
                  talep saatini önceden kontrol etmesi gerekir.
                </p>
              </section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700 md:text-base">
                <strong>Onaylı izahname sayfaları:</strong>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {halkaArzlar.map((item) => (
                    <li key={item.kod}>
                      <Link
                        href={item.izahnameHref}
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {item.marka} - {item.sirket}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <AuthorBox />

              <HaberIlgiliBolumler slug={haberSlug} baslik={haberBaslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir. Halka arzlara katılmadan önce onaylı izahnameyi,
                dağıtım yöntemini, başvuru saatlerini, bakiye kullanım koşullarını
                ve kendi risk profilinizi birlikte değerlendiriniz.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${haberSlug}`} />
        </article>
      </div>
    </main>
  );
}
