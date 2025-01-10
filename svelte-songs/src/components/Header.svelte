<script>
	let isMenuOpen = false;
  
	const toggleMenu = () => {
	  	isMenuOpen = !isMenuOpen;
	};
  
	let logo = '/images/logo_new.png'; 
</script>
  
<nav class="nav">
	<!-- Logo Section -->
	<div class="logo">
		<a href="/"><img src={logo} alt="logo" /></a>
	</div>

	<!-- Hamburger Menu for Mobile -->
	<button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle Menu">
		{#if !isMenuOpen}
			<!-- Hamburger Icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
			</svg>
			{:else}
			<!-- Close Icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{/if}
	</button>

	<!-- Navigation Links -->
	<div class={`nav-container ${isMenuOpen ? 'open' : ''}`}>
		<ul class={`nav-links ${isMenuOpen ? 'small-text' : ''}`}>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact Us</a></li>
		</ul>
	</div>
</nav>
  
  <style>
	nav {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  padding: 1rem;
	  background-color: #93b874;
	  color: #475347;
	  height: 5rem;
	  position: relative;
	}
  
	.logo {
	  display: flex;
	  align-items: center;
	}
  
	.logo img {
	  height: 8rem;
	  width: 14rem;
	}
  
	.menu-toggle {
	  display: none;
	  background: none;
	  border: none;
	  color: #475347;
	  cursor: pointer;
	  z-index: 10;
	}
  
	.menu-toggle svg {
	  height: 2rem;
	  width: 2rem;
	}
  
	.nav-container {
	  display: flex;
	  align-items: center;
	}
  
	.nav-links {
	  display: flex;
	  list-style: none;
	  margin: 0;
	  padding: 0;
	}
  
	.nav-links li {
	  margin-right: 2rem;
	}
  
	.nav-links li a {
	  color: #475347;
	  text-decoration: none;
	  font-size: 1.2rem;
	  font-weight: bolder;
	}
  
	.nav-links li a:hover {
	  color: #7c7d7d;
	}
  
	.nav-links.small-text li a {
	  font-size: 0.9rem; /* Reduce font size when hamburger menu is open */
	}
  
	@media (max-width: 768px) {
		.logo img {
			height: 6rem;
			width: 10rem;
		}

	  .menu-toggle {
		display: block;
	  }
  
	  .nav-container {
		position: absolute;
		top: 5rem;
		left: 0;
		right: 0;
		background-color: #1F2937;
		display: none;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0;
		z-index: 10;
	  }
  
	  .nav-container.open {
		display: flex;
	  }
  
	  .nav-links {
		flex-direction: column;
		align-items: center;
		width: 100%;
	  }
  
	  .nav-links li {
		margin: 0.5rem 0;
	  }
  
	  .nav-links li a {
		font-size: 1.25rem;
	  }
  
	  .nav-links.small-text li a {
		font-size: 1rem; /* Reduce font size when menu is open */
	  }
	}
  
	@media (max-width: 425px) {
	  .logo img {
		height: 2.5rem;
		width: 2.5rem;
	  }
  
	  .nav-links li a {
		font-size: 1rem;
	  }
	}
  </style>
  