import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASTOR Teknik Analiz — 06.06.2026",
  description:
    "Astor Enerji (ASTOR) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/astor",
  },
};

export default function AstorGrafikAnaliz() {
  return (
    <>


      <style>{`
        .astor-wrap *, .astor-wrap *::before, .astor-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .astor-wrap {
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
        .astor-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .astor-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .astor-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .astor-hero-title em { color: var(--accent); font-style: normal; }
        .astor-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .astor-price-block { text-align: right; }
        .astor-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .astor-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .astor-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        /* SECTION TITLE */
        .astor-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .astor-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .astor-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .astor-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .astor-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .astor-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .astor-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .astor-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .astor-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .astor-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .astor-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .astor-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .astor-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .astor-chart-img-wrap { position: relative; padding: 1rem; }
        .astor-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .astor-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .astor-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .astor-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .astor-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .astor-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .astor-icon.blue   { background: rgba(10,187,255,.12); }
        .astor-icon.gold   { background: rgba(245,200,66,.12); }
        .astor-icon.green  { background: rgba(0,208,104,.12); }
        .astor-icon.red    { background: rgba(255,77,106,.12); }
        .astor-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .astor-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .astor-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .astor-ind-row:last-child { border-bottom: none; }
        .astor-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .astor-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .astor-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .astor-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .astor-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .astor-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .astor-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .astor-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .astor-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .astor-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .astor-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .astor-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .astor-ma-table tr:last-child td { border-bottom: none; }
        .astor-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .astor-above { color: var(--green); }
        .astor-below { color: var(--red); }

        /* BOLLINGER */
        .astor-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .astor-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .astor-bol-bands { flex: 1; position: relative; height: 48px; }
        .astor-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .astor-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .astor-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .astor-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .astor-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (361.65 - 317.00) / (361.65 - 297.12));
        }
        .astor-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .astor-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .astor-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .astor-sr-cell:hover { background: var(--bg3); }
        .astor-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .astor-sr-type.res { color: var(--red); }
        .astor-sr-type.sup { color: var(--green); }
        .astor-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .astor-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .astor-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .astor-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .astor-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .astor-narrative p:last-child { margin-bottom: 0; }
        .astor-narrative strong { color: var(--accent); font-weight: 600; }
        .astor-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .astor-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .astor-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .astor-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .astor-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .astor-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .astor-scenario-card.bull .astor-scenario-head { color: var(--green); }
        .astor-scenario-card.bear .astor-scenario-head { color: var(--red); }
        .astor-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .astor-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .astor-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .astor-scenario-card.bull li::before { color: var(--green); }
        .astor-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .astor-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .astor-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .astor-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .astor-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .astor-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .astor-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .astor-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .astor-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .astor-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .astor-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .astor-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .astor-hero { grid-template-columns: 1fr; }
          .astor-price-block { text-align: left; }
        }
        @media(max-width:768px) { .astor-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .astor-hero   { padding: 2rem 1rem 1.5rem; }
          .astor-main   { padding: 1.5rem 1rem 3rem; }
          .astor-footer { padding: 1.2rem 1rem; }
          .astor-scenario-grid { grid-template-columns: 1fr; }
          .astor-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="astor-wrap">
        {/* HERO */}
        <section className="astor-hero">
          <div>
            <div className="astor-hero-label">Teknik Analiz Raporu</div>
            <h1 className="astor-hero-title">ASTOR<br /><em>ENERJİ</em></h1>
            <p className="astor-hero-sub">
              BIST: ASTOR &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="astor-price-block">
            <div className="astor-price-main"><span className="astor-price-currency">₺</span>317.00</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="astor-main">
          {/* CHART */}
          <div className="astor-section-title"><span className="astor-section-num">01</span> Grafik</div>
          <div className="astor-chart-wrap">
            <div className="astor-chart-header">
              <span className="astor-chart-title-text">ASTOR — Günlük Mum Grafiği</span>
              <div className="astor-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`astor-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="astor-chart-img-wrap">
              <img
                src="/astor-analiz.webp"
                alt="ASTOR Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="astor-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="astor-section-title"><span className="astor-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="astor-bol-card">
            <div className="astor-bol-visual">
              <div className="astor-bol-bands">
                <div className="astor-bol-fill" />
                <div className="astor-bol-upper" />
                <div className="astor-bol-mid" />
                <div className="astor-bol-lower" />
                <div className="astor-bol-marker" />
              </div>
              <div className="astor-bol-labels">
                <span>BOL U: 361.65</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 329.39</span>
                <span>BOL D: 297.12</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",  val: "361.65 TL", sig: "Direnç",         cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "329.39 TL", sig: "Ana Direnç",     cls: "sell" },
              { name: "Alt Band (BOL D)",   val: "297.12 TL", sig: "Ana Destek",     cls: "buy" },
              { name: "Bant Genişliği",     val: "64.53 TL",  sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",     val: "317.00 TL", sig: "Orta-Alt Bant",  cls: "neutral" },
            ].map((r, i) => (
              <div className="astor-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="astor-ind-name">{r.name}</span>
                <span className="astor-ind-val">{r.val}</span>
                <span className={`astor-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>329.39 TL</strong> seviyesinin altında kapanış yaptı. Bu durum kısa vadede momentumun zayıfladığını gösteriyor. 329.39 TL üzerine dönüş gelmedikçe tepki hareketleri sınırlı kalabilir; aşağıda 297.12 TL alt bandı ana destek olarak izlenmelidir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="astor-section-title"><span className="astor-section-num">03</span> İndikatörler</div>
          <div className="astor-two-col">
            {/* Stochastic */}
            <div className="astor-analysis-card">
              <div className="astor-analysis-card-head">
                <div className="astor-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="astor-analysis-card-body">
                <div className="astor-ind-row"><span className="astor-ind-name">StocK</span><span className="astor-ind-val">6.19</span><span className="astor-ind-signal neutral">Dip Bölge</span></div>
                <div className="astor-ind-row"><span className="astor-ind-name">StocD</span><span className="astor-ind-val">11.53</span><span className="astor-ind-signal sell">Zayıf</span></div>
                <div className="astor-ind-row" style={{ borderBottom: "none" }}><span className="astor-ind-name">Konum</span><span className="astor-ind-val">Aşırı Satım</span><span className="astor-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="astor-progress-label"><span>Aşırı Satım (0)</span><span>6.19</span><span>Aşırı Alım (100)</span></div>
                  <div className="astor-progress-bar"><div className="astor-progress-fill" style={{ width: "6.19%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı satım bölgesinde. Tepki potansiyeli oluşabilir; ancak K çizgisinin D çizgisi altında kalması nedeniyle henüz net güçlenme teyidi yok.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="astor-analysis-card">
              <div className="astor-analysis-card-head">
                <div className="astor-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="astor-analysis-card-body">
                <div className="astor-ind-row"><span className="astor-ind-name">MACD</span><span className="astor-ind-val">21.3632</span><span className="astor-ind-signal neutral">POZİTİF</span></div>
                <div className="astor-ind-row"><span className="astor-ind-name">Trigger</span><span className="astor-ind-val">26.2747</span><span className="astor-ind-signal sell">ALTINDA</span></div>
                <div className="astor-ind-row" style={{ borderBottom: "none" }}><span className="astor-ind-name">Momentum</span><span className="astor-ind-val">Zayıflıyor</span><span className="astor-ind-signal sell">Negatif</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olmasına rağmen trigger çizgisinin altında. Bu yapı yükseliş trendinin tamamen bitmediğini ancak kısa vadeli momentumun zayıfladığını gösteriyor.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="astor-analysis-card">
              <div className="astor-analysis-card-head">
                <div className="astor-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="astor-analysis-card-body">
                <div className="astor-ind-row"><span className="astor-ind-name">RSI Değeri</span><span className="astor-ind-val">52.68</span><span className="astor-ind-signal neutral">NÖTR</span></div>
                <div className="astor-ind-row" style={{ borderBottom: "none" }}><span className="astor-ind-name">Bölge</span><span className="astor-ind-val">Nötr</span><span className="astor-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="astor-progress-label"><span>30 (A.Satım)</span><span>52.68</span><span>70 (A.Alım)</span></div>
                  <div className="astor-progress-bar"><div className="astor-progress-fill" style={{ width: "52.68%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 üzerinde kalmaya devam ediyor. Bu görünüm tamamen negatif değil; fakat 55–60 bandı üzerine çıkılmadan güçlü momentumdan bahsetmek zor.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="astor-analysis-card">
              <div className="astor-analysis-card-head">
                <div className="astor-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="astor-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="astor-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","331.28","Fiyat Altında ▼"],
                      ["MAV 13","328.45","Fiyat Altında ▼"],
                      ["MAV 21","316.49","Fiyat Üstünde ▲"],
                      ["MAV 55","268.11","Fiyat Üstünde ▲"],
                      ["MAV 89","236.59","Fiyat Üstünde ▲"],
                      ["MAV 144","204.28","Fiyat Üstünde ▲"],
                      ["MAV 233","174.86","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={String(d).includes("Altında") ? "astor-below" : "astor-above"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="astor-section-title"><span className="astor-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="astor-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "361.65 TL", desc: "Bollinger üst bandı ve son yükseliş ivmesinin güçlü direnç bölgesi" },
              { type: "res", label: "Ara Direnç",    price: "329.39–331.28", desc: "Bollinger orta bandı + MAV 5 bölgesi" },
              { type: "res", label: "Kısa Direnç",   price: "328.45 TL", desc: "MAV 13 seviyesi; tepki hareketinde ilk önemli eşik" },
              { type: "sup", label: "Anlık Destek",  price: "316.49–317.00", desc: "MAV 21 ve güncel kapanış bölgesi" },
              { type: "sup", label: "Ana Destek",    price: "297.12 TL", desc: "Bollinger alt bandı; satış baskısında kritik destek" },
              { type: "sup", label: "Trend Desteği", price: "268.11 TL", desc: "MAV 55 seviyesi; orta vadeli ana trend desteği" },
            ].map((s) => (
              <div className="astor-sr-cell" key={s.label}>
                <div className={`astor-sr-type ${s.type}`}>{s.label}</div>
                <div className="astor-sr-price">{s.price}</div>
                <div className="astor-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="astor-section-title"><span className="astor-section-num">05</span> Genel Değerlendirme</div>
          <div className="astor-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Zayıf</h3>
            <p>ASTOR, güçlü yükseliş hareketi sonrası zirve bölgesinden geri çekilerek günü <strong>317.00 TL</strong> seviyesinde tamamladı. Fiyat, kısa vadeli <strong>MAV 5 ve MAV 13</strong> ortalamalarının altında kalırken <strong>MAV 21</strong> seviyesine oldukça yakın işlem görüyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta bandın (329.39 TL) altında</strong> ve alt banda doğru yaklaşan bölgede bulunuyor. Bu durum kısa vadeli momentumun zayıfladığını gösteriyor. Aşağıda <strong>297.12 TL</strong> Bollinger alt bandı önemli destek olarak izlenebilir.</p>
            <p>Stochastic değerlerinin aşırı satım bölgesine yaklaşması tepki potansiyeli oluşturabilir; ancak <em>MACD’nin trigger altında kalması</em> ve fiyatın kısa vadeli ortalamaları geri alamaması nedeniyle toparlanma için henüz güçlü teyit oluşmuş değil.</p>
            <p>Orta vadeli ana trend tamamen bozulmuş görünmüyor; çünkü fiyat hâlâ MAV 55, MAV 89, MAV 144 ve MAV 233 üzerinde. Buna rağmen <strong>329–331 TL bandı geri alınmadan</strong> kısa vadeli görünüm temkinli izlenmelidir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="astor-section-title"><span className="astor-section-num">06</span> Senaryo Analizi</div>
          <div className="astor-scenario-grid">
            <div className="astor-scenario-card bull">
              <div className="astor-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>329.39 TL Bollinger orta bandı üzerine dönüş</li>
                <li>331.28 TL MAV 5 seviyesinin geri alınması</li>
                <li>MACD’nin trigger çizgisi üzerine geçmesi</li>
                <li>RSI’ın 55–60 bandı üzerine taşınması</li>
                <li>Hedef: 345 TL ve 361.65 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="astor-scenario-card bear">
              <div className="astor-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>316.49 TL MAV 21 altında kapanış</li>
                <li>Stochastic’in aşırı satımda zayıf kalmaya devam etmesi</li>
                <li>MACD’nin trigger altında negatif eğilimini sürdürmesi</li>
                <li>Satış baskısıyla 297.12 TL Bollinger alt bandının test edilmesi</li>
                <li>Hedef: 297.12 TL ve 268.11 TL destek bölgesi</li>
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

          <div className="astor-disclaimer">
            <div className="astor-disclaimer-head">
              <div className="astor-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        {/* FOOTER */}
        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="astor-footer">
            <div className="astor-footer-inner">
              <div className="astor-footer-brand">HOCA İLE BORSA</div>
              <div className="astor-footer-meta">
                ASTOR Teknik Analiz Raporu<br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="astor-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
