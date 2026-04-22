import { ImageResponse } from "next/og"

import { globalEditorialCopy } from "@/lib/freshmind/editorial-copy"

export const runtime = "edge"
export const alt = "Freshmind International"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f6efe7 0%, #fff8f0 45%, #ffe2c5 100%)",
          color: "#2a1614",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "#4d1c18",
              color: "#fff8f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            FM
          </div>
          Freshmind International
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 22, color: "#9d4d21", textTransform: "uppercase" }}>
            Ethical recruitment for Ugandan job seekers
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            Verified openings.
            <br />
            Interview registration.
            <br />
            Worker protection.
          </div>
          <div style={{ fontSize: 28, color: "#5f4037" }}>
            {globalEditorialCopy.opengraphSupport}
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, fontSize: 26, color: "#5f4037" }}>
          <span>7,000+ placements</span>
          <span>•</span>
          <span>MGLSD Licensed</span>
          <span>•</span>
          <span>Uganda-wide registration</span>
        </div>
      </div>
    ),
    size
  )
}
