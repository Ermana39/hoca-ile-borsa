import Link from "next/link";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISCTR Teknik Analiz — 07.06.2026",
  description:
    "Türkiye İş Bankası C (ISCTR) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/isctr",
  },
};

export default function IsctrGrafikAnaliz() {
  return (
    <>


      <style>{`
        .isctr-wrap *, .isctr-wrap *::before, .isctr-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .isctr-wrap {
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

        .isctr-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .isctr-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .isctr-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .isctr-hero-title em { color: var(--accent); font-style: normal; }
        .isctr-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .isctr-price-block { text-align: right; }
        .isctr-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .isctr-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .isctr-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .isctr-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .isctr-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .isctr-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .isctr-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .isctr-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .isctr-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .isctr-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .isctr-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .isctr-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .isctr-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .isctr-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .isctr-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .isctr-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .isctr-chart-img-wrap { position: relative; padding: 1rem; }
        .isctr-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .isctr-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .isctr-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .isctr-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .isctr-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .isctr-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .isctr-icon.blue   { background: rgba(10,187,255,.12); }
        .isctr-icon.gold   { background: rgba(245,200,66,.12); }
        .isctr-icon.green  { background: rgba(0,208,104,.12); }
        .isctr-icon.red    { background: rgba(255,77,106,.12); }
        .isctr-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .isctr-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .isctr-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .isctr-ind-row:last-child { border-bottom: none; }
        .isctr-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .isctr-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .isctr-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .isctr-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .isctr-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .isctr-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .isctr-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .isctr-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .isctr-progress-fill { height: 100%; border-radius: 3px; }

        .isctr-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .isctr-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .isctr-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .isctr-ma-table tr:last-child td { border-bottom: none; }
        .isctr-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .isctr-above { color: var(--green); }
        .isctr-below { color: var(--red); }

        .isctr-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .isctr-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .isctr-bol-bands { flex: 1; position: relative; height: 48px; }
        .isctr-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .isctr-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .isctr-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .isctr-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .isctr-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (14.92 - 13.19) / (14.92 - 12.64));
        }
        .isctr-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .isctr-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .isctr-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .isctr-sr-cell:hover { background: var(--bg3); }
        .isctr-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .isctr-sr-type.res { color: var(--red); }
        .isctr-sr-type.sup { color: var(--green); }
        .isctr-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .isctr-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .isctr-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .isctr-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .isctr-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .isctr-narrative p:last-child { margin-bottom: 0; }
        .isctr-narrative strong { color: var(--accent); font-weight: 600; }
        .isctr-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .isctr-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .isctr-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .isctr-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .isctr-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .isctr-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .isctr-scenario-card.bull .isctr-scenario-head { color: var(--green); }
        .isctr-scenario-card.bear .isctr-scenario-head { color: var(--red); }
        .isctr-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .isctr-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .isctr-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .isctr-scenario-card.bull li::before { color: var(--green); }
        .isctr-scenario-card.bear li::before { color: var(--red); }

        .isctr-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .isctr-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .isctr-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .isctr-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .isctr-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .isctr-disclaimer p + p { margin-top: .4rem; }

        .isctr-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .isctr-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .isctr-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .isctr-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .isctr-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .isctr-hero { grid-template-columns: 1fr; }
          .isctr-price-block { text-align: left; }
        }
        @media(max-width:768px) { .isctr-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .isctr-hero   { padding: 2rem 1rem 1.5rem; }
          .isctr-main   { padding: 1.5rem 1rem 3rem; }
          .isctr-footer { padding: 1.2rem 1rem; }
          .isctr-scenario-grid { grid-template-columns: 1fr; }
          .isctr-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="isctr-wrap">
        <section className="isctr-hero">
          <div>
            <div className="isctr-hero-label">Teknik Analiz Raporu</div>
            <h1 className="isctr-hero-title">TÜRKİYE<br /><em>İŞ BANKASI</em></h1>
            <p className="isctr-hero-sub">
              BIST: ISCTR &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="isctr-price-block">
            <div className="isctr-price-main"><span className="isctr-price-currency">₺</span>13.19</div>
          </div>
        </section>

        <main className="isctr-main">
          <div className="isctr-section-title"><span className="isctr-section-num">01</span> Grafik</div>
          <div className="isctr-chart-wrap">
            <div className="isctr-chart-header">
              <span className="isctr-chart-title-text">ISCTR — Günlük Mum Grafiği</span>
              <div className="isctr-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`isctr-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="isctr-chart-img-wrap">
              <img
                src="/isctr-analiz.webp"
                alt="ISCTR Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="isctr-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="isctr-section-title"><span className="isctr-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="isctr-bol-card">
            <div className="isctr-bol-visual">
              <div className="isctr-bol-bands">
                <div className="isctr-bol-fill" />
                <div className="isctr-bol-upper" />
                <div className="isctr-bol-mid" />
                <div className="isctr-bol-lower" />
                <div className="isctr-bol-marker" />
              </div>
              <div className="isctr-bol-labels">
                <span>BOL U: 14.92</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 13.78</span>
                <span>BOL D: 12.64</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "14.92 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "13.78 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "12.64 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "2.28 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "13.19 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="isctr-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="isctr-ind-name">{r.name}</span>
                <span className="isctr-ind-val">{r.val}</span>
                <span className={`isctr-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>13.78 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>12.64 TL</strong> alt bandı ana destek olarak izlenebilir.
            </p>
          </div>

          <div className="isctr-section-title"><span className="isctr-section-num">03</span> İndikatörler</div>
          <div className="isctr-two-col">
            <div className="isctr-analysis-card">
              <div className="isctr-analysis-card-head">
                <div className="isctr-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="isctr-analysis-card-body">
                <div className="isctr-ind-row"><span className="isctr-ind-name">StocK</span><span className="isctr-ind-val">68.55</span><span className="isctr-ind-signal buy">Tepki</span></div>
                <div className="isctr-ind-row"><span className="isctr-ind-name">StocD</span><span className="isctr-ind-val">62.58</span><span className="isctr-ind-signal buy">Pozitif</span></div>
                <div className="isctr-ind-row" style={{ borderBottom: "none" }}><span className="isctr-ind-name">Konum</span><span className="isctr-ind-val">Nötr-Yüksek</span><span className="isctr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="isctr-progress-label"><span>Aşırı Satım (0)</span><span>68.55</span><span>Aşırı Alım (100)</span></div>
                  <div className="isctr-progress-bar"><div className="isctr-progress-fill" style={{ width: "68.55%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic tarafında tepki isteği var. Ancak fiyat kısa vadeli ortalamaların altında kaldığı için bu sinyal tek başına güçlü alım teyidi sayılmaz.</p>
              </div>
            </div>

            <div className="isctr-analysis-card">
              <div className="isctr-analysis-card-head">
                <div className="isctr-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="isctr-analysis-card-body">
                <div className="isctr-ind-row"><span className="isctr-ind-name">MACD</span><span className="isctr-ind-val">-0.2320</span><span className="isctr-ind-signal sell">Negatif</span></div>
                <div className="isctr-ind-row"><span className="isctr-ind-name">Trigger</span><span className="isctr-ind-val">-0.2047</span><span className="isctr-ind-signal sell">Baskı</span></div>
                <div className="isctr-ind-row" style={{ borderBottom: "none" }}><span className="isctr-ind-name">Momentum</span><span className="isctr-ind-val">Zayıf</span><span className="isctr-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık sürüyor; toparlanma için MACD’nin trigger üzerine geçmesi gerekir.</p>
              </div>
            </div>

            <div className="isctr-analysis-card">
              <div className="isctr-analysis-card-head">
                <div className="isctr-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="isctr-analysis-card-body">
                <div className="isctr-ind-row"><span className="isctr-ind-name">RSI Değeri</span><span className="isctr-ind-val">42.55</span><span className="isctr-ind-signal neutral">Zayıf</span></div>
                <div className="isctr-ind-row" style={{ borderBottom: "none" }}><span className="isctr-ind-name">Bölge</span><span className="isctr-ind-val">Nötr-Alt</span><span className="isctr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="isctr-progress-label"><span>30 (A.Satım)</span><span>42.55</span><span>70 (A.Alım)</span></div>
                  <div className="isctr-progress-bar"><div className="isctr-progress-fill" style={{ width: "42.55%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="isctr-analysis-card">
              <div className="isctr-analysis-card-head">
                <div className="isctr-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="isctr-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="isctr-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","13.39","Fiyat Altında ▼"],
                      ["MAV 13","13.52","Fiyat Altında ▼"],
                      ["MAV 21","13.67","Fiyat Altında ▼"],
                      ["MAV 55","13.95","Fiyat Altında ▼"],
                      ["MAV 89","14.00","Fiyat Altında ▼"],
                      ["MAV 144","13.90","Fiyat Altında ▼"],
                      ["MAV 233","13.64","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="isctr-below">{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="isctr-section-title"><span className="isctr-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="isctr-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "13.39–13.67", desc: "MAV 5/13/21 kısa vadeli ortalama bandı" },
              { type: "res", label: "Kritik Direnç", price: "13.78–14.00", desc: "Bollinger orta bandı ve MAV 55/89 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "14.92 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "13.17–13.19", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "12.64 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "12.00–12.20", desc: "Grafikte önceki tepki bölgesi" },
            ].map((s) => (
              <div className="isctr-sr-cell" key={s.label}>
                <div className={`isctr-sr-type ${s.type}`}>{s.label}</div>
                <div className="isctr-sr-price">{s.price}</div>
                <div className="isctr-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="isctr-section-title"><span className="isctr-section-num">05</span> Genel Değerlendirme</div>
          <div className="isctr-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>ISCTR, son kapanışını <strong>13.19 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların tamamının altında kalmıştır. Bu yapı kısa vadeli teknik görünümün zayıfladığını göstermektedir.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>13.78 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki denemeleri sınırlı kalabilir.</p>
            <p>Stochastic göstergesi tepki isteğine işaret etse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 13.39–13.78 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>13.17 TL altı kapanışlarda satış baskısı yeniden hızlanabilir. Bu durumda <strong>12.64 TL Bollinger alt bandı</strong> ana destek olarak takip edilmelidir.</p>
          </div>

          <div className="isctr-section-title"><span className="isctr-section-num">06</span> Senaryo Analizi</div>
          <div className="isctr-scenario-grid">
            <div className="isctr-scenario-card bull">
              <div className="isctr-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>13.39 TL MAV 5 üzerinde kapanış</li>
                <li>13.67 TL MAV 21 seviyesinin geri alınması</li>
                <li>13.78 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 13.95–14.92 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="isctr-scenario-card bear">
              <div className="isctr-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>13.17 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>Bollinger alt banda doğru baskının artması</li>
                <li>Hedef: 12.64 TL destek testi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="isctr" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="isctr-disclaimer">
            <div className="isctr-disclaimer-head">
              <div className="isctr-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="isctr-footer">
            <div className="isctr-footer-inner">
              <div className="isctr-footer-brand">HOCA İLE BORSA</div>
              <div className="isctr-footer-meta">
                ISCTR Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="isctr-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
