<script>
</script>

<main class="page-wrapper">
  <slot />
</main>

<style>
  @font-face {
    font-family: "atkinson_hyperlegible";
    src: url("../assets/fonts/Atkinson-Hyperlegible/Web Fonts/WOFF/Atkinson-Hyperlegible-Regular-102.woff")
        format("woff");
    src: url("../assets/fonts/Atkinson-Hyperlegible/Web Fonts/EOT/Atkinson-Hyperlegible-Regular-102.eot") format("embedded-opentype"),
      url("../assets/fonts/Atkinson-Hyperlegible/Web Fonts/WOFF2/Atkinson-Hyperlegible-Regular-102.woff2")
        format("woff2"),
      url("../assets/fonts/Atkinson-Hyperlegible/Web Fonts/TTF/Atkinson-Hyperlegible-Regular-102.ttf")
        format("truetype"),
        url("../assets/fonts/Atkinson-Hyperlegible/Web Fonts/SVG/Atkinson-Hyperlegible-Regular-102.svg") format("svg");
    font-weight: 102;
    font-style: normal;
  }

  .page-wrapper {
    font-family: "Roboto", "sans-serif";
    background: white;
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(50px, 1fr);
    grid-template-rows: min-content 1fr min-content;
    gap: 1px;
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
