<script>
	import { onMount } from 'svelte';
	import goto from 'svelte-spa-router';

	export let params;

	let songs = [];
	let loading = true;

	onMount(async () => {
		try {
			const res = await fetch(`http://localhost:5000/api/songs/${params.type}`);
			songs = await res.json();
			loading = false;
		} catch (err) {
			console.error('Error fetching songs', err);
			goto('/marriageSongs');
		}
	});
</script>

<main class="min-h-screen p-8 bg-gray-100">
	{#if loading}
		<p>Loading...</p>
	{:else if songs.length > 0}
		<ul class="song-list">
			{#each songs as song}
				<li class="song-item">
					<a href={`/types/${params.type}/song/${song._id}`} class="song-link">{song.title}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No songs available for this category.</p>
	{/if}
</main>

<style>
	.song-list {
		list-style-type: none;
		padding: 0;
	}

	.song-item {
		margin: 1rem 0;
	}

	.song-link {
		text-decoration: none;
		color: #007BFF;
	}

	.song-link:hover {
		text-decoration: underline;
	}
</style>
