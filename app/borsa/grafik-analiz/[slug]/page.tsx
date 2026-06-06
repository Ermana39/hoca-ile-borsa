import type { Metadata } from "next";
import Link from "next/link";

/* ─── META ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "aefes") {
    return {
      title: "AEFES Teknik Analiz — 05.06.2026 | Hoca İle Borsa",
      description:
        "Anadolu Efes (AEFES) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic indikatörleri ile detaylı değerlendirme.",
      alternates: {
        canonical: "https://www.hocaileborsa.com/borsa/grafik-analiz/aefes",
      },
    };
  }
  const veri = yorumlar[slug];
  if (veri) {
    return {
      title: `${veri.kod} Grafik Analiz`,
      description: `${veri.kod} hisse senedi grafik analizi: ${veri.yorum.slice(0, 140)}`,
      alternates: {
        canonical: `https://www.hocaileborsa.com/borsa/grafik-analiz/${slug}`,
      },
    };
  }
  return { title: "Grafik Analiz", description: "Hisse senedi grafik analizi." };
}

/* ─── DİĞER HİSSELER VERİSİ ─── */
const yorumlar: Record<string, { kod: string; yorum: string }> = {
  tcell: {
    kod: "TCELL",
    yorum:
      "Teknik olarak önemli bir eşikte bulunan hissede kısa vadeli tepki ihtimali izleniyor. Stochastic RSI aşırı satım bölgesinde; 104 TL üstüne dönüş kritik.",
  },
  thyao: {
    kod: "THYAO",
    yorum:
      "Grafikte kısa vadede destek üzerinde tutunma çabası görülüyor. Hacim desteklerse yukarı yönlü tepki güç kazanabilir.",
  },
  asels: {
    kod: "ASELS",
    yorum:
      "Fiyatlama güçlü görünümünü koruyor. Kısa vadede direnç bölgesinin aşılması halinde hareket ivme kazanabilir.",
  },
  eregl: {
    kod: "EREGL",
    yorum:
      "Destek bölgesine yakın fiyatlamada tepki ihtimali izleniyor. Zayıf görünüm sürerse alt destekler gündeme gelebilir.",
  },
  tuprs: {
    kod: "TUPRS",
    yorum:
      "Trend yapısı pozitif kalmaya devam ediyor. Kâr satışları gelse de ana görünüm bozulmadıkça güçlü seyir korunabilir.",
  },
  bimas: {
    kod: "BIMAS",
    yorum:
      "Hissede dengeli görünüm sürüyor. Yeni yön için dar bant kırılımı takip edilmeli.",
  },
};

/* ─────────────────────────────────────────────────────────────
   AEFES ÖZEL SAYFA BİLEŞENİ
───────────────────────────────────────────────────────────── */
function AefesPage() {
  return (
    <>
      <style>{`
        .aefes-wrap *, .aefes-wrap *::before, .aefes-wrap *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .aefes-wrap {
          --bg:#080c10; --bg2:#0d1219; --bg3:#111820; --border:#1e2c3a;
          --accent:#00e5a0; --warn:#ffb930; --text:#cdd8e3;
          --text-dim:#5a7080; --text-bright:#eef4f8;
          --green:#00d068; --red:#ff3d55; --gold:#f5c842;
          background:var(--bg); color:var(--text);
          font-family:'DM Sans',sans-serif; font-size:15px;
          line-height:1.65; min-height:100vh;
        }

        .aefes-hero { padding:3.5rem 2rem 2rem; max-width:1280px; margin:0 auto; border-bottom:1px solid var(--border); }
        .aefes-hero-label { font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:.6rem; }
        .aefes-hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(3rem,7vw,5.5rem); line-height:.95; color:var(--text-bright); letter-spacing:.04em; }
        .aefes-hero-title em { color:var(--accent); font-style:normal; }
        .aefes-hero-sub { margin-top:.9rem; color:var(--text-dim); font-size:.88rem; font-weight:300; max-width:520px; }
        .aefes-section-title { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:.08em; color:var(--text-bright); margin-bottom:1.2rem; display:flex; align-items:center; gap:.8rem; }
        .aefes-section-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }
        .aefes-section-num { font-size:.75rem; color:var(--accent); font-family:'JetBrains Mono',monospace; background:rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.2); padding:.1rem .5rem; border-radius:3px; }
        .aefes-chart-wrap { border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:2.5rem; background:var(--bg2); }
        .aefes-chart-header { padding:.9rem 1.4rem; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.8rem; }
        .aefes-chart-title-text { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--text-bright); }
        .aefes-pills { display:flex; flex-wrap:wrap; gap:.4rem; }
        .aefes-pill { font-family:'JetBrains Mono',monospace; font-size:.66rem; padding:.15rem .55rem; border-radius:20px; border:1px solid; }
        .aefes-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .aefes-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .aefes-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .aefes-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .aefes-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35); background:rgba(10,187,255,.07); }
        .aefes-chart-img-wrap { position:relative; padding:1rem; }
        .aefes-chart-img-wrap img { width:100%; border-radius:6px; display:block; }
        .aefes-chart-watermark { position:absolute; bottom:1.8rem; right:2rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.15em; color:rgba(0,229,160,.15); pointer-events:none; user-select:none; }
        .aefes-two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2.5rem; }
        .aefes-analysis-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; overflow:hidden; }
        .aefes-analysis-card-head { padding:.85rem 1.3rem; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:.6rem; }
        .aefes-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:.9rem; }
        .aefes-icon.blue  { background:rgba(10,187,255,.12); }
        .aefes-icon.gold  { background:rgba(245,200,66,.12); }
        .aefes-icon.green { background:rgba(0,208,104,.12); }
        .aefes-icon.red   { background:rgba(255,77,106,.12); }
        .aefes-analysis-card-head h3 { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.08em; color:var(--text-bright); }
        .aefes-analysis-card-body { padding:1.2rem 1.3rem; display:flex; flex-direction:column; gap:.9rem; }
        .aefes-ind-row { display:flex; justify-content:space-between; align-items:center; padding:.55rem 0; border-bottom:1px solid rgba(30,44,58,.6); }
        .aefes-ind-row:last-child { border-bottom:none; }
        .aefes-ind-name { font-family:'JetBrains Mono',monospace; font-size:.8rem; color:var(--text-dim); }
        .aefes-ind-val  { font-family:'JetBrains Mono',monospace; font-size:.88rem; color:var(--text-bright); font-weight:600; }
        .aefes-ind-signal { font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; padding:.12rem .5rem; border-radius:3px; font-family:'JetBrains Mono',monospace; }
        .aefes-ind-signal.buy     { background:rgba(0,208,104,.12); color:var(--green); border:1px solid rgba(0,208,104,.3); }
        .aefes-ind-signal.neutral { background:rgba(255,185,48,.1);  color:var(--warn);  border:1px solid rgba(255,185,48,.3); }
        .aefes-progress-label { display:flex; justify-content:space-between; font-size:.72rem; color:var(--text-dim); margin-bottom:.35rem; font-family:'JetBrains Mono',monospace; }
        .aefes-progress-bar { height:5px; background:var(--bg3); border-radius:3px; overflow:hidden; border:1px solid var(--border); }
        .aefes-progress-fill { height:100%; border-radius:3px; }
        .aefes-ma-table { width:100%; border-collapse:collapse; font-family:'JetBrains Mono',monospace; font-size:.8rem; }
        .aefes-ma-table th { text-align:left; color:var(--text-dim); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; padding:.5rem .6rem; border-bottom:1px solid var(--border); }
        .aefes-ma-table td { padding:.55rem .6rem; color:var(--text); border-bottom:1px solid rgba(30,44,58,.5); }
        .aefes-ma-table tr:last-child td { border-bottom:none; }
        .aefes-ma-table tr:hover td { background:rgba(255,255,255,.02); }
        .aefes-above { color:var(--green); }
        .aefes-bol-card { background:var(--bg2); border:1px solid var(--border); border-radius:10px; padding:1.4rem; margin-bottom:2.5rem; }
        .aefes-bol-visual { display:flex; align-items:center; gap:1rem; margin:1.2rem 0; padding:1rem; background:var(--bg3); border-radius:8px; border:1px solid var(--border); }
        .aefes-bol-bands { flex:1; position:relative; height:48px; }
        .aefes-bol-upper { position:absolute; top:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .aefes-bol-mid   { position:absolute; top:50%; left:0; right:0; height:1px; background:rgba(245,200,66,.5); transform:translateY(-50%); }
        .aefes-bol-lower { position:absolute; bottom:0; left:0; right:0; height:1px; background:rgba(181,123,255,.6); }
        .aefes-bol-fill  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .aefes-bol-marker { position:absolute; left:0; right:0; height:2px; background:var(--accent); box-shadow:0 0 6px var(--accent); top:calc(100% * (21.13 - 20.36) / (21.13 - 18.71)); }
        .aefes-bol-labels { font-family:'JetBrains Mono',monospace; font-size:.7rem; display:flex; flex-direction:column; justify-content:space-between; height:48px; color:var(--text-dim); }
        .aefes-sr-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); border-radius:8px; overflow:hidden; border:1px solid var(--border); margin-bottom:2.5rem; }
        .aefes-sr-cell { background:var(--bg2); padding:.9rem 1.1rem; }
        .aefes-sr-cell:hover { background:var(--bg3); }
        .aefes-sr-type { font-size:.65rem; text-transform:uppercase; letter-spacing:.14em; font-family:'JetBrains Mono',monospace; margin-bottom:.3rem; }
        .aefes-sr-type.res { color:var(--red); }
        .aefes-sr-type.sup { color:var(--green); }
        .aefes-sr-price { font-family:'JetBrains Mono',monospace; font-size:1.15rem; font-weight:600; color:var(--text-bright); }
        .aefes-sr-desc { font-size:.72rem; color:var(--text-dim); margin-top:.2rem; }
        .aefes-narrative { background:var(--bg2); border:1px solid var(--border); border-left:3px solid var(--accent); border-radius:0 10px 10px 0; padding:1.6rem 1.8rem; margin-bottom:2.5rem; }
        .aefes-narrative h3 { font-family:'Bebas Neue',sans-serif; font-size:1.25rem; letter-spacing:.07em; color:var(--text-bright); margin-bottom:.8rem; }
        .aefes-narrative p { color:var(--text); line-height:1.75; margin-bottom:.6rem; font-size:.92rem; }
        .aefes-narrative p:last-child { margin-bottom:0; }
        .aefes-narrative strong { color:var(--accent); font-weight:600; }
        .aefes-narrative em { color:var(--warn); font-style:normal; font-weight:500; }
        .aefes-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:2.5rem; }
        .aefes-scenario-card { border-radius:10px; padding:1.3rem; border:1px solid; }
        .aefes-scenario-card.bull { background:rgba(0,208,104,.05); border-color:rgba(0,208,104,.2); }
        .aefes-scenario-card.bear { background:rgba(255,61,85,.05);  border-color:rgba(255,61,85,.2); }
        .aefes-scenario-head { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.09em; margin-bottom:.7rem; display:flex; align-items:center; gap:.5rem; }
        .aefes-scenario-card.bull .aefes-scenario-head { color:var(--green); }
        .aefes-scenario-card.bear .aefes-scenario-head { color:var(--red); }
        .aefes-scenario-card ul { list-style:none; display:flex; flex-direction:column; gap:.45rem; }
        .aefes-scenario-card li { font-size:.83rem; color:var(--text); display:flex; align-items:flex-start; gap:.5rem; }
        .aefes-scenario-card li::before { content:'›'; font-family:'JetBrains Mono',monospace; margin-top:.05rem; }
        .aefes-scenario-card.bull li::before { color:var(--green); }
        .aefes-scenario-card.bear li::before { color:var(--red); }
        .aefes-disclaimer { border:1px solid rgba(255,185,48,.18); background:rgba(255,185,48,.04); border-radius:10px; padding:1.4rem 1.6rem; margin-bottom:2rem; }
        .aefes-disclaimer-head { display:flex; align-items:center; gap:.6rem; margin-bottom:.7rem; }
        .aefes-disclaimer-icon { width:22px; height:22px; border-radius:50%; background:rgba(255,185,48,.15); border:1px solid rgba(255,185,48,.35); display:flex; align-items:center; justify-content:center; font-size:.7rem; }
        .aefes-disclaimer-head h4 { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.1em; color:var(--warn); }
        .aefes-disclaimer p { font-size:.78rem; color:var(--text-dim); line-height:1.7; }
        .aefes-disclaimer p+p { margin-top:.4rem; }
        .aefes-footer-wrap { border-top:1px solid var(--border); background:var(--bg2); }
        .aefes-footer { max-width:1280px; margin:0 auto; padding:1.8rem 2rem; }
        .aefes-footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
        .aefes-footer-brand { font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--accent); }
        .aefes-footer-meta { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--text-dim); text-align:right; }
        .aefes-footer-legal { margin-top:1rem; font-size:.72rem; color:var(--text-dim); line-height:1.6; border-top:1px solid var(--border); padding-top:1rem; }
        @media(max-width:600px){ .aefes-hero{padding:2rem 1rem 1.5rem} .aefes-main{padding:1.5rem 1rem 3rem} .aefes-footer{padding:1.2rem 1rem} .aefes-scenario-grid{grid-template-columns:1fr} .aefes-sr-grid{grid-template-columns:1fr} }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />

      <div className="aefes-wrap">

        {/* HERO */}
        <section className="aefes-hero">
          <div>
            <div className="aefes-hero-label">Teknik Analiz Raporu</div>
            <h1 className="aefes-hero-title">ANADOLU<br /><em>EFES</em></h1>
            <p className="aefes-hero-sub">
              BIST: AEFES &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
            </p>
          </div>
        </section>

        <main className="aefes-main">

          {/* CHART */}
          <div className="aefes-section-title"><span className="aefes-section-num">01</span> Grafik</div>
          <div className="aefes-chart-wrap">
            <div className="aefes-chart-header">
              <span className="aefes-chart-title-text">AEFES — Günlük Mum Grafiği</span>
              <div className="aefes-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`aefes-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="aefes-chart-img-wrap">
              <img src="/aefes-analiz.jpg" alt="AEFES Teknik Analiz Grafiği — 05.06.2026" loading="lazy" />
              <div className="aefes-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="aefes-section-title"><span className="aefes-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="aefes-bol-card">
            <div className="aefes-bol-visual">
              <div className="aefes-bol-bands">
                <div className="aefes-bol-fill" /><div className="aefes-bol-upper" />
                <div className="aefes-bol-mid" /><div className="aefes-bol-lower" />
                <div className="aefes-bol-marker" />
              </div>
              <div className="aefes-bol-labels">
                <span>BOL U: 21.13</span>
                <span style={{color:"var(--gold)"}}>BOL M: 19.92</span>
                <span>BOL D: 18.71</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)","21.13 TL","Direnç","neutral"],
              ["Orta Band / MAV 20","19.92 TL","Destek","buy"],
              ["Alt Band (BOL D)","18.71 TL","Güçlü Destek","buy"],
              ["Bant Genişliği","2.42 TL","Orta Volatilite","neutral"],
              ["Fiyatın Konumu","20.36 TL","Orta-Üst Bant","buy"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="aefes-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="aefes-ind-name">{n}</span>
                <span className="aefes-ind-val">{v}</span>
                <span className={`aefes-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{marginTop:"1rem",fontSize:".85rem",color:"var(--text)",lineHeight:1.7}}>
              Fiyat orta band (19.92) ile üst band (21.13) arasında — <strong style={{color:"var(--accent)"}}>boğa bölgesi</strong>. Üst banda yaklaşımda satış baskısı ve kâr realizasyonu beklenebilir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="aefes-section-title"><span className="aefes-section-num">03</span> İndikatörler</div>
          <div className="aefes-two-col">
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head"><div className="aefes-icon blue">📊</div><h3>Stochastic (14,14,3,3)</h3></div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">StocK</span><span className="aefes-ind-val">62.75</span><span className="aefes-ind-signal buy">AL</span></div>
                <div className="aefes-ind-row"><span className="aefes-ind-name">StocD</span><span className="aefes-ind-val">55.52</span><span className="aefes-ind-signal buy">AL</span></div>
                <div className="aefes-ind-row" style={{borderBottom:"none"}}><span className="aefes-ind-name">Konum</span><span className="aefes-ind-val">Nötr-Yüksek</span><span className="aefes-ind-signal neutral">İzle</span></div>
                <div><div className="aefes-progress-label"><span>Aşırı Satım</span><span>62.75</span><span>Aşırı Alım</span></div><div className="aefes-progress-bar"><div className="aefes-progress-fill" style={{width:"62.75%",background:"linear-gradient(90deg,var(--green),var(--warn))"}}/></div></div>
                <p style={{fontSize:".8rem",color:"var(--text-dim)"}}>K çizgisi D&apos;nin üzerinde — alış sinyali aktif.</p>
              </div>
            </div>
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head"><div className="aefes-icon gold">📈</div><h3>MACD (26,12) / Trigger (9)</h3></div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">MACD</span><span className="aefes-ind-val">0.3297</span><span className="aefes-ind-signal buy">POZİTİF</span></div>
                <div className="aefes-ind-row"><span className="aefes-ind-name">Trigger</span><span className="aefes-ind-val">0.3076</span><span className="aefes-ind-signal buy">AL</span></div>
                <div className="aefes-ind-row" style={{borderBottom:"none"}}><span className="aefes-ind-name">Histogram</span><span className="aefes-ind-val">+0.0221</span><span className="aefes-ind-signal neutral">Zayıf</span></div>
                <p style={{fontSize:".8rem",color:"var(--text-dim)"}}>Pozitif momentum devam ediyor; histogram güçlenene kadar dikkatli olunmalı.</p>
              </div>
            </div>
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head"><div className="aefes-icon green">💡</div><h3>RSI (14)</h3></div>
              <div className="aefes-analysis-card-body">
                <div className="aefes-ind-row"><span className="aefes-ind-name">RSI Değeri</span><span className="aefes-ind-val">57.41</span><span className="aefes-ind-signal neutral">NÖTR</span></div>
                <div className="aefes-ind-row" style={{borderBottom:"none"}}><span className="aefes-ind-name">Bölge</span><span className="aefes-ind-val">Nötr-Yüksek</span><span className="aefes-ind-signal buy">Alan Var</span></div>
                <div><div className="aefes-progress-label"><span>30 (A.Satım)</span><span>57.41</span><span>70 (A.Alım)</span></div><div className="aefes-progress-bar"><div className="aefes-progress-fill" style={{width:"57.41%",background:"linear-gradient(90deg,var(--green),var(--accent))"}}/></div></div>
                <p style={{fontSize:".8rem",color:"var(--text-dim)"}}>60–65 üstü geçiş momentum güçlenmesinin göstergesi.</p>
              </div>
            </div>
            <div className="aefes-analysis-card">
              <div className="aefes-analysis-card-head"><div className="aefes-icon red">🔖</div><h3>Hareketli Ortalamalar</h3></div>
              <div className="aefes-analysis-card-body" style={{paddingTop:".6rem",paddingBottom:".6rem"}}>
                <table className="aefes-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {[["MAV 5","20.18"],["MAV 13","19.90"],["MAV 21","19.71"],["MAV 55","19.06"],["MAV 89","18.58"],["MAV 144","18.00"],["MAV 233","17.51"]].map(([p,v])=>(
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="aefes-above">Fiyat Üstünde ▲</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK/DİRENÇ */}
          <div className="aefes-section-title"><span className="aefes-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="aefes-sr-grid">
            {([
              ["res","Güçlü Direnç","22.00–22.50","Kasım 2025 zirve bölgesi / Çift tepe riski"],
              ["res","Ara Direnç","21.00–21.50","Bollinger üst band + psikolojik seviye"],
              ["sup","Anlık Destek","20.00 TL","Psikolojik destek + BOL Orta Band yakını"],
              ["sup","Güçlü Destek","18.50–19.00","MAV 55/89 bölgesi + BOL Alt Band"],
              ["sup","Ana Destek","17.00–17.50","MAV 144/233 — uzun vadeli ana destek"],
              ["sup","Tarihsel Dip","13.64 TL","Temmuz 2025 — grafik tabanı"],
            ] as [string,string,string,string][]).map(([t,l,p,d])=>(
              <div className="aefes-sr-cell" key={l}>
                <div className={`aefes-sr-type ${t}`}>{l}</div>
                <div className="aefes-sr-price">{p}</div>
                <div className="aefes-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="aefes-section-title"><span className="aefes-section-num">05</span> Genel Değerlendirme</div>
          <div className="aefes-narrative">
            <h3>Kısa Vadeli Görünüm: Nötr-Pozitif</h3>
            <p>AEFES, Şubat 2026 diplerinden (~17 TL) bu yana güçlü bir toparlanma sergileyerek <strong>tüm hareketli ortalamaların üzerine</strong> çıkmayı başardı. Güncel kapanış olan <strong>20.36 TL</strong>, kısa ve orta vadeli ortalamaların tamamının üzerindedir.</p>
            <p>Bollinger Bantları açısından fiyat <strong>orta band (19.92) ile üst band (21.13) arasında</strong> — boğa bölgesi. Üst banda yaklaşıldıkça satış baskısı artabilir.</p>
            <p>Stochastic ve RSI nötr-yüksek bölgede, <em>aşırı alım uyarısı yok</em>. MACD pozitif ancak histogram zayıf; <em>momentum güçlenmesi bekleniyor</em>.</p>
            <p>En kritik risk: <strong>Kasım 2024 ve Kasım 2025</strong> zirvelerinin oluşturduğu çift tepe formasyonu. 22–22.50 TL kırılamaması durumunda orta vadeli baskı geri dönebilir.</p>
          </div>

          {/* SENARYO */}
          <div className="aefes-section-title"><span className="aefes-section-num">06</span> Senaryo Analizi</div>
          <div className="aefes-scenario-grid">
            <div className="aefes-scenario-card bull">
              <div className="aefes-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>21.13 TL (BOL Üst Band) üstünde güçlü kapanış</li>
                <li>21.50 TL direncinin hacimle kırılması</li>
                <li>MACD histogramının pozitif ivme kazanması</li>
                <li>RSI 65 üstüne taşınması</li>
                <li>Hedef: 22.00–22.50 TL bölgesi</li>
              </ul>
            </div>
            <div className="aefes-scenario-card bear">
              <div className="aefes-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>20.00 TL psikolojik desteğinin kırılması</li>
                <li>BOL Orta Band (19.92) altında kapanış</li>
                <li>Stochastic&apos;te ölüm kesişimi</li>
                <li>Hacim artışıyla 19.00 TL altına gerileme</li>
                <li>Hedef: 18.50–19.00 TL destek testi</li>
              </ul>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="aefes-disclaimer">
            <div className="aefes-disclaimer-head">
              <div className="aefes-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{color:"var(--warn)"}}>bilgilendirme ve eğitim amaçlıdır</strong>. Hiçbir içerik; SPK mevzuatı kapsamında <strong style={{color:"var(--warn)"}}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir.</p>
            <p>Teknik analiz değerlendirmeleri öznel niteliktedir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>

        </main>

        {/* FOOTER */}
        <div className="aefes-footer-wrap">
          <div className="aefes-footer">
            <div className="aefes-footer-inner">
              <div className="aefes-footer-brand">HOCA İLE BORSA</div>
              <div className="aefes-footer-meta">AEFES Teknik Analiz Raporu<br />05.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform</div>
            </div>
            <div className="aefes-footer-legal">
              Bu içerikler yalnızca bilgilendirme amacına yöneliktir; yatırım tavsiyesi değildir. SPK lisanslı danışmanlık hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   DİĞER HİSSELER SAYFASI (slug tabanlı)
───────────────────────────────────────────────────────────── */
function SlugPage({ veri, slug }: { veri: { kod: string; yorum: string }; slug: string }) {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/borsa/grafik-analiz" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>
        <h1 className="mb-6 text-3xl font-bold text-zinc-900">{veri.kod} Grafik Analiz</h1>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="mb-4 flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-lg font-semibold text-zinc-500">
            Buraya grafik görseli eklenecek
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 text-base leading-7 text-zinc-700">
            {veri.yorum}
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
   ANA EXPORT — slug'a göre doğru sayfayı döndür
───────────────────────────────────────────────────────────── */
export default async function GrafikAnalizDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // AEFES → özel tam sayfa
  if (slug === "aefes") return <AefesPage />;

  // Diğer hisseler → slug tabanlı sayfa
  const veri = yorumlar[slug];
  if (veri) return <SlugPage veri={veri} slug={slug} />;

  // Bulunamadı
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/borsa/grafik-analiz" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-700">
          İçerik bulunamadı.
        </div>
      </div>
    </main>
  );
}
