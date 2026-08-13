import MarketChart from "@/components/charts/MarketChart";
import Link from "@/components/NoPrefetchLink";
import { KrediHesaplayici } from "@/components/faiz-hesaplayicilar";
import { getFaizData } from "@/lib/faiz-data";
import { HesaplaCTA, TabloUstBilgi } from "@/components/IlgiliBolumler";
import { HesaplayiciRehberi } from "@/components/HesaplayiciRehberi";

export const metadata = {
  title: "Konut Kredisi Oranları | Hoca İle Borsa",
  description:
    "Güncel konut kredisi faiz oranlarını, banka karşılaştırmalarını ve günlük ortalama faiz grafiğini inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/mevduat-kredi-faizleri/konut-kredisi-oranlari",
  },
};

export const revalidate = false;

type BankaSatiri = {
  banka: string;
  faiz: string;
};

type GunlukOrtalamaSatiri = {
  tarih: string;
  ortalama: number;
};

function cleanText(value: unknown) {
  return String(value ?? "").trim();
}
function parseRate(value: unknown) {
  const text = cleanText(value);
  if (!text) return NaN;

  const normalized = text.replace("%", "").replace(/\s/g, "").replace(",", ".");
  const num = Number(normalized);

  return Number.isNaN(num) ? NaN : num;
}

function formatRate(value: unknown) {
  const num = parseRate(value);
  if (Number.isNaN(num)) return "-";

  if (Number.isInteger(num)) {
    return `%${num}`;
  }

  return `%${num.toFixed(2).replace(".", ",")}`;
}

function excelSerialToDate(serial: number) {
  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  const dateInfo = new Date(utcValue * 1000);

  const fractionalDay = serial - Math.floor(serial) + 0.0000001;
  const totalSeconds = Math.floor(86400 * fractionalDay);

  dateInfo.setUTCSeconds(totalSeconds);
  return dateInfo;
}

function formatDateLabel(value: unknown) {
  if (value === null || value === undefined || value === "") return "";

  if (typeof value === "number" && !Number.isNaN(value)) {
    const d = excelSerialToDate(value);
    return d.toLocaleDateString("tr-TR");
  }

  const text = cleanText(value);
  if (!text) return "";

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(text)) return text;

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    const [y, m, d] = text.split("-");
    return `${d}.${m}.${y}`;
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString("tr-TR");
  }

  return text;
}

function average(values: number[]) {
  if (!values.length) return NaN;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function findHeaderRow(rows: unknown[][]) {
  return rows.findIndex((row) => {
    const normalized = row.map((cell) =>
      cleanText(cell).toLocaleLowerCase("tr-TR")
    );
    const hasTarih = normalized.some((cell) => cell.includes("tarih"));
    const hasOrtalama = normalized.some((cell) => cell.includes("ortalama"));
    return hasTarih && hasOrtalama;
  });
}

async function getKonutSheetRows() {
  const data = await getFaizData();
  const sheets = data.sheets || {};

  const sheetName =
    Object.keys(sheets).find(
      (name) => name.trim().toLocaleLowerCase("tr-TR") === "konut kredisi"
    ) || Object.keys(sheets)[2];

  return sheetName && sheets[sheetName]?.rawRows ? sheets[sheetName].rawRows! : [];
}

async function getKonutVerileri() {
  try {
    const rawRows = await getKonutSheetRows();

    const headerRowIndex = findHeaderRow(rawRows);
    if (headerRowIndex === -1) {
      throw new Error("Başlık satırı bulunamadı.");
    }

    const headerRow = rawRows[headerRowIndex].map((cell) => cleanText(cell));
    const dataRows = rawRows.slice(headerRowIndex + 1);

    const tarihIndex = headerRow.findIndex((cell) =>
      cell.toLocaleLowerCase("tr-TR").includes("tarih")
    );
    const ortalamaIndex = headerRow.findIndex((cell) =>
      cell.toLocaleLowerCase("tr-TR").includes("ortalama")
    );

    if (tarihIndex === -1 || ortalamaIndex === -1) {
      throw new Error("Tarih veya Günlük Ortalama sütunu bulunamadı.");
    }

    const bankaColumns = headerRow
      .map((name, index) => ({ name, index }))
      .filter(
        (item) =>
          item.name &&
          item.index !== tarihIndex &&
          item.index !== ortalamaIndex
      );

    const preparedRows = dataRows
      .map((row) => {
        const tarih = formatDateLabel(row[tarihIndex]);

        const bankaRates = bankaColumns.map((col) => ({
          banka: col.name,
          rawValue: row[col.index],
          value: parseRate(row[col.index]),
        }));

        const numericRates = bankaRates
          .map((item) => item.value)
          .filter((value) => !Number.isNaN(value));

        const ortalamaHucre = parseRate(row[ortalamaIndex]);
        const ortalamaDegeri = !Number.isNaN(ortalamaHucre)
          ? ortalamaHucre
          : average(numericRates);

        return {
          tarih,
          bankaRates,
          numericCount: numericRates.length,
          ortalama: ortalamaDegeri,
        };
      })
      .filter((row) => row.tarih && row.numericCount > 0);

    if (!preparedRows.length) {
      throw new Error("Dolu veri satırı bulunamadı.");
    }

    const sonSatir = preparedRows[preparedRows.length - 1];

    const bankaListesi: BankaSatiri[] = sonSatir.bankaRates.map((item) => ({
      banka: item.banka,
      faiz: formatRate(item.rawValue),
    }));

    const grafikVerisi: GunlukOrtalamaSatiri[] = preparedRows
      .filter((row) => !Number.isNaN(row.ortalama))
      .map((row) => ({
        tarih: row.tarih,
        ortalama: row.ortalama,
      }));

    return {
      bankaListesi,
      grafikVerisi,
      hata: "",
    };
  } catch (error) {
    return {
      bankaListesi: [] as BankaSatiri[],
      grafikVerisi: [] as GunlukOrtalamaSatiri[],
      hata: error instanceof Error ? error.message : "Veri okuma hatası.",
    };
  }
}

function KonutGrafik({ data }: { data: GunlukOrtalamaSatiri[] }) {
  return (
    <MarketChart
      title="Günlük Ortalama Konut Kredisi Grafiği"
      series={data.map((item) => ({ date: item.tarih, value: item.ortalama }))}
      unit="rate"
      minWidth={760}
    />
  );
}
function HesaplayiciAlani() {
  return (
    <KrediHesaplayici
      baslik="Konut Kredisi Hesaplayıcı"
      aciklama="Kredi tutarı, aylık faiz oranı ve vade bilgisine göre tahmini taksit ve toplam ödeme hesaplanır."
      varsayilanTutar={2_000_000}
      varsayilanOran={2.9}
      varsayilanVade={120}
    />
  );
}

export default async function KonutKredisiOranlariPage() {
  const { bankaListesi, grafikVerisi, hata } = await getKonutVerileri();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/mevduat-kredi-faizleri"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Konut Kredisi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Güncel konut kredisi oranları, banka karşılaştırmaları ve günlük
          ortalama faiz grafiği.
        </p>

        {hata ? (
          <section className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {hata}
          </section>
        ) : null}

        <TabloUstBilgi>
          Oranları karşılaştırdıktan sonra aşağıdaki hesaplayıcıyla tahmini maliyetinizi hesaplayabilirsiniz.
        </TabloUstBilgi>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-sm md:text-base">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-900">
                    Banka
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-900">
                    Minimum Faiz
                  </th>
                </tr>
              </thead>
              <tbody>
                {bankaListesi.length > 0 ? (
                  bankaListesi.map((item, index) => (
                    <tr
                      key={item.banka}
                      className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                    >
                      <td className="px-4 py-3 font-medium text-zinc-800">
                        {item.banka}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-zinc-900">
                        {item.faiz}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-4 py-6 text-center text-zinc-500"
                    >
                      Gösterilecek veri bulunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <KonutGrafik data={grafikVerisi} />
        </section>

        <HesaplaCTA href="#hesaplayici" label="Bu oranlarla hesaplama yap" />

        <section id="hesaplayici" className="mt-8 scroll-mt-24">
          <HesaplayiciAlani />
        </section>

        <HesaplayiciRehberi slug="konut-kredisi" />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Konut Kredisi Faiz Oranları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Konut kredisi faiz oranları, ev satın almak isteyenler için aylık
            taksit ve toplam geri ödeme tutarını doğrudan etkileyen en önemli
            unsurlardan biridir. Bu sayfada bankaların güncel konut kredisi faiz
            oranlarını karşılaştırabilir, günlük değişimleri inceleyebilir ve en
            uygun kredi seçeneğini değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Banka banka listelenen konut kredisi oranları düzenli olarak
            güncellenir. Böylece kullanıcılar en düşük konut kredisi faizi sunan
            bankaları tek ekranda görebilir. Özellikle faizlerin sık değiştiği
            dönemlerde günlük ortalama grafik bölümü piyasa hareketlerini takip
            etmek açısından fayda sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Konut kredisi hesaplayıcı aracını kullanarak kredi tutarı, vade
            süresi ve faiz oranına göre aylık ödeme planınızı hesaplayabilirsiniz.
            Bu sayede ev kredisi çekmeden önce bütçenize en uygun ödeme planını
            kolayca oluşturabilirsiniz.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel konut kredisi faiz oranları, en uygun ev kredisi seçenekleri,
            banka karşılaştırmaları ve ödeme hesaplamaları için bu sayfayı düzenli
            olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
