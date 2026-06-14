import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import type { Metadata } from "next";

import HisseProfili from "@/components/HisseProfili";

export const metadata: Metadata = {
  title: "AKBNK Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Akbank (AKBNK) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/akbnk",
  },
};

export default function AkbnkGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="akbnk" tarih="2026-06-06" />

      <style>{`
        .aefes-wrap *, .aefes-wrap *::before, .aefes-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .aefes-wrap {
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
        .aefes-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .aefes-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .aefes-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .aefes-hero-title em { color: var(--accent); font-style: normal; }
        .aefes-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .aefes-price-block { text-align: right; }
        .aefes-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .aefes-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        /* MAIN */
        .aefes-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }


        /* SECTION TITLE */
        .aefes-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .aefes-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .aefes-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        /* CHART */
        .aefes-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .aefes-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .aefes-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .aefes-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .aefes-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .aefes-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .aefes-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .aefes-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .aefes-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .aefes-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .aefes-chart-img-wrap { position: relative; padding: 1rem; }
        .aefes-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .aefes-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        /* TWO COL */
        .aefes-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        /* ANALYSIS CARD */
        .aefes-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .aefes-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .aefes-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .aefes-icon.blue   { background: rgba(10,187,255,.12); }
        .aefes-icon.gold   { background: rgba(245,200,66,.12); }
        .aefes-icon.green  { background: rgba(0,208,104,.12); }
        .aefes-icon.red    { background: rgba(255,77,106,.12); }
        .aefes-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .aefes-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        /* IND ROW */
        .aefes-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .aefes-ind-row:last-child { border-bottom: none; }
        .aefes-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .aefes-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .aefes-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .aefes-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .aefes-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .aefes-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        /* PROGRESS */
        .aefes-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .aefes-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .aefes-progress-fill { height: 100%; border-radius: 3px; }

        /* MA TABLE */
        .aefes-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .aefes-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .aefes-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .aefes-ma-table tr:last-child td { border-bottom: none; }
        .aefes-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .aefes-above { color: var(--green); }
        .aefes-below { color: var(--red); }

        /* BOLLINGER */
        .aefes-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .aefes-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .aefes-bol-bands { flex: 1; position: relative; height: 48px; }
        .aefes-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .aefes-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .aefes-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .aefes-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .aefes-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (77.68 - 64.50) / (77.68 - 60.20));
        }
        .aefes-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        /* SR GRID */
        .aefes-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .aefes-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .aefes-sr-cell:hover { background: var(--bg3); }
        .aefes-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .aefes-sr-type.res { color: var(--red); }
        .aefes-sr-type.sup { color: var(--green); }
        .aefes-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .aefes-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        /* NARRATIVE */
        .aefes-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .aefes-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .aefes-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .aefes-narrative p:last-child { margin-bottom: 0; }
        .aefes-narrative strong { color: var(--accent); font-weight: 600; }
        .aefes-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        /* SCENARIO */
        .aefes-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .aefes-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .aefes-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .aefes-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .aefes-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .aefes-scenario-card.bull .aefes-scenario-head { color: var(--green); }
        .aefes-scenario-card.bear .aefes-scenario-head { color: var(--red); }
        .aefes-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .aefes-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .aefes-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .aefes-scenario-card.bull li::before { color: var(--green); }
        .aefes-scenario-card.bear li::before { color: var(--red); }

        /* DISCLAIMER */
        .aefes-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .aefes-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .aefes-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .aefes-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .aefes-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .aefes-disclaimer p + p { margin-top: .4rem; }

        /* FOOTER */
        .aefes-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .aefes-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .aefes-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .aefes-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .aefes-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        /* RESPONSIVE */
        @media(max-width:900px) {
          .aefes-hero { grid-template-columns: 1fr; }
          .aefes-price-block { text-align: left; }
        }
        @media(max-width:768px) { .aefes-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .aefes-hero   { padding: 2rem 1rem 1.5rem; }
          .aefes-main   { padding: 1.5rem 1rem 3rem; }
          .aefes-footer { padding: 1.2rem 1rem; }
          .aefes-scenario-grid { grid-template-columns: 1fr; }
          .aefes-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="aefes-wrap">


        {/* HERO */}
        <section className="aefes-hero">
          <div>
            <div className="aefes-hero-label">Teknik Analiz Raporu</div>
            <h1 className="aefes-hero-title">AKBANK<br /><em>AKBNK</em></h1>
            <p className="aefes-hero-sub">
 &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="aefes-price-block">
            <div className="aefes-price-main"><span className="aefes-price-currency">₺</span>64.50</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="aefes-main">

          {/* CHART */}
          <div className="aefes-section-title"><span className="aefes-section-num">01</span> Grafik</div>
          <div className="aefes-chart-wrap">
            <div className="aefes-chart-header">
              <span className="aefes-chart-title-text">AKBNK — Günlük Mum Grafiği</span>
              <div className="aefes-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`aefes-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="aefes-chart-img-wrap">
              <img
                src="/akbnk-analiz.webp"
                alt="AKBNK Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="aefes-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="aefes-section-title"><span className="aefes-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="aefes-bol-card">
            <div className="aefes-bol-visual">
              <div className="aefes-bol-bands">
                <div className="aefes-bol-fill" />
                <div className="aefes-bol-upper" />
                <div className="aefes-bol-mid" />
                <div className="aefes-bol-lower" />
                <div className="aefes-bol-marker" />
              </div>
              <div className="aefes-bol-labels">
                <span>BOL U: 77.68</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 68.94</span>
                <span>BOL D: 60.20</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",  val: "77.68 TL", sig: "Güçlü Direnç",   cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "68.94 TL", sig: "Ana Direnç",     cls: "sell" },
              { name: "Alt Band (BOL D)",  val: "60.20 TL", sig: "Güçlü Destek",   cls: "buy" },
              { name: "Bant Genişliği",    val: "17.48 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",    val: "64.50 TL", sig: "Alt Banda Yakın", cls: "sell" },
            ].map((r, i) => (
              <div className="aefes-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="aefes-ind-name">{r.name}</span>
                <span className="aefes-ind-val">{r.val}</span>
                <span className={`aefes-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan 68.94 TL seviyesinin altında ve alt banda daha yakın bölgede konumlanıyor. Bu yapı <strong style={{ color: "var(--red)" }}>kısa vadeli zayıflığın sürdüğünü</strong> gösterir. 68.94 TL üzerine dönüş gelmeden tepki hareketleri sınırlı kalabilir; aşağıda 60.20 TL Bollinger alt bandı ana destek olarak izlenir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="aefes-section-title"><span className="aefes-section-num">03</span> İndikatörler</div>
          <div className="aefes-two-col">

            {/* Stochastic */}
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head">
                <div className="aefes-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">StocK</span><span className="aefes-ind-val">71.01</span><span className="aefes-ind-signal buy">TEPKİ</span></div>
                <div className="aefes-ind-row"><span className="aefes-ind-name">StocD</span><span className="aefes-ind-val">62.66</span><span className="aefes-ind-signal buy">YUKARI</span></div>
                <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Konum</span><span className="aefes-ind-val">Nötr-Yüksek</span><span className="aefes-ind-signal neutral">Teyit Bekler</span></div>
                <div>
                  <div className="aefes-progress-label"><span>Aşırı Satım (0)</span><span>71.01</span><span>Aşırı Alım (100)</span></div>
                  <div className="aefes-progress-bar"><div className="aefes-progress-fill" style={{ width: "71.01%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D&apos;nin üzerinde; kısa vadeli tepki isteği var. Ancak fiyat ana ortalamaların altında kaldığı için bu sinyal tek başına güçlü alım teyidi sayılmaz.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head">
                <div className="aefes-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">MACD</span><span className="aefes-ind-val">-2.6009</span><span className="aefes-ind-signal sell">NEGATİF</span></div>
                <div className="aefes-ind-row"><span className="aefes-ind-name">Trigger</span><span className="aefes-ind-val">-2.4017</span><span className="aefes-ind-signal sell">SAT</span></div>
                <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Momentum</span><span className="aefes-ind-val">Zayıf</span><span className="aefes-ind-signal sell">Baskı</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger altında. Bu yapı satış baskısının sürdüğünü gösterir. Toparlanmanın güçlenmesi için MACD&apos;nin trigger üzerine geçmesi gerekir.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head">
                <div className="aefes-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">RSI Değeri</span><span className="aefes-ind-val">39.49</span><span className="aefes-ind-signal sell">ZAYIF</span></div>
                <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Bölge</span><span className="aefes-ind-val">Zayıf-Nötr</span><span className="aefes-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="aefes-progress-label"><span>30 (A.Satım)</span><span>39.49</span><span>70 (A.Alım)</span></div>
                  <div className="aefes-progress-bar"><div className="aefes-progress-fill" style={{ width: "39.49%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 40 seviyesine yakın ve 50 altında. Bu durum zayıf momentumun sürdüğünü gösterir. 50 üzeri dönüş toparlanma açısından ilk olumlu sinyal olur.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head">
                <div className="aefes-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="aefes-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="aefes-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","65.35","Fiyat Altında ▼","aefes-below"],
                      ["MAV 13","66.79","Fiyat Altında ▼","aefes-below"],
                      ["MAV 21","68.39","Fiyat Altında ▼","aefes-below"],
                      ["MAV 55","71.61","Fiyat Altında ▼","aefes-below"],
                      ["MAV 89","72.10","Fiyat Altında ▼","aefes-below"],
                      ["MAV 144","71.07","Fiyat Altında ▼","aefes-below"],
                      ["MAV 233","68.57","Fiyat Altında ▼","aefes-below"],
                    ].map(([p,v,durum,cls]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={cls}>{durum}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* SUPPORT / RESISTANCE */}
          <div className="aefes-section-title"><span className="aefes-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="aefes-sr-grid">
            {[
              { type: "res", label: "İlk Direnç",     price: "65.35 TL",   desc: "MAV 5 — kısa vadeli ilk toparlanma eşiği" },
              { type: "res", label: "Ara Direnç",     price: "66.79–68.39",desc: "MAV 13 / MAV 21 bölgesi" },
              { type: "res", label: "Ana Direnç",     price: "68.94 TL",   desc: "Bollinger orta bandı — görünümü rahatlatacak seviye" },
              { type: "res", label: "Güçlü Direnç",   price: "71.00–72.10",desc: "MAV 55 / MAV 89 / MAV 144 bölgesi" },
              { type: "sup", label: "Anlık Destek",   price: "64.40–64.50",desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Güçlü Destek",   price: "60.20 TL",   desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="aefes-sr-cell" key={s.label}>
                <div className={`aefes-sr-type ${s.type}`}>{s.label}</div>
                <div className="aefes-sr-price">{s.price}</div>
                <div className="aefes-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="aefes-section-title"><span className="aefes-section-num">05</span> Genel Değerlendirme</div>
          <div className="aefes-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>AKBNK, 75 TL üzerindeki bölgeden gelen satış baskısıyla geri çekilerek güncel kapanışını <strong>64.50 TL</strong> seviyesinde gerçekleştirdi. Fiyat, MAV 5/13/21 başta olmak üzere orta ve uzun vadeli hareketli ortalamaların da altında konumlanıyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta band olan 68.94 TL’nin altında</strong> ve alt banda daha yakın bölgede bulunuyor. Bu görünüm kısa vadeli zayıflığın sürdüğünü gösterir. 68.94 TL üzerine dönüş gelmeden tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic (71.01/62.66) tarafında kısa vadeli tepki isteği görülse de, <em>RSI’ın 39.49 ile zayıf bölgede kalması</em> ve MACD’nin negatif seyrini koruması teknik görünümü baskılıyor.</p>
            <p>Kritik eşik <strong>64.40–64.50 TL</strong> destek bölgesidir. Bu alan üzerinde tutunma korunursa tepki denemesi gelebilir; altında kapanışlarda <strong>60.20 TL Bollinger alt bandı</strong> takip edilir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="aefes-section-title"><span className="aefes-section-num">06</span> Senaryo Analizi</div>
          <div className="aefes-scenario-grid">
            <div className="aefes-scenario-card bull">
              <div className="aefes-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>65.35 TL MAV 5 üzerine dönüş</li>
                <li>66.79–68.39 TL ortalama bölgesinin aşılması</li>
                <li>68.94 TL Bollinger orta bandı üzerinde kapanış</li>
                <li>RSI’ın 50 seviyesi üzerine çıkması</li>
                <li>Hedef: 71.00–72.10 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="aefes-scenario-card bear">
              <div className="aefes-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>64.40 TL günlük dip bölgesi altında kapanış</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>RSI’ın 40 altında zayıf seyrini sürdürmesi</li>
                <li>Tepki yükselişlerinin 68.94 TL altında kalması</li>
                <li>Hedef: 60.20 TL Bollinger alt bandı</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="akbnk" />

          {/* DISCLAIMER */}
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/hisse/akbnk" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(0, 229, 160, 0.1)", border: "1px solid rgba(0, 229, 160, 0.3)", color: "#00e5a0", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>AKBNK Künye →</Link>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>

          <div className="aefes-disclaimer">
            <div className="aefes-disclaimer-head">
              <div className="aefes-disclaimer-icon">⚠</div>
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
