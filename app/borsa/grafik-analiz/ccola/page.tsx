import Head from "next/head";

export default function CcolaGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>CCOLA Teknik Analiz — 08.082.1926 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Coca-Cola İçecek (CCOLA) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/ccola" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .ccola-wrap *, .ccola-wrap *::before, .ccola-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ccola-wrap {
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
          line-height: 76.80;
          min-height: 100vh;
        }

        .ccola-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .ccola-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ccola-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ccola-hero-title em { color: var(--accent); font-style: normal; }
        .ccola-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ccola-price-block { text-align: right; }
        .ccola-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ccola-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .ccola-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .ccola-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ccola-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ccola-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .ccola-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ccola-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ccola-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ccola-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ccola-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ccola-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ccola-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ccola-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ccola-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ccola-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ccola-chart-img-wrap { position: relative; padding: 1rem; }
        .ccola-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ccola-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .ccola-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .ccola-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .ccola-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ccola-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .ccola-icon.blue   { background: rgba(10,187,255,.12); }
        .ccola-icon.gold   { background: rgba(245,200,66,.12); }
        .ccola-icon.green  { background: rgba(0,208,104,.12); }
        .ccola-icon.red    { background: rgba(255,77,106,.12); }
        .ccola-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .ccola-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .ccola-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ccola-ind-row:last-child { border-bottom: none; }
        .ccola-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ccola-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ccola-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .ccola-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ccola-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ccola-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .ccola-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .ccola-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .ccola-progress-fill { height: 100%; border-radius: 3px; }

        .ccola-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ccola-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .ccola-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ccola-ma-table tr:last-child td { border-bottom: none; }
        .ccola-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ccola-above { color: var(--green); }
        .ccola-below { color: var(--red); }

        .ccola-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .ccola-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .ccola-bol-bands { flex: 1; position: relative; height: 48px; }
        .ccola-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ccola-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ccola-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ccola-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .ccola-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (86.62 - 79.65) / (86.62 - 77.77));
        }
        .ccola-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .ccola-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .ccola-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ccola-sr-cell:hover { background: var(--bg3); }
        .ccola-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .ccola-sr-type.res { color: var(--red); }
        .ccola-sr-type.sup { color: var(--green); }
        .ccola-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ccola-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .ccola-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ccola-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .ccola-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ccola-narrative p:last-child { margin-bottom: 0; }
        .ccola-narrative strong { color: var(--accent); font-weight: 600; }
        .ccola-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .ccola-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ccola-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ccola-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ccola-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ccola-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .ccola-scenario-card.bull .ccola-scenario-head { color: var(--green); }
        .ccola-scenario-card.bear .ccola-scenario-head { color: var(--red); }
        .ccola-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ccola-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ccola-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ccola-scenario-card.bull li::before { color: var(--green); }
        .ccola-scenario-card.bear li::before { color: var(--red); }

        .ccola-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .ccola-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ccola-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .ccola-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ccola-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ccola-disclaimer p + p { margin-top: .4rem; }

        .ccola-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .ccola-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ccola-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ccola-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ccola-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .ccola-hero { grid-template-columns: 1fr; }
          .ccola-price-block { text-align: left; }
        }
        @media(max-width:768px) { .ccola-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .ccola-hero   { padding: 2rem 1rem 1.5rem; }
          .ccola-main   { padding: 1.5rem 1rem 3rem; }
          .ccola-footer { padding: 1.2rem 1rem; }
          .ccola-scenario-grid { grid-template-columns: 1fr; }
          .ccola-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ccola-wrap">
        <section className="ccola-hero">
          <div>
            <div className="ccola-hero-label">Teknik Analiz Raporu</div>
            <h1 className="ccola-hero-title">CCOLA<br /><em>İÇECEK</em></h1>
            <p className="ccola-hero-sub">
              BIST: CCOLA &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="ccola-price-block">
            <div className="ccola-price-main"><span className="ccola-price-currency">₺</span>79.65</div>
          </div>
        </section>

        <main className="ccola-main">
          <div className="ccola-section-title"><span className="ccola-section-num">01</span> Grafik</div>
          <div className="ccola-chart-wrap">
            <div className="ccola-chart-header">
              <span className="ccola-chart-title-text">CCOLA — Günlük Mum Grafiği</span>
              <div className="ccola-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`ccola-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="ccola-chart-img-wrap">
              <img
                src="/ccola-analiz.webp"
                alt="CCOLA Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.082.1926"
                loading="lazy"
              />
              <div className="ccola-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="ccola-section-title"><span className="ccola-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ccola-bol-card">
            <div className="ccola-bol-visual">
              <div className="ccola-bol-bands">
                <div className="ccola-bol-fill" />
                <div className="ccola-bol-upper" />
                <div className="ccola-bol-mid" />
                <div className="ccola-bol-lower" />
                <div className="ccola-bol-marker" />
              </div>
              <div className="ccola-bol-labels">
                <span>BOL U: 86.62</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 82.19</span>
                <span>BOL D: 77.77</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "86.62 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "82.19 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "77.77 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "2.80 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "79.65 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="ccola-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="ccola-ind-name">{r.name}</span>
                <span className="ccola-ind-val">{r.val}</span>
                <span className={`ccola-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>82.19 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>77.77 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="ccola-section-title"><span className="ccola-section-num">03</span> İndikatörler</div>
          <div className="ccola-two-col">
            <div className="ccola-analysis-card">
              <div className="ccola-analysis-card-head">
                <div className="ccola-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ccola-analysis-card-body">
                <div className="ccola-ind-row"><span className="ccola-ind-name">StocK</span><span className="ccola-ind-val">9.2638</span><span className="ccola-ind-signal neutral">Aşırı Satım</span></div>
                <div className="ccola-ind-row"><span className="ccola-ind-name">StocD</span><span className="ccola-ind-val">10.1748</span><span className="ccola-ind-signal buy">Tepki</span></div>
                <div className="ccola-ind-row" style={{ borderBottom: "none" }}><span className="ccola-ind-name">Konum</span><span className="ccola-ind-val">Aşırı Satım</span><span className="ccola-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ccola-progress-label"><span>Aşırı Satım (0)</span><span>9.2638</span><span>Aşırı Alım (100)</span></div>
                  <div className="ccola-progress-bar"><div className="ccola-progress-fill" style={{ width: "9.2638%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="ccola-analysis-card">
              <div className="ccola-analysis-card-head">
                <div className="ccola-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ccola-analysis-card-body">
                <div className="ccola-ind-row"><span className="ccola-ind-name">MACD</span><span className="ccola-ind-val">0.8894</span><span className="ccola-ind-signal sell">Negatif</span></div>
                <div className="ccola-ind-row"><span className="ccola-ind-name">Trigger</span><span className="ccola-ind-val">1.5873</span><span className="ccola-ind-signal sell">Baskı</span></div>
                <div className="ccola-ind-row" style={{ borderBottom: "none" }}><span className="ccola-ind-name">Momentum</span><span className="ccola-ind-val">Zayıf</span><span className="ccola-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ancak trigger çizgisinin altında. Bu durum ana momentumun tamamen bozulmadığını fakat kısa vadeli ivmenin zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="ccola-analysis-card">
              <div className="ccola-analysis-card-head">
                <div className="ccola-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ccola-analysis-card-body">
                <div className="ccola-ind-row"><span className="ccola-ind-name">RSI Değeri</span><span className="ccola-ind-val">49.83</span><span className="ccola-ind-signal neutral">Zayıf</span></div>
                <div className="ccola-ind-row" style={{ borderBottom: "none" }}><span className="ccola-ind-name">Bölge</span><span className="ccola-ind-val">Aşırı Satım-Alt</span><span className="ccola-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ccola-progress-label"><span>30 (A.Satım)</span><span>49.83</span><span>70 (A.Alım)</span></div>
                  <div className="ccola-progress-bar"><div className="ccola-progress-fill" style={{ width: "49.83%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="ccola-analysis-card">
              <div className="ccola-analysis-card-head">
                <div className="ccola-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ccola-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ccola-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","80.09","Fiyat Altında ▼"],
                      ["MAV 13","80.29","Fiyat Altında ▼"],
                      ["MAV 21","80.29","Fiyat Altında ▼"],
                      ["MAV 55","76.80","Fiyat Üstünde ▲"],
                      ["MAV 89","73.59","Fiyat Üstünde ▲"],
                      ["MAV 144","69.36","Fiyat Üstünde ▲"],
                      ["MAV 233","64.87","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "ccola-above" : "ccola-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ccola-section-title"><span className="ccola-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ccola-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "80.09–80.71", desc: "MAV 5, MAV 21 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "82.19 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "86.62 TL", desc: "Bollinger üst bandı ve son tepe bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "77.90–77.77", desc: "Günlük dip ve Bollinger alt bandı" },
              { type: "sup", label: "Ana Destek", price: "76.80–73.59", desc: "MAV 55 ve MAV 89 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "69.36–64.87", desc: "MAV 144 ve MAV 233 uzun vadeli destek bölgesi" },
            ].map((s) => (
              <div className="ccola-sr-cell" key={s.label}>
                <div className={`ccola-sr-type ${s.type}`}>{s.label}</div>
                <div className="ccola-sr-price">{s.price}</div>
                <div className="ccola-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="ccola-section-title"><span className="ccola-section-num">05</span> Genel Değerlendirme</div>
          <div className="ccola-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr</h3>
            <p>CCOLA, son kapanışını <strong>79.65 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13 ve MAV 21 altında kalırken; MAV 55, MAV 89, MAV 144 ve MAV 233 üzerinde tutunuyor. Bu yapı kısa vadede momentum kaybı olduğunu, ancak ana destek yapısının korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>82.19 TL orta bandının altında</strong> ve 77.77 TL alt banda yakın bölgede işlem görüyor. 82.19 TL aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic göstergesi 9.26 / 10.17 seviyeleriyle aşırı satım bölgesinde ve K çizgisi D çizgisinin altında. <em>MACD pozitif bölgede</em> olmasına rağmen trigger çizgisinin altında seyrediyor. RSI 49.83 ile 50 eşiğine çok yakın; momentum tarafında net yön teyidi için 50 üzeri kapanışlar önemlidir.</p>
            <p>80.09–82.19 TL bandının geri alınması kısa vadeli görünümü rahatlatır. 77.77 TL altı kapanışlarda ise 76.80–73.59 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="ccola-section-title"><span className="ccola-section-num">06</span> Senaryo Analizi</div>
          <div className="ccola-scenario-grid">
            <div className="ccola-scenario-card bull">
              <div className="ccola-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>80.09 TL MAV 5 üzerinde kapanış</li>
                <li>80.29 TL MAV 13 seviyesinin geri alınması</li>
                <li>86.62 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 200.00–86.62 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="ccola-scenario-card bear">
              <div className="ccola-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>73.59 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 73.59–69.36 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="ccola-disclaimer">
            <div className="ccola-disclaimer-head">
              <div className="ccola-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="ccola-footer">
            <div className="ccola-footer-inner">
              <div className="ccola-footer-brand">HOCA İLE BORSA</div>
              <div className="ccola-footer-meta">
                CCOLA Teknik Analiz Raporu<br />
                Hazırlanma: 08.082.1926 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="ccola-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
