"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FlowTable, PeriodLinks, type FlowFund } from "../_components/FonUi";
import type { PeriodKey } from "@/lib/fon-platform";

const validPeriods = new Set<PeriodKey>(["gunluk", "besGun", "birAy", "ucAy"]);
type FlowDirection = "in" | "out";

export default function FlowPeriodClient({ funds }: { funds: FlowFund[] }) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("period") as PeriodKey | null;
  const period = requested && validPeriods.has(requested) ? requested : "gunluk";
  const [direction, setDirection] = useState<FlowDirection>("in");
  const heading =
    direction === "in"
      ? "En Çok Para Girişi Alan Fonlar"
      : "En Çok Para Çıkışı Yaşayan Fonlar";

  return (
    <>
      <div className="mb-5">
        <PeriodLinks active={period} basePath="/fonlar/para-girisi" />
      </div>
      <div className="mb-5 flex flex-wrap gap-2" aria-label="Para akışı yönü">
        <button
          type="button"
          aria-pressed={direction === "in"}
          onClick={() => setDirection("in")}
          className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
            direction === "in"
              ? "border-emerald-700 bg-emerald-700 text-white shadow-sm"
              : "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
          }`}
        >
          Para Girişi
        </button>
        <button
          type="button"
          aria-pressed={direction === "out"}
          onClick={() => setDirection("out")}
          className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
            direction === "out"
              ? "border-red-700 bg-red-700 text-white shadow-sm"
              : "border-red-200 bg-red-50 text-red-800 hover:bg-red-100"
          }`}
        >
          Para Çıkışı
        </button>
      </div>
      <section>
        <h2 className="mb-3 text-xl font-bold text-slate-950">{heading}</h2>
        <FlowTable funds={funds} period={period} direction={direction} />
      </section>
    </>
  );
}
