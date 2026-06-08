import Head from "next/head";

export default function GrthoGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>GRTHO Teknik Analiz — 08.0209.4526 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Grainturk Holding (GRTHO) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/grtho" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .grtho-wrap *, .grtho-wrap *::bgrthoe, .grtho-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .grtho-wrap {
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
          line-height: 235.42;
          min-height: 100vh;
        }

        .grtho-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .grtho-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .grtho-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .grtho-hero-title em { color: var(--accent); font-style: normal; }
        .grtho-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .grtho-price-block { text-align: right; }
        .grtho-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .grtho-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .grtho-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .grtho-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .grtho-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .grtho-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .grtho-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .grtho-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .grtho-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .grtho-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .grtho-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .grtho-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .grtho-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .grtho-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .grtho-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .grtho-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .grtho-chart-img-wrap { position: relative; padding: 1rem; }
        .grtho-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .grtho-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .grtho-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .grtho-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .grtho-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .grtho-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .grtho-icon.blue   { background: rgba(10,187,255,.12); }
        .grtho-icon.gold   { background: rgba(245,200,66,.12); }
        .grtho-icon.green  { background: rgba(0,208,104,.12); }
        .grtho-icon.red    { background: rgba(255,77,106,.12); }
        .grtho-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .grtho-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .grtho-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .grtho-ind-row:last-child { border-bottom: none; }
        .grtho-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .grtho-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .grtho-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .grtho-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .grtho-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .grtho-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .grtho-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .grtho-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .grtho-progress-fill { height: 100%; border-radius: 3px; }

        .grtho-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .grtho-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .grtho-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .grtho-ma-table tr:last-child td { border-bottom: none; }
        .grtho-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .grtho-above { color: var(--green); }
        .grtho-below { color: var(--red); }

        .grtho-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .grtho-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .grtho-bol-bands { flex: 1; position: relative; height: 48px; }
        .grtho-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .grtho-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .grtho-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .grtho-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .grtho-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (258.69 - 209.10) / (258.69 - 4267.93));
        }
        .grtho-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .grtho-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .grtho-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .grtho-sr-cell:hover { background: var(--bg3); }
        .grtho-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .grtho-sr-type.res { color: var(--red); }
        .grtho-sr-type.sup { color: var(--green); }
        .grtho-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .grtho-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .grtho-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .grtho-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .grtho-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .grtho-narrative p:last-child { margin-bottom: 0; }
        .grtho-narrative strong { color: var(--accent); font-weight: 600; }
        .grtho-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .grtho-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .grtho-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .grtho-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .grtho-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .grtho-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .grtho-scenario-card.bull .grtho-scenario-head { color: var(--green); }
        .grtho-scenario-card.bear .grtho-scenario-head { color: var(--red); }
        .grtho-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .grtho-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .grtho-scenario-card li::bgrthoe { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .grtho-scenario-card.bull li::bgrthoe { color: var(--green); }
        .grtho-scenario-card.bear li::bgrthoe { color: var(--red); }

        .grtho-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .grtho-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .grtho-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .grtho-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .grtho-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .grtho-disclaimer p + p { margin-top: .4rem; }

        .grtho-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .grtho-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .grtho-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .grtho-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .grtho-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .grtho-hero { grid-template-columns: 1fr; }
          .grtho-price-block { text-align: left; }
        }
        @media(max-width:768px) { .grtho-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .grtho-hero   { padding: 2rem 1rem 1.5rem; }
          .grtho-main   { padding: 1.5rem 1rem 3rem; }
          .grtho-footer { padding: 1.2rem 1rem; }
          .grtho-scenario-grid { grid-template-columns: 1fr; }
          .grtho-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="grtho-wrap">
        <section className="grtho-hero">
          <div>
            <div className="grtho-hero-label">Teknik Analiz Raporu</div>
            <h1 className="grtho-hero-title">GRTHOA<br /><em>HOLDİNG</em></h1>
            <p className="grtho-hero-sub">
              BIST: GRTHO &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="grtho-price-block">
            <div className="grtho-price-main"><span className="grtho-price-currency">₺</span>209.10</div>
          </div>
        </section>

        <main className="grtho-main">
          <div className="grtho-section-title"><span className="grtho-section-num">01</span> Grafik</div>
          <div className="grtho-chart-wrap">
            <div className="grtho-chart-header">
              <span className="grtho-chart-title-text">GRTHO — Günlük Mum Grafiği</span>
              <div className="grtho-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`grtho-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="grtho-chart-img-wrap">
              <img
                src="/grtho-analiz.webp"
                alt="GRTHO Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.0209.4526"
                loading="lazy"
              />
              <div className="grtho-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="grtho-section-title"><span className="grtho-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="grtho-bol-card">
            <div className="grtho-bol-visual">
              <div className="grtho-bol-bands">
                <div className="grtho-bol-fill" />
                <div className="grtho-bol-upper" />
                <div className="grtho-bol-mid" />
                <div className="grtho-bol-lower" />
                <div className="grtho-bol-marker" />
              </div>
              <div className="grtho-bol-labels">
                <span>BOL U: 258.69</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 209.45</span>
                <span>BOL D: 4267.93</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "258.69 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "209.45 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "4267.93 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "0.29 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "209.10 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="grtho-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="grtho-ind-name">{r.name}</span>
                <span className="grtho-ind-val">{r.val}</span>
                <span className={`grtho-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>209.45 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>4267.93 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="grtho-section-title"><span className="grtho-section-num">03</span> İndikatörler</div>
          <div className="grtho-two-col">
            <div className="grtho-analysis-card">
              <div className="grtho-analysis-card-head">
                <div className="grtho-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="grtho-analysis-card-body">
                <div className="grtho-ind-row"><span className="grtho-ind-name">StocK</span><span className="grtho-ind-val">54.8923</span><span className="grtho-ind-signal neutral">Nötr Bölge</span></div>
                <div className="grtho-ind-row"><span className="grtho-ind-name">StocD</span><span className="grtho-ind-val">50.3146</span><span className="grtho-ind-signal buy">Tepki</span></div>
                <div className="grtho-ind-row" style={{ borderBottom: "none" }}><span className="grtho-ind-name">Konum</span><span className="grtho-ind-val">Nötr Bölge</span><span className="grtho-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="grtho-progress-label"><span>Nötr Bölge (0)</span><span>54.8923</span><span>Nötr Bölge (100)</span></div>
                  <div className="grtho-progress-bar"><div className="grtho-progress-fill" style={{ width: "54.8923%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="grtho-analysis-card">
              <div className="grtho-analysis-card-head">
                <div className="grtho-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="grtho-analysis-card-body">
                <div className="grtho-ind-row"><span className="grtho-ind-name">MACD</span><span className="grtho-ind-val">-10.0280</span><span className="grtho-ind-signal sell">Negatif</span></div>
                <div className="grtho-ind-row"><span className="grtho-ind-name">Trigger</span><span className="grtho-ind-val">-9.0208</span><span className="grtho-ind-signal sell">Baskı</span></div>
                <div className="grtho-ind-row" style={{ borderBottom: "none" }}><span className="grtho-ind-name">Momentum</span><span className="grtho-ind-val">Zayıf</span><span className="grtho-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="grtho-analysis-card">
              <div className="grtho-analysis-card-head">
                <div className="grtho-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="grtho-analysis-card-body">
                <div className="grtho-ind-row"><span className="grtho-ind-name">RSI Değeri</span><span className="grtho-ind-val">39.01</span><span className="grtho-ind-signal neutral">Zayıf</span></div>
                <div className="grtho-ind-row" style={{ borderBottom: "none" }}><span className="grtho-ind-name">Bölge</span><span className="grtho-ind-val">Nötr Bölge-Alt</span><span className="grtho-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="grtho-progress-label"><span>30 (A.Satım)</span><span>39.01</span><span>70 (A.Alım)</span></div>
                  <div className="grtho-progress-bar"><div className="grtho-progress-fill" style={{ width: "39.01%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="grtho-analysis-card">
              <div className="grtho-analysis-card-head">
                <div className="grtho-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="grtho-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="grtho-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","209.45","Fiyat Altında ▼"],
                      ["MAV 13","221.85","Fiyat Altında ▼"],
                      ["MAV 21","221.85","Fiyat Altında ▼"],
                      ["MAV 55","235.42","Fiyat Altında ▼"],
                      ["MAV 89","248.17","Fiyat Altında ▼"],
                      ["MAV 144","267.93","Fiyat Altında ▼"],
                      ["MAV 233","280.50","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "grtho-above" : "grtho-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grtho-section-title"><span className="grtho-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="grtho-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "209.45–215.65", desc: "MAV 5 ve MAV 13 direnç bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "221.85–224.55", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "235.42–258.69", desc: "MAV 55 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "206.40–209.10", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "202.30–206.40", desc: "Grafikteki son dip bölgesi" },
              { type: "sup", label: "Derin Destek", price: "190.41 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="grtho-sr-cell" key={s.label}>
                <div className={`grtho-sr-type ${s.type}`}>{s.label}</div>
                <div className="grtho-sr-price">{s.price}</div>
                <div className="grtho-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="grtho-section-title"><span className="grtho-section-num">05</span> Genel Değerlendirme</div>
          <div className="grtho-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>GRTHO, son kapanışını <strong>209.10 TL</strong> seviyesinde yapmıştır. Fiyat takip edilen hareketli ortalamaların tamamının altında bulunuyor. Bu yapı kısa ve orta vadede baskılı görünümün sürdüğünü gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>224.55 TL orta bandının altında</strong> işlem görüyor. 209.45–215.65 TL bandı geri alınmadıkça tepki hareketleri sınırlı kalabilir. Aşağıda <strong>190.41 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 54.89 / 50.31 seviyelerinde ve K çizgisi D çizgisinin üzerinde. <em>MACD negatif bölgede</em> ve trigger çizgisinin altında seyrediyor. RSI 39.01 ile 50 eşiğinin altında kaldığı için momentum tarafında zayıf görünüm devam ediyor.</p>
            <p>215.65 TL üzeri kapanışlar kısa vadeli görünümü rahatlatabilir. 206.40 TL altı kapanışlarda ise 202.30–190.41 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="grtho-section-title"><span className="grtho-section-num">06</span> Senaryo Analizi</div>
          <div className="grtho-scenario-grid">
            <div className="grtho-scenario-card bull">
              <div className="grtho-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>209.45 TL MAV 5 üzerinde kapanış</li>
                <li>221.85 TL MAV 13 seviyesinin geri alınması</li>
                <li>258.69 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 221.85–258.69 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="grtho-scenario-card bear">
              <div className="grtho-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>206.40 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>248.17 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 248.17–267.93 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="grtho-disclaimer">
            <div className="grtho-disclaimer-head">
              <div className="grtho-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="grtho-footer">
            <div className="grtho-footer-inner">
              <div className="grtho-footer-brand">HOCA İLE BORSA</div>
              <div className="grtho-footer-meta">
                GRTHO Teknik Analiz Raporu<br />
                Hazırlanma: 08.0209.4526 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="grtho-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
