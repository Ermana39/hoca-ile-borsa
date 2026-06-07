import Head from "next/head";

export default function SokmGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>SOKM Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Şok Marketler (SOKM) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/sokm" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .sokm-wrap *, .sokm-wrap *::before, .sokm-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sokm-wrap {
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

        .sokm-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .sokm-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .sokm-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .sokm-hero-title em { color: var(--accent); font-style: normal; }
        .sokm-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .sokm-price-block { text-align: right; }
        .sokm-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .sokm-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .sokm-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .sokm-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .sokm-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .sokm-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .sokm-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .sokm-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .sokm-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .sokm-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .sokm-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .sokm-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .sokm-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .sokm-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .sokm-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .sokm-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .sokm-chart-img-wrap { position: relative; padding: 1rem; }
        .sokm-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .sokm-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .sokm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .sokm-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .sokm-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .sokm-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .sokm-icon.blue   { background: rgba(10,187,255,.12); }
        .sokm-icon.gold   { background: rgba(245,200,66,.12); }
        .sokm-icon.green  { background: rgba(0,208,104,.12); }
        .sokm-icon.red    { background: rgba(255,77,106,.12); }
        .sokm-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .sokm-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .sokm-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .sokm-ind-row:last-child { border-bottom: none; }
        .sokm-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .sokm-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .sokm-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .sokm-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .sokm-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .sokm-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .sokm-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .sokm-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .sokm-progress-fill { height: 100%; border-radius: 3px; }

        .sokm-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .sokm-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .sokm-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .sokm-ma-table tr:last-child td { border-bottom: none; }
        .sokm-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .sokm-above { color: var(--green); }
        .sokm-below { color: var(--red); }

        .sokm-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .sokm-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .sokm-bol-bands { flex: 1; position: relative; height: 48px; }
        .sokm-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sokm-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .sokm-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sokm-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .sokm-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (54.71 - 48.06) / (54.71 - 46.11));
        }
        .sokm-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .sokm-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .sokm-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .sokm-sr-cell:hover { background: var(--bg3); }
        .sokm-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .sokm-sr-type.res { color: var(--red); }
        .sokm-sr-type.sup { color: var(--green); }
        .sokm-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .sokm-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .sokm-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .sokm-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .sokm-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .sokm-narrative p:last-child { margin-bottom: 0; }
        .sokm-narrative strong { color: var(--accent); font-weight: 600; }
        .sokm-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .sokm-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .sokm-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .sokm-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .sokm-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .sokm-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .sokm-scenario-card.bull .sokm-scenario-head { color: var(--green); }
        .sokm-scenario-card.bear .sokm-scenario-head { color: var(--red); }
        .sokm-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .sokm-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .sokm-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .sokm-scenario-card.bull li::before { color: var(--green); }
        .sokm-scenario-card.bear li::before { color: var(--red); }

        .sokm-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .sokm-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .sokm-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .sokm-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .sokm-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .sokm-disclaimer p + p { margin-top: .4rem; }

        .sokm-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .sokm-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .sokm-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .sokm-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .sokm-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .sokm-hero { grid-template-columns: 1fr; }
          .sokm-price-block { text-align: left; }
        }
        @media(max-width:768px) { .sokm-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .sokm-hero   { padding: 2rem 1rem 1.5rem; }
          .sokm-main   { padding: 1.5rem 1rem 3rem; }
          .sokm-footer { padding: 1.2rem 1rem; }
          .sokm-scenario-grid { grid-template-columns: 1fr; }
          .sokm-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sokm-wrap">
        <section className="sokm-hero">
          <div>
            <div className="sokm-hero-label">Teknik Analiz Raporu</div>
            <h1 className="sokm-hero-title">ŞOK<br /><em>MARKETLER</em></h1>
            <p className="sokm-hero-sub">
              BIST: SOKM &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="sokm-price-block">
            <div className="sokm-price-main"><span className="sokm-price-currency">₺</span>48.06</div>
          </div>
        </section>

        <main className="sokm-main">
          <div className="sokm-section-title"><span className="sokm-section-num">01</span> Grafik</div>
          <div className="sokm-chart-wrap">
            <div className="sokm-chart-header">
              <span className="sokm-chart-title-text">SOKM — Günlük Mum Grafiği</span>
              <div className="sokm-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`sokm-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="sokm-chart-img-wrap">
              <img
                src="/sokm-analiz.webp"
                alt="SOKM Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="sokm-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="sokm-section-title"><span className="sokm-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="sokm-bol-card">
            <div className="sokm-bol-visual">
              <div className="sokm-bol-bands">
                <div className="sokm-bol-fill" />
                <div className="sokm-bol-upper" />
                <div className="sokm-bol-mid" />
                <div className="sokm-bol-lower" />
                <div className="sokm-bol-marker" />
              </div>
              <div className="sokm-bol-labels">
                <span>BOL U: 54.71</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 50.41</span>
                <span>BOL D: 46.11</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "54.71 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "50.41 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "46.11 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "8.60 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "48.06 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="sokm-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="sokm-ind-name">{r.name}</span>
                <span className="sokm-ind-val">{r.val}</span>
                <span className={`sokm-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>50.41 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>46.11 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="sokm-section-title"><span className="sokm-section-num">03</span> İndikatörler</div>
          <div className="sokm-two-col">
            <div className="sokm-analysis-card">
              <div className="sokm-analysis-card-head">
                <div className="sokm-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="sokm-analysis-card-body">
                <div className="sokm-ind-row"><span className="sokm-ind-name">StocK</span><span className="sokm-ind-val">30.56</span><span className="sokm-ind-signal neutral">Nötr</span></div>
                <div className="sokm-ind-row"><span className="sokm-ind-name">StocD</span><span className="sokm-ind-val">32.01</span><span className="sokm-ind-signal buy">Tepki</span></div>
                <div className="sokm-ind-row" style={{ borderBottom: "none" }}><span className="sokm-ind-name">Konum</span><span className="sokm-ind-val">Zayıf-Nötr</span><span className="sokm-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sokm-progress-label"><span>Aşırı Satım (0)</span><span>30.56</span><span>Aşırı Alım (100)</span></div>
                  <div className="sokm-progress-bar"><div className="sokm-progress-fill" style={{ width: "30.56%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic zayıf-nötr bölgede ve K çizgisi D çizgisinin altında. Tepki potansiyeli oluşabilir ancak mevcut görünüm hâlâ zayıf.</p>
              </div>
            </div>

            <div className="sokm-analysis-card">
              <div className="sokm-analysis-card-head">
                <div className="sokm-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="sokm-analysis-card-body">
                <div className="sokm-ind-row"><span className="sokm-ind-name">MACD</span><span className="sokm-ind-val">-1.0480</span><span className="sokm-ind-signal sell">Negatif</span></div>
                <div className="sokm-ind-row"><span className="sokm-ind-name">Trigger</span><span className="sokm-ind-val">-0.9360</span><span className="sokm-ind-signal sell">Baskı</span></div>
                <div className="sokm-ind-row" style={{ borderBottom: "none" }}><span className="sokm-ind-name">Momentum</span><span className="sokm-ind-val">Zayıf</span><span className="sokm-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="sokm-analysis-card">
              <div className="sokm-analysis-card-head">
                <div className="sokm-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="sokm-analysis-card-body">
                <div className="sokm-ind-row"><span className="sokm-ind-name">RSI Değeri</span><span className="sokm-ind-val">41.80</span><span className="sokm-ind-signal neutral">Zayıf</span></div>
                <div className="sokm-ind-row" style={{ borderBottom: "none" }}><span className="sokm-ind-name">Bölge</span><span className="sokm-ind-val">Nötr-Alt</span><span className="sokm-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sokm-progress-label"><span>30 (A.Satım)</span><span>41.80</span><span>70 (A.Alım)</span></div>
                  <div className="sokm-progress-bar"><div className="sokm-progress-fill" style={{ width: "41.80%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="sokm-analysis-card">
              <div className="sokm-analysis-card-head">
                <div className="sokm-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="sokm-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="sokm-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","48.50","Fiyat Altında ▼"],
                      ["MAV 13","49.22","Fiyat Altında ▼"],
                      ["MAV 21","49.83","Fiyat Altında ▼"],
                      ["MAV 55","51.93","Fiyat Altında ▼"],
                      ["MAV 89","52.57","Fiyat Altında ▼"],
                      ["MAV 144","51.74","Fiyat Altında ▼"],
                      ["MAV 233","49.90","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "sokm-above" : "sokm-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sokm-section-title"><span className="sokm-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="sokm-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "48.50–49.22", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "49.83–50.41", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "51.93–54.71", desc: "MAV 55 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "47.82–48.06", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "46.11 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "44.50–45.50", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="sokm-sr-cell" key={s.label}>
                <div className={`sokm-sr-type ${s.type}`}>{s.label}</div>
                <div className="sokm-sr-price">{s.price}</div>
                <div className="sokm-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="sokm-section-title"><span className="sokm-section-num">05</span> Genel Değerlendirme</div>
          <div className="sokm-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>SOKM, son kapanışını <strong>48.06 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>50.41 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 48.50–50.41 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>49.90–46.11 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="sokm-section-title"><span className="sokm-section-num">06</span> Senaryo Analizi</div>
          <div className="sokm-scenario-grid">
            <div className="sokm-scenario-card bull">
              <div className="sokm-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>48.50 TL MAV 5 üzerinde kapanış</li>
                <li>49.22 TL MAV 13 seviyesinin geri alınması</li>
                <li>50.41 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 50.41–51.93 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="sokm-scenario-card bear">
              <div className="sokm-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>46.11 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 46.11 TL destek testi</li>
              </ul>
            </div>
          </div>

          <div className="sokm-disclaimer">
            <div className="sokm-disclaimer-head">
              <div className="sokm-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="sokm-footer">
            <div className="sokm-footer-inner">
              <div className="sokm-footer-brand">HOCA İLE BORSA</div>
              <div className="sokm-footer-meta">
                SOKM Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="sokm-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
