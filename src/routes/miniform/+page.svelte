<script>
	import { onMount } from 'svelte';

	export let form;

	onMount(() => {
		// Wir warten kurz, um sicherzustellen, dass die Seite vollständig geladen ist
		setTimeout(() => {
			// Google Ads Conversion Tracking - nur bei erfolgreichem Formular triggern
			if (typeof gtag !== 'undefined' && (!form || form.success !== false)) {
				console.log('Google Ads Conversion tracking triggered from onMount');
				gtag('event', 'conversion', {
					send_to: 'AW-16808237436/ftWFCPTk1_IZEPyy5c4-'
				});
			}
		}, 300);
	});
</script>

<svelte:head>
	<!-- Event snippet for Google Ads Conversion Tracking -->
	<!-- Event snippet for Google Ads Conversion Tracking -->
	<!-- Event snippet for Google Ads Conversion Tracking -->
	<!-- Event snippet for Google Ads Conversion Tracking -->
	<script>
		// Kurzversion mit minimaler Verzögerung für schnelleres Laden
		document.addEventListener('DOMContentLoaded', function () {
			if (typeof gtag !== 'undefined') {
				console.log('Google Ads Conversion tracking triggered from head script');
				gtag('event', 'conversion', {
					send_to: 'AW-16808237436/ftWFCPTk1_IZEPyy5c4-'
				});
			}
		});
	</script>
</svelte:head>

<main class="mb-24 w-full bg-zinc-800 px-4 lg:px-0">
	<div class="mx-auto flex flex-col md:flex-row">
		<article class="w-full px-0 pb-48 md:px-0 md:pr-32">
			<h2
				class="mt-24 flex flex-col justify-center pb-2 pt-12 text-center text-3xl font-bold text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="mx-auto mb-6 h-16 w-16 text-lime-600"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				Vielen Dank für Ihre Nachricht!
			</h2>
			<p class="mt-4 text-center text-sm font-semibold text-stone-400">
				Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.
			</p>

			{#if form && form.warning}
				<p class="mt-4 text-center text-sm font-semibold text-yellow-400">
					{form.warning}
				</p>
			{:else if form && form.error}
				<p class="mt-4 text-center text-sm font-semibold text-yellow-400">
					Hinweis: {form.error}
				</p>
			{/if}
		</article>
	</div>
</main>
