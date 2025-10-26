import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const signupId = searchParams.get("signupId");

  // Simulierte Datenbankantwort
  const mockUsers: Record<string, string> = {
    "12345": "Mustermann",
    "98765": "Schneider",
    "55555": "Bauer",
  };

  const lastName = mockUsers[signupId || ""] || "Kunde";

  return NextResponse.json({ lastName });
}
