import Head from "next/head";

export default function FrotoGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>FROTO Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta name="description" content="Ford Otosan (FROTO) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ve hareketli ortalamalar ile detaylı değerlendirme." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/froto" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .froto-wrap *, .froto-wrap *::before, .froto-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .froto-wrap {
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
        .froto-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .froto-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .froto-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .froto-hero-title em { color: var(--accent); font-style: normal; }
        .froto-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .froto-price-block { text-align: right; }
        .froto-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .froto-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .froto-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .froto-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .froto-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .froto-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .froto-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .froto-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .froto-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .froto-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .froto-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .froto-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .froto-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .froto-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .froto-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .froto-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .froto-chart-img-wrap { position: relative; padding: 1rem; }
        .froto-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .froto-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .froto-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .froto-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .froto-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .froto-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .froto-icon.blue   { background: rgba(10,187,255,.12); }
        .froto-icon.gold   { background: rgba(245,200,66,.12); }
        .froto-icon.green  { background: rgba(0,208,104,.12); }
        .froto-icon.red    { background: rgba(255,77,106,.12); }
        .froto-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .froto-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .froto-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .froto-ind-row:last-child { border-bottom: none; }
        .froto-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .froto-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .froto-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .froto-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .froto-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .froto-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .froto-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .froto-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .froto-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .froto-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .froto-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .froto-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .froto-ma-table tr:last-child td { border-bottom: none; }
        .froto-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .froto-above { color: var(--green); }
        .froto-below { color: var(--red); }

        /* BOLLINGER */
        .froto-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .froto-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .froto-bol-bands { flex: 1; position: relative; height: 48px; }
        .froto-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .froto-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .froto-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .froto-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .froto-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (101.07 - 86.20) / (101.07 - 80.50));
        }
        .froto-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .froto-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .froto-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .froto-sr-cell:hover { background: var(--bg3); }
        .froto-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .froto-sr-type.res { color: var(--red); }
        .froto-sr-type.sup { color: var(--green); }
        .froto-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .froto-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .froto-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .froto-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .froto-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .froto-narrative p:last-child { margin-bottom: 0; }
        .froto-narrative strong { color: var(--accent); font-weight: 600; }
        .froto-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .froto-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .froto-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .froto-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .froto-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .froto-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .froto-scenario-card.bull .froto-scenario-head { color: var(--green); }
        .froto-scenario-card.bear .froto-scenario-head { color: var(--red); }
        .froto-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .froto-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .froto-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .froto-scenario-card.bull li::before { color: var(--green); }
        .froto-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .froto-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .froto-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .froto-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .froto-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .froto-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .froto-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .froto-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .froto-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .froto-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .froto-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .froto-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .froto-hero { grid-template-columns: 1fr; }
          .froto-price-block { text-align: left; }
        }
        @media(max-width:768px) { .froto-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .froto-hero   { padding: 2rem 1rem 1.5rem; }
          .froto-main   { padding: 1.5rem 1rem 3rem; }
          .froto-footer { padding: 1.2rem 1rem; }
          .froto-scenario-grid { grid-template-columns: 1fr; }
          .froto-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="froto-wrap">
        {/* HERO */}
        <section className="froto-hero">
          <div>
            <div className="froto-hero-label">Teknik Analiz Raporu</div>
            <h1 className="froto-hero-title">FORD<br /><em>OTOSAN</em></h1>
            <p className="froto-hero-sub">
              BIST: FROTO &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="froto-price-block">
            <div className="froto-price-main"><span className="froto-price-currency">₺</span>86.20</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="froto-main">
          {/* CHART */}
          <div className="froto-section-title"><span className="froto-section-num">01</span> Grafik</div>
          <div className="froto-chart-wrap">
            <div className="froto-chart-header">
              <span className="froto-chart-title-text">FROTO — Günlük Mum Grafiği</span>
              <div className="froto-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`froto-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="froto-chart-img-wrap">
              <img
                src="/froto-analiz.webp"
                alt="FROTO Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="froto-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="froto-section-title"><span className="froto-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="froto-bol-card">
            <div className="froto-bol-visual">
              <div className="froto-bol-bands">
                <div className="froto-bol-fill" />
                <div className="froto-bol-upper" />
                <div className="froto-bol-mid" />
                <div className="froto-bol-lower" />
                <div className="froto-bol-marker" />
              </div>
              <div className="froto-bol-labels">
                <span>BOL U: 101.07</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 90.79</span>
                <span>BOL D: 80.50</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",   val: "101.07 TL", sig: "Direnç",       cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "90.79 TL",  sig: "Direnç",       cls: "sell" },
              { name: "Alt Band (BOL D)",   val: "80.50 TL",  sig: "Ana Destek",   cls: "buy" },
              { name: "Bant Genişliği",     val: "20.57 TL",  sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",     val: "86.20 TL",  sig: "Alt-Orta Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="froto-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="froto-ind-name">{r.name}</span>
                <span className="froto-ind-val">{r.val}</span>
                <span className={`froto-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>90.79 TL</strong> seviyesinin altında ve alt banda daha yakın bölgede konumlanıyor. Bu görünüm kısa vadede zayıflığın sürdüğünü gösterirken, <strong style={{ color: "var(--accent)" }}>80.50 TL</strong> alt bandı ana destek olarak izlenmelidir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="froto-section-title"><span className="froto-section-num">03</span> İndikatörler</div>
          <div className="froto-two-col">
            {/* Stochastic */}
            <div className="froto-analysis-card">
              <div className="froto-analysis-card-head">
                <div className="froto-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="froto-analysis-card-body">
                <div className="froto-ind-row"><span className="froto-ind-name">StocK</span><span className="froto-ind-val">86.12</span><span className="froto-ind-signal neutral">Yüksek</span></div>
                <div className="froto-ind-row"><span className="froto-ind-name">StocD</span><span className="froto-ind-val">84.71</span><span className="froto-ind-signal neutral">Yüksek</span></div>
                <div className="froto-ind-row" style={{ borderBottom: "none" }}><span className="froto-ind-name">Konum</span><span className="froto-ind-val">Aşırı Alıma Yakın</span><span className="froto-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="froto-progress-label"><span>Aşırı Satım (0)</span><span>86.12</span><span>Aşırı Alım (100)</span></div>
                  <div className="froto-progress-bar"><div className="froto-progress-fill" style={{ width: "86.12%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic kısa vadede tepki isteğini gösterse de değerlerin yüksek bölgede olması nedeniyle tek başına güçlü alım teyidi sayılmaz.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="froto-analysis-card">
              <div className="froto-analysis-card-head">
                <div className="froto-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="froto-analysis-card-body">
                <div className="froto-ind-row"><span className="froto-ind-name">MACD</span><span className="froto-ind-val">-3.6233</span><span className="froto-ind-signal sell">NEGATİF</span></div>
                <div className="froto-ind-row"><span className="froto-ind-name">Trigger</span><span className="froto-ind-val">-3.8725</span><span className="froto-ind-signal neutral">Yakın</span></div>
                <div className="froto-ind-row" style={{ borderBottom: "none" }}><span className="froto-ind-name">Momentum</span><span className="froto-ind-val">Zayıf</span><span className="froto-ind-signal neutral">Tepki</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede. Trigger çizgisine göre toparlanma denemesi olsa da sıfır çizgisi altında kalması momentumun hâlâ zayıf olduğunu gösteriyor.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="froto-analysis-card">
              <div className="froto-analysis-card-head">
                <div className="froto-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="froto-analysis-card-body">
                <div className="froto-ind-row"><span className="froto-ind-name">RSI Değeri</span><span className="froto-ind-val">37.53</span><span className="froto-ind-signal sell">Zayıf</span></div>
                <div className="froto-ind-row" style={{ borderBottom: "none" }}><span className="froto-ind-name">Bölge</span><span className="froto-ind-val">Nötr-Zayıf</span><span className="froto-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="froto-progress-label"><span>30 (A.Satım)</span><span>37.53</span><span>70 (A.Alım)</span></div>
                  <div className="froto-progress-bar"><div className="froto-progress-fill" style={{ width: "37.53%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında kaldığı için kısa vadeli güçlenme henüz teyit edilmiş değil. 40–50 bandına dönüş toparlanma açısından takip edilmeli.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="froto-analysis-card">
              <div className="froto-analysis-card-head">
                <div className="froto-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="froto-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="froto-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[["MAV 5","87.35"],["MAV 13","88.70"],["MAV 21","90.83"],["MAV 55","96.69"],["MAV 89","98.32"],["MAV 144","98.01"],["MAV 233","96.07"]].map(([p,v]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="froto-below">Fiyat Altında ▼</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="froto-section-title"><span className="froto-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="froto-sr-grid">
            {[
              { type: "res", label: "İlk Direnç",      price: "87.35–88.70", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Ana Direnç",      price: "90.79–90.83", desc: "Bollinger orta band + MAV 21" },
              { type: "res", label: "Güçlü Direnç",    price: "96.00–98.30", desc: "MAV 55/89/144/233 yoğun direnç bölgesi" },
              { type: "sup", label: "Anlık Destek",    price: "85.85–86.20", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek",      price: "80.50 TL",    desc: "Bollinger alt bandı" },
              { type: "sup", label: "Psikolojik Destek", price: "80.00 TL",  desc: "Alt bant yakınındaki yuvarlak seviye" },
            ].map((s) => (
              <div className="froto-sr-cell" key={s.label}>
                <div className={`froto-sr-type ${s.type}`}>{s.label}</div>
                <div className="froto-sr-price">{s.price}</div>
                <div className="froto-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="froto-section-title"><span className="froto-section-num">05</span> Genel Değerlendirme</div>
          <div className="froto-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>FROTO, son dönemde yaşanan geri çekilme sonrası güncel kapanışını <strong>86.20 TL</strong> seviyesinde gerçekleştirmiştir. Fiyat, kısa vadeli ortalamalar olan <strong>MAV 5, MAV 13 ve MAV 21</strong> seviyelerinin altında kalırken orta vadeli ortalamaların da aşağısında işlem görmektedir.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>90.79 TL orta bandın altında</strong> ve alt banda daha yakın bölgede bulunuyor. Bu yapı kısa vadede satış baskısının sürdüğünü, toparlanmanın güç kazanması için öncelikle orta banda dönüş gerektiğini göstermektedir.</p>
            <p>Stochastic yüksek bölgede tepki isteği üretse de <em>RSI 37.53 ile zayıf bölgede</em> kalıyor. MACD tarafında negatif bölge korunurken, momentumun kalıcı şekilde pozitife döndüğünü söylemek için henüz erken.</p>
            <p>Teknik görünümde <strong>85.85–86.20 TL</strong> bölgesi ilk destek, <strong>90.79–90.83 TL</strong> bölgesi ise görünümün rahatlaması için aşılması gereken ana direnç olarak öne çıkmaktadır.</p>
          </div>

          {/* SCENARIOS */}
          <div className="froto-section-title"><span className="froto-section-num">06</span> Senaryo Analizi</div>
          <div className="froto-scenario-grid">
            <div className="froto-scenario-card bull">
              <div className="froto-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>87.35–88.70 TL kısa vadeli ortalamaların geri alınması</li>
                <li>90.79 TL Bollinger orta bandı üzerinde kapanış</li>
                <li>RSI&apos;ın yeniden 50 seviyesine yaklaşması</li>
                <li>MACD&apos;nin negatif bölgeden toparlanmayı sürdürmesi</li>
                <li>Hedef: 96.00–98.30 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="froto-scenario-card bear">
              <div className="froto-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>85.85 TL günlük dip seviyesinin altında kapanış</li>
                <li>RSI&apos;ın 40 altında zayıf kalmaya devam etmesi</li>
                <li>MACD&apos;nin negatif bölgede güç kaybını sürdürmesi</li>
                <li>80.50 TL Bollinger alt bandına doğru baskı</li>
                <li>Hedef: 80.00–80.50 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="froto-disclaimer">
            <div className="froto-disclaimer-head">
              <div className="froto-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="froto-footer">
            <div className="froto-footer-inner">
              <div className="froto-footer-brand">HOCA İLE BORSA</div>
              <div className="froto-footer-meta">
                FROTO Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="froto-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
