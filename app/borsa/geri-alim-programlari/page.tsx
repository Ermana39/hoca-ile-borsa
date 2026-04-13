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
type GeriAlimSatiri = {
  sembol: string;
  ykkTarihi: string;
  geriAlinanAdet: number | null;
  alinacakAdet: number | null;
  ayrilanFon: number | null;
  geriAlinanHacim: number | null;
  alinacakOran: number | null;
  alinanOran: number | null;
  sonFiyat: number | null;
  alisOrtFiyat: number | null;
  sonIslemTarihi: string;
};

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

function metinCevir(deger: unknown): string {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function formatNumber(deger: number | null, fractionDigits = 2) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(deger);
}

function formatPrice(deger: number | null) {
  return formatNumber(deger, 2);
}

function formatPercent(deger: number | null) {
  if (deger === null || Number.isNaN(deger)) return "-";
  return `%${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(deger)}`;
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): GeriAlimSatiri[] {
  try {
    const dosyaYolu = path.join(
      process.cwd(),
      "app",
      "borsa",
      "geri-alim-programlari",
      "data",
      "geri-alim.xlsx"
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
      kolonBul(headers, ["sembol", "kod", "hisse", "ticker", "symbol"]) || headers[0];

    const ykkTarihiKolonu =
      kolonBul(headers, ["ykk tarihi", "ykk tarihi", "karar tarihi", "tarih"]) || headers[1] || "";

    const geriAlinanAdetKolonu =
      kolonBul(headers, ["geri alinan adet", "geri alınan adet", "alinan adet", "geri alım adet"]) ||
      headers[2] ||
      "";

    const alinacakAdetKolonu =
      kolonBul(headers, ["alinacak adet", "alınacak adet", "program adet", "hedef adet"]) ||
      headers[3] ||
      "";

    const ayrilanFonKolonu =
      kolonBul(headers, ["ayrilan fon", "ayrılan fon", "fon", "ayrilan tutar"]) ||
      headers[4] ||
      "";

    const geriAlinanHacimKolonu =
      kolonBul(headers, ["geri alinan hacim", "geri alınan hacim", "alinan hacim", "tutar"]) ||
      headers[5] ||
      "";

    const alinacakOranKolonu =
      kolonBul(headers, ["alinacak oran", "alınacak oran", "hedef oran", "program oran"]) ||
      headers[6] ||
      "";

    const alinanOranKolonu =
      kolonBul(headers, ["alinan oran", "alınan oran", "geri alinan oran", "geri alınan oran"]) ||
      headers[7] ||
      "";

    const sonFiyatKolonu =
      kolonBul(headers, ["son fiyat", "fiyat", "son kapanis", "son kapanış"]) ||
      headers[8] ||
      "";

    const alisOrtFiyatKolonu =
      kolonBul(headers, ["alis ort fiyat", "alış ort fiyat", "ortalama fiyat", "alis ort. fiyat"]) ||
      headers[9] ||
      "";

    const sonIslemTarihiKolonu =
      kolonBul(headers, ["son islem tarihi", "son işlem tarihi", "islem tarihi", "işlem tarihi"]) ||
      headers[10] ||
      "";

    return rows
      .map((row) => ({
        sembol: metinCevir(row[sembolKolonu]),
        ykkTarihi: metinCevir(row[ykkTarihiKolonu]),
        geriAlinanAdet: sayiCevir(row[geriAlinanAdetKolonu]),
        alinacakAdet: sayiCevir(row[alinacakAdetKolonu]),
        ayrilanFon: sayiCevir(row[ayrilanFonKolonu]),
        geriAlinanHacim: sayiCevir(row[geriAlinanHacimKolonu]),
        alinacakOran: sayiCevir(row[alinacakOranKolonu]),
        alinanOran: sayiCevir(row[alinanOranKolonu]),
        sonFiyat: sayiCevir(row[sonFiyatKolonu]),
        alisOrtFiyat: sayiCevir(row[alisOrtFiyatKolonu]),
        sonIslemTarihi: metinCevir(row[sonIslemTarihiKolonu]),
      }))
      .filter((item) => item.sembol);
  } catch {
    return [];
  }
}

export default function GeriAlimProgramlariPage() {
  const geriAlimVerileri = verileriOku();

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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Geri Alım Programları</h1>
        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Şirketlerin Geri Alım Programları
        </p>
<div className="mb-8 text-sm font-semibold text-zinc-700">
  Güncelleme Tarihi: {guncellemeTarihi}
</div>
        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1500px] border-collapse text-sm">
              <thead className="bg-zinc-100 text-zinc-800">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold">Sembol</th>
                  <th className="px-4 py-4 text-left font-semibold">YKK Tarihi</th>
                  <th className="px-4 py-4 text-right font-semibold">Geri Alınan Adet</th>
                  <th className="px-4 py-4 text-right font-semibold">Alınacak Adet</th>
                  <th className="px-4 py-4 text-right font-semibold">Ayrılan Fon</th>
                  <th className="px-4 py-4 text-right font-semibold">Geri Alınan Hacim</th>
                  <th className="px-4 py-4 text-right font-semibold">Alınacak Oran</th>
                  <th className="px-4 py-4 text-right font-semibold">Alınan Oran</th>
                  <th className="px-4 py-4 text-right font-semibold">Son Fiyat</th>
                  <th className="px-4 py-4 text-right font-semibold">Alış Ort. Fiyat</th>
                  <th className="px-4 py-4 text-left font-semibold">Son İşlem Tarihi</th>
                </tr>
              </thead>

              <tbody>
                {geriAlimVerileri.length > 0 ? (
                  geriAlimVerileri.map((item, index) => (
                    <tr
                      key={`${item.sembol}-${item.ykkTarihi}-${index}`}
                      className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                    >
                      <td className="px-4 py-3 font-semibold text-zinc-900">{item.sembol}</td>
                      <td className="px-4 py-3 text-zinc-700">{item.ykkTarihi || "-"}</td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatNumber(item.geriAlinanAdet, 0)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatNumber(item.alinacakAdet, 0)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatNumber(item.ayrilanFon, 0)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatNumber(item.geriAlinanHacim, 0)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatPercent(item.alinacakOran)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatPercent(item.alinanOran)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatPrice(item.sonFiyat)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatPrice(item.alisOrtFiyat)}
                      </td>
                      <td className="px-4 py-3 text-zinc-700">{item.sonIslemTarihi || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={11} className="px-4 py-8 text-center text-sm text-zinc-500">
                      Excel verisi okunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}