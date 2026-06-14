import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAPGM Teknik Analiz — 08.010.1626",
  description:
    "DAP Gayrimenkul (DAPGM) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/dapgm",
  },
};

export default function DapgmGrafikAnaliz() {
  return (
    <>

      <style>{`
        .dapgm-wrap *, .dapgm-wrap *::before, .dapgm-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .dapgm-wrap {
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
          line-height: 11.01;
          min-height: 100vh;
        }

        .dapgm-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .dapgm-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .dapgm-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .dapgm-hero-title em { color: var(--accent); font-style: normal; }
        .dapgm-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .dapgm-price-block { text-align: right; }
        .dapgm-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .dapgm-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .dapgm-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .dapgm-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .dapgm-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .dapgm-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .dapgm-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .dapgm-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .dapgm-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .dapgm-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .dapgm-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .dapgm-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .dapgm-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .dapgm-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .dapgm-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .dapgm-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .dapgm-chart-img-wrap { position: relative; padding: 1rem; }
        .dapgm-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .dapgm-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .dapgm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .dapgm-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .dapgm-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .dapgm-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .dapgm-icon.blue   { background: rgba(10,187,255,.12); }
        .dapgm-icon.gold   { background: rgba(245,200,66,.12); }
        .dapgm-icon.green  { background: rgba(0,208,104,.12); }
        .dapgm-icon.red    { background: rgba(255,77,106,.12); }
        .dapgm-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .dapgm-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .dapgm-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .dapgm-ind-row:last-child { border-bottom: none; }
        .dapgm-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .dapgm-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .dapgm-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .dapgm-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .dapgm-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .dapgm-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .dapgm-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .dapgm-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .dapgm-progress-fill { height: 100%; border-radius: 3px; }

        .dapgm-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .dapgm-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .dapgm-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .dapgm-ma-table tr:last-child td { border-bottom: none; }
        .dapgm-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .dapgm-above { color: var(--green); }
        .dapgm-below { color: var(--red); }

        .dapgm-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .dapgm-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .dapgm-bol-bands { flex: 1; position: relative; height: 48px; }
        .dapgm-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .dapgm-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .dapgm-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .dapgm-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .dapgm-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (11.11 - 10.82) / (11.11 - 9.21));
        }
        .dapgm-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .dapgm-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .dapgm-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .dapgm-sr-cell:hover { background: var(--bg3); }
        .dapgm-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .dapgm-sr-type.res { color: var(--red); }
        .dapgm-sr-type.sup { color: var(--green); }
        .dapgm-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .dapgm-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .dapgm-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .dapgm-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .dapgm-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .dapgm-narrative p:last-child { margin-bottom: 0; }
        .dapgm-narrative strong { color: var(--accent); font-weight: 600; }
        .dapgm-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .dapgm-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .dapgm-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .dapgm-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .dapgm-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .dapgm-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .dapgm-scenario-card.bull .dapgm-scenario-head { color: var(--green); }
        .dapgm-scenario-card.bear .dapgm-scenario-head { color: var(--red); }
        .dapgm-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .dapgm-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .dapgm-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .dapgm-scenario-card.bull li::before { color: var(--green); }
        .dapgm-scenario-card.bear li::before { color: var(--red); }

        .dapgm-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .dapgm-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .dapgm-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .dapgm-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .dapgm-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .dapgm-disclaimer p + p { margin-top: .4rem; }

        .dapgm-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .dapgm-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .dapgm-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .dapgm-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .dapgm-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .dapgm-hero { grid-template-columns: 1fr; }
          .dapgm-price-block { text-align: left; }
        }
        @media(max-width:768px) { .dapgm-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .dapgm-hero   { padding: 2rem 1rem 1.5rem; }
          .dapgm-main   { padding: 1.5rem 1rem 3rem; }
          .dapgm-footer { padding: 1.2rem 1rem; }
          .dapgm-scenario-grid { grid-template-columns: 1fr; }
          .dapgm-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="dapgm-wrap">
        <section className="dapgm-hero">
          <div>
            <div className="dapgm-hero-label">Teknik Analiz Raporu</div>
            <h1 className="dapgm-hero-title">DAPGM<br /><em>GAYRİMENKUL</em></h1>
            <p className="dapgm-hero-sub">
              BIST: DAPGM &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="dapgm-price-block">
            <div className="dapgm-price-main"><span className="dapgm-price-currency">₺</span>10.82</div>
          </div>
        </section>

        <main className="dapgm-main">
          <div className="dapgm-section-title"><span className="dapgm-section-num">01</span> Grafik</div>
          <div className="dapgm-chart-wrap">
            <div className="dapgm-chart-header">
              <span className="dapgm-chart-title-text">DAPGM — Günlük Mum Grafiği</span>
              <div className="dapgm-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`dapgm-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="dapgm-chart-img-wrap">
              <img
                src="/dapgm-analiz.webp"
                alt="DAPGM Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.010.1626"
                loading="lazy"
              />
              <div className="dapgm-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="dapgm-section-title"><span className="dapgm-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="dapgm-bol-card">
            <div className="dapgm-bol-visual">
              <div className="dapgm-bol-bands">
                <div className="dapgm-bol-fill" />
                <div className="dapgm-bol-upper" />
                <div className="dapgm-bol-mid" />
                <div className="dapgm-bol-lower" />
                <div className="dapgm-bol-marker" />
              </div>
              <div className="dapgm-bol-labels">
                <span>BOL U: 11.11</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 10.16</span>
                <span>BOL D: 9.21</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "11.11 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "10.16 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "9.21 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "8.20 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "10.82 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="dapgm-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="dapgm-ind-name">{r.name}</span>
                <span className="dapgm-ind-val">{r.val}</span>
                <span className={`dapgm-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>10.16 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>9.21 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="dapgm-section-title"><span className="dapgm-section-num">03</span> İndikatörler</div>
          <div className="dapgm-two-col">
            <div className="dapgm-analysis-card">
              <div className="dapgm-analysis-card-head">
                <div className="dapgm-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="dapgm-analysis-card-body">
                <div className="dapgm-ind-row"><span className="dapgm-ind-name">StocK</span><span className="dapgm-ind-val">90.8077</span><span className="dapgm-ind-signal neutral">Aşırı Alım</span></div>
                <div className="dapgm-ind-row"><span className="dapgm-ind-name">StocD</span><span className="dapgm-ind-val">88.0233</span><span className="dapgm-ind-signal buy">Tepki</span></div>
                <div className="dapgm-ind-row" style={{ borderBottom: "none" }}><span className="dapgm-ind-name">Konum</span><span className="dapgm-ind-val">Aşırı Alım</span><span className="dapgm-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="dapgm-progress-label"><span>Aşırı Alım (0)</span><span>90.8077</span><span>Aşırı Alım (100)</span></div>
                  <div className="dapgm-progress-bar"><div className="dapgm-progress-fill" style={{ width: "90.8077%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="dapgm-analysis-card">
              <div className="dapgm-analysis-card-head">
                <div className="dapgm-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="dapgm-analysis-card-body">
                <div className="dapgm-ind-row"><span className="dapgm-ind-name">MACD</span><span className="dapgm-ind-val">-0.2120</span><span className="dapgm-ind-signal sell">Negatif</span></div>
                <div className="dapgm-ind-row"><span className="dapgm-ind-name">Trigger</span><span className="dapgm-ind-val">-0.3751</span><span className="dapgm-ind-signal sell">Baskı</span></div>
                <div className="dapgm-ind-row" style={{ borderBottom: "none" }}><span className="dapgm-ind-name">Momentum</span><span className="dapgm-ind-val">Zayıf</span><span className="dapgm-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin üzerinde. Bu durum kısa vadeli tepki isteğinin arttığını gösteriyor.</p>
              </div>
            </div>

            <div className="dapgm-analysis-card">
              <div className="dapgm-analysis-card-head">
                <div className="dapgm-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="dapgm-analysis-card-body">
                <div className="dapgm-ind-row"><span className="dapgm-ind-name">RSI Değeri</span><span className="dapgm-ind-val">53.70</span><span className="dapgm-ind-signal neutral">Zayıf</span></div>
                <div className="dapgm-ind-row" style={{ borderBottom: "none" }}><span className="dapgm-ind-name">Bölge</span><span className="dapgm-ind-val">Aşırı Alım-Alt</span><span className="dapgm-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="dapgm-progress-label"><span>30 (A.Satım)</span><span>53.70</span><span>70 (A.Alım)</span></div>
                  <div className="dapgm-progress-bar"><div className="dapgm-progress-fill" style={{ width: "53.70%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="dapgm-analysis-card">
              <div className="dapgm-analysis-card-head">
                <div className="dapgm-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="dapgm-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="dapgm-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","10.37","Fiyat Üstünde ▲"],
                      ["MAV 13","10.31","Fiyat Altında ▼"],
                      ["MAV 21","10.31","Fiyat Üstünde ▲"],
                      ["MAV 55","11.01","Fiyat Altında ▼"],
                      ["MAV 89","11.42","Fiyat Altında ▼"],
                      ["MAV 144","11.67","Fiyat Altında ▼"],
                      ["MAV 233","11.48","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "dapgm-above" : "dapgm-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="dapgm-section-title"><span className="dapgm-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="dapgm-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "11.01–11.11", desc: "MAV 55 ve Bollinger üst bandı" },
              { type: "res", label: "Kritik Direnç", price: "11.42–11.48", desc: "MAV 89 ve MAV 233 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "11.67 TL", desc: "MAV 144 direnç bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "10.37–10.16", desc: "MAV 5 ve Bollinger orta bandı" },
              { type: "sup", label: "Ana Destek", price: "10.31–10.21", desc: "MAV 21 ve MAV 13 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "9.61–9.21", desc: "Günlük dip ve Bollinger alt bandı" },
            ].map((s) => (
              <div className="dapgm-sr-cell" key={s.label}>
                <div className={`dapgm-sr-type ${s.type}`}>{s.label}</div>
                <div className="dapgm-sr-price">{s.price}</div>
                <div className="dapgm-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="dapgm-section-title"><span className="dapgm-section-num">05</span> Genel Değerlendirme</div>
          <div className="dapgm-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>DAPGM, son kapanışını <strong>10.82 TL</strong> seviyesinde yaparak MAV 5, MAV 13 ve MAV 21 ortalamalarının üzerine çıkmıştır. Bu yapı kısa vadede tepki hareketinin güçlendiğini gösteriyor.</p>
            <p>Buna karşın fiyat hâlâ MAV 55, MAV 89, MAV 144 ve MAV 233 altında bulunuyor. Bu nedenle ana görünümde kalıcı güçlenme için özellikle <strong>11.01–11.11 TL</strong> direnç bölgesinin aşılması önemlidir.</p>
            <p>Stochastic göstergesi 90.81 / 88.02 seviyeleriyle aşırı alım bölgesinde ve K çizgisi D çizgisinin üzerinde. <em>MACD negatif bölgede</em> olmasına rağmen trigger çizgisinin üzerinde seyrediyor. RSI 53.70 ile 50 eşiğinin üzerinde kaldığı için kısa vadeli momentum pozitif tarafta.</p>
            <p>11.11 TL üzeri kapanışlar görünümü rahatlatabilir. 10.16 TL altı kapanışlarda ise 10.31–10.21 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="dapgm-section-title"><span className="dapgm-section-num">06</span> Senaryo Analizi</div>
          <div className="dapgm-scenario-grid">
            <div className="dapgm-scenario-card bull">
              <div className="dapgm-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>10.37 TL MAV 5 üzerinde kapanış</li>
                <li>10.31 TL MAV 13 seviyesinin geri alınması</li>
                <li>11.11 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 11.42–11.67 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="dapgm-scenario-card bear">
              <div className="dapgm-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>10.37 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>11.42 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 10.21–9.61 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="dapgm" />

          <div className="dapgm-disclaimer">
            <div className="dapgm-disclaimer-head">
              <div className="dapgm-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="dapgm-footer">
            <div className="dapgm-footer-inner">
              <div className="dapgm-footer-brand">HOCA İLE BORSA</div>
              <div className="dapgm-footer-meta">
                DAPGM Teknik Analiz Raporu<br />
                Hazırlanma: 08.010.1626 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="dapgm-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
