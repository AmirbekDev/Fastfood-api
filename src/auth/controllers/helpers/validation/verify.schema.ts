import Joi from "joi";

const VerifySchema = Joi.object({
    code: Joi.string()
        .required()
        .min(6)
        .max(6),
    verificationId: Joi.string()
       .required()
})

export default VerifySchema;