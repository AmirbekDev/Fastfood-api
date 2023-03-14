import Joi from "joi"

const LoginSchema = Joi.object({
    email: Joi.string()
        .required()
        .email(),
    password: Joi.string()
       .required()
       .min(8)
})

export default LoginSchema;