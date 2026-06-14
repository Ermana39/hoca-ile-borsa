import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KTLEV Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Katılım Emeklilik (KTLEV) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/ktlev",
  },
};

export default function KtlevGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="ktlev" tarih="2026-06-10" />

      <style>{`
        .ktlev-wrap *, .ktlev-wrap *::before, .ktlev-wrap *::after { box-sizing:border-box; margin:0; padding:0; }
        .ktlev-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px; line-height:1.65; min-height:100vh;
        }
        .ktlev-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .ktlev-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .ktlev-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .ktlev-hero-title em { color:var(--accent); font-style:normal; }
        .ktlev-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .ktlev-price-main { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,5vw,4rem); color:var(--text-bright); letter-spacing:.04em; line-height:1; }
        .ktlev-price-currency { font-size:.55em; color:var(--text-dim); vertical-align:super; }
        .ktlev-main { max-width:1280px; margin:0 auto; padding:2.5rem 2rem 4rem; }
        .ktlev-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .ktlev-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .ktlev-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .ktlev-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .ktlev-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .ktlev-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .ktlev-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .ktlev-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .ktlev-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ktlev-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ktlev-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ktlev-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ktlev-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .ktlev-chart-img-wrap { position:relative; padding:1rem; }
        .ktlev-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .ktlev-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .ktlev-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .ktlev-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .ktlev-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .ktlev-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .ktlev-icon.blue  { background:rgba(10,187,255,.12); }
        .ktlev-icon.gold  { background:rgba(245,200,66,.12); }
        .ktlev-icon.green { background:rgba(0,208,104,.12); }
        .ktlev-icon.red   { background:rgba(255,77,106,.12); }
        .ktlev-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .ktlev-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .ktlev-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .ktlev-ind-row:last-child { border-bottom:none; }
        .ktlev-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .ktlev-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .ktlev-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .ktlev-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .ktlev-ind-signal.sell    { background:rgba(255,61,85,.12);  color:var(--red);   border:1px solid rgba(255,61,85,.3); }
        .ktlev-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .ktlev-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .ktlev-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .ktlev-progress-fill { height:100%; border-radius:3px; }
        .ktlev-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .ktlev-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .ktlev-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .ktlev-ma-table tr:last-child td { border-bottom:none; }
        .ktlev-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .ktlev-above { color:var(--green); }
        .ktlev-below { color:var(--red); }
        .ktlev-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .ktlev-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .ktlev-bol-bands { flex:1; position:relative; height:48px; }
        .ktlev-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .ktlev-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .ktlev-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .ktlev-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .ktlev-bol-marker {
          position:absolute; left:0; right:0; height:2px;
          background:var(--accent); box-shadow:0 0 6px var(--accent);
          /* 161.00 fiyat, üst 161.51, alt 101.28 → (161.51-161.00)/(161.51-101.28) = 0.0085 */
          top:calc(100% * (161.51 - 161.00) / (161.51 - 101.28));
        }
        .ktlev-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .ktlev-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .ktlev-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .ktlev-sr-cell:hover { background:var(--bg3); }
        .ktlev-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .ktlev-sr-type.res { color:var(--red); }
        .ktlev-sr-type.sup { color:var(--green); }
        .ktlev-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .ktlev-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .ktlev-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--accent); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .ktlev-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .ktlev-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .ktlev-narrative p:last-child { margin-bottom:0; }
        .ktlev-narrative strong { color:var(--accent); font-weight:600; }
        .ktlev-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .ktlev-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .ktlev-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .ktlev-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .ktlev-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .ktlev-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .ktlev-scenario-card.bull .ktlev-scenario-head { color:var(--green); }
        .ktlev-scenario-card.bear .ktlev-scenario-head { color:var(--red); }
        .ktlev-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .ktlev-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .ktlev-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .ktlev-scenario-card.bull li::before { color:var(--green); }
        .ktlev-scenario-card.bear li::before { color:var(--red); }
        .ktlev-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .ktlev-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .ktlev-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .ktlev-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .ktlev-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .ktlev-disclaimer p+p { margin-top:.4rem; }
        .ktlev-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .ktlev-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .ktlev-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .ktlev-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .ktlev-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:768px){ .ktlev-two-col{ grid-template-columns:1fr; } }
        @media(max-width:600px){
          .ktlev-hero{ padding:2rem 1rem 1.5rem; }
          .ktlev-main{ padding:1.5rem 1rem 3rem; }
          .ktlev-footer{ padding:1.2rem 1rem; }
          .ktlev-scenario-grid{ grid-template-columns:1fr; }
          .ktlev-sr-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="ktlev-wrap">

        {/* HERO */}
        <section className="ktlev-hero">
          <div className="ktlev-hero-label">Teknik Analiz Raporu</div>
          <h1 className="ktlev-hero-title">KATILIM EMEKLİLİK<br /><em>KTLEV</em></h1>
          <p className="ktlev-hero-sub">
            BIST: KTLEV &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="ktlev-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="ktlev-price-currency">₺</span>161.00
          </div>
        </section>

        <main className="ktlev-main">

          {/* CHART */}
          <div className="ktlev-section-title"><span className="ktlev-section-num">01</span> Grafik</div>
          <div className="ktlev-chart-wrap">
            <div className="ktlev-chart-header">
              <span className="ktlev-chart-title-text">KTLEV — Günlük Mum Grafiği</span>
              <div className="ktlev-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`ktlev-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="ktlev-chart-img-wrap">
              <img src="/ktlev-analiz.webp" alt="KTLEV Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="ktlev-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="ktlev-section-title"><span className="ktlev-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ktlev-bol-card">
            <div className="ktlev-bol-visual">
              <div className="ktlev-bol-bands">
                <div className="ktlev-bol-fill" /><div className="ktlev-bol-upper" />
                <div className="ktlev-bol-mid" /><div className="ktlev-bol-lower" />
                <div className="ktlev-bol-marker" />
              </div>
              <div className="ktlev-bol-labels">
                <span>BOL U: 161.51</span>
                <span style={{ color:"var(--gold)" }}>BOL M: 131.64</span>
                <span>BOL D: 101.28</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "161.51 TL", "Anlık Direnç",  "neutral"],
              ["Orta Band / MAV 20", "131.64 TL", "Güçlü Destek",  "buy"],
              ["Alt Band (BOL D)",   "101.28 TL", "Uzak Destek",   "buy"],
              ["Bant Genişliği",     "60.23 TL",  "Çok Yüksek Volatilite","neutral"],
              ["Fiyatın Konumu",     "161.00 TL", "Üst Banda Yapışık","buy"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="ktlev-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="ktlev-ind-name">{n}</span>
                <span className="ktlev-ind-val">{v}</span>
                <span className={`ktlev-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop:"1rem", fontSize:".85rem", color:"var(--text)", lineHeight:1.7 }}>
              Fiyat Bollinger üst bandına (161.51) neredeyse yapışık durumda — güçlü trend boyunca <strong style={{ color:"var(--accent)" }}>bant yürüyüşü</strong> devam ediyor. Bu durum trendin gücünü gösterse de olası geri çekilmelerde <strong style={{ color:"var(--warn)" }}>131.64 TL orta band</strong> ilk kritik destek olacak.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="ktlev-section-title"><span className="ktlev-section-num">03</span> İndikatörler</div>
          <div className="ktlev-two-col">

            <div className="ktlev-analysis-card">
              <div className="ktlev-analysis-card-head">
                <div className="ktlev-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ktlev-analysis-card-body">
                <div className="ktlev-ind-row"><span className="ktlev-ind-name">StocK</span><span className="ktlev-ind-val">75.50</span><span className="ktlev-ind-signal buy">AL</span></div>
                <div className="ktlev-ind-row"><span className="ktlev-ind-name">StocD</span><span className="ktlev-ind-val">71.22</span><span className="ktlev-ind-signal buy">AL</span></div>
                <div className="ktlev-ind-row" style={{ borderBottom:"none" }}><span className="ktlev-ind-name">Konum</span><span className="ktlev-ind-val">K &gt; D</span><span className="ktlev-ind-signal buy">Altın Kes.</span></div>
                <div>
                  <div className="ktlev-progress-label"><span>Aşırı Satım</span><span>K: 75.50</span><span>Aşırı Alım</span></div>
                  <div className="ktlev-progress-bar"><div className="ktlev-progress-fill" style={{ width:"75.50%", background:"linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>K çizgisi D&apos;nin üzerinde ve altın kesişim aktif. Aşırı alım sınırına (80) yaklaşıyor; trend güçlü olduğu sürece bu seviyeler aşılabilir.</p>
              </div>
            </div>

            <div className="ktlev-analysis-card">
              <div className="ktlev-analysis-card-head">
                <div className="ktlev-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ktlev-analysis-card-body">
                <div className="ktlev-ind-row"><span className="ktlev-ind-name">MACD</span><span className="ktlev-ind-val">14.2478</span><span className="ktlev-ind-signal buy">GÜÇLÜ</span></div>
                <div className="ktlev-ind-row"><span className="ktlev-ind-name">Trigger</span><span className="ktlev-ind-val">11.7108</span><span className="ktlev-ind-signal buy">AL</span></div>
                <div className="ktlev-ind-row" style={{ borderBottom:"none" }}><span className="ktlev-ind-name">Histogram</span><span className="ktlev-ind-val">+2.5370</span><span className="ktlev-ind-signal buy">Genişliyor</span></div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>MACD hem pozitif hem de trigger çizgisinin belirgin üzerinde. Histogram genişliyor — yükseliş momentumu güç kazanmaya devam ediyor.</p>
              </div>
            </div>

            <div className="ktlev-analysis-card">
              <div className="ktlev-analysis-card-head">
                <div className="ktlev-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ktlev-analysis-card-body">
                <div className="ktlev-ind-row"><span className="ktlev-ind-name">RSI Değeri</span><span className="ktlev-ind-val">86.13</span><span className="ktlev-ind-signal neutral">A.Alım</span></div>
                <div className="ktlev-ind-row" style={{ borderBottom:"none" }}><span className="ktlev-ind-name">Bölge</span><span className="ktlev-ind-val">Aşırı Alım</span><span className="ktlev-ind-signal neutral">Dikkat</span></div>
                <div>
                  <div className="ktlev-progress-label"><span>30 (A.Satım)</span><span>86.13</span><span>70 (A.Alım)</span></div>
                  <div className="ktlev-progress-bar"><div className="ktlev-progress-fill" style={{ width:"86.13%", background:"linear-gradient(90deg,var(--accent),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>RSI 86 ile derin aşırı alım bölgesinde. Güçlü trendlerde bu seviyeler uzun süre korunabilir; ancak ani geri çekilme riski artmış durumda.</p>
              </div>
            </div>

            <div className="ktlev-analysis-card">
              <div className="ktlev-analysis-card-head">
                <div className="ktlev-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ktlev-analysis-card-body" style={{ paddingTop:".6rem", paddingBottom:".6rem" }}>
                <table className="ktlev-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "154.09", "Fiyat Üstünde ▲", true],
                      ["MAV 13", "141.30", "Fiyat Üstünde ▲", true],
                      ["MAV 21", "132.87", "Fiyat Üstünde ▲", true],
                      ["MAV 55", "106.75", "Fiyat Üstünde ▲", true],
                      ["MAV 89", "89.04",  "Fiyat Üstünde ▲", true],
                      ["MAV 144","70.51",  "Fiyat Üstünde ▲", true],
                      ["MAV 233","53.34",  "Fiyat Üstünde ▲", true],
                    ] as [string,string,string,boolean][]).map(([p,v,d,above]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={above ? "ktlev-above" : "ktlev-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="ktlev-section-title"><span className="ktlev-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ktlev-sr-grid">
            {([
              ["res", "Anlık Direnç",   "161.51 TL",   "Bollinger üst bandı — fiyat çok yakın"],
              ["res", "Psikolojik",     "160.00–165.00","Yuvarlak sayı bölgesi"],
              ["sup", "İlk Destek",     "154.09 TL",   "MAV 5 — kısa vadeli destek"],
              ["sup", "Orta Destek",    "141.30–132.87","MAV 13/21 bölgesi"],
              ["sup", "Kritik Destek",  "131.64 TL",   "Bollinger orta bandı — trend kırılım eşiği"],
              ["sup", "Güçlü Destek",   "106.75 TL",   "MAV 55 — orta vadeli ana destek"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="ktlev-sr-cell" key={l}>
                <div className={`ktlev-sr-type ${t}`}>{l}</div>
                <div className="ktlev-sr-price">{p}</div>
                <div className="ktlev-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="ktlev-section-title"><span className="ktlev-section-num">05</span> Genel Değerlendirme</div>
          <div className="ktlev-narrative">
            <h3>Kısa Vadeli Görünüm: Güçlü Pozitif — Aşırı Alım Riski</h3>
            <p>KTLEV, Kasım 2025&apos;ten bu yana kesintisiz yükselen güçlü bir boğa trendinde. <strong>161.00 TL</strong> kapanışıyla MAV 5&apos;ten MAV 233&apos;e tüm hareketli ortalamaların belirgin üzerinde konumlanmış; bu durum <strong>tam boğa dizilimi</strong> olarak değerlendirilir.</p>
            <p>Bollinger üst bandına (161.51) neredeyse yapışık olan fiyat, klasik <strong>bant yürüyüşü</strong> formasyonunda. Bu durum trendin gücünü teyit eder; ancak bant yürüyüşünün sona ermesi durumunda orta banda (131.64) hızlı geri çekilme yaşanabilir.</p>
            <p>MACD güçlü pozitif ve genişlyor (14.25 vs 11.71), Stochastic altın kesişim gösteriyor. Tek risk faktörü <em>RSI&apos;ın 86.13 ile derin aşırı alım bölgesinde</em> olması. Bu seviye trend güçlü kaldıkça korunabilir; ancak <em>kâr realizasyonu ve ani düzeltme riski artmış durumda</em>.</p>
            <p>Momentum tüm göstergelerle destekleniyor. Kısa vadeli pozisyonlarda <strong>154.09 TL MAV 5</strong> takip edilmeli; bu seviyenin altında kapanış trend zayıflamasının ilk sinyali olacak.</p>
          </div>

          {/* SENARYO */}
          <div className="ktlev-section-title"><span className="ktlev-section-num">06</span> Senaryo Analizi</div>
          <div className="ktlev-scenario-grid">
            <div className="ktlev-scenario-card bull">
              <div className="ktlev-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>161.51 TL Bollinger üst bandının kırılması</li>
                <li>RSI&apos;ın 80 üstünde kalması — trend devamı</li>
                <li>MACD histogramının genişlemeye devam etmesi</li>
                <li>Stochastic&apos;in 80 üstünde tutunması</li>
                <li>Hedef: 165–170 TL psikolojik bölge</li>
              </ul>
            </div>
            <div className="ktlev-scenario-card bear">
              <div className="ktlev-scenario-head">🔴 Düzeltme Senaryosu</div>
              <ul>
                <li>RSI&apos;ın 70 altına geri dönmesi — kâr realizasyonu</li>
                <li>154.09 TL MAV 5 altında kapanış</li>
                <li>Stochastic K&apos;nın D&apos;yi aşağı kesmesi</li>
                <li>MACD histogramının küçülmesi</li>
                <li>Hedef: 131.64 TL Bollinger orta bandı testi</li>
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
          <HisseProfili kod="ktlev" />

          <div className="ktlev-disclaimer">
            <div className="ktlev-disclaimer-head">
              <div className="ktlev-disclaimer-icon">⚠</div>
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
