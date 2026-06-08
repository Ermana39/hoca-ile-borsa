import Head from "next/head";
import Link from "next/link";

export default function VakbnGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>VAKBN Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="VakıfBank (VAKBN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/vakbn" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .vakbn-wrap *, .vakbn-wrap *::before, .vakbn-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .vakbn-wrap {
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

        .vakbn-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .vakbn-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .vakbn-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .vakbn-hero-title em { color: var(--accent); font-style: normal; }
        .vakbn-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .vakbn-price-block { text-align: right; }
        .vakbn-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .vakbn-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .vakbn-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .vakbn-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .vakbn-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .vakbn-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .vakbn-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .vakbn-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .vakbn-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .vakbn-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .vakbn-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .vakbn-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .vakbn-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .vakbn-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .vakbn-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .vakbn-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .vakbn-chart-img-wrap { position: relative; padding: 1rem; }
        .vakbn-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .vakbn-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .vakbn-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .vakbn-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .vakbn-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .vakbn-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .vakbn-icon.blue   { background: rgba(10,187,255,.12); }
        .vakbn-icon.gold   { background: rgba(245,200,66,.12); }
        .vakbn-icon.green  { background: rgba(0,208,104,.12); }
        .vakbn-icon.red    { background: rgba(255,77,106,.12); }
        .vakbn-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .vakbn-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .vakbn-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .vakbn-ind-row:last-child { border-bottom: none; }
        .vakbn-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .vakbn-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .vakbn-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .vakbn-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .vakbn-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .vakbn-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .vakbn-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .vakbn-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .vakbn-progress-fill { height: 100%; border-radius: 3px; }

        .vakbn-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .vakbn-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .vakbn-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .vakbn-ma-table tr:last-child td { border-bottom: none; }
        .vakbn-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .vakbn-above { color: var(--green); }
        .vakbn-below { color: var(--red); }

        .vakbn-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .vakbn-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .vakbn-bol-bands { flex: 1; position: relative; height: 48px; }
        .vakbn-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .vakbn-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .vakbn-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .vakbn-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .vakbn-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (33.53 - 31.76) / (33.53 - 29.61));
        }
        .vakbn-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .vakbn-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .vakbn-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .vakbn-sr-cell:hover { background: var(--bg3); }
        .vakbn-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .vakbn-sr-type.res { color: var(--red); }
        .vakbn-sr-type.sup { color: var(--green); }
        .vakbn-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .vakbn-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .vakbn-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .vakbn-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .vakbn-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .vakbn-narrative p:last-child { margin-bottom: 0; }
        .vakbn-narrative strong { color: var(--accent); font-weight: 600; }
        .vakbn-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .vakbn-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .vakbn-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .vakbn-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .vakbn-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .vakbn-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .vakbn-scenario-card.bull .vakbn-scenario-head { color: var(--green); }
        .vakbn-scenario-card.bear .vakbn-scenario-head { color: var(--red); }
        .vakbn-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .vakbn-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .vakbn-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .vakbn-scenario-card.bull li::before { color: var(--green); }
        .vakbn-scenario-card.bear li::before { color: var(--red); }

        .vakbn-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .vakbn-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .vakbn-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .vakbn-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .vakbn-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .vakbn-disclaimer p + p { margin-top: .4rem; }

        .vakbn-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .vakbn-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .vakbn-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .vakbn-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .vakbn-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .vakbn-hero { grid-template-columns: 1fr; }
          .vakbn-price-block { text-align: left; }
        }
        @media(max-width:768px) { .vakbn-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .vakbn-hero   { padding: 2rem 1rem 1.5rem; }
          .vakbn-main   { padding: 1.5rem 1rem 3rem; }
          .vakbn-footer { padding: 1.2rem 1rem; }
          .vakbn-scenario-grid { grid-template-columns: 1fr; }
          .vakbn-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="vakbn-wrap">
        <section className="vakbn-hero">
          <div>
            <div className="vakbn-hero-label">Teknik Analiz Raporu</div>
            <h1 className="vakbn-hero-title">VAKIF<br /><em>BANK</em></h1>
            <p className="vakbn-hero-sub">
              BIST: VAKBN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="vakbn-price-block">
            <div className="vakbn-price-main"><span className="vakbn-price-currency">₺</span>31.76</div>
          </div>
        </section>

        <main className="vakbn-main">
          <div className="vakbn-section-title"><span className="vakbn-section-num">01</span> Grafik</div>
          <div className="vakbn-chart-wrap">
            <div className="vakbn-chart-header">
              <span className="vakbn-chart-title-text">VAKBN — Günlük Mum Grafiği</span>
              <div className="vakbn-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`vakbn-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="vakbn-chart-img-wrap">
              <img
                src="/vakbn-analiz.webp"
                alt="VAKBN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="vakbn-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="vakbn-section-title"><span className="vakbn-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="vakbn-bol-card">
            <div className="vakbn-bol-visual">
              <div className="vakbn-bol-bands">
                <div className="vakbn-bol-fill" />
                <div className="vakbn-bol-upper" />
                <div className="vakbn-bol-mid" />
                <div className="vakbn-bol-lower" />
                <div className="vakbn-bol-marker" />
              </div>
              <div className="vakbn-bol-labels">
                <span>BOL U: 33.53</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 31.57</span>
                <span>BOL D: 29.61</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "33.53 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "31.57 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "29.61 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "3.92 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "31.76 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="vakbn-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="vakbn-ind-name">{r.name}</span>
                <span className="vakbn-ind-val">{r.val}</span>
                <span className={`vakbn-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>31.57 TL</strong> seviyesinin hemen üzerinde kapanış yapmış durumda. Orta band üzerinde kalıcılık kısa vadede tepki ihtimalini desteklerken, aşağıda <strong style={{ color: "var(--accent)" }}>29.61 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="vakbn-section-title"><span className="vakbn-section-num">03</span> İndikatörler</div>
          <div className="vakbn-two-col">
            <div className="vakbn-analysis-card">
              <div className="vakbn-analysis-card-head">
                <div className="vakbn-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="vakbn-analysis-card-body">
                <div className="vakbn-ind-row"><span className="vakbn-ind-name">StocK</span><span className="vakbn-ind-val">65.77</span><span className="vakbn-ind-signal neutral">Nötr</span></div>
                <div className="vakbn-ind-row"><span className="vakbn-ind-name">StocD</span><span className="vakbn-ind-val">70.53</span><span className="vakbn-ind-signal buy">Tepki</span></div>
                <div className="vakbn-ind-row" style={{ borderBottom: "none" }}><span className="vakbn-ind-name">Konum</span><span className="vakbn-ind-val">Nötr-Yüksek</span><span className="vakbn-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="vakbn-progress-label"><span>Aşırı Satım (0)</span><span>65.77</span><span>Aşırı Alım (100)</span></div>
                  <div className="vakbn-progress-bar"><div className="vakbn-progress-fill" style={{ width: "65.77%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-yüksek bölgede ancak K çizgisi D çizgisinin altında. Bu durum kısa vadeli tepki gücünde zayıflama olduğunu gösteriyor.</p>
              </div>
            </div>

            <div className="vakbn-analysis-card">
              <div className="vakbn-analysis-card-head">
                <div className="vakbn-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="vakbn-analysis-card-body">
                <div className="vakbn-ind-row"><span className="vakbn-ind-name">MACD</span><span className="vakbn-ind-val">0.1192</span><span className="vakbn-ind-signal sell">Negatif</span></div>
                <div className="vakbn-ind-row"><span className="vakbn-ind-name">Trigger</span><span className="vakbn-ind-val">0.3460</span><span className="vakbn-ind-signal sell">Baskı</span></div>
                <div className="vakbn-ind-row" style={{ borderBottom: "none" }}><span className="vakbn-ind-name">Momentum</span><span className="vakbn-ind-val">Zayıf</span><span className="vakbn-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olmasına rağmen trigger çizgisinin altında. Bu durum momentum tarafında zayıflama olduğunu gösteriyor.</p>
              </div>
            </div>

            <div className="vakbn-analysis-card">
              <div className="vakbn-analysis-card-head">
                <div className="vakbn-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="vakbn-analysis-card-body">
                <div className="vakbn-ind-row"><span className="vakbn-ind-name">RSI Değeri</span><span className="vakbn-ind-val">49.00</span><span className="vakbn-ind-signal neutral">Zayıf</span></div>
                <div className="vakbn-ind-row" style={{ borderBottom: "none" }}><span className="vakbn-ind-name">Bölge</span><span className="vakbn-ind-val">Nötr-Alt</span><span className="vakbn-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="vakbn-progress-label"><span>30 (A.Satım)</span><span>49.00</span><span>70 (A.Alım)</span></div>
                  <div className="vakbn-progress-bar"><div className="vakbn-progress-fill" style={{ width: "49.00%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesine çok yakın ancak hafif altında. 50 üzerine dönüş kısa vadeli toparlanmanın güçlenmesi açısından önemlidir.</p>
              </div>
            </div>

            <div className="vakbn-analysis-card">
              <div className="vakbn-analysis-card-head">
                <div className="vakbn-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="vakbn-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="vakbn-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","32.11","Fiyat Altında ▼"],
                      ["MAV 13","31.81","Fiyat Altında ▼"],
                      ["MAV 21","31.85","Fiyat Altında ▼"],
                      ["MAV 55","32.54","Fiyat Altında ▼"],
                      ["MAV 89","32.62","Fiyat Altında ▼"],
                      ["MAV 144","31.99","Fiyat Altında ▼"],
                      ["MAV 233","30.57","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "vakbn-above" : "vakbn-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="vakbn-section-title"><span className="vakbn-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="vakbn-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "31.81–31.85", desc: "MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "32.11–32.62", desc: "MAV 5, MAV 55 ve MAV 89 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "33.53 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "31.60–31.57", desc: "Günlük dip ve Bollinger orta bandı" },
              { type: "sup", label: "Ana Destek", price: "30.57 TL", desc: "MAV 233 destek bölgesi" },
              { type: "sup", label: "Derin Destek", price: "29.61 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="vakbn-sr-cell" key={s.label}>
                <div className={`vakbn-sr-type ${s.type}`}>{s.label}</div>
                <div className="vakbn-sr-price">{s.price}</div>
                <div className="vakbn-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="vakbn-section-title"><span className="vakbn-section-num">05</span> Genel Değerlendirme</div>
          <div className="vakbn-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>VAKBN, son kapanışını <strong>31.76 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>31.57 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 32.11–31.57 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>30.57–29.61 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="vakbn-section-title"><span className="vakbn-section-num">06</span> Senaryo Analizi</div>
          <div className="vakbn-scenario-grid">
            <div className="vakbn-scenario-card bull">
              <div className="vakbn-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>31.81 TL MAV 13 üzerinde kapanış</li>
                <li>32.11 TL MAV 5 seviyesinin geri alınması</li>
                <li>32.62 TL MAV 89 üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 32.62–33.53 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="vakbn-scenario-card bear">
              <div className="vakbn-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>30.57 TL MAV 233 desteğine geri çekilme</li>
                <li>Hedef: 30.57–29.61 TL destek bölgesi</li>
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


          <div className="vakbn-disclaimer">
            <div className="vakbn-disclaimer-head">
              <div className="vakbn-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="vakbn-footer">
            <div className="vakbn-footer-inner">
              <div className="vakbn-footer-brand">HOCA İLE BORSA</div>
              <div className="vakbn-footer-meta">
                VAKBN Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="vakbn-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
