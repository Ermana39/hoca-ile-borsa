import Head from "next/head";
import Link from "next/link";

export default function SasaGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>SASA Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Sasa Polyester (SASA) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/sasa" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .sasa-wrap *, .sasa-wrap *::before, .sasa-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sasa-wrap {
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

        .sasa-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .sasa-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .sasa-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .sasa-hero-title em { color: var(--accent); font-style: normal; }
        .sasa-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .sasa-price-block { text-align: right; }
        .sasa-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .sasa-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .sasa-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .sasa-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .sasa-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .sasa-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .sasa-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .sasa-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .sasa-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .sasa-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .sasa-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .sasa-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .sasa-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .sasa-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .sasa-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .sasa-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .sasa-chart-img-wrap { position: relative; padding: 1rem; }
        .sasa-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .sasa-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .sasa-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .sasa-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .sasa-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .sasa-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .sasa-icon.blue   { background: rgba(10,187,255,.12); }
        .sasa-icon.gold   { background: rgba(245,200,66,.12); }
        .sasa-icon.green  { background: rgba(0,208,104,.12); }
        .sasa-icon.red    { background: rgba(255,77,106,.12); }
        .sasa-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .sasa-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .sasa-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .sasa-ind-row:last-child { border-bottom: none; }
        .sasa-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .sasa-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .sasa-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .sasa-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .sasa-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .sasa-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .sasa-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .sasa-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .sasa-progress-fill { height: 100%; border-radius: 3px; }

        .sasa-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .sasa-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .sasa-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .sasa-ma-table tr:last-child td { border-bottom: none; }
        .sasa-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .sasa-above { color: var(--green); }
        .sasa-below { color: var(--red); }

        .sasa-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .sasa-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .sasa-bol-bands { flex: 1; position: relative; height: 48px; }
        .sasa-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sasa-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .sasa-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sasa-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .sasa-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (3.50 - 2.49) / (3.50 - 2.27));
        }
        .sasa-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .sasa-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .sasa-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .sasa-sr-cell:hover { background: var(--bg3); }
        .sasa-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .sasa-sr-type.res { color: var(--red); }
        .sasa-sr-type.sup { color: var(--green); }
        .sasa-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .sasa-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .sasa-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .sasa-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .sasa-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .sasa-narrative p:last-child { margin-bottom: 0; }
        .sasa-narrative strong { color: var(--accent); font-weight: 600; }
        .sasa-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .sasa-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .sasa-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .sasa-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .sasa-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .sasa-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .sasa-scenario-card.bull .sasa-scenario-head { color: var(--green); }
        .sasa-scenario-card.bear .sasa-scenario-head { color: var(--red); }
        .sasa-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .sasa-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .sasa-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .sasa-scenario-card.bull li::before { color: var(--green); }
        .sasa-scenario-card.bear li::before { color: var(--red); }

        .sasa-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .sasa-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .sasa-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .sasa-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .sasa-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .sasa-disclaimer p + p { margin-top: .4rem; }

        .sasa-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .sasa-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .sasa-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .sasa-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .sasa-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .sasa-hero { grid-template-columns: 1fr; }
          .sasa-price-block { text-align: left; }
        }
        @media(max-width:768px) { .sasa-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .sasa-hero   { padding: 2rem 1rem 1.5rem; }
          .sasa-main   { padding: 1.5rem 1rem 3rem; }
          .sasa-footer { padding: 1.2rem 1rem; }
          .sasa-scenario-grid { grid-template-columns: 1fr; }
          .sasa-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sasa-wrap">
        <section className="sasa-hero">
          <div>
            <div className="sasa-hero-label">Teknik Analiz Raporu</div>
            <h1 className="sasa-hero-title">SASA<br /><em>POLYESTER</em></h1>
            <p className="sasa-hero-sub">
              BIST: SASA &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="sasa-price-block">
            <div className="sasa-price-main"><span className="sasa-price-currency">₺</span>2.49</div>
          </div>
        </section>

        <main className="sasa-main">
          <div className="sasa-section-title"><span className="sasa-section-num">01</span> Grafik</div>
          <div className="sasa-chart-wrap">
            <div className="sasa-chart-header">
              <span className="sasa-chart-title-text">SASA — Günlük Mum Grafiği</span>
              <div className="sasa-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`sasa-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="sasa-chart-img-wrap">
              <img
                src="/sasa-analiz.webp"
                alt="SASA Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="sasa-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="sasa-section-title"><span className="sasa-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="sasa-bol-card">
            <div className="sasa-bol-visual">
              <div className="sasa-bol-bands">
                <div className="sasa-bol-fill" />
                <div className="sasa-bol-upper" />
                <div className="sasa-bol-mid" />
                <div className="sasa-bol-lower" />
                <div className="sasa-bol-marker" />
              </div>
              <div className="sasa-bol-labels">
                <span>BOL U: 3.50</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 2.88</span>
                <span>BOL D: 2.27</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "3.50 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "2.88 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "2.27 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.23 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "2.49 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="sasa-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="sasa-ind-name">{r.name}</span>
                <span className="sasa-ind-val">{r.val}</span>
                <span className={`sasa-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>2.88 TL</strong> seviyesinin altında ve alt banda yakın bölgede kapanış yapmış durumda. Bu görünüm kısa vadede satış baskısının sürdüğünü gösterirken, <strong style={{ color: "var(--accent)" }}>2.27 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="sasa-section-title"><span className="sasa-section-num">03</span> İndikatörler</div>
          <div className="sasa-two-col">
            <div className="sasa-analysis-card">
              <div className="sasa-analysis-card-head">
                <div className="sasa-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="sasa-analysis-card-body">
                <div className="sasa-ind-row"><span className="sasa-ind-name">StocK</span><span className="sasa-ind-val">9.89</span><span className="sasa-ind-signal neutral">Nötr</span></div>
                <div className="sasa-ind-row"><span className="sasa-ind-name">StocD</span><span className="sasa-ind-val">13.04</span><span className="sasa-ind-signal buy">Tepki</span></div>
                <div className="sasa-ind-row" style={{ borderBottom: "none" }}><span className="sasa-ind-name">Konum</span><span className="sasa-ind-val">Aşırı Satım</span><span className="sasa-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sasa-progress-label"><span>Aşırı Satım (0)</span><span>9.89</span><span>Aşırı Alım (100)</span></div>
                  <div className="sasa-progress-bar"><div className="sasa-progress-fill" style={{ width: "9.89%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı satım bölgesinde ve K çizgisi D çizgisinin altında. Tepki potansiyeli oluşabilir ancak mevcut görünüm hâlâ zayıf.</p>
              </div>
            </div>

            <div className="sasa-analysis-card">
              <div className="sasa-analysis-card-head">
                <div className="sasa-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="sasa-analysis-card-body">
                <div className="sasa-ind-row"><span className="sasa-ind-name">MACD</span><span className="sasa-ind-val">-0.0929</span><span className="sasa-ind-signal sell">Negatif</span></div>
                <div className="sasa-ind-row"><span className="sasa-ind-name">Trigger</span><span className="sasa-ind-val">-0.0425</span><span className="sasa-ind-signal sell">Baskı</span></div>
                <div className="sasa-ind-row" style={{ borderBottom: "none" }}><span className="sasa-ind-name">Momentum</span><span className="sasa-ind-val">Zayıf</span><span className="sasa-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında belirgin zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="sasa-analysis-card">
              <div className="sasa-analysis-card-head">
                <div className="sasa-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="sasa-analysis-card-body">
                <div className="sasa-ind-row"><span className="sasa-ind-name">RSI Değeri</span><span className="sasa-ind-val">39.22</span><span className="sasa-ind-signal neutral">Zayıf</span></div>
                <div className="sasa-ind-row" style={{ borderBottom: "none" }}><span className="sasa-ind-name">Bölge</span><span className="sasa-ind-val">Nötr-Alt</span><span className="sasa-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sasa-progress-label"><span>30 (A.Satım)</span><span>39.22</span><span>70 (A.Alım)</span></div>
                  <div className="sasa-progress-bar"><div className="sasa-progress-fill" style={{ width: "39.22%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 40 seviyesinin altında ve zayıf bölgede. 40 üzerine toparlanma gelmeden güçlenme sinyali sınırlı kalır.</p>
              </div>
            </div>

            <div className="sasa-analysis-card">
              <div className="sasa-analysis-card-head">
                <div className="sasa-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="sasa-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="sasa-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","2.60","Fiyat Altında ▼"],
                      ["MAV 13","2.72","Fiyat Altında ▼"],
                      ["MAV 21","2.78","Fiyat Altında ▼"],
                      ["MAV 55","2.77","Fiyat Altında ▼"],
                      ["MAV 89","2.76","Fiyat Altında ▼"],
                      ["MAV 144","2.83","Fiyat Altında ▼"],
                      ["MAV 233","3.01","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "sasa-above" : "sasa-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sasa-section-title"><span className="sasa-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="sasa-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "2.60–2.72", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "2.76–2.88", desc: "MAV 89, MAV 55/21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "3.01–3.50", desc: "MAV 233 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "2.49 TL", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "2.27 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "2.10–2.20", desc: "Grafikte önceki tepki alanı" },
            ].map((s) => (
              <div className="sasa-sr-cell" key={s.label}>
                <div className={`sasa-sr-type ${s.type}`}>{s.label}</div>
                <div className="sasa-sr-price">{s.price}</div>
                <div className="sasa-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="sasa-section-title"><span className="sasa-section-num">05</span> Genel Değerlendirme</div>
          <div className="sasa-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>SASA, son kapanışını <strong>2.49 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>2.88 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 2.60–2.88 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>2.49 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>3.01–2.27 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="sasa-section-title"><span className="sasa-section-num">06</span> Senaryo Analizi</div>
          <div className="sasa-scenario-grid">
            <div className="sasa-scenario-card bull">
              <div className="sasa-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>2.60 TL MAV 5 üzerinde kapanış</li>
                <li>2.72 TL MAV 13 seviyesinin geri alınması</li>
                <li>2.88 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 2.88–3.01 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="sasa-scenario-card bear">
              <div className="sasa-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>2.49 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altında kalması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>2.27 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 2.27 TL destek testi</li>
              </ul>
            </div>
          </div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="sasa-disclaimer">
            <div className="sasa-disclaimer-head">
              <div className="sasa-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="sasa-footer">
            <div className="sasa-footer-inner">
              <div className="sasa-footer-brand">HOCA İLE BORSA</div>
              <div className="sasa-footer-meta">
                SASA Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="sasa-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
