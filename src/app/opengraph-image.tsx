import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hoca İle Borsa";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(16,185,129,0.20), transparent 30%), radial-gradient(circle at bottom left, rgba(59,130,246,0.16), transparent 30%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 50,
            right: 60,
            width: 260,
            height: 260,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -70,
            right: 180,
            width: 320,
            height: 320,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "54px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 9999,
                background: "#10b981",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#a7f3d0",
                display: "flex",
              }}
            >
              Hoca İle Borsa
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 820,
            }}
          >
            <div
              style={{
                fontSize: 76,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Borsa, Halka Arz,
              <span style={{ color: "#34d399", marginLeft: 18 }}>
                Temettü
              </span>
            </div>

            <div
              style={{
                marginTop: 14,
                fontSize: 76,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Fonlar ve Faiz Oranları
            </div>

            <div
              style={{
                marginTop: 28,
                fontSize: 30,
                lineHeight: 1.45,
                color: "#cbd5e1",
                display: "flex",
                flexWrap: "wrap",
                maxWidth: 900,
              }}
            >
              Mobil uyumlu finans içerikleri, güncel sayfalar ve düzenli takip
              alanları tek platformda.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {["Borsa", "Halka Arz", "Temettü", "Fonlar", "Faiz Oranları"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 52,
                    padding: "0 20px",
                    borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#e2e8f0",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}