<script>
	import { goto } from '$app/navigation';
	let { data } = $props();
	let { session, supabase } = $derived(data);
	console.log(session?.user.id);

	async function deleteNamecard() {
		const confirmDelete = confirm('Are you sure you want to delete your namecard?');
		if (!confirmDelete) return;

		// Get logged-in user ID
		const user = session?.user.id;

		if (!user) {
			alert('You must be logged in to delete your namecard.');
			return;
		}

		// Delete only the logged-in user's namecard
		const { error } = await supabase.from('namecard').delete().eq('user_id', user);

		if (error) {
			console.error('Error deleting namecard:', error);
			alert('Failed to delete namecard.');
		} else {
			alert('Namecard deleted successfully!');
			goto('/'); // Redirect after delete
		}
	}
</script>

<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
	{#each data.namecards as namecard}
		<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
			<h2 class="text-lg font-semibold text-gray-900">{namecard.name}</h2>
			<p class="text-sm text-gray-600">{namecard.job_title} at {namecard.company}</p>
			<div class="mt-2">
				<p class="text-gray-700"><strong>Email:</strong> {namecard.email}</p>
				<p class="text-gray-700"><strong>Phone:</strong> {namecard.phone}</p>
				<p class="text-gray-700">
					<strong>Website:</strong>
					<a href={namecard.website} target="_blank" class="text-blue-500 hover:underline">
						{namecard.website}
					</a>
				</p>
			</div>
		</div>
	{/each}
</div>

<ul>
	{#each data.namecards as namecard}
		<li>
			<h2>{namecard.name}</h2>
			<p>{namecard.job_title} at {namecard.company}</p>
			<p><strong>Email:</strong> {namecard.email}</p>
			<p><strong>Phone:</strong> {namecard.phone}</p>
			<p>
				<strong>Website:</strong>
				<a href={namecard.website} target="_blank" class="text-blue-500 hover:underline">
					{namecard.website}
				</a>
			</p>
			<p><strong>permalink:</strong> {namecard.permalink}</p>
			<!-- Edit Button -->
			<a href="http://localhost:5173/create" class="text-blue-600 hover:underline"> Edit </a>

			<!-- Delete Button -->
			<button
				on:click={() => deleteNamecard(namecard.user_id)}
				class="ml-4 text-red-600 hover:underline"
			>
				Delete
			</button>
		</li>
	{/each}
</ul>
