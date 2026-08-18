"use client";

import { useSearchParams } from "next/navigation";
import { FlowTable, PeriodLinks, type FlowFund } from "../_components/FonUi";
import type { PeriodKey } from "@/lib/fon-platform";

const validPeriods = new Set<PeriodKey>(["gunluk", "besGun", "birAy", "ucAy"]);

export default function FlowPeriodClient({ funds }: { funds: FlowFund[] }) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("period") as PeriodKey | null;
  const period = requested && validPeriods.has(requested) ? requested : "gunluk";

  return (
    <>
      <div className="mb-5">
        <PeriodLinks active={period} basePath="/fonlar/para-girisi" />
      </div>
      <section className="space-y-8">
        <div>
          <h2 className="mb-3 text-xl font-bold text-slate-950">En Çok Para Girişi Alan Fonlar</h2>
          <FlowTable funds={funds} period={period} direction="in" />
        </div>
        <div>
          <h2 className="mb-3 text-xl font-bold text-slate-950">En Çok Para Çıkışı Yaşayan Fonlar</h2>
          <FlowTable funds={funds} period={period} direction="out" />
        </div>
      </section>
    </>
  );
}
