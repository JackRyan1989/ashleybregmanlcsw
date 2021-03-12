<script>
</script>

<ul class="link-wrapper">
    <li class="link-item">
      <a class="link" id="first" href="#about" uk-scroll>About Me</a>
    </li>
    <li class="link-item">
      <a class="link" id="second" href="#specializations" uk-scroll>Practice and Specializations</a>
    </li>
    <li class="link-item">
      <a class="link" id="third" href="#contact" uk-scroll>Contact Me</a>
    </li>
  </ul>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  .link-wrapper {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .link-item {
    padding: 0px 2ch;
  }

  .link {
    padding: 15px;
    position: relative;
    font-size: 1.15em;
    z-index: 1;
    display: block;
    text-decoration: none;
    color: black !important;
  }

  .link:hover {
    color: #fff !important;
  }

  .link:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    content: ".";
    color: transparent;
    visibility: none;
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
    background: #aab9ad;
  }

  .link::before {
    transition: all 0.5s;
  }

  .link:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }

  /* Phone Screens, Landscape and Portrait modes */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    .link {
      padding: 10px;
      font-size: 0.75em;
    }

    .link:focus {
      color: #fff !important;
    }

    .link:focus:after {
      opacity: 1;
      visibility: visible;
      height: 100%;
    }

    /* Tablet */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      .link:focus{
        color: #fff !important;
      }

      .link:focus:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
      }
    }
  }
</style>

