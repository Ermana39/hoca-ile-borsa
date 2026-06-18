import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import * as XLSX from "xlsx";

export const revalidate = false;

const taramaDetaylari: Record<
  string,
  { title: string; hisseler: string[]; renk: "yesil" | "kirmizi" }
> = {
  "yukselis-trendinde-olanlar": {
    title:
      "Yükseliş Trendinde Olan Hisseler (13, 21, 55 Hareketli Ortalama Üzerinde Olanlar)",
    hisseler: ["THYAO", "ASELS", "TUPRS", "BIMAS", "EREGL"],
    renk: "yesil",
  },
  "dusus-trendinde-olanlar": {
    title:
      "Düşüş Trendinde Olan Hisseler (13, 21, 55 Hareketli Ortalama Altında Olanlar)",
    hisseler: ["SASA", "HEKTS", "SMRTG", "MIATK", "IZENR"],
    renk: "kirmizi",
  },
};

const seoIcerikleri: Record<
  string,
  {
    baslik: string;
    giris: string;
    nasilOlusturulur: string[];
    nasilKullanilir: string[];
    dikkatEdilecekler: string[];
  }
> = {
  "macd-al": {
    baslik: "MACD Al Sinyali Taraması Nasıl Yorumlanır?",
    giris:
      "MACD al verenler taraması, Borsa İstanbul hisseleri içinde MACD göstergesine göre yukarı yönlü sinyal üreten hisseleri filtrelemek için hazırlanır. Bu tarama, tek başına kesin alım kararı üretmez; ancak momentum tarafında güçlenme işareti veren hisseleri daha hızlı bulmaya yardımcı olur.",
    nasilOlusturulur: [
      "Tarama, MACD çizgisinin sinyal çizgisiyle ilişkisi dikkate alınarak oluşturulur.",
      "MACD çizgisinin sinyal çizgisini yukarı yönlü kesmesi, teknik analizde pozitif momentum sinyali olarak takip edilir.",
      "Listeye giren hisseler, ilgili göstergede al sinyali oluşan semboller arasından filtrelenir.",
      "Tarama sonuçları dönemsel olarak değişebilir; çünkü MACD sinyali fiyat hareketine ve periyoda bağlı olarak güncellenir.",
    ],
    nasilKullanilir: [
      "Listede yer alan hisseler ilk aşamada teknik takip listesi olarak değerlendirilebilir.",
      "MACD al sinyali görülen hisselerde destek, direnç, hacim ve ana trend yönü ayrıca kontrol edilmelidir.",
      "Sinyalin güçlü sayılabilmesi için fiyatın önemli ortalamalar üzerinde kalıp kalmadığı incelenebilir.",
      "Yatırımcılar bu taramayı tek başına karar aracı olarak değil, kendi teknik analiz sürecini hızlandıran bir filtre olarak kullanmalıdır.",
    ],
    dikkatEdilecekler: [
      "MACD al sinyali gecikmeli oluşabilir; bu nedenle sinyal geldiğinde fiyatın önemli bir hareketi başlatmış olma ihtimali vardır.",
      "Yatay piyasada MACD sık sık hatalı sinyal üretebilir.",
      "Hacim desteği olmayan sinyaller daha zayıf kabul edilebilir.",
      "Bu sayfadaki veriler yatırım tavsiyesi değildir.",
    ],
  },
  "macd-sat": {
    baslik: "MACD Sat Sinyali Taraması Nasıl Yorumlanır?",
    giris:
      "MACD sat verenler taraması, MACD göstergesine göre momentum kaybı yaşayan veya teknik görünümü zayıflayan hisseleri filtrelemek için hazırlanır. Bu tarama, yatırımcıların portföylerindeki hisseleri risk açısından takip etmesine ve yeni işlem planlarında daha temkinli davranmasına yardımcı olabilir.",
    nasilOlusturulur: [
      "Tarama, MACD çizgisinin sinyal çizgisini aşağı yönlü kesmesi esas alınarak hazırlanır.",
      "Aşağı yönlü MACD kesişimi, teknik analizde momentum zayıflaması veya satış baskısının artması şeklinde yorumlanabilir.",
      "Listeye giren hisseler, ilgili göstergede sat sinyali üreten semboller arasından filtrelenir.",
      "Sonuçlar fiyat hareketine, periyoda ve piyasa koşullarına göre değişebilir.",
    ],
    nasilKullanilir: [
      "Listede yer alan hisseler risk kontrolü için izlenebilir.",
      "MACD sat sinyali alan hisselerde destek kırılımı, hacim artışı ve hareketli ortalamalar ayrıca kontrol edilmelidir.",
      "Elde taşınan hisselerde stop-loss seviyesi, ana trend ve bilanço beklentileri birlikte değerlendirilmelidir.",
      "Bu tarama, satış kararı vermek için tek başına yeterli değildir; teknik ve temel analizle birlikte kullanılmalıdır.",
    ],
    dikkatEdilecekler: [
      "MACD sat sinyali bazen kısa vadeli düzeltmelerde de oluşabilir.",
      "Ana trend güçlü ise sat sinyali sınırlı bir geri çekilmeyi gösterebilir.",
      "Yatay piyasada MACD al-sat sinyalleri sık değişebilir.",
      "Bu sayfadaki bilgiler yatırım tavsiyesi değildir.",
    ],
  },
  "yukselis-trendinde-olanlar": {
    baslik: "Yükseliş Trendinde Olan Hisseler Taraması Nasıl Kullanılır?",
    giris:
      "Yükseliş trendinde olan hisseler taraması, fiyatı 13, 21 ve 55 periyotluk hareketli ortalamaların üzerinde bulunan hisseleri filtrelemek için hazırlanır. Bu yapı, kısa ve orta vadeli teknik görünümde pozitif eğilimi devam eden hisseleri hızlı şekilde bulmaya yardımcı olur.",
    nasilOlusturulur: [
      "Tarama, hisse fiyatının 13, 21 ve 55 hareketli ortalamalara göre konumuna bakılarak oluşturulur.",
      "Fiyatın bu üç ortalamanın üzerinde olması, teknik olarak güçlü trend yapısına işaret edebilir.",
      "Kısa vadeli ortalamaların orta vadeli ortalamalar üzerinde kalması, trendin sağlıklı ilerlediğini gösterebilir.",
      "Liste, belirlenen hareketli ortalama şartlarını sağlayan hisselerden oluşur.",
    ],
    nasilKullanilir: [
      "Bu liste, güçlü teknik görünüm sergileyen hisseleri takip listesine almak için kullanılabilir.",
      "Listede yer alan hisselerde destek-direnç bölgeleri, hacim ve endeksin genel yönü ayrıca incelenmelidir.",
      "Fiyat ortalamaların çok üzerinde uzaklaşmışsa kısa vadeli düzeltme riski dikkate alınmalıdır.",
      "Yükseliş trendi taraması, alım noktası değil; teknik olarak güçlü hisseleri bulmak için ön filtre olarak değerlendirilmelidir.",
    ],
    dikkatEdilecekler: [
      "Hareketli ortalama üzerinde olmak, hissenin kesin yükselmeye devam edeceği anlamına gelmez.",
      "Ani haber akışları ve bilanço gelişmeleri teknik görünümü değiştirebilir.",
      "Endeks genelinde satış baskısı varsa güçlü hisselerde de geri çekilme görülebilir.",
      "Bu sayfadaki veriler yatırım tavsiyesi değildir.",
    ],
  },
  "dusus-trendinde-olanlar": {
    baslik: "Düşüş Trendinde Olan Hisseler Taraması Nasıl Kullanılır?",
    giris:
      "Düşüş trendinde olan hisseler taraması, fiyatı 13, 21 ve 55 periyotluk hareketli ortalamaların altında kalan hisseleri belirlemek için hazırlanır. Bu tarama, teknik görünümü zayıflayan hisseleri görmek ve riskli bölgeleri daha hızlı tespit etmek için kullanılabilir.",
    nasilOlusturulur: [
      "Tarama, hisse fiyatının 13, 21 ve 55 hareketli ortalamaların altında kalması esas alınarak oluşturulur.",
      "Fiyatın bu ortalamaların altında olması, kısa ve orta vadede zayıf teknik görünüm anlamına gelebilir.",
      "Ortalama altında kalan hisseler, düşüş trendi veya baskılı fiyatlama içinde değerlendirilebilir.",
      "Liste, belirlenen hareketli ortalama şartlarını sağlayan sembollerden oluşur.",
    ],
    nasilKullanilir: [
      "Bu liste, teknik görünümü zayıf hisseleri ayırt etmek için takip edilebilir.",
      "Portföyde bulunan hisseler bu listede yer alıyorsa destek seviyeleri ve stop bölgeleri yeniden kontrol edilebilir.",
      "Düşüş trendindeki hisselerde tepki yükselişleri görülebilir; ancak ana trend değişmeden risk devam edebilir.",
      "Bu tarama, satış kararı değil; risk analizi ve teknik görünüm takibi için ön filtre olarak kullanılmalıdır.",
    ],
    dikkatEdilecekler: [
      "Fiyat ortalamaların altında olsa bile güçlü destek bölgelerinde tepki alımları gelebilir.",
      "Düşüş trendinde görünen bazı hisseler haber, bilanço veya sektör etkisiyle yön değiştirebilir.",
      "Teknik taramalar temel analizle birlikte değerlendirilmelidir.",
      "Bu sayfadaki bilgiler yatırım tavsiyesi değildir.",
    ],
  },
};

const taramaMetadatalari: Record<
  string,
  { title: string; description: string }
> = {
  "macd-al": {
    title: "MACD Al Veren Hisseler | Hoca İle Borsa",
    description:
      "MACD göstergesine göre al sinyali üreten Borsa İstanbul hisselerini ve taramanın nasıl yorumlanabileceğini inceleyin.",
  },
  "macd-sat": {
    title: "MACD Sat Veren Hisseler | Hoca İle Borsa",
    description:
      "MACD göstergesine göre sat sinyali üreten Borsa İstanbul hisselerini ve tarama sonuçlarının nasıl kullanılabileceğini inceleyin.",
  },
  "yukselis-trendinde-olanlar": {
    title: "Yükseliş Trendinde Olan Hisseler | Hoca İle Borsa",
    description:
      "Hareketli ortalamaların üzerinde işlem gören yükseliş trendindeki Borsa İstanbul hisselerini ve tarama mantığını inceleyin.",
  },
  "dusus-trendinde-olanlar": {
    title: "Düşüş Trendinde Olan Hisseler | Hoca İle Borsa",
    description:
      "Hareketli ortalamaların altında işlem gören düşüş trendindeki Borsa İstanbul hisselerini ve dikkat edilmesi gerekenleri inceleyin.",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = taramaMetadatalari[slug];

  if (!metadata) {
    return {
      title: "Gösterge Taraması Bulunamadı | Hoca İle Borsa",
      robots: { index: false, follow: true },
    };
  }

  return {
    ...metadata,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://www.hocaileborsa.com/borsa/gosterge-taramalari/${slug}`,
    },
  };
}

type ExcelRow = Record<string, string | number | null | undefined>;

function getExcelData(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "app",
    "borsa",
    "gosterge-taramalari",
    "data",
    fileName
  );

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const fileBuffer = fs.readFileSync(filePath);
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const rows = XLSX.utils.sheet_to_json<ExcelRow>(worksheet, {
    defval: "",
  });

  return rows
    .map((row) => {
      const values = Object.values(row).map((value) =>
        String(value ?? "").trim()
      );

      return {
        sembol: values[0] || "",
        periyod: values[1] || "",
        birim: values[2] || "",
      };
    })
    .filter((row) => row.sembol);
}

function TaramaSeoAciklama({ slug }: { slug: string }) {
  const seo = seoIcerikleri[slug];

  if (!seo) return null;

  return (
    <section className="mt-12 space-y-8" aria-labelledby="tarama-seo-baslik">
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Taramanın ne olduğu
        </p>
        <h2
          id="tarama-seo-baslik"
          className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl"
        >
          {seo.baslik}
        </h2>
        <p className="text-zinc-700 leading-relaxed">{seo.giris}</p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
          Bu Taramanın Nasıl Oluşturulduğu
        </h2>
        <ul className="space-y-3 text-zinc-700">
          {seo.nasilOlusturulur.map((madde) => (
            <li key={madde} className="flex items-start gap-2 leading-relaxed">
              <span className="mt-1 text-blue-500">•</span>
              <span>{madde}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
          Tarama Sonuçlarının Nasıl Kullanılabileceği
        </h2>
        <ul className="space-y-3 text-zinc-700">
          {seo.nasilKullanilir.map((madde) => (
            <li key={madde} className="flex items-start gap-2 leading-relaxed">
              <span className="mt-1 text-green-500">•</span>
              <span>{madde}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-amber-950 md:text-2xl">
          Dikkat Edilmesi Gerekenler
        </h2>
        <ul className="space-y-3 text-amber-950">
          {seo.dikkatEdilecekler.map((madde) => (
            <li key={madde} className="flex items-start gap-2 leading-relaxed">
              <span className="mt-1">⚠️</span>
              <span>{madde}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-red-950 md:text-2xl">
          Yatırım Tavsiyesi Değildir
        </h2>
        <p className="leading-relaxed text-red-950">
          Bu sayfadaki tarama sonuçları ve açıklamalar yalnızca bilgilendirme
          amacıyla hazırlanmıştır. Buradaki veriler herhangi bir hisse için al,
          sat veya tut tavsiyesi olarak değerlendirilmemelidir.
        </p>
      </div>
    </section>
  );
}

function TaramaExcelTablosu({
  slug,
  title,
  description,
  fileName,
  aboutTitle,
  aboutParagraphs,
}: {
  slug: string;
  title: string;
  description: string;
  fileName: string;
  aboutTitle: string;
  aboutParagraphs: string[];
}) {
  const hisseler = getExcelData(fileName);

  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/gosterge-taramalari"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            {title}
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            {description}
          </p>

          <div className="mt-4 text-sm font-semibold text-zinc-700">
            Güncelleme Tarihi: {guncellemeTarihi}
          </div>
        </section>

        <section className="py-6">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50 text-sm font-bold text-zinc-800 md:text-base">
              <div className="px-4 py-4">Sembol</div>
              <div className="px-4 py-4">Periyod</div>
              <div className="px-4 py-4">Birim</div>
            </div>

            <div className="divide-y divide-zinc-200">
              {hisseler.length > 0 ? (
                hisseler.map((item, index) => (
                  <div
                    key={`${item.sembol}-${item.periyod}-${item.birim}-${index}`}
                    className="grid grid-cols-3 text-sm text-zinc-700 md:text-base"
                  >
                    <div className="px-4 py-4 font-semibold text-zinc-900">
                      {item.sembol}
                    </div>
                    <div className="px-4 py-4">{item.periyod || "-"}</div>
                    <div className="px-4 py-4">{item.birim || "-"}</div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-8 text-sm text-zinc-500 md:text-base">
                  Tarama sonucunda hiçbir hisse bulunmadı.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            {aboutTitle}
          </h2>

          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`leading-7 text-zinc-700 ${
                index !== aboutParagraphs.length - 1 ? "mb-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </section>

        <TaramaSeoAciklama slug={slug} />
      </div>
    </main>
  );
}

export default async function GostergeTaramaDetayPage({
  params,
}: PageProps) {
  const { slug } = await params;

  if (slug === "macd-al") {
    return (
      <TaramaExcelTablosu
        slug="macd-al"
        title="MACD Al Verenler"
        description="MACD göstergesine göre al sinyali üreten hisseleri aşağıdaki listeden inceleyebilirsiniz."
        fileName="macd-al.xlsx"
        aboutTitle="MACD Al Verenler Hakkında"
        aboutParagraphs={[
          "MACD al verenler sayfası, teknik analizde MACD göstergesine göre al sinyali üreten hisseleri hızlı şekilde görüntülemek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada MACD kesişimi ile dikkat çeken hisseleri tek ekranda takip edebilirsiniz.",
          "MACD göstergesi, trend yönü ve momentum değişimini birlikte değerlendirmeye yardımcı olan yaygın teknik analiz araçlarından biridir. Özellikle MACD çizgisinin sinyal çizgisini yukarı yönlü kesmesi, yatırımcılar tarafından potansiyel al sinyali olarak izlenebilir.",
          "Bu tarama sayfası sayesinde çok sayıda hisse arasından MACD açısından öne çıkan şirketleri daha hızlı filtreleyebilir, teknik görünümü güçlenen hisseleri kendi analizinizle birlikte değerlendirebilirsiniz.",
          "Güncel MACD al sinyali veren hisseler, teknik tarama sonuçları ve gösterge bazlı borsa ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.",
        ]}
      />
    );
  }

  if (slug === "macd-sat") {
    return (
      <TaramaExcelTablosu
        slug="macd-sat"
        title="MACD Sat Verenler"
        description="MACD göstergesine göre sat sinyali üreten hisseleri aşağıdaki listeden inceleyebilirsiniz."
        fileName="macd-sat.xlsx"
        aboutTitle="MACD Sat Verenler Hakkında"
        aboutParagraphs={[
          "MACD sat verenler sayfası, teknik analizde MACD göstergesine göre sat sinyali üreten hisseleri hızlı şekilde görüntülemek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada MACD kesişimi ile zayıflayan hisseleri tek ekranda takip edebilirsiniz.",
          "MACD göstergesi, trend yönü ve momentum değişimini birlikte değerlendirmeye yardımcı olan yaygın teknik analiz araçlarından biridir. Özellikle MACD çizgisinin sinyal çizgisini aşağı yönlü kesmesi, yatırımcılar tarafından potansiyel sat sinyali olarak izlenebilir.",
          "Bu tarama sayfası sayesinde çok sayıda hisse arasından MACD açısından zayıflayan şirketleri daha hızlı filtreleyebilir, teknik görünümü bozulan hisseleri kendi analizinizle birlikte değerlendirebilirsiniz.",
          "Güncel MACD sat sinyali veren hisseler, teknik tarama sonuçları ve gösterge bazlı borsa ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.",
        ]}
      />
    );
  }

  const veri = taramaDetaylari[slug];

  if (!veri) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex gap-3">
            <Link
              href="/"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/borsa/gosterge-taramalari"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Geri
            </Link>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-700">
            İçerik bulunamadı.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/gosterge-taramalari"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">{veri.title}</h1>

        <div className="space-y-3">
          {veri.hisseler.map((hisse, index) => (
            <div
              key={hisse}
              className={`rounded-xl border px-4 py-4 text-base font-medium text-zinc-900 ${
                veri.renk === "yesil"
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              {index + 1}. {hisse}
            </div>
          ))}
        </div>

        <TaramaSeoAciklama slug={slug} />
      </div>
    </main>
  );
}
