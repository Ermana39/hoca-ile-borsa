import Link from "next/link";

import HisseProfili from "@/components/HisseProfili";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TKFEN Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Tekfen Holding (TKFEN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/tkfen",
  },
};

export default function TkfenGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="tkfen" tarih="2026-06-07" />

      <style>{`
        .tkfen-wrap *, .tkfen-wrap *::before, .tkfen-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tkfen-wrap {
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

        .tkfen-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .tkfen-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .tkfen-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .tkfen-hero-title em { color: var(--accent); font-style: normal; }
        .tkfen-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .tkfen-price-block { text-align: right; }
        .tkfen-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .tkfen-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .tkfen-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .tkfen-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .tkfen-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .tkfen-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .tkfen-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .tkfen-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .tkfen-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .tkfen-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .tkfen-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .tkfen-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .tkfen-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .tkfen-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .tkfen-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .tkfen-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .tkfen-chart-img-wrap { position: relative; padding: 1rem; }
        .tkfen-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .tkfen-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .tkfen-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .tkfen-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .tkfen-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .tkfen-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .tkfen-icon.blue   { background: rgba(10,187,255,.12); }
        .tkfen-icon.gold   { background: rgba(245,200,66,.12); }
        .tkfen-icon.green  { background: rgba(0,208,104,.12); }
        .tkfen-icon.red    { background: rgba(255,77,106,.12); }
        .tkfen-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .tkfen-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .tkfen-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .tkfen-ind-row:last-child { border-bottom: none; }
        .tkfen-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .tkfen-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .tkfen-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .tkfen-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .tkfen-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .tkfen-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .tkfen-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .tkfen-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .tkfen-progress-fill { height: 100%; border-radius: 3px; }

        .tkfen-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .tkfen-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .tkfen-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .tkfen-ma-table tr:last-child td { border-bottom: none; }
        .tkfen-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .tkfen-above { color: var(--green); }
        .tkfen-below { color: var(--red); }

        .tkfen-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .tkfen-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .tkfen-bol-bands { flex: 1; position: relative; height: 48px; }
        .tkfen-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tkfen-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .tkfen-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tkfen-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .tkfen-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (163.27 - 136.90) / (163.27 - 122.22));
        }
        .tkfen-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .tkfen-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .tkfen-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .tkfen-sr-cell:hover { background: var(--bg3); }
        .tkfen-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .tkfen-sr-type.res { color: var(--red); }
        .tkfen-sr-type.sup { color: var(--green); }
        .tkfen-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .tkfen-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .tkfen-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .tkfen-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .tkfen-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .tkfen-narrative p:last-child { margin-bottom: 0; }
        .tkfen-narrative strong { color: var(--accent); font-weight: 600; }
        .tkfen-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .tkfen-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .tkfen-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .tkfen-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .tkfen-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .tkfen-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .tkfen-scenario-card.bull .tkfen-scenario-head { color: var(--green); }
        .tkfen-scenario-card.bear .tkfen-scenario-head { color: var(--red); }
        .tkfen-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .tkfen-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .tkfen-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .tkfen-scenario-card.bull li::before { color: var(--green); }
        .tkfen-scenario-card.bear li::before { color: var(--red); }

        .tkfen-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .tkfen-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .tkfen-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .tkfen-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .tkfen-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .tkfen-disclaimer p + p { margin-top: .4rem; }

        .tkfen-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .tkfen-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .tkfen-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .tkfen-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .tkfen-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .tkfen-hero { grid-template-columns: 1fr; }
          .tkfen-price-block { text-align: left; }
        }
        @media(max-width:768px) { .tkfen-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .tkfen-hero   { padding: 2rem 1rem 1.5rem; }
          .tkfen-main   { padding: 1.5rem 1rem 3rem; }
          .tkfen-footer { padding: 1.2rem 1rem; }
          .tkfen-scenario-grid { grid-template-columns: 1fr; }
          .tkfen-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tkfen-wrap">
        <section className="tkfen-hero">
          <div>
            <div className="tkfen-hero-label">Teknik Analiz Raporu</div>
            <h1 className="tkfen-hero-title">TEKFEN<br /><em>HOLDİNG</em></h1>
            <p className="tkfen-hero-sub">
              BIST: TKFEN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="tkfen-price-block">
            <div className="tkfen-price-main"><span className="tkfen-price-currency">₺</span>136.90</div>
          </div>
        </section>

        <main className="tkfen-main">
          <div className="tkfen-section-title"><span className="tkfen-section-num">01</span> Grafik</div>
          <div className="tkfen-chart-wrap">
            <div className="tkfen-chart-header">
              <span className="tkfen-chart-title-text">TKFEN — Günlük Mum Grafiği</span>
              <div className="tkfen-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`tkfen-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="tkfen-chart-img-wrap">
              <img
                src="/tkfen-analiz.webp"
                alt="TKFEN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="tkfen-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="tkfen-section-title"><span className="tkfen-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="tkfen-bol-card">
            <div className="tkfen-bol-visual">
              <div className="tkfen-bol-bands">
                <div className="tkfen-bol-fill" />
                <div className="tkfen-bol-upper" />
                <div className="tkfen-bol-mid" />
                <div className="tkfen-bol-lower" />
                <div className="tkfen-bol-marker" />
              </div>
              <div className="tkfen-bol-labels">
                <span>BOL U: 163.27</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 142.75</span>
                <span>BOL D: 122.22</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "163.27 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "142.75 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "122.22 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "41.05 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "136.90 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="tkfen-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="tkfen-ind-name">{r.name}</span>
                <span className="tkfen-ind-val">{r.val}</span>
                <span className={`tkfen-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>142.75 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının arttığını gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>122.22 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="tkfen-section-title"><span className="tkfen-section-num">03</span> İndikatörler</div>
          <div className="tkfen-two-col">
            <div className="tkfen-analysis-card">
              <div className="tkfen-analysis-card-head">
                <div className="tkfen-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="tkfen-analysis-card-body">
                <div className="tkfen-ind-row"><span className="tkfen-ind-name">StocK</span><span className="tkfen-ind-val">47.51</span><span className="tkfen-ind-signal neutral">Nötr</span></div>
                <div className="tkfen-ind-row"><span className="tkfen-ind-name">StocD</span><span className="tkfen-ind-val">50.13</span><span className="tkfen-ind-signal buy">Tepki</span></div>
                <div className="tkfen-ind-row" style={{ borderBottom: "none" }}><span className="tkfen-ind-name">Konum</span><span className="tkfen-ind-val">Nötr</span><span className="tkfen-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tkfen-progress-label"><span>Aşırı Satım (0)</span><span>47.51</span><span>Aşırı Alım (100)</span></div>
                  <div className="tkfen-progress-bar"><div className="tkfen-progress-fill" style={{ width: "47.51%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr bölgede ancak K çizgisi D çizgisinin altında. Bu yapı kısa vadede tepki isteğinin zayıfladığını gösteriyor.</p>
              </div>
            </div>

            <div className="tkfen-analysis-card">
              <div className="tkfen-analysis-card-head">
                <div className="tkfen-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="tkfen-analysis-card-body">
                <div className="tkfen-ind-row"><span className="tkfen-ind-name">MACD</span><span className="tkfen-ind-val">5.1412</span><span className="tkfen-ind-signal sell">Negatif</span></div>
                <div className="tkfen-ind-row"><span className="tkfen-ind-name">Trigger</span><span className="tkfen-ind-val">5.8504</span><span className="tkfen-ind-signal sell">Baskı</span></div>
                <div className="tkfen-ind-row" style={{ borderBottom: "none" }}><span className="tkfen-ind-name">Momentum</span><span className="tkfen-ind-val">Zayıf</span><span className="tkfen-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olmasına rağmen trigger çizgisinin altında. Bu durum yükseliş momentumunda zayıflama olduğunu gösteriyor.</p>
              </div>
            </div>

            <div className="tkfen-analysis-card">
              <div className="tkfen-analysis-card-head">
                <div className="tkfen-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="tkfen-analysis-card-body">
                <div className="tkfen-ind-row"><span className="tkfen-ind-name">RSI Değeri</span><span className="tkfen-ind-val">49.86</span><span className="tkfen-ind-signal neutral">Zayıf</span></div>
                <div className="tkfen-ind-row" style={{ borderBottom: "none" }}><span className="tkfen-ind-name">Bölge</span><span className="tkfen-ind-val">Nötr-Alt</span><span className="tkfen-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tkfen-progress-label"><span>30 (A.Satım)</span><span>49.86</span><span>70 (A.Alım)</span></div>
                  <div className="tkfen-progress-bar"><div className="tkfen-progress-fill" style={{ width: "49.86%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesine çok yakın ancak hafif altında. 50 üzerine dönüş kısa vadeli toparlanmanın güçlenmesi açısından önemlidir.</p>
              </div>
            </div>

            <div className="tkfen-analysis-card">
              <div className="tkfen-analysis-card-head">
                <div className="tkfen-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="tkfen-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="tkfen-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","144.52","Fiyat Altında ▼"],
                      ["MAV 13","142.45","Fiyat Altında ▼"],
                      ["MAV 21","139.76","Fiyat Altında ▼"],
                      ["MAV 55","124.19","Fiyat Üstünde ▲"],
                      ["MAV 89","113.41","Fiyat Üstünde ▲"],
                      ["MAV 144","104.63","Fiyat Üstünde ▲"],
                      ["MAV 233","98.19","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "tkfen-above" : "tkfen-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tkfen-section-title"><span className="tkfen-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="tkfen-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "139.76–142.75", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Kritik Direnç", price: "142.45–144.52", desc: "MAV 13 ve MAV 5 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "151.70–163.27", desc: "Açılış bölgesi ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "136.80–136.90", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "124.19–122.22", desc: "MAV 55 ve Bollinger alt bandı" },
              { type: "sup", label: "Derin Destek", price: "113.41–104.63", desc: "MAV 89 ve MAV 144 destek bölgesi" },
            ].map((s) => (
              <div className="tkfen-sr-cell" key={s.label}>
                <div className={`tkfen-sr-type ${s.type}`}>{s.label}</div>
                <div className="tkfen-sr-price">{s.price}</div>
                <div className="tkfen-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="tkfen-section-title"><span className="tkfen-section-num">05</span> Genel Değerlendirme</div>
          <div className="tkfen-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TKFEN, son kapanışını <strong>136.90 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>142.75 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 144.52–142.75 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>136.80 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>98.19–122.22 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="tkfen-section-title"><span className="tkfen-section-num">06</span> Senaryo Analizi</div>
          <div className="tkfen-scenario-grid">
            <div className="tkfen-scenario-card bull">
              <div className="tkfen-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>139.76 TL MAV 21 üzerinde kapanış</li>
                <li>142.75 TL Bollinger orta bandının geri alınması</li>
                <li>144.52 TL MAV 5 üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 151.70–163.27 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="tkfen-scenario-card bear">
              <div className="tkfen-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>136.80 TL günlük dip altında kapanış</li>
                <li>RSI’ın 45 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>124.19 TL MAV 55 desteğine geri çekilme</li>
                <li>Hedef: 124.19–122.22 TL destek bölgesi</li>
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
          <HisseProfili kod="tkfen" />

          <div className="tkfen-disclaimer">
            <div className="tkfen-disclaimer-head">
              <div className="tkfen-disclaimer-icon">⚠</div>
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
