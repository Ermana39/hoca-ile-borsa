
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALTNY Teknik Analiz — 08.06.2026",
  description:
    "Altınay Savunma (ALTNY) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/altny",
  },
};

export default function AltnyGrafikAnaliz() {
  return (
    <>


      <style>{`
        .altny-wrap *, .altny-wrap *::before, .altny-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .altny-wrap {
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

        .altny-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .altny-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .altny-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .altny-hero-title em { color: var(--accent); font-style: normal; }
        .altny-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .altny-price-block { text-align: right; }
        .altny-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .altny-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .altny-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .altny-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .altny-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .altny-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .altny-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .altny-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .altny-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .altny-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .altny-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .altny-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .altny-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .altny-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .altny-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .altny-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .altny-chart-img-wrap { position: relative; padding: 1rem; }
        .altny-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .altny-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .altny-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .altny-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .altny-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .altny-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .altny-icon.blue   { background: rgba(10,187,255,.12); }
        .altny-icon.gold   { background: rgba(245,200,66,.12); }
        .altny-icon.green  { background: rgba(0,208,104,.12); }
        .altny-icon.red    { background: rgba(255,77,106,.12); }
        .altny-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .altny-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .altny-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .altny-ind-row:last-child { border-bottom: none; }
        .altny-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .altny-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .altny-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .altny-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .altny-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .altny-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .altny-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .altny-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .altny-progress-fill { height: 100%; border-radius: 3px; }

        .altny-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .altny-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .altny-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .altny-ma-table tr:last-child td { border-bottom: none; }
        .altny-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .altny-above { color: var(--green); }
        .altny-below { color: var(--red); }

        .altny-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .altny-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .altny-bol-bands { flex: 1; position: relative; height: 48px; }
        .altny-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .altny-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .altny-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .altny-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .altny-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (19.09 - 16.38) / (19.09 - 15.61));
        }
        .altny-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .altny-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .altny-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .altny-sr-cell:hover { background: var(--bg3); }
        .altny-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .altny-sr-type.res { color: var(--red); }
        .altny-sr-type.sup { color: var(--green); }
        .altny-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .altny-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .altny-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .altny-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .altny-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .altny-narrative p:last-child { margin-bottom: 0; }
        .altny-narrative strong { color: var(--accent); font-weight: 600; }
        .altny-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .altny-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .altny-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .altny-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .altny-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .altny-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .altny-scenario-card.bull .altny-scenario-head { color: var(--green); }
        .altny-scenario-card.bear .altny-scenario-head { color: var(--red); }
        .altny-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .altny-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .altny-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .altny-scenario-card.bull li::before { color: var(--green); }
        .altny-scenario-card.bear li::before { color: var(--red); }

        .altny-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .altny-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .altny-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .altny-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .altny-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .altny-disclaimer p + p { margin-top: .4rem; }

        .altny-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .altny-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .altny-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .altny-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .altny-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .altny-hero { grid-template-columns: 1fr; }
          .altny-price-block { text-align: left; }
        }
        @media(max-width:768px) { .altny-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .altny-hero   { padding: 2rem 1rem 1.5rem; }
          .altny-main   { padding: 1.5rem 1rem 3rem; }
          .altny-footer { padding: 1.2rem 1rem; }
          .altny-scenario-grid { grid-template-columns: 1fr; }
          .altny-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="altny-wrap">
        <section className="altny-hero">
          <div>
            <div className="altny-hero-label">Teknik Analiz Raporu</div>
            <h1 className="altny-hero-title">ALTNY<br /><em>SAVUNMA</em></h1>
            <p className="altny-hero-sub">
              BIST: ALTNY &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="altny-price-block">
            <div className="altny-price-main"><span className="altny-price-currency">₺</span>16.38</div>
          </div>
        </section>

        <main className="altny-main">
          <div className="altny-section-title"><span className="altny-section-num">01</span> Grafik</div>
          <div className="altny-chart-wrap">
            <div className="altny-chart-header">
              <span className="altny-chart-title-text">ALTNY — Günlük Mum Grafiği</span>
              <div className="altny-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`altny-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="altny-chart-img-wrap">
              <img
                src="/altny-analiz.webp"
                alt="ALTNY Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.06.2026"
                loading="lazy"
              />
              <div className="altny-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="altny-section-title"><span className="altny-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="altny-bol-card">
            <div className="altny-bol-visual">
              <div className="altny-bol-bands">
                <div className="altny-bol-fill" />
                <div className="altny-bol-upper" />
                <div className="altny-bol-mid" />
                <div className="altny-bol-lower" />
                <div className="altny-bol-marker" />
              </div>
              <div className="altny-bol-labels">
                <span>BOL U: 19.09</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 17.35</span>
                <span>BOL D: 15.61</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "19.09 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "17.35 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "15.61 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.55 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "16.38 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="altny-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="altny-ind-name">{r.name}</span>
                <span className="altny-ind-val">{r.val}</span>
                <span className={`altny-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>17.35 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>15.61 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="altny-section-title"><span className="altny-section-num">03</span> İndikatörler</div>
          <div className="altny-two-col">
            <div className="altny-analysis-card">
              <div className="altny-analysis-card-head">
                <div className="altny-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="altny-analysis-card-body">
                <div className="altny-ind-row"><span className="altny-ind-name">StocK</span><span className="altny-ind-val">24.41</span><span className="altny-ind-signal neutral">Zayıf-Nötr</span></div>
                <div className="altny-ind-row"><span className="altny-ind-name">StocD</span><span className="altny-ind-val">24.79</span><span className="altny-ind-signal buy">Tepki</span></div>
                <div className="altny-ind-row" style={{ borderBottom: "none" }}><span className="altny-ind-name">Konum</span><span className="altny-ind-val">Zayıf-Nötr</span><span className="altny-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="altny-progress-label"><span>Aşırı Satım (0)</span><span>24.41</span><span>Aşırı Alım (100)</span></div>
                  <div className="altny-progress-bar"><div className="altny-progress-fill" style={{ width: "24.41%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="altny-analysis-card">
              <div className="altny-analysis-card-head">
                <div className="altny-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="altny-analysis-card-body">
                <div className="altny-ind-row"><span className="altny-ind-name">MACD</span><span className="altny-ind-val">0.0403</span><span className="altny-ind-signal sell">Negatif</span></div>
                <div className="altny-ind-row"><span className="altny-ind-name">Trigger</span><span className="altny-ind-val">0.1972</span><span className="altny-ind-signal sell">Baskı</span></div>
                <div className="altny-ind-row" style={{ borderBottom: "none" }}><span className="altny-ind-name">Momentum</span><span className="altny-ind-val">Zayıf</span><span className="altny-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="altny-analysis-card">
              <div className="altny-analysis-card-head">
                <div className="altny-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="altny-analysis-card-body">
                <div className="altny-ind-row"><span className="altny-ind-name">RSI Değeri</span><span className="altny-ind-val">45.55</span><span className="altny-ind-signal neutral">Zayıf</span></div>
                <div className="altny-ind-row" style={{ borderBottom: "none" }}><span className="altny-ind-name">Bölge</span><span className="altny-ind-val">Zayıf-Nötr-Alt</span><span className="altny-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="altny-progress-label"><span>30 (A.Satım)</span><span>45.55</span><span>70 (A.Alım)</span></div>
                  <div className="altny-progress-bar"><div className="altny-progress-fill" style={{ width: "45.55%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="altny-analysis-card">
              <div className="altny-analysis-card-head">
                <div className="altny-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="altny-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="altny-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","16.66","Fiyat Altında ▼"],
                      ["MAV 13","16.87","Fiyat Altında ▼"],
                      ["MAV 21","16.87","Fiyat Altında ▼"],
                      ["MAV 55","16.49","Fiyat Üstünde ▲"],
                      ["MAV 89","16.33","Fiyat Üstünde ▲"],
                      ["MAV 144","16.36","Fiyat Üstünde ▲"],
                      ["MAV 233","16.09","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "altny-above" : "altny-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="altny-section-title"><span className="altny-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="altny-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "16.66–16.87", desc: "MAV 5, MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "17.35 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "19.09 TL", desc: "Bollinger üst bandı ve önceki sert hareket alanı" },
              { type: "sup", label: "Anlık Destek", price: "16.36–16.33", desc: "MAV 144 ve MAV 89 destek bölgesi" },
              { type: "sup", label: "Ana Destek", price: "16.09–15.61", desc: "MAV 233 ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "15.00–15.61", desc: "Psikolojik destek alanı" },
            ].map((s) => (
              <div className="altny-sr-cell" key={s.label}>
                <div className={`altny-sr-type ${s.type}`}>{s.label}</div>
                <div className="altny-sr-price">{s.price}</div>
                <div className="altny-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="altny-section-title"><span className="altny-section-num">05</span> Genel Değerlendirme</div>
          <div className="altny-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>ALTNY, son kapanışını <strong>16.38 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalırken, MAV 89, MAV 144 ve MAV 233 üzerinde tutunuyor. Bu yapı kısa vadede zayıflama olduğunu, ancak ana destek bölgesinin henüz tamamen kırılmadığını gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>17.35 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>15.61 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 24.41 / 24.79 seviyelerinde ve alt bölgeden toparlanmaya çalışıyor; ancak K çizgisi D çizgisinin hafif altında olduğu için tepki teyidi zayıf. <em>MACD pozitif bölgede</em> olsa da trigger altında seyrediyor. RSI 45.55 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz net güçlenme yok.</p>
            <p>16.66–17.35 TL bandının geri alınması kısa vadeli görünümü rahatlatır. 16.09 TL altı kapanışlarda ise 15.61 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="altny-section-title"><span className="altny-section-num">06</span> Senaryo Analizi</div>
          <div className="altny-scenario-grid">
            <div className="altny-scenario-card bull">
              <div className="altny-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>16.66 TL MAV 5 üzerinde kapanış</li>
                <li>16.87 TL MAV 13 seviyesinin geri alınması</li>
                <li>19.09 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 17.35–19.09 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="altny-scenario-card bear">
              <div className="altny-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>16.36 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>16.33 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 16.33–16.36 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          <div className="altny-disclaimer">
            <div className="altny-disclaimer-head">
              <div className="altny-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="altny-footer">
            <div className="altny-footer-inner">
              <div className="altny-footer-brand">HOCA İLE BORSA</div>
              <div className="altny-footer-meta">
                ALTNY Teknik Analiz Raporu<br />
                Hazırlanma: 08.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="altny-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
