import fs from "fs";
import path from "path";
import Link from "next/link";
import * as XLSX from "xlsx";

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

const taramaDetaylari: Record<
  string,
  { title: string; hisseler: string[]; renk: "yesil" | "kirmizi" }
> = {
  "yukselis-trendinde-olanlar": {
    title: "Yükseliş trendinde olan hisseler (13,21,55 Hareketli ortalama üzerinde olanlar)",
    hisseler: ["THYAO", "ASELS", "TUPRS", "BIMAS", "EREGL"],
    renk: "yesil",
  },
  "dusus-trendinde-olanlar": {
    title: "Düşüş trendinde olanlar (13,21,55 Hareketli ortalama altında olanlar)",
    hisseler: ["SASA", "HEKTS", "SMRTG", "MIATK", "IZENR"],
    renk: "kirmizi",
  },
};

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
      const values = Object.values(row).map((value) => String(value ?? "").trim());

      return {
        sembol: values[0] || "",
        periyod: values[1] || "",
        birim: values[2] || "",
      };
    })
    .filter((row) => row.sembol);
}

function TaramaExcelTablosu({
  title,
  description,
  fileName,
  aboutTitle,
  aboutParagraphs,
}: {
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

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
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
                  Veri bulunamadı.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
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
      </div>
    </main>
  );
}

export default async function GostergeTaramaDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "macd-al") {
    return (
      <TaramaExcelTablosu
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
      </div>
    </main>
  );
}