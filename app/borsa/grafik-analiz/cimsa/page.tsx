import Head from "next/head";

export default function CimsaGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>CIMSA Teknik Analiz — 06.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Çimsa (CIMSA) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hocaileborsa.com/borsa/grafik-analiz/cimsa"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .cimsa-wrap *, .cimsa-wrap *::before, .cimsa-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cimsa-wrap {
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
        .cimsa-hero {
          padding: 3.5rem 2rem 2rem;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: end;
          border-bottom: 1px solid var(--border);
        }
        .cimsa-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: .6rem;
        }
        .cimsa-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95;
          color: var(--text-bright);
          letter-spacing: .04em;
        }
        .cimsa-hero-title em {
          color: var(--accent);
          font-style: normal;
        }
        .cimsa-hero-sub {
          margin-top: .9rem;
          color: var(--text-dim);
          font-size: .88rem;
          font-weight: 300;
          max-width: 520px;
        }
        .cimsa-price-block { text-align: right; }
        .cimsa-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright);
          letter-spacing: .04em;
          line-height: 1;
        }
        .cimsa-price-currency {
          font-size: .55em;
          color: var(--text-dim);
          vertical-align: super;
        }

        /* MAIN */
        .cimsa-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem 4rem;
        }

        /* SECTION TITLE */
        .cimsa-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: .08em;
          color: var(--text-bright);
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: .8rem;
        }
        .cimsa-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .cimsa-section-num {
          font-size: .75rem;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07);
          border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem;
          border-radius: 3px;
        }

        /* CHART */
        .cimsa-chart-wrap {
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 2.5rem;
          background: var(--bg2);
        }
        .cimsa-chart-header {
          padding: .9rem 1.4rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: .8rem;
        }
        .cimsa-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem;
          letter-spacing: .1em;
          color: var(--text-bright);
        }
        .cimsa-pills {
          display: flex;
          flex-wrap: wrap;
          gap: .4rem;
        }
        .cimsa-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: .66rem;
          padding: .15rem .55rem;
          border-radius: 20px;
          border: 1px solid;
        }
        .cimsa-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .cimsa-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .cimsa-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .cimsa-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .cimsa-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .cimsa-chart-img-wrap {
          position: relative;
          padding: 1rem;
        }
        .cimsa-chart-img-wrap img {
          width: 100%;
          border-radius: 6px;
          display: block;
        }
        .cimsa-chart-watermark {
          position: absolute;
          bottom: 1.8rem;
          right: 2rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: .9rem;
          letter-spacing: .15em;
          color: rgba(0,229,160,.15);
          pointer-events: none;
          user-select: none;
        }

        /* TWO COL */
        .cimsa-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        /* ANALYSIS CARD */
        .cimsa-analysis-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        .cimsa-analysis-card-head {
          padding: .85rem 1.3rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: .6rem;
        }
        .cimsa-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .9rem;
        }
        .cimsa-icon.blue  { background: rgba(10,187,255,.12); }
        .cimsa-icon.gold  { background: rgba(245,200,66,.12); }
        .cimsa-icon.green { background: rgba(0,208,104,.12); }
        .cimsa-icon.red   { background: rgba(255,77,106,.12); }
        .cimsa-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: .08em;
          color: var(--text-bright);
        }
        .cimsa-analysis-card-body {
          padding: 1.2rem 1.3rem;
          display: flex;
          flex-direction: column;
          gap: .9rem;
        }

        /* IND ROW */
        .cimsa-ind-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: .55rem 0;
          border-bottom: 1px solid rgba(30,44,58,.6);
          gap: .8rem;
        }
        .cimsa-ind-row:last-child { border-bottom: none; }
        .cimsa-ind-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem;
          color: var(--text-dim);
        }
        .cimsa-ind-val {
          font-family: 'JetBrains Mono', monospace;
          font-size: .88rem;
          color: var(--text-bright);
          font-weight: 600;
        }
        .cimsa-ind-signal {
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .1em;
          padding: .12rem .5rem;
          border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
        }
        .cimsa-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .cimsa-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .cimsa-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .cimsa-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: .72rem;
          color: var(--text-dim);
          margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .cimsa-progress-bar {
          height: 5px;
          background: var(--bg3);
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .cimsa-progress-fill {
          height: 100%;
          border-radius: 3px;
        }

        /* MA TABLE */
        .cimsa-ma-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem;
        }
        .cimsa-ma-table th {
          text-align: left;
          color: var(--text-dim);
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .12em;
          padding: .5rem .6rem;
          border-bottom: 1px solid var(--border);
        }
        .cimsa-ma-table td {
          padding: .55rem .6rem;
          color: var(--text);
          border-bottom: 1px solid rgba(30,44,58,.5);
        }
        .cimsa-ma-table tr:last-child td { border-bottom: none; }
        .cimsa-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .cimsa-above { color: var(--green); }
        .cimsa-below { color: var(--red); }

        /* BOLLINGER */
        .cimsa-bol-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.4rem;
          margin-bottom: 2.5rem;
        }
        .cimsa-bol-visual {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.2rem 0;
          padding: 1rem;
          background: var(--bg3);
          border-radius: 8px;
          border: 1px solid var(--border);
        }
        .cimsa-bol-bands {
          flex: 1;
          position: relative;
          height: 48px;
        }
        .cimsa-bol-upper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(181,123,255,.6);
        }
        .cimsa-bol-mid {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(245,200,66,.5);
          transform: translateY(-50%);
        }
        .cimsa-bol-lower {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(181,123,255,.6);
        }
        .cimsa-bol-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%);
        }
        .cimsa-bol-marker {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (59.80 - 49.52) / (59.80 - 47.84));
        }
        .cimsa-bol-labels {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 48px;
          color: var(--text-dim);
        }

        /* SR GRID */
        .cimsa-sr-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          margin-bottom: 2.5rem;
        }
        .cimsa-sr-cell {
          background: var(--bg2);
          padding: .9rem 1.1rem;
        }
        .cimsa-sr-cell:hover { background: var(--bg3); }
        .cimsa-sr-type {
          font-size: .65rem;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: .3rem;
        }
        .cimsa-sr-type.res { color: var(--red); }
        .cimsa-sr-type.sup { color: var(--green); }
        .cimsa-sr-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-bright);
        }
        .cimsa-sr-desc {
          font-size: .72rem;
          color: var(--text-dim);
          margin-top: .2rem;
        }

        /* NARRATIVE */
        .cimsa-narrative {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0;
          padding: 1.6rem 1.8rem;
          margin-bottom: 2.5rem;
        }
        .cimsa-narrative h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.25rem;
          letter-spacing: .07em;
          color: var(--text-bright);
          margin-bottom: .8rem;
        }
        .cimsa-narrative p {
          color: var(--text);
          line-height: 1.75;
          margin-bottom: .6rem;
          font-size: .92rem;
        }
        .cimsa-narrative p:last-child { margin-bottom: 0; }
        .cimsa-narrative strong {
          color: var(--accent);
          font-weight: 600;
        }
        .cimsa-narrative em {
          color: var(--warn);
          font-style: normal;
          font-weight: 500;
        }

        /* SCENARIO */
        .cimsa-scenario-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .cimsa-scenario-card {
          border-radius: 10px;
          padding: 1.3rem;
          border: 1px solid;
        }
        .cimsa-scenario-card.bull {
          background: rgba(0,208,104,.05);
          border-color: rgba(0,208,104,.2);
        }
        .cimsa-scenario-card.bear {
          background: rgba(255,61,85,.05);
          border-color: rgba(255,61,85,.2);
        }
        .cimsa-scenario-head {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: .09em;
          margin-bottom: .7rem;
          display: flex;
          align-items: center;
          gap: .5rem;
        }
        .cimsa-scenario-card.bull .cimsa-scenario-head { color: var(--green); }
        .cimsa-scenario-card.bear .cimsa-scenario-head { color: var(--red); }
        .cimsa-scenario-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .45rem;
        }
        .cimsa-scenario-card li {
          font-size: .83rem;
          color: var(--text);
          display: flex;
          align-items: flex-start;
          gap: .5rem;
        }
        .cimsa-scenario-card li::before {
          content: '›';
          font-family: 'JetBrains Mono', monospace;
          margin-top: .05rem;
        }
        .cimsa-scenario-card.bull li::before { color: var(--green); }
        .cimsa-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .cimsa-disclaimer {
          border: 1px solid rgba(255,185,48,.18);
          background: rgba(255,185,48,.04);
          border-radius: 10px;
          padding: 1.4rem 1.6rem;
          margin-bottom: 2rem;
        }
        .cimsa-disclaimer-head {
          display: flex;
          align-items: center;
          gap: .6rem;
          margin-bottom: .7rem;
        }
        .cimsa-disclaimer-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255,185,48,.15);
          border: 1px solid rgba(255,185,48,.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .7rem;
        }
        .cimsa-disclaimer-head h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: .95rem;
          letter-spacing: .1em;
          color: var(--warn);
        }
        .cimsa-disclaimer p {
          font-size: .78rem;
          color: var(--text-dim);
          line-height: 1.7;
        }
        .cimsa-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .cimsa-footer {
          border-top: 1px solid var(--border);
          background: var(--bg2);
          padding: 1.8rem 2rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        .cimsa-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .cimsa-footer-brand {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: .1em;
          color: var(--accent);
        }
        .cimsa-footer-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem;
          color: var(--text-dim);
          text-align: right;
        }
        .cimsa-footer-legal {
          margin-top: 1rem;
          font-size: .72rem;
          color: var(--text-dim);
          line-height: 1.6;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .cimsa-hero { grid-template-columns: 1fr; }
          .cimsa-price-block { text-align: left; }
        }
        @media(max-width:768px) {
          .cimsa-two-col { grid-template-columns: 1fr; }
        }
        @media(max-width:600px) {
          .cimsa-hero { padding: 2rem 1rem 1.5rem; }
          .cimsa-main { padding: 1.5rem 1rem 3rem; }
          .cimsa-footer { padding: 1.2rem 1rem; }
          .cimsa-scenario-grid { grid-template-columns: 1fr; }
          .cimsa-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cimsa-wrap">
        {/* HERO */}
        <section className="cimsa-hero">
          <div>
            <div className="cimsa-hero-label">Teknik Analiz Raporu</div>
            <h1 className="cimsa-hero-title">
              ÇİMSA<br />
              <em>CIMSA</em>
            </h1>
            <p className="cimsa-hero-sub">&nbsp;·&nbsp; 05 Haziran 2026</p>
          </div>
          <div className="cimsa-price-block">
            <div className="cimsa-price-main">
              <span className="cimsa-price-currency">₺</span>49.52
            </div>
          </div>
        </section>

        {/* MAIN */}
        <main className="cimsa-main">
          {/* CHART */}
          <div className="cimsa-section-title">
            <span className="cimsa-section-num">01</span> Grafik
          </div>
          <div className="cimsa-chart-wrap">
            <div className="cimsa-chart-header">
              <span className="cimsa-chart-title-text">CIMSA — Günlük Mum Grafiği</span>
              <div className="cimsa-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`cimsa-pill ${["green", "yellow", "red", "purple", "blue"][i]}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="cimsa-chart-img-wrap">
              <img
                src="/cimsa-analiz.webp"
                alt="CIMSA Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="cimsa-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="cimsa-section-title">
            <span className="cimsa-section-num">02</span> Bollinger Bantları Analizi
          </div>
          <div className="cimsa-bol-card">
            <div className="cimsa-bol-visual">
              <div className="cimsa-bol-bands">
                <div className="cimsa-bol-fill" />
                <div className="cimsa-bol-upper" />
                <div className="cimsa-bol-mid" />
                <div className="cimsa-bol-lower" />
                <div className="cimsa-bol-marker" />
              </div>
              <div className="cimsa-bol-labels">
                <span>BOL U: 59.80</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 53.82</span>
                <span>BOL D: 47.84</span>
              </div>
            </div>

            {[
              { name: "Üst Band (BOL U)", val: "59.80 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "53.82 TL", sig: "Direnç", cls: "sell" },
              { name: "Alt Band (BOL D)", val: "47.84 TL", sig: "Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "11.96 TL", sig: "Artan Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "49.52 TL", sig: "Alt Bant Bölgesi", cls: "sell" },
            ].map((r, i) => (
              <div className="cimsa-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="cimsa-ind-name">{r.name}</span>
                <span className="cimsa-ind-val">{r.val}</span>
                <span className={`cimsa-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}

            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>53.82 TL</strong> seviyesinin altında ve alt banda yakın bölgede konumlanıyor. Bu yapı kısa vadede zayıf görünümü öne çıkarırken, <strong style={{ color: "var(--accent)" }}>47.84 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="cimsa-section-title">
            <span className="cimsa-section-num">03</span> İndikatörler
          </div>
          <div className="cimsa-two-col">
            {/* Stochastic */}
            <div className="cimsa-analysis-card">
              <div className="cimsa-analysis-card-head">
                <div className="cimsa-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="cimsa-analysis-card-body">
                <div className="cimsa-ind-row">
                  <span className="cimsa-ind-name">StocK</span>
                  <span className="cimsa-ind-val">39.91</span>
                  <span className="cimsa-ind-signal neutral">İzle</span>
                </div>
                <div className="cimsa-ind-row">
                  <span className="cimsa-ind-name">StocD</span>
                  <span className="cimsa-ind-val">40.28</span>
                  <span className="cimsa-ind-signal sell">Zayıf</span>
                </div>
                <div className="cimsa-ind-row" style={{ borderBottom: "none" }}>
                  <span className="cimsa-ind-name">Konum</span>
                  <span className="cimsa-ind-val">Nötr-Alt</span>
                  <span className="cimsa-ind-signal neutral">Teyit Bekle</span>
                </div>
                <div>
                  <div className="cimsa-progress-label">
                    <span>Aşırı Satım (0)</span>
                    <span>39.91</span>
                    <span>Aşırı Alım (100)</span>
                  </div>
                  <div className="cimsa-progress-bar">
                    <div className="cimsa-progress-fill" style={{ width: "39.91%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} />
                  </div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>
                  Stochastic alt bölgede yatay-zayıf görünüm veriyor. K çizgisinin D üzerine net çıkması toparlanma için ilk kısa vadeli sinyal olur.
                </p>
              </div>
            </div>

            {/* MACD */}
            <div className="cimsa-analysis-card">
              <div className="cimsa-analysis-card-head">
                <div className="cimsa-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="cimsa-analysis-card-body">
                <div className="cimsa-ind-row">
                  <span className="cimsa-ind-name">MACD</span>
                  <span className="cimsa-ind-val">-0.9002</span>
                  <span className="cimsa-ind-signal sell">Negatif</span>
                </div>
                <div className="cimsa-ind-row">
                  <span className="cimsa-ind-name">Trigger</span>
                  <span className="cimsa-ind-val">-0.4564</span>
                  <span className="cimsa-ind-signal sell">Sat</span>
                </div>
                <div className="cimsa-ind-row" style={{ borderBottom: "none" }}>
                  <span className="cimsa-ind-name">Histogram</span>
                  <span className="cimsa-ind-val">-0.4438</span>
                  <span className="cimsa-ind-signal sell">Baskı</span>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>
                  MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında satış baskısı sürüyor; toparlanma için MACD’nin trigger üzerine geçmesi gerekir.
                </p>
              </div>
            </div>

            {/* RSI */}
            <div className="cimsa-analysis-card">
              <div className="cimsa-analysis-card-head">
                <div className="cimsa-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="cimsa-analysis-card-body">
                <div className="cimsa-ind-row">
                  <span className="cimsa-ind-name">RSI Değeri</span>
                  <span className="cimsa-ind-val">38.81</span>
                  <span className="cimsa-ind-signal sell">Zayıf</span>
                </div>
                <div className="cimsa-ind-row" style={{ borderBottom: "none" }}>
                  <span className="cimsa-ind-name">Bölge</span>
                  <span className="cimsa-ind-val">Nötr-Alt</span>
                  <span className="cimsa-ind-signal neutral">İzle</span>
                </div>
                <div>
                  <div className="cimsa-progress-label">
                    <span>30 (A.Satım)</span>
                    <span>38.81</span>
                    <span>70 (A.Alım)</span>
                  </div>
                  <div className="cimsa-progress-bar">
                    <div className="cimsa-progress-fill" style={{ width: "38.81%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} />
                  </div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>
                  RSI 40 seviyesine yakın zayıf bölgede. 50 seviyesi üzerine çıkılmadıkça kısa vadeli momentum güçlenmiş sayılmaz.
                </p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="cimsa-analysis-card">
              <div className="cimsa-analysis-card-head">
                <div className="cimsa-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="cimsa-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="cimsa-ma-table">
                  <thead>
                    <tr>
                      <th>Periyot</th>
                      <th>Değer</th>
                      <th>Durum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["MAV 5", "51.14", "Altında ▼", "below"],
                      ["MAV 13", "52.22", "Altında ▼", "below"],
                      ["MAV 21", "52.85", "Altında ▼", "below"],
                      ["MAV 55", "52.56", "Altında ▼", "below"],
                      ["MAV 89", "51.57", "Altında ▼", "below"],
                      ["MAV 144", "50.30", "Altında ▼", "below"],
                      ["MAV 233", "48.78", "Üstünde ▲", "above"],
                    ].map(([p, v, d, cls]) => (
                      <tr key={p}>
                        <td>{p}</td>
                        <td>{v}</td>
                        <td className={cls === "above" ? "cimsa-above" : "cimsa-below"}>Fiyat {d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="cimsa-section-title">
            <span className="cimsa-section-num">04</span> Destek &amp; Direnç Seviyeleri
          </div>
          <div className="cimsa-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "50.30–51.14", desc: "MAV 144 ve MAV 5 bölgesi" },
              { type: "res", label: "Kısa Vadeli Direnç", price: "51.57–52.85", desc: "MAV 89 / 13 / 21 kümelenmesi" },
              { type: "res", label: "Ana Direnç", price: "53.82 TL", desc: "Bollinger orta bandı" },
              { type: "sup", label: "Anlık Destek", price: "49.50 TL", desc: "Güncel kapanış ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "47.84 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "45.00–46.00", desc: "Önceki yatay destek bölgesi" },
            ].map((s) => (
              <div className="cimsa-sr-cell" key={s.label}>
                <div className={`cimsa-sr-type ${s.type}`}>{s.label}</div>
                <div className="cimsa-sr-price">{s.price}</div>
                <div className="cimsa-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="cimsa-section-title">
            <span className="cimsa-section-num">05</span> Genel Değerlendirme
          </div>
          <div className="cimsa-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>
              CIMSA, son zirve bölgesinden gelen satışların ardından günü <strong>49.52 TL</strong> kapanışla tamamladı. Fiyat; MAV 5, MAV 13, MAV 21, MAV 55, MAV 89 ve MAV 144 ortalamalarının altında kalarak kısa vadede zayıf bir teknik görünüm oluşturdu.
            </p>
            <p>
              Bollinger Bantları açısından fiyat, <strong>53.82 TL orta bandın altında</strong> ve <strong>47.84 TL alt banda yakın</strong> konumlanıyor. Orta bandın altında kalındıkça tepki hareketleri sınırlı kalabilir.
            </p>
            <p>
              Stochastic <em>nötr-alt bölgede</em>, RSI ise <strong>38.81</strong> seviyesiyle zayıf bölgede bulunuyor. MACD’nin negatif bölgede ve trigger altında olması, momentum tarafında satış baskısının sürdüğünü gösteriyor.
            </p>
            <p>
              Kısa vadede <strong>49.50 TL</strong> üzerinde tutunma ve ardından <strong>51.14–52.85 TL</strong> direnç bandının geri alınması toparlanma açısından kritik olacaktır. Aksi durumda <strong>47.84 TL</strong> Bollinger alt bandı yeniden gündeme gelebilir.
            </p>
          </div>

          {/* SCENARIOS */}
          <div className="cimsa-section-title">
            <span className="cimsa-section-num">06</span> Senaryo Analizi
          </div>
          <div className="cimsa-scenario-grid">
            <div className="cimsa-scenario-card bull">
              <div className="cimsa-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>50.30 TL ve 51.14 TL seviyelerinin geri alınması</li>
                <li>51.57–52.85 TL hareketli ortalama bölgesi üzerinde kapanış</li>
                <li>53.82 TL Bollinger orta bandının aşılması</li>
                <li>RSI’ın 50 seviyesi üzerine taşınması</li>
                <li>Hedef: 55.00–59.80 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="cimsa-scenario-card bear">
              <div className="cimsa-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>49.50 TL altında günlük kapanış</li>
                <li>47.84 TL Bollinger alt bandına doğru geri çekilme</li>
                <li>MACD’nin negatif bölgede kalmayı sürdürmesi</li>
                <li>RSI’ın 40 altında zayıf seyretmesi</li>
                <li>Hedef: 47.84 TL ve 45.00–46.00 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="cimsa-disclaimer">
            <div className="cimsa-disclaimer-head">
              <div className="cimsa-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>
              Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong>
            </p>
            <p>
              Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.
            </p>
            <p>
              Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.
            </p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="cimsa-footer">
            <div className="cimsa-footer-inner">
              <div className="cimsa-footer-brand">HOCA İLE BORSA</div>
              <div className="cimsa-footer-meta">
                CIMSA Teknik Analiz Raporu
                <br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="cimsa-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
