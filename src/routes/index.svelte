<script>
  import Navbar from "../components/navbar.svelte";
  import Hero from "../components/hero.svelte";
  import About from "../components/about_me.svelte";
  import Specializations from "../components/specializations.svelte"
  import Footer from "../components/footer.svelte";
</script>

<svelte:head>
  <title>Ashley Bregman, LCSW</title>
</svelte:head>

<Navbar/>
<main>
  <Hero />
  <section>
    <About />
    <Specializations />
  </section>
  <Footer/>
</main>

<style>
  main {
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
  }
</style>
