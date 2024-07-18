import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "red",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hellooinpointbroinoi
      </div>
    )
  );
}
