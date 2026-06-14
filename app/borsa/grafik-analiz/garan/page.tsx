import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GARAN Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Garanti BBVA (GARAN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/garan",
  },
};

export default function GaranGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="garan" tarih="2026-06-07" />

      <style>{`
        .garan-wrap *, .garan-wrap *::before, .garan-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .garan-wrap {
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

        .garan-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .garan-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .garan-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .garan-hero-title em { color: var(--accent); font-style: normal; }
        .garan-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .garan-price-block { text-align: right; }
        .garan-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .garan-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .garan-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .garan-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .garan-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .garan-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .garan-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .garan-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .garan-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .garan-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .garan-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .garan-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .garan-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .garan-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .garan-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .garan-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .garan-chart-img-wrap { position: relative; padding: 1rem; }
        .garan-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .garan-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .garan-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .garan-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .garan-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .garan-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .garan-icon.blue   { background: rgba(10,187,255,.12); }
        .garan-icon.gold   { background: rgba(245,200,66,.12); }
        .garan-icon.green  { background: rgba(0,208,104,.12); }
        .garan-icon.red    { background: rgba(255,77,106,.12); }
        .garan-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .garan-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .garan-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .garan-ind-row:last-child { border-bottom: none; }
        .garan-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .garan-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .garan-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .garan-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .garan-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .garan-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .garan-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .garan-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .garan-progress-fill { height: 100%; border-radius: 3px; }

        .garan-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .garan-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .garan-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .garan-ma-table tr:last-child td { border-bottom: none; }
        .garan-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .garan-above { color: var(--green); }
        .garan-below { color: var(--red); }

        .garan-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .garan-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .garan-bol-bands { flex: 1; position: relative; height: 48px; }
        .garan-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .garan-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .garan-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .garan-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .garan-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (140.13 - 125.00) / (140.13 - 118.80));
        }
        .garan-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .garan-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .garan-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .garan-sr-cell:hover { background: var(--bg3); }
        .garan-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .garan-sr-type.res { color: var(--red); }
        .garan-sr-type.sup { color: var(--green); }
        .garan-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .garan-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .garan-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .garan-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .garan-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .garan-narrative p:last-child { margin-bottom: 0; }
        .garan-narrative strong { color: var(--accent); font-weight: 600; }
        .garan-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .garan-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .garan-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .garan-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .garan-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .garan-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .garan-scenario-card.bull .garan-scenario-head { color: var(--green); }
        .garan-scenario-card.bear .garan-scenario-head { color: var(--red); }
        .garan-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .garan-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .garan-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .garan-scenario-card.bull li::before { color: var(--green); }
        .garan-scenario-card.bear li::before { color: var(--red); }

        .garan-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .garan-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .garan-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .garan-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .garan-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .garan-disclaimer p + p { margin-top: .4rem; }

        .garan-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .garan-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .garan-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .garan-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .garan-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .garan-hero { grid-template-columns: 1fr; }
          .garan-price-block { text-align: left; }
        }
        @media(max-width:768px) { .garan-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .garan-hero   { padding: 2rem 1rem 1.5rem; }
          .garan-main   { padding: 1.5rem 1rem 3rem; }
          .garan-footer { padding: 1.2rem 1rem; }
          .garan-scenario-grid { grid-template-columns: 1fr; }
          .garan-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="garan-wrap">
        <section className="garan-hero">
          <div>
            <div className="garan-hero-label">Teknik Analiz Raporu</div>
            <h1 className="garan-hero-title">GARANTİ<br /><em>BBVA</em></h1>
            <p className="garan-hero-sub">
              BIST: GARAN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="garan-price-block">
            <div className="garan-price-main"><span className="garan-price-currency">₺</span>125.00</div>
          </div>
        </section>

        <main className="garan-main">
          <div className="garan-section-title"><span className="garan-section-num">01</span> Grafik</div>
          <div className="garan-chart-wrap">
            <div className="garan-chart-header">
              <span className="garan-chart-title-text">GARAN — Günlük Mum Grafiği</span>
              <div className="garan-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`garan-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="garan-chart-img-wrap">
              <img
                src="/garan-analiz.webp"
                alt="GARAN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="garan-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="garan-section-title"><span className="garan-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="garan-bol-card">
            <div className="garan-bol-visual">
              <div className="garan-bol-bands">
                <div className="garan-bol-fill" />
                <div className="garan-bol-upper" />
                <div className="garan-bol-mid" />
                <div className="garan-bol-lower" />
                <div className="garan-bol-marker" />
              </div>
              <div className="garan-bol-labels">
                <span>BOL U: 140.13</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 129.47</span>
                <span>BOL D: 118.80</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "140.13 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "129.47 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "118.80 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "21.33 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "125.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="garan-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="garan-ind-name">{r.name}</span>
                <span className="garan-ind-val">{r.val}</span>
                <span className={`garan-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>129.47 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>118.80 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="garan-section-title"><span className="garan-section-num">03</span> İndikatörler</div>
          <div className="garan-two-col">
            <div className="garan-analysis-card">
              <div className="garan-analysis-card-head">
                <div className="garan-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="garan-analysis-card-body">
                <div className="garan-ind-row"><span className="garan-ind-name">StocK</span><span className="garan-ind-val">72.32</span><span className="garan-ind-signal buy">Tepki</span></div>
                <div className="garan-ind-row"><span className="garan-ind-name">StocD</span><span className="garan-ind-val">66.42</span><span className="garan-ind-signal buy">Pozitif</span></div>
                <div className="garan-ind-row" style={{ borderBottom: "none" }}><span className="garan-ind-name">Konum</span><span className="garan-ind-val">Nötr-Yüksek</span><span className="garan-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="garan-progress-label"><span>Aşırı Satım (0)</span><span>72.32</span><span>Aşırı Alım (100)</span></div>
                  <div className="garan-progress-bar"><div className="garan-progress-fill" style={{ width: "72.32%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D çizgisinin üzerinde; kısa vadeli tepki isteği var. Ancak fiyat ortalamaların altında olduğu için tek başına güçlü al sinyali sayılmaz.</p>
              </div>
            </div>

            <div className="garan-analysis-card">
              <div className="garan-analysis-card-head">
                <div className="garan-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="garan-analysis-card-body">
                <div className="garan-ind-row"><span className="garan-ind-name">MACD</span><span className="garan-ind-val">-2.3774</span><span className="garan-ind-signal sell">Negatif</span></div>
                <div className="garan-ind-row"><span className="garan-ind-name">Trigger</span><span className="garan-ind-val">-2.3326</span><span className="garan-ind-signal sell">Baskı</span></div>
                <div className="garan-ind-row" style={{ borderBottom: "none" }}><span className="garan-ind-name">Momentum</span><span className="garan-ind-val">Zayıf</span><span className="garan-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin hafif altında. Momentum tarafında zayıflık sürüyor; toparlanma için MACD’nin trigger üzerine geçmesi gerekir.</p>
              </div>
            </div>

            <div className="garan-analysis-card">
              <div className="garan-analysis-card-head">
                <div className="garan-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="garan-analysis-card-body">
                <div className="garan-ind-row"><span className="garan-ind-name">RSI Değeri</span><span className="garan-ind-val">43.99</span><span className="garan-ind-signal neutral">Zayıf</span></div>
                <div className="garan-ind-row" style={{ borderBottom: "none" }}><span className="garan-ind-name">Bölge</span><span className="garan-ind-val">Nötr-Alt</span><span className="garan-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="garan-progress-label"><span>30 (A.Satım)</span><span>43.99</span><span>70 (A.Alım)</span></div>
                  <div className="garan-progress-bar"><div className="garan-progress-fill" style={{ width: "43.99%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="garan-analysis-card">
              <div className="garan-analysis-card-head">
                <div className="garan-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="garan-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="garan-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","126.33","Fiyat Altında ▼"],
                      ["MAV 13","127.34","Fiyat Altında ▼"],
                      ["MAV 21","128.79","Fiyat Altında ▼"],
                      ["MAV 55","132.24","Fiyat Altında ▼"],
                      ["MAV 89","133.83","Fiyat Altında ▼"],
                      ["MAV 144","133.92","Fiyat Altında ▼"],
                      ["MAV 233","131.28","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="garan-below">{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="garan-section-title"><span className="garan-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="garan-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "126.30–128.80", desc: "MAV 5/13/21 kısa vadeli ortalama bandı" },
              { type: "res", label: "Kritik Direnç", price: "129.47 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "res", label: "Güçlü Direnç", price: "131.30–134.00", desc: "MAV 233 ve MAV 55/89/144 bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "124.90–125.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "118.80 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "116.00–118.00", desc: "Grafikte önceki tepki bölgesi" },
            ].map((s) => (
              <div className="garan-sr-cell" key={s.label}>
                <div className={`garan-sr-type ${s.type}`}>{s.label}</div>
                <div className="garan-sr-price">{s.price}</div>
                <div className="garan-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="garan-section-title"><span className="garan-section-num">05</span> Genel Değerlendirme</div>
          <div className="garan-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>GARAN, son dönemde 145 TL üzerindeki bölgeden gelen satış baskısı sonrası <strong>125.00 TL</strong> seviyesinde kapanış yapmıştır. Fiyatın kısa ve orta vadeli hareketli ortalamaların tamamının altında kalması, kısa vadeli teknik görünümün zayıfladığını göstermektedir.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>129.47 TL orta bandının altında</strong> işlem görüyor. Bu yapı, yukarı yönlü tepki denemeleri gelse bile orta band aşılmadıkça baskının devam edebileceğine işaret eder.</p>
            <p>Stochastic göstergesi tepki isteğine işaret etse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle fiyatın 126.30–129.47 TL bandını geri alması teknik görünüm açısından önemlidir.</p>
            <p>124.90 TL altı kapanışlarda satış baskısı yeniden hızlanabilir. Bu durumda <strong>118.80 TL Bollinger alt bandı</strong> ana destek olarak takip edilmelidir.</p>
          </div>

          <div className="garan-section-title"><span className="garan-section-num">06</span> Senaryo Analizi</div>
          <div className="garan-scenario-grid">
            <div className="garan-scenario-card bull">
              <div className="garan-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>126.33 TL MAV 5 üzerinde kapanış</li>
                <li>128.79 TL MAV 21 seviyesinin geri alınması</li>
                <li>129.47 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 131.30–134.00 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="garan-scenario-card bear">
              <div className="garan-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>124.90 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>Bollinger alt banda doğru baskının artması</li>
                <li>Hedef: 118.80 TL destek testi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="garan" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="garan-disclaimer">
            <div className="garan-disclaimer-head">
              <div className="garan-disclaimer-icon">⚠</div>
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
