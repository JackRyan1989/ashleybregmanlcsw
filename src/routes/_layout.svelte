<script>
</script>

<main class="page-wrapper">
  <slot />
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  @font-face {
    font-family: "atkinson_hyperlegible";
    src: url("/assets/fonts/Atkinson-Hyperlegible/Web Fonts/WOFF/Atkinson-Hyperlegible-Regular-102.woff.woff")
      format("woff");
    src: url("/assets/fonts/Atkinson-Hyperlegible/Web Fonts/EOT/Atkinson-Hyperlegible-Regular-102.eot")
        format("embedded-opentype"),
      url("/assets/fonts/Atkinson-Hyperlegible/Web Fonts/WOFF2/Atkinson-Hyperlegible-Regular-102.woff2")
        format("woff2"),
      url("/assets/fonts/Atkinson-Hyperlegible/Web Fonts/TTF/Atkinson-Hyperlegible-Regular-102.ttf")
        format("truetype"),
      url("/assets/fonts/Atkinson-Hyperlegible/Web Fonts/SVG/Atkinson-Hyperlegible-Regular-102.svg")
        format("svg");
    font-weight: 102;
    font-style: normal;
  }

  .page-wrapper {
    font-family: atkinson_hyperlegible, Roboto, sans-serif;
    background: white;
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(50px, 1fr);
    grid-template-rows: min-content 1fr minmax(25px, max-content);
    gap: 1px;
  }

  .page-wrapper :global(*) {
    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
      }
    }
  }

  .page-wrapper :global([id]) {
    scroll-margin-top: 4ex;
  }

  @media (max-width: 600px) {
    .page-wrapper {
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }
    .page-wrapper > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
</style>
