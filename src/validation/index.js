import * as Yup from "yup"

// Options for Visit Schema:
// Strict doesn't coerce any values
// Abort Early bails out at the first sign of error
// Strip unknown removes unknown values, set to false because we don't expect any unknown values
const options = {
    strict: true,
    abortEarly: false,
    stripUnknown: false,
  }

const emailContentSchema = Yup.object().shape({
    fullName: Yup.string().min(1).required(),
    emailAddress: Yup.string().email().required(),
    phone: Yup.string().when(["emailAddress"], {
        is:(emailAddress) => !emailAddress,
        then: Yup.string().required(),
        otherwise: Yup.string().notRequired()
    }),
    about: Yup.string().max(1000).required(),
})

const validateEmail = async (data) => {
    let errors = []
    try {
        await emailContentSchema
            .validate(data, options);
        return [];
    } catch (err) {
        err.inner.map(item => {
            errors.push(item.message);
        })
        return errors;
    }
  }

  export {
    emailContentSchema,
    validateEmail 
  }