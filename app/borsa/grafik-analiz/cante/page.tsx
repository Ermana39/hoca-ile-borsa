import Head from "next/head";

export default function CanteGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>CANTE Teknik Analiz — 08.01.6326 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Çan2 Termik (CANTE) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/cante" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .cante-wrap *, .cante-wrap *::before, .cante-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cante-wrap {
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

        .cante-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .cante-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .cante-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .cante-hero-title em { color: var(--accent); font-style: normal; }
        .cante-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .cante-price-block { text-align: right; }
        .cante-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .cante-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .cante-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .cante-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .cante-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .cante-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .cante-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .cante-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .cante-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .cante-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .cante-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .cante-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .cante-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .cante-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .cante-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .cante-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .cante-chart-img-wrap { position: relative; padding: 1rem; }
        .cante-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .cante-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .cante-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .cante-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .cante-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .cante-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .cante-icon.blue   { background: rgba(10,187,255,.12); }
        .cante-icon.gold   { background: rgba(245,200,66,.12); }
        .cante-icon.green  { background: rgba(0,208,104,.12); }
        .cante-icon.red    { background: rgba(255,77,106,.12); }
        .cante-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .cante-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .cante-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .cante-ind-row:last-child { border-bottom: none; }
        .cante-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .cante-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .cante-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .cante-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .cante-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .cante-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .cante-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .cante-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .cante-progress-fill { height: 100%; border-radius: 3px; }

        .cante-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .cante-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .cante-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .cante-ma-table tr:last-child td { border-bottom: none; }
        .cante-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .cante-above { color: var(--green); }
        .cante-below { color: var(--red); }

        .cante-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .cante-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .cante-bol-bands { flex: 1; position: relative; height: 48px; }
        .cante-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .cante-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .cante-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .cante-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .cante-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (1.89 - 1.53) / (1.89 - 1.37));
        }
        .cante-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .cante-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .cante-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .cante-sr-cell:hover { background: var(--bg3); }
        .cante-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .cante-sr-type.res { color: var(--red); }
        .cante-sr-type.sup { color: var(--green); }
        .cante-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .cante-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .cante-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .cante-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .cante-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .cante-narrative p:last-child { margin-bottom: 0; }
        .cante-narrative strong { color: var(--accent); font-weight: 600; }
        .cante-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .cante-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .cante-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .cante-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .cante-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .cante-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .cante-scenario-card.bull .cante-scenario-head { color: var(--green); }
        .cante-scenario-card.bear .cante-scenario-head { color: var(--red); }
        .cante-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .cante-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .cante-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .cante-scenario-card.bull li::before { color: var(--green); }
        .cante-scenario-card.bear li::before { color: var(--red); }

        .cante-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .cante-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .cante-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .cante-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .cante-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .cante-disclaimer p + p { margin-top: .4rem; }

        .cante-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .cante-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .cante-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .cante-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .cante-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .cante-hero { grid-template-columns: 1fr; }
          .cante-price-block { text-align: left; }
        }
        @media(max-width:768px) { .cante-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .cante-hero   { padding: 2rem 1rem 1.5rem; }
          .cante-main   { padding: 1.5rem 1rem 3rem; }
          .cante-footer { padding: 1.2rem 1rem; }
          .cante-scenario-grid { grid-template-columns: 1fr; }
          .cante-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cante-wrap">
        <section className="cante-hero">
          <div>
            <div className="cante-hero-label">Teknik Analiz Raporu</div>
            <h1 className="cante-hero-title">CANTE<br /><em>TERMİK</em></h1>
            <p className="cante-hero-sub">
              BIST: CANTE &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="cante-price-block">
            <div className="cante-price-main"><span className="cante-price-currency">₺</span>1.53</div>
          </div>
        </section>

        <main className="cante-main">
          <div className="cante-section-title"><span className="cante-section-num">01</span> Grafik</div>
          <div className="cante-chart-wrap">
            <div className="cante-chart-header">
              <span className="cante-chart-title-text">CANTE — Günlük Mum Grafiği</span>
              <div className="cante-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`cante-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="cante-chart-img-wrap">
              <img
                src="/cante-analiz.webp"
                alt="CANTE Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.01.6326"
                loading="lazy"
              />
              <div className="cante-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="cante-section-title"><span className="cante-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="cante-bol-card">
            <div className="cante-bol-visual">
              <div className="cante-bol-bands">
                <div className="cante-bol-fill" />
                <div className="cante-bol-upper" />
                <div className="cante-bol-mid" />
                <div className="cante-bol-lower" />
                <div className="cante-bol-marker" />
              </div>
              <div className="cante-bol-labels">
                <span>BOL U: 1.89</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 1.63</span>
                <span>BOL D: 1.37</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "1.89 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "1.63 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "1.37 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.96 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "1.53 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="cante-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="cante-ind-name">{r.name}</span>
                <span className="cante-ind-val">{r.val}</span>
                <span className={`cante-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>1.63 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>1.37 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="cante-section-title"><span className="cante-section-num">03</span> İndikatörler</div>
          <div className="cante-two-col">
            <div className="cante-analysis-card">
              <div className="cante-analysis-card-head">
                <div className="cante-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="cante-analysis-card-body">
                <div className="cante-ind-row"><span className="cante-ind-name">StocK</span><span className="cante-ind-val">32.75</span><span className="cante-ind-signal neutral">Zayıf Bölge</span></div>
                <div className="cante-ind-row"><span className="cante-ind-name">StocD</span><span className="cante-ind-val">47.58</span><span className="cante-ind-signal buy">Tepki</span></div>
                <div className="cante-ind-row" style={{ borderBottom: "none" }}><span className="cante-ind-name">Konum</span><span className="cante-ind-val">Zayıf Bölge</span><span className="cante-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="cante-progress-label"><span>Aşırı Satım (0)</span><span>32.75</span><span>Aşırı Alım (100)</span></div>
                  <div className="cante-progress-bar"><div className="cante-progress-fill" style={{ width: "32.75%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="cante-analysis-card">
              <div className="cante-analysis-card-head">
                <div className="cante-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="cante-analysis-card-body">
                <div className="cante-ind-row"><span className="cante-ind-name">MACD</span><span className="cante-ind-val">-0.0493</span><span className="cante-ind-signal sell">Negatif</span></div>
                <div className="cante-ind-row"><span className="cante-ind-name">Trigger</span><span className="cante-ind-val">-0.0417</span><span className="cante-ind-signal sell">Baskı</span></div>
                <div className="cante-ind-row" style={{ borderBottom: "none" }}><span className="cante-ind-name">Momentum</span><span className="cante-ind-val">Zayıf</span><span className="cante-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="cante-analysis-card">
              <div className="cante-analysis-card-head">
                <div className="cante-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="cante-analysis-card-body">
                <div className="cante-ind-row"><span className="cante-ind-name">RSI Değeri</span><span className="cante-ind-val">39.77</span><span className="cante-ind-signal neutral">Zayıf</span></div>
                <div className="cante-ind-row" style={{ borderBottom: "none" }}><span className="cante-ind-name">Bölge</span><span className="cante-ind-val">Zayıf Bölge-Alt</span><span className="cante-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="cante-progress-label"><span>30 (A.Satım)</span><span>39.77</span><span>70 (A.Alım)</span></div>
                  <div className="cante-progress-bar"><div className="cante-progress-fill" style={{ width: "39.77%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="cante-analysis-card">
              <div className="cante-analysis-card-head">
                <div className="cante-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="cante-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="cante-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","1.54","Fiyat Altında ▼"],
                      ["MAV 13","1.60","Fiyat Altında ▼"],
                      ["MAV 21","1.60","Fiyat Altında ▼"],
                      ["MAV 55","1.65","Fiyat Altında ▼"],
                      ["MAV 89","1.68","Fiyat Altında ▼"],
                      ["MAV 144","1.69","Fiyat Altında ▼"],
                      ["MAV 233","1.69","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "cante-above" : "cante-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="cante-section-title"><span className="cante-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="cante-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "1.54–1.60", desc: "MAV 5, MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "1.63–1.65", desc: "Bollinger orta bandı ve MAV 55 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "1.68–1.89", desc: "MAV 89/144/233 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "1.51–1.53", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "1.40–1.37", desc: "Son dip alanı ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "1.30–1.37", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="cante-sr-cell" key={s.label}>
                <div className={`cante-sr-type ${s.type}`}>{s.label}</div>
                <div className="cante-sr-price">{s.price}</div>
                <div className="cante-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="cante-section-title"><span className="cante-section-num">05</span> Genel Değerlendirme</div>
          <div className="cante-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>CANTE, son kapanışını <strong>1.53 TL</strong> seviyesinde yaparak takip edilen hareketli ortalamaların tamamının altında kalmıştır. Bu yapı kısa ve orta vadeli teknik görünümde baskının sürdüğünü gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>1.63 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>1.37 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 32.75 / 47.58 seviyelerinde ve K çizgisi D çizgisinin altında. <em>MACD negatif bölgede</em> ve trigger çizgisinin altında seyrediyor. RSI 39.77 ile 40 eşiğine yakın ve 50 seviyesinin altında kaldığı için momentum tarafında zayıflık devam ediyor.</p>
            <p>1.54–1.63 TL bandının geri alınması kısa vadeli görünümü rahatlatır. 1.51 TL altı kapanışlarda ise 1.40–1.37 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="cante-section-title"><span className="cante-section-num">06</span> Senaryo Analizi</div>
          <div className="cante-scenario-grid">
            <div className="cante-scenario-card bull">
              <div className="cante-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>1.54 TL MAV 5 üzerinde kapanış</li>
                <li>1.60 TL MAV 13 seviyesinin geri alınması</li>
                <li>1.89 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 1.63–1.89 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="cante-scenario-card bear">
              <div className="cante-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>1.51 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>1.68 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 1.40–1.30 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="cante-disclaimer">
            <div className="cante-disclaimer-head">
              <div className="cante-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="cante-footer">
            <div className="cante-footer-inner">
              <div className="cante-footer-brand">HOCA İLE BORSA</div>
              <div className="cante-footer-meta">
                CANTE Teknik Analiz Raporu<br />
                Hazırlanma: 08.01.6326 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="cante-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
