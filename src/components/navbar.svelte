<script>
</script>

<nav class="nav-wrapper">
  <div class="title-wrapper">
    <div class="headshot" />
    <h1 class="name-card">Ashley Bregman <span>LCSW</span></h1>
  </div>
  <ul class="link-wrapper">
    <li class="link-item">
      <a class="link" id="first" href="#about" uk-scroll>My Practice</a>
    </li>
    <li class="link-item">
      <a class="link" id="second" href="#contact" uk-scroll>Contact Me</a>
    </li>
  </ul>
</nav>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  .nav-wrapper {
    display: grid;
    grid-template-columns: 2fr 2fr;
    place-items: center;
    text-align: center;
    color: #aaa !important;
    margin: 0% 2%;
  }

  span {
    font-size: 1ex;
    color: #aaa !important;
  }

  .title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5% 0%;
  }

  .headshot {
    background-image: url("https://picsum.photos/200");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 7rem;
    height: 7rem;
    border-radius: 100%;
  }

  .name-card {
    padding: 15px;
    font-size: 2em;
    color: #aaa !important;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    letter-spacing: -2px;
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
    z-index: 1;
    display: block;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    color: #aaa !important;
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
</style>
