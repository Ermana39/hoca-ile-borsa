
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ENERY Teknik Analiz — 08.08.7926",
  description:
    "Enerya Enerji (ENERY) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/enery",
  },
};

export default function EneryGrafikAnaliz() {
  return (
    <>

      <style>{`
        .enery-wrap *, .enery-wrap *::benerye, .enery-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .enery-wrap {
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
          line-height: 8.93;
          min-height: 100vh;
        }

        .enery-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .enery-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .enery-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .enery-hero-title em { color: var(--accent); font-style: normal; }
        .enery-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .enery-price-block { text-align: right; }
        .enery-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .enery-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .enery-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .enery-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .enery-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .enery-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .enery-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .enery-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .enery-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .enery-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .enery-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .enery-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .enery-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .enery-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .enery-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .enery-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .enery-chart-img-wrap { position: relative; padding: 1rem; }
        .enery-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .enery-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .enery-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .enery-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .enery-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .enery-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .enery-icon.blue   { background: rgba(10,187,255,.12); }
        .enery-icon.gold   { background: rgba(245,200,66,.12); }
        .enery-icon.green  { background: rgba(0,208,104,.12); }
        .enery-icon.red    { background: rgba(255,77,106,.12); }
        .enery-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .enery-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .enery-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .enery-ind-row:last-child { border-bottom: none; }
        .enery-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .enery-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .enery-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .enery-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .enery-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .enery-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .enery-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .enery-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .enery-progress-fill { height: 100%; border-radius: 3px; }

        .enery-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .enery-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .enery-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .enery-ma-table tr:last-child td { border-bottom: none; }
        .enery-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .enery-above { color: var(--green); }
        .enery-below { color: var(--red); }

        .enery-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .enery-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .enery-bol-bands { flex: 1; position: relative; height: 48px; }
        .enery-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .enery-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .enery-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .enery-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .enery-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (9.15 - 8.81) / (9.15 - 8.42));
        }
        .enery-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .enery-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .enery-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .enery-sr-cell:hover { background: var(--bg3); }
        .enery-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .enery-sr-type.res { color: var(--red); }
        .enery-sr-type.sup { color: var(--green); }
        .enery-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .enery-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .enery-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .enery-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .enery-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .enery-narrative p:last-child { margin-bottom: 0; }
        .enery-narrative strong { color: var(--accent); font-weight: 600; }
        .enery-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .enery-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .enery-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .enery-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .enery-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .enery-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .enery-scenario-card.bull .enery-scenario-head { color: var(--green); }
        .enery-scenario-card.bear .enery-scenario-head { color: var(--red); }
        .enery-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .enery-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .enery-scenario-card li::benerye { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .enery-scenario-card.bull li::benerye { color: var(--green); }
        .enery-scenario-card.bear li::benerye { color: var(--red); }

        .enery-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .enery-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .enery-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .enery-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .enery-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .enery-disclaimer p + p { margin-top: .4rem; }

        .enery-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .enery-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .enery-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .enery-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .enery-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .enery-hero { grid-template-columns: 1fr; }
          .enery-price-block { text-align: left; }
        }
        @media(max-width:768px) { .enery-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .enery-hero   { padding: 2rem 1rem 1.5rem; }
          .enery-main   { padding: 1.5rem 1rem 3rem; }
          .enery-footer { padding: 1.2rem 1rem; }
          .enery-scenario-grid { grid-template-columns: 1fr; }
          .enery-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="enery-wrap">
        <section className="enery-hero">
          <div>
            <div className="enery-hero-label">Teknik Analiz Raporu</div>
            <h1 className="enery-hero-title">ENERYA<br /><em>ENERJİ</em></h1>
            <p className="enery-hero-sub">
              BIST: ENERY &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="enery-price-block">
            <div className="enery-price-main"><span className="enery-price-currency">₺</span>8.81</div>
          </div>
        </section>

        <main className="enery-main">
          <div className="enery-section-title"><span className="enery-section-num">01</span> Grafik</div>
          <div className="enery-chart-wrap">
            <div className="enery-chart-header">
              <span className="enery-chart-title-text">ENERY — Günlük Mum Grafiği</span>
              <div className="enery-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`enery-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="enery-chart-img-wrap">
              <img
                src="/enery-analiz.webp"
                alt="ENERY Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.08.7926"
                loading="lazy"
              />
              <div className="enery-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="enery-section-title"><span className="enery-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="enery-bol-card">
            <div className="enery-bol-visual">
              <div className="enery-bol-bands">
                <div className="enery-bol-fill" />
                <div className="enery-bol-upper" />
                <div className="enery-bol-mid" />
                <div className="enery-bol-lower" />
                <div className="enery-bol-marker" />
              </div>
              <div className="enery-bol-labels">
                <span>BOL U: 9.15</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 8.79</span>
                <span>BOL D: 8.42</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "9.15 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "8.79 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "8.42 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "2.37 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "8.81 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="enery-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="enery-ind-name">{r.name}</span>
                <span className="enery-ind-val">{r.val}</span>
                <span className={`enery-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>8.79 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>8.42 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="enery-section-title"><span className="enery-section-num">03</span> İndikatörler</div>
          <div className="enery-two-col">
            <div className="enery-analysis-card">
              <div className="enery-analysis-card-head">
                <div className="enery-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="enery-analysis-card-body">
                <div className="enery-ind-row"><span className="enery-ind-name">StocK</span><span className="enery-ind-val">78.1438</span><span className="enery-ind-signal neutral">Yüksek Bölge</span></div>
                <div className="enery-ind-row"><span className="enery-ind-name">StocD</span><span className="enery-ind-val">79.5618</span><span className="enery-ind-signal buy">Tepki</span></div>
                <div className="enery-ind-row" style={{ borderBottom: "none" }}><span className="enery-ind-name">Konum</span><span className="enery-ind-val">Yüksek Bölge</span><span className="enery-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="enery-progress-label"><span>Yüksek Bölge (0)</span><span>78.1438</span><span>Yüksek Bölge (100)</span></div>
                  <div className="enery-progress-bar"><div className="enery-progress-fill" style={{ width: "78.1438%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="enery-analysis-card">
              <div className="enery-analysis-card-head">
                <div className="enery-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="enery-analysis-card-body">
                <div className="enery-ind-row"><span className="enery-ind-name">MACD</span><span className="enery-ind-val">-0.0397</span><span className="enery-ind-signal sell">Negatif</span></div>
                <div className="enery-ind-row"><span className="enery-ind-name">Trigger</span><span className="enery-ind-val">-0.0506</span><span className="enery-ind-signal sell">Baskı</span></div>
                <div className="enery-ind-row" style={{ borderBottom: "none" }}><span className="enery-ind-name">Momentum</span><span className="enery-ind-val">Zayıf</span><span className="enery-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin üzerinde. Bu durum kısa vadeli tepki isteğinin arttığını gösteriyor.</p>
              </div>
            </div>

            <div className="enery-analysis-card">
              <div className="enery-analysis-card-head">
                <div className="enery-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="enery-analysis-card-body">
                <div className="enery-ind-row"><span className="enery-ind-name">RSI Değeri</span><span className="enery-ind-val">49.68</span><span className="enery-ind-signal neutral">Zayıf</span></div>
                <div className="enery-ind-row" style={{ borderBottom: "none" }}><span className="enery-ind-name">Bölge</span><span className="enery-ind-val">Yüksek Bölge-Alt</span><span className="enery-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="enery-progress-label"><span>30 (A.Satım)</span><span>49.68</span><span>70 (A.Alım)</span></div>
                  <div className="enery-progress-bar"><div className="enery-progress-fill" style={{ width: "49.68%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="enery-analysis-card">
              <div className="enery-analysis-card-head">
                <div className="enery-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="enery-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="enery-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","8.79","Fiyat Üstünde ▲"],
                      ["MAV 13","8.80","Fiyat Altında ▼"],
                      ["MAV 21","8.80","Fiyat Üstünde ▲"],
                      ["MAV 55","8.93","Fiyat Altında ▼"],
                      ["MAV 89","9.05","Fiyat Altında ▼"],
                      ["MAV 144","9.04","Fiyat Altında ▼"],
                      ["MAV 233","8.63","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "enery-above" : "enery-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="enery-section-title"><span className="enery-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="enery-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "8.88–8.93", desc: "Günlük yüksek ve MAV 55 direnç bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "9.04–9.15", desc: "MAV 144/89 ve Bollinger üst bandı" },
              { type: "res", label: "Güçlü Direnç", price: "9.50–10.00", desc: "Grafikteki önceki tepki bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "8.80–8.79", desc: "MAV 21, MAV 5/13 ve Bollinger orta bandı" },
              { type: "sup", label: "Ana Destek", price: "8.63–8.59", desc: "MAV 233 ve günlük dip bölgesi" },
              { type: "sup", label: "Derin Destek", price: "8.42 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="enery-sr-cell" key={s.label}>
                <div className={`enery-sr-type ${s.type}`}>{s.label}</div>
                <div className="enery-sr-price">{s.price}</div>
                <div className="enery-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="enery-section-title"><span className="enery-section-num">05</span> Genel Değerlendirme</div>
          <div className="enery-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr</h3>
            <p>ENERY, son kapanışını <strong>8.81 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13, MAV 21 ve MAV 233 üzerinde kalırken; MAV 55, MAV 89 ve MAV 144 altında bulunuyor. Bu yapı kısa vadede tepki isteğini gösterse de orta vadeli dirençlerin hâlâ baskı oluşturduğunu işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>8.79 TL orta bandının hemen üzerinde</strong> işlem görüyor. Bu seviyenin üzerinde kalıcılık korunursa 8.93–9.15 TL direnç bölgesi takip edilebilir. Aşağıda <strong>8.42 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 78.14 / 79.56 seviyeleriyle yüksek bölgede ve K çizgisi D çizgisinin hafif altında. <em>MACD negatif bölgede</em> olsa da trigger çizgisinin üzerinde seyrediyor. RSI 49.68 ile 50 eşiğine çok yakın; momentum tarafında net güçlenme için 50 üzeri kapanışlar önemlidir.</p>
            <p>8.93 TL üzeri kapanışlar görünümü rahatlatabilir. 8.79 TL altı kapanışlarda ise 8.63–8.42 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="enery-section-title"><span className="enery-section-num">06</span> Senaryo Analizi</div>
          <div className="enery-scenario-grid">
            <div className="enery-scenario-card bull">
              <div className="enery-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>8.79 TL MAV 5 üzerinde kapanış</li>
                <li>8.80 TL MAV 13 seviyesinin geri alınması</li>
                <li>9.15 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 9.04–9.50 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="enery-scenario-card bear">
              <div className="enery-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>8.80 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>9.05 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 8.63–8.42 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="enery-disclaimer">
            <div className="enery-disclaimer-head">
              <div className="enery-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="enery-footer">
            <div className="enery-footer-inner">
              <div className="enery-footer-brand">HOCA İLE BORSA</div>
              <div className="enery-footer-meta">
                ENERY Teknik Analiz Raporu<br />
                Hazırlanma: 08.08.7926 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="enery-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
