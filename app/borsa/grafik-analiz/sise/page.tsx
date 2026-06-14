import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SISE Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Şişecam (SISE) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/sise",
  },
};

export default function SiseGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="sise" tarih="2026-06-07" />

      <style>{`
        .sise-wrap *, .sise-wrap *::before, .sise-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sise-wrap {
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

        .sise-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .sise-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .sise-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .sise-hero-title em { color: var(--accent); font-style: normal; }
        .sise-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .sise-price-block { text-align: right; }
        .sise-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .sise-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .sise-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .sise-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .sise-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .sise-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .sise-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .sise-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .sise-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .sise-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .sise-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .sise-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .sise-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .sise-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .sise-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .sise-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .sise-chart-img-wrap { position: relative; padding: 1rem; }
        .sise-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .sise-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .sise-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .sise-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .sise-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .sise-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .sise-icon.blue   { background: rgba(10,187,255,.12); }
        .sise-icon.gold   { background: rgba(245,200,66,.12); }
        .sise-icon.green  { background: rgba(0,208,104,.12); }
        .sise-icon.red    { background: rgba(255,77,106,.12); }
        .sise-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .sise-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .sise-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .sise-ind-row:last-child { border-bottom: none; }
        .sise-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .sise-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .sise-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .sise-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .sise-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .sise-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .sise-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .sise-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .sise-progress-fill { height: 100%; border-radius: 3px; }

        .sise-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .sise-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .sise-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .sise-ma-table tr:last-child td { border-bottom: none; }
        .sise-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .sise-above { color: var(--green); }
        .sise-below { color: var(--red); }

        .sise-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .sise-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .sise-bol-bands { flex: 1; position: relative; height: 48px; }
        .sise-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sise-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .sise-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .sise-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .sise-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--gold); box-shadow: 0 0 6px var(--gold);
          top: calc(100% * (51.88 - 44.80) / (51.88 - 42.35));
        }
        .sise-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .sise-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .sise-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .sise-sr-cell:hover { background: var(--bg3); }
        .sise-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .sise-sr-type.res { color: var(--red); }
        .sise-sr-type.sup { color: var(--green); }
        .sise-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .sise-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .sise-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .sise-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .sise-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .sise-narrative p:last-child { margin-bottom: 0; }
        .sise-narrative strong { color: var(--accent); font-weight: 600; }
        .sise-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .sise-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .sise-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .sise-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .sise-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .sise-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .sise-scenario-card.bull .sise-scenario-head { color: var(--green); }
        .sise-scenario-card.bear .sise-scenario-head { color: var(--red); }
        .sise-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .sise-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .sise-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .sise-scenario-card.bull li::before { color: var(--green); }
        .sise-scenario-card.bear li::before { color: var(--red); }

        .sise-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .sise-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .sise-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .sise-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .sise-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .sise-disclaimer p + p { margin-top: .4rem; }

        .sise-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .sise-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .sise-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .sise-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .sise-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .sise-hero { grid-template-columns: 1fr; }
          .sise-price-block { text-align: left; }
        }
        @media(max-width:768px) { .sise-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .sise-hero   { padding: 2rem 1rem 1.5rem; }
          .sise-main   { padding: 1.5rem 1rem 3rem; }
          .sise-footer { padding: 1.2rem 1rem; }
          .sise-scenario-grid { grid-template-columns: 1fr; }
          .sise-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="sise-wrap">
        <section className="sise-hero">
          <div>
            <div className="sise-hero-label">Teknik Analiz Raporu</div>
            <h1 className="sise-hero-title">ŞİŞE<br /><em>CAM</em></h1>
            <p className="sise-hero-sub">
              BIST: SISE &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="sise-price-block">
            <div className="sise-price-main"><span className="sise-price-currency">₺</span>44.80</div>
          </div>
        </section>

        <main className="sise-main">
          <div className="sise-section-title"><span className="sise-section-num">01</span> Grafik</div>
          <div className="sise-chart-wrap">
            <div className="sise-chart-header">
              <span className="sise-chart-title-text">SISE — Günlük Mum Grafiği</span>
              <div className="sise-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`sise-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="sise-chart-img-wrap">
              <img
                src="/sise-analiz.webp"
                alt="SISE Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="sise-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="sise-section-title"><span className="sise-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="sise-bol-card">
            <div className="sise-bol-visual">
              <div className="sise-bol-bands">
                <div className="sise-bol-fill" />
                <div className="sise-bol-upper" />
                <div className="sise-bol-mid" />
                <div className="sise-bol-lower" />
                <div className="sise-bol-marker" />
              </div>
              <div className="sise-bol-labels">
                <span>BOL U: 51.88</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 47.11</span>
                <span>BOL D: 42.35</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "51.88 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "47.11 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "42.35 TL", sig: "Güçlü Destek", cls: "buy" },
              { name: "Bant Genişliği", val: "9.53 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "44.80 TL", sig: "Orta-Alt Bant", cls: "sell" },
            ].map((r, i) => (
              <div className="sise-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="sise-ind-name">{r.name}</span>
                <span className="sise-ind-val">{r.val}</span>
                <span className={`sise-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger orta bandı olan <strong style={{ color: "var(--accent)" }}>47.11 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede baskının sürdüğünü gösterirken, aşağıda <strong style={{ color: "var(--accent)" }}>42.35 TL</strong> alt bandı ana destek olarak takip edilebilir.
            </p>
          </div>

          <div className="sise-section-title"><span className="sise-section-num">03</span> İndikatörler</div>
          <div className="sise-two-col">
            <div className="sise-analysis-card">
              <div className="sise-analysis-card-head">
                <div className="sise-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="sise-analysis-card-body">
                <div className="sise-ind-row"><span className="sise-ind-name">StocK</span><span className="sise-ind-val">40.85</span><span className="sise-ind-signal neutral">Nötr</span></div>
                <div className="sise-ind-row"><span className="sise-ind-name">StocD</span><span className="sise-ind-val">40.90</span><span className="sise-ind-signal buy">Tepki</span></div>
                <div className="sise-ind-row" style={{ borderBottom: "none" }}><span className="sise-ind-name">Konum</span><span className="sise-ind-val">Nötr-Alt</span><span className="sise-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sise-progress-label"><span>Aşırı Satım (0)</span><span>40.85</span><span>Aşırı Alım (100)</span></div>
                  <div className="sise-progress-bar"><div className="sise-progress-fill" style={{ width: "40.85%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic nötr-alt bölgede ve K/D çizgileri birbirine çok yakın. Net yön teyidi için 50 seviyesi üzerine toparlanma izlenmeli.</p>
              </div>
            </div>

            <div className="sise-analysis-card">
              <div className="sise-analysis-card-head">
                <div className="sise-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="sise-analysis-card-body">
                <div className="sise-ind-row"><span className="sise-ind-name">MACD</span><span className="sise-ind-val">-0.3581</span><span className="sise-ind-signal sell">Negatif</span></div>
                <div className="sise-ind-row"><span className="sise-ind-name">Trigger</span><span className="sise-ind-val">-0.1166</span><span className="sise-ind-signal sell">Baskı</span></div>
                <div className="sise-ind-row" style={{ borderBottom: "none" }}><span className="sise-ind-name">Momentum</span><span className="sise-ind-val">Zayıf</span><span className="sise-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede ve trigger çizgisinin altında. Momentum tarafında zayıflık devam ediyor.</p>
              </div>
            </div>

            <div className="sise-analysis-card">
              <div className="sise-analysis-card-head">
                <div className="sise-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="sise-analysis-card-body">
                <div className="sise-ind-row"><span className="sise-ind-name">RSI Değeri</span><span className="sise-ind-val">44.93</span><span className="sise-ind-signal neutral">Zayıf</span></div>
                <div className="sise-ind-row" style={{ borderBottom: "none" }}><span className="sise-ind-name">Bölge</span><span className="sise-ind-val">Nötr-Alt</span><span className="sise-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="sise-progress-label"><span>30 (A.Satım)</span><span>44.93</span><span>70 (A.Alım)</span></div>
                  <div className="sise-progress-bar"><div className="sise-progress-fill" style={{ width: "44.93%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 seviyesinin altında. Bu durum kısa vadeli momentumun zayıf kaldığını gösterir.</p>
              </div>
            </div>

            <div className="sise-analysis-card">
              <div className="sise-analysis-card-head">
                <div className="sise-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="sise-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="sise-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","45.53","Fiyat Altında ▼"],
                      ["MAV 13","46.02","Fiyat Altında ▼"],
                      ["MAV 21","46.29","Fiyat Altında ▼"],
                      ["MAV 55","45.78","Fiyat Altında ▼"],
                      ["MAV 89","44.74","Fiyat Üstünde ▲"],
                      ["MAV 144","43.24","Fiyat Üstünde ▲"],
                      ["MAV 233","41.79","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "sise-above" : "sise-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sise-section-title"><span className="sise-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="sise-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "45.53–46.02", desc: "MAV 5 ve MAV 13 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "46.29–47.11", desc: "MAV 21 ve Bollinger orta bandı" },
              { type: "res", label: "Güçlü Direnç", price: "51.88 TL", desc: "Bollinger üst bandı" },
              { type: "sup", label: "Anlık Destek", price: "44.66–44.80", desc: "Günlük dip ve kapanış bölgesi" },
              { type: "sup", label: "Ana Destek", price: "44.74–43.24", desc: "MAV 89 ve MAV 144 destek bölgesi" },
              { type: "sup", label: "Derin Destek", price: "42.35–41.79", desc: "Bollinger alt bandı ve MAV 233 bölgesi" },
            ].map((s) => (
              <div className="sise-sr-cell" key={s.label}>
                <div className={`sise-sr-type ${s.type}`}>{s.label}</div>
                <div className="sise-sr-price">{s.price}</div>
                <div className="sise-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="sise-section-title"><span className="sise-section-num">05</span> Genel Değerlendirme</div>
          <div className="sise-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Negatif</h3>
            <p>SISE, son kapanışını <strong>44.80 TL</strong> seviyesinde yaparak kısa ve orta vadeli hareketli ortalamaların önemli bölümünün altında kalmıştır. Fiyatın MAV 5, MAV 13, MAV 21 ve MAV 55 altında kalması kısa vadeli teknik görünümde zayıflamaya işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>47.11 TL orta bandının altında</strong> işlem görüyor. Bu seviye aşılmadıkça yukarı yönlü tepki hareketleri sınırlı kalabilir.</p>
            <p>Stochastic tarafında kısa vadeli tepki isteği görülse de <em>MACD negatif bölgede</em> ve RSI 50 altında kaldığı için momentum henüz güçlü değildir. Bu nedenle 45.53–47.11 TL bandının geri alınması teknik görünüm açısından önemlidir.</p>
            <p>44.66 TL altı kapanışlarda satış baskısı yeniden artabilir. Bu durumda <strong>41.79–42.35 TL</strong> destek bölgesi takip edilmelidir.</p>
          </div>

          <div className="sise-section-title"><span className="sise-section-num">06</span> Senaryo Analizi</div>
          <div className="sise-scenario-grid">
            <div className="sise-scenario-card bull">
              <div className="sise-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>45.53 TL MAV 5 üzerinde kapanış</li>
                <li>46.02 TL MAV 13 seviyesinin geri alınması</li>
                <li>47.11 TL Bollinger orta bandı üzerinde kalıcılık</li>
                <li>MACD’nin trigger üzerine geçmesi</li>
                <li>Hedef: 47.11–51.88 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="sise-scenario-card bear">
              <div className="sise-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>44.66 TL günlük dip altında kapanış</li>
                <li>RSI’ın 40 altına sarkması</li>
                <li>MACD’nin negatif bölgede kalmaya devam etmesi</li>
                <li>43.24 TL MAV 144 desteğine geri çekilme</li>
                <li>Hedef: 42.35–41.79 TL destek bölgesi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="sise" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="sise-disclaimer">
            <div className="sise-disclaimer-head">
              <div className="sise-disclaimer-icon">⚠</div>
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
