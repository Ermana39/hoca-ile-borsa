import Link from "next/link";

import GrafikAnalizJsonLd from "@/components/GrafikAnalizJsonLd";

import HisseProfili from "@/components/HisseProfili";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İZENR Teknik Analiz, Grafik ve Hisse Yorumu",
  description:
    "İzmir Enerjisi (İZENR) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/izenr",
  },
};

export default function IzenrGrafikAnaliz() {
  return (
    <>


      <GrafikAnalizJsonLd kod="izenr" tarih="2026-06-10" />

      <style>{`
        .izenr-wrap *, .izenr-wrap *::before, .izenr-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .izenr-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px;
          line-height:1.65; min-height:100vh;
        }
        .izenr-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .izenr-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .izenr-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .izenr-hero-title em { color:var(--accent); font-style:normal; }
        .izenr-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .izenr-price-main { font-family:'Bebas Neue',sans-serif; font-size:clamp(2.4rem,5vw,4rem); color:var(--text-bright); letter-spacing:.04em; line-height:1; }
        .izenr-price-currency { font-size:.55em; color:var(--text-dim); vertical-align:super; }
        .izenr-main { max-width:1280px; margin:0 auto; padding:2.5rem 2rem 4rem; }
        .izenr-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .izenr-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .izenr-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .izenr-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .izenr-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .izenr-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .izenr-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .izenr-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .izenr-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .izenr-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .izenr-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .izenr-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .izenr-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .izenr-chart-img-wrap { position:relative; padding:1rem; }
        .izenr-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .izenr-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .izenr-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .izenr-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .izenr-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .izenr-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .izenr-icon.blue  { background:rgba(10,187,255,.12); }
        .izenr-icon.gold  { background:rgba(245,200,66,.12); }
        .izenr-icon.green { background:rgba(0,208,104,.12); }
        .izenr-icon.red   { background:rgba(255,77,106,.12); }
        .izenr-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .izenr-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .izenr-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .izenr-ind-row:last-child { border-bottom:none; }
        .izenr-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .izenr-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .izenr-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .izenr-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .izenr-ind-signal.sell    { background:rgba(255,61,85,.12);  color:var(--red);   border:1px solid rgba(255,61,85,.3); }
        .izenr-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .izenr-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .izenr-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .izenr-progress-fill { height:100%; border-radius:3px; }
        .izenr-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .izenr-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .izenr-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .izenr-ma-table tr:last-child td { border-bottom:none; }
        .izenr-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .izenr-above { color:var(--green); }
        .izenr-below { color:var(--red); }
        .izenr-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .izenr-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .izenr-bol-bands { flex:1; position:relative; height:48px; }
        .izenr-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .izenr-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .izenr-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .izenr-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .izenr-bol-marker {
          position:absolute; left:0; right:0; height:2px;
          background:var(--red); box-shadow:0 0 6px var(--red);
          /* 10.00 fiyat, üst 12.42, alt 9.66 → (12.42-10.00)/(12.42-9.66) = 0.877 */
          top:calc(100% * (12.42 - 10.00) / (12.42 - 9.66));
        }
        .izenr-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .izenr-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .izenr-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .izenr-sr-cell:hover { background:var(--bg3); }
        .izenr-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .izenr-sr-type.res { color:var(--red); }
        .izenr-sr-type.sup { color:var(--green); }
        .izenr-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .izenr-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .izenr-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--warn); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .izenr-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .izenr-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .izenr-narrative p:last-child { margin-bottom:0; }
        .izenr-narrative strong { color:var(--accent); font-weight:600; }
        .izenr-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .izenr-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .izenr-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .izenr-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .izenr-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .izenr-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .izenr-scenario-card.bull .izenr-scenario-head { color:var(--green); }
        .izenr-scenario-card.bear .izenr-scenario-head { color:var(--red); }
        .izenr-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .izenr-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .izenr-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .izenr-scenario-card.bull li::before { color:var(--green); }
        .izenr-scenario-card.bear li::before { color:var(--red); }
        .izenr-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .izenr-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .izenr-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .izenr-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .izenr-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .izenr-disclaimer p+p { margin-top:.4rem; }
        .izenr-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .izenr-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .izenr-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .izenr-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .izenr-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:768px){ .izenr-two-col{ grid-template-columns:1fr; } }
        @media(max-width:600px){
          .izenr-hero{ padding:2rem 1rem 1.5rem; }
          .izenr-main{ padding:1.5rem 1rem 3rem; }
          .izenr-footer{ padding:1.2rem 1rem; }
          .izenr-scenario-grid{ grid-template-columns:1fr; }
          .izenr-sr-grid{ grid-template-columns:1fr; }
        }
      `}</style>

      <div className="izenr-wrap">

        {/* HERO */}
        <section className="izenr-hero">
          <div className="izenr-hero-label">Teknik Analiz Raporu</div>
          <h1 className="izenr-hero-title">İZMİR ENERJİSİ<br /><em>İZENR</em></h1>
          <p className="izenr-hero-sub">
            BIST: İZENR &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="izenr-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="izenr-price-currency">₺</span>10.00
          </div>
        </section>

        <main className="izenr-main">

          {/* CHART */}
          <div className="izenr-section-title"><span className="izenr-section-num">01</span> Grafik</div>
          <div className="izenr-chart-wrap">
            <div className="izenr-chart-header">
              <span className="izenr-chart-title-text">İZENR — Günlük Mum Grafiği</span>
              <div className="izenr-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`izenr-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="izenr-chart-img-wrap">
              <img src="/izenr-analiz.webp" alt="İZENR Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="izenr-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="izenr-section-title"><span className="izenr-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="izenr-bol-card">
            <div className="izenr-bol-visual">
              <div className="izenr-bol-bands">
                <div className="izenr-bol-fill" /><div className="izenr-bol-upper" />
                <div className="izenr-bol-mid" /><div className="izenr-bol-lower" />
                <div className="izenr-bol-marker" />
              </div>
              <div className="izenr-bol-labels">
                <span>BOL U: 12.42</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 11.04</span>
                <span>BOL D: 9.66</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "12.42 TL", "Güçlü Direnç",  "sell"],
              ["Orta Band / MAV 20", "11.04 TL", "Direnç",        "sell"],
              ["Alt Band (BOL D)",   "9.66 TL",  "Kritik Destek", "neutral"],
              ["Bant Genişliği",     "2.76 TL",  "Orta Volatilite","neutral"],
              ["Fiyatın Konumu",     "10.00 TL", "Alt Banda Yakın","sell"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="izenr-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="izenr-ind-name">{n}</span>
                <span className="izenr-ind-val">{v}</span>
                <span className={`izenr-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat Bollinger alt bandına (9.66) yakın ve orta bandın (11.04) belirgin altında. Aynı zamanda <strong style={{ color: "var(--warn)" }}>10.00 TL psikolojik eşiğinde</strong> destek arıyor. Bu seviyenin korunması teknik toparlanma için zemin oluşturabilir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="izenr-section-title"><span className="izenr-section-num">03</span> İndikatörler</div>
          <div className="izenr-two-col">

            <div className="izenr-analysis-card">
              <div className="izenr-analysis-card-head">
                <div className="izenr-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="izenr-analysis-card-body">
                <div className="izenr-ind-row"><span className="izenr-ind-name">StocK</span><span className="izenr-ind-val">3.61</span><span className="izenr-ind-signal buy">Derin A.Satım</span></div>
                <div className="izenr-ind-row"><span className="izenr-ind-name">StocD</span><span className="izenr-ind-val">4.21</span><span className="izenr-ind-signal buy">A.Satım</span></div>
                <div className="izenr-ind-row" style={{ borderBottom: "none" }}><span className="izenr-ind-name">Konum</span><span className="izenr-ind-val">K &lt; D</span><span className="izenr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="izenr-progress-label"><span>Aşırı Satım</span><span>K: 3.61</span><span>Aşırı Alım</span></div>
                  <div className="izenr-progress-bar"><div className="izenr-progress-fill" style={{ width: "3.61%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>StocK 5&apos;in altında — tarihsel olarak derin aşırı satım. Bu seviyelerde teknik tepki olasılığı yüksek olmakla birlikte trend güçlüyse sinyalin gecikmesi mümkün.</p>
              </div>
            </div>

            <div className="izenr-analysis-card">
              <div className="izenr-analysis-card-head">
                <div className="izenr-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="izenr-analysis-card-body">
                <div className="izenr-ind-row"><span className="izenr-ind-name">MACD</span><span className="izenr-ind-val">−0.1018</span><span className="izenr-ind-signal sell">NEGATİF</span></div>
                <div className="izenr-ind-row"><span className="izenr-ind-name">Trigger</span><span className="izenr-ind-val">0.1159</span><span className="izenr-ind-signal neutral">Pozitif</span></div>
                <div className="izenr-ind-row" style={{ borderBottom: "none" }}><span className="izenr-ind-name">Konum</span><span className="izenr-ind-val">MACD &lt; Trigger</span><span className="izenr-ind-signal sell">Uyarı</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD negatif bölgede; trigger pozitif. İki çizgi arasındaki makas kapanırsa yakında kesişim oluşabilir — bu gelişme izlenecek kritik sinyal olacak.</p>
              </div>
            </div>

            <div className="izenr-analysis-card">
              <div className="izenr-analysis-card-head">
                <div className="izenr-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="izenr-analysis-card-body">
                <div className="izenr-ind-row"><span className="izenr-ind-name">RSI Değeri</span><span className="izenr-ind-val">40.97</span><span className="izenr-ind-signal neutral">Zayıf</span></div>
                <div className="izenr-ind-row" style={{ borderBottom: "none" }}><span className="izenr-ind-name">Bölge</span><span className="izenr-ind-val">Nötr-Alt</span><span className="izenr-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="izenr-progress-label"><span>30 (A.Satım)</span><span>40.97</span><span>70 (A.Alım)</span></div>
                  <div className="izenr-progress-bar"><div className="izenr-progress-fill" style={{ width: "40.97%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI 50 altında zayıf bölgede. 30 eşiğine yaklaşırsa aşırı satım uyarısı güçlenebilir; 50 üstüne dönüş momentum değişiminin ilk işareti olacak.</p>
              </div>
            </div>

            <div className="izenr-analysis-card">
              <div className="izenr-analysis-card-head">
                <div className="izenr-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="izenr-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="izenr-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "10.23", "Fiyat Altında ▼", false],
                      ["MAV 13", "10.65", "Fiyat Altında ▼", false],
                      ["MAV 21", "10.73", "Fiyat Altında ▼", false],
                      ["MAV 55", "10.47", "Fiyat Altında ▼", false],
                      ["MAV 89", "10.23", "Fiyat Altında ▼", false],
                      ["MAV 144","9.86",  "Fiyat Üstünde ▲", true],
                      ["MAV 233","9.29",  "Fiyat Üstünde ▲", true],
                    ] as [string,string,string,boolean][]).map(([p,v,d,above]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className={above ? "izenr-above" : "izenr-below"}>{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="izenr-section-title"><span className="izenr-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="izenr-sr-grid">
            {([
              ["res", "Güçlü Direnç",  "12.42 TL",   "Bollinger üst bandı"],
              ["res", "Kritik Direnç", "11.04 TL",   "Bollinger orta bandı / MAV 20"],
              ["res", "İlk Direnç",    "10.23–10.73","MAV 5/13/21/55/89 bölgesi"],
              ["sup", "Psikolojik",    "10.00 TL",   "Yuvarlak sayı — kritik psikolojik eşik"],
              ["sup", "Kritik Destek", "9.66 TL",    "Bollinger alt bandı"],
              ["sup", "Uzun Vade Des.","9.29–9.86",  "MAV 144/233 — uzun vadeli destek"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="izenr-sr-cell" key={l}>
                <div className={`izenr-sr-type ${t}`}>{l}</div>
                <div className="izenr-sr-price">{p}</div>
                <div className="izenr-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="izenr-section-title"><span className="izenr-section-num">05</span> Genel Değerlendirme</div>
          <div className="izenr-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif — Tepki Potansiyeli Var</h3>
            <p>İZENR, <strong>10.00 TL</strong> kapanışıyla kritik psikolojik eşikte destek arıyor. MAV 5, 13, 21, 55 ve 89 ortalamaları 10.23–10.73 TL bandında fiyatın üzerinde direnç oluştururken; <strong>MAV 144 (9.86) ve MAV 233 (9.29)</strong> fiyatın altında kalarak uzun vadeli destek sağlıyor.</p>
            <p>Bollinger Bantları açısından fiyat <strong>orta band (11.04) ile alt band (9.66) arasında</strong>, alt banda yakın konumda. 10.00 TL psikolojik eşiğinin korunması toparlanma denemesi için ilk şart.</p>
            <p>Stochastic <em>3.61 ile tarihsel derin aşırı satım bölgesinde</em> — bu seviyelerden teknik tepki ihtimali tarihsel olarak yüksek. MACD negatif olmakla birlikte trigger pozitif bölgede; makas kapanırsa <em>yakın vadede kesişim sinyali</em> izlenebilir. RSI 40.97 ile henüz aşırı satım eşiğinde değil.</p>
            <p>Kısa vadeli görünüm baskılı olsa da Stochastic&apos;in dip seviyeleri ve 10.00 TL desteği, <strong>teknik tepki için potansiyel zemin</strong> oluşturuyor. Ancak MAV 5–89 bandının geri alınması toparlanmanın teyidi için gerekli.</p>
          </div>

          {/* SENARYO */}
          <div className="izenr-section-title"><span className="izenr-section-num">06</span> Senaryo Analizi</div>
          <div className="izenr-scenario-grid">
            <div className="izenr-scenario-card bull">
              <div className="izenr-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>10.00 TL psikolojik desteğinin korunması</li>
                <li>Stochastic K&apos;nın 20 üstüne çıkması</li>
                <li>MACD&apos;nin trigger üzerinde kapanış</li>
                <li>10.23 TL MAV 5 seviyesinin geri alınması</li>
                <li>Hedef: 11.04 TL Bollinger orta bandı</li>
              </ul>
            </div>
            <div className="izenr-scenario-card bear">
              <div className="izenr-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>10.00 TL psikolojik eşiğinin kırılması</li>
                <li>RSI&apos;ın 30 aşırı satım bölgesine inmesi</li>
                <li>9.66 TL Bollinger alt bandına gerileme</li>
                <li>MACD&apos;nin negatif derinleşmesi</li>
                <li>Hedef: 9.29–9.66 TL MAV 233 / BOL Alt bölgesi</li>
              </ul>
            </div>
          </div>

          {/* İLGİLİ BÖLÜMLER */}
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: ".95rem", letterSpacing: ".1em", color: "var(--accent)", marginBottom: ".7rem" }}>İLGİLİ BÖLÜMLER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
              <Link href="/borsa/oran-analizi" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(59,130,246,.1)", border:"1px solid rgba(59,130,246,.3)", color:"#60a5fa", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Oran Analizi →</Link>
              <Link href="/temettu" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(34,197,94,.1)", border:"1px solid rgba(34,197,94,.3)", color:"#4ade80", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Temettü Takvimi →</Link>
              <Link href="/borsa/kar-zarar-hesaplama" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(245,158,11,.1)", border:"1px solid rgba(245,158,11,.3)", color:"#fbbf24", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Hisse Kâr/Zarar Hesapla →</Link>
              <Link href="/hesaplayici" prefetch={false} style={{ display:"inline-flex", alignItems:"center", gap:".3rem", padding:".4rem .8rem", borderRadius:"999px", background:"rgba(168,85,247,.1)", border:"1px solid rgba(168,85,247,.3)", color:"#c084fc", fontSize:".8rem", fontWeight:600, textDecoration:"none" }}>Tüm Hesaplayıcılar →</Link>
            </div>
          </div>

          {/* DISCLAIMER */}
          {/* ŞİRKET PROFİLİ & TEMEL GÖRÜNÜM */}
          <HisseProfili kod="izenr" />

          <div className="izenr-disclaimer">
            <div className="izenr-disclaimer-head">
              <div className="izenr-disclaimer-icon">⚠</div>
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
