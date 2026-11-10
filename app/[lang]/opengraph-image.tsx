import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image de partage 1200×630, générée au build à partir de content/site.ts. */
export default function OpengraphImage() {
  const grid = "rgba(250,250,250,0.06)";
  const [roleA, roleB] = site.title.split(" & ");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#09090b",
          backgroundImage: `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>
          {site.og.header}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 44, color: "#d4d4d8" }}>
            {roleA}
            <span style={{ color: "#6b9bff", margin: "0 14px" }}>&amp;</span>
            {roleB}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#a1a1aa" }}>
          <div style={{ width: 48, height: 3, background: "#6b9bff" }} />
          {site.og.footer}
        </div>
      </div>
    ),
    size,
  );
}
