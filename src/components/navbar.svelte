<script>
  import Fullsizenav from "./fullsize_nav.svelte";
  import Hamburger from "./hamburger_nav.svelte";
</script>

<nav class="nav-wrapper">
  <div class="title-wrapper">
    <h1 class="name-card">Ashley Bregman, <span>LCSW</span></h1>
  </div>
  <div class="fullsize">
    <Fullsizenav />
  </div>
  <div class="mobile">
    <Hamburger />
  </div>
</nav>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  .nav-wrapper {
    display: grid;
    margin: 0% 2%;
    padding: 0% 2%;
    color: black !important;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    text-align: center;
  }

  .title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex;
    padding: 2.5% 0%;
  }

  .mobile {
    display: none;
  }

  .name-card {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 1.95em;
    font-family: "brandon-grotesque";
    font-weight: lighter;
  }

  span {
    font-size: 0.8em;
  }

  /* Phone Screens, Landscape and Portrait modes */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    .fullsize {
      display: none;
    }

    .mobile {
      display: block;
    }

    .nav-wrapper {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }

    .name-card {
      font-size: 1.9em;
    }
  }

  /* Tablet */
  @media only screen and (min-device-width: 767px) and (max-device-width: 1024px) {
    .name-card {
      font-size: 1.4em;
    }

    .nav-wrapper {
      display: grid;
      grid-template-columns: max-content max-content;
    }
  }
</style>
