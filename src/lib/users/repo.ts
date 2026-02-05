import { UUID } from "crypto";
import { supabaseServer } from "../supabaseServer";
import { UpdateUserProfile, User } from "./types";

export async function getProfileById(user_id: UUID): Promise<User | null> {
    const supabase = supabaseServer;

    const {data, error} = await supabase.from("users").select("*").eq("id", user_id).single();

    if(error) throw error;
    return data;
}