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

type TaramaSatiri = {
  Sembol?: string;
  Periyod?: string;
  Birim?: string;
};

function getMacdAlData() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "borsa",
    "gosterge-taramalari",
    "data",
    "macd-al.xlsx"
  );

  const fileBuffer = fs.readFileSync(filePath);
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const rows = XLSX.utils.sheet_to_json<TaramaSatiri>(worksheet, {
    defval: "",
  });

  return rows
    .map((row) => ({
      sembol: String(row.Sembol || "").trim(),
      periyod: String(row.Periyod || "").trim(),
      birim: String(row.Birim || "").trim(),
    }))
    .filter((row) => row.sembol);
}

export default function MacdAlPage() {
  const hisseler = getMacdAlData();

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
            MACD Al Verenler
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            MACD göstergesine göre al sinyali üreten hisseleri aşağıdaki listeden
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
            <div className="grid grid-cols-3 gap-0 border-b border-zinc-200 bg-zinc-50 text-sm font-bold text-zinc-800 md:text-base">
              <div className="px-4 py-4">Sembol</div>
              <div className="px-4 py-4">Periyod</div>
              <div className="px-4 py-4">Birim</div>
            </div>

            <div className="divide-y divide-zinc-200">
              {hisseler.map((item) => (
                <div
                  key={`${item.sembol}-${item.periyod}-${item.birim}`}
                  className="grid grid-cols-3 text-sm text-zinc-700 md:text-base"
                >
                  <div className="px-4 py-4 font-semibold text-zinc-900">
                    {item.sembol}
                  </div>
                  <div className="px-4 py-4">{item.periyod}</div>
                  <div className="px-4 py-4">{item.birim}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            MACD Al Verenler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            MACD al verenler sayfası, teknik analizde MACD göstergesine göre al
            sinyali üreten hisseleri hızlı şekilde görüntülemek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada MACD kesişimi ile dikkat
            çeken hisseleri tek ekranda takip edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            MACD göstergesi, trend yönü ve momentum değişimini birlikte
            değerlendirmeye yardımcı olan en yaygın teknik analiz araçlarından
            biridir. Özellikle MACD çizgisinin sinyal çizgisini yukarı yönlü
            kesmesi, yatırımcılar tarafından potansiyel al sinyali olarak
            izlenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Bu tarama sayfası sayesinde çok sayıda hisse arasından MACD açısından
            öne çıkan şirketleri daha hızlı filtreleyebilir, teknik görünümü
            güçlenen hisseleri kendi analizinizle birlikte değerlendirebilirsiniz.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel MACD al sinyali veren hisseler, teknik tarama sonuçları ve
            gösterge bazlı borsa ekranları için bu sayfayı düzenli olarak takip
            edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}