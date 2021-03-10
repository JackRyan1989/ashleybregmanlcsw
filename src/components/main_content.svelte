<script>
</script>

<section class="body-content">
  <div uk-scrollspy="target: .content; cls: uk-animation-slide-left-medium; delay: 250;">
    <article class="content uk-article">
      <h1 class="title uk-article-title" id="about">
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
    vertical-align: baseline;
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
    letter-spacing: -2px;
    border-bottom: solid 4px rgba(170, 185, 173, 0.75);
    font-family: "brandon-grotesque";
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
