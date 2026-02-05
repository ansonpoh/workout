import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function GET() {
  // simplest “can I talk to Supabase?” check:
  const { data, error } = await supabaseServer.schema("workout").from("users").select("*");

  if (error) {
    return NextResponse.json(
      { ok: false, message: error.message, details: error },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
