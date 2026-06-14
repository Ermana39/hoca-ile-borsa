import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARCLK Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Arçelik (ARCLK) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/arclk",
  },
};

export default function ArclkGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="arclk" tarih="2026-06-06" />

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
          top: calc(100% * (117.95 - 103.30) / (117.95 - 99.80));
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
            <h1 className="aefes-hero-title">ARÇELİK<br /><em>ARCLK</em></h1>
            <p className="aefes-hero-sub">
 &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="aefes-price-block">
            <div className="aefes-price-main"><span className="aefes-price-currency">₺</span>103.30</div>
          </div>
        </section>

        {/* MAIN */}
        <main className="aefes-main">

          {/* CHART */}
          <div className="aefes-section-title"><span className="aefes-section-num">01</span> Grafik</div>
          <div className="aefes-chart-wrap">
            <div className="aefes-chart-header">
              <span className="aefes-chart-title-text">ARCLK — Günlük Mum Grafiği</span>
              <div className="aefes-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`aefes-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="aefes-chart-img-wrap">
              <img
                src="/arclk-analiz.webp"
                alt="ARCLK Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
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
                <span>BOL U: 117.95</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 108.88</span>
                <span>BOL D: 99.80</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)",  val: "117.95 TL", sig: "Güçlü Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "108.88 TL", sig: "Direnç",        cls: "sell" },
              { name: "Alt Band (BOL D)",  val: "99.80 TL",  sig: "Ana Destek",    cls: "buy" },
              { name: "Bant Genişliği",    val: "18.15 TL",  sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu",    val: "103.30 TL", sig: "Alt Bant Bölgesi", cls: "sell" },
            ].map((r, i) => (
              <div className="aefes-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="aefes-ind-name">{r.name}</span>
                <span className="aefes-ind-val">{r.val}</span>
                <span className={`aefes-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>108.88 TL&apos;nin altında</strong> ve alt banda daha yakın bölgede konumlanıyor. Bu görünüm kısa vadede zayıflığın sürdüğünü gösterir. 108.88 TL üzerine dönüş gelmeden tepki yükselişleri sınırlı kalabilir.
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
                <div className="aefes-ind-row"><span className="aefes-ind-name">StocK</span><span className="aefes-ind-val">47.28</span><span className="aefes-ind-signal neutral">İZLE</span></div>
                <div className="aefes-ind-row"><span className="aefes-ind-name">StocD</span><span className="aefes-ind-val">46.08</span><span className="aefes-ind-signal neutral">NÖTR</span></div>
                <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Konum</span><span className="aefes-ind-val">Nötr-Alt</span><span className="aefes-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="aefes-progress-label"><span>Aşırı Satım (0)</span><span>47.28</span><span>Aşırı Alım (100)</span></div>
                  <div className="aefes-progress-bar"><div className="aefes-progress-fill" style={{ width: "47.28%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D&apos;nin hafif üzerinde olsa da gösterge henüz güçlü bir alım sinyali üretmiyor. Fiyat teyidi için 104.86 ve 108.88 TL seviyeleri izlenmeli.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head">
                <div className="aefes-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">MACD</span><span className="aefes-ind-val">-2.5054</span><span className="aefes-ind-signal sell">NEGATİF</span></div>
                <div className="aefes-ind-row"><span className="aefes-ind-name">Trigger</span><span className="aefes-ind-val">-2.2022</span><span className="aefes-ind-signal sell">SAT</span></div>
                <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Histogram</span><span className="aefes-ind-val">-0.3032</span><span className="aefes-ind-signal sell">Zayıf</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıf görünüm devam ediyor.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head">
                <div className="aefes-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">RSI Değeri</span><span className="aefes-ind-val">37.98</span><span className="aefes-ind-signal sell">ZAYIF</span></div>
                <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Bölge</span><span className="aefes-ind-val">Nötr-Alt</span><span className="aefes-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="aefes-progress-label"><span>30 (A.Satım)</span><span>37.98</span><span>70 (A.Alım)</span></div>
                  <div className="aefes-progress-bar"><div className="aefes-progress-fill" style={{ width: "37.98%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. 40 üzeri tutunma tepki ihtimalini korusa da 50 üzerine çıkılmadıkça güçlü momentum teyidi oluşmaz.</p>
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
                    {[["MAV 5","104.86"],["MAV 13","106.52"],["MAV 21","108.07"],["MAV 55","111.15"],["MAV 89","112.23"],["MAV 144","113.88"],["MAV 233","116.83"]].map(([p,v]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="aefes-below">Fiyat Altında ▼</td></tr>
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
              { type: "res", label: "İlk Direnç",     price: "104.80–105.50", desc: "MAV 5 + gün içi yüksek bölgesi" },
              { type: "res", label: "Ara Direnç",     price: "106.50–108.90", desc: "MAV 13/21 + Bollinger orta band bölgesi" },
              { type: "res", label: "Güçlü Direnç",   price: "111.00–113.90", desc: "MAV 55/89/144 yoğun direnç alanı" },
              { type: "res", label: "Ana Direnç",     price: "117.95 TL",     desc: "Bollinger üst band + MAV 233 bölgesi" },
              { type: "sup", label: "Anlık Destek",   price: "103.30 TL",     desc: "Günlük düşük ve kapanış seviyesi" },
              { type: "sup", label: "Ana Destek",     price: "99.80–100.00",  desc: "Bollinger alt band + psikolojik destek" },
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
            <p>ARCLK, son kapanışını <strong>103.30 TL</strong> seviyesinde gerçekleştirmiştir. Fiyat; MAV 5, MAV 13, MAV 21, MAV 55, MAV 89, MAV 144 ve MAV 233 ortalamalarının tamamının altında kaldığı için kısa vadeli teknik görünüm zayıftır.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta band olan 108.88 TL&apos;nin altında</strong> ve alt banda daha yakın bölgede bulunuyor. Bu yapı, tepki yükselişleri gelse bile 108.88 TL üzerine çıkılmadan görünümün güçlenmekte zorlanabileceğini gösterir.</p>
            <p>Stochastic (47.28/46.08) nötr-alt bölgede hafif toparlanma isteği gösterse de <em>MACD&apos;nin negatif bölgede ve trigger altında kalması</em> momentum tarafındaki zayıflığın sürdüğüne işaret ediyor. RSI (37.98) ise 50 seviyesinin altında kalarak satış baskısının henüz tam olarak bitmediğini gösteriyor.</p>
            <p>Kısa vadede <strong>103.30 TL</strong> desteği, yukarıda ise <strong>104.86 TL</strong> ve <strong>108.88 TL</strong> seviyeleri kritik eşikler olarak takip edilmelidir.</p>
          </div>

          {/* SCENARIOS */}
          <div className="aefes-section-title"><span className="aefes-section-num">06</span> Senaryo Analizi</div>
          <div className="aefes-scenario-grid">
            <div className="aefes-scenario-card bull">
              <div className="aefes-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>104.86 TL MAV 5 üzerinde kapanış</li>
                <li>106.50–108.90 TL direnç bandının aşılması</li>
                <li>MACD&apos;nin trigger çizgisi üzerine geçmesi</li>
                <li>RSI&apos;ın 50 seviyesi üzerine taşınması</li>
                <li>Hedef: 111.00–113.90 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="aefes-scenario-card bear">
              <div className="aefes-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>103.30 TL altında günlük kapanış</li>
                <li>Bollinger alt banda doğru baskının artması</li>
                <li>RSI&apos;ın 40 altında kalıcılık göstermesi</li>
                <li>MACD negatif seyrinin devam etmesi</li>
                <li>Hedef: 99.80–100.00 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="arclk" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
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
