import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0908",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#c98a4b",
            fontFamily: "Georgia, serif",
          }}
        >
          AH
        </div>
      </div>
    ),
    { ...size }
  );
}
