"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthMessage, getAuthSession, type ApiResult } from "./AuthFormParts";

type AccountUser = {
  user_id: string;
  email: string;
  display_name: string;
  role: "user" | "admin";
  plan: "free" | "premium";
  email_verified: boolean;
  created_at: string;
};

type AssetType = "fund" | "currency" | "gold";

type Holding = {
  holding_id: string;
  asset_type: AssetType;
  asset_code: string;
  quantity: number;
  buy_price: number;
  buy_date: string | null;
  created_at: string;
  updated_at: string;
};

type AssetPrice = {
  price: number;
  date: string;
  dailyReturn: number | null;
  source?: string;
  sourceDetail?: string;
};

type MarketCode = "USD" | "EUR" | "XAU_GR";

type MarketPrice = AssetPrice & {
  code: MarketCode;
  label: string;
  source: string;
  sourceDetail: string;
  frequency: "workday";
};

type FundOption = {
  kod: string;
  ad: string;
  yonetici: string;
};

type PortfolioResponse = ApiResult & { holdings?: Holding[] };
type MarketResponse = ApiResult & {
  prices?: Partial<Record<MarketCode, MarketPrice>>;
  warnings?: string[];
  fetchedAt?: string;
};

type FundHistoryRow = [string, number | null, unknown, unknown, unknown, number | null, ...unknown[]];

type HistoryPayload = {
  rows?: FundHistoryRow[];
};

type HistoryBundlePayload = {
  funds?: Record<string, FundHistoryRow[]>;
};

type FormState = {
  assetType: AssetType;
  assetCode: string;
  quantity: string;
  buyPrice: string;
  buyDate: string;
};

const emptyForm: FormState = {
  assetType: "fund",
  assetCode: "",
  quantity: "",
  buyPrice: "",
  buyDate: "",
};

const marketAssets: Array<{ type: AssetType; code: MarketCode; label: string; short: string }> = [
  { type: "currency", code: "USD", label: "Dolar", short: "USD" },
  { type: "currency", code: "EUR", label: "Euro", short: "EUR" },
  { type: "gold", code: "XAU_GR", label: "Gram Altın", short: "ALTIN" },
];

function parseNumberInput(value: string) {
  const raw = value.trim().replace(/\s/g, "");
  if (!raw) return Number.NaN;
  if (raw.includes(",") && raw.includes(".")) {
    return Number(raw.replace(/\./g, "").replace(",", "."));
  }
  if (/^\d{1,3}(?:\.\d{3})+$/.test(raw)) {
    return Number(raw.replace(/\./g, ""));
  }
  return Number(raw.replace(",", "."));
}

function fundHistoryBundleUrl(slug: string) {
  let hash = 0;
  for (const character of slug) {
    hash = (Math.imul(hash, 31) + character.charCodeAt(0)) >>> 0;
  }
  return `/data/fonlar/history-bundles/${String(hash % 64).padStart(2, "0")}.json`;
}

function normalizeFundSearch(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function fundMatchScore(item: FundOption, query: string) {
  const code = normalizeFundSearch(item.kod).replace(/\s/g, "");
  const compactQuery = query.replace(/\s/g, "");
  const name = normalizeFundSearch(item.ad);
  const manager = normalizeFundSearch(item.yonetici);

  if (code === compactQuery) return 0;
  if (code.startsWith(compactQuery)) return 1;
  if (code.includes(compactQuery)) return 2;
  if (name.startsWith(query)) return 3;
  if (name.split(" ").some((word) => word.startsWith(query))) return 4;
  if (name.includes(query)) return 5;
  if (manager.includes(query)) return 6;
  return null;
}

function formatMoney(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(value);
}

function formatQuantity(value: number) {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 6 }).format(value);
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}%`;
}

function assetLabel(holding: Pick<Holding, "asset_type" | "asset_code">) {
  if (holding.asset_type === "currency") return holding.asset_code === "USD" ? "Dolar" : "Euro";
  if (holding.asset_type === "gold") return "Gram Altın";
  return holding.asset_code;
}

function quantityLabel(assetType: AssetType, assetCode: string) {
  if (assetType === "gold") return "Gram";
  if (assetType === "currency") return assetCode === "EUR" ? "Euro" : "Dolar";
  return "Fon adedi";
}

function quantitySuffix(holding: Pick<Holding, "asset_type" | "asset_code">) {
  if (holding.asset_type === "gold") return " gr";
  if (holding.asset_type === "currency") return ` ${holding.asset_code}`;
  return "";
}

async function readLatestFundPrice(code: string): Promise<AssetPrice> {
  const normalized = code.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!normalized) throw new Error("Fon kodu bulunamadı.");

  let rows: FundHistoryRow[] = [];
  const bundleResponse = await fetch(fundHistoryBundleUrl(normalized), { cache: "force-cache" });
  if (bundleResponse.ok) {
    const bundle = (await bundleResponse.json()) as HistoryBundlePayload;
    rows = Array.isArray(bundle.funds?.[normalized]) ? bundle.funds[normalized] : [];
  } else {
    // Yerel geliştirmede statik build henüz history dosyalarını paketlemediği için
    // tekil dosyaya geri düş. Production'da history-bundles kullanılır.
    const response = await fetch(`/data/fonlar/history/${encodeURIComponent(normalized)}.json`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Fon kodu bulunamadı.");
    const payload = (await response.json()) as HistoryPayload;
    rows = Array.isArray(payload.rows) ? payload.rows : [];
  }

  for (let index = rows.length - 1; index >= 0; index -= 1) {
    const row = rows[index];
    if (row && typeof row[1] === "number" && Number.isFinite(row[1])) {
      return {
        date: row[0],
        price: row[1],
        dailyReturn: typeof row[5] === "number" && Number.isFinite(row[5]) ? row[5] * 100 : null,
        source: "TEFAS / resmi fon verisi",
        sourceDetail: "Son açıklanan fon birim fiyatı",
      };
    }
  }
  throw new Error("Fonun güncel fiyatı bulunamadı.");
}

async function portfolioRequest(method: "POST" | "PUT" | "DELETE", body: Record<string, unknown>) {
  const response = await fetch("/api/portfolio", {
    method,
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const result = (await response.json().catch(() => ({ ok: false, message: "Sunucu yanıtı okunamadı." }))) as ApiResult;
  if (!response.ok || !result.ok) throw new Error(result.message || "Portföy işlemi tamamlanamadı.");
  return result;
}

export default function PortfolioPanel({ funds }: { funds: FundOption[] }) {
  const router = useRouter();
  const [user, setUser] = useState<AccountUser | null>(null);
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [fundPrices, setFundPrices] = useState<Record<string, AssetPrice | null>>({});
  const [marketPrices, setMarketPrices] = useState<Partial<Record<MarketCode, MarketPrice>>>({});
  const [marketWarnings, setMarketWarnings] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [checkingCode, setCheckingCode] = useState(false);
  const [previewPrice, setPreviewPrice] = useState<AssetPrice | null>(null);
  const [fundSearchOpen, setFundSearchOpen] = useState(false);
  const [fundActiveIndex, setFundActiveIndex] = useState(0);
  const [fundEntryMode, setFundEntryMode] = useState<"quantity" | "amount">("quantity");
  const [fundAmount, setFundAmount] = useState("");

  const normalizedFundQuery = normalizeFundSearch(form.assetCode);
  const fundResults = useMemo(() => {
    if (!normalizedFundQuery) return funds.slice(0, 12);
    return funds
      .map((fund) => ({ fund, score: fundMatchScore(fund, normalizedFundQuery) }))
      .filter((result): result is { fund: FundOption; score: number } => result.score !== null)
      .sort((a, b) => a.score - b.score || a.fund.kod.localeCompare(b.fund.kod, "tr-TR"))
      .slice(0, 10)
      .map((result) => result.fund);
  }, [funds, normalizedFundQuery]);

  const selectedFundIndex = Math.min(fundActiveIndex, Math.max(0, fundResults.length - 1));

  const loadMarketPrices = useCallback(async () => {
    const response = await fetch("/api/portfolio-market-prices", {
      credentials: "same-origin",
      cache: "no-store",
    });
    const result = (await response.json().catch(() => ({ ok: false, message: "Piyasa fiyatları okunamadı." }))) as MarketResponse;
    if (!response.ok || !result.ok) throw new Error(result.message || "Piyasa fiyatları alınamadı.");
    const next = result.prices ?? {};
    setMarketPrices(next);
    setMarketWarnings(Array.isArray(result.warnings) ? result.warnings : []);
    return next;
  }, []);

  const loadFundPrices = useCallback(async (items: Holding[]) => {
    const codes = Array.from(
      new Set(items.filter((item) => item.asset_type === "fund").map((item) => item.asset_code)),
    );
    const entries = await Promise.all(
      codes.map(async (code) => {
        try {
          return [code, await readLatestFundPrice(code)] as const;
        } catch {
          return [code, null] as const;
        }
      }),
    );
    setFundPrices(Object.fromEntries(entries));
  }, []);

  const loadPortfolio = useCallback(async () => {
    const response = await fetch("/api/portfolio", {
      credentials: "same-origin",
      cache: "no-store",
    });
    const result = (await response.json().catch(() => ({ ok: false, message: "Sunucu yanıtı okunamadı." }))) as PortfolioResponse;
    if (!response.ok || !result.ok) throw new Error(result.message || "Portföy bilgileri yüklenemedi.");
    const nextHoldings = Array.isArray(result.holdings) ? result.holdings : [];
    setHoldings(nextHoldings);
    await Promise.all([loadFundPrices(nextHoldings), loadMarketPrices().catch(() => undefined)]);
  }, [loadFundPrices, loadMarketPrices]);

  useEffect(() => {
    let active = true;
    void getAuthSession<AccountUser>()
      .then(async (result) => {
        if (!active) return;
        if (!result.authenticated || !result.user || !result.user.email_verified) {
          router.replace("/giris");
          return;
        }
        setUser(result.user);
        await loadPortfolio();
      })
      .catch((loadError) => {
        if (active) setError(loadError instanceof Error ? loadError.message : "Portföy bilgileri yüklenemedi.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [loadPortfolio, router]);

  const priceForHolding = useCallback(
    (holding: Holding): AssetPrice | null => {
      if (holding.asset_type === "fund") return fundPrices[holding.asset_code] ?? null;
      return marketPrices[holding.asset_code as MarketCode] ?? null;
    },
    [fundPrices, marketPrices],
  );

  const summary = useMemo(() => {
    let cost = 0;
    let current = 0;
    let pricedCount = 0;
    for (const holding of holdings) {
      cost += holding.quantity * holding.buy_price;
      const latest = holding.asset_type === "fund"
        ? fundPrices[holding.asset_code]
        : marketPrices[holding.asset_code as MarketCode];
      if (latest) {
        current += holding.quantity * latest.price;
        pricedCount += 1;
      }
    }
    const profit = pricedCount === holdings.length ? current - cost : null;
    const returnPct = profit !== null && cost > 0 ? (profit / cost) * 100 : null;
    return { cost, current, profit, returnPct, complete: pricedCount === holdings.length };
  }, [holdings, fundPrices, marketPrices]);

  async function checkFundCode() {
    const code = form.assetCode.trim().toUpperCase();
    if (!code) return;
    setCheckingCode(true);
    setError("");
    try {
      const latest = await readLatestFundPrice(code);
      setPreviewPrice(latest);
      setForm((current) => ({ ...current, assetCode: code }));
      setFundSearchOpen(false);
    } catch (codeError) {
      setPreviewPrice(null);
      setError(codeError instanceof Error ? codeError.message : "Fon kodu kontrol edilemedi.");
    } finally {
      setCheckingCode(false);
    }
  }

  async function selectFund(fund: FundOption) {
    setForm((current) => ({ ...current, assetType: "fund", assetCode: fund.kod }));
    setFundSearchOpen(false);
    setFundActiveIndex(0);
    setPreviewPrice(null);
    setError("");
    setCheckingCode(true);
    try {
      setPreviewPrice(await readLatestFundPrice(fund.kod));
    } catch (selectError) {
      setError(selectError instanceof Error ? selectError.message : "Fon fiyatı kontrol edilemedi.");
    } finally {
      setCheckingCode(false);
    }
  }

  async function selectMarketAsset(asset: (typeof marketAssets)[number]) {
    setForm((current) => ({ ...current, assetType: asset.type, assetCode: asset.code }));
    setFundSearchOpen(false);
    setPreviewPrice(null);
    setError("");
    let prices = marketPrices;
    if (!prices[asset.code]) {
      try {
        prices = await loadMarketPrices();
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Güncel fiyat alınamadı.");
        return;
      }
    }
    const latest = prices[asset.code];
    if (latest) setPreviewPrice(latest);
  }

  function selectFundType() {
    setForm((current) => ({ ...current, assetType: "fund", assetCode: "" }));
    setPreviewPrice(null);
    setFundSearchOpen(false);
    setFundActiveIndex(0);
    setError("");
  }

  function openAddForm() {
    setEditingId(null);
    setForm(emptyForm);
    setPreviewPrice(null);
    setFundSearchOpen(false);
    setFundActiveIndex(0);
    setFundEntryMode("quantity");
    setFundAmount("");
    setError("");
    setMessage("");
    setFormOpen(true);
  }

  function openEditForm(holding: Holding) {
    setEditingId(holding.holding_id);
    setForm({
      assetType: holding.asset_type,
      assetCode: holding.asset_code,
      quantity: String(holding.quantity),
      buyPrice: String(holding.buy_price),
      buyDate: holding.buy_date || "",
    });
    setPreviewPrice(priceForHolding(holding));
    setFundSearchOpen(false);
    setFundActiveIndex(0);
    setFundEntryMode("quantity");
    setFundAmount("");
    setError("");
    setMessage("");
    setFormOpen(true);
  }

  async function saveHolding(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    try {
      const code = form.assetCode.trim().toUpperCase();
      if (form.assetType === "fund") {
        await readLatestFundPrice(code);
      } else {
        let prices = marketPrices;
        if (!prices[code as MarketCode]) prices = await loadMarketPrices();
        if (!prices[code as MarketCode]) {
          throw new Error(code === "XAU_GR" ? "Gram altın resmi gün sonu fiyatı henüz alınamadı." : "Güncel resmi kur alınamadı.");
        }
      }
      const buyPrice = parseNumberInput(form.buyPrice);
      if (!Number.isFinite(buyPrice) || buyPrice <= 0) throw new Error("Geçerli bir alış fiyatı girin.");

      let quantity = parseNumberInput(form.quantity);
      if (form.assetType === "fund" && fundEntryMode === "amount") {
        const amount = parseNumberInput(fundAmount);
        if (!Number.isFinite(amount) || amount <= 0) throw new Error("Geçerli bir yatırım tutarı girin.");
        quantity = amount / buyPrice;
      }
      if (!Number.isFinite(quantity) || quantity <= 0) throw new Error("Geçerli bir miktar girin.");
      await portfolioRequest(editingId ? "PUT" : "POST", {
        ...(editingId ? { holdingId: editingId } : {}),
        assetType: form.assetType,
        assetCode: code,
        quantity,
        buyPrice,
        buyDate: form.buyDate || null,
      });
      await loadPortfolio();
      const wasEditing = Boolean(editingId);
      setFormOpen(false);
      setForm(emptyForm);
      setEditingId(null);
      setPreviewPrice(null);
      setMessage(wasEditing ? "Varlık bilgileri güncellendi." : "Varlık portföyünüze eklendi.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Varlık kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  async function removeHolding(holding: Holding) {
    if (!window.confirm(`${assetLabel(holding)} varlığını portföyünüzden kaldırmak istiyor musunuz?`)) return;
    setError("");
    setMessage("");
    try {
      await portfolioRequest("DELETE", { holdingId: holding.holding_id });
      await loadPortfolio();
      setMessage(`${assetLabel(holding)} portföyünüzden kaldırıldı.`);
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : "Varlık kaldırılamadı.");
    }
  }

  if (loading) return <AuthMessage type="info">Portföyünüz yükleniyor…</AuthMessage>;
  if (!user) {
    return (
      <AuthMessage type={error ? "error" : "info"}>
        {error || "Giriş sayfasına yönlendiriliyorsunuz…"}
      </AuthMessage>
    );
  }

  const selectedMarket = marketAssets.find((item) => item.code === form.assetCode && item.type === form.assetType);
  const formBuyPrice = parseNumberInput(form.buyPrice);
  const formFundQuantity = parseNumberInput(form.quantity);
  const formFundAmount = parseNumberInput(fundAmount);
  const calculatedFundQuantity =
    form.assetType === "fund" && fundEntryMode === "amount" && Number.isFinite(formFundAmount) && formFundAmount > 0 && Number.isFinite(formBuyPrice) && formBuyPrice > 0
      ? formFundAmount / formBuyPrice
      : null;
  const calculatedFundCost =
    form.assetType === "fund" && fundEntryMode === "quantity" && Number.isFinite(formFundQuantity) && formFundQuantity > 0 && Number.isFinite(formBuyPrice) && formBuyPrice > 0
      ? formFundQuantity * formBuyPrice
      : null;

  return (
    <div className="space-y-5">
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
      {message ? <AuthMessage type="success">{message}</AuthMessage> : null}

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-500">Portföy sahibi</p>
        <p className="mt-1 break-words text-base font-extrabold text-slate-900">{user.display_name}</p>
      </div>

      <button
        type="button"
        onClick={openAddForm}
        className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800"
      >
        + Varlık Ekle
      </button>

      {formOpen ? (
        <form onSubmit={saveHolding} className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-extrabold text-slate-900">{editingId ? "Varlığı Düzenle" : "Portföye Varlık Ekle"}</h2>
            <button type="button" onClick={() => setFormOpen(false)} className="text-sm font-semibold text-slate-500 hover:text-slate-800">Kapat</button>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">Varlık türü</p>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <button
                type="button"
                onClick={selectFundType}
                className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${form.assetType === "fund" ? "border-blue-600 bg-blue-50 text-blue-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
              >
                Yatırım Fonu
              </button>
              {marketAssets.map((asset) => (
                <button
                  key={asset.code}
                  type="button"
                  onClick={() => void selectMarketAsset(asset)}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${selectedMarket?.code === asset.code ? "border-blue-600 bg-blue-50 text-blue-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
                >
                  {asset.label}
                </button>
              ))}
            </div>
          </div>

          {form.assetType === "fund" ? (
            <label className="block text-sm font-semibold text-slate-800">
              Fon seç / ara
              <div
                className="relative mt-2"
                onFocus={() => setFundSearchOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setFundSearchOpen(false);
                }}
              >
                <div className="flex gap-2">
                  <input
                    value={form.assetCode}
                    onChange={(event) => {
                      setForm((current) => ({ ...current, assetCode: event.target.value.slice(0, 80) }));
                      setPreviewPrice(null);
                      setFundActiveIndex(0);
                      setFundSearchOpen(true);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown" && fundResults.length > 0) {
                        event.preventDefault();
                        setFundSearchOpen(true);
                        setFundActiveIndex((current) => (current + 1) % fundResults.length);
                      } else if (event.key === "ArrowUp" && fundResults.length > 0) {
                        event.preventDefault();
                        setFundSearchOpen(true);
                        setFundActiveIndex((current) => (current - 1 + fundResults.length) % fundResults.length);
                      } else if (event.key === "Enter" && fundSearchOpen && fundResults.length > 0) {
                        event.preventDefault();
                        void selectFund(fundResults[selectedFundIndex]);
                      } else if (event.key === "Escape") {
                        setFundSearchOpen(false);
                      }
                    }}
                    placeholder="Fon kodu veya fon adı ara (örn. TLY)"
                    autoComplete="off"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={fundSearchOpen}
                    aria-controls="portfolio-fund-results"
                    aria-activedescendant={fundSearchOpen && fundResults[selectedFundIndex] ? `portfolio-fund-${fundResults[selectedFundIndex].kod}` : undefined}
                    required
                    className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base font-bold text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                  <button
                    type="button"
                    onClick={() => void checkFundCode()}
                    disabled={checkingCode || !form.assetCode.trim()}
                    className="rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
                  >
                    {checkingCode ? "Kontrol…" : "Kontrol Et"}
                  </button>
                </div>

                {fundSearchOpen ? (
                  <div
                    id="portfolio-fund-results"
                    role="listbox"
                    aria-label="Fon arama sonuçları"
                    className="absolute left-0 right-0 z-30 mt-2 max-h-80 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"
                  >
                    {fundResults.length > 0 ? (
                      fundResults.map((fund, index) => {
                        const selected = index === selectedFundIndex;
                        return (
                          <button
                            id={`portfolio-fund-${fund.kod}`}
                            key={fund.kod}
                            type="button"
                            role="option"
                            aria-selected={selected}
                            onMouseEnter={() => setFundActiveIndex(index)}
                            onClick={() => void selectFund(fund)}
                            className={`grid w-full grid-cols-[4rem_minmax(0,1fr)] items-center gap-3 rounded-lg px-3 py-2.5 text-left outline-none transition ${selected ? "bg-blue-50 text-blue-950" : "text-slate-800 hover:bg-slate-50"}`}
                          >
                            <span className="rounded-md bg-slate-100 px-2 py-1 text-center text-xs font-extrabold text-slate-900">{fund.kod}</span>
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-bold">{fund.ad}</span>
                              <span className="block truncate text-xs font-normal text-slate-500">{fund.yonetici}</span>
                            </span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="px-4 py-5 text-center text-sm font-normal text-slate-500">
                        Listede eşleşen fon bulunamadı. Fon kodunu doğrudan yazıp “Kontrol Et” ile deneyebilirsiniz.
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
              <span className="mt-2 block text-xs font-normal leading-5 text-slate-500">
                Listeden seçebilir veya fon kodu / fon adı yazarak arayabilirsiniz. Fon kodunu doğrudan yazmak da mümkündür.
              </span>
            </label>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Seçilen varlık</div>
              <div className="mt-1 text-base font-extrabold text-slate-900">{selectedMarket?.label ?? "Varlık seçin"}</div>
            </div>
          )}

          {previewPrice ? (
            <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
              Son açıklanan fiyat: <strong>{formatPrice(previewPrice.price)} TL</strong> · {previewPrice.date}
              {previewPrice.source ? <span className="mt-1 block text-xs text-blue-800">Kaynak: {previewPrice.source}</span> : null}
            </div>
          ) : form.assetType !== "fund" && form.assetCode ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Bu varlığın resmi fiyatı henüz alınamadı. {form.assetCode === "XAU_GR" ? "Gram altın için EVDS API anahtarının tanımlı olması gerekir." : "Biraz sonra tekrar deneyin."}
            </div>
          ) : null}

          {form.assetType === "fund" ? (
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">Giriş şekli</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFundEntryMode("quantity");
                      if (Number.isFinite(formFundAmount) && formFundAmount > 0 && Number.isFinite(formBuyPrice) && formBuyPrice > 0) {
                        setForm((current) => ({ ...current, quantity: String(formFundAmount / formBuyPrice) }));
                      }
                    }}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-bold transition ${fundEntryMode === "quantity" ? "border-blue-600 bg-blue-50 text-blue-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
                  >
                    Fon adedi ile
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFundEntryMode("amount");
                      if (Number.isFinite(formFundQuantity) && formFundQuantity > 0 && Number.isFinite(formBuyPrice) && formBuyPrice > 0) {
                        setFundAmount(String(formFundQuantity * formBuyPrice));
                      }
                    }}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-bold transition ${fundEntryMode === "amount" ? "border-blue-600 bg-blue-50 text-blue-800" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
                  >
                    TL tutarı ile
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {fundEntryMode === "quantity" ? (
                  <label className="block text-sm font-semibold text-slate-800">
                    Fon adedi
                    <input
                      value={form.quantity}
                      onChange={(event) => setForm((current) => ({ ...current, quantity: event.target.value }))}
                      inputMode="decimal"
                      placeholder="Örn. 39,25"
                      required
                      className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </label>
                ) : (
                  <label className="block text-sm font-semibold text-slate-800">
                    Yatırılan tutar (TL)
                    <input
                      value={fundAmount}
                      onChange={(event) => setFundAmount(event.target.value)}
                      inputMode="decimal"
                      placeholder="Örn. 10.000"
                      required
                      className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </label>
                )}
                <label className="block text-sm font-semibold text-slate-800">
                  Alış fiyatı (TL)
                  <input
                    value={form.buyPrice}
                    onChange={(event) => setForm((current) => ({ ...current, buyPrice: event.target.value }))}
                    inputMode="decimal"
                    placeholder="Örn. 2,1536"
                    required
                    className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              </div>

              {fundEntryMode === "amount" && calculatedFundQuantity !== null ? (
                <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  Hesaplanan fon adedi: <strong>{formatQuantity(calculatedFundQuantity)}</strong>
                </div>
              ) : fundEntryMode === "quantity" && calculatedFundCost !== null ? (
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  Hesaplanan maliyet: <strong>{formatMoney(calculatedFundCost)}</strong>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-800">
                {quantityLabel(form.assetType, form.assetCode)}
                <input
                  value={form.quantity}
                  onChange={(event) => setForm((current) => ({ ...current, quantity: event.target.value }))}
                  inputMode="decimal"
                  placeholder={form.assetType === "gold" ? "Örn. 25" : "Örn. 1000"}
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                Alış fiyatı (TL)
                <input
                  value={form.buyPrice}
                  onChange={(event) => setForm((current) => ({ ...current, buyPrice: event.target.value }))}
                  inputMode="decimal"
                  placeholder="Örn. 48,50"
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>
          )}

          <label className="block text-sm font-semibold text-slate-800">
            Alış tarihi <span className="font-normal text-slate-500">(isteğe bağlı)</span>
            <input
              type="date"
              value={form.buyDate}
              onChange={(event) => setForm((current) => ({ ...current, buyDate: event.target.value }))}
              max={new Date().toISOString().slice(0, 10)}
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <button type="submit" disabled={saving} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400">
            {saving ? "Kaydediliyor…" : editingId ? "Değişiklikleri Kaydet" : "Portföye Ekle"}
          </button>
        </form>
      ) : null}

      {marketWarnings.length > 0 && holdings.some((item) => item.asset_type !== "fund") ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
          {marketWarnings.join(" · ")}
        </div>
      ) : null}

      {holdings.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700" aria-hidden="true">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h2 className="mt-4 text-lg font-extrabold text-slate-900">Henüz portföyünüzde varlık bulunmuyor</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">“Varlık Ekle” ile yatırım fonu, Dolar, Euro veya Gram Altın ekleyebilirsiniz.</p>
        </div>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Toplam maliyet</p>
              <p className="mt-1 text-xl font-extrabold text-slate-900">{formatMoney(summary.cost)}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Güncel değer</p>
              <p className="mt-1 text-xl font-extrabold text-slate-900">{summary.complete ? formatMoney(summary.current) : "Fiyat bekleniyor"}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Toplam kâr / zarar</p>
              {summary.profit !== null && summary.returnPct !== null ? (
                <p className={`mt-1 text-xl font-extrabold ${summary.profit >= 0 ? "text-emerald-700" : "text-red-700"}`}>{formatMoney(summary.profit)} · {formatPercent(summary.returnPct)}</p>
              ) : (
                <p className="mt-1 text-sm font-semibold text-slate-600">Tüm varlıkların güncel fiyatı alınamadı.</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {holdings.map((holding) => {
              const latest = priceForHolding(holding);
              const cost = holding.quantity * holding.buy_price;
              const current = latest ? holding.quantity * latest.price : null;
              const profit = current !== null ? current - cost : null;
              const returnPct = profit !== null && cost > 0 ? (profit / cost) * 100 : null;
              return (
                <article key={holding.holding_id} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xl font-black text-slate-900">{assetLabel(holding)}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {holding.asset_type === "fund" ? holding.asset_code : holding.asset_code === "XAU_GR" ? "ALTIN" : holding.asset_code}
                        {holding.buy_date ? ` · Alış: ${holding.buy_date}` : " · Alış tarihi girilmedi"}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => openEditForm(holding)} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">Düzenle</button>
                      <button type="button" onClick={() => void removeHolding(holding)} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-50">Sil</button>
                    </div>
                  </div>

                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-4">
                    <div><dt className="text-xs text-slate-500">Miktar</dt><dd className="mt-1 font-bold text-slate-900">{formatQuantity(holding.quantity)}{quantitySuffix(holding)}</dd></div>
                    <div><dt className="text-xs text-slate-500">Alış fiyatı</dt><dd className="mt-1 font-bold text-slate-900">{formatPrice(holding.buy_price)} TL</dd></div>
                    <div><dt className="text-xs text-slate-500">Son fiyat</dt><dd className="mt-1 font-bold text-slate-900">{latest ? `${formatPrice(latest.price)} TL` : "Alınamadı"}</dd></div>
                    <div><dt className="text-xs text-slate-500">Günlük</dt><dd className={`mt-1 font-bold ${latest?.dailyReturn != null ? (latest.dailyReturn >= 0 ? "text-emerald-700" : "text-red-700") : "text-slate-500"}`}>{latest?.dailyReturn != null ? formatPercent(latest.dailyReturn) : "—"}</dd></div>
                    <div><dt className="text-xs text-slate-500">Maliyet</dt><dd className="mt-1 font-bold text-slate-900">{formatMoney(cost)}</dd></div>
                    <div><dt className="text-xs text-slate-500">Güncel değer</dt><dd className="mt-1 font-bold text-slate-900">{current !== null ? formatMoney(current) : "—"}</dd></div>
                    <div className="col-span-2"><dt className="text-xs text-slate-500">Kâr / zarar</dt><dd className={`mt-1 font-extrabold ${profit == null ? "text-slate-500" : profit >= 0 ? "text-emerald-700" : "text-red-700"}`}>{profit !== null && returnPct !== null ? `${formatMoney(profit)} · ${formatPercent(returnPct)}` : "—"}</dd></div>
                  </dl>
                  {latest ? (
                    <p className="mt-3 text-[11px] leading-5 text-slate-500">
                      Son resmi fiyat tarihi: {latest.date}{latest.source ? ` · Kaynak: ${latest.source}` : ""}
                      {latest.sourceDetail ? ` · ${latest.sourceDetail}` : ""}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </>
      )}

      <p className="text-xs leading-5 text-slate-500">
        Fonlar son açıklanan fon birim fiyatıyla; Dolar ve Euro TCMB resmi döviz alış kuru ile; Gram Altın TCMB EVDS üzerinden yayımlanan Borsa İstanbul Altın Piyasası gün sonu kapanışıyla hesaplanır. Fiyatlar otomatik yenilenir. Yatırım tavsiyesi değildir.
      </p>

      <Link href="/hesabim" prefetch={false} className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50">Hesabıma Dön</Link>
    </div>
  );
}
