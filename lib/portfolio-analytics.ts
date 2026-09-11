// Browser-safe calculations: purchase cost is never treated as a market quote.
export type PortfolioPosition = {
  holding_id: string;
  asset_type: "fund" | "currency" | "gold";
  asset_code: string;
  quantity: number;
  buy_price: number;
  buy_date: string | null;
  created_at: string;
  updated_at: string;
};

export type PriceObservation = { date: string; price: number };
export type PortfolioQuote = PriceObservation & {
  dailyReturn: number | null;
  source?: string;
  sourceDetail?: string;
};
export type PortfolioQuotes = Record<string, PortfolioQuote | null | undefined>;
export type PortfolioPriceHistory = Record<string, PriceObservation[] | undefined>;
export type PortfolioHistoryPoint = {
  date: string;
  cost: number;
  value: number | null;
  profit: number | null;
  missingCount: number;
};

export const assetKey = (position: Pick<PortfolioPosition, "asset_type" | "asset_code">) =>
  `${position.asset_type}:${position.asset_code}`;

export function parsePortfolioNumber(value: string) {
  const raw = value.trim().replace(/\s/g, "");
  if (!raw) return Number.NaN;
  if (raw.includes(",") && raw.includes(".")) return Number(raw.replace(/\./g, "").replace(",", "."));
  if (/^\d{1,3}(?:\.\d{3})+$/.test(raw)) return Number(raw.replace(/\./g, ""));
  return Number(raw.replace(",", "."));
}

export function summarizePortfolio(holdings: PortfolioPosition[], quotes: PortfolioQuotes) {
  const rows = holdings.map((holding) => {
    const candidate = quotes[assetKey(holding)];
    const quote = candidate && Number.isFinite(candidate.price) && candidate.price > 0 ? candidate : null;
    const cost = holding.quantity * holding.buy_price;
    const value = quote ? holding.quantity * quote.price : null;
    const profit = value === null ? null : value - cost;
    return { holding, quote, cost, value, profit, returnPct: profit === null ? null : profit / cost * 100 };
  });
  const cost = rows.reduce((sum, row) => sum + row.cost, 0);
  const pricedRows = rows.filter((row) => row.value !== null);
  const pricedValue = pricedRows.reduce((sum, row) => sum + row.value!, 0);
  const pricedCost = pricedRows.reduce((sum, row) => sum + row.cost, 0);
  const pendingCost = cost - pricedCost;
  const missingCount = rows.length - pricedRows.length;
  const profit = pricedRows.length ? pricedValue - pricedCost : null;
  return {
    rows, cost, pricedValue, pricedCost, pendingCost, missingCount,
    complete: missingCount === 0,
    trackedValue: pricedValue + pendingCost,
    profit,
    returnPct: profit !== null && pricedCost > 0 ? profit / pricedCost * 100 : null,
    coverage: cost > 0 ? pricedCost / cost * 100 : 0,
  };
}

/** Keep actual, positive dated observations only; new observations replace the same date. */
export function mergePriceHistory(...histories: Array<PriceObservation[] | undefined>) {
  const dates = new Map<string, PriceObservation>();
  for (const history of histories) {
    for (const row of history ?? []) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(row.date) && Number.isFinite(row.price) && row.price > 0) {
        dates.set(row.date, { date: row.date, price: row.price });
      }
    }
  }
  return [...dates.values()].sort((a, b) => a.date.localeCompare(b.date)).slice(-730);
}

/** Revalue today's positions from their buy date, not a fictional transaction ledger. */
export function buildPortfolioHistory(
  holdings: PortfolioPosition[], histories: PortfolioPriceHistory, today: string,
): PortfolioHistoryPoint[] {
  if (!holdings.length) return [];
  const startFor = (holding: PortfolioPosition) => holding.buy_date || holding.created_at.slice(0, 10);
  const start = holdings.map(startFor).sort()[0];
  const dates = new Set<string>([today]);
  const series = holdings.map((holding) => {
    dates.add(startFor(holding));
    const observations = mergePriceHistory(histories[assetKey(holding)]).filter((row) => row.date <= today);
    for (const observation of observations) {
      if (observation.date >= start) dates.add(observation.date);
    }
    return { holding, observations, cursor: -1 };
  });
  return [...dates].filter((date) => date >= start && date <= today).sort().map((date) => {
    let cost = 0;
    let value = 0;
    let missingCount = 0;
    for (const item of series) {
      while (item.cursor + 1 < item.observations.length && item.observations[item.cursor + 1].date <= date) item.cursor++;
      if (date < startFor(item.holding)) continue;
      cost += item.holding.quantity * item.holding.buy_price;
      const quote = item.observations[item.cursor];
      // Don't extend an old price indefinitely through a provider outage.
      const age = quote ? (Date.parse(date) - Date.parse(quote.date)) / 86_400_000 : Infinity;
      if (!quote || age > 7) missingCount++;
      else value += item.holding.quantity * quote.price;
    }
    return { date, cost, value: missingCount ? null : value, profit: missingCount ? null : value - cost, missingCount };
  }).slice(-731);
}
