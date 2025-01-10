<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    let songs = [];
    let loading = true;

    // Fetch the songs for the selected sub-category
    onMount(async () => {
        try {
            const res = await fetch('http://localhost:5000/api/songs?subcategory=chula-kothi');
            songs = await res.json();
            loading = false;
        } catch (err) {
            console.error('Error fetching songs:', err);
        }
    });

    const toggleLyrics = (song) => {
        song.showLyrics = !song.showLyrics;
    };
</script>

<main class="min-h-screen flex flex-col">
    <Header title="Chula Kothi Songs" />

    <section class="songs-container">
        <h2 class="heading">Songs for "Chula Kothi"</h2>

        {#if loading}
            <p>Loading...</p>
        {:else if songs.length > 0}
            {#each songs as song}
                <div class="song-card">
                    <div class="song-header" on:click={() => toggleLyrics(song)}>
                        <h3 class="song-title">{song.title}</h3>
                        <span class="toggle-icon">{song.showLyrics ? "–" : "+"}</span>
                    </div>
                    {#if song.showLyrics}
                        <div class="lyrics-section">
                            <p>{song.lyrics}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        {:else}
            <p>No songs available for this category.</p>
        {/if}
    </section>

    <Footer />
</main>

<style>
    .songs-container {
        padding: 2rem;
        background-color: #F5F5F5;
    }

    .heading {
        text-align: center;
        font-size: 1.75rem;
        margin-bottom: 1rem;
        font-weight: bold;
        color: #333;
    }

    .song-card {
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: #FFFFFF;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .song-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }

    .song-title {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .toggle-icon {
        font-size: 1.5rem;
        font-weight: bold;
        color: #888;
    }

    .lyrics-section {
        margin-top: 0.5rem;
        padding: 0.5rem;
        background-color: #F9F9F9;
        border-left: 3px solid #A3CFA3;
        color: #555;
    }
</style>
