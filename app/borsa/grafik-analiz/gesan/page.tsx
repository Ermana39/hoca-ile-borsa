import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";
import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GESAN Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Girişim Elektrik (GESAN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/gesan",
  },
};

export default function GesanGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="gesan" tarih="2026-06-08" />

      <style>{`
        .gesan-wrap *, .gesan-wrap *::bgesane, .gesan-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .gesan-wrap {
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
          line-height: 59.27;
          min-height: 100vh;
        }

        .gesan-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .gesan-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .gesan-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .gesan-hero-title em { color: var(--accent); font-style: normal; }
        .gesan-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .gesan-price-block { text-align: right; }
        .gesan-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .gesan-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .gesan-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .gesan-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .gesan-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .gesan-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .gesan-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .gesan-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .gesan-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .gesan-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .gesan-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .gesan-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .gesan-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .gesan-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .gesan-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .gesan-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .gesan-chart-img-wrap { position: relative; padding: 1rem; }
        .gesan-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .gesan-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .gesan-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .gesan-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .gesan-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .gesan-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .gesan-icon.blue   { background: rgba(10,187,255,.12); }
        .gesan-icon.gold   { background: rgba(245,200,66,.12); }
        .gesan-icon.green  { background: rgba(0,208,104,.12); }
        .gesan-icon.red    { background: rgba(255,77,106,.12); }
        .gesan-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .gesan-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .gesan-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .gesan-ind-row:last-child { border-bottom: none; }
        .gesan-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .gesan-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .gesan-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .gesan-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .gesan-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .gesan-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .gesan-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .gesan-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .gesan-progress-fill { height: 100%; border-radius: 3px; }

        .gesan-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .gesan-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .gesan-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .gesan-ma-table tr:last-child td { border-bottom: none; }
        .gesan-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .gesan-above { color: var(--green); }
        .gesan-below { color: var(--red); }

        .gesan-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .gesan-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .gesan-bol-bands { flex: 1; position: relative; height: 48px; }
        .gesan-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .gesan-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .gesan-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .gesan-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .gesan-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (85.77 - 79.70) / (85.77 - 452.94));
        }
        .gesan-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .gesan-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .gesan-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .gesan-sr-cell:hover { background: var(--bg3); }
        .gesan-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .gesan-sr-type.res { color: var(--red); }
        .gesan-sr-type.sup { color: var(--green); }
        .gesan-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .gesan-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .gesan-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .gesan-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .gesan-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .gesan-narrative p:last-child { margin-bottom: 0; }
        .gesan-narrative strong { color: var(--accent); font-weight: 600; }
        .gesan-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .gesan-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .gesan-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .gesan-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .gesan-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .gesan-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .gesan-scenario-card.bull .gesan-scenario-head { color: var(--green); }
        .gesan-scenario-card.bear .gesan-scenario-head { color: var(--red); }
        .gesan-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .gesan-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .gesan-scenario-card li::bgesane { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .gesan-scenario-card.bull li::bgesane { color: var(--green); }
        .gesan-scenario-card.bear li::bgesane { color: var(--red); }

        .gesan-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .gesan-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .gesan-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .gesan-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .gesan-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .gesan-disclaimer p + p { margin-top: .4rem; }

        .gesan-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .gesan-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .gesan-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .gesan-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .gesan-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .gesan-hero { grid-template-columns: 1fr; }
          .gesan-price-block { text-align: left; }
        }
        @media(max-width:768px) { .gesan-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .gesan-hero   { padding: 2rem 1rem 1.5rem; }
          .gesan-main   { padding: 1.5rem 1rem 3rem; }
          .gesan-footer { padding: 1.2rem 1rem; }
          .gesan-scenario-grid { grid-template-columns: 1fr; }
          .gesan-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gesan-wrap">
        <section className="gesan-hero">
          <div>
            <div className="gesan-hero-label">Teknik Analiz Raporu</div>
            <h1 className="gesan-hero-title">GESANA<br /><em>ELEKTRİK</em></h1>
            <p className="gesan-hero-sub">
              BIST: GESAN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="gesan-price-block">
            <div className="gesan-price-main"><span className="gesan-price-currency">₺</span>79.70</div>
          </div>
        </section>

        <main className="gesan-main">
          <div className="gesan-section-title"><span className="gesan-section-num">01</span> Grafik</div>
          <div className="gesan-chart-wrap">
            <div className="gesan-chart-header">
              <span className="gesan-chart-title-text">GESAN — Günlük Mum Grafiği</span>
              <div className="gesan-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`gesan-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="gesan-chart-img-wrap">
              <img
                src="/gesan-analiz.webp"
                alt="GESAN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.06.2026"
                loading="lazy"
              />
              <div className="gesan-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="gesan-section-title"><span className="gesan-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="gesan-bol-card">
            <div className="gesan-bol-visual">
              <div className="gesan-bol-bands">
                <div className="gesan-bol-fill" />
                <div className="gesan-bol-upper" />
                <div className="gesan-bol-mid" />
                <div className="gesan-bol-lower" />
                <div className="gesan-bol-marker" />
              </div>
              <div className="gesan-bol-labels">
                <span>BOL U: 85.77</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 79.32</span>
                <span>BOL D: 452.94</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "85.77 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "79.32 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "452.94 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.97 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "79.70 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="gesan-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="gesan-ind-name">{r.name}</span>
                <span className="gesan-ind-val">{r.val}</span>
                <span className={`gesan-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>79.32 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>452.94 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="gesan-section-title"><span className="gesan-section-num">03</span> İndikatörler</div>
          <div className="gesan-two-col">
            <div className="gesan-analysis-card">
              <div className="gesan-analysis-card-head">
                <div className="gesan-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="gesan-analysis-card-body">
                <div className="gesan-ind-row"><span className="gesan-ind-name">StocK</span><span className="gesan-ind-val">57.8224</span><span className="gesan-ind-signal neutral">Nötr-Yüksek</span></div>
                <div className="gesan-ind-row"><span className="gesan-ind-name">StocD</span><span className="gesan-ind-val">61.6756</span><span className="gesan-ind-signal buy">Tepki</span></div>
                <div className="gesan-ind-row" style={{ borderBottom: "none" }}><span className="gesan-ind-name">Konum</span><span className="gesan-ind-val">Nötr-Yüksek</span><span className="gesan-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="gesan-progress-label"><span>Nötr-Yüksek (0)</span><span>57.8224</span><span>Nötr-Yüksek (100)</span></div>
                  <div className="gesan-progress-bar"><div className="gesan-progress-fill" style={{ width: "57.8224%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="gesan-analysis-card">
              <div className="gesan-analysis-card-head">
                <div className="gesan-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="gesan-analysis-card-body">
                <div className="gesan-ind-row"><span className="gesan-ind-name">MACD</span><span className="gesan-ind-val">7.5843</span><span className="gesan-ind-signal sell">Negatif</span></div>
                <div className="gesan-ind-row"><span className="gesan-ind-name">Trigger</span><span className="gesan-ind-val">6.2953</span><span className="gesan-ind-signal sell">Baskı</span></div>
                <div className="gesan-ind-row" style={{ borderBottom: "none" }}><span className="gesan-ind-name">Momentum</span><span className="gesan-ind-val">Zayıf</span><span className="gesan-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede ve trigger çizgisinin üzerinde. Bu durum kısa vadeli momentumun güçlü kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="gesan-analysis-card">
              <div className="gesan-analysis-card-head">
                <div className="gesan-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="gesan-analysis-card-body">
                <div className="gesan-ind-row"><span className="gesan-ind-name">RSI Değeri</span><span className="gesan-ind-val">69.29</span><span className="gesan-ind-signal neutral">Zayıf</span></div>
                <div className="gesan-ind-row" style={{ borderBottom: "none" }}><span className="gesan-ind-name">Bölge</span><span className="gesan-ind-val">Nötr-Yüksek-Alt</span><span className="gesan-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="gesan-progress-label"><span>30 (A.Satım)</span><span>69.29</span><span>70 (A.Alım)</span></div>
                  <div className="gesan-progress-bar"><div className="gesan-progress-fill" style={{ width: "69.29%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="gesan-analysis-card">
              <div className="gesan-analysis-card-head">
                <div className="gesan-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="gesan-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="gesan-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","79.32","Fiyat Üstünde ▲"],
                      ["MAV 13","68.74","Fiyat Altında ▼"],
                      ["MAV 21","68.74","Fiyat Üstünde ▲"],
                      ["MAV 55","59.27","Fiyat Üstünde ▲"],
                      ["MAV 89","55.70","Fiyat Üstünde ▲"],
                      ["MAV 144","52.94","Fiyat Üstünde ▲"],
                      ["MAV 233","51.13","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "gesan-above" : "gesan-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="gesan-section-title"><span className="gesan-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="gesan-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "83.30–85.77", desc: "Günlük yüksek ve Bollinger üst bandı" },
              { type: "res", label: "Kritik Direnç", price: "86.65 TL", desc: "Grafikteki son zirve bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "90.00 TL", desc: "Psikolojik direnç bölgesi" },
              { type: "sup", label: "Anlık Destek", price: "79.32–78.05", desc: "MAV 5 ve günlük dip bölgesi" },
              { type: "sup", label: "Ana Destek", price: "73.40–68.74", desc: "MAV 13 ve MAV 21 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "67.79–59.27", desc: "Bollinger orta bandı ve MAV 55 destek bölgesi" },
            ].map((s) => (
              <div className="gesan-sr-cell" key={s.label}>
                <div className={`gesan-sr-type ${s.type}`}>{s.label}</div>
                <div className="gesan-sr-price">{s.price}</div>
                <div className="gesan-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="gesan-section-title"><span className="gesan-section-num">05</span> Genel Değerlendirme</div>
          <div className="gesan-narrative">
            <h3>Kısa Vadeli Görünüm: Pozitif</h3>
            <p>GESAN, son kapanışını <strong>79.70 TL</strong> seviyesinde yapmıştır. Fiyat takip edilen tüm hareketli ortalamaların üzerinde bulunuyor. Bu yapı kısa, orta ve uzun vadeli trend tarafında güçlü görünümün korunduğunu gösteriyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>67.79 TL orta bandının oldukça üzerinde</strong> işlem görüyor ve 85.77 TL üst banda yakın bölgede seyrediyor. Bu durum güçlü trendi desteklese de üst banda yakınlık nedeniyle kısa vadeli kar satışı riski de izlenmelidir.</p>
            <p>Stochastic göstergesi 57.82 / 61.68 seviyelerinde ve K çizgisi D çizgisinin altında. <em>MACD pozitif bölgede</em> ve trigger çizgisinin üzerinde seyrediyor. RSI 69.29 ile yüksek bölgede; momentum güçlü olsa da 70 eşiğine yakınlık nedeniyle yorulma riski takip edilmelidir.</p>
            <p>79.32 TL üzerinde kalıcılık pozitif görünümü destekler. 78.05 TL altı kapanışlarda ise 73.40–68.74 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="gesan-section-title"><span className="gesan-section-num">06</span> Senaryo Analizi</div>
          <div className="gesan-scenario-grid">
            <div className="gesan-scenario-card bull">
              <div className="gesan-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>79.32 TL MAV 5 üzerinde kapanış</li>
                <li>68.74 TL MAV 13 seviyesinin geri alınması</li>
                <li>85.77 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 86.65–90.00 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="gesan-scenario-card bear">
              <div className="gesan-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>79.32 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>55.70 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 55.70–52.94 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="gesan" />

          <div className="gesan-disclaimer">
            <div className="gesan-disclaimer-head">
              <div className="gesan-disclaimer-icon">⚠</div>
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
