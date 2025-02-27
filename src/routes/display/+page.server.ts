import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ depends, locals: { session, supabase } }) => {
    const user = session?.user.id;
    depends('supabase:db:namecard')
    const { data: namecards } = await supabase.from('namecard').select().eq('user_id', user)
    return { namecards: namecards ?? [] }
}