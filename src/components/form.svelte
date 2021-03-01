<script>
</script>

<svelte:head>
  <!-- UIkit CSS -->
  <link rel="stylesheet" href="/uikit-3.6.17/css/uikit.css" />

  <!-- UIkit JS -->
  <script src="/uikit-3.6.17/js/uikit.min.js"></script>
  <script src="/uikit-3.6.17/js/uikit-icons.min.js"></script>
</svelte:head>

<section>
  <!--Section Title-->
  <h1 class="title uk-heading-divider" id="contact">Contact Me</h1>
  <!--Lead Text-->
  <p class="non-lead">
    Feel free to reach out to me at any time. My contact information is below,
    and you can also contact me using the web form below.
  </p>
  <table class="uk-table uk-table-hover uk-table-justify uk-table-small">
    <thead>
      <tr>
        <th>Phone Number</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>(215)-123-1234</td>
        <td
          ><a href="mailto:ashleybregman@gmail.com" class="link-item"
            ><span uk-icon="mail" />ashleybregman[at]gmail[dot]com</a
          >
        </td>
      </tr>
    </tbody>
  </table>

  <!--Contact Form-->
  <form class="uk-form-horizontal uk-margin-large">
    <div class="uk-margin">
      <label class="uk-form-label" for="name">Full Name</label>
      <div class="uk-form-controls">
        <input
          class="uk-input"
          id="name"
          type="text"
          placeholder="First and Last name"
        />
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label" for="email">Email Address</label>
      <div class="uk-form-controls">
        <input
          class="uk-input"
          id="email"
          type="email"
          placeholder="Email Address"
        />
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label" for="phone">Phone Number</label>
      <div class="uk-form-controls">
        <input
          class="uk-input"
          id="phone"
          type="tel"
          placeholder="Phone Number"
        />
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label" for="about">Tell Me About Yourself</label>
      <div class="uk-form-controls">
        <textarea
          rows="5"
          class="uk-textarea"
          id="phone"
          type="text"
          placeholder="Tell me a little about yourself..."
        />
      </div>
    </div>
  </form>
</section>

<style>
  * {
    margin: 0%;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  section {
    z-index: 2;
    margin: 0% 2%;
  }

  .non-lead {
    max-width: 80ch;
    margin: 1em 0;
  }

  .title {
    max-width: 60ch;
    font-size: 2em;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    letter-spacing: -2px;
  }

  td {
    padding: 1.5% 1.5% !important;
  }
</style>
