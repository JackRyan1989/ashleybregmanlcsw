<script>
  import Navbar from "../components/navbar.svelte";
  import Form from "../components/form.svelte";
  import Hero from "../components/hero.svelte";
  import MainContent from "../components/main_content.svelte";
  import Footer from "../components/footer.svelte";

  let latestKnownScrollY = 0;

  function onScroll() {
    latestKnownScrollY = window.scrollY;
  }
</script>

<svelte:head>
  <title>Ashley Bregman, LCSW</title>
</svelte:head>

<Navbar />
<main>
<Hero />
  <MainContent />
  <Form />
</main>
<Footer />

<style>
  main {
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
  }
</style>
