import Head from "next/head";
import Link from "next/link";

export default function TrmetGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>TRMET Teknik Analiz — 05.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Trakya Metal (TRMET) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/trmet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .trmet-wrap *, .trmet-wrap *::before, .trmet-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .trmet-wrap {
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

        .trmet-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .trmet-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .trmet-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .trmet-hero-title em { color: var(--accent); font-style: normal; }
        .trmet-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .trmet-price-block { text-align: right; }
        .trmet-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .trmet-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .trmet-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .trmet-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .trmet-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .trmet-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .trmet-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .trmet-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .trmet-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .trmet-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .trmet-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .trmet-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .trmet-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .trmet-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .trmet-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .trmet-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .trmet-chart-img-wrap { position: relative; padding: 1rem; }
        .trmet-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .trmet-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .trmet-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .trmet-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .trmet-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .trmet-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .trmet-icon.blue   { background: rgba(10,187,255,.12); }
        .trmet-icon.gold   { background: rgba(245,200,66,.12); }
        .trmet-icon.green  { background: rgba(0,208,104,.12); }
        .trmet-icon.red    { background: rgba(255,77,106,.12); }
        .trmet-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .trmet-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .trmet-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .trmet-ind-row:last-child { border-bottom: none; }
        .trmet-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .trmet-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .trmet-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .trmet-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .trmet-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .trmet-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .trmet-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .trmet-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .trmet-progress-fill { height: 100%; border-radius: 3px; }

        .trmet-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .trmet-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .trmet-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .trmet-ma-table tr:last-child td { border-bottom: none; }
        .trmet-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .trmet-above { color: var(--green); }
        .trmet-below { color: var(--red); }

        .trmet-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .trmet-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .trmet-bol-bands { flex: 1; position: relative; height: 48px; }
        .trmet-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .trmet-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .trmet-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .trmet-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .trmet-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (131.64 - 112.70) / (131.64 - 103.50));
        }
        .trmet-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .trmet-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .trmet-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .trmet-sr-cell:hover { background: var(--bg3); }
        .trmet-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .trmet-sr-type.res { color: var(--red); }
        .trmet-sr-type.sup { color: var(--green); }
        .trmet-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .trmet-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .trmet-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .trmet-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .trmet-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .trmet-narrative p:last-child { margin-bottom: 0; }
        .trmet-narrative strong { color: var(--accent); font-weight: 600; }
        .trmet-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .trmet-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .trmet-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .trmet-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .trmet-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .trmet-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .trmet-scenario-card.bull .trmet-scenario-head { color: var(--green); }
        .trmet-scenario-card.bear .trmet-scenario-head { color: var(--red); }
        .trmet-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .trmet-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .trmet-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .trmet-scenario-card.bull li::before { color: var(--green); }
        .trmet-scenario-card.bear li::before { color: var(--red); }

        .trmet-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .trmet-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .trmet-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .trmet-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .trmet-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .trmet-disclaimer p + p { margin-top: .4rem; }

        .trmet-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .trmet-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .trmet-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .trmet-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .trmet-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .trmet-hero { grid-template-columns: 1fr; }
          .trmet-price-block { text-align: left; }
        }
        @media(max-width:768px) { .trmet-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .trmet-hero   { padding: 2rem 1rem 1.5rem; }
          .trmet-main   { padding: 1.5rem 1rem 3rem; }
          .trmet-footer { padding: 1.2rem 1rem; }
          .trmet-scenario-grid { grid-template-columns: 1fr; }
          .trmet-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="trmet-wrap">
        <section className="trmet-hero">
          <div>
            <div className="trmet-hero-label">Teknik Analiz Raporu</div>
            <h1 className="trmet-hero-title">TRAKYA<br /><em>METAL</em></h1>
            <p className="trmet-hero-sub">
              BIST: TRMET &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="trmet-price-block">
            <div className="trmet-price-main"><span className="trmet-price-currency">₺</span>112.70</div>
          </div>
        </section>

        <main className="trmet-main">
          <div className="trmet-section-title"><span className="trmet-section-num">01</span> Grafik</div>
          <div className="trmet-chart-wrap">
            <div className="trmet-chart-header">
              <span className="trmet-chart-title-text">TRMET — Günlük Mum Grafiği</span>
              <div className="trmet-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`trmet-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="trmet-chart-img-wrap">
              <img
                src="/trmet-analiz.webp"
                alt="TRMET Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="trmet-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="trmet-section-title"><span className="trmet-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="trmet-bol-card">
            <div className="trmet-bol-visual">
              <div className="trmet-bol-bands">
                <div className="trmet-bol-fill" />
                <div className="trmet-bol-upper" />
                <div className="trmet-bol-mid" />
                <div className="trmet-bol-lower" />
                <div className="trmet-bol-marker" />
              </div>
              <div className="trmet-bol-labels">
                <span>BOL U: 131.64</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 117.57</span>
                <span>BOL D: 103.50</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "131.64 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "117.57 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "103.50 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "28.14 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "112.70 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="trmet-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="trmet-ind-name">{r.name}</span>
                <span className="trmet-ind-val">{r.val}</span>
                <span className={`trmet-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>117.57 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>103.50 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="trmet-section-title"><span className="trmet-section-num">03</span> İndikatörler</div>
          <div className="trmet-two-col">
            <div className="trmet-analysis-card">
              <div className="trmet-analysis-card-head">
                <div className="trmet-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="trmet-analysis-card-body">
                <div className="trmet-ind-row"><span className="trmet-ind-name">StocK</span><span className="trmet-ind-val">81.03</span><span className="trmet-ind-signal neutral">Nötr</span></div>
                <div className="trmet-ind-row"><span className="trmet-ind-name">StocD</span><span className="trmet-ind-val">79.51</span><span className="trmet-ind-signal buy">Tepki</span></div>
                <div className="trmet-ind-row" style={{ borderBottom: "none" }}><span className="trmet-ind-name">Konum</span><span className="trmet-ind-val">Aşırı Alım</span><span className="trmet-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="trmet-progress-label"><span>Aşırı Satım (0)</span><span>81.03</span><span>Aşırı Alım (100)</span></div>
                  <div className="trmet-progress-bar"><div className="trmet-progress-fill" style={{ width: "81.03%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı alım bölgesinde ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyatın ortalamaların çoğunun altında kalması nedeniyle teyit zayıf.</p>
              </div>
            </div>

            <div className="trmet-analysis-card">
              <div className="trmet-analysis-card-head">
                <div className="trmet-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="trmet-analysis-card-body">
                <div className="trmet-ind-row"><span className="trmet-ind-name">MACD</span><span className="trmet-ind-val">-3.6919</span><span className="trmet-ind-signal sell">Negatif</span></div>
                <div className="trmet-ind-row"><span className="trmet-ind-name">Trigger</span><span className="trmet-ind-val">-4.2670</span><span className="trmet-ind-signal sell">Baskı</span></div>
                <div className="trmet-ind-row" style={{ borderBottom: "none" }}><span className="trmet-ind-name">Momentum</span><span className="trmet-ind-val">Zayıf</span><span className="trmet-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin üzerinde. Bu durum kısa vadede tepki isteği olduğunu, fakat ana momentumun hâlâ zayıf kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="trmet-analysis-card">
              <div className="trmet-analysis-card-head">
                <div className="trmet-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="trmet-analysis-card-body">
                <div className="trmet-ind-row"><span className="trmet-ind-name">RSI Değeri</span><span className="trmet-ind-val">43.24</span><span className="trmet-ind-signal neutral">Zayıf</span></div>
                <div className="trmet-ind-row" style={{ borderBottom: "none" }}><span className="trmet-ind-name">Bölge</span><span className="trmet-ind-val">Nötr-Alt</span><span className="trmet-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="trmet-progress-label"><span>30 (A.Satım)</span><span>43.24</span><span>70 (A.Alım)</span></div>
                  <div className="trmet-progress-bar"><div className="trmet-progress-fill" style={{ width: "43.24%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="trmet-analysis-card">
              <div className="trmet-analysis-card-head">
                <div className="trmet-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="trmet-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="trmet-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","115.02","Fiyat Altında ▼"],
                      ["MAV 13","115.78","Fiyat Altında ▼"],
                      ["MAV 21","117.90","Fiyat Altında ▼"],
                      ["MAV 55","124.29","Fiyat Altında ▼"],
                      ["MAV 89","124.58","Fiyat Altında ▼"],
                      ["MAV 144","120.27","Fiyat Altında ▼"],
                      ["MAV 233","111.89","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "trmet-above" : "trmet-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="trmet-section-title"><span className="trmet-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="trmet-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "115.02–115.78", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "117.57–117.90", desc: "Bollinger orta bandı ve MAV 21 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "120.27–131.64", desc: "MAV 144 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "111.89–111.40", desc: "MAV 233 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "103.50 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "100.00–103.50", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="trmet-sr-cell" key={s.label}>
                <div className={`trmet-sr-type ${s.type}`}>{s.label}</div>
                <div className="trmet-sr-price">{s.price}</div>
                <div className="trmet-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="trmet-section-title"><span className="trmet-section-num">05</span> Genel Değerlendirme</div>
          <div className="trmet-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TRMET, son kapanışını <strong>112.70 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>117.57 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 115.02–117.57 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>111.89–103.50 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="trmet-section-title"><span className="trmet-section-num">06</span> Senaryo Analizi</div>
          <div className="trmet-scenario-grid">
            <div className="trmet-scenario-card bull">
              <div className="trmet-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>115.02 TL MAV 5 üzerinde kapanış</li>
                <li>115.78 TL MAV 13 seviyesinin geri alınması</li>
                <li>117.57 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 120.27–131.64 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="trmet-scenario-card bear">
              <div className="trmet-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>103.50 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 103.50 TL destek testi</li>
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


          <div className="trmet-disclaimer">
            <div className="trmet-disclaimer-head">
              <div className="trmet-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="trmet-footer">
            <div className="trmet-footer-inner">
              <div className="trmet-footer-brand">HOCA İLE BORSA</div>
              <div className="trmet-footer-meta">
                TRMET Teknik Analiz Raporu<br />
                Hazırlanma: 05.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="trmet-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
