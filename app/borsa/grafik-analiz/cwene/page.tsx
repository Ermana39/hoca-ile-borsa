import Head from "next/head";

export default function CweneGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>CWENE Teknik Analiz — 08.038.8226 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="CW Enerji (CWENE) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/cwene" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .cwene-wrap *, .cwene-wrap *::before, .cwene-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cwene-wrap {
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
          line-height: 35.72;
          min-height: 100vh;
        }

        .cwene-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .cwene-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .cwene-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .cwene-hero-title em { color: var(--accent); font-style: normal; }
        .cwene-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .cwene-price-block { text-align: right; }
        .cwene-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .cwene-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .cwene-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .cwene-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .cwene-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .cwene-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .cwene-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .cwene-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .cwene-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .cwene-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .cwene-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .cwene-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .cwene-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .cwene-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .cwene-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .cwene-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .cwene-chart-img-wrap { position: relative; padding: 1rem; }
        .cwene-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .cwene-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .cwene-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .cwene-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .cwene-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .cwene-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .cwene-icon.blue   { background: rgba(10,187,255,.12); }
        .cwene-icon.gold   { background: rgba(245,200,66,.12); }
        .cwene-icon.green  { background: rgba(0,208,104,.12); }
        .cwene-icon.red    { background: rgba(255,77,106,.12); }
        .cwene-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .cwene-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .cwene-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .cwene-ind-row:last-child { border-bottom: none; }
        .cwene-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .cwene-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .cwene-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .cwene-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .cwene-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .cwene-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .cwene-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .cwene-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .cwene-progress-fill { height: 100%; border-radius: 3px; }

        .cwene-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .cwene-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .cwene-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .cwene-ma-table tr:last-child td { border-bottom: none; }
        .cwene-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .cwene-above { color: var(--green); }
        .cwene-below { color: var(--red); }

        .cwene-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .cwene-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .cwene-bol-bands { flex: 1; position: relative; height: 48px; }
        .cwene-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .cwene-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .cwene-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .cwene-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .cwene-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (43.13 - 39.58) / (43.13 - 34.50));
        }
        .cwene-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .cwene-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .cwene-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .cwene-sr-cell:hover { background: var(--bg3); }
        .cwene-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .cwene-sr-type.res { color: var(--red); }
        .cwene-sr-type.sup { color: var(--green); }
        .cwene-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .cwene-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .cwene-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .cwene-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .cwene-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .cwene-narrative p:last-child { margin-bottom: 0; }
        .cwene-narrative strong { color: var(--accent); font-weight: 600; }
        .cwene-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .cwene-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .cwene-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .cwene-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .cwene-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .cwene-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .cwene-scenario-card.bull .cwene-scenario-head { color: var(--green); }
        .cwene-scenario-card.bear .cwene-scenario-head { color: var(--red); }
        .cwene-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .cwene-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .cwene-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .cwene-scenario-card.bull li::before { color: var(--green); }
        .cwene-scenario-card.bear li::before { color: var(--red); }

        .cwene-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .cwene-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .cwene-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .cwene-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .cwene-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .cwene-disclaimer p + p { margin-top: .4rem; }

        .cwene-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .cwene-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .cwene-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .cwene-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .cwene-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .cwene-hero { grid-template-columns: 1fr; }
          .cwene-price-block { text-align: left; }
        }
        @media(max-width:768px) { .cwene-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .cwene-hero   { padding: 2rem 1rem 1.5rem; }
          .cwene-main   { padding: 1.5rem 1rem 3rem; }
          .cwene-footer { padding: 1.2rem 1rem; }
          .cwene-scenario-grid { grid-template-columns: 1fr; }
          .cwene-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cwene-wrap">
        <section className="cwene-hero">
          <div>
            <div className="cwene-hero-label">Teknik Analiz Raporu</div>
            <h1 className="cwene-hero-title">CWENE<br /><em>ENERJİ</em></h1>
            <p className="cwene-hero-sub">
              BIST: CWENE &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="cwene-price-block">
            <div className="cwene-price-main"><span className="cwene-price-currency">₺</span>39.58</div>
          </div>
        </section>

        <main className="cwene-main">
          <div className="cwene-section-title"><span className="cwene-section-num">01</span> Grafik</div>
          <div className="cwene-chart-wrap">
            <div className="cwene-chart-header">
              <span className="cwene-chart-title-text">CWENE — Günlük Mum Grafiği</span>
              <div className="cwene-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`cwene-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="cwene-chart-img-wrap">
              <img
                src="/cwene-analiz.webp"
                alt="CWENE Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.038.8226"
                loading="lazy"
              />
              <div className="cwene-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="cwene-section-title"><span className="cwene-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="cwene-bol-card">
            <div className="cwene-bol-visual">
              <div className="cwene-bol-bands">
                <div className="cwene-bol-fill" />
                <div className="cwene-bol-upper" />
                <div className="cwene-bol-mid" />
                <div className="cwene-bol-lower" />
                <div className="cwene-bol-marker" />
              </div>
              <div className="cwene-bol-labels">
                <span>BOL U: 43.13</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 38.82</span>
                <span>BOL D: 34.50</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "43.13 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "38.82 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "34.50 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "3.35 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "39.58 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="cwene-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="cwene-ind-name">{r.name}</span>
                <span className="cwene-ind-val">{r.val}</span>
                <span className={`cwene-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>38.82 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>34.50 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="cwene-section-title"><span className="cwene-section-num">03</span> İndikatörler</div>
          <div className="cwene-two-col">
            <div className="cwene-analysis-card">
              <div className="cwene-analysis-card-head">
                <div className="cwene-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="cwene-analysis-card-body">
                <div className="cwene-ind-row"><span className="cwene-ind-name">StocK</span><span className="cwene-ind-val">56.3353</span><span className="cwene-ind-signal neutral">Nötr Bölge</span></div>
                <div className="cwene-ind-row"><span className="cwene-ind-name">StocD</span><span className="cwene-ind-val">57.6734</span><span className="cwene-ind-signal buy">Tepki</span></div>
                <div className="cwene-ind-row" style={{ borderBottom: "none" }}><span className="cwene-ind-name">Konum</span><span className="cwene-ind-val">Nötr Bölge</span><span className="cwene-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="cwene-progress-label"><span>Nötr Bölge (0)</span><span>56.3353</span><span>Aşırı Alım (100)</span></div>
                  <div className="cwene-progress-bar"><div className="cwene-progress-fill" style={{ width: "56.3353%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="cwene-analysis-card">
              <div className="cwene-analysis-card-head">
                <div className="cwene-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="cwene-analysis-card-body">
                <div className="cwene-ind-row"><span className="cwene-ind-name">MACD</span><span className="cwene-ind-val">1.4449</span><span className="cwene-ind-signal sell">Negatif</span></div>
                <div className="cwene-ind-row"><span className="cwene-ind-name">Trigger</span><span className="cwene-ind-val">1.4297</span><span className="cwene-ind-signal sell">Baskı</span></div>
                <div className="cwene-ind-row" style={{ borderBottom: "none" }}><span className="cwene-ind-name">Momentum</span><span className="cwene-ind-val">Zayıf</span><span className="cwene-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Bu durum kısa vadeli momentumun halen pozitif tarafta kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="cwene-analysis-card">
              <div className="cwene-analysis-card-head">
                <div className="cwene-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="cwene-analysis-card-body">
                <div className="cwene-ind-row"><span className="cwene-ind-name">RSI Değeri</span><span className="cwene-ind-val">54.52</span><span className="cwene-ind-signal neutral">Zayıf</span></div>
                <div className="cwene-ind-row" style={{ borderBottom: "none" }}><span className="cwene-ind-name">Bölge</span><span className="cwene-ind-val">Nötr Bölge-Alt</span><span className="cwene-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="cwene-progress-label"><span>30 (A.Satım)</span><span>54.52</span><span>70 (A.Alım)</span></div>
                  <div className="cwene-progress-bar"><div className="cwene-progress-fill" style={{ width: "54.52%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="cwene-analysis-card">
              <div className="cwene-analysis-card-head">
                <div className="cwene-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="cwene-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="cwene-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","40.14","Fiyat Altında ▼"],
                      ["MAV 13","38.55","Fiyat Altında ▼"],
                      ["MAV 21","38.55","Fiyat Üstünde ▲"],
                      ["MAV 55","35.72","Fiyat Üstünde ▲"],
                      ["MAV 89","33.77","Fiyat Üstünde ▲"],
                      ["MAV 144","31.27","Fiyat Üstünde ▲"],
                      ["MAV 233","28.56","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "cwene-above" : "cwene-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="cwene-section-title"><span className="cwene-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="cwene-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "39.93–40.14", desc: "MAV 13 ve MAV 5 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "43.13 TL", desc: "Bollinger üst bandı ve son tepki alanı" },
              { type: "res", label: "Güçlü Direnç", price: "45.14 TL", desc: "Grafikte görülen son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "39.44–38.82", desc: "Günlük dip ve Bollinger orta bandı" },
              { type: "sup", label: "Ana Destek", price: "38.55–35.72", desc: "MAV 21 ve MAV 55 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "34.50–33.77", desc: "Bollinger alt bandı ve MAV 89 destek bölgesi" },
            ].map((s) => (
              <div className="cwene-sr-cell" key={s.label}>
                <div className={`cwene-sr-type ${s.type}`}>{s.label}</div>
                <div className="cwene-sr-price">{s.price}</div>
                <div className="cwene-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="cwene-section-title"><span className="cwene-section-num">05</span> Genel Değerlendirme</div>
          <div className="cwene-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>CWENE, son kapanışını <strong>39.58 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5 ve MAV 13 altında kalsa da MAV 21, MAV 55, MAV 89, MAV 144 ve MAV 233 üzerinde bulunuyor. Bu yapı kısa vadede momentum kaybı olsa da ana yükseliş yapısının korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>38.82 TL orta bandının üzerinde</strong> kalmayı sürdürüyor. 39.93–40.14 TL bandının geri alınması kısa vadeli toparlanmayı güçlendirebilir. Yukarıda <strong>43.13 TL</strong> Bollinger üst bandı ilk güçlü direnç olarak izlenebilir.</p>
            <p>Stochastic göstergesi 56.34 / 57.67 seviyeleriyle nötr bölgede ve K çizgisi D çizgisinin hafif altında. <em>MACD pozitif bölgede</em> ve trigger çizgisinin üzerinde seyrediyor. RSI 54.52 ile 50 eşiğinin üzerinde kaldığı için momentum tamamen bozulmuş değil.</p>
            <p>40.14 TL üzeri kapanışlar görünümü rahatlatabilir. 38.82 TL altı kapanışlarda ise 38.55–35.72 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="cwene-section-title"><span className="cwene-section-num">06</span> Senaryo Analizi</div>
          <div className="cwene-scenario-grid">
            <div className="cwene-scenario-card bull">
              <div className="cwene-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>40.14 TL MAV 5 üzerinde kapanış</li>
                <li>38.55 TL MAV 13 seviyesinin geri alınması</li>
                <li>43.13 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 43.13–45.14 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="cwene-scenario-card bear">
              <div className="cwene-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>39.44 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>33.77 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 33.77–31.27 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="cwene-disclaimer">
            <div className="cwene-disclaimer-head">
              <div className="cwene-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="cwene-footer">
            <div className="cwene-footer-inner">
              <div className="cwene-footer-brand">HOCA İLE BORSA</div>
              <div className="cwene-footer-meta">
                CWENE Teknik Analiz Raporu<br />
                Hazırlanma: 08.038.8226 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="cwene-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
