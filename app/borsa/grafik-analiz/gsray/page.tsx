import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GSRAY Teknik Analiz — 10.06.2026",
  description:
    "Galatasaray Sportif A.Ş. (GSRAY) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/gsray",
  },
};

export default function GsrayGrafikAnaliz() {
  return (
    <>


      <style>{`
        .gsray-wrap *, .gsray-wrap *::before, .gsray-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .gsray-wrap {
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

        .gsray-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          border-bottom: 1px solid var(--border);
        }
        .gsray-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .gsray-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .gsray-hero-title em { color: var(--accent); font-style: normal; }
        .gsray-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .gsray-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .gsray-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .gsray-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .gsray-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .gsray-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .gsray-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .gsray-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .gsray-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .gsray-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .gsray-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .gsray-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .gsray-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .gsray-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .gsray-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .gsray-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .gsray-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .gsray-chart-img-wrap { position: relative; padding: 1rem; }
        .gsray-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .gsray-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .gsray-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .gsray-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .gsray-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .gsray-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .gsray-icon.blue  { background: rgba(10,187,255,.12); }
        .gsray-icon.gold  { background: rgba(245,200,66,.12); }
        .gsray-icon.green { background: rgba(0,208,104,.12); }
        .gsray-icon.red   { background: rgba(255,77,106,.12); }
        .gsray-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .gsray-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .gsray-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .gsray-ind-row:last-child { border-bottom: none; }
        .gsray-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .gsray-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .gsray-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;
        }
        .gsray-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .gsray-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .gsray-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .gsray-progress-label {
          display: flex; justify-content: space-between; font-size: .72rem;
          color: var(--text-dim); margin-bottom: .35rem; font-family: 'JetBrains Mono', monospace;
        }
        .gsray-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .gsray-progress-fill { height: 100%; border-radius: 3px; }

        .gsray-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .gsray-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .gsray-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .gsray-ma-table tr:last-child td { border-bottom: none; }
        .gsray-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .gsray-above { color: var(--green); }
        .gsray-below { color: var(--red); }

        .gsray-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .gsray-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3); border-radius: 8px; border: 1px solid var(--border);
        }
        .gsray-bol-bands { flex: 1; position: relative; height: 48px; }
        .gsray-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .gsray-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .gsray-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .gsray-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .gsray-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--red); box-shadow: 0 0 6px var(--red);
          /* 1.06 fiyat, üst 1.19, alt 1.00 → (1.19-1.06)/(1.19-1.00) = 0.684 */
          top: calc(100% * (1.19 - 1.06) / (1.19 - 1.00));
        }
        .gsray-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .gsray-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .gsray-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .gsray-sr-cell:hover { background: var(--bg3); }
        .gsray-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .gsray-sr-type.res { color: var(--red); }
        .gsray-sr-type.sup { color: var(--green); }
        .gsray-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .gsray-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .gsray-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--red);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .gsray-narrative h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem; }
        .gsray-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .gsray-narrative p:last-child { margin-bottom: 0; }
        .gsray-narrative strong { color: var(--accent); font-weight: 600; }
        .gsray-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .gsray-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .gsray-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .gsray-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .gsray-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .gsray-scenario-head { font-family: 'Bebas Neue', sans-serif; font-size: 1rem; letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem; }
        .gsray-scenario-card.bull .gsray-scenario-head { color: var(--green); }
        .gsray-scenario-card.bear .gsray-scenario-head { color: var(--red); }
        .gsray-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .gsray-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .gsray-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .gsray-scenario-card.bull li::before { color: var(--green); }
        .gsray-scenario-card.bear li::before { color: var(--red); }

        .gsray-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .gsray-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .gsray-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .gsray-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .gsray-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .gsray-disclaimer p+p { margin-top: .4rem; }

        .gsray-footer { max-width: 1280px; margin: 0 auto; padding: 1.8rem 2rem; }
        .gsray-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .gsray-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .gsray-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .gsray-footer-legal { margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6; border-top: 1px solid var(--border); padding-top: 1rem; }

        @media(max-width:768px){ .gsray-two-col{ grid-template-columns: 1fr; } }
        @media(max-width:600px){
          .gsray-hero{ padding: 2rem 1rem 1.5rem; }
          .gsray-main{ padding: 1.5rem 1rem 3rem; }
          .gsray-footer{ padding: 1.2rem 1rem; }
          .gsray-scenario-grid{ grid-template-columns: 1fr; }
          .gsray-sr-grid{ grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gsray-wrap">

        {/* HERO */}
        <section className="gsray-hero">
          <div className="gsray-hero-label">Teknik Analiz Raporu</div>
          <h1 className="gsray-hero-title">GALATASARAY<br /><em>GSRAY</em></h1>
          <p className="gsray-hero-sub">
            BIST: GSRAY &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="gsray-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="gsray-price-currency">₺</span>1.06
          </div>
        </section>

        <main className="gsray-main">

          {/* CHART */}
          <div className="gsray-section-title"><span className="gsray-section-num">01</span> Grafik</div>
          <div className="gsray-chart-wrap">
            <div className="gsray-chart-header">
              <span className="gsray-chart-title-text">GSRAY — Günlük Mum Grafiği</span>
              <div className="gsray-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`gsray-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="gsray-chart-img-wrap">
              <img src="/gsray-analiz.webp" alt="GSRAY Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="gsray-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="gsray-section-title"><span className="gsray-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="gsray-bol-card">
            <div className="gsray-bol-visual">
              <div className="gsray-bol-bands">
                <div className="gsray-bol-fill" /><div className="gsray-bol-upper" />
                <div className="gsray-bol-mid" /><div className="gsray-bol-lower" />
                <div className="gsray-bol-marker" />
              </div>
              <div className="gsray-bol-labels">
                <span>BOL U: 1.19</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 1.10</span>
                <span>BOL D: 1.00</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "1.19 TL", "Güçlü Direnç",   "sell"],
              ["Orta Band / MAV 20", "1.10 TL", "Direnç",         "neutral"],
              ["Alt Band (BOL D)",   "1.00 TL", "Kritik Destek",  "neutral"],
              ["Bant Genişliği",     "0.19 TL", "Orta Volatilite","neutral"],
              ["Fiyatın Konumu",     "1.06 TL", "Orta-Alt Bant",  "sell"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="gsray-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="gsray-ind-name">{n}</span>
                <span className="gsray-ind-val">{v}</span>
                <span className={`gsray-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı (1.10) ile alt band (1.00) arasında kalmaya devam ediyor. Bu konum <strong style={{ color: "var(--red)" }}>ayı bölgesi</strong> olarak değerlendirilir. Alt banda yaklaşım durumunda 1.00 TL psikolojik destek kritik önem taşıyacak.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="gsray-section-title"><span className="gsray-section-num">03</span> İndikatörler</div>
          <div className="gsray-two-col">

            {/* Stochastic */}
            <div className="gsray-analysis-card">
              <div className="gsray-analysis-card-head">
                <div className="gsray-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="gsray-analysis-card-body">
                <div className="gsray-ind-row"><span className="gsray-ind-name">StocK</span><span className="gsray-ind-val">58.47</span><span className="gsray-ind-signal neutral">İzle</span></div>
                <div className="gsray-ind-row"><span className="gsray-ind-name">StocD</span><span className="gsray-ind-val">63.74</span><span className="gsray-ind-signal sell">Negatif</span></div>
                <div className="gsray-ind-row" style={{ borderBottom: "none" }}><span className="gsray-ind-name">Konum</span><span className="gsray-ind-val">K &lt; D</span><span className="gsray-ind-signal sell">Ölüm Kes.</span></div>
                <div>
                  <div className="gsray-progress-label"><span>Aşırı Satım</span><span>K: 58.47</span><span>Aşırı Alım</span></div>
                  <div className="gsray-progress-bar"><div className="gsray-progress-fill" style={{ width: "58.47%", background: "linear-gradient(90deg,var(--warn),var(--red))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>K çizgisi D&apos;nin altına geçmiş — ölüm kesişimi oluşmuş. Kısa vadeli satış baskısının devam etme ihtimali yüksek.</p>
              </div>
            </div>

            {/* MACD */}
            <div className="gsray-analysis-card">
              <div className="gsray-analysis-card-head">
                <div className="gsray-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="gsray-analysis-card-body">
                <div className="gsray-ind-row"><span className="gsray-ind-name">MACD</span><span className="gsray-ind-val">−0.0141</span><span className="gsray-ind-signal sell">NEGATİF</span></div>
                <div className="gsray-ind-row"><span className="gsray-ind-name">Trigger</span><span className="gsray-ind-val">−0.0139</span><span className="gsray-ind-signal sell">SAT</span></div>
                <div className="gsray-ind-row" style={{ borderBottom: "none" }}><span className="gsray-ind-name">Histogram</span><span className="gsray-ind-val">−0.0002</span><span className="gsray-ind-signal neutral">Zayıf</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum aşağı yönlü olmaya devam ediyor. Sıfır çizgisi üstüne dönüş izlenecek.</p>
              </div>
            </div>

            {/* RSI */}
            <div className="gsray-analysis-card">
              <div className="gsray-analysis-card-head">
                <div className="gsray-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="gsray-analysis-card-body">
                <div className="gsray-ind-row"><span className="gsray-ind-name">RSI Değeri</span><span className="gsray-ind-val">41.39</span><span className="gsray-ind-signal neutral">Zayıf</span></div>
                <div className="gsray-ind-row" style={{ borderBottom: "none" }}><span className="gsray-ind-name">Bölge</span><span className="gsray-ind-val">Nötr-Alt</span><span className="gsray-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="gsray-progress-label"><span>30 (A.Satım)</span><span>41.39</span><span>70 (A.Alım)</span></div>
                  <div className="gsray-progress-bar"><div className="gsray-progress-fill" style={{ width: "41.39%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında ve zayıf momentum bölgesinde. 30 altına inerse aşırı satım uyarısı devreye girebilir.</p>
              </div>
            </div>

            {/* MA TABLE */}
            <div className="gsray-analysis-card">
              <div className="gsray-analysis-card-head">
                <div className="gsray-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="gsray-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="gsray-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "1.08", "Fiyat Altında ▼"],
                      ["MAV 13", "1.09", "Fiyat Altında ▼"],
                      ["MAV 21", "1.09", "Fiyat Altında ▼"],
                      ["MAV 55", "1.12", "Fiyat Altında ▼"],
                      ["MAV 89", "1.15", "Fiyat Altında ▼"],
                      ["MAV 144","1.19", "Fiyat Altında ▼"],
                      ["MAV 233","1.26", "Fiyat Altında ▼"],
                    ] as [string,string,string][]).map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="gsray-below">{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="gsray-section-title"><span className="gsray-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="gsray-sr-grid">
            {([
              ["res", "Güçlü Direnç",  "1.19 TL",    "Bollinger üst bandı"],
              ["res", "Kritik Direnç", "1.10 TL",    "Bollinger orta bandı / MAV 20"],
              ["res", "İlk Direnç",    "1.08–1.09",  "MAV 5/13/21 bölgesi — kısa vadeli tavan"],
              ["sup", "Anlık Destek",  "1.04–1.06",  "Güncel fiyat bölgesi / kısa vadeli zemin"],
              ["sup", "Kritik Destek", "1.00–1.01",  "Psikolojik eşik + Bollinger alt bandı"],
              ["sup", "Tarihsel Dip",  "~1.01 TL",   "Grafikteki dip bölgesi — kırılırsa kritik"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="gsray-sr-cell" key={l}>
                <div className={`gsray-sr-type ${t}`}>{l}</div>
                <div className="gsray-sr-price">{p}</div>
                <div className="gsray-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="gsray-section-title"><span className="gsray-section-num">05</span> Genel Değerlendirme</div>
          <div className="gsray-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>GSRAY, <strong>1.06 TL</strong> kapanışıyla tüm hareketli ortalamaların altında kalmaya devam ediyor. MAV 5&apos;ten MAV 233&apos;e kadar 1.08–1.26 TL aralığındaki ortalamaların hepsi fiyatın üzerinde konumlanmış; bu durum kısa, orta ve uzun vadeli görünümün tamamının baskı altında olduğuna işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat <strong>orta band (1.10) ile alt band (1.00) arasında</strong> sıkışmış durumda. 1.10 TL üstüne dönülmedikçe toparlanma denemelerinin direnç görmesi beklenir.</p>
            <p>Stochastic&apos;te <em>ölüm kesişimi oluşmuş</em> (K: 58.47, D: 63.74 — K&lt;D), MACD negatif bölgede (−0.0141) ve RSI 41.39 ile 50&apos;nin altında. Üç indikatörün aynı anda zayıf sinyal vermesi <em>kısa vadeli momentumun baskılı kalmaya devam edeceğine</em> işaret ediyor.</p>
            <p>En kritik destek <strong>1.00–1.01 TL</strong> bölgesidir. Bu seviyenin kırılması durumunda psikolojik eşik aşılmış olacak ve satış baskısı hızlanabilir.</p>
          </div>

          {/* SENARYO */}
          <div className="gsray-section-title"><span className="gsray-section-num">06</span> Senaryo Analizi</div>
          <div className="gsray-scenario-grid">
            <div className="gsray-scenario-card bull">
              <div className="gsray-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>1.08–1.09 TL MAV 5/13/21 üzerinde kapanış</li>
                <li>Bollinger orta bandı 1.10 TL&apos;nin geri alınması</li>
                <li>Stochastic K çizgisinin D&apos;yi yukarı kesmesi</li>
                <li>MACD&apos;nin sıfır çizgisine yaklaşması</li>
                <li>Hedef: 1.10–1.19 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="gsray-scenario-card bear">
              <div className="gsray-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>1.04 TL anlık destek altında kapanış</li>
                <li>RSI&apos;ın 30 aşırı satım bölgesine inmesi</li>
                <li>MACD&apos;nin negatif bölgede derinleşmesi</li>
                <li>1.00 TL psikolojik eşiğin kırılması</li>
                <li>Hedef: 1.00 TL altı — belirsiz alan</li>
              </ul>
            </div>
          </div>

          {/* İLGİLİ BÖLÜMLER */}
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34,197,94,.1)", border: "1px solid rgba(34,197,94,.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168,85,247,.1)", border: "1px solid rgba(168,85,247,.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="gsray-disclaimer">
            <div className="gsray-disclaimer-head">
              <div className="gsray-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>

        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="gsray-footer">
            <div className="gsray-footer-inner">
              <div className="gsray-footer-brand">HOCA İLE BORSA</div>
              <div className="gsray-footer-meta">
                GSRAY Teknik Analiz Raporu<br />
                Hazırlanma: 10.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="gsray-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
