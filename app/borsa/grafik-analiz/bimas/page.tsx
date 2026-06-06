import Head from "next/head";

export default function BimasGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>BIMAS Teknik Analiz — 06.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="BİM Birleşik Mağazalar (BIMAS) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/bimas" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .bimas-wrap *, .bimas-wrap *::before, .bimas-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .bimas-wrap {
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

        /* HERO */
        .bimas-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .bimas-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .bimas-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .bimas-hero-title em { color: var(--accent); font-style: normal; }
        .bimas-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .bimas-price-block { text-align: right; }
        .bimas-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .bimas-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .bimas-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .bimas-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .bimas-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .bimas-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .bimas-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .bimas-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .bimas-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .bimas-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .bimas-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .bimas-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .bimas-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .bimas-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .bimas-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .bimas-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .bimas-chart-img-wrap { position: relative; padding: 1rem; }
        .bimas-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .bimas-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .bimas-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .bimas-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .bimas-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .bimas-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .bimas-icon.blue   { background: rgba(10,187,255,.12); }
        .bimas-icon.gold   { background: rgba(245,200,66,.12); }
        .bimas-icon.green  { background: rgba(0,208,104,.12); }
        .bimas-icon.red    { background: rgba(255,77,106,.12); }
        .bimas-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .bimas-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .bimas-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .bimas-ind-row:last-child { border-bottom: none; }
        .bimas-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .bimas-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .bimas-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .bimas-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .bimas-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .bimas-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .bimas-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .bimas-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .bimas-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .bimas-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .bimas-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .bimas-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .bimas-ma-table tr:last-child td { border-bottom: none; }
        .bimas-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .bimas-above { color: var(--green); }
        .bimas-below { color: var(--red); }

        /* BOLLINGER */
        .bimas-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .bimas-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .bimas-bol-bands { flex: 1; position: relative; height: 48px; }
        .bimas-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .bimas-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .bimas-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .bimas-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .bimas-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (410.96 - 377.25) / (410.96 - 363.44));
        }
        .bimas-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .bimas-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .bimas-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .bimas-sr-cell:hover { background: var(--bg3); }
        .bimas-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .bimas-sr-type.res { color: var(--red); }
        .bimas-sr-type.sup { color: var(--green); }
        .bimas-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .bimas-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .bimas-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .bimas-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .bimas-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .bimas-narrative p:last-child { margin-bottom: 0; }
        .bimas-narrative strong { color: var(--accent); font-weight: 600; }
        .bimas-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .bimas-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .bimas-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .bimas-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .bimas-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .bimas-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .bimas-scenario-card.bull .bimas-scenario-head { color: var(--green); }
        .bimas-scenario-card.bear .bimas-scenario-head { color: var(--red); }
        .bimas-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .bimas-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .bimas-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .bimas-scenario-card.bull li::before { color: var(--green); }
        .bimas-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .bimas-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .bimas-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .bimas-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .bimas-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .bimas-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .bimas-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .bimas-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .bimas-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .bimas-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .bimas-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .bimas-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .bimas-hero { grid-template-columns: 1fr; }
          .bimas-price-block { text-align: left; }
        }
        @media(max-width:768px) { .bimas-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .bimas-hero   { padding: 2rem 1rem 1.5rem; }
          .bimas-main   { padding: 1.5rem 1rem 3rem; }
          .bimas-footer { padding: 1.2rem 1rem; }
          .bimas-scenario-grid { grid-template-columns: 1fr; }
          .bimas-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bimas-wrap">
        {/* HERO */}
        <section className="bimas-hero">
          <div>
            <div className="bimas-hero-label">Teknik Analiz Raporu</div>
            <h1 className="bimas-hero-title">BİM<br /><em>MAĞAZALAR</em></h1>
            <p className="bimas-hero-sub">&nbsp;·&nbsp; 05 Haziran 2026</p>
          </div>
          <div className="bimas-price-block">
            <div className="bimas-price-main"><span className="bimas-price-currency">₺</span>377.25</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="bimas-main">
          {/* CHART */}
          <div className="bimas-section-title"><span className="bimas-section-num">01</span> Grafik</div>
          <div className="bimas-chart-wrap">
            <div className="bimas-chart-header">
              <span className="bimas-chart-title-text">BIMAS — Günlük Mum Grafiği</span>
              <div className="bimas-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`bimas-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="bimas-chart-img-wrap">
              <img
                src="/bimas-analiz.webp"
                alt="BIMAS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="bimas-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="bimas-section-title"><span className="bimas-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="bimas-bol-card">
            <div className="bimas-bol-visual">
              <div className="bimas-bol-bands">
                <div className="bimas-bol-fill" />
                <div className="bimas-bol-upper" />
                <div className="bimas-bol-mid" />
                <div className="bimas-bol-lower" />
                <div className="bimas-bol-marker" />
              </div>
              <div className="bimas-bol-labels">
                <span>BOL U: 410.96</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 387.20</span>
                <span>BOL D: 363.44</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",  val: "410.96 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "387.20 TL", sig: "Direnç", cls: "sell" },
              { name: "Alt Band (BOL D)",  val: "363.44 TL", sig: "Destek", cls: "buy" },
              { name: "Bant Genişliği",    val: "47.52 TL",  sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",    val: "377.25 TL", sig: "Orta-Alt Bant", cls: "neutral" },
            ].map((r, i) => (
              <div className="bimas-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="bimas-ind-name">{r.name}</span>
                <span className="bimas-ind-val">{r.val}</span>
                <span className={`bimas-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>387.20 TL'nin altında</strong> ve alt banda daha yakın bölgede konumlanıyor. 387.20 TL üzerine dönüş gelmeden kısa vadeli tepki hareketleri sınırlı kalabilir. Aşağıda 363.44 TL alt bandı ana destek olarak takip edilmelidir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="bimas-section-title"><span className="bimas-section-num">03</span> İndikatörler</div>
          <div className="bimas-two-col">
            {/* Stochastic */}
            <div className="bimas-analysis-card">
              <div className="bimas-analysis-card-head">
                <div className="bimas-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="bimas-analysis-card-body">
                <div className="bimas-ind-row"><span className="bimas-ind-name">StocK</span><span className="bimas-ind-val">10.86</span><span className="bimas-ind-signal sell">ZAYIF</span></div>
                <div className="bimas-ind-row"><span className="bimas-ind-name">StocD</span><span className="bimas-ind-val">10.92</span><span className="bimas-ind-signal sell">SAT</span></div>
                <div className="bimas-ind-row" style={{ borderBottom: "none" }}><span className="bimas-ind-name">Konum</span><span className="bimas-ind-val">Aşırı Satım</span><span className="bimas-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="bimas-progress-label"><span>Aşırı Satım (0)</span><span>10.86</span><span>Aşırı Alım (100)</span></div>
                  <div className="bimas-progress-bar"><div className="bimas-progress-fill" style={{ width: "10.86%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı satım bölgesinde. K ve D çizgileri birbirine çok yakın olduğu için tepki ihtimali izlenebilir; ancak güçlü dönüş için fiyat teyidi gerekir.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="bimas-analysis-card">
              <div className="bimas-analysis-card-head">
                <div className="bimas-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="bimas-analysis-card-body">
                <div className="bimas-ind-row"><span className="bimas-ind-name">MACD</span><span className="bimas-ind-val">8.0193</span><span className="bimas-ind-signal buy">POZİTİF</span></div>
                <div className="bimas-ind-row"><span className="bimas-ind-name">Trigger</span><span className="bimas-ind-val">3.7598</span><span className="bimas-ind-signal buy">ÜSTÜNDE</span></div>
                <div className="bimas-ind-row" style={{ borderBottom: "none" }}><span className="bimas-ind-name">Momentum</span><span className="bimas-ind-val">Pozitif</span><span className="bimas-ind-signal neutral">Zayıflıyor</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger üzerinde kalsa da son fiyat hareketinde momentum zayıflaması görülüyor. 387.20 TL üzerine dönüş teyit açısından önemli olacaktır.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="bimas-analysis-card">
              <div className="bimas-analysis-card-head">
                <div className="bimas-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="bimas-analysis-card-body">
                <div className="bimas-ind-row"><span className="bimas-ind-name">RSI Değeri</span><span className="bimas-ind-val">48.65</span><span className="bimas-ind-signal neutral">NÖTR</span></div>
                <div className="bimas-ind-row" style={{ borderBottom: "none" }}><span className="bimas-ind-name">Bölge</span><span className="bimas-ind-val">50 Altı</span><span className="bimas-ind-signal sell">Zayıf</span></div>
                <div>
                  <div className="bimas-progress-label"><span>30 (A.Satım)</span><span>48.65</span><span>70 (A.Alım)</span></div>
                  <div className="bimas-progress-bar"><div className="bimas-progress-fill" style={{ width: "48.65%", background: "linear-gradient(90deg,var(--warn),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen altında. 50 üzerine dönüş kısa vadeli toparlanmayı destekler; 45 altına sarkma satış baskısını artırabilir.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="bimas-analysis-card">
              <div className="bimas-analysis-card-head">
                <div className="bimas-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="bimas-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="bimas-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","377.47","below"],
                      ["MAV 13","381.11","below"],
                      ["MAV 21","381.14","below"],
                      ["MAV 55","369.07","above"],
                      ["MAV 89","355.10","above"],
                      ["MAV 144","336.25","above"],
                      ["MAV 233","314.57","above"],
                    ].map(([p,v,status]) => (
                      <tr key={p}>
                        <td>{p}</td>
                        <td>{v}</td>
                        <td className={status === "above" ? "bimas-above" : "bimas-below"}>{status === "above" ? "Fiyat Üstünde ▲" : "Fiyat Altında ▼"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="bimas-section-title"><span className="bimas-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="bimas-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "410.96 TL", desc: "Bollinger üst bandı / son zirve bölgesi" },
              { type: "res", label: "Ara Direnç", price: "387.20 TL", desc: "Bollinger orta bandı / görünümün rahatlayacağı seviye" },
              { type: "res", label: "Kısa Vade Direnç", price: "381.10 TL", desc: "MAV 13 ve MAV 21 bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "377.00–377.50", desc: "Güncel kapanış ve MAV 5 çevresi" },
              { type: "sup", label: "Güçlü Destek", price: "369.00–363.50", desc: "MAV 55 + Bollinger alt bandı" },
              { type: "sup", label: "Ana Destek", price: "355.10 TL", desc: "MAV 89 bölgesi" },
            ].map((s) => (
              <div className="bimas-sr-cell" key={s.label}>
                <div className={`bimas-sr-type ${s.type}`}>{s.label}</div>
                <div className="bimas-sr-price">{s.price}</div>
                <div className="bimas-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="bimas-section-title"><span className="bimas-section-num">05</span> Genel Değerlendirme</div>
          <div className="bimas-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Zayıf</h3>
            <p>BIMAS, son zirve denemesi sonrası geri çekilerek günü <strong>377.25 TL</strong> seviyesinde tamamladı. Fiyat, kısa vadeli ortalamalar olan <strong>MAV 5, MAV 13 ve MAV 21'in altında</strong> bulunurken; orta ve uzun vadeli ortalamaların üzerinde kalmayı sürdürüyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta band olan 387.20 TL'nin altında</strong> ve alt banda daha yakın bölgede konumlanıyor. Bu durum kısa vadede baskının devam ettiğini, ancak 363.44 TL alt bandına kadar hâlâ destek alanı bulunduğunu gösteriyor.</p>
            <p>Stochastic değeri aşırı satım bölgesinde ve tepki ihtimalini gündemde tutuyor. Ancak <em>RSI'ın 50 altında kalması</em> ve fiyatın kısa vadeli ortalamaları geri alamaması nedeniyle toparlanmanın güç kazanması için ek teyit gerekiyor.</p>
            <p>MACD hâlâ pozitif bölgede ve trigger üzerinde olsa da son fiyat hareketi momentumun zayıfladığını gösteriyor. Bu nedenle <strong>381.10 TL ve 387.20 TL</strong> seviyeleri kısa vadeli yön tayini açısından kritik izlenmelidir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="bimas-section-title"><span className="bimas-section-num">06</span> Senaryo Analizi</div>
          <div className="bimas-scenario-grid">
            <div className="bimas-scenario-card bull">
              <div className="bimas-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>381.10 TL üzerindeki kısa vadeli ortalamaların geri alınması</li>
                <li>387.20 TL Bollinger orta bandı üzerinde kapanış</li>
                <li>RSI'ın yeniden 50 üzerine taşınması</li>
                <li>MACD pozitif seyrinin korunması</li>
                <li>Hedef: 400.00–410.96 TL bölgesi</li>
              </ul>
            </div>
            <div className="bimas-scenario-card bear">
              <div className="bimas-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>377.00 TL altında kapanışların devam etmesi</li>
                <li>MAV 55 olan 369.07 TL seviyesinin kırılması</li>
                <li>363.44 TL Bollinger alt bandına doğru baskı</li>
                <li>RSI'ın 45 altına gerilemesi</li>
                <li>Hedef: 355.10 TL destek testi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="bimas-disclaimer">
            <div className="bimas-disclaimer-head">
              <div className="bimas-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="bimas-footer">
            <div className="bimas-footer-inner">
              <div className="bimas-footer-brand">HOCA İLE BORSA</div>
              <div className="bimas-footer-meta">
                BIMAS Teknik Analiz Raporu<br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="bimas-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
