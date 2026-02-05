import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { getProfile } from "@/lib/users/service";

export async function GET() {
    const supabase = supabaseServer;
    const {data: {user}} = await supabase.auth.getUser();
    if(!user) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const profile = await getProfile(user.id);
    return NextResponse.json(profile);

}