<script>
	export let data;
	let { namecard } = data;
</script>

{#if namecard}
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
{:else}
	<p class="text-red-600">Namecard not found.</p>
{/if}
