import type { PeriodKey, ReturnKey } from "@/lib/fon-platform";

export function getPeriodLabel(period: PeriodKey) {
  const labels: Record<PeriodKey, string> = {
    gunluk: "Bugün",
    besGun: "5 Gün",
    birAy: "1 Ay",
    ucAy: "3 Ay",
  };
  return labels[period];
}

export function getReturnLabel(key: ReturnKey) {
  const labels: Record<ReturnKey, string> = {
    birAy: "1A",
    ucAy: "3A",
    altiAy: "6A",
    yilbasi: "YBB",
    birYil: "1Y",
    ucYil: "3Y",
    besYil: "5Y",
  };
  return labels[key];
}
