import Head from "next/head";
import Link from "next/link";

export default function IsmenGrafikAnaliz() {
  return (
    <>
      <Head>
        <title>ISMEN Teknik Analiz — 10.06.2026 | Hoca İle Borsa</title>
        <meta
          name="description"
          content="İş Yatırım Menkul Değerler (ISMEN) hissesi günlük teknik analiz raporu. Bollinger Bantları, MACD, RSI, Stochastic ve hareketli ortalamalar ile detaylı değerlendirme."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hocaileborsa.com/borsa/grafik-analiz/ismen" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .ismen-wrap *, .ismen-wrap *::before, .ismen-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ismen-wrap {
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

        .ismen-hero {
          padding: 3.5rem 2rem 2rem; max-width: 1280px; margin: 0 auto;
          border-bottom: 1px solid var(--border);
        }
        .ismen-hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; letter-spacing: .18em;
          text-transform: uppercase; color: var(--accent); margin-bottom: .6rem;
        }
        .ismen-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: .95; color: var(--text-bright); letter-spacing: .04em;
        }
        .ismen-hero-title em { color: var(--accent); font-style: normal; }
        .ismen-hero-sub {
          margin-top: .9rem; color: var(--text-dim);
          font-size: .88rem; font-weight: 300; max-width: 520px;
        }
        .ismen-price-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: var(--text-bright); letter-spacing: .04em; line-height: 1;
        }
        .ismen-price-currency { font-size: .55em; color: var(--text-dim); vertical-align: super; }

        .ismen-main { max-width: 1280px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }

        .ismen-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem; letter-spacing: .08em; color: var(--text-bright);
          margin-bottom: 1.2rem; display: flex; align-items: center; gap: .8rem;
        }
        .ismen-section-title::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--border), transparent);
        }
        .ismen-section-num {
          font-size: .75rem; color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          background: rgba(0,229,160,.07); border: 1px solid rgba(0,229,160,.2);
          padding: .1rem .5rem; border-radius: 3px;
        }

        .ismen-chart-wrap {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; margin-bottom: 2.5rem; background: var(--bg2);
        }
        .ismen-chart-header {
          padding: .9rem 1.4rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: .8rem;
        }
        .ismen-chart-title-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.05rem; letter-spacing: .1em; color: var(--text-bright);
        }
        .ismen-pills { display: flex; flex-wrap: wrap; gap: .4rem; }
        .ismen-pill {
          font-family: 'JetBrains Mono', monospace; font-size: .66rem;
          padding: .15rem .55rem; border-radius: 20px; border: 1px solid;
        }
        .ismen-pill.green  { color:#00d068; border-color:rgba(0,208,104,.35); background:rgba(0,208,104,.07); }
        .ismen-pill.yellow { color:#f5c842; border-color:rgba(245,200,66,.35); background:rgba(245,200,66,.07); }
        .ismen-pill.red    { color:#ff6b80; border-color:rgba(255,107,128,.35); background:rgba(255,107,128,.07); }
        .ismen-pill.purple { color:#b57bff; border-color:rgba(181,123,255,.35); background:rgba(181,123,255,.07); }
        .ismen-pill.blue   { color:#0abbff; border-color:rgba(10,187,255,.35);  background:rgba(10,187,255,.07); }
        .ismen-chart-img-wrap { position: relative; padding: 1rem; }
        .ismen-chart-img-wrap img { width: 100%; border-radius: 6px; display: block; }
        .ismen-chart-watermark {
          position: absolute; bottom: 1.8rem; right: 2rem;
          font-family: 'Bebas Neue', sans-serif; font-size: .9rem;
          letter-spacing: .15em; color: rgba(0,229,160,.15);
          pointer-events: none; user-select: none;
        }

        .ismen-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }

        .ismen-analysis-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
        .ismen-analysis-card-head {
          padding: .85rem 1.3rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: .6rem;
        }
        .ismen-icon { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: .9rem; }
        .ismen-icon.blue  { background: rgba(10,187,255,.12); }
        .ismen-icon.gold  { background: rgba(245,200,66,.12); }
        .ismen-icon.green { background: rgba(0,208,104,.12); }
        .ismen-icon.red   { background: rgba(255,77,106,.12); }
        .ismen-analysis-card-head h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1rem; letter-spacing: .08em; color: var(--text-bright); }
        .ismen-analysis-card-body { padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem; }

        .ismen-ind-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: .55rem 0; border-bottom: 1px solid rgba(30,44,58,.6);
        }
        .ismen-ind-row:last-child { border-bottom: none; }
        .ismen-ind-name { font-family: 'JetBrains Mono', monospace; font-size: .8rem; color: var(--text-dim); }
        .ismen-ind-val  { font-family: 'JetBrains Mono', monospace; font-size: .88rem; color: var(--text-bright); font-weight: 600; }
        .ismen-ind-signal {
          font-size: .68rem; text-transform: uppercase; letter-spacing: .1em;
          padding: .12rem .5rem; border-radius: 3px; font-family: 'JetBrains Mono', monospace;
        }
        .ismen-ind-signal.buy     { background: rgba(0,208,104,.12); color: var(--green); border: 1px solid rgba(0,208,104,.3); }
        .ismen-ind-signal.sell    { background: rgba(255,61,85,.12);  color: var(--red);   border: 1px solid rgba(255,61,85,.3); }
        .ismen-ind-signal.neutral { background: rgba(255,185,48,.1);  color: var(--warn);  border: 1px solid rgba(255,185,48,.3); }

        .ismen-progress-label {
          display: flex; justify-content: space-between; font-size: .72rem;
          color: var(--text-dim); margin-bottom: .35rem; font-family: 'JetBrains Mono', monospace;
        }
        .ismen-progress-bar { height: 5px; background: var(--bg3); border-radius: 3px; overflow: hidden; border: 1px solid var(--border); }
        .ismen-progress-fill { height: 100%; border-radius: 3px; }

        .ismen-ma-table { width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: .8rem; }
        .ismen-ma-table th { text-align: left; color: var(--text-dim); font-size: .68rem; text-transform: uppercase; letter-spacing: .12em; padding: .5rem .6rem; border-bottom: 1px solid var(--border); }
        .ismen-ma-table td { padding: .55rem .6rem; color: var(--text); border-bottom: 1px solid rgba(30,44,58,.5); }
        .ismen-ma-table tr:last-child td { border-bottom: none; }
        .ismen-ma-table tr:hover td { background: rgba(255,255,255,.02); }
        .ismen-above { color: var(--green); }
        .ismen-below { color: var(--red); }

        .ismen-bol-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 10px; padding: 1.4rem; margin-bottom: 2.5rem; }
        .ismen-bol-visual { display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0; padding: 1rem; background: var(--bg3); border-radius: 8px; border: 1px solid var(--border); }
        .ismen-bol-bands { flex: 1; position: relative; height: 48px; }
        .ismen-bol-upper { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ismen-bol-mid   { position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: rgba(245,200,66,.5); transform: translateY(-50%); }
        .ismen-bol-lower { position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(181,123,255,.6); }
        .ismen-bol-fill  { position: absolute; inset: 0; background: linear-gradient(180deg,rgba(181,123,255,.06) 0%,rgba(181,123,255,.02) 50%,rgba(181,123,255,.06) 100%); }
        .ismen-bol-marker {
          position: absolute; left: 0; right: 0; height: 2px;
          background: var(--red); box-shadow: 0 0 6px var(--red);
          /* 35.74 fiyat, üst 42.84, alt 34.91 → (42.84-35.74)/(42.84-34.91) = 0.895 */
          top: calc(100% * (42.84 - 35.74) / (42.84 - 34.91));
        }
        .ismen-bol-labels { font-family: 'JetBrains Mono', monospace; font-size: .7rem; display: flex; flex-direction: column; justify-content: space-between; height: 48px; color: var(--text-dim); }

        .ismen-sr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border-radius: 8px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 2.5rem; }
        .ismen-sr-cell { background: var(--bg2); padding: .9rem 1.1rem; }
        .ismen-sr-cell:hover { background: var(--bg3); }
        .ismen-sr-type { font-size: .65rem; text-transform: uppercase; letter-spacing: .14em; font-family: 'JetBrains Mono', monospace; margin-bottom: .3rem; }
        .ismen-sr-type.res { color: var(--red); }
        .ismen-sr-type.sup { color: var(--green); }
        .ismen-sr-price { font-family: 'JetBrains Mono', monospace; font-size: 1.15rem; font-weight: 600; color: var(--text-bright); }
        .ismen-sr-desc { font-size: .72rem; color: var(--text-dim); margin-top: .2rem; }

        .ismen-narrative {
          background: var(--bg2); border: 1px solid var(--border);
          border-left: 3px solid var(--red);
          border-radius: 0 10px 10px 0; padding: 1.6rem 1.8rem; margin-bottom: 2.5rem;
        }
        .ismen-narrative h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: .07em; color: var(--text-bright); margin-bottom: .8rem; }
        .ismen-narrative p { color: var(--text); line-height: 1.75; margin-bottom: .6rem; font-size: .92rem; }
        .ismen-narrative p:last-child { margin-bottom: 0; }
        .ismen-narrative strong { color: var(--accent); font-weight: 600; }
        .ismen-narrative em { color: var(--warn); font-style: normal; font-weight: 500; }

        .ismen-scenario-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .ismen-scenario-card { border-radius: 10px; padding: 1.3rem; border: 1px solid; }
        .ismen-scenario-card.bull { background: rgba(0,208,104,.05); border-color: rgba(0,208,104,.2); }
        .ismen-scenario-card.bear { background: rgba(255,61,85,.05);  border-color: rgba(255,61,85,.2); }
        .ismen-scenario-head { font-family: 'Bebas Neue', sans-serif; font-size: 1rem; letter-spacing: .09em; margin-bottom: .7rem; display: flex; align-items: center; gap: .5rem; }
        .ismen-scenario-card.bull .ismen-scenario-head { color: var(--green); }
        .ismen-scenario-card.bear .ismen-scenario-head { color: var(--red); }
        .ismen-scenario-card ul { list-style: none; display: flex; flex-direction: column; gap: .45rem; }
        .ismen-scenario-card li { font-size: .83rem; color: var(--text); display: flex; align-items: flex-start; gap: .5rem; }
        .ismen-scenario-card li::before { content: '›'; font-family: 'JetBrains Mono', monospace; margin-top: .05rem; }
        .ismen-scenario-card.bull li::before { color: var(--green); }
        .ismen-scenario-card.bear li::before { color: var(--red); }

        .ismen-disclaimer { border: 1px solid rgba(255,185,48,.18); background: rgba(255,185,48,.04); border-radius: 10px; padding: 1.4rem 1.6rem; margin-bottom: 2rem; }
        .ismen-disclaimer-head { display: flex; align-items: center; gap: .6rem; margin-bottom: .7rem; }
        .ismen-disclaimer-icon { width: 22px; height: 22px; border-radius: 50%; background: rgba(255,185,48,.15); border: 1px solid rgba(255,185,48,.35); display: flex; align-items: center; justify-content: center; font-size: .7rem; }
        .ismen-disclaimer-head h4 { font-family: 'Bebas Neue', sans-serif; font-size: .95rem; letter-spacing: .1em; color: var(--warn); }
        .ismen-disclaimer p { font-size: .78rem; color: var(--text-dim); line-height: 1.7; }
        .ismen-disclaimer p+p { margin-top: .4rem; }

        .ismen-footer { max-width: 1280px; margin: 0 auto; padding: 1.8rem 2rem; }
        .ismen-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .ismen-footer-brand { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: .1em; color: var(--accent); }
        .ismen-footer-meta { font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: var(--text-dim); text-align: right; }
        .ismen-footer-legal { margin-top: 1rem; font-size: .72rem; color: var(--text-dim); line-height: 1.6; border-top: 1px solid var(--border); padding-top: 1rem; }

        @media(max-width:768px){ .ismen-two-col{ grid-template-columns: 1fr; } }
        @media(max-width:600px){
          .ismen-hero{ padding: 2rem 1rem 1.5rem; }
          .ismen-main{ padding: 1.5rem 1rem 3rem; }
          .ismen-footer{ padding: 1.2rem 1rem; }
          .ismen-scenario-grid{ grid-template-columns: 1fr; }
          .ismen-sr-grid{ grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ismen-wrap">

        {/* HERO */}
        <section className="ismen-hero">
          <div className="ismen-hero-label">Teknik Analiz Raporu</div>
          <h1 className="ismen-hero-title">İŞ YATIRIM<br /><em>ISMEN</em></h1>
          <p className="ismen-hero-sub">
            BIST: ISMEN &nbsp;·&nbsp; Günlük Periyot &nbsp;·&nbsp; Bollinger Bantları + Çoklu MA
          </p>
          <div className="ismen-price-main" style={{ marginTop: "1.2rem" }}>
            <span className="ismen-price-currency">₺</span>35.74
          </div>
        </section>

        <main className="ismen-main">

          {/* CHART */}
          <div className="ismen-section-title"><span className="ismen-section-num">01</span> Grafik</div>
          <div className="ismen-chart-wrap">
            <div className="ismen-chart-header">
              <span className="ismen-chart-title-text">ISMEN — Günlük Mum Grafiği</span>
              <div className="ismen-pills">
                {(["green","yellow","red","purple","blue"] as const).map((c,i) => (
                  <span key={i} className={`ismen-pill ${c}`}>
                    {["MAV 5/13/21","MAV 55/89","MAV 144/233","Bollinger (20,2)","Stoch · MACD · RSI"][i]}
                  </span>
                ))}
              </div>
            </div>
            <div className="ismen-chart-img-wrap">
              <img src="/ismen-analiz.webp" alt="ISMEN Teknik Analiz Grafiği — Bollinger Bantları, Hareketli Ortalamalar, Stochastic, MACD, RSI — 10.06.2026" loading="lazy" />
              <div className="ismen-chart-watermark">HOCA İLE BORSA</div>
            </div>
          </div>

          {/* BOLLINGER */}
          <div className="ismen-section-title"><span className="ismen-section-num">02</span> Bollinger Bantları Analizi</div>
          <div className="ismen-bol-card">
            <div className="ismen-bol-visual">
              <div className="ismen-bol-bands">
                <div className="ismen-bol-fill" /><div className="ismen-bol-upper" />
                <div className="ismen-bol-mid" /><div className="ismen-bol-lower" />
                <div className="ismen-bol-marker" />
              </div>
              <div className="ismen-bol-labels">
                <span>BOL U: 42.84</span>
                <span style={{ color: "var(--gold)" }}>BOL M: 38.88</span>
                <span>BOL D: 34.91</span>
              </div>
            </div>
            {([
              ["Üst Band (BOL U)",   "42.84 TL", "Güçlü Direnç",  "sell"],
              ["Orta Band / MAV 20", "38.88 TL", "Direnç",        "sell"],
              ["Alt Band (BOL D)",   "34.91 TL", "Kritik Destek", "neutral"],
              ["Bant Genişliği",     "7.93 TL",  "Yüksek Volatilite","neutral"],
              ["Fiyatın Konumu",     "35.74 TL", "Alt Banda Yakın","sell"],
            ] as [string,string,string,string][]).map(([n,v,s,c],i) => (
              <div className="ismen-ind-row" key={n} style={i===4?{borderBottom:"none"}:{}}>
                <span className="ismen-ind-name">{n}</span>
                <span className="ismen-ind-val">{v}</span>
                <span className={`ismen-ind-signal ${c}`}>{s}</span>
              </div>
            ))}
            <p style={{ marginTop: "1rem", fontSize: ".85rem", color: "var(--text)", lineHeight: 1.7 }}>
              Fiyat Bollinger alt bandına (34.91) son derece yakın konumda. Bu durum <strong style={{ color: "var(--red)" }}>aşırı satış bölgesi</strong>ne yaklaşıldığını gösteriyor. Alt bandın kırılması durumunda sert kayıplar gündeme gelebilir; tutunma halinde ise teknik tepki ihtimali doğabilir.
            </p>
          </div>

          {/* INDICATORS */}
          <div className="ismen-section-title"><span className="ismen-section-num">03</span> İndikatörler</div>
          <div className="ismen-two-col">

            <div className="ismen-analysis-card">
              <div className="ismen-analysis-card-head">
                <div className="ismen-icon blue">📊</div>
                <h3>Stochastic (14,14,3,3)</h3>
              </div>
              <div className="ismen-analysis-card-body">
                <div className="ismen-ind-row"><span className="ismen-ind-name">StocK</span><span className="ismen-ind-val">14.33</span><span className="ismen-ind-signal buy">A.Satım</span></div>
                <div className="ismen-ind-row"><span className="ismen-ind-name">StocD</span><span className="ismen-ind-val">−25.54</span><span className="ismen-ind-signal sell">Negatif</span></div>
                <div className="ismen-ind-row" style={{ borderBottom: "none" }}><span className="ismen-ind-name">Konum</span><span className="ismen-ind-val">Derin Satım</span><span className="ismen-ind-signal neutral">İzle</span></div>
                <div>
                  <div className="ismen-progress-label"><span>Aşırı Satım</span><span>K: 14.33</span><span>Aşırı Alım</span></div>
                  <div className="ismen-progress-bar"><div className="ismen-progress-fill" style={{ width: "14.33%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>StocK 20 altında — aşırı satım bölgesinde. Bu seviyeler kısa vadeli teknik tepki için zemin oluşturabilir; ancak trendin güçlü olduğu dönemlerde bu sinyal yanıltıcı olabilir.</p>
              </div>
            </div>

            <div className="ismen-analysis-card">
              <div className="ismen-analysis-card-head">
                <div className="ismen-icon gold">📈</div>
                <h3>MACD (26,12) / Trigger (9)</h3>
              </div>
              <div className="ismen-analysis-card-body">
                <div className="ismen-ind-row"><span className="ismen-ind-name">MACD</span><span className="ismen-ind-val">−1.4335</span><span className="ismen-ind-signal sell">NEGATİF</span></div>
                <div className="ismen-ind-row"><span className="ismen-ind-name">Trigger</span><span className="ismen-ind-val">−1.2346</span><span className="ismen-ind-signal sell">SAT</span></div>
                <div className="ismen-ind-row" style={{ borderBottom: "none" }}><span className="ismen-ind-name">Histogram</span><span className="ismen-ind-val">−0.1989</span><span className="ismen-ind-signal sell">Derin</span></div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>MACD derin negatif bölgede ve genişliyor. Histogram negatif yönde büyüyor — düşüş momentumu güçlenmeye devam ediyor. Pozitife dönüş için uzun vadeli toparlanma gerekiyor.</p>
              </div>
            </div>

            <div className="ismen-analysis-card">
              <div className="ismen-analysis-card-head">
                <div className="ismen-icon green">💡</div>
                <h3>RSI (14)</h3>
              </div>
              <div className="ismen-analysis-card-body">
                <div className="ismen-ind-row"><span className="ismen-ind-name">RSI Değeri</span><span className="ismen-ind-val">30.04</span><span className="ismen-ind-signal neutral">Eşikte</span></div>
                <div className="ismen-ind-row" style={{ borderBottom: "none" }}><span className="ismen-ind-name">Bölge</span><span className="ismen-ind-val">A.Satım Eşiği</span><span className="ismen-ind-signal buy">Tepki Olası</span></div>
                <div>
                  <div className="ismen-progress-label"><span>30 (A.Satım)</span><span>30.04</span><span>70 (A.Alım)</span></div>
                  <div className="ismen-progress-bar"><div className="ismen-progress-fill" style={{ width: "30.04%", background: "linear-gradient(90deg,var(--red),var(--warn))" }} /></div>
                </div>
                <p style={{ fontSize: ".8rem", color: "var(--text-dim)" }}>RSI tam olarak 30 aşırı satım eşiğinde. Tarihsel olarak bu seviyeden kısa vadeli teknik tepkiler gerçekleşebilir; ancak trendin gücü göz önünde bulundurulmalı.</p>
              </div>
            </div>

            <div className="ismen-analysis-card">
              <div className="ismen-analysis-card-head">
                <div className="ismen-icon red">🔖</div>
                <h3>Hareketli Ortalamalar</h3>
              </div>
              <div className="ismen-analysis-card-body" style={{ paddingTop: ".6rem", paddingBottom: ".6rem" }}>
                <table className="ismen-ma-table">
                  <thead><tr><th>Periyot</th><th>Değer</th><th>Durum</th></tr></thead>
                  <tbody>
                    {([
                      ["MAV 5",  "36.69", "Fiyat Altında ▼"],
                      ["MAV 13", "37.80", "Fiyat Altında ▼"],
                      ["MAV 21", "38.68", "Fiyat Altında ▼"],
                      ["MAV 55", "40.42", "Fiyat Altında ▼"],
                      ["MAV 89", "40.79", "Fiyat Altında ▼"],
                      ["MAV 144","40.57", "Fiyat Altında ▼"],
                      ["MAV 233","39.63", "Fiyat Altında ▼"],
                    ] as [string,string,string][]).map(([p,v,d]) => (
                      <tr key={p}><td>{p}</td><td>{v}</td><td className="ismen-below">{d}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* DESTEK / DİRENÇ */}
          <div className="ismen-section-title"><span className="ismen-section-num">04</span> Destek &amp; Direnç Seviyeleri</div>
          <div className="ismen-sr-grid">
            {([
              ["res", "Güçlü Direnç",  "42.84 TL",   "Bollinger üst bandı"],
              ["res", "Kritik Direnç", "38.88 TL",   "Bollinger orta bandı / MAV 20"],
              ["res", "İlk Direnç",    "36.69–37.80","MAV 5/13 bölgesi — kısa vadeli tavan"],
              ["sup", "Anlık Destek",  "35.55–35.74","Grafik dip bölgesi / güncel kapanış"],
              ["sup", "Kritik Destek", "34.91 TL",   "Bollinger alt bandı — kırılırsa kritik"],
              ["sup", "Tarihsel Dip",  "~35.55 TL",  "Grafik tabanı — test ediliyor"],
            ] as [string,string,string,string][]).map(([t,l,p,d]) => (
              <div className="ismen-sr-cell" key={l}>
                <div className={`ismen-sr-type ${t}`}>{l}</div>
                <div className="ismen-sr-price">{p}</div>
                <div className="ismen-sr-desc">{d}</div>
              </div>
            ))}
          </div>

          {/* NARRATIVE */}
          <div className="ismen-section-title"><span className="ismen-section-num">05</span> Genel Değerlendirme</div>
          <div className="ismen-narrative">
            <h3>Kısa Vadeli Görünüm: Negatif — Aşırı Satım Eşiğinde</h3>
            <p>ISMEN, <strong>35.74 TL</strong> kapanışıyla MAV 5&apos;ten MAV 233&apos;e tüm hareketli ortalamaların belirgin şekilde altında bulunuyor. 36.69–40.57 TL bandındaki ortalamaların hepsi direnç konumunda; bu durum kısa, orta ve uzun vadede teknik görünümün baskılı olmaya devam ettiğine işaret ediyor.</p>
            <p>Bollinger Bantları açısından fiyat <strong>alt banda (34.91) son derece yakın</strong>. Bant genişliği 7.93 TL ile yüksek volatiliteye işaret ediyor. Alt bandın kırılması durumunda teknik tablo daha da bozulabilir.</p>
            <p>RSI <em>30.04 ile tam aşırı satım eşiğinde</em>, Stochastic K 14.33 ile derin satım bölgesinde. Bu iki indikatör teknik tepki için zemin oluşturuyor olsa da <em>MACD −1.4335 ile derin negatif bölgede</em> ve genişliyor — momentum hâlâ aşağı yönlü.</p>
            <p>Kritik soru şu: <strong>34.91 TL Bollinger alt bandı tutulabilecek mi?</strong> Tutunma halinde RSI ve Stochastic&apos;in aşırı satım bölgesinden çıkışıyla birlikte teknik bir tepki rallisi gelebilir. Kırılma halinde ise yeni dip arayışı hızlanabilir.</p>
          </div>

          {/* SENARYO */}
          <div className="ismen-section-title"><span className="ismen-section-num">06</span> Senaryo Analizi</div>
          <div className="ismen-scenario-grid">
            <div className="ismen-scenario-card bull">
              <div className="ismen-scenario-head">🟢 Boğa Senaryosu</div>
              <ul>
                <li>34.91 TL Bollinger alt bandında tutunma</li>
                <li>RSI&apos;ın 30 üstünde kalması ve yukarı dönmesi</li>
                <li>Stochastic K&apos;nın 20 üstüne çıkması</li>
                <li>36.69 TL MAV 5 üzerinde kapanış</li>
                <li>Hedef: 38.88 TL Bollinger orta bandı</li>
              </ul>
            </div>
            <div className="ismen-scenario-card bear">
              <div className="ismen-scenario-head">🔴 Ayı Senaryosu</div>
              <ul>
                <li>34.91 TL Bollinger alt bandının kırılması</li>
                <li>RSI&apos;ın 30 altına inmesi — aşırı satım derinleşmesi</li>
                <li>MACD&apos;nin negatif bölgede genişlemeye devam etmesi</li>
                <li>Yüksek hacimle yeni dip arayışı</li>
                <li>Hedef: 34.00 TL altı — belirsiz alan</li>
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
          <div className="ismen-disclaimer">
            <div className="ismen-disclaimer-head">
              <div className="ismen-disclaimer-icon">⚠</div>
              <h4>Önemli Yasal Uyarı — Yatırım Tavsiyesi Değildir</h4>
            </div>
            <p>Bu sayfa yalnızca <strong style={{ color: "var(--warn)" }}>bilgilendirme ve eğitim amaçlıdır</strong>. Burada yer alan hiçbir içerik, yorum, analiz veya grafik; 6362 Sayılı Sermaye Piyasası Kanunu ve SPK mevzuatı kapsamında <strong style={{ color: "var(--warn)" }}>yatırım danışmanlığı, alım-satım tavsiyesi veya portföy yönetimi hizmeti niteliği taşımamaktadır.</strong></p>
            <p>Yatırım kararları tamamen yatırımcının kendi sorumluluğundadır. Geçmiş performans gelecekteki getirilerin güvencesi değildir. Yatırım kararı vermeden önce lisanslı bir yatırım danışmanına başvurmanız tavsiye edilir.</p>
            <p>Teknik analizde kullanılan indikatör değerleri ve grafik yorumları öznel değerlendirmelerdir; kesin doğruluk garantisi verilmez. Piyasa koşulları hızla değişebilir.</p>
          </div>

        </main>

        <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="ismen-footer">
            <div className="ismen-footer-inner">
              <div className="ismen-footer-brand">HOCA İLE BORSA</div>
              <div className="ismen-footer-meta">
                ISMEN Teknik Analiz Raporu<br />
                Hazırlanma: 10.06.2026 &nbsp;·&nbsp; Veri: BIST / IQ Platform
              </div>
            </div>
            <div className="ismen-footer-legal">
              Bu web sitesinde sunulan içerikler yalnızca genel bilgilendirme amacına yöneliktir ve hiçbir şekilde yatırım tavsiyesi, portföy yönetimi önerisi veya finansal hizmet olarak değerlendirilemez. Yayınlanan analizler SPK tarafından lisanslanmış yatırım danışmanlığı hizmeti kapsamında değildir. Tüm hakları saklıdır © 2026 Hoca ile Borsa.
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
