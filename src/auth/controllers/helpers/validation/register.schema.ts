import Joi from "joi";

const RegisterSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(48)
        .required(),
    surname: Joi.string()
        .min(3)
        .max(48)
        .required(),
    password: Joi.string()
        .min(8)
        .max(48)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    birthday: Joi.string()
        .required(),
    phone: Joi.string()
        .required()
})

export default RegisterSchema;