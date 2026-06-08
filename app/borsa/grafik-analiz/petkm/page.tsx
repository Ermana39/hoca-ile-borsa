import Head from "next/head";
import Link from "next/link";

export default function PetkmGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>PETKM Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Petkim (PETKM) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/petkm" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .petkm-wrap *, .petkm-wrap *::before, .petkm-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .petkm-wrap {
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

        .petkm-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .petkm-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .petkm-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .petkm-hero-title em { color: var(--accent); font-style: normal; }
        .petkm-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .petkm-price-block { text-align: right; }
        .petkm-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .petkm-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .petkm-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .petkm-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .petkm-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .petkm-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .petkm-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .petkm-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .petkm-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .petkm-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .petkm-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .petkm-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .petkm-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .petkm-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .petkm-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .petkm-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .petkm-chart-img-wrap { position: relative; padding: 1rem; }
        .petkm-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .petkm-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .petkm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .petkm-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .petkm-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .petkm-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .petkm-icon.blue   { background: rgba(10,187,255,.12); }
        .petkm-icon.gold   { background: rgba(245,200,66,.12); }
        .petkm-icon.green  { background: rgba(0,208,104,.12); }
        .petkm-icon.red    { background: rgba(255,77,106,.12); }
        .petkm-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .petkm-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .petkm-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .petkm-ind-row:last-child { border-bottom: none; }
        .petkm-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .petkm-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .petkm-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .petkm-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .petkm-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .petkm-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .petkm-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .petkm-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .petkm-progress-fill { height: 100%; border-radius: 3px; }

        .petkm-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .petkm-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .petkm-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .petkm-ma-table tr:last-child td { border-bottom: none; }
        .petkm-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .petkm-above { color: var(--green); }
        .petkm-below { color: var(--red); }

        .petkm-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .petkm-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .petkm-bol-bands { flex: 1; position: relative; height: 48px; }
        .petkm-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .petkm-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .petkm-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .petkm-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .petkm-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (27.54 - 20.84) / (27.54 - 20.46));
        }
        .petkm-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .petkm-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .petkm-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .petkm-sr-cell:hover { background: var(--bg3); }
        .petkm-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .petkm-sr-type.res { color: var(--red); }
        .petkm-sr-type.sup { color: var(--green); }
        .petkm-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .petkm-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .petkm-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .petkm-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .petkm-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .petkm-narrative p:last-child { margin-bottom: 0; }
        .petkm-narrative strong { color: var(--accent); font-weight: 600; }
        .petkm-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .petkm-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .petkm-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .petkm-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .petkm-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .petkm-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .petkm-scenario-card.bull .petkm-scenario-head { color: var(--green); }
        .petkm-scenario-card.bear .petkm-scenario-head { color: var(--red); }
        .petkm-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .petkm-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .petkm-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .petkm-scenario-card.bull li::before { color: var(--green); }
        .petkm-scenario-card.bear li::before { color: var(--red); }

        .petkm-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .petkm-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .petkm-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .petkm-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .petkm-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .petkm-disclaimer p + p { margin-top: .4rem; }

        .petkm-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .petkm-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .petkm-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .petkm-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .petkm-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .petkm-hero { grid-template-columns: 1fr; }
          .petkm-price-block { text-align: left; }
        }
        @media(max-width:768px) { .petkm-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .petkm-hero   { padding: 2rem 1rem 1.5rem; }
          .petkm-main   { padding: 1.5rem 1rem 3rem; }
          .petkm-footer { padding: 1.2rem 1rem; }
          .petkm-scenario-grid { grid-template-columns: 1fr; }
          .petkm-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="petkm-wrap">
        <section className="petkm-hero">
          <div>
            <div className="petkm-hero-label">Teknik Analiz Raporu</div>
            <h1 className="petkm-hero-title">PETKİM<br /><em>PETROKİMYA</em></h1>
            <p className="petkm-hero-sub">
              BIST: PETKM &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="petkm-price-block">
            <div className="petkm-price-main"><span className="petkm-price-currency">₺</span>20.84</div>
          </div>
        </section>

        <main className="petkm-main">
          <div className="petkm-section-title"><span className="petkm-section-num">01</span> Grafik</div>
          <div className="petkm-chart-wrap">
            <div className="petkm-chart-header">
              <span className="petkm-chart-title-text">PETKM — Günlük Mum Grafiği</span>
              <div className="petkm-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`petkm-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="petkm-chart-img-wrap">
              <img
                src="/petkm-analiz.webp"
                alt="PETKM Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="petkm-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="petkm-section-title"><span className="petkm-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="petkm-bol-card">
            <div className="petkm-bol-visual">
              <div className="petkm-bol-bands">
                <div className="petkm-bol-fill" />
                <div className="petkm-bol-upper" />
                <div className="petkm-bol-mid" />
                <div className="petkm-bol-lower" />
                <div className="petkm-bol-marker" />
              </div>
              <div className="petkm-bol-labels">
                <span>BOL U: 27.54</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 24.00</span>
                <span>BOL D: 20.46</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "27.54 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "24.00 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "20.46 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "7.08 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "20.84 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="petkm-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="petkm-ind-name">{r.name}</span>
                <span className="petkm-ind-val">{r.val}</span>
                <span className={`petkm-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>24.00 TL</strong> seviyesinin oldukça altında ve alt banda yakın bölgede kapanış yapmış durumda. <strong style={{ color: "var(--accent)" }}>20.46 TL</strong> alt bandı kısa vadede kritik destek olarak takip edilmelidir.
            </p>
          </div>

          <div className="petkm-section-title"><span className="petkm-section-num">03</span> İndikatörler</div>
          <div className="petkm-two-col">
            <div className="petkm-analysis-card">
              <div className="petkm-analysis-card-head">
                <div className="petkm-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="petkm-analysis-card-body">
                <div className="petkm-ind-row"><span className="petkm-ind-name">StocK</span><span className="petkm-ind-val">3.71</span><span className="petkm-ind-signal neutral">Nötr</span></div>
                <div className="petkm-ind-row"><span className="petkm-ind-name">StocD</span><span className="petkm-ind-val">7.19</span><span className="petkm-ind-signal buy">Tepki</span></div>
                <div className="petkm-ind-row" style={{ borderBottom: "none" }}><span className="petkm-ind-name">Konum</span><span className="petkm-ind-val">Aşırı Satım</span><span className="petkm-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="petkm-progress-label"><span>Aşırı Satım (0)</span><span>3.71</span><span>Aşırı Alım (100)</span></div>
                  <div className="petkm-progress-bar"><div className="petkm-progress-fill" style={{ width: "3.71%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı satım bölgesinde ve K çizgisi D çizgisinin altında. Tepki potansiyeli oluşabilir ancak mevcut görünüm hâlâ zayıf.</p>
              </div>
            </div>

            <div className="petkm-analysis-card">
              <div className="petkm-analysis-card-head">
                <div className="petkm-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="petkm-analysis-card-body">
                <div className="petkm-ind-row"><span className="petkm-ind-name">MACD</span><span className="petkm-ind-val">-0.3568</span><span className="petkm-ind-signal sell">Negatif</span></div>
                <div className="petkm-ind-row"><span className="petkm-ind-name">Trigger</span><span className="petkm-ind-val">0.1746</span><span className="petkm-ind-signal sell">Baskı</span></div>
                <div className="petkm-ind-row" style={{ borderBottom: "none" }}><span className="petkm-ind-name">Momentum</span><span className="petkm-ind-val">Zayıf</span><span className="petkm-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında belirgin zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="petkm-analysis-card">
              <div className="petkm-analysis-card-head">
                <div className="petkm-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="petkm-analysis-card-body">
                <div className="petkm-ind-row"><span className="petkm-ind-name">RSI Değeri</span><span className="petkm-ind-val">37.29</span><span className="petkm-ind-signal neutral">Zayıf</span></div>
                <div className="petkm-ind-row" style={{ borderBottom: "none" }}><span className="petkm-ind-name">Bölge</span><span className="petkm-ind-val">Nötr-Alt</span><span className="petkm-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="petkm-progress-label"><span>30 (A.Satım)</span><span>37.29</span><span>70 (A.Alım)</span></div>
                  <div className="petkm-progress-bar"><div className="petkm-progress-fill" style={{ width: "37.29%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 40 seviyesinin altında ve zayıf bölgede. 40 üzerine toparlanma gelmeden güçlenme sinyali sınırlı kalır.</p>
              </div>
            </div>

            <div className="petkm-analysis-card">
              <div className="petkm-analysis-card-head">
                <div className="petkm-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="petkm-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="petkm-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","21.85","Fiyat Altında ▼"],
                      ["MAV 13","22.88","Fiyat Altında ▼"],
                      ["MAV 21","23.18","Fiyat Altında ▼"],
                      ["MAV 55","22.32","Fiyat Altında ▼"],
                      ["MAV 89","21.35","Fiyat Altında ▼"],
                      ["MAV 144","20.36","Fiyat Üstünde ▲"],
                      ["MAV 233","19.61","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "petkm-above" : "petkm-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="petkm-section-title"><span className="petkm-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="petkm-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "21.35–21.85", desc: "MAV 89 ve MAV 5 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "22.32–24.00", desc: "MAV 55 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "27.54 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "20.46–20.24", desc: "Bollinger alt bandı ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "20.36 TL", desc: "MAV 144 destek bölgesi" },
              { type: "sup", label: "Derin Destek", price: "19.61 TL", desc: "MAV 233 uzun vadeli destek" },
            ].map((s) => (
              <div className="petkm-sr-cell" key={s.label}>
                <div className={`petkm-sr-type ${s.type}`}>{s.label}</div>
                <div className="petkm-sr-price">{s.price}</div>
                <div className="petkm-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="petkm-section-title"><span className="petkm-section-num">05</span> Genel Değerlendirme</div>
          <div className="petkm-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>PETKM, son kapanışını <strong>20.84 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>24.00 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 21.85–24.00 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>188.60 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>19.61–20.46 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="petkm-section-title"><span className="petkm-section-num">06</span> Senaryo Analizi</div>
          <div className="petkm-scenario-grid">
            <div className="petkm-scenario-card bull">
              <div className="petkm-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>21.35 TL MAV 89 üzerinde kapanış</li>
                <li>21.85 TL MAV 5 seviyesinin geri alınması</li>
                <li>24.00 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 22.32–24.00 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="petkm-scenario-card bear">
              <div className="petkm-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>188.60 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altında kalması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>20.36 TL MAV 144 desteğine geri çekilme</li>
                <li>Hedef: 20.36–19.61 TL destek bölgesi</li>
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


          <div className="petkm-disclaimer">
            <div className="petkm-disclaimer-head">
              <div className="petkm-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="petkm-footer">
            <div className="petkm-footer-inner">
              <div className="petkm-footer-brand">HOCA İLE BORSA</div>
              <div className="petkm-footer-meta">
                PETKM Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="petkm-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
