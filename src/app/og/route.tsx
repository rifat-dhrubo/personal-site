import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div tw="flex flex-col w-full h-full items-center justify-center bg-[#020617] text-gray-50">
        <h1 tw="text-5xl mb-0">Rifat Hossain</h1>
        <p tw="text-2xl mt-5">I make dreams reality with code and coffee</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
