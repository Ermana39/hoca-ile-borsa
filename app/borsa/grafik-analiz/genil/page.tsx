import Head from "next/head";

export default function GenilGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>GENIL Teknik Analiz — 08.08.5426 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Gen İlaç (GENIL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/genil" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .genil-wrap *, .genil-wrap *::bgenile, .genil-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .genil-wrap {
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
          line-height: 9.21;
          min-height: 100vh;
        }

        .genil-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .genil-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .genil-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .genil-hero-title em { color: var(--accent); font-style: normal; }
        .genil-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .genil-price-block { text-align: right; }
        .genil-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .genil-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .genil-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .genil-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .genil-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .genil-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .genil-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .genil-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .genil-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .genil-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .genil-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .genil-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .genil-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .genil-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .genil-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .genil-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .genil-chart-img-wrap { position: relative; padding: 1rem; }
        .genil-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .genil-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .genil-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .genil-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .genil-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .genil-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .genil-icon.blue   { background: rgba(10,187,255,.12); }
        .genil-icon.gold   { background: rgba(245,200,66,.12); }
        .genil-icon.green  { background: rgba(0,208,104,.12); }
        .genil-icon.red    { background: rgba(255,77,106,.12); }
        .genil-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .genil-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .genil-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .genil-ind-row:last-child { border-bottom: none; }
        .genil-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .genil-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .genil-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .genil-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .genil-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .genil-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .genil-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .genil-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .genil-progress-fill { height: 100%; border-radius: 3px; }

        .genil-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .genil-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .genil-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .genil-ma-table tr:last-child td { border-bottom: none; }
        .genil-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .genil-above { color: var(--green); }
        .genil-below { color: var(--red); }

        .genil-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .genil-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .genil-bol-bands { flex: 1; position: relative; height: 48px; }
        .genil-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .genil-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .genil-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .genil-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .genil-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (9.52 - 8.61) / (9.52 - 8.00));
        }
        .genil-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .genil-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .genil-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .genil-sr-cell:hover { background: var(--bg3); }
        .genil-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .genil-sr-type.res { color: var(--red); }
        .genil-sr-type.sup { color: var(--green); }
        .genil-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .genil-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .genil-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .genil-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .genil-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .genil-narrative p:last-child { margin-bottom: 0; }
        .genil-narrative strong { color: var(--accent); font-weight: 600; }
        .genil-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .genil-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .genil-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .genil-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .genil-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .genil-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .genil-scenario-card.bull .genil-scenario-head { color: var(--green); }
        .genil-scenario-card.bear .genil-scenario-head { color: var(--red); }
        .genil-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .genil-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .genil-scenario-card li::bgenile { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .genil-scenario-card.bull li::bgenile { color: var(--green); }
        .genil-scenario-card.bear li::bgenile { color: var(--red); }

        .genil-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .genil-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .genil-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .genil-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .genil-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .genil-disclaimer p + p { margin-top: .4rem; }

        .genil-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .genil-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .genil-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .genil-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .genil-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .genil-hero { grid-template-columns: 1fr; }
          .genil-price-block { text-align: left; }
        }
        @media(max-width:768px) { .genil-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .genil-hero   { padding: 2rem 1rem 1.5rem; }
          .genil-main   { padding: 1.5rem 1rem 3rem; }
          .genil-footer { padding: 1.2rem 1rem; }
          .genil-scenario-grid { grid-template-columns: 1fr; }
          .genil-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="genil-wrap">
        <section className="genil-hero">
          <div>
            <div className="genil-hero-label">Teknik Analiz Raporu</div>
            <h1 className="genil-hero-title">GENILA<br /><em>İLAÇ</em></h1>
            <p className="genil-hero-sub">
              BIST: GENIL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="genil-price-block">
            <div className="genil-price-main"><span className="genil-price-currency">₺</span>8.61</div>
          </div>
        </section>

        <main className="genil-main">
          <div className="genil-section-title"><span className="genil-section-num">01</span> Grafik</div>
          <div className="genil-chart-wrap">
            <div className="genil-chart-header">
              <span className="genil-chart-title-text">GENIL — Günlük Mum Grafiği</span>
              <div className="genil-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`genil-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="genil-chart-img-wrap">
              <img
                src="/genil-analiz.webp"
                alt="GENIL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.08.5426"
                loading="lazy"
              />
              <div className="genil-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="genil-section-title"><span className="genil-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="genil-bol-card">
            <div className="genil-bol-visual">
              <div className="genil-bol-bands">
                <div className="genil-bol-fill" />
                <div className="genil-bol-upper" />
                <div className="genil-bol-mid" />
                <div className="genil-bol-lower" />
                <div className="genil-bol-marker" />
              </div>
              <div className="genil-bol-labels">
                <span>BOL U: 9.52</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 8.54</span>
                <span>BOL D: 8.00</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "9.52 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "8.54 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "8.00 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.89 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "8.61 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="genil-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="genil-ind-name">{r.name}</span>
                <span className="genil-ind-val">{r.val}</span>
                <span className={`genil-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>8.54 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>8.00 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="genil-section-title"><span className="genil-section-num">03</span> İndikatörler</div>
          <div className="genil-two-col">
            <div className="genil-analysis-card">
              <div className="genil-analysis-card-head">
                <div className="genil-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="genil-analysis-card-body">
                <div className="genil-ind-row"><span className="genil-ind-name">StocK</span><span className="genil-ind-val">60.3402</span><span className="genil-ind-signal neutral">Nötr Bölge</span></div>
                <div className="genil-ind-row"><span className="genil-ind-name">StocD</span><span className="genil-ind-val">57.9780</span><span className="genil-ind-signal buy">Tepki</span></div>
                <div className="genil-ind-row" style={{ borderBottom: "none" }}><span className="genil-ind-name">Konum</span><span className="genil-ind-val">Nötr Bölge</span><span className="genil-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="genil-progress-label"><span>Nötr Bölge (0)</span><span>60.3402</span><span>Nötr Bölge (100)</span></div>
                  <div className="genil-progress-bar"><div className="genil-progress-fill" style={{ width: "60.3402%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="genil-analysis-card">
              <div className="genil-analysis-card-head">
                <div className="genil-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="genil-analysis-card-body">
                <div className="genil-ind-row"><span className="genil-ind-name">MACD</span><span className="genil-ind-val">-0.2563</span><span className="genil-ind-signal sell">Negatif</span></div>
                <div className="genil-ind-row"><span className="genil-ind-name">Trigger</span><span className="genil-ind-val">-0.2570</span><span className="genil-ind-signal sell">Baskı</span></div>
                <div className="genil-ind-row" style={{ borderBottom: "none" }}><span className="genil-ind-name">Momentum</span><span className="genil-ind-val">Zayıf</span><span className="genil-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin hafif üzerinde. Bu durum kısa vadeli tepki isteği olduğunu fakat ana momentumun zayıf kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="genil-analysis-card">
              <div className="genil-analysis-card-head">
                <div className="genil-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="genil-analysis-card-body">
                <div className="genil-ind-row"><span className="genil-ind-name">RSI Değeri</span><span className="genil-ind-val">45.09</span><span className="genil-ind-signal neutral">Zayıf</span></div>
                <div className="genil-ind-row" style={{ borderBottom: "none" }}><span className="genil-ind-name">Bölge</span><span className="genil-ind-val">Nötr Bölge-Alt</span><span className="genil-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="genil-progress-label"><span>30 (A.Satım)</span><span>45.09</span><span>70 (A.Alım)</span></div>
                  <div className="genil-progress-bar"><div className="genil-progress-fill" style={{ width: "45.09%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="genil-analysis-card">
              <div className="genil-analysis-card-head">
                <div className="genil-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="genil-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="genil-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","8.54","Fiyat Üstünde ▲"],
                      ["MAV 13","8.84","Fiyat Altında ▼"],
                      ["MAV 21","8.84","Fiyat Altında ▼"],
                      ["MAV 55","9.21","Fiyat Altında ▼"],
                      ["MAV 89","9.49","Fiyat Altında ▼"],
                      ["MAV 144","9.82","Fiyat Altında ▼"],
                      ["MAV 233","9.89","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "genil-above" : "genil-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="genil-section-title"><span className="genil-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="genil-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "8.68–8.84", desc: "MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "8.76–9.21", desc: "Bollinger orta bandı ve MAV 55 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "9.49–9.89", desc: "MAV 89, MAV 144 ve MAV 233 direnç alanı" },
              { type: "sup", label: "Anlık Destek", price: "8.54–8.39", desc: "MAV 5 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "8.00 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "7.13–8.00", desc: "Grafikteki son dip ve alt bant bölgesi" },
            ].map((s) => (
              <div className="genil-sr-cell" key={s.label}>
                <div className={`genil-sr-type ${s.type}`}>{s.label}</div>
                <div className="genil-sr-price">{s.price}</div>
                <div className="genil-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="genil-section-title"><span className="genil-section-num">05</span> Genel Değerlendirme</div>
          <div className="genil-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>GENIL, son kapanışını <strong>8.61 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5 üzerinde kalmayı başarsa da MAV 13, MAV 21, MAV 55, MAV 89, MAV 144 ve MAV 233 altında bulunuyor. Bu yapı kısa vadeli tepki denemesi olsa da genel teknik görünümde baskının sürdüğünü gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>8.76 TL orta bandının altında</strong> işlem görüyor. 8.68–8.84 TL bandı geri alınmadıkça tepki hareketleri sınırlı kalabilir. Aşağıda <strong>8.00 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 60.34 / 57.98 seviyelerinde ve K çizgisi D çizgisinin üzerinde. <em>MACD negatif bölgede</em> olmasına rağmen trigger çizgisinin hafif üzerinde seyrediyor. RSI 45.09 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>8.84 TL üzeri kapanışlar kısa vadeli görünümü rahatlatabilir. 8.39 TL altı kapanışlarda ise 8.00 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="genil-section-title"><span className="genil-section-num">06</span> Senaryo Analizi</div>
          <div className="genil-scenario-grid">
            <div className="genil-scenario-card bull">
              <div className="genil-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>8.54 TL MAV 5 üzerinde kapanış</li>
                <li>8.84 TL MAV 13 seviyesinin geri alınması</li>
                <li>9.52 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–9.52 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="genil-scenario-card bear">
              <div className="genil-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>9.49 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 9.49–9.82 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="genil-disclaimer">
            <div className="genil-disclaimer-head">
              <div className="genil-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="genil-footer">
            <div className="genil-footer-inner">
              <div className="genil-footer-brand">HOCA İLE BORSA</div>
              <div className="genil-footer-meta">
                GENIL Teknik Analiz Raporu<br />
                Hazırlanma: 08.08.5426 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="genil-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
