import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.NEXT_SUPABASE_SERVICE_KEY!;

export const supabaseServer = createClient(supabaseURL, supabaseServiceKey, {auth: {persistSession: false}});