"use client";

import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export type MarketChartPoint = {
  date: string;
  value: number;
  extra?: number | null;
  label?: string;
};

export type MarketChartUnit = "price" | "money" | "number" | "percent" | "rate";

type Range = { start: number; end: number };

type MarketChartProps = {
  title: string;
  series: MarketChartPoint[];
  kind?: "line" | "bar";
  unit: MarketChartUnit;
  className?: string;
  extraLabel?: string;
  valueLabel?: string;
  includeZero?: boolean;
  minWidth?: number;
  referenceLine?: { label: string; value: number };
};

const WIDTH = 1120;
const HEIGHT = 360;
const PADDING = { top: 18, right: 106, bottom: 46, left: 18 };

function dateValue(value: string) {
  const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    return Date.UTC(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3]));
  }

  const trMatch = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (trMatch) {
    return Date.UTC(Number(trMatch[3]), Number(trMatch[2]) - 1, Number(trMatch[1]));
  }

  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function fullDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateValue(value)));
}

function shortDate(value: string, spanInDays: number) {
  const options: Intl.DateTimeFormatOptions =
    spanInDays > 370
      ? { month: "short", year: "2-digit", timeZone: "UTC" }
      : spanInDays > 120
        ? { month: "short", timeZone: "UTC" }
        : { day: "numeric", month: "short", timeZone: "UTC" };

  return new Intl.DateTimeFormat("tr-TR", options).format(new Date(dateValue(value)));
}

function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits }).format(value);
}

function compactNumber(value: number) {
  const absolute = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absolute >= 1_000_000_000) return `${sign}${formatNumber(absolute / 1_000_000_000, 1)} Mr`;
  if (absolute >= 1_000_000) return `${sign}${formatNumber(absolute / 1_000_000, 1)} Mn`;
  if (absolute >= 1_000) return `${sign}${formatNumber(absolute / 1_000, 1)} bin`;
  return `${sign}${formatNumber(absolute, 0)}`;
}

function axisValue(value: number, unit: MarketChartUnit) {
  if (unit === "money") return `${compactNumber(value)} TL`;
  if (unit === "number") return compactNumber(value);
  if (unit === "price") return `${formatNumber(value, 4)} TL`;
  if (unit === "rate") return `%${formatNumber(value, 3)}`;
  return `%${formatNumber(value, 2)}`;
}

function detailValue(value: number, unit: MarketChartUnit) {
  if (unit === "money") return `${formatNumber(value, 0)} TL`;
  if (unit === "number") return formatNumber(value, 0);
  if (unit === "price") return `${formatNumber(value, 4)} TL`;
  return `%${formatNumber(value, 2)}`;
}

function controlClass(disabled: boolean) {
  return `market-chart-control ${disabled ? "market-chart-control-disabled" : ""}`;
}

export default function MarketChart({
  title,
  series,
  kind = "line",
  unit,
  className = "",
  extraLabel,
  valueLabel,
  includeZero = false,
  minWidth = 720,
  referenceLine,
}: MarketChartProps) {
  const normalized = useMemo(
    () =>
      series
        .filter((point) => Number.isFinite(point.value))
        .sort((a, b) => dateValue(a.date) - dateValue(b.date)),
    [series]
  );
  const fingerprint = `${normalized.length}-${normalized.at(0)?.date ?? ""}-${normalized.at(-1)?.date ?? ""}`;
  const [range, setRange] = useState<Range>({ start: 0, end: Math.max(0, normalized.length - 1) });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragRef = useRef<{ x: number; y: number; start: number; end: number } | null>(null);
  const pointerMovedRef = useRef(false);

  useEffect(() => {
    setRange({ start: 0, end: Math.max(0, normalized.length - 1) });
    setHoverIndex(null);
  }, [fingerprint, normalized.length]);

  useEffect(() => {
    if (!isExpanded) return;

    document.body.classList.add("chart-fullscreen-open");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("chart-fullscreen-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  const visible = normalized.slice(range.start, range.end + 1);
  const minimumPointCount = kind === "bar" ? 1 : 2;

  if (normalized.length < minimumPointCount) {
    return (
      <section className={`market-chart-card ${className}`}>
        <h2 className="market-chart-title">{title}</h2>
        <div className="market-chart-empty">Yeterli veri yok</div>
      </section>
    );
  }

  const plotRight = WIDTH - PADDING.right;
  const plotBottom = HEIGHT - PADDING.bottom;
  const plotWidth = plotRight - PADDING.left;
  const plotHeight = plotBottom - PADDING.top;
  const values = visible.map((point) => point.value);
  const shouldIncludeZero = kind === "bar" || includeZero;
  const referenceValues = referenceLine ? [referenceLine.value] : [];
  const rawMin = Math.min(...values, ...referenceValues, ...(shouldIncludeZero ? [0] : []));
  const rawMax = Math.max(...values, ...referenceValues, ...(shouldIncludeZero ? [0] : []));
  const rawRange = rawMax - rawMin;
  const buffer = rawRange === 0 ? Math.max(Math.abs(rawMax) * 0.08, 1) : rawRange * 0.08;
  const min = rawMin - buffer;
  const max = rawMax + buffer;
  const valueRange = max - min || 1;
  const yFor = (value: number) => PADDING.top + ((max - value) / valueRange) * plotHeight;
  const xFor = (index: number) => {
    if (kind === "bar") return PADDING.left + ((index + 0.5) / visible.length) * plotWidth;
    if (visible.length === 1) return PADDING.left + plotWidth / 2;
    return PADDING.left + (index / (visible.length - 1)) * plotWidth;
  };
  const zeroY = yFor(0);
  const linePath = visible.map((point, index) => `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(point.value)}`).join(" ");
  const yTicks = Array.from({ length: 6 }, (_, index) => max - (valueRange * index) / 5);
  const xTickCount = Math.min(9, visible.length);
  const xTickIndexes = Array.from({ length: xTickCount }, (_, index) =>
    Math.round((index * (visible.length - 1)) / Math.max(1, xTickCount - 1))
  ).filter((value, index, all) => all.indexOf(value) === index);
  const spanInDays = Math.max(0, (dateValue(visible.at(-1)?.date ?? "") - dateValue(visible[0]?.date ?? "")) / 86_400_000);
  const latestIndex = visible.length - 1;
  const latestPoint = visible[latestIndex];
  const latestX = xFor(latestIndex);
  const latestY = yFor(latestPoint.value);
  const activePoint = hoverIndex === null ? null : visible[hoverIndex] ?? null;
  const activeX = hoverIndex === null ? 0 : xFor(hoverIndex);
  const activeY = activePoint ? yFor(activePoint.value) : 0;
  const fullSpan = range.end - range.start + 1;
  const minSpan = Math.min(kind === "bar" ? 4 : 6, normalized.length);
  const canZoomIn = fullSpan > minSpan;
  const canZoomOut = fullSpan < normalized.length;
  const canPanLeft = range.start > 0;
  const canPanRight = range.end < normalized.length - 1;

  const zoom = (factor: number, anchorIndex = range.start + Math.floor(fullSpan / 2)) => {
    const nextSpan = Math.max(minSpan, Math.min(normalized.length, Math.round(fullSpan * factor)));
    const leftShare = fullSpan <= 1 ? 0.5 : (anchorIndex - range.start) / Math.max(1, fullSpan - 1);
    let nextStart = Math.round(anchorIndex - (nextSpan - 1) * leftShare);
    nextStart = Math.max(0, Math.min(normalized.length - nextSpan, nextStart));
    setRange({ start: nextStart, end: nextStart + nextSpan - 1 });
    setHoverIndex(null);
  };

  const pan = (direction: -1 | 1) => {
    const shift = Math.max(1, Math.round(fullSpan * 0.2)) * direction;
    const nextStart = Math.max(0, Math.min(normalized.length - fullSpan, range.start + shift));
    setRange({ start: nextStart, end: nextStart + fullSpan - 1 });
    setHoverIndex(null);
  };

  const pointerIndex = (clientX: number) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect || visible.length <= 1) return 0;
    const svgX = ((clientX - rect.left) / rect.width) * WIDTH;
    const ratio = Math.min(1, Math.max(0, (svgX - PADDING.left) / plotWidth));
    return kind === "bar"
      ? Math.min(visible.length - 1, Math.floor(ratio * visible.length))
      : Math.round(ratio * (visible.length - 1));
  };

  return (
    <section
      className={`market-chart-card chart-expandable-card ${
        isExpanded ? "chart-expandable-card-expanded" : ""
      } ${className}`}
      role={isExpanded ? "dialog" : undefined}
      aria-modal={isExpanded ? "true" : undefined}
      aria-label={isExpanded ? `${title} tam ekran grafik` : undefined}
    >
      <div className="market-chart-toolbar">
        <h2 className="market-chart-title">{title}</h2>
        <div className="market-chart-controls" aria-label="Grafik kontrolleri">
          <button type="button" className={controlClass(!canPanLeft)} disabled={!canPanLeft} onClick={() => pan(-1)} aria-label="Grafiği geriye taşı" title="Geriye taşı">
            <ChevronLeft aria-hidden="true" size={17} />
          </button>
          <button type="button" className={controlClass(!canPanRight)} disabled={!canPanRight} onClick={() => pan(1)} aria-label="Grafiği ileriye taşı" title="İleriye taşı">
            <ChevronRight aria-hidden="true" size={17} />
          </button>
          <button type="button" className={controlClass(!canZoomIn)} disabled={!canZoomIn} onClick={() => zoom(0.72)} aria-label="Grafiği yakınlaştır" title="Yakınlaştır">
            <ZoomIn aria-hidden="true" size={16} />
          </button>
          <button type="button" className={controlClass(!canZoomOut)} disabled={!canZoomOut} onClick={() => zoom(1.4)} aria-label="Grafiği uzaklaştır" title="Uzaklaştır">
            <ZoomOut aria-hidden="true" size={16} />
          </button>
          <button
            type="button"
            className={controlClass(false)}
            onClick={() => setIsExpanded((value) => !value)}
            aria-label={isExpanded ? "Grafiği normal boyuta indir" : "Grafiği tam ekran aç"}
            title={isExpanded ? "Normal boyut" : "Tam ekran"}
          >
            {isExpanded ? (
              <Minimize2 aria-hidden="true" size={16} />
            ) : (
              <Maximize2 aria-hidden="true" size={16} />
            )}
          </button>
        </div>
      </div>

      <div className="market-chart-scroller">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="market-chart-svg"
          style={{ minWidth }}
          role="img"
          aria-label={`${title} tarihsel değişim grafiği`}
          onWheel={(event) => {
            event.preventDefault();
            const anchor = range.start + pointerIndex(event.clientX);
            zoom(event.deltaY < 0 ? 0.78 : 1.28, anchor);
          }}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            pointerMovedRef.current = false;
            dragRef.current = { x: event.clientX, y: event.clientY, start: range.start, end: range.end };
          }}
          onPointerMove={(event) => {
            setHoverIndex(pointerIndex(event.clientX));
            if (!dragRef.current || normalized.length <= visible.length) return;
            if (
              Math.abs(event.clientX - dragRef.current.x) > 6 ||
              Math.abs(event.clientY - dragRef.current.y) > 6
            ) {
              pointerMovedRef.current = true;
            }
            const rect = svgRef.current?.getBoundingClientRect();
            if (!rect) return;
            const dragSpan = dragRef.current.end - dragRef.current.start + 1;
            const delta = Math.round(((dragRef.current.x - event.clientX) / rect.width) * dragSpan);
            const nextStart = Math.max(0, Math.min(normalized.length - dragSpan, dragRef.current.start + delta));
            setRange({ start: nextStart, end: nextStart + dragSpan - 1 });
          }}
          onPointerUp={() => {
            dragRef.current = null;
          }}
          onPointerCancel={() => {
            dragRef.current = null;
          }}
          onPointerLeave={() => {
            dragRef.current = null;
            setHoverIndex(null);
          }}
          onClick={() => {
            if (!isExpanded && !pointerMovedRef.current) setIsExpanded(true);
            pointerMovedRef.current = false;
          }}
        >
          <rect width={WIDTH} height={HEIGHT} fill="var(--chart-plot-bg)" />

          {xTickIndexes.map((index) => (
            <line key={`vertical-${visible[index].date}`} x1={xFor(index)} x2={xFor(index)} y1={PADDING.top} y2={plotBottom} stroke="var(--chart-grid)" strokeWidth="1" />
          ))}

          {yTicks.map((value) => {
            const y = yFor(value);
            return (
              <g key={`horizontal-${value}`}>
                <line x1={PADDING.left} x2={plotRight} y1={y} y2={y} stroke="var(--chart-grid)" strokeWidth="1" />
                <text x={plotRight + 10} y={y + 4} fill="var(--chart-axis-text)" fontSize="12">
                  {axisValue(value, unit)}
                </text>
              </g>
            );
          })}

          {kind === "bar" ? (
            <>
              <line x1={PADDING.left} x2={plotRight} y1={zeroY} y2={zeroY} stroke="var(--chart-zero-line)" strokeWidth="1.3" />
              {visible.map((point, index) => {
                const y = yFor(point.value);
                const barWidth = Math.max(3, Math.min(22, (plotWidth / visible.length) * 0.7));
                return (
                  <rect
                    key={`${point.date}-${index}`}
                    x={xFor(index) - barWidth / 2}
                    y={Math.min(y, zeroY)}
                    width={barWidth}
                    height={Math.max(1.5, Math.abs(zeroY - y))}
                    fill={point.value >= 0 ? "var(--chart-positive)" : "var(--chart-negative)"}
                    opacity={hoverIndex === null || hoverIndex === index ? 0.94 : 0.55}
                  />
                );
              })}
            </>
          ) : (
            <path d={linePath} fill="none" stroke="var(--chart-line)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
          )}

          {referenceLine ? (
            <g>
              <line
                x1={PADDING.left}
                x2={plotRight}
                y1={yFor(referenceLine.value)}
                y2={yFor(referenceLine.value)}
                stroke="var(--chart-negative)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <text
                x={plotRight - 8}
                y={Math.max(PADDING.top + 12, yFor(referenceLine.value) - 7)}
                textAnchor="end"
                fill="var(--chart-negative-text)"
                fontSize="11"
                fontWeight="700"
              >
                {referenceLine.label}
              </text>
            </g>
          ) : null}

          <line x1={PADDING.left} x2={plotRight} y1={latestY} y2={latestY} stroke={kind === "bar" ? (latestPoint.value >= 0 ? "var(--chart-positive)" : "var(--chart-negative)") : "var(--chart-line)"} strokeDasharray="2 3" opacity="0.9" />
          {kind === "line" ? <circle cx={latestX} cy={latestY} r="4.5" fill="var(--chart-line)" stroke="var(--chart-plot-bg)" strokeWidth="2" /> : null}
          <g transform={`translate(${plotRight + 3}, ${Math.max(2, Math.min(HEIGHT - 22, latestY - 10))})`}>
            <rect width={PADDING.right - 6} height="20" fill={kind === "bar" ? (latestPoint.value >= 0 ? "var(--chart-positive)" : "var(--chart-negative)") : "var(--chart-line)"} />
            <text x={(PADDING.right - 6) / 2} y="14" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
              {axisValue(latestPoint.value, unit)}
            </text>
          </g>

          {xTickIndexes.map((index) => (
            <text
              key={`label-${visible[index].date}`}
              x={xFor(index)}
              y={HEIGHT - 15}
              textAnchor={index === 0 ? "start" : index === visible.length - 1 ? "end" : "middle"}
              fill="var(--chart-axis-text)"
              fontSize="12"
            >
              {visible[index].label ?? shortDate(visible[index].date, spanInDays)}
            </text>
          ))}

          {activePoint ? (
            <g>
              <line x1={activeX} x2={activeX} y1={PADDING.top} y2={plotBottom} stroke="var(--chart-crosshair)" strokeDasharray="2 4" opacity="0.65" />
              <line x1={PADDING.left} x2={plotRight} y1={activeY} y2={activeY} stroke="var(--chart-crosshair)" strokeDasharray="2 4" opacity="0.55" />
              <circle cx={activeX} cy={activeY} r="5" fill={kind === "bar" ? (activePoint.value >= 0 ? "var(--chart-positive)" : "var(--chart-negative)") : "var(--chart-line)"} stroke="var(--chart-plot-bg)" strokeWidth="2" />
              <g transform={`translate(${activeX > plotRight - 244 ? activeX - 232 : activeX + 12}, ${Math.max(PADDING.top + 4, Math.min(plotBottom - (extraLabel ? 82 : 64), activeY - 34))})`}>
                <rect width="220" height={extraLabel ? 78 : 60} rx="6" fill="var(--chart-tooltip-bg)" stroke="var(--chart-tooltip-border)" />
                <text x="12" y="21" fill="var(--chart-tooltip-text)" fontSize="12" fontWeight="700">{activePoint.label ?? fullDate(activePoint.date)}</text>
                {extraLabel ? (
                  <>
                    <text x="12" y="43" fill="var(--chart-tooltip-muted)" fontSize="11">{extraLabel}: {axisValue(activePoint.extra ?? 0, "money")}</text>
                    <text x="12" y="64" fill={activePoint.value >= 0 ? "var(--chart-positive-text)" : "var(--chart-negative-text)"} fontSize="12" fontWeight="700">{valueLabel ?? "Değer"}: {detailValue(activePoint.value, unit)}</text>
                  </>
                ) : (
                  <text x="12" y="44" fill="var(--chart-tooltip-text)" fontSize="12">{detailValue(activePoint.value, unit)}</text>
                )}
              </g>
            </g>
          ) : null}
        </svg>
      </div>
    </section>
  );
}
