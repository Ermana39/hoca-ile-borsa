import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HALKB Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Halkbank (HALKB) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/halkb",
  },
};

export default function HalkbGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="halkb" tarih="2026-06-07" />

      <style>{`
        .halkb-wrap *, .halkb-wrap *::before, .halkb-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .halkb-wrap {
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

        .halkb-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .halkb-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .halkb-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .halkb-hero-title em { color: var(--accent); font-style: normal; }
        .halkb-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .halkb-price-block { text-align: right; }
        .halkb-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .halkb-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .halkb-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .halkb-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .halkb-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .halkb-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .halkb-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .halkb-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .halkb-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .halkb-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .halkb-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .halkb-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .halkb-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .halkb-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .halkb-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .halkb-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .halkb-chart-img-wrap { position: relative; padding: 1rem; }
        .halkb-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .halkb-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .halkb-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .halkb-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .halkb-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .halkb-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .halkb-icon.blue   { background: rgba(10,187,255,.12); }
        .halkb-icon.gold   { background: rgba(245,200,66,.12); }
        .halkb-icon.green  { background: rgba(0,208,104,.12); }
        .halkb-icon.red    { background: rgba(255,77,106,.12); }
        .halkb-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .halkb-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .halkb-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .halkb-ind-row:last-child { border-bottom: none; }
        .halkb-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .halkb-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .halkb-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .halkb-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .halkb-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .halkb-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .halkb-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .halkb-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .halkb-progress-fill { height: 100%; border-radius: 3px; }

        .halkb-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .halkb-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .halkb-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .halkb-ma-table tr:last-child td { border-bottom: none; }
        .halkb-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .halkb-above { color: var(--green); }
        .halkb-below { color: var(--red); }

        .halkb-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .halkb-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .halkb-bol-bands { flex: 1; position: relative; height: 48px; }
        .halkb-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .halkb-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .halkb-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .halkb-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .halkb-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (47.63 - 45.00) / (47.63 - 34.59));
        }
        .halkb-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .halkb-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .halkb-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .halkb-sr-cell:hover { background: var(--bg3); }
        .halkb-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .halkb-sr-type.res { color: var(--red); }
        .halkb-sr-type.sup { color: var(--green); }
        .halkb-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .halkb-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .halkb-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .halkb-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .halkb-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .halkb-narrative p:last-child { margin-bottom: 0; }
        .halkb-narrative strong { color: var(--accent); font-weight: 600; }
        .halkb-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .halkb-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .halkb-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .halkb-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .halkb-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .halkb-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .halkb-scenario-card.bull .halkb-scenario-head { color: var(--green); }
        .halkb-scenario-card.bear .halkb-scenario-head { color: var(--red); }
        .halkb-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .halkb-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .halkb-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .halkb-scenario-card.bull li::before { color: var(--green); }
        .halkb-scenario-card.bear li::before { color: var(--red); }

        .halkb-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .halkb-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .halkb-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .halkb-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .halkb-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .halkb-disclaimer p + p { margin-top: .4rem; }

        .halkb-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .halkb-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .halkb-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .halkb-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .halkb-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .halkb-hero { grid-template-columns: 1fr; }
          .halkb-price-block { text-align: left; }
        }
        @media(max-width:768px) { .halkb-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .halkb-hero   { padding: 2rem 1rem 1.5rem; }
          .halkb-main   { padding: 1.5rem 1rem 3rem; }
          .halkb-footer { padding: 1.2rem 1rem; }
          .halkb-scenario-grid { grid-template-columns: 1fr; }
          .halkb-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="halkb-wrap">
        <section className="halkb-hero">
          <div>
            <div className="halkb-hero-label">Teknik Analiz Raporu</div>
            <h1 className="halkb-hero-title">HALK<br /><em>BANKASI</em></h1>
            <p className="halkb-hero-sub">
              BIST: HALKB &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="halkb-price-block">
            <div className="halkb-price-main"><span className="halkb-price-currency">₺</span>45.00</div>
          </div>
        </section>

        <main className="halkb-main">
          <div className="halkb-section-title"><span className="halkb-section-num">01</span> Grafik</div>
          <div className="halkb-chart-wrap">
            <div className="halkb-chart-header">
              <span className="halkb-chart-title-text">HALKB — Günlük Mum Grafiği</span>
              <div className="halkb-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`halkb-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="halkb-chart-img-wrap">
              <img
                src="/halkb-analiz.webp"
                alt="HALKB Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="halkb-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="halkb-section-title"><span className="halkb-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="halkb-bol-card">
            <div className="halkb-bol-visual">
              <div className="halkb-bol-bands">
                <div className="halkb-bol-fill" />
                <div className="halkb-bol-upper" />
                <div className="halkb-bol-mid" />
                <div className="halkb-bol-lower" />
                <div className="halkb-bol-marker" />
              </div>
              <div className="halkb-bol-labels">
                <span>BOL U: 47.63</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 41.11</span>
                <span>BOL D: 34.59</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "47.63 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "41.11 TL", sig: "Destek", cls: "buy" },
              { name: "Alt Band (BOL D)", val: "34.59 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "13.04 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "45.00 TL", sig: "Orta-Üst Bant", cls: "buy" },
            ].map((r, i) => (
              <div className="halkb-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="halkb-ind-name">{r.name}</span>
                <span className="halkb-ind-val">{r.val}</span>
                <span className={`halkb-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>41.11 TL</strong> seviyesinin üzerinde kalmayı sürdürüyor. Bu konum kısa vadede pozitif sayılabilir; ancak <strong style={{ color: "var(--accent)" }}>47.63 TL</strong> üst banda yaklaşıldıkça kâr realizasyonu riski artabilir.
            </p>
          </div>

          <div className="halkb-section-title"><span className="halkb-section-num">03</span> İndikatörler</div>
          <div className="halkb-two-col">
            <div className="halkb-analysis-card">
              <div className="halkb-analysis-card-head">
                <div className="halkb-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="halkb-analysis-card-body">
                <div className="halkb-ind-row"><span className="halkb-ind-name">StocK</span><span className="halkb-ind-val">79.42</span><span className="halkb-ind-signal neutral">Yüksek</span></div>
                <div className="halkb-ind-row"><span className="halkb-ind-name">StocD</span><span className="halkb-ind-val">84.29</span><span className="halkb-ind-signal neutral">İzle</span></div>
                <div className="halkb-ind-row" style={{ borderBottom: "none" }}><span className="halkb-ind-name">Konum</span><span className="halkb-ind-val">Yüksek Bölge</span><span className="halkb-ind-signal neutral">Dikkat</span></div>
                <div>
                  <div className="halkb-progress-label"><span>Aşırı Satım (0)</span><span>79.42</span><span>Aşırı Alım (100)</span></div>
                  <div className="halkb-progress-bar"><div className="halkb-progress-fill" style={{ width: "79.42%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic yüksek bölgede ve K çizgisi D çizgisinin altında. Bu durum kısa vadede momentumun zayıflayabileceğine işaret eder.</p>
              </div>
            </div>

            <div className="halkb-analysis-card">
              <div className="halkb-analysis-card-head">
                <div className="halkb-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="halkb-analysis-card-body">
                <div className="halkb-ind-row"><span className="halkb-ind-name">MACD</span><span className="halkb-ind-val">1.6103</span><span className="halkb-ind-signal buy">Pozitif</span></div>
                <div className="halkb-ind-row"><span className="halkb-ind-name">Trigger</span><span className="halkb-ind-val">0.8758</span><span className="halkb-ind-signal buy">Üstünde</span></div>
                <div className="halkb-ind-row" style={{ borderBottom: "none" }}><span className="halkb-ind-name">Momentum</span><span className="halkb-ind-val">Pozitif</span><span className="halkb-ind-signal buy">Güçlü</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Momentum tarafı hâlen pozitif; ancak fiyatın üst banda yaklaşması nedeniyle takipte kalınmalı.</p>
              </div>
            </div>

            <div className="halkb-analysis-card">
              <div className="halkb-analysis-card-head">
                <div className="halkb-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="halkb-analysis-card-body">
                <div className="halkb-ind-row"><span className="halkb-ind-name">RSI Değeri</span><span className="halkb-ind-val">59.31</span><span className="halkb-ind-signal neutral">Nötr+</span></div>
                <div className="halkb-ind-row" style={{ borderBottom: "none" }}><span className="halkb-ind-name">Bölge</span><span className="halkb-ind-val">Nötr-Yüksek</span><span className="halkb-ind-signal buy">Alan Var</span></div>
                <div>
                  <div className="halkb-progress-label"><span>30 (A.Satım)</span><span>59.31</span><span>70 (A.Alım)</span></div>
                  <div className="halkb-progress-bar"><div className="halkb-progress-fill" style={{ width: "59.31%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 üzerinde kalarak pozitif görünümü destekliyor. 60 üzeri kalıcılık güçlenmeyi artırabilir.</p>
              </div>
            </div>

            <div className="halkb-analysis-card">
              <div className="halkb-analysis-card-head">
                <div className="halkb-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="halkb-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="halkb-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","44.98","Fiyat Üstünde ▲"],
                      ["MAV 13","42.97","Fiyat Üstünde ▲"],
                      ["MAV 21","41.91","Fiyat Üstünde ▲"],
                      ["MAV 55","40.91","Fiyat Üstünde ▲"],
                      ["MAV 89","40.32","Fiyat Üstünde ▲"],
                      ["MAV 144","38.58","Fiyat Üstünde ▲"],
                      ["MAV 233","35.44","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="halkb-above">{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="halkb-section-title"><span className="halkb-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="halkb-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "47.63 TL", desc: "Bollinger üst bandı" },
              { type: "res", label: "Güçlü Direnç", price: "50.00–51.50", desc: "Grafikte önceki zirve bölgesi" },
              { type: "res", label: "Psikolojik Direnç", price: "45.60–47.72", desc: "Gün içi açılış ve zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "44.00–45.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ara Destek", price: "42.97–41.91", desc: "MAV 13 ve MAV 21 bölgesi" },
              { type: "sup", label: "Ana Destek", price: "41.11–40.32", desc: "Bollinger orta bandı ve MAV 89 bölgesi" },
            ].map((s) => (
              <div className="halkb-sr-cell" key={s.label}>
                <div className={`halkb-sr-type ${s.type}`}>{s.label}</div>
                <div className="halkb-sr-price">{s.price}</div>
                <div className="halkb-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="halkb-section-title"><span className="halkb-section-num">05</span> Genel Değerlendirme</div>
          <div className="halkb-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>HALKB, son yükseliş hareketiyle kısa ve orta vadeli hareketli ortalamaların tamamının üzerine çıkmış durumda. Güncel kapanış olan <strong>45.00 TL</strong>, özellikle MAV 5 seviyesi olan <strong>44.98 TL</strong> üzerinde sınırlı da olsa tutunmaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>41.11 TL orta bandı ile 47.63 TL üst bandı</strong> arasında bulunuyor. Bu konum pozitif bölgede kalındığını gösterse de üst banda yaklaşım nedeniyle kısa vadeli kâr realizasyonu riski takip edilmelidir.</p>
            <p>MACD pozitif bölgede ve trigger çizgisinin üzerinde seyrederken RSI <em>59.31</em> ile nötr-yüksek bölgede bulunuyor. Stochastic tarafında ise yüksek bölgeden sınırlı zayıflama sinyali görülüyor.</p>
            <p>45.00 TL üzerinde kalıcılık korunursa fiyatın yeniden <strong>47.63 TL</strong> Bollinger üst bandını test etme potansiyeli devam eder. 44.00 TL altı kapanışlarda ise 42.97–41.11 TL destek bölgesi gündeme gelebilir.</p>
          </div>

          <div className="halkb-section-title"><span className="halkb-section-num">06</span> Senaryo Analizi</div>
          <div className="halkb-scenario-grid">
            <div className="halkb-scenario-card bull">
              <div className="halkb-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>45.00 TL üzerinde kapanışların devam etmesi</li>
                <li>47.63 TL Bollinger üst bandının test edilmesi</li>
                <li>RSI’ın 60 seviyesi üzerine yerleşmesi</li>
                <li>MACD’nin trigger üzerinde pozitif seyrini koruması</li>
                <li>Hedef: 50.00–51.50 TL zirve bölgesi</li>
              </ul>
            </div>
            <div className="halkb-scenario-card bear">
              <div className="halkb-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>44.00 TL günlük dip altında kapanış</li>
                <li>Stochastic göstergesinde zayıflamanın sürmesi</li>
                <li>MAV 13 ve MAV 21 desteklerinin kırılması</li>
                <li>41.11 TL Bollinger orta bandına geri çekilme</li>
                <li>Hedef: 42.97–41.11 TL destek bölgesi</li>
              </ul>
            </div>
          </div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="halkb" />

          <div className="halkb-disclaimer">
            <div className="halkb-disclaimer-head">
              <div className="halkb-disclaimer-icon">⚠</div>
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
