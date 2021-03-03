<script>
</script>

<svelte:head>
  <!-- UIkit CSS -->
  <link rel="stylesheet" href="/uikit-3.6.17/css/uikit.css" />

  <!-- UIkit JS -->
  <script src="/uikit-3.6.17/js/uikit.min.js"></script>
  <script src="/uikit-3.6.17/js/uikit-icons.min.js"></script>
</svelte:head>

<div
  uk-parallax="bgy: 200"
  class="uk-cover-container hero-image-container"
  uk-scrollspy="target: .main-heading-box; cls: uk-animation-fade; delay: 250;"
>
  <div class="main-heading-box">
    <h1>Comprehensive Care and Counseling</h1>
  </div>
</div>

<style>
  .hero-image-container {
    height: 70vh;
    background-image: url("https://picsum.photos/1000/1000/");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main-heading-box {
    position: absolute;
    top: 50%;
    margin: 0;
    left: 50%;
    transform: translate(-50%, -50%) perspective(3000px) rotateX(3deg) rotateY(1deg);
    padding: 30px 15px;
    text-align: center;
    background: rgba(170, 185, 173, 0.75);
    opacity: 1;
    -webkit-transition: all 0.1s;
    -moz-transition: -moz-transform all 0.1s;
    transition: transform 1s ease 0s;
    width: 80%;
    transform-style: preserve-3d;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }

  h1 {
    color: white !important;
    max-width: 60ch;
    font-size: 4em;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    letter-spacing: -2px;
  }
</style>