export function formatNumber(value: number | null | undefined, digits = 0) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatDecimal(value: number | null | undefined, maxDigits = 4) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDigits,
  }).format(value);
}

export function formatPercent(value: number | null | undefined, digits = 2) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";

  return `%${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value * 100)}`;
}

export function formatSignedPercent(value: number | null | undefined, digits = 2) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";

  const sign = value > 0 ? "+" : "";
  return `${sign}${formatPercent(value, digits)}`;
}

export function formatTL(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";

  return `${new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value)} TL`;
}

export function formatCompactTL(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";

  const sign = value < 0 ? "-" : "";
  const absolute = Math.abs(value);

  if (absolute >= 1_000_000_000_000) {
    return `${sign}${formatNumber(absolute / 1_000_000_000_000, 2)} trilyon TL`;
  }

  if (absolute >= 1_000_000_000) {
    return `${sign}${formatNumber(absolute / 1_000_000_000, 2)} milyar TL`;
  }

  if (absolute >= 1_000_000) {
    return `${sign}${formatNumber(absolute / 1_000_000, 2)} milyon TL`;
  }

  return `${sign}${formatNumber(absolute, 0)} TL`;
}

export function formatSignedTL(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatCompactTL(value)}`;
}

export function formatDate(value: string | null | undefined) {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function valueColorClass(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value) || value === 0) {
    return "text-slate-700";
  }

  return value > 0 ? "text-emerald-700" : "text-red-700";
}

export function valueBgClass(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value) || value === 0) {
    return "bg-slate-100 text-slate-700";
  }

  return value > 0
    ? "bg-emerald-50 text-emerald-700"
    : "bg-red-50 text-red-700";
}
