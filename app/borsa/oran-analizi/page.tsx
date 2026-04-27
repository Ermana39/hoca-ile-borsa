import Link from "next/link";
import oranAnaliziJson from "./data/oran-analizi.json";
import OranAnaliziTableClient from "./_components/OranAnaliziTableClient";

export const dynamic = "force-static";

export const metadata = {
  title: "Oran Analizi | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketlerini finansal oran verilerine göre karşılaştırın.",
};

type RowData = Record<string, string | number | null>;

type OranAnaliziData = {
  columns: string[];
  rows: RowData[];
  guncellemeTarihi: string;
};

const oranAnaliziData = oranAnaliziJson as OranAnaliziData;

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

function parseNumeric(value: string | number | null) {
  if (value === null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const temiz = value
    .replace(/\s/g, "")
    .replace(/₺|\$|€|£|%/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");

  const sayi = Number(temiz);
  return Number.isFinite(sayi) ? sayi : null;
}

function getRowType(row: RowData, columns: string[]) {
  const doluHucreler = columns
    .map((column) => row[column])
    .filter((value) => value !== null && value !== "");

  if (doluHucreler.length !== 1) return "normal";

  const ilkDeger = String(doluHucreler[0] ?? "").trim();
  if (!ilkDeger) return "normal";
  if (parseNumeric(ilkDeger) !== null) return "normal";

  const normalized = ilkDeger.toLocaleLowerCase("tr");
  if (normalized === "sektör" || normalized === "sektor") return "remove";

  return "sector_header";
}

function getOranAnaliziData() {
  const columns = oranAnaliziData.columns;
  const rows = oranAnaliziData.rows.filter(
    (row) => getRowType(row, columns) !== "remove"
  );

  return {
    columns,
    rows,
    guncellemeTarihi: oranAnaliziData.guncellemeTarihi,
  };
}

export default function OranAnaliziPage() {
  const { columns, rows, guncellemeTarihi } = getOranAnaliziData();

  return (
    <main className="min-h-screen bg-white px-4 py-6 pb-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Oran Analizi
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Oran analizi sayfası üzerinden şirketlerin finansal oran verilerini
            toplu şekilde inceleyebilir ve farklı şirketleri daha hızlı
            karşılaştırabilirsiniz. Ekranı sağa kaydırarak diğer sütunları inceleyebilirsiniz.
          </p>

          <div className="mt-4 text-sm font-semibold text-zinc-700">
            Güncelleme Tarihi: {guncellemeTarihi}
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <OranAnaliziTableClient columns={columns} rows={rows} />
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Oran Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Oran analizi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            finansal oran verilerini daha detaylı karşılaştırmak isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada şirketlerin değerleme,
            kârlılık, borçluluk, likidite ve verimlilik göstergelerini tek tablo
            üzerinde takip edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Finansal oranlar, şirketlerin bilanço yapısını ve faaliyet
            performansını daha sağlıklı değerlendirmek için kullanılan temel
            analiz araçları arasında yer alır. Özellikle F/K, PD/DD, cari oran,
            özsermaye kârlılığı ve net kâr marjı gibi veriler hisse seçiminde
            önemli bir referans sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan oran analizi tablosu sayesinde şirketleri aynı
            ekranda karşılaştırabilir ve dikkat çeken finansal görünümleri daha
            hızlı fark edebilirsiniz. Sektör başlıklarının ayrı satırlarda
            gösterilmesi ise tablo içinde bölümleri daha kolay ayırt etmenize
            yardımcı olur.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel oran analizi verileri, BIST şirket karşılaştırmaları, temel
            analiz metrikleri, finansal oranlar ve şirket bazlı değerleme
            göstergeleri için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}