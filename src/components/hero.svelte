<script>
</script>

<div
  uk-parallax="bgy: 200"
  class="parallax uk-cover-container hero-image-container"
  uk-scrollspy="target: .main-heading-box; cls: uk-animation-fade; delay: 250;"
>
  <div class="main-heading-box">
    <h1><strong>Compassionate, Affirming, Approachable Psychotherapy</strong></h1>
  </div>
</div>


<!-- Mobile -->
<div
  class="no-parallax uk-cover-container hero-image-container"
  uk-scrollspy="target: .main-heading-box; cls: uk-animation-fade; delay: 250;"
>
  <div class="main-heading-box">
    <h1>Compassionate, Affirming, Approachable Psychotherapy</h1>
  </div>
</div>

<style>
  .hero-image-container {
    height: 77vh;
    background-image: url("/assets/images/dry_leaves.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main-heading-box {
    position: absolute;
    top: 50%;
    margin: 0;
    left: 50%;
    transform: translate(-50%, -50%) perspective(3000px) rotateX(3deg)
      rotateY(1deg);
    padding: 30px 15px;
    text-align: center;
    background: rgba(206, 205, 201, 0.65);
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
    font-size: 3.1em;
    letter-spacing: -2px;
    font-family: "brandon-grotesque";
  }

  .no-parallax {
    display: none;
  }

  /* Phone Screens, Landscape and Portrait modes */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    h1 {
      font-size: 3em;
    }

    .hero-image-container {
    height: 85vh;
    }

    .no-parallax {
      display: block;
    }

    .parallax {
      display: none;
    }
  }
</style>
