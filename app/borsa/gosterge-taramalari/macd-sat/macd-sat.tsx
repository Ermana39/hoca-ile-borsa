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

type ExcelRow = Record<string, string | number | null | undefined>;

function getMacdSatData() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "borsa",
    "gosterge-taramalari",
    "data",
    "macd-sat.xlsx"
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

export default function MacdSatPage() {
  const hisseler = getMacdSatData();

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
            MACD Sat Verenler
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            MACD göstergesine göre sat sinyali üreten hisseleri aşağıdaki listeden
            inceleyebilirsiniz.
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
            MACD Sat Verenler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            MACD sat verenler sayfası, teknik analizde MACD göstergesine göre sat
            sinyali üreten hisseleri hızlı şekilde görüntülemek isteyen yatırımcılar
            için hazırlanmıştır. Bu sayfada MACD kesişimi ile zayıflayan hisseleri
            tek ekranda takip edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            MACD göstergesi, trend yönü ve momentum değişimini birlikte
            değerlendirmeye yardımcı olan yaygın teknik analiz araçlarından biridir.
            Özellikle MACD çizgisinin sinyal çizgisini aşağı yönlü kesmesi,
            yatırımcılar tarafından potansiyel sat sinyali olarak izlenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Bu tarama sayfası sayesinde çok sayıda hisse arasından MACD açısından
            zayıflayan şirketleri daha hızlı filtreleyebilir, teknik görünümü
            bozulan hisseleri kendi analizinizle birlikte değerlendirebilirsiniz.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel MACD sat sinyali veren hisseler, teknik tarama sonuçları ve
            gösterge bazlı borsa ekranları için bu sayfayı düzenli olarak takip
            edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}