import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOAS Teknik Analiz — 06.06.2026",
  description:
    "Doğuş Otomotiv (DOAS) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/doas",
  },
};

export default function DoasGrafikAnaliz() {
  return (
    <>


      <style>{`
        .doas-wrap *, .doas-wrap *::before, .doas-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .doas-wrap {
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

        /* HERO */
        .doas-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .doas-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .doas-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .doas-hero-title em { color: var(--accent); font-style: normal; }
        .doas-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .doas-price-block { text-align: right; }
        .doas-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .doas-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .doas-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .doas-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .doas-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .doas-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .doas-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .doas-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .doas-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .doas-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .doas-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .doas-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .doas-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .doas-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .doas-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .doas-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .doas-chart-img-wrap { position: relative; padding: 1rem; }
        .doas-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .doas-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .doas-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .doas-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .doas-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .doas-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .doas-icon.blue   { background: rgba(10,187,255,.12); }
        .doas-icon.gold   { background: rgba(245,200,66,.12); }
        .doas-icon.green  { background: rgba(0,208,104,.12); }
        .doas-icon.red    { background: rgba(255,77,106,.12); }
        .doas-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .doas-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .doas-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .doas-ind-row:last-child { border-bottom: none; }
        .doas-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .doas-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .doas-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .doas-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .doas-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .doas-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .doas-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .doas-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .doas-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .doas-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .doas-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .doas-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .doas-ma-table tr:last-child td { border-bottom: none; }
        .doas-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .doas-above { color: var(--green); }
        .doas-below { color: var(--red); }

        /* BOLLINGER */
        .doas-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .doas-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .doas-bol-bands { flex: 1; position: relative; height: 48px; }
        .doas-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .doas-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .doas-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .doas-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .doas-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (647.30 - 624.00) / (647.30 - 438.57));
        }
        .doas-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .doas-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .doas-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .doas-sr-cell:hover { background: var(--bg3); }
        .doas-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .doas-sr-type.res { color: var(--red); }
        .doas-sr-type.sup { color: var(--green); }
        .doas-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .doas-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .doas-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .doas-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .doas-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .doas-narrative p:last-child { margin-bottom: 0; }
        .doas-narrative strong { color: var(--accent); font-weight: 600; }
        .doas-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .doas-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .doas-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .doas-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .doas-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .doas-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .doas-scenario-card.bull .doas-scenario-head { color: var(--green); }
        .doas-scenario-card.bear .doas-scenario-head { color: var(--red); }
        .doas-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .doas-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .doas-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .doas-scenario-card.bull li::before { color: var(--green); }
        .doas-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .doas-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .doas-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .doas-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .doas-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .doas-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .doas-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .doas-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .doas-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .doas-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .doas-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .doas-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .doas-hero { grid-template-columns: 1fr; }
          .doas-price-block { text-align: left; }
        }
        @media(max-width:768px) { .doas-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .doas-hero   { padding: 2rem 1rem 1.5rem; }
          .doas-main   { padding: 1.5rem 1rem 3rem; }
          .doas-footer { padding: 1.2rem 1rem; }
          .doas-scenario-grid { grid-template-columns: 1fr; }
          .doas-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="doas-wrap">
        {/* HERO */}
        <section className="doas-hero">
          <div>
            <div className="doas-hero-label">Teknik Analiz Raporu</div>
            <h1 className="doas-hero-title">DOĞUŞ<br /><em>OTOMOTİV</em></h1>
            <p className="doas-hero-sub">
              &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="doas-price-block">
            <div className="doas-price-main"><span className="doas-price-currency">₺</span>183.10</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="doas-main">
          {/* CHART */}
          <div className="doas-section-title"><span className="doas-section-num">01</span> Grafik</div>
          <div className="doas-chart-wrap">
            <div className="doas-chart-header">
              <span className="doas-chart-title-text">DOAS — Günlük Mum Grafiği</span>
              <div className="doas-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`doas-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="doas-chart-img-wrap">
              <img
                src="/doas-analiz.webp"
                alt="DOAS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="doas-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="doas-section-title"><span className="doas-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="doas-bol-card">
            <div className="doas-bol-visual">
              <div className="doas-bol-bands">
                <div className="doas-bol-fill" />
                <div className="doas-bol-upper" />
                <div className="doas-bol-mid" />
                <div className="doas-bol-lower" />
                <div className="doas-bol-marker" style={{ top: "calc(100% * (190.35 - 183.10) / (190.35 - 177.22))" }} />
              </div>
              <div className="doas-bol-labels">
                <span>BOL U: 190.35</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 183.79</span>
                <span>BOL D: 177.22</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",   val: "190.35 TL", sig: "Direnç",          cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "183.79 TL", sig: "Kritik Eşik",     cls: "neutral" },
              { name: "Alt Band (BOL D)",   val: "177.22 TL", sig: "Güçlü Destek",    cls: "buy" },
              { name: "Bant Genişliği",     val: "13.13 TL",  sig: "Orta Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",     val: "183.10 TL", sig: "Orta Band Altı",  cls: "sell" },
            ].map((r, i) => (
              <div className="doas-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="doas-ind-name">{r.name}</span>
                <span className="doas-ind-val">{r.val}</span>
                <span className={`doas-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>183.79 TL</strong> seviyesinin hemen altında kapanış yaptı. Bu bölge kısa vadeli yön açısından kritik eşik konumunda. Orta bandın yeniden üzerine çıkılması toparlanmayı desteklerken, altında kalıcılıkta <strong style={{ color: "var(--accent)" }}>177.22 TL</strong> alt banda doğru baskı artabilir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="doas-section-title"><span className="doas-section-num">03</span> İndikatörler</div>
          <div className="doas-two-col">
            {/* Stochastic */}
            <div className="doas-analysis-card">
              <div className="doas-analysis-card-head">
                <div className="doas-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="doas-analysis-card-body">
                <div className="doas-ind-row"><span className="doas-ind-name">StocK</span><span className="doas-ind-val">54.94</span><span className="doas-ind-signal sell">ZAYIF</span></div>
                <div className="doas-ind-row"><span className="doas-ind-name">StocD</span><span className="doas-ind-val">61.66</span><span className="doas-ind-signal neutral">İZLE</span></div>
                <div className="doas-ind-row" style={{ borderBottom: "none" }}><span className="doas-ind-name">Konum</span><span className="doas-ind-val">Nötr</span><span className="doas-ind-signal neutral">Kararsız</span></div>
                <div>
                  <div className="doas-progress-label"><span>Aşırı Satım (0)</span><span>54.94</span><span>Aşırı Alım (100)</span></div>
                  <div className="doas-progress-bar"><div className="doas-progress-fill" style={{ width: "54.94%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D çizgisinin altında. Bu görünüm kısa vadeli tepki isteğinin zayıfladığını ve yön teyidi için fiyatın dirençleri geri alması gerektiğini gösterir.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="doas-analysis-card">
              <div className="doas-analysis-card-head">
                <div className="doas-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="doas-analysis-card-body">
                <div className="doas-ind-row"><span className="doas-ind-name">MACD</span><span className="doas-ind-val">0.2401</span><span className="doas-ind-signal buy">POZİTİF</span></div>
                <div className="doas-ind-row"><span className="doas-ind-name">Trigger</span><span className="doas-ind-val">−0.1716</span><span className="doas-ind-signal buy">ÜSTÜNDE</span></div>
                <div className="doas-ind-row" style={{ borderBottom: "none" }}><span className="doas-ind-name">Momentum</span><span className="doas-ind-val">Zayıf-Pozitif</span><span className="doas-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD çizgisi trigger seviyesinin üzerinde olsa da pozitif fark sınırlı. Momentumun güçlenmesi için fiyatın 184.44–186.04 TL direnç bölgesi üzerine yerleşmesi gerekir.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="doas-analysis-card">
              <div className="doas-analysis-card-head">
                <div className="doas-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="doas-analysis-card-body">
                <div className="doas-ind-row"><span className="doas-ind-name">RSI Değeri</span><span className="doas-ind-val">48.80</span><span className="doas-ind-signal neutral">NÖTR</span></div>
                <div className="doas-ind-row" style={{ borderBottom: "none" }}><span className="doas-ind-name">Bölge</span><span className="doas-ind-val">50 Altı</span><span className="doas-ind-signal sell">Zayıf</span></div>
                <div>
                  <div className="doas-progress-label"><span>30 (A.Satım)</span><span>48.80</span><span>70 (A.Alım)</span></div>
                  <div className="doas-progress-bar"><div className="doas-progress-fill" style={{ width: "48.80%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen altında. 50 üzerine dönüş toparlanmayı destekler; 45 altına sarkma ise satış baskısının güçlendiğini gösterebilir.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="doas-analysis-card">
              <div className="doas-analysis-card-head">
                <div className="doas-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="doas-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="doas-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","184.87","below"],
                      ["MAV 13","184.24","below"],
                      ["MAV 21","184.02","below"],
                      ["MAV 55","185.42","below"],
                      ["MAV 89","186.04","below"],
                      ["MAV 144","184.93","below"],
                      ["MAV 233","182.65","above"],
                    ].map(([p,v,status]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={status === "above" ? "doas-above" : "doas-below"}>{status === "above" ? "Fiyat Üstünde ▲" : "Fiyat Altında ▼"}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="doas-section-title"><span className="doas-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="doas-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "190.35 TL", desc: "Bollinger üst bandı / kısa vadeli üst hedef" },
              { type: "res", label: "Ara Direnç", price: "184.44–186.04", desc: "Ağırlıklı ortalama ve MAV 5/13/21/55/89/144 bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "183.00–183.10", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Kritik Destek", price: "182.65 TL", desc: "MAV 233 uzun vadeli ortalama desteği" },
              { type: "sup", label: "Güçlü Destek", price: "177.22 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Ana Destek", price: "170.00–172.00", desc: "Grafikte önceki dip ve yatay destek bölgesi" },
            ].map((s) => (
              <div className="doas-sr-cell" key={s.label}>
                <div className={`doas-sr-type ${s.type}`}>{s.label}</div>
                <div className="doas-sr-price">{s.price}</div>
                <div className="doas-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="doas-section-title"><span className="doas-section-num">05</span> Genel Değerlendirme</div>
          <div className="doas-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>DOAS, günü <strong>183.10 TL</strong> seviyesinde kapatarak kısa vadeli hareketli ortalamaların büyük bölümünün altında kaldı. Fiyatın yalnızca <strong>MAV 233 olan 182.65 TL</strong> üzerinde tutunması, uzun vadeli ortalama desteğinin şimdilik korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>183.79 TL orta bandının hemen altında</strong> bulunuyor. Bu bölge kısa vadeli yön tayini açısından kritik. Orta bandın altında kalıcılık satış baskısını artırabilir; yeniden üzerine çıkılması ise toparlanma denemesini destekler.</p>
            <p>Stochastic (54.94/61.66) aşağı kesişim görüntüsü verirken, RSI (48.80) 50 seviyesinin altında kalıyor. MACD tarafı sınırlı pozitif olsa da fiyatın ortalamaların altında kalması nedeniyle teyit zayıf.</p>
            <p>Teknik görünümde <strong>183.00–182.65 TL</strong> destek bölgesi korunursa yatay-toparlanma denemesi gelebilir. Bu bölgenin altında <em>177.22 TL</em> Bollinger alt bandı takip edilmelidir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="doas-section-title"><span className="doas-section-num">06</span> Senaryo Analizi</div>
          <div className="doas-scenario-grid">
            <div className="doas-scenario-card bull">
              <div className="doas-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>183.79 TL Bollinger orta bandı üzerine dönüş</li>
                <li>184.44–186.04 TL hareketli ortalama bölgesinin aşılması</li>
                <li>RSI'ın yeniden 50 üzerine taşınması</li>
                <li>MACD pozitif farkının güçlenmesi</li>
                <li>Hedef: 190.35 TL Bollinger üst bandı</li>
              </ul>
            </div>
            <div className="doas-scenario-card bear">
              <div className="doas-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>183.00 TL günlük dip seviyesinin kırılması</li>
                <li>182.65 TL MAV 233 desteği altında kapanış</li>
                <li>RSI'ın 45 altına sarkması</li>
                <li>Stochastic göstergesinde zayıflığın devam etmesi</li>
                <li>Hedef: 177.22 TL Bollinger alt bandı</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>

          <div className="doas-disclaimer">
            <div className="doas-disclaimer-head">
              <div className="doas-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="doas-footer">
            <div className="doas-footer-inner">
              <div className="doas-footer-brand">HOCA İLE BORSA</div>
              <div className="doas-footer-meta">
                DOAS Teknik Analiz Raporu<br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="doas-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
