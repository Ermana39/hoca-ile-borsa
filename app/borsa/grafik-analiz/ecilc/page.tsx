import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";
import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECILC Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Eczacıbaşı İlaç (ECILC) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/ecilc",
  },
};

export default function EcilcGrafikAnaliz() {
  return (
    <>

      <GrafikAnalizJsonLd kod="ecilc" tarih="2026-06-08" />

      <style>{`
        .ecilc-wrap *, .ecilc-wrap *::before, .ecilc-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ecilc-wrap {
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
          line-height: 92.21;
          min-height: 100vh;
        }

        .ecilc-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .ecilc-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ecilc-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ecilc-hero-title em { color: var(--accent); font-style: normal; }
        .ecilc-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ecilc-price-block { text-align: right; }
        .ecilc-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ecilc-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .ecilc-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .ecilc-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ecilc-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ecilc-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .ecilc-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ecilc-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ecilc-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ecilc-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ecilc-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ecilc-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ecilc-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ecilc-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ecilc-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ecilc-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ecilc-chart-img-wrap { position: relative; padding: 1rem; }
        .ecilc-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ecilc-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .ecilc-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .ecilc-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .ecilc-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ecilc-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .ecilc-icon.blue   { background: rgba(10,187,255,.12); }
        .ecilc-icon.gold   { background: rgba(245,200,66,.12); }
        .ecilc-icon.green  { background: rgba(0,208,104,.12); }
        .ecilc-icon.red    { background: rgba(255,77,106,.12); }
        .ecilc-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .ecilc-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .ecilc-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ecilc-ind-row:last-child { border-bottom: none; }
        .ecilc-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ecilc-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ecilc-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .ecilc-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ecilc-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ecilc-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .ecilc-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .ecilc-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .ecilc-progress-fill { height: 100%; border-radius: 3px; }

        .ecilc-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ecilc-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .ecilc-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ecilc-ma-table tr:last-child td { border-bottom: none; }
        .ecilc-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ecilc-above { color: var(--green); }
        .ecilc-below { color: var(--red); }

        .ecilc-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .ecilc-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .ecilc-bol-bands { flex: 1; position: relative; height: 48px; }
        .ecilc-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ecilc-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ecilc-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ecilc-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .ecilc-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (91.23 - 84.45) / (91.23 - 79.57));
        }
        .ecilc-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .ecilc-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .ecilc-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ecilc-sr-cell:hover { background: var(--bg3); }
        .ecilc-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .ecilc-sr-type.res { color: var(--red); }
        .ecilc-sr-type.sup { color: var(--green); }
        .ecilc-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ecilc-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .ecilc-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ecilc-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .ecilc-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ecilc-narrative p:last-child { margin-bottom: 0; }
        .ecilc-narrative strong { color: var(--accent); font-weight: 600; }
        .ecilc-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .ecilc-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ecilc-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ecilc-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ecilc-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ecilc-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .ecilc-scenario-card.bull .ecilc-scenario-head { color: var(--green); }
        .ecilc-scenario-card.bear .ecilc-scenario-head { color: var(--red); }
        .ecilc-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ecilc-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ecilc-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ecilc-scenario-card.bull li::before { color: var(--green); }
        .ecilc-scenario-card.bear li::before { color: var(--red); }

        .ecilc-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .ecilc-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ecilc-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .ecilc-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ecilc-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ecilc-disclaimer p + p { margin-top: .4rem; }

        .ecilc-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .ecilc-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ecilc-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ecilc-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ecilc-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .ecilc-hero { grid-template-columns: 1fr; }
          .ecilc-price-block { text-align: left; }
        }
        @media(max-width:768px) { .ecilc-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .ecilc-hero   { padding: 2rem 1rem 1.5rem; }
          .ecilc-main   { padding: 1.5rem 1rem 3rem; }
          .ecilc-footer { padding: 1.2rem 1rem; }
          .ecilc-scenario-grid { grid-template-columns: 1fr; }
          .ecilc-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ecilc-wrap">
        <section className="ecilc-hero">
          <div>
            <div className="ecilc-hero-label">Teknik Analiz Raporu</div>
            <h1 className="ecilc-hero-title">ECILC<br /><em>İLAÇ</em></h1>
            <p className="ecilc-hero-sub">
              BIST: ECILC &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="ecilc-price-block">
            <div className="ecilc-price-main"><span className="ecilc-price-currency">₺</span>84.45</div>
          </div>
        </section>

        <main className="ecilc-main">
          <div className="ecilc-section-title"><span className="ecilc-section-num">01</span> Grafik</div>
          <div className="ecilc-chart-wrap">
            <div className="ecilc-chart-header">
              <span className="ecilc-chart-title-text">ECILC — Günlük Mum Grafiği</span>
              <div className="ecilc-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`ecilc-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="ecilc-chart-img-wrap">
              <img
                src="/ecilc-analiz.webp"
                alt="ECILC Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.06.2026"
                loading="lazy"
              />
              <div className="ecilc-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="ecilc-section-title"><span className="ecilc-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ecilc-bol-card">
            <div className="ecilc-bol-visual">
              <div className="ecilc-bol-bands">
                <div className="ecilc-bol-fill" />
                <div className="ecilc-bol-upper" />
                <div className="ecilc-bol-mid" />
                <div className="ecilc-bol-lower" />
                <div className="ecilc-bol-marker" />
              </div>
              <div className="ecilc-bol-labels">
                <span>BOL U: 91.23</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 84.50</span>
                <span>BOL D: 79.57</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "91.23 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "84.50 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "79.57 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "5.35 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "84.45 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="ecilc-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="ecilc-ind-name">{r.name}</span>
                <span className="ecilc-ind-val">{r.val}</span>
                <span className={`ecilc-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>84.50 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>79.57 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="ecilc-section-title"><span className="ecilc-section-num">03</span> İndikatörler</div>
          <div className="ecilc-two-col">
            <div className="ecilc-analysis-card">
              <div className="ecilc-analysis-card-head">
                <div className="ecilc-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ecilc-analysis-card-body">
                <div className="ecilc-ind-row"><span className="ecilc-ind-name">StocK</span><span className="ecilc-ind-val">73.9921</span><span className="ecilc-ind-signal neutral">Nötr-Yüksek</span></div>
                <div className="ecilc-ind-row"><span className="ecilc-ind-name">StocD</span><span className="ecilc-ind-val">76.8693</span><span className="ecilc-ind-signal buy">Tepki</span></div>
                <div className="ecilc-ind-row" style={{ borderBottom: "none" }}><span className="ecilc-ind-name">Konum</span><span className="ecilc-ind-val">Nötr-Yüksek</span><span className="ecilc-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ecilc-progress-label"><span>Nötr-Yüksek (0)</span><span>73.9921</span><span>Nötr-Yüksek (100)</span></div>
                  <div className="ecilc-progress-bar"><div className="ecilc-progress-fill" style={{ width: "73.9921%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="ecilc-analysis-card">
              <div className="ecilc-analysis-card-head">
                <div className="ecilc-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ecilc-analysis-card-body">
                <div className="ecilc-ind-row"><span className="ecilc-ind-name">MACD</span><span className="ecilc-ind-val">-1.8308</span><span className="ecilc-ind-signal sell">Negatif</span></div>
                <div className="ecilc-ind-row"><span className="ecilc-ind-name">Trigger</span><span className="ecilc-ind-val">-2.5356</span><span className="ecilc-ind-signal sell">Baskı</span></div>
                <div className="ecilc-ind-row" style={{ borderBottom: "none" }}><span className="ecilc-ind-name">Momentum</span><span className="ecilc-ind-val">Zayıf</span><span className="ecilc-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="ecilc-analysis-card">
              <div className="ecilc-analysis-card-head">
                <div className="ecilc-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ecilc-analysis-card-body">
                <div className="ecilc-ind-row"><span className="ecilc-ind-name">RSI Değeri</span><span className="ecilc-ind-val">45.36</span><span className="ecilc-ind-signal neutral">Zayıf</span></div>
                <div className="ecilc-ind-row" style={{ borderBottom: "none" }}><span className="ecilc-ind-name">Bölge</span><span className="ecilc-ind-val">Nötr-Yüksek-Alt</span><span className="ecilc-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ecilc-progress-label"><span>30 (A.Satım)</span><span>45.36</span><span>70 (A.Alım)</span></div>
                  <div className="ecilc-progress-bar"><div className="ecilc-progress-fill" style={{ width: "45.36%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="ecilc-analysis-card">
              <div className="ecilc-analysis-card-head">
                <div className="ecilc-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ecilc-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ecilc-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","85.06","Fiyat Altında ▼"],
                      ["MAV 13","86.16","Fiyat Altında ▼"],
                      ["MAV 21","86.16","Fiyat Altında ▼"],
                      ["MAV 55","92.21","Fiyat Altında ▼"],
                      ["MAV 89","94.39","Fiyat Altında ▼"],
                      ["MAV 144","92.52","Fiyat Altında ▼"],
                      ["MAV 233","86.05","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "ecilc-above" : "ecilc-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ecilc-section-title"><span className="ecilc-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ecilc-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "85.06–86.16", desc: "MAV 5, MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "86.05–91.23", desc: "MAV 233 ve Bollinger üst bandı" },
              { type: "res", label: "Güçlü Direnç", price: "92.21–94.39", desc: "MAV 55, MAV 144 ve MAV 89 direnç alanı" },
              { type: "sup", label: "Anlık Destek", price: "82.50–84.45", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "79.57 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "75.00–79.57", desc: "Grafikteki son tepki alanı" },
            ].map((s) => (
              <div className="ecilc-sr-cell" key={s.label}>
                <div className={`ecilc-sr-type ${s.type}`}>{s.label}</div>
                <div className="ecilc-sr-price">{s.price}</div>
                <div className="ecilc-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="ecilc-section-title"><span className="ecilc-section-num">05</span> Genel Değerlendirme</div>
          <div className="ecilc-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>ECILC, son kapanışını <strong>84.45 TL</strong> seviyesinde yaparak takip edilen hareketli ortalamaların tamamının altında kalmıştır. Bu yapı kısa ve orta vadeli teknik görünümde baskının sürdüğünü gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>84.50 TL orta bandına</strong> çok yakın ancak altında işlem görüyor. 85.06–86.16 TL bandı geri alınmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>79.57 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 73.99 / 76.87 seviyelerinde ve K çizgisi D çizgisinin altında. <em>MACD negatif bölgede</em> ve trigger çizgisinin altında seyrediyor. RSI 45.36 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>86.16 TL üzeri kapanışlar görünümü rahatlatabilir. 82.50 TL altı kapanışlarda ise 79.57 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="ecilc-section-title"><span className="ecilc-section-num">06</span> Senaryo Analizi</div>
          <div className="ecilc-scenario-grid">
            <div className="ecilc-scenario-card bull">
              <div className="ecilc-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>85.06 TL MAV 5 üzerinde kapanış</li>
                <li>86.16 TL MAV 13 seviyesinin geri alınması</li>
                <li>91.23 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 86.05–94.39 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="ecilc-scenario-card bear">
              <div className="ecilc-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>82.50 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>94.39 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 79.57–75.00 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="ecilc" />

          <div className="ecilc-disclaimer">
            <div className="ecilc-disclaimer-head">
              <div className="ecilc-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>
      </div>
    </>
  );
}
