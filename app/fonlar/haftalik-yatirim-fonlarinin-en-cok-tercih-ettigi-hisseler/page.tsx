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

type FonSatiri = {
  sembol: string | null;
  degisim: string | number | null;
  sonToplamYuzde: string | number | null;
  ilkToplamYuzde: string | number | null;
  sonToplamTakasTl: string | number | null;
  ilkToplamTakasTl: string | number | null;
  takasTlSonEmeklilikFon: string | number | null;
  yuzdeSonEmeklilikFon: string | number | null;
  takasTlIlkEmeklilikFon: string | number | null;
  yuzdeIlkEmeklilikFon: string | number | null;
  takasTlSonYatirimFon: string | number | null;
  yuzdeSonYatirimFon: string | number | null;
  takasTlIlkYatirimFon: string | number | null;
  yuzdeIlkYatirimFon: string | number | null;
};

type ColumnKey = keyof FonSatiri;

const columns: {
  key: ColumnKey;
  label: string;
  align?: "left" | "right";
}[] = [
  { key: "sembol", label: "Sembol", align: "left" },
  { key: "degisim", label: "Değişim", align: "right" },
  { key: "sonToplamYuzde", label: "Son Toplam %", align: "right" },
  { key: "ilkToplamYuzde", label: "İlk Toplam %", align: "right" },
  { key: "sonToplamTakasTl", label: "Son Toplam Takas TL", align: "right" },
  { key: "ilkToplamTakasTl", label: "İlk Toplam Takas TL", align: "right" },
  { key: "takasTlSonEmeklilikFon", label: "Son Emeklilik Fon Takas TL", align: "right" },
  { key: "yuzdeSonEmeklilikFon", label: "Son Emeklilik Fon %", align: "right" },
  { key: "takasTlIlkEmeklilikFon", label: "İlk Emeklilik Fon Takas TL", align: "right" },
  { key: "yuzdeIlkEmeklilikFon", label: "İlk Emeklilik Fon %", align: "right" },
  { key: "takasTlSonYatirimFon", label: "Son Yatırım Fon Takas TL", align: "right" },
  { key: "yuzdeSonYatirimFon", label: "Son Yatırım Fon %", align: "right" },
  { key: "takasTlIlkYatirimFon", label: "İlk Yatırım Fon Takas TL", align: "right" },
  { key: "yuzdeIlkYatirimFon", label: "İlk Yatırım Fon %", align: "right" },
];

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

function temizMetin(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function parseNumber(deger: unknown) {
  if (typeof deger === "number") return deger;

  const metin = temizMetin(deger);
  if (!metin) return 0;

  const normalize = metin
    .replace("%", "")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".");

  const sayi = Number(normalize);
  return Number.isNaN(sayi) ? 0 : sayi;
}

function formatPercent(deger: unknown) {
  if (deger === null || deger === undefined || deger === "") return "-";

  if (typeof deger === "string" && deger.includes("%")) {
    return deger.trim();
  }

  const sayi = parseNumber(deger);

  return `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(sayi)} %`;
}

function formatTl(deger: unknown) {
  if (deger === null || deger === undefined || deger === "") return "-";

  const sayi = parseNumber(deger);

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(sayi);
}

function excelOku(): FonSatiri[] {
  try {
    const dosyaYolu = path.join(
      process.cwd(),
      "app",
      "fonlar",
      "haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
      "data",
      "tercih-edilen-hisseler.xlsx"
    );

    const buffer = fs.readFileSync(dosyaYolu);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const ws = workbook.Sheets[workbook.SheetNames[0]];

    const rawRows = XLSX.utils.sheet_to_json<(string | number | null)[]>(ws, {
      header: 1,
      defval: "",
      raw: true,
    }) as (string | number | null)[][];

    if (!rawRows.length) return [];

    const dataRows = rawRows.slice(1);

    return dataRows
      .map((row) => ({
        sembol: temizMetin(row[0]) || null,
        degisim: row[1] ?? null,
        sonToplamYuzde: row[2] ?? null,
        ilkToplamYuzde: row[3] ?? null,
        sonToplamTakasTl: row[4] ?? null,
        ilkToplamTakasTl: row[5] ?? null,
        takasTlSonEmeklilikFon: row[6] ?? null,
        yuzdeSonEmeklilikFon: row[7] ?? null,
        takasTlIlkEmeklilikFon: row[8] ?? null,
        yuzdeIlkEmeklilikFon: row[9] ?? null,
        takasTlSonYatirimFon: row[10] ?? null,
        yuzdeSonYatirimFon: row[11] ?? null,
        takasTlIlkYatirimFon: row[12] ?? null,
        yuzdeIlkYatirimFon: row[13] ?? null,
      }))
      .filter((item) => item.sembol);
  } catch {
    return [];
  }
}

function hucreDegeri(row: FonSatiri, key: ColumnKey) {
  const value = row[key];

  if (key === "sembol") return temizMetin(value) || "-";

  if (
    key === "degisim" ||
    key === "sonToplamYuzde" ||
    key === "ilkToplamYuzde" ||
    key === "yuzdeSonEmeklilikFon" ||
    key === "yuzdeIlkEmeklilikFon" ||
    key === "yuzdeSonYatirimFon" ||
    key === "yuzdeIlkYatirimFon"
  ) {
    return formatPercent(value);
  }

  return formatTl(value);
}

export default function HaftalikYatirimFonlarininEnCokTercihEttigiHisselerPage() {
  const fonVerileri = excelOku();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/fonlar"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler
        </h1>

        <p className="mb-6 text-sm text-zinc-600">
          Veriler Excel dosyasından otomatik okunur.
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white">
          <div className="w-full overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-block min-w-full align-top">
              <table className="min-w-[1900px] border-collapse text-sm whitespace-nowrap">
                <thead className="bg-zinc-100">
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className={`border-b border-zinc-200 px-4 py-3 font-semibold text-zinc-800 ${
                          column.align === "right" ? "text-right" : "text-left"
                        }`}
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {fonVerileri.length > 0 ? (
                    fonVerileri.map((row, index) => (
                      <tr
                        key={`${row.sembol}-${index}`}
                        className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                      >
                        {columns.map((column) => (
                          <td
                            key={column.key}
                            className={`border-b border-zinc-100 px-4 py-3 text-zinc-700 ${
                              column.align === "right" ? "text-right" : "text-left"
                            } ${
                              column.key === "sembol"
                                ? "font-semibold text-zinc-900"
                                : ""
                            }`}
                          >
                            {hucreDegeri(row, column.key)}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="px-4 py-8 text-center text-sm text-zinc-500"
                      >
                        Gösterilecek veri bulunamadı.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haftalık yatırım fonlarının en çok tercih ettiği hisseler tablosu,
            yatırım fonlarının son haftada yoğun şekilde yöneldiği hisse
            senetlerini gösterir. Bu veriler, profesyonel fon yöneticilerinin
            hangi şirket hisselerine ilgi gösterdiğini takip etmek isteyen
            yatırımcılar için önemli bir referans niteliğindedir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Yatırım fonlarının en çok aldığı hisseler, piyasadaki kurumsal para
            akışını analiz etmek açısından büyük önem taşır. Fonların tercih ettiği
            hisseler genellikle güçlü bilanço beklentisi, sektör potansiyeli veya
            büyüme fırsatları nedeniyle öne çıkabilir. Bu nedenle haftalık fon
            hareketleri yatırım stratejileri oluştururken yakından takip edilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan değişim oranları, toplam takas tutarları ve emeklilik
            fonu ile yatırım fonu dağılımları sayesinde detaylı analiz yapabilir,
            hangi hisselerde kurumsal talebin arttığını görebilirsiniz. Bu veriler,
            hisse karşılaştırması ve piyasa eğilimi takibi için faydalıdır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel fon hareketleri, yatırım fonlarının tercih ettiği hisseler,
            haftalık kurumsal para girişleri ve hisse bazlı detaylı analizler için
            bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}