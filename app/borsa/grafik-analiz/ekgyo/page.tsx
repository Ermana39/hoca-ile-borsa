import Head from "next/head";

export default function EkgyoGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>EKGYO Teknik Analiz — 05.06.2026 | Hoca İle Borsa</title>
        <meta name="description" content="Emlak Konut GYO (EKGYO) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/ekgyo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .ekgyo-wrap *, .ekgyo-wrap *::before, .ekgyo-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ekgyo-wrap {
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
        .ekgyo-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .ekgyo-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ekgyo-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ekgyo-hero-title em { color: var(--accent); font-style: normal; }
        .ekgyo-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ekgyo-price-block { text-align: right; }
        .ekgyo-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ekgyo-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .ekgyo-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .ekgyo-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ekgyo-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ekgyo-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .ekgyo-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ekgyo-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ekgyo-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ekgyo-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ekgyo-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ekgyo-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ekgyo-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ekgyo-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ekgyo-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ekgyo-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ekgyo-chart-img-wrap { position: relative; padding: 1rem; }
        .ekgyo-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ekgyo-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .ekgyo-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .ekgyo-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .ekgyo-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ekgyo-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .ekgyo-icon.blue   { background: rgba(10,187,255,.12); }
        .ekgyo-icon.gold   { background: rgba(245,200,66,.12); }
        .ekgyo-icon.green  { background: rgba(0,208,104,.12); }
        .ekgyo-icon.red    { background: rgba(255,77,106,.12); }
        .ekgyo-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .ekgyo-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .ekgyo-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ekgyo-ind-row:last-child { border-bottom: none; }
        .ekgyo-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ekgyo-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ekgyo-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .ekgyo-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ekgyo-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ekgyo-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .ekgyo-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .ekgyo-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .ekgyo-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .ekgyo-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ekgyo-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .ekgyo-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ekgyo-ma-table tr:last-child td { border-bottom: none; }
        .ekgyo-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ekgyo-above { color: var(--green); }
        .ekgyo-below { color: var(--red); }

        /* BOLLINGER */
        .ekgyo-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .ekgyo-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .ekgyo-bol-bands { flex: 1; position: relative; height: 48px; }
        .ekgyo-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ekgyo-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ekgyo-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ekgyo-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .ekgyo-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (22.12 - 19.23) / (22.12 - 18.22));
        }
        .ekgyo-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .ekgyo-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .ekgyo-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ekgyo-sr-cell:hover { background: var(--bg3); }
        .ekgyo-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .ekgyo-sr-type.res { color: var(--red); }
        .ekgyo-sr-type.sup { color: var(--green); }
        .ekgyo-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ekgyo-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .ekgyo-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ekgyo-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .ekgyo-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ekgyo-narrative p:last-child { margin-bottom: 0; }
        .ekgyo-narrative strong { color: var(--accent); font-weight: 600; }
        .ekgyo-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .ekgyo-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ekgyo-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ekgyo-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ekgyo-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ekgyo-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .ekgyo-scenario-card.bull .ekgyo-scenario-head { color: var(--green); }
        .ekgyo-scenario-card.bear .ekgyo-scenario-head { color: var(--red); }
        .ekgyo-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ekgyo-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ekgyo-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ekgyo-scenario-card.bull li::before { color: var(--green); }
        .ekgyo-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .ekgyo-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .ekgyo-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ekgyo-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .ekgyo-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ekgyo-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ekgyo-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .ekgyo-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .ekgyo-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ekgyo-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ekgyo-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ekgyo-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .ekgyo-hero { grid-template-columns: 1fr; }
          .ekgyo-price-block { text-align: left; }
        }
        @media(max-width:768px) { .ekgyo-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .ekgyo-hero   { padding: 2rem 1rem 1.5rem; }
          .ekgyo-main   { padding: 1.5rem 1rem 3rem; }
          .ekgyo-footer { padding: 1.2rem 1rem; }
          .ekgyo-scenario-grid { grid-template-columns: 1fr; }
          .ekgyo-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ekgyo-wrap">

        {/* HERO */}
        <section className="ekgyo-hero">
          <div>
            <div className="ekgyo-hero-label">Teknik Analiz Raporu</div>
            <h1 className="ekgyo-hero-title">EMLAK<br /><em>KONUT</em></h1>
            <p className="ekgyo-hero-sub">
              BIST: EKGYO &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Çoklu Hareketli Ortalama + Bollinger Bantları &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="ekgyo-price-block">
            <div className="ekgyo-price-main"><span className="ekgyo-price-currency">₺</span>19.23</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="ekgyo-main">

          {/* CHART */}
          <div className="ekgyo-section-title"><span className="ekgyo-section-num">01</span> Grafik</div>
          <div className="ekgyo-chart-wrap">
            <div className="ekgyo-chart-header">
              <span className="ekgyo-chart-title-text">EKGYO — Günlük Mum Grafiği</span>
              <div className="ekgyo-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`ekgyo-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="ekgyo-chart-img-wrap">
              <img
                src="/ekgyo-analiz.webp"
                alt="EKGYO Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="ekgyo-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="ekgyo-section-title"><span className="ekgyo-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ekgyo-bol-card">
            <div className="ekgyo-bol-visual">
              <div className="ekgyo-bol-bands">
                <div className="ekgyo-bol-fill" />
                <div className="ekgyo-bol-upper" />
                <div className="ekgyo-bol-mid" />
                <div className="ekgyo-bol-lower" />
                <div className="ekgyo-bol-marker" />
              </div>
              <div className="ekgyo-bol-labels">
                <span>BOL U: 22.12</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 20.17</span>
                <span>BOL D: 18.22</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "22.12 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "20.17 TL", sig: "Direnç", cls: "sell" },
              { name: "Alt Band (BOL D)", val: "18.22 TL", sig: "Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "3.90 TL", sig: "Orta Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "19.23 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="ekgyo-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="ekgyo-ind-name">{r.name}</span>
                <span className="ekgyo-ind-val">{r.val}</span>
                <span className={`ekgyo-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>20.17 TL</strong> seviyesinin altında ve alt banda daha yakın bölgede konumlanıyor. Bu görünüm kısa vadede baskının sürdüğünü, 20.17 TL üzerine dönüş olmadan toparlanmanın sınırlı kalabileceğini gösterir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="ekgyo-section-title"><span className="ekgyo-section-num">03</span> İndikatörler</div>
          <div className="ekgyo-two-col">

            {/* Stochastic */}
            <div className="ekgyo-analysis-card">
              <div className="ekgyo-analysis-card-head">
                <div className="ekgyo-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ekgyo-analysis-card-body">
                <div className="ekgyo-ind-row"><span className="ekgyo-ind-name">StocK</span><span className="ekgyo-ind-val">64.21</span><span className="ekgyo-ind-signal buy">AL</span></div>
                <div className="ekgyo-ind-row"><span className="ekgyo-ind-name">StocD</span><span className="ekgyo-ind-val">60.17</span><span className="ekgyo-ind-signal buy">AL</span></div>
                <div className="ekgyo-ind-row" style={{ borderBottom: "none" }}><span className="ekgyo-ind-name">Konum</span><span className="ekgyo-ind-val">Nötr-Yüksek</span><span className="ekgyo-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ekgyo-progress-label"><span>Aşırı Satım (0)</span><span>64.21</span><span>Aşırı Alım (100)</span></div>
                  <div className="ekgyo-progress-bar"><div className="ekgyo-progress-fill" style={{ width: "64.21%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D çizgisinin üzerinde. Kısa vadede tepki isteği var; ancak fiyat ortalamaların altında olduğu için tek başına güçlü teyit sayılmaz.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="ekgyo-analysis-card">
              <div className="ekgyo-analysis-card-head">
                <div className="ekgyo-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ekgyo-analysis-card-body">
                <div className="ekgyo-ind-row"><span className="ekgyo-ind-name">MACD</span><span className="ekgyo-ind-val">-0.3358</span><span className="ekgyo-ind-signal sell">NEGATİF</span></div>
                <div className="ekgyo-ind-row"><span className="ekgyo-ind-name">Trigger</span><span className="ekgyo-ind-val">-0.3314</span><span className="ekgyo-ind-signal neutral">Yakın</span></div>
                <div className="ekgyo-ind-row" style={{ borderBottom: "none" }}><span className="ekgyo-ind-name">Momentum</span><span className="ekgyo-ind-val">Zayıf</span><span className="ekgyo-ind-signal sell">Baskı</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisine çok yakın seyrediyor. Güçlü toparlanma için MACD&apos;nin trigger üzerine geçmesi gerekir.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="ekgyo-analysis-card">
              <div className="ekgyo-analysis-card-head">
                <div className="ekgyo-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ekgyo-analysis-card-body">
                <div className="ekgyo-ind-row"><span className="ekgyo-ind-name">RSI Değeri</span><span className="ekgyo-ind-val">43.58</span><span className="ekgyo-ind-signal neutral">NÖTR</span></div>
                <div className="ekgyo-ind-row" style={{ borderBottom: "none" }}><span className="ekgyo-ind-name">Bölge</span><span className="ekgyo-ind-val">Zayıf-Nötr</span><span className="ekgyo-ind-signal sell">50 Altı</span></div>
                <div>
                  <div className="ekgyo-progress-label"><span>30 (A.Satım)</span><span>43.58</span><span>70 (A.Alım)</span></div>
                  <div className="ekgyo-progress-bar"><div className="ekgyo-progress-fill" style={{ width: "43.58%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="ekgyo-analysis-card">
              <div className="ekgyo-analysis-card-head">
                <div className="ekgyo-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ekgyo-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ekgyo-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","19.65"],["MAV 13","19.80"],["MAV 21","20.00"],["MAV 55","20.59"],["MAV 89","20.84"],["MAV 144","20.68"],["MAV 233","19.83"]
                    ].map(([p,v]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="ekgyo-below">Fiyat Altında ▼</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="ekgyo-section-title"><span className="ekgyo-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ekgyo-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "19.65–20.00", desc: "MAV 5 / MAV 13 / MAV 21 bölgesi" },
              { type: "res", label: "Ana Direnç", price: "20.17–20.84", desc: "Bollinger orta bandı + MAV 55/89/144 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "22.12 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "19.23 TL", desc: "Güncel kapanış seviyesi" },
              { type: "sup", label: "Günlük Dip", price: "19.23 TL", desc: "Son işlem günü dip-kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "18.22 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="ekgyo-sr-cell" key={s.label}>
                <div className={`ekgyo-sr-type ${s.type}`}>{s.label}</div>
                <div className="ekgyo-sr-price">{s.price}</div>
                <div className="ekgyo-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="ekgyo-section-title"><span className="ekgyo-section-num">05</span> Genel Değerlendirme</div>
          <div className="ekgyo-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>EKGYO, son işlem gününde <strong>20.38 TL açılış</strong> sonrası satış baskısıyla <strong>19.23 TL</strong> seviyesinde kapanış yaptı. Günlük düşüşün <strong>-5.36%</strong> olması kısa vadeli baskının belirginleştiğini gösteriyor.</p>
            <p>Fiyat, <strong>MAV 5, MAV 13, MAV 21, MAV 55, MAV 89, MAV 144 ve MAV 233</strong> ortalamalarının tamamının altında bulunuyor. Bu yapı, kısa vadeli tepki denemeleri gelse bile ortalama bölgelerinin direnç olarak çalışabileceğine işaret eder.</p>
            <p>Bollinger tarafında fiyat, <strong>20.17 TL orta bandının altında</strong> ve <strong>18.22 TL alt banda</strong> daha yakın bölgede. 20.17 TL üzerine dönüş olmadıkça teknik görünüm zayıf kalır.</p>
            <p>Stochastic kısa vadeli tepki isteği gösterse de <em>RSI 43.58 ile 50 altında</em>, MACD ise negatif bölgede. Bu nedenle güçlü toparlanma için fiyatın önce 19.65–20.17 TL bandını geri kazanması gerekir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="ekgyo-section-title"><span className="ekgyo-section-num">06</span> Senaryo Analizi</div>
          <div className="ekgyo-scenario-grid">
            <div className="ekgyo-scenario-card bull">
              <div className="ekgyo-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>19.65 TL MAV 5 üzerine dönüş</li>
                <li>20.00–20.17 TL bandı üzerinde kapanış</li>
                <li>MACD&apos;nin trigger çizgisi üzerine geçmesi</li>
                <li>RSI&apos;ın yeniden 50 üzerine taşınması</li>
                <li>Hedef: 20.84 TL ve 22.12 TL direnç bölgeleri</li>
              </ul>
            </div>
            <div className="ekgyo-scenario-card bear">
              <div className="ekgyo-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>19.23 TL altında kapanış</li>
                <li>Bollinger orta bandı altında kalıcılığın sürmesi</li>
                <li>RSI&apos;ın 40 altına sarkması</li>
                <li>MACD negatif görünümünün devam etmesi</li>
                <li>Hedef: 18.22 TL Bollinger alt bandı</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="ekgyo-disclaimer">
            <div className="ekgyo-disclaimer-head">
              <div className="ekgyo-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>

        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="ekgyo-footer">
            <div className="ekgyo-footer-inner">
              <div className="ekgyo-footer-brand">HOCA İLE BORSA</div>
              <div className="ekgyo-footer-meta">
                EKGYO Teknik Analiz Raporu<br />
                Hazırlanma: 05.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="ekgyo-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
