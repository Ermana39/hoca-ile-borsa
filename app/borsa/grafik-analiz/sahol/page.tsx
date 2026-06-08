import Head from "next/head";
import Link from "next/link";

export default function SaholGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>SAHOL Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Sabancı Holding (SAHOL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/sahol" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .sahol-wrap *, .sahol-wrap *::before, .sahol-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sahol-wrap {
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

        .sahol-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .sahol-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .sahol-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .sahol-hero-title em { color: var(--accent); font-style: normal; }
        .sahol-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .sahol-price-block { text-align: right; }
        .sahol-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .sahol-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .sahol-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .sahol-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .sahol-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .sahol-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .sahol-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .sahol-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .sahol-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .sahol-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .sahol-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .sahol-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .sahol-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .sahol-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .sahol-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .sahol-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .sahol-chart-img-wrap { position: relative; padding: 1rem; }
        .sahol-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .sahol-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .sahol-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .sahol-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .sahol-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .sahol-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .sahol-icon.blue   { background: rgba(10,187,255,.12); }
        .sahol-icon.gold   { background: rgba(245,200,66,.12); }
        .sahol-icon.green  { background: rgba(0,208,104,.12); }
        .sahol-icon.red    { background: rgba(255,77,106,.12); }
        .sahol-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .sahol-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .sahol-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .sahol-ind-row:last-child { border-bottom: none; }
        .sahol-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .sahol-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .sahol-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .sahol-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .sahol-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .sahol-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .sahol-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .sahol-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .sahol-progress-fill { height: 100%; border-radius: 3px; }

        .sahol-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .sahol-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .sahol-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .sahol-ma-table tr:last-child td { border-bottom: none; }
        .sahol-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .sahol-above { color: var(--green); }
        .sahol-below { color: var(--red); }

        .sahol-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .sahol-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .sahol-bol-bands { flex: 1; position: relative; height: 48px; }
        .sahol-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sahol-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .sahol-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sahol-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .sahol-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (101.42 - 90.00) / (101.42 - 85.92));
        }
        .sahol-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .sahol-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .sahol-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .sahol-sr-cell:hover { background: var(--bg3); }
        .sahol-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .sahol-sr-type.res { color: var(--red); }
        .sahol-sr-type.sup { color: var(--green); }
        .sahol-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .sahol-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .sahol-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .sahol-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .sahol-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .sahol-narrative p:last-child { margin-bottom: 0; }
        .sahol-narrative strong { color: var(--accent); font-weight: 600; }
        .sahol-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .sahol-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .sahol-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .sahol-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .sahol-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .sahol-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .sahol-scenario-card.bull .sahol-scenario-head { color: var(--green); }
        .sahol-scenario-card.bear .sahol-scenario-head { color: var(--red); }
        .sahol-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .sahol-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .sahol-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .sahol-scenario-card.bull li::before { color: var(--green); }
        .sahol-scenario-card.bear li::before { color: var(--red); }

        .sahol-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .sahol-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .sahol-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .sahol-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .sahol-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .sahol-disclaimer p + p { margin-top: .4rem; }

        .sahol-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .sahol-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .sahol-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .sahol-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .sahol-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .sahol-hero { grid-template-columns: 1fr; }
          .sahol-price-block { text-align: left; }
        }
        @media(max-width:768px) { .sahol-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .sahol-hero   { padding: 2rem 1rem 1.5rem; }
          .sahol-main   { padding: 1.5rem 1rem 3rem; }
          .sahol-footer { padding: 1.2rem 1rem; }
          .sahol-scenario-grid { grid-template-columns: 1fr; }
          .sahol-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sahol-wrap">
        <section className="sahol-hero">
          <div>
            <div className="sahol-hero-label">Teknik Analiz Raporu</div>
            <h1 className="sahol-hero-title">SABANCI<br /><em>HOLDİNG</em></h1>
            <p className="sahol-hero-sub">
              BIST: SAHOL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="sahol-price-block">
            <div className="sahol-price-main"><span className="sahol-price-currency">₺</span>90.00</div>
          </div>
        </section>

        <main className="sahol-main">
          <div className="sahol-section-title"><span className="sahol-section-num">01</span> Grafik</div>
          <div className="sahol-chart-wrap">
            <div className="sahol-chart-header">
              <span className="sahol-chart-title-text">SAHOL — Günlük Mum Grafiği</span>
              <div className="sahol-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`sahol-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="sahol-chart-img-wrap">
              <img
                src="/sahol-analiz.webp"
                alt="SAHOL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="sahol-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="sahol-section-title"><span className="sahol-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="sahol-bol-card">
            <div className="sahol-bol-visual">
              <div className="sahol-bol-bands">
                <div className="sahol-bol-fill" />
                <div className="sahol-bol-upper" />
                <div className="sahol-bol-mid" />
                <div className="sahol-bol-lower" />
                <div className="sahol-bol-marker" />
              </div>
              <div className="sahol-bol-labels">
                <span>BOL U: 101.42</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 93.67</span>
                <span>BOL D: 85.92</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "101.42 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "93.67 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "85.92 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "15.50 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "90.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="sahol-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="sahol-ind-name">{r.name}</span>
                <span className="sahol-ind-val">{r.val}</span>
                <span className={`sahol-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>93.67 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>85.92 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="sahol-section-title"><span className="sahol-section-num">03</span> İndikatörler</div>
          <div className="sahol-two-col">
            <div className="sahol-analysis-card">
              <div className="sahol-analysis-card-head">
                <div className="sahol-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="sahol-analysis-card-body">
                <div className="sahol-ind-row"><span className="sahol-ind-name">StocK</span><span className="sahol-ind-val">69.09</span><span className="sahol-ind-signal neutral">Nötr</span></div>
                <div className="sahol-ind-row"><span className="sahol-ind-name">StocD</span><span className="sahol-ind-val">63.40</span><span className="sahol-ind-signal buy">Tepki</span></div>
                <div className="sahol-ind-row" style={{ borderBottom: "none" }}><span className="sahol-ind-name">Konum</span><span className="sahol-ind-val">Nötr-Yüksek</span><span className="sahol-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sahol-progress-label"><span>Aşırı Satım (0)</span><span>69.09</span><span>Aşırı Alım (100)</span></div>
                  <div className="sahol-progress-bar"><div className="sahol-progress-fill" style={{ width: "69.09%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-yüksek bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="sahol-analysis-card">
              <div className="sahol-analysis-card-head">
                <div className="sahol-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="sahol-analysis-card-body">
                <div className="sahol-ind-row"><span className="sahol-ind-name">MACD</span><span className="sahol-ind-val">-1.5906</span><span className="sahol-ind-signal sell">Negatif</span></div>
                <div className="sahol-ind-row"><span className="sahol-ind-name">Trigger</span><span className="sahol-ind-val">-1.4022</span><span className="sahol-ind-signal sell">Baskı</span></div>
                <div className="sahol-ind-row" style={{ borderBottom: "none" }}><span className="sahol-ind-name">Momentum</span><span className="sahol-ind-val">Zayıf</span><span className="sahol-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="sahol-analysis-card">
              <div className="sahol-analysis-card-head">
                <div className="sahol-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="sahol-analysis-card-body">
                <div className="sahol-ind-row"><span className="sahol-ind-name">RSI Değeri</span><span className="sahol-ind-val">43.48</span><span className="sahol-ind-signal neutral">Zayıf</span></div>
                <div className="sahol-ind-row" style={{ borderBottom: "none" }}><span className="sahol-ind-name">Bölge</span><span className="sahol-ind-val">Nötr-Alt</span><span className="sahol-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sahol-progress-label"><span>30 (A.Satım)</span><span>43.48</span><span>70 (A.Alım)</span></div>
                  <div className="sahol-progress-bar"><div className="sahol-progress-fill" style={{ width: "43.48%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="sahol-analysis-card">
              <div className="sahol-analysis-card-head">
                <div className="sahol-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="sahol-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="sahol-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","90.95","Fiyat Altında ▼"],
                      ["MAV 13","91.92","Fiyat Altında ▼"],
                      ["MAV 21","92.92","Fiyat Altında ▼"],
                      ["MAV 55","94.36","Fiyat Altında ▼"],
                      ["MAV 89","94.02","Fiyat Altında ▼"],
                      ["MAV 144","92.77","Fiyat Altında ▼"],
                      ["MAV 233","90.93","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "sahol-above" : "sahol-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sahol-section-title"><span className="sahol-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="sahol-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "90.93–91.92", desc: "MAV 233, MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "92.92–93.67", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "94.02–101.42", desc: "MAV 89/55 bölgesi ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "89.95–90.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "85.92 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "83.00–85.00", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="sahol-sr-cell" key={s.label}>
                <div className={`sahol-sr-type ${s.type}`}>{s.label}</div>
                <div className="sahol-sr-price">{s.price}</div>
                <div className="sahol-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="sahol-section-title"><span className="sahol-section-num">05</span> Genel Değerlendirme</div>
          <div className="sahol-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>SAHOL, son kapanışını <strong>90.00 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>93.67 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 90.95–93.67 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>89.95 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>90.93–85.92 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="sahol-section-title"><span className="sahol-section-num">06</span> Senaryo Analizi</div>
          <div className="sahol-scenario-grid">
            <div className="sahol-scenario-card bull">
              <div className="sahol-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>90.93 TL MAV 233 üzerinde kapanış</li>
                <li>91.92 TL MAV 13 seviyesinin geri alınması</li>
                <li>93.67 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 93.67–94.36 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="sahol-scenario-card bear">
              <div className="sahol-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>89.95 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>85.92 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 85.92 TL destek testi</li>
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


          <div className="sahol-disclaimer">
            <div className="sahol-disclaimer-head">
              <div className="sahol-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="sahol-footer">
            <div className="sahol-footer-inner">
              <div className="sahol-footer-brand">HOCA İLE BORSA</div>
              <div className="sahol-footer-meta">
                SAHOL Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="sahol-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
