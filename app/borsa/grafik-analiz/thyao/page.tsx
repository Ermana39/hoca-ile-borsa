import Head from "next/head";
import Link from "next/link";

export default function ThyaoGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>THYAO Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="Türk Hava Yolları (THYAO) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/thyao" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .thyao-wrap *, .thyao-wrap *::before, .thyao-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .thyao-wrap {
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

        .thyao-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .thyao-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .thyao-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .thyao-hero-title em { color: var(--accent); font-style: normal; }
        .thyao-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .thyao-price-block { text-align: right; }
        .thyao-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .thyao-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .thyao-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .thyao-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .thyao-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .thyao-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .thyao-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .thyao-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .thyao-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .thyao-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .thyao-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .thyao-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .thyao-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .thyao-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .thyao-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .thyao-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .thyao-chart-img-wrap { position: relative; padding: 1rem; }
        .thyao-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .thyao-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .thyao-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .thyao-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .thyao-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .thyao-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .thyao-icon.blue   { background: rgba(10,187,255,.12); }
        .thyao-icon.gold   { background: rgba(245,200,66,.12); }
        .thyao-icon.green  { background: rgba(0,208,104,.12); }
        .thyao-icon.red    { background: rgba(255,77,106,.12); }
        .thyao-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .thyao-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .thyao-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .thyao-ind-row:last-child { border-bottom: none; }
        .thyao-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .thyao-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .thyao-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .thyao-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .thyao-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .thyao-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .thyao-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .thyao-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .thyao-progress-fill { height: 100%; border-radius: 3px; }

        .thyao-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .thyao-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .thyao-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .thyao-ma-table tr:last-child td { border-bottom: none; }
        .thyao-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .thyao-above { color: var(--green); }
        .thyao-below { color: var(--red); }

        .thyao-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .thyao-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .thyao-bol-bands { flex: 1; position: relative; height: 48px; }
        .thyao-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .thyao-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .thyao-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .thyao-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .thyao-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (316.81 - 297.00) / (316.81 - 282.12));
        }
        .thyao-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .thyao-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .thyao-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .thyao-sr-cell:hover { background: var(--bg3); }
        .thyao-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .thyao-sr-type.res { color: var(--red); }
        .thyao-sr-type.sup { color: var(--green); }
        .thyao-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .thyao-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .thyao-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .thyao-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .thyao-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .thyao-narrative p:last-child { margin-bottom: 0; }
        .thyao-narrative strong { color: var(--accent); font-weight: 600; }
        .thyao-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .thyao-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .thyao-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .thyao-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .thyao-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .thyao-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .thyao-scenario-card.bull .thyao-scenario-head { color: var(--green); }
        .thyao-scenario-card.bear .thyao-scenario-head { color: var(--red); }
        .thyao-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .thyao-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .thyao-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .thyao-scenario-card.bull li::before { color: var(--green); }
        .thyao-scenario-card.bear li::before { color: var(--red); }

        .thyao-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .thyao-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .thyao-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .thyao-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .thyao-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .thyao-disclaimer p + p { margin-top: .4rem; }

        .thyao-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .thyao-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .thyao-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .thyao-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .thyao-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .thyao-hero { grid-template-columns: 1fr; }
          .thyao-price-block { text-align: left; }
        }
        @media(max-width:768px) { .thyao-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .thyao-hero   { padding: 2rem 1rem 1.5rem; }
          .thyao-main   { padding: 1.5rem 1rem 3rem; }
          .thyao-footer { padding: 1.2rem 1rem; }
          .thyao-scenario-grid { grid-template-columns: 1fr; }
          .thyao-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="thyao-wrap">
        <section className="thyao-hero">
          <div>
            <div className="thyao-hero-label">Teknik Analiz Raporu</div>
            <h1 className="thyao-hero-title">TÜRK HAVA<br /><em>YOLLARI</em></h1>
            <p className="thyao-hero-sub">
              BIST: THYAO &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="thyao-price-block">
            <div className="thyao-price-main"><span className="thyao-price-currency">₺</span>297.00</div>
          </div>
        </section>

        <main className="thyao-main">
          <div className="thyao-section-title"><span className="thyao-section-num">01</span> Grafik</div>
          <div className="thyao-chart-wrap">
            <div className="thyao-chart-header">
              <span className="thyao-chart-title-text">THYAO — Günlük Mum Grafiği</span>
              <div className="thyao-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`thyao-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="thyao-chart-img-wrap">
              <img
                src="/thyao-analiz.webp"
                alt="THYAO Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="thyao-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="thyao-section-title"><span className="thyao-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="thyao-bol-card">
            <div className="thyao-bol-visual">
              <div className="thyao-bol-bands">
                <div className="thyao-bol-fill" />
                <div className="thyao-bol-upper" />
                <div className="thyao-bol-mid" />
                <div className="thyao-bol-lower" />
                <div className="thyao-bol-marker" />
              </div>
              <div className="thyao-bol-labels">
                <span>BOL U: 316.81</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 299.46</span>
                <span>BOL D: 282.12</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "316.81 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "299.46 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "282.12 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "34.69 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "297.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="thyao-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="thyao-ind-name">{r.name}</span>
                <span className="thyao-ind-val">{r.val}</span>
                <span className={`thyao-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>299.46 TL</strong> seviyesinin hemen altında kapanış yapmış durumda. Bu bölge kısa vadeli yön tayini açısından kritik eşik konumunda; aşağıda <strong style={{ color: "var(--accent)" }}>282.12 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="thyao-section-title"><span className="thyao-section-num">03</span> İndikatörler</div>
          <div className="thyao-two-col">
            <div className="thyao-analysis-card">
              <div className="thyao-analysis-card-head">
                <div className="thyao-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="thyao-analysis-card-body">
                <div className="thyao-ind-row"><span className="thyao-ind-name">StocK</span><span className="thyao-ind-val">92.41</span><span className="thyao-ind-signal neutral">Nötr</span></div>
                <div className="thyao-ind-row"><span className="thyao-ind-name">StocD</span><span className="thyao-ind-val">88.97</span><span className="thyao-ind-signal buy">Tepki</span></div>
                <div className="thyao-ind-row" style={{ borderBottom: "none" }}><span className="thyao-ind-name">Konum</span><span className="thyao-ind-val">Aşırı Alım</span><span className="thyao-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="thyao-progress-label"><span>Aşırı Satım (0)</span><span>92.41</span><span>Aşırı Alım (100)</span></div>
                  <div className="thyao-progress-bar"><div className="thyao-progress-fill" style={{ width: "92.41%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı alım bölgesinde ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki güçlü görünse de fiyatın ortalamaların altında kalması nedeniyle teyit zayıf.</p>
              </div>
            </div>

            <div className="thyao-analysis-card">
              <div className="thyao-analysis-card-head">
                <div className="thyao-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="thyao-analysis-card-body">
                <div className="thyao-ind-row"><span className="thyao-ind-name">MACD</span><span className="thyao-ind-val">-3.3903</span><span className="thyao-ind-signal sell">Negatif</span></div>
                <div className="thyao-ind-row"><span className="thyao-ind-name">Trigger</span><span className="thyao-ind-val">-3.7996</span><span className="thyao-ind-signal sell">Baskı</span></div>
                <div className="thyao-ind-row" style={{ borderBottom: "none" }}><span className="thyao-ind-name">Momentum</span><span className="thyao-ind-val">Zayıf</span><span className="thyao-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin üzerinde. Bu durum kısa vadede tepki isteği olduğunu, fakat ana momentumun hâlâ zayıf kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="thyao-analysis-card">
              <div className="thyao-analysis-card-head">
                <div className="thyao-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="thyao-analysis-card-body">
                <div className="thyao-ind-row"><span className="thyao-ind-name">RSI Değeri</span><span className="thyao-ind-val">47.06</span><span className="thyao-ind-signal neutral">Zayıf</span></div>
                <div className="thyao-ind-row" style={{ borderBottom: "none" }}><span className="thyao-ind-name">Bölge</span><span className="thyao-ind-val">Nötr-Alt</span><span className="thyao-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="thyao-progress-label"><span>30 (A.Satım)</span><span>47.06</span><span>70 (A.Alım)</span></div>
                  <div className="thyao-progress-bar"><div className="thyao-progress-fill" style={{ width: "47.06%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen altında. Bu durum kısa vadeli momentumun henüz tam güç kazanmadığını gösterir.</p>
              </div>
            </div>

            <div className="thyao-analysis-card">
              <div className="thyao-analysis-card-head">
                <div className="thyao-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="thyao-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="thyao-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","297.13","Fiyat Altında ▼"],
                      ["MAV 13","297.65","Fiyat Altında ▼"],
                      ["MAV 21","299.76","Fiyat Altında ▼"],
                      ["MAV 55","302.78","Fiyat Altında ▼"],
                      ["MAV 89","302.13","Fiyat Altında ▼"],
                      ["MAV 144","300.63","Fiyat Altında ▼"],
                      ["MAV 233","298.23","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "thyao-above" : "thyao-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="thyao-section-title"><span className="thyao-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="thyao-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "297.13–297.65", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "299.46–300.63", desc: "Bollinger orta bandı, MAV 21 ve MAV 144 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "302.13–316.81", desc: "MAV 89/55 bölgesi ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "295.25–297.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "282.12 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "270.00–275.00", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="thyao-sr-cell" key={s.label}>
                <div className={`thyao-sr-type ${s.type}`}>{s.label}</div>
                <div className="thyao-sr-price">{s.price}</div>
                <div className="thyao-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="thyao-section-title"><span className="thyao-section-num">05</span> Genel Değerlendirme</div>
          <div className="thyao-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>THYAO, son kapanışını <strong>297.00 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>299.46 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 297.13–299.46 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>295.25 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>298.23–282.12 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="thyao-section-title"><span className="thyao-section-num">06</span> Senaryo Analizi</div>
          <div className="thyao-scenario-grid">
            <div className="thyao-scenario-card bull">
              <div className="thyao-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>297.13 TL MAV 5 üzerinde kapanış</li>
                <li>297.65 TL MAV 13 seviyesinin geri alınması</li>
                <li>299.46 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 299.46–302.78 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="thyao-scenario-card bear">
              <div className="thyao-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>295.25 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>282.12 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 282.12 TL destek testi</li>
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


          <div className="thyao-disclaimer">
            <div className="thyao-disclaimer-head">
              <div className="thyao-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="thyao-footer">
            <div className="thyao-footer-inner">
              <div className="thyao-footer-brand">HOCA İLE BORSA</div>
              <div className="thyao-footer-meta">
                THYAO Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="thyao-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
