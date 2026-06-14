import Link from "next/link";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PGSUS Teknik Analiz — 07.06.2026",
  description:
    "Pegasus Hava Yolları (PGSUS) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/pgsus",
  },
};

export default function PgsusGrafikAnaliz() {
  return (
    <>


      <style>{`
        .pgsus-wrap *, .pgsus-wrap *::before, .pgsus-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pgsus-wrap {
          --bg:         #080c10;
          --bg2:        #0d1219;
          --bg3:        #111820;
          --border:     #1e2c3a;
          --accent:     #00e5a0;
          --warn:       #ffb930;
          --text:       #cdd8e3;
          --text-dim:   #5a7080;
          --text-bright:#eef4f8;
          --green:      #00d068;
          --red:        #ff3d55;
          --gold:       #f5c842;
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 1.65;
          min-height: 100vh;
        }

        .pgsus-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .pgsus-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .pgsus-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .pgsus-hero-title em { color: var(--accent); font-style: normal; }
        .pgsus-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .pgsus-price-block { text-align: right; }
        .pgsus-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .pgsus-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .pgsus-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .pgsus-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .pgsus-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .pgsus-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .pgsus-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .pgsus-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .pgsus-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .pgsus-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .pgsus-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .pgsus-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .pgsus-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .pgsus-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .pgsus-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .pgsus-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .pgsus-chart-img-wrap { position: relative; padding: 1rem; }
        .pgsus-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .pgsus-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .pgsus-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .pgsus-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .pgsus-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .pgsus-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .pgsus-icon.blue   { background: rgba(10,187,255,.12); }
        .pgsus-icon.gold   { background: rgba(245,200,66,.12); }
        .pgsus-icon.green  { background: rgba(0,208,104,.12); }
        .pgsus-icon.red    { background: rgba(255,77,106,.12); }
        .pgsus-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .pgsus-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .pgsus-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .pgsus-ind-row:last-child { border-bottom: none; }
        .pgsus-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .pgsus-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .pgsus-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .pgsus-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .pgsus-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .pgsus-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .pgsus-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .pgsus-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .pgsus-progress-fill { height: 100%; border-radius: 3px; }

        .pgsus-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .pgsus-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .pgsus-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .pgsus-ma-table tr:last-child td { border-bottom: none; }
        .pgsus-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .pgsus-above { color: var(--green); }
        .pgsus-below { color: var(--red); }

        .pgsus-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .pgsus-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .pgsus-bol-bands { flex: 1; position: relative; height: 48px; }
        .pgsus-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .pgsus-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .pgsus-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .pgsus-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .pgsus-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (188.61 - 168.60) / (188.61 - 161.72));
        }
        .pgsus-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .pgsus-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .pgsus-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .pgsus-sr-cell:hover { background: var(--bg3); }
        .pgsus-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .pgsus-sr-type.res { color: var(--red); }
        .pgsus-sr-type.sup { color: var(--green); }
        .pgsus-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .pgsus-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .pgsus-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .pgsus-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .pgsus-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .pgsus-narrative p:last-child { margin-bottom: 0; }
        .pgsus-narrative strong { color: var(--accent); font-weight: 600; }
        .pgsus-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .pgsus-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .pgsus-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .pgsus-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .pgsus-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .pgsus-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .pgsus-scenario-card.bull .pgsus-scenario-head { color: var(--green); }
        .pgsus-scenario-card.bear .pgsus-scenario-head { color: var(--red); }
        .pgsus-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .pgsus-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .pgsus-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .pgsus-scenario-card.bull li::before { color: var(--green); }
        .pgsus-scenario-card.bear li::before { color: var(--red); }

        .pgsus-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .pgsus-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .pgsus-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .pgsus-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .pgsus-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .pgsus-disclaimer p + p { margin-top: .4rem; }

        .pgsus-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .pgsus-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .pgsus-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .pgsus-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .pgsus-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .pgsus-hero { grid-template-columns: 1fr; }
          .pgsus-price-block { text-align: left; }
        }
        @media(max-width:768px) { .pgsus-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .pgsus-hero   { padding: 2rem 1rem 1.5rem; }
          .pgsus-main   { padding: 1.5rem 1rem 3rem; }
          .pgsus-footer { padding: 1.2rem 1rem; }
          .pgsus-scenario-grid { grid-template-columns: 1fr; }
          .pgsus-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pgsus-wrap">
        <section className="pgsus-hero">
          <div>
            <div className="pgsus-hero-label">Teknik Analiz Raporu</div>
            <h1 className="pgsus-hero-title">PEGASUS<br /><em>HAVA YOLLARI</em></h1>
            <p className="pgsus-hero-sub">
              BIST: PGSUS &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="pgsus-price-block">
            <div className="pgsus-price-main"><span className="pgsus-price-currency">₺</span>168.60</div>
          </div>
        </section>

        <main className="pgsus-main">
          <div className="pgsus-section-title"><span className="pgsus-section-num">01</span> Grafik</div>
          <div className="pgsus-chart-wrap">
            <div className="pgsus-chart-header">
              <span className="pgsus-chart-title-text">PGSUS — Günlük Mum Grafiği</span>
              <div className="pgsus-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`pgsus-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="pgsus-chart-img-wrap">
              <img
                src="/pgsus-analiz.webp"
                alt="PGSUS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="pgsus-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="pgsus-section-title"><span className="pgsus-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="pgsus-bol-card">
            <div className="pgsus-bol-visual">
              <div className="pgsus-bol-bands">
                <div className="pgsus-bol-fill" />
                <div className="pgsus-bol-upper" />
                <div className="pgsus-bol-mid" />
                <div className="pgsus-bol-lower" />
                <div className="pgsus-bol-marker" />
              </div>
              <div className="pgsus-bol-labels">
                <span>BOL U: 188.61</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 175.17</span>
                <span>BOL D: 161.72</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "188.61 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "175.17 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "161.72 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "26.89 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "168.60 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="pgsus-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="pgsus-ind-name">{r.name}</span>
                <span className="pgsus-ind-val">{r.val}</span>
                <span className={`pgsus-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>175.17 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>161.72 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="pgsus-section-title"><span className="pgsus-section-num">03</span> İndikatörler</div>
          <div className="pgsus-two-col">
            <div className="pgsus-analysis-card">
              <div className="pgsus-analysis-card-head">
                <div className="pgsus-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="pgsus-analysis-card-body">
                <div className="pgsus-ind-row"><span className="pgsus-ind-name">StocK</span><span className="pgsus-ind-val">76.85</span><span className="pgsus-ind-signal neutral">Nötr</span></div>
                <div className="pgsus-ind-row"><span className="pgsus-ind-name">StocD</span><span className="pgsus-ind-val">69.83</span><span className="pgsus-ind-signal buy">Tepki</span></div>
                <div className="pgsus-ind-row" style={{ borderBottom: "none" }}><span className="pgsus-ind-name">Konum</span><span className="pgsus-ind-val">Nötr-Yüksek</span><span className="pgsus-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="pgsus-progress-label"><span>Aşırı Satım (0)</span><span>76.85</span><span>Aşırı Alım (100)</span></div>
                  <div className="pgsus-progress-bar"><div className="pgsus-progress-fill" style={{ width: "76.85%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-yüksek bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyat ortalamaların tamamının altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="pgsus-analysis-card">
              <div className="pgsus-analysis-card-head">
                <div className="pgsus-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="pgsus-analysis-card-body">
                <div className="pgsus-ind-row"><span className="pgsus-ind-name">MACD</span><span className="pgsus-ind-val">-3.7010</span><span className="pgsus-ind-signal sell">Negatif</span></div>
                <div className="pgsus-ind-row"><span className="pgsus-ind-name">Trigger</span><span className="pgsus-ind-val">-3.5016</span><span className="pgsus-ind-signal sell">Baskı</span></div>
                <div className="pgsus-ind-row" style={{ borderBottom: "none" }}><span className="pgsus-ind-name">Momentum</span><span className="pgsus-ind-val">Zayıf</span><span className="pgsus-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="pgsus-analysis-card">
              <div className="pgsus-analysis-card-head">
                <div className="pgsus-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="pgsus-analysis-card-body">
                <div className="pgsus-ind-row"><span className="pgsus-ind-name">RSI Değeri</span><span className="pgsus-ind-val">41.27</span><span className="pgsus-ind-signal neutral">Zayıf</span></div>
                <div className="pgsus-ind-row" style={{ borderBottom: "none" }}><span className="pgsus-ind-name">Bölge</span><span className="pgsus-ind-val">Nötr-Alt</span><span className="pgsus-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="pgsus-progress-label"><span>30 (A.Satım)</span><span>41.27</span><span>70 (A.Alım)</span></div>
                  <div className="pgsus-progress-bar"><div className="pgsus-progress-fill" style={{ width: "41.27%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="pgsus-analysis-card">
              <div className="pgsus-analysis-card-head">
                <div className="pgsus-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="pgsus-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="pgsus-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","170.01","Fiyat Altında ▼"],
                      ["MAV 13","172.05","Fiyat Altında ▼"],
                      ["MAV 21","174.29","Fiyat Altında ▼"],
                      ["MAV 55","180.62","Fiyat Altında ▼"],
                      ["MAV 89","185.90","Fiyat Altında ▼"],
                      ["MAV 144","193.61","Fiyat Altında ▼"],
                      ["MAV 233","202.15","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "pgsus-above" : "pgsus-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="pgsus-section-title"><span className="pgsus-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="pgsus-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "170.01–172.05", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "174.29–175.17", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "180.62–188.61", desc: "MAV 55 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "167.70–168.60", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "161.72 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "155.00–160.00", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="pgsus-sr-cell" key={s.label}>
                <div className={`pgsus-sr-type ${s.type}`}>{s.label}</div>
                <div className="pgsus-sr-price">{s.price}</div>
                <div className="pgsus-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="pgsus-section-title"><span className="pgsus-section-num">05</span> Genel Değerlendirme</div>
          <div className="pgsus-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>PGSUS, son kapanışını <strong>168.60 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>175.17 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 170.01–175.17 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>167.70 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>202.15–161.72 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="pgsus-section-title"><span className="pgsus-section-num">06</span> Senaryo Analizi</div>
          <div className="pgsus-scenario-grid">
            <div className="pgsus-scenario-card bull">
              <div className="pgsus-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>170.01 TL MAV 5 üzerinde kapanış</li>
                <li>172.05 TL MAV 13 seviyesinin geri alınması</li>
                <li>175.17 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 175.17–180.62 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="pgsus-scenario-card bear">
              <div className="pgsus-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>167.70 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>161.72 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 161.72 TL destek testi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="pgsus" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="pgsus-disclaimer">
            <div className="pgsus-disclaimer-head">
              <div className="pgsus-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="pgsus-footer">
            <div className="pgsus-footer-inner">
              <div className="pgsus-footer-brand">HOCA İLE BORSA</div>
              <div className="pgsus-footer-meta">
                PGSUS Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="pgsus-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
