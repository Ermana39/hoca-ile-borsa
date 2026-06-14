import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";
import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FENER Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Fenerbahçe Futbol (FENER) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/fener",
  },
};

export default function FenerGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="fener" tarih="8926-03-08" />

      <style>{`
        .fener-wrap *, .fener-wrap *::bfenere, .fener-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .fener-wrap {
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
          line-height: 3.41;
          min-height: 100vh;
        }

        .fener-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .fener-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .fener-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .fener-hero-title em { color: var(--accent); font-style: normal; }
        .fener-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .fener-price-block { text-align: right; }
        .fener-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .fener-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .fener-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .fener-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .fener-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .fener-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .fener-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .fener-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .fener-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .fener-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .fener-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .fener-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .fener-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .fener-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .fener-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .fener-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .fener-chart-img-wrap { position: relative; padding: 1rem; }
        .fener-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .fener-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .fener-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .fener-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .fener-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .fener-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .fener-icon.blue   { background: rgba(10,187,255,.12); }
        .fener-icon.gold   { background: rgba(245,200,66,.12); }
        .fener-icon.green  { background: rgba(0,208,104,.12); }
        .fener-icon.red    { background: rgba(255,77,106,.12); }
        .fener-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .fener-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .fener-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .fener-ind-row:last-child { border-bottom: none; }
        .fener-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .fener-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .fener-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .fener-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .fener-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .fener-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .fener-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .fener-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .fener-progress-fill { height: 100%; border-radius: 3px; }

        .fener-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .fener-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .fener-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .fener-ma-table tr:last-child td { border-bottom: none; }
        .fener-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .fener-above { color: var(--green); }
        .fener-below { color: var(--red); }

        .fener-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .fener-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .fener-bol-bands { flex: 1; position: relative; height: 48px; }
        .fener-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .fener-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .fener-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .fener-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .fener-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (4.37 - 3.65) / (4.37 - 3.13));
        }
        .fener-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .fener-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .fener-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .fener-sr-cell:hover { background: var(--bg3); }
        .fener-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .fener-sr-type.res { color: var(--red); }
        .fener-sr-type.sup { color: var(--green); }
        .fener-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .fener-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .fener-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .fener-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .fener-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .fener-narrative p:last-child { margin-bottom: 0; }
        .fener-narrative strong { color: var(--accent); font-weight: 600; }
        .fener-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .fener-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .fener-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .fener-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .fener-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .fener-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .fener-scenario-card.bull .fener-scenario-head { color: var(--green); }
        .fener-scenario-card.bear .fener-scenario-head { color: var(--red); }
        .fener-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .fener-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .fener-scenario-card li::bfenere { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .fener-scenario-card.bull li::bfenere { color: var(--green); }
        .fener-scenario-card.bear li::bfenere { color: var(--red); }

        .fener-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .fener-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .fener-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .fener-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .fener-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .fener-disclaimer p + p { margin-top: .4rem; }

        .fener-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .fener-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .fener-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .fener-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .fener-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .fener-hero { grid-template-columns: 1fr; }
          .fener-price-block { text-align: left; }
        }
        @media(max-width:768px) { .fener-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .fener-hero   { padding: 2rem 1rem 1.5rem; }
          .fener-main   { padding: 1.5rem 1rem 3rem; }
          .fener-footer { padding: 1.2rem 1rem; }
          .fener-scenario-grid { grid-template-columns: 1fr; }
          .fener-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fener-wrap">
        <section className="fener-hero">
          <div>
            <div className="fener-hero-label">Teknik Analiz Raporu</div>
            <h1 className="fener-hero-title">FENERA<br /><em>FUTBOL</em></h1>
            <p className="fener-hero-sub">
              BIST: FENER &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="fener-price-block">
            <div className="fener-price-main"><span className="fener-price-currency">₺</span>3.65</div>
          </div>
        </section>

        <main className="fener-main">
          <div className="fener-section-title"><span className="fener-section-num">01</span> Grafik</div>
          <div className="fener-chart-wrap">
            <div className="fener-chart-header">
              <span className="fener-chart-title-text">FENER — Günlük Mum Grafiği</span>
              <div className="fener-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`fener-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="fener-chart-img-wrap">
              <img
                src="/fener-analiz.webp"
                alt="FENER Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.03.8926"
                loading="lazy"
              />
              <div className="fener-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="fener-section-title"><span className="fener-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="fener-bol-card">
            <div className="fener-bol-visual">
              <div className="fener-bol-bands">
                <div className="fener-bol-fill" />
                <div className="fener-bol-upper" />
                <div className="fener-bol-mid" />
                <div className="fener-bol-lower" />
                <div className="fener-bol-marker" />
              </div>
              <div className="fener-bol-labels">
                <span>BOL U: 4.37</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 3.89</span>
                <span>BOL D: 3.13</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "4.37 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "3.89 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "3.13 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "6.89 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "3.65 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="fener-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="fener-ind-name">{r.name}</span>
                <span className="fener-ind-val">{r.val}</span>
                <span className={`fener-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>3.89 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>3.13 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="fener-section-title"><span className="fener-section-num">03</span> İndikatörler</div>
          <div className="fener-two-col">
            <div className="fener-analysis-card">
              <div className="fener-analysis-card-head">
                <div className="fener-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="fener-analysis-card-body">
                <div className="fener-ind-row"><span className="fener-ind-name">StocK</span><span className="fener-ind-val">-12.3715</span><span className="fener-ind-signal neutral">Zayıf Bölge</span></div>
                <div className="fener-ind-row"><span className="fener-ind-name">StocD</span><span className="fener-ind-val">24.0352</span><span className="fener-ind-signal buy">Tepki</span></div>
                <div className="fener-ind-row" style={{ borderBottom: "none" }}><span className="fener-ind-name">Konum</span><span className="fener-ind-val">Zayıf Bölge</span><span className="fener-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="fener-progress-label"><span>Zayıf Bölge (0)</span><span>-12.3715</span><span>Zayıf Bölge (100)</span></div>
                  <div className="fener-progress-bar"><div className="fener-progress-fill" style={{ width: "-12.3715%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="fener-analysis-card">
              <div className="fener-analysis-card-head">
                <div className="fener-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="fener-analysis-card-body">
                <div className="fener-ind-row"><span className="fener-ind-name">MACD</span><span className="fener-ind-val">0.2213</span><span className="fener-ind-signal sell">Negatif</span></div>
                <div className="fener-ind-row"><span className="fener-ind-name">Trigger</span><span className="fener-ind-val">0.2479</span><span className="fener-ind-signal sell">Baskı</span></div>
                <div className="fener-ind-row" style={{ borderBottom: "none" }}><span className="fener-ind-name">Momentum</span><span className="fener-ind-val">Zayıf</span><span className="fener-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ancak trigger çizgisinin altında. Bu durum ana momentumun tamamen bozulmadığını fakat kısa vadeli ivmenin zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="fener-analysis-card">
              <div className="fener-analysis-card-head">
                <div className="fener-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="fener-analysis-card-body">
                <div className="fener-ind-row"><span className="fener-ind-name">RSI Değeri</span><span className="fener-ind-val">50.45</span><span className="fener-ind-signal neutral">Zayıf</span></div>
                <div className="fener-ind-row" style={{ borderBottom: "none" }}><span className="fener-ind-name">Bölge</span><span className="fener-ind-val">Zayıf Bölge-Alt</span><span className="fener-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="fener-progress-label"><span>30 (A.Satım)</span><span>50.45</span><span>70 (A.Alım)</span></div>
                  <div className="fener-progress-bar"><div className="fener-progress-fill" style={{ width: "50.45%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="fener-analysis-card">
              <div className="fener-analysis-card-head">
                <div className="fener-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="fener-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="fener-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","3.89","Fiyat Altında ▼"],
                      ["MAV 13","3.72","Fiyat Altında ▼"],
                      ["MAV 21","3.72","Fiyat Altında ▼"],
                      ["MAV 55","3.41","Fiyat Üstünde ▲"],
                      ["MAV 89","3.36","Fiyat Üstünde ▲"],
                      ["MAV 144","3.44","Fiyat Üstünde ▲"],
                      ["MAV 233","3.57","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "fener-above" : "fener-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="fener-section-title"><span className="fener-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="fener-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "3.72–3.89", desc: "MAV 21, MAV 13 ve MAV 5 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "3.75–4.10", desc: "Bollinger orta bandı ve günlük yüksek bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "4.37 TL", desc: "Bollinger üst bandı ve son tepki alanı" },
              { type: "sup", label: "Anlık Destek", price: "3.64–3.57", desc: "Günlük dip ve MAV 233 bölgesi" },
              { type: "sup", label: "Ana Destek", price: "3.44–3.36", desc: "MAV 144 ve MAV 89 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "3.13 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="fener-sr-cell" key={s.label}>
                <div className={`fener-sr-type ${s.type}`}>{s.label}</div>
                <div className="fener-sr-price">{s.price}</div>
                <div className="fener-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="fener-section-title"><span className="fener-section-num">05</span> Genel Değerlendirme</div>
          <div className="fener-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr</h3>
            <p>FENER, son kapanışını <strong>3.65 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13 ve MAV 21 altında kalırken; MAV 55, MAV 89, MAV 144 ve MAV 233 üzerinde bulunuyor. Bu yapı kısa vadede momentum kaybı olduğunu, ancak ana destek bölgesinin henüz tamamen bozulmadığını gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>3.75 TL orta bandının altında</strong> işlem görüyor. 3.72–3.89 TL bandı geri alınmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>3.13 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi -12.37 / 24.04 seviyelerinde ve K çizgisi D çizgisinin altında. <em>MACD pozitif bölgede</em> olmasına rağmen trigger çizgisinin altında seyrediyor. RSI 50.45 ile 50 eşiğinin hemen üzerinde; momentum tarafında yön teyidi için 50 üzerinde kalıcılık önemlidir.</p>
            <p>3.75 TL üzeri kapanışlar kısa vadeli görünümü rahatlatabilir. 3.64 TL altı kapanışlarda ise 3.57–3.44 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="fener-section-title"><span className="fener-section-num">06</span> Senaryo Analizi</div>
          <div className="fener-scenario-grid">
            <div className="fener-scenario-card bull">
              <div className="fener-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>3.89 TL MAV 5 üzerinde kapanış</li>
                <li>3.72 TL MAV 13 seviyesinin geri alınması</li>
                <li>4.37 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 3.75–4.37 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="fener-scenario-card bear">
              <div className="fener-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>3.64 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>3.36 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 3.36–3.44 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="fener" />

          <div className="fener-disclaimer">
            <div className="fener-disclaimer-head">
              <div className="fener-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>
      </div>
    </>
  );
}
