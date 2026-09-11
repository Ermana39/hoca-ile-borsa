import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
function loadModule(relative, redis = null) {
  if (relative.endsWith("kv.ts")) return { kv: redis };
  const file = path.resolve(root, relative);
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  new Function("require", "module", "exports", source)((name) => name.startsWith(".")
    ? loadModule(path.resolve(path.dirname(file), name.replace(/\.js$/, ".ts")), redis) : require(name), module, module.exports);
  return module.exports;
}
const { summarizePortfolio, parsePortfolioNumber, buildPortfolioHistory, mergePriceHistory } = loadModule("lib/portfolio-analytics.ts");
const position = (props = {}) => ({ holding_id: "gold", asset_type: "gold", asset_code: "XAU_GR", quantity: 10, buy_price: 6858.74, buy_date: "2026-09-08", created_at: "2026-09-11T10:00:00Z", updated_at: "2026-09-11T10:00:00Z", ...props });

test("10 grams at 6858,74 retains full cost without fabricating market value or profit", () => {
  assert.equal(parsePortfolioNumber("6858,74"), 6858.74);
  assert.equal(parsePortfolioNumber("6.858,74"), 6858.74);
  assert.equal(parsePortfolioNumber("0,005"), 0.005);
  const result = summarizePortfolio([position()], {});
  assert.ok(Math.abs(result.cost - 68587.4) < 0.00001);
  assert.equal(result.trackedValue, result.cost);
  assert.equal(result.rows[0].value, null);
  assert.equal(result.profit, null);
  assert.equal(result.missingCount, 1);
});

test("mixed portfolio preserves unpriced cost and computes gains only on priced capital", () => {
  const dollar = position({ holding_id: "usd", asset_type: "currency", asset_code: "USD", quantity: 100, buy_price: 40 });
  const result = summarizePortfolio([position(), dollar], { "currency:USD": { price: 45, date: "2026-09-11", dailyReturn: 1 } });
  assert.equal(result.profit, 500);
  assert.equal(result.returnPct, 12.5);
  assert.equal(result.trackedValue, 68587.4 + 4500);
  assert.equal(result.complete, false);
  const priced = summarizePortfolio([position()], { "gold:XAU_GR": { price: 7000, date: "2026-09-11", dailyReturn: 1 } });
  assert.ok(Math.abs(priced.profit - 1412.6) < 0.00001);
  assert.equal(priced.trackedValue, 70000);
  assert.equal(priced.complete, true);
});

test("no holdings and invalid prices cannot produce NaN, fake loss, or fake zero profit", () => {
  const empty = summarizePortfolio([], {});
  assert.equal(empty.trackedValue, 0);
  assert.equal(empty.profit, null);
  assert.equal(empty.coverage, 0);
  for (const price of [0, -1, Number.NaN, Infinity]) {
    assert.equal(summarizePortfolio([position()], { "gold:XAU_GR": { price } }).profit, null);
  }
});

test("history never backfills a later quote into earlier days; missing days remain gaps", () => {
  const points = buildPortfolioHistory([position()], { "gold:XAU_GR": [{ date: "2026-09-10", price: 6900 }, { date: "2026-09-11", price: 7000 }, { date: "2026-09-12", price: 9900 }] }, "2026-09-11");
  assert.equal(points[0].date, "2026-09-08");
  assert.equal(points[0].value, null);
  assert.equal(points[0].profit, null);
  assert.equal(points.at(-1).value, 70000);
  assert.equal(points.at(-1).cost, 68587.4);
  assert.equal(points.length, 3);
});

test("money added on another buy date raises cost, not profit", () => {
  const points = buildPortfolioHistory([
    position({ quantity: 1, buy_price: 100 }),
    position({ holding_id: "usd", asset_type: "currency", asset_code: "USD", quantity: 10, buy_price: 10, buy_date: "2026-09-10" }),
  ], {
    "gold:XAU_GR": [{ date: "2026-09-08", price: 100 }, { date: "2026-09-10", price: 105 }],
    "currency:USD": [{ date: "2026-09-08", price: 10 }, { date: "2026-09-10", price: 10 }],
  }, "2026-09-11");
  assert.equal(points[0].cost, 100);
  assert.equal(points[0].profit, 0);
  assert.equal(points.at(-1).cost, 200);
  assert.equal(points.at(-1).value, 205);
  assert.equal(points.at(-1).profit, 5);
});

test("unspecified purchase date starts at registration; outages don't extend quotes indefinitely", () => {
  const points = buildPortfolioHistory([position({ buy_date: null })], { "gold:XAU_GR": [{ date: "2026-08-01", price: 7000 }] }, "2026-09-11");
  assert.equal(points.length, 1);
  assert.equal(points[0].value, null);
  const weekend = buildPortfolioHistory([position()], { "gold:XAU_GR": [{ date: "2026-09-11", price: 7000 }] }, "2026-09-13");
  assert.equal(weekend.at(-1).value, 70000);
});

test("price history merges by date and discards invalid or non-positive quotes", () => {
  assert.deepEqual(mergePriceHistory([{ date: "2026-09-10", price: 1 }], [{ date: "2026-09-10", price: 2 }, { date: "2026-09-09", price: 0 }, { date: "bad", price: 1 }]), [{ date: "2026-09-10", price: 2 }]);
});

test("market cache preserves real historical dates and hides provider setup details", async () => {
  const previousFetch = globalThis.fetch;
  const original = [process.env.EVDS_API_KEY, process.env.TCMB_EVDS_API_KEY];
  delete process.env.EVDS_API_KEY;
  delete process.env.TCMB_EVDS_API_KEY;
  let stored;
  const redis = {
    async get(key) { return key.includes("market-prices") ? { fetchedAt: "2020-01-01T00:00:00Z", prices: {}, history: { USD: [{ date: "2026-09-01", price: 40 }] } } : null; },
    async set(key, value) { stored = value; },
  };
  globalThis.fetch = async (url) => {
    assert.ok(String(url).startsWith("https://www.tcmb.gov.tr/kurlar/"));
    return new Response(`<Tarih_Date Tarih="${String(url).endsWith("today.xml") ? "11.09.2026" : "10.09.2026"}"><Currency CurrencyCode="USD"><ForexBuying>42.50</ForexBuying></Currency><Currency CurrencyCode="EUR"><ForexBuying>45.10</ForexBuying></Currency></Tarih_Date>`);
  };
  try {
    const { getPortfolioMarketPrices } = loadModule("lib/portfolio-market-prices.ts", redis);
    const result = await getPortfolioMarketPrices();
    assert.equal(result.prices.USD.price, 42.5);
    assert.deepEqual(result.history.USD.map((row) => row.date), ["2026-09-01", "2026-09-10", "2026-09-11"]);
    assert.ok(!result.prices.XAU_GR);
    assert.ok(result.warnings.every((message) => !/API|anahtar|EVDS/.test(message)));
    assert.deepEqual(stored.history, result.history);
  } finally {
    globalThis.fetch = previousFetch;
    for (const [index, key] of ["EVDS_API_KEY", "TCMB_EVDS_API_KEY"].entries()) {
      if (original[index] === undefined) delete process.env[key]; else process.env[key] = original[index];
    }
  }
});
