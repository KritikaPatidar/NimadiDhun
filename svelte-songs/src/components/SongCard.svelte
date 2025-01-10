<script>
    import { link } from 'svelte-spa-router';
    import MarriageSongs from '../pages/MarriageSongs.svelte';
    import ComingSoon from '../pages/ComingSoon.svelte';
</script>
  
<div class="card-container">
    <!-- Card 1 (Marriage) -->
    <div class="card">
        <img class="card-image" src='/images/4.jpg' alt="https://via.placeholder.com/400x200" />
        <div class="card-content">
            <div class="card-title">
                Marriage
            </div>
            <a use:link href="/marriageSongs" class="see-songs-link">
                See Songs <span>&#8594;</span>
            </a>
        </div>
    </div>

    <!-- Card 2 (Baby Shower) -->
    <div class="card">
        <img class="card-image" src='/images/5.jpg' alt="https://via.placeholder.com/400x200" />
        <div class="card-content">
            <div class="card-title">
                Baby Shower
            </div>
            <a use:link href="/comingSoon" class="see-songs-link">
                See Songs <span>&#8594;</span>
            </a>
        </div>
    </div>

    <!-- Card 3 (Festivals) -->
    <div class="card">
        <img class="card-image" src='/images/7.jpg' alt="https://via.placeholder.com/400x200" />
        <div class="card-content">
            <div class="card-title">
                Festivals
            </div>
            <a use:link href="/comingSoon" class="see-songs-link">
                See Songs <span>&#8594;</span>
            </a>
        </div>
    </div>
</div>

<style>
    /* General styles */
    .card-container {
        display: flex;
        justify-content: center;
        gap: 6rem;
        margin-top: 2rem;
        margin-bottom: 4rem;
        flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
    }

    .card {
        max-width: 20rem;
        background-color: white;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem; /* Add some bottom margin for spacing between stacked cards */
        flex: 1 1 20rem; /* Allow the card to shrink and grow */
    }

    .card-image {
        width: 100%;
        height: 11rem;
    }

    .card-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center; /* Optional, to center the text */
    }

    .card-title {
        font-weight: bold;
        color: #4a5568;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .see-songs-link {
        font-size: 0.8rem;
        color: #3182ce;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-top: 1rem; /* Add some spacing between the title and link */
    }

    .see-songs-link span {
        margin-left: 0.5rem;
        font-size: 1.25rem;
    }

    .see-songs-link:hover {
        text-decoration: underline;
    }

    /* Responsive Styles */
    @media (max-width: 1024px) {
        .card-container {
            gap: 3rem; /* Reduce the gap on tablets */
        }

        .card-title {
            font-size: 1.8rem; /* Slightly smaller font size for tablets */
        }

        .see-songs-link {
            font-size: 0.9rem; /* Adjust the link font size */
        }
    }

    @media (max-width: 768px) {
        .card-container {
            gap: 2rem; /* Reduce the gap on smaller screens */
        }

        .card-title {
            font-size: 1.6rem; /* Reduce font size on mobile */
        }

        .see-songs-link {
            font-size: 0.9rem; /* Adjust the link font size */
        }
    }

    @media (max-width: 480px) {
        .card-container {
            gap: 1.5rem; /* Even smaller gap on small mobile devices */
        }

        .card {
            max-width: 90%; /* Make the cards take up more space */
        }

        .card-title {
            font-size: 1.4rem; /* Adjust font size for small screens */
        }

        .see-songs-link {
            font-size: 0.9rem; /* Adjust font size */
        }
    }
</style>
