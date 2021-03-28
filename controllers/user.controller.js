import UserSchema from '../models/user.models.js';
import { hashPassword } from "../assets/hashingpassword.js";
import { registerValidation, loginValidation } from "../assets/validation.js";

export const register = async (req, res) => {

    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExist = await UserSchema.findOne({
        email: req.body.email
    });

    if (emailExist) {
        return res.status(400).send('Email is already exist');
    }

    const user = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword(req.body.password)
    });

    try {
        await user.save();
        res.status(201).json({
            name: user.name,
            email: user.email
        });
    } catch (error) {
        res.status(400).send(error);
    }

};
