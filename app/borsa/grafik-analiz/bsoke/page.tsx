import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";
import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSOKE Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Batısöke Çimento (BSOKE) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/bsoke",
  },
};

export default function BsokeGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="bsoke" tarih="2026-06-08" />

      <style>{`
        .bsoke-wrap *, .bsoke-wrap *::before, .bsoke-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .bsoke-wrap {
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

        .bsoke-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .bsoke-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .bsoke-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .bsoke-hero-title em { color: var(--accent); font-style: normal; }
        .bsoke-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .bsoke-price-block { text-align: right; }
        .bsoke-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .bsoke-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .bsoke-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .bsoke-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .bsoke-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .bsoke-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .bsoke-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .bsoke-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .bsoke-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .bsoke-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .bsoke-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .bsoke-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .bsoke-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .bsoke-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .bsoke-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .bsoke-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .bsoke-chart-img-wrap { position: relative; padding: 1rem; }
        .bsoke-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .bsoke-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .bsoke-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .bsoke-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .bsoke-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .bsoke-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .bsoke-icon.blue   { background: rgba(10,187,255,.12); }
        .bsoke-icon.gold   { background: rgba(245,200,66,.12); }
        .bsoke-icon.green  { background: rgba(0,208,104,.12); }
        .bsoke-icon.red    { background: rgba(255,77,106,.12); }
        .bsoke-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .bsoke-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .bsoke-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .bsoke-ind-row:last-child { border-bottom: none; }
        .bsoke-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .bsoke-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .bsoke-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .bsoke-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .bsoke-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .bsoke-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .bsoke-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .bsoke-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .bsoke-progress-fill { height: 100%; border-radius: 3px; }

        .bsoke-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .bsoke-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .bsoke-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .bsoke-ma-table tr:last-child td { border-bottom: none; }
        .bsoke-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .bsoke-above { color: var(--green); }
        .bsoke-below { color: var(--red); }

        .bsoke-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .bsoke-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .bsoke-bol-bands { flex: 1; position: relative; height: 48px; }
        .bsoke-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .bsoke-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .bsoke-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .bsoke-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .bsoke-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (39.99 - 35.32) / (39.99 - 34.76));
        }
        .bsoke-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .bsoke-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .bsoke-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .bsoke-sr-cell:hover { background: var(--bg3); }
        .bsoke-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .bsoke-sr-type.res { color: var(--red); }
        .bsoke-sr-type.sup { color: var(--green); }
        .bsoke-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .bsoke-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .bsoke-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .bsoke-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .bsoke-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .bsoke-narrative p:last-child { margin-bottom: 0; }
        .bsoke-narrative strong { color: var(--accent); font-weight: 600; }
        .bsoke-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .bsoke-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .bsoke-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .bsoke-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .bsoke-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .bsoke-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .bsoke-scenario-card.bull .bsoke-scenario-head { color: var(--green); }
        .bsoke-scenario-card.bear .bsoke-scenario-head { color: var(--red); }
        .bsoke-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .bsoke-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .bsoke-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .bsoke-scenario-card.bull li::before { color: var(--green); }
        .bsoke-scenario-card.bear li::before { color: var(--red); }

        .bsoke-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .bsoke-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .bsoke-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .bsoke-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .bsoke-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .bsoke-disclaimer p + p { margin-top: .4rem; }

        .bsoke-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .bsoke-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .bsoke-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .bsoke-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .bsoke-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .bsoke-hero { grid-template-columns: 1fr; }
          .bsoke-price-block { text-align: left; }
        }
        @media(max-width:768px) { .bsoke-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .bsoke-hero   { padding: 2rem 1rem 1.5rem; }
          .bsoke-main   { padding: 1.5rem 1rem 3rem; }
          .bsoke-footer { padding: 1.2rem 1rem; }
          .bsoke-scenario-grid { grid-template-columns: 1fr; }
          .bsoke-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bsoke-wrap">
        <section className="bsoke-hero">
          <div>
            <div className="bsoke-hero-label">Teknik Analiz Raporu</div>
            <h1 className="bsoke-hero-title">BSOKE<br /><em>ÇİMENTO</em></h1>
            <p className="bsoke-hero-sub">
              BIST: BSOKE &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="bsoke-price-block">
            <div className="bsoke-price-main"><span className="bsoke-price-currency">₺</span>35.32</div>
          </div>
        </section>

        <main className="bsoke-main">
          <div className="bsoke-section-title"><span className="bsoke-section-num">01</span> Grafik</div>
          <div className="bsoke-chart-wrap">
            <div className="bsoke-chart-header">
              <span className="bsoke-chart-title-text">BSOKE — Günlük Mum Grafiği</span>
              <div className="bsoke-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`bsoke-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="bsoke-chart-img-wrap">
              <img
                src="/bsoke-analiz.webp"
                alt="BSOKE Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.06.2026"
                loading="lazy"
              />
              <div className="bsoke-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="bsoke-section-title"><span className="bsoke-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="bsoke-bol-card">
            <div className="bsoke-bol-visual">
              <div className="bsoke-bol-bands">
                <div className="bsoke-bol-fill" />
                <div className="bsoke-bol-upper" />
                <div className="bsoke-bol-mid" />
                <div className="bsoke-bol-lower" />
                <div className="bsoke-bol-marker" />
              </div>
              <div className="bsoke-bol-labels">
                <span>BOL U: 39.99</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 37.37</span>
                <span>BOL D: 34.76</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "39.99 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "37.37 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "34.76 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "4.63 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "35.32 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="bsoke-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="bsoke-ind-name">{r.name}</span>
                <span className="bsoke-ind-val">{r.val}</span>
                <span className={`bsoke-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>37.37 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>34.76 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="bsoke-section-title"><span className="bsoke-section-num">03</span> İndikatörler</div>
          <div className="bsoke-two-col">
            <div className="bsoke-analysis-card">
              <div className="bsoke-analysis-card-head">
                <div className="bsoke-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="bsoke-analysis-card-body">
                <div className="bsoke-ind-row"><span className="bsoke-ind-name">StocK</span><span className="bsoke-ind-val">36.30</span><span className="bsoke-ind-signal neutral">Zayıf-Nötr</span></div>
                <div className="bsoke-ind-row"><span className="bsoke-ind-name">StocD</span><span className="bsoke-ind-val">40.15</span><span className="bsoke-ind-signal buy">Tepki</span></div>
                <div className="bsoke-ind-row" style={{ borderBottom: "none" }}><span className="bsoke-ind-name">Konum</span><span className="bsoke-ind-val">Zayıf-Nötr</span><span className="bsoke-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="bsoke-progress-label"><span>Aşırı Satım (0)</span><span>36.30</span><span>Aşırı Alım (100)</span></div>
                  <div className="bsoke-progress-bar"><div className="bsoke-progress-fill" style={{ width: "36.30%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="bsoke-analysis-card">
              <div className="bsoke-analysis-card-head">
                <div className="bsoke-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="bsoke-analysis-card-body">
                <div className="bsoke-ind-row"><span className="bsoke-ind-name">MACD</span><span className="bsoke-ind-val">0.0210</span><span className="bsoke-ind-signal sell">Negatif</span></div>
                <div className="bsoke-ind-row"><span className="bsoke-ind-name">Trigger</span><span className="bsoke-ind-val">0.3495</span><span className="bsoke-ind-signal sell">Baskı</span></div>
                <div className="bsoke-ind-row" style={{ borderBottom: "none" }}><span className="bsoke-ind-name">Momentum</span><span className="bsoke-ind-val">Zayıf</span><span className="bsoke-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ancak trigger çizgisinin altında. Bu durum ana momentumun tamamen bozulmadığını fakat kısa vadeli ivmenin zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="bsoke-analysis-card">
              <div className="bsoke-analysis-card-head">
                <div className="bsoke-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="bsoke-analysis-card-body">
                <div className="bsoke-ind-row"><span className="bsoke-ind-name">RSI Değeri</span><span className="bsoke-ind-val">44.16</span><span className="bsoke-ind-signal neutral">Zayıf</span></div>
                <div className="bsoke-ind-row" style={{ borderBottom: "none" }}><span className="bsoke-ind-name">Bölge</span><span className="bsoke-ind-val">Zayıf-Nötr-Alt</span><span className="bsoke-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="bsoke-progress-label"><span>30 (A.Satım)</span><span>44.16</span><span>70 (A.Alım)</span></div>
                  <div className="bsoke-progress-bar"><div className="bsoke-progress-fill" style={{ width: "44.16%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="bsoke-analysis-card">
              <div className="bsoke-analysis-card-head">
                <div className="bsoke-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="bsoke-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="bsoke-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","36.29","Fiyat Altında ▼"],
                      ["MAV 13","36.85","Fiyat Altında ▼"],
                      ["MAV 21","36.85","Fiyat Altında ▼"],
                      ["MAV 55","35.18","Fiyat Üstünde ▲"],
                      ["MAV 89","32.76","Fiyat Üstünde ▲"],
                      ["MAV 144","29.39","Fiyat Üstünde ▲"],
                      ["MAV 233","25.60","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "bsoke-above" : "bsoke-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bsoke-section-title"><span className="bsoke-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="bsoke-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "36.29–36.85", desc: "MAV 5, MAV 13 ve MAV 21 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "37.37 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "39.99–40.00", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "35.18–35.04", desc: "MAV 55 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "34.76 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "32.76 TL", desc: "MAV 89 destek bölgesi" },
            ].map((s) => (
              <div className="bsoke-sr-cell" key={s.label}>
                <div className={`bsoke-sr-type ${s.type}`}>{s.label}</div>
                <div className="bsoke-sr-price">{s.price}</div>
                <div className="bsoke-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="bsoke-section-title"><span className="bsoke-section-num">05</span> Genel Değerlendirme</div>
          <div className="bsoke-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>BSOKE, son kapanışını <strong>35.32 TL</strong> seviyesinde yapmıştır. Fiyat MAV 5, MAV 13 ve MAV 21’in altında kalırken, MAV 55, MAV 89, MAV 144 ve MAV 233 üzerinde tutunuyor. Bu yapı kısa vadede zayıflama olduğunu, ancak ana destek yapısının korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>37.37 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir. Aşağıda <strong>34.76 TL</strong> Bollinger alt bandı ana destek olarak öne çıkıyor.</p>
            <p>Stochastic göstergesi 36.30 / 40.15 seviyelerinde ve K çizgisi D çizgisinin altında. <em>MACD pozitif bölgede</em> olmasına rağmen trigger çizgisinin altında seyrediyor. RSI 44.16 ile 50 eşiğinin altında kaldığı için momentum tarafında henüz güçlü toparlanma teyidi yok.</p>
            <p>36.29–37.37 TL bandının geri alınması kısa vadeli görünümü rahatlatır. 35.04 TL altı kapanışlarda ise 34.76 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="bsoke-section-title"><span className="bsoke-section-num">06</span> Senaryo Analizi</div>
          <div className="bsoke-scenario-grid">
            <div className="bsoke-scenario-card bull">
              <div className="bsoke-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>36.29 TL MAV 5 üzerinde kapanış</li>
                <li>36.85 TL MAV 13 seviyesinin geri alınması</li>
                <li>39.99 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 37.37–39.99 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="bsoke-scenario-card bear">
              <div className="bsoke-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>35.18 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>32.76 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 32.76–29.39 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="bsoke" />

          <div className="bsoke-disclaimer">
            <div className="bsoke-disclaimer-head">
              <div className="bsoke-disclaimer-icon">⚠</div>
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
