<script>
	import { onMount } from 'svelte';
	import goto from 'svelte-spa-router';

	export let params;

	let song = null;
	let loading = true;

	onMount(async () => {
		try {
			const res = await fetch(`http://localhost:5000/api/song/${params.id}`);
			song = await res.json();
			loading = false;
		} catch (err) {
			console.error('Error fetching song details', err);
			goto('/marriageSongs');
		}
	});
</script>

<main class="min-h-screen p-8 bg-gray-100">
	{#if loading}
		<p>Loading...</p>
	{:else if song}
		<h1 class="text-3xl font-bold mb-6">{song.title}</h1>
		<p class="text-gray-700 mb-6">{song.description}</p>
		<audio controls class="w-full">
			<source src={song.audioUrl} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
		<div class="mt-6">
			<h2 class="text-xl font-semibold">Lyrics:</h2>
			<p class="whitespace-pre-wrap mt-2">{song.lyrics}</p>
		</div>
	{:else}
		<p>Song data not found.</p>
	{/if}
</main>

<style>
	/* Your styles here */
</style>