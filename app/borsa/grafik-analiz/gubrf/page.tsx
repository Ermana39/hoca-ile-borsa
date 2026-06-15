import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QUBRF Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "Gübre Fabrikaları (QUBRF) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/gubrf",
  },
};

export default function QubrfGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="gubrf" tarih="2026-06-07" />

      <style>{`
        .qubrf-wrap *, .qubrf-wrap *::before, .qubrf-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .qubrf-wrap {
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

        .qubrf-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr auto;
          gap: 2rem; align-items: end; border-bottom: 1px solid var(--border);
        }
        .qubrf-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .qubrf-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .qubrf-hero-title em { color: var(--accent); font-style: normal; }
        .qubrf-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .qubrf-price-block { text-align: right; }
        .qubrf-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .qubrf-price-currency {
          font-size: .55em; color: var(--text-dim); vertical-align: super;
        }

        .qubrf-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .qubrf-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .qubrf-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .qubrf-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .qubrf-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .qubrf-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .qubrf-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .qubrf-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .qubrf-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .qubrf-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .qubrf-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .qubrf-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .qubrf-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .qubrf-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .qubrf-chart-img-wrap { position: relative; padding: 1rem; }
        .qubrf-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .qubrf-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .qubrf-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .qubrf-analysis-card {
          background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
        }
        .qubrf-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .qubrf-icon {
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-size: .9rem;
        }
        .qubrf-icon.blue   { background: rgba(10,187,255,.12); }
        .qubrf-icon.gold   { background: rgba(245,200,66,.12); }
        .qubrf-icon.green  { background: rgba(0,208,104,.12); }
        .qubrf-icon.red    { background: rgba(255,77,106,.12); }
        .qubrf-analysis-card-head h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem; letter-spacing: .08em; color: var(--text-bright);
        }
        .qubrf-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .qubrf-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .qubrf-ind-row:last-child { border-bottom: none; }
        .qubrf-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .qubrf-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .qubrf-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }
        .qubrf-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .qubrf-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .qubrf-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .qubrf-progress-label {
          display: flex; justify-content: space-between;
          font-size: .72rem; color: var(--text-dim); margin-bottom: .35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .qubrf-progress-bar {
          height: 5px; background: var(--bg3); border-radius: 3px;
          overflow: hidden; border: 1px solid var(--border);
        }
        .qubrf-progress-fill { height: 100%; border-radius: 3px; }

        .qubrf-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .qubrf-ma-table th {
          text-align: left; color: var(--text-dim); font-size: .68rem;
          text-transform: uppercase; letter-spacing: .12em;
          padding: .5rem .6rem; border-bottom: 1px solid var(--border);
        }
        .qubrf-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .qubrf-ma-table tr:last-child td { border-bottom: none; }
        .qubrf-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .qubrf-above { color: var(--green); }
        .qubrf-below { color: var(--red); }

        .qubrf-bol-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem;
        }
        .qubrf-bol-visual {
          display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0;
          padding: 1rem; background: var(--bg3);
          border-radius: 8px; border: 1px solid var(--border);
        }
        .qubrf-bol-bands { flex: 1; position: relative; height: 48px; }
        .qubrf-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .qubrf-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .qubrf-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .qubrf-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(181,123,255,.06) 0%, rgba(181,123,255,.02) 50%, rgba(181,123,255,.06) 100%); }
        .qubrf-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--red); box-shadow: 0 0 6px var(--red);
          top: calc(100% * (631.08 - 493.00) / (631.08 - 500.52));
        }
        .qubrf-bol-labels {
          font-family: 'JetBrains Mono', monospace; font-size: .7rem;
          display: flex; flex-direction: column; justify-content: space-between;
          height: 48px; color: var(--text-dim);
        }

        .qubrf-sr-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--border); border-radius: 8px;
          overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem;
        }
        .qubrf-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .qubrf-sr-cell:hover { background: var(--bg3); }
        .qubrf-sr-type {
          font-size: .65rem; text-transform: uppercase; letter-spacing: .14em;
          font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem;
        }
        .qubrf-sr-type.res { color: var(--red); }
        .qubrf-sr-type.sup { color: var(--green); }
        .qubrf-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .qubrf-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .qubrf-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .qubrf-narrative h3 {
          font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem;
          letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem;
        }
        .qubrf-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .qubrf-narrative p:last-child { margin-bottom: 0; }
        .qubrf-narrative strong { color: var(--accent); font-weight: 600; }
        .qubrf-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .qubrf-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .qubrf-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .qubrf-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .qubrf-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .qubrf-scenario-head {
          font-family: 'Bebas Neue', sans-serif; font-size: 1rem;
          letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem;
        }
        .qubrf-scenario-card.bull .qubrf-scenario-head { color: var(--green); }
        .qubrf-scenario-card.bear .qubrf-scenario-head { color: var(--red); }
        .qubrf-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .qubrf-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .qubrf-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .qubrf-scenario-card.bull li::before { color: var(--green); }
        .qubrf-scenario-card.bear li::before { color: var(--red); }

        .qubrf-disclaimer {
          border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04);
          border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
        }
        .qubrf-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .qubrf-disclaimer-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35);
          display: flex; align-items: center; justify-content: center; font-size: .7rem;
        }
        .qubrf-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .qubrf-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .qubrf-disclaimer p + p { margin-top: .4rem; }

        .qubrf-footer { border-top: 1px solid var(--border); background: var(--bg2); padding: 1.8rem 2rem; max-width: 1280px; margin: 0 auto; }
        .qubrf-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .qubrf-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .qubrf-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .qubrf-footer-legal {
          margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6;
          border-top: 1px solid var(--border); padding-top: 1rem;
        }

        @media(max-width:900px) {
          .qubrf-hero { grid-template-columns: 1fr; }
          .qubrf-price-block { text-align: left; }
        }
        @media(max-width:768px) { .qubrf-two-col { grid-template-columns: 1fr; } }
        @media(max-width:600px) {
          .qubrf-hero   { padding: 2rem 1rem 1.5rem; }
          .qubrf-main   { padding: 1.5rem 1rem 3rem; }
          .qubrf-footer { padding: 1.2rem 1rem; }
          .qubrf-scenario-grid { grid-template-columns: 1fr; }
          .qubrf-sr-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="qubrf-wrap">
        <section className="qubrf-hero">
          <div>
            <div className="qubrf-hero-label">Teknik Analiz Raporu</div>
            <h1 className="qubrf-hero-title">GÜBRE<br /><em>FABRİKALARI</em></h1>
            <p className="qubrf-hero-sub">
              BIST: QUBRF &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; 05 Haziran 2026
            </p>
          </div>
          <div className="qubrf-price-block">
            <div className="qubrf-price-main"><span className="qubrf-price-currency">₺</span>493.00</div>
          </div>
        </section>

        <main className="qubrf-main">
          <div className="qubrf-section-title"><span className="qubrf-section-num">01</span> Grafik</div>
          <div className="qubrf-chart-wrap">
            <div className="qubrf-chart-header">
              <span className="qubrf-chart-title-text">QUBRF — Günlük Mum Grafiği</span>
              <div className="qubrf-pills">
                {["MAV 5/13/21", "MAV 55/89", "MAV 144/233", "Bollinger (20,2)", "Stoch · MACD · RSI"].map((p, i) => (
                  <span key={i} className={`qubrf-pill ${["green","yellow","red","purple","blue"][i]}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="qubrf-chart-img-wrap">
              <img
                src="/qubrf-analiz.webp"
                alt="QUBRF Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 05.06.2026"
                loading="lazy"
              />
              <div className="qubrf-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          <div className="qubrf-section-title"><span className="qubrf-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="qubrf-bol-card">
            <div className="qubrf-bol-visual">
              <div className="qubrf-bol-bands">
                <div className="qubrf-bol-fill" />
                <div className="qubrf-bol-upper" />
                <div className="qubrf-bol-mid" />
                <div className="qubrf-bol-lower" />
                <div className="qubrf-bol-marker" />
              </div>
              <div className="qubrf-bol-labels">
                <span>BOL U: 631.08</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 565.80</span>
                <span>BOL D: 500.52</span>
              </div>
            </div>
            {[
              { name: "Üst Band (BOL U)", val: "631.08 TL", sig: "Direnç", cls: "neutral" },
              { name: "Orta Band / MAV 20", val: "565.80 TL", sig: "Direnç", cls: "neutral" },
              { name: "Alt Band (BOL D)", val: "500.52 TL", sig: "Kırıldı", cls: "sell" },
              { name: "Bant Genişliği", val: "130.56 TL", sig: "Yüksek Volatilite", cls: "neutral" },
              { name: "Fiyatın Konumu", val: "493.00 TL", sig: "Alt Band Altı", cls: "sell" },
            ].map((r, i) => (
              <div className="qubrf-ind-row" key={i} style={i === 4 ? { borderBottom: "none" } : {}}>
                <span className="qubrf-ind-name">{r.name}</span>
                <span className="qubrf-ind-val">{r.val}</span>
                <span className={`qubrf-ind-signal ${r.cls}`}>{r.sig}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat, Bollinger alt bandı olan <strong style={{ color: "var(--accent)" }}>500.52 TL</strong> seviyesinin altında kapanış yapmış durumda. Bu görünüm kısa vadede satış baskısının belirginleştiğini gösterir. Alt band üzerine dönüş gelmedikçe tepki hareketleri zayıf kalabilir.
            </p>
          </div>

          <div className="qubrf-section-title"><span className="qubrf-section-num">03</span> İndikatörler</div>
          <div className="qubrf-two-col">
            <div className="qubrf-analysis-card">
              <div className="qubrf-analysis-card-head">
                <div className="qubrf-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="qubrf-analysis-card-body">
                <div className="qubrf-ind-row"><span className="qubrf-ind-name">StocK</span><span className="qubrf-ind-val">3.61</span><span className="qubrf-ind-signal sell">Zayıf</span></div>
                <div className="qubrf-ind-row"><span className="qubrf-ind-name">StocD</span><span className="qubrf-ind-val">7.57</span><span className="qubrf-ind-signal sell">Satış</span></div>
                <div className="qubrf-ind-row" style={{ borderBottom: "none" }}><span className="qubrf-ind-name">Konum</span><span className="qubrf-ind-val">Aşırı Satım</span><span className="qubrf-ind-signal neutral">Tepki İzle</span></div>
                <div>
                  <div className="qubrf-progress-label"><span>Aşırı Satım (0)</span><span>3.61</span><span>Aşırı Alım (100)</span></div>
                  <div className="qubrf-progress-bar"><div className="qubrf-progress-fill" style={{ width: "3.61%", background: "linear-gradient(90deg,var(--green),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>Stochastic aşırı satım bölgesinde. Tepki potansiyeli oluşabilir ancak K çizgisinin D çizgisi altında kalması zayıflığın sürdüğünü gösteriyor.</p>
              </div>
            </div>

            <div className="qubrf-analysis-card">
              <div className="qubrf-analysis-card-head">
                <div className="qubrf-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="qubrf-analysis-card-body">
                <div className="qubrf-ind-row"><span className="qubrf-ind-name">MACD</span><span className="qubrf-ind-val">4.0067</span><span className="qubrf-ind-signal sell">Zayıflıyor</span></div>
                <div className="qubrf-ind-row"><span className="qubrf-ind-name">Trigger</span><span className="qubrf-ind-val">6.0596</span><span className="qubrf-ind-signal sell">Altında</span></div>
                <div className="qubrf-ind-row" style={{ borderBottom: "none" }}><span className="qubrf-ind-name">Momentum</span><span className="qubrf-ind-val">Negatif eğilim</span><span className="qubrf-ind-signal neutral">İzle</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD pozitif bölgede olsa da trigger çizgisinin altında. Bu durum yükseliş momentumunun zayıfladığını ve kısa vadeli baskının sürdüğünü gösterir.</p>
              </div>
            </div>

            <div className="qubrf-analysis-card">
              <div className="qubrf-analysis-card-head">
                <div className="qubrf-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="qubrf-analysis-card-body">
                <div className="qubrf-ind-row"><span className="qubrf-ind-name">RSI Değeri</span><span className="qubrf-ind-val">37.51</span><span className="qubrf-ind-signal sell">Zayıf</span></div>
                <div className="qubrf-ind-row" style={{ borderBottom: "none" }}><span className="qubrf-ind-name">Bölge</span><span className="qubrf-ind-val">Nötr-Alt</span><span className="qubrf-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="qubrf-progress-label"><span>30 (A.Satım)</span><span>37.51</span><span>70 (A.Alım)</span></div>
                  <div className="qubrf-progress-bar"><div className="qubrf-progress-fill" style={{ width: "37.51%", background: "linear-gradient(90deg,var(--green),var(--accent))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 40 seviyesinin altında ve zayıf bölgede. 50 seviyesi üzerine dönüş olmadan momentumda kalıcı güçlenmeden söz etmek zor.</p>
              </div>
            </div>

            <div className="qubrf-analysis-card">
              <div className="qubrf-analysis-card-head">
                <div className="qubrf-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="qubrf-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="qubrf-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[
                      ["MAV 5","523.71","Fiyat Altında ▼"],
                      ["MAV 13","542.94","Fiyat Altında ▼"],
                      ["MAV 21","546.56","Fiyat Altında ▼"],
                      ["MAV 55","529.44","Fiyat Altında ▼"],
                      ["MAV 89","503.86","Fiyat Altında ▼"],
                      ["MAV 144","464.69","Fiyat Üstünde ▲"],
                      ["MAV 233","417.10","Fiyat Üstünde ▲"],
                    ].map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={d.includes("Üstünde") ? "qubrf-above" : "qubrf-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="qubrf-section-title"><span className="qubrf-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="qubrf-sr-grid">
            {[
              { type: "res", label: "İlk Direnç", price: "500.50–503.90", desc: "Bollinger alt bandı ve MAV 89 bölgesi" },
              { type: "res", label: "Kritik Direnç", price: "523.70–546.60", desc: "MAV 5/13/21 ve MAV 55 kısa-orta vade bandı" },
              { type: "res", label: "Güçlü Direnç", price: "565.80 TL", desc: "Bollinger orta bandı / toparlanma eşiği" },
              { type: "sup", label: "Anlık Destek", price: "493.00 TL", desc: "Günlük düşük ve kapanış seviyesi" },
              { type: "sup", label: "Ana Destek", price: "464.70 TL", desc: "MAV 144 bölgesi" },
              { type: "sup", label: "Derin Destek", price: "417.10 TL", desc: "MAV 233 uzun vadeli destek" },
            ].map((s) => (
              <div className="qubrf-sr-cell" key={s.label}>
                <div className={`qubrf-sr-type ${s.type}`}>{s.label}</div>
                <div className="qubrf-sr-price">{s.price}</div>
                <div className="qubrf-sr-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="qubrf-section-title"><span className="qubrf-section-num">05</span> Genel Değerlendirme</div>
          <div className="qubrf-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif</h3>
            <p>QUBRF, son zirve bölgesinden gelen satış baskısıyla <strong>493.00 TL</strong> seviyesinde kapanış yapmıştır. Fiyatın MAV 5, MAV 13, MAV 21, MAV 55 ve MAV 89 ortalamalarının altında kalması kısa vadeli teknik görünümün zayıfladığını göstermektedir.</p>
            <p>Bollinger Bantları açısından fiyat, <strong>500.52 TL alt bandının altında</strong> kapanış yapmıştır. Bu yapı, satış baskısının belirginleştiğini ve fiyatın yeniden alt band üzerine dönmeden toparlanmanın sınırlı kalabileceğini gösterir.</p>
            <p>Stochastic aşırı satım bölgesinde olsa da <em>MACD trigger altında</em> ve RSI 40 seviyesinin altında kaldığı için momentum zayıf seyrediyor. Tepki ihtimali için önce 500.50–503.90 TL bandının geri alınması gerekir.</p>
            <p>493.00 TL altında kalıcılık halinde <strong>464.69 TL MAV 144</strong> ve daha aşağıda <strong>417.10 TL MAV 233</strong> ana destekleri takip edilmelidir.</p>
          </div>

          <div className="qubrf-section-title"><span className="qubrf-section-num">06</span> Senaryo Analizi</div>
          <div className="qubrf-scenario-grid">
            <div className="qubrf-scenario-card bull">
              <div className="qubrf-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>500.52 TL Bollinger alt bandı üzerine dönüş</li>
                <li>503.86 TL MAV 89 üzerinde kapanış</li>
                <li>523.71 TL MAV 5 seviyesinin geri alınması</li>
                <li>RSI’ın 50 seviyesine doğru toparlanması</li>
                <li>Hedef: 529.40–546.60 TL direnç bölgesi</li>
              </ul>
            </div>
            <div className="qubrf-scenario-card bear">
              <div className="qubrf-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>493.00 TL altında kapanışların devam etmesi</li>
                <li>Bollinger alt bandının altında kalıcılık</li>
                <li>MACD’nin trigger altında zayıf seyrini sürdürmesi</li>
                <li>RSI’ın 40 altında kalması</li>
                <li>Hedef: 464.69 TL MAV 144 destek testi</li>
              </ul>
            </div>
          </div>
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="gubrf" />

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", color: "#60a5fa", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "#fbbf24", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", padding: ".4rem .8rem", borderRadius: "999px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: ".8rem", fontWeight: 600, textDecoration: "none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>


          <div className="qubrf-disclaimer">
            <div className="qubrf-disclaimer-head">
              <div className="qubrf-disclaimer-icon">⚠</div>
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
