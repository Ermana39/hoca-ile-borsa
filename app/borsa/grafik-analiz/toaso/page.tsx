import Link from "next/link";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOASO Teknik Analiz — 07.06.2026",
  description:
    "Tofaş Otomotiv (TOASO) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/toaso",
  },
};

export default function ToasoGrafikAnaliz() {
  return (
    <>


      <style>{`
        .toaso-wrap *, .toaso-wrap *::before, .toaso-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .toaso-wrap {
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

        .toaso-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .toaso-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .toaso-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .toaso-hero-title em { color: var(--accent); font-style: normal; }
        .toaso-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .toaso-price-block { text-align: right; }
        .toaso-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .toaso-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .toaso-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .toaso-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .toaso-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .toaso-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .toaso-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .toaso-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .toaso-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .toaso-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .toaso-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .toaso-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .toaso-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .toaso-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .toaso-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .toaso-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .toaso-chart-img-wrap { position: relative; padding: 1rem; }
        .toaso-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .toaso-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .toaso-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .toaso-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .toaso-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .toaso-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .toaso-icon.blue   { background: rgba(10,187,255,.12); }
        .toaso-icon.gold   { background: rgba(245,200,66,.12); }
        .toaso-icon.green  { background: rgba(0,208,104,.12); }
        .toaso-icon.red    { background: rgba(255,77,106,.12); }
        .toaso-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .toaso-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .toaso-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .toaso-ind-row:last-child { border-bottom: none; }
        .toaso-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .toaso-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .toaso-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .toaso-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .toaso-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .toaso-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .toaso-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .toaso-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .toaso-progress-fill { height: 100%; border-radius: 3px; }

        .toaso-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .toaso-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .toaso-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .toaso-ma-table tr:last-child td { border-bottom: none; }
        .toaso-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .toaso-above { color: var(--green); }
        .toaso-below { color: var(--red); }

        .toaso-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .toaso-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .toaso-bol-bands { flex: 1; position: relative; height: 48px; }
        .toaso-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .toaso-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .toaso-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .toaso-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .toaso-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (322.70 - 294.00) / (322.70 - 282.13));
        }
        .toaso-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .toaso-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .toaso-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .toaso-sr-cell:hover { background: var(--bg3); }
        .toaso-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .toaso-sr-type.res { color: var(--red); }
        .toaso-sr-type.sup { color: var(--green); }
        .toaso-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .toaso-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .toaso-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .toaso-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .toaso-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .toaso-narrative p:last-child { margin-bottom: 0; }
        .toaso-narrative strong { color: var(--accent); font-weight: 600; }
        .toaso-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .toaso-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .toaso-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .toaso-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .toaso-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .toaso-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .toaso-scenario-card.bull .toaso-scenario-head { color: var(--green); }
        .toaso-scenario-card.bear .toaso-scenario-head { color: var(--red); }
        .toaso-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .toaso-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .toaso-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .toaso-scenario-card.bull li::before { color: var(--green); }
        .toaso-scenario-card.bear li::before { color: var(--red); }

        .toaso-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .toaso-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .toaso-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .toaso-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .toaso-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .toaso-disclaimer p + p { margin-top: .4rem; }

        .toaso-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .toaso-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .toaso-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .toaso-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .toaso-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .toaso-hero { grid-template-columns: 1fr; }
          .toaso-price-block { text-align: left; }
        }
        @media(max-width:768px) { .toaso-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .toaso-hero   { padding: 2rem 1rem 1.5rem; }
          .toaso-main   { padding: 1.5rem 1rem 3rem; }
          .toaso-footer { padding: 1.2rem 1rem; }
          .toaso-scenario-grid { grid-template-columns: 1fr; }
          .toaso-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="toaso-wrap">
        <section className="toaso-hero">
          <div>
            <div className="toaso-hero-label">Teknik Analiz Raporu</div>
            <h1 className="toaso-hero-title">TOFAŞ<br /><em>OTOMOTİV</em></h1>
            <p className="toaso-hero-sub">
              BIST: TOASO &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="toaso-price-block">
            <div className="toaso-price-main"><span className="toaso-price-currency">₺</span>294.00</div>
          </div>
        </section>

        <main className="toaso-main">
          <div className="toaso-section-title"><span className="toaso-section-num">01</span> Grafik</div>
          <div className="toaso-chart-wrap">
            <div className="toaso-chart-header">
              <span className="toaso-chart-title-text">TOASO — Günlük Mum Grafiği</span>
              <div className="toaso-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`toaso-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="toaso-chart-img-wrap">
              <img
                src="/toaso-analiz.webp"
                alt="TOASO Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="toaso-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="toaso-section-title"><span className="toaso-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="toaso-bol-card">
            <div className="toaso-bol-visual">
              <div className="toaso-bol-bands">
                <div className="toaso-bol-fill" />
                <div className="toaso-bol-upper" />
                <div className="toaso-bol-mid" />
                <div className="toaso-bol-lower" />
                <div className="toaso-bol-marker" />
              </div>
              <div className="toaso-bol-labels">
                <span>BOL U: 322.70</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 302.41</span>
                <span>BOL D: 282.13</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "322.70 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "302.41 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "282.13 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "40.57 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "294.00 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="toaso-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="toaso-ind-name">{r.name}</span>
                <span className="toaso-ind-val">{r.val}</span>
                <span className={`toaso-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>302.41 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>282.13 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="toaso-section-title"><span className="toaso-section-num">03</span> İndikatörler</div>
          <div className="toaso-two-col">
            <div className="toaso-analysis-card">
              <div className="toaso-analysis-card-head">
                <div className="toaso-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="toaso-analysis-card-body">
                <div className="toaso-ind-row"><span className="toaso-ind-name">StocK</span><span className="toaso-ind-val">44.22</span><span className="toaso-ind-signal neutral">Nötr</span></div>
                <div className="toaso-ind-row"><span className="toaso-ind-name">StocD</span><span className="toaso-ind-val">43.25</span><span className="toaso-ind-signal buy">Tepki</span></div>
                <div className="toaso-ind-row" style={{ borderBottom: "none" }}><span className="toaso-ind-name">Konum</span><span className="toaso-ind-val">Nötr</span><span className="toaso-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="toaso-progress-label"><span>Aşırı Satım (0)</span><span>44.22</span><span>Aşırı Alım (100)</span></div>
                  <div className="toaso-progress-bar"><div className="toaso-progress-fill" style={{ width: "44.22%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var; ancak fiyatın kısa vadeli ortalamaları henüz geri alamaması nedeniyle teyit zayıf.</p>
              </div>
            </div>

            <div className="toaso-analysis-card">
              <div className="toaso-analysis-card-head">
                <div className="toaso-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="toaso-analysis-card-body">
                <div className="toaso-ind-row"><span className="toaso-ind-name">MACD</span><span className="toaso-ind-val">0.6722</span><span className="toaso-ind-signal sell">Negatif</span></div>
                <div className="toaso-ind-row"><span className="toaso-ind-name">Trigger</span><span className="toaso-ind-val">1.8554</span><span className="toaso-ind-signal sell">Baskı</span></div>
                <div className="toaso-ind-row" style={{ borderBottom: "none" }}><span className="toaso-ind-name">Momentum</span><span className="toaso-ind-val">Zayıf</span><span className="toaso-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olmasına rağmen trigger çizgisinin altında. Bu durum yükseliş momentumunun zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="toaso-analysis-card">
              <div className="toaso-analysis-card-head">
                <div className="toaso-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="toaso-analysis-card-body">
                <div className="toaso-ind-row"><span className="toaso-ind-name">RSI Değeri</span><span className="toaso-ind-val">47.85</span><span className="toaso-ind-signal neutral">Zayıf</span></div>
                <div className="toaso-ind-row" style={{ borderBottom: "none" }}><span className="toaso-ind-name">Bölge</span><span className="toaso-ind-val">Nötr-Alt</span><span className="toaso-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="toaso-progress-label"><span>30 (A.Satım)</span><span>47.85</span><span>70 (A.Alım)</span></div>
                  <div className="toaso-progress-bar"><div className="toaso-progress-fill" style={{ width: "47.85%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen altında. Bu durum kısa vadeli momentumun henüz tam güç kazanmadığını gösterir.</p>
              </div>
            </div>

            <div className="toaso-analysis-card">
              <div className="toaso-analysis-card-head">
                <div className="toaso-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="toaso-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="toaso-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","296.97","Fiyat Altında ▼"],
                      ["MAV 13","298.22","Fiyat Altında ▼"],
                      ["MAV 21","298.03","Fiyat Altında ▼"],
                      ["MAV 55","292.85","Fiyat Üstünde ▲"],
                      ["MAV 89","285.99","Fiyat Üstünde ▲"],
                      ["MAV 144","274.24","Fiyat Üstünde ▲"],
                      ["MAV 233","258.53","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "toaso-above" : "toaso-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="toaso-section-title"><span className="toaso-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="toaso-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "296.97–298.22", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "298.03–302.41", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "322.70 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "291.25–294.00", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "285.99–282.13", desc: "MAV 89 ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "274.24–258.53", desc: "MAV 144 ve MAV 233 destek bölgesi" },
            ].map((s) => (
              <div className="toaso-sr-cell" key={s.label}>
                <div className={`toaso-sr-type ${s.type}`}>{s.label}</div>
                <div className="toaso-sr-price">{s.price}</div>
                <div className="toaso-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="toaso-section-title"><span className="toaso-section-num">05</span> Genel Değerlendirme</div>
          <div className="toaso-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TOASO, son kapanışını <strong>294.00 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>302.41 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 296.97–302.41 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>291.25 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>258.53–282.13 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="toaso-section-title"><span className="toaso-section-num">06</span> Senaryo Analizi</div>
          <div className="toaso-scenario-grid">
            <div className="toaso-scenario-card bull">
              <div className="toaso-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>296.97 TL MAV 5 üzerinde kapanış</li>
                <li>298.22 TL MAV 13 seviyesinin geri alınması</li>
                <li>302.41 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 302.41–322.70 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="toaso-scenario-card bear">
              <div className="toaso-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>291.25 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>285.99 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 285.99–282.13 TL destek bölgesi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="toaso" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="toaso-disclaimer">
            <div className="toaso-disclaimer-head">
              <div className="toaso-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="toaso-footer">
            <div className="toaso-footer-inner">
              <div className="toaso-footer-brand">HOCA İLE BORSA</div>
              <div className="toaso-footer-meta">
                TOASO Teknik Analiz Raporu<br />
                Hazırlanma: 07.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="toaso-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
