<script>
	let { data, children } = $props();
	let { session, supabase } = $derived(data);
	let name = '';
	let job_title = '';
	let company = '';
	let email = '';
	let phone = '';
	let website = '';
	let permalink = '';
</script>

<form method="POST">
	<label>
		Full Name:
		<input type="text" name="name" required />
	</label>

	<label>
		Job Title:
		<input type="text" name="jobTitle" required />
	</label>

	<label>
		Company Name:
		<input type="text" name="company" required />
	</label>

	<label>
		Email:
		<input type="email" name="email" required />
	</label>

	<label>
		Phone Number:
		<input type="tel" name="phone" required />
	</label>

	<label>
		Website (optional):
		<input type="url" name="website" />
	</label>

	<label>
		permalink:
		<input type="text" name="permalink" />
	</label>

	<button type="submit">Create Namecard</button>
</form>
