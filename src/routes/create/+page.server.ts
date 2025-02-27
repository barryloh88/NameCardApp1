import { fail, redirect } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals: { supabase, session } }) => {
    console.log('Form submission started...');
    const user = session?.user.id;
    const formData = await request.formData();
    const name = formData.get('name');
    const job_title = formData.get('jobTitle');
    const company = formData.get('company');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const website = formData.get('website');
    const permalink = formData.get('permalink')
    console.log('Received data:', { name, job_title, company, email, phone, website, permalink });

    if (!name || !email || !permalink) {
      console.error('Validation failed: Name,Email and Permalink are required');
      return fail(400, { error: 'Name,Email and Permalink are required' });
    }

    // Check if the permalink already exists in the database
    const { data: existingPermalink, error: permalinkError } = await supabase
      .from('namecard')
      .select('permalink')
      .eq('permalink', permalink)
      .single();

    if (permalinkError && permalinkError.code !== 'PGRST116') { // Ignore "no rows found" error
      console.error('Error checking permalink:', permalinkError);
      return fail(400, { error: 'Error checking permalink availability' });
    }

    if (existingPermalink) {
      console.error('Permalink already exists:', permalink);
      return fail(400, { error: 'Permalink already taken. Please choose another one.' });
    }

    const { data, error } = await supabase
      .from('namecard')
      .upsert([{
        user_id: user,
        name,
        job_title,
        company,
        email,
        phone,
        website,
        permalink,
      }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return fail(500, { error: 'Failed to create namecard' });
    }
    console.log('Inserted data:', data);

    throw redirect(303, '/main'); // Redirect after success
  }
};
