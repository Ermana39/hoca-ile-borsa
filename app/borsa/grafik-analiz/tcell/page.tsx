import Head from "next/head";

export default function TcellGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>TCELL Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Turkcell (TCELL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/tcell" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .tcell-wrap *, .tcell-wrap *::before, .tcell-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tcell-wrap {
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

        .tcell-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .tcell-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .tcell-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .tcell-hero-title em { color: var(--accent); font-style: normal; }
        .tcell-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .tcell-price-block { text-align: right; }
        .tcell-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .tcell-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .tcell-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .tcell-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .tcell-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .tcell-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .tcell-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .tcell-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .tcell-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .tcell-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .tcell-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .tcell-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .tcell-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .tcell-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .tcell-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .tcell-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .tcell-chart-img-wrap { position: relative; padding: 1rem; }
        .tcell-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .tcell-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .tcell-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .tcell-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .tcell-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .tcell-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .tcell-icon.blue   { background: rgba(10,187,255,.12); }
        .tcell-icon.gold   { background: rgba(245,200,66,.12); }
        .tcell-icon.green  { background: rgba(0,208,104,.12); }
        .tcell-icon.red    { background: rgba(255,77,106,.12); }
        .tcell-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .tcell-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .tcell-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .tcell-ind-row:last-child { border-bottom: none; }
        .tcell-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .tcell-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .tcell-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .tcell-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .tcell-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .tcell-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .tcell-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .tcell-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .tcell-progress-fill { height: 100%; border-radius: 3px; }

        .tcell-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .tcell-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .tcell-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .tcell-ma-table tr:last-child td { border-bottom: none; }
        .tcell-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .tcell-above { color: var(--green); }
        .tcell-below { color: var(--red); }

        .tcell-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .tcell-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .tcell-bol-bands { flex: 1; position: relative; height: 48px; }
        .tcell-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tcell-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .tcell-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tcell-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .tcell-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (122.37 - 105.10) / (122.37 - 98.76));
        }
        .tcell-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .tcell-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .tcell-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .tcell-sr-cell:hover { background: var(--bg3); }
        .tcell-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .tcell-sr-type.res { color: var(--red); }
        .tcell-sr-type.sup { color: var(--green); }
        .tcell-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .tcell-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .tcell-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .tcell-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .tcell-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .tcell-narrative p:last-child { margin-bottom: 0; }
        .tcell-narrative strong { color: var(--accent); font-weight: 600; }
        .tcell-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .tcell-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .tcell-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .tcell-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .tcell-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .tcell-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .tcell-scenario-card.bull .tcell-scenario-head { color: var(--green); }
        .tcell-scenario-card.bear .tcell-scenario-head { color: var(--red); }
        .tcell-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .tcell-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .tcell-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .tcell-scenario-card.bull li::before { color: var(--green); }
        .tcell-scenario-card.bear li::before { color: var(--red); }

        .tcell-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .tcell-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .tcell-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .tcell-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .tcell-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .tcell-disclaimer p + p { margin-top: .4rem; }

        .tcell-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .tcell-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .tcell-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .tcell-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .tcell-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .tcell-hero { grid-template-columns: 1fr; }
          .tcell-price-block { text-align: left; }
        }
        @media(max-width:768px) { .tcell-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .tcell-hero   { padding: 2rem 1rem 1.5rem; }
          .tcell-main   { padding: 1.5rem 1rem 3rem; }
          .tcell-footer { padding: 1.2rem 1rem; }
          .tcell-scenario-grid { grid-template-columns: 1fr; }
          .tcell-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tcell-wrap">
        <section className="tcell-hero">
          <div>
            <div className="tcell-hero-label">Teknik Analiz Raporu</div>
            <h1 className="tcell-hero-title">TURK<br /><em>CELL</em></h1>
            <p className="tcell-hero-sub">
              BIST: TCELL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="tcell-price-block">
            <div className="tcell-price-main"><span className="tcell-price-currency">₺</span>105.10</div>
          </div>
        </section>

        <main className="tcell-main">
          <div className="tcell-section-title"><span className="tcell-section-num">01</span> Grafik</div>
          <div className="tcell-chart-wrap">
            <div className="tcell-chart-header">
              <span className="tcell-chart-title-text">TCELL — Günlük Mum Grafiği</span>
              <div className="tcell-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`tcell-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="tcell-chart-img-wrap">
              <img
                src="/tcell-analiz.webp"
                alt="TCELL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="tcell-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="tcell-section-title"><span className="tcell-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="tcell-bol-card">
            <div className="tcell-bol-visual">
              <div className="tcell-bol-bands">
                <div className="tcell-bol-fill" />
                <div className="tcell-bol-upper" />
                <div className="tcell-bol-mid" />
                <div className="tcell-bol-lower" />
                <div className="tcell-bol-marker" />
              </div>
              <div className="tcell-bol-labels">
                <span>BOL U: 122.37</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 110.57</span>
                <span>BOL D: 98.76</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "122.37 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "110.57 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "98.76 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "23.61 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "105.10 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="tcell-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="tcell-ind-name">{r.name}</span>
                <span className="tcell-ind-val">{r.val}</span>
                <span className={`tcell-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>110.57 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>98.76 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="tcell-section-title"><span className="tcell-section-num">03</span> İndikatörler</div>
          <div className="tcell-two-col">
            <div className="tcell-analysis-card">
              <div className="tcell-analysis-card-head">
                <div className="tcell-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="tcell-analysis-card-body">
                <div className="tcell-ind-row"><span className="tcell-ind-name">StocK</span><span className="tcell-ind-val">58.64</span><span className="tcell-ind-signal neutral">Nötr</span></div>
                <div className="tcell-ind-row"><span className="tcell-ind-name">StocD</span><span className="tcell-ind-val">48.75</span><span className="tcell-ind-signal buy">Tepki</span></div>
                <div className="tcell-ind-row" style={{ borderBottom: "none" }}><span className="tcell-ind-name">Konum</span><span className="tcell-ind-val">Nötr</span><span className="tcell-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tcell-progress-label"><span>Aşırı Satım (0)</span><span>58.64</span><span>Aşırı Alım (100)</span></div>
                  <div className="tcell-progress-bar"><div className="tcell-progress-fill" style={{ width: "58.64%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyat kısa vadeli ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="tcell-analysis-card">
              <div className="tcell-analysis-card-head">
                <div className="tcell-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="tcell-analysis-card-body">
                <div className="tcell-ind-row"><span className="tcell-ind-name">MACD</span><span className="tcell-ind-val">-2.2601</span><span className="tcell-ind-signal sell">Negatif</span></div>
                <div className="tcell-ind-row"><span className="tcell-ind-name">Trigger</span><span className="tcell-ind-val">-1.8712</span><span className="tcell-ind-signal sell">Baskı</span></div>
                <div className="tcell-ind-row" style={{ borderBottom: "none" }}><span className="tcell-ind-name">Momentum</span><span className="tcell-ind-val">Zayıf</span><span className="tcell-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="tcell-analysis-card">
              <div className="tcell-analysis-card-head">
                <div className="tcell-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="tcell-analysis-card-body">
                <div className="tcell-ind-row"><span className="tcell-ind-name">RSI Değeri</span><span className="tcell-ind-val">42.89</span><span className="tcell-ind-signal neutral">Zayıf</span></div>
                <div className="tcell-ind-row" style={{ borderBottom: "none" }}><span className="tcell-ind-name">Bölge</span><span className="tcell-ind-val">Nötr-Alt</span><span className="tcell-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tcell-progress-label"><span>30 (A.Satım)</span><span>42.89</span><span>70 (A.Alım)</span></div>
                  <div className="tcell-progress-bar"><div className="tcell-progress-fill" style={{ width: "42.89%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="tcell-analysis-card">
              <div className="tcell-analysis-card-head">
                <div className="tcell-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="tcell-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="tcell-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","106.02","Fiyat Altında ▼"],
                      ["MAV 13","107.50","Fiyat Altında ▼"],
                      ["MAV 21","108.94","Fiyat Altında ▼"],
                      ["MAV 55","110.71","Fiyat Altında ▼"],
                      ["MAV 89","109.95","Fiyat Altında ▼"],
                      ["MAV 144","107.66","Fiyat Altında ▼"],
                      ["MAV 233","104.02","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "tcell-above" : "tcell-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tcell-section-title"><span className="tcell-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="tcell-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "106.02–107.50", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "108.94–110.57", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "110.71–122.37", desc: "MAV 55 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "104.60–105.10", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "104.02 TL", desc: "MAV 233 destek bölgesi" },
              { type: "sup", label: "Derin Destek", price: "98.76 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="tcell-sr-cell" key={s.label}>
                <div className={`tcell-sr-type ${s.type}`}>{s.label}</div>
                <div className="tcell-sr-price">{s.price}</div>
                <div className="tcell-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="tcell-section-title"><span className="tcell-section-num">05</span> Genel Değerlendirme</div>
          <div className="tcell-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TCELL, son kapanışını <strong>105.10 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>110.57 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 106.02–110.57 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>104.02–98.76 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="tcell-section-title"><span className="tcell-section-num">06</span> Senaryo Analizi</div>
          <div className="tcell-scenario-grid">
            <div className="tcell-scenario-card bull">
              <div className="tcell-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>106.02 TL MAV 5 üzerinde kapanış</li>
                <li>107.50 TL MAV 13 seviyesinin geri alınması</li>
                <li>110.57 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 110.57–122.37 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="tcell-scenario-card bear">
              <div className="tcell-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>104.02 TL MAV 233 desteğine geri çekilme</li>
                <li>Hedef: 104.02–98.76 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="tcell-disclaimer">
            <div className="tcell-disclaimer-head">
              <div className="tcell-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="tcell-footer">
            <div className="tcell-footer-inner">
              <div className="tcell-footer-brand">HOCA İLE BORSA</div>
              <div className="tcell-footer-meta">
                TCELL Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="tcell-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
