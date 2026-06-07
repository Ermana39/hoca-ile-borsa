import Head from "next/head";

export default function EnkaiGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>ENKAI Teknik Analiz — 07.06.2026 | Hoca İle Borsa</title>
        <meta name="description" content="Enka İnşaat (ENKAI) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/enkai" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        .enkai-wrap *, .enkai-wrap *::before, .enkai-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .enkai-wrap {
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

        .enkai-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .enkai-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .enkai-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .enkai-hero-title em { color: var(--accent); font-style: normal; }
        .enkai-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .enkai-price-block { text-align: right; }
        .enkai-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .enkai-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .enkai-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .enkai-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .enkai-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .enkai-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .enkai-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .enkai-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .enkai-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .enkai-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .enkai-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .enkai-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .enkai-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .enkai-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .enkai-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .enkai-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .enkai-chart-img-wrap { position: relative; padding: 1rem; }
        .enkai-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .enkai-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .enkai-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .enkai-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .enkai-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .enkai-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .enkai-icon.blue   { background: rgba(10,187,255,.12); }
        .enkai-icon.gold   { background: rgba(245,200,66,.12); }
        .enkai-icon.green  { background: rgba(0,208,104,.12); }
        .enkai-icon.red    { background: rgba(255,77,106,.12); }
        .enkai-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .enkai-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .enkai-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .enkai-ind-row:last-child { border-bottom: none; }
        .enkai-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .enkai-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .enkai-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .enkai-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .enkai-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .enkai-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .enkai-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .enkai-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .enkai-progress-fill { height: 100%; border-radius: 3px; }

        .enkai-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .enkai-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .enkai-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .enkai-ma-table tr:last-child td { border-bottom: none; }
        .enkai-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .enkai-above { color: var(--green); }
        .enkai-below { color: var(--red); }

        .enkai-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .enkai-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .enkai-bol-bands { flex: 1; position: relative; height: 48px; }
        .enkai-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .enkai-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .enkai-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .enkai-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .enkai-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (111.67 - 93.35) / (111.67 - 90.89));
        }
        .enkai-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .enkai-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .enkai-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .enkai-sr-cell:hover { background: var(--bg3); }
        .enkai-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .enkai-sr-type.res { color: var(--red); }
        .enkai-sr-type.sup { color: var(--green); }
        .enkai-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .enkai-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .enkai-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .enkai-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .enkai-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .enkai-narrative p:last-child { margin-bottom: 0; }
        .enkai-narrative strong { color: var(--accent); font-weight: 600; }
        .enkai-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .enkai-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .enkai-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .enkai-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .enkai-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .enkai-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .enkai-scenario-card.bull .enkai-scenario-head { color: var(--green); }
        .enkai-scenario-card.bear .enkai-scenario-head { color: var(--red); }
        .enkai-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .enkai-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .enkai-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .enkai-scenario-card.bull li::before { color: var(--green); }
        .enkai-scenario-card.bear li::before { color: var(--red); }

        .enkai-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .enkai-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .enkai-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .enkai-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .enkai-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .enkai-disclaimer p + p { margin-top: .4rem; }

        .enkai-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .enkai-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .enkai-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .enkai-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .enkai-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .enkai-hero { grid-template-columns: 1fr; }
          .enkai-price-block { text-align: left; }
        }
        @media(max-width:768px) { .enkai-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .enkai-hero   { padding: 2rem 1rem 1.5rem; }
          .enkai-main   { padding: 1.5rem 1rem 3rem; }
          .enkai-footer { padding: 1.2rem 1rem; }
          .enkai-scenario-grid { grid-template-columns: 1fr; }
          .enkai-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="enkai-wrap">
        <section className="enkai-hero">
          <div>
            <div className="enkai-hero-label">Teknik Analiz Raporu</div>
            <h1 className="enkai-hero-title">ENKA<br /><em>İNŞAAT</em></h1>
            <p className="enkai-hero-sub">
              &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="enkai-price-block">
            <div className="enkai-price-main"><span className="enkai-price-currency">₺</span>93.35</div>
          </div>
        </section>

        <main className="enkai-main">
          <div className="enkai-section-title"><span className="enkai-section-num">01</span> Grafik</div>
          <div className="enkai-chart-wrap">
            <div className="enkai-chart-header">
              <span className="enkai-chart-title-text">ENKAI — Günlük Mum Grafiği</span>
              <div className="enkai-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`enkai-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="enkai-chart-img-wrap">
              <img
                src="/enkai-analiz.webp"
                alt="ENKAI Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="enkai-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="enkai-section-title"><span className="enkai-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="enkai-bol-card">
            <div className="enkai-bol-visual">
              <div className="enkai-bol-bands">
                <div className="enkai-bol-fill" />
                <div className="enkai-bol-upper" />
                <div className="enkai-bol-mid" />
                <div className="enkai-bol-lower" />
                <div className="enkai-bol-marker" />
              </div>
              <div className="enkai-bol-labels">
                <span>BOL U: 111.67</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 101.28</span>
                <span>BOL D: 90.89</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "111.67 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "101.28 TL", sig: "Ana Direnç", cls: "sell" },
              { name: "Alt Band (BOL D)", val: "90.89 TL", sig: "Yakın Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "20.78 TL", sig: "Geniş Bant", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "93.35 TL", sig: "Alt Banda Yakın", cls: "sell" },
            ].map((r, i) => (
              <div className="enkai-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="enkai-ind-name">{r.name}</span>
                <span className="enkai-ind-val">{r.val}</span>
                <span className={`enkai-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>101.28 TL</strong> altında ve alt banda yakın bölgede konumlanıyor. Bu yapı kısa vadede baskının sürdüğünü, toparlanma için öncelikle orta bandın geri alınması gerektiğini gösterir.
            </p>
          </div>

          <div className="enkai-section-title"><span className="enkai-section-num">03</span> İndikatörler</div>
          <div className="enkai-two-col">
            <div className="enkai-analysis-card">
              <div className="enkai-analysis-card-head">
                <div className="enkai-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="enkai-analysis-card-body">
                <div className="enkai-ind-row"><span className="enkai-ind-name">StocK</span><span className="enkai-ind-val">8.4788</span><span className="enkai-ind-signal neutral">Dip Bölge</span></div>
                <div className="enkai-ind-row"><span className="enkai-ind-name">StocD</span><span className="enkai-ind-val">14.2365</span><span className="enkai-ind-signal neutral">Zayıf</span></div>
                <div className="enkai-ind-row" style={{ borderBottom: "none" }}><span className="enkai-ind-name">Konum</span><span className="enkai-ind-val">Aşırı Satıma Yakın</span><span className="enkai-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="enkai-progress-label"><span>Aşırı Satım (0)</span><span>8.4788</span><span>Aşırı Alım (100)</span></div>
                  <div className="enkai-progress-bar"><div className="enkai-progress-fill" style={{ width: "8.48%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic dip bölgeye yakın seyrediyor. Bu durum tepki potansiyeli oluştursa da fiyat ortalamaların altında kaldığı için tek başına güçlü alım teyidi değildir.</p>
              </div>
            </div>

            <div className="enkai-analysis-card">
              <div className="enkai-analysis-card-head">
                <div className="enkai-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="enkai-analysis-card-body">
                <div className="enkai-ind-row"><span className="enkai-ind-name">MACD</span><span className="enkai-ind-val">-1.734430</span><span className="enkai-ind-signal sell">NEGATİF</span></div>
                <div className="enkai-ind-row"><span className="enkai-ind-name">Trigger</span><span className="enkai-ind-val">-0.741130</span><span className="enkai-ind-signal sell">Baskı</span></div>
                <div className="enkai-ind-row" style={{ borderBottom: "none" }}><span className="enkai-ind-name">Momentum</span><span className="enkai-ind-val">Zayıf</span><span className="enkai-ind-signal sell">Satış</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor; toparlanma için MACD'nin yeniden trigger üzerine çıkması izlenmeli.</p>
              </div>
            </div>

            <div className="enkai-analysis-card">
              <div className="enkai-analysis-card-head">
                <div className="enkai-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="enkai-analysis-card-body">
                <div className="enkai-ind-row"><span className="enkai-ind-name">RSI Değeri</span><span className="enkai-ind-val">37.24</span><span className="enkai-ind-signal sell">Zayıf</span></div>
                <div className="enkai-ind-row" style={{ borderBottom: "none" }}><span className="enkai-ind-name">Bölge</span><span className="enkai-ind-val">40 Altı</span><span className="enkai-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="enkai-progress-label"><span>30 (A.Satım)</span><span>37.24</span><span>70 (A.Alım)</span></div>
                  <div className="enkai-progress-bar"><div className="enkai-progress-fill" style={{ width: "37.24%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 40 altında zayıf bölgede. 50 seviyesi üzerine dönüş gelmeden kısa vadeli momentumun güçlendiğinden söz etmek zor.</p>
              </div>
            </div>

            <div className="enkai-analysis-card">
              <div className="enkai-analysis-card-head">
                <div className="enkai-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="enkai-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="enkai-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","95.80"],["MAV 13","98.27"],["MAV 21","99.48"],["MAV 55","98.58"],["MAV 89","95.48"],["MAV 144","90.33"],["MAV 233","83.11"]
                    ].map(([p,v]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={Number(v) > 93.35 ? "enkai-below" : "enkai-above"}>{Number(v) > 93.35 ? "Fiyat Altında ▼" : "Fiyat Üstünde ▲"}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="enkai-section-title"><span className="enkai-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="enkai-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "111.67 TL", desc: "Bollinger üst bandı / zirve sonrası ana direnç" },
              { type: "res", label: "Ara Direnç", price: "101.28 TL", desc: "Bollinger orta bandı ve ana toparlanma eşiği" },
              { type: "res", label: "Kısa Vadeli Direnç", price: "95.80 – 99.48", desc: "MAV 5/13/21 bölgesi" },
              { type: "sup", label: "Yakın Destek", price: "92.50 – 93.35", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "90.33 – 90.89", desc: "MAV 144 ve Bollinger alt bandı" },
              { type: "sup", label: "Orta Vadeli Destek", price: "83.11 TL", desc: "MAV 233 seviyesi" },
            ].map((s) => (
              <div className="enkai-sr-cell" key={s.label}>
                <div className={`enkai-sr-type ${s.type}`}>{s.label}</div>
                <div className="enkai-sr-price">{s.price}</div>
                <div className="enkai-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="enkai-section-title"><span className="enkai-section-num">05</span> Genel Değerlendirme</div>
          <div className="enkai-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>ENKAI, son dönemde 110 TL üzerindeki zirve bölgesinden gelen satışlarla geri çekilmiş ve güncel kapanışını <strong>93.35 TL</strong> seviyesinde gerçekleştirmiştir. Fiyat, kısa vadeli ortalamaların tamamının altında kaldığı için kısa vadeli teknik görünüm zayıftır.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta band olan 101.28 TL altında</strong> ve alt banda yakın bölgede bulunuyor. Bu konum satış baskısının sürdüğünü, toparlanma için önce orta bandın geri alınması gerektiğini gösterir.</p>
            <p>RSI <em>37.24</em> ile zayıf bölgede, MACD ise negatif bölgede ve trigger altında. Stochastic dip bölgeye yakın olduğu için tepki denemesi gelebilir; ancak bu tepkinin güç kazanması için fiyatın yeniden 95.80–99.48 TL bandı üzerine çıkması gerekir.</p>
            <p>En kritik seviye kısa vadede <strong>90.33–90.89 TL destek bölgesi</strong> olarak öne çıkıyor. Bu bölge korunursa tepki şansı devam eder; kırılması halinde satış baskısı orta vadeli desteklere doğru genişleyebilir.</p>
          </div>

          <div className="enkai-section-title"><span className="enkai-section-num">06</span> Senaryo Analizi</div>
          <div className="enkai-scenario-grid">
            <div className="enkai-scenario-card bull">
              <div className="enkai-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>95.80 TL MAV 5 üzerine dönüş</li>
                <li>98.27 – 99.48 TL kısa vadeli ortalama bandının aşılması</li>
                <li>101.28 TL Bollinger orta bandı üzerinde kapanış</li>
                <li>RSI’ın yeniden 50 üzerine taşınması</li>
                <li>Hedef: 105.00 – 111.67 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="enkai-scenario-card bear">
              <div className="enkai-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>92.50 TL günlük dip seviyesinin kırılması</li>
                <li>90.33 – 90.89 TL destek bölgesi altında kapanış</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>RSI’ın 40 altında zayıf seyrini sürdürmesi</li>
                <li>Hedef: 83.11 TL MAV 233 destek testi</li>
              </ul>
            </div>
          </div>

          <div className="enkai-disclaimer">
            <div className="enkai-disclaimer-head">
              <div className="enkai-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="enkai-footer">
            <div className="enkai-footer-inner">
              <div className="enkai-footer-brand">HOCA İLE BORSA</div>
              <div className="enkai-footer-meta">
                ENKAI Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="enkai-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
