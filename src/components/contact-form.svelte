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
  handleSubmit = async (e) => {
    e.preventDefault();
    let invalid = validateAbout(emailContent.about);
    if (invalid) {
      errors = "Please remove any special characters from the text about yourself.";
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
        body: encode(formData),
      })
        .then((res) => {
          console.log(res.status);
          if (res.status === 404) {
            displayModal("Location not found")
          } else if (res.status === 200) {
            displayModal("Request submitted successfully! Thank you.");
            handleClear();
          }
        })
        .catch((error) => displayModal(error));
    }
  };

  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

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

<!--Contact Form-->
    <form
      name="contact-form"
      id="contact-form"
      data-netlify="true"
      netlify-honeypot="botfield"
      class="uk-form-horizontal uk-margin-medium"
      method="POST"
      action="/thankyou/"
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
      <div class="button-wrapper">
        <button
          form="contact-form"
          type="submit"
          class="uk-button uk-button-primary">Submit</button
        >
      </div>
    </form>

<style>
  * {
    margin: 0%;
    padding: 0;
    vertical-align: baseline;
    background-color: #d7e5ea;
  }

  form {
    max-width: 80ch !important;
  }

  *:required {
    box-shadow: none;
  }

  input,
  textarea {
    background-color: #fff !important;
    border: solid 2px lightgray !important;
  }

  input:not(:focus):not(:placeholder-shown):invalid,
  textarea:not(:focus):not(:placeholder-shown):invalid {
    border: solid 2px lightpink !important;
  }

  input:not(:focus):not(:placeholder-shown):valid,
  textarea:not(:focus):not(:placeholder-shown):valid {
    border: solid 2px rgba(170, 185, 173, 0.75) !important;
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

  .errors {
    border: solid 1px lightpink !important;
  }

  .uk-button-primary {
    background-color: #0F7AE5 !important;
  }

</style>

