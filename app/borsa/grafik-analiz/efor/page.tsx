import Head from "next/head";

export default function EforGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>EFOR Teknik Analiz — 08.011.9626 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Efor Çay (EFOR) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/efor" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .efor-wrap *, .efor-wrap *::before, .efor-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .efor-wrap {
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
          line-height: 12.49;
          min-height: 100vh;
        }

        .efor-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .efor-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .efor-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .efor-hero-title em { color: var(--accent); font-style: normal; }
        .efor-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .efor-price-block { text-align: right; }
        .efor-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .efor-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .efor-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .efor-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .efor-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .efor-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .efor-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .efor-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .efor-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .efor-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .efor-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .efor-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .efor-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .efor-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .efor-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .efor-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .efor-chart-img-wrap { position: relative; padding: 1rem; }
        .efor-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .efor-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .efor-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .efor-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .efor-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .efor-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .efor-icon.blue   { background: rgba(10,187,255,.12); }
        .efor-icon.gold   { background: rgba(245,200,66,.12); }
        .efor-icon.green  { background: rgba(0,208,104,.12); }
        .efor-icon.red    { background: rgba(255,77,106,.12); }
        .efor-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .efor-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .efor-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .efor-ind-row:last-child { border-bottom: none; }
        .efor-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .efor-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .efor-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .efor-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .efor-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .efor-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .efor-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .efor-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .efor-progress-fill { height: 100%; border-radius: 3px; }

        .efor-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .efor-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .efor-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .efor-ma-table tr:last-child td { border-bottom: none; }
        .efor-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .efor-above { color: var(--green); }
        .efor-below { color: var(--red); }

        .efor-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .efor-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .efor-bol-bands { flex: 1; position: relative; height: 48px; }
        .efor-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .efor-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .efor-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .efor-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .efor-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (13.61 - 12.50) / (13.61 - 10.30));
        }
        .efor-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .efor-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .efor-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .efor-sr-cell:hover { background: var(--bg3); }
        .efor-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .efor-sr-type.res { color: var(--red); }
        .efor-sr-type.sup { color: var(--green); }
        .efor-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .efor-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .efor-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .efor-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .efor-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .efor-narrative p:last-child { margin-bottom: 0; }
        .efor-narrative strong { color: var(--accent); font-weight: 600; }
        .efor-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .efor-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .efor-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .efor-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .efor-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .efor-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .efor-scenario-card.bull .efor-scenario-head { color: var(--green); }
        .efor-scenario-card.bear .efor-scenario-head { color: var(--red); }
        .efor-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .efor-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .efor-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .efor-scenario-card.bull li::before { color: var(--green); }
        .efor-scenario-card.bear li::before { color: var(--red); }

        .efor-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .efor-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .efor-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .efor-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .efor-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .efor-disclaimer p + p { margin-top: .4rem; }

        .efor-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .efor-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .efor-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .efor-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .efor-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .efor-hero { grid-template-columns: 1fr; }
          .efor-price-block { text-align: left; }
        }
        @media(max-width:768px) { .efor-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .efor-hero   { padding: 2rem 1rem 1.5rem; }
          .efor-main   { padding: 1.5rem 1rem 3rem; }
          .efor-footer { padding: 1.2rem 1rem; }
          .efor-scenario-grid { grid-template-columns: 1fr; }
          .efor-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="efor-wrap">
        <section className="efor-hero">
          <div>
            <div className="efor-hero-label">Teknik Analiz Raporu</div>
            <h1 className="efor-hero-title">EFOR<br /><em>ÇAY</em></h1>
            <p className="efor-hero-sub">
              BIST: EFOR &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="efor-price-block">
            <div className="efor-price-main"><span className="efor-price-currency">₺</span>12.50</div>
          </div>
        </section>

        <main className="efor-main">
          <div className="efor-section-title"><span className="efor-section-num">01</span> Grafik</div>
          <div className="efor-chart-wrap">
            <div className="efor-chart-header">
              <span className="efor-chart-title-text">EFOR — Günlük Mum Grafiği</span>
              <div className="efor-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`efor-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="efor-chart-img-wrap">
              <img
                src="/efor-analiz.webp"
                alt="EFOR Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.011.9626"
                loading="lazy"
              />
              <div className="efor-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="efor-section-title"><span className="efor-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="efor-bol-card">
            <div className="efor-bol-visual">
              <div className="efor-bol-bands">
                <div className="efor-bol-fill" />
                <div className="efor-bol-upper" />
                <div className="efor-bol-mid" />
                <div className="efor-bol-lower" />
                <div className="efor-bol-marker" />
              </div>
              <div className="efor-bol-labels">
                <span>BOL U: 13.61</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 11.96</span>
                <span>BOL D: 10.30</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "13.61 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "11.96 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "10.30 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "2.34 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "12.50 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="efor-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="efor-ind-name">{r.name}</span>
                <span className="efor-ind-val">{r.val}</span>
                <span className={`efor-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>11.96 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>10.30 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="efor-section-title"><span className="efor-section-num">03</span> İndikatörler</div>
          <div className="efor-two-col">
            <div className="efor-analysis-card">
              <div className="efor-analysis-card-head">
                <div className="efor-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="efor-analysis-card-body">
                <div className="efor-ind-row"><span className="efor-ind-name">StocK</span><span className="efor-ind-val">78.6534</span><span className="efor-ind-signal neutral">Yüksek Bölge</span></div>
                <div className="efor-ind-row"><span className="efor-ind-name">StocD</span><span className="efor-ind-val">68.4853</span><span className="efor-ind-signal buy">Tepki</span></div>
                <div className="efor-ind-row" style={{ borderBottom: "none" }}><span className="efor-ind-name">Konum</span><span className="efor-ind-val">Yüksek Bölge</span><span className="efor-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="efor-progress-label"><span>Yüksek Bölge (0)</span><span>78.6534</span><span>Yüksek Bölge (100)</span></div>
                  <div className="efor-progress-bar"><div className="efor-progress-fill" style={{ width: "78.6534%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="efor-analysis-card">
              <div className="efor-analysis-card-head">
                <div className="efor-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="efor-analysis-card-body">
                <div className="efor-ind-row"><span className="efor-ind-name">MACD</span><span className="efor-ind-val">0.3028</span><span className="efor-ind-signal sell">Negatif</span></div>
                <div className="efor-ind-row"><span className="efor-ind-name">Trigger</span><span className="efor-ind-val">-0.2237</span><span className="efor-ind-signal sell">Baskı</span></div>
                <div className="efor-ind-row" style={{ borderBottom: "none" }}><span className="efor-ind-name">Momentum</span><span className="efor-ind-val">Zayıf</span><span className="efor-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Bu durum kısa vadeli momentumun pozitif tarafta kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="efor-analysis-card">
              <div className="efor-analysis-card-head">
                <div className="efor-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="efor-analysis-card-body">
                <div className="efor-ind-row"><span className="efor-ind-name">RSI Değeri</span><span className="efor-ind-val">56.41</span><span className="efor-ind-signal neutral">Zayıf</span></div>
                <div className="efor-ind-row" style={{ borderBottom: "none" }}><span className="efor-ind-name">Bölge</span><span className="efor-ind-val">Yüksek Bölge-Alt</span><span className="efor-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="efor-progress-label"><span>30 (A.Satım)</span><span>56.41</span><span>70 (A.Alım)</span></div>
                  <div className="efor-progress-bar"><div className="efor-progress-fill" style={{ width: "56.41%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="efor-analysis-card">
              <div className="efor-analysis-card-head">
                <div className="efor-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="efor-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="efor-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","12.23","Fiyat Üstünde ▲"],
                      ["MAV 13","11.66","Fiyat Altında ▼"],
                      ["MAV 21","11.66","Fiyat Üstünde ▲"],
                      ["MAV 55","12.49","Fiyat Üstünde ▲"],
                      ["MAV 89","14.22","Fiyat Altında ▼"],
                      ["MAV 144","16.02","Fiyat Altında ▼"],
                      ["MAV 233","16.74","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "efor-above" : "efor-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="efor-section-title"><span className="efor-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="efor-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "12.74–13.61", desc: "Günlük yüksek ve Bollinger üst bandı" },
              { type: "res", label: "Kritik Direnç", price: "14.22 TL", desc: "MAV 89 direnç bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "16.02–16.74", desc: "MAV 144 ve MAV 233 uzun vadeli direnç alanı" },
              { type: "sup", label: "Anlık Destek", price: "12.49–12.23", desc: "MAV 55 ve MAV 5 destek bölgesi" },
              { type: "sup", label: "Ana Destek", price: "11.96–11.66", desc: "Bollinger orta bandı ve MAV 21 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "10.30 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="efor-sr-cell" key={s.label}>
                <div className={`efor-sr-type ${s.type}`}>{s.label}</div>
                <div className="efor-sr-price">{s.price}</div>
                <div className="efor-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="efor-section-title"><span className="efor-section-num">05</span> Genel Değerlendirme</div>
          <div className="efor-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>EFOR, son kapanışını <strong>12.50 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13, MAV 21 ve MAV 55 üzerinde kalırken; MAV 89, MAV 144 ve MAV 233 altında bulunuyor. Bu yapı kısa vadede tepki hareketinin güçlendiğini, ancak orta-uzun vadeli dirençlerin hâlâ yukarıda baskı oluşturduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>11.96 TL orta bandının üzerinde</strong> işlem görüyor. Bu görünüm kısa vadeli tepkiyi destekliyor. Yukarıda <strong>13.61 TL</strong> Bollinger üst bandı ve ardından <strong>14.22 TL</strong> MAV 89 seviyesi kritik direnç olarak izlenebilir.</p>
            <p>Stochastic göstergesi 78.65 / 68.49 seviyeleriyle yüksek bölgede ve K çizgisi D çizgisinin üzerinde. <em>MACD pozitif bölgede</em> ve trigger çizgisinin üzerinde seyrediyor. RSI 56.41 ile 50 eşiğinin üzerinde kaldığı için momentum tarafı kısa vadede pozitif.</p>
            <p>12.49 TL üzerinde kalıcılık tepki görünümünü korur. 11.96 TL altı kapanışlarda ise 11.66–10.30 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="efor-section-title"><span className="efor-section-num">06</span> Senaryo Analizi</div>
          <div className="efor-scenario-grid">
            <div className="efor-scenario-card bull">
              <div className="efor-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>12.23 TL MAV 5 üzerinde kapanış</li>
                <li>11.66 TL MAV 13 seviyesinin geri alınması</li>
                <li>13.61 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 14.22–16.74 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="efor-scenario-card bear">
              <div className="efor-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>12.49 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>14.22 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 14.22–16.02 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="efor-disclaimer">
            <div className="efor-disclaimer-head">
              <div className="efor-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="efor-footer">
            <div className="efor-footer-inner">
              <div className="efor-footer-brand">HOCA İLE BORSA</div>
              <div className="efor-footer-meta">
                EFOR Teknik Analiz Raporu<br />
                Hazırlanma: 08.011.9626 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="efor-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
