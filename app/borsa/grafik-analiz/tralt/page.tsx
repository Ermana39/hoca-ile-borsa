import Head from "next/head";
import Link from "next/link";

export default function TraltGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>TRALT Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="TRALT günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/tralt" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .tralt-wrap *, .tralt-wrap *::before, .tralt-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tralt-wrap {
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

        .tralt-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .tralt-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .tralt-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .tralt-hero-title em { color: var(--accent); font-style: normal; }
        .tralt-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .tralt-price-block { text-align: right; }
        .tralt-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .tralt-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .tralt-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .tralt-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .tralt-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .tralt-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .tralt-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .tralt-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .tralt-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .tralt-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .tralt-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .tralt-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .tralt-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .tralt-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .tralt-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .tralt-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .tralt-chart-img-wrap { position: relative; padding: 1rem; }
        .tralt-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .tralt-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .tralt-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .tralt-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .tralt-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .tralt-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .tralt-icon.blue   { background: rgba(10,187,255,.12); }
        .tralt-icon.gold   { background: rgba(245,200,66,.12); }
        .tralt-icon.green  { background: rgba(0,208,104,.12); }
        .tralt-icon.red    { background: rgba(255,77,106,.12); }
        .tralt-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .tralt-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .tralt-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .tralt-ind-row:last-child { border-bottom: none; }
        .tralt-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .tralt-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .tralt-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .tralt-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .tralt-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .tralt-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .tralt-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .tralt-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .tralt-progress-fill { height: 100%; border-radius: 3px; }

        .tralt-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .tralt-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .tralt-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .tralt-ma-table tr:last-child td { border-bottom: none; }
        .tralt-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .tralt-above { color: var(--green); }
        .tralt-below { color: var(--red); }

        .tralt-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .tralt-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .tralt-bol-bands { flex: 1; position: relative; height: 48px; }
        .tralt-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tralt-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .tralt-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tralt-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .tralt-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (49.13 - 45.14) / (49.13 - 40.65));
        }
        .tralt-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .tralt-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .tralt-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .tralt-sr-cell:hover { background: var(--bg3); }
        .tralt-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .tralt-sr-type.res { color: var(--red); }
        .tralt-sr-type.sup { color: var(--green); }
        .tralt-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .tralt-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .tralt-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .tralt-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .tralt-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .tralt-narrative p:last-child { margin-bottom: 0; }
        .tralt-narrative strong { color: var(--accent); font-weight: 600; }
        .tralt-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .tralt-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .tralt-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .tralt-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .tralt-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .tralt-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .tralt-scenario-card.bull .tralt-scenario-head { color: var(--green); }
        .tralt-scenario-card.bear .tralt-scenario-head { color: var(--red); }
        .tralt-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .tralt-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .tralt-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .tralt-scenario-card.bull li::before { color: var(--green); }
        .tralt-scenario-card.bear li::before { color: var(--red); }

        .tralt-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .tralt-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .tralt-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .tralt-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .tralt-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .tralt-disclaimer p + p { margin-top: .4rem; }

        .tralt-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .tralt-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .tralt-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .tralt-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .tralt-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .tralt-hero { grid-template-columns: 1fr; }
          .tralt-price-block { text-align: left; }
        }
        @media(max-width:768px) { .tralt-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .tralt-hero   { padding: 2rem 1rem 1.5rem; }
          .tralt-main   { padding: 1.5rem 1rem 3rem; }
          .tralt-footer { padding: 1.2rem 1rem; }
          .tralt-scenario-grid { grid-template-columns: 1fr; }
          .tralt-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tralt-wrap">
        <section className="tralt-hero">
          <div>
            <div className="tralt-hero-label">Teknik Analiz Raporu</div>
            <h1 className="tralt-hero-title">TRALT<br /><em>TEKNİK ANALİZ</em></h1>
            <p className="tralt-hero-sub">
              BIST: TRALT &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="tralt-price-block">
            <div className="tralt-price-main"><span className="tralt-price-currency">₺</span>45.14</div>
          </div>
        </section>

        <main className="tralt-main">
          <div className="tralt-section-title"><span className="tralt-section-num">01</span> Grafik</div>
          <div className="tralt-chart-wrap">
            <div className="tralt-chart-header">
              <span className="tralt-chart-title-text">TRALT — Günlük Mum Grafiği</span>
              <div className="tralt-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`tralt-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="tralt-chart-img-wrap">
              <img
                src="/tralt-analiz.webp"
                alt="TRALT Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="tralt-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="tralt-section-title"><span className="tralt-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="tralt-bol-card">
            <div className="tralt-bol-visual">
              <div className="tralt-bol-bands">
                <div className="tralt-bol-fill" />
                <div className="tralt-bol-upper" />
                <div className="tralt-bol-mid" />
                <div className="tralt-bol-lower" />
                <div className="tralt-bol-marker" />
              </div>
              <div className="tralt-bol-labels">
                <span>BOL U: 49.13</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 44.89</span>
                <span>BOL D: 40.65</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "49.13 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "44.89 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "40.65 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "8.48 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "45.14 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="tralt-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="tralt-ind-name">{r.name}</span>
                <span className="tralt-ind-val">{r.val}</span>
                <span className={`tralt-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>44.89 TL</strong> seviyesinin hemen üzerinde kapanış yapmış durumda. Orta band üzerinde kalıcılık kısa vadede tepki ihtimalini desteklerken, aşağıda <strong style={{ color: "var(--accent)" }}>40.65 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="tralt-section-title"><span className="tralt-section-num">03</span> İndikatörler</div>
          <div className="tralt-two-col">
            <div className="tralt-analysis-card">
              <div className="tralt-analysis-card-head">
                <div className="tralt-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="tralt-analysis-card-body">
                <div className="tralt-ind-row"><span className="tralt-ind-name">StocK</span><span className="tralt-ind-val">73.15</span><span className="tralt-ind-signal neutral">Nötr</span></div>
                <div className="tralt-ind-row"><span className="tralt-ind-name">StocD</span><span className="tralt-ind-val">74.51</span><span className="tralt-ind-signal buy">Tepki</span></div>
                <div className="tralt-ind-row" style={{ borderBottom: "none" }}><span className="tralt-ind-name">Konum</span><span className="tralt-ind-val">Nötr-Yüksek</span><span className="tralt-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tralt-progress-label"><span>Aşırı Satım (0)</span><span>73.15</span><span>Aşırı Alım (100)</span></div>
                  <div className="tralt-progress-bar"><div className="tralt-progress-fill" style={{ width: "73.15%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-yüksek bölgede ancak K çizgisi D çizgisinin hafif altında. Bu yapı kısa vadede tepki isteğinin zayıflamaya başladığını gösteriyor.</p>
              </div>
            </div>

            <div className="tralt-analysis-card">
              <div className="tralt-analysis-card-head">
                <div className="tralt-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="tralt-analysis-card-body">
                <div className="tralt-ind-row"><span className="tralt-ind-name">MACD</span><span className="tralt-ind-val">0.1919</span><span className="tralt-ind-signal sell">Negatif</span></div>
                <div className="tralt-ind-row"><span className="tralt-ind-name">Trigger</span><span className="tralt-ind-val">-0.0882</span><span className="tralt-ind-signal sell">Baskı</span></div>
                <div className="tralt-ind-row" style={{ borderBottom: "none" }}><span className="tralt-ind-name">Momentum</span><span className="tralt-ind-val">Zayıf</span><span className="tralt-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Momentum tarafında sınırlı pozitif görünüm var; ancak fiyatın kısa vadeli ortalamaların altında kalması teyidi zayıflatıyor.</p>
              </div>
            </div>

            <div className="tralt-analysis-card">
              <div className="tralt-analysis-card-head">
                <div className="tralt-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="tralt-analysis-card-body">
                <div className="tralt-ind-row"><span className="tralt-ind-name">RSI Değeri</span><span className="tralt-ind-val">49.91</span><span className="tralt-ind-signal neutral">Zayıf</span></div>
                <div className="tralt-ind-row" style={{ borderBottom: "none" }}><span className="tralt-ind-name">Bölge</span><span className="tralt-ind-val">Nötr-Alt</span><span className="tralt-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tralt-progress-label"><span>30 (A.Satım)</span><span>49.91</span><span>70 (A.Alım)</span></div>
                  <div className="tralt-progress-bar"><div className="tralt-progress-fill" style={{ width: "49.91%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesine çok yakın ancak hafif altında. 50 üzerine dönüş kısa vadeli toparlanmanın güçlenmesi açısından önemlidir.</p>
              </div>
            </div>

            <div className="tralt-analysis-card">
              <div className="tralt-analysis-card-head">
                <div className="tralt-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="tralt-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="tralt-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","45.90","Fiyat Altında ▼"],
                      ["MAV 13","45.32","Fiyat Altında ▼"],
                      ["MAV 21","45.15","Fiyat Altında ▼"],
                      ["MAV 55","45.69","Fiyat Altında ▼"],
                      ["MAV 89","45.33","Fiyat Altında ▼"],
                      ["MAV 144","43.25","Fiyat Üstünde ▲"],
                      ["MAV 233","39.68","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "tralt-above" : "tralt-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tralt-section-title"><span className="tralt-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="tralt-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "45.15–45.32", desc: "MAV 21 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "45.69–45.90", desc: "MAV 55 ve MAV 5 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "49.13 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "44.89–44.80", desc: "Bollinger orta bandı ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "43.25 TL", desc: "MAV 144 destek bölgesi" },
              { type: "sup", label: "Derin Destek", price: "40.65–39.68", desc: "Bollinger alt bandı ve MAV 233 destek bölgesi" },
            ].map((s) => (
              <div className="tralt-sr-cell" key={s.label}>
                <div className={`tralt-sr-type ${s.type}`}>{s.label}</div>
                <div className="tralt-sr-price">{s.price}</div>
                <div className="tralt-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="tralt-section-title"><span className="tralt-section-num">05</span> Genel Değerlendirme</div>
          <div className="tralt-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TRALT, son kapanışını <strong>45.14 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>44.89 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 45.90–44.89 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>39.68–40.65 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="tralt-section-title"><span className="tralt-section-num">06</span> Senaryo Analizi</div>
          <div className="tralt-scenario-grid">
            <div className="tralt-scenario-card bull">
              <div className="tralt-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>45.15 TL MAV 21 üzerinde kapanış</li>
                <li>45.69 TL MAV 55 seviyesinin geri alınması</li>
                <li>45.90 TL MAV 5 üzerinde kalıcılık</li>
                <li>RSI’ın 50 üzerine geçmesi</li>
                <li>Hedef: 45.90–49.13 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="tralt-scenario-card bear">
              <div className="tralt-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>43.25 TL MAV 144 desteğine geri çekilme</li>
                <li>Hedef: 43.25–40.65 TL destek bölgesi</li>
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


          <div className="tralt-disclaimer">
            <div className="tralt-disclaimer-head">
              <div className="tralt-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="tralt-footer">
            <div className="tralt-footer-inner">
              <div className="tralt-footer-brand">HOCA İLE BORSA</div>
              <div className="tralt-footer-meta">
                TRALT Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="tralt-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
