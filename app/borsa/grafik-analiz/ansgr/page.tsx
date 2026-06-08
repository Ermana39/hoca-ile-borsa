import Head from "next/head";

export default function AnsgrGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>ANSGR Teknik Analiz — 08.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Anadolu Sigorta (ANSGR) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/ansgr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .ansgr-wrap *, .ansgr-wrap *::before, .ansgr-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ansgr-wrap {
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

        .ansgr-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .ansgr-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ansgr-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ansgr-hero-title em { color: var(--accent); font-style: normal; }
        .ansgr-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ansgr-price-block { text-align: right; }
        .ansgr-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ansgr-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .ansgr-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .ansgr-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ansgr-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ansgr-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .ansgr-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ansgr-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ansgr-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ansgr-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ansgr-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ansgr-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ansgr-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ansgr-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ansgr-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ansgr-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ansgr-chart-img-wrap { position: relative; padding: 1rem; }
        .ansgr-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ansgr-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .ansgr-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .ansgr-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .ansgr-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ansgr-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .ansgr-icon.blue   { background: rgba(10,187,255,.12); }
        .ansgr-icon.gold   { background: rgba(245,200,66,.12); }
        .ansgr-icon.green  { background: rgba(0,208,104,.12); }
        .ansgr-icon.red    { background: rgba(255,77,106,.12); }
        .ansgr-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .ansgr-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .ansgr-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ansgr-ind-row:last-child { border-bottom: none; }
        .ansgr-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ansgr-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ansgr-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .ansgr-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ansgr-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ansgr-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .ansgr-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .ansgr-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .ansgr-progress-fill { height: 100%; border-radius: 3px; }

        .ansgr-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ansgr-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .ansgr-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ansgr-ma-table tr:last-child td { border-bottom: none; }
        .ansgr-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ansgr-above { color: var(--green); }
        .ansgr-below { color: var(--red); }

        .ansgr-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .ansgr-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .ansgr-bol-bands { flex: 1; position: relative; height: 48px; }
        .ansgr-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ansgr-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ansgr-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ansgr-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .ansgr-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (31.98 - 27.22) / (31.98 - 26.01));
        }
        .ansgr-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .ansgr-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .ansgr-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ansgr-sr-cell:hover { background: var(--bg3); }
        .ansgr-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .ansgr-sr-type.res { color: var(--red); }
        .ansgr-sr-type.sup { color: var(--green); }
        .ansgr-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ansgr-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .ansgr-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ansgr-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .ansgr-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ansgr-narrative p:last-child { margin-bottom: 0; }
        .ansgr-narrative strong { color: var(--accent); font-weight: 600; }
        .ansgr-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .ansgr-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ansgr-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ansgr-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ansgr-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ansgr-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .ansgr-scenario-card.bull .ansgr-scenario-head { color: var(--green); }
        .ansgr-scenario-card.bear .ansgr-scenario-head { color: var(--red); }
        .ansgr-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ansgr-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ansgr-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ansgr-scenario-card.bull li::before { color: var(--green); }
        .ansgr-scenario-card.bear li::before { color: var(--red); }

        .ansgr-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .ansgr-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ansgr-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .ansgr-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ansgr-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ansgr-disclaimer p + p { margin-top: .4rem; }

        .ansgr-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .ansgr-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ansgr-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ansgr-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ansgr-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .ansgr-hero { grid-template-columns: 1fr; }
          .ansgr-price-block { text-align: left; }
        }
        @media(max-width:768px) { .ansgr-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .ansgr-hero   { padding: 2rem 1rem 1.5rem; }
          .ansgr-main   { padding: 1.5rem 1rem 3rem; }
          .ansgr-footer { padding: 1.2rem 1rem; }
          .ansgr-scenario-grid { grid-template-columns: 1fr; }
          .ansgr-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ansgr-wrap">
        <section className="ansgr-hero">
          <div>
            <div className="ansgr-hero-label">Teknik Analiz Raporu</div>
            <h1 className="ansgr-hero-title">ANSGR<br /><em>SİGORTA</em></h1>
            <p className="ansgr-hero-sub">
              BIST: ANSGR &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="ansgr-price-block">
            <div className="ansgr-price-main"><span className="ansgr-price-currency">₺</span>27.22</div>
          </div>
        </section>

        <main className="ansgr-main">
          <div className="ansgr-section-title"><span className="ansgr-section-num">01</span> Grafik</div>
          <div className="ansgr-chart-wrap">
            <div className="ansgr-chart-header">
              <span className="ansgr-chart-title-text">ANSGR — Günlük Mum Grafiği</span>
              <div className="ansgr-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`ansgr-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="ansgr-chart-img-wrap">
              <img
                src="/ansgr-analiz.webp"
                alt="ANSGR Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.06.2026"
                loading="lazy"
              />
              <div className="ansgr-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="ansgr-section-title"><span className="ansgr-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ansgr-bol-card">
            <div className="ansgr-bol-visual">
              <div className="ansgr-bol-bands">
                <div className="ansgr-bol-fill" />
                <div className="ansgr-bol-upper" />
                <div className="ansgr-bol-mid" />
                <div className="ansgr-bol-lower" />
                <div className="ansgr-bol-marker" />
              </div>
              <div className="ansgr-bol-labels">
                <span>BOL U: 31.98</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 29.00</span>
                <span>BOL D: 26.01</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "31.98 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "29.00 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "26.01 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "3.02 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "27.22 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="ansgr-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="ansgr-ind-name">{r.name}</span>
                <span className="ansgr-ind-val">{r.val}</span>
                <span className={`ansgr-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>29.00 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>26.01 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="ansgr-section-title"><span className="ansgr-section-num">03</span> İndikatörler</div>
          <div className="ansgr-two-col">
            <div className="ansgr-analysis-card">
              <div className="ansgr-analysis-card-head">
                <div className="ansgr-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ansgr-analysis-card-body">
                <div className="ansgr-ind-row"><span className="ansgr-ind-name">StocK</span><span className="ansgr-ind-val">19.84</span><span className="ansgr-ind-signal neutral">Zayıf Bölge</span></div>
                <div className="ansgr-ind-row"><span className="ansgr-ind-name">StocD</span><span className="ansgr-ind-val">21.56</span><span className="ansgr-ind-signal buy">Tepki</span></div>
                <div className="ansgr-ind-row" style={{ borderBottom: "none" }}><span className="ansgr-ind-name">Konum</span><span className="ansgr-ind-val">Zayıf Bölge</span><span className="ansgr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ansgr-progress-label"><span>Aşırı Satım (0)</span><span>19.84</span><span>Aşırı Alım (100)</span></div>
                  <div className="ansgr-progress-bar"><div className="ansgr-progress-fill" style={{ width: "19.84%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="ansgr-analysis-card">
              <div className="ansgr-analysis-card-head">
                <div className="ansgr-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ansgr-analysis-card-body">
                <div className="ansgr-ind-row"><span className="ansgr-ind-name">MACD</span><span className="ansgr-ind-val">-0.3301</span><span className="ansgr-ind-signal sell">Negatif</span></div>
                <div className="ansgr-ind-row"><span className="ansgr-ind-name">Trigger</span><span className="ansgr-ind-val">-0.0365</span><span className="ansgr-ind-signal sell">Baskı</span></div>
                <div className="ansgr-ind-row" style={{ borderBottom: "none" }}><span className="ansgr-ind-name">Momentum</span><span className="ansgr-ind-val">Zayıf</span><span className="ansgr-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="ansgr-analysis-card">
              <div className="ansgr-analysis-card-head">
                <div className="ansgr-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ansgr-analysis-card-body">
                <div className="ansgr-ind-row"><span className="ansgr-ind-name">RSI Değeri</span><span className="ansgr-ind-val">41.66</span><span className="ansgr-ind-signal neutral">Zayıf</span></div>
                <div className="ansgr-ind-row" style={{ borderBottom: "none" }}><span className="ansgr-ind-name">Bölge</span><span className="ansgr-ind-val">Zayıf Bölge-Alt</span><span className="ansgr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ansgr-progress-label"><span>30 (A.Satım)</span><span>41.66</span><span>70 (A.Alım)</span></div>
                  <div className="ansgr-progress-bar"><div className="ansgr-progress-fill" style={{ width: "41.66%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="ansgr-analysis-card">
              <div className="ansgr-analysis-card-head">
                <div className="ansgr-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ansgr-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ansgr-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","27.50","Fiyat Altında ▼"],
                      ["MAV 13","28.32","Fiyat Altında ▼"],
                      ["MAV 21","28.32","Fiyat Altında ▼"],
                      ["MAV 55","27.83","Fiyat Altında ▼"],
                      ["MAV 89","27.00","Fiyat Üstünde ▲"],
                      ["MAV 144","25.91","Fiyat Üstünde ▲"],
                      ["MAV 233","24.71","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "ansgr-above" : "ansgr-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ansgr-section-title"><span className="ansgr-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ansgr-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "27.50–27.83", desc: "MAV 5 ve MAV 55 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "28.07–29.00", desc: "MAV 13/21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "31.98 TL", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "27.00–26.52", desc: "MAV 89 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "26.01–25.91", desc: "Bollinger alt bandı ve MAV 144 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "24.71 TL", desc: "MAV 233 uzun vadeli destek" },
            ].map((s) => (
              <div className="ansgr-sr-cell" key={s.label}>
                <div className={`ansgr-sr-type ${s.type}`}>{s.label}</div>
                <div className="ansgr-sr-price">{s.price}</div>
                <div className="ansgr-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="ansgr-section-title"><span className="ansgr-section-num">05</span> Genel Değerlendirme</div>
          <div className="ansgr-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>ANSGR, son kapanışını <strong>27.22 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalırken; MAV 89, MAV 144 ve MAV 233 üzerinde tutunuyor. Bu yapı kısa vadede zayıflama olduğunu, ancak ana destek yapısının henüz tamamen bozulmadığını gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>29.00 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>26.01 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 19.84 / 21.56 seviyeleriyle alt bölgede ve K çizgisi D çizgisinin hafif altında. <em>MACD negatif bölgede</em> ve trigger altında seyrediyor. RSI 41.66 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>27.50–29.00 TL bandının geri alınması kısa vadeli görünümü rahatlatır. 26.52 TL altı kapanışlarda ise 26.01–25.91 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="ansgr-section-title"><span className="ansgr-section-num">06</span> Senaryo Analizi</div>
          <div className="ansgr-scenario-grid">
            <div className="ansgr-scenario-card bull">
              <div className="ansgr-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>27.50 TL MAV 5 üzerinde kapanış</li>
                <li>28.32 TL MAV 13 seviyesinin geri alınması</li>
                <li>31.98 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 28.07–31.98 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="ansgr-scenario-card bear">
              <div className="ansgr-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>27.00 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>27.00 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 27.00–25.91 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="ansgr-disclaimer">
            <div className="ansgr-disclaimer-head">
              <div className="ansgr-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="ansgr-footer">
            <div className="ansgr-footer-inner">
              <div className="ansgr-footer-brand">HOCA İLE BORSA</div>
              <div className="ansgr-footer-meta">
                ANSGR Teknik Analiz Raporu<br />
                Hazırlanma: 08.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="ansgr-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
