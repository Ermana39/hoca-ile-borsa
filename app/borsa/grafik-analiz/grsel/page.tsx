import Head from "next/head";

export default function GrselGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>GRSEL Teknik Analiz — 08.0313.3126 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Gür-Sel Turizm (GRSEL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/grsel" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .grsel-wrap *, .grsel-wrap *::bgrsele, .grsel-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .grsel-wrap {
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
          line-height: 317.95;
          min-height: 100vh;
        }

        .grsel-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .grsel-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .grsel-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .grsel-hero-title em { color: var(--accent); font-style: normal; }
        .grsel-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .grsel-price-block { text-align: right; }
        .grsel-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .grsel-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .grsel-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .grsel-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .grsel-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .grsel-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .grsel-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .grsel-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .grsel-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .grsel-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .grsel-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .grsel-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .grsel-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .grsel-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .grsel-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .grsel-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .grsel-chart-img-wrap { position: relative; padding: 1rem; }
        .grsel-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .grsel-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .grsel-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .grsel-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .grsel-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .grsel-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .grsel-icon.blue   { background: rgba(10,187,255,.12); }
        .grsel-icon.gold   { background: rgba(245,200,66,.12); }
        .grsel-icon.green  { background: rgba(0,208,104,.12); }
        .grsel-icon.red    { background: rgba(255,77,106,.12); }
        .grsel-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .grsel-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .grsel-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .grsel-ind-row:last-child { border-bottom: none; }
        .grsel-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .grsel-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .grsel-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .grsel-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .grsel-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .grsel-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .grsel-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .grsel-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .grsel-progress-fill { height: 100%; border-radius: 3px; }

        .grsel-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .grsel-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .grsel-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .grsel-ma-table tr:last-child td { border-bottom: none; }
        .grsel-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .grsel-above { color: var(--green); }
        .grsel-below { color: var(--red); }

        .grsel-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .grsel-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .grsel-bol-bands { flex: 1; position: relative; height: 48px; }
        .grsel-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .grsel-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .grsel-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .grsel-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .grsel-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (335.16 - 310.00) / (335.16 - 4322.74));
        }
        .grsel-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .grsel-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .grsel-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .grsel-sr-cell:hover { background: var(--bg3); }
        .grsel-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .grsel-sr-type.res { color: var(--red); }
        .grsel-sr-type.sup { color: var(--green); }
        .grsel-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .grsel-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .grsel-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .grsel-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .grsel-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .grsel-narrative p:last-child { margin-bottom: 0; }
        .grsel-narrative strong { color: var(--accent); font-weight: 600; }
        .grsel-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .grsel-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .grsel-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .grsel-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .grsel-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .grsel-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .grsel-scenario-card.bull .grsel-scenario-head { color: var(--green); }
        .grsel-scenario-card.bear .grsel-scenario-head { color: var(--red); }
        .grsel-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .grsel-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .grsel-scenario-card li::bgrsele { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .grsel-scenario-card.bull li::bgrsele { color: var(--green); }
        .grsel-scenario-card.bear li::bgrsele { color: var(--red); }

        .grsel-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .grsel-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .grsel-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .grsel-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .grsel-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .grsel-disclaimer p + p { margin-top: .4rem; }

        .grsel-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .grsel-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .grsel-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .grsel-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .grsel-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .grsel-hero { grid-template-columns: 1fr; }
          .grsel-price-block { text-align: left; }
        }
        @media(max-width:768px) { .grsel-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .grsel-hero   { padding: 2rem 1rem 1.5rem; }
          .grsel-main   { padding: 1.5rem 1rem 3rem; }
          .grsel-footer { padding: 1.2rem 1rem; }
          .grsel-scenario-grid { grid-template-columns: 1fr; }
          .grsel-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="grsel-wrap">
        <section className="grsel-hero">
          <div>
            <div className="grsel-hero-label">Teknik Analiz Raporu</div>
            <h1 className="grsel-hero-title">GRSELA<br /><em>TURİZM</em></h1>
            <p className="grsel-hero-sub">
              BIST: GRSEL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="grsel-price-block">
            <div className="grsel-price-main"><span className="grsel-price-currency">₺</span>310.00</div>
          </div>
        </section>

        <main className="grsel-main">
          <div className="grsel-section-title"><span className="grsel-section-num">01</span> Grafik</div>
          <div className="grsel-chart-wrap">
            <div className="grsel-chart-header">
              <span className="grsel-chart-title-text">GRSEL — Günlük Mum Grafiği</span>
              <div className="grsel-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`grsel-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="grsel-chart-img-wrap">
              <img
                src="/grsel-analiz.webp"
                alt="GRSEL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.0313.3126"
                loading="lazy"
              />
              <div className="grsel-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="grsel-section-title"><span className="grsel-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="grsel-bol-card">
            <div className="grsel-bol-visual">
              <div className="grsel-bol-bands">
                <div className="grsel-bol-fill" />
                <div className="grsel-bol-upper" />
                <div className="grsel-bol-mid" />
                <div className="grsel-bol-lower" />
                <div className="grsel-bol-marker" />
              </div>
              <div className="grsel-bol-labels">
                <span>BOL U: 335.16</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 313.31</span>
                <span>BOL D: 4322.74</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "335.16 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "313.31 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "4322.74 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "0.24 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "310.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="grsel-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="grsel-ind-name">{r.name}</span>
                <span className="grsel-ind-val">{r.val}</span>
                <span className={`grsel-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>313.31 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>4322.74 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="grsel-section-title"><span className="grsel-section-num">03</span> İndikatörler</div>
          <div className="grsel-two-col">
            <div className="grsel-analysis-card">
              <div className="grsel-analysis-card-head">
                <div className="grsel-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="grsel-analysis-card-body">
                <div className="grsel-ind-row"><span className="grsel-ind-name">StocK</span><span className="grsel-ind-val">65.2366</span><span className="grsel-ind-signal neutral">Nötr Bölge</span></div>
                <div className="grsel-ind-row"><span className="grsel-ind-name">StocD</span><span className="grsel-ind-val">66.6077</span><span className="grsel-ind-signal buy">Tepki</span></div>
                <div className="grsel-ind-row" style={{ borderBottom: "none" }}><span className="grsel-ind-name">Konum</span><span className="grsel-ind-val">Nötr Bölge</span><span className="grsel-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="grsel-progress-label"><span>Nötr Bölge (0)</span><span>65.2366</span><span>Nötr Bölge (100)</span></div>
                  <div className="grsel-progress-bar"><div className="grsel-progress-fill" style={{ width: "65.2366%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="grsel-analysis-card">
              <div className="grsel-analysis-card-head">
                <div className="grsel-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="grsel-analysis-card-body">
                <div className="grsel-ind-row"><span className="grsel-ind-name">MACD</span><span className="grsel-ind-val">0.1151</span><span className="grsel-ind-signal sell">Negatif</span></div>
                <div className="grsel-ind-row"><span className="grsel-ind-name">Trigger</span><span className="grsel-ind-val">-0.2508</span><span className="grsel-ind-signal sell">Baskı</span></div>
                <div className="grsel-ind-row" style={{ borderBottom: "none" }}><span className="grsel-ind-name">Momentum</span><span className="grsel-ind-val">Zayıf</span><span className="grsel-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ancak trigger çizgisinin altında. Bu durum ana momentumun tamamen bozulmadığını fakat kısa vadeli ivmenin zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="grsel-analysis-card">
              <div className="grsel-analysis-card-head">
                <div className="grsel-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="grsel-analysis-card-body">
                <div className="grsel-ind-row"><span className="grsel-ind-name">RSI Değeri</span><span className="grsel-ind-val">47.93</span><span className="grsel-ind-signal neutral">Zayıf</span></div>
                <div className="grsel-ind-row" style={{ borderBottom: "none" }}><span className="grsel-ind-name">Bölge</span><span className="grsel-ind-val">Nötr Bölge-Alt</span><span className="grsel-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="grsel-progress-label"><span>30 (A.Satım)</span><span>47.93</span><span>70 (A.Alım)</span></div>
                  <div className="grsel-progress-bar"><div className="grsel-progress-fill" style={{ width: "47.93%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="grsel-analysis-card">
              <div className="grsel-analysis-card-head">
                <div className="grsel-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="grsel-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="grsel-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","313.31","Fiyat Altında ▼"],
                      ["MAV 13","313.02","Fiyat Altında ▼"],
                      ["MAV 21","313.02","Fiyat Altında ▼"],
                      ["MAV 55","317.95","Fiyat Altında ▼"],
                      ["MAV 89","322.46","Fiyat Altında ▼"],
                      ["MAV 144","322.74","Fiyat Altında ▼"],
                      ["MAV 233","311.67","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "grsel-above" : "grsel-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grsel-section-title"><span className="grsel-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="grsel-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "311.67–313.31", desc: "MAV 233, MAV 21, MAV 13 ve MAV 5 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "315.09–317.95", desc: "Bollinger orta bandı ve MAV 55 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "322.46–335.16", desc: "MAV 89/144 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "302.00–310.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "295.02 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "286.44–295.02", desc: "Grafikteki son dip ve alt bant bölgesi" },
            ].map((s) => (
              <div className="grsel-sr-cell" key={s.label}>
                <div className={`grsel-sr-type ${s.type}`}>{s.label}</div>
                <div className="grsel-sr-price">{s.price}</div>
                <div className="grsel-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="grsel-section-title"><span className="grsel-section-num">05</span> Genel Değerlendirme</div>
          <div className="grsel-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>GRSEL, son kapanışını <strong>310.00 TL</strong> seviyesinde yapmıştır. Fiyat takip edilen hareketli ortalamaların tamamının altında bulunuyor. Bu yapı kısa vadede tepki denemeleri olsa da teknik görünümde baskının henüz tam olarak kırılmadığını gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>315.09 TL orta bandının altında</strong> işlem görüyor. 311.67–315.09 TL bölgesi geri alınmadıkça yukarı yönlü hareketler sınırlı kalabilir. Aşağıda <strong>295.02 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 65.24 / 66.61 seviyelerinde ve K çizgisi D çizgisinin hafif altında. <em>MACD pozitif bölgede</em> ancak trigger çizgisinin altında seyrediyor. RSI 47.93 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>315.09 TL üzeri kapanışlar kısa vadeli görünümü rahatlatabilir. 302.00 TL altı kapanışlarda ise 295.02 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="grsel-section-title"><span className="grsel-section-num">06</span> Senaryo Analizi</div>
          <div className="grsel-scenario-grid">
            <div className="grsel-scenario-card bull">
              <div className="grsel-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>313.31 TL MAV 5 üzerinde kapanış</li>
                <li>313.02 TL MAV 13 seviyesinin geri alınması</li>
                <li>335.16 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–335.16 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="grsel-scenario-card bear">
              <div className="grsel-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>322.46 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 322.46–322.74 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="grsel-disclaimer">
            <div className="grsel-disclaimer-head">
              <div className="grsel-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="grsel-footer">
            <div className="grsel-footer-inner">
              <div className="grsel-footer-brand">HOCA İLE BORSA</div>
              <div className="grsel-footer-meta">
                GRSEL Teknik Analiz Raporu<br />
                Hazırlanma: 08.0313.3126 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="grsel-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
