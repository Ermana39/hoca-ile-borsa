import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";
import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AKSA Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Aksa Akrilik (AKSA) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/aksa",
  },
};

export default function AksaGrafikAnaliz() {
  return (
    <>

      <GrafikAnalizJsonLd kod="aksa" tarih="2026-06-08" />

      <style>{`
        .aksa-wrap *, .aksa-wrap *::before, .aksa-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .aksa-wrap {
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

        .aksa-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .aksa-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .aksa-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .aksa-hero-title em { color: var(--accent); font-style: normal; }
        .aksa-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .aksa-price-block { text-align: right; }
        .aksa-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .aksa-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .aksa-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .aksa-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .aksa-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .aksa-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .aksa-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .aksa-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .aksa-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .aksa-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .aksa-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .aksa-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .aksa-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .aksa-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .aksa-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .aksa-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .aksa-chart-img-wrap { position: relative; padding: 1rem; }
        .aksa-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .aksa-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .aksa-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .aksa-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .aksa-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .aksa-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .aksa-icon.blue   { background: rgba(10,187,255,.12); }
        .aksa-icon.gold   { background: rgba(245,200,66,.12); }
        .aksa-icon.green  { background: rgba(0,208,104,.12); }
        .aksa-icon.red    { background: rgba(255,77,106,.12); }
        .aksa-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .aksa-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .aksa-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .aksa-ind-row:last-child { border-bottom: none; }
        .aksa-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .aksa-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .aksa-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .aksa-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .aksa-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .aksa-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .aksa-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .aksa-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .aksa-progress-fill { height: 100%; border-radius: 3px; }

        .aksa-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .aksa-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .aksa-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .aksa-ma-table tr:last-child td { border-bottom: none; }
        .aksa-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .aksa-above { color: var(--green); }
        .aksa-below { color: var(--red); }

        .aksa-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .aksa-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .aksa-bol-bands { flex: 1; position: relative; height: 48px; }
        .aksa-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .aksa-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .aksa-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .aksa-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .aksa-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (12.00 - 11.14) / (12.00 - 9.80));
        }
        .aksa-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .aksa-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .aksa-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .aksa-sr-cell:hover { background: var(--bg3); }
        .aksa-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .aksa-sr-type.res { color: var(--red); }
        .aksa-sr-type.sup { color: var(--green); }
        .aksa-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .aksa-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .aksa-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .aksa-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .aksa-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .aksa-narrative p:last-child { margin-bottom: 0; }
        .aksa-narrative strong { color: var(--accent); font-weight: 600; }
        .aksa-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .aksa-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .aksa-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .aksa-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .aksa-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .aksa-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .aksa-scenario-card.bull .aksa-scenario-head { color: var(--green); }
        .aksa-scenario-card.bear .aksa-scenario-head { color: var(--red); }
        .aksa-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .aksa-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .aksa-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .aksa-scenario-card.bull li::before { color: var(--green); }
        .aksa-scenario-card.bear li::before { color: var(--red); }

        .aksa-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .aksa-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .aksa-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .aksa-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .aksa-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .aksa-disclaimer p + p { margin-top: .4rem; }

        .aksa-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .aksa-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .aksa-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .aksa-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .aksa-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .aksa-hero { grid-template-columns: 1fr; }
          .aksa-price-block { text-align: left; }
        }
        @media(max-width:768px) { .aksa-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .aksa-hero   { padding: 2rem 1rem 1.5rem; }
          .aksa-main   { padding: 1.5rem 1rem 3rem; }
          .aksa-footer { padding: 1.2rem 1rem; }
          .aksa-scenario-grid { grid-template-columns: 1fr; }
          .aksa-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="aksa-wrap">
        <section className="aksa-hero">
          <div>
            <div className="aksa-hero-label">Teknik Analiz Raporu</div>
            <h1 className="aksa-hero-title">AKSA<br /><em>AKRİLİK</em></h1>
            <p className="aksa-hero-sub">
              BIST: AKSA &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 08 Haziran 2026
            </p>
          </div>
          <div className="aksa-price-block">
            <div className="aksa-price-main"><span className="aksa-price-currency">₺</span>11.14</div>
          </div>
        </section>

        <main className="aksa-main">
          <div className="aksa-section-title"><span className="aksa-section-num">01</span> Grafik</div>
          <div className="aksa-chart-wrap">
            <div className="aksa-chart-header">
              <span className="aksa-chart-title-text">AKSA — Günlük Mum Grafiği</span>
              <div className="aksa-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`aksa-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="aksa-chart-img-wrap">
              <img
                src="/aksa-analiz.webp"
                alt="AKSA Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 08.06.2026"
                loading="lazy"
              />
              <div className="aksa-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="aksa-section-title"><span className="aksa-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="aksa-bol-card">
            <div className="aksa-bol-visual">
              <div className="aksa-bol-bands">
                <div className="aksa-bol-fill" />
                <div className="aksa-bol-upper" />
                <div className="aksa-bol-mid" />
                <div className="aksa-bol-lower" />
                <div className="aksa-bol-marker" />
              </div>
              <div className="aksa-bol-labels">
                <span>BOL U: 12.00</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 10.90</span>
                <span>BOL D: 9.80</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "12.00 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "10.90 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "9.80 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "1.38 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "11.14 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="aksa-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="aksa-ind-name">{r.name}</span>
                <span className="aksa-ind-val">{r.val}</span>
                <span className={`aksa-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>10.90 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>9.80 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="aksa-section-title"><span className="aksa-section-num">03</span> İndikatörler</div>
          <div className="aksa-two-col">
            <div className="aksa-analysis-card">
              <div className="aksa-analysis-card-head">
                <div className="aksa-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="aksa-analysis-card-body">
                <div className="aksa-ind-row"><span className="aksa-ind-name">StocK</span><span className="aksa-ind-val">71.42</span><span className="aksa-ind-signal neutral">Nötr-Yüksek</span></div>
                <div className="aksa-ind-row"><span className="aksa-ind-name">StocD</span><span className="aksa-ind-val">54.38</span><span className="aksa-ind-signal buy">Tepki</span></div>
                <div className="aksa-ind-row" style={{ borderBottom: "none" }}><span className="aksa-ind-name">Konum</span><span className="aksa-ind-val">Nötr-Yüksek</span><span className="aksa-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="aksa-progress-label"><span>Aşırı Satım (0)</span><span>71.42</span><span>Aşırı Alım (100)</span></div>
                  <div className="aksa-progress-bar"><div className="aksa-progress-fill" style={{ width: "71.42%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ve K çizgisi D çizgisinin üzerinde. Kısa vadeli tepki isteği var ancak fiyat ortalamaların altında olduğu için teyit zayıf.</p>
              </div>
            </div>

            <div className="aksa-analysis-card">
              <div className="aksa-analysis-card-head">
                <div className="aksa-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="aksa-analysis-card-body">
                <div className="aksa-ind-row"><span className="aksa-ind-name">MACD</span><span className="aksa-ind-val">-0.0408</span><span className="aksa-ind-signal sell">Negatif</span></div>
                <div className="aksa-ind-row"><span className="aksa-ind-name">Trigger</span><span className="aksa-ind-val">-0.0355</span><span className="aksa-ind-signal sell">Baskı</span></div>
                <div className="aksa-ind-row" style={{ borderBottom: "none" }}><span className="aksa-ind-name">Momentum</span><span className="aksa-ind-val">Zayıf</span><span className="aksa-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="aksa-analysis-card">
              <div className="aksa-analysis-card-head">
                <div className="aksa-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="aksa-analysis-card-body">
                <div className="aksa-ind-row"><span className="aksa-ind-name">RSI Değeri</span><span className="aksa-ind-val">56.35</span><span className="aksa-ind-signal neutral">Zayıf</span></div>
                <div className="aksa-ind-row" style={{ borderBottom: "none" }}><span className="aksa-ind-name">Bölge</span><span className="aksa-ind-val">Nötr-Yüksek-Alt</span><span className="aksa-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="aksa-progress-label"><span>30 (A.Satım)</span><span>56.35</span><span>70 (A.Alım)</span></div>
                  <div className="aksa-progress-bar"><div className="aksa-progress-fill" style={{ width: "56.35%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin hemen üzerinde. Bu durum kısa vadeli momentumun toparlanmaya çalıştığını gösterir.</p>
              </div>
            </div>

            <div className="aksa-analysis-card">
              <div className="aksa-analysis-card-head">
                <div className="aksa-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="aksa-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="aksa-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","10.82","Fiyat Üstünde ▲"],
                      ["MAV 13","10.75","Fiyat Üstünde ▲"],
                      ["MAV 21","10.73","Fiyat Üstünde ▲"],
                      ["MAV 55","10.57","Fiyat Üstünde ▲"],
                      ["MAV 89","10.44","Fiyat Üstünde ▲"],
                      ["MAV 144","10.31","Fiyat Üstünde ▲"],
                      ["MAV 233","10.13","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "aksa-above" : "aksa-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="aksa-section-title"><span className="aksa-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="aksa-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "11.18–11.50", desc: "Günlük zirve ve son tepki alanı" },
              { type: "res", label: "Kritik Direnç", price: "12.00 TL", desc: "Grafikte görülen önceki tepe bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "12.00 TL üzeri", desc: "Trend devamı için izlenecek bölge" },
              { type: "sup", label: "Anlık Destek", price: "10.82–10.73", desc: "MAV 5, MAV 13 ve MAV 21 bölgesi" },
              { type: "sup", label: "Ana Destek", price: "10.57–10.44", desc: "MAV 55 ve MAV 89 destek alanı" },
              { type: "sup", label: "Derin Destek", price: "10.31–10.13", desc: "MAV 144 ve MAV 233 uzun vadeli destek bölgesi" },
            ].map((s) => (
              <div className="aksa-sr-cell" key={s.label}>
                <div className={`aksa-sr-type ${s.type}`}>{s.label}</div>
                <div className="aksa-sr-price">{s.price}</div>
                <div className="aksa-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="aksa-section-title"><span className="aksa-section-num">05</span> Genel Değerlendirme</div>
          <div className="aksa-narrative">
            <h3>Kısa Vadeli Görünüm: Pozitif</h3>
            <p>AKSA, son kapanışını <strong>11.14 TL</strong> seviyesinde yaparak takip edilen hareketli ortalamaların tamamının üzerinde kalmıştır. Bu yapı kısa vadeli teknik görünümde toparlanmanın güçlendiğini göstermektedir.</p>
            <p>Kısa vadeli ortalama diziliminde fiyatın MAV 5, MAV 13 ve MAV 21 üzerinde kalması olumlu. 10.82–10.73 TL bandı ilk destek alanı olarak izlenebilir.</p>
            <p>Stochastic göstergesi 71.42 / 54.38 seviyelerinde ve K çizgisi D çizgisinin üzerinde. Bu durum kısa vadeli momentumun pozitif olduğunu gösterirken, <em>MACD negatif bölgede</em> ve trigger altında kaldığı için orta vadeli momentum tarafında hâlâ temkinli görünüm korunuyor.</p>
            <p>11.18 TL üzeri kapanışlar görünümü daha da güçlendirebilir. 10.82 TL altı kapanışlarda ise 10.57–10.44 TL destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="aksa-section-title"><span className="aksa-section-num">06</span> Senaryo Analizi</div>
          <div className="aksa-scenario-grid">
            <div className="aksa-scenario-card bull">
              <div className="aksa-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>10.82 TL MAV 5 üzerinde kapanış</li>
                <li>10.75 TL MAV 13 seviyesinin geri alınması</li>
                <li>12.00 TL tepe bölgesine yönelim</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 11.50–12.00 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="aksa-scenario-card bear">
              <div className="aksa-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>10.82 TL günlük dip altında kapanış</li>
                <li>RSI’ın 50 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>10.44 TL MAV 89 desteğine geri çekilme</li>
                <li>Hedef: 10.44–10.31 TL destek bölgesi</li>
              </ul>
            </div>
          </div>

          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="aksa" />

          <div className="aksa-disclaimer">
            <div className="aksa-disclaimer-head">
              <div className="aksa-disclaimer-icon">⚠</div>
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
