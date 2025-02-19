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
    console.log('Received data:', { name, job_title, company, email, phone, website });

    if (!name || !email) {
      console.error('Validation failed: Name and Email are required');
      return fail(400, { error: 'Name and Email are required' });
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
        website
      }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return fail(500, { error: 'Failed to create namecard' });
    }
    console.log('Inserted data:', data);

    throw redirect(303, '/display'); // Redirect after success
  }
};
