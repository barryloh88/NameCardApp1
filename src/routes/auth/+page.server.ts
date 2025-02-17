import { fail } from '@sveltejs/kit';

export const actions = {
    magicLink: async ({ request, locals }) => {
        const formData = await request.formData();
        const email = formData.get('email');

        if (!email) {
            return fail(400, { error: 'Email is required' });
        }

        const { error } = await locals.supabase.auth.signInWithOtp({ email });

        if (error) {
            console.error('Magic link error:', error.message);
            return fail(400, { error: error.message });
        }

        return { success: true, message: 'Magic link sent. Check your email!' };
    }
};
