<script>
	import Router from 'svelte-spa-router';
	import Home from './pages/Home.svelte';
	import MarriageSongs from './pages/MarriageSongs.svelte';
	import ComingSoon from './pages/ComingSoon.svelte';
	import About from './pages/About.svelte';
	import Contact from './pages/Contact.svelte';
	import SongType from './pages/types/SongType.svelte';
	import SongDetails from '../src/components/SongDetails.svelte';
	import SubCategory from './pages/types/SubCategory.svelte';

	const routes = {
		'/': Home,
		'/marriageSongs': MarriageSongs,
		'/comingSoon': ComingSoon,
		'/about': About,
		'/contact': Contact,
		'/types/:type': SongType, // Dynamic route for song types
		'/types/:type/song/:id': SongDetails, // Route for individual song details
		'/categories/:category/:subcategory': SubCategory,
	};
</script>
  
<main>
	<Router {routes} />
</main>