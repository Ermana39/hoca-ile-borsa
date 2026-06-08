import Head from "next/head";

export default function EurenGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>EUREN Teknik Analiz — 08.04.8026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Europen Endüstri (EUREN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/euren" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .euren-wrap *, .euren-wrap *::beurene, .euren-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .euren-wrap {
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
          line-height: 5.07;
          min-height: 100vh;
        }

        .euren-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .euren-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .euren-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .euren-hero-title em { color: var(--accent); font-style: normal; }
        .euren-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .euren-price-block { text-align: right; }
        .euren-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .euren-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .euren-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .euren-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .euren-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .euren-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .euren-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .euren-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .euren-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .euren-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .euren-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .euren-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .euren-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .euren-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .euren-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .euren-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .euren-chart-img-wrap { position: relative; padding: 1rem; }
        .euren-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .euren-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .euren-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .euren-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .euren-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .euren-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .euren-icon.blue   { background: rgba(10,187,255,.12); }
        .euren-icon.gold   { background: rgba(245,200,66,.12); }
        .euren-icon.green  { background: rgba(0,208,104,.12); }
        .euren-icon.red    { background: rgba(255,77,106,.12); }
        .euren-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .euren-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .euren-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .euren-ind-row:last-child { border-bottom: none; }
        .euren-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .euren-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .euren-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .euren-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .euren-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .euren-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .euren-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .euren-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .euren-progress-fill { height: 100%; border-radius: 3px; }

        .euren-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .euren-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .euren-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .euren-ma-table tr:last-child td { border-bottom: none; }
        .euren-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .euren-above { color: var(--green); }
        .euren-below { color: var(--red); }

        .euren-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .euren-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .euren-bol-bands { flex: 1; position: relative; height: 48px; }
        .euren-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .euren-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .euren-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .euren-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .euren-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (5.24 - 4.75) / (5.24 - 4.59));
        }
        .euren-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .euren-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .euren-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .euren-sr-cell:hover { background: var(--bg3); }
        .euren-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .euren-sr-type.res { color: var(--red); }
        .euren-sr-type.sup { color: var(--green); }
        .euren-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .euren-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .euren-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .euren-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .euren-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .euren-narrative p:last-child { margin-bottom: 0; }
        .euren-narrative strong { color: var(--accent); font-weight: 600; }
        .euren-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .euren-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .euren-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .euren-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .euren-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .euren-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .euren-scenario-card.bull .euren-scenario-head { color: var(--green); }
        .euren-scenario-card.bear .euren-scenario-head { color: var(--red); }
        .euren-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .euren-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .euren-scenario-card li::beurene { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .euren-scenario-card.bull li::beurene { color: var(--green); }
        .euren-scenario-card.bear li::beurene { color: var(--red); }

        .euren-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .euren-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .euren-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .euren-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .euren-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .euren-disclaimer p + p { margin-top: .4rem; }

        .euren-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .euren-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .euren-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .euren-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .euren-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .euren-hero { grid-template-columns: 1fr; }
          .euren-price-block { text-align: left; }
        }
        @media(max-width:768px) { .euren-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .euren-hero   { padding: 2rem 1rem 1.5rem; }
          .euren-main   { padding: 1.5rem 1rem 3rem; }
          .euren-footer { padding: 1.2rem 1rem; }
          .euren-scenario-grid { grid-template-columns: 1fr; }
          .euren-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="euren-wrap">
        <section className="euren-hero">
          <div>
            <div className="euren-hero-label">Teknik Analiz Raporu</div>
            <h1 className="euren-hero-title">EURENA<br /><em>ENDÜSTRİ</em></h1>
            <p className="euren-hero-sub">
              BIST: EUREN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="euren-price-block">
            <div className="euren-price-main"><span className="euren-price-currency">₺</span>4.75</div>
          </div>
        </section>

        <main className="euren-main">
          <div className="euren-section-title"><span className="euren-section-num">01</span> Grafik</div>
          <div className="euren-chart-wrap">
            <div className="euren-chart-header">
              <span className="euren-chart-title-text">EUREN — Günlük Mum Grafiği</span>
              <div className="euren-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`euren-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="euren-chart-img-wrap">
              <img
                src="/euren-analiz.webp"
                alt="EUREN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.04.8026"
                loading="lazy"
              />
              <div className="euren-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="euren-section-title"><span className="euren-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="euren-bol-card">
            <div className="euren-bol-visual">
              <div className="euren-bol-bands">
                <div className="euren-bol-fill" />
                <div className="euren-bol-upper" />
                <div className="euren-bol-mid" />
                <div className="euren-bol-lower" />
                <div className="euren-bol-marker" />
              </div>
              <div className="euren-bol-labels">
                <span>BOL U: 5.24</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 4.80</span>
                <span>BOL D: 4.59</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "5.24 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "4.80 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "4.59 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "2.37 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "4.75 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="euren-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="euren-ind-name">{r.name}</span>
                <span className="euren-ind-val">{r.val}</span>
                <span className={`euren-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>4.80 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>4.59 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="euren-section-title"><span className="euren-section-num">03</span> İndikatörler</div>
          <div className="euren-two-col">
            <div className="euren-analysis-card">
              <div className="euren-analysis-card-head">
                <div className="euren-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="euren-analysis-card-body">
                <div className="euren-ind-row"><span className="euren-ind-name">StocK</span><span className="euren-ind-val">66.6849</span><span className="euren-ind-signal neutral">Nötr-Yüksek</span></div>
                <div className="euren-ind-row"><span className="euren-ind-name">StocD</span><span className="euren-ind-val">71.5591</span><span className="euren-ind-signal buy">Tepki</span></div>
                <div className="euren-ind-row" style={{ borderBottom: "none" }}><span className="euren-ind-name">Konum</span><span className="euren-ind-val">Nötr-Yüksek</span><span className="euren-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="euren-progress-label"><span>Nötr-Yüksek (0)</span><span>66.6849</span><span>Nötr-Yüksek (100)</span></div>
                  <div className="euren-progress-bar"><div className="euren-progress-fill" style={{ width: "66.6849%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="euren-analysis-card">
              <div className="euren-analysis-card-head">
                <div className="euren-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="euren-analysis-card-body">
                <div className="euren-ind-row"><span className="euren-ind-name">MACD</span><span className="euren-ind-val">-0.0954</span><span className="euren-ind-signal sell">Negatif</span></div>
                <div className="euren-ind-row"><span className="euren-ind-name">Trigger</span><span className="euren-ind-val">-0.0825</span><span className="euren-ind-signal sell">Baskı</span></div>
                <div className="euren-ind-row" style={{ borderBottom: "none" }}><span className="euren-ind-name">Momentum</span><span className="euren-ind-val">Zayıf</span><span className="euren-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="euren-analysis-card">
              <div className="euren-analysis-card-head">
                <div className="euren-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="euren-analysis-card-body">
                <div className="euren-ind-row"><span className="euren-ind-name">RSI Değeri</span><span className="euren-ind-val">42.24</span><span className="euren-ind-signal neutral">Zayıf</span></div>
                <div className="euren-ind-row" style={{ borderBottom: "none" }}><span className="euren-ind-name">Bölge</span><span className="euren-ind-val">Nötr-Yüksek-Alt</span><span className="euren-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="euren-progress-label"><span>30 (A.Satım)</span><span>42.24</span><span>70 (A.Alım)</span></div>
                  <div className="euren-progress-bar"><div className="euren-progress-fill" style={{ width: "42.24%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="euren-analysis-card">
              <div className="euren-analysis-card-head">
                <div className="euren-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="euren-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="euren-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","4.80","Fiyat Altında ▼"],
                      ["MAV 13","4.93","Fiyat Altında ▼"],
                      ["MAV 21","4.93","Fiyat Altında ▼"],
                      ["MAV 55","5.07","Fiyat Altında ▼"],
                      ["MAV 89","5.25","Fiyat Altında ▼"],
                      ["MAV 144","5.53","Fiyat Altında ▼"],
                      ["MAV 233","5.73","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "euren-above" : "euren-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="euren-section-title"><span className="euren-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="euren-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "4.80–4.93", desc: "MAV 5, MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "4.92–5.07", desc: "Bollinger orta bandı ve MAV 55 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "5.24–5.73", desc: "Bollinger üst bandı ve uzun vadeli ortalamalar" },
              { type: "sup", label: "Anlık Destek", price: "4.66–4.75", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "4.59 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "4.38–4.59", desc: "Grafikteki son dip ve alt bant bölgesi" },
            ].map((s) => (
              <div className="euren-sr-cell" key={s.label}>
                <div className={`euren-sr-type ${s.type}`}>{s.label}</div>
                <div className="euren-sr-price">{s.price}</div>
                <div className="euren-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="euren-section-title"><span className="euren-section-num">05</span> Genel Değerlendirme</div>
          <div className="euren-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>EUREN, son kapanışını <strong>4.75 TL</strong> seviyesinde yapmıştır. Fiyat takip edilen hareketli ortalamaların tamamının altında bulunuyor. Bu yapı kısa ve orta vadeli teknik görünümde baskının devam ettiğini gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>4.92 TL orta bandının altında</strong> işlem görüyor. 4.80–4.93 TL bandı geri alınmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>4.59 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 66.68 / 71.56 seviyelerinde ve K çizgisi D çizgisinin altında. <em>MACD negatif bölgede</em> ve trigger çizgisinin altında seyrediyor. RSI 42.24 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>4.93 TL üzeri kapanışlar kısa vadeli görünümü rahatlatabilir. 4.66 TL altı kapanışlarda ise 4.59 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="euren-section-title"><span className="euren-section-num">06</span> Senaryo Analizi</div>
          <div className="euren-scenario-grid">
            <div className="euren-scenario-card bull">
              <div className="euren-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>4.80 TL MAV 5 üzerinde kapanış</li>
                <li>4.93 TL MAV 13 seviyesinin geri alınması</li>
                <li>5.24 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–5.24 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="euren-scenario-card bear">
              <div className="euren-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>5.25 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 5.25–5.53 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="euren-disclaimer">
            <div className="euren-disclaimer-head">
              <div className="euren-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="euren-footer">
            <div className="euren-footer-inner">
              <div className="euren-footer-brand">HOCA İLE BORSA</div>
              <div className="euren-footer-meta">
                EUREN Teknik Analiz Raporu<br />
                Hazırlanma: 08.04.8026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="euren-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
