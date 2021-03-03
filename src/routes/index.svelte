<script>
  import Navbar from "../components/navbar.svelte";
  import Form from "../components/form.svelte";
  import Hero from "../components/hero.svelte";
  import MainContent from "../components/main_content.svelte";
  import Footer from "../components/footer.svelte";
</script>

<svelte:head>
  <title>Ashley Bregman, LCSW</title>
</svelte:head>

<Navbar />
<main>
  <Hero />
  <section>
    <MainContent />
    <Form />
  </section>
</main>
<Footer />

<style>
  main {
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
  }
</style>
