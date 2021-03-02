<script>
</script>

<svelte:head>
  <!-- UIkit CSS -->
  <link rel="stylesheet" href="/uikit-3.6.17/css/uikit.css" />

  <!-- UIkit JS -->
  <script src="/uikit-3.6.17/js/uikit.min.js"></script>
  <script src="/uikit-3.6.17/js/uikit-icons.min.js"></script>
</svelte:head>

<div uk-parallax="bgy: -200" class="uk-cover-container hero-image-container">
    <img src="https://picsum.photos/1000/1000/?blur" alt="" uk-cover>
</div>


<style>
    .hero-image-container {
        height: 100vh;
    }
</style>