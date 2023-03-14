import Joi from "joi"

const CredentialSchema = Joi.object({
    password: Joi.string()
       .required()
       .min(8)
       .max(48),
    role: Joi.string()
        .required()
        .min(4)
        .max(16),
})

export default CredentialSchema;