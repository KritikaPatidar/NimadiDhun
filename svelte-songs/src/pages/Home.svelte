<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import SongCard from '../components/SongCard.svelte';
</script>
  
<main class="min-h-screen flex flex-col" style="background: #E6EEE0;">
    <Header/>

    <section class="sec">
        <h1>सुर की मिठास, परंपरा की पहचान</h1>
    </section>

    <SongCard />

    <Footer />
</main>
    

<style>
    .sec h1 {
        font-size: 3rem; /* Default font size for larger screens */
        text-align: center; /* Center the text */
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
  
    /* Responsive font size for tablets */
    @media (max-width: 1024px) {
        .sec h1 {
            font-size: 2.5rem; /* Reduce the font size on tablets */
        }
    }
  
    /* Responsive font size for mobile screens */
    @media (max-width: 768px) {
        .sec h1 {
            font-size: 2rem; /* Further reduce the font size on small screens */
        }
    }
  
    /* Responsive font size for very small mobile screens */
    @media (max-width: 480px) {
        .sec h1 {
            font-size: 1.6rem; /* Reduce the font size even more for very small screens */
        }
    }
</style> 