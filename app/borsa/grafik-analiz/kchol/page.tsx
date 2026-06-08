import Head from "next/head";
import Link from "next/link";

export default function KcholGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>KCHOL Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Koç Holding (KCHOL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/kchol" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .kchol-wrap *, .kchol-wrap *::before, .kchol-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .kchol-wrap {
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

        .kchol-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .kchol-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .kchol-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .kchol-hero-title em { color: var(--accent); font-style: normal; }
        .kchol-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .kchol-price-block { text-align: right; }
        .kchol-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .kchol-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .kchol-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .kchol-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .kchol-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .kchol-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .kchol-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .kchol-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .kchol-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .kchol-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .kchol-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .kchol-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .kchol-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .kchol-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .kchol-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .kchol-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .kchol-chart-img-wrap { position: relative; padding: 1rem; }
        .kchol-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .kchol-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .kchol-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .kchol-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .kchol-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .kchol-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .kchol-icon.blue   { background: rgba(10,187,255,.12); }
        .kchol-icon.gold   { background: rgba(245,200,66,.12); }
        .kchol-icon.green  { background: rgba(0,208,104,.12); }
        .kchol-icon.red    { background: rgba(255,77,106,.12); }
        .kchol-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .kchol-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .kchol-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .kchol-ind-row:last-child { border-bottom: none; }
        .kchol-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .kchol-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .kchol-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .kchol-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .kchol-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .kchol-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .kchol-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .kchol-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .kchol-progress-fill { height: 100%; border-radius: 3px; }

        .kchol-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .kchol-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .kchol-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .kchol-ma-table tr:last-child td { border-bottom: none; }
        .kchol-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .kchol-above { color: var(--green); }
        .kchol-below { color: var(--red); }

        .kchol-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .kchol-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .kchol-bol-bands { flex: 1; position: relative; height: 48px; }
        .kchol-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .kchol-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .kchol-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .kchol-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .kchol-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (216.09 - 189.00) / (216.09 - 179.24));
        }
        .kchol-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .kchol-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .kchol-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .kchol-sr-cell:hover { background: var(--bg3); }
        .kchol-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .kchol-sr-type.res { color: var(--red); }
        .kchol-sr-type.sup { color: var(--green); }
        .kchol-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .kchol-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .kchol-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .kchol-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .kchol-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .kchol-narrative p:last-child { margin-bottom: 0; }
        .kchol-narrative strong { color: var(--accent); font-weight: 600; }
        .kchol-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .kchol-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .kchol-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .kchol-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .kchol-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .kchol-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .kchol-scenario-card.bull .kchol-scenario-head { color: var(--green); }
        .kchol-scenario-card.bear .kchol-scenario-head { color: var(--red); }
        .kchol-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .kchol-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .kchol-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .kchol-scenario-card.bull li::before { color: var(--green); }
        .kchol-scenario-card.bear li::before { color: var(--red); }

        .kchol-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .kchol-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .kchol-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .kchol-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .kchol-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .kchol-disclaimer p + p { margin-top: .4rem; }

        .kchol-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .kchol-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .kchol-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .kchol-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .kchol-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .kchol-hero { grid-template-columns: 1fr; }
          .kchol-price-block { text-align: left; }
        }
        @media(max-width:768px) { .kchol-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .kchol-hero   { padding: 2rem 1rem 1.5rem; }
          .kchol-main   { padding: 1.5rem 1rem 3rem; }
          .kchol-footer { padding: 1.2rem 1rem; }
          .kchol-scenario-grid { grid-template-columns: 1fr; }
          .kchol-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="kchol-wrap">
        <section className="kchol-hero">
          <div>
            <div className="kchol-hero-label">Teknik Analiz Raporu</div>
            <h1 className="kchol-hero-title">KOÇ<br /><em>HOLDİNG</em></h1>
            <p className="kchol-hero-sub">
              BIST: KCHOL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="kchol-price-block">
            <div className="kchol-price-main"><span className="kchol-price-currency">₺</span>189.00</div>
          </div>
        </section>

        <main className="kchol-main">
          <div className="kchol-section-title"><span className="kchol-section-num">01</span> Grafik</div>
          <div className="kchol-chart-wrap">
            <div className="kchol-chart-header">
              <span className="kchol-chart-title-text">KCHOL — Günlük Mum Grafiği</span>
              <div className="kchol-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`kchol-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="kchol-chart-img-wrap">
              <img
                src="/kchol-analiz.webp"
                alt="KCHOL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="kchol-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="kchol-section-title"><span className="kchol-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="kchol-bol-card">
            <div className="kchol-bol-visual">
              <div className="kchol-bol-bands">
                <div className="kchol-bol-fill" />
                <div className="kchol-bol-upper" />
                <div className="kchol-bol-mid" />
                <div className="kchol-bol-lower" />
                <div className="kchol-bol-marker" />
              </div>
              <div className="kchol-bol-labels">
                <span>BOL U: 216.09</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 197.67</span>
                <span>BOL D: 179.24</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "216.09 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "197.67 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "179.24 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "36.85 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "189.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="kchol-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="kchol-ind-name">{r.name}</span>
                <span className="kchol-ind-val">{r.val}</span>
                <span className={`kchol-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>197.67 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>179.24 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="kchol-section-title"><span className="kchol-section-num">03</span> İndikatörler</div>
          <div className="kchol-two-col">
            <div className="kchol-analysis-card">
              <div className="kchol-analysis-card-head">
                <div className="kchol-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="kchol-analysis-card-body">
                <div className="kchol-ind-row"><span className="kchol-ind-name">StocK</span><span className="kchol-ind-val">53.17</span><span className="kchol-ind-signal neutral">Nötr</span></div>
                <div className="kchol-ind-row"><span className="kchol-ind-name">StocD</span><span className="kchol-ind-val">46.47</span><span className="kchol-ind-signal buy">Tepki</span></div>
                <div className="kchol-ind-row" style={{ borderBottom: "none" }}><span className="kchol-ind-name">Konum</span><span className="kchol-ind-val">Nötr Bölge</span><span className="kchol-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="kchol-progress-label"><span>Aşırı Satım (0)</span><span>53.17</span><span>Aşırı Alım (100)</span></div>
                  <div className="kchol-progress-bar"><div className="kchol-progress-fill" style={{ width: "53.17%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="kchol-analysis-card">
              <div className="kchol-analysis-card-head">
                <div className="kchol-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="kchol-analysis-card-body">
                <div className="kchol-ind-row"><span className="kchol-ind-name">MACD</span><span className="kchol-ind-val">-3.4720</span><span className="kchol-ind-signal sell">Negatif</span></div>
                <div className="kchol-ind-row"><span className="kchol-ind-name">Trigger</span><span className="kchol-ind-val">-2.5584</span><span className="kchol-ind-signal sell">Baskı</span></div>
                <div className="kchol-ind-row" style={{ borderBottom: "none" }}><span className="kchol-ind-name">Momentum</span><span className="kchol-ind-val">Zayıf</span><span className="kchol-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="kchol-analysis-card">
              <div className="kchol-analysis-card-head">
                <div className="kchol-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="kchol-analysis-card-body">
                <div className="kchol-ind-row"><span className="kchol-ind-name">RSI Değeri</span><span className="kchol-ind-val">42.70</span><span className="kchol-ind-signal neutral">Zayıf</span></div>
                <div className="kchol-ind-row" style={{ borderBottom: "none" }}><span className="kchol-ind-name">Bölge</span><span className="kchol-ind-val">Nötr-Alt</span><span className="kchol-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="kchol-progress-label"><span>30 (A.Satım)</span><span>42.70</span><span>70 (A.Alım)</span></div>
                  <div className="kchol-progress-bar"><div className="kchol-progress-fill" style={{ width: "42.70%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="kchol-analysis-card">
              <div className="kchol-analysis-card-head">
                <div className="kchol-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="kchol-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="kchol-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","189.93","Fiyat Altında ▼"],
                      ["MAV 13","192.66","Fiyat Altında ▼"],
                      ["MAV 21","194.94","Fiyat Altında ▼"],
                      ["MAV 55","196.18","Fiyat Altında ▼"],
                      ["MAV 89","193.47","Fiyat Altında ▼"],
                      ["MAV 144","188.26","Fiyat Üstünde ▲"],
                      ["MAV 233","181.74","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "kchol-above" : "kchol-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="kchol-section-title"><span className="kchol-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="kchol-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "189.93–192.66", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "194.94–197.67", desc: "MAV 21/55 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "216.09 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "188.60–189.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "181.74–179.24", desc: "MAV 233 ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "170.00–175.00", desc: "Grafikte önceki tepki alanı" },
            ].map((s) => (
              <div className="kchol-sr-cell" key={s.label}>
                <div className={`kchol-sr-type ${s.type}`}>{s.label}</div>
                <div className="kchol-sr-price">{s.price}</div>
                <div className="kchol-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="kchol-section-title"><span className="kchol-section-num">05</span> Genel Değerlendirme</div>
          <div className="kchol-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>KCHOL, son kapanışını <strong>189.00 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>197.67 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 189.93–197.67 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>181.74–179.24 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="kchol-section-title"><span className="kchol-section-num">06</span> Senaryo Analizi</div>
          <div className="kchol-scenario-grid">
            <div className="kchol-scenario-card bull">
              <div className="kchol-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>189.93 TL MAV 5 üzerinde kapanış</li>
                <li>192.66 TL MAV 13 seviyesinin geri alınması</li>
                <li>197.67 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 194.94–216.09 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="kchol-scenario-card bear">
              <div className="kchol-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>179.24 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 181.74–179.24 TL destek bölgesi</li>
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


          <div className="kchol-disclaimer">
            <div className="kchol-disclaimer-head">
              <div className="kchol-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="kchol-footer">
            <div className="kchol-footer-inner">
              <div className="kchol-footer-brand">HOCA İLE BORSA</div>
              <div className="kchol-footer-meta">
                KCHOL Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="kchol-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
