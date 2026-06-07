import Head from "next/head";

export default function KrdmdGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>KRDMD Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Kardemir D (KRDMD) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/krdmd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .krdmd-wrap *, .krdmd-wrap *::before, .krdmd-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .krdmd-wrap {
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

        .krdmd-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .krdmd-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .krdmd-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .krdmd-hero-title em { color: var(--accent); font-style: normal; }
        .krdmd-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .krdmd-price-block { text-align: right; }
        .krdmd-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .krdmd-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .krdmd-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .krdmd-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .krdmd-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .krdmd-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .krdmd-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .krdmd-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .krdmd-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .krdmd-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .krdmd-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .krdmd-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .krdmd-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .krdmd-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .krdmd-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .krdmd-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .krdmd-chart-img-wrap { position: relative; padding: 1rem; }
        .krdmd-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .krdmd-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .krdmd-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .krdmd-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .krdmd-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .krdmd-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .krdmd-icon.blue   { background: rgba(10,187,255,.12); }
        .krdmd-icon.gold   { background: rgba(245,200,66,.12); }
        .krdmd-icon.green  { background: rgba(0,208,104,.12); }
        .krdmd-icon.red    { background: rgba(255,77,106,.12); }
        .krdmd-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .krdmd-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .krdmd-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .krdmd-ind-row:last-child { border-bottom: none; }
        .krdmd-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .krdmd-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .krdmd-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .krdmd-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .krdmd-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .krdmd-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .krdmd-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .krdmd-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .krdmd-progress-fill { height: 100%; border-radius: 3px; }

        .krdmd-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .krdmd-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .krdmd-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .krdmd-ma-table tr:last-child td { border-bottom: none; }
        .krdmd-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .krdmd-above { color: var(--green); }
        .krdmd-below { color: var(--red); }

        .krdmd-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .krdmd-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .krdmd-bol-bands { flex: 1; position: relative; height: 48px; }
        .krdmd-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .krdmd-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .krdmd-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .krdmd-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .krdmd-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (44.24 - 39.00) / (44.24 - 37.30));
        }
        .krdmd-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .krdmd-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .krdmd-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .krdmd-sr-cell:hover { background: var(--bg3); }
        .krdmd-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .krdmd-sr-type.res { color: var(--red); }
        .krdmd-sr-type.sup { color: var(--green); }
        .krdmd-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .krdmd-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .krdmd-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .krdmd-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .krdmd-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .krdmd-narrative p:last-child { margin-bottom: 0; }
        .krdmd-narrative strong { color: var(--accent); font-weight: 600; }
        .krdmd-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .krdmd-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .krdmd-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .krdmd-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .krdmd-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .krdmd-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .krdmd-scenario-card.bull .krdmd-scenario-head { color: var(--green); }
        .krdmd-scenario-card.bear .krdmd-scenario-head { color: var(--red); }
        .krdmd-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .krdmd-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .krdmd-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .krdmd-scenario-card.bull li::before { color: var(--green); }
        .krdmd-scenario-card.bear li::before { color: var(--red); }

        .krdmd-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .krdmd-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .krdmd-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .krdmd-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .krdmd-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .krdmd-disclaimer p + p { margin-top: .4rem; }

        .krdmd-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .krdmd-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .krdmd-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .krdmd-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .krdmd-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .krdmd-hero { grid-template-columns: 1fr; }
          .krdmd-price-block { text-align: left; }
        }
        @media(max-width:768px) { .krdmd-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .krdmd-hero   { padding: 2rem 1rem 1.5rem; }
          .krdmd-main   { padding: 1.5rem 1rem 3rem; }
          .krdmd-footer { padding: 1.2rem 1rem; }
          .krdmd-scenario-grid { grid-template-columns: 1fr; }
          .krdmd-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="krdmd-wrap">
        <section className="krdmd-hero">
          <div>
            <div className="krdmd-hero-label">Teknik Analiz Raporu</div>
            <h1 className="krdmd-hero-title">KARDEMİR<br /><em>D</em></h1>
            <p className="krdmd-hero-sub">
              BIST: KRDMD &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="krdmd-price-block">
            <div className="krdmd-price-main"><span className="krdmd-price-currency">₺</span>39.00</div>
          </div>
        </section>

        <main className="krdmd-main">
          <div className="krdmd-section-title"><span className="krdmd-section-num">01</span> Grafik</div>
          <div className="krdmd-chart-wrap">
            <div className="krdmd-chart-header">
              <span className="krdmd-chart-title-text">KRDMD — Günlük Mum Grafiği</span>
              <div className="krdmd-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`krdmd-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="krdmd-chart-img-wrap">
              <img
                src="/krdmd-analiz.webp"
                alt="KRDMD Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="krdmd-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="krdmd-section-title"><span className="krdmd-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="krdmd-bol-card">
            <div className="krdmd-bol-visual">
              <div className="krdmd-bol-bands">
                <div className="krdmd-bol-fill" />
                <div className="krdmd-bol-upper" />
                <div className="krdmd-bol-mid" />
                <div className="krdmd-bol-lower" />
                <div className="krdmd-bol-marker" />
              </div>
              <div className="krdmd-bol-labels">
                <span>BOL U: 44.24</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 40.77</span>
                <span>BOL D: 37.30</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "44.24 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "40.77 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "37.30 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "6.94 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "39.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="krdmd-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="krdmd-ind-name">{r.name}</span>
                <span className="krdmd-ind-val">{r.val}</span>
                <span className={`krdmd-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>40.77 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu yapı kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>37.30 TL</strong> alt bandı ana destek olarak izlenebilir.
            </p>
          </div>

          <div className="krdmd-section-title"><span className="krdmd-section-num">03</span> İndikatörler</div>
          <div className="krdmd-two-col">
            <div className="krdmd-analysis-card">
              <div className="krdmd-analysis-card-head">
                <div className="krdmd-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="krdmd-analysis-card-body">
                <div className="krdmd-ind-row"><span className="krdmd-ind-name">StocK</span><span className="krdmd-ind-val">15.20</span><span className="krdmd-ind-signal sell">Zayıf</span></div>
                <div className="krdmd-ind-row"><span className="krdmd-ind-name">StocD</span><span className="krdmd-ind-val">17.80</span><span className="krdmd-ind-signal sell">Satış</span></div>
                <div className="krdmd-ind-row" style={{ borderBottom: "none" }}><span className="krdmd-ind-name">Konum</span><span className="krdmd-ind-val">Aşırı Satım Yakını</span><span className="krdmd-ind-signal neutral">Tepki İzle</span></div>
                <div>
                  <div className="krdmd-progress-label"><span>Aşırı Satım (0)</span><span>15.20</span><span>Aşırı Alım (100)</span></div>
                  <div className="krdmd-progress-bar"><div className="krdmd-progress-fill" style={{ width: "15.20%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı satım bölgesine yakın. Tepki potansiyeli oluşabilir ancak K çizgisinin D çizgisi altında kalması zayıflığın sürdüğünü gösteriyor.</p>
              </div>
            </div>

            <div className="krdmd-analysis-card">
              <div className="krdmd-analysis-card-head">
                <div className="krdmd-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="krdmd-analysis-card-body">
                <div className="krdmd-ind-row"><span className="krdmd-ind-name">MACD</span><span className="krdmd-ind-val">0.6091</span><span className="krdmd-ind-signal neutral">Pozitif</span></div>
                <div className="krdmd-ind-row"><span className="krdmd-ind-name">Trigger</span><span className="krdmd-ind-val">1.1420</span><span className="krdmd-ind-signal sell">Altında</span></div>
                <div className="krdmd-ind-row" style={{ borderBottom: "none" }}><span className="krdmd-ind-name">Momentum</span><span className="krdmd-ind-val">Zayıflıyor</span><span className="krdmd-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olsa da trigger çizgisinin altında. Bu durum yükseliş momentumunun zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="krdmd-analysis-card">
              <div className="krdmd-analysis-card-head">
                <div className="krdmd-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="krdmd-analysis-card-body">
                <div className="krdmd-ind-row"><span className="krdmd-ind-name">RSI Değeri</span><span className="krdmd-ind-val">48.89</span><span className="krdmd-ind-signal neutral">Nötr</span></div>
                <div className="krdmd-ind-row" style={{ borderBottom: "none" }}><span className="krdmd-ind-name">Bölge</span><span className="krdmd-ind-val">Nötr-Alt</span><span className="krdmd-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="krdmd-progress-label"><span>30 (A.Satım)</span><span>48.89</span><span>70 (A.Alım)</span></div>
                  <div className="krdmd-progress-bar"><div className="krdmd-progress-fill" style={{ width: "48.89%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen altında. Bu durum kısa vadeli momentumun henüz güç kazanmadığını gösterir.</p>
              </div>
            </div>

            <div className="krdmd-analysis-card">
              <div className="krdmd-analysis-card-head">
                <div className="krdmd-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="krdmd-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="krdmd-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","39.79","Fiyat Altında ▼"],
                      ["MAV 13","40.07","Fiyat Altında ▼"],
                      ["MAV 21","39.74","Fiyat Altında ▼"],
                      ["MAV 55","37.06","Fiyat Üstünde ▲"],
                      ["MAV 89","35.02","Fiyat Üstünde ▲"],
                      ["MAV 144","32.92","Fiyat Üstünde ▲"],
                      ["MAV 233","31.06","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "krdmd-above" : "krdmd-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="krdmd-section-title"><span className="krdmd-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="krdmd-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "39.74–40.07", desc: "MAV 21, MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "40.77 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "44.24–47.00", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "38.72–39.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "37.30–37.06", desc: "Bollinger alt bandı ve MAV 55 bölgesi" },
              { type: "sup", label: "Derin Destek", price: "35.02 TL", desc: "MAV 89 destek bölgesi" },
            ].map((s) => (
              <div className="krdmd-sr-cell" key={s.label}>
                <div className={`krdmd-sr-type ${s.type}`}>{s.label}</div>
                <div className="krdmd-sr-price">{s.price}</div>
                <div className="krdmd-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="krdmd-section-title"><span className="krdmd-section-num">05</span> Genel Değerlendirme</div>
          <div className="krdmd-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>KRDMD, son yükseliş denemesi sonrası gelen satışlarla <strong>39.00 TL</strong> seviyesinde kapanış yapmıştır. Fiyatın MAV 5, MAV 13 ve MAV 21 altında kalması kısa vadede zayıflama olduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>40.77 TL orta bandının altında</strong> bulunuyor. Bu seviye üzerine dönüş olmadan tepki hareketlerinin sınırlı kalma ihtimali yüksektir. Aşağıda 37.30 TL Bollinger alt bandı ve 37.06 TL MAV 55 ana destek bölgesi olarak öne çıkıyor.</p>
            <p>Stochastic aşırı satım bölgesine yaklaşırken, MACD trigger altında ve RSI <em>50 seviyesinin hemen altında</em> bulunuyor. Bu yapı tepki ihtimalini tamamen dışlamasa da momentum tarafında henüz net güçlenme olmadığını gösteriyor.</p>
            <p>39.74–40.77 TL bandının geri alınması kısa vadeli görünümü rahatlatır. 38.72 TL altı kapanışlarda ise 37.30–37.06 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="krdmd-section-title"><span className="krdmd-section-num">06</span> Senaryo Analizi</div>
          <div className="krdmd-scenario-grid">
            <div className="krdmd-scenario-card bull">
              <div className="krdmd-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>39.74 TL MAV 21 üzerinde kapanış</li>
                <li>40.07 TL MAV 13 seviyesinin geri alınması</li>
                <li>40.77 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin tekrar trigger üzerine geçmesi</li>
                <li>Hedef: 44.24 TL Bollinger üst bandı</li>
              </ul>
            </div>
            <div className="krdmd-scenario-card bear">
              <div className="krdmd-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>38.72 TL günlük dip altında kapanış</li>
                <li>Stochastic göstergesinin aşırı satımda zayıf kalması</li>
                <li>MACD’nin trigger altında kalmaya devam etmesi</li>
                <li>37.30 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 37.30–35.02 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="krdmd-disclaimer">
            <div className="krdmd-disclaimer-head">
              <div className="krdmd-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="krdmd-footer">
            <div className="krdmd-footer-inner">
              <div className="krdmd-footer-brand">HOCA İLE BORSA</div>
              <div className="krdmd-footer-meta">
                KRDMD Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="krdmd-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
