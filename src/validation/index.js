import * as Yup from "yup"

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
            .validate(data);
        return [];
    } catch (err) {
        console.log(err)
        errors.push(err.message)
        return errors;
    }
  }

  export {
    emailContentSchema,
    validateEmail 
  }