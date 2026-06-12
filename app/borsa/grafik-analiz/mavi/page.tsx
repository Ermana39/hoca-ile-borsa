import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAVİ Teknik Analiz — 10.06.2026",
  description:
    "Mavi Giyim (MAVİ) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/mavi",
  },
};

export default function MaviGrafikAnaliz() {
  return (
    <>


      <style>{`
        .mavi-wrap *, .mavi-wrap *::before, .mavi-wrap *::after { box-sizing:border-box; margin:0; padding:0; }
        .mavi-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px; line-height:1.65; min-height:100vh;
        }
        .mavi-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .mavi-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .mavi-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .mavi-hero-title em { color:var(--accent); font-style:normal; }
        .mavi-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .mavi-price-main { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,5vw,4rem); color:var(--text-bright); letter-spacing:.04em; line-height:1; }
        .mavi-price-currency { font-size:.55em; color:var(--text-dim); vertical-align:super; }
        .mavi-main { max-width:1280px; margin:0 auto; padding:2.5rem 2rem 4rem; }
        .mavi-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .mavi-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .mavi-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .mavi-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .mavi-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .mavi-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .mavi-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .mavi-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .mavi-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .mavi-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .mavi-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .mavi-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .mavi-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .mavi-chart-img-wrap { position:relative; padding:1rem; }
        .mavi-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .mavi-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .mavi-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .mavi-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .mavi-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .mavi-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .mavi-icon.blue  { background:rgba(10,187,255,.12); }
        .mavi-icon.gold  { background:rgba(245,200,66,.12); }
        .mavi-icon.green { background:rgba(0,208,104,.12); }
        .mavi-icon.red   { background:rgba(255,77,106,.12); }
        .mavi-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .mavi-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .mavi-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .mavi-ind-row:last-child { border-bottom:none; }
        .mavi-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .mavi-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .mavi-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .mavi-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .mavi-ind-signal.sell    { background:rgba(255,61,85,.12);  color:var(--red);   border:1px solid rgba(255,61,85,.3); }
        .mavi-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .mavi-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .mavi-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .mavi-progress-fill { height:100%; border-radius:3px; }
        .mavi-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .mavi-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .mavi-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .mavi-ma-table tr:last-child td { border-bottom:none; }
        .mavi-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .mavi-above { color:var(--green); }
        .mavi-below { color:var(--red); }
        .mavi-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .mavi-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .mavi-bol-bands { flex:1; position:relative; height:48px; }
        .mavi-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .mavi-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .mavi-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .mavi-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .mavi-bol-marker {
          position:absolute; left:0; right:0; height:2px;
          background:var(--accent); box-shadow:0 0 6px var(--accent);
          /* 43.54 fiyat, üst 45.61, alt 40.02 → (45.61-43.54)/(45.61-40.02) = 0.370 */
          top:calc(100% * (45.61 - 43.54) / (45.61 - 40.02));
        }
        .mavi-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .mavi-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .mavi-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .mavi-sr-cell:hover { background:var(--bg3); }
        .mavi-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .mavi-sr-type.res { color:var(--red); }
        .mavi-sr-type.sup { color:var(--green); }
        .mavi-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .mavi-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .mavi-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--accent); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .mavi-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .mavi-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .mavi-narrative p:last-child { margin-bottom:0; }
        .mavi-narrative strong { color:var(--accent); font-weight:600; }
        .mavi-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .mavi-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .mavi-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .mavi-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .mavi-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .mavi-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .mavi-scenario-card.bull .mavi-scenario-head { color:var(--green); }
        .mavi-scenario-card.bear .mavi-scenario-head { color:var(--red); }
        .mavi-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .mavi-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .mavi-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .mavi-scenario-card.bull li::before { color:var(--green); }
        .mavi-scenario-card.bear li::before { color:var(--red); }
        .mavi-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .mavi-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .mavi-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .mavi-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .mavi-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .mavi-disclaimer p+p { margin-top:.4rem; }
        .mavi-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .mavi-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .mavi-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .mavi-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .mavi-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:768px){ .mavi-two-col{ grid-template-columns:1fr; } }
        @media(max-width:600px){
          .mavi-hero{ padding:2rem 1rem 1.5rem; }
          .mavi-main{ padding:1.5rem 1rem 3rem; }
          .mavi-footer{ padding:1.2rem 1rem; }
          .mavi-scenario-grid{ grid-template-columns:1fr; }
          .mavi-sr-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="mavi-wrap">

        {/* HERO */}
        <section className="mavi-hero">
          <div className="mavi-hero-label">Teknik Analiz Raporu</div>
          <h1 className="mavi-hero-title">MAVİ GİYİM<br /><em>MAVİ</em></h1>
          <p className="mavi-hero-sub">
            BIST: MAVİ &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="mavi-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="mavi-price-currency">₺</span>43.54
          </div>
        </section>

        <main className="mavi-main">

          {/* CHART */}
          <div className="mavi-section-title"><span className="mavi-section-num">01</span> Grafik</div>
          <div className="mavi-chart-wrap">
            <div className="mavi-chart-header">
              <span className="mavi-chart-title-text">MAVİ — Günlük Mum Grafiği</span>
              <div className="mavi-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`mavi-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="mavi-chart-img-wrap">
              <img src="/mavi-analiz.webp" alt="MAVİ Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="mavi-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="mavi-section-title"><span className="mavi-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="mavi-bol-card">
            <div className="mavi-bol-visual">
              <div className="mavi-bol-bands">
                <div className="mavi-bol-fill" /><div className="mavi-bol-upper" />
                <div className="mavi-bol-mid" /><div className="mavi-bol-lower" />
                <div className="mavi-bol-marker" />
              </div>
              <div className="mavi-bol-labels">
                <span>BOL U: 45.61</span>
                <span style={{ color:"var(--gold)" }}>BOL M: 42.81</span>
                <span>BOL D: 40.02</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "45.61 TL", "Yakın Direnç",  "neutral"],
              ["Orta Band / MAV 20", "42.81 TL", "Destek",        "buy"],
              ["Alt Band (BOL D)",   "40.02 TL", "Güçlü Destek",  "buy"],
              ["Bant Genişliği",     "5.59 TL",  "Düşük Volatilite","buy"],
              ["Fiyatın Konumu",     "43.54 TL", "Orta-Üst Bant", "buy"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="mavi-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="mavi-ind-name">{n}</span>
                <span className="mavi-ind-val">{v}</span>
                <span className={`mavi-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop:"1rem", fontSize:".85rem", color:"var(--text)", lineHeight:1.7 }}>
              Fiyat Bollinger orta band (42.81) ile üst band (45.61) arasında — <strong style={{ color:"var(--accent)" }}>boğa bölgesinde</strong>. Dar bant genişliği (5.59 TL) volatilitenin düşük olduğunu gösteriyor; bu durum yakında bir kırılım hareketine zemin hazırlayabilir. Üst bandın aşılması yükseliş hızlanabilir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="mavi-section-title"><span className="mavi-section-num">03</span> İndikatörler</div>
          <div className="mavi-two-col">

            <div className="mavi-analysis-card">
              <div className="mavi-analysis-card-head">
                <div className="mavi-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="mavi-analysis-card-body">
                <div className="mavi-ind-row"><span className="mavi-ind-name">StocK</span><span className="mavi-ind-val">84.10</span><span className="mavi-ind-signal neutral">A.Alım Eşiği</span></div>
                <div className="mavi-ind-row"><span className="mavi-ind-name">StocD</span><span className="mavi-ind-val">85.77</span><span className="mavi-ind-signal neutral">A.Alım</span></div>
                <div className="mavi-ind-row" style={{ borderBottom:"none" }}><span className="mavi-ind-name">Konum</span><span className="mavi-ind-val">K &lt; D</span><span className="mavi-ind-signal sell">Ölüm Kes. Riski</span></div>
                <div>
                  <div className="mavi-progress-label"><span>Aşırı Satım</span><span>K: 84.10</span><span>Aşırı Alım</span></div>
                  <div className="mavi-progress-bar"><div className="mavi-progress-fill" style={{ width:"84.10%", background:"linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>Her iki çizgi de 80 üstünde aşırı alım bölgesinde. K, D&apos;nin altına geçmiş — ölüm kesişimi oluşmuş. Kısa vadeli kâr realizasyonu baskısı artabilir.</p>
              </div>
            </div>

            <div className="mavi-analysis-card">
              <div className="mavi-analysis-card-head">
                <div className="mavi-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="mavi-analysis-card-body">
                <div className="mavi-ind-row"><span className="mavi-ind-name">MACD</span><span className="mavi-ind-val">0.3527</span><span className="mavi-ind-signal buy">POZİTİF</span></div>
                <div className="mavi-ind-row"><span className="mavi-ind-name">Trigger</span><span className="mavi-ind-val">0.1362</span><span className="mavi-ind-signal buy">AL</span></div>
                <div className="mavi-ind-row" style={{ borderBottom:"none" }}><span className="mavi-ind-name">Konum</span><span className="mavi-ind-val">MACD &gt; Trigger</span><span className="mavi-ind-signal buy">Pozitif</span></div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Yükseliş momentumu devam ediyor. Histogram pozitif olmakla birlikte değerler küçük — trend güçlü ama ivme sınırlı.</p>
              </div>
            </div>

            <div className="mavi-analysis-card">
              <div className="mavi-analysis-card-head">
                <div className="mavi-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="mavi-analysis-card-body">
                <div className="mavi-ind-row"><span className="mavi-ind-name">RSI Değeri</span><span className="mavi-ind-val">53.94</span><span className="mavi-ind-signal buy">Nötr-Yüksek</span></div>
                <div className="mavi-ind-row" style={{ borderBottom:"none" }}><span className="mavi-ind-name">Bölge</span><span className="mavi-ind-val">Nötr</span><span className="mavi-ind-signal buy">Alan Var</span></div>
                <div>
                  <div className="mavi-progress-label"><span>30 (A.Satım)</span><span>53.94</span><span>70 (A.Alım)</span></div>
                  <div className="mavi-progress-bar"><div className="mavi-progress-fill" style={{ width:"53.94%", background:"linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>RSI 50 üstünde sağlıklı bölgede. Aşırı alım uyarısı yok; 60–65 üstüne taşınma momentum güçlenmesinin teyidi olacak.</p>
              </div>
            </div>

            <div className="mavi-analysis-card">
              <div className="mavi-analysis-card-head">
                <div className="mavi-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="mavi-analysis-card-body" style={{ paddingTop:".6rem", paddingBottom:".6rem" }}>
                <table className="mavi-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "43.66",  "Fiyat Üstünde ▲", true],
                      ["MAV 13", "43.05",  "Fiyat Üstünde ▲", true],
                      ["MAV 21", "42.83",  "Fiyat Üstünde ▲", true],
                      ["MAV 55", "42.48",  "Fiyat Üstünde ▲", true],
                      ["MAV 89", "42.21",  "Fiyat Üstünde ▲", true],
                      ["MAV 144","41.58",  "Fiyat Üstünde ▲", true],
                      ["MAV 233","40.61",  "Fiyat Üstünde ▲", true],
                    ] as [string,string,string,boolean][]).map(([p,v,d,above]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={above ? "mavi-above" : "mavi-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="mavi-section-title"><span className="mavi-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="mavi-sr-grid">
            {([
              ["res", "Anlık Direnç",   "45.61 TL",  "Bollinger üst bandı — kırılım hedefi"],
              ["res", "Psikolojik",     "46.00–48.00","Grafik zirve bölgesi"],
              ["sup", "İlk Destek",     "43.54–43.66","Kapanış ve MAV 5 bölgesi"],
              ["sup", "Güçlü Destek",   "42.81 TL",  "Bollinger orta bandı / MAV 20–21"],
              ["sup", "Orta Destek",    "42.21–42.48","MAV 55/89 bölgesi"],
              ["sup", "Ana Destek",     "40.02–40.61","Bollinger alt bandı / MAV 233"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="mavi-sr-cell" key={l}>
                <div className={`mavi-sr-type ${t}`}>{l}</div>
                <div className="mavi-sr-price">{p}</div>
                <div className="mavi-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="mavi-section-title"><span className="mavi-section-num">05</span> Genel Değerlendirme</div>
          <div className="mavi-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif — Stochastic Dikkat</h3>
            <p>MAVİ, <strong>43.54 TL</strong> kapanışıyla MAV 5&apos;ten MAV 233&apos;e tüm hareketli ortalamaların üzerinde konumlanmış — <strong>tam boğa dizilimi</strong>. 40.61–43.66 TL bandında sıkışan ortalamalar hem destek hem de trendin sağlamlığının göstergesi.</p>
            <p>Bollinger Bantları açısından fiyat <strong>orta band (42.81) ile üst band (45.61) arasında</strong> — boğa bölgesi. Dar bant genişliği (5.59 TL) yakın vadede bir kırılım hareketine zemin hazırlıyor; 45.61 TL üstüne çıkış yükseliş ivmesini artırabilir.</p>
            <p>MACD pozitif ve güçlü, RSI 53.94 ile sağlıklı nötr bölgede. Tek uyarı: <em>Stochastic her iki çizgisi de 80 üstünde ve K çizgisi D&apos;nin altına geçmiş</em> — bu ölüm kesişimi kısa vadeli kâr realizasyonu baskısına işaret ediyor. Ancak RSI ve MACD bu sinyali teyit etmiyor.</p>
            <p>Genel tablo olumlu; <strong>42.81 TL Bollinger orta bandı</strong> kritik destek. Bu seviyenin korunması boğa yapısını sağlam tutar.</p>
          </div>

          {/* SENARYO */}
          <div className="mavi-section-title"><span className="mavi-section-num">06</span> Senaryo Analizi</div>
          <div className="mavi-scenario-grid">
            <div className="mavi-scenario-card bull">
              <div className="mavi-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>45.61 TL Bollinger üst bandının kırılması</li>
                <li>Stochastic&apos;in aşırı alım bölgesinde tutunması</li>
                <li>MACD histogramının genişlemesi</li>
                <li>RSI&apos;ın 60 üstüne taşınması</li>
                <li>Hedef: 46.00–48.00 TL zirve bölgesi</li>
              </ul>
            </div>
            <div className="mavi-scenario-card bear">
              <div className="mavi-scenario-head">🔴 Düzeltme Senaryosu</div>
              <ul>
                <li>Stochastic ölüm kesişiminin derinleşmesi</li>
                <li>42.81 TL Bollinger orta bandının kırılması</li>
                <li>RSI&apos;ın 50 altına geri dönmesi</li>
                <li>MACD&apos;nin trigger altına sarkması</li>
                <li>Hedef: 42.21–42.48 TL MAV 55/89 bölgesi</li>
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
          <div className="mavi-disclaimer">
            <div className="mavi-disclaimer-head">
              <div className="mavi-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color:"var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color:"var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>

        </main>

        <footer style={{ background:"var(--bg)", borderTop:"1px solid var(--border)" }}>
          <div className="mavi-footer">
            <div className="mavi-footer-inner">
              <div className="mavi-footer-brand">HOCA İLE BORSA</div>
              <div className="mavi-footer-meta">
                MAVİ Teknik Analiz Raporu<br />
                Hazırlanma: 10.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="mavi-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
