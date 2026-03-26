import { ImageResponse } from "next/og";

export const alt = "Japan Toolkit — Practical Japan Trip Planning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #fffbeb, #fef3c7, #fde68a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 24, color: "#92400e", fontWeight: 600, marginBottom: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Japan Toolkit
      </div>
      <div style={{ fontSize: 64, color: "#1c1917", fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
        Plan Japan smarter.
      </div>
      <div style={{ fontSize: 28, color: "#57534e", marginTop: 24, maxWidth: 800 }}>
        Rail pass calculator, eSIM guide, and itinerary templates for real trip planning.
      </div>
    </div>,
    { ...size }
  );
}
