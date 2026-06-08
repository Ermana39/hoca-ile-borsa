import Head from "next/head";

export default function CvkmdGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>CVKMD Teknik Analiz — 08.042.5126 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="CVK Maden (CVKMD) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/cvkmd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .cvkmd-wrap *, .cvkmd-wrap *::before, .cvkmd-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cvkmd-wrap {
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
          line-height: 38.38;
          min-height: 100vh;
        }

        .cvkmd-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .cvkmd-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .cvkmd-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .cvkmd-hero-title em { color: var(--accent); font-style: normal; }
        .cvkmd-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .cvkmd-price-block { text-align: right; }
        .cvkmd-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .cvkmd-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .cvkmd-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .cvkmd-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .cvkmd-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .cvkmd-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .cvkmd-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .cvkmd-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .cvkmd-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .cvkmd-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .cvkmd-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .cvkmd-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .cvkmd-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .cvkmd-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .cvkmd-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .cvkmd-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .cvkmd-chart-img-wrap { position: relative; padding: 1rem; }
        .cvkmd-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .cvkmd-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .cvkmd-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .cvkmd-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .cvkmd-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .cvkmd-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .cvkmd-icon.blue   { background: rgba(10,187,255,.12); }
        .cvkmd-icon.gold   { background: rgba(245,200,66,.12); }
        .cvkmd-icon.green  { background: rgba(0,208,104,.12); }
        .cvkmd-icon.red    { background: rgba(255,77,106,.12); }
        .cvkmd-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .cvkmd-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .cvkmd-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .cvkmd-ind-row:last-child { border-bottom: none; }
        .cvkmd-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .cvkmd-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .cvkmd-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .cvkmd-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .cvkmd-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .cvkmd-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .cvkmd-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .cvkmd-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .cvkmd-progress-fill { height: 100%; border-radius: 3px; }

        .cvkmd-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .cvkmd-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .cvkmd-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .cvkmd-ma-table tr:last-child td { border-bottom: none; }
        .cvkmd-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .cvkmd-above { color: var(--green); }
        .cvkmd-below { color: var(--red); }

        .cvkmd-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .cvkmd-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .cvkmd-bol-bands { flex: 1; position: relative; height: 48px; }
        .cvkmd-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .cvkmd-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .cvkmd-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .cvkmd-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .cvkmd-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (48.32 - 42.18) / (48.32 - 36.70));
        }
        .cvkmd-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .cvkmd-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .cvkmd-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .cvkmd-sr-cell:hover { background: var(--bg3); }
        .cvkmd-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .cvkmd-sr-type.res { color: var(--red); }
        .cvkmd-sr-type.sup { color: var(--green); }
        .cvkmd-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .cvkmd-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .cvkmd-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .cvkmd-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .cvkmd-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .cvkmd-narrative p:last-child { margin-bottom: 0; }
        .cvkmd-narrative strong { color: var(--accent); font-weight: 600; }
        .cvkmd-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .cvkmd-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .cvkmd-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .cvkmd-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .cvkmd-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .cvkmd-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .cvkmd-scenario-card.bull .cvkmd-scenario-head { color: var(--green); }
        .cvkmd-scenario-card.bear .cvkmd-scenario-head { color: var(--red); }
        .cvkmd-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .cvkmd-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .cvkmd-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .cvkmd-scenario-card.bull li::before { color: var(--green); }
        .cvkmd-scenario-card.bear li::before { color: var(--red); }

        .cvkmd-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .cvkmd-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .cvkmd-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .cvkmd-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .cvkmd-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .cvkmd-disclaimer p + p { margin-top: .4rem; }

        .cvkmd-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .cvkmd-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .cvkmd-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .cvkmd-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .cvkmd-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .cvkmd-hero { grid-template-columns: 1fr; }
          .cvkmd-price-block { text-align: left; }
        }
        @media(max-width:768px) { .cvkmd-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .cvkmd-hero   { padding: 2rem 1rem 1.5rem; }
          .cvkmd-main   { padding: 1.5rem 1rem 3rem; }
          .cvkmd-footer { padding: 1.2rem 1rem; }
          .cvkmd-scenario-grid { grid-template-columns: 1fr; }
          .cvkmd-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cvkmd-wrap">
        <section className="cvkmd-hero">
          <div>
            <div className="cvkmd-hero-label">Teknik Analiz Raporu</div>
            <h1 className="cvkmd-hero-title">CVKMD<br /><em>MADEN</em></h1>
            <p className="cvkmd-hero-sub">
              BIST: CVKMD &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="cvkmd-price-block">
            <div className="cvkmd-price-main"><span className="cvkmd-price-currency">₺</span>42.18</div>
          </div>
        </section>

        <main className="cvkmd-main">
          <div className="cvkmd-section-title"><span className="cvkmd-section-num">01</span> Grafik</div>
          <div className="cvkmd-chart-wrap">
            <div className="cvkmd-chart-header">
              <span className="cvkmd-chart-title-text">CVKMD — Günlük Mum Grafiği</span>
              <div className="cvkmd-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`cvkmd-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="cvkmd-chart-img-wrap">
              <img
                src="/cvkmd-analiz.webp"
                alt="CVKMD Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.042.5126"
                loading="lazy"
              />
              <div className="cvkmd-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="cvkmd-section-title"><span className="cvkmd-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="cvkmd-bol-card">
            <div className="cvkmd-bol-visual">
              <div className="cvkmd-bol-bands">
                <div className="cvkmd-bol-fill" />
                <div className="cvkmd-bol-upper" />
                <div className="cvkmd-bol-mid" />
                <div className="cvkmd-bol-lower" />
                <div className="cvkmd-bol-marker" />
              </div>
              <div className="cvkmd-bol-labels">
                <span>BOL U: 48.32</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 42.51</span>
                <span>BOL D: 36.70</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "48.32 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "42.51 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "36.70 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "4.68 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "42.18 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="cvkmd-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="cvkmd-ind-name">{r.name}</span>
                <span className="cvkmd-ind-val">{r.val}</span>
                <span className={`cvkmd-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>42.51 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>36.70 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="cvkmd-section-title"><span className="cvkmd-section-num">03</span> İndikatörler</div>
          <div className="cvkmd-two-col">
            <div className="cvkmd-analysis-card">
              <div className="cvkmd-analysis-card-head">
                <div className="cvkmd-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="cvkmd-analysis-card-body">
                <div className="cvkmd-ind-row"><span className="cvkmd-ind-name">StocK</span><span className="cvkmd-ind-val">13.1973</span><span className="cvkmd-ind-signal neutral">Zayıf Bölge</span></div>
                <div className="cvkmd-ind-row"><span className="cvkmd-ind-name">StocD</span><span className="cvkmd-ind-val">27.9939</span><span className="cvkmd-ind-signal buy">Tepki</span></div>
                <div className="cvkmd-ind-row" style={{ borderBottom: "none" }}><span className="cvkmd-ind-name">Konum</span><span className="cvkmd-ind-val">Zayıf Bölge</span><span className="cvkmd-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="cvkmd-progress-label"><span>Zayıf Bölge (0)</span><span>13.1973</span><span>Aşırı Alım (100)</span></div>
                  <div className="cvkmd-progress-bar"><div className="cvkmd-progress-fill" style={{ width: "13.1973%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="cvkmd-analysis-card">
              <div className="cvkmd-analysis-card-head">
                <div className="cvkmd-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="cvkmd-analysis-card-body">
                <div className="cvkmd-ind-row"><span className="cvkmd-ind-name">MACD</span><span className="cvkmd-ind-val">2.1591</span><span className="cvkmd-ind-signal sell">Negatif</span></div>
                <div className="cvkmd-ind-row"><span className="cvkmd-ind-name">Trigger</span><span className="cvkmd-ind-val">2.4513</span><span className="cvkmd-ind-signal sell">Baskı</span></div>
                <div className="cvkmd-ind-row" style={{ borderBottom: "none" }}><span className="cvkmd-ind-name">Momentum</span><span className="cvkmd-ind-val">Zayıf</span><span className="cvkmd-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ancak trigger çizgisinin altında. Bu durum ana momentumun tamamen bozulmadığını fakat kısa vadeli ivmenin zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="cvkmd-analysis-card">
              <div className="cvkmd-analysis-card-head">
                <div className="cvkmd-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="cvkmd-analysis-card-body">
                <div className="cvkmd-ind-row"><span className="cvkmd-ind-name">RSI Değeri</span><span className="cvkmd-ind-val">52.94</span><span className="cvkmd-ind-signal neutral">Zayıf</span></div>
                <div className="cvkmd-ind-row" style={{ borderBottom: "none" }}><span className="cvkmd-ind-name">Bölge</span><span className="cvkmd-ind-val">Zayıf Bölge-Alt</span><span className="cvkmd-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="cvkmd-progress-label"><span>30 (A.Satım)</span><span>52.94</span><span>70 (A.Alım)</span></div>
                  <div className="cvkmd-progress-bar"><div className="cvkmd-progress-fill" style={{ width: "52.94%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="cvkmd-analysis-card">
              <div className="cvkmd-analysis-card-head">
                <div className="cvkmd-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="cvkmd-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="cvkmd-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","43.77","Fiyat Altında ▼"],
                      ["MAV 13","42.12","Fiyat Altında ▼"],
                      ["MAV 21","42.12","Fiyat Üstünde ▲"],
                      ["MAV 55","38.38","Fiyat Üstünde ▲"],
                      ["MAV 89","35.87","Fiyat Üstünde ▲"],
                      ["MAV 144","32.35","Fiyat Üstünde ▲"],
                      ["MAV 233","28.02","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "cvkmd-above" : "cvkmd-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="cvkmd-section-title"><span className="cvkmd-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="cvkmd-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "42.51–43.77", desc: "Bollinger orta bandı, MAV 13 ve MAV 5 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "45.00–48.32", desc: "Son tepki alanı ve Bollinger üst bandı" },
              { type: "res", label: "Güçlü Direnç", price: "48.32 TL", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "42.12–41.76", desc: "MAV 21 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "38.38–36.70", desc: "MAV 55 ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "35.87–32.35", desc: "MAV 89 ve MAV 144 destek alanı" },
            ].map((s) => (
              <div className="cvkmd-sr-cell" key={s.label}>
                <div className={`cvkmd-sr-type ${s.type}`}>{s.label}</div>
                <div className="cvkmd-sr-price">{s.price}</div>
                <div className="cvkmd-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="cvkmd-section-title"><span className="cvkmd-section-num">05</span> Genel Değerlendirme</div>
          <div className="cvkmd-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>CVKMD, son kapanışını <strong>42.18 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5 ve MAV 13 altında kalsa da MAV 21, MAV 55, MAV 89, MAV 144 ve MAV 233 üzerinde bulunuyor. Bu yapı kısa vadede bir miktar momentum kaybı olsa da ana destek görünümünün korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>42.51 TL orta bandına</strong> çok yakın bölgede işlem görüyor. 42.51–43.77 TL bandının geri alınması kısa vadeli toparlanmayı güçlendirebilir. Aşağıda <strong>36.70 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 13.20 / 27.99 seviyelerinde ve zayıf bölgede. <em>MACD pozitif bölgede</em> olmasına rağmen trigger çizgisinin altında seyrediyor. RSI 52.94 ile 50 eşiğinin üzerinde kaldığı için momentum tamamen bozulmuş değil.</p>
            <p>43.77 TL üzeri kapanışlar görünümü rahatlatabilir. 41.76 TL altı kapanışlarda ise 38.38–36.70 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="cvkmd-section-title"><span className="cvkmd-section-num">06</span> Senaryo Analizi</div>
          <div className="cvkmd-scenario-grid">
            <div className="cvkmd-scenario-card bull">
              <div className="cvkmd-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>43.77 TL MAV 5 üzerinde kapanış</li>
                <li>42.12 TL MAV 13 seviyesinin geri alınması</li>
                <li>48.32 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–48.32 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="cvkmd-scenario-card bear">
              <div className="cvkmd-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>35.87 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 35.87–32.35 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="cvkmd-disclaimer">
            <div className="cvkmd-disclaimer-head">
              <div className="cvkmd-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="cvkmd-footer">
            <div className="cvkmd-footer-inner">
              <div className="cvkmd-footer-brand">HOCA İLE BORSA</div>
              <div className="cvkmd-footer-meta">
                CVKMD Teknik Analiz Raporu<br />
                Hazırlanma: 08.042.5126 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="cvkmd-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
