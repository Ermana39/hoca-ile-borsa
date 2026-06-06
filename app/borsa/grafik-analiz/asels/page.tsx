import Head from "next/head";

export default function AselsGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>ASELS Teknik Analiz — 06.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="ASELS hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/asels" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .asels-wrap *, .asels-wrap *::before, .asels-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .asels-wrap {
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

        .asels-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .asels-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .asels-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .asels-hero-title em { color: var(--accent); font-style: normal; }
        .asels-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .asels-price-block { text-align: right; }
        .asels-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .asels-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .asels-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .asels-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .asels-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .asels-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .asels-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .asels-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .asels-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .asels-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .asels-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .asels-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .asels-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .asels-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .asels-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .asels-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .asels-chart-img-wrap { position: relative; padding: 1rem; }
        .asels-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .asels-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .asels-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .asels-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .asels-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .asels-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .asels-icon.blue   { background: rgba(10,187,255,.12); }
        .asels-icon.gold   { background: rgba(245,200,66,.12); }
        .asels-icon.green  { background: rgba(0,208,104,.12); }
        .asels-icon.red    { background: rgba(255,77,106,.12); }
        .asels-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .asels-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .asels-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .asels-ind-row:last-child { border-bottom: none; }
        .asels-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .asels-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .asels-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .asels-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .asels-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .asels-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .asels-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .asels-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .asels-progress-fill { height: 100%; border-radius: 3px; }

        .asels-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .asels-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .asels-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .asels-ma-table tr:last-child td { border-bottom: none; }
        .asels-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .asels-above { color: var(--green); }
        .asels-below { color: var(--red); }

        .asels-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .asels-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .asels-bol-bands { flex: 1; position: relative; height: 48px; }
        .asels-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .asels-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .asels-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .asels-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .asels-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (447.74 - 363.00) / (447.74 - 360.03));
        }
        .asels-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .asels-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .asels-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .asels-sr-cell:hover { background: var(--bg3); }
        .asels-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .asels-sr-type.res { color: var(--red); }
        .asels-sr-type.sup { color: var(--green); }
        .asels-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .asels-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .asels-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .asels-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .asels-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .asels-narrative p:last-child { margin-bottom: 0; }
        .asels-narrative strong { color: var(--accent); font-weight: 600; }
        .asels-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .asels-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .asels-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .asels-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .asels-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .asels-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .asels-scenario-card.bull .asels-scenario-head { color: var(--green); }
        .asels-scenario-card.bear .asels-scenario-head { color: var(--red); }
        .asels-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .asels-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .asels-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .asels-scenario-card.bull li::before { color: var(--green); }
        .asels-scenario-card.bear li::before { color: var(--red); }

        .asels-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .asels-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .asels-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .asels-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .asels-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .asels-disclaimer p + p { margin-top: .4rem; }

        .asels-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .asels-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .asels-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .asels-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .asels-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .asels-hero { grid-template-columns: 1fr; }
          .asels-price-block { text-align: left; }
        }
        @media(max-width:768px) { .asels-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .asels-hero   { padding: 2rem 1rem 1.5rem; }
          .asels-main   { padding: 1.5rem 1rem 3rem; }
          .asels-footer { padding: 1.2rem 1rem; }
          .asels-scenario-grid { grid-template-columns: 1fr; }
          .asels-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="asels-wrap">
        <section className="asels-hero">
          <div>
            <div className="asels-hero-label">Teknik Analiz Raporu</div>
            <h1 className="asels-hero-title">ASELSAN<br /><em>ASELS</em></h1>
            <p className="asels-hero-sub">
              &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="asels-price-block">
            <div className="asels-price-main"><span className="asels-price-currency">₺</span>363.00</div>
          </div>
        </section>

        <main className="asels-main">
          <div className="asels-section-title"><span className="asels-section-num">01</span> Grafik</div>
          <div className="asels-chart-wrap">
            <div className="asels-chart-header">
              <span className="asels-chart-title-text">ASELS — Günlük Mum Grafiği</span>
              <div className="asels-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`asels-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="asels-chart-img-wrap">
              <img
                src="/asels-analiz.webp"
                alt="ASELS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="asels-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="asels-section-title"><span className="asels-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="asels-bol-card">
            <div className="asels-bol-visual">
              <div className="asels-bol-bands">
                <div className="asels-bol-fill" />
                <div className="asels-bol-upper" />
                <div className="asels-bol-mid" />
                <div className="asels-bol-lower" />
                <div className="asels-bol-marker" />
              </div>
              <div className="asels-bol-labels">
                <span>BOL U: 447.74</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 403.89</span>
                <span>BOL D: 360.03</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "447.74 TL", sig: "Güçlü Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "403.89 TL", sig: "Direnç", cls: "sell" },
              { name: "Alt Band (BOL D)", val: "360.03 TL", sig: "Ana Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "87.71 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "363.00 TL", sig: "Alt Banda Yakın", cls: "neutral" },
            ].map((r, i) => (
              <div className="asels-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="asels-ind-name">{r.name}</span>
                <span className="asels-ind-val">{r.val}</span>
                <span className={`asels-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>403.89 TL&apos;nin altında</strong> ve alt band olan 360.03 TL&apos;ye oldukça yakın konumda. Bu yapı kısa vadede zayıflığa işaret ederken, 360 TL çevresinin tepki denemeleri açısından kritik destek bölgesi olduğunu gösteriyor.
            </p>
          </div>

          <div className="asels-section-title"><span className="asels-section-num">03</span> İndikatörler</div>
          <div className="asels-two-col">
            <div className="asels-analysis-card">
              <div className="asels-analysis-card-head">
                <div className="asels-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="asels-analysis-card-body">
                <div className="asels-ind-row"><span className="asels-ind-name">StocK</span><span className="asels-ind-val">13.01</span><span className="asels-ind-signal sell">ZAYIF</span></div>
                <div className="asels-ind-row"><span className="asels-ind-name">StocD</span><span className="asels-ind-val">18.24</span><span className="asels-ind-signal sell">SAT</span></div>
                <div className="asels-ind-row" style={{ borderBottom: "none" }}><span className="asels-ind-name">Konum</span><span className="asels-ind-val">Aşırı Satıma Yakın</span><span className="asels-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="asels-progress-label"><span>Aşırı Satım (0)</span><span>13.01</span><span>Aşırı Alım (100)</span></div>
                  <div className="asels-progress-bar"><div className="asels-progress-fill" style={{ width: "13.01%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic oldukça düşük bölgede. K çizgisinin D çizgisi altında olması baskının sürdüğünü gösteriyor; ancak aşırı satıma yakınlık tepki ihtimalini de artırıyor.</p>
              </div>
            </div>

            <div className="asels-analysis-card">
              <div className="asels-analysis-card-head">
                <div className="asels-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="asels-analysis-card-body">
                <div className="asels-ind-row"><span className="asels-ind-name">MACD</span><span className="asels-ind-val">-5.7938</span><span className="asels-ind-signal sell">NEGATİF</span></div>
                <div className="asels-ind-row"><span className="asels-ind-name">Trigger</span><span className="asels-ind-val">0.7540</span><span className="asels-ind-signal sell">SAT</span></div>
                <div className="asels-ind-row" style={{ borderBottom: "none" }}><span className="asels-ind-name">Momentum</span><span className="asels-ind-val">Zayıf</span><span className="asels-ind-signal sell">Baskı</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında satış baskısı devam ediyor; toparlanma için MACD&apos;nin yeniden trigger üzerine dönmesi gerekir.</p>
              </div>
            </div>

            <div className="asels-analysis-card">
              <div className="asels-analysis-card-head">
                <div className="asels-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="asels-analysis-card-body">
                <div className="asels-ind-row"><span className="asels-ind-name">RSI Değeri</span><span className="asels-ind-val">39.84</span><span className="asels-ind-signal sell">ZAYIF</span></div>
                <div className="asels-ind-row" style={{ borderBottom: "none" }}><span className="asels-ind-name">Bölge</span><span className="asels-ind-val">50 Altı</span><span className="asels-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="asels-progress-label"><span>30 (A.Satım)</span><span>39.84</span><span>70 (A.Alım)</span></div>
                  <div className="asels-progress-bar"><div className="asels-progress-fill" style={{ width: "39.84%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında kaldığı için kısa vadeli momentum zayıf. 50 üzerine dönüş gelmeden güçlü toparlanma teyidi oluşmaz.</p>
              </div>
            </div>

            <div className="asels-analysis-card">
              <div className="asels-analysis-card-head">
                <div className="asels-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="asels-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="asels-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","375.80","Fiyat Altında ▼"],
                      ["MAV 13","389.26","Fiyat Altında ▼"],
                      ["MAV 21","393.87","Fiyat Altında ▼"],
                      ["MAV 55","378.96","Fiyat Altında ▼"],
                      ["MAV 89","354.83","Fiyat Üstünde ▲"],
                      ["MAV 144","320.05","Fiyat Üstünde ▲"],
                      ["MAV 233","276.81","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}>
                        <td>{p}</td>
                        <td>{v}</td>
                        <td className={d.includes("Üstünde") ? "asels-above" : "asels-below"}>{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="asels-section-title"><span className="asels-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="asels-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "403.89 TL", desc: "Bollinger orta bandı / Ana toparlanma eşiği" },
              { type: "res", label: "Ara Direnç", price: "389.25–393.90", desc: "MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "İlk Direnç", price: "375.80–378.96", desc: "MAV 5 ve MAV 55 bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "360.00–363.00", desc: "Bollinger alt bandı ve güncel kapanış bölgesi" },
              { type: "sup", label: "Güçlü Destek", price: "354.80 TL", desc: "MAV 89 seviyesi" },
              { type: "sup", label: "Ana Destek", price: "320.00 TL", desc: "MAV 144 — orta vadeli destek bölgesi" },
            ].map((s) => (
              <div className="asels-sr-cell" key={s.label}>
                <div className={`asels-sr-type ${s.type}`}>{s.label}</div>
                <div className="asels-sr-price">{s.price}</div>
                <div className="asels-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="asels-section-title"><span className="asels-section-num">05</span> Genel Değerlendirme</div>
          <div className="asels-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>ASELS, son dönemde güçlü yükseliş sonrası 400 TL üzerindeki zirve bölgesinden geri çekilmiş ve güncel kapanışını <strong>363.00 TL</strong> seviyesinde gerçekleştirmiştir. Fiyat, kısa vadeli ortalamalar olan <strong>MAV 5, MAV 13, MAV 21 ve MAV 55&apos;in altında</strong> kaldığı için kısa vadeli görünüm zayıflamıştır.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta band olan 403.89 TL&apos;nin altında</strong> ve <strong>alt band olan 360.03 TL&apos;ye oldukça yakın</strong> konumlanmaktadır. Bu bölge satış baskısının arttığını gösterirken, 360 TL çevresi tepki denemeleri açısından kritik destek olarak izlenebilir.</p>
            <p>Stochastic (13.01/18.24) düşük bölgede bulunurken RSI (39.84) 50 seviyesinin altında kalmaktadır. MACD&apos;nin negatif bölgede ve trigger altında olması, <em>momentum tarafındaki zayıflığın devam ettiğini</em> göstermektedir.</p>
            <p>Orta vadeli yapı tamamen bozulmuş değildir; çünkü fiyat hâlâ <strong>MAV 89, MAV 144 ve MAV 233</strong> üzerinde bulunmaktadır. Ancak kısa vadeli teknik rahatlama için 375.80–378.96 TL bölgesinin, daha güçlü toparlanma için ise 403.89 TL Bollinger orta bandının geri alınması gerekir.</p>
          </div>

          <div className="asels-section-title"><span className="asels-section-num">06</span> Senaryo Analizi</div>
          <div className="asels-scenario-grid">
            <div className="asels-scenario-card bull">
              <div className="asels-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>363 TL üzerinde tutunmanın korunması</li>
                <li>375.80–378.96 TL bölgesinin geri alınması</li>
                <li>RSI&apos;ın yeniden 50 seviyesi üzerine çıkması</li>
                <li>MACD&apos;nin trigger çizgisi üzerine dönmesi</li>
                <li>Hedef: 389.25–403.89 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="asels-scenario-card bear">
              <div className="asels-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>360.03 TL Bollinger alt bandının kırılması</li>
                <li>354.83 TL MAV 89 altında kapanış</li>
                <li>RSI&apos;ın 40 altında kalmaya devam etmesi</li>
                <li>MACD&apos;nin negatif seyrini sürdürmesi</li>
                <li>Hedef: 320.00 TL orta vadeli destek testi</li>
              </ul>
            </div>
          </div>

          <div className="asels-disclaimer">
            <div className="asels-disclaimer-head">
              <div className="asels-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="asels-footer">
            <div className="asels-footer-inner">
              <div className="asels-footer-brand">HOCA İLE BORSA</div>
              <div className="asels-footer-meta">
                ASELS Teknik Analiz Raporu<br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="asels-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
