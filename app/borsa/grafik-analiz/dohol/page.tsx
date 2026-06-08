import Head from "next/head";
import Link from "next/link";

export default function DoholGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>DOHOL Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Doğan Holding (DOHOL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hocaileborsa.com/borsa/grafik-analiz/dohol"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .dohol-wrap *, .dohol-wrap *::before, .dohol-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .dohol-wrap {
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
        .dohol-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .dohol-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .dohol-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .dohol-hero-title em { color: var(--accent); font-style: normal; }
        .dohol-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .dohol-price-block { text-align: right; }
        .dohol-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .dohol-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .dohol-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .dohol-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .dohol-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .dohol-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .dohol-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .dohol-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .dohol-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .dohol-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .dohol-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .dohol-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .dohol-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .dohol-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .dohol-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .dohol-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .dohol-chart-img-wrap { position: relative; padding: 1rem; }
        .dohol-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .dohol-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .dohol-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .dohol-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .dohol-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .dohol-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .dohol-icon.blue   { background: rgba(10,187,255,.12); }
        .dohol-icon.gold   { background: rgba(245,200,66,.12); }
        .dohol-icon.green  { background: rgba(0,208,104,.12); }
        .dohol-icon.red    { background: rgba(255,77,106,.12); }
        .dohol-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .dohol-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .dohol-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .dohol-ind-row:last-child { border-bottom: none; }
        .dohol-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .dohol-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .dohol-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .dohol-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .dohol-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .dohol-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .dohol-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .dohol-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .dohol-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .dohol-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .dohol-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .dohol-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .dohol-ma-table tr:last-child td { border-bottom: none; }
        .dohol-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .dohol-above { color: var(--green); }
        .dohol-below { color: var(--red); }

        /* BOLLINGER */
        .dohol-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .dohol-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .dohol-bol-bands { flex: 1; position: relative; height: 48px; }
        .dohol-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .dohol-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .dohol-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .dohol-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .dohol-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (25.21 - 21.58) / (25.21 - 21.57));
        }
        .dohol-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .dohol-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .dohol-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .dohol-sr-cell:hover { background: var(--bg3); }
        .dohol-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .dohol-sr-type.res { color: var(--red); }
        .dohol-sr-type.sup { color: var(--green); }
        .dohol-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .dohol-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .dohol-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .dohol-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .dohol-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .dohol-narrative p:last-child { margin-bottom: 0; }
        .dohol-narrative strong { color: var(--accent); font-weight: 600; }
        .dohol-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .dohol-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .dohol-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .dohol-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .dohol-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .dohol-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .dohol-scenario-card.bull .dohol-scenario-head { color: var(--green); }
        .dohol-scenario-card.bear .dohol-scenario-head { color: var(--red); }
        .dohol-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .dohol-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .dohol-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .dohol-scenario-card.bull li::before { color: var(--green); }
        .dohol-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .dohol-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .dohol-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .dohol-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .dohol-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .dohol-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .dohol-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .dohol-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .dohol-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .dohol-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .dohol-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .dohol-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .dohol-hero { grid-template-columns: 1fr; }
          .dohol-price-block { text-align: left; }
        }
        @media(max-width:768px) { .dohol-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .dohol-hero   { padding: 2rem 1rem 1.5rem; }
          .dohol-main   { padding: 1.5rem 1rem 3rem; }
          .dohol-footer { padding: 1.2rem 1rem; }
          .dohol-scenario-grid { grid-template-columns: 1fr; }
          .dohol-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="dohol-wrap">
        {/* HERO */}
        <section className="dohol-hero">
          <div>
            <div className="dohol-hero-label">Teknik Analiz Raporu</div>
            <h1 className="dohol-hero-title">DOĞAN<br /><em>HOLDİNG</em></h1>
            <p className="dohol-hero-sub">BIST: DOHOL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026</p>
          </div>
          <div className="dohol-price-block">
            <div className="dohol-price-main"><span className="dohol-price-currency">₺</span>21.58</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="dohol-main">
          {/* CHART */}
          <div className="dohol-section-title"><span className="dohol-section-num">01</span> Grafik</div>
          <div className="dohol-chart-wrap">
            <div className="dohol-chart-header">
              <span className="dohol-chart-title-text">DOHOL — Günlük Mum Grafiği</span>
              <div className="dohol-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`dohol-pill ${["green", "yellow", "red", "purple", "blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="dohol-chart-img-wrap">
              <img
                src="/dohol-analiz.webp"
                alt="DOHOL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="dohol-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="dohol-section-title"><span className="dohol-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="dohol-bol-card">
            <div className="dohol-bol-visual">
              <div className="dohol-bol-bands">
                <div className="dohol-bol-fill" />
                <div className="dohol-bol-upper" />
                <div className="dohol-bol-mid" />
                <div className="dohol-bol-lower" />
                <div className="dohol-bol-marker" />
              </div>
              <div className="dohol-bol-labels">
                <span>BOL U: 25.21</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 23.39</span>
                <span>BOL D: 21.57</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "25.21 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "23.39 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "21.57 TL", sig: "Kritik Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "3.64 TL", sig: "Orta Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "21.58 TL", sig: "Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="dohol-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="dohol-ind-name">{r.name}</span>
                <span className="dohol-ind-val">{r.val}</span>
                <span className={`dohol-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger alt bandı olan <strong style={{ color: "var(--accent)" }}>21.57 TL</strong> seviyesine kadar gerilemiş durumda. Bu bölge kısa vadede kritik destek olarak takip edilir. Alt bandın altında kapanış gelmesi satış baskısını artırabilir; yukarı yönlü rahatlama için ise önce orta band olan <strong style={{ color: "var(--accent)" }}>23.39 TL</strong> üzerine dönüş izlenmelidir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="dohol-section-title"><span className="dohol-section-num">03</span> İndikatörler</div>
          <div className="dohol-two-col">
            {/* Stochastic */}
            <div className="dohol-analysis-card">
              <div className="dohol-analysis-card-head">
                <div className="dohol-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="dohol-analysis-card-body">
                <div className="dohol-ind-row"><span className="dohol-ind-name">StocK</span><span className="dohol-ind-val">17.92</span><span className="dohol-ind-signal sell">Zayıf</span></div>
                <div className="dohol-ind-row"><span className="dohol-ind-name">StocD</span><span className="dohol-ind-val">23.27</span><span className="dohol-ind-signal sell">Sat</span></div>
                <div className="dohol-ind-row" style={{ borderBottom: "none" }}><span className="dohol-ind-name">Konum</span><span className="dohol-ind-val">Aşırı Satıma Yakın</span><span className="dohol-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="dohol-progress-label"><span>Aşırı Satım (0)</span><span>17.92</span><span>Aşırı Alım (100)</span></div>
                  <div className="dohol-progress-bar"><div className="dohol-progress-fill" style={{ width: "17.92%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D çizgisinin altında ve aşırı satım bölgesine yakın. Kısa vadede tepki potansiyeli oluşsa da henüz net dönüş teyidi yok.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="dohol-analysis-card">
              <div className="dohol-analysis-card-head">
                <div className="dohol-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="dohol-analysis-card-body">
                <div className="dohol-ind-row"><span className="dohol-ind-name">MACD</span><span className="dohol-ind-val">0.0501</span><span className="dohol-ind-signal neutral">Zayıf</span></div>
                <div className="dohol-ind-row"><span className="dohol-ind-name">Trigger</span><span className="dohol-ind-val">0.2844</span><span className="dohol-ind-signal sell">Altında</span></div>
                <div className="dohol-ind-row" style={{ borderBottom: "none" }}><span className="dohol-ind-name">Histogram</span><span className="dohol-ind-val">-0.2343</span><span className="dohol-ind-signal sell">Negatif</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede kalmasına rağmen trigger çizgisinin altında. Bu durum momentumun zayıfladığını ve kısa vadeli baskının sürdüğünü gösteriyor.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="dohol-analysis-card">
              <div className="dohol-analysis-card-head">
                <div className="dohol-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="dohol-analysis-card-body">
                <div className="dohol-ind-row"><span className="dohol-ind-name">RSI Değeri</span><span className="dohol-ind-val">43.61</span><span className="dohol-ind-signal neutral">Zayıf-Nötr</span></div>
                <div className="dohol-ind-row" style={{ borderBottom: "none" }}><span className="dohol-ind-name">Bölge</span><span className="dohol-ind-val">50 Altı</span><span className="dohol-ind-signal sell">Baskı</span></div>
                <div>
                  <div className="dohol-progress-label"><span>30 (A.Satım)</span><span>43.61</span><span>70 (A.Alım)</span></div>
                  <div className="dohol-progress-bar"><div className="dohol-progress-fill" style={{ width: "43.61%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında bulunuyor. 50 üzerine dönüş gelmeden momentum tarafında güçlü toparlanma teyidi oluşmaz.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="dohol-analysis-card">
              <div className="dohol-analysis-card-head">
                <div className="dohol-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="dohol-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="dohol-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5", "22.49", "Altında ▼"],
                      ["MAV 13", "22.85", "Altında ▼"],
                      ["MAV 21", "22.85", "Altında ▼"],
                      ["MAV 55", "22.17", "Altında ▼"],
                      ["MAV 89", "21.49", "Üstünde ▲"],
                      ["MAV 144", "20.56", "Üstünde ▲"],
                      ["MAV 233", "19.41", "Üstünde ▲"],
                    ].map(([p, v, d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={String(d).includes("Üstünde") ? "dohol-above" : "dohol-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="dohol-section-title"><span className="dohol-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="dohol-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "22.17–22.49", desc: "MAV 55 ve MAV 5 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "22.85–23.39", desc: "MAV 13/21 ve Bollinger orta bandı" },
              { type: "res", label: "Ana Direnç", price: "25.21 TL", desc: "Bollinger üst bandı ve son yükseliş bölgesi" },
              { type: "sup", label: "Kritik Destek", price: "21.57–21.58", desc: "Bollinger alt bandı ve güncel kapanış" },
              { type: "sup", label: "Ara Destek", price: "21.49 TL", desc: "MAV 89 seviyesi" },
              { type: "sup", label: "Ana Destek", price: "20.56–19.41", desc: "MAV 144 ve MAV 233 bölgesi" },
            ].map((s) => (
              <div className="dohol-sr-cell" key={s.label}>
                <div className={`dohol-sr-type ${s.type}`}>{s.label}</div>
                <div className="dohol-sr-price">{s.price}</div>
                <div className="dohol-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="dohol-section-title"><span className="dohol-section-num">05</span> Genel Değerlendirme</div>
          <div className="dohol-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>DOHOL, son yükseliş hareketinde 25 TL üzerini test ettikten sonra gelen satışlarla <strong>21.58 TL</strong> seviyesine kadar geri çekildi. Güncel kapanış, kısa vadeli hareketli ortalamaların tamamının altında gerçekleşti.</p>
            <p>Fiyatın <strong>Bollinger alt bandı olan 21.57 TL</strong> seviyesine kadar inmesi, kısa vadede kritik bir destek bölgesinde olunduğunu gösteriyor. Bu seviyenin korunması tepki denemesi için önemli; altında kapanışlar satış baskısını artırabilir.</p>
            <p>RSI <em>43.61</em> ile 50 seviyesinin altında, MACD ise trigger çizgisinin altında yer alıyor. Stochastic göstergesi aşırı satıma yakın bölgede olsa da henüz net dönüş sinyali üretmiş değil.</p>
            <p>Teknik görünümün rahatlaması için önce 22.17–22.85 TL bandının, daha güçlü bir toparlanma için ise <strong>23.39 TL Bollinger orta bandının</strong> geri alınması gerekir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="dohol-section-title"><span className="dohol-section-num">06</span> Senaryo Analizi</div>
          <div className="dohol-scenario-grid">
            <div className="dohol-scenario-card bull">
              <div className="dohol-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>21.57 TL Bollinger alt bandı üzerinde tutunma</li>
                <li>22.17–22.85 TL hareketli ortalama bandının geri alınması</li>
                <li>23.39 TL Bollinger orta bandı üzerinde kapanış</li>
                <li>RSI&apos;ın yeniden 50 üzerine çıkması</li>
                <li>Hedef: 25.21 TL Bollinger üst bandı</li>
              </ul>
            </div>
            <div className="dohol-scenario-card bear">
              <div className="dohol-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>21.57 TL Bollinger alt bandı altında kapanış</li>
                <li>21.49 TL MAV 89 desteğinin kırılması</li>
                <li>MACD&apos;nin trigger altında kalmaya devam etmesi</li>
                <li>RSI&apos;ın 40 altına sarkması</li>
                <li>Hedef: 20.56–19.41 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>

          <div className="dohol-disclaimer">
            <div className="dohol-disclaimer-head">
              <div className="dohol-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="dohol-footer">
            <div className="dohol-footer-inner">
              <div className="dohol-footer-brand">HOCA İLE BORSA</div>
              <div className="dohol-footer-meta">
                DOHOL Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="dohol-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
