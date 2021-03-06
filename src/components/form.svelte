<script>
  import { validateEmail } from '../validation/index'
  import { onMount } from "svelte";
  let errors;
  let cleanedMessage;
  let success;
  const nameErrorMessage = "Please enter your full name.";
  const emailErrorMessage = "Please enter your email address.";
  const phoneErrorMessage = "Please enter your phone number.";
  const aboutErrorMessage = "Please tell me why you are contacting me.";
  const fullNameErrorReg = new RegExp(/fullName/gmi);
  const emailErrorReg = new RegExp(/email/gmi);
  const phoneErrorReg = new RegExp(/phone/gmi);
  const aboutErrorReg = new RegExp(/about/gmi);

  let emailContent = {
    fullName : "",
    emailAddress : "",
    phone : "",
    about : "",
  }

  function validateAbout(input) {
    const reg = new RegExp(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+(?<!\/\s\*)>/);
    const found = reg.test(input);
    return found;
  }

  export let handleChange;
  handleChange = (event)=> {
    emailContent[event.target.id] = event.target.value;
  };

  export let handleClick;
  handleClick = async () => {
      let invalid = validateAbout(emailContent.about);
      if (invalid) {
        errors = "Invalid Text Entered";
        return errors;
      }
      try {
        let validationErrors = await validateEmail(
          emailContent
        )
        if (validationErrors.length) {
          errors = errorHandler(validationErrors[0]);
        } else {
          errors = "";
          success = true;
        }
      } catch (err) {
        errors = err;
      }
    };

  export let handleClear;
  handleClear = (event) => {
    errors = "";
    for (const property in emailContent) {
      emailContent[property] = '';
    }
  }

  function errorHandler(error) {
    if (fullNameErrorReg.test(error)) {
      cleanedMessage = nameErrorMessage;
    } else if (emailErrorReg.test(error)) {
      cleanedMessage = emailErrorMessage;
    } else if (phoneErrorReg.test(error)) {
      cleanedMessage = phoneErrorMessage;
    } else if (aboutErrorReg.test(error)) {
      cleanedMessage = aboutErrorMessage;
    }
    return cleanedMessage;
  }

  onMount(() => {
    console.log("form mounted");
  });
</script>


<div
  uk-scrollspy="target: section; cls: uk-animation-slide-right-medium; delay: 250;"
>
  <section>
    <!--Section Title-->
    <h1 class="title" id="contact">Contact Me</h1>
    <!--Lead Text-->
    <p class="non-lead">
      Feel free to reach out to me at any time. My contact information is below,
      and you can also contact me using the web form below.
    </p>
    <table class="uk-table uk-table-justify uk-table-small">
      <thead>
        <tr>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row-hover">
          <td>(215)-123-1234</td>
          <td
            ><a href="mailto:ashleybregman@gmail.com" class="link-item"
              ><span class="email-link" uk-icon="mail" /> ashleybregman[at]gmail[dot]com</a
            >
          </td>
        </tr>
      </tbody>
    </table>

    <!--Contact Form-->
    <form class="uk-form-horizontal uk-margin-medium">
      <div class="uk-margin">
        <label class="uk-form-label" for="name">Full Name</label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            id="fullName"
            type="text"
            placeholder="First and Last name"
            value={emailContent.fullName}
            on:input={handleChange}
          />
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="email">Email Address</label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            id="emailAddress"
            type="email"
            placeholder="Email"
            value={emailContent.emailAddress}
            on:input={handleChange}
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
            value={emailContent.phone}
            on:input={handleChange}
          />
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="about">Tell Me About Yourself</label>
        <div class="uk-form-controls">
          <textarea
            rows="5"
            class="uk-textarea"
            id="about"
            type="text"
            placeholder="Tell me about yourself..."
            value={emailContent.about}
            on:input={handleChange}
          />
        </div>
      </div>
    </form>
    <button on:click={handleClick} class="uk-button uk-button-primary"
      >Submit</button
    >
    <button on:click={handleClear} class="uk-button uk-button-danger"
      >Cancel</button
    >
    {#if errors}
    <p class:errors>{errors}</p>
    {:else if success}
    <p class:success>Much Success!</p>
    {/if}
  </section>
</div>

<style>
  * {
    margin: 0%;
    padding: 0;
    vertical-align: baseline;
  }

  section {
    z-index: 2;
    margin: 7% 2% 2% 2%;
  }

  .non-lead {
    max-width: 80ch;
    margin: 1em 0;
  }

  .title {
    max-width: 60ch;
    font-size: 2em;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    letter-spacing: -2px;
    border-bottom: solid 4px rgba(170, 185, 173, 0.75);
  }

  td {
    padding: 1.5% 1.5% !important;
  }

  .row-hover {
    background-color: #fff;
  }

  .row-hover:hover {
    color: #fff;
    background-color: #aab9ad;
    transition-property: background-color;
    transition-duration: 0.25s;
  }

  .row-hover:hover .email-link,
  .row-hover:hover .link-item {
    color: #fff;
  }

  .email-link,
  .link-item {
    color: black;
  }

  .errors {
    background-color: rgba(220, 0, 0, 0.4)
  }

  .success {
    background-color: rgba(0, 255, 0, 0.4)
  }

</style>
