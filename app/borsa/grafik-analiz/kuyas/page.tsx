import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUYAS Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Kuyas Holding (KUYAS) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/kuyas",
  },
};

export default function KuyasGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="kuyas" tarih="2026-06-10" />

      <style>{`
        .kuyas-wrap *, .kuyas-wrap *::before, .kuyas-wrap *::after { box-sizing:border-box; margin:0; padding:0; }
        .kuyas-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px; line-height:1.65; min-height:100vh;
        }
        .kuyas-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .kuyas-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .kuyas-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .kuyas-hero-title em { color:var(--accent); font-style:normal; }
        .kuyas-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .kuyas-price-main { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,5vw,4rem); color:var(--text-bright); letter-spacing:.04em; line-height:1; }
        .kuyas-price-currency { font-size:.55em; color:var(--text-dim); vertical-align:super; }
        .kuyas-main { max-width:1280px; margin:0 auto; padding:2.5rem 2rem 4rem; }
        .kuyas-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .kuyas-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .kuyas-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .kuyas-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .kuyas-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .kuyas-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .kuyas-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .kuyas-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .kuyas-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .kuyas-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .kuyas-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .kuyas-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .kuyas-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .kuyas-chart-img-wrap { position:relative; padding:1rem; }
        .kuyas-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .kuyas-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .kuyas-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .kuyas-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .kuyas-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .kuyas-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .kuyas-icon.blue  { background:rgba(10,187,255,.12); }
        .kuyas-icon.gold  { background:rgba(245,200,66,.12); }
        .kuyas-icon.green { background:rgba(0,208,104,.12); }
        .kuyas-icon.red   { background:rgba(255,77,106,.12); }
        .kuyas-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .kuyas-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .kuyas-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .kuyas-ind-row:last-child { border-bottom:none; }
        .kuyas-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .kuyas-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .kuyas-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .kuyas-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .kuyas-ind-signal.sell    { background:rgba(255,61,85,.12);  color:var(--red);   border:1px solid rgba(255,61,85,.3); }
        .kuyas-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .kuyas-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .kuyas-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .kuyas-progress-fill { height:100%; border-radius:3px; }
        .kuyas-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .kuyas-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .kuyas-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .kuyas-ma-table tr:last-child td { border-bottom:none; }
        .kuyas-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .kuyas-above { color:var(--green); }
        .kuyas-below { color:var(--red); }
        .kuyas-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .kuyas-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .kuyas-bol-bands { flex:1; position:relative; height:48px; }
        .kuyas-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .kuyas-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .kuyas-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .kuyas-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .kuyas-bol-marker {
          position:absolute; left:0; right:0; height:2px;
          background:var(--red); box-shadow:0 0 6px var(--red);
          /* 72.55 fiyat, üst 94.32, alt 67.84 → (94.32-72.55)/(94.32-67.84) = 0.820 */
          top:calc(100% * (94.32 - 72.55) / (94.32 - 67.84));
        }
        .kuyas-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .kuyas-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .kuyas-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .kuyas-sr-cell:hover { background:var(--bg3); }
        .kuyas-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .kuyas-sr-type.res { color:var(--red); }
        .kuyas-sr-type.sup { color:var(--green); }
        .kuyas-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .kuyas-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .kuyas-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--warn); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .kuyas-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .kuyas-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .kuyas-narrative p:last-child { margin-bottom:0; }
        .kuyas-narrative strong { color:var(--accent); font-weight:600; }
        .kuyas-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .kuyas-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .kuyas-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .kuyas-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .kuyas-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .kuyas-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .kuyas-scenario-card.bull .kuyas-scenario-head { color:var(--green); }
        .kuyas-scenario-card.bear .kuyas-scenario-head { color:var(--red); }
        .kuyas-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .kuyas-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .kuyas-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .kuyas-scenario-card.bull li::before { color:var(--green); }
        .kuyas-scenario-card.bear li::before { color:var(--red); }
        .kuyas-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .kuyas-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .kuyas-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .kuyas-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .kuyas-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .kuyas-disclaimer p+p { margin-top:.4rem; }
        .kuyas-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .kuyas-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .kuyas-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .kuyas-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .kuyas-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:768px){ .kuyas-two-col{ grid-template-columns:1fr; } }
        @media(max-width:600px){
          .kuyas-hero{ padding:2rem 1rem 1.5rem; }
          .kuyas-main{ padding:1.5rem 1rem 3rem; }
          .kuyas-footer{ padding:1.2rem 1rem; }
          .kuyas-scenario-grid{ grid-template-columns:1fr; }
          .kuyas-sr-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="kuyas-wrap">

        {/* HERO */}
        <section className="kuyas-hero">
          <div className="kuyas-hero-label">Teknik Analiz Raporu</div>
          <h1 className="kuyas-hero-title">KUYAS HOLDİNG<br /><em>KUYAS</em></h1>
          <p className="kuyas-hero-sub">
            BIST: KUYAS &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="kuyas-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="kuyas-price-currency">₺</span>72.55
          </div>
        </section>

        <main className="kuyas-main">

          {/* CHART */}
          <div className="kuyas-section-title"><span className="kuyas-section-num">01</span> Grafik</div>
          <div className="kuyas-chart-wrap">
            <div className="kuyas-chart-header">
              <span className="kuyas-chart-title-text">KUYAS — Günlük Mum Grafiği</span>
              <div className="kuyas-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`kuyas-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="kuyas-chart-img-wrap">
              <img src="/kuyas-analiz.webp" alt="KUYAS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="kuyas-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="kuyas-section-title"><span className="kuyas-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="kuyas-bol-card">
            <div className="kuyas-bol-visual">
              <div className="kuyas-bol-bands">
                <div className="kuyas-bol-fill" /><div className="kuyas-bol-upper" />
                <div className="kuyas-bol-mid" /><div className="kuyas-bol-lower" />
                <div className="kuyas-bol-marker" />
              </div>
              <div className="kuyas-bol-labels">
                <span>BOL U: 94.32</span>
                <span style={{ color:"var(--gold)" }}>BOL M: 81.08</span>
                <span>BOL D: 67.84</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "94.32 TL", "Güçlü Direnç",  "sell"],
              ["Orta Band / MAV 20", "81.08 TL", "Direnç",        "sell"],
              ["Alt Band (BOL D)",   "67.84 TL", "Kritik Destek", "neutral"],
              ["Bant Genişliği",     "26.48 TL", "Yüksek Volatilite","neutral"],
              ["Fiyatın Konumu",     "72.55 TL", "Orta-Alt Bant", "sell"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="kuyas-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="kuyas-ind-name">{n}</span>
                <span className="kuyas-ind-val">{v}</span>
                <span className={`kuyas-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop:"1rem", fontSize:".85rem", color:"var(--text)", lineHeight:1.7 }}>
              Fiyat Bollinger orta bandı (81.08) ile alt band (67.84) arasında konumlanmış. Orta bandın geri alınamaması <strong style={{ color:"var(--warn)" }}>kısa vadeli baskının devam ettiğine</strong> işaret ediyor. Alt banda yaklaşımda 67.84 TL kritik destek olacak.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="kuyas-section-title"><span className="kuyas-section-num">03</span> İndikatörler</div>
          <div className="kuyas-two-col">

            <div className="kuyas-analysis-card">
              <div className="kuyas-analysis-card-head">
                <div className="kuyas-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="kuyas-analysis-card-body">
                <div className="kuyas-ind-row"><span className="kuyas-ind-name">StocK</span><span className="kuyas-ind-val">2.14</span><span className="kuyas-ind-signal buy">Derin A.Satım</span></div>
                <div className="kuyas-ind-row"><span className="kuyas-ind-name">StocD</span><span className="kuyas-ind-val">4.53</span><span className="kuyas-ind-signal buy">A.Satım</span></div>
                <div className="kuyas-ind-row" style={{ borderBottom:"none" }}><span className="kuyas-ind-name">Konum</span><span className="kuyas-ind-val">K &lt; D</span><span className="kuyas-ind-signal sell">Baskı</span></div>
                <div>
                  <div className="kuyas-progress-label"><span>Aşırı Satım</span><span>K: 2.14</span><span>Aşırı Alım</span></div>
                  <div className="kuyas-progress-bar"><div className="kuyas-progress-fill" style={{ width:"2.14%", background:"linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>StocK 5&apos;in altında — tarihsel dip seviyelerde. K çizgisi D&apos;nin altında olduğundan baskı devam ediyor; K&apos;nın D&apos;yi yukarı kesmesi ilk toparlanma sinyali olacak.</p>
              </div>
            </div>

            <div className="kuyas-analysis-card">
              <div className="kuyas-analysis-card-head">
                <div className="kuyas-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="kuyas-analysis-card-body">
                <div className="kuyas-ind-row"><span className="kuyas-ind-name">MACD</span><span className="kuyas-ind-val">−3.1082</span><span className="kuyas-ind-signal sell">NEGATİF</span></div>
                <div className="kuyas-ind-row"><span className="kuyas-ind-name">Trigger</span><span className="kuyas-ind-val">−2.0939</span><span className="kuyas-ind-signal sell">SAT</span></div>
                <div className="kuyas-ind-row" style={{ borderBottom:"none" }}><span className="kuyas-ind-name">Histogram</span><span className="kuyas-ind-val">−1.0143</span><span className="kuyas-ind-signal sell">Genişliyor</span></div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>MACD trigger çizgisinin altında ve histogram negatif yönde genişliyor — düşüş momentumu güçlenmeye devam ediyor. Trendin tersine dönmesi için MACD&apos;nin trigger üstüne çıkması şart.</p>
              </div>
            </div>

            <div className="kuyas-analysis-card">
              <div className="kuyas-analysis-card-head">
                <div className="kuyas-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="kuyas-analysis-card-body">
                <div className="kuyas-ind-row"><span className="kuyas-ind-name">RSI Değeri</span><span className="kuyas-ind-val">32.17</span><span className="kuyas-ind-signal neutral">Eşikte</span></div>
                <div className="kuyas-ind-row" style={{ borderBottom:"none" }}><span className="kuyas-ind-name">Bölge</span><span className="kuyas-ind-val">A.Satım Yakını</span><span className="kuyas-ind-signal buy">Tepki Olası</span></div>
                <div>
                  <div className="kuyas-progress-label"><span>30 (A.Satım)</span><span>32.17</span><span>70 (A.Alım)</span></div>
                  <div className="kuyas-progress-bar"><div className="kuyas-progress-fill" style={{ width:"32.17%", background:"linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>RSI 32.17 ile aşırı satım eşiğine (30) çok yakın. Bu seviyeden yukarı dönüş kısa vadeli teknik tepkiye zemin hazırlayabilir.</p>
              </div>
            </div>

            <div className="kuyas-analysis-card">
              <div className="kuyas-analysis-card-head">
                <div className="kuyas-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="kuyas-analysis-card-body" style={{ paddingTop:".6rem", paddingBottom:".6rem" }}>
                <table className="kuyas-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "73.97",  "Fiyat Altında ▼", false],
                      ["MAV 13", "77.06",  "Fiyat Altında ▼", false],
                      ["MAV 21", "79.11",  "Fiyat Altında ▼", false],
                      ["MAV 55", "79.34",  "Fiyat Altında ▼", false],
                      ["MAV 89", "75.86",  "Fiyat Altında ▼", false],
                      ["MAV 144","70.44",  "Fiyat Üstünde ▲", true],
                      ["MAV 233","63.29",  "Fiyat Üstünde ▲", true],
                    ] as [string,string,string,boolean][]).map(([p,v,d,above]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={above ? "kuyas-above" : "kuyas-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="kuyas-section-title"><span className="kuyas-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="kuyas-sr-grid">
            {([
              ["res", "Güçlü Direnç",  "94.32 TL",   "Bollinger üst bandı"],
              ["res", "Kritik Direnç", "81.08 TL",   "Bollinger orta bandı / MAV 20"],
              ["res", "İlk Direnç",    "73.97–79.34","MAV 5/13/21/55 bölgesi — yakın tavan"],
              ["sup", "Anlık Destek",  "72.15–72.55","Günlük dip ve kapanış bölgesi"],
              ["sup", "Kritik Destek", "67.84 TL",   "Bollinger alt bandı — kırılırsa kritik"],
              ["sup", "Uzun Vade Des.","63.29–70.44","MAV 144/233 bölgesi"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="kuyas-sr-cell" key={l}>
                <div className={`kuyas-sr-type ${t}`}>{l}</div>
                <div className="kuyas-sr-price">{p}</div>
                <div className="kuyas-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="kuyas-section-title"><span className="kuyas-section-num">05</span> Genel Değerlendirme</div>
          <div className="kuyas-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif — Aşırı Satım Eşiğine Yakın</h3>
            <p>KUYAS, Nisan 2026 zirvelerinden (~94 TL) bu yana sert bir düşüş sergileyerek <strong>72.55 TL</strong> seviyesine geriledi. MAV 5, 13, 21, 55 ve 89 ortalamaları 73.97–79.34 TL bandında fiyatın üzerinde direnç oluştururken; <strong>MAV 144 (70.44) ve MAV 233 (63.29)</strong> fiyatın altında uzun vadeli destek sağlıyor.</p>
            <p>Bollinger Bantları açısından fiyat <strong>orta band (81.08) ile alt band (67.84) arasında</strong>. Orta bandın geri alınamaması düşüş trendinin sürdüğüne işaret ediyor.</p>
            <p>Stochastic 2.14 ile <em>tarihsel dip aşırı satım bölgesinde</em>; RSI 32.17 ile aşırı satım eşiğine (30) çok yakın. Bu kombinasyon kısa vadeli teknik tepki potansiyeli taşıyor. Ancak <em>MACD hem negatif hem de genişliyor</em> — momentum düşüş yönünde güçleniyor.</p>
            <p>Kritik eşik: <strong>73.97 TL MAV 5</strong>. Bu seviyenin üzerinde kapanış kısa vadeli baskının azaldığının ilk sinyali olacak. Kırılma senaryosunda ise <strong>67.84 TL Bollinger alt bandı</strong> son savunma hattı.</p>
          </div>

          {/* SENARYO */}
          <div className="kuyas-section-title"><span className="kuyas-section-num">06</span> Senaryo Analizi</div>
          <div className="kuyas-scenario-grid">
            <div className="kuyas-scenario-card bull">
              <div className="kuyas-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>72.15 TL günlük dip desteğinin korunması</li>
                <li>RSI&apos;ın 30 üstünde tutunarak yukarı dönmesi</li>
                <li>Stochastic K&apos;nın D&apos;yi yukarı kesmesi</li>
                <li>73.97 TL MAV 5 üzerinde kapanış</li>
                <li>Hedef: 81.08 TL Bollinger orta bandı</li>
              </ul>
            </div>
            <div className="kuyas-scenario-card bear">
              <div className="kuyas-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>72.15 TL günlük dip altında kapanış</li>
                <li>RSI&apos;ın 30 aşırı satım bölgesine inmesi</li>
                <li>MACD histogramının negatif genişlemeye devam etmesi</li>
                <li>67.84 TL Bollinger alt bandına gerileme</li>
                <li>Hedef: 63.29 TL MAV 233 desteği</li>
              </ul>
            </div>
          </div>

          {/* İLGİLİ BÖLÜMLER */}
          <div style={{ background:"var(--bg)", border:"1px solid var(--border)", borderRadius:"12px", padding:"1rem 1.25rem", marginBottom:"1rem" }}>
            <div style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:".95rem", letterSpacing:".1em", color:"var(--accent)", marginBottom:".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(59,130,246,.1)", border:"1px solid rgba(59,130,246,.3)", color:"#60a5fa", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(34,197,94,.1)", border:"1px solid rgba(34,197,94,.3)", color:"#4ade80", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(245,158,11,.1)", border:"1px solid rgba(245,158,11,.3)", color:"#fbbf24", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(168,85,247,.1)", border:"1px solid rgba(168,85,247,.3)", color:"#c084fc", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>

          {/* DISCLAIMER */}
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="kuyas" />

          <div className="kuyas-disclaimer">
            <div className="kuyas-disclaimer-head">
              <div className="kuyas-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color:"var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color:"var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>

        </main>

      </div>
    </>
  );
}
