<script>
</script>

<a href="#offcanvas-nav" uk-toggle
  ><span class="hamburger uk-margin-small-right" uk-icon="icon: table" /></a
>

<div id="offcanvas-nav" uk-offcanvas="flip: true">
  <div class="uk-offcanvas-bar">
    <a class="close-button" href="#offcanvas-nav" uk-toggle
      ><button type="button" class="uk-close" uk-close /></a
    >
    <ul class="uk-nav uk-nav-default">
      <li>
        <a href="#about"><span class="uk-margin-small-right" />About Me</a>
      </li>
      <li>
        <a href="#specializations"
          ><span class="uk-margin-small-right" />Practice and Specializations</a
        >
      </li>
    </ul>
  </div>
</div>

<style>
  .close-button {
    padding-top: 10px;
  }

  .hamburger {
    color: black;
  }

  .uk-offcanvas-bar {
    width: 150px;
    background: #4a4a4a;
    text-align: right !important;
  }

  .uk-nav-default {
    padding-top: 20px;
    font-size: 1.25em;
    text-decoration: underline;
  }

  .uk-offcanvas-bar .uk-nav-default > li > a {
    color: rgb(255, 255, 255);
  }

  .uk-offcanvas-bar .uk-close {
    color: rgba(255, 255, 255, 1) !important;
  }

</style>
