<script>
	import { Card, Modal, Button } from 'flowbite-svelte';
	let showModal = false;

	import { goto } from '$app/navigation';
	import { derived } from 'svelte/store'; // Import derived store

	let { data } = $props();

	// Derived store to track session changes and whether the modal should be shown
	let { session, supabase } = $derived(data);
	let clickOutsideModal = $state(false);

	// Creating a derived store for showModal based on session
	console.log(session?.user.id);
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
	<h1 class="mb-6 text-3xl font-bold">Welcome to Your Namecard</h1>

	<ul class="space-y-6">
		{#each data.namecards as namecard}
			<li class="flex justify-center">
				<div class="w-96 rounded-lg bg-white p-6 shadow-lg">
					<div class="space-y-4 text-center">
						<h2 class="text-2xl font-semibold text-gray-800">{namecard.name}</h2>
						<p class="font-medium text-gray-600">{namecard.job_title}</p>
						<p class="text-gray-500">{namecard.company}</p>

						<hr class="my-2 border-gray-300" />

						<div class="space-y-2 text-left text-gray-700">
							<p><strong>Email:</strong> {namecard.email}</p>
							<p><strong>Phone:</strong> {namecard.phone}</p>
							<p>
								<strong>Website:</strong>
								<a href={namecard.website} target="_blank" class="text-blue-600 hover:underline">
									{namecard.website}
								</a>
							</p>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<!-- Modal toggle -->
<button
	data-modal-target="static-modal"
	data-modal-toggle="static-modal"
	class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button"
>
	Toggle modal
</button>

<!-- Main modal -->
<div
	id="static-modal"
	data-modal-backdrop="static"
	tabindex="-1"
	aria-hidden="true"
	class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
>
	<div class="relative max-h-full w-full max-w-2xl p-4">
		<!-- Modal content -->
		<div class="relative rounded-lg bg-white shadow-sm dark:bg-gray-700">
			<!-- Modal header -->
			<div
				class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-600 md:p-5"
			>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Static modal</h3>
				<button
					type="button"
					class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
					data-modal-hide="static-modal"
				>
					<svg
						class="h-3 w-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<!-- Modal body -->
			<div class="space-y-4 p-4 md:p-5">
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					With less than a month to go before the European Union enacts new consumer privacy laws
					for its citizens, companies around the world are updating their terms of service
					agreements to comply.
				</p>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
					25 and is meant to ensure a common set of data rights in the European Union. It requires
					organizations to notify users as soon as possible of high-risk data breaches that could
					personally affect them.
				</p>
			</div>
			<!-- Modal footer -->
			<div
				class="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5"
			>
				<button
					data-modal-hide="static-modal"
					type="button"
					class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>I accept</button
				>
				<button
					data-modal-hide="static-modal"
					type="button"
					class="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
					>Decline</button
				>
			</div>
		</div>
	</div>
</div>
