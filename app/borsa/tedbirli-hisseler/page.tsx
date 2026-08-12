import { seoAciklamasi } from "@/lib/seo-metadata";
import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import tedbirData from "./data/tedbir.json";
import TedbirliHisselerTablosu from "@/components/TedbirliHisselerTablosu";

const canonical = "https://www.hocaileborsa.com/borsa/tedbirli-hisseler";
const title = "Tedbirli Hisseler 2026: VBTS, Brüt Takas ve Yasaklar";
const description =
  "Güncel tedbirli hisseler listesi: VBTS kapsamındaki brüt takas, açığa satış ve kredili işlem yasaklarını başlangıç ve bitiş tarihleriyle inceleyin.";

export const metadata: Metadata = {
  title: { absolute: title },
  description: seoAciklamasi(description, "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical,
  },
  keywords: [
    "tedbirli hisseler",
    "VBTS",
    "brüt takas uygulanan hisseler",
    "açığa satış yasağı olan hisseler",
    "kredili işlem yasağı",
  ],
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const revalidate = false;

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

type JsonRow = Record<string, string | number | null>;

type ColumnDef = {
  key: keyof TedbirRow;
  label: string;
  width: string;
  align: "left" | "right";
};

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
  const rows = (tedbirData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(tedbirData.columns) && tedbirData.columns.length > 0
      ? tedbirData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    kolonBul(headers, ["sembol", "kod", "hisse", "ticker", "symbol"]) ||
    headers[0];

  const fiyatKolonu =
    kolonBul(headers, ["fiyat", "son fiyat", "kapanis", "kapanış"]) ||
    headers[1] ||
    "";

  const degisimKolonu =
    kolonBul(headers, ["degisim", "değişim", "degisim %", "değişim %"]) ||
    headers[2] ||
    "";

  const baslangicKolonu =
    kolonBul(headers, [
      "baslangic tarihi",
      "başlangıç tarihi",
      "baslangic",
      "başlangıç",
    ]) ||
    headers[3] ||
    "";

  const bitisKolonu =
    kolonBul(headers, ["bitis tarihi", "bitiş tarihi", "bitis", "bitiş"]) ||
    headers[4] ||
    "";

  const brutTakasKolonu =
    kolonBul(headers, ["brut takas", "brüt takas"]) || headers[5] || "";

  const acigaSatisKolonu =
    kolonBul(headers, [
      "aciga satis",
      "açığa satış",
      "aciga satış",
      "açığa satis",
    ]) ||
    headers[6] ||
    "";

  const krediliIslemKolonu =
    kolonBul(headers, ["kredili islem", "kredili işlem"]) || headers[7] || "";

  const piyasaEmriKolonu =
    kolonBul(headers, ["piyasa emri"]) || headers[8] || "";

  const emirIptalAzaltmaKolonu =
    kolonBul(headers, ["emir iptal", "emir iptal azaltma", "emir azaltma"]) ||
    headers[9] ||
    "";

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
}

const columns: ColumnDef[] = [
  { key: "sembol", label: "Sembol", width: "min-w-[130px]", align: "left" },
  { key: "fiyat", label: "Fiyat", width: "min-w-[110px]", align: "left" },
  { key: "degisim", label: "Değişim %", width: "min-w-[130px]", align: "left" },
  {
    key: "baslangicTarihi",
    label: "Başlangıç Tarihi",
    width: "min-w-[160px]",
    align: "left",
  },
  {
    key: "bitisTarihi",
    label: "Bitiş Tarihi",
    width: "min-w-[140px]",
    align: "left",
  },
  { key: "brutTakas", label: "Brüt Takas", width: "min-w-[130px]", align: "left" },
  {
    key: "acigaSatis",
    label: "Açığa Satış",
    width: "min-w-[140px]",
    align: "left",
  },
  {
    key: "krediliIslem",
    label: "Kredili İşlem",
    width: "min-w-[150px]",
    align: "left",
  },
  {
    key: "piyasaEmri",
    label: "Piyasa Emri",
    width: "min-w-[130px]",
    align: "left",
  },
  {
    key: "emirIptalAzaltma",
    label: "Emir İptal / Azaltma",
    width: "min-w-[180px]",
    align: "left",
  },
  { key: "veriYayini", label: "Veri Yayını", width: "min-w-[130px]", align: "left" },
];

export default function TedbirliHisselerPage() {
  const guncellemeTarihi = tedbirData.guncellemeTarihi || "-";

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-wrap gap-3">
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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Tedbirli Hisseler 2026: Güncel VBTS Listesi
        </h1>
        <p className="mb-6 max-w-4xl text-base leading-7 text-zinc-600">
          Borsa İstanbul&apos;da VBTS kapsamında tedbir uygulanan hisselerin brüt
          takas, açığa satış, kredili işlem ve emir kısıtlarını başlangıç ve bitiş
          tarihleriyle inceleyin.
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Son güncelleme: {guncellemeTarihi}
        </div>

        <TedbirliHisselerTablosu />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Tedbirli Hisseler, Brüt Takas ve VBTS Nedir?
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
