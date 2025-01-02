<script>
	import { Button } from 'flowbite-svelte';

	let { data } = $props();
	let { countries } = $derived(data);

	let clientIp = null;
	let error = null;

	// Fetch data from the API route when the component loads
	const fetchClientIp = async () => {
		try {
			const response = await fetch('/api/getIPaddress');
			if (!response.ok) {
				throw new Error('Failed to fetch client IP');
			}
			const data = await response.json();
			clientIp = data.clientIp;
		} catch (err) {
			error = err.message;
		}
	};

	fetchClientIp();
</script>

{#if error}
	<p>Error: {error}</p>
{:else if clientIp}
	<p>Your IP Address: {clientIp}</p>
{:else}
	<p>Loading...</p>
{/if}

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
