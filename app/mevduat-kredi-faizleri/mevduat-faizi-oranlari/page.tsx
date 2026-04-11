import Link from "next/link";
import type { Metadata } from "next";
import { MevduatHesaplayici } from "@/components/faiz-hesaplayicilar";

export const metadata: Metadata = {
  title: "Mevduat Faizi Oranları | Hoca İle Borsa",
  description:
    "Bankalara göre güncel mevduat faizi oranları listesi. Banka adı ve maksimum faiz oranı bilgileri.",
  alternates: {
    canonical: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
  },
};

type BankaFaiz = {
  banka: string;
  maxFaiz: string;
};

const bankaFaizListesi: BankaFaiz[] = [
  { banka: "Ziraat Dinamik", maxFaiz: "%47" },
  { banka: "Hayat Finans", maxFaiz: "%46,06" },
  { banka: "Fibabanka", maxFaiz: "%46" },
  { banka: "Türk Ticaret Bankası", maxFaiz: "%45,25" },
  { banka: "Alternatif Bank", maxFaiz: "%45" },
  { banka: "Anadolubank", maxFaiz: "%45" },
  { banka: "CEPTETEB", maxFaiz: "%45" },
  { banka: "ING", maxFaiz: "%45" },
  { banka: "Odea", maxFaiz: "%45" },
  { banka: "ON Dijital Bankacılık", maxFaiz: "%45" },
  { banka: "TEB - Türk Ekonomi Bankası", maxFaiz: "%45" },
  { banka: "QNB", maxFaiz: "%44,5" },
  { banka: "HSBC", maxFaiz: "%44" },
  { banka: "DenizBank", maxFaiz: "%43,5" },
  { banka: "Akbank", maxFaiz: "%43" },
  { banka: "getirfinans", maxFaiz: "%43" },
  { banka: "Yapı Kredi", maxFaiz: "%43" },
  { banka: "Garanti BBVA", maxFaiz: "%42" },
  { banka: "Ziraat Bankası", maxFaiz: "%41" },
  { banka: "N Kolay", maxFaiz: "%40" },
  { banka: "İş Bankası", maxFaiz: "%40" },
  { banka: "Enpara.com", maxFaiz: "%39,5" },
  { banka: "Şekerbank", maxFaiz: "%37" },
  { banka: "Halkbank", maxFaiz: "%36" },
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function faizToNumber(value: string) {
  return Number(value.replace("%", "").replace(",", ".").trim()) || 0;
}

function MevduatGrafik() {
  const grafikVerisi = bankaFaizListesi
    .map((item) => ({
      banka: item.banka,
      oran: faizToNumber(item.maxFaiz),
    }))
    .sort((a, b) => b.oran - a.oran)
    .slice(0, 10);

  const maxDeger = Math.max(...grafikVerisi.map((item) => item.oran), 1);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-zinc-900">
          En Yüksek Mevduat Faizi Sunan Bankalar
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          En yüksek oran veren ilk 10 bankanın karşılaştırmalı görünümü.
        </p>
      </div>

      <div className="space-y-4">
        {grafikVerisi.map((item) => {
          const widthPercent = (item.oran / maxDeger) * 100;

          return (
            <div key={item.banka}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-medium text-zinc-800">{item.banka}</span>
                <span className="font-semibold text-zinc-900">%{item.oran}</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-zinc-900"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function MevduatFaiziOranlariPage() {
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
            href="/mevduat-kredi-faizleri"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Mevduat Faizi Oranları
        </h1>

        <p className="mb-8 text-base text-zinc-600">
          Banka adı ve maksimum mevduat faiz oranı listesi.
        </p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-sm md:text-base">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-900">
                    Banka
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-900">
                    Maksimum Faiz
                  </th>
                </tr>
              </thead>

              <tbody>
                {bankaFaizListesi.map((item, index) => (
                  <tr
                    key={item.banka}
                    className={index % 2 === 0 ? "bg-white" : "bg-sky-50/60"}
                  >
                    <td className="px-4 py-3 font-medium text-zinc-800">
                      {item.banka}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-zinc-900">
                      {item.maxFaiz}
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

        <section className="mt-8">
          <MevduatGrafik />
        </section>

        <section className="mt-8">
          <MevduatHesaplayici />
        </section>
      </div>
    </main>
  );
}