import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ULKER Teknik Analiz — 07.06.2026",
  description:
    "Ülker (ULKER) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/ulker",
  },
};

export default function UlkerGrafikAnaliz() {
  return (
    <>


      <style>{`
        .ulker-wrap *, .ulker-wrap *::before, .ulker-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ulker-wrap {
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

        .ulker-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .ulker-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ulker-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ulker-hero-title em { color: var(--accent); font-style: normal; }
        .ulker-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ulker-price-block { text-align: right; }
        .ulker-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ulker-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .ulker-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .ulker-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ulker-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ulker-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .ulker-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ulker-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ulker-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ulker-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ulker-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ulker-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ulker-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ulker-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ulker-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ulker-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ulker-chart-img-wrap { position: relative; padding: 1rem; }
        .ulker-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ulker-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .ulker-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .ulker-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .ulker-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ulker-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .ulker-icon.blue   { background: rgba(10,187,255,.12); }
        .ulker-icon.gold   { background: rgba(245,200,66,.12); }
        .ulker-icon.green  { background: rgba(0,208,104,.12); }
        .ulker-icon.red    { background: rgba(255,77,106,.12); }
        .ulker-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .ulker-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .ulker-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ulker-ind-row:last-child { border-bottom: none; }
        .ulker-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ulker-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ulker-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .ulker-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ulker-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ulker-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .ulker-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .ulker-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .ulker-progress-fill { height: 100%; border-radius: 3px; }

        .ulker-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ulker-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .ulker-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ulker-ma-table tr:last-child td { border-bottom: none; }
        .ulker-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ulker-above { color: var(--green); }
        .ulker-below { color: var(--red); }

        .ulker-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .ulker-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .ulker-bol-bands { flex: 1; position: relative; height: 48px; }
        .ulker-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ulker-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ulker-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ulker-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .ulker-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (133.73 - 115.80) / (133.73 - 109.56));
        }
        .ulker-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .ulker-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .ulker-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ulker-sr-cell:hover { background: var(--bg3); }
        .ulker-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .ulker-sr-type.res { color: var(--red); }
        .ulker-sr-type.sup { color: var(--green); }
        .ulker-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ulker-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .ulker-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ulker-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .ulker-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ulker-narrative p:last-child { margin-bottom: 0; }
        .ulker-narrative strong { color: var(--accent); font-weight: 600; }
        .ulker-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .ulker-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ulker-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ulker-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ulker-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ulker-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .ulker-scenario-card.bull .ulker-scenario-head { color: var(--green); }
        .ulker-scenario-card.bear .ulker-scenario-head { color: var(--red); }
        .ulker-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ulker-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ulker-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ulker-scenario-card.bull li::before { color: var(--green); }
        .ulker-scenario-card.bear li::before { color: var(--red); }

        .ulker-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .ulker-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ulker-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .ulker-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ulker-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ulker-disclaimer p + p { margin-top: .4rem; }

        .ulker-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .ulker-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ulker-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ulker-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ulker-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .ulker-hero { grid-template-columns: 1fr; }
          .ulker-price-block { text-align: left; }
        }
        @media(max-width:768px) { .ulker-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .ulker-hero   { padding: 2rem 1rem 1.5rem; }
          .ulker-main   { padding: 1.5rem 1rem 3rem; }
          .ulker-footer { padding: 1.2rem 1rem; }
          .ulker-scenario-grid { grid-template-columns: 1fr; }
          .ulker-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ulker-wrap">
        <section className="ulker-hero">
          <div>
            <div className="ulker-hero-label">Teknik Analiz Raporu</div>
            <h1 className="ulker-hero-title">ÜLKER<br /><em>GIDA</em></h1>
            <p className="ulker-hero-sub">
              BIST: ULKER &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="ulker-price-block">
            <div className="ulker-price-main"><span className="ulker-price-currency">₺</span>115.80</div>
          </div>
        </section>

        <main className="ulker-main">
          <div className="ulker-section-title"><span className="ulker-section-num">01</span> Grafik</div>
          <div className="ulker-chart-wrap">
            <div className="ulker-chart-header">
              <span className="ulker-chart-title-text">ULKER — Günlük Mum Grafiği</span>
              <div className="ulker-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`ulker-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="ulker-chart-img-wrap">
              <img
                src="/ulker-analiz.webp"
                alt="ULKER Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="ulker-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="ulker-section-title"><span className="ulker-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ulker-bol-card">
            <div className="ulker-bol-visual">
              <div className="ulker-bol-bands">
                <div className="ulker-bol-fill" />
                <div className="ulker-bol-upper" />
                <div className="ulker-bol-mid" />
                <div className="ulker-bol-lower" />
                <div className="ulker-bol-marker" />
              </div>
              <div className="ulker-bol-labels">
                <span>BOL U: 133.73</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 121.65</span>
                <span>BOL D: 109.56</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "133.73 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "121.65 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "109.56 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "5.42 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "115.80 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="ulker-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="ulker-ind-name">{r.name}</span>
                <span className="ulker-ind-val">{r.val}</span>
                <span className={`ulker-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>121.65 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>109.56 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="ulker-section-title"><span className="ulker-section-num">03</span> İndikatörler</div>
          <div className="ulker-two-col">
            <div className="ulker-analysis-card">
              <div className="ulker-analysis-card-head">
                <div className="ulker-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ulker-analysis-card-body">
                <div className="ulker-ind-row"><span className="ulker-ind-name">StocK</span><span className="ulker-ind-val">36.69</span><span className="ulker-ind-signal neutral">Nötr</span></div>
                <div className="ulker-ind-row"><span className="ulker-ind-name">StocD</span><span className="ulker-ind-val">33.21</span><span className="ulker-ind-signal buy">Tepki</span></div>
                <div className="ulker-ind-row" style={{ borderBottom: "none" }}><span className="ulker-ind-name">Konum</span><span className="ulker-ind-val">Zayıf-Nötr</span><span className="ulker-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ulker-progress-label"><span>Aşırı Satım (0)</span><span>36.69</span><span>Aşırı Alım (100)</span></div>
                  <div className="ulker-progress-bar"><div className="ulker-progress-fill" style={{ width: "36.69%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic zayıf-nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyatın ortalamaların tamamının altında kalması nedeniyle teyit zayıf.</p>
              </div>
            </div>

            <div className="ulker-analysis-card">
              <div className="ulker-analysis-card-head">
                <div className="ulker-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ulker-analysis-card-body">
                <div className="ulker-ind-row"><span className="ulker-ind-name">MACD</span><span className="ulker-ind-val">-1.9773</span><span className="ulker-ind-signal sell">Negatif</span></div>
                <div className="ulker-ind-row"><span className="ulker-ind-name">Trigger</span><span className="ulker-ind-val">-1.1716</span><span className="ulker-ind-signal sell">Baskı</span></div>
                <div className="ulker-ind-row" style={{ borderBottom: "none" }}><span className="ulker-ind-name">Momentum</span><span className="ulker-ind-val">Zayıf</span><span className="ulker-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="ulker-analysis-card">
              <div className="ulker-analysis-card-head">
                <div className="ulker-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ulker-analysis-card-body">
                <div className="ulker-ind-row"><span className="ulker-ind-name">RSI Değeri</span><span className="ulker-ind-val">41.61</span><span className="ulker-ind-signal neutral">Zayıf</span></div>
                <div className="ulker-ind-row" style={{ borderBottom: "none" }}><span className="ulker-ind-name">Bölge</span><span className="ulker-ind-val">Nötr-Alt</span><span className="ulker-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ulker-progress-label"><span>30 (A.Satım)</span><span>41.61</span><span>70 (A.Alım)</span></div>
                  <div className="ulker-progress-bar"><div className="ulker-progress-fill" style={{ width: "41.61%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="ulker-analysis-card">
              <div className="ulker-analysis-card-head">
                <div className="ulker-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ulker-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ulker-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","116.03","Fiyat Altında ▼"],
                      ["MAV 13","118.03","Fiyat Altında ▼"],
                      ["MAV 21","119.35","Fiyat Altında ▼"],
                      ["MAV 55","120.52","Fiyat Altında ▼"],
                      ["MAV 89","120.23","Fiyat Altında ▼"],
                      ["MAV 144","118.96","Fiyat Altında ▼"],
                      ["MAV 233","116.96","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "ulker-above" : "ulker-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ulker-section-title"><span className="ulker-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ulker-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "116.03–116.96", desc: "MAV 5 ve MAV 233 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "118.03–121.65", desc: "MAV 13/21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "133.73 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "114.20–115.80", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "109.56 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "105.00–109.56", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="ulker-sr-cell" key={s.label}>
                <div className={`ulker-sr-type ${s.type}`}>{s.label}</div>
                <div className="ulker-sr-price">{s.price}</div>
                <div className="ulker-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="ulker-section-title"><span className="ulker-section-num">05</span> Genel Değerlendirme</div>
          <div className="ulker-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>ULKER, son kapanışını <strong>115.80 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>121.65 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 116.03–121.65 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>114.20 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>116.96–109.56 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="ulker-section-title"><span className="ulker-section-num">06</span> Senaryo Analizi</div>
          <div className="ulker-scenario-grid">
            <div className="ulker-scenario-card bull">
              <div className="ulker-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>116.03 TL MAV 5 üzerinde kapanış</li>
                <li>118.03 TL MAV 13 seviyesinin geri alınması</li>
                <li>121.65 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 121.65–133.73 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="ulker-scenario-card bear">
              <div className="ulker-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>114.20 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>109.56 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 109.56 TL destek testi</li>
              </ul>
            </div>
          </div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="ulker-disclaimer">
            <div className="ulker-disclaimer-head">
              <div className="ulker-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="ulker-footer">
            <div className="ulker-footer-inner">
              <div className="ulker-footer-brand">HOCA İLE BORSA</div>
              <div className="ulker-footer-meta">
                ULKER Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="ulker-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
