"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthMessage, getAuthSession, type ApiResult } from "./AuthFormParts";
import { ArrowLeft, Plus, RefreshCw } from "lucide-react";
import PortfolioOverview from "./PortfolioOverview";
import { assetKey, mergePriceHistory, parsePortfolioNumber, type PortfolioPriceHistory, type PortfolioQuotes, type PriceObservation } from "@/lib/portfolio-analytics";
import styles from "./PortfolioPanel.module.css";

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
  history?: Partial<Record<MarketCode, PriceObservation[]>>;
};

type FundHistoryRow = [string, number | null, unknown, unknown, unknown, number | null, ...unknown[]];

type HistoryPayload = {
  rows?: FundHistoryRow[];
};

type HistoryBundlePayload = {
  funds?: Record<string, FundHistoryRow[]>;
};

const fundHistoryBundleCache = new Map<string, Promise<HistoryBundlePayload | null>>();

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

const parseNumberInput = parsePortfolioNumber;

function fundHistoryBundleUrl(slug: string, dataVersion: string) {
  let hash = 0;
  for (const character of slug) {
    hash = (Math.imul(hash, 31) + character.charCodeAt(0)) >>> 0;
  }
  const url = `/data/fonlar/history-bundles/${String(hash % 64).padStart(2, "0")}.json`;
  return dataVersion ? `${url}?v=${encodeURIComponent(dataVersion)}` : url;
}

function readFundHistoryBundle(url: string) {
  const cached = fundHistoryBundleCache.get(url);
  if (cached) return cached;

  const request = fetch(url, { cache: "force-cache" })
    .then(async (response) => response.ok ? await response.json() as HistoryBundlePayload : null)
    .catch((error) => {
      fundHistoryBundleCache.delete(url);
      throw error;
    });
  fundHistoryBundleCache.set(url, request);
  return request;
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


async function readFundPrices(code: string, dataVersion: string): Promise<{ latest: AssetPrice | null; history: PriceObservation[] }> {
  const normalized = code.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!normalized) throw new Error("Fon kodu bulunamadı.");

  let rows: FundHistoryRow[] = [];
  const bundle = await readFundHistoryBundle(fundHistoryBundleUrl(normalized, dataVersion));
  if (bundle) {
    rows = Array.isArray(bundle.funds?.[normalized]) ? bundle.funds[normalized] : [];
  }
  if (!rows.length) {
    // Yerel geliştirmede statik build henüz history dosyalarını paketlemediği için
    // tekil dosyaya geri düş. Production'da history-bundles kullanılır.
    const versionQuery = dataVersion ? `?v=${encodeURIComponent(dataVersion)}` : "";
    const response = await fetch(`/data/fonlar/history/${encodeURIComponent(normalized)}.json${versionQuery}`, {
      cache: "force-cache",
    });
    if (!response.ok) throw new Error("Fon kodu bulunamadı.");
    const payload = (await response.json()) as HistoryPayload;
    rows = Array.isArray(payload.rows) ? payload.rows : [];
  }

  const history = mergePriceHistory(rows.flatMap((row) => typeof row[1] === "number" ? [{ date: row[0], price: row[1] }] : []));
  for (let index = rows.length - 1; index >= 0; index -= 1) {
    const row = rows[index];
    if (row && typeof row[1] === "number" && Number.isFinite(row[1]) && row[1] > 0) {
      return {
        history,
        latest: {
        date: row[0],
        price: row[1],
        dailyReturn: typeof row[5] === "number" && Number.isFinite(row[5]) ? row[5] * 100 : null,
        source: "TEFAS / resmi fon verisi",
        sourceDetail: "Son açıklanan fon birim fiyatı",
        },
      };
    }
  }
  return { latest: null, history };
}

async function readLatestFundPrice(code: string, dataVersion: string) {
  return (await readFundPrices(code, dataVersion)).latest;
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

export default function PortfolioPanel({ funds, dataVersion }: { funds: FundOption[]; dataVersion: string }) {
  const router = useRouter();
  const [user, setUser] = useState<AccountUser | null>(null);
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [fundPrices, setFundPrices] = useState<Record<string, AssetPrice | null>>({});
  const [marketPrices, setMarketPrices] = useState<Partial<Record<MarketCode, MarketPrice>>>({});
  const [marketWarnings, setMarketWarnings] = useState<string[]>([]);
  const [histories, setHistories] = useState<PortfolioPriceHistory>({});
  const [refreshing, setRefreshing] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const refreshLock = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const selectionVersion = useRef(0);
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
    setHistories((current) => {
      const merged = { ...current };
      for (const asset of marketAssets) {
        const key = `${asset.type}:${asset.code}`;
        merged[key] = mergePriceHistory(current[key], result.history?.[asset.code], next[asset.code] ? [next[asset.code]!] : []);
      }
      return merged;
    });
    return next;
  }, []);

  const loadFundPrices = useCallback(async (items: Holding[]) => {
    const codes = Array.from(
      new Set(items.filter((item) => item.asset_type === "fund").map((item) => item.asset_code)),
    );
    const entries = await Promise.all(
      codes.map(async (code) => {
        try {
          return [code, await readFundPrices(code, dataVersion)] as const;
        } catch {
          return [code, { latest: null, history: [] }] as const;
        }
      }),
    );
    setFundPrices(Object.fromEntries(entries.map(([code, result]) => [code, result.latest])));
    setHistories((current) => ({ ...current, ...Object.fromEntries(entries.map(([code, result]) => [`fund:${code}`, [...result.history]])) }));
  }, [dataVersion]);

  const loadPortfolio = useCallback(async () => {
    const response = await fetch("/api/portfolio", {
      credentials: "same-origin",
      cache: "no-store",
    });
    const result = (await response.json().catch(() => ({ ok: false, message: "Sunucu yanıtı okunamadı." }))) as PortfolioResponse;
    if (!response.ok || !result.ok) throw new Error(result.message || "Portföy bilgileri yüklenemedi.");
    const nextHoldings = Array.isArray(result.holdings) ? result.holdings : [];
    setHoldings(nextHoldings);
    setLoading(false);
    await Promise.all([loadFundPrices(nextHoldings), loadMarketPrices().catch(() => setMarketWarnings(["Piyasa fiyatları şu anda yenilenemiyor. Varlıklarınız ve alış maliyetleriniz kayıtlı."]))]);
    setUpdatedAt(new Date().toISOString());
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

  useEffect(() => {
    if (!formOpen) return;
    formRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    formRef.current?.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
  }, [formOpen, editingId]);

  const quotes = useMemo<PortfolioQuotes>(() => Object.fromEntries(holdings.map((holding) => [assetKey(holding), holding.asset_type === "fund" ? fundPrices[holding.asset_code] : marketPrices[holding.asset_code as MarketCode]])), [holdings, fundPrices, marketPrices]);
  const fundNames = useMemo(() => Object.fromEntries(funds.map((fund) => [fund.kod, fund.ad])), [funds]);

  const priceForHolding = useCallback(
    (holding: Holding): AssetPrice | null => {
      if (holding.asset_type === "fund") return fundPrices[holding.asset_code] ?? null;
      return marketPrices[holding.asset_code as MarketCode] ?? null;
    },
    [fundPrices, marketPrices],
  );

  async function checkFundCode() {
    const code = form.assetCode.trim().toUpperCase();
    if (!code) return;
    if (!fundNames[code]) { setError("Listeden geçerli bir yatırım fonu seçin."); return; }
    const selection = ++selectionVersion.current;
    setCheckingCode(true);
    setError("");
    try {
      const latest = await readLatestFundPrice(code, dataVersion);
      if (selection !== selectionVersion.current) return;
      setPreviewPrice(latest);
      setForm((current) => ({ ...current, assetCode: code }));
      setFundSearchOpen(false);
    } catch {
      if (selection !== selectionVersion.current) return;
      setPreviewPrice(null);
    } finally {
      if (selection === selectionVersion.current) setCheckingCode(false);
    }
  }

  async function selectFund(fund: FundOption) {
    const selection = ++selectionVersion.current;
    setForm((current) => ({ ...current, assetType: "fund", assetCode: fund.kod }));
    setFundSearchOpen(false);
    setFundActiveIndex(0);
    setPreviewPrice(null);
    setError("");
    setCheckingCode(true);
    try {
      const price = await readLatestFundPrice(fund.kod, dataVersion);
      if (selection === selectionVersion.current) setPreviewPrice(price);
    } catch {
      if (selection === selectionVersion.current) setPreviewPrice(null);
    } finally {
      if (selection === selectionVersion.current) setCheckingCode(false);
    }
  }

  async function selectMarketAsset(asset: (typeof marketAssets)[number]) {
    const selection = ++selectionVersion.current;
    setCheckingCode(false);
    setForm((current) => ({ ...current, assetType: asset.type, assetCode: asset.code }));
    setFundSearchOpen(false);
    setPreviewPrice(null);
    setError("");
    let prices = marketPrices;
    if (!prices[asset.code]) {
      try {
        prices = await loadMarketPrices();
      } catch {
        return;
      }
    }
    const latest = prices[asset.code];
    if (latest && selection === selectionVersion.current) setPreviewPrice(latest);
  }

  function selectFundType() {
    selectionVersion.current++;
    setCheckingCode(false);
    setForm((current) => ({ ...current, assetType: "fund", assetCode: "" }));
    setPreviewPrice(null);
    setFundSearchOpen(false);
    setFundActiveIndex(0);
    setError("");
  }

  function openAddForm() {
    selectionVersion.current++;
    setCheckingCode(false);
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
    selectionVersion.current++;
    setCheckingCode(false);
    setEditingId(holding.holding_id);
    setForm({
      assetType: holding.asset_type,
      assetCode: holding.asset_code,
      quantity: String(holding.quantity).replace(".", ","),
      buyPrice: String(holding.buy_price).replace(".", ","),
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
      if (form.assetType === "fund" && !fundNames[code]) throw new Error("Listeden geçerli bir yatırım fonu seçin.");
      const buyPrice = parseNumberInput(form.buyPrice);
      if (!Number.isFinite(buyPrice) || buyPrice <= 0) throw new Error("Geçerli bir alış fiyatı girin.");

      let quantity = parseNumberInput(form.quantity);
      if (form.assetType === "fund" && fundEntryMode === "amount") {
        const amount = parseNumberInput(fundAmount);
        if (!Number.isFinite(amount) || amount <= 0) throw new Error("Geçerli bir yatırım tutarı girin.");
        quantity = amount / buyPrice;
      }
      if (!Number.isFinite(quantity) || quantity <= 0) throw new Error("Geçerli bir miktar girin.");
      const saved = await portfolioRequest(editingId ? "PUT" : "POST", {
        ...(editingId ? { holdingId: editingId } : {}),
        assetType: form.assetType,
        assetCode: code,
        quantity,
        buyPrice,
        buyDate: form.buyDate || null,
      }) as ApiResult & { holding: Holding };
      // Saving holdings does not depend on market availability or a second GET.
      setHoldings((current) => [...current.filter((holding) => holding.holding_id !== saved.holding.holding_id), saved.holding]);
      const wasEditing = Boolean(editingId);
      setFormOpen(false);
      setForm(emptyForm);
      setEditingId(null);
      setPreviewPrice(null);
      setMessage(wasEditing ? "Varlık bilgileri güncellendi." : "Varlık portföyünüze eklendi.");
      selectionVersion.current++;
      void Promise.allSettled([loadFundPrices([...holdings.filter((holding) => holding.holding_id !== saved.holding.holding_id), saved.holding]), loadMarketPrices()]);
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
      setHoldings((current) => current.filter((item) => item.holding_id !== holding.holding_id));
      setMessage(`${assetLabel(holding)} portföyünüzden kaldırıldı.`);
    } catch (removeError) {
      setError(removeError instanceof Error ? removeError.message : "Varlık kaldırılamadı.");
    }
  }

  async function refreshPortfolio() {
    if (refreshLock.current) return;
    refreshLock.current = true;
    setRefreshing(true);
    setError("");
    try { await loadPortfolio(); } catch { setError("Portföy yenilenemedi. Tekrar deneyebilirsiniz."); }
    finally { refreshLock.current = false; setRefreshing(false); }
  }

  if (loading) return <div className={styles.loading} role="status">Portföyünüz hazırlanıyor…</div>;
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
    <div className={styles.panel}>
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
      {message ? <AuthMessage type="success">{message}</AuthMessage> : null}

      <div className={styles.toolbar}>
        <div className={styles.owner}><span className={styles.avatar}>{user.display_name.slice(0, 1).toLocaleUpperCase("tr-TR")}</span><div><strong>{user.display_name} · Kişisel portföy</strong><small>{updatedAt ? `Son kontrol ${new Date(updatedAt).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}` : "Hesabınıza kayıtlı varlıklar"} · Fiyatlar açıklanma tarihleriyle gösterilir</small></div></div>
        <div className={styles.actions}><button type="button" onClick={() => void refreshPortfolio()} disabled={refreshing || saving} className={styles.secondary}><RefreshCw size={15} className={refreshing ? "animate-spin" : ""} />{refreshing ? "Yenileniyor" : "Yenile"}</button><button type="button" onClick={openAddForm} className={styles.primary}><Plus size={17} />Varlık ekle</button></div>
      </div>

      {formOpen ? (
        <form ref={formRef} onSubmit={saveHolding} aria-label={editingId ? "Varlığı düzenle" : "Portföye varlık ekle"} className={`${styles.form} space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7`}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-extrabold text-slate-900">{editingId ? "Varlığı Düzenle" : "Portföye Varlık Ekle"}</h2>
            <button type="button" onClick={() => setFormOpen(false)} className="text-sm font-semibold text-slate-500 hover:text-slate-800">Kapat</button>
          </div>
          <p className={styles.formIntro}>Elinizdeki miktarı ve birim alış fiyatını girin. Güncel fiyat henüz yoksa da varlığınız maliyetiyle kaydedilir.</p>

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
                      selectionVersion.current++;
                      setCheckingCode(false);
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
                        Eşleşen fon bulunamadı. Fonun kodunu veya adını kontrol edin.
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
          ) : form.assetCode && !checkingCode ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Güncel fiyat bekleniyor. Miktar ve alış fiyatınızla kaydedebilirsiniz; piyasa değeri ve kâr/zarar fiyat geldiğinde hesaplanır.
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

          {form.assetType !== "fund" && Number.isFinite(formFundQuantity) && formFundQuantity > 0 && Number.isFinite(formBuyPrice) && formBuyPrice > 0 ? <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">Kaydedilecek alış maliyeti: <strong>{formatMoney(formFundQuantity * formBuyPrice)}</strong><span className="mt-1 block text-xs">{formatQuantity(formFundQuantity)} {form.assetType === "gold" ? "gram" : form.assetCode} × {formatPrice(formBuyPrice)} TL</span></div> : null}

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

      <PortfolioOverview holdings={holdings} quotes={quotes} histories={histories} fundNames={fundNames} onEdit={openEditForm} onDelete={(holding) => void removeHolding(holding)} onAdd={openAddForm} />
      {marketWarnings.length > 0 && holdings.some((item) => item.asset_type !== "fund") ? <p className={styles.muted} role="status" style={{ fontSize: 12 }}>Bazı piyasa fiyatları şu anda yenilenemiyor. Varsa son açıklanan fiyat, yoksa alış maliyeti gösterilir.</p> : null}
      <div className={styles.footer}><span>Sayfa açıkken fiyatlar 5 dakikada bir kontrol edilir. Yatırım tavsiyesi değildir.</span><Link href="/hesabim"><ArrowLeft size={14} />Hesabıma dön</Link></div>
    </div>
  );
}
