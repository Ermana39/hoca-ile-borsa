import Link from "next/link";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUPRS Teknik Analiz — 05.06.2026",
  description:
    "Tüpraş (TUPRS) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/tuprs",
  },
};

export default function TuprsGrafikAnaliz() {
  return (
    <>


      <style>{`
        .tuprs-wrap *, .tuprs-wrap *::before, .tuprs-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tuprs-wrap {
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

        .tuprs-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .tuprs-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .tuprs-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .tuprs-hero-title em { color: var(--accent); font-style: normal; }
        .tuprs-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .tuprs-price-block { text-align: right; }
        .tuprs-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .tuprs-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .tuprs-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .tuprs-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .tuprs-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .tuprs-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .tuprs-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .tuprs-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .tuprs-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .tuprs-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .tuprs-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .tuprs-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .tuprs-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .tuprs-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .tuprs-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .tuprs-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .tuprs-chart-img-wrap { position: relative; padding: 1rem; }
        .tuprs-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .tuprs-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .tuprs-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .tuprs-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .tuprs-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .tuprs-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .tuprs-icon.blue   { background: rgba(10,187,255,.12); }
        .tuprs-icon.gold   { background: rgba(245,200,66,.12); }
        .tuprs-icon.green  { background: rgba(0,208,104,.12); }
        .tuprs-icon.red    { background: rgba(255,77,106,.12); }
        .tuprs-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .tuprs-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .tuprs-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .tuprs-ind-row:last-child { border-bottom: none; }
        .tuprs-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .tuprs-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .tuprs-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .tuprs-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .tuprs-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .tuprs-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .tuprs-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .tuprs-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .tuprs-progress-fill { height: 100%; border-radius: 3px; }

        .tuprs-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .tuprs-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .tuprs-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .tuprs-ma-table tr:last-child td { border-bottom: none; }
        .tuprs-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .tuprs-above { color: var(--green); }
        .tuprs-below { color: var(--red); }

        .tuprs-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .tuprs-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .tuprs-bol-bands { flex: 1; position: relative; height: 48px; }
        .tuprs-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tuprs-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .tuprs-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tuprs-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .tuprs-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (271.91 - 240.80) / (271.91 - 228.28));
        }
        .tuprs-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .tuprs-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .tuprs-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .tuprs-sr-cell:hover { background: var(--bg3); }
        .tuprs-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .tuprs-sr-type.res { color: var(--red); }
        .tuprs-sr-type.sup { color: var(--green); }
        .tuprs-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .tuprs-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .tuprs-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .tuprs-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .tuprs-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .tuprs-narrative p:last-child { margin-bottom: 0; }
        .tuprs-narrative strong { color: var(--accent); font-weight: 600; }
        .tuprs-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .tuprs-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .tuprs-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .tuprs-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .tuprs-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .tuprs-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .tuprs-scenario-card.bull .tuprs-scenario-head { color: var(--green); }
        .tuprs-scenario-card.bear .tuprs-scenario-head { color: var(--red); }
        .tuprs-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .tuprs-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .tuprs-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .tuprs-scenario-card.bull li::before { color: var(--green); }
        .tuprs-scenario-card.bear li::before { color: var(--red); }

        .tuprs-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .tuprs-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .tuprs-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .tuprs-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .tuprs-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .tuprs-disclaimer p + p { margin-top: .4rem; }

        .tuprs-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .tuprs-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .tuprs-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .tuprs-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .tuprs-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .tuprs-hero { grid-template-columns: 1fr; }
          .tuprs-price-block { text-align: left; }
        }
        @media(max-width:768px) { .tuprs-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .tuprs-hero   { padding: 2rem 1rem 1.5rem; }
          .tuprs-main   { padding: 1.5rem 1rem 3rem; }
          .tuprs-footer { padding: 1.2rem 1rem; }
          .tuprs-scenario-grid { grid-template-columns: 1fr; }
          .tuprs-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tuprs-wrap">
        <section className="tuprs-hero">
          <div>
            <div className="tuprs-hero-label">Teknik Analiz Raporu</div>
            <h1 className="tuprs-hero-title">TÜPRAŞ<br /><em>RAFİNERİ</em></h1>
            <p className="tuprs-hero-sub">
              BIST: TUPRS &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="tuprs-price-block">
            <div className="tuprs-price-main"><span className="tuprs-price-currency">₺</span>240.80</div>
          </div>
        </section>

        <main className="tuprs-main">
          <div className="tuprs-section-title"><span className="tuprs-section-num">01</span> Grafik</div>
          <div className="tuprs-chart-wrap">
            <div className="tuprs-chart-header">
              <span className="tuprs-chart-title-text">TUPRS — Günlük Mum Grafiği</span>
              <div className="tuprs-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`tuprs-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="tuprs-chart-img-wrap">
              <img
                src="/tuprs-analiz.webp"
                alt="TUPRS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="tuprs-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="tuprs-section-title"><span className="tuprs-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="tuprs-bol-card">
            <div className="tuprs-bol-visual">
              <div className="tuprs-bol-bands">
                <div className="tuprs-bol-fill" />
                <div className="tuprs-bol-upper" />
                <div className="tuprs-bol-mid" />
                <div className="tuprs-bol-lower" />
                <div className="tuprs-bol-marker" />
              </div>
              <div className="tuprs-bol-labels">
                <span>BOL U: 271.91</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 250.10</span>
                <span>BOL D: 228.28</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "271.91 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "250.10 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "228.28 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "43.63 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "240.80 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="tuprs-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="tuprs-ind-name">{r.name}</span>
                <span className="tuprs-ind-val">{r.val}</span>
                <span className={`tuprs-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>250.10 TL</strong> seviyesinin altında kapanış yapmış durumda. Son tepkiyle fiyat alt banttan uzaklaşmış olsa da orta band aşılmadıkça kısa vadeli görünümde tam rahatlama beklemek zor. Aşağıda <strong style={{ color: "var(--accent)" }}>228.28 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="tuprs-section-title"><span className="tuprs-section-num">03</span> İndikatörler</div>
          <div className="tuprs-two-col">
            <div className="tuprs-analysis-card">
              <div className="tuprs-analysis-card-head">
                <div className="tuprs-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="tuprs-analysis-card-body">
                <div className="tuprs-ind-row"><span className="tuprs-ind-name">StocK</span><span className="tuprs-ind-val">53.66</span><span className="tuprs-ind-signal neutral">Nötr</span></div>
                <div className="tuprs-ind-row"><span className="tuprs-ind-name">StocD</span><span className="tuprs-ind-val">48.88</span><span className="tuprs-ind-signal buy">Tepki</span></div>
                <div className="tuprs-ind-row" style={{ borderBottom: "none" }}><span className="tuprs-ind-name">Konum</span><span className="tuprs-ind-val">Nötr</span><span className="tuprs-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tuprs-progress-label"><span>Aşırı Satım (0)</span><span>53.66</span><span>Aşırı Alım (100)</span></div>
                  <div className="tuprs-progress-bar"><div className="tuprs-progress-fill" style={{ width: "53.66%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyatın orta banda ve kısa vadeli ortalamaların tamamına yaklaşması teyit için izlenmeli.</p>
              </div>
            </div>

            <div className="tuprs-analysis-card">
              <div className="tuprs-analysis-card-head">
                <div className="tuprs-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="tuprs-analysis-card-body">
                <div className="tuprs-ind-row"><span className="tuprs-ind-name">MACD</span><span className="tuprs-ind-val">-5.4121</span><span className="tuprs-ind-signal sell">Negatif</span></div>
                <div className="tuprs-ind-row"><span className="tuprs-ind-name">Trigger</span><span className="tuprs-ind-val">-3.9350</span><span className="tuprs-ind-signal sell">Baskı</span></div>
                <div className="tuprs-ind-row" style={{ borderBottom: "none" }}><span className="tuprs-ind-name">Momentum</span><span className="tuprs-ind-val">Zayıf</span><span className="tuprs-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor; ancak fiyatın güçlü kapanışı tepki ihtimalini artırıyor.</p>
              </div>
            </div>

            <div className="tuprs-analysis-card">
              <div className="tuprs-analysis-card-head">
                <div className="tuprs-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="tuprs-analysis-card-body">
                <div className="tuprs-ind-row"><span className="tuprs-ind-name">RSI Değeri</span><span className="tuprs-ind-val">44.16</span><span className="tuprs-ind-signal neutral">Zayıf</span></div>
                <div className="tuprs-ind-row" style={{ borderBottom: "none" }}><span className="tuprs-ind-name">Bölge</span><span className="tuprs-ind-val">Nötr-Alt</span><span className="tuprs-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tuprs-progress-label"><span>30 (A.Satım)</span><span>44.16</span><span>70 (A.Alım)</span></div>
                  <div className="tuprs-progress-bar"><div className="tuprs-progress-fill" style={{ width: "44.16%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun hâlâ sınırlı olduğunu gösterir; 50 üzerine dönüş güçlenme açısından önemlidir.</p>
              </div>
            </div>

            <div className="tuprs-analysis-card">
              <div className="tuprs-analysis-card-head">
                <div className="tuprs-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="tuprs-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="tuprs-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","239.66","Fiyat Üstünde ▲"],
                      ["MAV 13","244.31","Fiyat Altında ▼"],
                      ["MAV 21","247.90","Fiyat Altında ▼"],
                      ["MAV 55","247.58","Fiyat Altında ▼"],
                      ["MAV 89","239.43","Fiyat Üstünde ▲"],
                      ["MAV 144","225.27","Fiyat Üstünde ▲"],
                      ["MAV 233","206.49","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "tuprs-above" : "tuprs-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tuprs-section-title"><span className="tuprs-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="tuprs-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "244.31–247.90", desc: "MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "250.10 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "271.91–279.50", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "239.66–239.43", desc: "MAV 5 ve MAV 89 destek bölgesi" },
              { type: "sup", label: "Ana Destek", price: "233.00–228.28", desc: "Günlük dip ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "225.27–206.49", desc: "MAV 144 ve MAV 233 destek bölgesi" },
            ].map((s) => (
              <div className="tuprs-sr-cell" key={s.label}>
                <div className={`tuprs-sr-type ${s.type}`}>{s.label}</div>
                <div className="tuprs-sr-price">{s.price}</div>
                <div className="tuprs-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="tuprs-section-title"><span className="tuprs-section-num">05</span> Genel Değerlendirme</div>
          <div className="tuprs-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TUPRS, son kapanışını <strong>240.80 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>250.10 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 239.66–250.10 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>239.66 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>206.49–228.28 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="tuprs-section-title"><span className="tuprs-section-num">06</span> Senaryo Analizi</div>
          <div className="tuprs-scenario-grid">
            <div className="tuprs-scenario-card bull">
              <div className="tuprs-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>244.31 TL MAV 13 üzerinde kapanış</li>
                <li>247.90 TL MAV 21 seviyesinin geri alınması</li>
                <li>250.10 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 250.10–271.91 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="tuprs-scenario-card bear">
              <div className="tuprs-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>239.66 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>228.28 TL Bollinger alt bandına geri çekilme</li>
                <li>Hedef: 228.28–225.27 TL destek bölgesi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="tuprs" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="tuprs-disclaimer">
            <div className="tuprs-disclaimer-head">
              <div className="tuprs-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="tuprs-footer">
            <div className="tuprs-footer-inner">
              <div className="tuprs-footer-brand">HOCA İLE BORSA</div>
              <div className="tuprs-footer-meta">
                TUPRS Teknik Analiz Raporu<br />
                Hazırlanma: 05.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="tuprs-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
