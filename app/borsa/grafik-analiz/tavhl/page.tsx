import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAVHL Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "TAV Havalimanları (TAVHL) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/tavhl",
  },
};

export default function TavhlGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="tavhl" tarih="2026-06-07" />

      <style>{`
        .tavhl-wrap *, .tavhl-wrap *::before, .tavhl-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .tavhl-wrap {
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

        .tavhl-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .tavhl-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .tavhl-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .tavhl-hero-title em { color: var(--accent); font-style: normal; }
        .tavhl-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .tavhl-price-block { text-align: right; }
        .tavhl-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .tavhl-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .tavhl-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .tavhl-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .tavhl-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .tavhl-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .tavhl-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .tavhl-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .tavhl-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .tavhl-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .tavhl-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .tavhl-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .tavhl-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .tavhl-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .tavhl-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .tavhl-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .tavhl-chart-img-wrap { position: relative; padding: 1rem; }
        .tavhl-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .tavhl-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .tavhl-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .tavhl-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .tavhl-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .tavhl-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .tavhl-icon.blue   { background: rgba(10,187,255,.12); }
        .tavhl-icon.gold   { background: rgba(245,200,66,.12); }
        .tavhl-icon.green  { background: rgba(0,208,104,.12); }
        .tavhl-icon.red    { background: rgba(255,77,106,.12); }
        .tavhl-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .tavhl-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .tavhl-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .tavhl-ind-row:last-child { border-bottom: none; }
        .tavhl-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .tavhl-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .tavhl-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .tavhl-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .tavhl-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .tavhl-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .tavhl-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .tavhl-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .tavhl-progress-fill { height: 100%; border-radius: 3px; }

        .tavhl-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .tavhl-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .tavhl-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .tavhl-ma-table tr:last-child td { border-bottom: none; }
        .tavhl-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .tavhl-above { color: var(--green); }
        .tavhl-below { color: var(--red); }

        .tavhl-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .tavhl-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .tavhl-bol-bands { flex: 1; position: relative; height: 48px; }
        .tavhl-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tavhl-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .tavhl-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .tavhl-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .tavhl-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (290.05 - 257.50) / (290.05 - 240.51));
        }
        .tavhl-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .tavhl-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .tavhl-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .tavhl-sr-cell:hover { background: var(--bg3); }
        .tavhl-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .tavhl-sr-type.res { color: var(--red); }
        .tavhl-sr-type.sup { color: var(--green); }
        .tavhl-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .tavhl-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .tavhl-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .tavhl-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .tavhl-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .tavhl-narrative p:last-child { margin-bottom: 0; }
        .tavhl-narrative strong { color: var(--accent); font-weight: 600; }
        .tavhl-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .tavhl-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .tavhl-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .tavhl-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .tavhl-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .tavhl-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .tavhl-scenario-card.bull .tavhl-scenario-head { color: var(--green); }
        .tavhl-scenario-card.bear .tavhl-scenario-head { color: var(--red); }
        .tavhl-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .tavhl-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .tavhl-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .tavhl-scenario-card.bull li::before { color: var(--green); }
        .tavhl-scenario-card.bear li::before { color: var(--red); }

        .tavhl-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .tavhl-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .tavhl-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .tavhl-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .tavhl-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .tavhl-disclaimer p + p { margin-top: .4rem; }

        .tavhl-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .tavhl-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .tavhl-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .tavhl-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .tavhl-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .tavhl-hero { grid-template-columns: 1fr; }
          .tavhl-price-block { text-align: left; }
        }
        @media(max-width:768px) { .tavhl-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .tavhl-hero   { padding: 2rem 1rem 1.5rem; }
          .tavhl-main   { padding: 1.5rem 1rem 3rem; }
          .tavhl-footer { padding: 1.2rem 1rem; }
          .tavhl-scenario-grid { grid-template-columns: 1fr; }
          .tavhl-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="tavhl-wrap">
        <section className="tavhl-hero">
          <div>
            <div className="tavhl-hero-label">Teknik Analiz Raporu</div>
            <h1 className="tavhl-hero-title">TAV<br /><em>HAVALİMANLARI</em></h1>
            <p className="tavhl-hero-sub">
              BIST: TAVHL &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="tavhl-price-block">
            <div className="tavhl-price-main"><span className="tavhl-price-currency">₺</span>257.50</div>
          </div>
        </section>

        <main className="tavhl-main">
          <div className="tavhl-section-title"><span className="tavhl-section-num">01</span> Grafik</div>
          <div className="tavhl-chart-wrap">
            <div className="tavhl-chart-header">
              <span className="tavhl-chart-title-text">TAVHL — Günlük Mum Grafiği</span>
              <div className="tavhl-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`tavhl-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="tavhl-chart-img-wrap">
              <img
                src="/tavhl-analiz.webp"
                alt="TAVHL Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="tavhl-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="tavhl-section-title"><span className="tavhl-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="tavhl-bol-card">
            <div className="tavhl-bol-visual">
              <div className="tavhl-bol-bands">
                <div className="tavhl-bol-fill" />
                <div className="tavhl-bol-upper" />
                <div className="tavhl-bol-mid" />
                <div className="tavhl-bol-lower" />
                <div className="tavhl-bol-marker" />
              </div>
              <div className="tavhl-bol-labels">
                <span>BOL U: 290.05</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 265.28</span>
                <span>BOL D: 240.51</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "290.05 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "265.28 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "240.51 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "49.54 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "257.50 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="tavhl-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="tavhl-ind-name">{r.name}</span>
                <span className="tavhl-ind-val">{r.val}</span>
                <span className={`tavhl-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>265.28 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>240.51 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="tavhl-section-title"><span className="tavhl-section-num">03</span> İndikatörler</div>
          <div className="tavhl-two-col">
            <div className="tavhl-analysis-card">
              <div className="tavhl-analysis-card-head">
                <div className="tavhl-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="tavhl-analysis-card-body">
                <div className="tavhl-ind-row"><span className="tavhl-ind-name">StocK</span><span className="tavhl-ind-val">83.66</span><span className="tavhl-ind-signal neutral">Nötr</span></div>
                <div className="tavhl-ind-row"><span className="tavhl-ind-name">StocD</span><span className="tavhl-ind-val">83.87</span><span className="tavhl-ind-signal buy">Tepki</span></div>
                <div className="tavhl-ind-row" style={{ borderBottom: "none" }}><span className="tavhl-ind-name">Konum</span><span className="tavhl-ind-val">Aşırı Alım Yakını</span><span className="tavhl-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tavhl-progress-label"><span>Aşırı Satım (0)</span><span>83.66</span><span>Aşırı Alım (100)</span></div>
                  <div className="tavhl-progress-bar"><div className="tavhl-progress-fill" style={{ width: "83.66%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic yüksek bölgede ve K/D çizgileri birbirine çok yakın. Tepki hareketi güç kazansa da fiyatın ortalamaların altında kalması nedeniyle teyit zayıf.</p>
              </div>
            </div>

            <div className="tavhl-analysis-card">
              <div className="tavhl-analysis-card-head">
                <div className="tavhl-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="tavhl-analysis-card-body">
                <div className="tavhl-ind-row"><span className="tavhl-ind-name">MACD</span><span className="tavhl-ind-val">-9.7356</span><span className="tavhl-ind-signal sell">Negatif</span></div>
                <div className="tavhl-ind-row"><span className="tavhl-ind-name">Trigger</span><span className="tavhl-ind-val">-11.5366</span><span className="tavhl-ind-signal sell">Baskı</span></div>
                <div className="tavhl-ind-row" style={{ borderBottom: "none" }}><span className="tavhl-ind-name">Momentum</span><span className="tavhl-ind-val">Zayıf</span><span className="tavhl-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ancak trigger çizgisinin üzerinde. Bu durum kısa vadede tepki isteği olduğunu, fakat ana momentumun hâlâ zayıf kaldığını gösteriyor.</p>
              </div>
            </div>

            <div className="tavhl-analysis-card">
              <div className="tavhl-analysis-card-head">
                <div className="tavhl-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="tavhl-analysis-card-body">
                <div className="tavhl-ind-row"><span className="tavhl-ind-name">RSI Değeri</span><span className="tavhl-ind-val">41.45</span><span className="tavhl-ind-signal neutral">Zayıf</span></div>
                <div className="tavhl-ind-row" style={{ borderBottom: "none" }}><span className="tavhl-ind-name">Bölge</span><span className="tavhl-ind-val">Nötr-Alt</span><span className="tavhl-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="tavhl-progress-label"><span>30 (A.Satım)</span><span>41.45</span><span>70 (A.Alım)</span></div>
                  <div className="tavhl-progress-bar"><div className="tavhl-progress-fill" style={{ width: "41.45%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="tavhl-analysis-card">
              <div className="tavhl-analysis-card-head">
                <div className="tavhl-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="tavhl-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="tavhl-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","260.11","Fiyat Altında ▼"],
                      ["MAV 13","262.19","Fiyat Altında ▼"],
                      ["MAV 21","267.79","Fiyat Altında ▼"],
                      ["MAV 55","285.78","Fiyat Altında ▼"],
                      ["MAV 89","291.75","Fiyat Altında ▼"],
                      ["MAV 144","291.16","Fiyat Altında ▼"],
                      ["MAV 233","283.97","Fiyat Altında ▼"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "tavhl-above" : "tavhl-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tavhl-section-title"><span className="tavhl-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="tavhl-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "260.11–262.19", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "265.28–267.79", desc: "Bollinger orta bandı ve MAV 21 bölgesi" },
              { type: "res", label: "Güçlü Direnç", price: "283.97–290.05", desc: "MAV 233 ve Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "257.50 TL", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "250.00–252.00", desc: "Psikolojik destek alanı" },
              { type: "sup", label: "Derin Destek", price: "240.51 TL", desc: "Bollinger alt bandı" },
            ].map((s) => (
              <div className="tavhl-sr-cell" key={s.label}>
                <div className={`tavhl-sr-type ${s.type}`}>{s.label}</div>
                <div className="tavhl-sr-price">{s.price}</div>
                <div className="tavhl-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="tavhl-section-title"><span className="tavhl-section-num">05</span> Genel Değerlendirme</div>
          <div className="tavhl-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>TAVHL, son kapanışını <strong>257.50 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>265.28 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 260.11–265.28 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>257.50 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>283.97–240.51 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="tavhl-section-title"><span className="tavhl-section-num">06</span> Senaryo Analizi</div>
          <div className="tavhl-scenario-grid">
            <div className="tavhl-scenario-card bull">
              <div className="tavhl-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>260.11 TL MAV 5 üzerinde kapanış</li>
                <li>262.19 TL MAV 13 seviyesinin geri alınması</li>
                <li>265.28 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 265.28–267.79 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="tavhl-scenario-card bear">
              <div className="tavhl-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>257.50 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>250.00 TL psikolojik desteğine geri çekilme</li>
                <li>Hedef: 250.00–240.51 TL destek bölgesi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="tavhl" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="tavhl-disclaimer">
            <div className="tavhl-disclaimer-head">
              <div className="tavhl-disclaimer-icon">⚠</div>
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
