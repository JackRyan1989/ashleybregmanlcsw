<script>
  import ContactForm from './contact-form.svelte';
</script>

<div
  uk-scrollspy="target: section; cls: uk-animation-slide-left-medium; delay: 250;"
>
  <section>
    <!--Section Title-->
    <h1 class="title" id="contact">Contact Me</h1>
    <!--Lead Text-->
    <p class="non-lead">
      Feel free to reach out to me at any time. My contact information is below,
      and you can also contact me using the web form below.
    </p>
    <table class="uk-table uk-table-responsive uk-table-justify uk-table-small">
      <thead>
        <tr>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(267)-405-3334</td>
          <td
            ><a href="mailto:ashleybregman.lcsw@gmail.com" class="link-item"
              ><span class="email-link" uk-icon="mail" /> ashleybregman[dot]lcsw[at]gmail[dot]com</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <ContactForm/>
  </section>
</div>

<style>
  * {
    margin: 0%;
    padding: 0;
    vertical-align: baseline;
    background-color: #d7e5ea;
  }

  section {
    z-index: 2;
    margin: 0% 2% 2% 2%;
    padding: 2%;
  }

  .non-lead {
    max-width: 80ch;
    margin: 1em 0;
    font-size: 1.25em;
  }

  .title {
    max-width: 60ch;
    font-size: 2em;
    border-bottom: solid 4px rgba(170, 185, 173, 0.75);
    font-family: "brandon-grotesque";
  }

  th {
    font-size: 0.95em;
    color: black;
  }

  td {
    padding: 1.5% 1.5% !important;
  }

  .email-link,
  .link-item {
    color: black;
  }

</style>
