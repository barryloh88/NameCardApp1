<script lang="ts">
	import { Button } from 'flowbite-svelte';

	let { data } = $props();
	let { countries } = $derived(data);
</script>

<main>
	<h1>Posts</h1>
	<ul>
		{#each data as post}
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

<Button color="blue">Click Me</Button>
