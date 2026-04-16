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

type TedbirRow = {
  sembol: string;
  fiyat: number | null;
  degisim: number | null;
  baslangicTarihi: string;
  bitisTarihi: string;
  brutTakas: string;
  acigaSatis: string;
  krediliIslem: string;
  piyasaEmri: string;
  emirIptalAzaltma: string;
  veriYayini: string;
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

function formatNumber(value: number | null) {
  if (value === null || Number.isNaN(value)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(value);
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): TedbirRow[] {
  try {
    const dosyaYolu = path.join(
      process.cwd(),
      "app",
      "borsa",
      "tedbirli-hisseler",
      "data",
      "tedbir.xlsx"
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

    const fiyatKolonu =
      kolonBul(headers, ["fiyat", "son fiyat", "kapanis", "kapanış"]) || headers[1] || "";

    const degisimKolonu =
      kolonBul(headers, ["degisim", "değişim", "degisim %", "değişim %"]) || headers[2] || "";

    const baslangicKolonu =
      kolonBul(headers, ["baslangic tarihi", "başlangıç tarihi", "baslangic", "başlangıç"]) ||
      headers[3] ||
      "";

    const bitisKolonu =
      kolonBul(headers, ["bitis tarihi", "bitiş tarihi", "bitis", "bitiş"]) || headers[4] || "";

    const brutTakasKolonu =
      kolonBul(headers, ["brut takas", "brüt takas"]) || headers[5] || "";

    const acigaSatisKolonu =
      kolonBul(headers, ["aciga satis", "açığa satış", "aciga satış", "açığa satis"]) ||
      headers[6] ||
      "";

    const krediliIslemKolonu =
      kolonBul(headers, ["kredili islem", "kredili işlem"]) || headers[7] || "";

    const piyasaEmriKolonu =
      kolonBul(headers, ["piyasa emri"]) || headers[8] || "";

    const emirIptalAzaltmaKolonu =
      kolonBul(headers, ["emir iptal", "emir iptal azaltma", "emir azaltma"]) || headers[9] || "";

    const veriYayiniKolonu =
      kolonBul(headers, ["veri yayini", "veri yayını"]) || headers[10] || "";

    return rows
      .map((row) => ({
        sembol: metinCevir(row[sembolKolonu]),
        fiyat: sayiCevir(row[fiyatKolonu]),
        degisim: sayiCevir(row[degisimKolonu]),
        baslangicTarihi: metinCevir(row[baslangicKolonu]),
        bitisTarihi: metinCevir(row[bitisKolonu]),
        brutTakas: metinCevir(row[brutTakasKolonu]) || "-",
        acigaSatis: metinCevir(row[acigaSatisKolonu]) || "-",
        krediliIslem: metinCevir(row[krediliIslemKolonu]) || "-",
        piyasaEmri: metinCevir(row[piyasaEmriKolonu]) || "-",
        emirIptalAzaltma: metinCevir(row[emirIptalAzaltmaKolonu]) || "-",
        veriYayini: metinCevir(row[veriYayiniKolonu]) || "-",
      }))
      .filter((item) => item.sembol);
  } catch {
    return [];
  }
}

export default function TedbirliHisselerPage() {
  const tedbirVerileri = verileriOku();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[1600px]">
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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Tedbirli Hisseler</h1>
        <p className="mb-6 text-base text-zinc-600">
          Tedbirli Hisseleri Bu Sayfadan Takip Edebelirsiniz.
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
          <table className="min-w-[1400px] w-full border-collapse text-sm">
            <thead className="bg-zinc-100 text-zinc-800">
              <tr>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Sembol</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Fiyat</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Değişim %</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Başlangıç Tarihi</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Bitiş Tarihi</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Brüt Takas</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Açığa Satış</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Kredili İşlem</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Piyasa Emri</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Emir İptal / Azaltma</th>
                <th className="border-b border-zinc-200 px-4 py-4 text-left font-semibold">Veri Yayını</th>
              </tr>
            </thead>

            <tbody>
              {tedbirVerileri.length > 0 ? (
                tedbirVerileri.map((item, index) => (
                  <tr
                    key={`${item.sembol}-${index}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-sky-50"}
                  >
                    <td className="border-b border-zinc-100 px-4 py-4 font-semibold text-zinc-900">
                      {item.sembol}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {formatNumber(item.fiyat)}
                    </td>
                    <td
                      className={`border-b border-zinc-100 px-4 py-4 font-medium ${
                        (item.degisim ?? 0) > 0
                          ? "text-green-600"
                          : (item.degisim ?? 0) < 0
                          ? "text-red-600"
                          : "text-zinc-700"
                      }`}
                    >
                      {item.degisim === null ? "-" : `%${formatNumber(item.degisim)}`}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.baslangicTarihi || "-"}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.bitisTarihi || "-"}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.brutTakas}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.acigaSatis}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.krediliIslem}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.piyasaEmri}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.emirIptalAzaltma}
                    </td>
                    <td className="border-b border-zinc-100 px-4 py-4 text-zinc-700">
                      {item.veriYayini}
                    </td>
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

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Tedbirli Hisseler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Tedbirli hisseler sayfası, Borsa İstanbul’da çeşitli piyasa tedbirleri
            uygulanan hisseleri takip etmek isteyen yatırımcılar için hazırlanmıştır.
            Bu sayfada brüt takas, açığa satış yasağı, kredili işlem yasağı, piyasa
            emri kısıtı ve emir iptal azaltma tedbiri gibi uygulamalara tabi olan
            hisseleri toplu şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsada tedbir kararı uygulanan hisseler, genellikle yüksek volatilite,
            olağandışı fiyat hareketleri veya piyasa düzeni açısından dikkat çeken
            durumlar sonrasında öne çıkar. Bu nedenle tedbirli hisseler listesi,
            işlem yapmadan önce risk değerlendirmesi yapmak isteyen yatırımcılar
            için önemli bir referans niteliği taşır.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan başlangıç ve bitiş tarihleri sayesinde tedbir süresini,
            uygulanan kısıt türleri sayesinde de ilgili hisse üzerindeki işlem
            kurallarını kolayca görebilirsiniz. Böylece yatırımcılar tedbirli
            hisselerde işlem yaparken hangi şartların geçerli olduğunu daha net
            anlayabilir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel tedbirli hisseler listesi, BIST piyasa tedbirleri, brüt takas
            uygulanan hisseler, açığa satış yasağı bulunan hisseler ve detaylı
            borsa takip ekranları için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}