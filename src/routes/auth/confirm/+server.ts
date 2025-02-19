// import { redirect } from '@sveltejs/kit';
// import { supabase } from '$lib/supabaseClient'; // Adjust import as needed
// import { getSupabase } from '@supabase/auth-helpers-sveltekit';

// export const load = async (event) => {
//     const { supabaseClient } = await getSupabase(event);
//     const { data: { user } } = await supabaseClient.auth.getUser();

//     if (!user) {
//         return { error: 'User not found' };
//     }

//     const tokenHash = event.url.searchParams.get('token_hash');
//     if (!tokenHash) return { error: 'Token is missing' };

//     const { data, error } = await supabaseClient.auth.verifyOtp({
//         email: user.email,
//         token: tokenHash,
//         type: 'magiclink'
//     });

//     if (error) return { error: error.message };

//     throw redirect(303, '/dashboard');
// };


// src/routes/auth/confirm/+server.ts
import type { EmailOtpType } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
    const token_hash = url.searchParams.get('token_hash');
    const type = url.searchParams.get('type') as EmailOtpType | null;
    const next = url.searchParams.get('next') ?? '/main';
    console.log(token_hash, type);

    if (!token_hash || !type) {
        throw redirect(303, '/auth/error');
    }

    const { error } = await supabase.auth.verifyOtp({ token_hash, type });

    if (error) {
        console.error('Supabase OTP verification error:', error);
        throw redirect(303, '/auth/error');
    }

    throw redirect(303, next);
};
