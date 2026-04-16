import fs from "fs";
import path from "path";
import Link from "next/link";
import * as XLSX from "xlsx";

const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date());

type DipZirveSatiri = {
  sembol: string;
  yuzdeDibeUzaklik: number | null;
  gunDibeUzaklik: number | null;
  yuzdeZirveyeUzaklik: number | null;
  gunZirveyeUzaklik: number | null;
  zirveDip: number | null;
};

type SearchParams = Promise<{
  sort?: string;
  dir?: string;
}>;

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

function normalizeText(metin: string) {
  return metin
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

function sayiCevir(deger: unknown): number | null {
  if (deger === null || deger === undefined || deger === "") return null;
  if (typeof deger === "number") return Number.isNaN(deger) ? null : deger;

  const metin = String(deger).trim();
  if (!metin) return null;

  const temiz = metin.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  const sayi = Number(temiz);

  return Number.isNaN(sayi) ? null : sayi;
}

function sayiFormatla(deger: number | null, yuzde = false) {
  if (deger === null || Number.isNaN(deger)) return "-";

  const formatted = new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: Number.isInteger(deger) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(deger);

  return yuzde ? `%${formatted}` : formatted;
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): DipZirveSatiri[] {
  try {
    const dosyaYolu = path.join(
      process.cwd(),
      "app",
      "borsa",
      "dip-zirve-analizi",
      "data",
      "dip-zirve.xlsx"
    );

    const buffer = fs.readFileSync(dosyaYolu);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, {
      defval: "",
    });

    if (!rows.length) return [];

    const headers = Object.keys(rows[0] || {});

    const sembolKolonu =
      kolonBul(headers, ["sembol", "kod", "hisse"]) || headers[0];

    const yuzdeDibeUzaklikKolonu =
      kolonBul(headers, ["% dibe uzaklik", "yuzde dibe uzaklik"]) ||
      headers[1];

    const gunDibeUzaklikKolonu =
      kolonBul(headers, ["gun dibe uzaklik"]) || headers[2];

    const yuzdeZirveyeUzaklikKolonu =
      kolonBul(headers, ["% zirveye uzaklik", "yuzde zirveye uzaklik"]) ||
      headers[3];

    const gunZirveyeUzaklikKolonu =
      kolonBul(headers, ["gun zirveye uzaklik"]) || headers[4];

    const zirveDipKolonu =
      kolonBul(headers, ["zirve / dip", "zirve/dip"]) || headers[5];

    return rows
      .map((row) => ({
        sembol: String(row[sembolKolonu] ?? "").trim(),
        yuzdeDibeUzaklik: sayiCevir(row[yuzdeDibeUzaklikKolonu]),
        gunDibeUzaklik: sayiCevir(row[gunDibeUzaklikKolonu]),
        yuzdeZirveyeUzaklik: sayiCevir(row[yuzdeZirveyeUzaklikKolonu]),
        gunZirveyeUzaklik: sayiCevir(row[gunZirveyeUzaklikKolonu]),
        zirveDip: sayiCevir(row[zirveDipKolonu]),
      }))
      .filter((item) => item.sembol);
  } catch {
    return [];
  }
}

function toSortableNumber(value: number | null) {
  if (value === null || Number.isNaN(value)) return -999999999;
  return value;
}

function sortArrow(active: boolean, direction: "asc" | "desc") {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

export default async function DipZirveAnaliziPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const dipZirveVerileri = verileriOku();

  const allowedSorts = [
    "sembol",
    "yuzdeDibeUzaklik",
    "gunDibeUzaklik",
    "yuzdeZirveyeUzaklik",
    "gunZirveyeUzaklik",
    "zirveDip",
  ] as const;

  const sort = allowedSorts.includes((params.sort ?? "sembol") as never)
    ? (params.sort as (typeof allowedSorts)[number])
    : "sembol";

  const dir: "asc" | "desc" = params.dir === "desc" ? "desc" : "asc";

  const sortedVeriler = [...dipZirveVerileri].sort((a, b) => {
    const aValue = a[sort];
    const bValue = b[sort];

    if (sort === "sembol") {
      return dir === "asc"
        ? String(aValue).localeCompare(String(bValue), "tr")
        : String(bValue).localeCompare(String(aValue), "tr");
    }

    const aNum = toSortableNumber(aValue as number | null);
    const bNum = toSortableNumber(bValue as number | null);

    return dir === "asc" ? aNum - bNum : bNum - aNum;
  });

  const nextDir = (column: string) => {
    if (sort === column) return dir === "asc" ? "desc" : "asc";
    return column === "sembol" ? "asc" : "desc";
  };

  const sortLink = (column: string) => {
    const sp = new URLSearchParams();
    sp.set("sort", column);
    sp.set("dir", nextDir(column));
    return `/borsa/dip-zirve-analizi?${sp.toString()}`;
  };

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Dip Zirve Analizi
        </h1>

        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Dip ve zirve uzaklık verileri
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead className="bg-zinc-100 text-zinc-800">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold">
                    <Link href={sortLink("sembol")}>
                      Sembol {sortArrow(sort === "sembol", dir)}
                    </Link>
                  </th>
                  <th className="px-4 py-4 text-right font-semibold">
                    <Link href={sortLink("yuzdeDibeUzaklik")}>
                      % Dibe Uzaklık{" "}
                      {sortArrow(sort === "yuzdeDibeUzaklik", dir)}
                    </Link>
                  </th>
                  <th className="px-4 py-4 text-right font-semibold">
                    <Link href={sortLink("gunDibeUzaklik")}>
                      Gün Dibe Uzaklık{" "}
                      {sortArrow(sort === "gunDibeUzaklik", dir)}
                    </Link>
                  </th>
                  <th className="px-4 py-4 text-right font-semibold">
                    <Link href={sortLink("yuzdeZirveyeUzaklik")}>
                      % Zirveye Uzaklık{" "}
                      {sortArrow(sort === "yuzdeZirveyeUzaklik", dir)}
                    </Link>
                  </th>
                  <th className="px-4 py-4 text-right font-semibold">
                    <Link href={sortLink("gunZirveyeUzaklik")}>
                      Gün Zirveye Uzaklık{" "}
                      {sortArrow(sort === "gunZirveyeUzaklik", dir)}
                    </Link>
                  </th>
                  <th className="px-4 py-4 text-right font-semibold">
                    <Link href={sortLink("zirveDip")}>
                      Zirve / Dip {sortArrow(sort === "zirveDip", dir)}
                    </Link>
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedVeriler.map((item, index) => (
                  <tr
                    key={`${item.sembol}-${index}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                  >
                    <td className="px-4 py-3 font-semibold text-zinc-900">
                      {item.sembol}
                    </td>
                    <td className="px-4 py-3 text-right text-zinc-700">
                      {sayiFormatla(item.yuzdeDibeUzaklik, true)}
                    </td>
                    <td className="px-4 py-3 text-right text-zinc-700">
                      {sayiFormatla(item.gunDibeUzaklik)}
                    </td>
                    <td className="px-4 py-3 text-right text-zinc-700">
                      {sayiFormatla(item.yuzdeZirveyeUzaklik, true)}
                    </td>
                    <td className="px-4 py-3 text-right text-zinc-700">
                      {sayiFormatla(item.gunZirveyeUzaklik)}
                    </td>
                    <td className="px-4 py-3 text-right text-zinc-700">
                      {sayiFormatla(item.zirveDip)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Dip Zirve Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Dip zirve analizi sayfası, Borsa İstanbul hisselerinin geçmiş dip ve
            zirve seviyelerine olan uzaklığını incelemek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada hisselerin dip noktalarına ne kadar yakın
            olduğu, zirve seviyelerinden ne kadar uzaklaştığı ve fiyat hareketleri
            detaylı şekilde görüntülenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse senedi dip zirve verileri, teknik analiz yapan yatırımcılar için
            önemli göstergeler arasında yer alır. Dip seviyelerine yakın hisseler
            potansiyel fırsat olarak değerlendirilebilirken, zirve seviyelerine
            yakın hisseler momentum açısından dikkat çekebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Gün bazlı dip ve zirve uzaklık analizleri sayesinde hisselerin son
            dönemdeki performansını karşılaştırabilir, farklı sektörlerde öne çıkan
            fırsatları daha kolay belirleyebilirsiniz. Bu veriler kısa vadeli ve
            uzun vadeli yatırım stratejileri oluştururken faydalı olabilir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel dip zirve analizi, BIST hisse karşılaştırmaları, teknik görünüm
            verileri ve detaylı piyasa incelemeleri için bu sayfayı düzenli olarak
            takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}