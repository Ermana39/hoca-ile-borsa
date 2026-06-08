import Head from "next/head";

export default function EupwrGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>EUPWR Teknik Analiz — 08.085.3526 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Europower Enerji (EUPWR) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/eupwr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .eupwr-wrap *, .eupwr-wrap *::beupwre, .eupwr-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .eupwr-wrap {
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
          line-height: 58.01;
          min-height: 100vh;
        }

        .eupwr-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .eupwr-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .eupwr-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .eupwr-hero-title em { color: var(--accent); font-style: normal; }
        .eupwr-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .eupwr-price-block { text-align: right; }
        .eupwr-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .eupwr-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .eupwr-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .eupwr-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .eupwr-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .eupwr-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .eupwr-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .eupwr-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .eupwr-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .eupwr-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .eupwr-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .eupwr-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .eupwr-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .eupwr-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .eupwr-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .eupwr-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .eupwr-chart-img-wrap { position: relative; padding: 1rem; }
        .eupwr-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .eupwr-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .eupwr-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .eupwr-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .eupwr-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .eupwr-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .eupwr-icon.blue   { background: rgba(10,187,255,.12); }
        .eupwr-icon.gold   { background: rgba(245,200,66,.12); }
        .eupwr-icon.green  { background: rgba(0,208,104,.12); }
        .eupwr-icon.red    { background: rgba(255,77,106,.12); }
        .eupwr-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .eupwr-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .eupwr-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .eupwr-ind-row:last-child { border-bottom: none; }
        .eupwr-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .eupwr-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .eupwr-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .eupwr-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .eupwr-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .eupwr-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .eupwr-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .eupwr-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .eupwr-progress-fill { height: 100%; border-radius: 3px; }

        .eupwr-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .eupwr-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .eupwr-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .eupwr-ma-table tr:last-child td { border-bottom: none; }
        .eupwr-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .eupwr-above { color: var(--green); }
        .eupwr-below { color: var(--red); }

        .eupwr-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .eupwr-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .eupwr-bol-bands { flex: 1; position: relative; height: 48px; }
        .eupwr-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .eupwr-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .eupwr-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .eupwr-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .eupwr-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (93.61 - 87.40) / (93.61 - 48.93));
        }
        .eupwr-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .eupwr-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .eupwr-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .eupwr-sr-cell:hover { background: var(--bg3); }
        .eupwr-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .eupwr-sr-type.res { color: var(--red); }
        .eupwr-sr-type.sup { color: var(--green); }
        .eupwr-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .eupwr-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .eupwr-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .eupwr-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .eupwr-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .eupwr-narrative p:last-child { margin-bottom: 0; }
        .eupwr-narrative strong { color: var(--accent); font-weight: 600; }
        .eupwr-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .eupwr-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .eupwr-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .eupwr-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .eupwr-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .eupwr-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .eupwr-scenario-card.bull .eupwr-scenario-head { color: var(--green); }
        .eupwr-scenario-card.bear .eupwr-scenario-head { color: var(--red); }
        .eupwr-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .eupwr-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .eupwr-scenario-card li::beupwre { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .eupwr-scenario-card.bull li::beupwre { color: var(--green); }
        .eupwr-scenario-card.bear li::beupwre { color: var(--red); }

        .eupwr-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .eupwr-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .eupwr-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .eupwr-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .eupwr-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .eupwr-disclaimer p + p { margin-top: .4rem; }

        .eupwr-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .eupwr-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .eupwr-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .eupwr-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .eupwr-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .eupwr-hero { grid-template-columns: 1fr; }
          .eupwr-price-block { text-align: left; }
        }
        @media(max-width:768px) { .eupwr-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .eupwr-hero   { padding: 2rem 1rem 1.5rem; }
          .eupwr-main   { padding: 1.5rem 1rem 3rem; }
          .eupwr-footer { padding: 1.2rem 1rem; }
          .eupwr-scenario-grid { grid-template-columns: 1fr; }
          .eupwr-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="eupwr-wrap">
        <section className="eupwr-hero">
          <div>
            <div className="eupwr-hero-label">Teknik Analiz Raporu</div>
            <h1 className="eupwr-hero-title">EUPWRA<br /><em>ENERJİ</em></h1>
            <p className="eupwr-hero-sub">
              BIST: EUPWR &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="eupwr-price-block">
            <div className="eupwr-price-main"><span className="eupwr-price-currency">₺</span>87.40</div>
          </div>
        </section>

        <main className="eupwr-main">
          <div className="eupwr-section-title"><span className="eupwr-section-num">01</span> Grafik</div>
          <div className="eupwr-chart-wrap">
            <div className="eupwr-chart-header">
              <span className="eupwr-chart-title-text">EUPWR — Günlük Mum Grafiği</span>
              <div className="eupwr-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`eupwr-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="eupwr-chart-img-wrap">
              <img
                src="/eupwr-analiz.webp"
                alt="EUPWR Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.085.3526"
                loading="lazy"
              />
              <div className="eupwr-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="eupwr-section-title"><span className="eupwr-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="eupwr-bol-card">
            <div className="eupwr-bol-visual">
              <div className="eupwr-bol-bands">
                <div className="eupwr-bol-fill" />
                <div className="eupwr-bol-upper" />
                <div className="eupwr-bol-mid" />
                <div className="eupwr-bol-lower" />
                <div className="eupwr-bol-marker" />
              </div>
              <div className="eupwr-bol-labels">
                <span>BOL U: 93.61</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 85.35</span>
                <span>BOL D: 48.93</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "93.61 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "85.35 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "48.93 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.47 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "87.40 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="eupwr-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="eupwr-ind-name">{r.name}</span>
                <span className="eupwr-ind-val">{r.val}</span>
                <span className={`eupwr-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>85.35 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>48.93 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="eupwr-section-title"><span className="eupwr-section-num">03</span> İndikatörler</div>
          <div className="eupwr-two-col">
            <div className="eupwr-analysis-card">
              <div className="eupwr-analysis-card-head">
                <div className="eupwr-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="eupwr-analysis-card-body">
                <div className="eupwr-ind-row"><span className="eupwr-ind-name">StocK</span><span className="eupwr-ind-val">39.4073</span><span className="eupwr-ind-signal neutral">Nötr Bölge</span></div>
                <div className="eupwr-ind-row"><span className="eupwr-ind-name">StocD</span><span className="eupwr-ind-val">39.2975</span><span className="eupwr-ind-signal buy">Tepki</span></div>
                <div className="eupwr-ind-row" style={{ borderBottom: "none" }}><span className="eupwr-ind-name">Konum</span><span className="eupwr-ind-val">Nötr Bölge</span><span className="eupwr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="eupwr-progress-label"><span>Nötr Bölge (0)</span><span>39.4073</span><span>Nötr Bölge (100)</span></div>
                  <div className="eupwr-progress-bar"><div className="eupwr-progress-fill" style={{ width: "39.4073%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="eupwr-analysis-card">
              <div className="eupwr-analysis-card-head">
                <div className="eupwr-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="eupwr-analysis-card-body">
                <div className="eupwr-ind-row"><span className="eupwr-ind-name">MACD</span><span className="eupwr-ind-val">9.9550</span><span className="eupwr-ind-signal sell">Negatif</span></div>
                <div className="eupwr-ind-row"><span className="eupwr-ind-name">Trigger</span><span className="eupwr-ind-val">8.7070</span><span className="eupwr-ind-signal sell">Baskı</span></div>
                <div className="eupwr-ind-row" style={{ borderBottom: "none" }}><span className="eupwr-ind-name">Momentum</span><span className="eupwr-ind-val">Zayıf</span><span className="eupwr-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Bu durum kısa vadeli momentumun güçlü kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="eupwr-analysis-card">
              <div className="eupwr-analysis-card-head">
                <div className="eupwr-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="eupwr-analysis-card-body">
                <div className="eupwr-ind-row"><span className="eupwr-ind-name">RSI Değeri</span><span className="eupwr-ind-val">73.82</span><span className="eupwr-ind-signal neutral">Zayıf</span></div>
                <div className="eupwr-ind-row" style={{ borderBottom: "none" }}><span className="eupwr-ind-name">Bölge</span><span className="eupwr-ind-val">Nötr Bölge-Alt</span><span className="eupwr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="eupwr-progress-label"><span>30 (A.Satım)</span><span>73.82</span><span>70 (A.Alım)</span></div>
                  <div className="eupwr-progress-bar"><div className="eupwr-progress-fill" style={{ width: "73.82%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="eupwr-analysis-card">
              <div className="eupwr-analysis-card-head">
                <div className="eupwr-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="eupwr-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="eupwr-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","85.35","Fiyat Üstünde ▲"],
                      ["MAV 13","72.24","Fiyat Altında ▼"],
                      ["MAV 21","72.24","Fiyat Üstünde ▲"],
                      ["MAV 55","58.01","Fiyat Üstünde ▲"],
                      ["MAV 89","51.40","Fiyat Üstünde ▲"],
                      ["MAV 144","45.63","Fiyat Üstünde ▲"],
                      ["MAV 233","41.20","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "eupwr-above" : "eupwr-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="eupwr-section-title"><span className="eupwr-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="eupwr-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "88.45–93.35", desc: "Günlük açılış ve gün içi yüksek bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "93.61 TL", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "100.00 TL", desc: "Psikolojik direnç bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "85.35–84.60", desc: "MAV 5 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "78.27–72.24", desc: "MAV 13 ve MAV 21 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "71.27–58.01", desc: "Bollinger orta bandı ve MAV 55 destek bölgesi" },
            ].map((s) => (
              <div className="eupwr-sr-cell" key={s.label}>
                <div className={`eupwr-sr-type ${s.type}`}>{s.label}</div>
                <div className="eupwr-sr-price">{s.price}</div>
                <div className="eupwr-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="eupwr-section-title"><span className="eupwr-section-num">05</span> Genel Değerlendirme</div>
          <div className="eupwr-narrative">
            <h3>Kısa Vadeli Görünüm: Pozitif</h3>
            <p>EUPWR, son kapanışını <strong>87.40 TL</strong> seviyesinde yapmıştır. Fiyat takip edilen tüm hareketli ortalamaların üzerinde bulunuyor. Bu yapı kısa, orta ve uzun vadeli trend tarafında güçlü görünümün korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>71.27 TL orta bandının oldukça üzerinde</strong> işlem görüyor ve 93.61 TL üst banda yakın bölgede seyrediyor. Bu durum güçlü trendi desteklese de üst banda yakınlık nedeniyle kısa vadeli kar satışı riski de göz ardı edilmemeli.</p>
            <p>Stochastic göstergesi 39.41 / 39.30 seviyelerinde nötr bölgede ve çizgiler birbirine çok yakın. <em>MACD pozitif bölgede</em> ve trigger çizgisinin üzerinde seyrediyor. RSI 73.82 ile aşırı alım bölgesine yakın olduğu için yükseliş gücü korunurken kısa vadeli yorulma riski de izlenmelidir.</p>
            <p>85.35 TL üzerinde kalıcılık pozitif görünümü destekler. 84.60 TL altı kapanışlarda ise 78.27–72.24 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="eupwr-section-title"><span className="eupwr-section-num">06</span> Senaryo Analizi</div>
          <div className="eupwr-scenario-grid">
            <div className="eupwr-scenario-card bull">
              <div className="eupwr-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>85.35 TL MAV 5 üzerinde kapanış</li>
                <li>72.24 TL MAV 13 seviyesinin geri alınması</li>
                <li>93.61 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–93.61 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="eupwr-scenario-card bear">
              <div className="eupwr-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>51.40 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 51.40–45.63 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="eupwr-disclaimer">
            <div className="eupwr-disclaimer-head">
              <div className="eupwr-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="eupwr-footer">
            <div className="eupwr-footer-inner">
              <div className="eupwr-footer-brand">HOCA İLE BORSA</div>
              <div className="eupwr-footer-meta">
                EUPWR Teknik Analiz Raporu<br />
                Hazırlanma: 08.085.3526 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="eupwr-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
