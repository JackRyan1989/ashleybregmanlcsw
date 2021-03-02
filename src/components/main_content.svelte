<script>
</script>

<svelte:head>
  <!-- UIkit CSS -->
  <link rel="stylesheet" href="/uikit-3.6.17/css/uikit.css" />

  <!-- UIkit JS -->
  <script src="/uikit-3.6.17/js/uikit.min.js"></script>
  <script src="/uikit-3.6.17/js/uikit-icons.min.js"></script>
</svelte:head>

<section class="body-content">
  <div uk-scrollspy="target: .content; cls: uk-animation-fade; delay: 250;">
    <article class="content uk-article">
      <h1 class="uk-heading-divider title uk-article-title" id="about">
        Main Content Section
      </h1>
      <p class="uk-text-lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
        pellentesque quam. Morbi eget pulvinar massa, pellentesque lacinia
        velit. Quisque et ante quis felis faucibus lobortis ac lacinia magna.
        Nunc pellentesque interdum scelerisque. Quisque sagittis purus vel ex
        sagittis, sed dictum tortor gravida.
      </p>
      <p class="non-lead">
        Curabitur vitae diam condimentum elit luctus pulvinar et sit amet
        mauris. Aliquam in erat ut justo malesuada vestibulum sit amet a felis.
        Nunc quam erat, auctor et sapien eu, ultricies rutrum arcu. Donec
        accumsan turpis non imperdiet pulvinar. Quisque ac quam cursus,
        efficitur erat nec, faucibus velit. Nunc varius faucibus nisi a laoreet.
      </p>
    </article>
  </div>
</section>

<style>
  * {
    margin: 0%;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  
  .body-content {
    z-index: 2;
    margin: 0% 2%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content {
    margin-top: 5%;
  }

  .title {
    max-width: 60ch;
    font-size: 2em;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    letter-spacing: -2px;
  }

  .uk-text-lead {
    max-width: 65ch;
    margin-top: 1.5%;
  }

  .non-lead {
    margin: 1em 0%;
    max-width: 80ch;
  }

</style>
