import Head from "next/head";
import Link from "next/link";

export default function TtkomGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>TTKOM Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Türk Telekom (TTKOM) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/ttkom" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .ttkom-wrap *, .ttkom-wrap *::before, .ttkom-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ttkom-wrap {
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

        .ttkom-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .ttkom-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ttkom-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ttkom-hero-title em { color: var(--accent); font-style: normal; }
        .ttkom-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ttkom-price-block { text-align: right; }
        .ttkom-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ttkom-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .ttkom-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .ttkom-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ttkom-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ttkom-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .ttkom-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ttkom-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ttkom-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ttkom-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ttkom-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ttkom-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ttkom-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ttkom-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ttkom-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ttkom-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ttkom-chart-img-wrap { position: relative; padding: 1rem; }
        .ttkom-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ttkom-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .ttkom-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .ttkom-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .ttkom-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ttkom-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .ttkom-icon.blue   { background: rgba(10,187,255,.12); }
        .ttkom-icon.gold   { background: rgba(245,200,66,.12); }
        .ttkom-icon.green  { background: rgba(0,208,104,.12); }
        .ttkom-icon.red    { background: rgba(255,77,106,.12); }
        .ttkom-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .ttkom-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .ttkom-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ttkom-ind-row:last-child { border-bottom: none; }
        .ttkom-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ttkom-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ttkom-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .ttkom-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ttkom-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ttkom-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .ttkom-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .ttkom-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .ttkom-progress-fill { height: 100%; border-radius: 3px; }

        .ttkom-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ttkom-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .ttkom-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ttkom-ma-table tr:last-child td { border-bottom: none; }
        .ttkom-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ttkom-above { color: var(--green); }
        .ttkom-below { color: var(--red); }

        .ttkom-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .ttkom-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .ttkom-bol-bands { flex: 1; position: relative; height: 48px; }
        .ttkom-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ttkom-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ttkom-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ttkom-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .ttkom-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (67.56 - 62.30) / (67.56 - 58.18));
        }
        .ttkom-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .ttkom-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .ttkom-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ttkom-sr-cell:hover { background: var(--bg3); }
        .ttkom-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .ttkom-sr-type.res { color: var(--red); }
        .ttkom-sr-type.sup { color: var(--green); }
        .ttkom-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ttkom-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .ttkom-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ttkom-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .ttkom-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ttkom-narrative p:last-child { margin-bottom: 0; }
        .ttkom-narrative strong { color: var(--accent); font-weight: 600; }
        .ttkom-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .ttkom-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ttkom-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ttkom-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ttkom-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ttkom-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .ttkom-scenario-card.bull .ttkom-scenario-head { color: var(--green); }
        .ttkom-scenario-card.bear .ttkom-scenario-head { color: var(--red); }
        .ttkom-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ttkom-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ttkom-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ttkom-scenario-card.bull li::before { color: var(--green); }
        .ttkom-scenario-card.bear li::before { color: var(--red); }

        .ttkom-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .ttkom-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ttkom-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .ttkom-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ttkom-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ttkom-disclaimer p + p { margin-top: .4rem; }

        .ttkom-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .ttkom-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ttkom-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ttkom-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ttkom-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .ttkom-hero { grid-template-columns: 1fr; }
          .ttkom-price-block { text-align: left; }
        }
        @media(max-width:768px) { .ttkom-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .ttkom-hero   { padding: 2rem 1rem 1.5rem; }
          .ttkom-main   { padding: 1.5rem 1rem 3rem; }
          .ttkom-footer { padding: 1.2rem 1rem; }
          .ttkom-scenario-grid { grid-template-columns: 1fr; }
          .ttkom-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ttkom-wrap">
        <section className="ttkom-hero">
          <div>
            <div className="ttkom-hero-label">Teknik Analiz Raporu</div>
            <h1 className="ttkom-hero-title">TÜRK<br /><em>TELEKOM</em></h1>
            <p className="ttkom-hero-sub">
              BIST: TTKOM &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="ttkom-price-block">
            <div className="ttkom-price-main"><span className="ttkom-price-currency">₺</span>62.30</div>
          </div>
        </section>

        <main className="ttkom-main">
          <div className="ttkom-section-title"><span className="ttkom-section-num">01</span> Grafik</div>
          <div className="ttkom-chart-wrap">
            <div className="ttkom-chart-header">
              <span className="ttkom-chart-title-text">TTKOM — Günlük Mum Grafiği</span>
              <div className="ttkom-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`ttkom-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="ttkom-chart-img-wrap">
              <img
                src="/ttkom-analiz.webp"
                alt="TTKOM Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="ttkom-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="ttkom-section-title"><span className="ttkom-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ttkom-bol-card">
            <div className="ttkom-bol-visual">
              <div className="ttkom-bol-bands">
                <div className="ttkom-bol-fill" />
                <div className="ttkom-bol-upper" />
                <div className="ttkom-bol-mid" />
                <div className="ttkom-bol-lower" />
                <div className="ttkom-bol-marker" />
              </div>
              <div className="ttkom-bol-labels">
                <span>BOL U: 67.56</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 62.97</span>
                <span>BOL D: 58.18</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "67.56 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "62.97 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "58.18 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "9.38 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "62.30 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="ttkom-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="ttkom-ind-name">{r.name}</span>
                <span className="ttkom-ind-val">{r.val}</span>
                <span className={`ttkom-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>62.97 TL</strong> seviyesinin hemen altında kapanış yapmış durumda. Bu bölge kısa vadeli yön tayini açısından kritik eşik konumunda; aşağıda <strong style={{ color: "var(--accent)" }}>58.18 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="ttkom-section-title"><span className="ttkom-section-num">03</span> İndikatörler</div>
          <div className="ttkom-two-col">
            <div className="ttkom-analysis-card">
              <div className="ttkom-analysis-card-head">
                <div className="ttkom-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ttkom-analysis-card-body">
                <div className="ttkom-ind-row"><span className="ttkom-ind-name">StocK</span><span className="ttkom-ind-val">77.60</span><span className="ttkom-ind-signal neutral">Nötr</span></div>
                <div className="ttkom-ind-row"><span className="ttkom-ind-name">StocD</span><span className="ttkom-ind-val">70.88</span><span className="ttkom-ind-signal buy">Tepki</span></div>
                <div className="ttkom-ind-row" style={{ borderBottom: "none" }}><span className="ttkom-ind-name">Konum</span><span className="ttkom-ind-val">Nötr-Yüksek</span><span className="ttkom-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ttkom-progress-label"><span>Aşırı Satım (0)</span><span>77.60</span><span>Aşırı Alım (100)</span></div>
                  <div className="ttkom-progress-bar"><div className="ttkom-progress-fill" style={{ width: "77.60%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-yüksek bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği korunuyor; ancak fiyatın 62.97 TL orta bandını aşması teyit açısından önemli.</p>
              </div>
            </div>

            <div className="ttkom-analysis-card">
              <div className="ttkom-analysis-card-head">
                <div className="ttkom-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ttkom-analysis-card-body">
                <div className="ttkom-ind-row"><span className="ttkom-ind-name">MACD</span><span className="ttkom-ind-val">-0.1695</span><span className="ttkom-ind-signal sell">Negatif</span></div>
                <div className="ttkom-ind-row"><span className="ttkom-ind-name">Trigger</span><span className="ttkom-ind-val">-0.2505</span><span className="ttkom-ind-signal sell">Baskı</span></div>
                <div className="ttkom-ind-row" style={{ borderBottom: "none" }}><span className="ttkom-ind-name">Momentum</span><span className="ttkom-ind-val">Zayıf</span><span className="ttkom-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede olmasına rağmen trigger çizgisinin üzerinde. Bu durum kısa vadede tepki isteği olduğunu, fakat ana momentumun henüz tam güçlenmediğini gösteriyor.</p>
              </div>
            </div>

            <div className="ttkom-analysis-card">
              <div className="ttkom-analysis-card-head">
                <div className="ttkom-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ttkom-analysis-card-body">
                <div className="ttkom-ind-row"><span className="ttkom-ind-name">RSI Değeri</span><span className="ttkom-ind-val">49.61</span><span className="ttkom-ind-signal neutral">Zayıf</span></div>
                <div className="ttkom-ind-row" style={{ borderBottom: "none" }}><span className="ttkom-ind-name">Bölge</span><span className="ttkom-ind-val">Nötr-Alt</span><span className="ttkom-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ttkom-progress-label"><span>30 (A.Satım)</span><span>49.61</span><span>70 (A.Alım)</span></div>
                  <div className="ttkom-progress-bar"><div className="ttkom-progress-fill" style={{ width: "49.61%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesine çok yakın ancak hafif altında. 50 üzerine dönüş kısa vadeli toparlanmanın güçlenmesi açısından önemlidir.</p>
              </div>
            </div>

            <div className="ttkom-analysis-card">
              <div className="ttkom-analysis-card-head">
                <div className="ttkom-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ttkom-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ttkom-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","62.48","Fiyat Altında ▼"],
                      ["MAV 13","62.26","Fiyat Üstünde ▲"],
                      ["MAV 21","62.37","Fiyat Altında ▼"],
                      ["MAV 55","62.45","Fiyat Altında ▼"],
                      ["MAV 89","62.06","Fiyat Üstünde ▲"],
                      ["MAV 144","60.98","Fiyat Üstünde ▲"],
                      ["MAV 233","59.01","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "ttkom-above" : "ttkom-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ttkom-section-title"><span className="ttkom-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ttkom-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "62.37–62.48", desc: "MAV 21, MAV 55 ve MAV 5 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "62.97 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "67.56 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "61.90–62.06", desc: "Günlük dip ve MAV 89 bölgesi" },
              { type: "sup", label: "Ana Destek", price: "60.98–59.01", desc: "MAV 144 ve MAV 233 destek bölgesi" },
              { type: "sup", label: "Derin Destek", price: "58.18 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="ttkom-sr-cell" key={s.label}>
                <div className={`ttkom-sr-type ${s.type}`}>{s.label}</div>
                <div className="ttkom-sr-price">{s.price}</div>
                <div className="ttkom-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="ttkom-section-title"><span className="ttkom-section-num">05</span> Genel Değerlendirme</div>
          <div className="ttkom-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TTKOM, son kapanışını <strong>62.30 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>62.97 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 62.48–62.97 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>61.90 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>59.01–58.18 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="ttkom-section-title"><span className="ttkom-section-num">06</span> Senaryo Analizi</div>
          <div className="ttkom-scenario-grid">
            <div className="ttkom-scenario-card bull">
              <div className="ttkom-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>62.48 TL MAV 5 üzerinde kapanış</li>
                <li>62.97 TL Bollinger orta bandının geri alınması</li>
                <li>62.97 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>RSI’ın 50 üzerine geçmesi</li>
                <li>Hedef: 62.97–67.56 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="ttkom-scenario-card bear">
              <div className="ttkom-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>61.90 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>60.98 TL MAV 144 desteğine geri çekilme</li>
                <li>Hedef: 60.98–59.01 TL destek bölgesi</li>
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


          <div className="ttkom-disclaimer">
            <div className="ttkom-disclaimer-head">
              <div className="ttkom-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="ttkom-footer">
            <div className="ttkom-footer-inner">
              <div className="ttkom-footer-brand">HOCA İLE BORSA</div>
              <div className="ttkom-footer-meta">
                TTKOM Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="ttkom-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
