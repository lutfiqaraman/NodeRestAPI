const Joi = require('joi');

const registerValidation = data => {
    const registrationSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return registrationSchema.validate(data);
}

const loginValidation = data => {
    const loginSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return loginSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation    = loginValidation;
