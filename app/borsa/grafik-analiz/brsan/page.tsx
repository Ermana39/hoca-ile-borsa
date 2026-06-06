import Head from "next/head";

export default function BrsanGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>BRSAN Teknik Analiz — 06.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Borusan Boru Sanayi (BRSAN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hocaileborsa.com/borsa/grafik-analiz/brsan"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .brsan-wrap *, .brsan-wrap *::before, .brsan-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .brsan-wrap {
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
        .brsan-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .brsan-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .brsan-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .brsan-hero-title em { color: var(--accent); font-style: normal; }
        .brsan-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .brsan-price-block { text-align: right; }
        .brsan-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .brsan-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .brsan-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .brsan-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .brsan-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .brsan-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .brsan-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .brsan-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .brsan-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .brsan-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .brsan-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .brsan-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .brsan-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .brsan-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .brsan-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .brsan-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .brsan-chart-img-wrap { position: relative; padding: 1rem; }
        .brsan-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .brsan-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .brsan-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .brsan-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .brsan-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .brsan-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .brsan-icon.blue   { background: rgba(10,187,255,.12); }
        .brsan-icon.gold   { background: rgba(245,200,66,.12); }
        .brsan-icon.green  { background: rgba(0,208,104,.12); }
        .brsan-icon.red    { background: rgba(255,77,106,.12); }
        .brsan-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .brsan-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .brsan-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .brsan-ind-row:last-child { border-bottom: none; }
        .brsan-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .brsan-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .brsan-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .brsan-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .brsan-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .brsan-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .brsan-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .brsan-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .brsan-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .brsan-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .brsan-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .brsan-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .brsan-ma-table tr:last-child td { border-bottom: none; }
        .brsan-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .brsan-above { color: var(--green); }
        .brsan-below { color: var(--red); }

        /* BOLLINGER */
        .brsan-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .brsan-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .brsan-bol-bands { flex: 1; position: relative; height: 48px; }
        .brsan-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .brsan-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .brsan-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .brsan-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .brsan-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (647.30 - 624.00) / (647.30 - 438.57));
        }
        .brsan-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .brsan-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .brsan-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .brsan-sr-cell:hover { background: var(--bg3); }
        .brsan-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .brsan-sr-type.res { color: var(--red); }
        .brsan-sr-type.sup { color: var(--green); }
        .brsan-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .brsan-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .brsan-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .brsan-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .brsan-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .brsan-narrative p:last-child { margin-bottom: 0; }
        .brsan-narrative strong { color: var(--accent); font-weight: 600; }
        .brsan-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .brsan-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .brsan-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .brsan-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .brsan-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .brsan-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .brsan-scenario-card.bull .brsan-scenario-head { color: var(--green); }
        .brsan-scenario-card.bear .brsan-scenario-head { color: var(--red); }
        .brsan-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .brsan-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .brsan-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .brsan-scenario-card.bull li::before { color: var(--green); }
        .brsan-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .brsan-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .brsan-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .brsan-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .brsan-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .brsan-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .brsan-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .brsan-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .brsan-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .brsan-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .brsan-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .brsan-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .brsan-hero { grid-template-columns: 1fr; }
          .brsan-price-block { text-align: left; }
        }
        @media(max-width:768px) { .brsan-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .brsan-hero   { padding: 2rem 1rem 1.5rem; }
          .brsan-main   { padding: 1.5rem 1rem 3rem; }
          .brsan-footer { padding: 1.2rem 1rem; }
          .brsan-scenario-grid { grid-template-columns: 1fr; }
          .brsan-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="brsan-wrap">
        {/* HERO */}
        <section className="brsan-hero">
          <div>
            <div className="brsan-hero-label">Teknik Analiz Raporu</div>
            <h1 className="brsan-hero-title">BORUSAN<br /><em>BORU</em></h1>
            <p className="brsan-hero-sub">
              &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="brsan-price-block">
            <div className="brsan-price-main"><span className="brsan-price-currency">₺</span>624.00</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="brsan-main">
          {/* CHART */}
          <div className="brsan-section-title"><span className="brsan-section-num">01</span> Grafik</div>
          <div className="brsan-chart-wrap">
            <div className="brsan-chart-header">
              <span className="brsan-chart-title-text">BRSAN — Günlük Mum Grafiği</span>
              <div className="brsan-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`brsan-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="brsan-chart-img-wrap">
              <img
                src="/brsan-analiz.webp"
                alt="BRSAN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="brsan-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="brsan-section-title"><span className="brsan-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="brsan-bol-card">
            <div className="brsan-bol-visual">
              <div className="brsan-bol-bands">
                <div className="brsan-bol-fill" />
                <div className="brsan-bol-upper" />
                <div className="brsan-bol-mid" />
                <div className="brsan-bol-lower" />
                <div className="brsan-bol-marker" />
              </div>
              <div className="brsan-bol-labels">
                <span>BOL U: 647.30</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 542.94</span>
                <span>BOL D: 438.57</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",   val: "647.30 TL", sig: "Direnç",          cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "542.94 TL", sig: "Destek",          cls: "buy" },
              { name: "Alt Band (BOL D)",   val: "438.57 TL", sig: "Güçlü Destek",    cls: "buy" },
              { name: "Bant Genişliği",     val: "208.73 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",     val: "624.00 TL", sig: "Üst Banda Yakın", cls: "buy" },
            ].map((r, i) => (
              <div className="brsan-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="brsan-ind-name">{r.name}</span>
                <span className="brsan-ind-val">{r.val}</span>
                <span className={`brsan-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>542.94 TL</strong> üzerinde ve üst banda yakın bölgede bulunuyor. Bu konum kısa vadeli momentumun güçlü olduğunu gösterirken, üst banda yaklaşım nedeniyle kâr realizasyonu riski de takip edilmelidir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="brsan-section-title"><span className="brsan-section-num">03</span> İndikatörler</div>
          <div className="brsan-two-col">
            {/* Stochastic */}
            <div className="brsan-analysis-card">
              <div className="brsan-analysis-card-head">
                <div className="brsan-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="brsan-analysis-card-body">
                <div className="brsan-ind-row"><span className="brsan-ind-name">StocK</span><span className="brsan-ind-val">94.97</span><span className="brsan-ind-signal buy">GÜÇLÜ</span></div>
                <div className="brsan-ind-row"><span className="brsan-ind-name">StocD</span><span className="brsan-ind-val">86.02</span><span className="brsan-ind-signal buy">AL</span></div>
                <div className="brsan-ind-row" style={{ borderBottom: "none" }}><span className="brsan-ind-name">Konum</span><span className="brsan-ind-val">Aşırı Alım</span><span className="brsan-ind-signal neutral">Dikkat</span></div>
                <div>
                  <div className="brsan-progress-label"><span>Aşırı Satım (0)</span><span>94.97</span><span>Aşırı Alım (100)</span></div>
                  <div className="brsan-progress-bar"><div className="brsan-progress-fill" style={{ width: "94.97%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D çizgisinin üzerinde; kısa vadeli tepki güçlü. Ancak göstergenin aşırı alım bölgesinde olması kâr satışlarına karşı dikkat gerektirir.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="brsan-analysis-card">
              <div className="brsan-analysis-card-head">
                <div className="brsan-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="brsan-analysis-card-body">
                <div className="brsan-ind-row"><span className="brsan-ind-name">MACD</span><span className="brsan-ind-val">4.3213</span><span className="brsan-ind-signal buy">POZİTİF</span></div>
                <div className="brsan-ind-row"><span className="brsan-ind-name">Trigger</span><span className="brsan-ind-val">-7.1332</span><span className="brsan-ind-signal buy">AL</span></div>
                <div className="brsan-ind-row" style={{ borderBottom: "none" }}><span className="brsan-ind-name">Momentum</span><span className="brsan-ind-val">Güçleniyor</span><span className="brsan-ind-signal buy">Pozitif</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD çizgisi trigger seviyesinin üzerinde ve pozitif tarafa geçmiş görünüyor. Bu yapı kısa vadeli momentumun yeniden güçlendiğine işaret eder.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="brsan-analysis-card">
              <div className="brsan-analysis-card-head">
                <div className="brsan-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="brsan-analysis-card-body">
                <div className="brsan-ind-row"><span className="brsan-ind-name">RSI Değeri</span><span className="brsan-ind-val">63.64</span><span className="brsan-ind-signal buy">POZİTİF</span></div>
                <div className="brsan-ind-row" style={{ borderBottom: "none" }}><span className="brsan-ind-name">Bölge</span><span className="brsan-ind-val">Nötr-Yüksek</span><span className="brsan-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="brsan-progress-label"><span>30 (A.Satım)</span><span>63.64</span><span>70 (A.Alım)</span></div>
                  <div className="brsan-progress-bar"><div className="brsan-progress-fill" style={{ width: "63.64%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 üzerinde kalarak pozitif bölgeyi koruyor. 70 seviyesine yaklaşılması halinde aşırı alım riski artabilir.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="brsan-analysis-card">
              <div className="brsan-analysis-card-head">
                <div className="brsan-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="brsan-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="brsan-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","574.53"],
                      ["MAV 13","546.67"],
                      ["MAV 21","543.39"],
                      ["MAV 55","549.82"],
                      ["MAV 89","550.94"],
                      ["MAV 144","539.06"],
                      ["MAV 233","516.72"],
                    ].map(([p,v]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="brsan-above">Fiyat Üstünde ▲</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="brsan-section-title"><span className="brsan-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="brsan-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "647.30 TL", desc: "Bollinger üst bandı / kısa vadeli hedef bölge" },
              { type: "res", label: "Ara Direnç",   price: "637.50 TL", desc: "Gün içi yüksek seviye" },
              { type: "sup", label: "Anlık Destek", price: "617.99–624.00", desc: "Ağırlıklı ortalama ve kapanış bölgesi" },
              { type: "sup", label: "Kısa Vadeli Destek", price: "574.50 TL", desc: "MAV 5 seviyesi" },
              { type: "sup", label: "Ana Destek", price: "542.94–550.94", desc: "Bollinger orta bandı ve MAV 13/21/55/89 bölgesi" },
              { type: "sup", label: "Güçlü Destek", price: "516.72 TL", desc: "MAV 233 — uzun vadeli ortalama desteği" },
            ].map((s) => (
              <div className="brsan-sr-cell" key={s.label}>
                <div className={`brsan-sr-type ${s.type}`}>{s.label}</div>
                <div className="brsan-sr-price">{s.price}</div>
                <div className="brsan-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="brsan-section-title"><span className="brsan-section-num">05</span> Genel Değerlendirme</div>
          <div className="brsan-narrative">
            <h3>Kısa Vadeli Görünüm: Pozitif</h3>
            <p>BRSAN, sert tepki yükselişiyle günü <strong>624.00 TL</strong> seviyesinde kapatmış ve tüm önemli hareketli ortalamaların üzerinde konumlanmıştır. Bu yapı kısa vadeli teknik görünümün güçlendiğini göstermektedir.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>542.94 TL orta bandının üzerinde</strong> ve <strong>647.30 TL üst banda yakın</strong> işlem görüyor. Bu durum yukarı yönlü momentumun güçlü olduğunu gösterirken, üst banda yaklaştıkça kâr realizasyonu ihtimalini de artırır.</p>
            <p>Stochastic (94.97/86.02) aşırı alım bölgesinde bulunurken, RSI (63.64) pozitif bölgede kalmaya devam ediyor. MACD'nin trigger üzerine geçmesi de kısa vadeli momentumun toparlandığını destekliyor.</p>
            <p>Teknik görünümde <strong>617.99–624.00 TL</strong> bölgesi üzerinde kalıcılık korunursa yükseliş isteği devam edebilir. Bu bölgenin altına inilmesi halinde ilk destek olarak <em>574.50 TL</em>, devamında ise <em>542.94–550.94 TL</em> bandı izlenmelidir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="brsan-section-title"><span className="brsan-section-num">06</span> Senaryo Analizi</div>
          <div className="brsan-scenario-grid">
            <div className="brsan-scenario-card bull">
              <div className="brsan-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>624.00 TL üzerinde kalıcılığın korunması</li>
                <li>637.50 TL gün içi yüksek seviyesinin aşılması</li>
                <li>647.30 TL Bollinger üst bandı üzerinde güçlü kapanış</li>
                <li>RSI'ın 65–70 bandına doğru güçlenmesi</li>
                <li>Hedef: Yeni zirve denemeleri</li>
              </ul>
            </div>
            <div className="brsan-scenario-card bear">
              <div className="brsan-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>617.99 TL ağırlıklı ortalama altına sarkma</li>
                <li>Stochastic göstergesinde aşağı kesişim oluşması</li>
                <li>574.50 TL MAV 5 desteğinin kırılması</li>
                <li>542.94 TL Bollinger orta bandı altına inilmesi</li>
                <li>Hedef: 542.94–550.94 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="brsan-disclaimer">
            <div className="brsan-disclaimer-head">
              <div className="brsan-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="brsan-footer">
            <div className="brsan-footer-inner">
              <div className="brsan-footer-brand">HOCA İLE BORSA</div>
              <div className="brsan-footer-meta">
                BRSAN Teknik Analiz Raporu<br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="brsan-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
