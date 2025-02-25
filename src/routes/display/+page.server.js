import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("namecard").select();
    return {
        namecards: data ?? [],
    };
}