import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals: { supabase } }) => {
    const { slug } = params; // Get the slug from the URL

    const { data: namecard, error } = await supabase
        .from('namecard')
        .select()
        .eq('permalink', slug)
        .single(); // Expecting a single result

    if (error) {
        console.error('Error fetching namecard:', error);
    }

    return { namecard };
};
