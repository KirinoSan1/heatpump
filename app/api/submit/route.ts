import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  console.log("Mock submission received:", data);

  // Simuliere eine kurze Verarbeitung
  await new Promise((res) => setTimeout(res, 800));

  // Sende eine Erfolgsmeldung zurück
  return NextResponse.json({ success: true, message: "Submission received" });
}