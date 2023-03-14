import Joi from "joi"

const UserSchema = Joi.object({
    email: Joi.string()
        .required()
        .email()
        .max(128),
    name: Joi.string()
       .required()
       .min(3)
       .max(48),
    surname: Joi.string()
       .required()
       .min(3)
       .max(48),
    birthday: Joi.string()
       .required()
       .min(7)
       .max(16),
    phone: Joi.string()
       .required()
       .min(8)
       .max(36),
})

export default UserSchema;