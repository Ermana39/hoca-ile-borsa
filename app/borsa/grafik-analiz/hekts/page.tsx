import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEKTS Teknik Analiz — 07.06.2026",
  description:
    "Hektaş (HEKTS) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/hekts",
  },
};

export default function HektsGrafikAnaliz() {
  return (
    <>


      <style>{`
        .hekts-wrap *, .hekts-wrap *::before, .hekts-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hekts-wrap {
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

        .hekts-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .hekts-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .hekts-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .hekts-hero-title em { color: var(--accent); font-style: normal; }
        .hekts-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .hekts-price-block { text-align: right; }
        .hekts-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .hekts-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .hekts-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .hekts-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .hekts-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .hekts-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .hekts-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .hekts-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .hekts-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .hekts-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .hekts-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .hekts-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .hekts-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .hekts-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .hekts-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .hekts-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .hekts-chart-img-wrap { position: relative; padding: 1rem; }
        .hekts-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .hekts-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .hekts-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .hekts-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .hekts-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .hekts-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .hekts-icon.blue   { background: rgba(10,187,255,.12); }
        .hekts-icon.gold   { background: rgba(245,200,66,.12); }
        .hekts-icon.green  { background: rgba(0,208,104,.12); }
        .hekts-icon.red    { background: rgba(255,77,106,.12); }
        .hekts-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .hekts-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .hekts-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .hekts-ind-row:last-child { border-bottom: none; }
        .hekts-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .hekts-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .hekts-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .hekts-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .hekts-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .hekts-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .hekts-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .hekts-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .hekts-progress-fill { height: 100%; border-radius: 3px; }

        .hekts-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .hekts-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .hekts-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .hekts-ma-table tr:last-child td { border-bottom: none; }
        .hekts-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .hekts-above { color: var(--green); }
        .hekts-below { color: var(--red); }

        .hekts-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .hekts-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .hekts-bol-bands { flex: 1; position: relative; height: 48px; }
        .hekts-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .hekts-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .hekts-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .hekts-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .hekts-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (4.93 - 4.14) / (4.93 - 3.43));
        }
        .hekts-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .hekts-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .hekts-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .hekts-sr-cell:hover { background: var(--bg3); }
        .hekts-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .hekts-sr-type.res { color: var(--red); }
        .hekts-sr-type.sup { color: var(--green); }
        .hekts-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .hekts-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .hekts-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .hekts-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .hekts-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .hekts-narrative p:last-child { margin-bottom: 0; }
        .hekts-narrative strong { color: var(--accent); font-weight: 600; }
        .hekts-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .hekts-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .hekts-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .hekts-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .hekts-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .hekts-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .hekts-scenario-card.bull .hekts-scenario-head { color: var(--green); }
        .hekts-scenario-card.bear .hekts-scenario-head { color: var(--red); }
        .hekts-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .hekts-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .hekts-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .hekts-scenario-card.bull li::before { color: var(--green); }
        .hekts-scenario-card.bear li::before { color: var(--red); }

        .hekts-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .hekts-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .hekts-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .hekts-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .hekts-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .hekts-disclaimer p + p { margin-top: .4rem; }

        .hekts-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .hekts-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .hekts-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .hekts-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .hekts-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .hekts-hero { grid-template-columns: 1fr; }
          .hekts-price-block { text-align: left; }
        }
        @media(max-width:768px) { .hekts-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .hekts-hero   { padding: 2rem 1rem 1.5rem; }
          .hekts-main   { padding: 1.5rem 1rem 3rem; }
          .hekts-footer { padding: 1.2rem 1rem; }
          .hekts-scenario-grid { grid-template-columns: 1fr; }
          .hekts-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="hekts-wrap">
        <section className="hekts-hero">
          <div>
            <div className="hekts-hero-label">Teknik Analiz Raporu</div>
            <h1 className="hekts-hero-title">HEK<br /><em>TAŞ</em></h1>
            <p className="hekts-hero-sub">
              BIST: HEKTS &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="hekts-price-block">
            <div className="hekts-price-main"><span className="hekts-price-currency">₺</span>4.14</div>
          </div>
        </section>

        <main className="hekts-main">
          <div className="hekts-section-title"><span className="hekts-section-num">01</span> Grafik</div>
          <div className="hekts-chart-wrap">
            <div className="hekts-chart-header">
              <span className="hekts-chart-title-text">HEKTS — Günlük Mum Grafiği</span>
              <div className="hekts-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`hekts-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="hekts-chart-img-wrap">
              <img
                src="/hekts-analiz.webp"
                alt="HEKTS Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="hekts-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="hekts-section-title"><span className="hekts-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="hekts-bol-card">
            <div className="hekts-bol-visual">
              <div className="hekts-bol-bands">
                <div className="hekts-bol-fill" />
                <div className="hekts-bol-upper" />
                <div className="hekts-bol-mid" />
                <div className="hekts-bol-lower" />
                <div className="hekts-bol-marker" />
              </div>
              <div className="hekts-bol-labels">
                <span>BOL U: 4.93</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 4.18</span>
                <span>BOL D: 3.43</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "4.93 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "4.18 TL", sig: "Yakın Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "3.43 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.50 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "4.14 TL", sig: "Orta Band Altı", cls: "sell" },
            ].map((r, i) => (
              <div className="hekts-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="hekts-ind-name">{r.name}</span>
                <span className="hekts-ind-val">{r.val}</span>
                <span className={`hekts-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>4.18 TL</strong> seviyesinin hemen altında kapanış yapmış durumda. Bu nedenle kısa vadede 4.18 TL üzerine dönüş toparlanmanın devamı için önemli eşik olarak izlenmelidir.
            </p>
          </div>

          <div className="hekts-section-title"><span className="hekts-section-num">03</span> İndikatörler</div>
          <div className="hekts-two-col">
            <div className="hekts-analysis-card">
              <div className="hekts-analysis-card-head">
                <div className="hekts-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="hekts-analysis-card-body">
                <div className="hekts-ind-row"><span className="hekts-ind-name">StocK</span><span className="hekts-ind-val">30.33</span><span className="hekts-ind-signal neutral">Zayıf</span></div>
                <div className="hekts-ind-row"><span className="hekts-ind-name">StocD</span><span className="hekts-ind-val">29.96</span><span className="hekts-ind-signal neutral">Tepki</span></div>
                <div className="hekts-ind-row" style={{ borderBottom: "none" }}><span className="hekts-ind-name">Konum</span><span className="hekts-ind-val">Alt Bölge</span><span className="hekts-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="hekts-progress-label"><span>Aşırı Satım (0)</span><span>30.33</span><span>Aşırı Alım (100)</span></div>
                  <div className="hekts-progress-bar"><div className="hekts-progress-fill" style={{ width: "30.33%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic alt bölgede ve çizgiler birbirine yakın. Tepki potansiyeli var; fakat net güçlenme için fiyatın 4.18 TL üzerine dönmesi gerekir.</p>
              </div>
            </div>

            <div className="hekts-analysis-card">
              <div className="hekts-analysis-card-head">
                <div className="hekts-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="hekts-analysis-card-body">
                <div className="hekts-ind-row"><span className="hekts-ind-name">MACD</span><span className="hekts-ind-val">0.1833</span><span className="hekts-ind-signal neutral">Pozitif</span></div>
                <div className="hekts-ind-row"><span className="hekts-ind-name">Trigger</span><span className="hekts-ind-val">0.2106</span><span className="hekts-ind-signal sell">Altında</span></div>
                <div className="hekts-ind-row" style={{ borderBottom: "none" }}><span className="hekts-ind-name">Momentum</span><span className="hekts-ind-val">Zayıflıyor</span><span className="hekts-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede kalmasına rağmen trigger çizgisinin altında. Bu durum kısa vadede momentumun zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="hekts-analysis-card">
              <div className="hekts-analysis-card-head">
                <div className="hekts-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="hekts-analysis-card-body">
                <div className="hekts-ind-row"><span className="hekts-ind-name">RSI Değeri</span><span className="hekts-ind-val">53.63</span><span className="hekts-ind-signal neutral">Nötr</span></div>
                <div className="hekts-ind-row" style={{ borderBottom: "none" }}><span className="hekts-ind-name">Bölge</span><span className="hekts-ind-val">Nötr</span><span className="hekts-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="hekts-progress-label"><span>30 (A.Satım)</span><span>53.63</span><span>70 (A.Alım)</span></div>
                  <div className="hekts-progress-bar"><div className="hekts-progress-fill" style={{ width: "53.63%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 üzerinde kalarak tamamen negatif bir tablo oluşturmuyor. Ancak güçlü momentum için 60 seviyesi üzerine geçiş takip edilmeli.</p>
              </div>
            </div>

            <div className="hekts-analysis-card">
              <div className="hekts-analysis-card-head">
                <div className="hekts-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="hekts-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="hekts-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","4.22","Fiyat Altında ▼"],
                      ["MAV 13","4.15","Fiyat Altında ▼"],
                      ["MAV 21","4.04","Fiyat Üstünde ▲"],
                      ["MAV 55","3.68","Fiyat Üstünde ▲"],
                      ["MAV 89","3.53","Fiyat Üstünde ▲"],
                      ["MAV 144","3.46","Fiyat Üstünde ▲"],
                      ["MAV 233","3.51","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "hekts-above" : "hekts-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="hekts-section-title"><span className="hekts-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="hekts-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "4.15–4.22", desc: "MAV 13, BOL orta band ve MAV 5 bölgesi" },
              { type: "res", label: "Ara Direnç", price: "4.47–4.52", desc: "Gün içi açılış ve zirve bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "4.93–5.13", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "4.04–4.14", desc: "MAV 21 ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "3.68–3.46", desc: "MAV 55, MAV 89 ve MAV 144 bölgesi" },
              { type: "sup", label: "Alt Band Desteği", price: "3.43 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="hekts-sr-cell" key={s.label}>
                <div className={`hekts-sr-type ${s.type}`}>{s.label}</div>
                <div className="hekts-sr-price">{s.price}</div>
                <div className="hekts-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="hekts-section-title"><span className="hekts-section-num">05</span> Genel Değerlendirme</div>
          <div className="hekts-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr</h3>
            <p>HEKTS, son yükseliş denemesi sonrası gelen satışla <strong>4.14 TL</strong> seviyesinde kapanış yapmıştır. Fiyatın MAV 5 ve MAV 13 altında kalması kısa vadede zayıflama olduğunu gösterirken, MAV 21 ve daha uzun vadeli ortalamaların üzerinde kalması görünümün tamamen bozulmadığını gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>4.18 TL orta bandının hemen altında</strong> bulunuyor. Bu seviye üzerine dönüş kısa vadeli toparlanmanın devamı için önemli olacak. Aşağıda 4.04 TL ve 3.68 TL destekleri takip edilebilir.</p>
            <p>RSI 53.63 ile nötr bölgede kalırken, MACD pozitif bölgede olmasına rağmen trigger altında seyrediyor. Stochastic tarafında alt bölgeden tepki ihtimali görülse de <em>net güçlenme için fiyat teyidi</em> gerekiyor.</p>
            <p>4.22 TL üzerindeki kapanışlar teknik görünümü toparlayabilir. 4.04 TL altında kapanışlarda ise 3.68–3.43 TL destek bölgesi gündeme gelebilir.</p>
          </div>

          <div className="hekts-section-title"><span className="hekts-section-num">06</span> Senaryo Analizi</div>
          <div className="hekts-scenario-grid">
            <div className="hekts-scenario-card bull">
              <div className="hekts-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>4.18 TL Bollinger orta bandı üzerine dönüş</li>
                <li>4.22 TL MAV 5 üzerinde kapanış</li>
                <li>RSI’ın 60 seviyesine doğru güçlenmesi</li>
                <li>MACD’nin tekrar trigger üzerine geçmesi</li>
                <li>Hedef: 4.47–4.93 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="hekts-scenario-card bear">
              <div className="hekts-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>4.04 TL MAV 21 altında kapanış</li>
                <li>MACD’nin trigger altında kalmaya devam etmesi</li>
                <li>Stochastic tepki sinyalinin zayıf kalması</li>
                <li>3.68 TL MAV 55 desteğine geri çekilme</li>
                <li>Hedef: 3.68–3.43 TL destek bölgesi</li>
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


          <div className="hekts-disclaimer">
            <div className="hekts-disclaimer-head">
              <div className="hekts-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="hekts-footer">
            <div className="hekts-footer-inner">
              <div className="hekts-footer-brand">HOCA İLE BORSA</div>
              <div className="hekts-footer-meta">
                HEKTS Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="hekts-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
