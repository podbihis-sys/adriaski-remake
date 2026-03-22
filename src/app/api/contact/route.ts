import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { contactSchema, sanitize } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const { success, remaining } = await rateLimit(`contact:${ip}`, 3, 60 * 60 * 1000);

    if (!success) {
      return NextResponse.json(
        { success: false, message: "Previše zahtjeva. Pokušajte ponovo kasnije." },
        { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
      );
    }

    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Greška u validaciji.", errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const sanitized = {
      name: sanitize(result.data.name),
      email: result.data.email,
      nachricht: sanitize(result.data.nachricht),
    };

    const supabase = createServerClient();
    const { error } = await supabase.from("contact_messages").insert(sanitized);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Greška pri slanju poruke." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Vaša poruka je uspješno poslana!" },
      { status: 201, headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Neočekivana greška." },
      { status: 500 }
    );
  }
}
