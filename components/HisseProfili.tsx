import Link from "next/link";

import { getHisse } from "@/lib/hisseler";

/**
 * Grafik analiz sayfalarına eklenen "Şirket Profili & Temel Görünüm" bölümü.
 * data/hisseler/<kod>.json künye verisinden beslenir; veri yoksa hiçbir şey
 * render etmez. Sayfaların ortak `.aefes-*` stil sınıflarını kullanır.
 */
export default function HisseProfili({
  kod,
  bolumNo = "07",
}: {
  kod: string;
  bolumNo?: string;
}) {
  const hisse = getHisse(kod);
  if (!hisse) return null;

  const kb = hisse.kurumsalBilgiler;
  const ortaklar = hisse.ortaklikYapisi?.ortaklar ?? [];
  const endeksler = hisse.borsaBilgileri?.endeksler ?? [];
  const istirakSayisi = hisse.istirakler?.length ?? 0;
  const sermayeOlaylari = (hisse.temettuSermayeGecmisi ?? []).slice(0, 5);
  const kunyeHref = `/hisse/${kod.toLowerCase()}`;

  return (
    <>
      <div className="aefes-section-title">
        <span className="aefes-section-num">{bolumNo}</span> Şirket Profili &amp; Temel Görünüm
      </div>

      <div className="aefes-narrative" style={{ borderLeftColor: "var(--gold)" }}>
        <h3>{hisse.sirketAdi} Hakkında</h3>
        {hisse.hakkinda?.slice(0, 2).map((paragraf, i) => (
          <p key={i}>{paragraf}</p>
        ))}
        <p style={{ marginTop: ".4rem", fontSize: ".82rem", color: "var(--text-dim)" }}>
          Aşağıdaki kurumsal veriler, {hisse.kod} hissesinin teknik görünümünü
          değerlendirirken şirketin temel yapısına dair bağlam sunar. Şirketin tüm
          künye detayları, ortaklık yapısı ve sermaye hareketleri için{" "}
          <Link href={kunyeHref} prefetch={false} style={{ color: "var(--accent)", textDecoration: "underline" }}>
            {hisse.kod} hisse künyesi
          </Link>{" "}
          sayfasını inceleyebilirsiniz.
        </p>
      </div>

      <div className="aefes-two-col">
        {/* KURUMSAL */}
        <div className="aefes-analysis-card">
          <div className="aefes-analysis-card-head">
            <div className="aefes-icon blue">🏛️</div>
            <h3>Kurumsal Bilgiler</h3>
          </div>
          <div className="aefes-analysis-card-body">
            {kb?.sektorler?.length ? (
              <div className="aefes-ind-row"><span className="aefes-ind-name">Sektör</span><span className="aefes-ind-val" style={{ textAlign: "right" }}>{kb.sektorler.join(" · ")}</span></div>
            ) : null}
            {kb?.odenmisSermaye ? (
              <div className="aefes-ind-row"><span className="aefes-ind-name">Ödenmiş Sermaye</span><span className="aefes-ind-val">{kb.odenmisSermaye}</span></div>
            ) : null}
            {kb?.merkez ? (
              <div className="aefes-ind-row"><span className="aefes-ind-name">Merkez</span><span className="aefes-ind-val" style={{ textAlign: "right", fontSize: ".78rem" }}>{kb.merkez}</span></div>
            ) : null}
            {kb?.bagimsizDenetimKurulusu ? (
              <div className="aefes-ind-row" style={{ borderBottom: "none" }}><span className="aefes-ind-name">Bağımsız Denetim</span><span className="aefes-ind-val" style={{ textAlign: "right", fontSize: ".74rem" }}>{kb.bagimsizDenetimKurulusu}</span></div>
            ) : null}
          </div>
        </div>

        {/* ORTAKLIK & ENDEKS */}
        <div className="aefes-analysis-card">
          <div className="aefes-analysis-card-head">
            <div className="aefes-icon gold">📋</div>
            <h3>Ortaklık &amp; Endeksler</h3>
          </div>
          <div className="aefes-analysis-card-body">
            {ortaklar.map((o, i) => (
              <div className="aefes-ind-row" key={i}>
                <span className="aefes-ind-name" style={{ fontSize: ".72rem" }}>{o.ad}</span>
                <span className="aefes-ind-val">%{o.oran}</span>
              </div>
            ))}
            {istirakSayisi > 0 ? (
              <div className="aefes-ind-row"><span className="aefes-ind-name">İştirak Sayısı</span><span className="aefes-ind-val">{istirakSayisi} şirket</span></div>
            ) : null}
            {endeksler.length ? (
              <div style={{ borderTop: "1px solid rgba(30,44,58,.6)", paddingTop: ".7rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: ".68rem", color: "var(--text-dim)", marginBottom: ".4rem", textTransform: "uppercase", letterSpacing: ".1em" }}>Dahil Olduğu Endeksler</div>
                <div className="aefes-pills">
                  {endeksler.slice(0, 8).map((e, i) => (
                    <span key={i} className="aefes-pill blue">{e}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {sermayeOlaylari.length ? (
        <div className="aefes-bol-card">
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: ".07em", color: "var(--text-bright)", marginBottom: ".9rem" }}>
            Son Temettü &amp; Sermaye Hareketleri
          </h3>
          <table className="aefes-ma-table">
            <thead><tr><th>Tarih</th><th>Tür</th><th>Oran / Tutar</th></tr></thead>
            <tbody>
              {sermayeOlaylari.map((olay, i) => (
                <tr key={i}><td>{olay.yil}</td><td>{olay.tur}</td><td>{olay.tutarOran}</td></tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: ".8rem", fontSize: ".8rem", color: "var(--text-dim)", lineHeight: 1.7 }}>
            Bedelsiz sermaye artırımları ve hisse bölünmeleri, geçmiş fiyat grafiğindeki
            seviyelerin değerlendirilmesinde dikkate alınmalıdır; bu olaylar nominal fiyatı
            düşürse de yatırımcının toplam pay adedini artırır. Tam geçmiş için{" "}
            <Link href={kunyeHref} prefetch={false} style={{ color: "var(--accent)", textDecoration: "underline" }}>
              künye sayfasına
            </Link>{" "}
            bakınız.
          </p>
        </div>
      ) : null}
    </>
  );
}
