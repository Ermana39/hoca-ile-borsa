import Link from "next/link";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EREGL Teknik Analiz — 06.06.2026",
  description:
    "Ereğli Demir Çelik (EREGL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/eregl",
  },
};

export default function EreglGrafikAnaliz() {
  return (
    <>


      <style>{`
        .eregl-wrap *, .eregl-wrap *::before, .eregl-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .eregl-wrap {
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

        .eregl-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .eregl-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .eregl-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .eregl-hero-title em { color: var(--accent); font-style: normal; }
        .eregl-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .eregl-price-block { text-align: right; }
        .eregl-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .eregl-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .eregl-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .eregl-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .eregl-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .eregl-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .eregl-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .eregl-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .eregl-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .eregl-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .eregl-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .eregl-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .eregl-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .eregl-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .eregl-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .eregl-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .eregl-chart-img-wrap { position: relative; padding: 1rem; }
        .eregl-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .eregl-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .eregl-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .eregl-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .eregl-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .eregl-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .eregl-icon.blue   { background: rgba(10,187,255,.12); }
        .eregl-icon.gold   { background: rgba(245,200,66,.12); }
        .eregl-icon.green  { background: rgba(0,208,104,.12); }
        .eregl-icon.red    { background: rgba(255,77,106,.12); }
        .eregl-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .eregl-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .eregl-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .eregl-ind-row:last-child { border-bottom: none; }
        .eregl-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .eregl-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .eregl-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .eregl-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .eregl-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .eregl-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .eregl-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .eregl-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .eregl-progress-fill { height: 100%; border-radius: 3px; }

        .eregl-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .eregl-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .eregl-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .eregl-ma-table tr:last-child td { border-bottom: none; }
        .eregl-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .eregl-above { color: var(--green); }
        .eregl-below { color: var(--red); }

        .eregl-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .eregl-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .eregl-bol-bands { flex: 1; position: relative; height: 48px; }
        .eregl-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .eregl-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .eregl-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .eregl-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .eregl-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--accent); box-shadow: 0 0 6px var(--accent);
          top: calc(100% * (41.71 - 39.16) / (41.71 - 35.97));
        }
        .eregl-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .eregl-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .eregl-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .eregl-sr-cell:hover { background: var(--bg3); }
        .eregl-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .eregl-sr-type.res { color: var(--red); }
        .eregl-sr-type.sup { color: var(--green); }
        .eregl-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .eregl-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .eregl-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .eregl-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .eregl-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .eregl-narrative p:last-child { margin-bottom: 0; }
        .eregl-narrative strong { color: var(--accent); font-weight: 600; }
        .eregl-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .eregl-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .eregl-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .eregl-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .eregl-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .eregl-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .eregl-scenario-card.bull .eregl-scenario-head { color: var(--green); }
        .eregl-scenario-card.bear .eregl-scenario-head { color: var(--red); }
        .eregl-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .eregl-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .eregl-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .eregl-scenario-card.bull li::before { color: var(--green); }
        .eregl-scenario-card.bear li::before { color: var(--red); }

        .eregl-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .eregl-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .eregl-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .eregl-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .eregl-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .eregl-disclaimer p + p { margin-top: .4rem; }

        .eregl-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .eregl-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .eregl-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .eregl-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .eregl-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .eregl-hero { grid-template-columns: 1fr; }
          .eregl-price-block { text-align: left; }
        }
        @media(max-width:768px) { .eregl-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .eregl-hero   { padding: 2rem 1rem 1.5rem; }
          .eregl-main   { padding: 1.5rem 1rem 3rem; }
          .eregl-footer { padding: 1.2rem 1rem; }
          .eregl-scenario-grid { grid-template-columns: 1fr; }
          .eregl-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="eregl-wrap">
        <section className="eregl-hero">
          <div>
            <div className="eregl-hero-label">Teknik Analiz Raporu</div>
            <h1 className="eregl-hero-title">EREĞLİ<br /><em>DEMİR ÇELİK</em></h1>
            <p className="eregl-hero-sub">
              BIST: EREGL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Çoklu Hareketli Ortalama + Bollinger Bantları &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="eregl-price-block">
            <div className="eregl-price-main"><span className="eregl-price-currency">₺</span>39.16</div>
          </div>
        </section>

        <main className="eregl-main">
          <div className="eregl-section-title"><span className="eregl-section-num">01</span> Grafik</div>
          <div className="eregl-chart-wrap">
            <div className="eregl-chart-header">
              <span className="eregl-chart-title-text">EREGL — Günlük Mum Grafiği</span>
              <div className="eregl-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`eregl-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="eregl-chart-img-wrap">
              <img
                src="/eregl-analiz.webp"
                alt="EREGL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="eregl-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="eregl-section-title"><span className="eregl-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="eregl-bol-card">
            <div className="eregl-bol-visual">
              <div className="eregl-bol-bands">
                <div className="eregl-bol-fill" />
                <div className="eregl-bol-upper" />
                <div className="eregl-bol-mid" />
                <div className="eregl-bol-lower" />
                <div className="eregl-bol-marker" />
              </div>
              <div className="eregl-bol-labels">
                <span>BOL U: 41.71</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 38.84</span>
                <span>BOL D: 35.97</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "41.71 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "38.84 TL", sig: "Destek", cls: "buy" },
              { name: "Alt Band (BOL D)", val: "35.97 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "5.74 TL", sig: "Orta Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "39.16 TL", sig: "Orta Bant Üstü", cls: "buy" },
            ].map((r, i) => (
              <div className="eregl-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="eregl-ind-name">{r.name}</span>
                <span className="eregl-ind-val">{r.val}</span>
                <span className={`eregl-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>38.84 TL</strong> seviyesinin üzerinde kapanış yaparak kısa vadeli görünümde tutunma sinyali vermiştir. Ancak üst banda mesafe bulunduğu için hareketin güç kazanması adına 40.00–41.71 TL direnç bölgesi takip edilmelidir.
            </p>
          </div>

          <div className="eregl-section-title"><span className="eregl-section-num">03</span> İndikatörler</div>
          <div className="eregl-two-col">
            <div className="eregl-analysis-card">
              <div className="eregl-analysis-card-head">
                <div className="eregl-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="eregl-analysis-card-body">
                <div className="eregl-ind-row"><span className="eregl-ind-name">StocK</span><span className="eregl-ind-val">45.57</span><span className="eregl-ind-signal neutral">İzle</span></div>
                <div className="eregl-ind-row"><span className="eregl-ind-name">StocD</span><span className="eregl-ind-val">46.52</span><span className="eregl-ind-signal neutral">İzle</span></div>
                <div className="eregl-ind-row" style={{ borderBottom: "none" }}><span className="eregl-ind-name">Konum</span><span className="eregl-ind-val">Nötr</span><span className="eregl-ind-signal neutral">Yatay</span></div>
                <div>
                  <div className="eregl-progress-label"><span>Aşırı Satım (0)</span><span>45.57</span><span>Aşırı Alım (100)</span></div>
                  <div className="eregl-progress-bar"><div className="eregl-progress-fill" style={{ width: "45.57%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin hafif altında. Kısa vadede yön teyidi için 50 üzeri toparlanma izlenmelidir.</p>
              </div>
            </div>

            <div className="eregl-analysis-card">
              <div className="eregl-analysis-card-head">
                <div className="eregl-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="eregl-analysis-card-body">
                <div className="eregl-ind-row"><span className="eregl-ind-name">MACD</span><span className="eregl-ind-val">1.6077</span><span className="eregl-ind-signal neutral">POZİTİF</span></div>
                <div className="eregl-ind-row"><span className="eregl-ind-name">Trigger</span><span className="eregl-ind-val">1.7696</span><span className="eregl-ind-signal sell">ZAYIF</span></div>
                <div className="eregl-ind-row" style={{ borderBottom: "none" }}><span className="eregl-ind-name">Histogram</span><span className="eregl-ind-val">−0.1619</span><span className="eregl-ind-signal sell">Negatif</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olsa da trigger çizgisinin altında. Bu durum momentumda kısa vadeli zayıflamaya işaret ediyor.</p>
              </div>
            </div>

            <div className="eregl-analysis-card">
              <div className="eregl-analysis-card-head">
                <div className="eregl-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="eregl-analysis-card-body">
                <div className="eregl-ind-row"><span className="eregl-ind-name">RSI Değeri</span><span className="eregl-ind-val">58.03</span><span className="eregl-ind-signal neutral">NÖTR</span></div>
                <div className="eregl-ind-row" style={{ borderBottom: "none" }}><span className="eregl-ind-name">Bölge</span><span className="eregl-ind-val">Nötr-Pozitif</span><span className="eregl-ind-signal buy">Alan Var</span></div>
                <div>
                  <div className="eregl-progress-label"><span>30 (A.Satım)</span><span>58.03</span><span>70 (A.Alım)</span></div>
                  <div className="eregl-progress-bar"><div className="eregl-progress-fill" style={{ width: "58.03%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 üzerinde kalarak pozitif bölgeyi koruyor. 60 üzeri hareket momentumun güçlendiğini gösterebilir.</p>
              </div>
            </div>

            <div className="eregl-analysis-card">
              <div className="eregl-analysis-card-head">
                <div className="eregl-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="eregl-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="eregl-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","39.56","Fiyat Altında ▼","eregl-below"],
                      ["MAV 13","38.90","Fiyat Üstünde ▲","eregl-above"],
                      ["MAV 21","37.98","Fiyat Üstünde ▲","eregl-above"],
                      ["MAV 55","34.60","Fiyat Üstünde ▲","eregl-above"],
                      ["MAV 89","32.58","Fiyat Üstünde ▲","eregl-above"],
                      ["MAV 144","30.69","Fiyat Üstünde ▲","eregl-above"],
                      ["MAV 233","28.98","Fiyat Üstünde ▲","eregl-above"],
                    ].map(([p,v,d,c]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={c}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="eregl-section-title"><span className="eregl-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="eregl-sr-grid">
            {[
              { type: "res", label: "Güçlü Direnç", price: "41.70–42.00", desc: "Bollinger üst bandı ve son zirve bölgesi" },
              { type: "res", label: "Ara Direnç", price: "40.00–40.54", desc: "Psikolojik seviye ve gün içi yüksek bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "38.84–39.16", desc: "Bollinger orta bandı ve kapanış bölgesi" },
              { type: "sup", label: "Kısa Vadeli Destek", price: "37.98–38.90", desc: "MAV 21 ve MAV 13 bölgesi" },
              { type: "sup", label: "Güçlü Destek", price: "35.97 TL", desc: "Bollinger alt bandı" },
              { type: "sup", label: "Ana Destek", price: "32.50–34.60", desc: "MAV 55/89 bölgesi" },
            ].map((s) => (
              <div className="eregl-sr-cell" key={s.label}>
                <div className={`eregl-sr-type ${s.type}`}>{s.label}</div>
                <div className="eregl-sr-price">{s.price}</div>
                <div className="eregl-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="eregl-section-title"><span className="eregl-section-num">05</span> Genel Değerlendirme</div>
          <div className="eregl-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>EREGL, son yükseliş hareketi sonrasında 40 TL üzerini test etmiş ancak gelen satışla günü <strong>39.16 TL</strong> seviyesinde kapatmıştır. Fiyat, kısa vadeli <strong>MAV 5</strong> seviyesinin hafif altında kalırken; MAV 13, MAV 21 ve daha uzun vadeli ortalamaların üzerinde kalmaya devam etmektedir.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>orta band olan 38.84 TL</strong> seviyesinin üzerinde bulunuyor. Bu yapı kısa vadeli görünümün tamamen bozulmadığını gösterirken, 41.71 TL üst banda doğru hareket için 40 TL üzeri kalıcılık önemlidir.</p>
            <p>RSI <strong>58.03</strong> ile nötr-pozitif bölgede bulunuyor. Stochastic tarafında net alım teyidi oluşmamış, MACD ise pozitif bölgede olmasına rağmen trigger altında kalarak momentumda zayıflamaya işaret etmiştir.</p>
            <p>Bu nedenle EREGL’de <strong>38.84–39.16 TL</strong> bölgesi kısa vadeli denge alanı olarak izlenebilir. Bu alanın korunması halinde toparlanma devam edebilir; altına sarkmalarda 37.98 ve 35.97 TL destekleri gündeme gelir.</p>
          </div>

          <div className="eregl-section-title"><span className="eregl-section-num">06</span> Senaryo Analizi</div>
          <div className="eregl-scenario-grid">
            <div className="eregl-scenario-card bull">
              <div className="eregl-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>40.00 TL üzerinde kalıcı kapanış</li>
                <li>40.54 TL gün içi yüksek seviyesinin aşılması</li>
                <li>MACD’nin trigger üzerine yeniden geçmesi</li>
                <li>RSI’ın 60 üzerinde güç kazanması</li>
                <li>Hedef: 41.70–42.00 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="eregl-scenario-card bear">
              <div className="eregl-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>38.84 TL Bollinger orta bandı altında kapanış</li>
                <li>37.98 TL MAV 21 desteğinin kırılması</li>
                <li>Stochastic tarafında zayıflamanın sürmesi</li>
                <li>MACD histogramının negatif kalması</li>
                <li>Hedef: 35.97 TL Bollinger alt bandı</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="eregl" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="eregl-disclaimer">
            <div className="eregl-disclaimer-head">
              <div className="eregl-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>
        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="eregl-footer">
            <div className="eregl-footer-inner">
              <div className="eregl-footer-brand">HOCA İLE BORSA</div>
              <div className="eregl-footer-meta">
                EREGL Teknik Analiz Raporu<br />
                Hazırlanma: 06.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="eregl-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
