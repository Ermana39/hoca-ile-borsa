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

type YeniIsSatiri = {
  sembol: string;
  tarih: string;
  tutar: number | null;
  paraBirimi: string;
  bilanco: string;
  yillikSatislar: number | null;
  oran: number | null;
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

function formatOran(deger: number | null) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(deger);
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): YeniIsSatiri[] {
  try {
    const dosyaYolu = path.join(
      process.cwd(),
      "app",
      "borsa",
      "yeni-is-anlasmalari",
      "data",
      "yeni-is-anlasmalari.xlsx"
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
      kolonBul(headers, ["sembol", "kod", "hisse", "ticker", "symbol"]) ||
      headers[0];

    const tarihKolonu =
      kolonBul(headers, ["tarih", "is iliskisi tarihi", "iş ilişkisi tarihi"]) ||
      headers[1] ||
      "";

    const tutarKolonu =
      kolonBul(headers, [
        "yeni is iliskisi tutari",
        "yeni iş ilişkisi tutarı",
        "tutar",
        "is iliskisi tutari",
      ]) ||
      headers[2] ||
      "";

    const paraBirimiKolonu =
      kolonBul(headers, ["para birimi", "doviz", "döviz", "pb"]) ||
      headers[3] ||
      "";

    const bilancoKolonu =
      kolonBul(headers, [
        "bilanco donemi",
        "bilanço dönemi",
        "bilanco",
        "bilanço",
      ]) ||
      headers[4] ||
      "";

    const yillikSatislarKolonu =
      kolonBul(headers, [
        "yillik satislar",
        "yıllık satışlar",
        "satislar",
        "satışlar",
      ]) ||
      headers[5] ||
      "";

    const oranKolonu =
      kolonBul(headers, [
        "yeni is iliskisi / yillik satislar",
        "yeni iş ilişkisi / yıllık satışlar",
        "oran",
      ]) ||
      headers[6] ||
      "";

    return rows
      .map((row) => ({
        sembol: metinCevir(row[sembolKolonu]),
        tarih: metinCevir(row[tarihKolonu]),
        tutar: sayiCevir(row[tutarKolonu]),
        paraBirimi: metinCevir(row[paraBirimiKolonu]),
        bilanco: metinCevir(row[bilancoKolonu]),
        yillikSatislar: sayiCevir(row[yillikSatislarKolonu]),
        oran: sayiCevir(row[oranKolonu]),
      }))
      .filter((item) => item.sembol);
  } catch {
    return [];
  }
}

export default function YeniIsAnlasmalariPage() {
  const satirlar = verileriOku();

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
          Yeni İş Anlaşmaları
        </h1>

        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Yeni İş Anlaşması Yapan Şirketler
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
              <thead className="bg-zinc-100 text-zinc-700">
                <tr>
                  <th className="px-4 py-3 text-left">Sembol</th>
                  <th className="px-4 py-3 text-left">Tarih</th>
                  <th className="px-4 py-3 text-right">
                    Yeni İş İlişkisi Tutarı
                  </th>
                  <th className="px-4 py-3 text-left">Para Birimi</th>
                  <th className="px-4 py-3 text-left">Bilanço Dönemi</th>
                  <th className="px-4 py-3 text-right">Yıllık Satışlar</th>
                  <th className="px-4 py-3 text-right">
                    Yeni İş İlişkisi / Yıllık Satışlar
                  </th>
                </tr>
              </thead>

              <tbody>
                {satirlar.length > 0 ? (
                  satirlar.map((item, index) => (
                    <tr
                      key={`${item.sembol}-${item.tarih}-${index}`}
                      className={
                        index % 2 === 0
                          ? "border-t border-zinc-100 bg-white"
                          : "border-t border-zinc-100 bg-sky-50/60"
                      }
                    >
                      <td className="px-4 py-3 font-semibold text-zinc-900">
                        {item.sembol}
                      </td>
                      <td className="px-4 py-3 text-zinc-700">
                        {item.tarih || "-"}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-zinc-900">
                        {formatNumber(item.tutar, 0)}
                      </td>
                      <td className="px-4 py-3 text-zinc-700">
                        {item.paraBirimi || "-"}
                      </td>
                      <td className="px-4 py-3 text-zinc-700">
                        {item.bilanco || "-"}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatNumber(item.yillikSatislar, 0)}
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-700">
                        {formatOran(item.oran)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-8 text-center text-sm text-zinc-500"
                    >
                      Excel verisi okunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Yeni İş Anlaşmaları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Yeni iş anlaşmaları sayfası, Borsa İstanbul’da işlem gören şirketlerin
            duyurduğu yeni sözleşmeleri, iş ilişkilerini ve ticari anlaşmaları
            takip etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada
            şirketlerin açıkladığı yeni iş tutarları, bilanço dönemleri, yıllık
            satışlara oranları ve anlaşma tarihleri detaylı şekilde incelenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Şirketlerin yaptığı yeni iş anlaşmaları, gelecekteki gelir beklentileri
            açısından yatırımcılar tarafından yakından takip edilir. Özellikle büyük
            tutarlı sözleşmeler, ihracat bağlantıları, kamu ihaleleri ve uzun vadeli
            projeler şirket değerlemeleri üzerinde etkili olabilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Bu sayfadaki veriler sayesinde hangi şirketlerin yeni iş anlaşması
            açıkladığını, anlaşma büyüklüğünü ve yıllık satışlara etkisini kolayca
            karşılaştırabilirsiniz. Böylece büyüme potansiyeli taşıyan şirketleri
            daha yakından izlemek mümkün hale gelir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel yeni iş anlaşmaları, şirket KAP bildirimleri, sözleşme tutarları,
            gelir etkisi analizleri ve borsa şirket haberleri için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}