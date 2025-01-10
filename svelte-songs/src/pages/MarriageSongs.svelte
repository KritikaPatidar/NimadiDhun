<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    let categories = [];
    let loading = true;

    // Fetch categories from the backend
    onMount(async () => {
        try {
            const res = await fetch('http://localhost:5000/api/categories');
            categories = await res.json();
            loading = false;
        } catch (err) {
            console.error('Error fetching categories', err);
        }
    });
</script>

<main class="min-h-screen flex flex-col">
    <Header title="Marriage Songs" />

    <section class="content-section">
        <h2 class="heading">Wedding Song Categories</h2>
        {#if loading}
            <p>Loading...</p>
        {:else if categories.length > 0}
            <ul class="categories">
                {#each categories[0].subcategories as subcategory}
                <li class="category-item">
                    <a href={`/types/${subcategory}`} class="category-link">{subcategory}</a>
                </li>
                {/each}
            </ul>
        {:else}
            <p>No categories available.</p>
        {/if}
    </section>

    <Footer />
</main>
  
  
<style>
    .content-section {
        flex-grow: 1; /* Ensures it takes up remaining space */
        padding: 2rem; /* Equivalent to `p-8` */
        background-color: #E6EEE0; /* Equivalent to `bg-gray-100` */
    }

    .heading {
        text-align: center;
        font-size: 2rem; /* Larger font size for heading */
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); /* Adapts to available space */
        gap: 1rem; /* Space between items */
        list-style-type: none; /* Removes bullet points */
        padding: 0;
        place-items: center; /* Centers grid items */
    }

    .category-item {
        border: 1px solid #ddd;
        padding: 1rem; /* Adjusted padding for smaller boxes */
        background-color: #C6D9B9;
        border-radius: 0.5rem; /* Slightly rounded corners */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        text-align: center; /* Center-aligns text */
        max-width: 15rem; /* Reduced max-width for smaller screens */
        width: 100%; /* Ensures consistent sizing */
    }

    .category-item:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .category-link {
        color: #465347; /* Neutral color for links */
        font-size: 1.1rem; /* Smaller font size */
        font-weight: 500;
        text-decoration: none;
    }

    .category-link:hover {
        text-decoration: none;
    }

    @media (max-width: 768px) {
        .heading {
            font-size: 1.5rem; /* Slightly smaller heading on small screens */
        }

        .categories {
            grid-template-columns: repeat(2, 1fr); /* Two columns for small screens */
        }
    }

    @media (max-width: 480px) {
        .categories {
            grid-template-columns: 1fr; /* Single column on very small screens */
        }

        .category-item {
            max-width: 100%; /* Allow items to take full width in small viewports */
        }
    }

    @media (min-width: 1024px) {
        .categories {
            grid-template-columns: repeat(3, 1fr); /* Three columns for larger screens */
        }
    }
</style>
  