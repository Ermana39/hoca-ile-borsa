import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KLRHO Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Kiler Holding (KLRHO) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/klrho",
  },
};

export default function KlrhoGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="klrho" tarih="2026-06-10" />

      <style>{`
        .klrho-wrap *, .klrho-wrap *::before, .klrho-wrap *::after { box-sizing:border-box; margin:0; padding:0; }
        .klrho-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px; line-height:1.65; min-height:100vh;
        }
        .klrho-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .klrho-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .klrho-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .klrho-hero-title em { color:var(--accent); font-style:normal; }
        .klrho-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .klrho-price-main { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,5vw,4rem); color:var(--text-bright); letter-spacing:.04em; line-height:1; }
        .klrho-price-currency { font-size:.55em; color:var(--text-dim); vertical-align:super; }
        .klrho-main { max-width:1280px; margin:0 auto; padding:2.5rem 2rem 4rem; }
        .klrho-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .klrho-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .klrho-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .klrho-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .klrho-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .klrho-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .klrho-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .klrho-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .klrho-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .klrho-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .klrho-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .klrho-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .klrho-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .klrho-chart-img-wrap { position:relative; padding:1rem; }
        .klrho-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .klrho-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .klrho-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .klrho-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .klrho-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .klrho-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .klrho-icon.blue  { background:rgba(10,187,255,.12); }
        .klrho-icon.gold  { background:rgba(245,200,66,.12); }
        .klrho-icon.green { background:rgba(0,208,104,.12); }
        .klrho-icon.red   { background:rgba(255,77,106,.12); }
        .klrho-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .klrho-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .klrho-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .klrho-ind-row:last-child { border-bottom:none; }
        .klrho-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .klrho-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .klrho-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .klrho-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .klrho-ind-signal.sell    { background:rgba(255,61,85,.12);  color:var(--red);   border:1px solid rgba(255,61,85,.3); }
        .klrho-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .klrho-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .klrho-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .klrho-progress-fill { height:100%; border-radius:3px; }
        .klrho-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .klrho-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .klrho-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .klrho-ma-table tr:last-child td { border-bottom:none; }
        .klrho-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .klrho-above { color:var(--green); }
        .klrho-below { color:var(--red); }
        .klrho-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .klrho-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .klrho-bol-bands { flex:1; position:relative; height:48px; }
        .klrho-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .klrho-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .klrho-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .klrho-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .klrho-bol-marker {
          position:absolute; left:0; right:0; height:2px;
          background:var(--red); box-shadow:0 0 6px var(--red);
          /* 95.00 fiyat, üst 122.96, alt 84.87 → (122.96-95.00)/(122.96-84.87) = 0.733 */
          top:calc(100% * (122.96 - 95.00) / (122.96 - 84.87));
        }
        .klrho-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .klrho-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .klrho-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .klrho-sr-cell:hover { background:var(--bg3); }
        .klrho-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .klrho-sr-type.res { color:var(--red); }
        .klrho-sr-type.sup { color:var(--green); }
        .klrho-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .klrho-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .klrho-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--red); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .klrho-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .klrho-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .klrho-narrative p:last-child { margin-bottom:0; }
        .klrho-narrative strong { color:var(--accent); font-weight:600; }
        .klrho-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .klrho-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .klrho-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .klrho-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .klrho-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .klrho-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .klrho-scenario-card.bull .klrho-scenario-head { color:var(--green); }
        .klrho-scenario-card.bear .klrho-scenario-head { color:var(--red); }
        .klrho-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .klrho-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .klrho-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .klrho-scenario-card.bull li::before { color:var(--green); }
        .klrho-scenario-card.bear li::before { color:var(--red); }
        .klrho-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .klrho-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .klrho-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .klrho-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .klrho-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .klrho-disclaimer p+p { margin-top:.4rem; }
        .klrho-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .klrho-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .klrho-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .klrho-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .klrho-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:768px){ .klrho-two-col{ grid-template-columns:1fr; } }
        @media(max-width:600px){
          .klrho-hero{ padding:2rem 1rem 1.5rem; }
          .klrho-main{ padding:1.5rem 1rem 3rem; }
          .klrho-footer{ padding:1.2rem 1rem; }
          .klrho-scenario-grid{ grid-template-columns:1fr; }
          .klrho-sr-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="klrho-wrap">

        {/* HERO */}
        <section className="klrho-hero">
          <div className="klrho-hero-label">Teknik Analiz Raporu</div>
          <h1 className="klrho-hero-title">KİLER HOLDİNG<br /><em>KLRHO</em></h1>
          <p className="klrho-hero-sub">
            BIST: KLRHO &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="klrho-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="klrho-price-currency">₺</span>95.00
          </div>
        </section>

        <main className="klrho-main">

          {/* CHART */}
          <div className="klrho-section-title"><span className="klrho-section-num">01</span> Grafik</div>
          <div className="klrho-chart-wrap">
            <div className="klrho-chart-header">
              <span className="klrho-chart-title-text">KLRHO — Günlük Mum Grafiği</span>
              <div className="klrho-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`klrho-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="klrho-chart-img-wrap">
              <img src="/klrho-analiz.webp" alt="KLRHO Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="klrho-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="klrho-section-title"><span className="klrho-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="klrho-bol-card">
            <div className="klrho-bol-visual">
              <div className="klrho-bol-bands">
                <div className="klrho-bol-fill" /><div className="klrho-bol-upper" />
                <div className="klrho-bol-mid" /><div className="klrho-bol-lower" />
                <div className="klrho-bol-marker" />
              </div>
              <div className="klrho-bol-labels">
                <span>BOL U: 122.96</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 103.92</span>
                <span>BOL D: 84.87</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "122.96 TL", "Güçlü Direnç",  "sell"],
              ["Orta Band / MAV 20", "103.92 TL", "Direnç",        "sell"],
              ["Alt Band (BOL D)",   "84.87 TL",  "Kritik Destek", "neutral"],
              ["Bant Genişliği",     "38.09 TL",  "Yüksek Volatilite","neutral"],
              ["Fiyatın Konumu",     "95.00 TL",  "Orta-Alt Bant", "sell"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="klrho-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="klrho-ind-name">{n}</span>
                <span className="klrho-ind-val">{v}</span>
                <span className={`klrho-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop:"1rem", fontSize:".85rem", color:"var(--text)", lineHeight:1.7 }}>
              Fiyat Bollinger orta bandı (103.92) ile alt band (84.87) arasında konumlanmış. Geniş bant genişliği (38.09 TL) <strong style={{ color:"var(--warn)" }}>yüksek volatilite ortamına</strong> işaret ediyor. 103.92 TL orta bandının geri alınması toparlanma için ilk kritik eşik.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="klrho-section-title"><span className="klrho-section-num">03</span> İndikatörler</div>
          <div className="klrho-two-col">

            <div className="klrho-analysis-card">
              <div className="klrho-analysis-card-head">
                <div className="klrho-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="klrho-analysis-card-body">
                <div className="klrho-ind-row"><span className="klrho-ind-name">StocK</span><span className="klrho-ind-val">59.63</span><span className="klrho-ind-signal neutral">Nötr</span></div>
                <div className="klrho-ind-row"><span className="klrho-ind-name">StocD</span><span className="klrho-ind-val">68.19</span><span className="klrho-ind-signal neutral">Yüksek</span></div>
                <div className="klrho-ind-row" style={{ borderBottom:"none" }}><span className="klrho-ind-name">Konum</span><span className="klrho-ind-val">K &lt; D</span><span className="klrho-ind-signal sell">Ölüm Kes.</span></div>
                <div>
                  <div className="klrho-progress-label"><span>Aşırı Satım</span><span>K: 59.63</span><span>Aşırı Alım</span></div>
                  <div className="klrho-progress-bar"><div className="klrho-progress-fill" style={{ width:"59.63%", background:"linear-gradient(90deg,var(--warn),var(--red))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>K çizgisi D&apos;nin altına geçmiş — ölüm kesişimi aktif. Orta bölgeden gerçekleşen bu kesişim satış baskısının devamına işaret ediyor.</p>
              </div>
            </div>

            <div className="klrho-analysis-card">
              <div className="klrho-analysis-card-head">
                <div className="klrho-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="klrho-analysis-card-body">
                <div className="klrho-ind-row"><span className="klrho-ind-name">MACD</span><span className="klrho-ind-val">−5.1969</span><span className="klrho-ind-signal sell">NEGATİF</span></div>
                <div className="klrho-ind-row"><span className="klrho-ind-name">Trigger</span><span className="klrho-ind-val">−6.5124</span><span className="klrho-ind-signal neutral">Toparlanıyor</span></div>
                <div className="klrho-ind-row" style={{ borderBottom:"none" }}><span className="klrho-ind-name">Konum</span><span className="klrho-ind-val">MACD &gt; Trigger</span><span className="klrho-ind-signal neutral">İyileşme</span></div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>MACD negatif olmakla birlikte trigger çizgisinin üzerinde — bu iyileşme sinyali. Histogram pozitife döndüğünde toparlanma teyit edilmiş olacak.</p>
              </div>
            </div>

            <div className="klrho-analysis-card">
              <div className="klrho-analysis-card-head">
                <div className="klrho-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="klrho-analysis-card-body">
                <div className="klrho-ind-row"><span className="klrho-ind-name">RSI Değeri</span><span className="klrho-ind-val">40.23</span><span className="klrho-ind-signal neutral">Zayıf</span></div>
                <div className="klrho-ind-row" style={{ borderBottom:"none" }}><span className="klrho-ind-name">Bölge</span><span className="klrho-ind-val">Nötr-Alt</span><span className="klrho-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="klrho-progress-label"><span>30 (A.Satım)</span><span>40.23</span><span>70 (A.Alım)</span></div>
                  <div className="klrho-progress-bar"><div className="klrho-progress-fill" style={{ width:"40.23%", background:"linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--text-dim)" }}>RSI 50 altında zayıf bölgede. 30 eşiğine yaklaşmadan toparlanırsa olumlu; 30 altına inerse aşırı satım bölgesi devreye girebilir.</p>
              </div>
            </div>

            <div className="klrho-analysis-card">
              <div className="klrho-analysis-card-head">
                <div className="klrho-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="klrho-analysis-card-body" style={{ paddingTop:".6rem", paddingBottom:".6rem" }}>
                <table className="klrho-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "99.98",  "Fiyat Altında ▼", false],
                      ["MAV 13", "101.49", "Fiyat Altında ▼", false],
                      ["MAV 21", "103.80", "Fiyat Altında ▼", false],
                      ["MAV 55", "137.11", "Fiyat Altında ▼", false],
                      ["MAV 89", "167.08", "Fiyat Altında ▼", false],
                      ["MAV 144","182.12", "Fiyat Altında ▼", false],
                      ["MAV 233","173.28", "Fiyat Altında ▼", false],
                    ] as [string,string,string,boolean][]).map(([p,v,d,above]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={above ? "klrho-above" : "klrho-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="klrho-section-title"><span className="klrho-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="klrho-sr-grid">
            {([
              ["res", "Uzak Direnç",    "167–182 TL", "MAV 89/144 bölgesi — uzun vadeli tavan"],
              ["res", "Güçlü Direnç",   "122.96 TL",  "Bollinger üst bandı"],
              ["res", "Kritik Direnç",  "103.92 TL",  "Bollinger orta bandı / MAV 20–21"],
              ["res", "İlk Direnç",     "99.98–101.49","MAV 5/13 — kısa vadeli tavan"],
              ["sup", "Anlık Destek",   "93.95–95.00", "Günlük dip ve kapanış bölgesi"],
              ["sup", "Kritik Destek",  "84.87 TL",   "Bollinger alt bandı — kırılırsa kritik"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="klrho-sr-cell" key={l}>
                <div className={`klrho-sr-type ${t}`}>{l}</div>
                <div className="klrho-sr-price">{p}</div>
                <div className="klrho-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="klrho-section-title"><span className="klrho-section-num">05</span> Genel Değerlendirme</div>
          <div className="klrho-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif — MACD&apos;de İyileşme Sinyali</h3>
            <p>KLRHO, Aralık 2025&apos;te gördüğü ~690 TL zirvesinden bu yana sert bir düşüş trendi içinde. <strong>95.00 TL</strong> kapanışıyla MAV 5&apos;ten MAV 233&apos;e tüm hareketli ortalamalar fiyatın üzerinde konumlanmış durumda. Ortalamalar 99.98–182.12 TL bandında yoğunlaşmış ve güçlü direnç bölgesi oluşturmuş.</p>
            <p>Bollinger Bantları açısından fiyat <strong>orta band (103.92) ile alt band (84.87) arasında</strong>. Bant genişliği 38.09 TL ile yüksek volatiliteye işaret ediyor. 103.92 TL orta bandı kısa vadeli toparlanma için ilk kritik hedef.</p>
            <p>Olumlu bir gelişme olarak <em>MACD trigger çizgisinin üzerine çıkmış</em> (−5.20 &gt; −6.51) — bu iyileşme sinyali izlenmeli. Stochastic&apos;te ise ölüm kesişimi aktif; RSI 40.23 ile zayıf bölgede. <em>İndikatörler karışık sinyal veriyor</em>.</p>
            <p>Kısa vadeli kritik soru: <strong>95.00 TL desteği korunacak mı?</strong> Kırılma halinde 84.87 TL Bollinger alt bandı test edilebilir. Korunma ve MAV 5 (99.98) üstüne dönüş halinde kısa vadeli tepki rallisi mümkün.</p>
          </div>

          {/* SENARYO */}
          <div className="klrho-section-title"><span className="klrho-section-num">06</span> Senaryo Analizi</div>
          <div className="klrho-scenario-grid">
            <div className="klrho-scenario-card bull">
              <div className="klrho-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>93.95–95.00 TL destek bölgesinin korunması</li>
                <li>MACD&apos;nin sıfır çizgisine yaklaşması</li>
                <li>99.98 TL MAV 5 seviyesinin geri alınması</li>
                <li>Stochastic K&apos;nın D&apos;yi yukarı kesmesi</li>
                <li>Hedef: 103.92 TL Bollinger orta bandı</li>
              </ul>
            </div>
            <div className="klrho-scenario-card bear">
              <div className="klrho-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>93.95 TL günlük dip altında kapanış</li>
                <li>RSI&apos;ın 30 aşırı satım bölgesine inmesi</li>
                <li>Stochastic K&apos;nın 20 altına sarkması</li>
                <li>MACD iyileşmesinin geri dönmesi</li>
                <li>Hedef: 84.87 TL Bollinger alt bandı testi</li>
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
          <HisseProfili kod="klrho" />

          <div className="klrho-disclaimer">
            <div className="klrho-disclaimer-head">
              <div className="klrho-disclaimer-icon">⚠</div>
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
