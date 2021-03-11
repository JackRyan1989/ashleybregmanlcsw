<script>
  import { validateEmail } from "../validation/index";
  let errors;
  let cleanedMessage;
  const nameErrorMessage = "Please enter your full name.";
  const emailErrorMessage = "Please enter your email address.";
  const phoneErrorMessage = "Please enter your phone number.";
  const aboutErrorMessage = "Please tell me why you are contacting me.";
  const fullNameErrorReg = new RegExp(/fullName/im);
  const emailErrorReg = new RegExp(/email/im);
  const phoneErrorReg = new RegExp(/phone/im);
  const aboutErrorReg = new RegExp(/about/im);

  let emailContent = {
    fullName: "",
    emailAddress: "",
    phone: "",
    about: "",
    botfield: "botfield",
  };

  const validateAbout = (input) => {
    const reg = new RegExp(
      /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+(?<!\/\s\*)>/
    );
    const found = reg.test(input);
    return found;
  };

  export let handleChange;
  handleChange = (event) => {
    emailContent[event.target.id] = event.target.value;
  };

  export let handleSubmit;
  handleSubmit = async () => {
    let invalid = validateAbout(emailContent.about);
    if (invalid) {
      errors = "Please remove any special characters from your submission.";
      displayModal(errors);
    } else {
      try {
        let validationErrors = await validateEmail(emailContent);
        if (validationErrors.length) {
          errors = errorHandler(validationErrors);
          displayModal(errors);
        } else {
          errors = "";
          submitForm(emailContent);
        }
      } catch (err) {
        errors = err;
        displayModal(errors);
      }
    }

    function submitForm(formData) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then((res) => {
          console.log(res);
          displayModal("Request submitted successfully! Thank you.");
          handleClear();
        })
        .catch((error) => displayModal(error));
    }
  };

  export let handleClear;
  handleClear = () => {
    errors = "";
    for (const property in emailContent) {
      emailContent[property] = "";
    }
  };

  const errorHandler = (error) => {
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
  };

  const displayModal = (message) => {
    UIkit.modal.alert(message);
  };
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
    <table class="uk-table uk-table-responsive uk-table-justify uk-table-small">
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
    <form
      name="contact-form"
      id="contact"
      data-netlify="true"
      netlify-honeypot="botfield"
      class="uk-form-horizontal uk-margin-medium"
    >
      <div class="uk-margin">
        <label class="uk-form-label" for="name">Full Name</label>
        <div class="hidden">
          <label
            >Don’t fill this out if you’re human: <input
              name="botfield"
            /></label
          >
        </div>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            class:errors
            id="fullName"
            name="fullName"
            type="text"
            placeholder="First and Last name"
            value={emailContent.fullName}
            on:input={handleChange}
            aria-required="true"
            required="true"
          />
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="email">Email Address</label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            class:errors
            id="emailAddress"
            name="emailAddress"
            type="email"
            placeholder="Email"
            value={emailContent.emailAddress}
            on:input={handleChange}
            aria-required="true"
            required="true"
          />
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="phone">Phone Number</label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={emailContent.phone}
            on:input={handleChange}
            aria-required="false"
            required="false"
          />
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="about">Tell Me About Yourself</label>
        <div class="uk-form-controls">
          <textarea
            rows="5"
            class="uk-textarea"
            class:errors
            id="about"
            name="about"
            type="text"
            placeholder="Tell me about yourself..."
            value={emailContent.about}
            on:input={handleChange}
            aria-required="true"
            required="true"
          />
        </div>
      </div>
    </form>
    <div class="button-wrapper">
      <button
        form="contact"
        type="button"
        on:click={handleSubmit}
        class="uk-button uk-button-primary">Submit</button
      >
      <button on:click={handleClear} class="uk-button uk-button-danger"
        >Cancel</button
      >
    </div>
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
    margin: 7% 2% 2% 2%;
  }

  form {
    max-width: 80ch !important;
  }

  *:required {
    box-shadow: none;
  }

  input:not(:focus):not(:placeholder-shown):invalid,
  textarea:not(:focus):not(:placeholder-shown):invalid {
    border: solid 1px lightpink !important;
  }

  input:not(:focus):not(:placeholder-shown):valid,
  textarea:not(:focus):not(:placeholder-shown):valid {
    border: solid 1px rgba(170, 185, 173, 0.75) !important;
  }

  div.hidden {
    display: none;
  }

  label {
    font-size: 1.1em !important;
  }

  button {
    padding: 10px;
  }

  .button-wrapper {
    padding: 1% 0%;
  }

  .uk-button-danger {
    margin-left: 1%;
  }

  .non-lead {
    max-width: 80ch;
    margin: 1em 0;
  }

  .title {
    max-width: 60ch;
    font-size: 2em;
    letter-spacing: -2px;
    border-bottom: solid 4px rgba(170, 185, 173, 0.75);
    font-family: "brandon-grotesque";
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
    border: solid 1px lightpink !important;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  }
</style>
