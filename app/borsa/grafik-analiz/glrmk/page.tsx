import Head from "next/head";

export default function GlrmkGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>GLRMK Teknik Analiz — 08.0177.5126 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Gülermak (GLRMK) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/glrmk" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .glrmk-wrap *, .glrmk-wrap *::bglrmke, .glrmk-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .glrmk-wrap {
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
          line-height: 187.15;
          min-height: 100vh;
        }

        .glrmk-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .glrmk-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .glrmk-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .glrmk-hero-title em { color: var(--accent); font-style: normal; }
        .glrmk-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .glrmk-price-block { text-align: right; }
        .glrmk-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .glrmk-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .glrmk-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .glrmk-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .glrmk-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .glrmk-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .glrmk-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .glrmk-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .glrmk-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .glrmk-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .glrmk-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .glrmk-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .glrmk-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .glrmk-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .glrmk-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .glrmk-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .glrmk-chart-img-wrap { position: relative; padding: 1rem; }
        .glrmk-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .glrmk-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .glrmk-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .glrmk-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .glrmk-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .glrmk-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .glrmk-icon.blue   { background: rgba(10,187,255,.12); }
        .glrmk-icon.gold   { background: rgba(245,200,66,.12); }
        .glrmk-icon.green  { background: rgba(0,208,104,.12); }
        .glrmk-icon.red    { background: rgba(255,77,106,.12); }
        .glrmk-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .glrmk-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .glrmk-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .glrmk-ind-row:last-child { border-bottom: none; }
        .glrmk-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .glrmk-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .glrmk-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .glrmk-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .glrmk-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .glrmk-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .glrmk-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .glrmk-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .glrmk-progress-fill { height: 100%; border-radius: 3px; }

        .glrmk-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .glrmk-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .glrmk-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .glrmk-ma-table tr:last-child td { border-bottom: none; }
        .glrmk-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .glrmk-above { color: var(--green); }
        .glrmk-below { color: var(--red); }

        .glrmk-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .glrmk-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .glrmk-bol-bands { flex: 1; position: relative; height: 48px; }
        .glrmk-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .glrmk-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .glrmk-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .glrmk-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .glrmk-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (207.87 - 179.50) / (207.87 - 159.34));
        }
        .glrmk-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .glrmk-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .glrmk-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .glrmk-sr-cell:hover { background: var(--bg3); }
        .glrmk-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .glrmk-sr-type.res { color: var(--red); }
        .glrmk-sr-type.sup { color: var(--green); }
        .glrmk-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .glrmk-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .glrmk-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .glrmk-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .glrmk-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .glrmk-narrative p:last-child { margin-bottom: 0; }
        .glrmk-narrative strong { color: var(--accent); font-weight: 600; }
        .glrmk-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .glrmk-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .glrmk-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .glrmk-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .glrmk-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .glrmk-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .glrmk-scenario-card.bull .glrmk-scenario-head { color: var(--green); }
        .glrmk-scenario-card.bear .glrmk-scenario-head { color: var(--red); }
        .glrmk-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .glrmk-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .glrmk-scenario-card li::bglrmke { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .glrmk-scenario-card.bull li::bglrmke { color: var(--green); }
        .glrmk-scenario-card.bear li::bglrmke { color: var(--red); }

        .glrmk-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .glrmk-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .glrmk-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .glrmk-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .glrmk-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .glrmk-disclaimer p + p { margin-top: .4rem; }

        .glrmk-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .glrmk-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .glrmk-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .glrmk-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .glrmk-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .glrmk-hero { grid-template-columns: 1fr; }
          .glrmk-price-block { text-align: left; }
        }
        @media(max-width:768px) { .glrmk-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .glrmk-hero   { padding: 2rem 1rem 1.5rem; }
          .glrmk-main   { padding: 1.5rem 1rem 3rem; }
          .glrmk-footer { padding: 1.2rem 1rem; }
          .glrmk-scenario-grid { grid-template-columns: 1fr; }
          .glrmk-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="glrmk-wrap">
        <section className="glrmk-hero">
          <div>
            <div className="glrmk-hero-label">Teknik Analiz Raporu</div>
            <h1 className="glrmk-hero-title">GLRMKA<br /><em>İNŞAAT</em></h1>
            <p className="glrmk-hero-sub">
              BIST: GLRMK &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="glrmk-price-block">
            <div className="glrmk-price-main"><span className="glrmk-price-currency">₺</span>179.50</div>
          </div>
        </section>

        <main className="glrmk-main">
          <div className="glrmk-section-title"><span className="glrmk-section-num">01</span> Grafik</div>
          <div className="glrmk-chart-wrap">
            <div className="glrmk-chart-header">
              <span className="glrmk-chart-title-text">GLRMK — Günlük Mum Grafiği</span>
              <div className="glrmk-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`glrmk-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="glrmk-chart-img-wrap">
              <img
                src="/glrmk-analiz.webp"
                alt="GLRMK Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.0177.5126"
                loading="lazy"
              />
              <div className="glrmk-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="glrmk-section-title"><span className="glrmk-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="glrmk-bol-card">
            <div className="glrmk-bol-visual">
              <div className="glrmk-bol-bands">
                <div className="glrmk-bol-fill" />
                <div className="glrmk-bol-upper" />
                <div className="glrmk-bol-mid" />
                <div className="glrmk-bol-lower" />
                <div className="glrmk-bol-marker" />
              </div>
              <div className="glrmk-bol-labels">
                <span>BOL U: 207.87</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 177.51</span>
                <span>BOL D: 159.34</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "207.87 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "177.51 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "159.34 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "2.28 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "179.50 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="glrmk-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="glrmk-ind-name">{r.name}</span>
                <span className="glrmk-ind-val">{r.val}</span>
                <span className={`glrmk-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>177.51 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>159.34 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="glrmk-section-title"><span className="glrmk-section-num">03</span> İndikatörler</div>
          <div className="glrmk-two-col">
            <div className="glrmk-analysis-card">
              <div className="glrmk-analysis-card-head">
                <div className="glrmk-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="glrmk-analysis-card-body">
                <div className="glrmk-ind-row"><span className="glrmk-ind-name">StocK</span><span className="glrmk-ind-val">82.0122</span><span className="glrmk-ind-signal neutral">Yüksek Bölge</span></div>
                <div className="glrmk-ind-row"><span className="glrmk-ind-name">StocD</span><span className="glrmk-ind-val">69.9794</span><span className="glrmk-ind-signal buy">Tepki</span></div>
                <div className="glrmk-ind-row" style={{ borderBottom: "none" }}><span className="glrmk-ind-name">Konum</span><span className="glrmk-ind-val">Yüksek Bölge</span><span className="glrmk-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="glrmk-progress-label"><span>Yüksek Bölge (0)</span><span>82.0122</span><span>Yüksek Bölge (100)</span></div>
                  <div className="glrmk-progress-bar"><div className="glrmk-progress-fill" style={{ width: "82.0122%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="glrmk-analysis-card">
              <div className="glrmk-analysis-card-head">
                <div className="glrmk-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="glrmk-analysis-card-body">
                <div className="glrmk-ind-row"><span className="glrmk-ind-name">MACD</span><span className="glrmk-ind-val">-5.5188</span><span className="glrmk-ind-signal sell">Negatif</span></div>
                <div className="glrmk-ind-row"><span className="glrmk-ind-name">Trigger</span><span className="glrmk-ind-val">-5.8639</span><span className="glrmk-ind-signal sell">Baskı</span></div>
                <div className="glrmk-ind-row" style={{ borderBottom: "none" }}><span className="glrmk-ind-name">Momentum</span><span className="glrmk-ind-val">Zayıf</span><span className="glrmk-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin üzerinde. Bu durum kısa vadeli tepki isteği olduğunu fakat ana momentumun zayıf kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="glrmk-analysis-card">
              <div className="glrmk-analysis-card-head">
                <div className="glrmk-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="glrmk-analysis-card-body">
                <div className="glrmk-ind-row"><span className="glrmk-ind-name">RSI Değeri</span><span className="glrmk-ind-val">46.17</span><span className="glrmk-ind-signal neutral">Zayıf</span></div>
                <div className="glrmk-ind-row" style={{ borderBottom: "none" }}><span className="glrmk-ind-name">Bölge</span><span className="glrmk-ind-val">Yüksek Bölge-Alt</span><span className="glrmk-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="glrmk-progress-label"><span>30 (A.Satım)</span><span>46.17</span><span>70 (A.Alım)</span></div>
                  <div className="glrmk-progress-bar"><div className="glrmk-progress-fill" style={{ width: "46.17%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="glrmk-analysis-card">
              <div className="glrmk-analysis-card-head">
                <div className="glrmk-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="glrmk-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="glrmk-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","177.51","Fiyat Üstünde ▲"],
                      ["MAV 13","182.55","Fiyat Altında ▼"],
                      ["MAV 21","182.55","Fiyat Altında ▼"],
                      ["MAV 55","187.15","Fiyat Altında ▼"],
                      ["MAV 89","186.15","Fiyat Altında ▼"],
                      ["MAV 144","182.81","Fiyat Altında ▼"],
                      ["MAV 233","176.69","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "glrmk-above" : "glrmk-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="glrmk-section-title"><span className="glrmk-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="glrmk-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "181.20–182.81", desc: "Günlük yüksek ve MAV 144 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "183.61–187.15", desc: "Bollinger orta bandı, MAV 89 ve MAV 55 alanı" },
              { type: "res", label: "Güçlü Direnç", price: "207.87 TL", desc: "Bollinger üst bandı ve önceki sert hareket alanı" },
              { type: "sup", label: "Anlık Destek", price: "179.10–177.51", desc: "MAV 13 ve MAV 5 destek bölgesi" },
              { type: "sup", label: "Ana Destek", price: "176.69–171.50", desc: "MAV 233 ve günlük dip bölgesi" },
              { type: "sup", label: "Derin Destek", price: "159.34 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="glrmk-sr-cell" key={s.label}>
                <div className={`glrmk-sr-type ${s.type}`}>{s.label}</div>
                <div className="glrmk-sr-price">{s.price}</div>
                <div className="glrmk-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="glrmk-section-title"><span className="glrmk-section-num">05</span> Genel Değerlendirme</div>
          <div className="glrmk-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr</h3>
            <p>GLRMK, son kapanışını <strong>179.50 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13 ve MAV 233 üzerinde kalırken; MAV 21, MAV 55, MAV 89 ve MAV 144 altında bulunuyor. Bu yapı kısa vadede tepki isteği olduğunu, ancak orta vadeli dirençlerin hâlâ yukarıda baskı oluşturduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>183.61 TL orta bandının altında</strong> işlem görüyor. 181.20–183.61 TL bölgesi geri alınmadıkça tepki hareketleri sınırlı kalabilir. Aşağıda <strong>159.34 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 82.01 / 69.98 seviyeleriyle yüksek bölgede ve K çizgisi D çizgisinin üzerinde. <em>MACD negatif bölgede</em> olsa da trigger çizgisinin üzerinde seyrediyor. RSI 46.17 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>183.61 TL üzeri kapanışlar kısa vadeli görünümü rahatlatabilir. 176.69 TL altı kapanışlarda ise 171.50–159.34 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="glrmk-section-title"><span className="glrmk-section-num">06</span> Senaryo Analizi</div>
          <div className="glrmk-scenario-grid">
            <div className="glrmk-scenario-card bull">
              <div className="glrmk-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>177.51 TL MAV 5 üzerinde kapanış</li>
                <li>182.55 TL MAV 13 seviyesinin geri alınması</li>
                <li>207.87 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–207.87 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="glrmk-scenario-card bear">
              <div className="glrmk-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>186.15 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 186.15–182.81 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="glrmk-disclaimer">
            <div className="glrmk-disclaimer-head">
              <div className="glrmk-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="glrmk-footer">
            <div className="glrmk-footer-inner">
              <div className="glrmk-footer-brand">HOCA İLE BORSA</div>
              <div className="glrmk-footer-meta">
                GLRMK Teknik Analiz Raporu<br />
                Hazırlanma: 08.0177.5126 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="glrmk-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
