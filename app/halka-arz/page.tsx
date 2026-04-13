import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import * as XLSX from "xlsx";
import TrackedLink from "@/components/tracked-link";

type ExcelSatiri = {
  kurum: string;
  alis: number;
  ortalamaAlis: number;
  satis: number;
  ortalamaSatis: number;
  toplam: number;
  yuzde: number;
  net: number;
  maliyet: number;
};

type ListeSatiri = {
  kurum: string;
  lot: string;
  yuzde: string;
  maliyet: string;
  sagDeger: string;
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

function sayiCevir(deger: unknown) {
  if (typeof deger === "number") return deger;
  if (deger === null || deger === undefined || deger === "") return 0;

  const metin = String(deger)
    .trim()
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const sayi = Number(metin);
  return Number.isNaN(sayi) ? 0 : sayi;
}

function metinCevir(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function formatSayi(deger: number, maxFraction = 0) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxFraction,
  }).format(deger);
}

function formatYuzde(deger: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(deger);
}

function renkClass(index: number) {
  const renkler = [
    "bg-[#2e5fa8]",
    "bg-[#6e8f3f]",
    "bg-[#8d4b4b]",
    "bg-[#6b5aa7]",
    "bg-[#3f7c8b]",
  ];
  return renkler[index % renkler.length];
}

function bosSatir(): ListeSatiri {
  return {
    kurum: "",
    lot: "",
    yuzde: "",
    maliyet: "",
    sagDeger: "",
  };
}

function besSatiraTamamla(liste: ListeSatiri[]) {
  const sonuc = [...liste];
  while (sonuc.length < 5) {
    sonuc.push(bosSatir());
  }
  return sonuc.slice(0, 5);
}

function excelOku() {
  try {
    const dosyaYolu = path.join(process.cwd(), "app", "halka-arz", "data", "halkaarz.xlsx");
    const buffer = fs.readFileSync(dosyaYolu);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];

    const rawRows = XLSX.utils.sheet_to_json<(string | number)[]>(ws, {
      header: 1,
      defval: "",
    }) as (string | number)[][];

    const veri = rawRows
      .slice(1)
      .map((row) => ({
        kurum: metinCevir(row[0]),
        alis: sayiCevir(row[1]),
        ortalamaAlis: sayiCevir(row[2]),
        satis: sayiCevir(row[3]),
        ortalamaSatis: sayiCevir(row[4]),
        toplam: sayiCevir(row[5]),
        yuzde: sayiCevir(row[6]),
        net: sayiCevir(row[7]),
        maliyet: sayiCevir(row[8]),
      }))
      .filter((item) => item.kurum);

    return veri;
  } catch {
    return [] as ExcelSatiri[];
  }
}

function aliciListesi(veri: ExcelSatiri[]): ListeSatiri[] {
  const pozitifler = veri.filter((item) => item.net > 0);
  const toplamPozitifNet = pozitifler.reduce((sum, item) => sum + item.net, 0);

  const liste = pozitifler
    .sort((a, b) => b.net - a.net)
    .slice(0, 5)
    .map((item) => ({
      kurum: item.kurum,
      lot: formatSayi(item.net, 0),
      yuzde: formatYuzde(toplamPozitifNet > 0 ? (item.net / toplamPozitifNet) * 100 : 0),
      maliyet: formatSayi(item.maliyet, 3),
      sagDeger: formatSayi(item.toplam, 0),
    }));

  return besSatiraTamamla(liste);
}

function saticiListesi(veri: ExcelSatiri[]): ListeSatiri[] {
  const negatifler = veri.filter((item) => item.net < 0);
  const toplamNegatifNet = Math.abs(
    negatifler.reduce((sum, item) => sum + item.net, 0)
  );

  const liste = negatifler
    .sort((a, b) => a.net - b.net)
    .slice(0, 5)
    .map((item) => ({
      kurum: item.kurum,
      lot: formatSayi(Math.abs(item.net), 0),
      yuzde: formatYuzde(
        toplamNegatifNet > 0 ? (Math.abs(item.net) / toplamNegatifNet) * 100 : 0
      ),
      maliyet: formatSayi(item.maliyet, 3),
      sagDeger: formatSayi(item.toplam, 0),
    }));

  return besSatiraTamamla(liste);
}

function hacimListesi(veri: ExcelSatiri[]): ListeSatiri[] {
  const toplamIslemLotu = veri.reduce((sum, item) => sum + item.toplam, 0);

  const liste = [...veri]
    .sort((a, b) => b.toplam - a.toplam)
    .slice(0, 5)
    .map((item) => ({
      kurum: item.kurum,
      lot: formatSayi(item.toplam, 0),
      yuzde: formatYuzde(toplamIslemLotu > 0 ? (item.toplam / toplamIslemLotu) * 100 : 0),
      maliyet: formatSayi(item.maliyet, 3),
      sagDeger: formatSayi(item.net, 0),
    }));

  return besSatiraTamamla(liste);
}

function KurumTablosu({
  title,
  rows,
  lotBaslik,
  sagBaslik,
}: {
  title: string;
  rows: ListeSatiri[];
  lotBaslik: string;
  sagBaslik: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-[#232323] shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[470px] border-collapse text-white">
          <thead>
            <tr className="bg-[#1b1b1b] text-[11px] font-medium text-zinc-300 md:text-xs">
              <th className="border-b border-r border-zinc-700 px-3 py-2 text-left">Kurum</th>
              <th className="border-b border-r border-zinc-700 px-3 py-2 text-right">{lotBaslik}</th>
              <th className="border-b border-r border-zinc-700 px-3 py-2 text-right">%</th>
              <th className="border-b border-r border-zinc-700 px-3 py-2 text-right">Maliyet</th>
              <th className="border-b border-zinc-700 px-3 py-2 text-right">{sagBaslik}</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item, index) => {
              const bosMu = !item.kurum;

              return (
                <tr key={`${item.kurum || "bos"}-${index}`} className="bg-[#2a2a2a]">
                  <td className="border-b border-r border-zinc-700 px-3 py-2 text-left text-[12px] font-semibold md:text-[13px]">
                    {bosMu ? (
                      <span className="block min-h-[20px]"></span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className={`h-5 w-1.5 rounded-sm ${renkClass(index)}`} />
                        <span>{item.kurum}</span>
                      </div>
                    )}
                  </td>
                  <td className="border-b border-r border-zinc-700 px-3 py-2 text-right text-[12px] text-zinc-100 md:text-[13px]">
                    {item.lot}
                  </td>
                  <td className="border-b border-r border-zinc-700 px-3 py-2 text-right text-[12px] text-zinc-100 md:text-[13px]">
                    {item.yuzde}
                  </td>
                  <td className="border-b border-r border-zinc-700 px-3 py-2 text-right text-[12px] text-zinc-100 md:text-[13px]">
                    {item.maliyet}
                  </td>
                  <td className="border-b border-zinc-700 px-3 py-2 text-right text-[12px] text-zinc-100 md:text-[13px]">
                    {item.sagDeger}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="border-t border-zinc-700 bg-[#1f1f1f] px-4 py-2 text-xs font-semibold text-zinc-300">
        {title}
      </div>
    </div>
  );
}

export default function HalkaArzPage() {
  const veri = excelOku();
  const alicilar = aliciListesi(veri);
  const saticilar = saticiListesi(veri);
  const hacimciler = hacimListesi(veri);

  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

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
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Halka Arz</h1>

        <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          <TrackedLink
            href="/halka-arz/kazanc-hesapla"
            label="Kazanç Hesapla"
            className="rounded-xl border border-blue-200 bg-blue-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-blue-200"
          >
            Kazanç Hesapla
          </TrackedLink>

          <TrackedLink
            href="/halka-arz/talep-hesapla"
            label="Talep Hesapla"
            className="rounded-xl border border-purple-200 bg-purple-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-purple-200"
          >
            Talep Hesapla
          </TrackedLink>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TrackedLink
            href="/halka-arz/onayli-izahnameler"
            label="Onaylı İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
            ariaLabel="Onaylı İzahnameler"
          >
            <>
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/onayli-izahnameler.png"
                    alt="Onaylı izahnameler görseli"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
                <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                  Onaylı İzahnameler
                </h2>
              </div>
            </>
          </TrackedLink>

          <TrackedLink
            href="/halka-arz/taslak-izahnameler"
            label="Taslak İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
            ariaLabel="Taslak İzahnameler"
          >
            <>
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/taslak-izahnameler.png"
                    alt="Taslak izahnameler görseli"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
                <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                  Taslak İzahnameler
                </h2>
              </div>
            </>
          </TrackedLink>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-6">
            <div className="mb-5 text-center">
              <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
                AAGYO Güncel Veriler
              </h2>
              <div className="mt-2 text-sm font-medium text-zinc-500">
                Güncelleme: {guncellemeTarihi}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,1.18fr)]">
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 md:p-5">
                <Image
                  src="/halkaarz.png"
                  alt="AAGYO güncel veriler görseli"
                  width={900}
                  height={1200}
                  className="h-auto max-h-[900px] w-auto max-w-full object-contain"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <KurumTablosu
                  title="En Çok Alıcı Kurumlar"
                  rows={alicilar}
                  lotBaslik="Net Lot"
                  sagBaslik="Toplam"
                />
                <KurumTablosu
                  title="En Çok Satıcı Kurumlar"
                  rows={saticilar}
                  lotBaslik="Net Lot"
                  sagBaslik="Toplam"
                />
                <KurumTablosu
                  title="En Çok İşlem Yapan Kurumlar"
                  rows={hacimciler}
                  lotBaslik="Toplam Lot"
                  sagBaslik="Net"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}