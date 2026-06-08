import Head from "next/head";
import Link from "next/link";

export default function OyakcGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>OYAKC Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Oyak Çimento (OYAKC) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/oyakc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .oyakc-wrap *, .oyakc-wrap *::before, .oyakc-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .oyakc-wrap {
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

        .oyakc-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .oyakc-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .oyakc-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .oyakc-hero-title em { color: var(--accent); font-style: normal; }
        .oyakc-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .oyakc-price-block { text-align: right; }
        .oyakc-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .oyakc-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .oyakc-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .oyakc-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .oyakc-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .oyakc-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .oyakc-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .oyakc-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .oyakc-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .oyakc-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .oyakc-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .oyakc-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .oyakc-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .oyakc-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .oyakc-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .oyakc-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .oyakc-chart-img-wrap { position: relative; padding: 1rem; }
        .oyakc-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .oyakc-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .oyakc-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .oyakc-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .oyakc-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .oyakc-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .oyakc-icon.blue   { background: rgba(10,187,255,.12); }
        .oyakc-icon.gold   { background: rgba(245,200,66,.12); }
        .oyakc-icon.green  { background: rgba(0,208,104,.12); }
        .oyakc-icon.red    { background: rgba(255,77,106,.12); }
        .oyakc-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .oyakc-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .oyakc-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .oyakc-ind-row:last-child { border-bottom: none; }
        .oyakc-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .oyakc-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .oyakc-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .oyakc-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .oyakc-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .oyakc-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .oyakc-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .oyakc-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .oyakc-progress-fill { height: 100%; border-radius: 3px; }

        .oyakc-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .oyakc-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .oyakc-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .oyakc-ma-table tr:last-child td { border-bottom: none; }
        .oyakc-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .oyakc-above { color: var(--green); }
        .oyakc-below { color: var(--red); }

        .oyakc-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .oyakc-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .oyakc-bol-bands { flex: 1; position: relative; height: 48px; }
        .oyakc-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .oyakc-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .oyakc-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .oyakc-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .oyakc-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (25.11 - 20.64) / (25.11 - 19.10));
        }
        .oyakc-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .oyakc-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .oyakc-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .oyakc-sr-cell:hover { background: var(--bg3); }
        .oyakc-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .oyakc-sr-type.res { color: var(--red); }
        .oyakc-sr-type.sup { color: var(--green); }
        .oyakc-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .oyakc-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .oyakc-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .oyakc-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .oyakc-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .oyakc-narrative p:last-child { margin-bottom: 0; }
        .oyakc-narrative strong { color: var(--accent); font-weight: 600; }
        .oyakc-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .oyakc-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .oyakc-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .oyakc-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .oyakc-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .oyakc-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .oyakc-scenario-card.bull .oyakc-scenario-head { color: var(--green); }
        .oyakc-scenario-card.bear .oyakc-scenario-head { color: var(--red); }
        .oyakc-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .oyakc-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .oyakc-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .oyakc-scenario-card.bull li::before { color: var(--green); }
        .oyakc-scenario-card.bear li::before { color: var(--red); }

        .oyakc-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .oyakc-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .oyakc-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .oyakc-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .oyakc-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .oyakc-disclaimer p + p { margin-top: .4rem; }

        .oyakc-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .oyakc-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .oyakc-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .oyakc-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .oyakc-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .oyakc-hero { grid-template-columns: 1fr; }
          .oyakc-price-block { text-align: left; }
        }
        @media(max-width:768px) { .oyakc-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .oyakc-hero   { padding: 2rem 1rem 1.5rem; }
          .oyakc-main   { padding: 1.5rem 1rem 3rem; }
          .oyakc-footer { padding: 1.2rem 1rem; }
          .oyakc-scenario-grid { grid-template-columns: 1fr; }
          .oyakc-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="oyakc-wrap">
        <section className="oyakc-hero">
          <div>
            <div className="oyakc-hero-label">Teknik Analiz Raporu</div>
            <h1 className="oyakc-hero-title">OYAK<br /><em>ÇİMENTO</em></h1>
            <p className="oyakc-hero-sub">
              BIST: OYAKC &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="oyakc-price-block">
            <div className="oyakc-price-main"><span className="oyakc-price-currency">₺</span>20.64</div>
          </div>
        </section>

        <main className="oyakc-main">
          <div className="oyakc-section-title"><span className="oyakc-section-num">01</span> Grafik</div>
          <div className="oyakc-chart-wrap">
            <div className="oyakc-chart-header">
              <span className="oyakc-chart-title-text">OYAKC — Günlük Mum Grafiği</span>
              <div className="oyakc-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`oyakc-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="oyakc-chart-img-wrap">
              <img
                src="/oyakc-analiz.webp"
                alt="OYAKC Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="oyakc-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="oyakc-section-title"><span className="oyakc-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="oyakc-bol-card">
            <div className="oyakc-bol-visual">
              <div className="oyakc-bol-bands">
                <div className="oyakc-bol-fill" />
                <div className="oyakc-bol-upper" />
                <div className="oyakc-bol-mid" />
                <div className="oyakc-bol-lower" />
                <div className="oyakc-bol-marker" />
              </div>
              <div className="oyakc-bol-labels">
                <span>BOL U: 25.11</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 22.11</span>
                <span>BOL D: 19.10</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "25.11 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "22.11 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "19.10 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "6.01 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "20.64 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="oyakc-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="oyakc-ind-name">{r.name}</span>
                <span className="oyakc-ind-val">{r.val}</span>
                <span className={`oyakc-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>22.11 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>19.10 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="oyakc-section-title"><span className="oyakc-section-num">03</span> İndikatörler</div>
          <div className="oyakc-two-col">
            <div className="oyakc-analysis-card">
              <div className="oyakc-analysis-card-head">
                <div className="oyakc-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="oyakc-analysis-card-body">
                <div className="oyakc-ind-row"><span className="oyakc-ind-name">StocK</span><span className="oyakc-ind-val">61.37</span><span className="oyakc-ind-signal neutral">Nötr</span></div>
                <div className="oyakc-ind-row"><span className="oyakc-ind-name">StocD</span><span className="oyakc-ind-val">55.23</span><span className="oyakc-ind-signal buy">Tepki</span></div>
                <div className="oyakc-ind-row" style={{ borderBottom: "none" }}><span className="oyakc-ind-name">Konum</span><span className="oyakc-ind-val">Nötr-Yüksek</span><span className="oyakc-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="oyakc-progress-label"><span>Aşırı Satım (0)</span><span>61.37</span><span>Aşırı Alım (100)</span></div>
                  <div className="oyakc-progress-bar"><div className="oyakc-progress-fill" style={{ width: "61.37%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-yüksek bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="oyakc-analysis-card">
              <div className="oyakc-analysis-card-head">
                <div className="oyakc-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="oyakc-analysis-card-body">
                <div className="oyakc-ind-row"><span className="oyakc-ind-name">MACD</span><span className="oyakc-ind-val">-0.9047</span><span className="oyakc-ind-signal sell">Negatif</span></div>
                <div className="oyakc-ind-row"><span className="oyakc-ind-name">Trigger</span><span className="oyakc-ind-val">-0.8507</span><span className="oyakc-ind-signal sell">Baskı</span></div>
                <div className="oyakc-ind-row" style={{ borderBottom: "none" }}><span className="oyakc-ind-name">Momentum</span><span className="oyakc-ind-val">Zayıf</span><span className="oyakc-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="oyakc-analysis-card">
              <div className="oyakc-analysis-card-head">
                <div className="oyakc-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="oyakc-analysis-card-body">
                <div className="oyakc-ind-row"><span className="oyakc-ind-name">RSI Değeri</span><span className="oyakc-ind-val">34.56</span><span className="oyakc-ind-signal neutral">Zayıf</span></div>
                <div className="oyakc-ind-row" style={{ borderBottom: "none" }}><span className="oyakc-ind-name">Bölge</span><span className="oyakc-ind-val">Nötr-Alt</span><span className="oyakc-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="oyakc-progress-label"><span>30 (A.Satım)</span><span>34.56</span><span>70 (A.Alım)</span></div>
                  <div className="oyakc-progress-bar"><div className="oyakc-progress-fill" style={{ width: "34.56%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 40 seviyesinin altında ve zayıf bölgede. Tepki için RSI’ın önce 40, ardından 50 üzerine toparlanması gerekir.</p>
              </div>
            </div>

            <div className="oyakc-analysis-card">
              <div className="oyakc-analysis-card-head">
                <div className="oyakc-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="oyakc-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="oyakc-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","20.83","Fiyat Altında ▼"],
                      ["MAV 13","21.34","Fiyat Altında ▼"],
                      ["MAV 21","21.89","Fiyat Altında ▼"],
                      ["MAV 55","23.08","Fiyat Altında ▼"],
                      ["MAV 89","23.44","Fiyat Altında ▼"],
                      ["MAV 144","23.49","Fiyat Altında ▼"],
                      ["MAV 233","23.15","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "oyakc-above" : "oyakc-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="oyakc-section-title"><span className="oyakc-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="oyakc-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "20.83–21.34", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "21.89–22.11", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "23.08–25.11", desc: "MAV 55 bölgesi ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "20.56–20.64", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "19.10 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "18.50–19.00", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="oyakc-sr-cell" key={s.label}>
                <div className={`oyakc-sr-type ${s.type}`}>{s.label}</div>
                <div className="oyakc-sr-price">{s.price}</div>
                <div className="oyakc-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="oyakc-section-title"><span className="oyakc-section-num">05</span> Genel Değerlendirme</div>
          <div className="oyakc-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>OYAKC, son kapanışını <strong>20.64 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>22.11 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 20.83–22.11 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>20.56 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>23.15–19.10 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="oyakc-section-title"><span className="oyakc-section-num">06</span> Senaryo Analizi</div>
          <div className="oyakc-scenario-grid">
            <div className="oyakc-scenario-card bull">
              <div className="oyakc-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>20.83 TL MAV 5 üzerinde kapanış</li>
                <li>21.34 TL MAV 13 seviyesinin geri alınması</li>
                <li>22.11 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 22.11–23.08 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="oyakc-scenario-card bear">
              <div className="oyakc-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>20.56 TL günlük dip altında kapanış</li>
                <li>RSI’ın 35 altında kalması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>19.10 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 19.10 TL destek testi</li>
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


          <div className="oyakc-disclaimer">
            <div className="oyakc-disclaimer-head">
              <div className="oyakc-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="oyakc-footer">
            <div className="oyakc-footer-inner">
              <div className="oyakc-footer-brand">HOCA İLE BORSA</div>
              <div className="oyakc-footer-meta">
                OYAKC Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="oyakc-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
