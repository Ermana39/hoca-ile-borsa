import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAGEN Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Magen Holding (MAGEN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/magen",
  },
};

export default function MagenGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="magen" tarih="2026-06-10" />

      <style>{`
        .magen-wrap *, .magen-wrap *::before, .magen-wrap *::after { box-sizing:border-box; margin:0; padding:0; }
        .magen-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px; line-height:1.65; min-height:100vh;
        }
        .magen-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .magen-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .magen-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .magen-hero-title em { color:var(--accent); font-style:normal; }
        .magen-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .magen-price-main { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,5vw,4rem); color:var(--text-bright); letter-spacing:.04em; line-height:1; }
        .magen-price-currency { font-size:.55em; color:var(--text-dim); vertical-align:super; }
        .magen-main { max-width:1280px; margin:0 auto; padding:2.5rem 2rem 4rem; }
        .magen-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .magen-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .magen-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .magen-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .magen-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .magen-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .magen-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .magen-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .magen-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .magen-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .magen-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .magen-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .magen-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .magen-chart-img-wrap { position:relative; padding:1rem; }
        .magen-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .magen-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .magen-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .magen-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .magen-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .magen-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .magen-icon.blue  { background:rgba(10,187,255,.12); }
        .magen-icon.gold  { background:rgba(245,200,66,.12); }
        .magen-icon.green { background:rgba(0,208,104,.12); }
        .magen-icon.red   { background:rgba(255,77,106,.12); }
        .magen-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .magen-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .magen-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .magen-ind-row:last-child { border-bottom:none; }
        .magen-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .magen-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .magen-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .magen-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .magen-ind-signal.sell    { background:rgba(255,61,85,.12);  color:var(--red);   border:1px solid rgba(255,61,85,.3); }
        .magen-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .magen-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .magen-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .magen-progress-fill { height:100%; border-radius:3px; }
        .magen-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .magen-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .magen-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .magen-ma-table tr:last-child td { border-bottom:none; }
        .magen-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .magen-above { color:var(--green); }
        .magen-below { color:var(--red); }
        .magen-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .magen-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .magen-bol-bands { flex:1; position:relative; height:48px; }
        .magen-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .magen-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .magen-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .magen-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .magen-bol-marker {
          position:absolute; left:0; right:0; height:2px;
          background:var(--red); box-shadow:0 0 6px var(--red);
          /* 37.10 fiyat, üst 76.43, alt 41.75 → (76.43-37.10)/(76.43-41.75) = 1.134 → sınırla */
          top:95%;
        }
        .magen-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .magen-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .magen-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .magen-sr-cell:hover { background:var(--bg3); }
        .magen-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .magen-sr-type.res { color:var(--red); }
        .magen-sr-type.sup { color:var(--green); }
        .magen-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .magen-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .magen-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--red); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .magen-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .magen-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .magen-narrative p:last-child { margin-bottom:0; }
        .magen-narrative strong { color:var(--accent); font-weight:600; }
        .magen-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .magen-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .magen-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .magen-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .magen-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .magen-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .magen-scenario-card.bull .magen-scenario-head { color:var(--green); }
        .magen-scenario-card.bear .magen-scenario-head { color:var(--red); }
        .magen-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .magen-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .magen-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .magen-scenario-card.bull li::before { color:var(--green); }
        .magen-scenario-card.bear li::before { color:var(--red); }
        .magen-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .magen-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .magen-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .magen-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .magen-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .magen-disclaimer p+p { margin-top:.4rem; }
        .magen-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .magen-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .magen-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .magen-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .magen-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:768px){ .magen-two-col{ grid-template-columns:1fr; } }
        @media(max-width:600px){
          .magen-hero{ padding:2rem 1rem 1.5rem; }
          .magen-main{ padding:1.5rem 1rem 3rem; }
          .magen-footer{ padding:1.2rem 1rem; }
          .magen-scenario-grid{ grid-template-columns:1fr; }
          .magen-sr-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="magen-wrap">

        {/* HERO */}
        <section className="magen-hero">
          <div className="magen-hero-label">Teknik Analiz Raporu</div>
          <h1 className="magen-hero-title">MAGEN HOLDİNG<br /><em>MAGEN</em></h1>
          <p className="magen-hero-sub">
            BIST: MAGEN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="magen-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="magen-price-currency">₺</span>37.10
          </div>
        </section>

        <main className="magen-main">

          {/* CHART */}
          <div className="magen-section-title"><span className="magen-section-num">01</span> Grafik</div>
          <div className="magen-chart-wrap">
            <div className="magen-chart-header">
              <span className="magen-chart-title-text">MAGEN — Günlük Mum Grafiği</span>
              <div className="magen-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`magen-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="magen-chart-img-wrap">
              <img src="/magen-analiz.webp" alt="MAGEN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="magen-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="magen-section-title"><span className="magen-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="magen-bol-card">
            <div className="magen-bol-visual">
              <div className="magen-bol-bands">
                <div className="magen-bol-fill" /><div className="magen-bol-upper" />
                <div className="magen-bol-mid" /><div className="magen-bol-lower" />
                <div className="magen-bol-marker" />
              </div>
              <div className="magen-bol-labels">
                <span>BOL U: 76.43</span>
                <span style={{ color:"var(--gold)" }}>BOL M: 59.09</span>
                <span>BOL D: 41.75</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "76.43 TL", "Uzak Direnç",   "sell"],
              ["Orta Band / MAV 20", "59.09 TL", "Güçlü Direnç",  "sell"],
              ["Alt Band (BOL D)",   "41.75 TL", "Direnç",        "sell"],
              ["Bant Genişliği",     "34.68 TL", "Çok Yüksek Volatilite","neutral"],
              ["Fiyatın Konumu",     "37.10 TL", "Alt Band Altında","sell"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="magen-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="magen-ind-name">{n}</span>
                <span className="magen-ind-val">{v}</span>
                <span className={`magen-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop:"1rem", fontSize:".85rem", color:"var(--text)", lineHeight:1.7 }}>
              Fiyat Bollinger alt bandının (41.75) <strong style={{ color:"var(--red)" }}>altına sarkmış</strong> durumda — bu teknik açıdan son derece aşırı satım bölgesini işaret eder. Günlük -%10 düşüşle sert kırılma yaşandı. Alt banda geri dönüş bir normalleşme; tutunamaması ise yeni dip arayışı anlamına gelir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="magen-section-title"><span className="magen-section-num">03</span> İndikatörler</div>
          <div className="magen-two-col">

            <div className="magen-analysis-card">
              <div className="magen-analysis-card-head">
                <div className="magen-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="magen-analysis-card-body">
                <div className="magen-ind-row"><span className="magen-ind-name">StocK</span><span className="magen-ind-val">1.55</span><span className="magen-ind-signal buy">Ekstrem A.Satım</span></div>
                <div className="magen-ind-row"><span className="magen-ind-name">StocD</span><span className="magen-ind-val">5.24</span><span className="magen-ind-signal buy">A.Satım</span></div>
                <div className="magen-ind-row" style={{ borderBottom:"none" }}><span className="magen-ind-name">Konum</span><span className="magen-ind-val">K &lt; D</span><span className="magen-ind-signal sell">Baskı</span></div>
                <div>
                  <div className="magen-progress-label"><span>Aşırı Satım</span><span>K: 1.55</span><span>Aşırı Alım</span></div>
                  <div className="magen-progress-bar"><div className="magen-progress-fill" style={{ width:"1.55%", background:"linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>StocK neredeyse sıfır — bu seviyelerde tarihsel olarak çok güçlü teknik tepkiler görülebilir. Ancak günlük -%10 düşüş panik satışına işaret ettiğinden önce fiyatın stabilize olması gerekiyor.</p>
              </div>
            </div>

            <div className="magen-analysis-card">
              <div className="magen-analysis-card-head">
                <div className="magen-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="magen-analysis-card-body">
                <div className="magen-ind-row"><span className="magen-ind-name">MACD</span><span className="magen-ind-val">−4.2330</span><span className="magen-ind-signal sell">DERİN NEGATİF</span></div>
                <div className="magen-ind-row"><span className="magen-ind-name">Trigger</span><span className="magen-ind-val">−1.2936</span><span className="magen-ind-signal sell">SAT</span></div>
                <div className="magen-ind-row" style={{ borderBottom:"none" }}><span className="magen-ind-name">Histogram</span><span className="magen-ind-val">−2.9394</span><span className="magen-ind-signal sell">Hızla Genişliyor</span></div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>MACD son derece derin negatif bölgede ve hızla genişliyor. Günlük -%10 düşüşün momentum yansıması. Toparlanma için MACD&apos;nin önce trigger çizgisine yaklaşması gerekiyor.</p>
              </div>
            </div>

            <div className="magen-analysis-card">
              <div className="magen-analysis-card-head">
                <div className="magen-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="magen-analysis-card-body">
                <div className="magen-ind-row"><span className="magen-ind-name">RSI Değeri</span><span className="magen-ind-val">23.64</span><span className="magen-ind-signal buy">Derin A.Satım</span></div>
                <div className="magen-ind-row" style={{ borderBottom:"none" }}><span className="magen-ind-name">Bölge</span><span className="magen-ind-val">Aşırı Satım</span><span className="magen-ind-signal neutral">Dikkat</span></div>
                <div>
                  <div className="magen-progress-label"><span>30 (A.Satım)</span><span>23.64</span><span>70 (A.Alım)</span></div>
                  <div className="magen-progress-bar"><div className="magen-progress-fill" style={{ width:"23.64%", background:"linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>RSI 23.64 ile derin aşırı satım bölgesinde. 30 altında kalmak paniklemenin göstergesi; 30 üstüne çıkış teknik toparlanmanın başladığını teyit edecek ilk sinyaldir.</p>
              </div>
            </div>

            <div className="magen-analysis-card">
              <div className="magen-analysis-card-head">
                <div className="magen-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="magen-analysis-card-body" style={{ paddingTop:".6rem", paddingBottom:".6rem" }}>
                <table className="magen-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "45.33",  "Fiyat Altında ▼", false],
                      ["MAV 13", "53.08",  "Fiyat Altında ▼", false],
                      ["MAV 21", "55.03",  "Fiyat Altında ▼", false],
                      ["MAV 55", "56.35",  "Fiyat Altında ▼", false],
                      ["MAV 89", "53.18",  "Fiyat Altında ▼", false],
                      ["MAV 144","47.73",  "Fiyat Altında ▼", false],
                      ["MAV 233","40.57",  "Fiyat Altında ▼", false],
                    ] as [string,string,string,boolean][]).map(([p,v,d,above]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={above ? "magen-above" : "magen-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="magen-section-title"><span className="magen-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="magen-sr-grid">
            {([
              ["res", "Uzak Direnç",    "59.09 TL",   "Bollinger orta bandı — toparlanma hedefi"],
              ["res", "Güçlü Direnç",   "45.33–47.73","MAV 5/144 bölgesi — yakın tavan"],
              ["res", "Kritik Direnç",  "41.75 TL",   "Bollinger alt bandı — geri dönüş hedefi"],
              ["sup", "Anlık Destek",   "37.00–37.10","Günlük kapanış — psikolojik zemin"],
              ["sup", "Uzak Destek",    "40.57 TL",   "MAV 233 — uzun vadeli destek"],
              ["sup", "Derin Destek",   "35.00 TL",   "Psikolojik eşik — grafikte görünür alan"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="magen-sr-cell" key={l}>
                <div className={`magen-sr-type ${t}`}>{l}</div>
                <div className="magen-sr-price">{p}</div>
                <div className="magen-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="magen-section-title"><span className="magen-section-num">05</span> Genel Değerlendirme</div>
          <div className="magen-narrative">
            <h3>Kısa Vadeli Görünüm: Çok Negatif — Panik Satışı Sonrası Dip Bölgesi</h3>
            <p>MAGEN, uzun süren güçlü bir yükseliş trendinden <strong>günlük -%10</strong> sert düşüşle kopuş yaşadı. <strong>37.10 TL</strong> kapanışıyla fiyat, Bollinger alt bandının (41.75) dahi altına sarkmış durumda — bu durum teknik açıdan aşırı tepki ve panik satışı olarak değerlendirilebilir.</p>
            <p>MAV 5&apos;ten MAV 233&apos;e tüm hareketli ortalamalar (40.57–56.35 TL) fiyatın üzerinde direnç oluşturuyor. <strong>MAV 233 (40.57) bile fiyatın üzerinde</strong> — bu durum uzun vadeli trendin de bozulduğuna işaret ediyor.</p>
            <p>RSI 23.64, Stochastic K 1.55 — her iki indikatör de <em>tarihsel dip aşırı satım bölgesinde</em>. Bu seviyelerden teknik tepki ihtimali yüksek olmakla birlikte, <em>MACD −4.23 ile çok derin negatif bölgede ve genişliyor</em> — momentum henüz yukarı dönmüş değil.</p>
            <p>Kısa vadeli kritik soru: <strong>Bu düşüş şirkete özgü bir gelişmeden mi, yoksa piyasa baskısından mı kaynaklanıyor?</strong> Teknik analiz açısından 41.75 TL Bollinger alt bandına geri dönüş normalleşme; bunun da altında kalıcılık ise yeni dip arayışı anlamına gelir.</p>
          </div>

          {/* SENARYO */}
          <div className="magen-section-title"><span className="magen-section-num">06</span> Senaryo Analizi</div>
          <div className="magen-scenario-grid">
            <div className="magen-scenario-card bull">
              <div className="magen-scenario-head">🟢 Toparlanma Senaryosu</div>
              <ul>
                <li>37.00 TL desteğinin korunması ve stabilizasyon</li>
                <li>RSI&apos;ın 30 üstüne çıkması — teknik toparlanma başlangıcı</li>
                <li>Stochastic K&apos;nın D&apos;yi yukarı kesmesi</li>
                <li>41.75 TL Bollinger alt bandının geri alınması</li>
                <li>Hedef: 45.33 TL MAV 5 bölgesi</li>
              </ul>
            </div>
            <div className="magen-scenario-card bear">
              <div className="magen-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>37.00 TL desteğinin de kırılması</li>
                <li>Satış baskısının devam etmesi — yüksek hacim</li>
                <li>RSI&apos;ın 20 altına inmesi — panik derinleşmesi</li>
                <li>Bollinger alt bandı (41.75) dirençte kalması</li>
                <li>Hedef: 35.00 TL psikolojik destek testi</li>
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
          <HisseProfili kod="magen" />

          <div className="magen-disclaimer">
            <div className="magen-disclaimer-head">
              <div className="magen-disclaimer-icon">⚠</div>
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
