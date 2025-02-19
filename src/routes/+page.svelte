<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	let { countries } = $derived(data);

	let message = $state(''); // Declare the variable

	onMount(async () => {
		try {
			const res = await fetch('/api/ip');
			const data = await res.json();
			console.log(data);
			message = data.message; // Update ip directly
		} catch (err) {
			console.error('Error fetching IP:', err);
		}
	});
</script>

<button
	onclick={() => (window.location.href = 'http://localhost:5173/auth')}
	class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
>
	Sign Up
</button>

<h1>API Message: {message}</h1>

<main>
	<h1>Posts</h1>
	<ul>
		{#each data.posts as post}
			<li>{post.title}</li>
		{/each}
	</ul>
</main>

<!-- HTML Section -->
<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="text-center">
		<h1 class="text-4xl font-bold text-blue-600">TailwindCSS is working!</h1>
		<p class="mt-4 text-lg text-gray-700">This is a simple test page.</p>
	</div>
</div>

<h1>Welcome to Supabase!</h1>
<ul>
	{#each countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
