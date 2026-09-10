import { randomUUID } from "node:crypto";
import { kv } from "./kv";
import { MemberAuthError } from "./member-auth";

export type PortfolioAssetType = "fund" | "currency" | "gold";

export type PortfolioHolding = {
  holding_id: string;
  asset_type: PortfolioAssetType;
  asset_code: string;
  quantity: number;
  buy_price: number;
  buy_date: string | null;
  created_at: string;
  updated_at: string;
};

const MAX_HOLDINGS_PER_USER = 100;
const FUND_CODE_PATTERN = /^[A-Z0-9]{2,10}$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const SUPPORTED_MARKET_ASSETS: Record<string, PortfolioAssetType> = {
  USD: "currency",
  EUR: "currency",
  XAU_GR: "gold",
};

function requireStore() {
  if (!kv) {
    throw new MemberAuthError("Portföy sistemi geçici olarak kullanılamıyor.", 503);
  }
  return kv;
}

export function portfolioHoldingsKey(userId: string) {
  return `hib:portfolio:user:${userId}:holdings`;
}

function normalizeAssetType(value: unknown): PortfolioAssetType {
  if (value === undefined || value === null || value === "") return "fund";
  if (value === "fund" || value === "currency" || value === "gold") return value;
  throw new MemberAuthError("Varlık türü geçersiz.");
}

export function normalizeFundCode(value: unknown) {
  if (typeof value !== "string") {
    throw new MemberAuthError("Fon kodu geçersiz.");
  }
  const code = value.trim().toUpperCase();
  if (!FUND_CODE_PATTERN.test(code)) {
    throw new MemberAuthError("Geçerli bir fon kodu girin.");
  }
  return code;
}

function normalizeAssetCode(assetType: PortfolioAssetType, value: unknown) {
  if (assetType === "fund") return normalizeFundCode(value);
  if (typeof value !== "string") throw new MemberAuthError("Varlık kodu geçersiz.");
  const code = value.trim().toUpperCase();
  if (SUPPORTED_MARKET_ASSETS[code] !== assetType) {
    throw new MemberAuthError("Desteklenmeyen varlık seçildi.");
  }
  return code;
}

function positiveNumber(value: unknown, label: string) {
  const normalized = typeof value === "string" ? value.replace(",", ".").trim() : value;
  const number = typeof normalized === "number" ? normalized : Number(normalized);
  if (!Number.isFinite(number) || number <= 0 || number > 1_000_000_000_000) {
    throw new MemberAuthError(`${label} geçersiz.`);
  }
  return number;
}

function normalizeBuyDate(value: unknown) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value !== "string" || !DATE_PATTERN.test(value)) {
    throw new MemberAuthError("Alış tarihi geçersiz.");
  }
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
    throw new MemberAuthError("Alış tarihi geçersiz.");
  }
  const today = new Date().toISOString().slice(0, 10);
  if (value > today) throw new MemberAuthError("Alış tarihi gelecekte olamaz.");
  return value;
}

function normalizeStoredHolding(value: unknown): PortfolioHolding | null {
  if (!value || typeof value !== "object") return null;
  const row = value as Partial<PortfolioHolding> & { fund_code?: unknown };
  const assetType =
    row.asset_type === "fund" || row.asset_type === "currency" || row.asset_type === "gold"
      ? row.asset_type
      : "fund";
  const legacyCode = typeof row.fund_code === "string" ? row.fund_code : null;
  const assetCode = typeof row.asset_code === "string" ? row.asset_code : legacyCode;
  if (
    typeof row.holding_id !== "string" ||
    typeof assetCode !== "string" ||
    typeof row.quantity !== "number" ||
    typeof row.buy_price !== "number" ||
    (row.buy_date !== null && row.buy_date !== undefined && typeof row.buy_date !== "string") ||
    typeof row.created_at !== "string" ||
    typeof row.updated_at !== "string"
  ) {
    return null;
  }
  return {
    holding_id: row.holding_id,
    asset_type: assetType,
    asset_code: assetCode.toUpperCase(),
    quantity: row.quantity,
    buy_price: row.buy_price,
    buy_date: row.buy_date ?? null,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function listPortfolioHoldings(userId: string) {
  const redis = requireStore();
  const raw = await redis.hgetall<Record<string, unknown>>(portfolioHoldingsKey(userId));
  if (!raw) return [];
  return Object.values(raw)
    .map(normalizeStoredHolding)
    .filter((row): row is PortfolioHolding => Boolean(row))
    .sort((a, b) => a.asset_code.localeCompare(b.asset_code, "tr"));
}

function normalizeHoldingInput(input: {
  assetType?: unknown;
  assetCode?: unknown;
  fundCode?: unknown;
  quantity: unknown;
  buyPrice: unknown;
  buyDate?: unknown;
}) {
  const assetType = normalizeAssetType(input.assetType);
  const assetCode = normalizeAssetCode(assetType, input.assetCode ?? input.fundCode);
  return {
    assetType,
    assetCode,
    quantity: positiveNumber(input.quantity, assetType === "gold" ? "Gram miktarı" : assetType === "currency" ? "Döviz miktarı" : "Adet"),
    buyPrice: positiveNumber(input.buyPrice, "Alış fiyatı"),
    buyDate: normalizeBuyDate(input.buyDate),
  };
}

export async function createPortfolioHolding(
  userId: string,
  input: {
    assetType?: unknown;
    assetCode?: unknown;
    fundCode?: unknown;
    quantity: unknown;
    buyPrice: unknown;
    buyDate?: unknown;
  },
) {
  const redis = requireStore();
  const normalized = normalizeHoldingInput(input);
  const existing = await listPortfolioHoldings(userId);
  if (existing.length >= MAX_HOLDINGS_PER_USER) {
    throw new MemberAuthError("Portföyünüze en fazla 100 varlık ekleyebilirsiniz.");
  }
  if (
    existing.some(
      (holding) =>
        holding.asset_type === normalized.assetType && holding.asset_code === normalized.assetCode,
    )
  ) {
    throw new MemberAuthError("Bu varlık portföyünüzde zaten bulunuyor. Düzenle seçeneğini kullanın.", 409);
  }
  const now = new Date().toISOString();
  const holding: PortfolioHolding = {
    holding_id: randomUUID(),
    asset_type: normalized.assetType,
    asset_code: normalized.assetCode,
    quantity: normalized.quantity,
    buy_price: normalized.buyPrice,
    buy_date: normalized.buyDate,
    created_at: now,
    updated_at: now,
  };
  await redis.hset(portfolioHoldingsKey(userId), { [holding.holding_id]: holding });
  return holding;
}

export async function updatePortfolioHolding(
  userId: string,
  holdingId: string,
  input: {
    assetType?: unknown;
    assetCode?: unknown;
    fundCode?: unknown;
    quantity: unknown;
    buyPrice: unknown;
    buyDate?: unknown;
  },
) {
  if (!/^[0-9a-f-]{36}$/i.test(holdingId)) throw new MemberAuthError("Portföy kaydı geçersiz.");
  const redis = requireStore();
  const key = portfolioHoldingsKey(userId);
  const current = normalizeStoredHolding(await redis.hget<unknown>(key, holdingId));
  if (!current) throw new MemberAuthError("Portföy kaydı bulunamadı.", 404);
  const normalized = normalizeHoldingInput(input);
  const holdings = await listPortfolioHoldings(userId);
  if (
    holdings.some(
      (holding) =>
        holding.holding_id !== holdingId &&
        holding.asset_type === normalized.assetType &&
        holding.asset_code === normalized.assetCode,
    )
  ) {
    throw new MemberAuthError("Bu varlık portföyünüzde zaten bulunuyor.", 409);
  }
  const updated: PortfolioHolding = {
    ...current,
    asset_type: normalized.assetType,
    asset_code: normalized.assetCode,
    quantity: normalized.quantity,
    buy_price: normalized.buyPrice,
    buy_date: normalized.buyDate,
    updated_at: new Date().toISOString(),
  };
  await redis.hset(key, { [holdingId]: updated });
  return updated;
}

export async function deletePortfolioHolding(userId: string, holdingId: string) {
  if (!/^[0-9a-f-]{36}$/i.test(holdingId)) throw new MemberAuthError("Portföy kaydı geçersiz.");
  const deleted = await requireStore().hdel(portfolioHoldingsKey(userId), holdingId);
  if (!deleted) throw new MemberAuthError("Portföy kaydı bulunamadı.", 404);
}
