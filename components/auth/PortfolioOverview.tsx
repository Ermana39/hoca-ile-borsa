"use client";

import { useId, useMemo, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, ChartNoAxesCombined, CircleHelp, Coins, Layers3, Pencil, Search, Trash2, Wallet } from "lucide-react";
import Link from "@/components/NoPrefetchLink";
import { buildPortfolioHistory, summarizePortfolio, type PortfolioPosition, type PortfolioQuotes, type PortfolioPriceHistory, type PortfolioHistoryPoint } from "@/lib/portfolio-analytics";
import styles from "./PortfolioPanel.module.css";

const money = (value: number) => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(value);
const number = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 6 }).format(value);
const percent = (value: number) => `${value > 0 ? "+" : ""}${value.toLocaleString("tr-TR", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}%`;
const dateLabel = (date: string) => new Date(`${date}T12:00:00Z`).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" });
const nameFor = (holding: PortfolioPosition) => holding.asset_type === "gold" ? "Gram Altın" : holding.asset_code === "USD" ? "Dolar" : holding.asset_code === "EUR" ? "Euro" : holding.asset_code;
const typeNames = { fund: "Yatırım fonu", currency: "Döviz", gold: "Altın" };
const colors = { fund: "#38bdf8", currency: "#a78bfa", gold: "#fbbf24" };
const tone = (value: number | null) => value === null ? styles.muted : value >= 0 ? styles.positive : styles.negative;

function ValueChart({ points }: { points: PortfolioHistoryPoint[] }) {
  const gradient = useId().replace(/:/g, "");
  const [period, setPeriod] = useState(90);
  const [metric, setMetric] = useState<"value" | "profit">("value");
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const filtered = useMemo(() => {
    if (!period || !points.length) return points;
    const cutoff = Date.parse(points.at(-1)!.date) - period * 86_400_000;
    return points.filter((point) => Date.parse(point.date) >= cutoff);
  }, [points, period]);
  const selected = filtered.find((point) => point.date === activeDate) ?? filtered.at(-1);
  const width = 840, height = 290, left = 72, right = 20, top = 20, bottom = 40;
  const values = filtered.flatMap((point) => metric === "value" ? [point.cost, ...(point.value === null ? [] : [point.value])] : point.profit === null ? [] : [point.profit]);
  const low = Math.min(...values, ...(metric === "profit" ? [0] : []));
  const high = Math.max(...values, ...(metric === "profit" ? [0] : []));
  const padding = Math.max((high - low) * 0.2, Math.abs(high) * 0.04, 1);
  const min = Number.isFinite(low) ? low - padding : 0;
  const max = Number.isFinite(high) ? high + padding : 1;
  const start = filtered.length ? Date.parse(filtered[0].date) : 0;
  const span = filtered.length ? Date.parse(filtered.at(-1)!.date) - start : 0;
  const x = (point: PortfolioHistoryPoint) => span ? left + (Date.parse(point.date) - start) / span * (width - left - right) : (width + left - right) / 2;
  const y = (value: number) => top + (max - value) / (max - min) * (height - top - bottom);
  const pathFor = (key: "cost" | "value" | "profit") => {
    let connected = false;
    return filtered.map((point) => {
      const value = point[key];
      if (value === null) { connected = false; return ""; }
      const segment = `${connected ? "L" : "M"}${x(point)},${y(value)}`;
      connected = true;
      return segment;
    }).join(" ");
  };
  const hasMarketData = filtered.some((point) => point[metric] !== null);
  const axisMoney = (value: number) => new Intl.NumberFormat("tr-TR", { notation: "compact", maximumFractionDigits: 1 }).format(value);

  return (
    <section className={styles.card} aria-label="Portföy değer grafiği">
      <div className={styles.cardHeader}>
        <div><h2>Portföyün zaman içindeki değeri</h2><p>Mevcut varlıklarınızın alış tarihinden itibaren</p></div>
        <div className={styles.segment} aria-label="Grafik dönemi">
          {[{ label: "1H", days: 7 }, { label: "1A", days: 30 }, { label: "3A", days: 90 }, { label: "Tümü", days: 0 }].map(({ label, days }) => <button key={days} type="button" aria-pressed={period === days} onClick={() => { setPeriod(days); setActiveDate(null); }}>{label}</button>)}
        </div>
      </div>
      <div className={styles.chartMeta}>
        <div className={styles.chartValue} aria-live="polite">
          <span>{selected ? dateLabel(selected.date) : "Henüz kayıt yok"}</span>
          <strong>{selected?.[metric] != null ? money(selected[metric]!) : metric === "value" && selected ? money(selected.cost) : "—"}</strong>
          <small>{selected?.[metric] == null ? "Maliyet kayıtlı · piyasa fiyatı bekleniyor" : metric === "profit" ? "Alış maliyetine göre kâr / zarar" : "Son açıklanan fiyatlarla değer"}</small>
        </div>
        <div className={styles.segment} aria-label="Grafik ölçümü">
          <button type="button" aria-pressed={metric === "value"} onClick={() => setMetric("value")}>Değer</button>
          <button type="button" aria-pressed={metric === "profit"} onClick={() => setMetric("profit")}>Kâr / zarar</button>
        </div>
      </div>
      {filtered.length && (metric === "value" || hasMarketData) ? (
        <>
          <svg className={styles.chart} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Tarihe göre portföy değeri. Alttaki tarih seçicisini ok tuşlarıyla kullanabilirsiniz."
            onPointerMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              const position = (event.clientX - bounds.left) / bounds.width * width;
              const nearest = filtered.reduce((best, point) => Math.abs(x(point) - position) < Math.abs(x(best) - position) ? point : best);
              setActiveDate(nearest.date);
            }} onPointerLeave={() => setActiveDate(null)}>
            <defs><linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38bdf8" stopOpacity=".15" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0" /></linearGradient></defs>
            {[0, 1, 2, 3, 4].map((tick) => {
              const value = min + (max - min) * tick / 4;
              return <g key={tick}><line x1={left} x2={width - right} y1={y(value)} y2={y(value)} stroke="var(--border)" strokeDasharray="3 5" /><text x={left - 12} y={y(value) + 4} textAnchor="end" fill="var(--text-muted)" fontSize="12">{axisMoney(value)}</text></g>;
            })}
            <text x={left - 12} y="10" textAnchor="end" fill="var(--text-muted)" fontSize="10">TL</text>
            {metric === "value" ? <path d={pathFor("cost")} fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 5" /> : <line x1={left} x2={width - right} y1={y(0)} y2={y(0)} stroke="var(--text-muted)" strokeDasharray="5 5" />}
            {hasMarketData && filtered.every((point) => point[metric] !== null) && filtered.length > 1 ? <path d={`${pathFor(metric)} L${x(filtered.at(-1)!)},${height - bottom} L${x(filtered[0])},${height - bottom} Z`} fill={`url(#${gradient})`} /> : null}
            <path d={pathFor(metric)} fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            {filtered.filter((point, index) => point[metric] !== null && (filtered.length === 1 || filtered[index - 1]?.[metric] == null && filtered[index + 1]?.[metric] == null)).map((point) => <circle key={point.date} cx={x(point)} cy={y(point[metric]!)} r="4" fill="#38bdf8" />)}
            {selected ? <g><line x1={x(selected)} x2={x(selected)} y1={top} y2={height - bottom} stroke="var(--text-muted)" strokeDasharray="4 4" />{metric === "value" || selected[metric] !== null ? <circle cx={x(selected)} cy={y(selected[metric] ?? selected.cost)} r="5" fill={selected[metric] === null ? "#a78bfa" : "#38bdf8"} stroke="var(--surface)" strokeWidth="3" /> : null}</g> : null}
            {[filtered[0], ...(filtered.length > 1 ? [filtered.at(-1)!] : [])].map((point, index) => <text key={point.date} x={x(point)} y={height - 10} textAnchor={filtered.length === 1 ? "middle" : index ? "end" : "start"} fill="var(--text-muted)" fontSize="12">{dateLabel(point.date)}</text>)}
          </svg>
          {filtered.length > 1 ? <input className={styles.chartSlider} type="range" min="0" max={filtered.length - 1} value={Math.max(0, filtered.findIndex((point) => point.date === selected?.date))} aria-label="Grafikte tarih seç" aria-valuetext={selected ? `${dateLabel(selected.date)}, ${selected[metric] === null ? "Piyasa fiyatı bekleniyor" : money(selected[metric]!)}` : ""} onChange={(event) => setActiveDate(filtered[Number(event.target.value)].date)} /> : null}
        </>
      ) : <div className={styles.chartEmpty}><ChartNoAxesCombined size={32} /><strong>{points.length ? "Fiyat geldiğinde kazancınız burada görünecek" : "İlk varlığınızla takibe başlayın"}</strong><span>Gerçek fiyat geçmişi oluştuğunda grafik otomatik güncellenir.</span></div>}
      <div className={styles.legend}><span><i style={{ background: "#38bdf8" }} />{metric === "value" ? "Piyasa değeri" : "Kâr / zarar"}</span>{metric === "value" ? <span><i style={{ background: "#a78bfa" }} />Alış maliyeti</span> : null}</div>
      <p className={styles.chartNote}>Grafik mevcut miktarlarınızla yeniden hesaplanır; eklediğiniz para kazanç sayılmaz. Alış tarihi girilmemişse kayıt tarihi kullanılır. Fiyatı eksik günlerde piyasa değeri çizilmez; satış ve miktar değişikliklerinin işlem geçmişi değildir.</p>
    </section>
  );
}

export default function PortfolioOverview({ holdings, quotes, histories, fundNames, onEdit, onDelete, onAdd }: {
  holdings: PortfolioPosition[];
  quotes: PortfolioQuotes;
  histories: PortfolioPriceHistory;
  fundNames: Record<string, string>;
  onEdit: (holding: PortfolioPosition) => void;
  onDelete: (holding: PortfolioPosition) => void;
  onAdd: () => void;
}) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("value");
  const summary = useMemo(() => summarizePortfolio(holdings, quotes), [holdings, quotes]);
  const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Istanbul" });
  const points = useMemo(() => buildPortfolioHistory(holdings, histories, today), [holdings, histories, today]);
  const allocations = (["fund", "currency", "gold"] as const).map((type) => ({
    type, value: summary.rows.filter((row) => row.holding.asset_type === type).reduce((sum, row) => sum + (row.value ?? row.cost), 0),
  })).filter((item) => item.value > 0);
  let offset = 0;
  const gradients = allocations.map((item) => { const start = offset; offset += item.value / summary.trackedValue * 100; return `${colors[item.type]} ${start}% ${offset}%`; });
  const rows = summary.rows.filter((row) => (filter === "all" || row.holding.asset_type === filter) && `${nameFor(row.holding)} ${fundNames[row.holding.asset_code] ?? ""}`.toLocaleLowerCase("tr-TR").includes(search.toLocaleLowerCase("tr-TR"))).sort((a, b) => sort === "profit" ? (b.profit ?? -Infinity) - (a.profit ?? -Infinity) : sort === "name" ? nameFor(a.holding).localeCompare(nameFor(b.holding), "tr") : (b.value ?? b.cost) - (a.value ?? a.cost));
  const best = summary.rows.filter((row) => row.returnPct !== null).sort((a, b) => b.returnPct! - a.returnPct!)[0];
  const largest = [...summary.rows].sort((a, b) => (b.value ?? b.cost) - (a.value ?? a.cost))[0];

  function exportCsv() {
    const cell = (value: string | number) => `"${String(value).replace(/^[=+@\-]/, "'$&").replaceAll('"', '""')}"`;
    const contents = [
      ["Varlık", "Tür", "Miktar", "Alış fiyatı (TL)", "Maliyet (TL)", "Son fiyat (TL)", "Değer (TL)", "Kâr/Zarar (TL)", "Fiyat tarihi", "Alış tarihi"],
      ...summary.rows.map((row) => [nameFor(row.holding), typeNames[row.holding.asset_type], number(row.holding.quantity), number(row.holding.buy_price), number(row.cost), row.quote ? number(row.quote.price) : "", row.value === null ? "" : number(row.value), row.profit === null ? "" : number(row.profit), row.quote?.date ?? "", row.holding.buy_date ?? ""]),
    ].map((row) => row.map(cell).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob(["\uFEFF", contents], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = `portfoyum-${today}.csv`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <div className={styles.overview}>
    <div className={styles.stats}>
      <article className={`${styles.stat} ${styles.featured}`}><div><span>{summary.complete ? "Portföy değeri" : "Takip edilen tutar"}</span><Wallet size={19} /></div><strong>{money(summary.trackedValue)}</strong><small>{summary.missingCount ? `${summary.missingCount} varlık alış maliyetiyle dahil` : "Son açıklanan piyasa fiyatlarıyla"}</small></article>
      <article className={styles.stat}><div><span>Toplam alış maliyeti</span><Coins size={19} /></div><strong>{money(summary.cost)}</strong><small>Miktar × birim alış fiyatı</small></article>
      <article className={styles.stat}><div><span>{summary.complete ? "Toplam kâr / zarar" : "Fiyatı bilinenlerde kâr / zarar"}</span><ChartNoAxesCombined size={19} /></div><strong className={tone(summary.profit)}>{summary.profit === null ? "—" : money(summary.profit)}</strong><small className={tone(summary.returnPct)}>{summary.returnPct === null ? "Piyasa fiyatı bekleniyor" : `${percent(summary.returnPct)} · alış maliyetine göre`}</small></article>
      <article className={styles.stat}><div><span>Varlıklarım</span><Layers3 size={19} /></div><strong>{holdings.length}<em>varlık</em></strong><small>{allocations.length} varlık türü · {holdings.length - summary.missingCount} fiyatı bulunan</small></article>
    </div>

    {summary.missingCount > 0 ? <div className={styles.notice} role="status"><CircleHelp size={19} /><div><strong>Maliyetiniz kayıtlı, fiyat bilgisi bekleniyor.</strong><p>{summary.missingCount} varlığın {money(summary.pendingCost)} alış maliyeti toplam tutara dahil. Bu varlıkların piyasa değeri ve kâr/zararı henüz hesaplanmıyor.</p></div></div> : null}

    <div className={styles.chartGrid}>
      <ValueChart points={points} />
      <section className={styles.card}>
        <div className={styles.cardHeader}><div><h2>Varlık dağılımı</h2><p>{summary.complete ? "Piyasa değerine göre portföy payları" : "Fiyatı beklenenler maliyetle dahil"}</p></div></div>
        <div className={styles.donut} style={{ background: gradients.length ? `conic-gradient(${gradients.join(",")})` : "var(--border)" }} role="img" aria-label={allocations.map((item) => `${typeNames[item.type]} %${(item.value / summary.trackedValue * 100).toFixed(1)}`).join(", ") || "Henüz varlık yok"}><div><Layers3 size={22} /><strong>{holdings.length}</strong><span>varlık</span></div></div>
        <div className={styles.allocationList}>{allocations.length ? allocations.map((item) => <div key={item.type}><span><i style={{ background: colors[item.type] }} />{typeNames[item.type]}</span><div><strong>{(item.value / summary.trackedValue * 100).toLocaleString("tr-TR", { maximumFractionDigits: 1 })}%</strong><small>{money(item.value)}</small></div></div>) : <p className={styles.muted}>Varlık eklediğinizde dağılımınız burada görünecek.</p>}</div>
      </section>
    </div>

    <section className={styles.card}>
      <div className={styles.cardHeader}><div><h2>Varlıklarım <span className={styles.count}>{holdings.length}</span></h2><p>Maliyet, değer ve kazancınız bir arada</p></div><button type="button" className={styles.secondary} onClick={exportCsv} disabled={!holdings.length}><ArrowDownToLine size={16} />CSV indir</button></div>
      <div className={styles.tableToolbar}>
        <div className={styles.segment} aria-label="Varlık türüne göre filtrele">{[["all", "Tümü"], ["fund", "Fonlar"], ["currency", "Döviz"], ["gold", "Altın"]].map(([value, label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}</div>
        <div className={styles.tableSearch}><label><Search size={15} /><input aria-label="Portföyde varlık ara" placeholder="Varlık ara…" value={search} onChange={(event) => setSearch(event.target.value)} /></label><select aria-label="Varlıkları sırala" value={sort} onChange={(event) => setSort(event.target.value)}><option value="value">Değere göre</option><option value="profit">Kazanca göre</option><option value="name">Ada göre</option></select></div>
      </div>
      {rows.length ? <div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>Varlık</th><th>Miktar / Alış</th><th>Son fiyat</th><th>Maliyet</th><th>Güncel değer</th><th>Kâr / zarar</th><th><span className="sr-only">İşlemler</span></th></tr></thead><tbody>{rows.map((row) => <tr key={row.holding.holding_id}>
        <td><div className={styles.asset}><span className={styles.assetIcon} style={{ color: colors[row.holding.asset_type], background: `${colors[row.holding.asset_type]}14` }}>{row.holding.asset_type === "gold" ? <Coins size={20} /> : row.holding.asset_type === "currency" ? row.holding.asset_code === "USD" ? "$" : "€" : <ChartNoAxesCombined size={20} />}</span><div>{row.holding.asset_type === "fund" ? <Link href={`/fonlar/${row.holding.asset_code.toLowerCase()}`}>{nameFor(row.holding)}<ArrowUpRight size={12} /></Link> : <strong>{nameFor(row.holding)}</strong>}<small title={fundNames[row.holding.asset_code]}>{row.holding.asset_type === "fund" ? fundNames[row.holding.asset_code] || "Yatırım fonu" : typeNames[row.holding.asset_type]}</small></div></div></td>
        <td><strong>{number(row.holding.quantity)} {row.holding.asset_type === "gold" ? "gr" : row.holding.asset_type === "currency" ? row.holding.asset_code : "adet"}</strong><small>{number(row.holding.buy_price)} TL / birim</small></td>
        <td><strong>{row.quote ? `${number(row.quote.price)} TL` : "Fiyat bekleniyor"}</strong><small title={row.quote?.source}>{row.quote ? dateLabel(row.quote.date) : "Maliyetiniz kayıtlı"}</small></td>
        <td><strong>{money(row.cost)}</strong><small>{row.holding.buy_date ? dateLabel(row.holding.buy_date) : "Alış tarihi girilmedi"}</small></td>
        <td><strong>{row.value === null ? "—" : money(row.value)}</strong><small>{row.value === null ? "Henüz hesaplanamıyor" : `%${(row.value / summary.trackedValue * 100).toLocaleString("tr-TR", { maximumFractionDigits: 1 })} portföy payı`}</small></td>
        <td className={tone(row.profit)}><strong>{row.profit === null ? "—" : money(row.profit)}</strong><small className={tone(row.returnPct)}>{row.returnPct === null ? "Fiyat bekleniyor" : percent(row.returnPct)}</small></td>
        <td><div className={styles.rowActions}><button type="button" aria-label={`${nameFor(row.holding)} düzenle`} title="Düzenle" onClick={() => onEdit(row.holding)}><Pencil size={15} /></button><button type="button" aria-label={`${nameFor(row.holding)} kaldır`} title="Kaldır" onClick={() => onDelete(row.holding)}><Trash2 size={15} /></button></div></td>
      </tr>)}</tbody></table></div> : <div className={styles.empty}><Wallet size={36} /><h3>{holdings.length ? "Bu filtreye uygun varlık bulunamadı" : "Portföyünüzü oluşturmaya başlayın"}</h3><p>{holdings.length ? "Aramanızı veya varlık türünü değiştirebilirsiniz." : "Elinizdeki miktarı ve alış fiyatını girin. Fon, döviz ve altınınızı tek yerde takip edin."}</p>{!holdings.length ? <button type="button" className={styles.primary} onClick={onAdd}>İlk varlığımı ekle</button> : null}</div>}
    </section>

    <div className={styles.insights}>
      <article className={styles.card}><span className={styles.insightLabel}>En yüksek getiri oranı</span><strong>{best ? nameFor(best.holding) : "Henüz hesaplanamıyor"}</strong><span className={tone(best?.returnPct ?? null)}>{best ? `${percent(best.returnPct!)} · ${money(best.profit!)}` : "Fiyatı bulunan varlıklarda hesaplanır"}</span></article>
      <article className={styles.card}><span className={styles.insightLabel}>En büyük portföy payı</span><strong>{largest ? nameFor(largest.holding) : "Varlık ekleyin"}</strong><span>{largest ? `%${((largest.value ?? largest.cost) / summary.trackedValue * 100).toLocaleString("tr-TR", { maximumFractionDigits: 1 })} · ${largest.value === null ? "alış maliyetiyle" : "piyasa değeriyle"}` : "Dağılımınızı burada izleyebilirsiniz"}</span></article>
      <article className={styles.card}><span className={styles.insightLabel}>Fiyat bilgisi kapsamı</span><strong>%{summary.coverage.toLocaleString("tr-TR", { maximumFractionDigits: 0 })}</strong><span>Toplam maliyetin fiyatı bulunan bölümü</span><div className={styles.progress}><i style={{ width: `${summary.coverage}%` }} /></div></article>
    </div>
    <details className={styles.method}><summary>Hesaplamalar ve fiyat kaynakları</summary><p>Fonlar son açıklanan fon birim fiyatıyla, döviz TCMB alış kuruyla, gram altın TCMB EVDS / Borsa İstanbul kapanış fiyatıyla değerlenir. Bunlar canlı işlem fiyatları değildir. Fiyat bulunmayan varlıkların maliyeti korunur; bu tutardan kazanç üretilmez. Kâr/zarar vergi, komisyon ve alış-satış farkını içermez.</p><p>Grafik mevcut varlıkları ve mevcut miktarları esas alır. Bir varlığı düzenlemek veya kaldırmak geçmiş grafiği de yeniden hesaplar. Döviz ve altın fiyat geçmişi veri geldikçe birikir; eksik fiyatlar tahmin edilmez.</p></details>
  </div>;
}
